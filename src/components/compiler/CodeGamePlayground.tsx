import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "puzzle" | "battle" | "maze" | "arena" | "boss";

const BRAND = "#8B5CF6";

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "puzzle", label: "Puzzle", icon: "\u{1F9E9}" },
  { id: "battle", label: "Battle", icon: "\u{2694}\u{FE0F}" },
  { id: "maze", label: "Maze", icon: "\u{1F6B6}" },
  { id: "arena", label: "Arena", icon: "\u{1F3AA}" },
  { id: "boss", label: "Boss", icon: "\u{1F47E}" },
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

function ScoreBar({ label, score, max, color }: { label: string; score: number; max: number; color: string }) {
  return (
    <div className="space-y-0.5">
      <div className="flex justify-between text-[9px] font-bold text-foreground/50">
        <span>{label}</span>
        <span>{score}/{max}</span>
      </div>
      <div className="h-2.5 bg-foreground/10 rounded-full overflow-hidden">
        <motion.div className="h-full rounded-full" initial={{ width: 0 }}
          animate={{ width: `${(score / max) * 100}%` }}
          transition={{ duration: 0.3 }}
          style={{ backgroundColor: color }} />
      </div>
    </div>
  );
}

// ── Tab 1: Puzzle ──
const puzzles = [
  { question: "Arrange the code to print 'Hello'", blocks: ['print("Hello")', 'def main():', 'main()', 'if __name__ == "__main__":'], correct: [1, 0, 3, 2] },
  { question: "Arrange a for loop that sums 1 to 5", blocks: ["total = 0", "for i in range(1, 6):", "    total += i", "print(total)"], correct: [0, 1, 2, 3] },
  { question: "Arrange the code for a function that doubles a number", blocks: ["    return x * 2", "def double(x):", "result = double(5)", "print(result)"], correct: [1, 0, 2, 3] },
];

