import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "editor" | "memory" | "ownership" | "borrow" | "perf";

const BRAND = "#DEA584";

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "editor", label: "Rust Editor", icon: "\u{1F4BB}" },
  { id: "memory", label: "Memory Viz", icon: "\u{1F5C3}" },
  { id: "ownership", label: "Ownership", icon: "\u{1F504}" },
  { id: "borrow", label: "Borrow Checker", icon: "\u{1F50D}" },
  { id: "perf", label: "Perf Analyzer", icon: "\u{26A1}" },
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

// ── Mock Rust Compiler ──
function mockCompile(code: string): { ok: boolean; output: string; errors: string[]; allocs: number; clones: number } {
  const lines = code.split("\n");
  const errors: string[] = [];
  let allocs = 0;
  let clones = 0;

  // Simulate ownership/borrow checking
  const vars: string[] = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("let ") || trimmed.startsWith("let mut ")) {
      const nameMatch = trimmed.match(/(let mut|let)\s+(\w+)/);
      if (nameMatch) {
        const name = nameMatch[2];
        if (vars.includes(name)) {
          errors.push(`error[E0428]: variable \`${name}\` is already defined in this scope`);
        }
        vars.push(name);
      }
      if (trimmed.includes("String::from") || trimmed.includes("vec!") || trimmed.includes("Box::new") || trimmed.includes("Rc::new") || trimmed.includes("Arc::new")) {
        allocs++;
      }
      if (trimmed.includes(".clone()")) {
        clones++;
      }
    }
    // Detect use-after-move
    if (trimmed.match(/^\s*\w+\s*=\s*\w+\s*;/)) {
      const parts = trimmed.split("=");
      if (parts.length >= 2) {
        const src = parts[1].trim().replace(";", "");
        if (vars.includes(src) && !trimmed.startsWith("let ") && !trimmed.startsWith("let mut ")) {
          errors.push(`error[E0382]: borrow of moved value: \`${src}\``);
        }
      }
    }
    // Detect dangling reference
    if (trimmed.includes("&") && trimmed.includes("{")) {
      errors.push(`warning: \`${trimmed}\` may contain a dangling reference`);
    }
  }

  if (errors.length === 0 && code.trim().length > 0) {
    return { ok: true, output: "Compilation successful.\n$ cargo run\n   Compiling playground v0.1.0\n    Finished dev [unoptimized + debuginfo] target(s) in 0.42s\n     Running `target/debug/playground`\n[Program output appears here]", errors, allocs, clones };
  }
  return { ok: errors.length === 0, output: "", errors, allocs, clones };
}

