import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "calc" | "dist" | "regression" | "hypothesis" | "viz";

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "calc", label: "Calculator", icon: "\u{1F5D1}\u{FE0F}" },
  { id: "dist", label: "Distributions", icon: "\u{1F4CA}" },
  { id: "regression", label: "Regression", icon: "\u{1F4C8}" },
  { id: "hypothesis", label: "Hypothesis Test", icon: "\u{2697}\u{FE0F}" },
  { id: "viz", label: "Visualization", icon: "\u{1F4AD}" },
];

const BRAND = "#00ACC1";

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

// Generate bell curve points
function normalPDF(x: number, mean: number, std: number): number {
  return (1 / (std * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * ((x - mean) / std) ** 2);
}

function generateNormalCurve(mean: number, std: number, n = 60) {
  const min = mean - 4 * std;
  const max = mean + 4 * std;
  const step = (max - min) / n;
  const points: { x: number; y: number }[] = [];
  for (let i = 0; i <= n; i++) {
    const x = min + i * step;
    points.push({ x, y: normalPDF(x, mean, std) });
  }
  return points;
}

// ── Statistical Calculator ──
function StatsCalculator() {
  const [input, setInput] = useState("12, 15, 14, 10, 18, 20, 16, 11, 13, 17, 19, 22, 9, 14, 16");

  const stats = useMemo(() => {
    const nums = input.split(/[,\s]+/).map(Number).filter((n) => !isNaN(n));
    if (nums.length === 0) return null;
    const sorted = [...nums].sort((a, b) => a - b);
    const n = nums.length;
    const sum = nums.reduce((a, b) => a + b, 0);
    const mean = sum / n;
    const median = n % 2 === 0 ? (sorted[n / 2 - 1] + sorted[n / 2]) / 2 : sorted[Math.floor(n / 2)];
    const modeMap = new Map<number, number>();
    nums.forEach((v) => modeMap.set(v, (modeMap.get(v) || 0) + 1));
    let maxFreq = 0;
    const modes: number[] = [];
    modeMap.forEach((freq, v) => {
      if (freq > maxFreq) { maxFreq = freq; modes.length = 0; modes.push(v); }
      else if (freq === maxFreq) modes.push(v);
    });
    const v = nums.reduce((acc, v) => acc + (v - mean) ** 2, 0) / n;
    const std = Math.sqrt(v);
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    const range = max - min;
    const q1 = sorted[Math.floor(n * 0.25)];
    const q3 = sorted[Math.floor(n * 0.75)];
    const skewness = nums.reduce((acc, v) => acc + ((v - mean) / std) ** 3, 0) / n;

    return { n, sum, mean: mean.toFixed(2), median: median.toFixed(2), mode: modes.join(", "), variance: v.toFixed(2), std: std.toFixed(2), min, max, range, q1, q3, skewness: skewness.toFixed(3) };
  }, [input]);

  return (
    <div className="space-y-6">
      <div>
        <SectionLabel>Enter comma-separated numbers</SectionLabel>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full h-24 bg-foreground/5 border text-foreground p-3 text-xs font-mono resize-none"
          style={{ borderColor: `${BRAND}44` }}
        />
      </div>
      {stats && (
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { l: "Count", v: stats.n },
            { l: "Sum", v: stats.sum },
            { l: "Mean", v: stats.mean },
            { l: "Median", v: stats.median },
            { l: "Mode", v: stats.mode },
            { l: "Variance", v: stats.variance },
            { l: "Std Dev", v: stats.std },
            { l: "Min", v: stats.min },
            { l: "Max", v: stats.max },
            { l: "Range", v: stats.range },
            { l: "Q1", v: stats.q1 },
            { l: "Q3", v: stats.q3 },
            { l: "Skewness", v: stats.skewness },
          ].map((s) => (
            <div key={s.l} className="p-3 border" style={{ borderColor: `${BRAND}22` }}>
              <p className="text-[8px] font-black tracking-wider text-foreground/30 uppercase">{s.l}</p>
              <p className="text-sm font-black font-mono mt-1" style={{ color: BRAND }}>{s.v}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Distribution Visualizer ──
function DistributionVisualizer() {
  const [mean, setMean] = useState(0);
  const [std, setStd] = useState(1);
  const curve = useMemo(() => generateNormalCurve(mean, std), [mean, std]);
  const maxY = Math.max(...curve.map((p) => p.y), 0.01);

  const svgW = 400;
  const svgH = 200;
  const pad = 20;
  const plotW = svgW - pad * 2;
  const plotH = svgH - pad * 2;

  const toSvgX = (x: number) => pad + ((x - (mean - 4 * std)) / (8 * std)) * plotW;
  const toSvgY = (y: number) => pad + plotH - (y / maxY) * plotH;

  const points = curve.map((p) => `${toSvgX(p.x)},${toSvgY(p.y)}`).join(" ");

  // Shade the area between mean-std and mean+std
  const shadeLeft = curve.findIndex((p) => p.x >= mean - std);
  const shadeRight = curve.findIndex((p) => p.x >= mean + std);
  const shadePoints = curve.slice(shadeLeft, shadeRight + 1);
  const shadePath =
    shadePoints.length > 1
      ? `M${toSvgX(shadePoints[0].x)},${toSvgY(0)} ${shadePoints.map((p) => `L${toSvgX(p.x)},${toSvgY(p.y)}`).join(" ")} L${toSvgX(shadePoints[shadePoints.length - 1].x)},${toSvgY(0)} Z`
      : "";

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <SectionLabel>Mean: {mean.toFixed(1)}</SectionLabel>
          <input type="range" min={-5} max={5} step={0.1} value={mean} onChange={(e) => setMean(Number(e.target.value))} className="w-full accent-[#00ACC1]" />
        </div>
        <div>
          <SectionLabel>Std Dev: {std.toFixed(2)}</SectionLabel>
          <input type="range" min={0.2} max={3} step={0.1} value={std} onChange={(e) => setStd(Number(e.target.value))} className="w-full accent-[#00ACC1]" />
        </div>
      </div>

      <div className="border border-foreground/10 p-4">
        <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full h-56">
          {shadePath && <path d={shadePath} fill={`${BRAND}33`} />}
          <polyline fill="none" strokeWidth="2" stroke={BRAND} points={points} />

          {/* Mean line */}
          <line
            x1={toSvgX(mean)} y1={pad} x2={toSvgX(mean)} y2={pad + plotH}
            stroke="hsl(var(--foreground)/0.3)" strokeWidth="1" strokeDasharray="4 2"
          />
          <text x={toSvgX(mean)} y={pad + plotH + 14} textAnchor="middle" fontSize="9" fill="hsl(var(--foreground)/0.4)" className="font-mono">\u03bc</text>

          {/* Mean±1σ lines */}
          {[-1, 1].map((m) => {
            const x = toSvgX(mean + m * std);
            return (
              <g key={m}>
                <line x1={x} y1={pad} x2={x} y2={pad + plotH} stroke="hsl(var(--foreground)/0.15)" strokeWidth="1" strokeDasharray="2 3" />
                <text x={x} y={pad + plotH + 14} textAnchor="middle" fontSize="8" fill="hsl(var(--foreground)/0.25)" className="font-mono">
                  {m < 0 ? "-" : "+"}\u03c3
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

// ── Regression Lab ──
function RegressionLab() {
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);

  const addRandom = () => {
    const newPoints = Array.from({ length: 20 }, (_, i) => ({
      x: i + 1 + Math.random() * 3,
      y: i * 2 + 5 + (Math.random() - 0.5) * 8,
    }));
    setPoints(newPoints);
  };

  const stats = useMemo(() => {
    if (points.length < 2) return null;
    const n = points.length;
    const mx = points.reduce((s, p) => s + p.x, 0) / n;
    const my = points.reduce((s, p) => s + p.y, 0) / n;
    let num = 0, den = 0;
    points.forEach((p) => {
      num += (p.x - mx) * (p.y - my);
      den += (p.x - mx) ** 2;
    });
    const slope = den !== 0 ? num / den : 0;
    const intercept = my - slope * mx;

    const predicted = points.map((p) => ({ x: p.x, y: slope * p.x + intercept }));
    const residuals = points.map((p, i) => p.y - predicted[i].y);
    const rss = residuals.reduce((s, r) => s + r * r, 0);
    const tss = points.reduce((s, p) => s + (p.y - my) ** 2, 0);
    const r2 = tss > 0 ? 1 - rss / tss : 0;
    const r = Math.sqrt(Math.max(0, r2)) * (slope > 0 ? 1 : -1);

    return { slope: slope.toFixed(3), intercept: intercept.toFixed(3), r2: r2.toFixed(3), r: r.toFixed(3), n };
  }, [points]);

  const svgW = 400;
  const svgH = 250;
  const pad = 35;
  const plotW = svgW - pad * 2;
  const plotH = svgH - pad * 2;

  const toSvg = (x: number, y: number) => {
    if (points.length < 2) return null;
    const minX = Math.min(...points.map((p) => p.x));
    const maxX = Math.max(...points.map((p) => p.x));
    const minY = Math.min(...points.map((p) => p.y));
    const maxY = Math.max(...points.map((p) => p.y));
    return {
      sx: pad + ((x - minX) / (maxX - minX || 1)) * plotW,
      sy: pad + plotH - ((y - minY) / (maxY - minY || 1)) * plotH,
    };
  };

  const regressionLine = useMemo(() => {
    if (!stats || points.length < 2) return "";
    const slope = Number(stats.slope);
    const intercept = Number(stats.intercept);
    const minX = Math.min(...points.map((p) => p.x));
    const maxX = Math.max(...points.map((p) => p.x));
    const p1 = toSvg(minX, slope * minX + intercept);
    const p2 = toSvg(maxX, slope * maxX + intercept);
    if (!p1 || !p2) return "";
    return `${p1.sx},${p1.sy} ${p2.sx},${p2.sy}`;
  }, [stats, points]);

  return (
    <div className="space-y-6">
      <button
        onClick={addRandom}
        className="px-5 py-2 text-xs font-black tracking-widest uppercase text-white transition-all"
        style={{ backgroundColor: BRAND }}
      >
        Generate Sample Data
      </button>

      {points.length > 0 && (
        <div className="border border-foreground/10 p-4">
          <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full h-64">
            {points.map((p, i) => {
              const c = toSvg(p.x, p.y);
              return c ? <circle key={i} cx={c.sx} cy={c.sy} r="4" fill={BRAND} opacity="0.7" /> : null;
            })}
            {regressionLine && (
              <line x1={Number(regressionLine.split(" ")[0].split(",")[0])} y1={Number(regressionLine.split(" ")[0].split(",")[1])} x2={Number(regressionLine.split(" ")[1].split(",")[0])} y2={Number(regressionLine.split(" ")[1].split(",")[1])} stroke="#FF6B6B" strokeWidth="2" strokeDasharray="4 3" />
            )}
          </svg>
        </div>
      )}

      {stats && (
        <div className="grid grid-cols-4 gap-3">
          {[
            { l: "Slope", v: stats.slope },
            { l: "Intercept", v: stats.intercept },
            { l: "R²", v: stats.r2 },
            { l: "R", v: stats.r },
          ].map((s) => (
            <div key={s.l} className="p-3 border" style={{ borderColor: `${BRAND}22` }}>
              <p className="text-[8px] font-black tracking-wider text-foreground/30 uppercase">{s.l}</p>
              <p className="text-sm font-black font-mono mt-1" style={{ color: BRAND }}>{s.v}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Hypothesis Testing ──
function HypothesisTestingLab() {
  const [sampleMean, setSampleMean] = useState(105);
  const [popMean, setPopMean] = useState(100);
  const [std, setStd] = useState(15);
  const [n, setN] = useState(30);

  const z = useMemo(() => {
    const se = std / Math.sqrt(n);
    return se > 0 ? ((sampleMean - popMean) / se) : 0;
  }, [sampleMean, popMean, std, n]);

  const pValue = useMemo(() => {
    const val = Math.abs(z);
    // Approximate standard normal CDF
    const a1 = 0.254829592;
    const a2 = -0.284496736;
    const a3 = 1.421413741;
    const a4 = -1.453152027;
    const a5 = 1.061405429;
    const p = 0.3275911;
    const sign = val < 0 ? -1 : 1;
    const x = Math.abs(val) / Math.sqrt(2);
    const t = 1 / (1 + p * x);
    const erf = 1 - (((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t) * Math.exp(-x * x);
    return ((1 - erf * sign) / 2).toFixed(4);
  }, [z]);

  const significant = Number(pValue) < 0.05;

  // Generate bell curve with shaded rejection region
  const curve = useMemo(() => generateNormalCurve(0, 1), []);
  const maxY = Math.max(...curve.map((p) => p.y), 0.01);
  const svgW = 400;
  const svgH = 200;
  const pad = 20;
  const plotW = svgW - pad * 2;
  const plotH = svgH - pad * 2;
  const toSvgX = (x: number) => pad + ((x + 4) / 8) * plotW;
  const toSvgY = (y: number) => pad + plotH - (y / maxY) * plotH;
  const curvePoints = curve.map((p) => `${toSvgX(p.x)},${toSvgY(p.y)}`).join(" ");

  // Shade rejection regions (z < -1.96 or z > 1.96 for alpha=0.05)
  const crit = 1.96;
  const rejLeft = curve.filter((p) => p.x <= -crit);
  const rejRight = curve.filter((p) => p.x >= crit);
  const rejLeftPath = rejLeft.length > 0
    ? `M${toSvgX(rejLeft[0].x)},${toSvgY(0)} ${rejLeft.map((p) => `L${toSvgX(p.x)},${toSvgY(p.y)}`).join(" ")} L${toSvgX(rejLeft[rejLeft.length - 1].x)},${toSvgY(0)} Z`
    : "";
  const rejRightPath = rejRight.length > 0
    ? `M${toSvgX(rejRight[0].x)},${toSvgY(0)} ${rejRight.map((p) => `L${toSvgX(p.x)},${toSvgY(p.y)}`).join(" ")} L${toSvgX(rejRight[rejRight.length - 1].x)},${toSvgY(0)} Z`
    : "";

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <SectionLabel>Sample Mean</SectionLabel>
          <input type="number" value={sampleMean} onChange={(e) => setSampleMean(Number(e.target.value))} className="w-full bg-foreground/5 border text-foreground p-2 text-xs font-mono" style={{ borderColor: `${BRAND}44` }} />
        </div>
        <div>
          <SectionLabel>Pop. Mean (H₀)</SectionLabel>
          <input type="number" value={popMean} onChange={(e) => setPopMean(Number(e.target.value))} className="w-full bg-foreground/5 border text-foreground p-2 text-xs font-mono" style={{ borderColor: `${BRAND}44` }} />
        </div>
        <div>
          <SectionLabel>Std Dev</SectionLabel>
          <input type="number" value={std} onChange={(e) => setStd(Number(e.target.value))} className="w-full bg-foreground/5 border text-foreground p-2 text-xs font-mono" style={{ borderColor: `${BRAND}44` }} />
        </div>
        <div>
          <SectionLabel>Sample Size</SectionLabel>
          <input type="number" value={n} onChange={(e) => setN(Number(e.target.value))} className="w-full bg-foreground/5 border text-foreground p-2 text-xs font-mono" style={{ borderColor: `${BRAND}44` }} />
        </div>
      </div>

      <div className="border border-foreground/10 p-4">
        <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full h-48">
          {rejLeftPath && <path d={rejLeftPath} fill={`#FF6B6B44`} />}
          {rejRightPath && <path d={rejRightPath} fill={`#FF6B6B44`} />}
          <polyline fill="none" strokeWidth="2" stroke={BRAND} points={curvePoints} />
          {/* Z-score line */}
          {Math.abs(z) < 4 && (
            <line x1={toSvgX(z)} y1={pad} x2={toSvgX(z)} y2={pad + plotH} stroke="#FF6B6B" strokeWidth="2" />
          )}
          {Math.abs(z) < 4 && (
            <text x={toSvgX(z)} y={pad - 6} textAnchor="middle" fontSize="9" fill="#FF6B6B" className="font-mono">
              z = {z.toFixed(2)}
            </text>
          )}
          <text x={toSvgX(-crit)} y={pad + plotH + 14} textAnchor="middle" fontSize="8" fill="hsl(var(--foreground)/0.3)" className="font-mono">
            -1.96
          </text>
          <text x={toSvgX(crit)} y={pad + plotH + 14} textAnchor="middle" fontSize="8" fill="hsl(var(--foreground)/0.3)" className="font-mono">
            1.96
          </text>
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 border" style={{ borderColor: `${BRAND}22` }}>
          <p className="text-[8px] font-black tracking-wider text-foreground/30 uppercase">Z-Score</p>
          <p className="text-lg font-black font-mono" style={{ color: BRAND }}>{z.toFixed(3)}</p>
        </div>
        <div className="p-3 border" style={{ borderColor: `${BRAND}22` }}>
          <p className="text-[8px] font-black tracking-wider text-foreground/30 uppercase">P-Value</p>
          <p className="text-lg font-black font-mono" style={{ color: significant ? "#FF6B6B" : BRAND }}>{pValue}</p>
        </div>
        <div className="p-3 border" style={{ borderColor: `${BRAND}22` }}>
          <p className="text-[8px] font-black tracking-wider text-foreground/30 uppercase">Result</p>
          <p className="text-lg font-black font-mono mt-1" style={{ color: significant ? "#FF6B6B" : BRAND }}>
            {significant ? "REJECT H₀" : "FAIL TO REJECT H₀"}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Data Visualization Studio ──
function DataVizStudio() {
  const [chartType, setChartType] = useState<"bar" | "pie" | "histogram">("bar");
  const data = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      label: `Group ${String.fromCharCode(65 + i)}`,
      value: Math.round(Math.random() * 80 + 20),
    }));
  }, []);

  const maxVal = Math.max(...data.map((d) => d.value));
  const svgW = 350;
  const svgH = 200;
  const pad = 30;
  const plotW = svgW - pad * 2;
  const plotH = svgH - pad * 2;
  const barW = plotW / data.length - 4;

  const total = data.reduce((s, d) => s + d.value, 0);
  let pieAngle = -Math.PI / 2;
  const pieR = Math.min(plotW, plotH) / 2 - 5;
  const pieCx = pad + plotW / 2;
  const pieCy = pad + plotH / 2;

  return (
    <div className="space-y-6">
      <div className="flex gap-3">
        {(["bar", "pie", "histogram"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setChartType(t)}
            className="px-4 py-2 text-xs font-black tracking-widest uppercase border transition-all"
            style={{
              backgroundColor: chartType === t ? BRAND : "transparent",
              color: chartType === t ? "#fff" : "hsl(var(--foreground)/0.5)",
              borderColor: chartType === t ? BRAND : "hsl(var(--foreground)/0.1)",
            }}
          >
            {t === "bar" ? "Bar Chart" : t === "pie" ? "Pie Chart" : "Histogram"}
          </button>
        ))}
      </div>

      <div className="border border-foreground/10 p-4">
        <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full h-56">
          {chartType === "bar" && data.map((d, i) => {
            const h = (d.value / maxVal) * plotH;
            const x = pad + i * (barW + 4) + 2;
            const y = pad + plotH - h;
            return (
              <g key={i}>
                <rect x={x} y={y} width={barW} height={h} fill={BRAND} opacity={0.8} rx="2" />
                <text x={x + barW / 2} y={pad + plotH + 12} textAnchor="middle" fontSize="7" fill="hsl(var(--foreground)/0.4)" className="font-mono">{d.label}</text>
                <text x={x + barW / 2} y={y - 4} textAnchor="middle" fontSize="8" fill={BRAND} className="font-mono">{d.value}</text>
              </g>
            );
          })}

          {chartType === "pie" && data.map((d, i) => {
            const angle = (d.value / total) * 2 * Math.PI;
            const x1 = pieCx + pieR * Math.cos(pieAngle);
            const y1 = pieCy + pieR * Math.sin(pieAngle);
            const x2 = pieCx + pieR * Math.cos(pieAngle + angle);
            const y2 = pieCy + pieR * Math.sin(pieAngle + angle);
            const large = angle > Math.PI ? 1 : 0;
            const path = `M${pieCx},${pieCy} L${x1},${y1} A${pieR},${pieR} 0 ${large} 1 ${x2},${y2} Z`;
            const hue = (i / data.length) * 360;
            pieAngle += angle;
            return <path key={i} d={path} fill={`hsl(${hue}, 70%, 55%)`} stroke="hsl(var(--background))" strokeWidth="2" />;
          })}

          {chartType === "histogram" &&
            Array.from({ length: 10 }, (_, i) => {
              const h = Math.random() * plotH * 0.9 + 0.05 * plotH;
              const bw = plotW / 10 - 2;
              const x = pad + i * (bw + 2);
              const y = pad + plotH - h;
              return <rect key={i} x={x} y={y} width={bw} height={h} fill={BRAND} opacity={0.6 + Math.random() * 0.3} rx="1" />;
            })}
        </svg>
      </div>
    </div>
  );
}

export default function StatisticsLab() {
  const [activeTab, setActiveTab] = useState<Tab>("calc");

  const renderTab = () => {
    switch (activeTab) {
      case "calc": return <StatsCalculator />;
      case "dist": return <DistributionVisualizer />;
      case "regression": return <RegressionLab />;
      case "hypothesis": return <HypothesisTestingLab />;
      case "viz": return <DataVizStudio />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b border-foreground/10 bg-foreground/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{/* 📊 */}{"\u{1F4CA}"}</span>
            <div>
              <h1 className="text-lg font-black tracking-tight uppercase">Statistics Lab</h1>
              <p className="text-[9px] font-black tracking-widest text-foreground/30 uppercase">Probability & Data Analysis Sandbox</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[8px] font-black tracking-widest text-green-500 uppercase">Engine Online</span>
          </div>
        </div>
      </div>

      <div className="border-b border-foreground/10">
        <div className="max-w-7xl mx-auto flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-5 py-3 text-xs font-black tracking-widest uppercase border-b-2 transition-all duration-200 whitespace-nowrap flex items-center gap-2"
              style={tabStyle(activeTab === tab.id)}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {renderTab()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