function PuzzleTab() {
  const [level, setLevel] = useState(0);
  const [slots, setSlots] = useState<string[]>([]);
  const [available, setAvailable] = useState<string[]>([]);
  const [result, setResult] = useState<"idle" | "correct" | "wrong">("idle");
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  const puzzle = puzzles[level];

  const initPuzzle = useCallback(() => {
    const shuffled = [...puzzle.blocks].sort(() => Math.random() - 0.5);
    setAvailable(shuffled);
    setSlots([]);
    setResult("idle");
  }, [puzzle]);

  useEffect(() => { initPuzzle(); }, [initPuzzle]);

  const placeBlock = useCallback((block: string) => {
    setAvailable((prev) => prev.filter((b) => b !== block));
    setSlots((prev) => [...prev, block]);
    setResult("idle");
  }, []);

  const removeBlock = useCallback((block: string) => {
    setSlots((prev) => {
      const idx = prev.indexOf(block);
      if (idx === -1) return prev;
      const removed = [...prev];
      removed.splice(idx, 1);
      setAvailable((a) => [...a, block]);
      return removed;
    });
    setResult("idle");
  }, []);

  const checkAnswer = useCallback(() => {
    const correct = slots.length === puzzle.correct.length && slots.every((s, i) => s === puzzle.blocks[puzzle.correct[i]]);
    if (correct) {
      setResult("correct");
      setScore((s) => s + 10 + streak * 2);
      setStreak((s) => s + 1);
    } else {
      setResult("wrong");
      setStreak(0);
    }
  }, [slots, puzzle, streak]);

  const nextLevel = useCallback(() => {
    if (level < puzzles.length - 1) {
      setLevel((l) => l + 1);
    } else {
      setLevel(0);
    }
  }, [level]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="xl:col-span-2 space-y-4">
        <div className="flex items-center justify-between">
          <SectionLabel>Puzzle {level + 1}/{puzzles.length}</SectionLabel>
          <div className="flex items-center gap-3 text-[10px] font-bold">
            <span className="text-emerald-500">Score: {score}</span>
            {streak > 0 && <span className="text-amber-500">Streak: {streak}x</span>}
          </div>
        </div>

        <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4">
          <p className="text-sm font-bold text-foreground/80 mb-4">{puzzle.question}</p>

          {/* Drop Zone */}
          <div className="min-h-[160px] bg-foreground/5 border-2 border-dashed border-foreground/20 rounded-xl p-3 space-y-1">
            {slots.length === 0 && (
              <p className="text-[10px] text-foreground/30 italic text-center py-6">Click code blocks below to place them here</p>
            )}
            {slots.map((block, i) => (
              <motion.button key={`${block}-${i}`} layout
                onClick={() => removeBlock(block)}
                className="w-full text-left px-3 py-2 rounded-lg text-[10px] font-mono font-bold transition-all border border-purple-500/30 bg-purple-500/10 text-purple-400 hover:bg-purple-500/20"
              >
                {i + 1}. {block}
              </motion.button>
            ))}
          </div>

          {/* Available Blocks */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {available.map((block, i) => (
              <motion.button key={`${block}-${i}`} layout
                onClick={() => placeBlock(block)}
                className="px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold bg-foreground/10 text-foreground/60 hover:text-foreground hover:bg-foreground/20 transition-all border border-foreground/10"
              >
                + {block}
              </motion.button>
            ))}
          </div>

          <div className="flex gap-2 mt-4">
            <button onClick={checkAnswer} disabled={slots.length !== puzzle.blocks.length}
              className="px-5 py-2 rounded-xl text-xs font-bold text-white disabled:opacity-30 transition-all"
              style={{ backgroundColor: BRAND }}>
              {"\u{2705}"} Check
            </button>
            <button onClick={initPuzzle} className="px-4 py-2 rounded-xl text-xs font-bold bg-foreground/10 text-foreground/50 hover:text-foreground transition-all">
              {"\u{1F504}"} Reset
            </button>
          </div>

          {result === "correct" && (
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }}
              className="mt-3 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold flex items-center gap-2">
              {"\u{2705}"} Correct! +{10 + streak * 2} XP {streak > 1 && `(${streak}x streak bonus!)`}
              <button onClick={nextLevel} className="ml-auto px-3 py-1 rounded-lg bg-emerald-500 text-white text-[10px]">
                Next {"\u{2192}"}
              </button>
            </motion.div>
          )}
          {result === "wrong" && (
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }}
              className="mt-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold">
              {"\u{274C}"} Not quite right. Try a different order!
            </motion.div>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <SectionLabel>Stats</SectionLabel>
        <div className="space-y-2 text-[10px] font-mono text-foreground/50">
          <ScoreBar label="Score" score={score} max={100} color="#10b981" />
          <ScoreBar label="Streak" score={streak} max={10} color="#f59e0b" />
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5">
            <span>Level</span><span>{level + 1}</span>
          </div>
        </div>

        <SectionLabel>How to Play</SectionLabel>
        <div className="text-[10px] text-foreground/50 leading-relaxed space-y-1.5 px-1">
          <p>Click code blocks to add them in order</p>
          <p>Click placed blocks to remove them</p>
          <p>Arrange the correct sequence to earn XP</p>
          <p>Maintain a streak for bonus points!</p>
        </div>
      </div>
    </div>
  );
}

// ── Tab 2: Battle ──
const battleQuestions = [
  { q: "What does HTML stand for?", opts: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "High Tech Modern Language"], correct: 0 },
  { q: "Which CSS property controls the text size?", opts: ["font-size", "text-size", "font-style", "text-style"], correct: 0 },
  { q: "Which tag creates a hyperlink?", opts: ["<a>", "<link>", "<href>", "<nav>"], correct: 0 },
  { q: "What is the correct way to declare a JavaScript variable?", opts: ["let x = 5;", "variable x = 5;", "v x = 5;", "int x = 5;"], correct: 0 },
  { q: "Which CSS property makes a flex container?", opts: ["display: flex", "display: block", "display: inline", "flex: true"], correct: 0 },
  { q: "What does 'console.log()' do?", opts: ["Prints to console", "Logs into a file", "Creates a variable", "Defines a function"], correct: 0 },
  { q: "Which HTML tag is used for the largest heading?", opts: ["<h1>", "<heading>", "<head>", "<h6>"], correct: 0 },
  { q: "What is the correct CSS syntax?", opts: ["p { color: red; }", "p = color: red;", "p: color red;", "{ p: color red }"], correct: 0 },
];

