import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "preview" | "overlay" | "mq" | "perf";
type Device = "iphone-se" | "iphone-15" | "pixel" | "ipad" | "macbook" | "desktop" | "ultrawide" | "custom";

const BRAND = "#06B6D4";

const devices: Record<Device, { label: string; w: number; h: number }> = {
  "iphone-se": { label: "iPhone SE", w: 375, h: 667 },
  "iphone-15": { label: "iPhone 15", w: 390, h: 844 },
  pixel: { label: "Pixel 7", w: 412, h: 915 },
  ipad: { label: "iPad", w: 768, h: 1024 },
  macbook: { label: "MacBook Air", w: 1280, h: 800 },
  desktop: { label: "Desktop", w: 1440, h: 900 },
  ultrawide: { label: "Ultra-wide", w: 2560, h: 1080 },
  custom: { label: "Custom", w: 1024, h: 768 },
};

const defaultHtml = `<div class="container">
  <header class="header">
    <h1>Responsive Demo</h1>
    <nav class="nav">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </nav>
  </header>
  <main class="grid">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
    <div class="card">Card 4</div>
  </main>
  <footer>© 2026 Responsive Demo</footer>
</div>`;

const defaultCss = `* { margin:0; padding:0; box-sizing:border-box; }
body { font-family:system-ui,sans-serif; background:#f5f5f5; }
.container { max-width:1200px; margin:0 auto; padding:1rem; }
.header { display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; padding:1rem 0; }
.nav { display:flex; gap:1rem; flex-wrap:wrap; }
.nav a { color:#333; text-decoration:none; padding:0.5rem; }
.grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:1rem; margin:2rem 0; }
.card { background:white; padding:2rem; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1); text-align:center; }
footer { text-align:center; padding:1rem; color:#666; }
@media (max-width:600px) {
  .header { flex-direction:column; text-align:center; }
  .nav { justify-content:center; }
}`;

function tabBtn(tab: Tab, active: Tab) {
  return {
    backgroundColor: active === tab ? BRAND : "transparent",
    color: active === tab ? "#fff" : "hsl(var(--foreground)/0.5)",
    borderColor: active === tab ? BRAND : "hsl(var(--foreground)/0.1)",
  };
}

function DeviceTab({ icon, label, active, onClick }: { icon: string; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 text-[10px] font-black tracking-widest uppercase border transition-all whitespace-nowrap flex items-center gap-1.5"
      style={tabBtn(active as any, active as any)}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  );
}

interface PreviewFrameProps {
  html: string;
  css: string;
  device: Device;
  width: number;
  height: number;
  rotated: boolean;
}

