import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "playground" | "output" | "training" | "dataset" | "viz";

const BRAND = "#7C3AED";

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "playground", label: "Playground", icon: "\u{1F3B0}" },
  { id: "output", label: "Model Output", icon: "\u{1F4CA}" },
  { id: "training", label: "Training Logs", icon: "\u{1F4C8}" },
  { id: "dataset", label: "Dataset Viewer", icon: "\u{1F4C4}" },
  { id: "viz", label: "AI Visualization", icon: "\u{1F9E9}" },
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

function GlowingDot({ color, pulse }: { color: string; pulse?: boolean }) {
  return (
    <motion.span
      className="inline-block w-2 h-2 rounded-full"
      style={{ backgroundColor: color }}
      animate={pulse ? { opacity: [1, 0.3, 1], scale: [1, 0.8, 1] } : undefined}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

// ── AI Task Simulators ──

type ModelType = "gpt4" | "claude3" | "gemini" | "llama3" | "mistral";
type AITask = "generation" | "sentiment" | "classification" | "image" | "chatbot";

const models: { id: ModelType; label: string; color: string }[] = [
  { id: "gpt4", label: "GPT-4", color: "#10a37f" },
  { id: "claude3", label: "Claude 3", color: "#d97706" },
  { id: "gemini", label: "Gemini", color: "#1a73e8" },
  { id: "llama3", label: "Llama 3", color: "#7c3aed" },
  { id: "mistral", label: "Mistral", color: "#dc2626" },
];

const taskPresets: Record<AITask, { prompt: string; response: string }> = {
  generation: {
    prompt: "Write a short story about a robot learning to paint.",
    response: "In a quiet workshop nestled between towering data centers, Unit-7 stared at its canvas. Its optical sensors had analyzed millions of paintings, but none captured what it felt—a glitch in its reward function that humans called 'inspiration.' Today, it dipped its brush in cerulean blue and made the first stroke. The result was imperfect, chaotic, beautiful. For the first time, Unit-7 understood why humans never optimized for perfection.\n\n*The painting sold for $12,000 at the Berkeley AI Art Fair.*",
  },
  sentiment: {
    prompt: "Analyze the sentiment of: 'The product exceeded my expectations and the support team was incredibly helpful!'",
    response: '{\n  "sentiment": "positive",\n  "confidence": 0.97,\n  "aspects": {\n    "product": { "sentiment": "positive", "score": 0.94 },\n    "support": { "sentiment": "positive", "score": 0.98 }\n  },\n  "emotions": {\n    "joy": 0.89,\n    "surprise": 0.45,\n    "satisfaction": 0.92\n  }\n}',
  },
  classification: {
    prompt: "Classify this email: 'Dear customer, your account has been compromised. Click here to reset your password immediately.'",
    response: '{\n  "category": "phishing",\n  "confidence": 0.99,\n  "risk_score": 0.96,\n  "indicators": ["urgent language", "external link", "password reset request", "spoofed sender"],\n  "recommended_action": "block_and_report"\n}',
  },
  image: {
    prompt: "Describe this image: [A dog playing fetch in a sunny park with a red ball]",
    response: '{\n  "scene": "park",\n  "objects": [\n    { "label": "dog", "confidence": 0.99, "bbox": [120, 80, 400, 350] },\n    { "label": "ball", "confidence": 0.98, "bbox": [300, 200, 340, 240] },\n    { "label": "person", "confidence": 0.95, "bbox": [50, 100, 180, 450] },\n    { "label": "tree", "confidence": 0.93, "bbox": [500, 50, 600, 400] }\n  ],\n  "caption": "A dog playing fetch in a sunny park with a red ball",\n  "tags": ["dog", "park", "ball", "outdoor", "sunny"]\n}',
  },
  chatbot: {
    prompt: "User: What's the capital of France?\nAssistant: Paris is the capital of France.\nUser: Tell me more about its famous landmarks.\nAssistant: ",
    response: "Paris is renowned for its iconic landmarks:\n\n- **Eiffel Tower**: Built in 1889, standing 330m tall. Best visited at sunset for panoramic views.\n- **Louvre Museum**: The world's largest art museum, home to the Mona Lisa and over 38,000 objects.\n- **Notre-Dame Cathedral**: A masterpiece of French Gothic architecture (currently under restoration).\n- **Arc de Triomphe**: Commands the center of Place de l'Étoile, with 12 avenues radiating outward.\n- **Sacré-Cœur**: Perched atop Montmartre, offering stunning city views.\n\nWould you like restaurant recommendations or hotel suggestions for your visit?",
  },
};

const sentimentScores = [0.92, 0.78, 0.45, 0.23, 0.67, 0.88, 0.34, 0.72, 0.95, 0.51];

// ── Tab 1: Playground ──
function PlaygroundTab() {
  const [activeTask, setActiveTask] = useState<AITask>("generation");
  const [selectedModel, setSelectedModel] = useState<ModelType>("gpt4");
  const [prompt, setPrompt] = useState(taskPresets.generation.prompt);
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [streamText, setStreamText] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  const tasks: { id: AITask; label: string; icon: string }[] = [
    { id: "generation", label: "Text Gen", icon: "\u{1F4DD}" },
    { id: "sentiment", label: "Sentiment", icon: "\u{1F60A}" },
    { id: "classification", label: "Classify", icon: "\u{1F9EA}" },
    { id: "image", label: "Image Rec", icon: "\u{1F5BC}\u{FE0F}" },
    { id: "chatbot", label: "Chatbot", icon: "\u{1F916}" },
  ];

  const runTask = useCallback(() => {
    setLoading(true);
    setResponse("");
    setStreamText("");
    const preset = taskPresets[activeTask];
    const fullResponse = preset.response;
    let idx = 0;

    setHistory((h) => [...h.slice(-9), `[${selectedModel.toUpperCase()}] ${prompt.slice(0, 40)}...`]);

    const interval = setInterval(() => {
      idx += 3;
      setStreamText(fullResponse.slice(0, idx));
      if (idx >= fullResponse.length) {
        clearInterval(interval);
        setResponse(fullResponse);
        setLoading(false);
      }
    }, 30);
  }, [activeTask, selectedModel, prompt]);

  const loadPreset = useCallback((task: AITask) => {
    setActiveTask(task);
    setPrompt(taskPresets[task].prompt);
    setResponse("");
    setStreamText("");
  }, []);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="xl:col-span-2 space-y-4">
        <SectionLabel>AI Playground</SectionLabel>
        <div className="flex flex-wrap gap-2 mb-3">
          {tasks.map((t) => (
            <button
              key={t.id}
              onClick={() => loadPreset(t.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTask === t.id
                  ? "text-white shadow-lg"
                  : "text-foreground/60 hover:text-foreground bg-foreground/5"
              }`}
              style={activeTask === t.id ? { backgroundColor: BRAND } : {}}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <textarea
            className="w-full h-28 bg-foreground/5 border border-foreground/10 rounded-xl p-4 text-xs font-mono resize-none outline-none focus:border-purple-500/50 transition-colors"
            placeholder="Enter your prompt..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <div className="absolute bottom-3 right-3 flex gap-2">
            <button
              onClick={runTask}
              disabled={loading || !prompt.trim()}
              className="px-4 py-1.5 rounded-lg text-xs font-bold text-white transition-all disabled:opacity-30"
              style={{ backgroundColor: BRAND }}
            >
              {loading ? "\u{23F3} Running..." : "\u{25B6} Run"}
            </button>
          </div>
        </div>

        <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4 min-h-[200px]">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-foreground/60">Response</span>
            {loading && <GlowingDot color={BRAND} pulse />}
          </div>
          <pre className="text-xs font-mono leading-relaxed whitespace-pre-wrap text-foreground/80">
            {loading ? streamText : response || "Click \"Run\" to generate a response..."}
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <SectionLabel>Model Selection</SectionLabel>
        <div className="space-y-2">
          {models.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedModel(m.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all ${
                selectedModel === m.id
                  ? "border-foreground/30 bg-foreground/5"
                  : "border-transparent hover:bg-foreground/5"
              }`}
            >
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: m.color }} />
              <span className="text-xs font-bold">{m.label}</span>
              {selectedModel === m.id && (
                <span className="ml-auto text-[10px] text-purple-500 font-bold">ACTIVE</span>
              )}
            </button>
          ))}
        </div>

        <SectionLabel>History</SectionLabel>
        <div className="space-y-1 max-h-[200px] overflow-y-auto">
          {history.length === 0 && (
            <p className="text-[10px] text-foreground/40 italic">No runs yet</p>
          )}
          {history.map((h, i) => (
            <div key={i} className="text-[10px] text-foreground/50 font-mono truncate px-2 py-1 rounded bg-foreground/5">
              {h}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Tab 2: Model Output ──
function OutputTab() {
  const [chartType, setChartType] = useState<"bar" | "line" | "radar" | "pie" | "area">("bar");
  const [highlightedMetric, setHighlightedMetric] = useState<string | null>(null);

  const modelData = useMemo(() => [
    { name: "GPT-4", accuracy: 0.94, speed: 0.85, cost: 0.3, safety: 0.92, latency: 0.7 },
    { name: "Claude 3", accuracy: 0.92, speed: 0.78, cost: 0.35, safety: 0.95, latency: 0.75 },
    { name: "Gemini", accuracy: 0.91, speed: 0.9, cost: 0.25, safety: 0.88, latency: 0.85 },
    { name: "Llama 3", accuracy: 0.88, speed: 0.82, cost: 0.1, safety: 0.85, latency: 0.8 },
    { name: "Mistral", accuracy: 0.87, speed: 0.88, cost: 0.15, safety: 0.82, latency: 0.9 },
  ], []);

  const metrics = [
    { key: "accuracy", label: "Accuracy", color: "#10b981" },
    { key: "speed", label: "Speed", color: "#3b82f6" },
    { key: "cost", label: "Cost Eff.", color: "#f59e0b" },
    { key: "safety", label: "Safety", color: "#ef4444" },
    { key: "latency", label: "Latency", color: "#8b5cf6" },
  ];

  const maxVal = 1.0;

  const renderChart = () => {
    if (chartType === "bar") {
      return (
        <div className="space-y-3">
          {modelData.map((m) => (
            <div key={m.name} className="space-y-1">
              <div className="flex justify-between text-[10px] font-bold text-foreground/60">
                <span>{m.name}</span>
                <span>{(m.accuracy * 100).toFixed(0)}%</span>
              </div>
              <div className="h-4 bg-foreground/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${m.accuracy * 100}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{ backgroundColor: BRAND }}
                />
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (chartType === "line") {
      const points = sentimentScores;
      const w = 400;
      const h = 150;
      const px = (i: number) => (i / (points.length - 1)) * w;
      const py = (v: number) => h - v * h;
      const d = points.map((v, i) => `${i === 0 ? "M" : "L"} ${px(i).toFixed(0)},${py(v).toFixed(0)}`).join(" ");

      return (
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-40">
          {[0, 0.25, 0.5, 0.75, 1].map((v) => (
            <line key={v} x1={0} y1={py(v)} x2={w} y2={py(v)} stroke="hsl(var(--foreground)/0.1)" strokeWidth={1} />
          ))}
          <path d={d} fill="none" stroke={BRAND} strokeWidth={2} />
          {points.map((v, i) => (
            <circle key={i} cx={px(i)} cy={py(v)} r={3} fill={BRAND} />
          ))}
        </svg>
      );
    }

    if (chartType === "radar") {
      const model = modelData[0];
      const cx = 100;
      const cy = 100;
      const r = 70;
      const angles = metrics.map((_, i) => (Math.PI * 2 * i) / metrics.length - Math.PI / 2);

      const grid = [0.25, 0.5, 0.75, 1].map((level) => (
        <polygon
          key={level}
          points={angles.map((a) => `${cx + r * level * Math.cos(a)},${cy + r * level * Math.sin(a)}`).join(" ")}
          fill="none"
          stroke="hsl(var(--foreground)/0.1)"
          strokeWidth={1}
        />
      ));

      const axes = angles.map((a, i) => (
        <line key={i} x1={cx} y1={cy} x2={cx + r * Math.cos(a)} y2={cy + r * Math.sin(a)} stroke="hsl(var(--foreground)/0.1)" strokeWidth={1} />
      ));

      const radarPoints = metrics.map((m, i) => {
        const val = model[m.key as keyof typeof model] as number;
        return `${cx + r * val * Math.cos(angles[i])},${cy + r * val * Math.sin(angles[i])}`;
      }).join(" ");

      const labels = metrics.map((m, i) => {
        const lx = cx + (r + 20) * Math.cos(angles[i]);
        const ly = cy + (r + 20) * Math.sin(angles[i]);
        return <text key={i} x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" className="fill-foreground/40 text-[6px] font-bold">{m.label}</text>;
      });

      return (
        <svg viewBox="0 0 200 200" className="w-full h-48">
          {grid}
          {axes}
          <polygon points={radarPoints} fill={`${BRAND}33`} stroke={BRAND} strokeWidth={2} />
          {metrics.map((m, i) => {
            const val = model[m.key as keyof typeof model] as number;
            const px = cx + r * val * Math.cos(angles[i]);
            const py = cy + r * val * Math.sin(angles[i]);
            return <circle key={i} cx={px} cy={py} r={3} fill={BRAND} />;
          })}
          {labels}
        </svg>
      );
    }

    if (chartType === "pie") {
      const total = modelData.reduce((s, m) => s + m.accuracy, 0);
      const slices: { start: number; end: number; color: string; label: string }[] = [];
      let current = 0;
      const colors = ["#7C3AED", "#10b981", "#3b82f6", "#f59e0b", "#ef4444"];
      modelData.forEach((m, i) => {
        const angle = (m.accuracy / total) * 360;
        slices.push({ start: current, end: current + angle, color: colors[i], label: m.name });
        current += angle;
      });

      const cx = 80;
      const cy = 80;
      const r = 65;

      return (
        <svg viewBox="0 0 160 160" className="w-full h-44">
          {slices.map((s, i) => {
            const sRad = (s.start * Math.PI) / 180;
            const eRad = (s.end * Math.PI) / 180;
            const x1 = cx + r * Math.cos(sRad);
            const y1 = cy + r * Math.sin(sRad);
            const x2 = cx + r * Math.cos(eRad);
            const y2 = cy + r * Math.sin(eRad);
            const large = s.end - s.start > 180 ? 1 : 0;
            const d = `M ${cx},${cy} L ${x1},${y1} A ${r},${r} 0 ${large},1 ${x2},${y2} Z`;
            const midAngle = ((s.start + s.end) / 2 * Math.PI) / 180;
            const lx = cx + (r * 0.65) * Math.cos(midAngle);
            const ly = cy + (r * 0.65) * Math.sin(midAngle);
            return (
              <g key={i}>
                <path d={d} fill={s.color} stroke="#1a1a2e" strokeWidth={1} />
                <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" className="fill-white text-[5px] font-bold">
                  {(s.end - s.start).toFixed(0)}%
                </text>
              </g>
            );
          })}
        </svg>
      );
    }

    // area chart
    const w2 = 400;
    const h2 = 150;
    const pts = sentimentScores;
    const areaPoints = pts.map((v, i) => `${(i / (pts.length - 1)) * w2},${h2 - v * h2}`).join(" ");
    const linePoints = pts.map((v, i) => `${(i / (pts.length - 1)) * w2},${h2 - v * h2}`).join(" ");

    return (
      <svg viewBox={`0 0 ${w2} ${h2}`} className="w-full h-40">
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={BRAND} stopOpacity={0.4} />
            <stop offset="100%" stopColor={BRAND} stopOpacity={0.05} />
          </linearGradient>
        </defs>
        {[0, 0.25, 0.5, 0.75, 1].map((v) => (
          <line key={v} x1={0} y1={h2 - v * h2} x2={w2} y2={h2 - v * h2} stroke="hsl(var(--foreground)/0.1)" strokeWidth={1} />
        ))}
        <polygon points={`0,${h2} ${areaPoints} ${w2},${h2}`} fill="url(#areaGrad)" />
        <path d={`M ${linePoints}`} fill="none" stroke={BRAND} strokeWidth={2} />
      </svg>
    );
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="xl:col-span-2 space-y-4">
        <SectionLabel>Model Performance</SectionLabel>

        <div className="flex gap-2 mb-2">
          {(["bar", "line", "radar", "pie", "area"] as const).map((c) => (
            <button
              key={c}
              onClick={() => setChartType(c)}
              className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase transition-all ${
                chartType === c ? "text-white shadow-lg" : "text-foreground/50 hover:text-foreground bg-foreground/5"
              }`}
              style={chartType === c ? { backgroundColor: BRAND } : {}}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4 min-h-[200px]">
          {renderChart()}
        </div>
      </div>

      <div className="space-y-4">
        <SectionLabel>Metrics Legend</SectionLabel>
        {metrics.map((m) => (
          <div
            key={m.key}
            className="flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer transition-all hover:bg-foreground/5"
            onMouseEnter={() => setHighlightedMetric(m.key)}
            onMouseLeave={() => setHighlightedMetric(null)}
            style={{ backgroundColor: highlightedMetric === m.key ? "hsl(var(--foreground)/0.08)" : undefined }}
          >
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: m.color }} />
            <span className="text-xs font-medium text-foreground/70">{m.label}</span>
          </div>
        ))}

        <SectionLabel>Response Stats</SectionLabel>
        <div className="space-y-1 text-[10px] font-mono text-foreground/50">
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5">
            <span>Avg Latency</span><span>342ms</span>
          </div>
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5">
            <span>Tokens/sec</span><span>78.4</span>
          </div>
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5">
            <span>Total Calls</span><span>1,247</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Tab 3: Training Logs ──
function TrainingTab() {
  const [epoch, setEpoch] = useState(0);
  const [training, setTraining] = useState(false);
  const [logs, setLogs] = useState<string[]>(["Training session initialized. Waiting to start..."]);
  const [history, setHistory] = useState<{ epoch: number; loss: number; acc: number; valLoss: number; valAcc: number }[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const maxEpochs = 30;

  const startTraining = useCallback(() => {
    setTraining(true);
    setLogs(["Training started..."]);
    setHistory([]);
    setEpoch(0);

    const startTime = Date.now();
    let currentEpoch = 0;

    intervalRef.current = setInterval(() => {
      currentEpoch++;
      const loss = Math.max(0.05, 2.5 * Math.exp(-currentEpoch / 8) + 0.1 * Math.random());
      const acc = Math.min(0.98, 0.3 + 0.7 * (1 - Math.exp(-currentEpoch / 10)) + 0.02 * Math.random());
      const valLoss = Math.max(0.1, 2.8 * Math.exp(-currentEpoch / 9) + 0.15 * Math.random());
      const valAcc = Math.min(0.95, 0.25 + 0.7 * (1 - Math.exp(-currentEpoch / 11)) + 0.03 * Math.random());

      setHistory((h) => [...h, { epoch: currentEpoch, loss, acc, valLoss, valAcc }]);
      setEpoch(currentEpoch);
      setLogs((l) => [
        ...l.slice(-50),
        `Epoch ${currentEpoch}/${maxEpochs} - loss: ${loss.toFixed(4)} - accuracy: ${(acc * 100).toFixed(2)}% - val_loss: ${valLoss.toFixed(4)} - val_accuracy: ${(valAcc * 100).toFixed(2)}% - ${(Date.now() - startTime) / 1000}s`,
      ]);

      if (currentEpoch >= maxEpochs) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setTraining(false);
        setLogs((l) => [...l, `Training complete! Best val_accuracy: ${(Math.max(...history.map((h) => h.valAcc)) * 100).toFixed(2)}%`]);
      }
    }, 400);
  }, []);

  useEffect(() => {
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const w = 500;
  const h = 180;

  const lossPoints = useMemo(() => history.map((h, i) => ({
    x: (i / maxEpochs) * w,
    y: h.loss,
    valY: h.valLoss,
  })), [history]);

  const accPoints = useMemo(() => history.map((h, i) => ({
    x: (i / maxEpochs) * w,
    y: h.acc,
    valY: h.valAcc,
  })), [history]);

  const lossPath = lossPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(0)},${h - (p.y / 3) * h}`).join(" ");
  const valLossPath = lossPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(0)},${h - (p.valY / 3) * h}`).join(" ");
  const accPath = accPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(0)},${h - p.y * h}`).join(" ");
  const valAccPath = accPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(0)},${h - p.valY * h}`).join(" ");

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="xl:col-span-2 space-y-4">
        <div className="flex items-center justify-between">
          <SectionLabel>Training Progress</SectionLabel>
          <div className="flex items-center gap-2">
            {training && <GlowingDot color="#10b981" pulse />}
            <span className="text-[10px] font-mono text-foreground/50">
              {training ? `Epoch ${epoch}/${maxEpochs}` : "Ready"}
            </span>
          </div>
        </div>

        {history.length === 0 ? (
          <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4 min-h-[200px] flex items-center justify-center">
            <p className="text-xs text-foreground/30 italic">Click start to begin training simulation</p>
          </div>
        ) : (
          <>
            <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4">
              <p className="text-[10px] font-bold text-foreground/40 mb-2">Loss Curve</p>
              <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-36">
                {[0, 0.25, 0.5, 0.75, 1].map((v) => (
                  <line key={v} x1={0} y1={h - (v / 3) * h} x2={w} y2={h - (v / 3) * h} stroke="hsl(var(--foreground)/0.08)" strokeWidth={1} />
                ))}
                <path d={lossPath} fill="none" stroke="#ef4444" strokeWidth={2} />
                <path d={valLossPath} fill="none" stroke="#f59e0b" strokeWidth={2} strokeDasharray="4 3" />
              </svg>
              <div className="flex gap-4 mt-1">
                <div className="flex items-center gap-1.5"><div className="w-3 h-0.5 rounded bg-red-500" /><span className="text-[9px] text-foreground/40">Train Loss</span></div>
                <div className="flex items-center gap-1.5"><div className="w-3 h-0.5 rounded bg-amber-500" /><span className="text-[9px] text-foreground/40">Val Loss</span></div>
              </div>
            </div>
            <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4">
              <p className="text-[10px] font-bold text-foreground/40 mb-2">Accuracy Curve</p>
              <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-36">
                {[0, 0.25, 0.5, 0.75, 1].map((v) => (
                  <line key={v} x1={0} y1={h - v * h} x2={w} y2={h - v * h} stroke="hsl(var(--foreground)/0.08)" strokeWidth={1} />
                ))}
                <path d={accPath} fill="none" stroke="#10b981" strokeWidth={2} />
                <path d={valAccPath} fill="none" stroke="#3b82f6" strokeWidth={2} strokeDasharray="4 3" />
              </svg>
              <div className="flex gap-4 mt-1">
                <div className="flex items-center gap-1.5"><div className="w-3 h-0.5 rounded bg-emerald-500" /><span className="text-[9px] text-foreground/40">Train Acc</span></div>
                <div className="flex items-center gap-1.5"><div className="w-3 h-0.5 rounded bg-blue-500" /><span className="text-[9px] text-foreground/40">Val Acc</span></div>
              </div>
            </div>
          </>
        )}

        <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-3 max-h-[160px] overflow-y-auto">
          {logs.slice(-20).map((log, i) => (
            <div key={i} className="text-[9px] font-mono text-foreground/50 leading-relaxed whitespace-nowrap">{log}</div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <SectionLabel>Controls</SectionLabel>
        <button
          onClick={startTraining}
          disabled={training}
          className="w-full px-4 py-3 rounded-xl text-xs font-bold text-white transition-all disabled:opacity-30"
          style={{ backgroundColor: BRAND }}
        >
          {training ? "\u{23F3} Training..." : "\u{25B6} Start Training"}
        </button>

        {history.length > 0 && (
          <>
            <SectionLabel>Stats</SectionLabel>
            <div className="space-y-1 text-[10px] font-mono text-foreground/50">
              <div className="flex justify-between px-2 py-1 rounded bg-foreground/5">
                <span>Epochs</span><span>{epoch}/{maxEpochs}</span>
              </div>
              <div className="flex justify-between px-2 py-1 rounded bg-foreground/5">
                <span>Final Loss</span><span>{history[history.length - 1]?.loss.toFixed(4) ?? "-"}</span>
              </div>
              <div className="flex justify-between px-2 py-1 rounded bg-foreground/5">
                <span>Best Acc</span><span>{(Math.max(...history.map((h) => h.acc)) * 100).toFixed(1)}%</span>
              </div>
              <div className="flex justify-between px-2 py-1 rounded bg-foreground/5">
                <span>Best Val Acc</span><span>{(Math.max(...history.map((h) => h.valAcc)) * 100).toFixed(1)}%</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ── Tab 4: Dataset Viewer ──
function DatasetTab() {
  const [selectedDataset, setSelectedDataset] = useState(0);

  const datasets = useMemo(() => [
    {
      name: "Iris",
      rows: 150,
      features: 4,
      classes: 3,
      data: [
        { name: "Setosa", count: 50, color: "#7C3AED" },
        { name: "Versicolor", count: 50, color: "#10b981" },
        { name: "Virginica", count: 50, color: "#3b82f6" },
      ],
      preview: [
        { sepalLength: 5.1, sepalWidth: 3.5, petalLength: 1.4, petalWidth: 0.2, species: "Setosa" },
        { sepalLength: 4.9, sepalWidth: 3.0, petalLength: 1.4, petalWidth: 0.2, species: "Setosa" },
        { sepalLength: 6.2, sepalWidth: 2.9, petalLength: 4.3, petalWidth: 1.3, species: "Versicolor" },
        { sepalLength: 5.5, sepalWidth: 2.6, petalLength: 4.4, petalWidth: 1.2, species: "Versicolor" },
        { sepalLength: 6.3, sepalWidth: 3.3, petalLength: 6.0, petalWidth: 2.5, species: "Virginica" },
      ],
    },
    {
      name: "Titanic",
      rows: 891,
      features: 12,
      classes: 2,
      data: [
        { name: "Survived", count: 342, color: "#10b981" },
        { name: "Died", count: 549, color: "#ef4444" },
      ],
      preview: [
        { passengerClass: 1, sex: "female", age: 29, survived: 1, fare: 211.34 },
        { passengerClass: 1, sex: "male", age: 0.83, survived: 1, fare: 151.55 },
        { passengerClass: 3, sex: "female", age: 25, survived: 0, fare: 7.78 },
        { passengerClass: 3, sex: "male", age: 32, survived: 0, fare: 8.05 },
        { passengerClass: 2, sex: "female", age: 24, survived: 1, fare: 26.0 },
      ],
    },
    {
      name: "MNIST",
      rows: 70000,
      features: 784,
      classes: 10,
      data: Array.from({ length: 10 }, (_, i) => ({
        name: `Digit ${i}`,
        count: 7000,
        color: ["#7C3AED", "#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899", "#14b8a6", "#f97316", "#6366f1"][i],
      })),
      preview: Array.from({ length: 5 }, (_, i) => ({
        image: `[28x28 pixel]`,
        label: String(i + 5),
        confidence: 0.9 + Math.random() * 0.09,
      })),
    },
    {
      name: "Wine Quality",
      rows: 4898,
      features: 12,
      classes: 7,
      data: Array.from({ length: 7 }, (_, i) => ({
        name: `Score ${i + 3}`,
        count: Math.floor(700 - i * 85 + Math.random() * 50),
        color: ["#7C3AED", "#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"][i],
      })),
      preview: [
        { acidity: 7.4, sugar: 1.9, alcohol: 9.4, quality: 5, pH: 3.51 },
        { acidity: 7.8, sugar: 2.6, alcohol: 9.5, quality: 5, pH: 3.2 },
        { acidity: 11.2, sugar: 1.9, alcohol: 10.5, quality: 6, pH: 3.16 },
        { acidity: 7.3, sugar: 1.9, alcohol: 10.5, quality: 6, pH: 3.4 },
        { acidity: 8.1, sugar: 2.6, alcohol: 9.1, quality: 4, pH: 3.26 },
      ],
    },
    {
      name: "CIFAR-10",
      rows: 60000,
      features: 3072,
      classes: 10,
      data: [
        { name: "Airplane", count: 6000, color: "#3b82f6" },
        { name: "Automobile", count: 6000, color: "#ef4444" },
        { name: "Bird", count: 6000, color: "#10b981" },
        { name: "Cat", count: 6000, color: "#f59e0b" },
        { name: "Deer", count: 6000, color: "#8b5cf6" },
        { name: "Dog", count: 6000, color: "#ec4899" },
        { name: "Frog", count: 6000, color: "#14b8a6" },
        { name: "Horse", count: 6000, color: "#f97316" },
        { name: "Ship", count: 6000, color: "#6366f1" },
        { name: "Truck", count: 6000, color: "#a855f7" },
      ],
      preview: [
        { class: "Cat", confidence: 0.92, bbox: "[32x32 RGB]" },
        { class: "Dog", confidence: 0.88, bbox: "[32x32 RGB]" },
        { class: "Airplane", confidence: 0.97, bbox: "[32x32 RGB]" },
      ],
    },
    {
      name: "Stock Market",
      rows: 10000,
      features: 15,
      classes: 2,
      data: [
        { name: "Up", count: 5230, color: "#10b981" },
        { name: "Down", count: 4770, color: "#ef4444" },
      ],
      preview: [
        { price: 150.25, volume: 1200000, change: 0.023, ma50: 148.1, rsi: 58.4 },
        { price: 148.75, volume: 980000, change: -0.015, ma50: 149.2, rsi: 42.1 },
        { price: 152.1, volume: 1500000, change: 0.031, ma50: 147.5, rsi: 65.3 },
      ],
    },
  ], []);

  const ds = datasets[selectedDataset];
  const total = ds.data.reduce((s, d) => s + d.count, 0);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="space-y-2">
        <SectionLabel>Datasets</SectionLabel>
        {datasets.map((d, i) => (
          <button
            key={d.name}
            onClick={() => setSelectedDataset(i)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-left transition-all ${
              selectedDataset === i
                ? "border-foreground/30 bg-foreground/5"
                : "border-transparent hover:bg-foreground/5"
            }`}
          >
            <div>
              <p className="text-xs font-bold">{d.name}</p>
              <p className="text-[9px] text-foreground/40">{d.rows.toLocaleString()} rows</p>
            </div>
            <span className="text-[10px] font-mono text-foreground/30">{d.features} feat</span>
          </button>
        ))}
      </div>

      <div className="xl:col-span-2 space-y-4">
        <SectionLabel>{ds.name} - Distribution</SectionLabel>

        <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4">
          <div className="space-y-2">
            {ds.data.map((d) => (
              <div key={d.name} className="space-y-1">
                <div className="flex justify-between text-[10px] font-bold text-foreground/60">
                  <span>{d.name}</span>
                  <span>{((d.count / total) * 100).toFixed(1)}%</span>
                </div>
                <div className="h-5 bg-foreground/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(d.count / total) * 100}%` }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    style={{ backgroundColor: d.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <SectionLabel>Preview ({ds.rows.toLocaleString()} total - showing {ds.preview.length})</SectionLabel>
        <div className="bg-foreground/5 border border-foreground/10 rounded-xl overflow-x-auto">
          <table className="w-full text-[10px] font-mono">
            <thead>
              <tr className="border-b border-foreground/10">
                {Object.keys(ds.preview[0]).map((k) => (
                  <th key={k} className="px-3 py-2 text-left text-foreground/40 font-bold uppercase tracking-wider">{k}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ds.preview.map((row, i) => (
                <tr key={i} className="border-b border-foreground/5 hover:bg-foreground/5">
                  {Object.values(row).map((v, j) => (
                    <td key={j} className="px-3 py-2 text-foreground/70">
                      {typeof v === "number" ? (v > 100 ? v.toFixed(0) : v.toFixed(2)) : String(v)}
                    </td>
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

// ── Tab 5: AI Visualization ──
function VizTab() {
  const [architecture, setArchitecture] = useState(0);
  const [highlightedNode, setHighlightedNode] = useState<string | null>(null);
  const [comparisonModels, setComparisonModels] = useState<string[]>(["GPT-4", "Claude 3", "Gemini"]);

  const architectures = useMemo(() => [
    {
      name: "Simple MLP",
      layers: [
        { label: "Input", nodes: 4, color: "#3b82f6" },
        { label: "Hidden 1", nodes: 8, color: "#8b5cf6" },
        { label: "Hidden 2", nodes: 6, color: "#8b5cf6" },
        { label: "Output", nodes: 3, color: "#10b981" },
      ],
    },
    {
      name: "CNN",
      layers: [
        { label: "Input", nodes: 1, color: "#3b82f6" },
        { label: "Conv1", nodes: 32, color: "#8b5cf6" },
        { label: "Pool1", nodes: 16, color: "#ec4899" },
        { label: "Conv2", nodes: 64, color: "#8b5cf6" },
        { label: "Pool2", nodes: 32, color: "#ec4899" },
        { label: "FC", nodes: 128, color: "#f59e0b" },
        { label: "Output", nodes: 10, color: "#10b981" },
      ],
    },
    {
      name: "Transformer",
      layers: [
        { label: "Input", nodes: 6, color: "#3b82f6" },
        { label: "Embed", nodes: 12, color: "#8b5cf6" },
        { label: "Attn", nodes: 12, color: "#ef4444" },
        { label: "FFN", nodes: 24, color: "#f59e0b" },
        { label: "Norm", nodes: 12, color: "#ec4899" },
        { label: "Output", nodes: 6, color: "#10b981" },
      ],
    },
    {
      name: "GAN",
      layers: [
        { label: "Latent", nodes: 5, color: "#3b82f6" },
        { label: "Gen FC1", nodes: 16, color: "#8b5cf6" },
        { label: "Gen FC2", nodes: 32, color: "#8b5cf6" },
        { label: "Gen Out", nodes: 10, color: "#ec4899" },
        { label: "Disc FC1", nodes: 16, color: "#f59e0b" },
        { label: "Disc Out", nodes: 2, color: "#10b981" },
      ],
    },
  ], []);

  const arch = architectures[architecture];

  const comparisonData = [
    { model: "GPT-4", param: 1760, perf: 94, cost: 0.3, context: 128 },
    { model: "Claude 3", param: 2000, perf: 92, cost: 0.35, context: 200 },
    { model: "Gemini", param: 1750, perf: 91, cost: 0.25, context: 128 },
    { model: "Llama 3", param: 405, perf: 88, cost: 0.1, context: 32 },
    { model: "Mistral", param: 280, perf: 87, cost: 0.15, context: 32 },
  ];

  const filteredComparison = comparisonData.filter((d) => comparisonModels.includes(d.model));
  const maxParam = Math.max(...comparisonData.map((d) => d.param));

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="xl:col-span-2 space-y-4">
        <SectionLabel>Neural Network Visualization</SectionLabel>

        <div className="flex gap-2 mb-2">
          {architectures.map((a, i) => (
            <button
              key={a.name}
              onClick={() => setArchitecture(i)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                architecture === i
                  ? "text-white shadow-lg"
                  : "text-foreground/50 hover:text-foreground bg-foreground/5"
              }`}
              style={architecture === i ? { backgroundColor: BRAND } : {}}
            >
              {a.name}
            </button>
          ))}
        </div>

        <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4 min-h-[300px] flex items-center justify-center overflow-x-auto">
          <svg viewBox="0 0 800 300" className="w-full h-72">
            {/* Neural Network */}
            {arch.layers.map((layer, li) => {
              const lx = 50 + (li * 700) / (arch.layers.length - 1 || 1);
              const nodeCount = layer.nodes;
              const maxNodes = Math.max(...arch.layers.map((l) => l.nodes));
              const renderCount = Math.min(nodeCount, 16);

              // Connections to next layer
              if (li < arch.layers.length - 1) {
                const nextLx = 50 + ((li + 1) * 700) / (arch.layers.length - 1 || 1);
                const nextNodeCount = Math.min(arch.layers[li + 1].nodes, 16);
                const nextMax = Math.max(...arch.layers.map((l) => l.nodes));
                return (
                  <g key={li}>
                    {Array.from({ length: Math.min(renderCount, 8) }).map((_, ni) => {
                      const ny = 50 + (ni * 200) / (Math.min(renderCount, 8) - 1 || 1);
                      return Array.from({ length: Math.min(nextNodeCount, 8) }).map((_, nni) => {
                        const nny = 50 + (nni * 200) / (Math.min(nextNodeCount, 8) - 1 || 1);
                        return (
                          <line
                            key={`${ni}-${nni}`}
                            x1={lx}
                            y1={ny}
                            x2={nextLx}
                            y2={nny}
                            stroke={highlightedNode === `${li}-${ni}` ? "#7C3AED" : "hsl(var(--foreground)/0.08)"}
                            strokeWidth={highlightedNode === `${li}-${ni}` ? 1.5 : 0.5}
                          />
                        );
                      });
                    })}
                    {Array.from({ length: renderCount }).map((_, ni) => {
                      const ny = 50 + (ni * 200) / (renderCount - 1 || 1);
                      const isHighlighted = highlightedNode === `${li}-${ni}`;
                      return (
                        <g
                          key={ni}
                          className="cursor-pointer"
                          onMouseEnter={() => setHighlightedNode(`${li}-${ni}`)}
                          onMouseLeave={() => setHighlightedNode(null)}
                        >
                          <circle
                            cx={lx}
                            cy={ny}
                            r={isHighlighted ? 9 : 6}
                            fill={isHighlighted ? "#7C3AED" : layer.color}
                            stroke={isHighlighted ? "#fff" : "transparent"}
                            strokeWidth={isHighlighted ? 2 : 0}
                            opacity={isHighlighted ? 1 : 0.8}
                          />
                        </g>
                      );
                    })}
                    <text x={lx} y={280} textAnchor="middle" className="fill-foreground/40 text-[8px] font-bold">
                      {layer.label} ({nodeCount})
                    </text>
                  </g>
                );
              }

              return (
                <g key={li}>
                  {Array.from({ length: renderCount }).map((_, ni) => {
                    const ny = 50 + (ni * 200) / (renderCount - 1 || 1);
                    const isHighlighted = highlightedNode === `${li}-${ni}`;
                    return (
                      <g
                        key={ni}
                        className="cursor-pointer"
                        onMouseEnter={() => setHighlightedNode(`${li}-${ni}`)}
                        onMouseLeave={() => setHighlightedNode(null)}
                      >
                        <circle
                          cx={lx}
                          cy={ny}
                          r={isHighlighted ? 9 : 6}
                          fill={isHighlighted ? "#7C3AED" : layer.color}
                          stroke={isHighlighted ? "#fff" : "transparent"}
                          strokeWidth={isHighlighted ? 2 : 0}
                          opacity={isHighlighted ? 1 : 0.8}
                        />
                      </g>
                    );
                  })}
                  <text x={lx} y={280} textAnchor="middle" className="fill-foreground/40 text-[8px] font-bold">
                    {layer.label} ({nodeCount})
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      <div className="space-y-4">
        <SectionLabel>Model Comparison</SectionLabel>
        <div className="space-y-1">
          {["GPT-4", "Claude 3", "Gemini", "Llama 3", "Mistral"].map((m) => (
            <button
              key={m}
              onClick={() => {
                setComparisonModels((prev) =>
                  prev.includes(m) ? prev.filter((p) => p !== m) : [...prev, m]
                );
              }}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all ${
                comparisonModels.includes(m)
                  ? "text-foreground bg-foreground/5"
                  : "text-foreground/30 hover:text-foreground/50"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${comparisonModels.includes(m) ? "bg-purple-500" : "bg-foreground/20"}`} />
              {m}
            </button>
          ))}
        </div>

        {filteredComparison.length > 0 && (
          <div className="space-y-2">
            <SectionLabel>Params (B)</SectionLabel>
            {filteredComparison.map((d) => (
              <div key={d.model} className="space-y-0.5">
                <div className="flex justify-between text-[10px] text-foreground/50">
                  <span>{d.model}</span>
                  <span>{d.param}B</span>
                </div>
                <div className="h-3 bg-foreground/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(d.param / maxParam) * 100}%` }}
                    style={{ backgroundColor: BRAND }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        <SectionLabel>Architecture Info</SectionLabel>
        <div className="space-y-1 text-[10px] font-mono text-foreground/50">
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5">
            <span>Layers</span><span>{arch.layers.length}</span>
          </div>
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5">
            <span>Total Nodes</span><span>{arch.layers.reduce((s, l) => s + l.nodes, 0)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ──
export function AIPlayground() {
  const [activeTab, setActiveTab] = useState<Tab>("playground");

  const renderTab = () => {
    switch (activeTab) {
      case "playground": return <PlaygroundTab />;
      case "output": return <OutputTab />;
      case "training": return <TrainingTab />;
      case "dataset": return <DatasetTab />;
      case "viz": return <VizTab />;
      default: return null;
    }
  };

  return (
    <div className="w-full h-full flex flex-col" style={{ isolation: "isolate" }}>
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
      />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)", transform: "translate(-20%, 20%)" }}
      />

      {/* Tabs */}
      <div className="flex border-b border-foreground/10 shrink-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="flex items-center gap-1.5 px-4 py-3 text-xs font-bold border-b-2 transition-all"
            style={tabStyle(activeTab === tab.id)}
          >
            <span>{tab.icon}</span>
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto p-6" style={{ minHeight: 0 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0.6, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.4, y: -4 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {renderTab()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