function BattleTab() {
  const [qIdx, setQIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [active, setActive] = useState(false);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startBattle = useCallback(() => {
    setQIdx(0);
    setScore(0);
    setTimeLeft(30);
    setActive(true);
    setFinished(false);
    setSelected(null);
    setFeedback(null);

    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          setActive(false);
          setFinished(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  }, []);

  useEffect(() => {
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const answer = useCallback((idx: number) => {
    if (selected !== null || !active) return;
    setSelected(idx);

    const correct = idx === battleQuestions[qIdx].correct;
    setFeedback(correct ? "correct" : "wrong");
    if (correct) setScore((s) => s + 10);

    setTimeout(() => {
      if (qIdx < battleQuestions.length - 1) {
        setQIdx((p) => p + 1);
        setSelected(null);
        setFeedback(null);
      } else {
        setActive(false);
        setFinished(true);
        if (timerRef.current) clearInterval(timerRef.current);
      }
    }, 800);
  }, [qIdx, active, selected]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="xl:col-span-2 space-y-4">
        <SectionLabel>Coding Battle {active && <GlowingDot color="#ef4444" pulse />}</SectionLabel>

        {!active && !finished && (
          <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-8 text-center">
            <p className="text-lg mb-2">{"\u{2694}\u{FE0F}"}</p>
            <p className="text-sm font-bold text-foreground/70 mb-2">Timed Coding Battle</p>
            <p className="text-xs text-foreground/40 mb-4">Answer 8 questions as fast as you can!</p>
            <button onClick={startBattle}
              className="px-6 py-3 rounded-xl text-sm font-bold text-white transition-all"
              style={{ backgroundColor: BRAND }}>
              {"\u{25B6}"} Start Battle
            </button>
          </div>
        )}

        {active && (
          <>
            <div className="flex items-center gap-4 mb-3">
              <ScoreBar label="Time" score={timeLeft} max={30} color={timeLeft > 10 ? "#3b82f6" : "#ef4444"} />
              <div className="text-[10px] font-mono text-foreground/50">Q {qIdx + 1}/{battleQuestions.length}</div>
              <div className="text-[10px] font-mono text-emerald-500 font-bold">Score: {score}</div>
            </div>

            <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-6">
              <p className="text-sm font-bold text-foreground/80 mb-4">{battleQuestions[qIdx].q}</p>
              <div className="space-y-2">
                {battleQuestions[qIdx].opts.map((opt, i) => {
                  let btnStyle = "bg-foreground/5 border-foreground/10 text-foreground/70 hover:bg-foreground/10";
                  if (selected !== null && i === battleQuestions[qIdx].correct) btnStyle = "bg-emerald-500/20 border-emerald-500/40 text-emerald-500";
                  else if (selected === i && i !== battleQuestions[qIdx].correct) btnStyle = "bg-red-500/20 border-red-500/40 text-red-400";
                  else if (selected === i) btnStyle = "bg-purple-500/20 border-purple-500/40 text-purple-400";

                  return (
                    <button key={i} onClick={() => answer(i)}
                      className={`w-full text-left px-4 py-3 rounded-xl border text-xs font-medium transition-all ${btnStyle}`}
                      disabled={selected !== null}>
                      {String.fromCharCode(65 + i)}. {opt}
                    </button>
                  );
                })}
              </div>
              {feedback && (
                <div className={`mt-3 text-xs font-bold ${feedback === "correct" ? "text-emerald-500" : "text-red-400"}`}>
                  {feedback === "correct" ? "\u{2705} +10 XP!" : "\u{274C} Wrong!"}
                </div>
              )}
            </div>
          </>
        )}

        {finished && (
          <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-6 text-center">
            <p className="text-3xl mb-2">{"\u{1F389}"}</p>
            <p className="text-lg font-black" style={{ color: BRAND }}>Battle Complete!</p>
            <p className="text-xs text-foreground/50 mt-1">Score: {score}/{battleQuestions.length * 10}</p>
            <div className="mt-3 text-[10px] text-foreground/50">{score >= 70 ? "Amazing performance!" : score >= 40 ? "Good effort!" : "Keep practicing!"}</div>
            <button onClick={startBattle} className="mt-4 px-5 py-2 rounded-xl text-xs font-bold text-white transition-all" style={{ backgroundColor: BRAND }}>
              {"\u{1F504}"} Play Again
            </button>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <SectionLabel>Progress</SectionLabel>
        <div className="space-y-1 text-[10px] font-mono text-foreground/50">
          {battleQuestions.map((_, i) => (
            <div key={i} className={`flex items-center gap-2 px-2 py-1 rounded ${
              i < qIdx ? "bg-emerald-500/10 text-emerald-500" :
              i === qIdx && active ? "bg-purple-500/10 text-purple-400 font-bold" :
              "text-foreground/30"
            }`}>
              <span>{i < qIdx ? "\u{2705}" : i === qIdx && active ? "\u{25B6}" : String(i + 1)}</span>
              <span className="truncate">{battleQuestions[i].q.slice(0, 30)}...</span>
            </div>
          ))}
        </div>

        <SectionLabel>Rules</SectionLabel>
        <div className="text-[10px] text-foreground/50 leading-relaxed space-y-1 px-1">
          <p>{"\u{23F1}"} 30 seconds on the clock</p>
          <p>{"\u{2705}"} +10 XP per correct answer</p>
          <p>{"\u{274C}"} Wrong answers have no penalty</p>
          <p>{"\u{1F3AF}"} Answer all 8 to maximize score</p>
        </div>
      </div>
    </div>
  );
}

// ── Tab 3: Maze ──
const mazeData = [
  { size: 5, walls: [[0, 1], [0, 3], [1, 3], [2, 1], [2, 2], [3, 3], [4, 0]] },
  { size: 6, walls: [[0, 2], [1, 0], [1, 4], [2, 2], [3, 1], [3, 4], [4, 0], [4, 3]] },
  { size: 7, walls: [[0, 3], [1, 1], [1, 5], [2, 3], [3, 0], [3, 4], [4, 2], [5, 5], [5, 1]] },
];

function MazeTab() {
  const [mazeLevel, setMazeLevel] = useState(0);
  const [playerPos, setPlayerPos] = useState({ x: 0, y: 0 });
  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);
  const [gameActive, setGameActive] = useState(true);

  const maze = mazeData[mazeLevel];
  const goal = { x: maze.size - 1, y: maze.size - 1 };

  const isWall = useCallback((x: number, y: number) => {
    return maze.walls.some(([wx, wy]) => wx === x && wy === y);
  }, [maze]);

  const initMaze = useCallback(() => {
    setPlayerPos({ x: 0, y: 0 });
    setMoves(0);
    setWon(false);
    setGameActive(true);
  }, []);

  useEffect(() => { initMaze(); }, [mazeLevel, initMaze]);

  const movePlayer = useCallback((dx: number, dy: number) => {
    if (!gameActive || won) return;
    const nx = playerPos.x + dx;
    const ny = playerPos.y + dy;
    if (nx < 0 || nx >= maze.size || ny < 0 || ny >= maze.size) return;
    if (isWall(nx, ny)) return;
    setPlayerPos({ x: nx, y: ny });
    setMoves((m) => m + 1);
    if (nx === goal.x && ny === goal.y) {
      setWon(true);
      setGameActive(false);
    }
  }, [playerPos, gameActive, won, maze.size, goal, isWall]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp": e.preventDefault(); movePlayer(0, -1); break;
        case "ArrowDown": e.preventDefault(); movePlayer(0, 1); break;
        case "ArrowLeft": e.preventDefault(); movePlayer(-1, 0); break;
        case "ArrowRight": e.preventDefault(); movePlayer(1, 0); break;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [movePlayer]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="xl:col-span-2 space-y-4">
        <SectionLabel>Maze Level {mazeLevel + 1}</SectionLabel>

        <div className="flex gap-2 mb-2">
          {mazeData.map((_, i) => (
            <button key={i} onClick={() => setMazeLevel(i)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                mazeLevel === i ? "text-white shadow-lg" : "text-foreground/50 bg-foreground/5"
              }`}
              style={mazeLevel === i ? { backgroundColor: BRAND } : {}}>
              Level {i + 1}
            </button>
          ))}
        </div>

        <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4 flex items-center justify-center">
          <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${maze.size}, 48px)` }}>
            {Array.from({ length: maze.size * maze.size }).map((_, i) => {
              const x = i % maze.size;
              const y = Math.floor(i / maze.size);
              const isPlayer = x === playerPos.x && y === playerPos.y;
              const isGoal = x === goal.x && y === goal.y;
              const wall = isWall(x, y);

              return (
                <div key={i}
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold transition-all"
                  style={{
                    backgroundColor: isPlayer ? BRAND : isGoal ? "#10b981" : wall ? "#1e1b4b" : "hsl(var(--foreground)/0.08)",
                    color: isGoal ? "white" : "hsl(var(--foreground)/0.3)",
                    border: isPlayer ? "2px solid white" : isGoal ? "2px solid #10b981" : "1px solid hsl(var(--foreground)/0.05)",
                  }}>
                  {isPlayer ? "\u{1F916}" : isGoal ? "\u{2B50}" : ""}
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-[10px] text-foreground/50 flex items-center gap-4">
          <span>Moves: {moves}</span>
          <span>Use arrow keys to navigate</span>
          <button onClick={initMaze} className="ml-auto px-3 py-1 rounded-lg bg-foreground/10 text-foreground/50 hover:text-foreground transition-all text-[9px] font-bold">
            {"\u{1F504}"} Reset
          </button>
        </div>

        {won && (
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }}
            className="px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold">
            {"\u{1F389}"} Maze complete in {moves} moves! +25 XP
          </motion.div>
        )}
      </div>

      <div className="space-y-4">
        <SectionLabel>Controls</SectionLabel>
        <div className="grid grid-cols-3 gap-1.5 max-w-[150px] mx-auto">
          <div />
          <button onClick={() => movePlayer(0, -1)} className="px-3 py-2 rounded-lg bg-foreground/10 text-foreground/50 hover:text-foreground text-xs font-bold">{"\u{2191}"}</button>
          <div />
          <button onClick={() => movePlayer(-1, 0)} className="px-3 py-2 rounded-lg bg-foreground/10 text-foreground/50 hover:text-foreground text-xs font-bold">{"\u{2190}"}</button>
          <button onClick={() => movePlayer(0, 1)} className="px-3 py-2 rounded-lg bg-foreground/10 text-foreground/50 hover:text-foreground text-xs font-bold">{"\u{2193}"}</button>
          <button onClick={() => movePlayer(1, 0)} className="px-3 py-2 rounded-lg bg-foreground/10 text-foreground/50 hover:text-foreground text-xs font-bold">{"\u{2192}"}</button>
        </div>

        <SectionLabel>Legend</SectionLabel>
        <div className="space-y-1 text-[10px] text-foreground/50">
          <div className="flex items-center gap-2 px-2 py-1 rounded bg-foreground/5"><span className="text-sm">{"\u{1F916}"}</span> You</div>
          <div className="flex items-center gap-2 px-2 py-1 rounded bg-foreground/5"><span className="text-sm">{"\u{2B50}"}</span> Goal</div>
          <div className="flex items-center gap-2 px-2 py-1 rounded bg-foreground/5"><div className="w-3 h-3 rounded bg-[#1e1b4b]" /> Wall</div>
        </div>

        <SectionLabel>Tips</SectionLabel>
        <div className="text-[10px] text-foreground/50 leading-relaxed space-y-1 px-1">
          <p>Navigate the robot to the star</p>
          <p>Avoid purple walls</p>
          <p>Fewer moves = better score</p>
        </div>
      </div>
    </div>
  );
}

// ── Tab 4: Arena ──
function ArenaTab() {
  const [numbers, setNumbers] = useState<number[]>(() => {
    const arr = [5, 2, 8, 1, 9, 3, 7, 4, 6];
    return arr.sort(() => Math.random() - 0.5);
  });
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [swapTarget, setSwapTarget] = useState<number | null>(null);
  const [sorting, setSorting] = useState(false);
  const [sortSteps, setSortSteps] = useState(0);
  const [sorted, setSorted] = useState(false);

  const isSorted = (arr: number[]) => arr.every((v, i) => i === 0 || v >= arr[i - 1]);

  const initArena = useCallback(() => {
    const arr = [5, 2, 8, 1, 9, 3, 7, 4, 6].sort(() => Math.random() - 0.5);
    setNumbers(arr);
    setSelectedIdx(null);
    setSwapTarget(null);
    setSortSteps(0);
    setSorted(false);
    setSorting(false);
  }, []);

  useEffect(() => { initArena(); }, [initArena]);

  const selectNumber = useCallback((idx: number) => {
    if (sorting || sorted) return;
    if (selectedIdx === null) {
      setSelectedIdx(idx);
    } else if (selectedIdx === idx) {
      setSelectedIdx(null);
    } else {
      setSortSteps((s) => s + 1);
      setNumbers((prev) => {
        const next = [...prev];
        [next[selectedIdx], next[idx]] = [next[idx], next[selectedIdx]];
        if (isSorted(next)) {
          setSorted(true);
          setSorting(false);
        }
        return next;
      });
      setSelectedIdx(null);
    }
  }, [selectedIdx, sorting, sorted]);

  const autoSort = useCallback(() => {
    setSorting(true);
    const arr = [...numbers];
    let i = 0;
    const interval = setInterval(() => {
      if (i >= arr.length) {
        clearInterval(interval);
        setSorting(false);
        setSorted(true);
        return;
      }
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          setSortSteps((s) => s + 1);
        }
      }
      setNumbers([...arr]);
      i++;
    }, 500);
  }, [numbers]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="xl:col-span-2 space-y-4">
        <SectionLabel>Arena — Sort the Numbers {sorting && <GlowingDot color={BRAND} pulse />}</SectionLabel>

        <div className="flex gap-2 mb-2">
          <button onClick={initArena} className="px-3 py-1.5 rounded-lg text-[10px] font-bold bg-foreground/10 text-foreground/50 hover:text-foreground transition-all">
            {"\u{1F504}"} New Array
          </button>
          <button onClick={autoSort} disabled={sorting || sorted} className="px-3 py-1.5 rounded-lg text-[10px] font-bold text-white disabled:opacity-30 transition-all" style={{ backgroundColor: BRAND }}>
            {"\u{1F916}"} Auto Sort
          </button>
        </div>

        <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4">
          <div className="flex items-end gap-2 min-h-[200px]">
            {numbers.map((num, i) => {
              const height = 20 + num * 20;
              const isSelected = selectedIdx === i;
              return (
                <button key={`${num}-${i}`} onClick={() => selectNumber(i)}
                  className="flex-1 rounded-t-lg transition-all flex items-center justify-center text-[9px] font-bold text-white"
                  style={{
                    height: `${height}px`,
                    backgroundColor: sorted ? "#10b981" : isSelected ? BRAND : `hsl(264, ${50 + num * 5}%, ${65 - num * 3}%)`,
                    opacity: sorting ? 0.7 : 1,
                    cursor: sorting || sorted ? "default" : "pointer",
                    minWidth: 0,
                  }}>
                  {num}
                </button>
              );
            })}
          </div>
        </div>

        {sorted && (
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }}
            className="px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold">
            {"\u{1F389}"} Sorted! {sortSteps} swaps. +30 XP
          </motion.div>
        )}

        <div className="text-[10px] text-foreground/50">
          Steps: {sortSteps} | {sorted ? "Sorted!" : sorting ? "Sorting..." : "Click two numbers to swap them"}
        </div>
      </div>

      <div className="space-y-4">
        <SectionLabel>Instructions</SectionLabel>
        <div className="text-[10px] text-foreground/50 leading-relaxed space-y-1.5 px-1">
          <p>Click a number to select it</p>
          <p>Click another number to swap them</p>
          <p>Sort the array in ascending order</p>
          <p>Try to use as few swaps as possible</p>
          <p>Use "Auto Sort" to see a correct algorithm</p>
        </div>

        <SectionLabel>Stats</SectionLabel>
        <div className="space-y-1 text-[10px] font-mono text-foreground/50">
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5"><span>Swaps</span><span>{sortSteps}</span></div>
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5"><span>Elements</span><span>{numbers.length}</span></div>
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5"><span>Status</span><span>{sorted ? "Complete" : sorting ? "Running" : "Ready"}</span></div>
        </div>
      </div>
    </div>
  );
}

// ── Tab 5: Boss ──
const bossQuestions = [
  { q: "What is the time complexity of binary search?", opts: ["O(log n)", "O(n)", "O(n^2)", "O(1)"], correct: 0 },
  { q: "Which data structure uses LIFO?", opts: ["Stack", "Queue", "Tree", "Graph"], correct: 0 },
  { q: "What is a closure in JavaScript?", opts: ["Function with access to outer scope", "A closed function", "A loop", "A data type"], correct: 0 },
  { q: "What does CSS specificity mean?", opts: ["Which rule takes priority", "How fast CSS loads", "Color contrast ratio", "Mobile responsiveness"], correct: 0 },
  { q: "What is the difference between let and var?", opts: ["let is block-scoped", "var is block-scoped", "They are the same", "let cannot be reassigned"], correct: 0 },
  { q: "What is an API?", opts: ["Interface for apps to communicate", "A programming language", "A database type", "A CSS framework"], correct: 0 },
  { q: "What is hoisting in JavaScript?", opts: ["Variables moved to top of scope", "Lifting DOM elements", "CSS animation type", "Server request method"], correct: 0 },
  { q: "What does the 'this' keyword refer to?", opts: ["Current execution context", "The HTML document", "A CSS class", "A function parameter"], correct: 0 },
  { q: "What is a promise in JS?", opts: ["Async operation result", "A guarantee in code", "A data structure", "A CSS property"], correct: 0 },
  { q: "What is the virtual DOM?", opts: ["Lightweight DOM copy", "A fake website", "CSS framework", "Database system"], correct: 0 },
];

function BossTab() {
  const [bossHP, setBossHP] = useState(100);
  const [playerHP, setPlayerHP] = useState(100);
  const [qIdx, setQIdx] = useState(0);
  const [battleActive, setBattleActive] = useState(false);
  const [battleResult, setBattleResult] = useState<"idle" | "won" | "lost">("idle");
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [combo, setCombo] = useState(0);

  const startBoss = useCallback(() => {
    setBossHP(100);
    setPlayerHP(100);
    setQIdx(0);
    setBattleActive(true);
    setBattleResult("idle");
    setSelected(null);
    setFeedback(null);
    setCombo(0);
  }, []);

  const answer = useCallback((idx: number) => {
    if (selected !== null || !battleActive) return;
    setSelected(idx);

    const correct = idx === bossQuestions[qIdx].correct;
    setFeedback(correct ? "correct" : "wrong");

    if (correct) {
      const damage = 15 + combo * 3;
      setBossHP((hp) => Math.max(0, hp - damage));
      setCombo((c) => c + 1);
    } else {
      setPlayerHP((hp) => Math.max(0, hp - 20));
      setCombo(0);
    }

    setTimeout(() => {
      if (qIdx < bossQuestions.length - 1) {
        setQIdx((p) => p + 1);
        setSelected(null);
        setFeedback(null);
      } else {
        setBattleActive(false);
        setBattleResult("won");
      }
      // Check death
      setBossHP((hp) => { if (hp <= 0) { setBattleActive(false); setBattleResult("won"); } return hp; });
      setPlayerHP((hp) => { if (hp <= 0) { setBattleActive(false); setBattleResult("lost"); } return hp; });
    }, 700);
  }, [qIdx, battleActive, selected, combo]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="xl:col-span-2 space-y-4">
        <SectionLabel>Boss Battle {battleActive && <GlowingDot color="#ef4444" pulse />}</SectionLabel>

        {!battleActive && battleResult === "idle" && (
          <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-8 text-center">
            <p className="text-3xl mb-2">{"\u{1F47E}"}</p>
            <p className="text-sm font-bold text-foreground/70 mb-2">Ultimate Boss Battle</p>
            <p className="text-xs text-foreground/40 mb-4">Defeat the boss by answering 10 coding questions correctly!</p>
            <button onClick={startBoss} className="px-6 py-3 rounded-xl text-sm font-bold text-white transition-all" style={{ backgroundColor: BRAND }}>
              {"\u{2694}\u{FE0F}"} Challenge Boss
            </button>
          </div>
        )}

        {battleActive && (
          <>
            {/* HP Bars */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-xs">{"\u{1F47E}"} Boss</span>
                <div className="flex-1 h-4 bg-foreground/10 rounded-full overflow-hidden">
                  <motion.div className="h-full rounded-full" animate={{ width: `${bossHP}%` }}
                    style={{ backgroundColor: bossHP > 50 ? "#ef4444" : bossHP > 25 ? "#f59e0b" : "#dc2626" }} />
                </div>
                <span className="text-[10px] font-mono text-foreground/50">{bossHP}%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs">{"\u{1F916}"} You</span>
                <div className="flex-1 h-4 bg-foreground/10 rounded-full overflow-hidden">
                  <motion.div className="h-full rounded-full" animate={{ width: `${playerHP}%` }}
                    style={{ backgroundColor: playerHP > 50 ? "#10b981" : playerHP > 25 ? "#f59e0b" : "#ef4444" }} />
                </div>
                <span className="text-[10px] font-mono text-foreground/50">{playerHP}%</span>
              </div>
            </div>

            <div className="text-[10px] text-foreground/50 flex gap-3">
              <span>Question {qIdx + 1}/{bossQuestions.length}</span>
              {combo > 0 && <span className="text-amber-500 font-bold">Combo: {combo}x</span>}
            </div>

            <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-6">
              <p className="text-sm font-bold text-foreground/80 mb-4">{bossQuestions[qIdx].q}</p>
              <div className="space-y-2">
                {bossQuestions[qIdx].opts.map((opt, i) => {
                  let btnStyle = "bg-foreground/5 border-foreground/10 text-foreground/70 hover:bg-foreground/10";
                  if (selected !== null && i === bossQuestions[qIdx].correct) btnStyle = "bg-emerald-500/20 border-emerald-500/40 text-emerald-500";
                  else if (selected === i && i !== bossQuestions[qIdx].correct) btnStyle = "bg-red-500/20 border-red-500/40 text-red-400";
                  else if (selected === i) btnStyle = "bg-purple-500/20 border-purple-500/40 text-purple-400";

                  return (
                    <button key={i} onClick={() => answer(i)}
                      className={`w-full text-left px-4 py-3 rounded-xl border text-xs font-medium transition-all ${btnStyle}`}
                      disabled={selected !== null}>
                      {String.fromCharCode(65 + i)}. {opt}
                    </button>
                  );
                })}
              </div>
              {feedback && (
                <div className={`mt-3 text-xs font-bold ${feedback === "correct" ? "text-emerald-500" : "text-red-400"}`}>
                  {feedback === "correct" ? `\u{2694}\u{FE0F} Hit! ${15 + combo * 3} damage${combo > 1 ? ` (${combo}x combo!)` : ""}` : `\u{274C} Boss counter-attacks! -20 HP`}
                </div>
              )}
            </div>
          </>
        )}

        {(battleResult === "won" || battleResult === "lost") && (
          <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-6 text-center">
            <p className="text-3xl mb-2">{battleResult === "won" ? "\u{1F3C6}" : "\u{1F480}"}</p>
            <p className="text-lg font-black" style={{ color: battleResult === "won" ? "#10b981" : "#ef4444" }}>
              {battleResult === "won" ? "Victory!" : "Defeated!"}
            </p>
            <p className="text-xs text-foreground/50 mt-1">
              {battleResult === "won" ? "You defeated the boss! +100 XP" : "The boss was too strong. Try again!"}
            </p>
            <button onClick={startBoss} className="mt-4 px-5 py-2 rounded-xl text-xs font-bold text-white transition-all" style={{ backgroundColor: BRAND }}>
              {"\u{1F504}"} Retry
            </button>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <SectionLabel>Boss Info</SectionLabel>
        <div className="px-3 py-2 rounded-lg bg-foreground/5 border border-foreground/10 text-[10px] leading-relaxed text-foreground/60">
          <p className="font-bold text-foreground/70 mb-1">{"\u{1F47E}"} CodeMaster Boss</p>
          <p>HP: 100</p>
          <p>Difficulty increases with each question</p>
          <p>Combo multiplier boosts damage!</p>
        </div>

        <SectionLabel>Combo System</SectionLabel>
        <div className="space-y-1 text-[10px] text-foreground/50">
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5"><span>x1</span><span>15 dmg</span></div>
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5"><span>x2</span><span>18 dmg</span></div>
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5"><span>x3</span><span>21 dmg</span></div>
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5"><span>x5+</span><span>27+ dmg</span></div>
        </div>

        <SectionLabel>Tips</SectionLabel>
        <div className="text-[10px] text-foreground/50 leading-relaxed space-y-1 px-1">
          <p>{"\u{2705}"} Answer correctly to damage the boss</p>
          <p>{"\u{1F525}"}" Build combos for extra damage</p>
          <p>{"\u{274C}"}" Wrong answers let the boss attack</p>
          <p>{"\u{1F3AF}"}" Survive all 10 questions to win!</p>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ──
export function CodeGamePlayground() {
  const [activeTab, setActiveTab] = useState<Tab>("puzzle");

  const renderTab = () => {
    switch (activeTab) {
      case "puzzle": return <PuzzleTab />;
      case "battle": return <BattleTab />;
      case "maze": return <MazeTab />;
      case "arena": return <ArenaTab />;
      case "boss": return <BossTab />;
      default: return null;
    }
  };

  return (
    <div className="w-full h-full flex flex-col" style={{ isolation: "isolate" }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
      />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)", transform: "translate(-20%, 20%)" }}
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
