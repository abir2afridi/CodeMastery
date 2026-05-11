import { Link, Navigate } from "react-router-dom";
import { useProgress } from "@/hooks/useProgress";
import { tracks } from "@/lib/curriculum";
import { Code2, Palette, Zap, ArrowRight, Flame, Trophy, Activity, Shield, Cpu, Terminal, Satellite, Network, User, Library } from "lucide-react";
import { getLevel } from "@/lib/progress";
import { motion } from "framer-motion";
import { useI18n } from "@/hooks/useI18n";
import { CyberpunkCard, CyberpunkBadge, CyberpunkButton } from "@/components/ui/cyberpunk";
import { cn } from "@/lib/utils";

const trackConfig = {
  html: {
    icon: "https://img.icons8.com/color/96/html-5--v1.png",
    color: "#E34F26",
    glow: "rgba(227, 79, 38, 0.4)",
    text: "text-[#E34F26]",
    border: "border-[#E34F26]/20",
    hoverBorder: "group-hover:border-[#E34F26]",
    bg: "bg-[#E34F26]"
  },
  css: {
    icon: "https://img.icons8.com/color/96/css3.png",
    color: "#1572B6",
    glow: "rgba(21, 114, 182, 0.4)",
    text: "text-[#1572B6]",
    border: "border-[#1572B6]/20",
    hoverBorder: "group-hover:border-[#1572B6]",
    bg: "bg-[#1572B6]"
  },
  javascript: {
    icon: "https://img.icons8.com/color/96/javascript--v1.png",
    color: "#F7DF1E",
    glow: "rgba(247, 223, 30, 0.4)",
    text: "text-[#F7DF1E]",
    border: "border-[#F7DF1E]/20",
    hoverBorder: "group-hover:border-[#F7DF1E]",
    bg: "bg-[#F7DF1E]"
  }
};

