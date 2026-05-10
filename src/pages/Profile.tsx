import { Link, Navigate } from "react-router-dom";
import { useProgress } from "@/hooks/useProgress";
import { getLevel, LEVELS } from "@/lib/progress";
import { tracks } from "@/lib/curriculum";
import { Trophy, Flame, Zap, Shield, Activity, User, AlertTriangle, Cpu, Network, Terminal as TerminalIcon } from "lucide-react";
import { CyberpunkButton, CyberpunkCard, CyberpunkBadge } from "@/components/ui/cyberpunk";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Profile = () => {
  const { progress, ready } = useProgress();
  if (ready && !progress) return <Navigate to="/" replace />;
  if (!progress) return null;

  const lvl = getLevel(progress.totalXP);
  
  const resetProgress = () => {
    if (confirm("CRITICAL_ACTION: RESET_ALL_NEURAL_DATA? THIS_CANNOT_BE_REVERSED.")) {
      localStorage.removeItem("codemastery-progress-v1");
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative selection:bg-primary/30 pb-24 font-outfit">
      {/* GLOBAL BACKGROUND ACCENTS */}
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
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,18,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>

      {/* TOP NAVIGATION / STATUS BAR */}
      <div className="relative z-50 border-b border-foreground/10 bg-black/50 backdrop-blur-md">
        <div className="container h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-60">IDENTITY_STATUS: VERIFIED</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-foreground/20 text-[10px] font-mono">
              <span>|</span>
              <span className="tracking-[0.2em]">NEURAL_LINK: 0x{Math.random().toString(16).substring(2, 10).toUpperCase()}</span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-[10px] font-black tracking-[0.2em]">
            <span className="text-primary hidden sm:inline">PACKET_SYNC: 100%</span>
            <span className="opacity-40">UPLINK: ACTIVE</span>
          </div>
        </div>
      </div>

      <div className="container relative z-10 pt-16">
        {/* HEADER SECTION - IDENTITY DOSSIER */}
        <header className="mb-24 border-b border-foreground/10 pb-12">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 flex flex-col md:flex-row items-start md:items-center gap-12">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative group"
              >
                <div className="w-40 h-40 bg-foreground flex items-center justify-center relative overflow-hidden">
                  <User className="h-20 w-20 text-black" />
                  <div className="absolute inset-0 border-4 border-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  {/* SCANLINE ANIMATION */}
                  <motion.div 
                    animate={{ top: ["-100%", "200%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-4 bg-primary/20 blur-md pointer-events-none"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-black p-3 shadow-[4px_4px_0px_black]">
                  <Shield className="h-6 w-6" />
                </div>
              </motion.div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-[2px] w-12 bg-primary" />
                  <span className="text-[11px] font-black tracking-[0.4em] text-primary uppercase">OPERATIVE_ID</span>
                </div>
                <div>
                  <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
                    {progress.name.toUpperCase()}
                  </h1>
                  <div className="flex flex-wrap gap-4 font-mono text-[10px] tracking-[0.2em] text-foreground/30 uppercase">
                    <span>INIT_DATE: {new Date(progress.createdAt).toLocaleDateString().toUpperCase()}</span>
                    <span>|</span>
                    <span>LAST_SYNC: {new Date(progress.lastActiveAt).toLocaleTimeString().toUpperCase()}</span>
                    <span>|</span>
                    <span className="text-primary">RANK: {lvl.name.toUpperCase()}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center gap-6">
              <div className="p-6 border border-foreground/10 bg-foreground/[0.02] relative group">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[9px] font-black tracking-[0.3em] text-foreground/20 uppercase">SYSTEM_INTEGRITY</span>
                  <Activity className="h-3 w-3 text-primary" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[11px] font-black font-mono">
                    <span className="text-foreground/40">NEURAL_LOAD</span>
                    <span className="text-primary">84%</span>
                  </div>
                  <div className="h-1 w-full bg-foreground/5 relative overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-primary w-[84%]" />
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1 p-4 border border-foreground/10 bg-foreground/[0.02] flex flex-col items-center gap-2">
                  <Cpu className="h-4 w-4 text-foreground/20" />
                  <span className="text-[8px] font-black tracking-widest text-foreground/40 uppercase text-center">CORE_STABILITY</span>
                  <span className="text-[12px] font-black text-green-500 font-mono">99.2%</span>
                </div>
                <div className="flex-1 p-4 border border-foreground/10 bg-foreground/[0.02] flex flex-col items-center gap-2">
                  <Network className="h-4 w-4 text-foreground/20" />
                  <span className="text-[8px] font-black tracking-widest text-foreground/40 uppercase text-center">NET_LATENCY</span>
                  <span className="text-[12px] font-black text-primary font-mono">14MS</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* STATS GRID - DATA NODES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <CyberpunkCard className="h-auto" hover={false}>
            <div className="flex flex-col justify-between h-full space-y-8">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase">ACCUMULATED_XP</span>
                <Zap className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-7xl font-black tracking-tighter mb-2 font-mono">{progress.totalXP}</p>
                <p className="text-[9px] font-black tracking-widest text-foreground/20 uppercase">XP_UNITS_SECURED</p>
              </div>
              <div className="h-[2px] w-full bg-foreground/5 relative overflow-hidden">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }} 
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-primary/30" 
                />
              </div>
            </div>
          </CyberpunkCard>

          <CyberpunkCard className="h-auto" hover={false}>
            <div className="flex flex-col justify-between h-full space-y-8">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black tracking-[0.3em] text-crimson uppercase">SYNC_STREAK</span>
                <Flame className="h-4 w-4 text-crimson" />
              </div>
              <div>
                <div className="flex items-baseline gap-3">
                  <p className="text-7xl font-black tracking-tighter mb-2 text-crimson font-mono">{progress.currentStreak}</p>
                  <span className="text-[11px] font-black tracking-widest text-foreground/20 uppercase">CYCLES</span>
                </div>
                <p className="text-[9px] font-black tracking-widest text-foreground/40 uppercase">PERSONAL_BEST: {progress.longestStreak} CYCLES</p>
              </div>
              <div className="h-[2px] w-full bg-foreground/5 relative overflow-hidden">
                <motion.div 
                  animate={{ x: ["100%", "-100%"] }} 
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-crimson/30" 
                />
              </div>
            </div>
          </CyberpunkCard>

          <CyberpunkCard className="h-auto" hover={false}>
            <div className="flex flex-col justify-between h-full space-y-8">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black tracking-[0.3em] text-foreground/40 uppercase">VERIFIED_MATRIX</span>
                <Trophy className="h-4 w-4 text-foreground/40" />
              </div>
              <div>
                <div className="flex items-baseline gap-3">
                  <p className="text-7xl font-black tracking-tighter mb-2 font-mono">
                    {Object.values(progress.tracks).filter((t) => t.certificateId).length}
                  </p>
                  <span className="text-[11px] font-black tracking-widest text-foreground/20 uppercase">/ 3</span>
                </div>
                <p className="text-[9px] font-black tracking-widest text-foreground/40 uppercase">CREDENTIALS_AUTHORIZED</p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={cn("h-1 bg-foreground/5", i <= Object.values(progress.tracks).filter((t) => t.certificateId).length && "bg-primary shadow-[0_0_10px_rgba(0,212,255,0.5)]")} />
                ))}
              </div>
            </div>
          </CyberpunkCard>
        </div>

        {/* PROGRESS ANALYTICS - NEURAL LEVEL STATUS */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-8 space-y-12">
            <div className="flex items-end justify-between border-b border-foreground/10 pb-6">
              <div className="space-y-2">
                <span className="text-[11px] font-black tracking-[0.4em] text-primary uppercase">EVOLUTION_PATH</span>
                <h2 className="text-5xl font-black uppercase tracking-tighter">NEURAL_LEVEL_STATUS</h2>
              </div>
              <div className="text-right flex flex-col items-end">
                <span className="text-[9px] font-black tracking-[0.2em] opacity-30 uppercase">SYSTEM_RANK</span>
                <CyberpunkBadge variant="status">{lvl.name}</CyberpunkBadge>
              </div>
            </div>

            <div className="p-10 border border-foreground/10 bg-foreground/[0.01] relative overflow-hidden group">
              {/* DECORATIVE CORNER */}
              <div className="absolute top-0 left-0 w-2 h-2 bg-primary" />
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-12">
                <div className="space-y-1">
                  <p className="text-[10px] font-black tracking-[0.3em] text-foreground/30 uppercase font-mono">CURRENT_IDENTIFIER</p>
                  <p className="text-8xl font-black tracking-tighter leading-none font-mono">LVL_{lvl.level.toString().padStart(2, '0')}</p>
                </div>
                <div className="text-right space-y-4">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black tracking-[0.3em] text-foreground/30 uppercase">NEXT_THRESHOLD</p>
                    <p className="text-4xl font-black tracking-tighter font-mono">{lvl.nextMin} XP</p>
                  </div>
                  <p className="text-[11px] font-black tracking-widest text-primary uppercase">
                    {lvl.nextMin - progress.totalXP} XP REQUIRED FOR ASCENSION
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between text-[11px] font-black font-mono uppercase">
                  <span className="text-foreground/30">{progress.totalXP - lvl.levelMin} / {lvl.nextMin - lvl.levelMin} SEGMENTS</span>
                  <span className="text-primary animate-pulse">{Math.round(lvl.progress)}%_SYNC_COMPLETE</span>
                </div>
                <div className="h-6 w-full bg-foreground/5 relative border border-foreground/5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${lvl.progress}%` }}
                    className="h-full bg-primary shadow-[0_0_30px_rgba(0,212,255,0.4)] relative"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.3)_50%,transparent_100%)] animate-shimmer" />
                  </motion.div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-7 gap-4 pt-12 mt-12 border-t border-foreground/5">
                {LEVELS.map((l, i) => {
                  const isActive = i + 1 === lvl.level;
                  const isCompleted = i + 1 < lvl.level;
                  return (
                    <div 
                      key={i} 
                      className={cn(
                        "p-4 border transition-all duration-300 flex flex-col items-center justify-center gap-2 font-mono relative group/node",
                        isActive ? "bg-primary border-primary text-black shadow-[0_0_25px_rgba(0,212,255,0.3)] scale-110 z-10" : 
                        isCompleted ? "bg-foreground/5 border-foreground/20 text-foreground" : "bg-transparent border-foreground/5 text-foreground/10"
                      )}
                    >
                      <span className="text-[8px] font-black tracking-tighter uppercase">{l.name.substring(0, 3)}</span>
                      <span className="text-[14px] font-black">{i + 1}</span>
                      {isActive && (
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-black" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-12">
            <div className="flex items-end justify-between border-b border-foreground/10 pb-6">
              <div className="space-y-2">
                <span className="text-[11px] font-black tracking-[0.4em] text-crimson uppercase">DATA_STREAMS</span>
                <h2 className="text-5xl font-black uppercase tracking-tighter">VECTORS</h2>
              </div>
            </div>

            <div className="space-y-6">
              {tracks.map((t) => {
                const tp = progress.tracks[t.id];
                const completed = Object.values(tp.chapters).filter((c) => c.status === "completed").length;
                const total = t.chapters.length;
                const pct = (completed / total) * 100;
                
                return (
                  <div key={t.id} className="p-8 border border-foreground/10 bg-foreground/[0.01] space-y-6 hover:border-primary/30 transition-all group relative overflow-hidden">
                    {tp.certificateId && (
                      <div className="absolute top-0 right-0 p-2">
                        <Trophy className="h-4 w-4 text-primary animate-pulse" />
                      </div>
                    )}
                    
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <span className="text-[9px] font-black tracking-[0.3em] text-foreground/20 uppercase font-mono">{t.id}_STREAM_ACTIVE</span>
                        <h3 className="text-2xl font-black tracking-tighter group-hover:text-primary transition-colors uppercase">{t.title}</h3>
                      </div>
                      {tp.certificateId && (
                        <CyberpunkButton asChild variant="outline" size="sm" className="h-8 px-4 text-[9px]">
                          <Link to={`/certificate/${tp.certificateId}`}>VIEW_CREDENTIAL</Link>
                        </CyberpunkButton>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-[10px] font-black tracking-widest font-mono">
                        <span className="text-foreground/30">{completed}/{total} NODES_RESOLVED</span>
                        <span className={cn(pct === 100 ? "text-green-500" : "text-primary")}>{Math.round(pct)}%_SYNC</span>
                      </div>
                      <div className="h-[2px] w-full bg-foreground/5 relative">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          className={cn("h-full relative", pct === 100 ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" : "bg-primary shadow-[0_0_10px_rgba(0,212,255,0.5)]")}
                        >
                          {pct > 0 && pct < 100 && (
                            <motion.div 
                              animate={{ left: ["0%", "100%"] }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="absolute top-0 bottom-0 w-4 bg-foreground/40 blur-sm"
                            />
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* SYSTEM LOG / ARCHIVE ACTIONS */}
        <section className="mt-32 pt-16 border-t-2 border-foreground/10">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8 space-y-6">
              <div className="flex items-center gap-4 text-crimson">
                <AlertTriangle className="h-6 w-6" />
                <h3 className="text-2xl font-black tracking-[0.2em] uppercase">TERMINAL_WIPE_PROTOCOL</h3>
              </div>
              <div className="bg-crimson/5 border-l-4 border-crimson p-6 space-y-4">
                <p className="text-[12px] font-black tracking-widest text-crimson uppercase leading-loose">
                  WARNING: INITIALIZING THE WIPE PROTOCOL WILL PERMANENTLY ERASE ALL NEURAL SYNC DATA, CREDENTIALS, AND EVOLUTION PROGRESS. THIS ACTION IS DESTRUCTIVE AND IRREVERSIBLE.
                </p>
                <div className="flex items-center gap-3 text-[10px] font-mono text-crimson/60 uppercase">
                  <TerminalIcon className="h-3 w-3" />
                  <span>SUDO_RM_RF_IDENTITY_ARCHIVE</span>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-4 flex justify-end">
              <CyberpunkButton variant="outline" onClick={resetProgress} className="border-crimson/50 text-crimson hover:bg-crimson hover:text-foreground w-full md:w-auto h-16 px-12 group">
                <div className="flex flex-col items-center">
                  <span className="text-[14px] font-black tracking-[0.2em]">EXECUTE_WIPE</span>
                  <span className="text-[8px] font-mono opacity-50 group-hover:opacity-100">AUTH_REQUIRED: 0xDEADBEEF</span>
                </div>
              </CyberpunkButton>
            </div>
          </div>
        </section>

        {/* FOOTER METADATA */}
        <footer className="mt-32 flex flex-col sm:flex-row justify-between items-center gap-8 opacity-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-foreground flex items-center justify-center">
              <span className="text-black font-black text-xs">CM</span>
            </div>
            <span className="text-[10px] font-black tracking-[0.5em] uppercase">SYSTEM_ARCHIVE_2026</span>
          </div>
          <div className="flex gap-12 text-[9px] font-black tracking-[0.3em] uppercase">
            <span>STABILITY: OPTIMAL</span>
            <span>ENCRYPTION: AES-256</span>
            <span>NODES: {Math.floor(Math.random() * 100000)}</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Profile;


