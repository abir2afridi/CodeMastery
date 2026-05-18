import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "editor" | "chart" | "data" | "config" | "export";

const BRAND = "#11557C";

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "editor", label: "Python Editor", icon: "\u{1F4DD}" },
  { id: "chart", label: "Chart Preview", icon: "\u{1F4CA}" },
  { id: "data", label: "Datasets", icon: "\u{1F4CB}" },
  { id: "config", label: "Customize", icon: "\u{2699}\u{FE0F}" },
  { id: "export", label: "Export", icon: "\u{1F4E5}" },
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

// ── Mock Datasets ──
const datasets: Record<string, { columns: string[]; rows: (string | number)[][] }> = {
  iris: {
    columns: ["sepal_length", "sepal_width", "petal_length", "petal_width", "species"],
    rows: [
      [5.1, 3.5, 1.4, 0.2, "setosa"], [4.9, 3.0, 1.4, 0.2, "setosa"], [4.7, 3.2, 1.3, 0.2, "setosa"],
      [6.3, 3.3, 4.7, 1.6, "versicolor"], [5.8, 2.7, 3.9, 1.2, "versicolor"], [6.0, 2.7, 5.1, 1.6, "versicolor"],
      [6.7, 3.0, 5.2, 2.3, "virginica"], [6.9, 3.1, 5.4, 2.1, "virginica"], [5.7, 2.8, 4.1, 1.3, "virginica"],
    ],
  },
  titanic: {
    columns: ["PassengerId", "Survived", "Pclass", "Name", "Sex", "Age", "Fare"],
    rows: [
      [1, 0, 3, "Braund, Mr. Owen Harris", "male", 22, 7.25],
      [2, 1, 1, "Cumings, Mrs. John Bradley", "female", 38, 71.28],
      [3, 1, 3, "Heikkinen, Miss. Laina", "female", 26, 7.92],
      [4, 1, 1, "Futrelle, Mrs. Jacques Heath", "female", 35, 53.1],
      [5, 0, 3, "Allen, Mr. William Henry", "male", 35, 8.05],
      [6, 0, 3, "Moran, Mr. James", "male", 27, 8.46],
    ],
  },
  stock: {
    columns: ["Date", "Open", "High", "Low", "Close", "Volume"],
    rows: [
      ["2024-01-02", 152.5, 154.8, 151.2, 153.6, 58_200_000],
      ["2024-01-03", 153.6, 156.3, 152.8, 155.2, 62_100_000],
      ["2024-01-04", 155.2, 157.1, 154.0, 156.7, 55_800_000],
      ["2024-01-05", 156.7, 158.5, 155.3, 157.9, 61_500_000],
      ["2024-01-08", 157.9, 160.2, 156.8, 159.4, 59_900_000],
      ["2024-01-09", 159.4, 161.0, 158.2, 160.8, 57_400_000],
    ],
  },
  weather: {
    columns: ["City", "Month", "Temp_High", "Temp_Low", "Rainfall", "Humidity"],
    rows: [
      ["NYC", "Jan", 5, -2, 82, 65], ["NYC", "Feb", 7, 0, 75, 62], ["NYC", "Mar", 12, 4, 90, 60],
      ["London", "Jan", 8, 3, 78, 80], ["London", "Feb", 9, 3, 60, 78], ["London", "Mar", 12, 5, 62, 73],
      ["Tokyo", "Jan", 10, 2, 50, 55], ["Tokyo", "Feb", 11, 3, 60, 58], ["Tokyo", "Mar", 14, 7, 100, 62],
    ],
  },
  sales: {
    columns: ["Month", "Revenue", "Cost", "Profit", "Customers"],
    rows: [
      ["Jan", 120000, 85000, 35000, 1500], ["Feb", 135000, 88000, 47000, 1680],
      ["Mar", 150000, 92000, 58000, 1820], ["Apr", 142000, 90000, 52000, 1750],
      ["May", 165000, 95000, 70000, 2100], ["Jun", 180000, 102000, 78000, 2350],
      ["Jul", 195000, 108000, 87000, 2600], ["Aug", 210000, 115000, 95000, 2900],
    ],
  },
  ml: {
    columns: ["Feature_1", "Feature_2", "Label", "Prediction", "Confidence"],
    rows: [
      [1.2, 3.4, "cat", "cat", 0.92], [2.1, 1.8, "dog", "dog", 0.88],
      [3.5, 2.2, "cat", "dog", 0.45], [0.8, 4.1, "bird", "bird", 0.95],
      [2.8, 3.0, "dog", "dog", 0.91], [4.2, 1.5, "bird", "cat", 0.37],
    ],
  },
};

