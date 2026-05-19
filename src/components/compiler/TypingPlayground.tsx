import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Keyboard, Clock, Target, Zap, Code2, BarChart3, Trophy, Users, Eye, Brain, Gauge, Sparkles, Fingerprint } from "lucide-react";

type Tab = "classic" | "coding" | "timed" | "stats" | "fingers";
type Mode = "timed" | "classic" | "endless" | "coding" | "blind";

const BRAND = "#F97316";

const tabs: { id: Tab; label: string; icon: typeof Keyboard }[] = [
  { id: "classic", label: "Classic", icon: Keyboard },
  { id: "coding", label: "Coding", icon: Code2 },
  { id: "timed", label: "Timed", icon: Clock },
  { id: "stats", label: "Stats", icon: BarChart3 },
  { id: "fingers", label: "Fingers", icon: Fingerprint },
];

const PASSAGES = [
  "JavaScript is a high-level programming language that conforms to the ECMAScript specification which was first released in 1997. It is one of the core technologies of the World Wide Web and enables interactive web pages.",
  "Python's design philosophy emphasizes code readability with its notable use of significant indentation. It is a dynamically typed language that supports multiple programming paradigms including procedural and object-oriented programming.",
  "HTML provides the structure of a webpage with elements like headings, paragraphs, divs, and links. Each element is represented by a tag that tells the browser how to display the content enclosed within it.",
  "CSS is a stylesheet language used to describe the presentation of a document written in HTML or XML. It allows designers to control layout colors fonts and spacing across multiple pages with a single stylesheet.",
  "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It allows developers to create reusable UI components that manage their own state efficiently.",
  "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing classes and interfaces to help developers catch errors early during development.",
  "Algorithms are step-by-step procedures or formulas for solving problems. They form the backbone of computer science and are essential for writing efficient code that performs well at scale.",
  "Data structures are ways of organizing and storing data in a computer so that it can be accessed and modified efficiently. Common examples include arrays linked lists stacks queues and hash tables.",
  "Git is a distributed version control system that tracks changes in source code during software development. It allows multiple developers to work on the same project without interfering with each other.",
  "Databases are organized collections of structured information or data stored electronically in a computer system. They are typically controlled by a database management system or DBMS for short.",
  "REST APIs use HTTP requests to perform CRUD operations on resources represented as URLs. They return data in formats like JSON or XML and are stateless meaning each request contains all needed information.",
  "The Linux kernel is the core component of the Linux operating system. It manages hardware resources system calls and security providing a stable foundation for millions of servers and devices worldwide.",
  "Docker is a platform for developing shipping and running applications inside containers. Containers are lightweight portable units that package code and dependencies together for consistent deployment.",
  "Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. It uses algorithms to find patterns in data.",
  "Node.js is a JavaScript runtime built on Chrome V8 engine that allows developers to run JavaScript on the server side. It uses an event-driven non-blocking I/O model making it efficient for real-time applications.",
  "SQL is a domain-specific language used for managing and querying relational databases. It allows users to insert update delete and retrieve data using statements like SELECT INSERT UPDATE and DELETE.",
  "GraphQL is a query language for APIs that allows clients to request exactly the data they need. It provides a single endpoint and strong typing making API development more predictable and efficient.",
  "The cloud computing model delivers computing services over the internet on a pay as you go basis. It includes services like virtual machines storage databases and networking without managing physical hardware.",
  "Blockchain is a distributed ledger technology that records transactions across many computers. Each block contains a cryptographic hash of the previous block creating an immutable chain of records.",
  "Cybersecurity involves protecting systems networks and programs from digital attacks. These attacks are usually aimed at accessing changing or destroying sensitive information extorting money from users.",
  "Rust is a systems programming language focused on safety speed and concurrency. It achieves memory safety without needing a garbage collector making it ideal for performance-critical applications.",
  "Kubernetes is an open-source platform for automating deployment scaling and management of containerized applications. It groups containers into pods and manages them across clusters of machines.",
];

const CODE_SNIPPETS: Record<string, string[]> = {
  JavaScript: [
    `function binarySearch(arr, target) {\n  let left = 0;\n  let right = arr.length - 1;\n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}`,
    `const debounce = (fn, delay) => {\n  let timeoutId;\n  return (...args) => {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => fn(...args), delay);\n  };\n};`,
    `const users = [\n  { id: 1, name: 'Alice', role: 'admin' },\n  { id: 2, name: 'Bob', role: 'user' },\n];\nconst admins = users.filter(u => u.role === 'admin');`,
  ],
  Python: [
    `def quicksort(arr):\n  if len(arr) <= 1:\n    return arr\n  pivot = arr[len(arr) // 2]\n  left = [x for x in arr if x < pivot]\n  middle = [x for x in arr if x == pivot]\n  right = [x for x in arr if x > pivot]\n  return quicksort(left) + middle + quicksort(right)`,
    `class Stack:\n  def __init__(self):\n    self.items = []\n  def push(self, item):\n    self.items.append(item)\n  def pop(self):\n    return self.items.pop()\n  def is_empty(self):\n    return len(self.items) == 0`,
    `with open('data.json', 'r') as f:\n  data = json.load(f)\nresult = [d['name'] for d in data if d['active']]\nprint(f'Found {len(result)} active users')`,
  ],
  HTML: [
    `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width">\n  <title>My Page</title>\n</head>\n<body>\n  <header>\n    <h1>Welcome</h1>\n    <nav><a href="/">Home</a></nav>\n  </header>\n</body>\n</html>`,
    `<div class="card">\n  <img src="photo.jpg" alt="Profile">\n  <div class="card-body">\n    <h2 class="card-title">John Doe</h2>\n    <p class="card-text">Software Engineer</p>\n  </div>\n</div>`,
  ],
  CSS: [
    `.flex-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n  padding: 2rem;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n}`,
    `.grid-layout {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 1.5rem;\n}\n.card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.15);\n}`,
  ],
  TypeScript: [
    `interface User {\n  id: number;\n  name: string;\n  email: string;\n  role: 'admin' | 'user';\n}\n\ntype ApiResponse<T> = {\n  data: T;\n  error: string | null;\n  status: number;\n};\n\nasync function fetchUser(id: number): Promise<ApiResponse<User>> {\n  const res = await fetch(\`/api/users/\${id}\`);\n  return res.json();\n}`,
  ],
  SQL: [
    `SELECT u.name, COUNT(o.id) as order_count\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nWHERE u.created_at >= '2024-01-01'\nGROUP BY u.id, u.name\nHAVING COUNT(o.id) > 5\nORDER BY order_count DESC\nLIMIT 10;`,
  ],
  Bash: [
    `#!/bin/bash\n# Backup script\nBACKUP_DIR="/backups/\$(date +%Y%m%d)"\nmkdir -p "$BACKUP_DIR"\nfor db in \$(mysql -e "SHOW DATABASES" | grep -v Database); do\n  mysqldump "$db" > "$BACKUP_DIR/$db.sql"\ndone\necho "Backup complete: $BACKUP_DIR"`,
  ],
  React: [
    `function TodoList() {\n  const [todos, setTodos] = useState([]);\n  const addTodo = useCallback((text) => {\n    setTodos(prev => [...prev, { id: Date.now(), text, done: false }]);\n  }, []);\n  const toggleTodo = useCallback((id) => {\n    setTodos(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));\n  }, []);\n  return (\n    <div>\n      {todos.map(t => (\n        <div key={t.id} onClick={() => toggleTodo(t.id)}>\n          {t.done ? <s>{t.text}</s> : t.text}\n        </div>\n      ))}\n    </div>\n  );\n}`,
  ],
};

