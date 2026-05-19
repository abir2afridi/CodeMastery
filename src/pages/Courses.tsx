import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { enrichedTracks as tracks } from "@/lib/curriculum";
import { useI18n } from "@/hooks/useI18n";
import { CyberpunkCard, CyberpunkBadge, CyberpunkButton } from "@/components/ui/cyberpunk";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Filter, BookOpen, Code2, Server, Database, Brain, Cloud, Shield, Cpu, CircuitBoard, BarChart3, Layout, Terminal, GraduationCap } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";
import { cn } from "@/lib/utils";
import { learningCategories, learningPaths, getTracksByCategory, getTracksByDifficulty, sortTracksByLearningOrder } from "@/lib/learning-taxonomy";
import type { TrackId } from "@/lib/curriculum/types";

const categoryIcons: Record<string, typeof Code2> = {
  "Programming Foundations": Terminal,
  "Frontend Development": Layout,
  "Backend Development": Server,
  "Programming Languages": Code2,
  "Databases & Data Storage": Database,
  "Data Science & Analytics": BarChart3,
  "AI & Generative AI": Brain,
  "DevOps, Cloud & Tools": Cloud,
  "Cybersecurity": Shield,
  "Computer Science & DSA": Cpu,
  "Hardware & IoT": CircuitBoard,
};

type ViewMode = "all" | "paths";
type DifficultyFilter = "all" | "beginner" | "intermediate" | "advanced";