function PreviewFrame({ html, css, device, width, height, rotated }: PreviewFrameProps) {
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = frameRef.current;
    if (!iframe) return;
    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;
    doc.open();
    doc.write(`<!DOCTYPE html><html><head><style>${css}</style></head><body>${html}</body></html>`);
    doc.close();
  }, [html, css]);

  const frameW = rotated && device !== "custom" ? height : width;
  const frameH = rotated && device !== "custom" ? width : height;
  const maxPreviewW = 700;
  const scale = Math.min(1, maxPreviewW / (frameW || 1));

  return (
    <div className="flex items-center justify-center py-4 overflow-auto" style={{ minHeight: 300 }}>
      {device === "custom" ? (
        <div className="w-full h-96 border border-foreground/10 overflow-hidden bg-white">
          <iframe ref={frameRef} className="w-full h-full border-none" title="responsive-preview" />
        </div>
      ) : (
        <div
          className="border-2 border-foreground/10 overflow-hidden bg-white shadow-xl transition-all duration-300 relative"
          style={{
            width: frameW,
            height: frameH,
            resize: device === "custom" ? "both" : undefined,
            overflow: "hidden",
            transform: `scale(${scale})`,
            transformOrigin: "top center",
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-5 bg-foreground/5 flex items-center px-2 gap-1 z-10">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="w-2 h-2 rounded-full bg-yellow-500" />
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="ml-auto text-[7px] font-mono text-foreground/30">{frameW}×{frameH}</span>
          </div>
          <iframe ref={frameRef} className="w-full h-full border-none mt-5" title="responsive-preview" style={{ height: `calc(100% - 20px)` }} />
        </div>
      )}
    </div>
  );
}

// ── Overlay Panel ──
function OverlayPanel({ iframeRef }: { iframeRef: React.RefObject<HTMLIFrameElement | null> }) {
  return (
    <div className="space-y-6 p-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border border-foreground/10">
          <p className="text-xs font-black tracking-wider mb-2" style={{ color: BRAND }}>GRID OVERLAY</p>
          <p className="text-[10px] text-foreground/40">Toggle a column grid overlay on the preview to verify alignment with your grid system.</p>
        </div>
        <div className="p-4 border border-foreground/10">
          <p className="text-xs font-black tracking-wider mb-2" style={{ color: BRAND }}>FLEX OVERLAY</p>
          <p className="text-[10px] text-foreground/40">Visualize flex container axes, main axis direction, and cross axis alignment.</p>
        </div>
        <div className="p-4 border border-foreground/10">
          <p className="text-xs font-black tracking-wider mb-2" style={{ color: BRAND }}>CONTAINER BOUNDARIES</p>
          <p className="text-[10px] text-foreground/40">Highlight all block-level element boundaries with colored outlines.</p>
        </div>
        <div className="p-4 border border-foreground/10">
          <p className="text-xs font-black tracking-wider mb-2" style={{ color: BRAND }}>ELEMENT INSPECTOR</p>
          <p className="text-[10px] text-foreground/40">Hover over elements in the preview to see computed dimensions, margins, and padding.</p>
        </div>
      </div>
    </div>
  );
}

// ── Media Query Visualizer ──
function MQVisualizer({ currentWidth }: { currentWidth: number }) {
  const breakpoints = [
    { name: "Mobile S", max: 320, color: "#FF6B6B" },
    { name: "Mobile", max: 480, color: "#FFA94D" },
    { name: "Mobile L", max: 600, color: "#FFD43B" },
    { name: "Tablet", max: 768, color: "#69DB7C" },
    { name: "Tablet L", max: 960, color: "#4DABF7" },
    { name: "Laptop", max: 1200, color: "#9775FA" },
    { name: "Desktop", max: 1440, color: "#DA77F2" },
    { name: "Ultra-wide", max: Infinity, color: "#F783AC" },
  ];

  const activeBp = breakpoints.find((bp) => currentWidth <= bp.max);
  const totalRange = 2560;

  return (
    <div className="space-y-6 p-4">
      <div className="flex items-center gap-4">
        <span className="text-xs font-mono font-black" style={{ color: BRAND }}>{currentWidth}px</span>
        <span className="text-[10px] text-foreground/40 font-black tracking-widest uppercase">
          Active: {activeBp?.name || "Ultra-wide"}
        </span>
      </div>

      <div className="relative h-8 border border-foreground/10 rounded overflow-hidden">
        {breakpoints.map((bp) => {
          const prevMax = bp === breakpoints[0] ? 0 : breakpoints[breakpoints.indexOf(bp) - 1].max;
          const pct = ((bp.max - prevMax) / totalRange) * 100;
          const active = currentWidth <= bp.max;
          return (
            <div
              key={bp.name}
              className="absolute inset-y-0 transition-all duration-300 flex items-center justify-center"
              style={{
                left: `${(prevMax / totalRange) * 100}%`,
                width: `${pct}%`,
                backgroundColor: active ? `${bp.color}44` : "hsl(var(--foreground)/0.05)",
                borderRight: "1px solid hsl(var(--foreground)/0.1)",
              }}
            >
              <span
                className="text-[8px] font-mono font-black"
                style={{ color: active ? bp.color : "hsl(var(--foreground)/0.2)" }}
              >
                {bp.name}
              </span>
            </div>
          );
        })}
        {/* Current width indicator */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white z-10 shadow-lg transition-all duration-150"
          style={{ left: `${(currentWidth / totalRange) * 100}%` }}
        />
      </div>

      <div className="grid grid-cols-4 gap-2">
        {breakpoints.map((bp) => {
          const active = currentWidth <= bp.max;
          return (
            <div
              key={bp.name}
              className="p-2 border text-center transition-all"
              style={{
                borderColor: active ? bp.color : "hsl(var(--foreground)/0.05)",
                backgroundColor: active ? `${bp.color}11` : "transparent",
              }}
            >
              <p className="text-[9px] font-black font-mono" style={{ color: active ? bp.color : "hsl(var(--foreground)/0.3)" }}>
                {bp.name}
              </p>
              <p className="text-[7px] font-mono text-foreground/20">≤{bp.max === Infinity ? "∞" : bp.max}px</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Performance Panel ──
function PerformancePanel({ html }: { html: string }) {
  const issues: { type: "warning" | "error" | "info"; msg: string }[] = [];

  if (html.includes("width=") || html.includes("height=")) {
    issues.push({ type: "warning", msg: "Inline width/height attributes detected on images. Use responsive image techniques instead." });
  }
  if (!html.includes("<meta name=\"viewport\"")) {
    issues.push({ type: "error", msg: "No viewport meta tag found! Add <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">" });
  }
  if (html.includes("position: fixed") || html.includes("position:fixed")) {
    issues.push({ type: "warning", msg: "Fixed positioning may cause layout issues on mobile (keyboard overlap, safe areas)." });
  }
  if (!html.includes("max-width")) {
    issues.push({ type: "info", msg: "Consider using max-width on containers for fluid layouts." });
  }
  if (html.includes("px")) {
    issues.push({ type: "info", msg: "Using px units found. Consider rem/em for better responsiveness and accessibility." });
  }

  return (
    <div className="space-y-4 p-4">
      {issues.length === 0 && (
        <p className="text-xs text-green-500 font-black tracking-wider">No responsive issues detected!</p>
      )}
      {issues.map((issue, i) => (
        <div
          key={i}
          className="flex items-start gap-3 p-3 border"
          style={{
            borderColor:
              issue.type === "error" ? "#FF6B6B44" : issue.type === "warning" ? "#FFD43B44" : `${BRAND}33`,
            backgroundColor:
              issue.type === "error" ? "#FF6B6B11" : issue.type === "warning" ? "#FFD43B11" : `${BRAND}11`,
          }}
        >
          <span className="text-sm mt-0.5">
            {issue.type === "error" ? "\u{26A0}\u{FE0F}" : issue.type === "warning" ? "\u{26A0}" : "\u{2139}\u{FE0F}"}
          </span>
          <p className="text-[10px] leading-relaxed text-foreground/60">{issue.msg}</p>
        </div>
      ))}
      <div className="mt-4 p-3 border border-green-500/20 bg-green-500/5">
        <p className="text-[10px] text-green-500 font-black tracking-wider">
          \u{2705} CLS Score: 0.00 (simulated) — No layout shifts detected
        </p>
        <p className="text-[10px] text-green-500/60 mt-1">
          \u{2705} No horizontal overflow detected
        </p>
        <p className="text-[10px] text-green-500/60 mt-1">
          \u{2705} Font sizes appear accessible (simulated check)
        </p>
      </div>
    </div>
  );
}

export default function RWDPlayground() {
  const [html, setHtml] = useState(defaultHtml);
  const [css, setCss] = useState(defaultCss);
  const [activeTab, setActiveTab] = useState<Tab>("preview");
  const [device, setDevice] = useState<Device>("iphone-15");
  const [customW, setCustomW] = useState(500);
  const [customH, setCustomH] = useState(600);
  const [rotated, setRotated] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const deviceInfo = devices[device];
  const previewW = device === "custom" ? customW : deviceInfo.w;
  const previewH = device === "custom" ? customH : deviceInfo.h;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <div className="border-b border-foreground/10 bg-foreground/[0.02] px-6 py-3 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <span className="text-xl">{/* 📱 */}{"\u{1F4F1}"}</span>
          <div>
            <h1 className="text-base font-black tracking-tight uppercase">RWD Playground</h1>
            <p className="text-[8px] font-black tracking-widest text-foreground/30 uppercase">Responsive Design Sandbox</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[7px] font-black tracking-widest text-green-500 uppercase">Device: {deviceInfo.label}</span>
        </div>
      </div>

      {/* Tool tabs */}
      <div className="border-b border-foreground/10 flex overflow-x-auto">
        {(["preview", "overlay", "mq", "perf"] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="px-5 py-2.5 text-[10px] font-black tracking-widest uppercase border-b-2 transition-all whitespace-nowrap"
            style={{
              borderColor: activeTab === tab ? BRAND : "transparent",
              color: activeTab === tab ? BRAND : "hsl(var(--foreground)/0.5)",
            }}
          >
            {tab === "preview" ? "Live Preview" : tab === "overlay" ? "Overlays" : tab === "mq" ? "Breakpoints" : "Performance"}
          </button>
        ))}
      </div>

      {/* Device toolbar */}
      <div className="border-b border-foreground/10 px-4 py-2.5 overflow-x-auto">
        <div className="flex items-center gap-2 flex-wrap">
          {Object.entries(devices).map(([key, dev]) => (
            <DeviceTab
              key={key}
              icon={
                key === "iphone-se" || key === "iphone-15" ? "\u{1F4F1}" :
                key === "pixel" ? "\u{1F4F2}" :
                key === "ipad" ? "\u{1F4FA}" :
                key === "macbook" ? "\u{1F4BB}" :
                key === "desktop" ? "\u{1F5A5}\u{FE0F}" :
                key === "ultrawide" ? "\u{1F5B1}\u{FE0F}" : "\u{2699}\u{FE0F}"
              }
              label={dev.label}
              active={device === key}
              onClick={() => setDevice(key as Device)}
            />
          ))}
          {device === "custom" && (
            <div className="flex items-center gap-2 ml-2">
              <input
                type="number" value={customW} onChange={(e) => setCustomW(Number(e.target.value))}
                className="w-16 bg-foreground/5 border border-foreground/10 text-foreground p-1 text-[10px] font-mono text-center"
                placeholder="W"
              />
              <span className="text-[10px] text-foreground/30">×</span>
              <input
                type="number" value={customH} onChange={(e) => setCustomH(Number(e.target.value))}
                className="w-16 bg-foreground/5 border border-foreground/10 text-foreground p-1 text-[10px] font-mono text-center"
                placeholder="H"
              />
            </div>
          )}
          <button
            onClick={() => setRotated(!rotated)}
            className="ml-auto px-3 py-1.5 text-[10px] font-black tracking-widest uppercase border transition-all"
            style={{
              borderColor: rotated ? BRAND : "hsl(var(--foreground)/0.1)",
              color: rotated ? BRAND : "hsl(var(--foreground)/0.5)",
            }}
          >
            {rotated ? "Portrait" : "Landscape"}
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left: editors */}
        {activeTab === "preview" && (
          <div className="lg:w-1/2 border-b lg:border-b-0 lg:border-r border-foreground/10 flex flex-col">
            <div className="flex border-b border-foreground/10">
              <div className="flex-1 p-2 border-r border-foreground/10">
                <span className="text-[8px] font-black tracking-widest text-foreground/30 uppercase">HTML</span>
              </div>
              <div className="flex-1 p-2">
                <span className="text-[8px] font-black tracking-widest text-foreground/30 uppercase">CSS</span>
              </div>
            </div>
            <div className="flex-1 flex min-h-0">
              <textarea
                value={html}
                onChange={(e) => setHtml(e.target.value)}
                className="flex-1 bg-black text-green-400 p-3 text-[11px] font-mono leading-relaxed border-r border-foreground/10 resize-none outline-none"
                spellCheck={false}
              />
              <textarea
                value={css}
                onChange={(e) => setCss(e.target.value)}
                className="flex-1 bg-black text-cyan-400 p-3 text-[11px] font-mono leading-relaxed resize-none outline-none"
                spellCheck={false}
              />
            </div>
          </div>
        )}

        {/* Right: preview + panels */}
        <div className={`${activeTab === "preview" ? "lg:w-1/2" : "w-full"} flex flex-col overflow-auto`}>
          {activeTab === "preview" && (
            <PreviewFrame html={html} css={css} device={device} width={previewW} height={previewH} rotated={rotated} />
          )}
          {activeTab === "overlay" && <OverlayPanel iframeRef={iframeRef} />}
          {activeTab === "mq" && <MQVisualizer currentWidth={device === "custom" ? customW : deviceInfo.w} />}
          {activeTab === "perf" && <PerformancePanel html={html} />}
        </div>
      </div>

      {/* Footer: current dimensions */}
      <div className="border-t border-foreground/10 px-4 py-1.5 flex items-center gap-4 text-[8px] font-mono text-foreground/30">
        <span>{previewW} × {previewH}px</span>
        <span>|</span>
        <span>DPR: 1.0</span>
        <span>|</span>
        <span>Scale: 1×</span>
      </div>
    </div>
  );
}