// ── Mock Chart Renderer (SVG) ──
function renderChart(type: string, theme: string, color: string): JSX.Element {
  const w = 320, h = 220, pad = 40;
  const stroke = theme === "dark" ? "#888" : "#ccc";
  const textColor = theme === "dark" ? "#aaa" : "#666";
  const labelColor = theme === "dark" ? "#ccc" : "#333";
  const gridColor = theme === "dark" ? "#333" : "#e0e0e0";
  const bg = theme === "dark" ? "#1a1a2e" : "#fafafa";

  const dataPoints = [20, 45, 28, 65, 42, 78, 55, 90, 72, 85, 60, 95];

  const chartSVG = () => {
    switch(type) {
      case "line":
      case "line chart":
        return (
          <svg viewBox={`0 0 ${w} ${h}`} style={{ background: bg, borderRadius: 4 }}>
            <defs>
              <filter id="glow"><feGaussianBlur stdDeviation="2" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            </defs>
            {Array.from({length: 5}).map((_, i) => (
              <line key={i} x1={pad} y1={pad + i * 40} x2={w - 10} y2={pad + i * 40} stroke={gridColor} strokeWidth={0.5} />
            ))}
            {dataPoints.map((v, i) => {
              const x = pad + (i * (w - pad - 10) / (dataPoints.length - 1));
              const y = pad + h - pad - 10 - ((v / 100) * (h - pad * 2 - 10));
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r={3} fill={color} stroke="#fff" strokeWidth={1} />
                </g>
              );
            })}
            <polyline
              points={dataPoints.map((v, i) => {
                const x = pad + (i * (w - pad - 10) / (dataPoints.length - 1));
                const y = pad + h - pad - 10 - ((v / 100) * (h - pad * 2 - 10));
                return `${x},${y}`;
              }).join(" ")}
              fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)"
            />
            <text x={w / 2} y={h - 2} textAnchor="middle" fill={labelColor} fontSize={8}>X Axis</text>
            <text x={8} y={h / 2} textAnchor="middle" fill={labelColor} fontSize={8} transform={`rotate(-90, 8, ${h / 2})`}>Y Axis</text>
          </svg>
        );
      case "bar":
      case "bar chart":
        return (
          <svg viewBox={`0 0 ${w} ${h}`} style={{ background: bg, borderRadius: 4 }}>
            {Array.from({length: 5}).map((_, i) => (
              <line key={i} x1={pad} y1={pad + i * 40} x2={w - 10} y2={pad + i * 40} stroke={gridColor} strokeWidth={0.5} />
            ))}
            {dataPoints.map((v, i) => {
              const bw = ((w - pad - 10) / dataPoints.length) * 0.7;
              const x = pad + (i * (w - pad - 10) / dataPoints.length) + ((w - pad - 10) / dataPoints.length) * 0.15;
              const barH = (v / 100) * (h - pad * 2 - 10);
              const y = pad + h - pad - 10 - barH;
              return <rect key={i} x={x} y={y} width={bw} height={barH} fill={color} rx={2} opacity={0.85} />;
            })}
            <text x={w / 2} y={h - 2} textAnchor="middle" fill={labelColor} fontSize={8}>Categories</text>
          </svg>
        );
      case "pie":
      case "pie chart":
        const segments = [
          { pct: 35, label: "A", c: "#FF6384" },
          { pct: 25, label: "B", c: "#36A2EB" },
          { pct: 20, label: "C", c: "#FFCE56" },
          { pct: 12, label: "D", c: "#4BC0C0" },
          { pct: 8, label: "E", c: color },
        ];
        let angle = -90;
        const cx = w / 2, cy = h / 2 - 10, r = 80;
        return (
          <svg viewBox={`0 0 ${w} ${h}`} style={{ background: bg, borderRadius: 4 }}>
            {segments.map((seg) => {
              const a1 = angle;
              const a2 = angle + (seg.pct / 100) * 360;
              angle = a2;
              const r1 = ((a1) * Math.PI) / 180;
              const r2 = ((a2) * Math.PI) / 180;
              const x1 = cx + r * Math.cos(r1);
              const y1 = cy + r * Math.sin(r1);
              const x2 = cx + r * Math.cos(r2);
              const y2 = cy + r * Math.sin(r2);
              const large = seg.pct > 50 ? 1 : 0;
              return (
                <g key={seg.label}>
                  <path d={`M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${large} 1 ${x2},${y2} Z`} fill={seg.c} stroke="#fff" strokeWidth={1} />
                </g>
              );
            })}
            <text x={cx} y={cy + 4} textAnchor="middle" fill={labelColor} fontSize={10} fontWeight="bold">Pie Chart</text>
          </svg>
        );
      case "histogram":
        return (
          <svg viewBox={`0 0 ${w} ${h}`} style={{ background: bg, borderRadius: 4 }}>
            {Array.from({length: 5}).map((_, i) => (
              <line key={i} x1={pad} y1={pad + i * 40} x2={w - 10} y2={pad + i * 40} stroke={gridColor} strokeWidth={0.5} />
            ))}
            {Array.from({length: 10}).map((_, i) => {
              const hgt = Math.random() * 80 + 10;
              const bw = ((w - pad - 10) / 10) * 0.85;
              const x = pad + i * ((w - pad - 10) / 10);
              const y = pad + h - pad - 10 - (hgt / 100) * (h - pad * 2 - 10);
              return <rect key={i} x={x} y={y} width={bw} height={(hgt / 100) * (h - pad * 2 - 10)} fill={color} rx={0} opacity={0.7} />;
            })}
            <text x={w / 2} y={h - 2} textAnchor="middle" fill={labelColor} fontSize={8}>Bins</text>
          </svg>
        );
      case "scatter":
      case "scatter plot":
        return (
          <svg viewBox={`0 0 ${w} ${h}`} style={{ background: bg, borderRadius: 4 }}>
            {Array.from({length: 5}).map((_, i) => (
              <line key={i} x1={pad} y1={pad + i * 40} x2={w - 10} y2={pad + i * 40} stroke={gridColor} strokeWidth={0.5} />
            ))}
            {Array.from({length: 20}).map((_, i) => {
              const x = pad + Math.random() * (w - pad - 20);
              const y = pad + Math.random() * (h - pad * 2 - 10);
              const sz = Math.random() * 10 + 3;
              return <circle key={i} cx={x} cy={y} r={sz / 3} fill={color} opacity={0.6 + Math.random() * 0.3} />;
            })}
            <text x={w / 2} y={h - 2} textAnchor="middle" fill={labelColor} fontSize={8}>Feature 1</text>
          </svg>
        );
      case "box plot":
        return (
          <svg viewBox={`0 0 ${w} ${h}`} style={{ background: bg, borderRadius: 4 }}>
            {Array.from({length: 5}).map((_, i) => (
              <line key={i} x1={pad} y1={pad + i * 40} x2={w - 10} y2={pad + i * 40} stroke={gridColor} strokeWidth={0.5} />
            ))}
            {[
              { q1: 30, med: 50, q3: 70, whiskerL: 15, whiskerH: 90 },
              { q1: 25, med: 45, q3: 60, whiskerL: 10, whiskerH: 80 },
              { q1: 40, med: 55, q3: 75, whiskerL: 25, whiskerH: 95 },
            ].map((b, i) => {
              const cx = pad + (i + 1) * ((w - pad - 10) / 4);
              const y1 = pad + h - pad - 10 - (b.whiskerH / 100) * (h - pad * 2 - 10);
              const yq1 = pad + h - pad - 10 - (b.q1 / 100) * (h - pad * 2 - 10);
              const ymed = pad + h - pad - 10 - (b.med / 100) * (h - pad * 2 - 10);
              const yq3 = pad + h - pad - 10 - (b.q3 / 100) * (h - pad * 2 - 10);
              const ywh = pad + h - pad - 10 - (b.whiskerL / 100) * (h - pad * 2 - 10);
              return (
                <g key={i}>
                  <line x1={cx} y1={y1} x2={cx} y2={ywh} stroke={color} strokeWidth={1} />
                  <rect x={cx - 8} y={yq3} width={16} height={yq1 - yq3} fill={color} opacity={0.5} rx={2} />
                  <line x1={cx - 10} y1={ymed} x2={cx + 10} y2={ymed} stroke={color} strokeWidth={2} />
                  <line x1={cx - 6} y1={y1} x2={cx + 6} y2={y1} stroke={color} strokeWidth={1.5} />
                  <line x1={cx - 6} y1={ywh} x2={cx + 6} y2={ywh} stroke={color} strokeWidth={1.5} />
                </g>
              );
            })}
            <text x={w / 2} y={h - 2} textAnchor="middle" fill={labelColor} fontSize={8}>Groups</text>
          </svg>
        );
      case "heatmap":
        return (
          <svg viewBox={`0 0 ${w} ${h}`} style={{ background: bg, borderRadius: 4 }}>
            {Array.from({length: 30}).map((_, i) => {
              const cols = 6, rows = 5;
              const cw = (w - 20) / cols, ch = (h - 20) / rows;
              const r = Math.floor(i / cols), c = i % cols;
              const intensity = Math.random();
              const hue = 200 + intensity * 40;
              return <rect key={i} x={10 + c * cw} y={10 + r * ch} width={cw} height={ch} fill={`hsl(${hue}, 80%, ${50 - intensity * 40}%)`} opacity={0.85} />;
            })}
          </svg>
        );
      case "3d plot":
        return (
          <svg viewBox={`0 0 ${w} ${h}`} style={{ background: bg, borderRadius: 4 }}>
            <polygon points="60,180 160,50 280,180" fill="none" stroke={color} strokeWidth={1} opacity={0.5} />
            {Array.from({length: 8}).map((_, i) => {
              const x = 60 + i * 25 + Math.sin(i * 1.2) * 15;
              const y = 180 - i * 15 + Math.cos(i * 0.8) * 10;
              return <circle key={i} cx={x} cy={y} r={4} fill={color} opacity={0.7} />;
            })}
            {Array.from({length: 8}).map((_, i) => {
              const x = 280 - i * 25 + Math.sin(i * 1.2) * 15;
              const y = 180 - i * 15 + Math.cos(i * 0.8) * 10;
              return <circle key={i} cx={x} cy={y} r={4} fill="#36A2EB" opacity={0.7} />;
            })}
            {Array.from({length: 6}).map((_, i) => {
              const x = 160 + (i - 3) * 20;
              const y = 50 + i * 22;
              return <circle key={i} cx={x} cy={y} r={4} fill="#FF6384" opacity={0.7} />;
            })}
            <text x={8} y={95} fill={labelColor} fontSize={8} transform="rotate(-20, 8, 95)">Z</text>
          </svg>
        );
      default:
        return (
          <svg viewBox={`0 0 ${w} ${h}`} style={{ background: bg, borderRadius: 4 }}>
            <text x={w / 2} y={h / 2} textAnchor="middle" fill={labelColor} fontSize={10}>Select a chart type</text>
          </svg>
        );
    }
  };

  return chartSVG();
}

