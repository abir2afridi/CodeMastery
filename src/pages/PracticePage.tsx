import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getChapter, getTrack } from "@/lib/curriculum";
import type { TrackId, Exercise } from "@/lib/curriculum/types";
import { MiniCompiler } from "@/components/lesson/MiniCompiler";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  ArrowLeft,
  Lightbulb,
  Eye,
  EyeOff,
  RotateCcw,
  CheckCircle2,
  Terminal,
  Cpu,
  Zap,
  Activity,
  Shield,
  Layers,
  ChevronRight,
  Code
} from "lucide-react";
import { CyberpunkButton, CyberpunkCard, CyberpunkBadge } from "@/components/ui/cyberpunk";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function PracticePage() {
  const { trackId, chapterId } = useParams<{ trackId: TrackId; chapterId: string }>();
  const track = trackId ? getTrack(trackId) : undefined;
  const chapter = trackId && chapterId ? getChapter(trackId, chapterId) : undefined;
  const [activeIdx, setActiveIdx] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [hintsShown, setHintsShown] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  const exercises = chapter?.exercises ?? [];
  const ex: Exercise | undefined = exercises[activeIdx];

  const initial = useMemo(
    () => (showSolution ? ex?.solution : ex?.starterCode) ?? {},
    [ex, showSolution],
  );

  const goToExercise = (i: number) => {
    setActiveIdx(i);
    setShowSolution(false);
    setHintsShown(0);
    setResetKey((k) => k + 1);
  };

  if (!track || !chapter) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-8">
        <div className="text-center space-y-4">
          <p className="text-foreground/40 font-mono tracking-[0.3em] uppercase">ERROR_404: MODULE_NOT_FOUND</p>
          <Link to="/learn">
            <CyberpunkButton variant="outline">RETURN_TO_BASE</CyberpunkButton>
          </Link>
        </div>
      </div>
    );
  }

  if (exercises.length === 0) {
    return (
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 p-8">
        <div className="container max-w-3xl pt-12">
          <Link to={`/learn/${trackId}/${chapterId}`} className="group flex items-center gap-2 mb-12">
            <div className="w-6 h-6 border border-foreground/20 flex items-center justify-center group-hover:border-primary transition-colors">
              <ArrowLeft className="h-3 w-3 group-hover:text-primary transition-colors" />
            </div>
            <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">ABORT_PRACTICE</span>
          </Link>
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">Practice — {chapter.title}</h1>
          <p className="text-foreground/40 font-mono">NO_EXERCISES_DETECTED_IN_THIS_NODE</p>
        </div>
      </div>
    );
  }

  const completedCount = Object.values(completed).filter(Boolean).length;
  const progressPct = (completedCount / exercises.length) * 100;

  const bgAccents = (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <motion.div
        animate={{ opacity: [0.03, 0.05, 0.03] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-primary/5 blur-[150px] rounded-full"
      />
      <motion.div
        animate={{ opacity: [0.02, 0.04, 0.02] }}
        transition={{ duration: 15, repeat: Infinity, delay: 2 }}
        className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-crimson/5 blur-[120px] rounded-full"
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 pb-24 relative overflow-hidden font-outfit">
      {bgAccents}

      {/* TOP NAVIGATION / STATUS BAR */}
      <div className="relative z-50 border-b border-foreground/10 bg-black/50 backdrop-blur-md">
        <div className="container h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to={`/learn/${trackId}/${chapterId}`} className="group flex items-center gap-2">
              <div className="w-6 h-6 border border-foreground/20 flex items-center justify-center group-hover:border-primary transition-colors">
                <ArrowLeft className="h-3 w-3 group-hover:text-primary transition-colors" />
              </div>
              <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">ABORT_PRACTICE</span>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-[9px] font-black tracking-[0.2em] text-foreground/20 uppercase">MODULE_SYNC_PROGRESS</span>
              <div className="flex gap-1 mt-1">
                {[...Array(exercises.length)].map((_, i) => (
                  <div key={i} className={cn("h-1 w-4", completed[exercises[i].id] ? "bg-green-500" : i === activeIdx ? "bg-primary animate-pulse" : "bg-foreground/5")} />
                ))}
              </div>
            </div>
            <div className="h-8 w-[1px] bg-foreground/10 mx-2 hidden md:block" />
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase">{Math.round(progressPct)}%_COMPLETED</span>
              <div className="w-2 h-2 bg-primary animate-pulse rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="container relative z-10 pt-12 max-w-7xl">
        <header className="mb-12 border-b border-foreground/10 pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-8 bg-primary" />
                <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase">PRACTICE_SIMULATION</span>
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-2">
                  {chapter.title}
                </h1>
                <p className="text-[10px] font-mono tracking-[0.2em] text-foreground/30 uppercase">
                  {track.title} · COMPONENT_LAYER: {chapter.number.toString().padStart(2, '0')}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-4 border border-foreground/10 bg-foreground/[0.02] flex flex-col items-center gap-1 min-w-[120px]">
                <Activity className="h-3 w-3 text-foreground/20" />
                <span className="text-[8px] font-black tracking-widest text-foreground/40 uppercase">LOAD_STATE</span>
                <span className="text-[12px] font-black text-primary font-mono">OPTIMAL</span>
              </div>
              <div className="p-4 border border-foreground/10 bg-foreground/[0.02] flex flex-col items-center gap-1 min-w-[120px]">
                <Shield className="h-3 w-3 text-foreground/20" />
                <span className="text-[8px] font-black tracking-widest text-foreground/40 uppercase">FIREWALL</span>
                <span className="text-[12px] font-black text-green-500 font-mono">ACTIVE</span>
              </div>
            </div>
          </div>
        </header>

        {/* EXERCISE SELECTOR GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 mb-12">
          {exercises.map((e, i) => (
            <button
              key={e.id}
              onClick={() => goToExercise(i)}
              className={cn(
                "p-4 border transition-all duration-300 flex flex-col items-center gap-2 font-mono relative group",
                i === activeIdx
                  ? "bg-primary border-primary text-black shadow-[0_0_20px_rgba(0,212,255,0.2)]"
                  : "bg-foreground/[0.02] border-foreground/10 text-foreground/60 hover:border-foreground/30 hover:text-foreground"
              )}
            >
              {completed[e.id] && (
                <div className={cn(
                  "absolute -top-1 -right-1 w-3 h-3 flex items-center justify-center",
                  i === activeIdx ? "bg-black text-primary" : "bg-green-500 text-black"
                )}>
                  <CheckCircle2 className="h-2 w-2" />
                </div>
              )}
              <span className="text-[8px] font-black tracking-tighter uppercase opacity-40">EX_{i + 1}</span>
              <span className="text-[14px] font-black">{(i + 1).toString().padStart(2, '0')}</span>
            </button>
          ))}
        </div>

        {ex && (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* EXERCISE INFO PANEL */}
            <div className="lg:col-span-4 space-y-6">
              <CyberpunkCard className="h-auto p-0" hover={false}>
                <div className="p-6 border-b border-foreground/10 bg-foreground/[0.02]">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <Terminal className="h-4 w-4 text-primary" />
                      <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase">TASK_MANIFEST</span>
                    </div>
                    <CyberpunkBadge variant="status">LVL_{ex.difficulty}</CyberpunkBadge>
                  </div>
                  <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">{ex.title}</h2>
                  <p className="text-sm text-foreground/60 leading-relaxed font-mono">
                    {ex.description}
                  </p>
                </div>

                <div className="p-6 space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Layers className="h-3 w-3 text-foreground/20" />
                      <span className="text-[9px] font-black tracking-[0.3em] text-foreground/30 uppercase">REQUIREMENTS_SCHEMA</span>
                    </div>
                    <ul className="space-y-3">
                      {ex.requirements.map((r, i) => (
                        <li key={i} className="flex items-start gap-3 text-[11px] font-mono text-foreground/80 group">
                          <ChevronRight className="h-3 w-3 mt-0.5 text-primary group-hover:translate-x-1 transition-transform" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <AnimatePresence>
                    {hintsShown > 0 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="space-y-4 pt-6 border-t border-foreground/5"
                      >
                        <div className="flex items-center gap-2">
                          <Lightbulb className="h-3 w-3 text-amber-500" />
                          <span className="text-[9px] font-black tracking-[0.3em] text-amber-500 uppercase">HINTS_DECRYPTED</span>
                        </div>
                        <div className="space-y-3">
                          {ex.hints.slice(0, hintsShown).map((h, i) => (
                            <div key={i} className="p-3 bg-amber-500/5 border-l-2 border-amber-500 text-[11px] font-mono leading-relaxed italic text-amber-200/80">
                              {h}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {showSolution && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="space-y-4 pt-6 border-t border-foreground/5"
                      >
                        <div className="flex items-center gap-2">
                          <Zap className="h-3 w-3 text-green-500" />
                          <span className="text-[9px] font-black tracking-[0.3em] text-green-500 uppercase">SOLUTION_ANALYSIS</span>
                        </div>
                        <p className="text-[11px] font-mono leading-relaxed text-green-200/60 bg-green-500/5 p-3 border-l-2 border-green-500">
                          {ex.solutionExplanation}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="p-6 bg-foreground/[0.02] border-t border-foreground/10 grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] font-black tracking-widest text-foreground/20 uppercase">TARGET_STABILITY</span>
                    <span className="text-xs font-black font-mono text-primary">ENCRYPTED</span>
                  </div>
                  <div className="flex flex-col gap-1 text-right">
                    <span className="text-[8px] font-black tracking-widest text-foreground/20 uppercase">DATA_VECTOR</span>
                    <span className="text-xs font-black font-mono text-primary">0x{Math.random().toString(16).substring(2, 6).toUpperCase()}</span>
                  </div>
                </div>
              </CyberpunkCard>

              {/* ACTION PANEL */}
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <CyberpunkButton
                    variant="outline"
                    onClick={() => setHintsShown((n) => Math.min(n + 1, ex.hints.length))}
                    disabled={hintsShown >= ex.hints.length}
                    className="h-14"
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-[10px] font-black tracking-wider uppercase">DECRYPT_HINT</span>
                      <span className="text-[8px] font-mono opacity-50">({hintsShown}/{ex.hints.length})</span>
                    </div>
                  </CyberpunkButton>

                  {!showSolution ? (
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <CyberpunkButton variant="outline" className="h-14 border-amber-500/30 text-amber-500 hover:bg-amber-500/10">
                          <div className="flex flex-col items-center gap-1">
                            <span className="text-[10px] font-black tracking-wider uppercase">PEEK_SOLUTION</span>
                            <span className="text-[8px] font-mono opacity-50 text-amber-500/60">INTEGRITY_COST</span>
                          </div>
                        </CyberpunkButton>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="bg-background border border-foreground/10 text-foreground font-outfit">
                        <AlertDialogHeader>
                          <AlertDialogTitle className="text-2xl font-black uppercase tracking-tighter">INITIATE_DECRYPTION?</AlertDialogTitle>
                          <AlertDialogDescription className="text-foreground/40 font-mono text-xs">
                            WRESTLING WITH A PROBLEM IS WHERE REAL LEARNING HAPPENS. TRY AT LEAST ONE MORE HINT BEFORE PEEKING — BUT NO JUDGMENT IF YOU'RE STUCK.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter className="mt-8">
                          <AlertDialogCancel className="bg-transparent border border-foreground/10 text-foreground hover:bg-foreground/5 hover:text-foreground uppercase font-black text-[10px] tracking-widest h-12">CANCEL</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => { setShowSolution(true); setResetKey((k) => k + 1); }}
                            className="bg-primary text-black hover:bg-primary/80 uppercase font-black text-[10px] tracking-widest h-12"
                          >
                            REVEAL_DATA
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  ) : (
                    <CyberpunkButton
                      variant="outline"
                      onClick={() => { setShowSolution(false); setResetKey((k) => k + 1); }}
                      className="h-14 border-green-500/30 text-green-500 hover:bg-green-500/10"
                    >
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-[10px] font-black tracking-wider uppercase">HIDE_SOLUTION</span>
                        <span className="text-[8px] font-mono opacity-50 text-green-500/60">RETURN_TO_PROTO</span>
                      </div>
                    </CyberpunkButton>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <CyberpunkButton
                    variant={completed[ex.id] ? "outline" : "neon"}
                    onClick={() => setCompleted((c) => ({ ...c, [ex.id]: !c[ex.id] }))}
                    className={cn(
                      "h-16 w-full group overflow-hidden relative",
                      completed[ex.id] && "border-green-500 text-green-500 hover:bg-green-500 hover:text-foreground"
                    )}
                  >
                    <div className="flex items-center justify-center gap-3 relative z-10">
                      {completed[ex.id] ? (
                        <>
                          <CheckCircle2 className="h-5 w-5" />
                          <span className="text-sm font-black tracking-[0.2em] uppercase">VALIDATION_COMPLETE</span>
                        </>
                      ) : (
                        <>
                          <Shield className="h-5 w-5" />
                          <span className="text-sm font-black tracking-[0.2em] uppercase">MARK_AS_RESOLVED</span>
                        </>
                      )}
                    </div>
                    {!completed[ex.id] && (
                      <motion.div
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] pointer-events-none"
                      />
                    )}
                  </CyberpunkButton>

                  <CyberpunkButton
                    variant="outline"
                    onClick={() => { setShowSolution(false); setHintsShown(0); setResetKey((k) => k + 1); }}
                    className="h-12 border-foreground/5 text-foreground/30 hover:text-foreground"
                  >
                    <div className="flex items-center gap-2">
                      <RotateCcw className="h-3 w-3" />
                      <span className="text-[10px] font-black tracking-widest uppercase">RESET_BUFFER</span>
                    </div>
                  </CyberpunkButton>
                </div>

                {completed[ex.id] && activeIdx < exercises.length - 1 && (
                  <button
                    onClick={() => goToExercise(activeIdx + 1)}
                    className="w-full py-4 text-primary text-[10px] font-black tracking-[0.4em] uppercase hover:tracking-[0.6em] transition-all flex items-center justify-center gap-4 group"
                  >
                    <div className="h-[1px] flex-1 bg-primary/20" />
                    <span>NEXT_SIMULATION_NODE</span>
                    <ArrowLeft className="h-3 w-3 rotate-180 group-hover:translate-x-2 transition-transform" />
                    <div className="h-[1px] flex-1 bg-primary/20" />
                  </button>
                )}
              </div>
            </div>

            {/* COMPILER PANEL */}
            <div className="lg:col-span-8">
              <CyberpunkCard className="h-auto p-0 border-foreground/10 overflow-hidden" hover={false}>
                <div className="flex items-center justify-between px-6 py-4 bg-foreground/[0.02] border-b border-foreground/10">
                  <div className="flex items-center gap-3">
                    <Code className="h-4 w-4 text-primary" />
                    <span className="text-[10px] font-black tracking-[0.3em] text-foreground/60 uppercase">NEURAL_COMPILER_UPLINK</span>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-[8px] font-black tracking-widest text-green-500/60 uppercase font-mono">RUNTIME_READY</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <MiniCompiler
                    key={`${ex.id}-${resetKey}-${showSolution}`}
                    initial={initial}
                    height={500}
                  />
                </div>
                <div className="px-6 py-3 bg-black/40 border-t border-foreground/5 flex justify-between items-center">
                  <div className="flex items-center gap-4 font-mono text-[8px] tracking-widest text-foreground/20 uppercase">
                    <span>KERNEL: v4.2.1-CORE</span>
                    <span>|</span>
                    <span>BUFFER: 0x{Math.random().toString(16).substring(2, 10).toUpperCase()}</span>
                  </div>
                  <div className="text-[8px] font-mono text-foreground/10 uppercase">
                    SYSTEM_CLOCK: {new Date().toLocaleTimeString()}
                  </div>
                </div>
              </CyberpunkCard>
            </div>
          </div>
        )}
      </div>

      {/* FOOTER METADATA */}
      <footer className="container mt-32 flex flex-col sm:flex-row justify-between items-center gap-8 opacity-20 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-foreground flex items-center justify-center">
            <span className="text-black font-black text-xs">CM</span>
          </div>
          <span className="text-[10px] font-black tracking-[0.5em] uppercase">SYSTEM_PRACTICE_ARCHIVE</span>
        </div>
        <div className="flex gap-12 text-[9px] font-black tracking-[0.3em] uppercase">
          <span>STABILITY: OPTIMAL</span>
          <span>ENCRYPTION: RSA-4096</span>
          <span>NODES_RESOLVED: {completedCount}/{exercises.length}</span>
        </div>
      </footer>
    </div>
  );
}
