import { Link, Navigate, useParams, useNavigate } from "react-router-dom";
import { getChapter, getTrack, getNextChapter, getPrevChapter } from "@/lib/curriculum";
import { useProgress } from "@/hooks/useProgress";
import { getChapterProgress, isChapterUnlocked, markChapterComplete } from "@/lib/progress";
import type { TrackId } from "@/lib/curriculum/types";
import { CyberpunkButton } from "@/components/ui/cyberpunk";
import { 
  ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, ChevronLeft, Clock, 
  Dumbbell, Sparkles, Terminal, Activity, Shield, 
  Zap, Cpu, Globe, Lock, Unlock, Hash, Layers
} from "lucide-react";
import { DifficultyBadge, XPBadge } from "@/components/ui/badges";
import { SectionView } from "@/components/lesson/LessonContent";
import { useEffect, useState, useRef } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { useI18n } from "@/hooks/useI18n";

// Cyberpunk Brutalist Typography:
// Headings: 'Outfit', sans-serif;
// Mono/Labels: 'JetBrains Mono', monospace;
// Logo/Decorative: 'Rock Salt', cursive;

const Lesson = () => {
  const { trackId, chapterId } = useParams<{ trackId: TrackId; chapterId: string }>();
  const navigate = useNavigate();
  const track = trackId ? getTrack(trackId) : undefined;
  const chapter = trackId && chapterId ? getChapter(trackId, chapterId) : undefined;
  const { progress, update, refresh } = useProgress();
  const [completed, setCompleted] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [isLeftSidebarExpanded, setIsLeftSidebarExpanded] = useState(true);
  const mainRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const { t, lang } = useI18n();
  const isBn = lang === "bn";

  useEffect(() => {
    window.scrollTo(0, 0);
    setCompleted(false);
    setScrollPct(0);
  }, [chapterId, trackId]);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const pct = total > 0 ? (h.scrollTop / total) * 100 : 0;
      setScrollPct(pct);
    };
    window.addEventListener("scroll", onScroll);
    onScroll(); // initial
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!track || !chapter || !trackId || !chapterId) return <Navigate to="/learn" replace />;
  if (!progress) return null;
  if (!isChapterUnlocked(progress, trackId, chapterId)) return <Navigate to={`/learn/${trackId}`} replace />;

  const cp = getChapterProgress(progress, trackId, chapterId);
  const prev = getPrevChapter(trackId, chapterId);
  const next = getNextChapter(trackId, chapterId);
  const canComplete = scrollPct >= 80 || cp.status === "completed";
  const isDone = cp.status === "completed" || completed;

  const handleComplete = () => {
    update((p) => markChapterComplete(p, trackId, chapterId, 0));
    setCompleted(true);
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    refresh();
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 pb-24 relative font-['Outfit']">
      {/* SCANNER BAR */}
      <motion.div 
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left shadow-[0_0_15px_rgba(0,163,255,0.5)]"
      />

      {/* BACKGROUND ARCHITECTURE */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--foreground)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_90%)]" />
        <div className="absolute inset-0 bg-background [mask-image:linear-gradient(to_bottom,transparent,black)] opacity-50" />
      </div>

      <div className="mx-auto w-full max-w-[1800px] px-4 lg:px-8 pt-12 relative z-10 min-w-0">
        <div className={cn(
          "grid gap-16 transition-all duration-300",
          isLeftSidebarExpanded ? "lg:grid-cols-[280px_1fr_260px]" : "lg:grid-cols-[60px_1fr_260px]"
        )}>
          {/* LEFT SIDEBAR: ARCHIVE NAVIGATION */}
          <aside className="hidden lg:block relative">
            <div className="sticky top-24 space-y-8">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-1 bg-primary" />
                    {isLeftSidebarExpanded && (
                      <span className="text-[10px] font-black tracking-[0.4em] uppercase text-foreground-40">{t("system.segmentIndex")}</span>
                    )}
                  </div>
                  <button 
                    onClick={() => setIsLeftSidebarExpanded(!isLeftSidebarExpanded)}
                    className="p-1 hover:bg-foreground/10 text-foreground-40 hover:text-foreground transition-colors flex-shrink-0"
                  >
                    {isLeftSidebarExpanded ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  </button>
                </div>
                
                <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-foreground/10 hover:scrollbar-thumb-primary/40">
                  {track.chapters.map((c) => {
                    const cps = getChapterProgress(progress, trackId, c.id);
                    const unlocked = isChapterUnlocked(progress, trackId, c.id);
                    const isCurrent = c.id === chapterId;
                    
                    return (
                      <Link 
                        key={c.id} 
                        to={unlocked ? `/learn/${trackId}/${c.id}` : "#"}
                        className={cn(
                          "group block relative transition-all border-l-2",
                          isLeftSidebarExpanded ? "p-4" : "p-3 py-4 flex justify-center",
                          isCurrent 
                            ? "bg-foreground text-background border-primary shadow-[0_0_20px_rgba(0,163,255,0.1)]" 
                            : unlocked 
                              ? "border-border bg-foreground/[0.02] hover:bg-foreground/[0.05] hover:border-foreground/40" 
                              : "border-transparent opacity-20 cursor-not-allowed"
                        )}
                        title={!isLeftSidebarExpanded ? c.title : undefined}
                      >
                        {isLeftSidebarExpanded ? (
                          <>
                            <div className="flex items-center justify-between mb-2">
                              <span className={cn(
                                "text-[8px] font-black tracking-[0.2em] uppercase",
                                isCurrent ? "text-background/40" : "text-foreground-20"
                              )}>
                                SEC_{c.number.toString().padStart(2, '0')}
                              </span>
                              {cps.status === "completed" && <CheckCircle2 className={cn("h-3 w-3", isCurrent ? "text-background" : "text-primary")} />}
                            </div>
                            <span className="text-[11px] font-black uppercase tracking-[0.1em] block leading-tight truncate">
                              {isBn && c.titleBn ? c.titleBn : c.title}
                            </span>
                          </>
                        ) : (
                          <div className="flex flex-col items-center gap-2">
                            <span className={cn(
                              "text-[10px] font-black tracking-widest",
                              isCurrent ? "text-background" : "text-foreground-40"
                            )}>
                              {c.number.toString().padStart(2, '0')}
                            </span>
                            {cps.status === "completed" && <CheckCircle2 className={cn("h-3 w-3", isCurrent ? "text-background" : "text-primary")} />}
                          </div>
                        )}
                        
                        {isCurrent && (
                          <motion.div 
                            layoutId="active-indicator"
                            className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rotate-45"
                          />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {isLeftSidebarExpanded && (
                <div className="p-6 bg-crimson/5 border border-crimson/10 space-y-4">
                  <div className="flex items-center gap-2 text-crimson">
                    <Shield className="h-4 w-4" />
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase">{t("system.securityProtocol")}</span>
                  </div>
                  <p className="text-[10px] font-medium leading-relaxed text-foreground-40 uppercase">
                    SESSION_ENCRYPTED. DATA_INTEGRITY_VERIFIED BY CODEMASTERY_CORE.
                  </p>
                </div>
              )}
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <main className="min-w-0 overflow-x-hidden">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-16"
            >
              {/* Mobile Chapter Navigation */}
              <div className="lg:hidden mb-8">
                <label className="text-[8px] font-black tracking-[0.3em] text-foreground/40 uppercase block mb-2">{t("system.segmentIndex")}</label>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4">
                  {track.chapters.map((c) => {
                    const unlocked = isChapterUnlocked(progress, trackId, c.id);
                    const isCurrent = c.id === chapterId;
                    return (
                      <Link
                        key={c.id}
                        to={unlocked ? `/learn/${trackId}/${c.id}` : "#"}
                        className={cn(
                          "flex-shrink-0 px-3 py-2 text-[10px] font-black uppercase tracking-wider border transition-colors whitespace-nowrap",
                          isCurrent
                            ? "bg-primary text-primary-foreground border-primary"
                            : unlocked
                              ? "border-foreground/10 text-foreground/60 hover:border-foreground/30"
                              : "border-foreground/5 text-foreground/20 cursor-not-allowed opacity-40"
                        )}
                      >
                        {c.number}. {isBn && c.titleBn ? c.titleBn : c.title}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* NODE HEADER */}
              <header className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-primary flex items-center justify-center border border-foreground/20">
                      <Cpu className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div className="w-8 h-8 bg-background flex items-center justify-center border border-border">
                      <Globe className="h-4 w-4 text-foreground-40" />
                    </div>
                  </div>
                  <div className="h-[2px] flex-1 bg-foreground/5" />
                  <span className="text-[10px] font-black tracking-[0.5em] text-foreground-20 uppercase">{t("system.dataStream")}</span>
                </div>

                <div className="space-y-4">
                  <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-6 text-foreground">
                    {(isBn && chapter.titleBn ? chapter.titleBn : chapter.title).split(' ').map((word, i) => (
                      <span key={i} className={cn("block break-words", i % 2 === 1 && "text-primary")}>
                        {word}
                      </span>
                    ))}
                  </h1>
                  <p className="text-xl md:text-2xl font-bold tracking-tight text-foreground-40 uppercase max-w-3xl leading-tight">
                    {isBn && chapter.subtitleBn ? chapter.subtitleBn : chapter.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-6 py-8 border-y-2 border-border">
                  <div className="flex items-center gap-3 pr-6 border-r border-border">
                    <div className="p-2 bg-foreground/5 border border-border">
                      <Layers className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-[8px] font-black tracking-[0.2em] text-foreground-20 uppercase">{t("system.difficulty")}</p>
                      <p className="text-xs font-black tracking-widest uppercase">
                        {isBn ? t(`difficulty.${chapter.difficulty}`) : chapter.difficulty}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pr-6 border-r border-border">
                    <div className="p-2 bg-foreground/5 border border-border">
                      <Zap className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-[8px] font-black tracking-[0.2em] text-foreground-20 uppercase">{t("system.reward")}</p>
                      <p className="text-xs font-black tracking-widest uppercase">{chapter.xpReward} XP</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pr-6 border-r border-border">
                    <div className="p-2 bg-foreground/5 border border-border">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-[8px] font-black tracking-[0.2em] text-foreground-20 uppercase">{t("system.estLoad")}</p>
                      <p className="text-xs font-black tracking-widest uppercase">{chapter.estimatedMinutes} MIN</p>
                    </div>
                  </div>
                  
                  <div className="ml-auto">
                    <Link to={`/practice/${trackId}/${chapterId}`}>
                      <CyberpunkButton variant="outline" size="sm" className="bg-primary/5 border-primary/20 hover:bg-primary/10">
                        <Terminal className="h-4 w-4 mr-2" /> {t("system.initSandbox")}
                      </CyberpunkButton>
                    </Link>
                  </div>
                </div>
              </header>

              {/* OBJECTIVES GRID */}
              <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
                {(isBn && chapter.learningObjectivesBn ? chapter.learningObjectivesBn : chapter.learningObjectives).map((o, i) => (
                  <div key={i} className="p-8 bg-background hover:bg-foreground/[0.02] transition-colors group">
                    <div className="flex items-start gap-4">
                      <span className="text-[10px] font-black tracking-widest text-primary bg-primary/5 border border-primary/20 px-2 py-0.5">
                        OBJ_{String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-[13px] font-black uppercase tracking-wider leading-relaxed text-foreground-60 group-hover:text-foreground transition-colors">
                        {o}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-24 py-16">
                {chapter.sections.map((s, i) => (
                  <SectionView key={s.id ?? `section-${i}`} section={s} trackId={trackId as TrackId} />
                ))}
              </div>

              {/* CHEAT SHEET / BUFFER */}
              {chapter.cheatSheet && chapter.cheatSheet.length > 0 && (
                <div className="border-2 border-border bg-background relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[linear-gradient(90deg,transparent,hsl(var(--primary)/0.3),transparent)]" />
                  <div className="p-10 space-y-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-black uppercase tracking-[0.2em] flex items-center gap-4 text-foreground">
                        <Hash className="h-6 w-6 text-primary" />
                        {t("system.commandBuffer")}
                      </h3>
                      <span className="text-[10px] font-black tracking-[0.4em] text-foreground-20 uppercase">{t("system.readOnly")}</span>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {chapter.cheatSheet.map((c, i) => (
                        <div key={i} className="p-5 border border-border bg-foreground/[0.01] space-y-3 hover:border-primary/30 transition-all group">
                          <p className="text-[9px] font-black tracking-[0.2em] text-foreground-20 uppercase group-hover:text-primary/60 transition-colors">
                            {isBn && c.labelBn ? c.labelBn : c.label}
                          </p>
                          <code className="text-xs font-black text-primary tracking-widest block bg-primary/5 p-2 border-l-2 border-primary">
                            {isBn && c.valueBn ? c.valueBn : c.value}
                          </code>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* FINALIZATION ZONE */}
              <div className="relative p-1 bg-border overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--foreground)/0.05)_50%,transparent_75%)] bg-[size:250%_250%] animate-[shimmer_5s_infinite]" />
                
                <div className="relative bg-background p-12 border border-border text-center space-y-10">
                  <AnimatePresence mode="wait">
                    {isDone ? (
                      <motion.div 
                        key="done"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="space-y-8"
                      >
                        <div className="relative inline-block">
                          <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full" />
                          <div className="relative w-24 h-24 border-4 border-green-500 flex items-center justify-center mx-auto">
                            <CheckCircle2 className="h-12 w-12 text-green-500" />
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="text-4xl font-black uppercase tracking-tighter text-foreground">{t("system.syncSuccess")}</h3>
                          <p className="text-[10px] font-black tracking-[0.5em] text-foreground-40 uppercase">{t("system.packetsCaptured")}</p>
                        </div>

                        <div className="flex flex-wrap gap-4 justify-center pt-8">
                          <CyberpunkButton 
                            variant="neon" 
                            className="px-10"
                            onClick={() => navigate(`/quiz/${trackId}/${chapterId}`)}
                          >
                            {t("system.initQuiz")} <ArrowRight className="h-5 w-5 ml-2" />
                          </CyberpunkButton>
                          {next && (
                            <CyberpunkButton 
                              variant="brutalist" 
                              className="px-10"
                              onClick={() => navigate(`/learn/${trackId}/${next.id}`)}
                            >
                              {t("system.nextPhase")}
                            </CyberpunkButton>
                          )}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="pending"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-8"
                      >
                        <div className="space-y-4">
                          <h3 className="text-4xl font-black uppercase tracking-tighter text-foreground">{t("system.syncProgress")}</h3>
                          <p className="text-[10px] font-black tracking-[0.5em] text-foreground-40 uppercase">
                            {canComplete 
                              ? t("system.readyHandshake")
                              : `${t("system.insufficientData")}: ${Math.round(scrollPct)}%`}
                          </p>
                        </div>

                        <div className="flex justify-center">
                          <CyberpunkButton 
                            onClick={handleComplete} 
                            disabled={!canComplete}
                            variant={canComplete ? "neon" : "outline"}
                            className={cn(
                              "px-12 py-6 text-lg",
                              !canComplete && "opacity-20 grayscale cursor-not-allowed"
                            )}
                          >
                            {canComplete ? t("system.finalizeSync") : t("system.syncLocked")}
                          </CyberpunkButton>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* NAVIGATION BUFFER */}
              <div className="flex flex-col sm:flex-row justify-between gap-6 pt-16 border-t-4 border-foreground/5">
                {prev ? (
                  <Link to={`/learn/${trackId}/${prev.id}`} className="group">
                    <div className="text-[9px] font-black tracking-[0.2em] text-foreground-20 uppercase mb-2 group-hover:text-foreground-40 transition-colors">{t("system.prevNode")}</div>
                    <CyberpunkButton variant="outline" className="w-full sm:w-auto px-8 border-border group-hover:border-foreground/40">
                      <ArrowLeft className="h-4 w-4 mr-3" /> SEC_{prev.number.toString().padStart(2, '0')}
                    </CyberpunkButton>
                  </Link>
                ) : <div />}
                
                {next ? (
                  <Link to={`/learn/${trackId}/${next.id}`} className="group text-right">
                    <div className="text-[9px] font-black tracking-[0.2em] text-foreground-20 uppercase mb-2 group-hover:text-foreground-40 transition-colors">{t("system.nextNode")}</div>
                    <CyberpunkButton variant="outline" className="w-full sm:w-auto px-8 border-border group-hover:border-foreground/40">
                      SEC_{next.number.toString().padStart(2, '0')} <ArrowRight className="h-4 w-4 ml-3" />
                    </CyberpunkButton>
                  </Link>
                ) : <div />}
              </div>
            </motion.div>
          </main>

          {/* RIGHT SIDEBAR: NODE ANALYSIS */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-12">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-4 w-1 bg-primary" />
                  <span className="text-[10px] font-black tracking-[0.4em] uppercase text-foreground-40">{t("system.nodeMap")}</span>
                </div>
                
                <ul className="space-y-6">
                  {chapter.sections.map((s) => (
                    <li key={s.id}>
                      <a 
                        href={`#${s.id}`} 
                        className="group flex items-start gap-4"
                      >
                        <div className="mt-1 w-2 h-2 border border-border group-hover:border-primary group-hover:bg-primary/20 transition-all" />
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-foreground-40 group-hover:text-primary transition-colors">
                            {isBn && s.titleBn ? s.titleBn : s.title}
                          </p>
                          <div className="h-[1px] w-0 bg-primary/30 group-hover:w-full transition-all duration-500 mt-1" />
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-4 w-1 bg-foreground/20" />
                  <span className="text-[10px] font-black tracking-[0.4em] uppercase text-foreground-20">{t("system.metrics")}</span>
                </div>
                
                <div className="p-6 bg-foreground/[0.02] border border-border/10 font-mono space-y-4">
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="text-[8px] text-foreground-20 uppercase">{t("system.coreVer")}</span>
                    <span className="text-[8px] text-foreground-60">3.9.2-{t("system.stable")}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="text-[8px] text-foreground-20 uppercase">{t("system.syncLatency")}</span>
                    <span className="text-[8px] text-green-500/60">12MS</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="text-[8px] text-foreground-20 uppercase">{t("system.dataParity")}</span>
                    <span className="text-[8px] text-foreground-60">{t("system.nominal")}</span>
                  </div>
                  <div className="pt-2">
                    <div className="flex justify-between text-[8px] text-foreground-20 uppercase mb-2">
                      <span>{t("system.bufferUsage")}</span>
                      <span>{Math.round(scrollPct)}%</span>
                    </div>
                    <div className="h-1 bg-foreground/5 overflow-hidden">
                      <div className="h-full bg-foreground/20 w-[60%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
