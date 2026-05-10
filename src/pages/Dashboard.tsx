import { Link, Navigate } from "react-router-dom";
import { useProgress } from "@/hooks/useProgress";
import { tracks } from "@/lib/curriculum";
import { Code2, Palette, Zap, ArrowRight, Flame, Trophy, Activity, Shield, Cpu, Terminal, Satellite, Network, User } from "lucide-react";
import { getLevel } from "@/lib/progress";
import { motion } from "framer-motion";
import { CyberpunkCard, CyberpunkBadge, CyberpunkButton } from "@/components/ui/cyberpunk";
import { cn } from "@/lib/utils";

const iconMap = { html: Code2, css: Palette, javascript: Zap };

const Dashboard = () => {
  const { progress, ready } = useProgress();
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

      {/* TOP STATUS BAR */}
      <div className="relative z-50 border-b border-foreground/10 bg-black/50 backdrop-blur-md">
        <div className="container h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary animate-pulse rounded-full" />
              <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-60">SYSTEM_NODE: MASTER_OVERRIDE</span>
            </div>
            <div className="hidden md:flex items-center gap-6 border-l border-foreground/10 pl-8">
              <div className="flex items-center gap-2 text-foreground/20 text-[9px] font-mono">
                <Cpu className="h-3 w-3" />
                <span className="tracking-[0.2em]">BITRATE: 4096_KBPS</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/20 text-[9px] font-mono">
                <Network className="h-3 w-3" />
                <span className="tracking-[0.2em]">LATENCY: 14MS</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-primary hidden sm:block">SYNC_STABILITY: OPTIMAL</span>
            <div className="px-4 py-1 bg-foreground text-black text-[10px] font-black tracking-widest uppercase shadow-[4px_4px_0px_rgba(0,212,255,0.3)]">
              {new Date().toLocaleTimeString().toUpperCase()}
            </div>
          </div>
        </div>
      </div>

      <div className="container relative z-10 pt-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT COLUMN: OPERATIVE DOSSIER */}
          <div className="lg:col-span-4 space-y-12">
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-8 bg-primary" />
                <span className="text-[11px] font-black tracking-[0.4em] text-primary uppercase">IDENTITY_DOSSIER</span>
              </div>
              
              <CyberpunkCard className="h-auto p-0 border-foreground/10 group" hover={false}>
                <div className="p-8 space-y-8">
                  <div className="flex items-start justify-between">
                    <div className="w-20 h-20 bg-foreground flex items-center justify-center relative overflow-hidden shrink-0">
                      <User className="h-12 w-12 text-black" />
                      <motion.div 
                        animate={{ top: ["-100%", "200%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-2 bg-primary/20 blur-md pointer-events-none"
                      />
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] font-black tracking-[0.3em] text-foreground/20 uppercase block">RANK_STATUS</span>
                      <CyberpunkBadge variant="status">{lvl.name}</CyberpunkBadge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h1 className="text-5xl font-black uppercase tracking-tighter leading-none mb-1">
                      {progress.name}
                    </h1>
                    <div className="flex items-center gap-2 text-[9px] font-mono text-foreground/30 uppercase tracking-[0.2em]">
                      <Terminal className="h-3 w-3" />
                      <span>UID: 0x{Math.random().toString(16).substring(2, 10).toUpperCase()}</span>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-foreground/5">
                    <div className="flex justify-between text-[10px] font-black tracking-widest uppercase">
                      <span className="text-foreground/30">NEURAL_SYNC</span>
                      <span className="text-primary">{Math.round(lvl.progress)}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-foreground/5 relative overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${lvl.progress}%` }}
                        className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_15px_rgba(0,212,255,0.4)]" 
                      />
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-foreground/[0.02] border-t border-foreground/5 flex justify-center">
                  <Link to="/profile" className="w-full">
                    <CyberpunkButton variant="outline" className="w-full h-10 text-[10px] tracking-widest">
                      EXPAND_DOSSIER
                    </CyberpunkButton>
                  </Link>
                </div>
              </CyberpunkCard>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 border border-foreground/10 bg-foreground/[0.02] space-y-2 relative overflow-hidden group hover:border-primary/30 transition-colors">
                  <span className="text-[9px] font-black tracking-widest text-foreground/20 uppercase block">XP_TOTAL</span>
                  <p className="text-3xl font-black font-mono">{progress.totalXP}</p>
                  <Zap className="absolute bottom-2 right-2 h-3 w-3 text-foreground/5 group-hover:text-primary/20 transition-colors" />
                </div>
                <div className="p-6 border border-foreground/10 bg-foreground/[0.02] space-y-2 relative overflow-hidden group hover:border-crimson/30 transition-colors">
                  <span className="text-[9px] font-black tracking-widest text-foreground/20 uppercase block">STREAK</span>
                  <p className="text-3xl font-black text-crimson font-mono">{progress.currentStreak}</p>
                  <Flame className="absolute bottom-2 right-2 h-3 w-3 text-foreground/5 group-hover:text-crimson/20 transition-colors" />
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-8 bg-foreground/20" />
                <span className="text-[11px] font-black tracking-[0.4em] text-foreground/40 uppercase">SYSTEM_METRICS</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: "CORE_TEMP", value: "32°C", color: "bg-green-500", icon: Activity },
                  { label: "MEMORY_STABILITY", value: "99.2%", color: "bg-primary", icon: Cpu },
                  { label: "FIREWALL", value: "ACTIVE", color: "bg-green-500", icon: Shield }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border border-foreground/5 bg-foreground/[0.01] group hover:bg-foreground/[0.02] transition-colors">
                    <div className="flex items-center gap-3">
                      <stat.icon className="h-3 w-3 text-foreground/20 group-hover:text-foreground/40 transition-colors" />
                      <span className="text-[9px] font-black tracking-widest text-foreground/30 uppercase">{stat.label}</span>
                    </div>
                    <span className="text-[10px] font-black tracking-widest font-mono text-foreground/60">{stat.value}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: ACTIVE MISSION BOARD */}
          <div className="lg:col-span-8 space-y-12">
            <header className="flex flex-col md:flex-row md:items-end justify-between border-b border-foreground/10 pb-8 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-[2px] w-12 bg-primary" />
                  <span className="text-[11px] font-black tracking-[0.4em] text-primary uppercase">MISSION_CONTROL_BOARD</span>
                </div>
                <h2 className="text-6xl font-black uppercase tracking-tighter leading-none">ACTIVE_VECTORS</h2>
              </div>
              <div className="flex items-center gap-4 px-6 py-4 border border-foreground/10 bg-foreground/[0.02]">
                <div className="flex flex-col items-end">
                  <span className="text-[8px] font-black tracking-[0.2em] text-foreground/20 uppercase">SYSTEM_READY</span>
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase text-primary">V4.2.0_STABLE</span>
                </div>
                <Satellite className="h-5 w-5 text-primary animate-pulse" />
              </div>
            </header>

            <div className="grid md:grid-cols-2 gap-8">
              {tracks.map((track) => {
                const Icon = iconMap[track.id as keyof typeof iconMap];
                const tp = progress.tracks[track.id];
                const completed = Object.values(tp.chapters).filter((c) => c.status === "completed").length;
                const total = track.chapters.length;
                const pct = total > 0 ? (completed / total) * 100 : 0;
                
                const images = {
                  html: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop",
                  css: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
                  javascript: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=1000&auto=format&fit=crop"
                };

                return (
                  <Link key={track.id} to={`/learn/${track.id}`} className="group block h-full">
                    <CyberpunkCard className="h-full p-0 flex flex-col border-foreground/10 group-hover:border-primary transition-all duration-500 overflow-hidden" hover={false}>
                      {/* Image Preview with overlay */}
                      <div className="h-56 relative overflow-hidden border-b border-foreground/10">
                        <img 
                          src={images[track.id as keyof typeof images]} 
                          alt={track.title}
                          className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                        <div className="absolute top-4 left-4">
                           <div className={cn(
                            "px-3 py-1 text-[9px] font-black tracking-widest border transition-all",
                            tp.started ? "bg-primary border-primary text-black" : "bg-black/80 border-foreground/20 text-foreground/40"
                          )}>
                            {tp.started ? "ACTIVE_UPLINK" : "STDBY_MODE"}
                          </div>
                        </div>
                        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                          <div className="space-y-1">
                            <span className="text-[8px] font-black tracking-widest text-primary uppercase">VECTOR_ID: {track.id.toUpperCase()}</span>
                            <h4 className="text-4xl font-black tracking-tighter uppercase leading-none">{track.title}</h4>
                          </div>
                          <div className="w-12 h-12 border border-foreground/20 flex items-center justify-center bg-black/60 group-hover:border-primary transition-colors relative">
                            <Icon className="h-6 w-6 text-foreground/60 group-hover:text-primary" />
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      </div>

                      <div className="p-8 flex-1 flex flex-col justify-between space-y-8">
                        <p className="text-[11px] font-black tracking-widest text-foreground/40 uppercase leading-relaxed min-h-[3em]">
                          {track.tagline}
                        </p>

                        <div className="space-y-4">
                          <div className="flex justify-between items-end">
                            <div className="flex flex-col gap-1">
                              <span className="text-[8px] font-black tracking-widest text-foreground/20 uppercase">SYNCHRONIZATION_INDEX</span>
                              <span className="text-[14px] font-black tracking-widest font-mono uppercase">{completed}/{total} NODES_RESOLVED</span>
                            </div>
                            <span className="text-3xl font-black text-primary font-mono">{Math.round(pct)}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-foreground/5 relative overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${pct}%` }}
                              className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                            />
                            {/* Animated scanner line */}
                            <motion.div 
                              animate={{ left: ["-100%", "200%"] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                              className="absolute inset-y-0 w-12 bg-foreground/30 skew-x-[30deg] blur-md pointer-events-none"
                            />
                          </div>
                        </div>

                        <div className="pt-8 border-t border-foreground/5 flex items-center justify-between group-hover:border-primary/20 transition-colors">
                           <div className="flex items-center gap-3">
                             <span className="text-[11px] font-black tracking-[0.3em] group-hover:text-primary transition-all uppercase">
                               {tp.started ? "CONTINUE_UPLINK" : "INITIATE_LINK"}
                             </span>
                             <ArrowRight className="h-3 w-3 group-hover:translate-x-2 transition-transform text-primary" />
                           </div>
                           {tp.certificateId ? (
                             <div className="flex items-center gap-2 text-primary px-3 py-1 border border-primary/20 bg-primary/10">
                               <Shield className="h-3 w-3" />
                               <span className="text-[9px] font-black tracking-widest">VERIFIED_PROTOCOL</span>
                             </div>
                           ) : (
                             <div className="flex items-center gap-2 text-foreground/10 px-3 py-1 border border-foreground/5">
                               <Trophy className="h-3 w-3" />
                               <span className="text-[9px] font-black tracking-widest">CERT_PENDING</span>
                             </div>
                           )}
                        </div>
                      </div>
                    </CyberpunkCard>
                  </Link>
                );
              })}
              
              {/* Coming Soon / Locked Node */}
              <div className="group relative">
                <CyberpunkCard className="h-full p-8 flex flex-col justify-center items-center border-dashed border-foreground/5 bg-transparent opacity-40 hover:opacity-60 transition-all" hover={false}>
                  <div className="w-16 h-16 border-2 border-dashed border-foreground/20 flex items-center justify-center mb-6">
                    <Lock className="h-6 w-6 text-foreground/20" />
                  </div>
                  <div className="text-center space-y-2">
                    <span className="text-[9px] font-black tracking-[0.4em] uppercase text-foreground/20">NEW_VECTOR_DETECTED</span>
                    <h4 className="text-2xl font-black uppercase tracking-tighter opacity-20 font-outfit">UPCOMING_MODULE</h4>
                    <p className="text-[9px] font-mono tracking-widest opacity-20">DECRYPTING_PACKETS...</p>
                  </div>
                </CyberpunkCard>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER METADATA */}
      <footer className="container mt-32 flex flex-col sm:flex-row justify-between items-center gap-8 opacity-20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-foreground flex items-center justify-center">
            <span className="text-black font-black text-xs">CM</span>
          </div>
          <span className="text-[10px] font-black tracking-[0.5em] uppercase">SYSTEM_ARCHIVE_2026</span>
        </div>
        <div className="flex gap-12 text-[9px] font-black tracking-[0.3em] uppercase">
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
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