const Dashboard = () => {
  const { progress, ready } = useProgress();
  const { t } = useI18n();
  if (ready && !progress) return <Navigate to="/" replace />;
  if (!progress) return null;

  const lvl = getLevel(progress.totalXP);

  const bgAccents = (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <motion.div
        animate={{ opacity: [0.03, 0.05, 0.03] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[20%] left-[-10%] w-[60%] h-[60%] bg-primary/5 blur-[150px] rounded-full"
      />
      <motion.div
        animate={{ opacity: [0.02, 0.04, 0.02] }}
        transition={{ duration: 15, repeat: Infinity, delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-crimson/5 blur-[120px] rounded-full"
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative selection:bg-primary/30 pb-24 font-outfit">
      {bgAccents}

      <div className="container relative z-10 pt-12 sm:pt-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          {/* LEFT COLUMN: OPERATIVE DOSSIER */}
          <div className="lg:col-span-4 space-y-8 sm:space-y-12">
            <section className="space-y-6 sm:space-y-8">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="h-[2px] w-6 sm:w-8 bg-primary" />
                <span className="text-[10px] sm:text-[11px] font-black tracking-[0.4em] text-primary uppercase">{t("dashboard.identity")}</span>
              </div>

              <CyberpunkCard className="h-auto p-0 border-foreground/10 group" hover={false}>
                <div className="p-6 sm:p-8 space-y-6 sm:space-y-8">
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-16 sm:w-20 bg-foreground flex items-center justify-center relative overflow-hidden shrink-0">
                      <User className="h-10 w-8 sm:h-12 sm:w-12 text-black" />
                      <motion.div
                        animate={{ top: ["-100%", "200%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-2 bg-primary/20 blur-md pointer-events-none"
                      />
                    </div>
                    <div className="text-right">
                      <span className="text-[8px] sm:text-[9px] font-black tracking-[0.3em] text-foreground/20 uppercase block">{t("dashboard.rank")}</span>
                      <CyberpunkBadge variant="status">{lvl.name}</CyberpunkBadge>
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-none mb-1">
                      {progress.name}
                    </h1>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[8px] sm:text-[9px] font-mono text-foreground/30 uppercase tracking-[0.2em]">
                      <Terminal className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                      <span>UID: 0x{Math.random().toString(16).substring(2, 10).toUpperCase()}</span>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-foreground/5">
                    <div className="flex justify-between text-[9px] sm:text-[10px] font-black tracking-widest uppercase">
                      <span className="text-foreground/30">{t("dashboard.neuralSync")}</span>
                      <span className="text-primary">{Math.round(lvl.progress)}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-foreground/5 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${lvl.progress}%` }}
                        className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                      />
                      {/* Animated scanner line */}
                      <motion.div
                        animate={{ left: ["-100%", "200%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-y-0 w-8 sm:w-10 bg-foreground/30 skew-x-[30deg] blur-md pointer-events-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-3 sm:p-4 bg-foreground/[0.02] border-t border-foreground/5 flex justify-center">
                  <Link to="/profile" className="w-full">
                    <CyberpunkButton variant="outline" className="w-full h-8 sm:h-10 text-[9px] sm:text-[10px] tracking-widest">
                      {t("dashboard.expandDossier")}
                    </CyberpunkButton>
                  </Link>
                </div>
              </CyberpunkCard>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="p-4 sm:p-6 border border-foreground/10 bg-foreground/[0.02] space-y-1.5 sm:space-y-2 relative overflow-hidden group hover:border-primary/30 transition-colors">
                  <span className="text-[8px] sm:text-[9px] font-black tracking-widest text-foreground/20 uppercase block">{t("dashboard.xpTotal")}</span>
                  <p className="text-2xl sm:text-3xl font-black font-mono">{progress.totalXP}</p>
                  <Zap className="absolute bottom-1.5 sm:bottom-2 right-1.5 sm:right-2 h-2.5 w-2.5 sm:h-3 sm:w-3 text-foreground/5 group-hover:text-primary/20 transition-colors" />
                </div>
                <div className="p-4 sm:p-6 border border-foreground/10 bg-foreground/[0.02] space-y-1.5 sm:space-y-2 relative overflow-hidden group hover:border-crimson/30 transition-colors">
                  <span className="text-[8px] sm:text-[9px] font-black tracking-widest text-foreground/20 uppercase block">{t("dashboard.streak")}</span>
                  <p className="text-2xl sm:text-3xl font-black text-crimson font-mono">{progress.currentStreak}</p>
                  <Flame className="absolute bottom-1.5 sm:bottom-2 right-1.5 sm:right-2 h-2.5 w-2.5 sm:h-3 sm:w-3 text-foreground/5 group-hover:text-crimson/20 transition-colors" />
                </div>
              </div>
            </section>

            <section className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="h-[2px] w-6 sm:w-8 bg-foreground/20" />
                <span className="text-[10px] sm:text-[11px] font-black tracking-[0.4em] text-foreground/40 uppercase">{t("dashboard.metrics")}</span>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {[
                  { label: "CORE_TEMP", value: "32°C", color: "bg-green-500", icon: Activity },
                  { label: "MEMORY_STABILITY", value: "99.2%", color: "bg-primary", icon: Cpu },
                  { label: "FIREWALL", value: "ACTIVE", color: "bg-green-500", icon: Shield }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between p-3 sm:p-4 border border-foreground/5 bg-foreground/[0.01] group hover:bg-foreground/[0.02] transition-colors">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <stat.icon className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-foreground/20 group-hover:text-foreground/40 transition-colors" />
                      <span className="text-[8px] sm:text-[9px] font-black tracking-widest text-foreground/30 uppercase">{stat.label}</span>
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-black tracking-widest font-mono text-foreground/60">{stat.value}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: SYSTEM OVERVIEW & LAST ACTIVE */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-12">
            <header className="flex flex-col md:flex-row md:items-end justify-between border-b border-foreground/10 pb-6 sm:pb-8 gap-4 sm:gap-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="h-[2px] w-8 sm:w-12 bg-primary" />
                  <span className="text-[10px] sm:text-[11px] font-black tracking-[0.4em] text-primary uppercase">{t("dashboard.missionControl")}</span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">{t("dashboard.systemOverview")}</h2>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 border border-foreground/10 bg-foreground/[0.02]">
                <div className="flex flex-col items-end">
                  <span className="text-[8px] sm:text-[9px] font-black tracking-[0.2em] text-foreground/20 uppercase">{t("dashboard.systemReady")}</span>
                  <span className="text-[9px] sm:text-[10px] font-black tracking-[0.2em] uppercase text-primary">V4.2.0_STABLE</span>
                </div>
                <Satellite className="h-4 w-4 sm:h-5 text-primary animate-pulse" />
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Programming Languages Portal Card */}
              <CyberpunkCard className="p-8 border-foreground/10 bg-foreground/[0.01] flex flex-col justify-between group" hover={false}>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Library className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black uppercase tracking-tight">{t("nav.languages")}</h3>
                      <p className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">{t("dashboard.activeNodes")}</p>
                    </div>
                  </div>
                  <p className="text-[11px] text-foreground/40 leading-relaxed uppercase font-black tracking-widest">
                    Access all available curriculum tracks. Master HTML, CSS, and JavaScript protocols to become a core architecture operative.
                  </p>
                </div>
                
                <Link to="/courses" className="mt-8">
                  <CyberpunkButton variant="outline" className="w-full group-hover:border-primary/50 transition-colors">
                    <span className="group-hover:text-primary transition-colors">{t("dashboard.initiateLink")}</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform group-hover:text-primary" />
                  </CyberpunkButton>
                </Link>
              </CyberpunkCard>

              {/* Terminal / Quick Access */}
              <CyberpunkCard className="p-8 border-foreground/10 bg-foreground/[0.01] flex flex-col justify-between group" hover={false}>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                      <Terminal className="h-6 w-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black uppercase tracking-tight">{t("nav.compiler")}</h3>
                      <p className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">{t("dashboard.sandboxEnvironment")}</p>
                    </div>
                  </div>
                  <p className="text-[11px] text-foreground/40 leading-relaxed uppercase font-black tracking-widest">
                    {t("dashboard.terminalDescription")}
                  </p>
                </div>
                
                <Link to="/compiler" className="mt-8">
                  <CyberpunkButton variant="outline" className="w-full group-hover:border-amber-500/50 transition-colors">
                    <span className="group-hover:text-amber-500 transition-colors">{t("dashboard.initializeTerminal")}</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform group-hover:text-amber-500" />
                  </CyberpunkButton>
                </Link>
              </CyberpunkCard>

              {/* Network Stats / Extra Content */}
              <div className="md:col-span-2 p-8 border border-dashed border-foreground/10 bg-foreground/[0.01] relative overflow-hidden group">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-emerald-500/10 flex items-center justify-center rounded-full border border-emerald-500/20 animate-pulse">
                      <Network className="h-8 w-8 text-emerald-500" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-2xl font-black uppercase tracking-tighter italic">{t("dashboard.globalNetwork")}</h3>
                      <p className="text-[10px] font-mono text-foreground/30 uppercase tracking-widest">{t("dashboard.connectedNodes")}: 1,204,582</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <p className="text-2xl font-black font-mono text-primary">0.04ms</p>
                      <p className="text-[8px] font-black text-foreground/20 uppercase tracking-widest">{t("dashboard.latency")}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-black font-mono text-emerald-500">99.9%</p>
                      <p className="text-[8px] font-black text-foreground/20 uppercase tracking-widest">{t("dashboard.uptime")}</p>
                    </div>
                  </div>
                </div>
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER METADATA */}
      <footer className="container mt-24 sm:mt-32 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8 opacity-20">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-foreground flex items-center justify-center">
            <span className="text-black font-black text-xs sm:text-[10px]">CM</span>
          </div>
          <span className="text-[9px] sm:text-[10px] font-black tracking-[0.5em] uppercase">SYSTEM_ARCHIVE_2026</span>
        </div>
        <div className="flex gap-8 sm:gap-12 text-[9px] font-black tracking-[0.3em] uppercase">
          <span>STABILITY: OPTIMAL</span>
          <span>ENCRYPTION: AES-256</span>
          <span>UPTIME: 99.99%</span>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;

const Lock = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
