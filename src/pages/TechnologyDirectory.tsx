import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, ArrowRight, Code2, Server, Database, Brain, Cloud, Shield, Cpu, CircuitBoard, BarChart3, Layout, Terminal, BookOpen, Globe, Smartphone, Palette, LucideIcon, Bookmark } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CyberpunkCard, CyberpunkBadge } from "@/components/ui/cyberpunk";
import { cn } from "@/lib/utils";
import { technologies, getAllCategories, searchTechnologies, TechnologyEntry } from "@/lib/technology-encyclopedia";
import { getBookmarks } from "@/lib/bookmarks";

const categoryIcons: Record<string, LucideIcon> = {
  "Frontend": Layout,
  "Backend": Server,
  "Databases": Database,
  "Data Science": BarChart3,
  "AI & ML": Brain,
  "DevOps": Cloud,
  "Security": Shield,
  "Computer Science": Cpu,
  "Hardware & IoT": CircuitBoard,
  "Productivity": Terminal,
};

const categoryColors: Record<string, string> = {
  "Frontend": "#00D4FF",
  "Backend": "#00FF41",
  "Databases": "#FFB700",
  "Data Science": "#FF6B35",
  "AI & ML": "#B026FF",
  "DevOps": "#FF3B30",
  "Security": "#FF2D55",
  "Computer Science": "#5E5CE6",
  "Hardware & IoT": "#00C7BE",
  "Productivity": "#FF9500",
};

function TechCard({ tech, index }: { tech: TechnologyEntry; index: number }) {
  const color = categoryColors[tech.category] ?? "#00D4FF";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
    >
      <Link to={`/tech/${tech.slug}`} className="group block h-full">
        <CyberpunkCard
          className="h-full p-0 border-2 bg-foreground/[0.02] transition-all duration-300 relative overflow-hidden group-hover:bg-foreground/[0.04]"
          style={{ borderColor: `${color}44` }}
          hover={true}
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 group-hover:w-1.5" style={{ backgroundColor: color }} />

          <div className="p-5 pl-6 space-y-3 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded border" style={{ borderColor: `${color}33`, backgroundColor: `${color}11` }}>
                <img src={tech.logo} alt={tech.name} className="w-6 h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-black uppercase tracking-tight truncate group-hover:text-primary transition-colors">{tech.name}</h3>
                <p className="text-[8px] font-black tracking-widest text-foreground/40 uppercase truncate">{tech.type}</p>
              </div>
            </div>

            <p className="text-[10px] text-foreground/60 leading-relaxed line-clamp-2">{tech.description}</p>

            <div className="flex flex-wrap gap-1.5">
              <span className="text-[7px] font-black tracking-wider uppercase px-1.5 py-0.5 rounded" style={{ backgroundColor: `${color}15`, color }}>
                {tech.category}
              </span>
              <span className="text-[7px] font-black tracking-wider uppercase px-1.5 py-0.5 rounded border border-foreground/10 text-foreground/40">
                {tech.difficulty}
              </span>
            </div>

            {tech.relatedTrackId && (
              <div className="text-[7px] font-black tracking-widest text-primary/60 uppercase">
                Has learning track →
              </div>
            )}
          </div>
        </CyberpunkCard>
      </Link>
    </motion.div>
  );
}

