import { Link, useLocation } from "react-router-dom";
import { Code2, Layout, Search, Terminal, User, Zap } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";
import { getLevel } from "@/lib/progress";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const { progress } = useProgress();
  const location = useLocation();
  const { t } = useI18n();
  const lvl = progress ? getLevel(progress.totalXP) : null;

  if (location.pathname === "/" || location.pathname.startsWith("/setup") || location.pathname.startsWith("/certificate") || location.pathname === "/compiler") {
    return null;
  }

  const links = [
    { to: "/learn", label: t("nav.dashboard"), icon: Layout },
    { to: "/compiler", label: t("nav.compiler"), icon: Terminal },
    { to: "/profile", label: t("nav.profile"), icon: User },
  ];

  const openPalette = () => {
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true }));
  };

  return (
    <header className="sticky top-0 z-[100] bg-background/80 backdrop-blur-xl border-b border-border overflow-hidden">
      {/* Top Protocol Status Line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link to="/learn" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-foreground flex items-center justify-center transition-transform group-hover:rotate-90">
            <Code2 className="h-5 w-5 text-background" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-sm tracking-[0.2em] leading-none uppercase">CODE</span>
            <span className="font-black text-sm tracking-[0.2em] leading-none text-primary uppercase">MASTERY</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 h-full">
          {links.map((l) => (
            <Link 
              key={l.to} 
              to={l.to} 
              className={cn(
                "h-full px-6 flex items-center gap-2 font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-200 border-x border-transparent",
                location.pathname.startsWith(l.to) 
                  ? "bg-foreground text-background border-border" 
                  : "text-foreground/40 hover:text-foreground hover:bg-foreground/5"
              )}
            >
              <l.icon className="h-4 w-4" /> {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={openPalette}
            className="hidden sm:flex items-center gap-3 px-4 py-2 border border-border bg-foreground/[0.02] hover:bg-foreground/[0.05] transition-all"
            aria-label={t("nav.search")}
          >
            <Search className="h-3.5 w-3.5 text-foreground/40" />
            <span className="font-black uppercase text-[9px] tracking-widest text-foreground/40">{t("nav.search")}</span>
            <kbd className="font-mono text-[9px] text-primary opacity-40">CMD+K</kbd>
          </button>
          
          <div className="h-8 w-[1px] bg-border mx-2" />
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <LanguageSwitcher />
            
            {progress && lvl && (
              <div className="flex items-center gap-0 border border-border overflow-hidden">
                <div className="px-3 py-1.5 bg-foreground/[0.02] border-r border-border flex items-center gap-2">
                  <Zap className="h-3.5 w-3.5 text-primary" />
                  <span className="font-black text-[10px] tracking-widest">{progress.totalXP} {t("common.xp")}</span>
                </div>
                <div className="px-3 py-1.5 bg-primary text-primary-foreground font-black text-[10px] tracking-widest">
                  LVL {lvl.level}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
