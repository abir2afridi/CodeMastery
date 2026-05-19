import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "memory" | "executor" | "flowchart" | "logic" | "playground";

const BRAND = "#2563EB";

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "memory", label: "Memory Lab", icon: "\u{1F9E0}" },
  { id: "executor", label: "Executor", icon: "\u{25B6}\u{FE0F}" },
  { id: "flowchart", label: "Flowchart", icon: "\u{1F4CA}" },
  { id: "logic", label: "Logic Builder", icon: "\u{1F9E9}" },
  { id: "playground", label: "Playground", icon: "\u{1F3AE}" },
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

// ── Memory Cell ──
interface MemVar {
  name: string;
  type: string;
  value: string;
  address: string;
}

function genAddr() {
  return "0x" + Math.floor(Math.random() * 0xFFFF).toString(16).padStart(4, "0");
}

// ── Tab 1: Memory Lab ──
function MemoryTab() {
  const [vars, setVars] = useState<MemVar[]>([
    { name: "score", type: "number", value: "0", address: genAddr() },
    { name: "name", type: "text", value: "Alice", address: genAddr() },
    { name: "isLoggedIn", type: "boolean", value: "true", address: genAddr() },
  ]);
  const [newName, setNewName] = useState("");
  const [newType, setNewType] = useState<"number" | "text" | "boolean">("number");
  const [newValue, setNewValue] = useState("");
  const [highlightVar, setHighlightVar] = useState<string | null>(null);

  const addVar = useCallback(() => {
    if (!newName.trim()) return;
    const val = newValue || (newType === "number" ? "0" : newType === "boolean" ? "false" : "");
    setVars((prev) => [...prev, { name: newName.trim(), type: newType, value: val, address: genAddr() }]);
    setNewName("");
    setNewValue("");
  }, [newName, newType, newValue]);

  const removeVar = useCallback((name: string) => {
    setVars((prev) => prev.filter((v) => v.name !== name));
  }, []);

  const updateValue = useCallback((name: string, value: string) => {
    setVars((prev) => prev.map((v) => v.name === name ? { ...v, value } : v));
  }, []);

  const typeColors: Record<string, string> = {
    number: "#3b82f6",
    text: "#10b981",
    boolean: "#f59e0b",
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="xl:col-span-2 space-y-4">
        <SectionLabel>Memory Visualization</SectionLabel>

        <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {vars.map((v) => (
              <motion.div
                key={v.name}
                layout
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative border border-foreground/10 rounded-xl p-4 bg-card"
                onMouseEnter={() => setHighlightVar(v.name)}
                onMouseLeave={() => setHighlightVar(null)}
                style={{ borderColor: highlightVar === v.name ? BRAND : undefined }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold font-mono">{v.name}</span>
                  <button
                    onClick={() => removeVar(v.name)}
                    className="text-foreground/30 hover:text-red-400 text-[10px]"
                  >
                    {"\u2715"}
                  </button>
                </div>
                <div
                  className="text-[9px] font-bold uppercase tracking-wider mb-2 px-2 py-0.5 rounded-full inline-block text-white"
                  style={{ backgroundColor: typeColors[v.type] }}
                >
                  {v.type}
                </div>
                <div className="mt-2">
                  <input
                    className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-2 py-1.5 text-xs font-mono outline-none focus:border-blue-500/50 transition-colors"
                    value={v.value}
                    onChange={(e) => updateValue(v.name, e.target.value)}
                  />
                </div>
                <div className="mt-1 text-[8px] font-mono text-foreground/30">{v.address}</div>
              </motion.div>
            ))}
          </div>

          {vars.length === 0 && (
            <div className="text-center py-8 text-foreground/30 text-xs italic">
              No variables yet. Create one using the form!
            </div>
          )}
        </div>

        <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4">
          <p className="text-[10px] font-bold text-foreground/40 mb-2">Memory Map</p>
          <div className="space-y-1 text-[9px] font-mono text-foreground/40 leading-relaxed">
            {vars.map((v) => (
              <div key={v.name} className="flex items-center gap-2">
                <span className="text-foreground/30">{v.address}</span>
                <span className="text-foreground/50">|</span>
                <span style={{ color: typeColors[v.type] }}>{v.name}</span>
                <span className="text-foreground/30">=</span>
                <span className="text-foreground/70">{v.value}</span>
              </div>
            ))}
            <div className="text-foreground/20 mt-1">... {Math.max(0, 10 - vars.length)} empty slots</div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <SectionLabel>New Variable</SectionLabel>
        <div className="space-y-3 bg-foreground/5 border border-foreground/10 rounded-xl p-4">
          <div>
            <label className="text-[10px] text-foreground/50 mb-1 block">Name</label>
            <input
              className="w-full bg-foreground/10 border border-foreground/10 rounded-lg px-3 py-2 text-xs font-mono outline-none focus:border-blue-500/50 transition-colors"
              placeholder="e.g., myVar"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") addVar(); }}
            />
          </div>
          <div>
            <label className="text-[10px] text-foreground/50 mb-1 block">Type</label>
            <div className="flex gap-1.5">
              {(["number", "text", "boolean"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setNewType(t)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                    newType === t
                      ? "text-white shadow-lg"
                      : "text-foreground/50 bg-foreground/10"
                  }`}
                  style={newType === t ? { backgroundColor: typeColors[t] } : {}}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-[10px] text-foreground/50 mb-1 block">Initial Value</label>
            <input
              className="w-full bg-foreground/10 border border-foreground/10 rounded-lg px-3 py-2 text-xs font-mono outline-none focus:border-blue-500/50 transition-colors"
              placeholder={newType === "number" ? "0" : newType === "boolean" ? "true/false" : "Hello!"}
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
            />
          </div>
          <button
            onClick={addVar}
            disabled={!newName.trim()}
            className="w-full px-4 py-2 rounded-xl text-xs font-bold text-white transition-all disabled:opacity-30"
            style={{ backgroundColor: BRAND }}
          >
            + Add Variable
          </button>
        </div>

        <SectionLabel>Tips</SectionLabel>
        <div className="space-y-1.5 text-[10px] text-foreground/50 leading-relaxed">
          <div className="px-3 py-2 rounded-lg bg-foreground/5 border border-foreground/5">
            <strong className="text-foreground/70">Variables</strong> are like labeled boxes where you store information.
          </div>
          <div className="px-3 py-2 rounded-lg bg-foreground/5 border border-foreground/5">
            <strong className="text-foreground/70">Memory</strong> is where your program keeps track of all its data.
          </div>
          <div className="px-3 py-2 rounded-lg bg-foreground/5 border border-foreground/5">
            <strong className="text-foreground/70">Addresses</strong> are like house numbers for memory locations.
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Tab 2: Executor ──
function ExecutorTab() {
  const [code] = useState([
    { line: "x = 5", desc: "Store 5 in variable x" },
    { line: "y = 3", desc: "Store 3 in variable y" },
    { line: "sum = x + y", desc: "Add x and y, store in sum" },
    { line: "if sum > 7:", desc: "Check if sum is greater than 7" },
    { line: "  print('Large!')", desc: "Print 'Large!' (indented = inside if)" },
    { line: "else:", desc: "If sum is NOT greater than 7..." },
    { line: "  print('Small!')", desc: "Print 'Small!'" },
    { line: "print('Done!')", desc: "Always runs (not indented)" },
  ]);
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);
  const [variables, setVariables] = useState<Record<string, string>>({});
  const [output, setOutput] = useState<string[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const executeStep = useCallback((targetStep: number) => {
    const line = code[targetStep];
    if (!line) return;

    const newVars = { ...variables };

    if (line.line.startsWith("x =")) {
      newVars["x"] = "5";
    } else if (line.line.startsWith("y =")) {
      newVars["y"] = "3";
    } else if (line.line.startsWith("sum =")) {
      newVars["sum"] = String(Number(newVars["x"] || 0) + Number(newVars["y"] || 0));
    } else if (line.line.includes("print(")) {
      const match = line.line.match(/print\('(.+?)'\)/);
      if (match) {
        setOutput((prev) => [...prev, match[1]]);
      }
    }

    setVariables(newVars);
    setStep(targetStep);
  }, [code, variables]);

  const startExecution = useCallback(() => {
    setStep(-1);
    setVariables({});
    setOutput([]);
    setRunning(true);

    let i = 0;
    intervalRef.current = setInterval(() => {
      if (i < code.length) {
        executeStep(i);
        i++;
      } else {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setRunning(false);
      }
    }, 800);
  }, [code, executeStep]);

  const resetExecution = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setStep(-1);
    setVariables({});
    setOutput([]);
    setRunning(false);
  }, []);

  const stepForward = useCallback(() => {
    const next = Math.min(step + 1, code.length - 1);
    if (next !== step) {
      executeStep(next);
    }
  }, [step, code, executeStep]);

  const stepBack = useCallback(() => {
    resetExecution();
    // Re-execute up to prev step
    const prev = Math.max(0, step - 1);
    for (let i = 0; i <= prev; i++) {
      executeStep(i);
    }
  }, [step, resetExecution, executeStep]);

  useEffect(() => {
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="xl:col-span-2 space-y-4">
        <SectionLabel>Step-by-Step Execution {running && <GlowingDot color={BRAND} pulse />}</SectionLabel>

        <div className="bg-foreground/5 border border-foreground/10 rounded-xl overflow-hidden">
          <div className="px-4 py-2 bg-foreground/5 border-b border-foreground/10 flex items-center gap-2">
            <span className="text-[9px] font-bold text-foreground/40 uppercase">pseudocode</span>
            <div className="flex-1" />
            <button onClick={stepBack} disabled={step < 0 || running}
              className="px-2 py-1 rounded text-[10px] text-foreground/50 hover:text-foreground disabled:opacity-30 transition-all">
              {"\u{23EE}"}
            </button>
            <button onClick={startExecution} disabled={running}
              className="px-3 py-1 rounded text-[10px] font-bold text-white disabled:opacity-30 transition-all"
              style={{ backgroundColor: running ? "#6b7280" : BRAND }}>
              {running ? "\u{23F3}" : "\u{25B6} Run"}
            </button>
            <button onClick={stepForward} disabled={step >= code.length - 1 || running}
              className="px-2 py-1 rounded text-[10px] text-foreground/50 hover:text-foreground disabled:opacity-30 transition-all">
              {"\u{23ED}"}
            </button>
            <button onClick={resetExecution}
              className="px-2 py-1 rounded text-[10px] text-foreground/50 hover:text-foreground transition-all">
              {"\u{1F504}"}
            </button>
          </div>
          <div className="p-4 space-y-0.5 font-mono text-xs">
            {code.map((c, i) => (
              <div
                key={i}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-3 ${
                  i === step
                    ? "text-white font-bold"
                    : i < step
                      ? "text-foreground/40"
                      : "text-foreground/70"
                }`}
                style={i === step ? { backgroundColor: BRAND } : i < step ? { backgroundColor: "hsl(var(--foreground)/0.05)" } : {}}
              >
                <span className="text-[8px] text-foreground/30 w-5 text-right shrink-0">{i + 1}</span>
                <span className="flex-1">{c.line}</span>
                {i === step && (
                  <span className="text-[9px] text-white/70 whitespace-nowrap">{c.desc}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {output.length > 0 && (
          <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4">
            <p className="text-[10px] font-bold text-foreground/40 mb-2">Output</p>
            <div className="space-y-0.5">
              {output.map((o, i) => (
                <div key={i} className="text-xs font-mono text-foreground/70 px-3 py-1 rounded bg-foreground/5">
                  {">"} {o}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <SectionLabel>Variables</SectionLabel>
        <div className="space-y-2">
          {Object.keys(variables).length === 0 ? (
            <p className="text-[10px] text-foreground/30 italic px-3">No variables yet. Run the code!</p>
          ) : (
            Object.entries(variables).map(([name, val]) => (
              <div key={name} className="flex items-center gap-3 px-3 py-2 rounded-xl bg-foreground/5 border border-foreground/10">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: BRAND }} />
                <span className="text-xs font-mono font-bold">{name}</span>
                <span className="text-xs font-mono text-foreground/70">= {val}</span>
              </div>
            ))
          )}
        </div>

        {step >= 0 && (
          <>
            <SectionLabel>Explanation</SectionLabel>
            <div className="px-3 py-2 rounded-lg bg-foreground/5 border border-foreground/5 text-[10px] text-foreground/60 leading-relaxed">
              {code[step]?.desc}
            </div>
          </>
        )}

        <SectionLabel>Controls</SectionLabel>
        <div className="text-[10px] text-foreground/50 leading-relaxed space-y-1.5 px-1">
          <p>{"\u{25B6}"} Run to execute all steps automatically</p>
          <p>{"\u{23ED}"} Step forward one line at a time</p>
          <p>{"\u{23EE}"} Step backward one line</p>
          <p>{"\u{1F504}"} Reset the execution</p>
        </div>
      </div>
    </div>
  );
}

// ── Tab 3: Flowchart ──
function FlowchartTab() {
  const [selectedAlgo, setSelectedAlgo] = useState(0);

  const algorithms = useMemo(() => [
    {
      name: "Check if Even",
      steps: [
        { shape: "startend", label: "Start" },
        { shape: "input", label: "Get number n" },
        { shape: "decision", label: "n % 2 == 0?" },
        { shape: "output", label: 'Print "Even"' },
        { shape: "output", label: 'Print "Odd"' },
        { shape: "startend", label: "End" },
      ],
      connections: [
        [0, 1], [1, 2], [2, 3], [2, 4], [3, 5], [4, 5],
      ],
      yesEdges: [2],
      noEdges: [2],
    },
    {
      name: "Find Maximum",
      steps: [
        { shape: "startend", label: "Start" },
        { shape: "input", label: "Read a, b" },
        { shape: "decision", label: "a > b?" },
        { shape: "output", label: "max = a" },
        { shape: "output", label: "max = b" },
        { shape: "output", label: "Print max" },
        { shape: "startend", label: "End" },
      ],
      connections: [[0, 1], [1, 2], [2, 3], [2, 4], [3, 5], [4, 5], [5, 6]],
      yesEdges: [2],
      noEdges: [2],
    },
    {
      name: "Count to 5",
      steps: [
        { shape: "startend", label: "Start" },
        { shape: "process", label: "count = 1" },
        { shape: "decision", label: "count <= 5?" },
        { shape: "output", label: "Print count" },
        { shape: "process", label: "count = count + 1" },
        { shape: "startend", label: "End" },
      ],
      connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 2], [2, 5]],
      yesEdges: [2],
      noEdges: [2],
    },
    {
      name: "Grade Calculator",
      steps: [
        { shape: "startend", label: "Start" },
        { shape: "input", label: "Get score" },
        { shape: "decision", label: "score >= 90?" },
        { shape: "output", label: 'Grade "A"' },
        { shape: "decision", label: "score >= 80?" },
        { shape: "output", label: 'Grade "B"' },
        { shape: "decision", label: "score >= 70?" },
        { shape: "output", label: 'Grade "C"' },
        { shape: "output", label: 'Grade "F"' },
        { shape: "startend", label: "End" },
      ],
      connections: [[0, 1], [1, 2], [2, 3], [2, 4], [4, 5], [4, 6], [6, 7], [6, 8], [3, 9], [5, 9], [7, 9], [8, 9]],
      yesEdges: [2, 4, 6],
      noEdges: [2, 4, 6],
    },
  ], []);

  const algo = algorithms[selectedAlgo];

  const nodeShapes: Record<string, React.CSSProperties> = {
    startend: { borderRadius: "9999px", padding: "8px 20px" },
    input: { borderRadius: "8px", padding: "8px 16px", clipPath: "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)" },
    decision: { borderRadius: "4px", padding: "8px 16px", transform: "rotate(0deg)" },
    output: { borderRadius: "8px", padding: "8px 16px", clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)" },
    process: { borderRadius: "4px", padding: "8px 16px" },
  };

  // Recalculate positions for a proper flowchart layout
  const positions = useMemo(() => {
    const pos: { x: number; y: number }[] = [];
    const cx = 200;
    const startY = 30;
    const gapY = 70;

    algo.steps.forEach((_, i) => {
      // Simple column layout
      const col = Math.floor(i / 5);
      const row = i % 5;
      pos.push({ x: cx + col * 250, y: startY + row * gapY });
    });
    return pos;
  }, [algo]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 h-full">
      <div className="space-y-2">
        <SectionLabel>Algorithms</SectionLabel>
        {algorithms.map((a, i) => (
          <button
            key={a.name}
            onClick={() => setSelectedAlgo(i)}
            className={`w-full text-left px-4 py-3 rounded-xl border text-xs font-bold transition-all ${
              selectedAlgo === i
                ? "border-foreground/30 bg-foreground/5 text-foreground"
                : "border-transparent text-foreground/50 hover:text-foreground hover:bg-foreground/5"
            }`}
          >
            {a.name}
          </button>
        ))}

        <SectionLabel>Legend</SectionLabel>
        <div className="space-y-1.5 text-[9px] text-foreground/50">
          <div className="flex items-center gap-2 px-2 py-1 rounded bg-foreground/5">
            <div className="w-4 h-4 rounded-full border border-foreground/30" />
            <span>Start / End</span>
          </div>
          <div className="flex items-center gap-2 px-2 py-1 rounded bg-foreground/5">
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[10px]" style={{ borderLeftColor: "transparent", borderRightColor: "transparent", borderTopColor: "hsl(var(--foreground)/0.3)" }} />
            <span>Input / Output</span>
          </div>
          <div className="flex items-center gap-2 px-2 py-1 rounded bg-foreground/5">
            <div className="w-4 h-4 border border-foreground/30" />
            <span>Decision</span>
          </div>
          <div className="flex items-center gap-2 px-2 py-1 rounded bg-foreground/5">
            <div className="w-4 h-4 border border-foreground/30 rounded" />
            <span>Process</span>
          </div>
        </div>
      </div>

      <div className="xl:col-span-3 space-y-4">
        <SectionLabel>{algo.name}</SectionLabel>
        <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4 min-h-[400px] overflow-auto flex items-center justify-center">
          <svg viewBox="0 0 500 420" className="w-full h-full max-h-[400px]">
            {/* Connections */}
            {algo.connections.map(([from, to], i) => {
              const f = positions[from];
              const t = positions[to];
              const isYes = algo.yesEdges.includes(from) && from === algo.steps.findIndex((_, si) => algo.yesEdges.includes(from));
              const isNo = algo.noEdges.includes(from) && from === algo.steps.findIndex((_, si) => algo.noEdges.includes(from));

              // Determine branch labels
              let label = "";
              if (from === 2 && algo.steps.length > 4) {
                // Decision node
                const yesIdx = algo.yesEdges.indexOf(from);
                const noIdx = algo.noEdges.indexOf(from);
                if (i === yesIdx || (yesIdx < 0 && algo.connections.filter((c) => c[0] === from)[0][1] === to)) {
                  // Check if this is the "yes" path
                  if (from === 2 && algo.name === "Check if Even") {
                    const yesTarget = algo.connections.filter((c) => c[0] === from).map((c) => c[1]);
                    label = to === yesTarget[0] ? "Yes" : "No";
                  } else if (from === 2 && algo.name === "Find Maximum") {
                    const targets = algo.connections.filter((c) => c[0] === from).map((c) => c[1]);
                    label = to === targets[0] ? "Yes" : "No";
                  } else if (from === 2 && algo.name === "Count to 5") {
                    const targets = algo.connections.filter((c) => c[0] === from).map((c) => c[1]);
                    label = to === targets[0] ? "Yes" : "No, exit";
                  }
                }
              }

              return (
                <g key={i}>
                  <line
                    x1={f.x} y1={f.y} x2={t.x} y2={t.y}
                    stroke="hsl(var(--foreground)/0.25)"
                    strokeWidth={1.5}
                    markerEnd="url(#arrowhead)"
                  />
                  {label && (
                    <text
                      x={(f.x + t.x) / 2 + 10}
                      y={(f.y + t.y) / 2 - 5}
                      textAnchor="middle"
                      className="fill-foreground/40 text-[7px] font-bold"
                    >
                      {label}
                    </text>
                  )}
                </g>
              );
            })}

            <defs>
              <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
                <polygon points="0 0, 6 2, 0 4" fill="hsl(var(--foreground)/0.25)" />
              </marker>
            </defs>

            {/* Nodes */}
            {algo.steps.map((step, i) => {
              const pos = positions[i];
              const shape = step.shape;

              return (
                <g key={i}>
                  {shape === "startend" && (
                    <ellipse cx={pos.x} cy={pos.y} rx={55} ry={20}
                      fill="hsl(var(--foreground)/0.05)" stroke="hsl(var(--foreground)/0.3)" strokeWidth={1.5} />
                  )}
                  {shape === "input" && (
                    <polygon
                      points={`${pos.x - 50},${pos.y - 18} ${pos.x + 40},${pos.y - 18} ${pos.x + 50},${pos.y} ${pos.x + 40},${pos.y + 18} ${pos.x - 50},${pos.y + 18} ${pos.x - 60},${pos.y}`}
                      fill="hsl(var(--foreground)/0.05)" stroke="hsl(var(--foreground)/0.3)" strokeWidth={1.5} />
                  )}
                  {shape === "decision" && (
                    <polygon
                      points={`${pos.x},${pos.y - 22} ${pos.x + 40},${pos.y} ${pos.x},${pos.y + 22} ${pos.x - 40},${pos.y}`}
                      fill="hsl(var(--foreground)/0.05)" stroke="hsl(var(--foreground)/0.3)" strokeWidth={1.5} />
                  )}
                  {shape === "output" && (
                    <polygon
                      points={`${pos.x - 45},${pos.y - 18} ${pos.x + 40},${pos.y - 18} ${pos.x + 50},${pos.y} ${pos.x + 40},${pos.y + 18} ${pos.x - 45},${pos.y + 18}`}
                      fill="hsl(var(--foreground)/0.05)" stroke="hsl(var(--foreground)/0.3)" strokeWidth={1.5} />
                  )}
                  {shape === "process" && (
                    <rect x={pos.x - 55} y={pos.y - 18} width={110} height={36} rx={4}
                      fill="hsl(var(--foreground)/0.05)" stroke="hsl(var(--foreground)/0.3)" strokeWidth={1.5} />
                  )}
                  <text x={pos.x} y={pos.y + 3} textAnchor="middle" className="fill-foreground/60 text-[8px] font-bold">
                    {step.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}

// ── Tab 4: Logic Builder ──
function LogicTab() {
  const [blocks, setBlocks] = useState<string[]>(["Set x = 5", "If x > 3", "  Print 'Big'", "Else", "  Print 'Small'"]);
  const [executing, setExecuting] = useState(false);
  const [currentBlock, setCurrentBlock] = useState(-1);
  const [logicOutput, setLogicOutput] = useState<string[]>([]);
  const [speed, setSpeed] = useState(3);

  const blockCategories = [
    { label: "Variables", items: ["Set x = 0", "Set x = x + 1", "Set x = x - 1"] },
    { label: "Conditions", items: ["If x > 0", "If x == 10", "If x < 5", "Else", "End If"] },
    { label: "Loops", items: ["While x < 10", "For i = 1 to 5", "End While", "End For"] },
    { label: "Output", items: ["Print 'Hello'", "Print x"] },
  ];

  const addBlock = useCallback((item: string) => {
    setBlocks((prev) => [...prev, item]);
  }, []);

  const removeBlock = useCallback((idx: number) => {
    setBlocks((prev) => prev.filter((_, i) => i !== idx));
  }, []);

  const clearBlocks = useCallback(() => {
    setBlocks([]);
    setLogicOutput([]);
    setCurrentBlock(-1);
  }, []);

  const runLogic = useCallback(() => {
    if (executing || blocks.length === 0) return;
    setLogicOutput([]);
    setExecuting(true);
    setCurrentBlock(0);

    let bx = 0;
    const interval = setInterval(() => {
      if (bx < blocks.length) {
        setCurrentBlock(bx);
        const line = blocks[bx];
        if (line.includes("Print")) {
          const match = line.match(/Print\s+'(.+?)'/);
          if (match) {
            setLogicOutput((prev) => [...prev, match[1]]);
          } else if (line.includes("Print x")) {
            setLogicOutput((prev) => [...prev, `x = ...`]);
          }
        }
        bx++;
      } else {
        clearInterval(interval);
        setExecuting(false);
        setCurrentBlock(-1);
      }
    }, 2000 / speed);
  }, [blocks, executing, speed]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="space-y-4">
        <SectionLabel>Block Categories</SectionLabel>
        {blockCategories.map((cat) => (
          <div key={cat.label} className="space-y-1">
            <p className="text-[9px] font-bold text-foreground/40 uppercase tracking-wider">{cat.label}</p>
            {cat.items.map((item) => (
              <button
                key={item}
                onClick={() => addBlock(item)}
                className="w-full text-left px-3 py-1.5 rounded-lg text-[10px] font-mono text-foreground/60 hover:text-foreground hover:bg-foreground/5 border border-foreground/5 transition-all"
              >
                + {item}
              </button>
            ))}
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <SectionLabel>Program {executing && <GlowingDot color={BRAND} pulse />}</SectionLabel>

        <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-3 min-h-[250px] space-y-0.5">
          {blocks.length === 0 ? (
            <p className="text-xs text-foreground/30 italic text-center py-8">Add blocks from the left panel to build your program</p>
          ) : (
            blocks.map((block, i) => (
              <motion.div
                key={i}
                layout
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-mono transition-all ${
                  i === currentBlock
                    ? "text-white font-bold"
                    : "text-foreground/70"
                }`}
                style={i === currentBlock ? { backgroundColor: BRAND } : {}}
              >
                <button onClick={() => removeBlock(i)} className="text-foreground/30 hover:text-red-400 text-[8px] shrink-0">{"\u2715"}</button>
                <span className="text-[8px] text-foreground/30 w-4">{i + 1}</span>
                <span>{block}</span>
              </motion.div>
            ))
          )}
        </div>

        <div className="flex gap-2">
          <button
            onClick={runLogic}
            disabled={executing || blocks.length === 0}
            className="px-4 py-2 rounded-xl text-xs font-bold text-white transition-all disabled:opacity-30"
            style={{ backgroundColor: BRAND }}
          >
            {executing ? "\u{23F3} Running..." : "\u{25B6} Run"}
          </button>
          <button onClick={clearBlocks}
            className="px-4 py-2 rounded-xl text-xs font-bold text-foreground/50 hover:text-foreground bg-foreground/10 transition-all">
            {"\u{1F5D1}"} Clear
          </button>
        </div>

        {logicOutput.length > 0 && (
          <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-3">
            <p className="text-[9px] font-bold text-foreground/40 mb-1">Output</p>
            {logicOutput.map((o, i) => (
              <div key={i} className="text-[10px] font-mono text-foreground/70">{">"} {o}</div>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-4">
        <SectionLabel>Speed</SectionLabel>
        <div>
          <input type="range" min="1" max="5" step="1" value={speed}
            onChange={(e) => setSpeed(parseInt(e.target.value))}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
            style={{ accentColor: BRAND }}
          />
          <div className="flex justify-between text-[9px] text-foreground/30 mt-0.5">
            <span>Slow</span>
            <span>Fast</span>
          </div>
        </div>

        <SectionLabel>Tips</SectionLabel>
        <div className="space-y-1.5 text-[10px] text-foreground/50 leading-relaxed">
          <div className="px-3 py-2 rounded-lg bg-foreground/5 border border-foreground/5">
            Build your program by clicking blocks from the left panel. Each block is a line of code.
          </div>
          <div className="px-3 py-2 rounded-lg bg-foreground/5 border border-foreground/5">
            Click the {"\u2715"} to remove a block. Drag blocks aren't supported yet — click to add in order.
          </div>
          <div className="px-3 py-2 rounded-lg bg-foreground/5 border border-foreground/5">
            The program runs from top to bottom, one block at a time.
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Tab 5: Playground ──
function PlaygroundTab() {
  const [exercises] = useState([
    {
      title: "Swap Two Variables",
      description: "Create a program that swaps the values of two variables. For example, if a=5 and b=3, after swapping a should be 3 and b should be 5.",
      hint: "You'll need a temporary variable to hold one value while swapping.",
    },
    {
      title: "Find the Largest",
      description: "Write logic to find the largest of three numbers: a=12, b=7, c=19. What steps would you follow?",
      hint: "Compare two numbers at a time. The winner goes against the next number.",
    },
    {
      title: "Countdown Timer",
      description: "Write a loop that counts down from 10 to 1, then prints 'Blast off!'",
      hint: "Start at 10, subtract 1 each time through the loop, and stop when you reach 0.",
    },
    {
      title: "Even or Odd",
      description: "Write logic that checks if a number is even or odd. A number is even if it can be divided by 2 with no remainder.",
      hint: "Use the modulo operator (%). If n % 2 == 0, the number is even.",
    },
    {
      title: "Sum of Numbers",
      description: "Calculate the sum of all numbers from 1 to 100. Think about the most efficient way to do this.",
      hint: "You can use a loop, or use the formula: n * (n + 1) / 2",
    },
  ]);
  const [currentEx, setCurrentEx] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [completed, setCompleted] = useState<boolean[]>(new Array(exercises.length).fill(false));

  const ex = exercises[currentEx];

  const markComplete = useCallback(() => {
    setCompleted((prev) => {
      const next = [...prev];
      next[currentEx] = true;
      return next;
    });
  }, [currentEx]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 h-full">
      <div className="space-y-2">
        <SectionLabel>Exercises</SectionLabel>
        {exercises.map((e, i) => (
          <button
            key={i}
            onClick={() => { setCurrentEx(i); setShowHint(false); setShowSolution(false); setUserAnswer(""); }}
            className={`w-full text-left px-4 py-3 rounded-xl border text-xs transition-all ${
              currentEx === i
                ? "border-foreground/30 bg-foreground/5"
                : "border-transparent hover:bg-foreground/5"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className={completed[i] ? "text-emerald-500" : "text-foreground/30"}>
                {completed[i] ? "\u{2705}" : `${i + 1}`}
              </span>
              <span className="font-bold text-foreground/70">{e.title}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="xl:col-span-3 space-y-4">
        <SectionLabel>Challenge: {ex.title}</SectionLabel>

        <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4">
          <p className="text-xs text-foreground/70 leading-relaxed mb-4">{ex.description}</p>

          <textarea
            className="w-full h-32 bg-foreground/10 border border-foreground/10 rounded-xl p-4 text-xs font-mono resize-none outline-none focus:border-blue-500/50 transition-colors"
            placeholder="Write your solution in pseudocode or any language you know..."
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
          />

          <div className="flex gap-2 mt-3">
            <button onClick={() => setShowHint(!showHint)}
              className="px-4 py-2 rounded-xl text-xs font-bold text-foreground/60 hover:text-foreground bg-foreground/10 transition-all">
              {"\u{1F4A1}"} {showHint ? "Hide Hint" : "Show Hint"}
            </button>
            <button onClick={() => setShowSolution(!showSolution)}
              className="px-4 py-2 rounded-xl text-xs font-bold text-foreground/60 hover:text-foreground bg-foreground/10 transition-all">
              {"\u{1F4CB}"} {showSolution ? "Hide Solution" : "Show Solution"}
            </button>
            <div className="flex-1" />
            <button onClick={markComplete}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white transition-all"
              style={{ backgroundColor: completed[currentEx] ? "#6b7280" : BRAND }}>
              {completed[currentEx] ? "\u{2705} Done" : "\u{2714} Mark Complete"}
            </button>
          </div>

          {showHint && (
            <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
              className="mt-3 px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-600/80">
              {"\u{1F4A1}"} <strong>Hint:</strong> {ex.hint}
            </motion.div>
          )}

          {showSolution && (
            <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
              className="mt-3 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <p className="text-[10px] font-bold text-emerald-600/80 mb-1">Solution Idea</p>
              <p className="text-[11px] text-emerald-600/60 font-mono leading-relaxed">
                {currentEx === 0 && "temp = a\na = b\nb = temp"}
                {currentEx === 1 && "if a > b:\n  max = a\nelse:\n  max = b\nif c > max:\n  max = c\nprint(max)"}
                {currentEx === 2 && "count = 10\nwhile count >= 1:\n  print(count)\n  count = count - 1\nprint('Blast off!')"}
                {currentEx === 3 && "if n % 2 == 0:\n  print('Even')\nelse:\n  print('Odd')"}
                {currentEx === 4 && "sum = 0\ni = 1\nwhile i <= 100:\n  sum = sum + i\n  i = i + 1\nprint(sum)"}
              </p>
            </motion.div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <button
              onClick={() => { setCurrentEx((p) => Math.max(0, p - 1)); setShowHint(false); setShowSolution(false); setUserAnswer(""); }}
              disabled={currentEx === 0}
              className="px-3 py-1.5 rounded-lg text-[10px] font-bold text-foreground/50 hover:text-foreground disabled:opacity-30 bg-foreground/5 transition-all"
            >
              {"\u{2190} Previous"}
            </button>
            <button
              onClick={() => { setCurrentEx((p) => Math.min(exercises.length - 1, p + 1)); setShowHint(false); setShowSolution(false); setUserAnswer(""); }}
              disabled={currentEx === exercises.length - 1}
              className="px-3 py-1.5 rounded-lg text-[10px] font-bold text-foreground/50 hover:text-foreground disabled:opacity-30 bg-foreground/5 transition-all"
            >
              {"Next \u{2192}"}
            </button>
          </div>
          <div className="text-[10px] text-foreground/40">
            {completed.filter(Boolean).length}/{exercises.length} completed
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ──
export function ProgrammingPlayground() {
  const [activeTab, setActiveTab] = useState<Tab>("memory");

  const renderTab = () => {
    switch (activeTab) {
      case "memory": return <MemoryTab />;
      case "executor": return <ExecutorTab />;
      case "flowchart": return <FlowchartTab />;
      case "logic": return <LogicTab />;
      case "playground": return <PlaygroundTab />;
      default: return null;
    }
  };

  return (
    <div className="w-full h-full flex flex-col" style={{ isolation: "isolate" }}>
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #2563EB 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
      />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(circle, #2563EB 0%, transparent 70%)", transform: "translate(-20%, 20%)" }}
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
