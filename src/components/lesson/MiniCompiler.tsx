import { useEffect, useMemo, useRef, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html as htmlLang } from "@codemirror/lang-html";
import { css as cssLang } from "@codemirror/lang-css";
import { javascript as jsLang } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { Play, RotateCcw, Maximize2, Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";
import type { CodeSnippet } from "@/lib/curriculum/types";

interface Props {
  initial: CodeSnippet;
  height?: number;
  autoRun?: boolean;
}

function buildSrcDoc(snippet: CodeSnippet) {
  const html = snippet.html ?? "";
  const css = snippet.css ?? "";
  const js = snippet.javascript ?? "";
  const consoleShim = `
    <script>
      (function() {
        const send = (level, args) => {
          parent.postMessage({ __cm_console: true, level, args: args.map(a => {
            try { return typeof a === 'object' ? JSON.stringify(a) : String(a); } catch(e) { return String(a); }
          })}, '*');
        };
        ['log','warn','error','info'].forEach(k => {
          const orig = console[k];
          console[k] = function(...a){ send(k, a); orig.apply(console, a); };
        });
        window.addEventListener('error', e => send('error', [e.message]));
      })();
    </script>`;
  if (html.toLowerCase().includes("<html")) {
    return html
      .replace("</head>", `<style>${css}</style>${consoleShim}</head>`)
      .replace("</body>", `<script>${js}</script></body>`);
  }
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>${css}</style>${consoleShim}</head><body>${html}<script>${js}</script></body></html>`;
}

export function MiniCompiler({ initial, height = 200, autoRun = true }: Props) {
  const [snippet, setSnippet] = useState<CodeSnippet>(initial);
  const [logs, setLogs] = useState<{ level: string; text: string }[]>([]);
  const [tab, setTab] = useState<"html" | "css" | "javascript">(
    initial.html ? "html" : initial.css ? "css" : "javascript",
  );
  const [running, setRunning] = useState(autoRun);
  const [copied, setCopied] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const tabs: ("html" | "css" | "javascript")[] = useMemo(() => {
    const t: ("html" | "css" | "javascript")[] = [];
    if (initial.html !== undefined) t.push("html");
    if (initial.css !== undefined) t.push("css");
    if (initial.javascript !== undefined) t.push("javascript");
    return t.length ? t : ["html"];
  }, [initial]);

  const srcDoc = useMemo(() => buildSrcDoc(snippet), [snippet]);

  useEffect(() => {
    if (!autoRun) return;
    const t = setTimeout(() => setRunning(true), 300);
    return () => clearTimeout(t);
  }, [snippet, autoRun]);

  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      if (e.data?.__cm_console) {
        setLogs((l) => [...l, { level: e.data.level, text: e.data.args.join(" ") }].slice(-20));
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const reset = () => { setSnippet(initial); setLogs([]); };
  const run = () => { setLogs([]); setRunning(true); };
  const copy = async () => {
    const text = snippet[tab] ?? "";
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const langExt = tab === "html" ? htmlLang() : tab === "css" ? cssLang() : jsLang();
  const fullCompilerHref = `/compiler?h=${encodeURIComponent(snippet.html ?? "")}&c=${encodeURIComponent(snippet.css ?? "")}&j=${encodeURIComponent(snippet.javascript ?? "")}`;

  return (
    <div className="my-4 rounded-xl overflow-hidden border border-border bg-card">
      <div className="flex items-center justify-between bg-muted/30 px-3 py-2 border-b border-border">
        <div className="flex gap-1">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-2.5 py-1 text-xs font-mono uppercase rounded-md transition-colors ${
                tab === t ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex gap-1">
          <Button size="sm" variant="ghost" onClick={copy} className="h-7 px-2">
            {copied ? <Check className="h-3.5 w-3.5 text-success" /> : <Copy className="h-3.5 w-3.5" />}
          </Button>
          <Button size="sm" variant="ghost" onClick={reset} className="h-7 px-2"><RotateCcw className="h-3.5 w-3.5" /></Button>
          <Button size="sm" variant="ghost" onClick={run} className="h-7 px-2"><Play className="h-3.5 w-3.5" /></Button>
          <Button size="sm" variant="ghost" asChild className="h-7 px-2">
            <Link to={fullCompilerHref} target="_blank"><Maximize2 className="h-3.5 w-3.5" /></Link>
          </Button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-0">
        <div className="border-r border-border" style={{ height }}>
          <CodeMirror
            value={snippet[tab] ?? ""}
            height={`${height}px`}
            theme={oneDark}
            extensions={[langExt]}
            onChange={(v) => setSnippet((s) => ({ ...s, [tab]: v }))}
            basicSetup={{ lineNumbers: true, foldGutter: false, highlightActiveLine: false }}
          />
        </div>
        <div className="bg-white" style={{ height }}>
          {running && (
            <iframe ref={iframeRef} title="preview" srcDoc={srcDoc} className="w-full h-full border-0" sandbox="allow-scripts" />
          )}
        </div>
      </div>
      {logs.length > 0 && (
        <div className="bg-background/50 border-t border-border px-3 py-2 text-xs font-mono max-h-32 overflow-y-auto scrollbar-thin">
          {logs.map((l, i) => (
            <div key={i} className={l.level === "error" ? "text-destructive" : l.level === "warn" ? "text-warning" : "text-muted-foreground"}>
              <span className="opacity-50">› </span>{l.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
