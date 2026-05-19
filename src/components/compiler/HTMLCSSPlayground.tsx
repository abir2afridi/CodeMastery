import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "editor" | "boxmodel" | "flexbox" | "grid" | "colors";
type DeviceView = "mobile" | "tablet" | "desktop";

const BRAND = "#F97316";

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "editor", label: "Live Editor", icon: "\u{1F4DD}" },
  { id: "boxmodel", label: "Box Model", icon: "\u{1F9E9}" },
  { id: "flexbox", label: "Flexbox", icon: "\u{2194}\u{FE0F}" },
  { id: "grid", label: "CSS Grid", icon: "\u{1F3D7}\u{FE0F}" },
  { id: "colors", label: "Colors", icon: "\u{1F3A8}" },
];

function tabStyle(active: boolean) {
  return {
    borderColor: active ? BRAND : "transparent",
    color: active ? BRAND : "hsl(var(--foreground)/0.5)",
  };
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="h-px w-4 bg-foreground/20" />
      <span className="text-[9px] font-black tracking-[0.3em] text-foreground/40 uppercase">{children}</span>
    </div>
  );
}

// ── Tab 1: Live Editor ──
function EditorTab() {
  const [html, setHtml] = useState(`<div class="card">
  <h1>Hello, World!</h1>
  <p>This is a live preview. Try editing the HTML and CSS!</p>
  <button>Click Me</button>
</div>`);
  const [css, setCss] = useState(`body {
  font-family: system-ui, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  background: #f0f0f0;
}
.card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;
  max-width: 400px;
}
h1 { color: #333; margin-bottom: 0.5rem; }
p { color: #666; line-height: 1.6; }
button {
  background: #F97316;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
}
button:hover { background: #ea580c; }`);
  const [device, setDevice] = useState<DeviceView>("desktop");

  const doc = useMemo(() => `<!DOCTYPE html><html lang="en"><head><style>${css}</style></head><body>${html}</body></html>`, [html, css]);

  const deviceWidths: Record<DeviceView, string> = {
    mobile: "375px",
    tablet: "768px",
    desktop: "100%",
  };

  const presets = [
    { label: "Card", html: `<div class="card"><h1>Hello!</h1><p>This is a card component.</p><button>Click</button></div>`, css: `body{font-family:sans-serif;display:flex;justify-content:center;align-items:center;min-height:100vh;margin:0;background:#f0f0f0}.card{background:white;padding:2rem;border-radius:12px;box-shadow:0 4px 6px rgba(0,0,0,0.1);text-align:center;max-width:400px}h1{color:#333}p{color:#666}button{background:#F97316;color:white;border:none;padding:.5rem 1.5rem;border-radius:8px;cursor:pointer}button:hover{background:#ea580c}` },
    { label: "Navbar", html: `<nav><div class="logo">MySite</div><ul><li><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="#">Contact</a></li></ul></nav>`, css: `body{margin:0;font-family:sans-serif}nav{background:#333;padding:1rem 2rem;display:flex;justify-content:space-between;align-items:center}.logo{color:white;font-size:1.5rem;font-weight:bold}ul{list-style:none;display:flex;gap:1.5rem;margin:0;padding:0}a{color:white;text-decoration:none}a:hover{color:#F97316}` },
    { label: "Form", html: `<form><h2>Sign Up</h2><label>Name<input type="text"></label><label>Email<input type="email"></label><button>Submit</button></form>`, css: `body{font-family:sans-serif;display:flex;justify-content:center;align-items:center;min-height:100vh;background:#f5f5f5;margin:0}form{background:white;padding:2rem;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.1);width:320px}h2{margin-top:0;color:#333}label{display:block;margin-bottom:1rem;font-size:0.875rem;color:#666}input{width:100%;padding:0.5rem;border:1px solid #ddd;border-radius:6px;margin-top:0.25rem;box-sizing:border-box}button{width:100%;padding:0.75rem;background:#F97316;color:white;border:none;border-radius:8px;font-size:1rem;cursor:pointer}button:hover{background:#ea580c}` },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 h-full">
      <div className="space-y-4 flex flex-col min-h-0">
        <SectionLabel>HTML</SectionLabel>
        <div className="flex gap-1.5 mb-2 flex-wrap">
          {presets.map((p) => (
            <button key={p.label} onClick={() => { setHtml(p.html); setCss(p.css); }}
              className="px-2.5 py-1 rounded-lg text-[9px] font-bold bg-foreground/5 text-foreground/50 hover:text-foreground transition-all">
              {p.label}
            </button>
          ))}
        </div>
        <textarea className="w-full flex-1 min-h-[180px] bg-foreground/5 border border-foreground/10 rounded-xl p-4 text-[10px] font-mono resize-none outline-none focus:border-orange-500/50 transition-colors"
          value={html} onChange={(e) => setHtml(e.target.value)} spellCheck={false} />
        <SectionLabel>CSS</SectionLabel>
        <textarea className="w-full flex-1 min-h-[180px] bg-foreground/5 border border-foreground/10 rounded-xl p-4 text-[10px] font-mono resize-none outline-none focus:border-orange-500/50 transition-colors"
          value={css} onChange={(e) => setCss(e.target.value)} spellCheck={false} />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <SectionLabel>Live Preview</SectionLabel>
          <div className="flex gap-1.5">
            {(["mobile", "tablet", "desktop"] as const).map((d) => (
              <button key={d} onClick={() => setDevice(d)}
                className={`px-2.5 py-1 rounded-lg text-[9px] font-bold transition-all ${
                  device === d ? "text-white shadow-lg" : "text-foreground/50 bg-foreground/5"
                }`}
                style={device === d ? { backgroundColor: BRAND } : {}}>
                {d === "mobile" ? "\u{1F4F1}" : d === "tablet" ? "\u{1F4F1}" : "\u{1F5A5}\u{FE0F}"} {d}
              </button>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl overflow-hidden border border-foreground/10 transition-all"
          style={{ maxWidth: deviceWidths[device], margin: "0 auto" }}>
          <div className="bg-gray-100 px-3 py-1.5 border-b border-gray-200 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            <span className="text-[9px] text-gray-400 ml-2 font-mono">preview.html</span>
          </div>
          <iframe srcDoc={doc} className="w-full h-[400px]" title="Preview" />
        </div>
      </div>
    </div>
  );
}

// ── Tab 2: Box Model ──
function BoxModelTab() {
  const [margin, setMargin] = useState(20);
  const [border, setBorder] = useState(3);
  const [padding, setPadding] = useState(15);
  const [contentW, setContentW] = useState(200);
  const [contentH, setContentH] = useState(80);

  const totalW = contentW + padding * 2 + border * 2 + margin * 2;
  const totalH = contentH + padding * 2 + border * 2 + margin * 2;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="xl:col-span-2 space-y-4">
        <SectionLabel>Box Model Visualizer</SectionLabel>

        <div className="flex items-center justify-center min-h-[300px] bg-foreground/5 border border-foreground/10 rounded-xl p-8">
          <div className="relative transition-all" style={{ margin: `${margin}px` }}>
            {/* Margin layer */}
            <div className="absolute inset-0 bg-amber-200/40 border-2 border-dashed border-amber-400 rounded-lg"
              style={{ margin: `-${margin}px`, padding: "0" }}>
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-[9px] text-amber-600 font-bold">Margin ({margin}px)</span>
            </div>
            {/* Border layer */}
            <div className="relative" style={{ border: `${border}px solid #F97316`, borderRadius: "8px" }}>
              <span className="absolute -top-4 left-2 text-[9px] text-orange-600 font-bold whitespace-nowrap">Border ({border}px)</span>
              {/* Padding layer */}
              <div style={{ padding: `${padding}px`, backgroundColor: "#fef3c7" }}>
                <span className="absolute top-2 right-2 text-[9px] text-amber-600 font-bold">Padding ({padding}px)</span>
                {/* Content */}
                <div style={{ width: `${contentW}px`, height: `${contentH}px`, backgroundColor: "#3b82f6", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span className="text-white text-[10px] font-bold text-center">
                    Content<br />{contentW} x {contentH}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4">
          <p className="text-[9px] font-bold text-foreground/40 mb-2">Total Size</p>
          <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
            <div className="px-3 py-2 rounded-lg bg-foreground/5"><span className="text-foreground/40">Width:</span> <span className="text-foreground/70 font-bold">{totalW}px</span></div>
            <div className="px-3 py-2 rounded-lg bg-foreground/5"><span className="text-foreground/40">Height:</span> <span className="text-foreground/70 font-bold">{totalH}px</span></div>
            <div className="px-3 py-2 rounded-lg bg-foreground/5"><span className="text-foreground/40">Content:</span> <span className="text-foreground/70">{contentW} x {contentH}</span></div>
            <div className="px-3 py-2 rounded-lg bg-foreground/5"><span className="text-foreground/40">box-sizing:</span> <span className="text-foreground/70">content-box</span></div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <SectionLabel>Controls</SectionLabel>
        <div className="space-y-4 px-1">
          {[
            { label: "Margin", val: margin, set: setMargin, min: 0, max: 60 },
            { label: "Border", val: border, set: setBorder, min: 0, max: 20 },
            { label: "Padding", val: padding, set: setPadding, min: 0, max: 50 },
            { label: "Content Width", val: contentW, set: setContentW, min: 50, max: 400 },
            { label: "Content Height", val: contentH, set: setContentH, min: 30, max: 200 },
          ].map((c) => (
            <div key={c.label}>
              <div className="flex justify-between text-[10px] text-foreground/50 mb-1">
                <span>{c.label}</span><span>{c.val}px</span>
              </div>
              <input type="range" min={c.min} max={c.max} value={c.val}
                onChange={(e) => c.set(parseInt(e.target.value))}
                className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                style={{ accentColor: BRAND }} />
            </div>
          ))}
        </div>

        <SectionLabel>Legend</SectionLabel>
        <div className="space-y-1.5 text-[10px] text-foreground/50">
          <div className="flex items-center gap-2 px-2 py-1 rounded bg-amber-200/20"><div className="w-3 h-3 rounded bg-amber-200" /><span>Margin (outer space)</span></div>
          <div className="flex items-center gap-2 px-2 py-1 rounded bg-orange-200/20"><div className="w-3 h-3 rounded bg-orange-500" /><span>Border</span></div>
          <div className="flex items-center gap-2 px-2 py-1 rounded bg-amber-100/20"><div className="w-3 h-3 rounded bg-amber-100" /><span>Padding (inner space)</span></div>
          <div className="flex items-center gap-2 px-2 py-1 rounded bg-blue-200/20"><div className="w-3 h-3 rounded bg-blue-500" /><span>Content</span></div>
        </div>
      </div>
    </div>
  );
}

// ── Tab 3: Flexbox ──
function FlexboxTab() {
  const [direction, setDirection] = useState("row");
  const [justify, setJustify] = useState("center");
  const [align, setAlign] = useState("center");
  const [wrap, setWrap] = useState("nowrap");
  const [gap, setGap] = useState(8);
  const [items, setItems] = useState(4);

  const dirOptions = ["row", "column", "row-reverse", "column-reverse"];
  const justifyOptions = ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"];
  const alignOptions = ["flex-start", "center", "flex-end", "stretch"];

  const flexContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: direction as any,
    justifyContent: justify,
    alignItems: align,
    flexWrap: wrap as any,
    gap: `${gap}px`,
    height: "220px",
    backgroundColor: "hsl(var(--foreground)/0.05)",
    borderRadius: "12px",
    padding: "12px",
    border: "2px dashed hsl(var(--foreground)/0.15)",
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="xl:col-span-2 space-y-4">
        <SectionLabel>Flexbox Playground</SectionLabel>
        <div style={flexContainerStyle}>
          {Array.from({ length: items }).map((_, i) => (
            <motion.div key={i} layout
              className="rounded-lg flex items-center justify-center text-white font-bold text-xs"
              style={{
                backgroundColor: `hsl(${i * 40}, 80%, 55%)`,
                minWidth: "60px",
                minHeight: i % 3 === 0 ? "60px" : i % 3 === 1 ? "80px" : "50px",
                padding: "12px",
                borderRadius: "8px",
              }}>
              {i + 1}
            </motion.div>
          ))}
        </div>

        <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4">
          <p className="text-[10px] font-mono text-foreground/60">
            {`display: flex; flex-direction: ${direction}; justify-content: ${justify}; align-items: ${align}; flex-wrap: ${wrap}; gap: ${gap}px;`}
          </p>
        </div>
      </div>

      <div className="space-y-4 overflow-y-auto">
        <SectionLabel>Direction</SectionLabel>
        <div className="flex flex-wrap gap-1">
          {dirOptions.map((d) => (
            <button key={d} onClick={() => setDirection(d)}
              className={`px-2.5 py-1 rounded-lg text-[9px] font-bold transition-all ${
                direction === d ? "text-white shadow-lg" : "text-foreground/50 bg-foreground/5"
              }`}
              style={direction === d ? { backgroundColor: BRAND } : {}}>{d}</button>
          ))}
        </div>

        <SectionLabel>Justify Content</SectionLabel>
        <div className="flex flex-wrap gap-1">
          {justifyOptions.map((j) => (
            <button key={j} onClick={() => setJustify(j)}
              className={`px-2.5 py-1 rounded-lg text-[9px] font-bold transition-all ${
                justify === j ? "text-white shadow-lg" : "text-foreground/50 bg-foreground/5"
              }`}
              style={justify === j ? { backgroundColor: BRAND } : {}}>{j}</button>
          ))}
        </div>

        <SectionLabel>Align Items</SectionLabel>
        <div className="flex flex-wrap gap-1">
          {alignOptions.map((a) => (
            <button key={a} onClick={() => setAlign(a)}
              className={`px-2.5 py-1 rounded-lg text-[9px] font-bold transition-all ${
                align === a ? "text-white shadow-lg" : "text-foreground/50 bg-foreground/5"
              }`}
              style={align === a ? { backgroundColor: BRAND } : {}}>{a}</button>
          ))}
        </div>

        <SectionLabel>Wrap</SectionLabel>
        <div className="flex gap-1">
          {["nowrap", "wrap"].map((w) => (
            <button key={w} onClick={() => setWrap(w)}
              className={`px-2.5 py-1 rounded-lg text-[9px] font-bold transition-all ${
                wrap === w ? "text-white shadow-lg" : "text-foreground/50 bg-foreground/5"
              }`}
              style={wrap === w ? { backgroundColor: BRAND } : {}}>{w}</button>
          ))}
        </div>

        <SectionLabel>Gap: {gap}px</SectionLabel>
        <input type="range" min="0" max="32" value={gap}
          onChange={(e) => setGap(parseInt(e.target.value))}
          className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
          style={{ accentColor: BRAND }} />

        <SectionLabel>Items: {items}</SectionLabel>
        <input type="range" min="2" max="8" value={items}
          onChange={(e) => setItems(parseInt(e.target.value))}
          className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
          style={{ accentColor: BRAND }} />
      </div>
    </div>
  );
}

// ── Tab 4: CSS Grid ──
function GridTab() {
  const [columns, setColumns] = useState(3);
  const [rows, setRows] = useState(2);
  const [gap, setGap] = useState(8);
  const [justifyItems, setJustifyItems] = useState("stretch");
  const [alignItems, setAlignItems] = useState("stretch");

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gap: `${gap}px`,
    justifyItems,
    alignItems,
    height: "250px",
    backgroundColor: "hsl(var(--foreground)/0.05)",
    borderRadius: "12px",
    padding: "12px",
    border: "2px dashed hsl(var(--foreground)/0.15)",
  };

  const totalCells = columns * rows;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="xl:col-span-2 space-y-4">
        <SectionLabel>CSS Grid Playground</SectionLabel>
        <div style={gridStyle}>
          {Array.from({ length: totalCells }).map((_, i) => (
            <motion.div key={i} layout
              className="rounded-lg flex items-center justify-center text-white font-bold text-xs"
              style={{
                backgroundColor: `hsl(${i * 40 + 30}, 75%, 55%)`,
                padding: "12px",
                borderRadius: "8px",
                minWidth: 0,
                minHeight: 0,
              }}>
              {i + 1}
            </motion.div>
          ))}
        </div>

        <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4">
          <p className="text-[10px] font-mono text-foreground/60">
            {`display: grid; grid-template-columns: repeat(${columns}, 1fr); grid-template-rows: repeat(${rows}, 1fr); gap: ${gap}px;`}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <SectionLabel>Columns: {columns}</SectionLabel>
        <input type="range" min="1" max="6" value={columns}
          onChange={(e) => setColumns(parseInt(e.target.value))}
          className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
          style={{ accentColor: BRAND }} />

        <SectionLabel>Rows: {rows}</SectionLabel>
        <input type="range" min="1" max="4" value={rows}
          onChange={(e) => setRows(parseInt(e.target.value))}
          className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
          style={{ accentColor: BRAND }} />

        <SectionLabel>Gap: {gap}px</SectionLabel>
        <input type="range" min="0" max="32" value={gap}
          onChange={(e) => setGap(parseInt(e.target.value))}
          className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
          style={{ accentColor: BRAND }} />

        <SectionLabel>Justify Items</SectionLabel>
        <div className="flex flex-wrap gap-1">
          {["start", "center", "end", "stretch"].map((j) => (
            <button key={j} onClick={() => setJustifyItems(j)}
              className={`px-2.5 py-1 rounded-lg text-[9px] font-bold transition-all ${
                justifyItems === j ? "text-white shadow-lg" : "text-foreground/50 bg-foreground/5"
              }`}
              style={justifyItems === j ? { backgroundColor: BRAND } : {}}>{j}</button>
          ))}
        </div>

        <SectionLabel>Align Items</SectionLabel>
        <div className="flex flex-wrap gap-1">
          {["start", "center", "end", "stretch"].map((a) => (
            <button key={a} onClick={() => setAlignItems(a)}
              className={`px-2.5 py-1 rounded-lg text-[9px] font-bold transition-all ${
                alignItems === a ? "text-white shadow-lg" : "text-foreground/50 bg-foreground/5"
              }`}
              style={alignItems === a ? { backgroundColor: BRAND } : {}}>{a}</button>
          ))}
        </div>

        <SectionLabel>Grid Info</SectionLabel>
        <div className="space-y-1 text-[10px] font-mono text-foreground/50">
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5"><span>Cells</span><span>{totalCells}</span></div>
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5"><span>Columns</span><span>{columns}</span></div>
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5"><span>Rows</span><span>{rows}</span></div>
        </div>
      </div>
    </div>
  );
}

// ── Tab 5: Colors ──
function ColorsTab() {
  const [baseColor, setBaseColor] = useState("#F97316");
  const [showPalette, setShowPalette] = useState(false);

  const hexToRgb = (hex: string) => {
    const clean = hex.replace("#", "");
    return { r: parseInt(clean.slice(0, 2), 16), g: parseInt(clean.slice(2, 4), 16), b: parseInt(clean.slice(4, 6), 16) };
  };

  const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) { case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break; case g: h = ((b - r) / d + 2) / 6; break; case b: h = ((r - g) / d + 4) / 6; break; }
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
  };

  const hsl = useMemo(() => {
    const rgb = hexToRgb(baseColor);
    return rgbToHsl(rgb.r, rgb.g, rgb.b);
  }, [baseColor]);

  const shades = useMemo(() => {
    return Array.from({ length: 9 }, (_, i) => {
      const lightness = 10 + i * 10;
      return `hsl(${hsl.h}, ${hsl.s}%, ${lightness}%)`;
    });
  }, [hsl]);

  const complementary = useMemo(() => `hsl(${(hsl.h + 180) % 360}, ${hsl.s}%, ${hsl.l}%)`, [hsl]);
  const triadic1 = useMemo(() => `hsl(${(hsl.h + 120) % 360}, ${hsl.s}%, ${hsl.l}%)`, [hsl]);
  const triadic2 = useMemo(() => `hsl(${(hsl.h + 240) % 360}, ${hsl.s}%, ${hsl.l}%)`, [hsl]);

  const namedColors = [
    { name: "Orange", hex: "#F97316" },
    { name: "Red", hex: "#EF4444" },
    { name: "Blue", hex: "#3B82F6" },
    { name: "Green", hex: "#10B981" },
    { name: "Purple", hex: "#8B5CF6" },
    { name: "Pink", hex: "#EC4899" },
    { name: "Yellow", hex: "#EAB308" },
    { name: "Indigo", hex: "#6366F1" },
    { name: "Teal", hex: "#14B8A6" },
    { name: "Sky", hex: "#0EA5E9" },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="xl:col-span-2 space-y-4">
        <SectionLabel>Color Explorer</SectionLabel>

        <div className="flex gap-3 items-center">
          <input type="color" value={baseColor} onChange={(e) => setBaseColor(e.target.value)}
            className="w-12 h-12 rounded-xl cursor-pointer border border-foreground/10" />
          <input className="flex-1 bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-2.5 text-xs font-mono outline-none focus:border-orange-500/50"
            value={baseColor} onChange={(e) => { if (/^#[0-9a-fA-F]{6}$/.test(e.target.value)) setBaseColor(e.target.value); }} />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4">
            <p className="text-[9px] font-bold text-foreground/40 mb-2">Color Shades</p>
            <div className="space-y-1">
              {shades.map((shade, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-8 h-6 rounded" style={{ backgroundColor: shade }} />
                  <span className="text-[9px] font-mono text-foreground/50">{shade}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4">
            <p className="text-[9px] font-bold text-foreground/40 mb-2">Color Harmonies</p>
            <div className="space-y-3">
              <div>
                <p className="text-[8px] text-foreground/30 uppercase mb-1">Base</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-6 rounded" style={{ backgroundColor: baseColor }} />
                  <span className="text-[9px] font-mono text-foreground/50">{baseColor}</span>
                </div>
              </div>
              <div>
                <p className="text-[8px] text-foreground/30 uppercase mb-1">Complementary</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-6 rounded" style={{ backgroundColor: complementary }} />
                  <span className="text-[9px] font-mono text-foreground/50">{complementary}</span>
                </div>
              </div>
              <div>
                <p className="text-[8px] text-foreground/30 uppercase mb-1">Triadic</p>
                <div className="flex gap-1">
                  <div className="w-8 h-6 rounded" style={{ backgroundColor: triadic1 }} />
                  <div className="w-8 h-6 rounded" style={{ backgroundColor: triadic2 }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4">
          <p className="text-[9px] font-bold text-foreground/40 mb-2">Preview</p>
          <div className="flex gap-2 flex-wrap">
            {shades.slice(2, 7).map((shade, i) => (
              <div key={i}
                className="flex-1 min-h-[80px] rounded-lg flex items-center justify-center text-[9px] font-bold"
                style={{ backgroundColor: shade, color: i < 2 ? "#fff" : "#000" }}>
                {shade}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <SectionLabel>Named Colors</SectionLabel>
        <div className="grid grid-cols-2 gap-1.5">
          {namedColors.map((c) => (
            <button key={c.hex} onClick={() => setBaseColor(c.hex)}
              className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[9px] font-bold transition-all ${
                baseColor === c.hex ? "ring-2 ring-orange-500 bg-foreground/5" : "hover:bg-foreground/5"
              }`}>
              <div className="w-4 h-4 rounded" style={{ backgroundColor: c.hex }} />
              {c.name}
            </button>
          ))}
        </div>

        <SectionLabel>Color Info</SectionLabel>
        <div className="space-y-1 text-[10px] font-mono text-foreground/50">
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5"><span>Hex</span><span>{baseColor}</span></div>
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5"><span>HSL</span><span>{hsl.h} {hsl.s}% {hsl.l}%</span></div>
          {(() => { const r = hexToRgb(baseColor); return (
            <div className="flex justify-between px-2 py-1 rounded bg-foreground/5"><span>RGB</span><span>{r.r}, {r.g}, {r.b}</span></div>
          ); })()}
        </div>

        <SectionLabel>Tips</SectionLabel>
        <div className="text-[10px] text-foreground/50 leading-relaxed space-y-1.5 px-1">
          <p>{"\u{1F3A8}"} Use HSL for intuitive color adjustments</p>
          <p>{"\u{1F504}"} Complementary colors are opposite on the wheel</p>
          <p>{"\u{1F3A8}"} Use shades for hover/active states</p>
          <p>{"\u{2705}"} Maintain contrast for accessibility</p>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ──
export function HTMLCSSPlayground() {
  const [activeTab, setActiveTab] = useState<Tab>("editor");

  const renderTab = () => {
    switch (activeTab) {
      case "editor": return <EditorTab />;
      case "boxmodel": return <BoxModelTab />;
      case "flexbox": return <FlexboxTab />;
      case "grid": return <GridTab />;
      case "colors": return <ColorsTab />;
      default: return null;
    }
  };

  return (
    <div className="w-full h-full flex flex-col" style={{ isolation: "isolate" }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #F97316 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
      />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(circle, #F97316 0%, transparent 70%)", transform: "translate(-20%, 20%)" }}
      />

      <div className="flex border-b border-foreground/10 shrink-0">
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)}
            className="flex items-center gap-1.5 px-4 py-3 text-xs font-bold border-b-2 transition-all"
            style={tabStyle(activeTab === tab.id)}>
            <span>{tab.icon}</span>
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-6" style={{ minHeight: 0 }}>
        <AnimatePresence mode="wait">
          <motion.div key={activeTab}
            initial={{ opacity: 0.6, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.4, y: -4 }}
            transition={{ duration: 0.2 }}
            className="h-full">
            {renderTab()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
