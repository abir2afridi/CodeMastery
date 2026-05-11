import { Link, useLocation } from "react-router-dom";
import { Code2, Search, Activity } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";
import { getLevel } from "@/lib/progress";
import { useI18n } from "@/hooks/useI18n";
import { motion } from "framer-motion";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function Navbar() {
  const { progress } = useProgress();
  const location = useLocation();
  const { t } = useI18n();
  const lvl = progress ? getLevel(progress.totalXP) : null;

  if (location.pathname === "/" || location.pathname.startsWith("/setup") || location.pathname.startsWith("/certificate") || location.pathname === "/compiler") {
    return null;
  }

  const openPalette = () => {
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true }));
  };

  return (
    <header className="sticky top-0 z-[50] w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm border-white/5 overflow-hidden">
      {/* Hardware Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
      
      <div className="flex h-16 items-center px-4 gap-4 relative">
        <SidebarTrigger className="hover:bg-primary/10 hover:text-primary transition-colors border border-white/10" />
        
        <div className="h-6 w-px bg-white/10 mx-2" />

        {/* Left: Brand (Simplified) */}
        <Link to="/learn" className="flex items-center gap-3 group mr-auto">
          <motion.div 
            whileHover={{ rotate: 180, scale: 1.1 }}
            className="w-8 h-8 bg-zinc-100 dark:bg-zinc-100 flex items-center justify-center transition-all duration-500 relative"
          >
            <div className="absolute inset-0 border border-primary/40 animate-pulse scale-110" />
            <Code2 className="h-5 w-5 text-zinc-900" />
          </motion.div>
          <div className="hidden sm:flex flex-col">
            <span className="font-black text-[8px] tracking-[0.4em] leading-tight text-muted-foreground uppercase italic">SYSTEM_ROOT</span>
            <span className="font-black text-sm tracking-[-0.05em] leading-none text-primary uppercase">CODE_MASTERY_v2</span>
          </div>
        </Link>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={openPalette}
            className="hidden md:flex items-center gap-3 px-4 py-2 border border-white/10 bg-muted/50 hover:bg-muted transition-all group/search"
            aria-label={t("nav.search")}
          >
            <Search className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="font-black uppercase text-[10px] tracking-widest text-muted-foreground group-hover:text-foreground">{t("nav.search")}</span>
            <div className="flex items-center gap-1 px-1.5 py-0.5 bg-background border border-white/5">
               <kbd className="font-mono text-[9px] text-primary">⌘K</kbd>
            </div>
          </button>
          
          {progress && lvl && (
            <div className="flex items-center border border-primary/20 bg-background overflow-hidden shadow-lg h-10">
              <div className="px-3 py-1.5 flex flex-col items-start gap-0 border-r border-white/10 bg-muted/30">
                <div className="flex items-center gap-1">
                  <Activity className="h-2.5 w-2.5 text-primary animate-pulse" />
                  <span className="font-black text-[8px] tracking-[0.2em] text-muted-foreground uppercase leading-none">XP</span>
                </div>
                <span className="font-black text-xs tracking-tight text-foreground leading-none">{progress.totalXP}</span>
              </div>
              <div className="px-3 py-1.5 bg-primary flex flex-col items-center justify-center relative overflow-hidden group/lvl h-full">
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/lvl:translate-x-full transition-transform duration-1000 ease-in-out" />
                <span className="text-[7px] font-black tracking-widest text-black/40 uppercase leading-none mb-0.5">RANK</span>
                <span className="font-black text-sm tracking-tighter text-black leading-none italic">LVL_{lvl.level}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

