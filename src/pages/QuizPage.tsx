import { Link, Navigate, useParams } from "react-router-dom";
import { getChapter, getNextChapter, getTrack } from "@/lib/curriculum";
import { useProgress } from "@/hooks/useProgress";
import { recordQuizScore } from "@/lib/progress";
import type { TrackId } from "@/lib/curriculum/types";
import { useState } from "react";
import { QuizCard } from "@/components/quiz/QuizCard";
import { CyberpunkButton, CyberpunkBadge } from "@/components/ui/cyberpunk";
import { 
  ArrowRight, 
  RotateCcw, 
  Shield, 
  XCircle, 
  Terminal, 
  Activity, 
  Cpu, 
  Network,
  ArrowLeft,
  ChevronRight,
  FileText
} from "lucide-react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const QuizPage = () => {
  const { trackId, chapterId } = useParams<{ trackId: TrackId; chapterId: string }>();
  const track = trackId ? getTrack(trackId) : undefined;
  const chapter = trackId && chapterId ? getChapter(trackId, chapterId) : undefined;
  const { progress, update, refresh } = useProgress();
  const [idx, setIdx] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  if (!track || !chapter || !trackId || !chapterId) return <Navigate to="/learn" replace />;
  if (!progress) return null;

  const next = getNextChapter(trackId, chapterId);
  const total = chapter.quiz.questions.length;

  const handleAnswer = (c: boolean) => { if (c) setCorrect((x) => x + 1); };
  const handleNext = () => {
    if (idx + 1 >= total) {
      const score = Math.round((correct / total) * 100);
      const passed = score >= chapter.quiz.passingScore;
      update((p) => recordQuizScore(p, trackId, chapterId, score, passed));
      if (passed) confetti({ 
        particleCount: 150, 
        spread: 70, 
        origin: { y: 0.6 },
        colors: ['#00d4ff', '#ff006e', '#ffffff']
      });
      setDone(true);
      refresh();
    } else setIdx(idx + 1);
  };
  const retry = () => { setIdx(0); setCorrect(0); setDone(false); };

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

  if (done) {
    const score = Math.round((correct / total) * 100);
    const passed = score >= chapter.quiz.passingScore;
    return (
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 relative overflow-hidden flex flex-col font-outfit">
        {bgAccents}
        
        {/* STATUS BAR */}
        <div className="relative z-50 border-b border-foreground/10 bg-black/50 backdrop-blur-md">
          <div className="container h-16 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className={cn("w-2 h-2 animate-pulse rounded-full", passed ? "bg-primary" : "bg-crimson")} />
                <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-60">
                  {passed ? "VALIDATION_COMPLETE: PASSED" : "VALIDATION_COMPLETE: FAILED"}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-6 text-[10px] font-black tracking-[0.2em]">
              <span className="opacity-40 uppercase">REPORT_ID: 0x{Math.random().toString(16).substring(2, 10).toUpperCase()}</span>
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center py-24 px-4 relative z-10">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            className="w-full max-w-4xl grid md:grid-cols-12 gap-8 items-stretch"
          >
            {/* LEFT PANEL: STATUS MONITOR */}
            <div className="md:col-span-5 space-y-8">
              <div className="border border-foreground/10 bg-foreground/[0.02] p-8 space-y-8 relative overflow-hidden group">
                {/* SCANLINE */}
                <motion.div 
                  animate={{ top: ["-100%", "200%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-4 bg-foreground/5 blur-md pointer-events-none"
                />

                <div className="flex justify-center relative z-10">
                  <div className={cn(
                    "w-32 h-32 border flex items-center justify-center relative",
                    passed ? "border-primary bg-primary/10" : "border-crimson bg-crimson/10"
                  )}>
                    {passed ? (
                      <Shield className="h-16 w-16 text-primary" />
                    ) : (
                      <XCircle className="h-16 w-16 text-crimson" />
                    )}
                    <div className={cn(
                      "absolute -top-2 -left-2 w-4 h-4",
                      passed ? "bg-primary" : "bg-crimson"
                    )} />
                  </div>
                </div>

                <div className="text-center space-y-2 relative z-10">
                  <span className="text-[10px] font-black tracking-[0.3em] text-foreground/20 uppercase">SYNC_VERIFICATION</span>
                  <h1 className="text-5xl font-black uppercase tracking-tighter leading-none">
                    {passed ? "VALIDATED" : "REJECTED"}
                  </h1>
                </div>

                <div className="py-8 border-y border-foreground/5 relative z-10">
                  <div className="text-[10px] font-black tracking-[0.3em] text-foreground/20 mb-4 text-center">ACCURACY_COEFFICIENT</div>
                  <div className={cn(
                    "text-8xl font-black tracking-tighter leading-none text-center font-mono",
                    passed ? "text-primary" : "text-crimson"
                  )}>
                    {score}%
                  </div>
                  <div className="mt-8 flex justify-between text-[10px] font-black font-mono text-foreground/40 uppercase">
                    <span>{correct} PACKETS_OK</span>
                    <span>{total - correct} DROPPED</span>
                  </div>
                  <div className="mt-2 h-1 w-full bg-foreground/5 flex gap-0.5">
                    {[...Array(total)].map((_, i) => (
                      <div key={i} className={cn("flex-1", i < correct ? (passed ? "bg-primary" : "bg-crimson") : "bg-foreground/5")} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL: REPORT & ACTIONS */}
            <div className="md:col-span-7 space-y-8 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-[2px] w-8 bg-foreground/20" />
                  <span className="text-[11px] font-black tracking-[0.4em] text-foreground/40 uppercase">POST_VERIFICATION_REPORT</span>
                </div>
                <div>
                  <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">{chapter.title}</h2>
                  <p className="text-foreground/40 font-mono text-xs leading-relaxed uppercase tracking-wider">
                    {passed 
                      ? "SUBJECT_HAS_DEMONSTRATED_SUFFICIENT_NEURAL_STABILITY_AND_DATA_RETENTION. CHAPTER_NODE_RESOLVED. PROCEED_TO_NEXT_VANTAGE_POINT."
                      : "CRITICAL_DISCREPANCIES_DETECTED_IN_NEURAL_UPLINK. SUBJECT_FAILED_TO_MEET_MINIMUM_ACCURACY_THRESHOLD. RE_INITIALIZATION_RECOMMENDED."
                    }
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-foreground/5 bg-foreground/[0.01]">
                  <span className="text-[8px] font-black tracking-widest text-foreground/20 uppercase block mb-1">XP_DELTA</span>
                  <span className="text-xl font-black font-mono text-primary">+{passed ? chapter.quiz.passingScore * 10 : 0}</span>
                </div>
                <div className="p-4 border border-foreground/5 bg-foreground/[0.01]">
                  <span className="text-[8px] font-black tracking-widest text-foreground/20 uppercase block mb-1">LATENCY</span>
                  <span className="text-xl font-black font-mono text-foreground/40">12MS</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4">
                  <CyberpunkButton variant={passed ? "outline" : "crimson"} onClick={retry} className="h-16 flex-1 min-w-[200px]">
                    <div className="flex flex-col items-center">
                      <span className="text-[14px] font-black tracking-[0.2em]">RE_INITIALIZE</span>
                      <span className="text-[8px] font-mono opacity-50 uppercase">CLEAR_BUFFER_&_RETRY</span>
                    </div>
                  </CyberpunkButton>
                  
                  {passed && next && (
                    <Link to={`/learn/${trackId}/${next.id}`} className="flex-1 min-w-[200px]">
                      <CyberpunkButton variant="neon" className="h-16 w-full">
                        <div className="flex flex-col items-center">
                          <span className="text-[14px] font-black tracking-[0.2em]">NEXT_SEGMENT</span>
                          <span className="text-[8px] font-mono opacity-50 uppercase">PULL_REMOTE_DATA</span>
                        </div>
                      </CyberpunkButton>
                    </Link>
                  )}
                </div>
                
                <Link to={`/learn/${trackId}`}>
                  <CyberpunkButton variant="outline" className="w-full h-12 border-foreground/10 text-foreground/40 hover:text-foreground">
                    <span className="text-[10px] font-black tracking-[0.3em] uppercase">RETURN_TO_MANIFEST</span>
                  </CyberpunkButton>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* FOOTER METADATA */}
        <footer className="container py-12 flex justify-between items-center opacity-20 relative z-10 mt-auto">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-foreground flex items-center justify-center">
              <span className="text-black font-black text-[8px]">CM</span>
            </div>
            <span className="text-[8px] font-black tracking-[0.5em] uppercase">SYSTEM_VERIFIED_2026</span>
          </div>
          <div className="flex gap-8 text-[7px] font-black tracking-[0.3em] uppercase">
            <span>STABILITY: OPTIMAL</span>
            <span>NODES: {total}</span>
          </div>
        </footer>
      </div>
    );
  }

  const progressPct = ((idx + 1) / total) * 100;

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
              <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">ABORT_SYNC</span>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-[9px] font-black tracking-[0.2em] text-foreground/20 uppercase">UPLINK_VERIFICATION_PROGRESS</span>
              <div className="flex gap-1 mt-1">
                {[...Array(total)].map((_, i) => (
                  <div key={i} className={cn("h-1 w-3 transition-colors", i <= idx ? "bg-primary" : "bg-foreground/5")} />
                ))}
              </div>
            </div>
            <div className="h-8 w-[1px] bg-foreground/10 mx-2 hidden md:block" />
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase">{idx + 1}/{total}_PACKETS</span>
              <div className="w-2 h-2 bg-primary animate-pulse rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="container relative z-10 pt-16 max-w-5xl">
        <header className="mb-16 border-b border-foreground/10 pb-12">
          <div className="flex flex-col md:grid md:grid-cols-12 gap-12">
            <div className="md:col-span-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-primary" />
                <span className="text-[11px] font-black tracking-[0.4em] text-primary uppercase font-mono">NEURAL_VERIFICATION_NODE</span>
              </div>
              <div>
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-none">{chapter.title}</h1>
                <div className="flex flex-wrap gap-4 font-mono text-[10px] tracking-[0.2em] text-foreground/30 uppercase">
                  <span className="text-primary">ENCRYPTION: AES-256</span>
                  <span>|</span>
                  <span>SUBJECT: {progress.name.toUpperCase()}</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col justify-center gap-4">
              <div className="p-4 border border-foreground/10 bg-foreground/[0.02] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Activity className="h-4 w-4 text-primary" />
                  <span className="text-[9px] font-black tracking-widest text-foreground/40 uppercase">NEURAL_LOAD</span>
                </div>
                <span className="text-xs font-black font-mono text-primary">OPTIMAL</span>
              </div>
              <div className="p-4 border border-foreground/10 bg-foreground/[0.02] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Cpu className="h-4 w-4 text-foreground/20" />
                  <span className="text-[9px] font-black tracking-widest text-foreground/40 uppercase">CORE_SYNC</span>
                  </div>
                <span className="text-xs font-black font-mono text-green-500">99.8%</span>
              </div>
            </div>
          </div>
        </header>

        <div className="relative mb-24">
          {/* DECORATIVE LINE */}
          <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-foreground/5 hidden xl:block" />
          
          <AnimatePresence mode="wait">
            <QuizCard 
              key={idx}
              question={chapter.quiz.questions[idx]} 
              index={idx} 
              total={total} 
              onAnswer={handleAnswer} 
              onNext={handleNext} 
            />
          </AnimatePresence>
        </div>
        
        {/* FOOTER METADATA */}
        <footer className="mt-32 flex flex-col sm:flex-row justify-between items-center gap-8 opacity-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-foreground flex items-center justify-center">
              <span className="text-black font-black text-xs">CM</span>
            </div>
            <span className="text-[10px] font-black tracking-[0.5em] uppercase">SYSTEM_QUIZ_ARCHIVE</span>
          </div>
          <div className="flex gap-12 text-[9px] font-black tracking-[0.3em] uppercase">
            <span>STABILITY: OPTIMAL</span>
            <span>ENCRYPTION: RSA-4096</span>
            <span>SYNC: ACTIVE</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default QuizPage;
