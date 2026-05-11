import { useEffect, useMemo, useRef, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html as htmlLang } from "@codemirror/lang-html";
import { css as cssLang } from "@codemirror/lang-css";
import { javascript as jsLang } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Monitor, Tablet, Smartphone, RotateCcw, Trash2, ExternalLink, ArrowLeft } from "lucide-react";
import { useI18n } from "@/hooks/useI18n";

const DEFAULT_HTML = `<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello, CodeMastery!</h1>
    <p>Edit the code on the left to see live changes.</p>
    <button id="btn">Click me</button>
  </body>
</html>`;

const DEFAULT_CSS = `body {
  font-family: system-ui, sans-serif;
  background: #0F1629;
  color: #E2E8F0;
  padding: 2rem;
}
h1 { color: #00D4FF; }
button {
  background: #00D4FF;
  color: #0A0E1A;
  border: 0;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}`;

const DEFAULT_JS = `document.getElementById('btn')?.addEventListener('click', () => {
  console.log('Hello from CodeMastery!');
  alert('Button clicked!');
});`;

function buildSrcDoc(html: string, css: string, js: string) {
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
      .replace("</body>", `<script>${js}<\/script></body>`);
  }
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>${css}</style>${consoleShim}</head><body>${html}<script>${js}<\/script></body></html>`;
}

interface Props {
  initialHtml?: string;
  initialCss?: string;
  initialJs?: string;
}

export function FullCompiler({ initialHtml, initialCss, initialJs }: Props) {
  const navigate = useNavigate();
  const { t } = useI18n();
  const [html, setHtml] = useState(initialHtml ?? DEFAULT_HTML);
  const [css, setCss] = useState(initialCss ?? DEFAULT_CSS);
  const [js, setJs] = useState(initialJs ?? DEFAULT_JS);
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [logs, setLogs] = useState<{ level: string; text: string }[]>([]);
  const [debounced, setDebounced] = useState({ html, css, js });
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const t = setTimeout(() => { setDebounced({ html, css, js }); setLogs([]); }, 300);
    return () => clearTimeout(t);
  }, [html, css, js]);

  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      if (e.data?.__cm_console) setLogs((l) => [...l, { level: e.data.level, text: e.data.args.join(" ") }].slice(-50));
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const srcDoc = useMemo(() => buildSrcDoc(debounced.html, debounced.css, debounced.js), [debounced]);
  const widthClass = device === "mobile" ? "max-w-[375px]" : device === "tablet" ? "max-w-[768px]" : "max-w-full";

  const reset = () => { setHtml(DEFAULT_HTML); setCss(DEFAULT_CSS); setJs(DEFAULT_JS); };
  const openNewTab = () => {
    const blob = new Blob([srcDoc], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  };

  return (
    <div className="h-screen flex flex-col bg-background text-foreground">
      <header className="h-12 border-b border-border flex items-center justify-between px-4 bg-muted/30">
        <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate(-1)} 
              className="h-8 w-8 p-0 hover:bg-foreground/5"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="w-px h-4 bg-border mx-2" />
            <span className="text-[10px] text-foreground/40 font-black tracking-[0.2em] uppercase">COMPILER_CORE_v3.9</span>
        </div>
        <div className="flex items-center gap-1">
          <Button size="sm" variant={device === "desktop" ? "secondary" : "ghost"} onClick={() => setDevice("desktop")} className="h-8 px-2"><Monitor className="h-4 w-4" /></Button>
          <Button size="sm" variant={device === "tablet" ? "secondary" : "ghost"} onClick={() => setDevice("tablet")} className="h-8 px-2"><Tablet className="h-4 w-4" /></Button>
          <Button size="sm" variant={device === "mobile" ? "secondary" : "ghost"} onClick={() => setDevice("mobile")} className="h-8 px-2"><Smartphone className="h-4 w-4" /></Button>
          <div className="w-px h-5 bg-border mx-2" />
          <Button size="sm" variant="ghost" onClick={openNewTab} className="h-8 font-black text-[9px] tracking-widest uppercase"><ExternalLink className="h-3.5 w-3.5 mr-1.5" /> {t("common.preview")}</Button>
          <Button size="sm" variant="ghost" onClick={reset} className="h-8 font-black text-[9px] tracking-widest uppercase"><RotateCcw className="h-3.5 w-3.5 mr-1.5" /> {t("compiler.reset")}</Button>
        </div>
      </header>
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <div className="flex flex-col border-r border-border overflow-hidden">
          <Panel label="HTML" color="bg-html">
            <CodeMirror value={html} height="100%" theme={oneDark} extensions={[htmlLang()]} onChange={setHtml} className="h-full" />
          </Panel>
          <Panel label="CSS" color="bg-css">
            <CodeMirror value={css} height="100%" theme={oneDark} extensions={[cssLang()]} onChange={setCss} className="h-full" />
          </Panel>
          <Panel label="JavaScript" color="bg-js">
            <CodeMirror value={js} height="100%" theme={oneDark} extensions={[jsLang()]} onChange={setJs} className="h-full" />
          </Panel>
        </div>
        <div className="flex flex-col overflow-hidden">
          <div className="flex-1 bg-white p-2 overflow-auto">
            <iframe ref={iframeRef} title="preview" srcDoc={srcDoc} className={`w-full h-full mx-auto bg-white border-0 ${widthClass}`} sandbox="allow-scripts allow-same-origin" />
          </div>
          <div className="h-32 border-t border-border bg-muted/20 overflow-y-auto scrollbar-thin">
            <div className="px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] font-black text-foreground/40 border-b border-border flex items-center justify-between">
              <span>{t("compiler.console")}</span>
              <button onClick={() => setLogs([])} className="hover:text-primary transition-colors"><Trash2 className="h-3 w-3" /></button>
            </div>
            <div className="px-3 py-2 font-mono text-[11px] space-y-1">
              {logs.length === 0 ? <span className="text-foreground/20 italic">Awaiting command execution...</span> : logs.map((l, i) => (
                <div key={i} className={l.level === "error" ? "text-crimson" : l.level === "warn" ? "text-warning-amber" : "text-foreground/80"}>
                  <span className="opacity-30 tracking-tighter">[{new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}] › </span>{l.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Panel({ label, color, children }: { label: string; color: string; children: React.ReactNode }) {
  return (
    <div className="flex-1 flex flex-col min-h-0 border-b border-border last:border-b-0">
      <div className={`h-8 ${color} text-white px-4 flex items-center text-[10px] font-black tracking-[0.2em] uppercase`}>
        {label}
      </div>
      <div className="flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  );
}
