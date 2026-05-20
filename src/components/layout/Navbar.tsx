import { Link, useLocation } from "react-router-dom";
import { Code2, Search, Activity, Clock, Calendar, Globe } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";
import { getLevel } from "@/lib/progress";
import { useI18n } from "@/hooks/useI18n";
import { motion } from "framer-motion";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useState, useEffect } from "react";

export function Navbar() {
  const { progress } = useProgress();
  const location = useLocation();
  const { t, lang } = useI18n();
  const lvl = progress ? getLevel(progress.totalXP) : null;

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    return time.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" });
  };

  const formatDate = () => {
    return time.toLocaleDateString(lang === "bn" ? "bn-BD" : "en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
  };

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
          <Link
            to="/web-dev"
            className="hidden md:flex items-center gap-2 px-3 py-1.5 text-[10px] font-black tracking-widest uppercase rounded border border-cyan-500/30 hover:bg-cyan-500/10 text-cyan-400 transition-colors"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Web Dev Hub</span>
          </Link>
          <Link
            to="/web-dev"
            className="flex md:hidden items-center justify-center w-8 h-8 rounded border border-cyan-500/30 hover:bg-cyan-500/10 text-cyan-400 transition-colors"
            aria-label="Web Dev Hub"
          >
            <Globe className="w-3.5 h-3.5" />
          </Link>
          {/* Date & Time Display */}
          <div className="hidden lg:flex items-center gap-3 px-3 py-1.5 border border-white/10 bg-muted/30">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3 w-3 text-primary" />
              <span className="font-mono text-[10px] tracking-wide text-foreground">{formatDate()}</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-1.5">
              <Clock className="h-3 w-3 text-primary animate-pulse" />
              <span className="font-mono text-[10px] tracking-wider text-foreground font-bold">{formatTime()}</span>
            </div>
          </div>

          <div className="h-6 w-px bg-white/10" />
          <button
            onClick={openPalette}
            className="flex items-center md:hidden justify-center w-8 h-8 border border-white/10 bg-muted/50 hover:bg-muted transition-all"
            aria-label={t("nav.search")}
          >
            <Search className="h-3.5 w-3.5 text-muted-foreground" />
          </button>
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
            <div className="flex items-center border border-primary/20 bg-background overflow-hidden shadow-lg h-10 flex-shrink-0">
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