const FINGER_DRILLS: Record<string, string[]> = {
  "Left Hand": ["asdf", "asdf asdf", "fdsa fdsa", "assess", "sadfad", "adds fade", "fad salad", "sass lass", "dada add", "lass dads"],
  "Right Hand": ["jkl;", "jkl; jkl;", ";lkj", "kill hulk", "jill kill", "ilk jill", "hulk like", "like kill", "kilo jill", "hill like"],
  "Ring Fingers": ["swde", "wsed", "dews", "swe dew", "weeds dew", "sewed wed", "wee seed", "edde swew", "deed sews", "sew wee"],
  "Pinkies": ["qpaz", "zaqp", "paqz", "zap zap", "qap qap", "pizza zap", "quiz zap", "paz zaq", "qapz paqz", "zap quiz"],
  "Numbers": ["1234 5678", "9012 3456", "7890 1234", "4567 8901", "2345 6789", "0123 4567", "8901 2345", "5678 9012", "3456 7890", "1234 9012"],
  "Symbols": ["!@#$ %^&*", "() {} []", "<> ?/ +=", "~` |\\ :;", "\"' ,. !?", "&* () +=", "[] {} <>", "%% $$ ##", "@@ !! ??", ":: ;; ,,"],
};

function calculateWPM(charsTyped: number, seconds: number, errors: number): number {
  const minutes = seconds / 60;
  if (minutes <= 0) return 0;
  const grossWpm = (charsTyped / 5) / minutes;
  const netWpm = grossWpm - (errors / minutes);
  return Math.max(0, Math.round(netWpm));
}

function calculateAccuracy(correct: number, total: number): number {
  if (total === 0) return 100;
  return Math.round((correct / total) * 100);
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function TabButton({ active, label, icon: Icon, onClick }: { active: boolean; label: string; icon: typeof Keyboard; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative flex items-center gap-2 px-4 py-2.5 text-xs font-bold tracking-wider uppercase rounded-lg transition-colors ${active ? "text-white" : "text-foreground/50 hover:text-foreground/80"}`}
      style={active ? { background: BRAND } : {}}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      <Icon size={14} />
      {label}
    </motion.button>
  );
}

function StatBadge({ icon: Icon, label, value, color }: { icon: typeof Clock; label: string; value: string; color?: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-foreground/5 border border-foreground/10">
      <Icon size={14} className="text-foreground/50" />
      <span className="text-[10px] font-medium text-foreground/50 uppercase tracking-wider">{label}</span>
      <span className="text-sm font-bold" style={color ? { color } : {}}>{value}</span>
    </div>
  );
}

function ResultsPanel({ wpm, accuracy, time, charsTyped, correct, incorrect, onTryAgain, onNewText }: {
  wpm: number; accuracy: number; time: number; charsTyped: number; correct: number; incorrect: number;
  onTryAgain: () => void; onNewText: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="w-full max-w-lg mx-auto p-8 rounded-2xl bg-foreground/5 border border-foreground/10 text-center"
    >
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 200 }}>
        <Trophy size={48} className="mx-auto mb-4" style={{ color: BRAND }} />
      </motion.div>
      <h2 className="text-2xl font-black mb-6">Test Complete!</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 rounded-xl bg-background/50">
          <div className="text-3xl font-black" style={{ color: BRAND }}>{wpm}</div>
          <div className="text-[10px] font-bold tracking-wider text-foreground/50 uppercase">Net WPM</div>
        </div>
        <div className="p-4 rounded-xl bg-background/50">
          <div className="text-3xl font-black text-emerald-400">{accuracy}%</div>
          <div className="text-[10px] font-bold tracking-wider text-foreground/50 uppercase">Accuracy</div>
        </div>
        <div className="p-4 rounded-xl bg-background/50">
          <div className="text-xl font-black">{time}s</div>
          <div className="text-[10px] font-bold tracking-wider text-foreground/50 uppercase">Time</div>
        </div>
        <div className="p-4 rounded-xl bg-background/50">
          <div className="text-xl font-black">{charsTyped}</div>
          <div className="text-[10px] font-bold tracking-wider text-foreground/50 uppercase">Chars</div>
        </div>
      </div>
      <div className="flex justify-center gap-4 text-sm mb-6">
        <span className="text-emerald-400 font-bold">{correct} correct</span>
        <span className="text-red-400 font-bold">{incorrect} incorrect</span>
      </div>
      <div className="flex gap-3 justify-center">
        <motion.button
          onClick={onTryAgain}
          className="px-6 py-2.5 rounded-lg text-white text-sm font-bold"
          style={{ background: BRAND }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Try Again
        </motion.button>
        <motion.button
          onClick={onNewText}
          className="px-6 py-2.5 rounded-lg text-sm font-bold border border-foreground/20 text-foreground/70 hover:text-foreground"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          New Text
        </motion.button>
      </div>
    </motion.div>
  );
}

function CharDisplay({ char, state, isCode }: { char: string; state: string; isCode?: boolean }) {
  const base = isCode ? "font-mono" : "";
  if (state === "correct") return <span className={`text-emerald-400 ${base}`}>{char}</span>;
  if (state === "incorrect") return <span className={`text-red-400 line-through ${base}`}>{char}</span>;
  if (state === "current") return (
    <span className={`relative ${base}`} style={{ color: BRAND }}>
      {char}
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5"
        style={{ background: BRAND }}
        layoutId="cursor"
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </span>
  );
  return <span className={`text-foreground/40 ${base}`}>{char}</span>;
}

function SyntaxHighlight({ code }: { code: string }) {
  const tokens = useMemo(() => {
    const lines = code.split("\n");
    return lines.map(line => {
      const parts: { text: string; color: string }[] = [];
      const keywords = /\b(const|let|var|function|return|if|else|for|while|class|import|export|from|def|print|interface|type|async|await|import|of|in|new|this|typeof|switch|case|break|continue|try|catch|finally|throw|true|false|null|undefined|yield)\b/g;
      const strings = /(["'`])(?:(?!\1|\\).|\\.)*\1/g;
      const comments = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(#.*$)/gm;
      const numbers = /\b(\d+\.?\d*)\b/g;

      let lastIndex = 0;
      const matches: { index: number; length: number; color: string }[] = [];

      let m;
      while ((m = strings.exec(line)) !== null) {
        matches.push({ index: m.index, length: m[0].length, color: "#22c55e" });
      }
      while ((m = comments.exec(line)) !== null) {
        matches.push({ index: m.index, length: m[0].length, color: "#6b7280" });
      }
      while ((m = keywords.exec(line)) !== null) {
        matches.push({ index: m.index, length: m[0].length, color: "#a78bfa" });
      }
      while ((m = numbers.exec(line)) !== null) {
        matches.push({ index: m.index, length: m[0].length, color: "#f59e0b" });
      }

      matches.sort((a, b) => a.index - b.index);

      for (const match of matches) {
        if (match.index > lastIndex) {
          parts.push({ text: line.slice(lastIndex, match.index), color: "" });
        }
        parts.push({ text: line.slice(match.index, match.index + match.length), color: match.color });
        lastIndex = match.index + match.length;
      }
      if (lastIndex < line.length) {
        parts.push({ text: line.slice(lastIndex), color: "" });
      }

      return parts;
    });
  }, [code]);

  return (
    <span className="font-mono leading-relaxed">
      {tokens.map((line, li) => (
        <span key={li}>
          {li > 0 && "\n"}
          {line.map((part, pi) => (
            <span key={pi} style={part.color ? { color: part.color } : {}}>{part.text}</span>
          ))}
        </span>
      ))}
    </span>
  );
}