const TechnologyDirectory = () => {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") ?? "all";
  const [showBookmarkedOnly, setShowBookmarkedOnly] = useState(false);
  const bookmarkedIds = useMemo(() => getBookmarks(), []);

  const results = useMemo(() => {
    if (!query.trim()) return null;
    let res = searchTechnologies(query);
    if (showBookmarkedOnly) res = res.filter(t => bookmarkedIds.includes(t.id));
    return res;
  }, [query, showBookmarkedOnly, bookmarkedIds]);

  const categories = useMemo(() => getAllCategories(), []);

  const groupedByCategory = useMemo(() => {
    const filterFn = (t: TechnologyEntry) => (!showBookmarkedOnly || bookmarkedIds.includes(t.id));
    if (activeCategory !== "all") {
      return [{ category: activeCategory, technologies: Object.values(technologies).filter(t => t.category === activeCategory && filterFn(t)) }];
    }
    return categories.map(cat => ({
      category: cat,
      technologies: Object.values(technologies).filter(t => t.category === cat && filterFn(t)),
    }));
  }, [activeCategory, categories, showBookmarkedOnly, bookmarkedIds]);

  return (
    <div className="min-h-screen bg-background p-8 md:p-12 relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-10">
        <header className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-[11px] font-black tracking-[0.4em] text-primary uppercase">
              TECHNOLOGY ENCYCLOPEDIA
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Web Dev Hub
          </h1>
          <p className="text-muted-foreground uppercase text-xs tracking-[0.2em] font-black max-w-xl leading-relaxed">
            Explore technologies, frameworks, languages, and tools. Discover ecosystems, compare alternatives, and find learning paths.
          </p>
        </header>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search technologies, languages, frameworks..."
            className="w-full h-12 pl-11 pr-4 bg-foreground/[0.02] border-2 border-foreground/10 text-foreground text-sm font-mono focus:outline-none focus:border-primary/50 transition-colors"
          />
        </div>

        {/* Category tabs */}
        {!query && (
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => { setShowBookmarkedOnly(false); setSearchParams({}); }}
              className={cn(
                "px-3 py-1.5 text-[10px] font-black tracking-wider uppercase rounded transition-all border",
                activeCategory === "all"
                  ? "bg-primary/20 border-primary text-primary"
                  : "border-foreground/10 text-foreground/40 hover:border-foreground/30"
              )}
            >
              All
            </button>
            <button
              onClick={() => setShowBookmarkedOnly(!showBookmarkedOnly)}
              className={cn(
                "px-3 py-1.5 text-[10px] font-black tracking-wider uppercase rounded transition-all border flex items-center gap-1.5",
                showBookmarkedOnly
                  ? "bg-amber-500/20 border-amber-500 text-amber-500"
                  : "border-foreground/10 text-foreground/40 hover:border-foreground/30"
              )}
            >
              <Bookmark className={cn("w-3 h-3", showBookmarkedOnly && "fill-current")} />
              Bookmarked ({bookmarkedIds.length})
            </button>
            {categories.map(cat => {
              const Icon = categoryIcons[cat] ?? BookOpen;
              const color = categoryColors[cat] ?? "#00D4FF";
              return (
                <button
                  key={cat}
                  onClick={() => { setSearchParams({ category: cat }); }}
                  className={cn(
                    "px-3 py-1.5 text-[10px] font-black tracking-wider uppercase rounded transition-all border flex items-center gap-1.5",
                    activeCategory === cat
                      ? "bg-primary/20 border-primary text-primary"
                      : "border-foreground/10 text-foreground/40 hover:border-foreground/30"
                  )}
                  style={activeCategory === cat ? { borderColor: `${color}66`, backgroundColor: `${color}11`, color } : {}}
                >
                  <Icon className="w-3 h-3" />
                  {cat}
                </button>
              );
            })}
          </div>
        )}

        {/* Search results */}
        {query && results && (
          <div className="space-y-4">
            <p className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">
              {results.length} result{results.length !== 1 ? "s" : ""} for "{query}"
            </p>
            {results.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-lg font-black tracking-wider text-foreground/40 uppercase">No technologies found</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {results.map((tech, i) => (
                  <TechCard key={tech.id} tech={tech} index={i} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Category groups */}
        {!query && groupedByCategory.map((group, gi) => {
          const Icon = categoryIcons[group.category] ?? BookOpen;
          const color = categoryColors[group.category] ?? "#00D4FF";
          return (
            <div key={group.category} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded border flex items-center justify-center" style={{ borderColor: `${color}33`, backgroundColor: `${color}11` }}>
                  <Icon className="w-4 h-4" style={{ color }} />
                </div>
                <h2 className="text-xl font-black uppercase tracking-tight">{group.category}</h2>
                <span className="text-[9px] font-black tracking-widest text-foreground/30">({group.technologies.length})</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {group.technologies.map((tech, i) => (
                  <TechCard key={tech.id} tech={tech} index={gi * 100 + i} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechnologyDirectory;
