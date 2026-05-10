import { Link, useLocation } from "react-router-dom";
import { Code2, Layout, Search, Terminal, User, Zap } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";
import { getLevel } from "@/lib/progress";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
  const { progress } = useProgress();
  const location = useLocation();
  const { t } = useI18n();
  const lvl = progress ? getLevel(progress.totalXP) : null;

  if (location.pathname === "/" || location.pathname.startsWith("/setup") || location.pathname.startsWith("/compiler") || location.pathname.startsWith("/certificate")) {
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
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="container flex h-14 items-center justify-between gap-2">
        <Link to="/learn" className="flex items-center gap-2 font-display font-bold">
          <Code2 className="h-5 w-5 text-primary" />
          <span className="text-base">Code<span className="text-primary">Mastery</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className={cn(
              "px-3 py-1.5 text-sm rounded-md transition-colors flex items-center gap-1.5",
              location.pathname.startsWith(l.to) ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            )}>
              <l.icon className="h-4 w-4" /> {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={openPalette}
            className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-border bg-muted/30 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            aria-label={t("nav.search")}
          >
            <Search className="h-3.5 w-3.5" />
            <span>{t("nav.search")}</span>
            <kbd className="ml-2 px-1.5 py-0.5 rounded bg-background/60 border border-border font-mono text-[10px]">⌘K</kbd>
          </button>
          <LanguageSwitcher />
          {progress && lvl && (
            <>
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-muted-foreground">
                <Zap className="h-3.5 w-3.5 text-primary" /> {progress.totalXP} {t("common.xp")}
              </span>
              <span className="text-xs font-bold px-2 py-1 rounded-md bg-gradient-violet text-white">Lv {lvl.level}</span>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