function ClassicTab({ mode, timeLimit, onFinish }: { mode: Mode; timeLimit: number; onFinish: (wpm: number, accuracy: number, time: number, total: number, correct: number, incorrect: number) => void }) {
  const [text, setText] = useState(() => pickRandom(PASSAGES));
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [elapsed, setElapsed] = useState(0);
  const [charStates, setCharStates] = useState<string[]>(() => []);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [focused, setFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const endTimeRef = useRef<number | null>(null);

  const reset = useCallback((newText?: string) => {
    const t = newText || pickRandom(PASSAGES);
    setText(t);
    setInput("");
    setStartTime(null);
    setIsFinished(false);
    setWpm(0);
    setAccuracy(100);
    setElapsed(0);
    setCorrect(0);
    setIncorrect(0);
    setCharStates(new Array(t.length).fill("pending"));
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
    endTimeRef.current = null;
  }, []);

  useEffect(() => {
    reset();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [reset, mode, timeLimit]);

  const finish = useCallback(() => {
    if (isFinished) return;
    setIsFinished(true);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
    const elapsedTime = Math.round((Date.now() - (startTime || Date.now())) / 1000);
    const finalWpm = calculateWPM(input.length, elapsedTime, incorrect);
    const finalAcc = calculateAccuracy(correct, correct + incorrect);
    setWpm(finalWpm);
    setAccuracy(finalAcc);
    onFinish(finalWpm, finalAcc, elapsedTime, input.length, correct, incorrect);
  }, [isFinished, startTime, input, correct, incorrect, onFinish]);

  useEffect(() => {
    if (mode === "timed" && startTime && endTimeRef.current) {
      const remaining = endTimeRef.current - Date.now();
      if (remaining <= 0) finish();
    }
  }, [elapsed, mode, startTime, finish]);

  useEffect(() => {
    if (!startTime || isFinished) return;
    if (mode === "timed") {
      const interval = setInterval(() => {
        const now = Date.now();
        const remaining = endTimeRef.current! - now;
        setElapsed(Math.max(0, Math.round(remaining / 1000)));
        if (remaining <= 0) finish();
      }, 100);
      timerRef.current = interval;
      return () => clearInterval(interval);
    }
    const interval = setInterval(() => {
      const elapsed = Math.round((Date.now() - startTime) / 1000);
      setElapsed(elapsed);
      const currentWpm = calculateWPM(input.length, elapsed, incorrect);
      setWpm(currentWpm);
      setAccuracy(calculateAccuracy(correct, correct + incorrect));
    }, 200);
    timerRef.current = interval;
    return () => clearInterval(interval);
  }, [startTime, isFinished, mode]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (isFinished) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;

    if (!focused) return;
    e.preventDefault();

    if (!startTime) {
      setStartTime(Date.now());
      if (mode === "timed") {
        endTimeRef.current = Date.now() + (timeLimit || 30) * 1000;
      }
    }

    if (e.key === "Backspace") {
      if (input.length > 0) {
        const newInput = input.slice(0, -1);
        setInput(newInput);
        const newStates = [...charStates];
        if (newInput.length < text.length) {
          newStates[newInput.length] = "current";
        }
        const prevIdx = input.length - 1;
        if (prevIdx >= 0 && prevIdx < text.length) {
          if (newStates[prevIdx] === "correct") setCorrect(c => c - 1);
          if (newStates[prevIdx] === "incorrect") setIncorrect(c => c - 1);
          newStates[prevIdx] = "pending";
        }
        if (newInput.length + 1 < text.length) newStates[newInput.length + 1] = "pending";
        setCharStates(newStates);
      }
      return;
    }

    if (e.key.length !== 1) return;

    const idx = input.length;
    if (idx >= text.length) return;

    const newInput = input + e.key;
    setInput(newInput);

    const newStates = [...charStates];
    const isCorrect = e.key === text[idx];
    newStates[idx] = isCorrect ? "correct" : "incorrect";
    if (idx + 1 < text.length) newStates[idx + 1] = "current";
    setCharStates(newStates);
    if (isCorrect) setCorrect(c => c + 1);
    else setIncorrect(c => c + 1);

    if (newInput.length >= text.length) {
      finish();
    }
  }, [isFinished, input, text, charStates, startTime, focused, mode, timeLimit, correct, incorrect, finish]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const timeDisplay = mode === "timed" ? elapsed : `${elapsed}s`;
  const wpmDisplay = mode === "timed" ? calculateWPM(correct, (timeLimit || 30) - elapsed || 1, incorrect) : wpm;

  if (isFinished) {
    return (
      <ResultsPanel
        wpm={wpm}
        accuracy={accuracy}
        time={elapsed}
        charsTyped={input.length}
        correct={correct}
        incorrect={incorrect}
        onTryAgain={() => reset()}
        onNewText={() => reset()}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      className={`relative p-6 rounded-xl border ${focused ? "border-foreground/20" : "border-foreground/5"} bg-foreground/5 cursor-text transition-all duration-300`}
      onClick={() => { containerRef.current?.focus(); setFocused(true); }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={focused ? { boxShadow: `0 0 0 1px ${BRAND}20` } : {}}
    >
      {!focused && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none rounded-xl bg-foreground/[0.02]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-2 text-foreground/40"
          >
            <Keyboard size={32} />
            <span className="text-sm font-medium">Click here to focus and start typing</span>
          </motion.div>
        </div>
      )}
      <div className="flex items-center gap-4 mb-4 text-sm">
        <div className="flex items-center gap-1.5">
          <Gauge size={14} className="text-foreground/50" />
          <span className="font-bold" style={{ color: BRAND }}>{wpmDisplay}</span>
          <span className="text-[10px] text-foreground/50 uppercase tracking-wider">wpm</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Target size={14} className="text-foreground/50" />
          <span className="font-bold text-emerald-400">{calculateAccuracy(correct, correct + incorrect)}%</span>
          <span className="text-[10px] text-foreground/50 uppercase tracking-wider">acc</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock size={14} className="text-foreground/50" />
          <span className="font-bold">{timeDisplay}</span>
          <span className="text-[10px] text-foreground/50 uppercase tracking-wider">time</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Zap size={14} className="text-foreground/50" />
          <span className="font-bold">{input.length}</span>
          <span className="text-[10px] text-foreground/50 uppercase tracking-wider">chars</span>
        </div>
      </div>
      <div className="text-xl leading-relaxed tracking-wide select-none" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        {text.split("").map((char, i) => (
          <CharDisplay key={i} char={char} state={i < charStates.length ? charStates[i] : "pending"} />
        ))}
      </div>
      <div className="mt-4 flex justify-between text-[10px] font-medium text-foreground/30 uppercase tracking-wider">
        <span>Mode: {mode.charAt(0).toUpperCase() + mode.slice(1)}</span>
        <span>{Math.round((input.length / (text.length || 1)) * 100)}% complete</span>
      </div>
    </div>
  );
}

function CodingTab({ onFinish }: { onFinish: (wpm: number, accuracy: number, time: number, total: number, correct: number, incorrect: number) => void }) {
  const langs = Object.keys(CODE_SNIPPETS);
  const [lang, setLang] = useState("JavaScript");
  const [snippet, setSnippet] = useState(() => pickRandom(CODE_SNIPPETS["JavaScript"]));
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [elapsed, setElapsed] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [focused, setFocused] = useState(false);
  const [charStates, setCharStates] = useState<string[]>(() => new Array(snippet.length).fill("pending"));
  const containerRef = useRef<HTMLDivElement>(null);

  const reset = useCallback(() => {
    const s = pickRandom(CODE_SNIPPETS[lang]);
    setSnippet(s);
    setInput("");
    setStartTime(null);
    setIsFinished(false);
    setWpm(0);
    setAccuracy(100);
    setElapsed(0);
    setCorrect(0);
    setIncorrect(0);
    setCharStates(new Array(s.length).fill("pending"));
  }, [lang]);

  const finish = useCallback(() => {
    setIsFinished(true);
    const elapsedTime = Math.round((Date.now() - (startTime || Date.now())) / 1000);
    const finalWpm = calculateWPM(input.length, elapsedTime, incorrect);
    const finalAcc = calculateAccuracy(correct, correct + incorrect);
    setWpm(finalWpm);
    setAccuracy(finalAcc);
    onFinish(finalWpm, finalAcc, elapsedTime, input.length, correct, incorrect);
  }, [startTime, input, correct, incorrect, onFinish]);

  useEffect(() => {
    if (!startTime || isFinished) return;
    const interval = setInterval(() => {
      const t = Math.round((Date.now() - startTime) / 1000);
      setElapsed(t);
      setWpm(calculateWPM(input.length, t, incorrect));
      setAccuracy(calculateAccuracy(correct, correct + incorrect));
    }, 200);
    return () => clearInterval(interval);
  }, [startTime, isFinished, input.length, correct, incorrect]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (isFinished) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (!focused) return;
    e.preventDefault();

    if (!startTime) setStartTime(Date.now());

    if (e.key === "Backspace") {
      if (input.length > 0) {
        const newInput = input.slice(0, -1);
        setInput(newInput);
        const newStates = [...charStates];
        const prevIdx = input.length - 1;
        if (prevIdx >= 0 && prevIdx < snippet.length) {
          if (newStates[prevIdx] === "correct") setCorrect(c => c - 1);
          if (newStates[prevIdx] === "incorrect") setIncorrect(c => c - 1);
          newStates[prevIdx] = "pending";
        }
        if (newInput.length < snippet.length) newStates[newInput.length] = "current";
        if (newInput.length + 1 < snippet.length) newStates[newInput.length + 1] = "pending";
        setCharStates(newStates);
      }
      return;
    }

    if (e.key.length !== 1) return;

    const idx = input.length;
    if (idx >= snippet.length) return;

    const newInput = input + e.key;
    setInput(newInput);
    const newStates = [...charStates];
    const isCorrectChar = e.key === snippet[idx];
    newStates[idx] = isCorrectChar ? "correct" : "incorrect";
    if (idx + 1 < snippet.length) newStates[idx + 1] = "current";
    setCharStates(newStates);
    if (isCorrectChar) setCorrect(c => c + 1);
    else setIncorrect(c => c + 1);

    if (newInput.length >= snippet.length) finish();
  }, [isFinished, input, snippet, charStates, focused, correct, incorrect, finish]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const displayText = snippet.split("").map((char, i) => {
    const state = i < charStates.length ? charStates[i] : "pending";
    if (state === "correct") return <span key={i} className="text-emerald-400 font-mono">{char}</span>;
    if (state === "incorrect") return <span key={i} className="text-red-400 line-through font-mono">{char}</span>;
    if (state === "current") return (
      <span key={i} className="relative font-mono" style={{ color: BRAND }}>
        {char}
        <motion.span className="absolute bottom-0 left-0 w-full h-0.5" style={{ background: BRAND }} layoutId="cursor2" transition={{ type: "spring", stiffness: 500, damping: 30 }} />
      </span>
    );
    return <span key={i} className="text-foreground/40 font-mono">{char}</span>;
  });

  if (isFinished) {
    return (
      <ResultsPanel
        wpm={wpm}
        accuracy={accuracy}
        time={elapsed}
        charsTyped={input.length}
        correct={correct}
        incorrect={incorrect}
        onTryAgain={() => reset()}
        onNewText={() => { reset(); }}
      />
    );
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Code2 size={16} className="text-foreground/50" />
        <span className="text-xs font-bold tracking-wider text-foreground/50 uppercase">Language</span>
        <div className="flex gap-1.5 flex-wrap">
          {langs.map(l => (
            <motion.button
              key={l}
              onClick={() => { setLang(l); const s = pickRandom(CODE_SNIPPETS[l]); setSnippet(s); setCharStates(new Array(s.length).fill("pending")); setInput(""); setStartTime(null); setIsFinished(false); setCorrect(0); setIncorrect(0); }}
              className={`px-3 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase border ${lang === l ? "text-white border-transparent" : "text-foreground/50 border-foreground/10 hover:text-foreground/80"}`}
              style={lang === l ? { background: BRAND, borderColor: BRAND } : {}}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {l}
            </motion.button>
          ))}
        </div>
      </div>
      <div
        ref={containerRef}
        tabIndex={0}
        className={`relative p-6 rounded-xl border ${focused ? "border-foreground/20" : "border-foreground/5"} bg-foreground/5 cursor-text transition-all duration-300`}
        onClick={() => { containerRef.current?.focus(); setFocused(true); }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={focused ? { boxShadow: `0 0 0 1px ${BRAND}20` } : {}}
      >
        {!focused && (
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none rounded-xl bg-foreground/[0.02]">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-2 text-foreground/40">
              <Code2 size={32} />
              <span className="text-sm font-medium">Click to start coding typing</span>
            </motion.div>
          </div>
        )}
        <div className="flex items-center gap-4 mb-4 text-sm">
          <div className="flex items-center gap-1.5">
            <Gauge size={14} className="text-foreground/50" />
            <span className="font-bold" style={{ color: BRAND }}>{wpm}</span>
            <span className="text-[10px] text-foreground/50 uppercase tracking-wider">wpm</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Target size={14} className="text-foreground/50" />
            <span className="font-bold text-emerald-400">{accuracy}%</span>
            <span className="text-[10px] text-foreground/50 uppercase tracking-wider">acc</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={14} className="text-foreground/50" />
            <span className="font-bold">{elapsed}s</span>
            <span className="text-[10px] text-foreground/50 uppercase tracking-wider">time</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap size={14} className="text-foreground/50" />
            <span className="font-bold">{input.length}</span>
            <span className="text-[10px] text-foreground/50 uppercase tracking-wider">chars</span>
          </div>
        </div>
        <div className="text-base leading-relaxed select-none whitespace-pre-wrap">
          {displayText}
        </div>
        <div className="mt-4 flex justify-between text-[10px] font-medium text-foreground/30 uppercase tracking-wider">
          <span>{lang}</span>
          <span>{Math.round((input.length / (snippet.length || 1)) * 100)}% complete</span>
        </div>
      </div>
    </div>
  );
}

function TimedTab({ onFinish }: { onFinish: (wpm: number, accuracy: number, time: number, total: number, correct: number, incorrect: number) => void }) {
  const [timeLimit, setTimeLimit] = useState(30);
  const [running, setRunning] = useState(false);
  const [remaining, setRemaining] = useState(30);
  const [finished, setFinished] = useState(false);
  const [finalStats, setFinalStats] = useState({ wpm: 0, accuracy: 0, time: 0, total: 0, correct: 0, incorrect: 0 });
  const [text, setText] = useState(() => pickRandom(PASSAGES));
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [charStates, setCharStates] = useState<string[]>(() => new Array(text.length).fill("pending"));
  const [focused, setFocused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const finishTimed = useCallback(() => {
    setFinished(true);
    if (timerRef.current) clearInterval(timerRef.current);
    const t = Math.round((Date.now() - (startTime || Date.now())) / 1000);
    const finalWpm = calculateWPM(input.length, t, incorrect);
    const finalAcc = calculateAccuracy(correct, correct + incorrect);
    const stats = { wpm: finalWpm, accuracy: finalAcc, time: t, total: input.length, correct, incorrect };
    setFinalStats(stats);
    onFinish(finalWpm, finalAcc, t, input.length, correct, incorrect);
  }, [startTime, input, correct, incorrect, onFinish]);

  const startTest = useCallback((duration: number) => {
    const t = pickRandom(PASSAGES);
    setText(t);
    setInput("");
    setStartTime(null);
    setCorrect(0);
    setIncorrect(0);
    setCharStates(new Array(t.length).fill("pending"));
    setRemaining(duration);
    setFinished(false);
    setRunning(true);
    setTimeLimit(duration);
    setFocused(true);
  }, []);

  const reset = useCallback(() => {
    setRunning(false);
    setFinished(false);
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!running || finished) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (!focused) return;
    e.preventDefault();

    if (!startTime) {
      setStartTime(Date.now());
    }

    if (e.key === "Backspace") {
      if (input.length > 0) {
        const newInput = input.slice(0, -1);
        setInput(newInput);
        const newStates = [...charStates];
        const prevIdx = input.length - 1;
        if (prevIdx >= 0 && prevIdx < text.length) {
          if (newStates[prevIdx] === "correct") setCorrect(c => c - 1);
          if (newStates[prevIdx] === "incorrect") setIncorrect(c => c - 1);
          newStates[prevIdx] = "pending";
        }
        if (newInput.length < text.length) newStates[newInput.length] = "current";
        if (newInput.length + 1 < text.length) newStates[newInput.length + 1] = "pending";
        setCharStates(newStates);
      }
      return;
    }

    if (e.key.length !== 1) return;

    const idx = input.length;
    if (idx >= text.length) return;

    const newInput = input + e.key;
    setInput(newInput);
    const newStates = [...charStates];
    const isCorrect = e.key === text[idx];
    newStates[idx] = isCorrect ? "correct" : "incorrect";
    if (idx + 1 < text.length) newStates[idx + 1] = "current";
    setCharStates(newStates);
    if (isCorrect) setCorrect(c => c + 1);
    else setIncorrect(c => c + 1);
  }, [running, finished, input, text, charStates, focused, startTime, correct, incorrect]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (!running || !startTime || finished) return;
    const endTime = Date.now() + timeLimit * 1000;
    const interval = setInterval(() => {
      const rem = Math.max(0, Math.round((endTime - Date.now()) / 1000));
      setRemaining(rem);
      if (rem <= 0) finishTimed();
    }, 100);
    timerRef.current = interval;
    return () => clearInterval(interval);
  }, [running, startTime, finished, timeLimit, finishTimed]);

  const pct = timeLimit > 0 ? (remaining / timeLimit) * 100 : 0;

  if (finished) {
    return (
      <div>
        <div className="mb-4 flex justify-center gap-2">
          {[15, 30, 60, 120].map(d => (
            <motion.button
              key={d}
              onClick={() => startTest(d)}
              className="px-4 py-2 rounded-lg text-sm font-bold text-white border border-transparent"
              style={{ background: BRAND }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {d}s
            </motion.button>
          ))}
        </div>
        <ResultsPanel
          wpm={finalStats.wpm}
          accuracy={finalStats.accuracy}
          time={finalStats.time}
          charsTyped={finalStats.total}
          correct={finalStats.correct}
          incorrect={finalStats.incorrect}
          onTryAgain={() => startTest(timeLimit)}
          onNewText={() => startTest(timeLimit)}
        />
      </div>
    );
  }

  if (!running) {
    return (
      <div className="text-center py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Clock size={48} className="mx-auto mb-4" style={{ color: BRAND }} />
          <h3 className="text-lg font-bold mb-2">Timed Typing Test</h3>
          <p className="text-sm text-foreground/50 mb-6">Choose your duration and start typing</p>
          <div className="flex justify-center gap-3">
            {[15, 30, 60, 120].map(d => (
              <motion.button
                key={d}
                onClick={() => startTest(d)}
                className="px-6 py-3 rounded-lg text-white text-sm font-bold"
                style={{ background: BRAND }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {d} Seconds
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mb-6">
        <motion.div
          className="text-6xl font-black mb-2"
          style={{ color: remaining <= 5 ? "#ef4444" : BRAND }}
          animate={remaining <= 5 ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          {remaining}
        </motion.div>
        <div className="text-[10px] font-bold tracking-widest text-foreground/40 uppercase">Seconds Remaining</div>
      </div>
      <div className="h-1.5 bg-foreground/10 rounded-full overflow-hidden mb-6">
        <motion.div
          className="h-full rounded-full"
          style={{ background: BRAND }}
          initial={{ width: "100%" }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      <div
        ref={containerRef}
        tabIndex={0}
        className={`relative p-6 rounded-xl border ${focused ? "border-foreground/20" : "border-foreground/5"} bg-foreground/5 cursor-text transition-all duration-300`}
        onClick={() => { containerRef.current?.focus(); setFocused(true); }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={focused ? { boxShadow: `0 0 0 1px ${BRAND}20` } : {}}
      >
        <div className="flex items-center gap-4 mb-4 text-sm">
          <div className="flex items-center gap-1.5">
            <Gauge size={14} className="text-foreground/50" />
            <span className="font-bold" style={{ color: BRAND }}>{calculateWPM(correct, Math.max(1, timeLimit - remaining), incorrect)}</span>
            <span className="text-[10px] text-foreground/50 uppercase tracking-wider">wpm</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Target size={14} className="text-foreground/50" />
            <span className="font-bold text-emerald-400">{calculateAccuracy(correct, correct + incorrect)}%</span>
            <span className="text-[10px] text-foreground/50 uppercase tracking-wider">acc</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap size={14} className="text-foreground/50" />
            <span className="font-bold">{input.length}</span>
            <span className="text-[10px] text-foreground/50 uppercase tracking-wider">chars</span>
          </div>
        </div>
        <div className="text-xl leading-relaxed tracking-wide select-none">
          {text.split("").map((char, i) => (
            <CharDisplay key={i} char={char} state={i < charStates.length ? charStates[i] : "pending"} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StatsTab() {
  const [view, setView] = useState<"overview" | "history">("overview");
  const wpmHistory = [45, 52, 48, 58, 63, 55, 67, 72, 65, 70, 78, 74, 80, 77, 82, 85, 79, 83, 87, 84];
  const accHistory = [88, 91, 87, 93, 90, 92, 94, 91, 93, 95, 92, 94, 96, 93, 95, 97, 94, 96, 98, 95];

  const weakKeys = [
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "a", "s", "d", "f", "g", "h", "j", "k", "l", ";",
    "z", "x", "c", "v", "b", "n", "m", ",", ".", "/",
  ];
  const keyErrors: Record<string, number> = {
    q: 3, w: 5, e: 2, r: 4, t: 6, y: 8, u: 3, i: 2, o: 5, p: 7,
    a: 1, s: 2, d: 3, f: 4, g: 5, h: 3, j: 2, k: 4, l: 6,
    z: 8, x: 6, c: 4, v: 5, b: 7, n: 3, m: 4,
  };

  const maxErrors = Math.max(...Object.values(keyErrors), 1);

  const maxWpm = Math.max(...wpmHistory);
  const avgWpm = Math.round(wpmHistory.reduce((a, b) => a + b, 0) / wpmHistory.length);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-4 gap-3">
        {[
          { icon: Trophy, label: "Best WPM", value: "87" },
          { icon: BarChart3, label: "Average WPM", value: `${avgWpm}` },
          { icon: Users, label: "Total Tests", value: "142" },
          { icon: Clock, label: "Total Time", value: "4.2h" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="p-4 rounded-xl bg-foreground/5 border border-foreground/10 text-center"
          >
            <item.icon size={20} className="mx-auto mb-2" style={{ color: BRAND }} />
            <div className="text-2xl font-black">{item.value}</div>
            <div className="text-[9px] font-bold tracking-widest text-foreground/40 uppercase">{item.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="flex gap-2 mb-4">
        {(["overview", "history"] as const).map(v => (
          <motion.button
            key={v}
            onClick={() => setView(v)}
            className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase ${view === v ? "text-white" : "text-foreground/50 border border-foreground/10"}`}
            style={view === v ? { background: BRAND } : {}}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            {v}
          </motion.button>
        ))}
      </div>

      {view === "overview" && (
        <>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 size={14} className="text-foreground/50" />
              <span className="text-[10px] font-black tracking-[0.2em] text-foreground/40 uppercase">WPM History (Last 20 Tests)</span>
            </div>
            <div className="flex items-end gap-1 h-32 p-3 rounded-xl bg-foreground/5 border border-foreground/10">
              {wpmHistory.map((val, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{ background: val === maxWpm ? BRAND : "hsl(var(--foreground) / 0.2)" }}
                  initial={{ height: 0 }}
                  animate={{ height: `${(val / maxWpm) * 100}%` }}
                  transition={{ delay: i * 0.03, duration: 0.4 }}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Target size={14} className="text-foreground/50" />
              <span className="text-[10px] font-black tracking-[0.2em] text-foreground/40 uppercase">Accuracy Trend</span>
            </div>
            <div className="flex items-end gap-1 h-24 p-3 rounded-xl bg-foreground/5 border border-foreground/10">
              {accHistory.map((val, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{ background: val >= 95 ? "#22c55e" : val >= 90 ? BRAND : "#ef4444" }}
                  initial={{ height: 0 }}
                  animate={{ height: `${(val / 100) * 100}%` }}
                  transition={{ delay: i * 0.03, duration: 0.4 }}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Eye size={14} className="text-foreground/50" />
              <span className="text-[10px] font-black tracking-[0.2em] text-foreground/40 uppercase">Weak Keys</span>
            </div>
            <div className="grid grid-cols-10 gap-1 p-3 rounded-xl bg-foreground/5 border border-foreground/10">
              {weakKeys.map(key => {
                const errRate = keyErrors[key] || 0;
                const intensity = Math.round((errRate / maxErrors) * 100);
                return (
                  <div
                    key={key}
                    className="text-center py-1.5 rounded text-xs font-mono font-bold"
                    style={{
                      background: errRate > 0 ? `rgba(239, 68, 68, ${0.1 + intensity / 200})` : "transparent",
                      color: errRate > 0 ? `rgba(239, 68, 68, ${0.5 + intensity / 200})` : "hsl(var(--foreground) / 0.3)",
                    }}
                  >
                    {key}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

      {view === "history" && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Trophy size={14} className="text-foreground/50" />
            <span className="text-[10px] font-black tracking-[0.2em] text-foreground/40 uppercase">Personal Records</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Best 15s", wpm: 72, acc: 96 },
              { label: "Best 30s", wpm: 87, acc: 95 },
              { label: "Best 60s", wpm: 82, acc: 93 },
              { label: "Best 120s", wpm: 78, acc: 91 },
            ].map((rec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-4 rounded-xl bg-foreground/5 border border-foreground/10"
              >
                <div className="text-[10px] font-bold tracking-wider text-foreground/40 uppercase mb-1">{rec.label}</div>
                <div className="flex items-end gap-3">
                  <span className="text-2xl font-black" style={{ color: BRAND }}>{rec.wpm}</span>
                  <span className="text-xs text-foreground/50">wpm</span>
                  <span className="text-sm font-bold text-emerald-400">{rec.acc}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function FingerTrainingTab() {
  const drillNames = Object.keys(FINGER_DRILLS);
  const [focus, setFocus] = useState("Left Hand");
  const [round, setRound] = useState(0);
  const [drillText, setDrillText] = useState(() => pickRandom(FINGER_DRILLS["Left Hand"]));
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [charStates, setCharStates] = useState<string[]>(() => []);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [focused, setFocused] = useState(false);
  const [complete, setComplete] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const startDrill = useCallback((drill: string) => {
    const d = pickRandom(FINGER_DRILLS[drill]);
    setDrillText(d);
    setInput("");
    setStartTime(null);
    setCorrect(0);
    setIncorrect(0);
    setWpm(0);
    setAccuracy(100);
    setElapsed(0);
    setCharStates(new Array(d.length).fill("pending"));
    setComplete(false);
    setFocused(true);
  }, []);

  const nextRound = useCallback(() => {
    if (round + 1 >= 5) {
      setComplete(true);
      return;
    }
    setRound(r => r + 1);
    startDrill(focus);
  }, [round, focus, startDrill]);

  const resetAll = useCallback(() => {
    setRound(0);
    startDrill(focus);
    setComplete(false);
  }, [focus, startDrill]);

  useEffect(() => {
    startDrill(focus);
  }, [focus, startDrill]);

  useEffect(() => {
    if (!startTime || complete) return;
    const interval = setInterval(() => {
      const t = Math.round((Date.now() - startTime) / 1000);
      setElapsed(t);
      setWpm(calculateWPM(input.length, t, incorrect));
      setAccuracy(calculateAccuracy(correct, correct + incorrect));
    }, 200);
    return () => clearInterval(interval);
  }, [startTime, complete, input.length, correct, incorrect]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (complete) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (!focused) return;
    e.preventDefault();

    if (!startTime) setStartTime(Date.now());

    if (e.key === "Backspace") {
      if (input.length > 0) {
        const newInput = input.slice(0, -1);
        setInput(newInput);
        const newStates = [...charStates];
        const prevIdx = input.length - 1;
        if (prevIdx >= 0 && prevIdx < drillText.length) {
          if (newStates[prevIdx] === "correct") setCorrect(c => c - 1);
          if (newStates[prevIdx] === "incorrect") setIncorrect(c => c - 1);
          newStates[prevIdx] = "pending";
        }
        if (newInput.length < drillText.length) newStates[newInput.length] = "current";
        if (newInput.length + 1 < drillText.length) newStates[newInput.length + 1] = "pending";
        setCharStates(newStates);
      }
      return;
    }

    if (e.key.length !== 1) return;

    const idx = input.length;
    if (idx >= drillText.length) return;

    const newInput = input + e.key;
    setInput(newInput);
    const newStates = [...charStates];
    const isCorrect = e.key === drillText[idx];
    newStates[idx] = isCorrect ? "correct" : "incorrect";
    if (idx + 1 < drillText.length) newStates[idx + 1] = "current";
    setCharStates(newStates);
    if (isCorrect) setCorrect(c => c + 1);
    else setIncorrect(c => c + 1);

    if (newInput.length >= drillText.length) {
      setTimeout(() => nextRound(), 800);
    }
  }, [complete, input, drillText, charStates, focused, correct, incorrect, nextRound]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (complete) {
    return (
      <div className="text-center py-8">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}>
          <Sparkles size={48} className="mx-auto mb-4" style={{ color: BRAND }} />
        </motion.div>
        <h3 className="text-xl font-black mb-2">Drill Complete!</h3>
        <p className="text-sm text-foreground/50 mb-6">All 5 rounds finished for {focus}</p>
        <div className="flex justify-center gap-3 mb-6">
          <div className="p-4 rounded-xl bg-foreground/5 border border-foreground/10 text-center">
            <div className="text-2xl font-black" style={{ color: BRAND }}>{Math.round(correct / Math.max(1, elapsed) * 60 / 5 * 10) / 10}</div>
            <div className="text-[9px] font-bold tracking-wider text-foreground/40 uppercase">Avg WPM</div>
          </div>
          <div className="p-4 rounded-xl bg-foreground/5 border border-foreground/10 text-center">
            <div className="text-2xl font-black text-emerald-400">{accuracy}%</div>
            <div className="text-[9px] font-bold tracking-wider text-foreground/40 uppercase">Accuracy</div>
          </div>
        </div>
        <motion.button
          onClick={() => { setRound(0); setFocus("Left Hand"); resetAll(); }}
          className="px-6 py-2.5 rounded-lg text-white text-sm font-bold"
          style={{ background: BRAND }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Start New Drill
        </motion.button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Fingerprint size={16} className="text-foreground/50" />
        <span className="text-xs font-bold tracking-wider text-foreground/50 uppercase">Focus Area</span>
        <div className="flex gap-1.5 flex-wrap">
          {drillNames.map(d => (
            <motion.button
              key={d}
              onClick={() => { setFocus(d); setRound(0); }}
              className={`px-3 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase border ${focus === d ? "text-white border-transparent" : "text-foreground/50 border-foreground/10 hover:text-foreground/80"}`}
              style={focus === d ? { background: BRAND, borderColor: BRAND } : {}}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {d}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Brain size={14} className="text-foreground/50" />
            <span className="text-[10px] font-black tracking-[0.2em] text-foreground/40 uppercase">Practice Progress</span>
          </div>
          <span className="text-xs font-bold" style={{ color: BRAND }}>{round + 1} / 5</span>
        </div>
        <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: BRAND }}
            initial={{ width: 0 }}
            animate={{ width: `${((round + 1) / 5) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      <div className="flex items-center gap-3 mb-4 text-xs">
        <span className="flex items-center gap-1">
          <Gauge size={12} className="text-foreground/50" />
          <span className="font-bold" style={{ color: BRAND }}>{wpm}</span> wpm
        </span>
        <span className="flex items-center gap-1">
          <Target size={12} className="text-foreground/50" />
          <span className="font-bold text-emerald-400">{accuracy}%</span> acc
        </span>
        <span className="flex items-center gap-1">
          <Clock size={12} className="text-foreground/50" />
          <span className="font-bold">{elapsed}s</span>
        </span>
      </div>

      <div
        ref={containerRef}
        tabIndex={0}
        className={`relative p-6 rounded-xl border ${focused ? "border-foreground/20" : "border-foreground/5"} bg-foreground/5 cursor-text transition-all duration-300`}
        onClick={() => { containerRef.current?.focus(); setFocused(true); }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={focused ? { boxShadow: `0 0 0 1px ${BRAND}20` } : {}}
      >
        {!focused && (
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none rounded-xl bg-foreground/[0.02]">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-2 text-foreground/40">
              <Fingerprint size={32} />
              <span className="text-sm font-medium">Click to start finger drill</span>
            </motion.div>
          </div>
        )}
        <div className="text-2xl leading-relaxed tracking-widest select-none text-center font-mono">
          {drillText.split("").map((char, i) => (
            <CharDisplay key={i} char={char} state={i < charStates.length ? charStates[i] : "pending"} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function TypingPlayground() {
  const [activeTab, setActiveTab] = useState<Tab>("classic");
  const [mode, setMode] = useState<Mode>("classic");
  const [timeLimit, setTimeLimit] = useState(30);

  const handleFinish = useCallback((_wpm: number, _accuracy: number, _time: number, _total: number, _correct: number, _incorrect: number) => {
    // Results are displayed inline in each tab
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
        <div className="flex items-center gap-3 mb-1">
          <Keyboard size={24} style={{ color: BRAND }} />
          <h1 className="text-xl font-black tracking-tight">Typing Playground</h1>
        </div>
        <p className="text-xs text-foreground/40 ml-9">Improve your typing speed and accuracy</p>
      </motion.div>

      <div className="flex gap-2 mb-6 flex-wrap">
        {tabs.map(tab => (
          <TabButton
            key={tab.id}
            active={activeTab === tab.id}
            label={tab.label}
            icon={tab.icon}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === "classic" && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold tracking-wider text-foreground/50 uppercase">Mode</span>
                <div className="flex gap-1.5">
                  {(["classic", "timed", "endless"] as Mode[]).map(m => (
                    <motion.button
                      key={m}
                      onClick={() => setMode(m)}
                      className={`px-3 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase border ${mode === m ? "text-white border-transparent" : "text-foreground/50 border-foreground/10 hover:text-foreground/80"}`}
                      style={mode === m ? { background: BRAND, borderColor: BRAND } : {}}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {m}
                    </motion.button>
                  ))}
                </div>
              </div>
              {mode === "timed" && (
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold tracking-wider text-foreground/50 uppercase">Duration</span>
                  <div className="flex gap-1.5">
                    {[30, 60, 120].map(t => (
                      <motion.button
                        key={t}
                        onClick={() => setTimeLimit(t)}
                        className={`px-3 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase border ${timeLimit === t ? "text-white border-transparent" : "text-foreground/50 border-foreground/10 hover:text-foreground/80"}`}
                        style={timeLimit === t ? { background: BRAND, borderColor: BRAND } : {}}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        {t}s
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}
              <ClassicTab mode={mode} timeLimit={timeLimit} onFinish={handleFinish} />
            </div>
          )}
          {activeTab === "coding" && <CodingTab onFinish={handleFinish} />}
          {activeTab === "timed" && <TimedTab onFinish={handleFinish} />}
          {activeTab === "stats" && <StatsTab />}
          {activeTab === "fingers" && <FingerTrainingTab />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