// ── Editor Tab ──
function RustEditorTab() {
  const [code, setCode] = useState(`fn main() {
    let s1 = String::from("hello");
    let s2 = s1.clone();
    println!("s1 = {}, s2 = {}", s1, s2);

    let x = 5;
    let y = x;
    println!("x = {}, y = {}", x, y);
}`);
  const [result, setResult] = useState<{ ok: boolean; output: string; errors: string[] } | null>(null);

  const compile = useCallback(() => {
    const res = mockCompile(code);
    setResult(res);
  }, [code]);

  const clearResult = useCallback(() => setResult(null), []);

  const examples = [
    { label: "Hello World", code: `fn main() {\n    println!("Hello, Rust!");\n}` },
    { label: "Ownership", code: `fn main() {\n    let s1 = String::from("hello");\n    let s2 = s1;\n    println!("{}", s2);\n}` },
    { label: "Borrowing", code: `fn main() {\n    let s = String::from("hello");\n    let r1 = &s;\n    let r2 = &s;\n    println!("{}, {}", r1, r2);\n}` },
    { label: "Mutable Ref", code: `fn main() {\n    let mut s = String::from("hello");\n    let r = &mut s;\n    r.push_str(" world");\n    println!("{}", s);\n}` },
    { label: "Vector", code: `fn main() {\n    let mut v = vec![1, 2, 3];\n    v.push(4);\n    println!("{:?}", v);\n}` },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-full gap-4">
      <div className="flex-1 space-y-3">
        <div className="flex gap-1.5 flex-wrap mb-2">
          {examples.map((ex) => (
            <button key={ex.label} onClick={() => setCode(ex.code)} className="px-2 py-1 text-[8px] font-black tracking-wider uppercase border" style={{ borderColor: `${BRAND}33`, color: BRAND }}>
              {ex.label}
            </button>
          ))}
        </div>
        <SectionLabel>Rust Code</SectionLabel>
        <textarea value={code} onChange={(e) => setCode(e.target.value)} className="w-full h-72 bg-black text-orange-300 p-3 text-[11px] font-mono border border-foreground/10 resize-none leading-relaxed" spellCheck={false} />
        <div className="flex gap-2">
          <button onClick={compile} className="px-5 py-1.5 text-[10px] font-black tracking-widest uppercase text-white" style={{ backgroundColor: BRAND }}>Run</button>
          <button onClick={clearResult} className="px-5 py-1.5 text-[10px] font-black tracking-widest uppercase border" style={{ borderColor: `${BRAND}44`, color: BRAND }}>Clear</button>
        </div>
      </div>
      <div className="flex-1 space-y-3">
        <SectionLabel>Output</SectionLabel>
        <div className="bg-black border border-foreground/10 p-3 h-36 overflow-y-auto font-mono text-[10px] whitespace-pre-wrap">
          {result ? (
            result.ok ? (
              <span className="text-green-400">{result.output}</span>
            ) : (
              <span className="text-red-400">Compilation failed</span>
            )
          ) : (
            <span className="text-foreground/20">Click Run to compile</span>
          )}
        </div>
        <SectionLabel>Compiler Errors</SectionLabel>
        <div className="bg-black border border-foreground/10 p-3 flex-1 h-36 overflow-y-auto font-mono text-[10px]">
          {result && result.errors.length > 0 ? (
            result.errors.map((e, i) => (
              <div key={i} className="text-red-400 border-b border-red-400/10 py-1 last:border-0">{e}</div>
            ))
          ) : (
            <span className="text-foreground/20">{result && result.ok ? "No errors. Code compiles successfully." : "Compile to see errors"}</span>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Memory Visualizer ──
function MemoryVisualizer() {
  const [phase, setPhase] = useState(0);
  const scenarios = [
    {
      title: "Stack vs Heap",
      code: `let x = 5;           // Stack: i32
let s = String::from("hello"); // Heap`,
      stack: [{ addr: "0x7ffc", val: "x = 5 (i32)", color: "#22C55E" }],
      heap: [{ addr: "0x5600", val: `s = "hello" (String)`, color: "#DEA584" }],
    },
    {
      title: "Ownership Transfer (Move)",
      code: `let s1 = String::from("hello");
let s2 = s1; // s1 moved to s2`,
      stack: [{ addr: "0x7ffc", val: "s2 → heap", color: "#F59E0B" }],
      heap: [{ addr: "0x5600", val: `"hello" (owned by s2)`, color: "#DEA584" }],
      note: "s1 is no longer valid after the move!",
    },
    {
      title: "Borrowing",
      code: `let s = String::from("hello");
let r = &s; // immutable borrow`,
      stack: [
        { addr: "0x7ffc", val: "s → heap", color: "#22C55E" },
        { addr: "0x7ff8", val: "r = &s (ref)", color: "#3B82F6" },
      ],
      heap: [{ addr: "0x5600", val: `"hello"`, color: "#DEA584" }],
      note: "r borrows s — s is still valid",
    },
    {
      title: "Mutable Borrow",
      code: `let mut s = String::from("hello");
let r = &mut s;
r.push_str(" world");`,
      stack: [
        { addr: "0x7ffc", val: "s → heap", color: "#22C55E" },
        { addr: "0x7ff8", val: "r = &mut s (exclusive)", color: "#EF4444" },
      ],
      heap: [{ addr: "0x5600", val: `"hello world"`, color: "#DEA584" }],
      note: "Only one mutable reference allowed at a time",
    },
    {
      title: "Lifetimes",
      code: `fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}`,
      stack: [
        { addr: "0x7ffc", val: "x: &str ('a)", color: "#3B82F6" },
        { addr: "0x7ff8", val: "y: &str ('a)", color: "#8B5CF6" },
        { addr: "0x7ff4", val: "→ returns &'a str", color: "#22C55E" },
      ],
      heap: [{ addr: "0x5600", val: `string data (must outlive 'a)`, color: "#DEA584" }],
      note: "Returned reference has the same lifetime as the shorter input",
    },
    {
      title: "Deallocation (Drop)",
      code: `{
    let s = String::from("hi");
} // s goes out of scope → drop() called`,
      stack: [{ addr: "0x7ffc", val: "s (out of scope → freed)", color: "#6B7280" }],
      heap: [{ addr: "0x5600", val: `"hi" (deallocated)`, color: "#6B7280" }],
      note: "Rust calls drop() automatically when a variable goes out of scope",
    },
  ];

  const sc = scenarios[phase];

  return (
    <div className="space-y-4">
      <div className="flex gap-1.5 flex-wrap">
        {scenarios.map((s, i) => (
          <button key={i} onClick={() => setPhase(i)} className="px-3 py-1.5 text-[9px] font-black tracking-widest uppercase border transition-all" style={{ borderColor: phase === i ? BRAND : "hsl(var(--foreground)/0.1)", color: phase === i ? BRAND : "hsl(var(--foreground)/0.5)" }}>
            {s.title}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-black border border-foreground/10 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[10px] font-black tracking-widest text-green-500 uppercase">Stack</h3>
            <span className="text-[8px] text-foreground/30 font-mono">High address</span>
          </div>
          <div className="space-y-2">
            {sc.stack.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded border border-foreground/5" style={{ borderLeftColor: item.color, borderLeftWidth: 3 }}>
                <span className="text-[8px] text-foreground/30 font-mono w-16">{item.addr}</span>
                <span className="text-[10px] font-mono" style={{ color: item.color }}>{item.val}</span>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-foreground/10 flex items-center gap-2">
              <div className="w-full h-2 rounded" style={{ background: "linear-gradient(to top, rgba(0,0,0,0), rgba(255,255,255,0.05))" }} />
              <span className="text-[8px] text-foreground/30 font-mono">Low address</span>
            </div>
          </div>
        </div>

        <div className="bg-black border border-foreground/10 p-4 rounded-lg">
          <h3 className="text-[10px] font-black tracking-widest text-orange-400 uppercase mb-3">Heap</h3>
          <div className="space-y-2">
            {sc.heap.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded border border-foreground/5" style={{ borderLeftColor: item.color, borderLeftWidth: 3 }}>
                <span className="text-[8px] text-foreground/30 font-mono w-16">{item.addr}</span>
                <span className="text-[10px] font-mono" style={{ color: item.color }}>{item.val}</span>
              </div>
            ))}
            {sc.heap.length === 0 && (
              <div className="p-4 text-center">
                <span className="text-[10px] text-foreground/20 font-mono">No heap allocations</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-px w-4 bg-foreground/20" />
          <span className="text-[10px] text-foreground/60 font-mono">{sc.code}</span>
        </div>
        {sc.note && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded border text-[10px] font-black tracking-wider" style={{ borderColor: `${BRAND}44`, color: BRAND }}>
            <span>{sc.note}</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Ownership Visualizer ──
function OwnershipVisualizer() {
  const [phase, setPhase] = useState(0);

  const scenarios = [
    {
      title: "Simple Ownership",
      code: `let s = String::from("hello");`,
      diagram: [
        { label: "main()", items: [{ name: "s", kind: "owner", pointsTo: "hello", color: "#22C55E" }] },
      ],
    },
    {
      title: "Move",
      code: `let s1 = String::from("hello");
let s2 = s1; // move`,
      diagram: [
        { label: "main()", items: [
          { name: "s1", kind: "invalid", pointsTo: null, color: "#6B7280" },
          { name: "s2", kind: "owner", pointsTo: "hello", color: "#F59E0B" },
        ]},
      ],
    },
    {
      title: "Clone",
      code: `let s1 = String::from("hello");
let s2 = s1.clone();`,
      diagram: [
        { label: "main()", items: [
          { name: "s1", kind: "owner", pointsTo: "hello #1", color: "#22C55E" },
          { name: "s2", kind: "owner", pointsTo: "hello #2", color: "#3B82F6" },
        ]},
      ],
    },
    {
      title: "Immutable Borrow",
      code: `let s = String::from("hello");
let r = &s;`,
      diagram: [
        { label: "main()", items: [
          { name: "s", kind: "owner", pointsTo: "hello", color: "#22C55E" },
          { name: "r", kind: "borrow(imm)", pointsTo: "→ s", color: "#3B82F6" },
        ]},
      ],
    },
    {
      title: "Mutable Borrow",
      code: `let mut s = String::from("hello");
let r = &mut s;`,
      diagram: [
        { label: "main()", items: [
          { name: "s", kind: "owner", pointsTo: "hello", color: "#22C55E" },
          { name: "r", kind: "borrow(mut)", pointsTo: "→ s (exclusive)", color: "#EF4444" },
        ]},
      ],
    },
    {
      title: "Multiple Borrows",
      code: `let s = String::from("hello");
let r1 = &s;
let r2 = &s; // OK`,
      diagram: [
        { label: "main()", items: [
          { name: "s", kind: "owner", pointsTo: "hello", color: "#22C55E" },
          { name: "r1", kind: "borrow(imm)", pointsTo: "→ s", color: "#3B82F6" },
          { name: "r2", kind: "borrow(imm)", pointsTo: "→ s", color: "#8B5CF6" },
        ]},
      ],
    },
  ];

  const sc = scenarios[phase];

  return (
    <div className="space-y-4">
      <div className="flex gap-1.5 flex-wrap">
        {scenarios.map((s, i) => (
          <button key={i} onClick={() => setPhase(i)} className="px-3 py-1.5 text-[9px] font-black tracking-widest uppercase border transition-all" style={{ borderColor: phase === i ? BRAND : "hsl(var(--foreground)/0.1)", color: phase === i ? BRAND : "hsl(var(--foreground)/0.5)" }}>
            {s.title}
          </button>
        ))}
      </div>

      <div className="bg-black border border-foreground/10 p-4 rounded-lg">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-mono text-foreground/60">{sc.code}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sc.diagram.map((scope, i) => (
            <div key={i} className="border border-foreground/10 rounded-lg">
              <div className="border-b border-foreground/10 px-3 py-1.5">
                <span className="text-[9px] font-black tracking-widest text-cyan-500 uppercase">{scope.label}</span>
              </div>
              <div className="p-3 space-y-2">
                {scope.items.map((item, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-2 p-2 rounded text-[10px] font-mono border"
                    style={{
                      borderColor: `${item.color}33`,
                      backgroundColor: `${item.color}11`,
                      opacity: item.kind === "invalid" ? 0.4 : 1,
                      textDecoration: item.kind === "invalid" ? "line-through" : "none",
                    }}
                  >
                    <span style={{ color: item.color }} className="font-black">{item.name}</span>
                    <span className="text-foreground/30">:</span>
                    <span className="text-foreground/50">{item.kind}</span>
                    {item.pointsTo && (
                      <>
                        <span className="text-foreground/20">→</span>
                        <span style={{ color: item.color }}>{item.pointsTo}</span>
                      </>
                    )}
                    {item.kind === "invalid" && (
                      <span className="text-red-500 text-[8px] font-black tracking-wider uppercase ml-auto">MOVED</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 border border-foreground/5 rounded text-[10px] text-foreground/50">
          <span className="font-black text-foreground/70">Key: </span>
          <span className="text-green-500">owner</span> — owns the data
          <span className="mx-2 text-foreground/20">|</span>
          <span className="text-blue-500">borrow(imm)</span> — shared reference
          <span className="mx-2 text-foreground/20">|</span>
          <span className="text-red-500">borrow(mut)</span> — exclusive reference
          <span className="mx-2 text-foreground/20">|</span>
          <span className="text-gray-500">invalid</span> — moved/inaccessible
        </div>
      </div>
    </div>
  );
}

// ── Borrow Checker Tab ──
function BorrowCheckerTab() {
  const [code, setCode] = useState(`fn main() {
    let mut s = String::from("hello");
    let r1 = &s;
    let r2 = &mut s;
    println!("{}", r1);
}`);
  const [analysis, setAnalysis] = useState<{
    errors: { line: number; message: string; severity: "error" | "warning" | "info"; fix: string }[];
  } | null>(null);

  const analyze = useCallback(() => {
    const lines = code.split("\n");
    const errors: { line: number; message: string; severity: "error" | "warning" | "info"; fix: string }[] = [];
    const vars: { name: string; mutable: boolean; line: number; borrowed: boolean; mutBorrowed: boolean }[] = [];

    lines.forEach((line, idx) => {
      const trimmed = line.trim();
      const lineNum = idx + 1;

      // Detect variable declarations
      const declMatch = trimmed.match(/(let mut|let)\s+(\w+)/);
      if (declMatch) {
        const name = declMatch[2];
        const mutable = declMatch[1] === "let mut";
        vars.push({ name, mutable, line: lineNum, borrowed: false, mutBorrowed: false });
      }

      // Detect immutable borrow
      const immBorrow = trimmed.match(/let\s+(\w+)\s*=\s*&(\w+)/);
      if (immBorrow) {
        const target = immBorrow[2];
        const v = vars.find((v) => v.name === target);
        if (v) v.borrowed = true;
      }

      // Detect mutable borrow
      const mutBorrow = trimmed.match(/let\s+(\w+)\s*=\s*&mut\s+(\w+)/);
      if (mutBorrow) {
        const target = mutBorrow[2];
        const v = vars.find((v) => v.name === target);
        if (v) {
          if (v.borrowed) {
            errors.push({
              line: lineNum,
              message: `cannot borrow \`${target}\` as mutable because it is also borrowed as immutable`,
              severity: "error",
              fix: `Remove the immutable borrow before creating a mutable reference to \`${target}\``,
            });
          }
          v.mutBorrowed = true;
        }
      }

      // Detect use of moved value
      const useMatch = trimmed.match(/println!\(".*?({}).*?",\s*(\w+)\)/);
      if (useMatch) {
        const used = useMatch[2];
        const v = vars.find((v) => v.name === used);
        if (v && !v.mutable && v.borrowed) {
          errors.push({
            line: lineNum,
            message: `cannot use \`${used}\` after mutable borrow`,
            severity: "warning",
            fix: `Reorder the borrows or clone the value before mutating`,
          });
        }
      }
    });

    if (errors.length === 0 && code.trim().length > 0) {
      errors.push({
        line: 0,
        message: "No borrow checker violations detected",
        severity: "info",
        fix: "",
      });
    }

    setAnalysis({ errors });
  }, [code]);

  const examples = [
    { label: "Double Mut", code: `fn main() {\n    let mut s = String::from("hello");\n    let r1 = &mut s;\n    let r2 = &mut s;\n    println!("{}, {}", r1, r2);\n}` },
    { label: "Use After Move", code: `fn main() {\n    let s = String::from("hello");\n    let t = s;\n    println!("{}", s);\n}` },
    { label: "Dangling Ref", code: `fn main() {\n    let r;\n    {\n        let x = 5;\n        r = &x;\n    }\n    println!("{}", r);\n}` },
    { label: "Good Code", code: `fn main() {\n    let s = String::from("hello");\n    let r1 = &s;\n    let r2 = &s;\n    println!("{}, {}", r1, r2);\n}` },
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
        <SectionLabel>Rust Code</SectionLabel>
        <textarea value={code} onChange={(e) => setCode(e.target.value)} className="w-full h-72 bg-black text-orange-300 p-3 text-[11px] font-mono border border-foreground/10 resize-none leading-relaxed" spellCheck={false} />
        <div className="flex gap-2">
          <button onClick={analyze} className="px-5 py-1.5 text-[10px] font-black tracking-widest uppercase text-white" style={{ backgroundColor: BRAND }}>Analyze</button>
          <button onClick={() => setAnalysis(null)} className="px-5 py-1.5 text-[10px] font-black tracking-widest uppercase border" style={{ borderColor: `${BRAND}44`, color: BRAND }}>Clear</button>
        </div>
      </div>
      <div className="flex-1">
        <SectionLabel>Borrow Checker Analysis</SectionLabel>
        <div className="bg-black border border-foreground/10 p-3 min-h-80 overflow-y-auto font-mono text-[10px] space-y-1">
          {analysis ? (
            analysis.errors.map((err, i) => (
              <div
                key={i}
                className="p-3 rounded border-l-2 space-y-1"
                style={{
                  borderLeftColor: err.severity === "error" ? "#EF4444" : err.severity === "warning" ? "#F59E0B" : "#22C55E",
                  backgroundColor: err.severity === "error" ? "#EF444411" : err.severity === "warning" ? "#F59E0B11" : "#22C55E11",
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[8px] font-black tracking-widest uppercase" style={{ color: err.severity === "error" ? "#EF4444" : err.severity === "warning" ? "#F59E0B" : "#22C55E" }}>
                    {err.severity}
                  </span>
                  {err.line > 0 && <span className="text-[8px] text-foreground/30">Line {err.line}</span>}
                </div>
                <p className="text-foreground/80">{err.message}</p>
                {err.fix && (
                  <p className="text-cyan-400 text-[9px] pt-1 border-t border-foreground/5 mt-1">
                    Fix: {err.fix}
                  </p>
                )}
              </div>
            ))
          ) : (
            <span className="text-foreground/20">Click Analyze to check for borrow checker violations</span>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Performance Analyzer ──
function PerfAnalyzer() {
  const [code, setCode] = useState(`fn main() {
    let mut v = Vec::new();
    for i in 0..1000 {
        v.push(i);
    }
    let cloned = v.clone();
    let mapped: Vec<_> = cloned.iter().map(|x| x * 2).collect();
    println!("{:?}", mapped.len());
}`);
  const [report, setReport] = useState<{
    allocs: number; clones: number; heapPeak: string; cpuEst: string; suggestions: string[];
  } | null>(null);

  const analyzePerf = useCallback(() => {
    const res = mockCompile(code);
    const lines = code.split("\n");
    const suggestions: string[] = [];

    for (const line of lines) {
      if (line.includes(".clone()")) suggestions.push("Consider using a reference instead of clone() to avoid unnecessary allocations");
      if (line.includes("Vec::new()")) suggestions.push("Consider using Vec::with_capacity(n) to pre-allocate and avoid reallocations");
      if (line.includes("String::from") || line.includes("to_string()")) suggestions.push("String allocations can be avoided by using &str references where possible");
      if (line.includes("for ") && line.includes("0..")) suggestions.push("Range iteration is efficient; consider using iterators for better performance");
    }

    if (res.allocs > 3) suggestions.push("High allocation count detected — consider using &str or Cow<str>");
    if (res.clones > 0) suggestions.push(`Found ${res.clones} clone() call(s) — each clone duplicates heap data`);

    setReport({
      allocs: res.allocs,
      clones: res.clones,
      heapPeak: `${(res.allocs * 256).toLocaleString()} bytes`,
      cpuEst: `${(80 + res.allocs * 15 + res.clones * 30)}μs`,
      suggestions,
    });
  }, [code]);

  const examples = [
    { label: "Efficient", code: `fn main() {\n    let s = "hello";\n    println!("{}", s);\n}` },
    { label: "Allocs Heavy", code: `fn main() {\n    let s1 = String::from("a");\n    let s2 = String::from("b");\n    let s3 = s1.clone() + &s2;\n    println!("{}", s3);\n}` },
    { label: "Big Vec", code: `fn main() {\n    let mut v = Vec::with_capacity(1000);\n    for i in 0..1000 {\n        v.push(i);\n    }\n    println!("{}", v.len());\n}` },
  ];

  return (
    <div className="space-y-4">
      <div className="flex gap-1.5 flex-wrap">
        {examples.map((ex) => (
          <button key={ex.label} onClick={() => setCode(ex.code)} className="px-2 py-1 text-[8px] font-black tracking-wider uppercase border" style={{ borderColor: `${BRAND}33`, color: BRAND }}>
            {ex.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <SectionLabel>Rust Code</SectionLabel>
          <textarea value={code} onChange={(e) => setCode(e.target.value)} className="w-full h-56 bg-black text-orange-300 p-3 text-[11px] font-mono border border-foreground/10 resize-none leading-relaxed" spellCheck={false} />
          <button onClick={analyzePerf} className="px-5 py-1.5 text-[10px] font-black tracking-widest uppercase text-white" style={{ backgroundColor: BRAND }}>Analyze Performance</button>
        </div>
        <div className="space-y-3">
          <SectionLabel>Performance Report</SectionLabel>
          <div className="bg-black border border-foreground/10 p-4 min-h-56">
            {report ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Heap Allocations", value: report.allocs.toString(), color: report.allocs > 2 ? "#F59E0B" : "#22C55E" },
                    { label: "Clone Calls", value: report.clones.toString(), color: report.clones > 0 ? "#EF4444" : "#22C55E" },
                    { label: "Peak Heap", value: report.heapPeak, color: "#3B82F6" },
                    { label: "CPU Estimate", value: report.cpuEst, color: "#8B5CF6" },
                  ].map((m, i) => (
                    <div key={i} className="border border-foreground/10 p-3 rounded">
                      <div className="text-[8px] font-black tracking-widest text-foreground/30 uppercase">{m.label}</div>
                      <div className="text-lg font-black font-mono mt-1" style={{ color: m.color }}>{m.value}</div>
                    </div>
                  ))}
                </div>

                {report.suggestions.length > 0 && (
                  <div>
                    <div className="text-[9px] font-black tracking-widest text-cyan-400 uppercase mb-2">Optimization Suggestions</div>
                    <div className="space-y-1">
                      {report.suggestions.map((s, i) => (
                          <div key={i} className="p-2 rounded border border-cyan-400/10 text-cyan-400/80 text-[10px] flex items-start gap-2">
                            <span className="mt-0.5">💡</span>
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <span className="text-foreground/20 text-[10px]">Click Analyze Performance to see a report</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RustPlayground() {
  const [activeTab, setActiveTab] = useState<Tab>("editor");

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="border-b border-foreground/10 bg-foreground/[0.02] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{"\u{1F980}"}</span>
          <div>
            <h1 className="text-lg font-black tracking-tight uppercase">Rust Playground</h1>
            <p className="text-[9px] font-black tracking-widest text-foreground/30 uppercase">Ownership · Borrow Checker · Memory Safety</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[8px] font-black tracking-widest text-green-500 uppercase">Rustc 1.75 (Simulated)</span>
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
            {activeTab === "editor" && <RustEditorTab />}
            {activeTab === "memory" && <MemoryVisualizer />}
            {activeTab === "ownership" && <OwnershipVisualizer />}
            {activeTab === "borrow" && <BorrowCheckerTab />}
            {activeTab === "perf" && <PerfAnalyzer />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