const chartTypes = ["line chart", "bar chart", "pie chart", "scatter plot", "histogram", "box plot", "heatmap", "3d plot"];

// ── Chart Preview Tab ──
function ChartPreviewTab() {
  const [chartType, setChartType] = useState("line chart");
  const [theme, setTheme] = useState("light");
  const [color, setColor] = useState(BRAND);
  const [code, setCode] = useState(`import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 50)
y = np.sin(x)

plt.figure(figsize=(8, 4))
plt.plot(x, y, color='${color}', linewidth=2)
plt.title("Sine Wave")
plt.xlabel("X Axis")
plt.ylabel("Y Axis")
plt.grid(True)
plt.show()`);
  const [generated, setGenerated] = useState(false);

  const generate = useCallback(() => {
    setGenerated(true);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
      <div className="space-y-3">
        <SectionLabel>Chart Type</SectionLabel>
        <div className="flex gap-1.5 flex-wrap">
          {chartTypes.map((ct) => (
            <button key={ct} onClick={() => { setChartType(ct); setGenerated(false); }} className="px-3 py-1.5 text-[9px] font-black tracking-widest uppercase border transition-all" style={{ borderColor: chartType === ct ? color : "hsl(var(--foreground)/0.1)", color: chartType === ct ? color : "hsl(var(--foreground)/0.5)" }}>
              {ct}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-black tracking-wider text-foreground/40 uppercase">Theme</span>
            <select value={theme} onChange={(e) => setTheme(e.target.value)} className="bg-foreground/5 border border-foreground/10 text-foreground p-1 text-[10px] font-mono">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-black tracking-wider text-foreground/40 uppercase">Color</span>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-7 h-7 border-0 cursor-pointer" />
          </div>
        </div>
        <SectionLabel>Matplotlib Code</SectionLabel>
        <textarea value={code} onChange={(e) => setCode(e.target.value)} className="w-full h-56 bg-black text-blue-300 p-3 text-[11px] font-mono border border-foreground/10 resize-none leading-relaxed" spellCheck={false} />
        <button onClick={generate} className="px-5 py-1.5 text-[10px] font-black tracking-widest uppercase text-white" style={{ backgroundColor: color }}>
          Generate Chart
        </button>
      </div>
      <div className="space-y-3">
        <SectionLabel>Chart Preview</SectionLabel>
        <div className="border border-foreground/10 rounded-lg overflow-hidden flex items-center justify-center" style={{ background: theme === "dark" ? "#1a1a2e" : "#fafafa", minHeight: 280 }}>
          <AnimatePresence mode="wait">
            <motion.div key={chartType + theme + color + generated} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="p-2">
              {renderChart(chartType, theme, color)}
            </motion.div>
          </AnimatePresence>
        </div>
        {generated && (
          <div className="flex items-center gap-2 text-[10px] text-green-500 font-mono">
            <span>{"\u2713"}</span> Chart rendered with matplotlib (simulated)
          </div>
        )}
        <div className="p-3 border border-foreground/5 rounded text-[10px] leading-relaxed text-foreground/60">
          <span className="font-black text-foreground/80">Tip: </span>
          Edit the Matplotlib Python code on the left and click Generate Chart to preview.
        </div>
      </div>
    </div>
  );
}

// ── Data Editor Tab ──
function DataEditorTab() {
  const [selected, setSelected] = useState("iris");
  const ds = datasets[selected];

  return (
    <div className="space-y-4">
      <SectionLabel>Built-in Datasets</SectionLabel>
      <div className="flex gap-1.5 flex-wrap">
        {Object.keys(datasets).map((name) => (
          <button key={name} onClick={() => setSelected(name)} className="px-3 py-1.5 text-[9px] font-black tracking-widest uppercase border transition-all" style={{ borderColor: selected === name ? BRAND : "hsl(var(--foreground)/0.1)", color: selected === name ? BRAND : "hsl(var(--foreground)/0.5)" }}>
            {name} ({datasets[name].rows.length} rows)
          </button>
        ))}
      </div>

      <div className="overflow-x-auto border border-foreground/10">
        <table className="w-full text-[10px] font-mono">
          <thead>
            <tr className="border-b border-foreground/10">
              <th className="p-2 text-left text-[9px] font-black tracking-wider text-foreground/40 uppercase bg-foreground/[0.02]">#</th>
              {ds.columns.map((col, i) => (
                <th key={i} className="p-2 text-left text-[9px] font-black tracking-wider text-foreground/40 uppercase bg-foreground/[0.02]">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ds.rows.map((row, ri) => (
              <tr key={ri} className="border-b border-foreground/5 hover:bg-foreground/[0.02]">
                <td className="p-2 text-foreground/30">{ri + 1}</td>
                {row.map((cell, ci) => (
                  <td key={ci} className="p-2 text-foreground/70">{String(cell)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected === "iris" && (
        <div className="p-3 border border-foreground/5 rounded text-[10px] text-foreground/50 leading-relaxed">
          <span className="font-black text-foreground/80">Iris Dataset: </span>
          150 samples of iris flowers, 4 features. Classic ML classification dataset.
        </div>
      )}
    </div>
  );
}

// ── Customization Tab ──
function CustomizationTab() {
  const [config, setConfig] = useState({
    title: "My Chart",
    xlabel: "X Axis",
    ylabel: "Y Axis",
    grid: true,
    legend: true,
    figWidth: 8,
    figHeight: 5,
    dpi: 100,
    fontsize: 12,
    linewidth: 2,
    markersize: 6,
  });

  const code = `plt.figure(figsize=(${config.figWidth}, ${config.figHeight}), dpi=${config.dpi})
plt.plot(x, y, linewidth=${config.linewidth}, markersize=${config.markersize})
plt.title("${config.title}", fontsize=${config.fontsize})
plt.xlabel("${config.xlabel}", fontsize=${config.fontsize - 2})
plt.ylabel("${config.ylabel}", fontsize=${config.fontsize - 2})
${config.grid ? "plt.grid(True, alpha=0.3)" : ""}
${config.legend ? 'plt.legend(["Data"])' : ""}
plt.tight_layout()
plt.show()`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-4">
        <SectionLabel>Chart Properties</SectionLabel>
        {[
          { label: "Title", key: "title", type: "text" },
          { label: "X Label", key: "xlabel", type: "text" },
          { label: "Y Label", key: "ylabel", type: "text" },
        ].map((f) => (
          <div key={f.key} className="flex items-center gap-3">
            <span className="text-[9px] font-black tracking-wider text-foreground/40 uppercase w-20">{f.label}</span>
            <input type="text" value={(config as any)[f.key]} onChange={(e) => setConfig({ ...config, [f.key]: e.target.value })} className="flex-1 bg-foreground/5 border border-foreground/10 text-foreground p-1.5 text-[10px] font-mono" />
          </div>
        ))}
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Width", key: "figWidth", min: 4, max: 20 },
            { label: "Height", key: "figHeight", min: 3, max: 15 },
            { label: "DPI", key: "dpi", min: 50, max: 300, step: 50 },
            { label: "Font Size", key: "fontsize", min: 8, max: 24 },
            { label: "Line Width", key: "linewidth", min: 0.5, max: 6, step: 0.5 },
            { label: "Marker Size", key: "markersize", min: 2, max: 12 },
          ].map((f) => (
            <div key={f.key} className="flex items-center gap-2 p-2 border border-foreground/5 rounded">
              <span className="text-[8px] font-black tracking-wider text-foreground/40 uppercase w-16">{f.label}</span>
              <input type="range" min={f.min} max={f.max} step={f.step || 1} value={(config as any)[f.key]} onChange={(e) => setConfig({ ...config, [f.key]: parseFloat(e.target.value) })} className="flex-1 h-1 accent-blue-500" />
              <span className="text-[9px] font-mono text-foreground/50 w-8 text-right">{(config as any)[f.key]}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={config.grid} onChange={(e) => setConfig({ ...config, grid: e.target.checked })} className="accent-blue-500" />
            <span className="text-[10px] font-mono text-foreground/60">Grid</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={config.legend} onChange={(e) => setConfig({ ...config, legend: e.target.checked })} className="accent-blue-500" />
            <span className="text-[10px] font-mono text-foreground/60">Legend</span>
          </label>
        </div>
      </div>
      <div className="space-y-3">
        <SectionLabel>Generated Code</SectionLabel>
        <div className="bg-black border border-foreground/10 p-3 min-h-64 font-mono text-[10px]">
          <pre className="text-blue-300 whitespace-pre-wrap">{code}</pre>
        </div>
        <p className="text-[9px] text-foreground/30">Adjust parameters on the left to update the Matplotlib code.</p>
      </div>
    </div>
  );
}

// ── Export Tab ──
function ExportTab() {
  const [format, setFormat] = useState("png");
  const [dpi, setDpi] = useState(150);
  const [transparent, setTransparent] = useState(false);
  const [exported, setExported] = useState(false);

  const handleExport = useCallback(() => {
    setExported(true);
    setTimeout(() => setExported(false), 3000);
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { id: "png", label: "PNG", desc: "Raster image, universal compatibility", icon: "\u{1F5BC}\u{FE0F}" },
          { id: "svg", label: "SVG", desc: "Vector format, infinitely scalable", icon: "\u{1F4C4}" },
          { id: "pdf", label: "PDF", desc: "Document-ready, publication quality", icon: "\u{1F4D5}" },
        ].map((fmt) => (
          <button
            key={fmt.id}
            onClick={() => { setFormat(fmt.id); setExported(false); }}
            className="p-4 border rounded-lg text-left transition-all hover:bg-foreground/[0.02]"
            style={{ borderColor: format === fmt.id ? BRAND : "hsl(var(--foreground)/0.1)" }}
          >
            <div className="text-2xl mb-2">{fmt.icon}</div>
            <div className="text-xs font-black tracking-widest uppercase mb-1">{fmt.label}</div>
            <div className="text-[9px] text-foreground/40">{fmt.desc}</div>
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-6">
        <div className="flex items-center gap-3">
          <span className="text-[9px] font-black tracking-wider text-foreground/40 uppercase">DPI</span>
          <select value={dpi} onChange={(e) => setDpi(Number(e.target.value))} className="bg-foreground/5 border border-foreground/10 text-foreground p-1.5 text-[10px] font-mono">
            <option value={72}>72 (Screen)</option>
            <option value={150}>150 (Standard)</option>
            <option value={300}>300 (Print)</option>
            <option value={600}>600 (High Quality)</option>
          </select>
        </div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={transparent} onChange={(e) => setTransparent(e.target.checked)} className="accent-blue-500" />
          <span className="text-[10px] font-mono text-foreground/60">Transparent Background</span>
        </label>
      </div>

      <div className="border border-foreground/10 rounded-lg p-6 flex flex-col items-center gap-4">
        <div className="border border-foreground/5 rounded p-4" style={{ background: transparent ? "repeating-conic-gradient(rgba(0,0,0,0.03) 0% 25%, transparent 0% 50%) 0 0 / 10px 10px" : "#fafafa" }}>
          {renderChart("line chart", "light", BRAND)}
        </div>
        <button onClick={handleExport} className="px-8 py-2 text-xs font-black tracking-widest uppercase text-white" style={{ backgroundColor: BRAND }}>
          Export as {format.toUpperCase()} ({dpi} DPI)
        </button>
        {exported && (
          <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-green-500 text-[10px] font-mono">
            {"\u2713"} Chart exported as {format.toUpperCase()} (simulated)
          </motion.div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-3 border border-foreground/5 rounded">
          <div className="text-[9px] font-black tracking-widest text-foreground/40 uppercase mb-1">Export Code</div>
          <pre className="text-[9px] font-mono text-foreground/50">plt.savefig("chart.{format}", dpi={dpi}, bbox_inches="tight", transparent={transparent ? "True" : "False"})</pre>
        </div>
        <div className="p-3 border border-foreground/5 rounded">
          <div className="text-[9px] font-black tracking-widest text-foreground/40 uppercase mb-1">File Info</div>
          <div className="text-[9px] font-mono text-foreground/50">
            Format: {format.toUpperCase()} | DPI: {dpi} | Est. size: ~{format === "svg" ? "25KB" : format === "pdf" ? "18KB" : `${Math.round((dpi / 150) * 120)}KB`}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Editor Tab ──
function PythonEditorTab() {
  const [code, setCode] = useState(`import matplotlib.pyplot as plt
import numpy as np

# Create data
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Create plot
plt.figure(figsize=(10, 5))
plt.plot(x, y, label="sin(x)", color="#11557C", linewidth=2)
plt.plot(x, np.cos(x), label="cos(x)", color="#FF6384", linewidth=2)
plt.title("Trigonometric Functions")
plt.xlabel("x")
plt.ylabel("y")
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()`);
  const [output, setOutput] = useState<string[]>([]);

  const run = useCallback(() => {
    setOutput([
      "$ python plot.py",
      "Matplotlib 3.8.4",
      "NumPy 1.26.4",
      "Figure(800x400) rendered successfully",
      "Figure saved to cache",
      `Execution time: ${(Math.random() * 0.5 + 0.1).toFixed(2)}s`,
    ]);
  }, []);

  const examples = [
    { label: "Line Plot", code: `import matplotlib.pyplot as plt\nimport numpy as np\n\nx = np.linspace(0, 10, 50)\ny = np.sin(x)\nplt.plot(x, y)\nplt.show()` },
    { label: "Bar Chart", code: `import matplotlib.pyplot as plt\n\ncategories = ["A","B","C","D","E"]\nvalues = [23, 45, 56, 78, 32]\nplt.bar(categories, values, color="#11557C")\nplt.show()` },
    { label: "Scatter", code: `import matplotlib.pyplot as plt\nimport numpy as np\n\nx = np.random.rand(50)\ny = np.random.rand(50)\nplt.scatter(x, y, c="#FF6384", alpha=0.7)\nplt.show()` },
    { label: "Histogram", code: `import matplotlib.pyplot as plt\nimport numpy as np\n\ndata = np.random.randn(1000)\nplt.hist(data, bins=30, edgecolor="white")\nplt.show()` },
    { label: "Subplots", code: `import matplotlib.pyplot as plt\nimport numpy as np\n\nx = np.linspace(0, 5, 50)\nfig, axes = plt.subplots(2, 1, figsize=(8, 6))\naxes[0].plot(x, np.sin(x))\naxes[1].plot(x, np.cos(x))\nplt.show()` },
    { label: "3D Plot", code: `from mpl_toolkits.mplot3d import Axes3D\nimport matplotlib.pyplot as plt\nimport numpy as np\n\nx = np.linspace(-5, 5, 50)\ny = np.linspace(-5, 5, 50)\nX, Y = np.meshgrid(x, y)\nZ = np.sin(np.sqrt(X**2 + Y**2))\n\nfig = plt.figure()\nax = fig.add_subplot(111, projection="3d")\nax.plot_surface(X, Y, Z, cmap="viridis")\nplt.show()` },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-full gap-4">
      <div className="flex-1 space-y-3">
        <div className="flex gap-1.5 flex-wrap">
          {examples.map((ex) => (
            <button key={ex.label} onClick={() => setCode(ex.code)} className="px-2 py-1 text-[8px] font-black tracking-wider uppercase border" style={{ borderColor: `${BRAND}33`, color: BRAND }}>
              {ex.label}
            </button>
          ))}
        </div>
        <SectionLabel>Python Code with Matplotlib</SectionLabel>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-72 bg-black text-blue-300 p-3 text-[11px] font-mono border border-foreground/10 resize-none leading-relaxed"
          spellCheck={false}
        />
        <button onClick={run} className="px-5 py-1.5 text-[10px] font-black tracking-widest uppercase text-white" style={{ backgroundColor: BRAND }}>
          Run
        </button>
      </div>
      <div className="flex-1 space-y-3">
        <SectionLabel>Console Output</SectionLabel>
        <div className="bg-black border border-foreground/10 p-3 h-72 overflow-y-auto font-mono text-[10px] space-y-1">
          {output.length === 0 && <span className="text-foreground/20">Click Run to execute</span>}
          {output.map((l, i) => (
            <div key={i} className={l.startsWith("$") ? "text-green-400/60" : l.includes("successfully") ? "text-green-500" : "text-foreground/50"}>{l}</div>
          ))}
        </div>
        <div className="p-3 border border-foreground/5 rounded text-[10px] leading-relaxed text-foreground/50">
          <span className="font-black text-foreground/80">Tip: </span>
          Use <code className="text-blue-400">plt.show()</code> at the end to render. Check "Chart Preview" tab for visual output.
        </div>
      </div>
    </div>
  );
}

export default function MatplotlibLab() {
  const [activeTab, setActiveTab] = useState<Tab>("editor");

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="border-b border-foreground/10 bg-foreground/[0.02] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{/* 📊 */}{"\u{1F4CA}"}</span>
          <div>
            <h1 className="text-lg font-black tracking-tight uppercase">Matplotlib Lab</h1>
            <p className="text-[9px] font-black tracking-widest text-foreground/30 uppercase">Transform Data into Visual Stories</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[8px] font-black tracking-widest text-green-500 uppercase">Matplotlib 3.8 (Simulated)</span>
        </div>
      </div>

      <div className="border-b border-foreground/10">
        <div className="max-w-7xl mx-auto flex overflow-x-auto px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-5 py-3 text-xs font-black tracking-widest uppercase border-b-2 transition-all whitespace-nowrap flex items-center gap-2"
              style={tabStyle(activeTab === tab.id)}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 px-6 py-6 overflow-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {activeTab === "editor" && <PythonEditorTab />}
            {activeTab === "chart" && <ChartPreviewTab />}
            {activeTab === "data" && <DataEditorTab />}
            {activeTab === "config" && <CustomizationTab />}
            {activeTab === "export" && <ExportTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
