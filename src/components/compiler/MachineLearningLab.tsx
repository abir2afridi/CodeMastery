import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "explorer" | "trainer" | "network" | "metrics" | "code";

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "explorer", label: "Dataset Explorer", icon: "\u{1F4CA}" },
  { id: "trainer", label: "Model Trainer", icon: "\u{2699}\u{FE0F}" },
  { id: "network", label: "Neural Network", icon: "\u{1F9E0}" },
  { id: "metrics", label: "Metrics Dashboard", icon: "\u{1F4C8}" },
  { id: "code", label: "ML Code Editor", icon: "\u{1F4BB}" },
];

const BRAND = "#7B61FF";

function range(start: number, end: number) {
  return Array.from({ length: end - start }, (_, i) => start + i);
}

// Simulated dataset
const demoColumns = ["age", "income", "education_years", "credit_score", "loan_default"];
const demoRows = range(1, 51).map((i) => ({
  age: 25 + Math.floor(Math.random() * 40),
  income: 30000 + Math.floor(Math.random() * 120000),
  education_years: 10 + Math.floor(Math.random() * 12),
  credit_score: 500 + Math.floor(Math.random() * 300),
  loan_default: Math.random() > 0.7 ? 1 : 0,
}));

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

// ── Dataset Explorer ──
function DatasetExplorer() {
  const [data] = useState(demoRows);
  const [selectedCol, setSelectedCol] = useState(demoColumns[0]);

  const vals = data.map((r) => Number((r as any)[selectedCol]));
  const mean = (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1);
  const sorted = [...vals].sort((a, b) => a - b);
  const median = sorted[Math.floor(sorted.length / 2)].toFixed(1);
  const min = Math.min(...vals).toFixed(1);
  const max = Math.max(...vals).toFixed(1);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <SectionLabel>Column Selector</SectionLabel>
          <select
            value={selectedCol}
            onChange={(e) => setSelectedCol(e.target.value)}
            className="w-full bg-foreground/5 border border-foreground/10 text-foreground p-2.5 text-xs font-mono"
            style={{ borderColor: `${BRAND}44` }}
          >
            {demoColumns.map((c) => (
              <option key={c} value={c} className="bg-background">{c}</option>
            ))}
          </select>
        </div>
        <div>
          <SectionLabel>Row Count</SectionLabel>
          <p className="text-2xl font-black font-mono" style={{ color: BRAND }}>{data.length}</p>
        </div>
      </div>

      <div>
        <SectionLabel>Column Statistics</SectionLabel>
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: "Mean", value: mean },
            { label: "Median", value: median },
            { label: "Min", value: min },
            { label: "Max", value: max },
          ].map((s) => (
            <div key={s.label} className="p-3 border border-foreground/10 bg-foreground/[0.02]">
              <p className="text-[10px] font-black tracking-wider text-foreground/30 uppercase">{s.label}</p>
              <p className="text-lg font-black font-mono mt-1">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionLabel>Data Preview (first 10 rows)</SectionLabel>
        <div className="overflow-x-auto">
          <table className="w-full text-[11px] font-mono border-collapse">
            <thead>
              <tr className="border-b border-foreground/10">
                {demoColumns.map((c) => (
                  <th key={c} className="text-left p-2 text-[9px] font-black tracking-wider text-foreground/40 uppercase">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.slice(0, 10).map((row, i) => (
                <tr key={i} className="border-b border-foreground/5 hover:bg-foreground/[0.02]">
                  {demoColumns.map((c) => (
                    <td key={c} className="p-2">{(row as any)[c]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ── Model Trainer ──
function ModelTrainer() {
  const [model, setModel] = useState("linear_regression");
  const [lr, setLr] = useState(0.01);
  const [epochs, setEpochs] = useState(50);
  const [training, setTraining] = useState(false);
  const [progress, setProgress] = useState(0);
  const [lossCurve, setLossCurve] = useState<number[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTraining = useCallback(() => {
    setTraining(true);
    setProgress(0);
    setLossCurve([]);
    let p = 0;
    const curve: number[] = [];
    intervalRef.current = setInterval(() => {
      p += Math.random() * 8 + 2;
      if (p > 100) p = 100;
      const loss = Math.max(0.05, 2.5 * Math.exp(-p / 25) + Math.random() * 0.1);
      curve.push(loss);
      setProgress(p);
      setLossCurve([...curve]);
      if (p >= 100) {
        clearInterval(intervalRef.current!);
        setTraining(false);
      }
    }, 300);
  }, []);

  useEffect(() => {
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const maxLoss = Math.max(...lossCurve, 1);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <SectionLabel>Algorithm</SectionLabel>
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full bg-foreground/5 border border-foreground/10 text-foreground p-2.5 text-xs font-mono"
            style={{ borderColor: `${BRAND}44` }}
          >
            <option value="linear_regression">Linear Regression</option>
            <option value="logistic_regression">Logistic Regression</option>
            <option value="decision_tree">Decision Tree</option>
            <option value="random_forest">Random Forest</option>
            <option value="neural_network">Neural Network</option>
          </select>
        </div>
        <div>
          <SectionLabel>Learning Rate</SectionLabel>
          <input
            type="range" min="0.001" max="0.1" step="0.001"
            value={lr} onChange={(e) => setLr(Number(e.target.value))}
            className="w-full accent-[#7B61FF]"
          />
          <p className="text-xs font-mono mt-1 text-foreground/50">{lr}</p>
        </div>
        <div>
          <SectionLabel>Epochs</SectionLabel>
          <input
            type="range" min="10" max="200" step="10"
            value={epochs} onChange={(e) => setEpochs(Number(e.target.value))}
            className="w-full accent-[#7B61FF]"
          />
          <p className="text-xs font-mono mt-1 text-foreground/50">{epochs}</p>
        </div>
        <div className="flex items-end">
          <button
            onClick={startTraining}
            disabled={training}
            className="w-full py-2.5 text-xs font-black tracking-widest uppercase transition-all duration-200 disabled:opacity-30"
            style={{
              backgroundColor: training ? "hsl(var(--foreground)/0.1)" : BRAND,
              color: training ? "hsl(var(--foreground)/0.5)" : "#fff",
            }}
          >
            {training ? "Training..." : "Train Model"}
          </button>
        </div>
      </div>

      {training || lossCurve.length > 0 ? (
        <div>
          <SectionLabel>Training Progress: {Math.round(progress)}%</SectionLabel>
          <div className="h-1.5 w-full bg-foreground/5 relative overflow-hidden rounded-full">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{ backgroundColor: BRAND, width: `${progress}%` }}
              layout
            />
          </div>
          {lossCurve.length > 0 && (
            <div className="mt-4">
              <SectionLabel>Loss Curve</SectionLabel>
              <div className="h-48 border border-foreground/10 p-4 relative">
                <svg viewBox={`0 0 ${lossCurve.length} 100`} className="w-full h-full">
                  <polyline
                    fill="none"
                    strokeWidth="2"
                    stroke={BRAND}
                    points={lossCurve.map((v, i) => `${i},${100 - (v / maxLoss) * 90}`).join(" ")}
                  />
                </svg>
                <div className="absolute bottom-1 right-2 text-[8px] font-mono text-foreground/20">
                  <span>Loss: {lossCurve[lossCurve.length - 1]?.toFixed(3) || "—"}</span>
                </div>
              </div>
            </div>
          )}
          {!training && lossCurve.length > 0 && (
            <p className="text-xs mt-2" style={{ color: BRAND }}>
              Training complete! Final loss: {lossCurve[lossCurve.length - 1]?.toFixed(4)}
            </p>
          )}
        </div>
      ) : null}
    </div>
  );
}

// ── Neural Network Visualizer ──
function NeuralNetworkVisualizer() {
  const layers = [4, 6, 5, 3];
  const layerGap = 120;
  const nodeRadius = 14;
  const svgW = layers.length * layerGap;
  const maxNodes = Math.max(...layers);
  const svgH = maxNodes * 40 + 60;

  const [activeNode, setActiveNode] = useState<{l:number;n:number} | null>(null);

  return (
    <div className="space-y-4">
      <SectionLabel>Interactive Neural Network — click a node to inspect</SectionLabel>
      <div className="border border-foreground/10 p-4 overflow-x-auto">
        <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full max-h-72" style={{ minHeight: 200 }}>
          {layers.map((numNodes, lIdx) => {
            const cx = lIdx * layerGap + layerGap / 2;
            const startY = (svgH - numNodes * 40) / 2;
            return Array.from({ length: numNodes }).map((_, nIdx) => {
              const cy = startY + nIdx * 40;
              return (
                <g key={`${lIdx}-${nIdx}`}>
                  {lIdx < layers.length - 1 && Array.from({ length: layers[lIdx + 1] }).map((_, n2Idx) => {
                    const cx2 = (lIdx + 1) * layerGap + layerGap / 2;
                    const startY2 = (svgH - layers[lIdx + 1] * 40) / 2;
                    const cy2 = startY2 + n2Idx * 40;
                    return (
                      <line
                        key={`conn-${nIdx}-${n2Idx}`}
                        x1={cx} y1={cy} x2={cx2} y2={cy2}
                        stroke="hsl(var(--foreground)/0.1)"
                        strokeWidth="1"
                      />
                    );
                  })}
                  <circle
                    cx={cx} cy={cy} r={nodeRadius}
                    fill={activeNode?.l === lIdx && activeNode?.n === nIdx ? BRAND : "hsl(var(--foreground)/0.08)"}
                    stroke={activeNode?.l === lIdx && activeNode?.n === nIdx ? BRAND : "hsl(var(--foreground)/0.2)"}
                    strokeWidth="1.5"
                    style={{ cursor: "pointer", transition: "all 0.2s" }}
                    onClick={() => setActiveNode(activeNode?.l === lIdx && activeNode?.n === nIdx ? null : { l: lIdx, n: nIdx })}
                  />
                  <text x={cx} y={cy + 3} textAnchor="middle" fontSize="8" fill="hsl(var(--foreground)/0.5)" className="font-mono">
                    {nIdx + 1}
                  </text>
                </g>
              );
            });
          })}
          {layers.map((_, lIdx) => (
            <text
              key={`label-${lIdx}`}
              x={lIdx * layerGap + layerGap / 2} y={svgH - 8}
              textAnchor="middle"
              fontSize="8"
              fill="hsl(var(--foreground)/0.3)"
              className="font-mono"
            >
              Layer {lIdx + 1} ({layers[lIdx]} neurons)
            </text>
          ))}
        </svg>
      </div>
      {activeNode && (
        <div className="p-3 border border-foreground/10 bg-foreground/[0.02] text-xs font-mono">
          Layer {activeNode.l + 1}, Neuron {activeNode.n + 1} — Activation: ReLU, Bias: 0.12, Weight count: {activeNode.l > 0 ? layers[activeNode.l - 1] : 0}
        </div>
      )}
    </div>
  );
}

// ── Metrics Dashboard ──
function MetricsDashboard() {
  const confusion = [
    [85, 15],
    [10, 90],
  ];
  const total = confusion[0][0] + confusion[0][1] + confusion[1][0] + confusion[1][1];
  const accuracy = ((confusion[0][0] + confusion[1][1]) / total * 100).toFixed(1);
  const precision = (confusion[1][1] / (confusion[1][1] + confusion[0][1]) * 100).toFixed(1);
  const recall = (confusion[1][1] / (confusion[1][1] + confusion[1][0]) * 100).toFixed(1);
  const f1 = (2 * Number(precision) * Number(recall) / (Number(precision) + Number(recall))).toFixed(1);

  const metrics = [
    { label: "Accuracy", value: `${accuracy}%` },
    { label: "Precision", value: `${precision}%` },
    { label: "Recall", value: `${recall}%` },
    { label: "F1 Score", value: `${f1}%` },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="p-4 border text-center" style={{ borderColor: `${BRAND}33` }}>
            <p className="text-2xl font-black font-mono" style={{ color: BRAND }}>{m.value}</p>
            <p className="text-[9px] font-black tracking-wider text-foreground/30 uppercase mt-1">{m.label}</p>
          </div>
        ))}
      </div>

      <div>
        <SectionLabel>Confusion Matrix</SectionLabel>
        <div className="grid grid-cols-2 w-64 border border-foreground/10">
          <div className="p-1 border-b border-r border-foreground/10 text-[8px] text-foreground/20 font-mono text-center" />
          <div className="p-1 border-b border-foreground/10 text-[8px] text-foreground/20 font-mono text-center">Predicted Positive</div>
          <div className="p-1 border-r border-foreground/10 text-[8px] text-foreground/20 font-mono text-center">Actual Positive</div>
          {confusion.map((row, r) =>
            row.map((val, c) => (
              <div
                key={`${r}-${c}`}
                className="p-4 text-center font-black font-mono text-sm border"
                style={{
                  borderColor: "hsl(var(--foreground)/0.1)",
                  backgroundColor: r === c ? `${BRAND}22` : "hsl(var(--foreground)/0.03)",
                  color: r === c ? BRAND : "hsl(var(--foreground)/0.5)",
                }}
              >
                {val}
              </div>
            ))
          )}
          <div className="p-1 border-r border-t border-foreground/10 text-[8px] text-foreground/20 font-mono text-center">Actual Negative</div>
        </div>
      </div>
    </div>
  );
}

// ── ML Code Editor ──
function MLCodeEditor() {
  const [code, setCode] = useState(`# Machine Learning Pipeline
# Load and explore data
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

data = pd.read_csv("dataset.csv")
X = data.drop("target", axis=1)
y = data["target"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, y_pred):.2f}")
`);
  const [output, setOutput] = useState<string[]>([]);

  const runCode = () => {
    const lines = code.split("\n");
    const out: string[] = [];
    lines.forEach((l) => {
      if (l.startsWith("print")) {
        const match = l.match(/f?"([^"]+)"/);
        if (match) {
          const s = match[1].replace(/\{([^}]+)\}/g, (_, expr) => {
            if (expr.includes("accuracy_score")) return "0.94";
            return "42";
          });
          out.push(s);
        }
      }
      if (l.startsWith("model.fit")) out.push("Training complete (simulated)");
      if (l.startsWith("data =")) out.push("Dataset loaded: 1000 rows, 12 columns");
    });
    if (out.length === 0) out.push("Code executed successfully (simulated)");
    setOutput(out);
  };

  return (
    <div className="space-y-4">
      <SectionLabel>Python ML Code Editor</SectionLabel>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-64 bg-black text-green-400 p-4 text-xs font-mono leading-relaxed border border-foreground/10 resize-none"
        spellCheck={false}
      />
      <div className="flex gap-3">
        <button
          onClick={runCode}
          className="px-6 py-2 text-xs font-black tracking-widest uppercase text-white transition-all"
          style={{ backgroundColor: BRAND }}
        >
          Run
        </button>
        <button
          onClick={() => setCode(`# Start writing your ML code here\nprint("Hello ML!")`)}
          className="px-6 py-2 text-xs font-black tracking-widest uppercase transition-all border"
          style={{ borderColor: `${BRAND}44`, color: BRAND }}
        >
          Reset
        </button>
      </div>
      {output.length > 0 && (
        <div>
          <SectionLabel>Output</SectionLabel>
          <div className="bg-black border border-foreground/10 p-4 text-xs font-mono text-green-400 space-y-1">
            {output.map((l, i) => <div key={i}>{l}</div>)}
          </div>
        </div>
      )}
    </div>
  );
}

export default function MachineLearningLab() {
  const [activeTab, setActiveTab] = useState<Tab>("explorer");

  const renderTab = () => {
    switch (activeTab) {
      case "explorer": return <DatasetExplorer />;
      case "trainer": return <ModelTrainer />;
      case "network": return <NeuralNetworkVisualizer />;
      case "metrics": return <MetricsDashboard />;
      case "code": return <MLCodeEditor />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-foreground/10 bg-foreground/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{/* <!-- --> */}{"\u{1F916}"}</span>
            <div>
              <h1 className="text-lg font-black tracking-tight uppercase">Machine Learning Lab</h1>
              <p className="text-[9px] font-black tracking-widest text-foreground/30 uppercase">AI & Data Science Sandbox</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[8px] font-black tracking-widest text-green-500 uppercase">Engine Online</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
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

      {/* Content */}
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
