import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shapes, PenTool, Play, Camera, Move, RotateCw, ZoomIn, Grid3x3,
  Palette, Layers, Download, Eye, Code2, GripVertical
} from "lucide-react";

type Tab = "editor" | "shapes" | "animation" | "gradients" | "dashboard";

type ShapeType = "rect" | "circle" | "ellipse" | "line" | "polygon" | "path";

const BRAND = "#06B6D4";

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "editor", label: "Editor", icon: "\u{1F58A}\u{FE0F}" },
  { id: "shapes", label: "Shapes", icon: "\u{1F537}" },
  { id: "animation", label: "Animation", icon: "\u25B6\u{FE0F}" },
  { id: "gradients", label: "Gradients", icon: "\u{1F3A8}" },
  { id: "dashboard", label: "Dashboard", icon: "\u{1F4CA}" },
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

function SliderControl({ label, value, onChange, min, max, step = 1 }: {
  label: string; value: number; onChange: (v: number) => void; min: number; max: number; step?: number;
}) {
  return (
    <div>
      <div className="flex justify-between text-[10px] text-foreground/50 mb-1">
        <span>{label}</span><span>{value}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-cyan-500"
        style={{ accentColor: BRAND }} />
    </div>
  );
}

function ColorInput({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] text-foreground/50 w-10">{label}</span>
      <input type="color" value={value} onChange={e => onChange(e.target.value)}
        className="w-8 h-8 rounded cursor-pointer border-0 bg-transparent" />
      <input type="text" value={value} onChange={e => onChange(e.target.value)}
        className="flex-1 bg-foreground/5 border border-foreground/10 rounded px-2 py-1 text-[10px] font-mono outline-none focus:border-cyan-500/50" />
    </div>
  );
}

function NumberInput({ label, value, onChange, min, max }: {
  label: string; value: number; onChange: (v: number) => void; min?: number; max?: number;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] text-foreground/50 w-8">{label}</span>
      <input type="number" value={value} onChange={e => onChange(Number(e.target.value))} min={min} max={max}
        className="flex-1 bg-foreground/5 border border-foreground/10 rounded px-2 py-1 text-[10px] font-mono outline-none focus:border-cyan-500/50" />
    </div>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-3 overflow-auto max-h-[180px]">
      <pre className="text-[10px] font-mono text-foreground/70 leading-relaxed whitespace-pre-wrap">{code}</pre>
    </div>
  );
}

const PRESETS: { label: string; svg: string }[] = [
  {
    label: "Circle",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="80" fill="#06B6D4" />
</svg>`,
  },
  {
    label: "Shapes",
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="60" height="60" fill="#06B6D4" rx="8" />
  <circle cx="150" cy="50" r="40" fill="#f59e0b" />
  <ellipse cx="260" cy="50" rx="50" ry="30" fill="#10b981" />
  <line x1="330" y1="20" x2="380" y2="80" stroke="#ef4444" stroke-width="4" />
  <polygon points="20,120 60,180 100,140 80,100 40,100" fill="#8b5cf6" />
</svg>`,
  },
  {
    label: "Path",
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M 50 150 C 50 50, 150 50, 150 150 S 250 250, 250 150" fill="none" stroke="#06B6D4" stroke-width="4" />
  <path d="M 20 180 Q 75 20, 130 180 T 260 180" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="5,5" />
</svg>`,
  },
  {
    label: "Gradient",
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06B6D4" />
      <stop offset="50%" stop-color="#8b5cf6" />
      <stop offset="100%" stop-color="#ec4899" />
    </linearGradient>
  </defs>
  <rect x="20" y="20" width="260" height="160" rx="16" fill="url(#grad1)" />
</svg>`,
  },
  {
    label: "Animation",
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="100" r="30" fill="#06B6D4">
    <animate attributeName="cx" from="50" to="250" dur="2s" repeatCount="indefinite" />
    <animate attributeName="fill" values="#06B6D4;#f59e0b;#06B6D4" dur="3s" repeatCount="indefinite" />
  </circle>
</svg>`,
  },
  {
    label: "Chart",
    svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
  <rect x="40" y="200" width="40" height="30" fill="#06B6D4" rx="4" />
  <rect x="90" y="170" width="40" height="60" fill="#06B6D4" rx="4" />
  <rect x="140" y="140" width="40" height="90" fill="#06B6D4" rx="4" />
  <rect x="190" y="100" width="40" height="130" fill="#06B6D4" rx="4" />
  <rect x="240" y="120" width="40" height="110" fill="#06B6D4" rx="4" />
  <rect x="290" y="60" width="40" height="170" fill="#06B6D4" rx="4" />
  <rect x="340" y="30" width="40" height="200" fill="#06B6D4" rx="4" />
  <line x1="30" y1="20" x2="30" y2="230" stroke="#666" stroke-width="2" />
  <line x1="30" y1="230" x2="390" y2="230" stroke="#666" stroke-width="2" />
</svg>`,
  },
];

