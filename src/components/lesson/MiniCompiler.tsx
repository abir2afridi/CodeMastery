import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "next-themes";
import CodeMirror from "@uiw/react-codemirror";
import { html as htmlLang } from "@codemirror/lang-html";
import { css as cssLang } from "@codemirror/lang-css";
import { javascript as jsLang } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";
import { EditorView } from "@codemirror/view";
import { CyberpunkButton } from "@/components/ui/cyberpunk/Button";
import { Play, RotateCcw, Maximize2, Copy, Check, Terminal, Cpu, Layout, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import type { CodeSnippet } from "@/lib/curriculum/types";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { PythonMiniCompiler } from "./PythonMiniCompiler";

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

export function MiniCompiler({ initial, height = 240, autoRun = true }: Props) {
  const [snippet, setSnippet] = useState<CodeSnippet>(initial);
  const [logs, setLogs] = useState<{ level: string; text: string; time: string }[]>([]);
  const [tab, setTab] = useState<"html" | "css" | "javascript" | "python">(
    initial.html ? "html" : initial.css ? "css" : initial.javascript ? "javascript" : "python",
  );
  const [running, setRunning] = useState(autoRun);
  const [isCompiling, setIsCompiling] = useState(false);
  const [copied, setCopied] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const tabs: ("html" | "css" | "javascript" | "python")[] = useMemo(() => {
    const t: ("html" | "css" | "javascript" | "python")[] = [];
    if (initial.html !== undefined) t.push("html");
    if (initial.css !== undefined) t.push("css");
    if (initial.javascript !== undefined) t.push("javascript");
    if (initial.python !== undefined) t.push("python");
    return t.length ? t : ["html"];
  }, [initial]);

  // If it's Python-only, use PythonMiniCompiler
  if (tabs.length === 1 && tabs[0] === "python") {
    return <PythonMiniCompiler initialCode={initial.python || ""} height={height} autoRun={autoRun} />;
  }

  const srcDoc = useMemo(() => buildSrcDoc(snippet), [snippet]);

  useEffect(() => {
    if (!autoRun) return;
    const t = setTimeout(() => setRunning(true), 300);
    return () => clearTimeout(t);
  }, [snippet, autoRun]);

  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      if (e.data?.__cm_console) {
        const time = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        setLogs((l) => [...l, { level: e.data.level, text: e.data.args.join(" "), time }].slice(-20));
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const reset = () => { 
    setSnippet(initial); 
    setLogs([]); 
  };

  const run = () => { 
    setLogs([]); 
    setIsCompiling(true);
    setRunning(false);
    setTimeout(() => {
      setRunning(true);
      setIsCompiling(false);
    }, 400);
  };

  const copy = async () => {
    const text = snippet[tab] ?? "";
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const { theme } = useTheme();
  const langExt = tab === "html" ? htmlLang() : tab === "css" ? cssLang() : tab === "python" ? python() : jsLang();
  const fullCompilerHref = tab === "python" 
    ? `/compiler?track=python&code=${encodeURIComponent(snippet.python ?? "")}`
    : `/compiler?h=${encodeURIComponent(snippet.html ?? "")}&c=${encodeURIComponent(snippet.css ?? "")}&j=${encodeURIComponent(snippet.javascript ?? "")}`;

  return (
    <div className="my-10 relative border border-border bg-background group overflow-hidden shadow-2xl">
      {/* Decorative Hardware Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute -left-1 top-10 w-2 h-20 bg-primary/10 border-r border-primary/20" />
      
      {/* Header Bar */}
      <div className="flex items-center justify-between bg-surface border-b border-border px-4 py-2 relative z-20 backdrop-blur-md">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Cpu className="h-3 w-3 text-primary animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase">CORE_LINK</span>
          </div>
          <div className="flex gap-1 bg-black/40 p-0.5 rounded-sm border border-border/20">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={cn(
                  "px-3 py-1 text-[9px] font-black uppercase transition-all duration-300 relative",
                  tab === t 
                    ? "text-primary bg-primary/10" 
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                )}
              >
                {t}
                {tab === t && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-black/40 border border-border/20 rounded-sm">
            <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse", running ? "bg-green-500" : "bg-zinc-700")} />
            <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest">
              {running ? "SYSTEM_ACTIVE" : "IDLE_STATE"}
            </span>
          </div>
          <div className="h-4 w-px bg-border/20 mx-1" />
          <div className="flex gap-1.5">
            <CyberpunkButton size="sm" variant="outline" onClick={copy} className="h-7 w-7 p-0 flex items-center justify-center">
              {copied ? <Check className="h-3 w-3 text-primary" /> : <Copy className="h-3 w-3" />}
            </CyberpunkButton>
            <CyberpunkButton size="sm" variant="outline" onClick={reset} className="h-7 w-7 p-0 flex items-center justify-center">
              <RotateCcw className="h-3 w-3" />
            </CyberpunkButton>
            <CyberpunkButton size="sm" variant="neon" onClick={run} className="h-7 px-4 min-w-0 font-black italic">
              <Play className="h-3 w-3 mr-1 fill-black" /> RUN
            </CyberpunkButton>
            <CyberpunkButton size="sm" variant="outline" asChild className="h-7 w-7 p-0 flex items-center justify-center">
              <Link to={fullCompilerHref} target="_blank">
                <Maximize2 className="h-3 w-3" />
              </Link>
            </CyberpunkButton>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-0 relative z-10 border-b border-border/40">
        {/* Editor Pane */}
        <div className="relative border-r border-border/40 group/editor">
          <div className="absolute top-0 right-0 p-2 z-20 pointer-events-none opacity-0 group-hover/editor:opacity-100 transition-opacity">
            <Terminal className="h-3 w-3 text-zinc-600" />
          </div>
          <div style={{ height }}>
            <CodeMirror
              value={snippet[tab] ?? ""}
              height={`${height}px`}
              theme={theme === "dark" ? oneDark : "light"}
              extensions={[langExt, EditorView.lineWrapping]}
              onChange={(v) => setSnippet((s) => ({ ...s, [tab]: v }))}
              basicSetup={{ 
                lineNumbers: true, 
                foldGutter: false, 
                highlightActiveLine: false,
                syntaxHighlighting: true,
                bracketMatching: true,
              }}
              className="text-[13px] font-mono selection:bg-primary/30"
            />
          </div>
        </div>

        {/* Preview Pane */}
        <div className="bg-white relative overflow-hidden group/preview" style={{ height }}>
          {/* Preview Metadata Overlay */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
            <div className="absolute top-2 left-2 flex items-center gap-2">
              <div className="px-1.5 py-0.5 bg-black/80 border border-white/10">
                <span className="text-[8px] font-black text-white/40 tracking-[0.2em] uppercase">VIEWPORT_RENDER</span>
              </div>
            </div>
            {/* Corner Markers */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-black/5" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-black/5" />
          </div>

          <AnimatePresence mode="wait">
            {isCompiling ? (
              <motion.div 
                key="compiling"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 bg-zinc-950 flex flex-col items-center justify-center gap-4"
              >
                <Zap className="h-8 w-8 text-primary animate-bounce" />
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-black text-primary tracking-[0.3em] uppercase">LINKING_RESOURCES</span>
                  <div className="w-32 h-1 bg-zinc-900 mt-2 overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ duration: 0.4, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </div>
              </motion.div>
            ) : running ? (
              <motion.iframe 
                key="preview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                ref={iframeRef} 
                title="preview" 
                srcDoc={srcDoc} 
                className="w-full h-full border-0" 
                sandbox="allow-scripts" 
              />
            ) : (
              <div key="idle" className="w-full h-full bg-zinc-100 flex items-center justify-center opacity-50">
                <Layout className="h-12 w-12 text-zinc-300" />
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Terminal Footer */}
      <div className="bg-surface/50 border-t border-border min-h-[40px] max-h-[160px] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-4 py-1.5 border-b border-border/20 bg-foreground/5">
          <div className="flex items-center gap-2">
            <Terminal className="h-3 w-3 text-primary" />
            <span className="text-[9px] font-black text-primary tracking-[0.2em] uppercase">SYSTEM_LOGS</span>
          </div>
          <span className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest">MTU_1500_PACKET_STABLE</span>
        </div>
        
        <div className="p-3 overflow-y-auto scrollbar-none flex-1 space-y-1 font-mono text-[11px]">
          {logs.length === 0 && (
            <div className="text-zinc-700 italic flex items-center gap-2">
              <span className="text-primary/20">›</span> Awaiting system execution...
            </div>
          )}
          {logs.map((l, i) => (
            <motion.div 
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              key={i} 
              className={cn(
                "flex gap-3 items-start group/log",
                l.level === "error" ? "text-red-400 bg-red-400/5" : l.level === "warn" ? "text-yellow-400 bg-yellow-400/5" : "text-zinc-400"
              )}
            >
              <span className="text-[9px] opacity-30 group-hover/log:opacity-100 transition-opacity pt-0.5">[{l.time}]</span>
              <span className="text-primary font-black">›</span>
              <span className="break-all leading-tight">{l.text}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,2px_100%]" />
    </div>
  );
}


