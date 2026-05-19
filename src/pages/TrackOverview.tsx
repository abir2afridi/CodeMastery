import { Link, Navigate, useParams } from "react-router-dom";
import { getTrack, enrichedTracks } from "@/lib/curriculum";
import { useProgress } from "@/hooks/useProgress";
import { getChapterProgress, isChapterUnlocked, startTrackFor, saveProgress } from "@/lib/progress";
import { Lock, Check, Play, ArrowLeft, Terminal, Shield, Zap, Activity, ChevronRight, Cpu, Database, ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import { DifficultyBadge, XPBadge } from "@/components/ui/badges";
import type { TrackId } from "@/lib/curriculum/types";
import { useEffect } from "react";
import { CyberpunkButton, CyberpunkCard } from "@/components/ui/cyberpunk";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useI18n } from "@/hooks/useI18n";
import { getTrackRelationshipSummary, learningPaths } from "@/lib/learning-taxonomy";

const TrackOverview = () => {
  const { trackId } = useParams<{ trackId: TrackId }>();
  const track = trackId ? getTrack(trackId) : undefined;
  const { progress, refresh } = useProgress();
  const { t, lang } = useI18n();
  const isBn = lang === "bn";

  useEffect(() => {
    if (progress && track && !progress.tracks[track.id]) {
      startTrackFor(progress, track.id);
      saveProgress(progress);
      refresh();
    }
  }, [progress, track, refresh]);

  if (!track) return <Navigate to="/learn" replace />;
  if (!progress) return null;

  const tp = progress.tracks[track.id];
  if (!tp) return null;

  const completed = Object.values(tp.chapters).filter((c) => c.status === "completed").length;
  const pct = (completed / track.chapters.length) * 100;

  // group by partLabel
  const groups = new Map<string, typeof track.chapters>();
  track.chapters.forEach((ch) => {
    const key = ch.partLabel ?? "CORE_CURRICULUM";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(ch);
  });

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 pb-24 relative font-inter">
      {/* BACKGROUND ACCENTS */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div
          className="absolute top-0 right-0 w-[50%] h-[50%] blur-[120px] rounded-full opacity-10"
          style={{ backgroundColor: track.brandColor }}
        />
      </div>

      <div className="container relative z-10 pt-8 max-w-7xl">
        {/* NAVIGATION & META */}
        <div className="flex items-center justify-between mb-12 border-b-2 border-foreground/10 pb-4">
          <Link to="/learn" className="group flex items-center gap-3">
            <ArrowLeft className="h-4 w-4 text-foreground-40 group-hover:text-primary transition-colors" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">RETURN_TO_BASE</span>
          </Link>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Database className="h-3 w-3" style={{ color: track.brandColor }} />
              <span className="text-[10px] font-black tracking-[0.3em] uppercase">Lesson: {track.id.toUpperCase()}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT COLUMN: TRACK INFO (HUD) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 h-fit space-y-12">
            <header className="relative space-y-8">
              {/* HUD Frame Decorations */}
              <div
                className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 z-20"
                style={{ borderColor: track.brandColor }}
              />
              <div
                className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 z-20 opacity-20"
                style={{ borderColor: track.brandColor }}
              />

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-[2px] w-8" style={{ backgroundColor: track.brandColor }} />
                  <span className="terminal-label" style={{ color: track.brandColor }}>TRACK_CLASSIFICATION</span>
                </div>

                <div className="flex items-center gap-6">
                  <div
                    className="w-20 h-20 p-4 border-2 flex items-center justify-center shrink-0"
                    style={{
                      borderColor: `${track.brandColor}33`,
                      backgroundColor: `${track.brandColor}1A`,
                      boxShadow: `0 0 20px ${track.glowColor}`
                    }}
                  >
                    <img src={track.icon} alt="" className="w-full h-full object-contain" />
                  </div>
                  <h1 className="text-7xl font-black uppercase tracking-tighter leading-[0.8] font-outfit">
                    {isBn && track.titleBn ? track.titleBn : track.title}
                  </h1>
                </div>

                <p className="text-sm font-black tracking-widest text-foreground-40 uppercase leading-relaxed max-w-md">
                  {isBn && track.taglineBn ? track.taglineBn : track.tagline}
                </p>
              </div>

              <div className="p-4 border-2 border-foreground/10 bg-foreground/[0.02] space-y-4 relative overflow-hidden group">
                {/* Scanning Line Effect */}
                <motion.div
                  className="absolute inset-x-0 h-[1px] z-30 opacity-30"
                  style={{ backgroundColor: track.brandColor }}
                  animate={{
                    top: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between items-end">
                    <span className="terminal-label">Learning Progress</span>
                    <span
                      className="text-3xl font-black font-outfit"
                      style={{ color: track.brandColor }}
                    >
                      {Math.round(pct)}%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-foreground/5 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      className="absolute inset-y-0 left-0"
                      style={{
                        backgroundColor: track.brandColor,
                        boxShadow: `0 0 15px ${track.glowColor}`
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 relative z-10">
                  <div className="space-y-1">
                    <span className="text-[8px] font-black tracking-widest text-foreground-20 uppercase">TIME_ESTIMATE</span>
                    <p className="text-xl font-black">{track.estimatedHours}H</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[8px] font-black tracking-widest text-foreground-20 uppercase">Total Unit</span>
                    <p className="text-xl font-black">{track.totalChapters}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-[2px] w-8 bg-foreground/20" />
                  <span className="terminal-label">MISSION_OBJECTIVES</span>
                </div>
                <div className="space-y-3 font-mono">
                  {track.chapters.slice(0, 3).map((ch, i) => (
                    <div key={i} className="flex items-start gap-3 group/obj">
                      <span className="text-foreground-20 text-[10px] pt-1">[{i.toString().padStart(2, '0')}]</span>
                      <p className="text-[10px] font-black tracking-widest text-foreground-60 uppercase leading-relaxed group-hover/obj:text-foreground transition-colors">
                        SECURE_NODE: <span className="text-foreground-80">{isBn && ch.titleBn ? ch.titleBn : ch.title}</span>
                      </p>
                    </div>
                  ))}
                  <div
                    className="flex items-center gap-3 text-[10px] font-black tracking-widest uppercase animate-pulse"
                    style={{ color: track.brandColor }}
                  >
                    <span className="opacity-40">--</span>
                    [...MORE_OBJECTIVES_IN_DEEP_MEMORY]
                  </div>
                </div>
              </div>
            </header>
          </div>

          {/* RIGHT COLUMN: CURRICULUM NODES */}
          <div className="lg:col-span-7 space-y-16">
            {[...groups.entries()].map(([part, chapters], groupIdx) => (
              <div key={part} className="space-y-8">
                <div className="flex items-center justify-between border-b border-foreground/10 pb-4">
                  <h2 className="text-xl font-black tracking-[0.3em] text-foreground uppercase font-outfit">
                    {(() => {
                      const firstChapter = chapters[0];
                      const bnPart = isBn && firstChapter?.partLabelBn ? firstChapter.partLabelBn : part;
                      return bnPart;
                    })()}
                  </h2>
                  <span className="text-[9px] font-black tracking-widest opacity-20 uppercase">{chapters.length} NODES</span>
                </div>

                <div className="space-y-4">
                  {chapters.map((ch, idx) => {
                    const cp = getChapterProgress(progress, track.id, ch.id);
                    const unlocked = isChapterUnlocked(progress, track.id, ch.id);
                    const isDone = cp.status === "completed";
                    const isInProgress = cp.status === "in_progress";

                    return (
                      <Link
                        key={ch.id}
                        to={unlocked ? `/learn/${track.id}/${ch.id}` : "#"}
                        className={cn(
                          "group block relative border-2 transition-all duration-300",
                          !unlocked ? "border-foreground/5 opacity-40 cursor-not-allowed" : "border-foreground/10"
                        )}
                        style={unlocked ? {
                          borderColor: `${track.brandColor}33`,
                          background: `linear-gradient(135deg, ${track.brandColor}08 0%, transparent 60%)`
                        } : {}}
                      >
                        {/* Hover Border Effect */}
                        {unlocked && (
                          <div
                            className="absolute inset-0 border-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                            style={{ borderColor: track.brandColor }}
                          />
                        )}

                        <div className="p-6 flex items-center gap-6">
                          {/* Status Icon Box */}
                          <div className={cn(
                            "w-12 h-12 border-2 flex items-center justify-center shrink-0 transition-all",
                            !unlocked ? "border-foreground/10" :
                              isDone ? "border-primary bg-primary/10 text-primary" :
                                isInProgress ? "border-foreground bg-foreground/10 animate-pulse" :
                                  "border-foreground/20 group-hover:border-opacity-100"
                          )}
                            style={unlocked && !isDone && !isInProgress ? { borderColor: `${track.brandColor}33` } :
                              isDone ? { borderColor: track.brandColor, backgroundColor: `${track.brandColor}1A`, color: track.brandColor } :
                                {}}
                          >
                            {!unlocked ? <Lock className="h-4 w-4" /> :
                              isDone ? <Check className="h-5 w-5" /> :
                                isInProgress ? <Play className="h-4 w-4" /> :
                                  <div className="w-1.5 h-1.5 bg-foreground/20 group-hover:bg-primary/40" style={{ backgroundColor: `${track.brandColor}66` }} />}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-4 mb-1">
                              <span className="text-[8px] font-black tracking-widest text-foreground-20 uppercase font-mono">Unit_{ch.number.toString().padStart(2, '0')}</span>
                              <h3 className="text-xl font-black uppercase tracking-tight truncate font-outfit">{isBn && ch.titleBn ? ch.titleBn : ch.title}</h3>
                            </div>
                            <p className="text-[10px] font-black tracking-widest text-foreground-40 uppercase truncate">
                              {isBn && ch.subtitleBn ? ch.subtitleBn : ch.subtitle}
                            </p>
                          </div>

                          <div className="hidden sm:flex items-center gap-8 text-right shrink-0">
                            <div className="space-y-1">
                              <span className="text-[8px] font-black tracking-widest text-foreground-20 uppercase block">XP_VAL</span>
                              <span className="text-xs font-black tracking-widest uppercase">{ch.xpReward}</span>
                            </div>
                            <ChevronRight className={cn(
                              "h-4 w-4 transition-transform group-hover:translate-x-1",
                              unlocked ? "text-primary/40 group-hover:text-primary" : "text-foreground-10"
                            )}
                              style={unlocked ? { color: track.brandColor } : {}}
                            />
                          </div>
                        </div>

                        {/* Hover Overlay */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                          style={{ backgroundColor: `${track.brandColor}0D` }}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* RELATED TRACKS SECTION */}
          {(() => {
            const summary = getTrackRelationshipSummary(track.id);
            if (!summary) return null;

            const relatedTrackObjects = summary.relatedTracks
              .map(id => enrichedTracks.find(t => t.id === id))
              .filter(Boolean);

            const prerequisiteObjects = summary.prerequisites
              .map(id => enrichedTracks.find(t => t.id === id))
              .filter(Boolean);

            const learningPath = summary.learningPath;

            return (
              <div className="space-y-12 mt-16 pt-12 border-t-2 border-foreground/10">
                {/* Learning Path */}
                {learningPath && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-[2px] w-8 bg-primary" />
                      <span className="terminal-label text-primary">LEARNING_PATH</span>
                    </div>
                    <CyberpunkCard className="p-6 border-2 border-primary/30 bg-primary/5">
                      <div className="flex items-start gap-4">
                        <GraduationCap className="w-8 h-8 text-primary shrink-0 mt-1" />
                        <div className="space-y-3 flex-1">
                          <h3 className="text-xl font-black uppercase tracking-tight text-primary">{learningPath.title}</h3>
                          <p className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">
                            {learningPath.tracks.length} tracks • {learningPath.estimatedHours} hrs
                          </p>
                          <div className="flex flex-wrap items-center gap-2">
                            {learningPath.tracks.map((id, i) => {
                              const pathTrack = enrichedTracks.find(t => t.id === id);
                              if (!pathTrack) return null;
                              return (
                                <span key={id} className="flex items-center gap-2">
                                  {i > 0 && <ArrowRight className="w-3 h-3 text-foreground/20" />}
                                  <Link
                                    to={`/learn/${id}`}
                                    className={cn(
                                      "text-[10px] font-black tracking-wider uppercase transition-colors",
                                      id === track.id ? "text-primary" : "text-foreground/60 hover:text-foreground"
                                    )}
                                  >
                                    {isBn && pathTrack.titleBn ? pathTrack.titleBn : pathTrack.title}
                                  </Link>
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </CyberpunkCard>
                  </div>
                )}

                {/* Prerequisites */}
                {prerequisiteObjects.length > 0 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-[2px] w-8 bg-warning-amber" />
                      <span className="terminal-label text-warning-amber">PREREQUISITES</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {prerequisiteObjects.map(prereq => (
                        <Link key={prereq!.id} to={`/learn/${prereq!.id}`} className="group">
                          <CyberpunkCard className="p-4 border-2 border-foreground/10 hover:border-warning-amber/30 transition-all">
                            <div className="flex items-center gap-3">
                              <img src={prereq!.icon} alt="" className="w-8 h-8" />
                              <div>
                                <h4 className="text-sm font-black uppercase tracking-tight group-hover:text-warning-amber transition-colors">
                                  {isBn && prereq!.titleBn ? prereq!.titleBn : prereq!.title}
                                </h4>
                                <p className="text-[8px] font-black tracking-widest text-foreground/40 uppercase">
                                  {prereq!.difficulty}
                                </p>
                              </div>
                              <ChevronRight className="w-4 h-4 ml-auto text-foreground/20 group-hover:text-warning-amber transition-colors" />
                            </div>
                          </CyberpunkCard>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Related Tracks */}
                {relatedTrackObjects.length > 0 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-[2px] w-8 bg-primary" />
                      <span className="terminal-label text-primary">RELATED_TRACKS</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {relatedTrackObjects.map(related => (
                        <Link key={related!.id} to={`/learn/${related!.id}`} className="group">
                          <CyberpunkCard className="p-4 border-2 border-foreground/10 hover:border-primary/30 transition-all">
                            <div className="flex items-center gap-3">
                              <img src={related!.icon} alt="" className="w-8 h-8" />
                              <div className="min-w-0">
                                <h4 className="text-sm font-black uppercase tracking-tight truncate group-hover:text-primary transition-colors">
                                  {isBn && related!.titleBn ? related!.titleBn : related!.title}
                                </h4>
                                <p className="text-[8px] font-black tracking-widest text-foreground/40 uppercase">
                                  {related!.subcategory}
                                </p>
                              </div>
                              <ChevronRight className="w-4 h-4 ml-auto shrink-0 text-foreground/20 group-hover:text-primary transition-colors" />
                            </div>
                          </CyberpunkCard>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Track Metadata */}
                <div className="p-4 border-2 border-foreground/10 bg-foreground/[0.02] space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="h-[2px] w-8 bg-foreground/20" />
                    <span className="terminal-label">TRACK_METADATA</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-[10px]">
                    <div>
                      <span className="text-foreground/20 uppercase tracking-wider block">Category</span>
                      <span className="font-black text-foreground/60">{summary.category}</span>
                    </div>
                    <div>
                      <span className="text-foreground/20 uppercase tracking-wider block">Subcategory</span>
                      <span className="font-black text-foreground/60">{summary.subcategory}</span>
                    </div>
                    <div>
                      <span className="text-foreground/20 uppercase tracking-wider block">Difficulty</span>
                      <span className="font-black text-foreground/60 capitalize">{summary.difficulty}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
};

export default TrackOverview;