// ── Tab 1: SVG Editor ──
function EditorTab() {
  const [svgCode, setSvgCode] = useState(`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="80" fill="#06B6D4" />
  <text x="100" y="105" text-anchor="middle" fill="white" font-size="16">SVG</text>
</svg>`);
  const [previewHtml, setPreviewHtml] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"fit" | "actual">("fit");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgCode, "image/svg+xml");
        const parseError = doc.querySelector("parsererror");
        if (parseError) {
          setError("Invalid SVG markup");
          setPreviewHtml("");
        } else {
          setPreviewHtml(svgCode);
          setError(null);
        }
      } catch {
        setError("Invalid SVG markup");
        setPreviewHtml("");
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [svgCode]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(svgCode);
    } catch {
      // fallback
    }
  }, [svgCode]);

  const handleDownload = useCallback(() => {
    const blob = new Blob([svgCode], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "graphic.svg";
    a.click();
    URL.revokeObjectURL(url);
  }, [svgCode]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 h-full">
      <div className="space-y-3 flex flex-col min-h-0">
        <SectionLabel>SVG Code</SectionLabel>
        <div className="flex gap-1.5 mb-1 flex-wrap">
          {PRESETS.map((p) => (
            <button key={p.label} onClick={() => setSvgCode(p.svg)}
              className="px-2.5 py-1 rounded-lg text-[9px] font-bold bg-foreground/5 text-foreground/50 hover:text-foreground transition-all">
              {p.label}
            </button>
          ))}
        </div>
        <textarea ref={textareaRef} value={svgCode} onChange={e => setSvgCode(e.target.value)} spellCheck={false}
          className="w-full flex-1 min-h-[260px] bg-[#1a1a2e] text-[#e0e0e0] border border-foreground/10 rounded-xl p-4 text-[11px] font-mono resize-none outline-none focus:border-cyan-500/50 transition-colors leading-relaxed" />
        {error && (
          <div className="text-red-400 text-[10px] font-mono px-2">{error}</div>
        )}
        <div className="flex gap-2">
          <button onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold bg-foreground/5 text-foreground/50 hover:text-foreground transition-all">
            <Code2 size={12} /> Copy
          </button>
          <button onClick={handleDownload}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold bg-foreground/5 text-foreground/50 hover:text-foreground transition-all">
            <Download size={12} /> Download
          </button>
          <div className="flex-1" />
          <div className="flex gap-1">
            {(["fit", "actual"] as const).map((m) => (
              <button key={m} onClick={() => setViewMode(m)}
                className={`px-2 py-1 rounded-lg text-[9px] font-bold transition-all ${
                  viewMode === m ? "text-white shadow-lg" : "text-foreground/50 bg-foreground/5"
                }`}
                style={viewMode === m ? { backgroundColor: BRAND } : {}}>
                {m === "fit" ? <ZoomIn size={10} className="inline" /> : <Move size={10} className="inline" />} {m === "fit" ? "Fit" : "Actual"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <SectionLabel>Live Preview</SectionLabel>
        <div className={`bg-white/5 border border-foreground/10 rounded-xl overflow-auto flex items-center justify-center transition-all ${viewMode === "fit" ? "min-h-[300px]" : "min-h-[400px]"}`}>
          {previewHtml ? (
            <div style={viewMode === "actual" ? { transform: "scale(1)", transformOrigin: "top left" } : { width: "100%", display: "flex", justifyContent: "center" }}>
              <div dangerouslySetInnerHTML={{ __html: previewHtml }} style={viewMode === "actual" ? {} : { maxWidth: "100%", height: "auto" }} />
            </div>
          ) : (
            <span className="text-foreground/20 text-[11px]">SVG Preview</span>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Tab 2: Shapes ──
function ShapesTab() {
  const [shapeType, setShapeType] = useState<ShapeType>("rect");
  const [fill, setFill] = useState("#06B6D4");
  const [stroke, setStroke] = useState("#ffffff");
  const [strokeWidth, setStrokeWidth] = useState(2);

  const [rect, setRect] = useState({ x: 20, y: 20, width: 160, height: 120, rx: 8, ry: 8 });
  const [circle, setCircle] = useState({ cx: 100, cy: 100, r: 70 });
  const [ellipse, setEllipse] = useState({ cx: 100, cy: 100, rx: 80, ry: 50 });
  const [line, setLine] = useState({ x1: 20, y1: 20, x2: 180, y2: 180 });
  const [polygon, setPolygon] = useState({ points: "20,20 180,20 180,180 20,180" });
  const [path, setPath] = useState({ d: "M 20 180 Q 100 20, 180 180" });

  const svgCode = useMemo(() => {
    let inner = "";
    switch (shapeType) {
      case "rect":
        inner = `<rect x="${rect.x}" y="${rect.y}" width="${rect.width}" height="${rect.height}" rx="${rect.rx}" ry="${rect.ry}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" />`;
        break;
      case "circle":
        inner = `<circle cx="${circle.cx}" cy="${circle.cy}" r="${circle.r}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" />`;
        break;
      case "ellipse":
        inner = `<ellipse cx="${ellipse.cx}" cy="${ellipse.cy}" rx="${ellipse.rx}" ry="${ellipse.ry}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" />`;
        break;
      case "line":
        inner = `<line x1="${line.x1}" y1="${line.y1}" x2="${line.x2}" y2="${line.y2}" stroke="${stroke}" stroke-width="${strokeWidth}" />`;
        break;
      case "polygon":
        inner = `<polygon points="${polygon.points}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" />`;
        break;
      case "path":
        inner = `<path d="${path.d}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" />`;
        break;
    }
    return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">\n  ${inner}\n</svg>`;
  }, [shapeType, fill, stroke, strokeWidth, rect, circle, ellipse, line, polygon, path]);

  function shapeControlBlock() {
    switch (shapeType) {
      case "rect":
        return (
          <div className="space-y-3">
            <NumberInput label="x" value={rect.x} onChange={v => setRect(p => ({ ...p, x: v }))} />
            <NumberInput label="y" value={rect.y} onChange={v => setRect(p => ({ ...p, y: v }))} />
            <NumberInput label="w" value={rect.width} onChange={v => setRect(p => ({ ...p, width: v }))} min={10} max={380} />
            <NumberInput label="h" value={rect.height} onChange={v => setRect(p => ({ ...p, height: v }))} min={10} max={380} />
            <SliderControl label="rx" value={rect.rx} onChange={v => setRect(p => ({ ...p, rx: v }))} min={0} max={50} />
            <SliderControl label="ry" value={rect.ry} onChange={v => setRect(p => ({ ...p, ry: v }))} min={0} max={50} />
          </div>
        );
      case "circle":
        return (
          <div className="space-y-3">
            <NumberInput label="cx" value={circle.cx} onChange={v => setCircle(p => ({ ...p, cx: v }))} min={0} max={200} />
            <NumberInput label="cy" value={circle.cy} onChange={v => setCircle(p => ({ ...p, cy: v }))} min={0} max={200} />
            <SliderControl label="r" value={circle.r} onChange={v => setCircle(p => ({ ...p, r: v }))} min={5} max={100} />
          </div>
        );
      case "ellipse":
        return (
          <div className="space-y-3">
            <NumberInput label="cx" value={ellipse.cx} onChange={v => setEllipse(p => ({ ...p, cx: v }))} min={0} max={200} />
            <NumberInput label="cy" value={ellipse.cy} onChange={v => setEllipse(p => ({ ...p, cy: v }))} min={0} max={200} />
            <SliderControl label="rx" value={ellipse.rx} onChange={v => setEllipse(p => ({ ...p, rx: v }))} min={5} max={100} />
            <SliderControl label="ry" value={ellipse.ry} onChange={v => setEllipse(p => ({ ...p, ry: v }))} min={5} max={100} />
          </div>
        );
      case "line":
        return (
          <div className="space-y-3">
            <NumberInput label="x1" value={line.x1} onChange={v => setLine(p => ({ ...p, x1: v }))} />
            <NumberInput label="y1" value={line.y1} onChange={v => setLine(p => ({ ...p, y1: v }))} />
            <NumberInput label="x2" value={line.x2} onChange={v => setLine(p => ({ ...p, x2: v }))} />
            <NumberInput label="y2" value={line.y2} onChange={v => setLine(p => ({ ...p, y2: v }))} />
          </div>
        );
      case "polygon":
        return (
          <div>
            <div className="flex justify-between text-[10px] text-foreground/50 mb-1"><span>points</span></div>
            <textarea value={polygon.points} onChange={e => setPolygon(p => ({ ...p, points: e.target.value }))}
              className="w-full bg-foreground/5 border border-foreground/10 rounded px-2 py-1 text-[10px] font-mono outline-none focus:border-cyan-500/50 h-16 resize-none" />
          </div>
        );
      case "path":
        return (
          <div>
            <div className="flex justify-between text-[10px] text-foreground/50 mb-1"><span>d attribute</span></div>
            <textarea value={path.d} onChange={e => setPath(p => ({ ...p, d: e.target.value }))}
              className="w-full bg-foreground/5 border border-foreground/10 rounded px-2 py-1 text-[10px] font-mono outline-none focus:border-cyan-500/50 h-16 resize-none" />
          </div>
        );
    }
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="xl:col-span-1 space-y-4">
        <SectionLabel>Shape Type</SectionLabel>
        <div className="flex flex-wrap gap-1.5">
          {(["rect", "circle", "ellipse", "line", "polygon", "path"] as ShapeType[]).map((t) => (
            <button key={t} onClick={() => setShapeType(t)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all capitalize ${
                shapeType === t ? "text-white shadow-lg" : "text-foreground/50 bg-foreground/5 hover:text-foreground"
              }`}
              style={shapeType === t ? { backgroundColor: BRAND } : {}}>
              {t}
            </button>
          ))}
        </div>
        <SectionLabel>Properties</SectionLabel>
        <div className="space-y-3 px-1">
          {shapeControlBlock()}
          <div className="border-t border-foreground/10 pt-3 mt-3 space-y-2">
            <ColorInput label="Fill" value={fill} onChange={setFill} />
            <ColorInput label="Stroke" value={stroke} onChange={setStroke} />
            <SliderControl label="Stroke W" value={strokeWidth} onChange={setStrokeWidth} min={0} max={20} />
          </div>
        </div>
      </div>

      <div className="xl:col-span-2 space-y-4">
        <SectionLabel>Preview</SectionLabel>
        <div className="bg-white/5 border border-foreground/10 rounded-xl flex items-center justify-center min-h-[260px] p-4">
          <div dangerouslySetInnerHTML={{ __html: svgCode }} />
        </div>
        <SectionLabel>Generated Code</SectionLabel>
        <CodeBlock code={svgCode} />
      </div>
    </div>
  );
}

// ── Tab 3: Animation ──
function AnimationTab() {
  const [animTarget, setAnimTarget] = useState<"circle" | "rect" | "line" | "text">("circle");
  const [animType, setAnimType] = useState<"position" | "css" | "keyframe">("position");
  const [duration, setDuration] = useState(2);
  const [property, setProperty] = useState("cx");
  const [targetValue, setTargetValue] = useState("250");
  const [repeatCount, setRepeatCount] = useState("indefinite");
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const animRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  const baseSvg = useMemo(() => {
    switch (animTarget) {
      case "circle": return `<circle cx="50" cy="100" r="30" fill="#06B6D4" />`;
      case "rect": return `<rect x="30" y="70" width="60" height="60" rx="8" fill="#06B6D4" />`;
      case "line": return `<line x1="30" y1="30" x2="170" y2="170" stroke="#06B6D4" stroke-width="6" stroke-linecap="round" />`;
      case "text": return `<text x="50" y="110" fill="#06B6D4" font-size="32" font-weight="bold">SVG</text>`;
    }
  }, [animTarget]);

  const animSvg = useMemo(() => {
    let animTag = "";
    if (animType === "position") {
      animTag = `<animate attributeName="${property}" from="50" to="${targetValue}" dur="${duration}s" repeatCount="${repeatCount}" />`;
    } else if (animType === "css") {
      animTag = `<animate attributeName="${property}" values="#06B6D4;${targetValue};#06B6D4" dur="${duration}s" repeatCount="${repeatCount}" />`;
    } else {
      animTag = `<animate attributeName="${property}" values="50;${targetValue};50" keyTimes="0;0.5;1" dur="${duration}s" repeatCount="${repeatCount}" />`;
    }
    const el = baseSvg.replace("/>", `>\n    ${animTag}\n  </${animTarget}>`);
    return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">\n  ${el}\n</svg>`;
  }, [baseSvg, animType, property, targetValue, duration, repeatCount, animTarget]);

  const playAnim = useCallback(() => {
    if (isPlaying) {
      setIsPlaying(false);
      cancelAnimationFrame(animRef.current);
      return;
    }
    setIsPlaying(true);
    startTimeRef.current = performance.now();
    const totalMs = duration * 1000;
    function tick(now: number) {
      const elapsed = now - startTimeRef.current;
      const p = Math.min(elapsed / totalMs, 1);
      setProgress(p);
      if (p < 1) {
        animRef.current = requestAnimationFrame(tick);
      } else if (repeatCount === "indefinite") {
        startTimeRef.current = performance.now();
        setProgress(0);
        animRef.current = requestAnimationFrame(tick);
      } else {
        setIsPlaying(false);
        setProgress(1);
      }
    }
    animRef.current = requestAnimationFrame(tick);
  }, [isPlaying, duration, repeatCount]);

  const resetAnim = useCallback(() => {
    setIsPlaying(false);
    cancelAnimationFrame(animRef.current);
    setProgress(0);
  }, []);

  useEffect(() => {
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const properties = useMemo(() => {
    switch (animTarget) {
      case "circle": return ["cx", "cy", "r", "fill", "opacity"];
      case "rect": return ["x", "y", "width", "height", "fill", "opacity"];
      case "line": return ["x1", "y1", "x2", "y2", "opacity"];
      case "text": return ["x", "y", "fill", "opacity", "font-size"];
    }
  }, [animTarget]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="xl:col-span-1 space-y-4">
        <SectionLabel>Target Element</SectionLabel>
        <div className="flex gap-1.5">
          {(["circle", "rect", "line", "text"] as const).map((t) => (
            <button key={t} onClick={() => setAnimTarget(t)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all capitalize ${
                animTarget === t ? "text-white shadow-lg" : "text-foreground/50 bg-foreground/5 hover:text-foreground"
              }`}
              style={animTarget === t ? { backgroundColor: BRAND } : {}}>
              {t}
            </button>
          ))}
        </div>

        <SectionLabel>Animation Type</SectionLabel>
        <div className="flex flex-wrap gap-1.5">
          {(["position", "css", "keyframe"] as const).map((t) => (
            <button key={t} onClick={() => setAnimType(t)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all capitalize ${
                animType === t ? "text-white shadow-lg" : "text-foreground/50 bg-foreground/5 hover:text-foreground"
              }`}
              style={animType === t ? { backgroundColor: BRAND } : {}}>
              {t === "position" ? "SMIL Position" : t === "css" ? "CSS Transition" : "Keyframe"}
            </button>
          ))}
        </div>

        <SectionLabel>Controls</SectionLabel>
        <div className="space-y-3 px-1">
          <SliderControl label="Duration (s)" value={duration} onChange={setDuration} min={0.5} max={10} step={0.5} />

          <div>
            <div className="flex justify-between text-[10px] text-foreground/50 mb-1"><span>Property</span></div>
            <select value={property} onChange={e => setProperty(e.target.value)}
              className="w-full bg-foreground/5 border border-foreground/10 rounded px-2 py-1.5 text-[10px] font-mono outline-none focus:border-cyan-500/50">
              {properties.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>

          <div>
            <div className="flex justify-between text-[10px] text-foreground/50 mb-1"><span>Target Value</span></div>
            <input type="text" value={targetValue} onChange={e => setTargetValue(e.target.value)}
              className="w-full bg-foreground/5 border border-foreground/10 rounded px-2 py-1.5 text-[10px] font-mono outline-none focus:border-cyan-500/50" />
          </div>

          <div>
            <div className="flex justify-between text-[10px] text-foreground/50 mb-1"><span>Repeat</span></div>
            <select value={repeatCount} onChange={e => setRepeatCount(e.target.value)}
              className="w-full bg-foreground/5 border border-foreground/10 rounded px-2 py-1.5 text-[10px] font-mono outline-none focus:border-cyan-500/50">
              <option value="indefinite">Infinite</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="flex gap-2 pt-2">
            <button onClick={playAnim}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-[10px] font-bold text-white shadow-lg transition-all"
              style={{ backgroundColor: BRAND }}>
              <Play size={12} /> {isPlaying ? "Pause" : "Play"}
            </button>
            <button onClick={resetAnim}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[10px] font-bold bg-foreground/5 text-foreground/50 hover:text-foreground transition-all">
              <RotateCw size={12} /> Reset
            </button>
          </div>

          {isPlaying && (
            <div className="bg-foreground/5 rounded-lg p-3">
              <div className="flex justify-between text-[9px] text-foreground/40 mb-1">
                <span>Progress</span><span>{Math.round(progress * 100)}%</span>
              </div>
              <div className="h-1.5 bg-foreground/10 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all" style={{ width: `${progress * 100}%`, backgroundColor: BRAND }} />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="xl:col-span-2 space-y-4">
        <SectionLabel>Animation Preview</SectionLabel>
        <div className="bg-white/5 border border-foreground/10 rounded-xl flex items-center justify-center min-h-[240px] p-4">
          <div key={`${animTarget}-${animType}-${property}-${duration}`} dangerouslySetInnerHTML={{ __html: animSvg }} />
        </div>
        <SectionLabel>Generated Code</SectionLabel>
        <CodeBlock code={animSvg} />
      </div>
    </div>
  );
}

// ── Tab 4: Gradients & Filters ──
function GradientsTab() {
  const [gradientType, setGradientType] = useState<"linear" | "radial">("linear");
  const [filterType, setFilterType] = useState<"none" | "shadow" | "blur" | "color">("none");

  const [x1, setX1] = useState("0%");
  const [y1, setY1] = useState("0%");
  const [x2, setX2] = useState("100%");
  const [y2, setY2] = useState("100%");
  const [cx, setCx] = useState("50%");
  const [cy, setCy] = useState("50%");
  const [r, setR] = useState("50%");

  const [stop1Color, setStop1Color] = useState("#06B6D4");
  const [stop1Offset, setStop1Offset] = useState(0);
  const [stop2Color, setStop2Color] = useState("#8b5cf6");
  const [stop2Offset, setStop2Offset] = useState(50);
  const [stop3Color, setStop3Color] = useState("#ec4899");
  const [stop3Offset, setStop3Offset] = useState(100);

  const [shadowDx, setShadowDx] = useState(5);
  const [shadowDy, setShadowDy] = useState(5);
  const [shadowStdDev, setShadowStdDev] = useState(5);
  const [shadowColor, setShadowColor] = useState("#000000");
  const [shadowOpacity, setShadowOpacity] = useState(0.5);

  const [blurStdDev, setBlurStdDev] = useState(4);

  const [shapeFillColor, setShapeFillColor] = useState("url(#grad)");

  const svgCode = useMemo(() => {
    const defs: string[] = [];

    if (gradientType === "linear") {
      defs.push(`    <linearGradient id="grad" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">\n      <stop offset="${stop1Offset}%" stop-color="${stop1Color}" />\n      <stop offset="${stop2Offset}%" stop-color="${stop2Color}" />\n      <stop offset="${stop3Offset}%" stop-color="${stop3Color}" />\n    </linearGradient>`);
    } else {
      defs.push(`    <radialGradient id="grad" cx="${cx}" cy="${cy}" r="${r}">\n      <stop offset="${stop1Offset}%" stop-color="${stop1Color}" />\n      <stop offset="${stop2Offset}%" stop-color="${stop2Color}" />\n      <stop offset="${stop3Offset}%" stop-color="${stop3Color}" />\n    </radialGradient>`);
    }

    if (filterType === "shadow") {
      defs.push(`    <filter id="fx" x="-20%" y="-20%" width="140%" height="140%">\n      <feDropShadow dx="${shadowDx}" dy="${shadowDy}" stdDeviation="${shadowStdDev}" flood-color="${shadowColor}" flood-opacity="${shadowOpacity}" />\n    </filter>`);
    } else if (filterType === "blur") {
      defs.push(`    <filter id="fx">\n      <feGaussianBlur stdDeviation="${blurStdDev}" />\n    </filter>`);
    } else if (filterType === "color") {
      defs.push(`    <filter id="fx">\n      <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" />\n    </filter>`);
    }

    const fillAttr = filterType !== "none" ? "url(#grad)" : "url(#grad)";
    const filterAttr = filterType !== "none" ? ` filter="url(#fx)"` : "";

    return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">\n  <defs>\n${defs.join("\n")}\n  </defs>\n  <rect x="30" y="20" width="240" height="160" rx="20" fill="${fillAttr}"${filterAttr} />\n</svg>`;
  }, [gradientType, filterType, x1, y1, x2, y2, cx, cy, r, stop1Color, stop1Offset, stop2Color, stop2Offset, stop3Color, stop3Offset, shadowDx, shadowDy, shadowStdDev, shadowColor, shadowOpacity, blurStdDev]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="xl:col-span-1 space-y-4">
        <SectionLabel>Gradient Type</SectionLabel>
        <div className="flex gap-1.5">
          {(["linear", "radial"] as const).map((t) => (
            <button key={t} onClick={() => setGradientType(t)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all capitalize ${
                gradientType === t ? "text-white shadow-lg" : "text-foreground/50 bg-foreground/5 hover:text-foreground"
              }`}
              style={gradientType === t ? { backgroundColor: BRAND } : {}}>
              {t}
            </button>
          ))}
        </div>

        {gradientType === "linear" ? (
          <div className="space-y-2 px-1">
            <SectionLabel>Linear Controls</SectionLabel>
            <div>
              <div className="flex justify-between text-[10px] text-foreground/50 mb-1"><span>x1</span></div>
              <input type="text" value={x1} onChange={e => setX1(e.target.value)}
                className="w-full bg-foreground/5 border border-foreground/10 rounded px-2 py-1.5 text-[10px] font-mono outline-none focus:border-cyan-500/50" />
            </div>
            <div>
              <div className="flex justify-between text-[10px] text-foreground/50 mb-1"><span>y1</span></div>
              <input type="text" value={y1} onChange={e => setY1(e.target.value)}
                className="w-full bg-foreground/5 border border-foreground/10 rounded px-2 py-1.5 text-[10px] font-mono outline-none focus:border-cyan-500/50" />
            </div>
            <div>
              <div className="flex justify-between text-[10px] text-foreground/50 mb-1"><span>x2</span></div>
              <input type="text" value={x2} onChange={e => setX2(e.target.value)}
                className="w-full bg-foreground/5 border border-foreground/10 rounded px-2 py-1.5 text-[10px] font-mono outline-none focus:border-cyan-500/50" />
            </div>
            <div>
              <div className="flex justify-between text-[10px] text-foreground/50 mb-1"><span>y2</span></div>
              <input type="text" value={y2} onChange={e => setY2(e.target.value)}
                className="w-full bg-foreground/5 border border-foreground/10 rounded px-2 py-1.5 text-[10px] font-mono outline-none focus:border-cyan-500/50" />
            </div>
          </div>
        ) : (
          <div className="space-y-2 px-1">
            <SectionLabel>Radial Controls</SectionLabel>
            <div>
              <div className="flex justify-between text-[10px] text-foreground/50 mb-1"><span>cx</span></div>
              <input type="text" value={cx} onChange={e => setCx(e.target.value)}
                className="w-full bg-foreground/5 border border-foreground/10 rounded px-2 py-1.5 text-[10px] font-mono outline-none focus:border-cyan-500/50" />
            </div>
            <div>
              <div className="flex justify-between text-[10px] text-foreground/50 mb-1"><span>cy</span></div>
              <input type="text" value={cy} onChange={e => setCy(e.target.value)}
                className="w-full bg-foreground/5 border border-foreground/10 rounded px-2 py-1.5 text-[10px] font-mono outline-none focus:border-cyan-500/50" />
            </div>
            <div>
              <div className="flex justify-between text-[10px] text-foreground/50 mb-1"><span>r</span></div>
              <input type="text" value={r} onChange={e => setR(e.target.value)}
                className="w-full bg-foreground/5 border border-foreground/10 rounded px-2 py-1.5 text-[10px] font-mono outline-none focus:border-cyan-500/50" />
            </div>
          </div>
        )}

        <SectionLabel>Color Stops</SectionLabel>
        <div className="space-y-2 px-1">
          <ColorInput label="Stop 1" value={stop1Color} onChange={setStop1Color} />
          <SliderControl label="Offset 1" value={stop1Offset} onChange={setStop1Offset} min={0} max={100} />
          <ColorInput label="Stop 2" value={stop2Color} onChange={setStop2Color} />
          <SliderControl label="Offset 2" value={stop2Offset} onChange={setStop2Offset} min={0} max={100} />
          <ColorInput label="Stop 3" value={stop3Color} onChange={setStop3Color} />
          <SliderControl label="Offset 3" value={stop3Offset} onChange={setStop3Offset} min={0} max={100} />
        </div>

        <SectionLabel>Filter Type</SectionLabel>
        <div className="flex flex-wrap gap-1.5">
          {(["none", "shadow", "blur", "color"] as const).map((t) => (
            <button key={t} onClick={() => setFilterType(t)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all capitalize ${
                filterType === t ? "text-white shadow-lg" : "text-foreground/50 bg-foreground/5 hover:text-foreground"
              }`}
              style={filterType === t ? { backgroundColor: BRAND } : {}}>
              {t === "none" ? "None" : t === "shadow" ? "Drop Shadow" : t === "blur" ? "Blur" : "Color Matrix"}
            </button>
          ))}
        </div>

        {filterType === "shadow" && (
          <div className="space-y-2 px-1">
            <SliderControl label="dx" value={shadowDx} onChange={setShadowDx} min={-20} max={20} />
            <SliderControl label="dy" value={shadowDy} onChange={setShadowDy} min={-20} max={20} />
            <SliderControl label="Std Dev" value={shadowStdDev} onChange={setShadowStdDev} min={0} max={20} />
            <ColorInput label="Color" value={shadowColor} onChange={setShadowColor} />
            <SliderControl label="Opacity" value={shadowOpacity} onChange={setShadowOpacity} min={0} max={1} step={0.05} />
          </div>
        )}

        {filterType === "blur" && (
          <div className="space-y-2 px-1">
            <SliderControl label="Std Dev" value={blurStdDev} onChange={setBlurStdDev} min={0} max={20} />
          </div>
        )}
      </div>

      <div className="xl:col-span-2 space-y-4">
        <SectionLabel>Preview</SectionLabel>
        <div className="bg-white/5 border border-foreground/10 rounded-xl flex items-center justify-center min-h-[240px] p-4">
          <div dangerouslySetInnerHTML={{ __html: svgCode }} />
        </div>
        <SectionLabel>Generated Code</SectionLabel>
        <CodeBlock code={svgCode} />
      </div>
    </div>
  );
}

// ── Tab 5: Dashboard ──
function DashboardTab() {
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");
  const [showLabels, setShowLabels] = useState(true);
  const [showGrid, setShowGrid] = useState(true);
  const [animEntrance, setAnimEntrance] = useState(false);

  const monthlyData = useMemo(() => [
    { month: "Jan", value: 42 },
    { month: "Feb", value: 58 },
    { month: "Mar", value: 75 },
    { month: "Apr", value: 63 },
    { month: "May", value: 91 },
    { month: "Jun", value: 110 },
  ], []);

  const maxVal = Math.max(...monthlyData.map(d => d.value));
  const chartW = 350;
  const chartH = 200;
  const padL = 40;
  const padR = 20;
  const padT = 20;
  const padB = 30;
  const innerW = chartW - padL - padR;
  const innerH = chartH - padT - padB;

  const barChartSvg = useMemo(() => {
    const barW = Math.floor(innerW / monthlyData.length * 0.6);
    const gap = Math.floor(innerW / monthlyData.length * 0.4);
    const bars = monthlyData.map((d, i) => {
      const barH = (d.value / maxVal) * innerH;
      const x = padL + i * (barW + gap) + gap / 2;
      const y = padT + innerH - barH;
      return `<rect x="${x}" y="${y}" width="${barW}" height="${barH}" rx="4" fill="#06B6D4" opacity="0.85">
        ${animEntrance ? `<animate attributeName="height" from="0" to="${barH}" dur="0.5s" begin="${i * 0.1}s" fill="freeze" />
        <animate attributeName="y" from="${padT + innerH}" to="${y}" dur="0.5s" begin="${i * 0.1}s" fill="freeze" />` : ""}
      </rect>
      ${showLabels ? `<text x="${x + barW / 2}" y="${padT + innerH + 16}" text-anchor="middle" fill="hsl(var(--foreground)/0.4)" font-size="8">${d.month}</text>` : ""}
      ${showLabels ? `<text x="${x + barW / 2}" y="${y - 6}" text-anchor="middle" fill="#06B6D4" font-size="8" font-weight="bold">${d.value}</text>` : ""}`;
    }).join("\n    ");

    const gridLines = showGrid ? Array.from({ length: 5 }, (_, i) => {
      const y = padT + (innerH / 5) * i;
      const val = Math.round(maxVal - (maxVal / 5) * i);
      return `<line x1="${padL}" y1="${y}" x2="${chartW - padR}" y2="${y}" stroke="hsl(var(--foreground)/0.08)" stroke-width="1" />
      <text x="${padL - 4}" y="${y + 3}" text-anchor="end" fill="hsl(var(--foreground)/0.3)" font-size="7">${val}</text>`;
    }).join("\n    ") : "";

    return `<svg viewBox="0 0 ${chartW} ${chartH}" xmlns="http://www.w3.org/2000/svg">
    ${gridLines}
    ${bars}
  </svg>`;
  }, [monthlyData, maxVal, chartW, chartH, padL, padR, padT, padB, innerW, innerH, showLabels, showGrid, animEntrance]);

  const lineChartSvg = useMemo(() => {
    const points = monthlyData.map((d, i) => {
      const x = padL + (i / (monthlyData.length - 1)) * innerW;
      const y = padT + innerH - (d.value / maxVal) * innerH;
      return `${x},${y}`;
    }).join(" ");

    const dots = monthlyData.map((d, i) => {
      const x = padL + (i / (monthlyData.length - 1)) * innerW;
      const y = padT + innerH - (d.value / maxVal) * innerH;
      return `<circle cx="${x}" cy="${y}" r="4" fill="#06B6D4" stroke="hsl(var(--background))" stroke-width="2">
        ${animEntrance ? `<animate attributeName="r" from="0" to="4" dur="0.3s" begin="${0.3 + i * 0.1}s" fill="freeze" />` : ""}
      </circle>
      ${showLabels ? `<text x="${x}" y="${y - 8}" text-anchor="middle" fill="#06B6D4" font-size="8" font-weight="bold">${d.value}</text>` : ""}`;
    }).join("\n    ");

    const labels = showLabels ? monthlyData.map((d, i) => {
      const x = padL + (i / (monthlyData.length - 1)) * innerW;
      return `<text x="${x}" y="${padT + innerH + 16}" text-anchor="middle" fill="hsl(var(--foreground)/0.4)" font-size="8">${d.month}</text>`;
    }).join("\n    ") : "";

    const gridLines = showGrid ? Array.from({ length: 5 }, (_, i) => {
      const y = padT + (innerH / 5) * i;
      const val = Math.round(maxVal - (maxVal / 5) * i);
      return `<line x1="${padL}" y1="${y}" x2="${chartW - padR}" y2="${y}" stroke="hsl(var(--foreground)/0.08)" stroke-width="1" />
      <text x="${padL - 4}" y="${y + 3}" text-anchor="end" fill="hsl(var(--foreground)/0.3)" font-size="7">${val}</text>`;
    }).join("\n    ") : "";

    return `<svg viewBox="0 0 ${chartW} ${chartH}" xmlns="http://www.w3.org/2000/svg">
    ${gridLines}
    <polyline points="${points}" fill="none" stroke="#06B6D4" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      ${animEntrance ? `<animate attributeName="stroke-dashoffset" from="${innerW * 2}" to="0" dur="1s" fill="freeze" />` : ""}
    </polyline>
    ${animEntrance ? `<style>polyline { stroke-dasharray: ${innerW * 2}; }</style>` : ""}
    ${dots}
    ${labels}
  </svg>`;
  }, [monthlyData, maxVal, chartW, chartH, padL, padR, padT, padB, innerW, innerH, showLabels, showGrid, animEntrance]);

  const pieChartSvg = useMemo(() => {
    const total = monthlyData.reduce((s, d) => s + d.value, 0);
    const cx = chartW / 2;
    const cy = chartH / 2 + 10;
    const radius = 75;
    const colors = ["#06B6D4", "#8b5cf6", "#f59e0b", "#10b981", "#ef4444", "#ec4899"];

    let cumPct = 0;
    const slices = monthlyData.map((d, i) => {
      const pct = d.value / total;
      const angle = pct * 360;
      const startAngle = cumPct * 360;
      cumPct += pct;
      const endAngle = startAngle + angle;

      const startRad = ((startAngle - 90) * Math.PI) / 180;
      const endRad = ((endAngle - 90) * Math.PI) / 180;

      const x1 = cx + radius * Math.cos(startRad);
      const y1 = cy + radius * Math.sin(startRad);
      const x2 = cx + radius * Math.cos(endRad);
      const y2 = cy + radius * Math.sin(endRad);

      const largeArc = angle > 180 ? 1 : 0;
      const pathData = `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;

      const labelAngle = ((startAngle + endAngle) / 2 - 90) * Math.PI / 180;
      const labelR = radius * 0.65;
      const lx = cx + labelR * Math.cos(labelAngle);
      const ly = cy + labelR * Math.sin(labelAngle);

      return `<path d="${pathData}" fill="${colors[i % colors.length]}" stroke="hsl(var(--background))" stroke-width="2">
        ${animEntrance ? `<animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="${i * 0.1}s" fill="freeze" />` : ""}
      </path>
      ${showLabels ? `<text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="central" fill="white" font-size="7" font-weight="bold">${Math.round(pct * 100)}%</text>` : ""}`;
    }).join("\n    ");

    return `<svg viewBox="0 0 ${chartW} 240" xmlns="http://www.w3.org/2000/svg">
    ${slices}
    <g transform="translate(0, 200)">
      ${monthlyData.map((d, i) => `<rect x="${i * 55}" y="0" width="10" height="10" fill="${colors[i % colors.length]}" rx="2" />
        <text x="${i * 55 + 14}" y="8" fill="hsl(var(--foreground)/0.5)" font-size="7">${d.month}</text>`).join("\n      ")}
    </g>
  </svg>`;
  }, [monthlyData, chartW, chartH, showLabels, animEntrance]);

  const chartSvg = useMemo(() => {
    switch (chartType) {
      case "bar": return barChartSvg;
      case "line": return lineChartSvg;
      case "pie": return pieChartSvg;
    }
  }, [chartType, barChartSvg, lineChartSvg, pieChartSvg]);

  const ringProgressSvg = `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--foreground)/0.1)" stroke-width="10" />
  <circle cx="60" cy="60" r="50" fill="none" stroke="#06B6D4" stroke-width="10" stroke-linecap="round"
    stroke-dasharray="${2 * Math.PI * 50}" stroke-dashoffset="${2 * Math.PI * 50 * (1 - 0.72)}"
    transform="rotate(-90 60 60)" />
  <text x="60" y="60" text-anchor="middle" dominant-baseline="central" fill="#06B6D4" font-size="22" font-weight="bold">72%</text>
</svg>`;

  const kpiIndicators = [
    { label: "Revenue", value: "$84.2K", change: "+12.5%", up: true },
    { label: "Users", value: "2,847", change: "+8.3%", up: true },
    { label: "Conversion", value: "3.42%", change: "-0.8%", up: false },
    { label: "Avg Order", value: "$129", change: "+5.1%", up: true },
  ];

  return (
    <div className="space-y-4 h-full overflow-auto">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-1 space-y-4">
          <SectionLabel>Chart Type</SectionLabel>
          <div className="flex gap-1.5">
            {(["bar", "line", "pie"] as const).map((t) => (
              <button key={t} onClick={() => setChartType(t)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all capitalize ${
                  chartType === t ? "text-white shadow-lg" : "text-foreground/50 bg-foreground/5 hover:text-foreground"
                }`}
                style={chartType === t ? { backgroundColor: BRAND } : {}}>
                {t}
              </button>
            ))}
          </div>
          <SectionLabel>Options</SectionLabel>
          <div className="space-y-2 px-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={showLabels} onChange={e => setShowLabels(e.target.checked)}
                className="rounded accent-cyan-500" style={{ accentColor: BRAND }} />
              <span className="text-[10px] text-foreground/50">Show Labels</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={showGrid} onChange={e => setShowGrid(e.target.checked)}
                className="rounded accent-cyan-500" style={{ accentColor: BRAND }} />
              <span className="text-[10px] text-foreground/50">Show Gridlines</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={animEntrance} onChange={e => setAnimEntrance(e.target.checked)}
                className="rounded accent-cyan-500" style={{ accentColor: BRAND }} />
              <span className="text-[10px] text-foreground/50">Animated Entrance</span>
            </label>
          </div>

          <SectionLabel>Data (Monthly Sales)</SectionLabel>
          <div className="space-y-1 px-1">
            {monthlyData.map(d => (
              <div key={d.month} className="flex items-center gap-2 text-[10px]">
                <span className="text-foreground/50 w-6">{d.month}</span>
                <div className="flex-1 h-3 bg-foreground/5 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${(d.value / maxVal) * 100}%`, backgroundColor: BRAND }} />
                </div>
                <span className="text-foreground/70 font-mono w-8 text-right">{d.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="xl:col-span-2 space-y-4">
          <SectionLabel>Chart Preview</SectionLabel>
          <div className="bg-white/5 border border-foreground/10 rounded-xl flex items-center justify-center min-h-[260px] p-4">
            <div dangerouslySetInnerHTML={{ __html: chartSvg }} />
          </div>
          <SectionLabel>Generated Code</SectionLabel>
          <CodeBlock code={chartSvg} />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-5 gap-4">
        <div className="xl:col-span-1 space-y-4">
          <SectionLabel>Ring Progress</SectionLabel>
          <div className="bg-white/5 border border-foreground/10 rounded-xl flex items-center justify-center p-4 min-h-[160px]">
            <div dangerouslySetInnerHTML={{ __html: ringProgressSvg }} />
          </div>
          <CodeBlock code={ringProgressSvg} />
        </div>

        <div className="xl:col-span-4 space-y-4">
          <SectionLabel>KPI Indicators</SectionLabel>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
            {kpiIndicators.map(kpi => (
              <div key={kpi.label} className="bg-white/5 border border-foreground/10 rounded-xl p-4">
                <div className="text-[9px] font-bold tracking-wider text-foreground/40 uppercase mb-1">{kpi.label}</div>
                <div className="text-lg font-bold text-foreground/90">{kpi.value}</div>
                <div className={`text-[10px] font-semibold mt-1 ${kpi.up ? "text-green-400" : "text-red-400"}`}>
                  {kpi.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SVGPlayground() {
  const [activeTab, setActiveTab] = useState<Tab>("editor");

  return (
    <div className="flex flex-col h-full">
      <div className="flex gap-0.5 mb-4 border-b border-foreground/10 px-1">
        {tabs.map((t) => (
          <button key={t.id} onClick={() => setActiveTab(t.id)}
            className="flex items-center gap-1.5 px-4 py-2.5 text-[10px] font-bold border-b-2 transition-all"
            style={tabStyle(activeTab === t.id)}>
            <span>{t.icon}</span>
            <span>{t.label}</span>
          </button>
        ))}
      </div>

      <div className="flex-1 min-h-0">
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.15 }} className="h-full">
            {activeTab === "editor" && <EditorTab />}
            {activeTab === "shapes" && <ShapesTab />}
            {activeTab === "animation" && <AnimationTab />}
            {activeTab === "gradients" && <GradientsTab />}
            {activeTab === "dashboard" && <DashboardTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