function TrackCard({ track, index }: { track: typeof tracks[number]; index: number }) {
  const { progress } = useProgress();
  const { t, lang } = useI18n();
  const isBn = lang === "bn";

  const trackProgress = progress?.tracks[track.id];
  const completed = trackProgress
    ? Object.values(trackProgress.chapters).filter(c => c.status === "completed").length
    : 0;
  const pct = Math.round((completed / track.chapters.length) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
    >
      <Link to={`/learn/${track.id}`} className="group block h-full">
        <CyberpunkCard
          className="h-full p-0 border-2 bg-foreground/[0.02] transition-all duration-300 relative overflow-hidden group-hover:bg-foreground/[0.04]"
          style={{ borderColor: `${track.brandColor}66` }}
          hover={true}
        >
          <div
            className="absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 group-hover:w-2"
            style={{ backgroundColor: track.brandColor }}
          />

          <div className="p-8 pl-10 space-y-6 relative z-10">
            <div className="flex justify-between items-start">
              <div
                className="w-20 h-20 flex items-center justify-center relative border-4 transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundColor: 'transparent', borderColor: track.brandColor }}
              >
                <div className="absolute inset-0 opacity-10" style={{ backgroundColor: track.brandColor }} />
                <img src={track.icon} alt={track.title} className="w-12 h-12 relative z-10" />
              </div>
              <div className="flex flex-col items-end gap-1">
                <CyberpunkBadge
                  variant="status"
                  style={{ backgroundColor: `${track.brandColor}22`, color: track.brandColor, borderColor: `${track.brandColor}44` }}
                >
                  {pct > 0 ? `${pct}% Learned` : "READY"}
                </CyberpunkBadge>
                <CyberpunkBadge
                  variant="status"
                  className="text-[8px]"
                  style={{ backgroundColor: `${track.brandColor}11`, color: track.brandColor, borderColor: `${track.brandColor}22` }}
                >
                  {track.difficulty}
                </CyberpunkBadge>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-4xl font-black uppercase tracking-tighter" style={{ color: track.brandColor }}>
                {isBn && track.titleBn ? track.titleBn : track.title}
              </h2>
              <p className="text-xs font-black uppercase tracking-widest text-foreground/40 leading-relaxed">
                {isBn && track.taglineBn ? track.taglineBn : track.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="text-[8px] font-black tracking-wider uppercase px-2 py-0.5 rounded border border-foreground/10 text-foreground/40">
                {track.category}
              </span>
              <span className="text-[8px] font-black tracking-wider uppercase px-2 py-0.5 rounded border border-foreground/10 text-foreground/40">
                {track.subcategory}
              </span>
            </div>

            <div className="pt-4 border-t border-foreground/10 grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <span className="text-[9px] font-black text-foreground/20 uppercase tracking-[0.3em]">Total Chapters</span>
                <p className="text-sm font-mono font-black">{track.chapters.length} UNITS</p>
              </div>
              <div className="space-y-1 text-right">
                <span className="text-[9px] font-black text-foreground/20 uppercase tracking-[0.3em]">Estimated Time</span>
                <p className="text-sm font-mono font-black">{track.estimatedHours} HRS</p>
              </div>
            </div>

            {track.prerequisites && track.prerequisites.length > 0 && (
              <div className="text-[8px] font-black tracking-wider uppercase text-foreground/30">
                Prerequisites: {track.prerequisites.slice(0, 3).map(id => {
                  const prereqTrack = tracks.find(t => t.id === id);
                  return prereqTrack ? (isBn && prereqTrack.titleBn ? prereqTrack.titleBn : prereqTrack.title) : id;
                }).join(", ")}
              </div>
            )}

            <CyberpunkButton
              variant="outline"
              className="w-full mt-2 border-2"
              style={{ borderColor: track.brandColor, color: track.brandColor }}
            >
              <span className="font-black tracking-widest uppercase">{t("dashboard.initiateLink")}</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </CyberpunkButton>
          </div>

          <div className="absolute -bottom-4 -right-4 text-[100px] font-black text-foreground/[0.03] select-none uppercase pointer-events-none">
            {track.id.substring(0, 2)}
          </div>
        </CyberpunkCard>
      </Link>
    </motion.div>
  );
}

const Courses = () => {
  const { t, lang } = useI18n();
  const { progress } = useProgress();
  const isBn = lang === "bn";

  const [viewMode, setViewMode] = useState<ViewMode>("all");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredTracks = useMemo(() => {
    let result = tracks;

    if (activeCategory !== "all") {
      const categoryTrackIds = getTracksByCategory(activeCategory);
      result = result.filter(track => categoryTrackIds.includes(track.id as TrackId));
    }

    if (difficultyFilter !== "all") {
      const difficultyTrackIds = getTracksByDifficulty(difficultyFilter);
      result = result.filter(track => difficultyTrackIds.includes(track.id as TrackId));
    }

    return sortTracksByLearningOrder(result.map(t => t.id as TrackId)).map(
      id => result.find(t => t.id === id)!
    ).filter(Boolean);
  }, [activeCategory, difficultyFilter]);

  const categoryGroups = useMemo(() => {
    if (activeCategory !== "all") return [];

    return learningCategories.map(cat => {
      let catTracks = tracks.filter(t =>
        cat.tracks.includes(t.id as TrackId)
      );

      if (difficultyFilter !== "all") {
        const diffs = getTracksByDifficulty(difficultyFilter);
        catTracks = catTracks.filter(t => diffs.includes(t.id as TrackId));
      }

      if (catTracks.length === 0) return null;

      const sorted = sortTracksByLearningOrder(
        catTracks.map(t => t.id as TrackId)
      ).map(id => tracks.find(t => t.id === id)!).filter(Boolean);

      return { ...cat, tracks: sorted };
    }).filter(Boolean) as (typeof learningCategories[number] & { tracks: typeof tracks })[];
  }, [difficultyFilter, activeCategory]);

  const clearFilters = () => {
    setActiveCategory("all");
    setDifficultyFilter("all");
    setViewMode("all");
  };

  return (
    <div className="min-h-screen bg-background p-8 md:p-12 lg:p-16 relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        <header className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-[11px] font-black tracking-[0.4em] text-primary uppercase">
              {t("system.segmentIndex")}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            {t("nav.languages")}
          </h1>
          <p className="text-muted-foreground uppercase text-xs tracking-[0.2em] font-black max-w-xl leading-relaxed">
            Select a neural uplink node to begin data ingestion. Each track is a verified core protocol for modern web architecture.
          </p>
        </header>

        {/* VIEW MODE TOGGLE */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => { setViewMode("all"); setActiveCategory("all"); }}
            className={cn(
              "px-4 py-2 text-xs font-black tracking-widest uppercase rounded transition-all border-2",
              viewMode === "all" && activeCategory === "all"
                ? "bg-primary/20 border-primary text-primary"
                : "border-foreground/10 text-foreground/40 hover:border-foreground/30"
            )}
          >
            All Tracks
          </button>
          <button
            onClick={() => { setViewMode("paths"); setActiveCategory("all"); }}
            className={cn(
              "px-4 py-2 text-xs font-black tracking-widest uppercase rounded transition-all border-2",
              viewMode === "paths"
                ? "bg-primary/20 border-primary text-primary"
                : "border-foreground/10 text-foreground/40 hover:border-foreground/30"
            )}
          >
            <GraduationCap className="w-3 h-3 inline mr-1.5" />
            Learning Paths
          </button>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 text-xs font-black tracking-widest uppercase rounded transition-all border-2 border-foreground/10 text-foreground/40 hover:border-foreground/30"
          >
            <Filter className="w-3 h-3 inline mr-1.5" />
            Filters
          </button>
        </div>

        {/* FILTERS PANEL */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="p-6 border-2 border-foreground/10 bg-foreground/[0.02] rounded space-y-6"
            >
              <div>
                <h3 className="text-[10px] font-black tracking-[0.3em] text-foreground/40 uppercase mb-3">Category</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => { setActiveCategory("all"); setViewMode("all"); }}
                    className={cn(
                      "px-3 py-1.5 text-[10px] font-black tracking-wider uppercase rounded transition-all border",
                      activeCategory === "all" && viewMode === "all"
                        ? "bg-primary/20 border-primary text-primary"
                        : "border-foreground/10 text-foreground/40 hover:border-foreground/30"
                    )}
                  >
                    All
                  </button>
                  {learningCategories.map(cat => {
                    const Icon = categoryIcons[cat.title] ?? Code2;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => { setActiveCategory(cat.title); setViewMode("all"); }}
                        className={cn(
                          "px-3 py-1.5 text-[10px] font-black tracking-wider uppercase rounded transition-all border flex items-center gap-1.5",
                          activeCategory === cat.title
                            ? "bg-primary/20 border-primary text-primary"
                            : "border-foreground/10 text-foreground/40 hover:border-foreground/30"
                        )}
                      >
                        <Icon className="w-3 h-3" />
                        {cat.title}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-[10px] font-black tracking-[0.3em] text-foreground/40 uppercase mb-3">Difficulty</h3>
                <div className="flex flex-wrap gap-2">
                  {(["all", "beginner", "intermediate", "advanced"] as DifficultyFilter[]).map(diff => (
                    <button
                      key={diff}
                      onClick={() => setDifficultyFilter(diff)}
                      className={cn(
                        "px-3 py-1.5 text-[10px] font-black tracking-wider uppercase rounded transition-all border",
                        difficultyFilter === diff
                          ? "bg-primary/20 border-primary text-primary"
                          : "border-foreground/10 text-foreground/40 hover:border-foreground/30"
                      )}
                    >
                      {diff === "all" ? "All Levels" : diff.charAt(0).toUpperCase() + diff.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* LEARNING PATHS VIEW */}
        {viewMode === "paths" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-black uppercase tracking-tight">
              <GraduationCap className="w-6 h-6 inline mr-2" />
              Career Learning Paths
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {learningPaths.map((path, index) => {
                const Icon = categoryIcons[path.tracks.length > 0 ? tracks.find(t => t.id === path.tracks[0])?.category ?? "" : ""] ?? BookOpen;
                const pathTracks = path.tracks.map(id => tracks.find(t => t.id === id)).filter(Boolean);
                const completedCount = path.tracks.filter(id => {
                  const tp = progress?.tracks[id];
                  return tp && Object.values(tp.chapters).some(c => c.status === "completed");
                }).length;
                const pathProgress = Math.round((completedCount / path.tracks.length) * 100);

                return (
                  <motion.div
                    key={path.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <CyberpunkCard className="p-6 border-2 border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div className="space-y-2">
                          <h3 className="text-xl font-black uppercase tracking-tight">{path.title}</h3>
                          <p className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">
                            {path.tracks.length} tracks • {path.estimatedHours} hrs
                          </p>
                        </div>
                          <CyberpunkBadge variant="status">
                            {pathProgress > 0 ? `${pathProgress}%` : "Start"}
                          </CyberpunkBadge>
                      </div>

                      <div className="h-1.5 w-full bg-foreground/5 rounded mb-4 overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all"
                          style={{ width: `${pathProgress}%` }}
                        />
                      </div>

                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        {pathTracks.map((track, i) => (
                          <span key={track!.id} className="flex items-center gap-2">
                            {i > 0 && <ArrowRight className="w-3 h-3 text-foreground/20" />}
                            <Link
                              to={`/learn/${track!.id}`}
                              className="text-[10px] font-black tracking-wider uppercase text-primary hover:text-primary/80 transition-colors"
                            >
                              {isBn && track!.titleBn ? track!.titleBn : track!.title}
                            </Link>
                          </span>
                        ))}
                      </div>

                      <Link to={`/learn/${path.tracks[0]}`} className="block">
                        <CyberpunkButton variant="outline" className="w-full border-2 border-primary text-primary">
                          <span className="font-black tracking-widest uppercase">Start Path</span>
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </CyberpunkButton>
                      </Link>
                    </CyberpunkCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* CATEGORY GROUPED TRACKS VIEW */}
        {viewMode === "all" && activeCategory === "all" && (
          <>
            {/* Active Filter Indicator */}
            {difficultyFilter !== "all" && (
              <div className="flex items-center gap-3 p-3 border border-primary/30 bg-primary/5 rounded">
                <Filter className="w-4 h-4 text-primary" />
                <span className="text-xs font-black tracking-wider text-primary uppercase">
                  {difficultyFilter.charAt(0).toUpperCase() + difficultyFilter.slice(1)}
                </span>
                <span className="text-xs text-foreground/40">
                  tracks
                </span>
                <button
                  onClick={clearFilters}
                  className="ml-auto text-[10px] font-black tracking-wider uppercase text-foreground/40 hover:text-foreground transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}

            <div className="space-y-16">
              {categoryGroups.map((cat, catIdx) => {
                const Icon = categoryIcons[cat.title] ?? Code2;
                return (
                  <div key={cat.id} className="space-y-6">
                    {/* Category Header */}
                    <div className="flex items-center gap-4 border-b border-foreground/10 pb-4">
                      <div className="w-10 h-10 rounded border-2 border-primary/30 bg-primary/5 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-black uppercase tracking-tight">{cat.title}</h2>
                        <p className="text-[9px] font-black tracking-widest text-foreground/40 uppercase">
                          {isBn ? cat.descriptionBn : cat.description} • {cat.tracks.length} tracks
                        </p>
                      </div>
                      {cat.tracks.length > 3 && (
                        <button
                          onClick={() => { setActiveCategory(cat.title); }}
                          className="text-[9px] font-black tracking-widest uppercase text-primary/60 hover:text-primary transition-colors shrink-0"
                        >
                          View All →
                        </button>
                      )}
                    </div>

                    {/* Learning Flow Indicator */}
                    <div className="flex flex-wrap items-center gap-1.5 text-[9px] font-mono">
                      {cat.tracks.slice(0, Math.min(cat.tracks.length, 6)).map((t, i) => (
                        <span key={t.id} className="flex items-center gap-1.5">
                          {i > 0 && <ArrowRight className="w-2.5 h-2.5 text-foreground/20" />}
                          <Link
                            to={`/learn/${t.id}`}
                            className="px-2 py-0.5 rounded border border-foreground/10 text-foreground/60 hover:text-primary hover:border-primary/30 transition-colors uppercase tracking-wider font-black"
                          >
                            {t.title}
                          </Link>
                        </span>
                      ))}
                      {cat.tracks.length > 6 && (
                        <span className="text-foreground/30 ml-1">+{cat.tracks.length - 6} more</span>
                      )}
                    </div>

                    {/* Tracks Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {cat.tracks.map((track, index) => (
                        <TrackCard key={track.id} track={track} index={index} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {categoryGroups.length === 0 && (
              <div className="text-center py-16">
                <p className="text-lg font-black tracking-wider text-foreground/40 uppercase">
                  No tracks found for the selected filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm font-black tracking-wider text-primary hover:text-primary/80 transition-colors uppercase"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </>
        )}

        {/* SINGLE CATEGORY VIEW */}
        {viewMode === "all" && activeCategory !== "all" && (
          <>
            <div className="flex items-center gap-3 p-3 border border-primary/30 bg-primary/5 rounded">
              <Filter className="w-4 h-4 text-primary" />
              <span className="text-xs font-black tracking-wider text-primary uppercase">
                {activeCategory}
              </span>
              <span className="text-xs text-foreground/40">
                ({filteredTracks.length} tracks)
              </span>
              <button
                onClick={clearFilters}
                className="ml-auto text-[10px] font-black tracking-wider uppercase text-foreground/40 hover:text-foreground transition-colors"
              >
                Clear Filters
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTracks.map((track, index) => (
                <TrackCard key={track.id} track={track} index={index} />
              ))}
            </div>

            {filteredTracks.length === 0 && (
              <div className="text-center py-16">
                <p className="text-lg font-black tracking-wider text-foreground/40 uppercase">
                  No tracks found for the selected filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm font-black tracking-wider text-primary hover:text-primary/80 transition-colors uppercase"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Courses;
