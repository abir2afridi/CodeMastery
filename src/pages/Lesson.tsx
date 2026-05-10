import { Link, Navigate, useParams } from "react-router-dom";
import { getChapter, getTrack, getNextChapter, getPrevChapter } from "@/lib/curriculum";
import { useProgress } from "@/hooks/useProgress";
import { getChapterProgress, isChapterUnlocked, markChapterComplete } from "@/lib/progress";
import type { TrackId } from "@/lib/curriculum/types";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Clock, Dumbbell, Sparkles } from "lucide-react";
import { DifficultyBadge, XPBadge } from "@/components/ui/badges";
import { SectionView } from "@/components/lesson/LessonContent";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

const Lesson = () => {
  const { trackId, chapterId } = useParams<{ trackId: TrackId; chapterId: string }>();
  const track = trackId ? getTrack(trackId) : undefined;
  const chapter = trackId && chapterId ? getChapter(trackId, chapterId) : undefined;
  const { progress, update, refresh } = useProgress();
  const [completed, setCompleted] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setScrollPct(pct);
    };
    window.addEventListener("scroll", onScroll);
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
    <div className="container py-6 max-w-7xl">
      <div className="grid lg:grid-cols-[260px_1fr_240px] gap-6">
        {/* Left sidebar: chapter list */}
        <aside className="hidden lg:block">
          <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-thin pr-2">
            <Link to={`/learn/${trackId}`} className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 mb-3">
              <ArrowLeft className="h-3 w-3" /> {track.title} track
            </Link>
            <div className="space-y-1">
              {track.chapters.map((c) => {
                const cps = getChapterProgress(progress, trackId, c.id);
                const unlocked = isChapterUnlocked(progress, trackId, c.id);
                const isCurrent = c.id === chapterId;
                const inner = (
                  <div className={`text-xs rounded-md px-2 py-1.5 flex items-center gap-2 ${
                    isCurrent ? "bg-primary/10 text-primary border border-primary/30"
                      : unlocked ? "hover:bg-muted/50 text-foreground/80"
                      : "text-muted-foreground/50"
                  }`}>
                    <span className="font-mono opacity-60">{String(c.number).padStart(2, "0")}</span>
                    <span className="truncate flex-1">{c.title}</span>
                    {cps.status === "completed" && <CheckCircle2 className="h-3 w-3 text-success shrink-0" />}
                  </div>
                );
                return unlocked ? <Link key={c.id} to={`/learn/${trackId}/${c.id}`}>{inner}</Link> : <div key={c.id}>{inner}</div>;
              })}
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main>
          <div className="text-xs text-muted-foreground flex items-center gap-1 mb-3">
            <Link to="/learn" className="hover:text-foreground">Learn</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to={`/learn/${trackId}`} className="hover:text-foreground">{track.title}</Link>
            <ChevronRight className="h-3 w-3" />
            <span>Ch {chapter.number}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">{chapter.title}</h1>
          <p className="text-muted-foreground text-lg mb-4">{chapter.subtitle}</p>
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <DifficultyBadge difficulty={chapter.difficulty} />
            <XPBadge xp={chapter.xpReward} />
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground font-mono"><Clock className="h-3 w-3" /> ~{chapter.estimatedMinutes} min</span>
            <Button size="sm" variant="outline" asChild className="ml-auto">
              <Link to={`/practice/${trackId}/${chapterId}`}>
                <Dumbbell className="h-4 w-4 mr-1.5" /> Practice
              </Link>
            </Button>
          </div>

          <div className="glass-card p-5 mb-8">
            <p className="text-xs uppercase font-bold text-primary tracking-wider mb-3 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" /> Learning objectives
            </p>
            <ul className="space-y-1.5">
              {chapter.learningObjectives.map((o, i) => (
                <li key={i} className="text-sm flex gap-2"><span className="text-primary">→</span>{o}</li>
              ))}
            </ul>
          </div>

          {chapter.sections.map((s) => <SectionView key={s.id} section={s} />)}

          {/* Cheat sheet */}
          {chapter.cheatSheet && chapter.cheatSheet.length > 0 && (
            <div className="glass-card p-5 my-8">
              <h3 className="text-lg font-display font-bold mb-3">Quick Reference</h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {chapter.cheatSheet.map((c, i) => (
                  <div key={i} className="text-sm flex justify-between gap-2 p-2 rounded bg-muted/30">
                    <span className="text-muted-foreground">{c.label}</span>
                    <code className="font-mono text-primary">{c.value}</code>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Complete CTA */}
          <div className="glass-card p-6 my-8 text-center">
            {isDone ? (
              <>
                <CheckCircle2 className="h-10 w-10 text-success mx-auto mb-3" />
                <h3 className="text-xl font-display font-bold mb-2">Chapter complete!</h3>
                <p className="text-muted-foreground mb-4">Take the quiz to earn XP and unlock the next chapter.</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Button asChild><Link to={`/quiz/${trackId}/${chapterId}`}>Take quiz <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
                  <Button variant="outline" asChild><Link to={`/practice/${trackId}/${chapterId}`}><Dumbbell className="h-4 w-4 mr-1.5" /> Practice exercises</Link></Button>
                  {next && <Button variant="ghost" asChild><Link to={`/learn/${trackId}/${next.id}`}>Skip to next chapter</Link></Button>}
                </div>
              </>
            ) : (
              <>
                <h3 className="text-xl font-display font-bold mb-2">Finished reading?</h3>
                <p className="text-muted-foreground mb-4">{canComplete ? "Mark this chapter complete and head to the quiz." : `Scroll through the chapter (${Math.round(scrollPct)}%) to enable.`}</p>
                <Button onClick={handleComplete} disabled={!canComplete}>Mark chapter complete</Button>
              </>
            )}
          </div>

          {/* Prev/Next nav */}
          <div className="flex justify-between gap-3 mt-10">
            {prev ? (
              <Button variant="outline" asChild><Link to={`/learn/${trackId}/${prev.id}`}><ArrowLeft className="h-4 w-4 mr-1" /> Ch {prev.number}</Link></Button>
            ) : <span />}
            {next ? (
              <Button variant="outline" asChild><Link to={`/learn/${trackId}/${next.id}`}>Ch {next.number} <ArrowRight className="h-4 w-4 ml-1" /></Link></Button>
            ) : <span />}
          </div>
        </main>

        {/* Right sidebar: TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-20">
            <p className="text-xs uppercase font-mono text-muted-foreground mb-2">On this page</p>
            <ul className="space-y-1.5 text-sm border-l border-border pl-3">
              {chapter.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-muted-foreground hover:text-primary transition-colors block py-0.5">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Lesson;
