import { useState, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getCategoryBySlug } from "@/data/webdev/technologies";
import { useTechnologies } from "@/hooks/webdev/useTechnologies";
import { TechCard } from "@/components/webdev/TechCard";
import { Search, ArrowLeft, Hash, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getTechsByCategory } = useTechnologies();
  const category = getCategoryBySlug(slug || "");
  const [sortBy, setSortBy] = useState<'name' | 'release' | 'growth'>('name');
  const navigate = useNavigate();

  const allTechs = useMemo(() => {
    if (!category) return [];
    return getTechsByCategory(category.id);
  }, [category, getTechsByCategory]);
  
  const filteredTechs = useMemo(() => {
    let result = [...allTechs];
    
    // Sorting
    result.sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'release') return (b.releaseYear || 0) - (a.releaseYear || 0);
      if (sortBy === 'growth') return (b.growth || 0) - (a.growth || 0);
      return 0;
    });

    return result;
  }, [allTechs, sortBy]);

  if (!category) {
    return (
      <div className="animate-fade-in flex flex-col items-center justify-center min-h-[60vh] space-y-6 text-center">
        <div className="w-16 h-16 rounded-full bg-destructive/5 flex items-center justify-center">
          <Hash className="h-8 w-8 text-destructive/40" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-black tracking-tightest uppercase italic">Missing Index</h1>
          <p className="text-muted-foreground/60 text-sm max-w-xs mx-auto font-medium">The requested category could not be verified in our current database.</p>
        </div>
        <Button variant="outline" onClick={() => navigate("/web-dev")} className="rounded-xl px-6 h-11 font-black text-[10px] uppercase tracking-widest">
          <ArrowLeft className="mr-2 h-4 w-4" /> Reset Directory
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-12 animate-fade-in pb-20">
      {/* Category Header */}
      <section className="relative py-4">
        <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
          <div className="flex-1 min-w-0 space-y-2">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <h1 className="text-xl md:text-2xl font-black tracking-tight leading-tight text-slate-900 dark:text-slate-100 italic uppercase">
                {category.name}
              </h1>
              <div className="flex items-center gap-3 text-sm font-black text-slate-900 dark:text-slate-100 tabular-nums uppercase">
                <span>{allTechs.length}<span className="text-[9px] text-slate-400 ml-1">Units</span></span>
                <span className="text-slate-300">|</span>
                <span>Global<span className="text-[9px] text-slate-400 ml-1">Hub</span></span>
              </div>
            </div>
            <p className="text-[11px] text-muted-foreground/60 font-medium max-w-xl leading-snug uppercase tracking-tight truncate">
              {category.description}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button className="h-8 px-4 rounded-lg bg-primary text-white font-black text-[9px] uppercase tracking-widest shadow-md shadow-primary/20">
              Contribute
            </Button>
            <Button variant="outline" className="h-8 px-3 rounded-lg border-border/40 font-black text-[8px] uppercase tracking-widest">
              Export
            </Button>
            <Button variant="outline" className="h-8 px-3 rounded-lg border-border/40 font-black text-[8px] uppercase tracking-widest">
              Analytics
            </Button>
          </div>
        </div>
      </section>

      {/* Sort Controls Only - Premium Glass Bar */}
      <div className="sticky top-0 z-30 -mx-4 sm:-mx-8 lg:-mx-12 px-4 sm:px-8 lg:px-12 py-3 bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl border-y border-border/10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Sort</span>
          <div className="h-3 w-px bg-border/20 mx-1" />
          <div className="flex bg-slate-100/50 dark:bg-slate-900/50 p-1 rounded-lg border border-border/10">
            {['release', 'growth', 'name'].map((s) => (
              <button
                key={s}
                onClick={() => setSortBy(s as any)}
                className={cn(
                  "px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all",
                  sortBy === s 
                    ? "bg-white dark:bg-slate-800 text-primary shadow-sm" 
                    : "text-slate-400 hover:text-slate-600"
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] italic">
          Showing <span className="text-primary italic">{filteredTechs.length}</span> verified results
        </div>
      </div>

      {/* Results Section */}
      <div className="space-y-8">
        {filteredTechs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center space-y-4">
            <div className="size-20 rounded-[2rem] bg-slate-50 dark:bg-slate-900 flex items-center justify-center border border-border/40 text-slate-200">
              <Search className="size-10" />
            </div>
            <div className="space-y-1">
                <h3 className="text-xl font-black tracking-tightest uppercase italic">No Matches Found</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Please adjust your filtration parameters</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredTechs.map((tech, i) => (
              <TechCard key={tech.id} tech={tech} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
