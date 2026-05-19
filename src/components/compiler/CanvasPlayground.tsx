import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html as htmlLang } from "@codemirror/lang-html";
import { css as cssLang } from "@codemirror/lang-css";
import { javascript as jsLang } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  RotateCcw,
  Eraser,
  Download,
  Maximize2,
  Minimize2,
  Grid,
  Crosshair,
  AlertTriangle,
  ToggleLeft,
  ToggleRight,
  Eye,
  EyeOff,
  GripVertical,
  MousePointer2,
  ArrowLeft,
  Monitor,
  Terminal,
  Trash2,
  Video,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useI18n } from "@/hooks/useI18n";

const BRAND = "#FF5722";

const DEFAULT_HTML = `<div id="canvas-container"></div>`;

const DEFAULT_CSS = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #0F1629;
}
#canvas-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
canvas {
  display: block;
  background: #1a1a2e;
  border-radius: 8px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.4);
}`;

const DEFAULT_JS = `// Available globals: canvas, ctx, width, height, dpr
// Canvas auto-resizes when panel resizes.
// Write your drawing code below:

const gradient = ctx.createRadialGradient(
  width / 2, height / 2, 20,
  width / 2, height / 2, 120
);
gradient.addColorStop(0, '#FF5722');
gradient.addColorStop(0.5, '#FF8A65');
gradient.addColorStop(1, '#BF360C');
ctx.fillStyle = gradient;
ctx.beginPath();
ctx.arc(width / 2, height / 2, 120, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = '#ffffff';
ctx.font = 'bold 24px system-ui, sans-serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('Canvas Playground', width / 2, height / 2 + 160);

ctx.font = '14px system-ui, sans-serif';
ctx.fillStyle = 'rgba(255,255,255,0.5)';
ctx.fillText('Edit the code to start drawing', width / 2, height / 2 + 190);

// Tips:
// - Use canvas.width / canvas.height for actual pixel dimensions
// - ctx.save() / ctx.restore() for state management
// - requestAnimationFrame for animations (use __frameCount)`;

// ─────────────────────────────────────────────
// Iframe document builder
// ─────────────────────────────────────────────
function buildSrcDoc(html: string, css: string, userJs: string) {
  const consoleShim = `
    (function() {
      var send = function(level, args) {
        parent.postMessage({ __cm_console: true, level: level, args: args.map(function(a) {
          try { return typeof a === 'object' ? JSON.stringify(a) : String(a); } catch(e) { return String(a); }
        })}, '*');
      };
      ['log','warn','error','info'].forEach(function(k) {
        var orig = console[k];
        console[k] = function() { send(k, Array.prototype.slice.call(arguments)); orig.apply(console, arguments); };
      });
    })();
  `;

  const canvasSetup = `
var container = document.getElementById('canvas-container') || document.body;
var canvas = document.getElementById('myCanvas');
if (!canvas) {
  canvas = document.createElement('canvas');
  canvas.id = 'myCanvas';
  container.appendChild(canvas);
}
var ctx = canvas.getContext('2d');
var __frameCount = 0;

function resizeCanvas() {
  var dpr = window.devicePixelRatio || 1;
  var rect = container.getBoundingClientRect();
  var w = rect.width;
  var h = rect.height;
  canvas.width = Math.floor(w * dpr);
  canvas.height = Math.floor(h * dpr);
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
  ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  return { width: w, height: h, dpr: dpr };
}

var ro = new ResizeObserver(function() {
  var d = resizeCanvas();
  try { runUserCode(d); } catch(e) { reportError(e); }
});
ro.observe(container);
var dims = resizeCanvas();
var width = dims.width;
var height = dims.height;
var dpr = dims.dpr;

function reportError(err) {
  parent.postMessage({ __canvas_error: (err && err.message) || String(err) }, '*');
}

window.addEventListener('message', function(e) {
  if (!e.data) return;
  if (e.data.__canvas_download) {
    try {
      var dataUrl = canvas.toDataURL('image/png');
      e.source.postMessage({ __canvas_data: dataUrl }, '*');
    } catch(err) { reportError(err); }
  }
  if (e.data.__canvas_clear) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  if (e.data.__canvas_run) {
    var d2 = resizeCanvas();
    width = d2.width;
    height = d2.height;
    try { runUserCode(d2); } catch(err) { reportError(err); }
  }
  // TODO: Handle __canvas_record_start / __canvas_record_stop for frame recording
});

window.onerror = function(msg, source, line, col, err) {
  parent.postMessage({ __canvas_error: msg + (line ? ' (line ' + line + ')' : '') }, '*');
  return true;
};

function runUserCode(d) {
  width = d.width;
  height = d.height;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  "use strict";
` + userJs + `
}

try {
  runUserCode(dims);
} catch(err) {
  reportError(err);
}
`;

  if (html.toLowerCase().includes("<html")) {
    return html
      .replace("</head>", `<style>${css}</style>${consoleShim}</head>`)
      .replace("</body>", `<script>${canvasSetup}<\/script></body>`);
  }
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>${css}</style>
  ${consoleShim}
</head>
<body>
  ${html}
  <script>${canvasSetup}<\/script>
</body>
</html>`;
}

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
interface CanvasPlaygroundProps {
  initialHtml?: string;
  initialCss?: string;
  initialJs?: string;
}

type LogEntry = {
  level: string;
  text: string;
  timestamp: number;
};

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────
export function CanvasPlayground({
  initialHtml,
  initialCss,
  initialJs,
}: CanvasPlaygroundProps) {
  const navigate = useNavigate();
  const { t } = useI18n();

  const [html, setHtml] = useState(initialHtml ?? DEFAULT_HTML);
  const [css, setCss] = useState(initialCss ?? DEFAULT_CSS);
  const [js, setJs] = useState(initialJs ?? DEFAULT_JS);
  const [debounced, setDebounced] = useState({ html, css, js });

  const [error, setError] = useState<string | null>(null);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [showGrid, setShowGrid] = useState(false);
  const [showDebug, setShowDebug] = useState(false);
  const [showConsole, setShowConsole] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [autoRun, setAutoRun] = useState(true);
  const [fps, setFps] = useState(0);
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const [splitPos, setSplitPos] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const [gridSize, setGridSize] = useState(32);
  const [helpOpen, setHelpOpen] = useState(false);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const consoleRef = useRef<HTMLDivElement>(null);
  const fpsFrameRef = useRef(0);
  const fpsLastRef = useRef(performance.now());
  const errorTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const logEndRef = useRef<HTMLDivElement>(null);

  const [fpsHistory, setFpsHistory] = useState<number[]>([]);
  // TODO: fpsHistory capped at 120 entries for the mini chart overlay

  // ── Auto-run debounce ──
  useEffect(() => {
    if (!autoRun) return;
    const t2 = setTimeout(() => {
      setDebounced({ html, css, js });
      setError(null);
    }, 300);
    return () => clearTimeout(t2);
  }, [html, css, js, autoRun]);

  // ── Message listener (download, errors, console) ──
  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      if (e.data?.__canvas_data) {
        const a = document.createElement("a");
        a.href = e.data.__canvas_data;
        a.download = "canvas-artwork.png";
        a.click();
      }
      if (e.data?.__canvas_error) {
        setError(e.data.__canvas_error);
        if (errorTimerRef.current) clearTimeout(errorTimerRef.current);
        errorTimerRef.current = setTimeout(() => setError(null), 8000);
      }
      if (e.data?.__cm_console) {
        setLogs((prev) =>
          [
            ...prev,
            {
              level: e.data.level,
              text: e.data.args.join(" "),
              timestamp: Date.now(),
            },
          ].slice(-100)
        );
      }
    };
    window.addEventListener("message", onMsg);
    return () => {
      window.removeEventListener("message", onMsg);
      if (errorTimerRef.current) clearTimeout(errorTimerRef.current);
    };
  }, []);

  // Auto-scroll console
  useEffect(() => {
    if (showConsole && logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs, showConsole]);

  // ── FPS counter ──
  useEffect(() => {
    if (!showDebug) {
      setFps(0);
      return;
    }
    fpsFrameRef.current = 0;
    fpsLastRef.current = performance.now();
    let rafId: number;
    const tick = (now: number) => {
      fpsFrameRef.current++;
      if (now - fpsLastRef.current >= 1000) {
        const currentFps = fpsFrameRef.current;
        setFps(currentFps);
        // TODO: Push to fpsHistory for mini chart
        fpsFrameRef.current = 0;
        fpsLastRef.current = now;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [showDebug]);

  // ── Panel resize handler ──
  useEffect(() => {
    if (!isResizing) return;
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const pct = ((e.clientX - rect.left) / rect.width) * 100;
      setSplitPos(Math.min(Math.max(pct, 20), 80));
    };
    const handleUp = () => setIsResizing(false);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [isResizing]);

  // ── Fullscreen change detection ──
  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  // ── Keyboard shortcuts ──
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        e.preventDefault();
        runCode();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  // ── Memoized source document ──
  const srcDoc = useMemo(
    () => buildSrcDoc(debounced.html, debounced.css, debounced.js),
    [debounced]
  );

  // ── Handlers ──
  const runCode = useCallback(() => {
    if (!iframeRef.current?.contentWindow) return;
    iframeRef.current.contentWindow.postMessage({ __canvas_run: true }, "*");
    setDebounced({ html, css, js });
    setError(null);
  }, [html, css, js]);

  const reset = useCallback(() => {
    setHtml(DEFAULT_HTML);
    setCss(DEFAULT_CSS);
    setJs(DEFAULT_JS);
    setDebounced({ html: DEFAULT_HTML, css: DEFAULT_CSS, js: DEFAULT_JS });
    setError(null);
    setLogs([]);
  }, []);

  const clearCanvas = useCallback(() => {
    if (!iframeRef.current?.contentWindow) return;
    iframeRef.current.contentWindow.postMessage({ __canvas_clear: true }, "*");
  }, []);

  const downloadPng = useCallback(() => {
    if (!iframeRef.current?.contentWindow) return;
    iframeRef.current.contentWindow.postMessage({ __canvas_download: true }, "*");
  }, []);

  const toggleFullscreen = useCallback(async () => {
    if (!document.fullscreenElement) {
      await previewRef.current?.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  }, []);

  const clearLogs = useCallback(() => setLogs([]), []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!showDebug) return;
      const rect = e.currentTarget.getBoundingClientRect();
      setMouseCoords({
        x: Math.round(e.clientX - rect.left),
        y: Math.round(e.clientY - rect.top),
      });
    },
    [showDebug]
  );

  // TODO: Add animation recording support
  // - __canvas_record_start starts capturing frames via requestAnimationFrame
  // - __canvas_record_stop composes into a video blob using MediaRecorder
  // - Frame-by-frame scrubber in debug overlay

  // TODO: Export as WebP / JPEG / SVG options

  const toolbarClass = (active = false, extra = "") =>
    `h-7 px-2 text-[10px] font-black tracking-wider uppercase rounded transition-all flex items-center gap-1.5 shrink-0 ${
      active
        ? "bg-[#FF5722]/20 text-[#FF5722] shadow-sm shadow-[#FF5722]/10"
        : "text-foreground/50 hover:text-foreground hover:bg-foreground/5"
    } ${extra}`;

  const previewArea = (
    <div
      ref={previewRef}
      className="relative flex-1 bg-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <iframe
        ref={iframeRef}
        title="canvas-preview"
        srcDoc={srcDoc}
        className="w-full h-full border-0"
        sandbox="allow-scripts allow-same-origin"
      />

      {/* Grid overlay */}
      <AnimatePresence>
        {showGrid && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: [
                `linear-gradient(rgba(255,87,34,0.12) 1px, transparent 1px)`,
                `linear-gradient(90deg, rgba(255,87,34,0.12) 1px, transparent 1px)`,
              ].join(", "),
              backgroundSize: `${gridSize}px ${gridSize}px`,
            }}
          />
        )}
      </AnimatePresence>

      {/* Debug overlay: coords + FPS */}
      <AnimatePresence>
        {showDebug && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-2 left-2 pointer-events-none space-y-1"
          >
            <div className="bg-black/80 text-white text-[10px] font-mono px-2 py-1 rounded flex items-center gap-2 backdrop-blur-sm">
              <MousePointer2 className="w-3 h-3" style={{ color: BRAND }} />
              {mouseCoords.x}, {mouseCoords.y}
            </div>
            <div className="bg-black/80 text-white text-[10px] font-mono px-2 py-1 rounded flex items-center gap-2 backdrop-blur-sm">
              <Monitor className="w-3 h-3" style={{ color: BRAND }} />
              {fps} FPS
            </div>
            {/* TODO: Add mini FPS sparkline chart here */}
            <div className="bg-black/60 text-white/50 text-[8px] font-mono px-2 py-1 rounded">
              canvas: {mouseCoords.x}px &times; {mouseCoords.y}px
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error banner */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 right-0 bg-red-950/90 text-red-200 text-xs font-mono p-3 flex items-start gap-2 border-t border-red-500/30 backdrop-blur-sm"
          >
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
            <span className="flex-1 leading-relaxed">{error}</span>
            <button
              onClick={() => setError(null)}
              className="text-red-300 hover:text-white transition-colors shrink-0"
            >
              <EyeOff className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Help icon overlay when debug is off but grid is on */}
      {!showDebug && showGrid && (
        <div className="absolute top-2 right-2 bg-black/50 text-white/40 text-[8px] font-mono px-1.5 py-0.5 rounded pointer-events-none">
          {gridSize}&times;{gridSize}
        </div>
      )}
    </div>
  );

  return (
    <div className="h-screen flex flex-col bg-background text-foreground overflow-hidden">
      {/* ── Toolbar ── */}
      <header className="h-11 border-b border-border flex items-center justify-between px-3 bg-muted/30 shrink-0 select-none">
        <div className="flex items-center gap-2 min-w-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="h-7 w-7 p-0 hover:bg-foreground/5 shrink-0"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
          </Button>
          <div className="w-px h-3.5 bg-border mx-0.5" />
          <span
            className="text-[10px] font-black tracking-[0.2em] uppercase whitespace-nowrap"
            style={{ color: BRAND }}
          >
            Canvas Playground
          </span>
          <div className="w-px h-3.5 bg-border mx-0.5" />
          <span className="text-[8px] text-foreground/25 font-mono tracking-tight">
            v2.1
          </span>
          <button
            onClick={() => setHelpOpen(!helpOpen)}
            className={toolbarClass(helpOpen, "ml-1")}
            title="Keyboard shortcuts"
          >
            <HelpCircle className="w-3 h-3" />
          </button>
          <AnimatePresence>
            {helpOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.12 }}
                className="absolute top-11 left-3 bg-popover border border-border rounded-lg shadow-xl p-3 z-50 w-64"
              >
                <div className="text-[10px] font-black tracking-wider text-foreground/60 mb-2">
                  SHORTCUTS
                </div>
                <div className="space-y-1.5 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Run code</span>
                    <kbd className="px-1.5 py-0.5 bg-muted rounded text-[9px] font-mono text-foreground/50">
                      Ctrl+Enter
                    </kbd>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Toggle grid</span>
                    <kbd className="px-1.5 py-0.5 bg-muted rounded text-[9px] font-mono text-foreground/50">
                      G
                    </kbd>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Toggle debug</span>
                    <kbd className="px-1.5 py-0.5 bg-muted rounded text-[9px] font-mono text-foreground/50">
                      D
                    </kbd>
                  </div>
                  {/* TODO: Add more keyboard shortcuts */}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
          <button
            onClick={runCode}
            className={`h-7 px-3 text-[10px] font-black tracking-wider uppercase rounded transition-all flex items-center gap-1.5 bg-[#FF5722] text-white hover:bg-[#FF5722]/90 shadow-sm shadow-[#FF5722]/20`}
          >
            <Play className="w-3 h-3" />
            Run
          </button>
          <div className="w-px h-4 bg-border mx-0.5" />

          <button
            onClick={reset}
            className={toolbarClass()}
            title="Reset to default template"
          >
            <RotateCcw className="w-3 h-3" />
            Reset
          </button>
          <button
            onClick={clearCanvas}
            className={toolbarClass()}
            title="Clear canvas content"
          >
            <Eraser className="w-3 h-3" />
            Clear
          </button>
          <button
            onClick={downloadPng}
            className={toolbarClass()}
            title="Download canvas as PNG"
          >
            <Download className="w-3 h-3" />
            PNG
          </button>
          {/* TODO: Add GIF/WebP export option */}
          <button
            onClick={() => {
              // TODO: Start/stop canvas recording using MediaRecorder
            }}
            className={toolbarClass()}
            title="Record canvas animation (TODO)"
          >
            <Video className="w-3 h-3" />
            Rec
          </button>
          <div className="w-px h-4 bg-border mx-0.5" />

          <button
            onClick={toggleFullscreen}
            className={toolbarClass(isFullscreen)}
            title="Toggle fullscreen preview"
          >
            {isFullscreen ? (
              <Minimize2 className="w-3 h-3" />
            ) : (
              <Maximize2 className="w-3 h-3" />
            )}
          </button>
          <button
            onClick={() => setAutoRun(!autoRun)}
            className={toolbarClass(autoRun)}
            title="Auto-run on code change"
          >
            {autoRun ? (
              <ToggleRight className="w-3 h-3" />
            ) : (
              <ToggleLeft className="w-3 h-3" />
            )}
            Auto
          </button>
          <button
            onClick={() => setShowConsole(!showConsole)}
            className={toolbarClass(showConsole)}
            title="Toggle console output"
          >
            <Terminal className="w-3 h-3" />
            Console
          </button>
          <button
            onClick={() => setShowGrid(!showGrid)}
            className={toolbarClass(showGrid)}
            title="Toggle grid overlay"
          >
            {showGrid ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
            Grid
          </button>
          <button
            onClick={() => setShowDebug(!showDebug)}
            className={toolbarClass(showDebug)}
            title="Toggle debug overlay (FPS + coordinates)"
          >
            <Crosshair className="w-3 h-3" />
            Debug
          </button>
        </div>
      </header>

      {/* ── Main content ── */}
      <div ref={containerRef} className="flex-1 flex overflow-hidden">
        {/* Editor panels */}
        <div
          className="flex flex-col border-r border-border overflow-hidden"
          style={{ width: `${splitPos}%` }}
        >
          <Panel label="HTML" color="bg-html" code={html}>
            <CodeMirror
              value={html}
              height="100%"
              theme={oneDark}
              extensions={[htmlLang()]}
              onChange={setHtml}
              className="h-full text-[13px]"
            />
          </Panel>
          <Panel label="CSS" color="bg-css" code={css}>
            <CodeMirror
              value={css}
              height="100%"
              theme={oneDark}
              extensions={[cssLang()]}
              onChange={setCss}
              className="h-full text-[13px]"
            />
          </Panel>
          <Panel label="JavaScript" color="bg-js" code={js}>
            <CodeMirror
              value={js}
              height="100%"
              theme={oneDark}
              extensions={[jsLang()]}
              onChange={setJs}
              className="h-full text-[13px]"
            />
          </Panel>
        </div>

        {/* Resize handle */}
        <div
          className={`flex items-center justify-center w-2 cursor-col-resize shrink-0 transition-colors group ${
            isResizing ? "bg-[#FF5722]/30" : "bg-muted/10 hover:bg-[#FF5722]/20"
          }`}
          onMouseDown={() => setIsResizing(true)}
        >
          <GripVertical className="w-3 h-3 text-foreground/20 group-hover:text-[#FF5722]/60 transition-colors" />
        </div>

        {/* Preview area */}
        {isFullscreen ? (
          <div className="fixed inset-0 z-50 bg-background p-1">{previewArea}</div>
        ) : (
          <div
            className="flex flex-col overflow-hidden"
            style={{ width: `${100 - splitPos}%` }}
          >
            {previewArea}
            {/* Console panel */}
            <AnimatePresence>
              {showConsole && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 128, opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="border-t border-border bg-muted/20 overflow-hidden shrink-0"
                >
                  <div className="h-6 border-b border-border flex items-center justify-between px-3">
                    <span className="text-[9px] font-black tracking-[0.2em] text-foreground/40 uppercase flex items-center gap-1.5">
                      <Terminal className="w-3 h-3" />
                      Console
                      <span className="text-foreground/20 font-mono text-[8px] normal-case">
                        ({logs.length} messages)
                      </span>
                    </span>
                    <button
                      onClick={clearLogs}
                      className="text-foreground/30 hover:text-foreground transition-colors"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                  <div
                    ref={consoleRef}
                    className="h-[calc(128px-24px)] overflow-y-auto px-3 py-1.5 font-mono text-[11px] space-y-0.5"
                  >
                    {logs.length === 0 && (
                      <span className="text-foreground/20 italic">
                        Awaiting console output...
                      </span>
                    )}
                    {logs.map((log, i) => (
                      <div
                        key={i}
                        className={
                          log.level === "error"
                            ? "text-red-400"
                            : log.level === "warn"
                              ? "text-amber-400"
                              : log.level === "info"
                                ? "text-blue-400"
                                : "text-foreground/70"
                        }
                      >
                        <span className="opacity-30 text-[9px]">
                          [{new Date(log.timestamp).toLocaleTimeString([], {
                            hour12: false,
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                          })}]{" "}
                        </span>
                        {log.text}
                      </div>
                    ))}
                    <div ref={logEndRef} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Status bar */}
      <div className="h-6 border-t border-border bg-muted/20 flex items-center justify-between px-3 shrink-0">
        <div className="flex items-center gap-3">
          {!autoRun && (
            <span className="text-[9px] text-amber-400/70 font-mono flex items-center gap-1.5">
              <AlertTriangle className="w-2.5 h-2.5" />
              Auto-run disabled
            </span>
          )}
          {showGrid && (
            <span className="text-[9px] text-foreground/30 font-mono flex items-center gap-1">
              <Grid className="w-2.5 h-2.5" />
              Grid: {gridSize}px
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 text-[8px] text-foreground/20 font-mono">
          <span>Canvas Playground v2.1</span>
          <span className="w-px h-2.5 bg-border" />
          <span>Drag divider to resize</span>
          <span className="w-px h-2.5 bg-border" />
          <span>Ctrl+Enter to run</span>
          {/* TODO: Show active canvas dimensions from iframe */}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Panel sub-component
// ─────────────────────────────────────────────
function Panel({
  label,
  color,
  code,
  children,
}: {
  label: string;
  color: string;
  code?: string;
  children: React.ReactNode;
}) {
  const lines = code ? code.split("\n").length : 0;
  return (
    <div className="flex-1 flex flex-col min-h-0 border-b border-border last:border-b-0">
      <div
        className={`h-7 ${color} text-white px-3 flex items-center justify-between text-[9px] font-black tracking-[0.2em] uppercase shrink-0`}
      >
        <span>{label}</span>
        <div className="flex items-center gap-2">
          <span className="opacity-40 font-mono text-[8px] tracking-tight">
            {lines} lines
          </span>
          {/* TODO: Add copy-to-clipboard button for panel content */}
          {/* TODO: Add panel collapse/expand toggle */}
        </div>
      </div>
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
}
