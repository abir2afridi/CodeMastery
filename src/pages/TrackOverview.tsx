import { Link, Navigate, useParams } from "react-router-dom";
import { getTrack } from "@/lib/curriculum";
import { useProgress } from "@/hooks/useProgress";
import { getChapterProgress, isChapterUnlocked, startTrackFor, saveProgress } from "@/lib/progress";
import { Lock, Check, Play, Circle, Clock, ArrowLeft } from "lucide-react";
import { DifficultyBadge, XPBadge } from "@/components/ui/badges";
import { Progress } from "@/components/ui/progress";
import type { TrackId } from "@/lib/curriculum/types";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const TrackOverview = () => {
  const { trackId } = useParams<{ trackId: TrackId }>();
  const track = trackId ? getTrack(trackId) : undefined;
  const { progress, refresh } = useProgress();

  useEffect(() => {
    if (progress && track && !progress.tracks[track.id].started) {
      startTrackFor(progress, track.id);
      saveProgress(progress);
      refresh();
    }
  }, [progress, track, refresh]);

  if (!track) return <Navigate to="/learn" replace />;
  if (!progress) return null;

  const tp = progress.tracks[track.id];
  const completed = Object.values(tp.chapters).filter((c) => c.status === "completed").length;
  const pct = (completed / track.chapters.length) * 100;

  // group by partLabel
  const groups = new Map<string, typeof track.chapters>();
  track.chapters.forEach((ch) => {
    const key = ch.partLabel ?? "Curriculum";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(ch);
  });

  return (
    <div className="container py-8 max-w-5xl">
      <Button asChild variant="ghost" size="sm" className="mb-4"><Link to="/learn"><ArrowLeft className="h-4 w-4 mr-1" /> Dashboard</Link></Button>
      <div className="glass-card p-6 md:p-8 mb-8">
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">{track.title} Mastery Track</h1>
        <p className="text-muted-foreground mb-4">{track.tagline}</p>
        <div className="flex flex-wrap gap-3 mb-4 text-xs font-mono text-muted-foreground">
          <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {track.estimatedHours} hours</span>
          <span>{track.totalChapters} chapters</span>
          <span>{completed} completed</span>
        </div>
        <Progress value={pct} className="h-2" />
      </div>

      {[...groups.entries()].map(([part, chapters]) => (
        <div key={part} className="mb-8">
          <h2 className="text-xs uppercase tracking-[0.3em] font-mono text-primary mb-3">{part}</h2>
          <div className="space-y-2">
            {chapters.map((ch) => {
              const cp = getChapterProgress(progress, track.id, ch.id);
              const unlocked = isChapterUnlocked(progress, track.id, ch.id);
              const StatusIcon = !unlocked ? Lock : cp.status === "completed" ? Check : cp.status === "in_progress" ? Play : Circle;
              const statusClr = !unlocked ? "text-muted-foreground" : cp.status === "completed" ? "text-success" : "text-primary";
              const inner = (
                <div className={`glass-card p-4 flex items-center gap-4 transition-all ${unlocked ? "hover:border-primary/50 hover:shadow-glow cursor-pointer" : "opacity-60"}`}>
                  <div className={`h-9 w-9 rounded-full bg-muted/40 flex items-center justify-center ${statusClr}`}>
                    <StatusIcon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-xs font-mono text-muted-foreground">Ch {ch.number}</span>
                      <h3 className="font-display font-semibold truncate">{ch.title}</h3>
                      {ch.sections.length === 1 && ch.sections[0].content.includes("being expanded chapter by chapter") && (
                        <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-muted text-muted-foreground border border-border">Preview</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{ch.subtitle}</p>
                  </div>
                  <div className="hidden md:flex flex-col items-end gap-1">
                    <DifficultyBadge difficulty={ch.difficulty} />
                    <XPBadge xp={ch.xpReward} />
                  </div>
                </div>
              );
              return unlocked ? (
                <Link key={ch.id} to={`/learn/${track.id}/${ch.id}`}>{inner}</Link>
              ) : (
                <div key={ch.id}>{inner}</div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackOverview;
