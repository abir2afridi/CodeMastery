import { Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Code2, Palette, Zap, ArrowRight, Terminal, Shield, Activity, Lock } from "lucide-react";
import { CyberpunkButton, CyberpunkCard, CyberpunkBadge } from "@/components/ui/cyberpunk";
import { useProgress } from "@/hooks/useProgress";

const Landing = () => {
  const { progress, ready } = useProgress();
  if (ready && progress) return <Navigate to="/learn" replace />;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative selection:bg-primary/30">
      {/* AES-256 ENCRYPTION STATUS BANNER */}
      <div className="fixed top-0 left-0 right-0 z-[60] pointer-events-none">
        <div className="bg-black/80 border-b border-foreground/10 backdrop-blur-xl py-2 px-4 flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-60">ENCRYPTION_LINK: SECURE</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-foreground/20 text-[10px]">
              <span>|</span>
              <span className="tracking-[0.2em]">AES-256_PROTOCOL: ACTIVE</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-black tracking-[0.2em]">
            <span className="text-primary animate-pulse">UPTIME: 99.99%</span>
            <span className="hidden sm:inline opacity-40">REGION: US-EAST-01</span>
          </div>
        </div>
      </div>

      {/* GLOBAL BACKGROUND ACCENTS (LIGHT LEAKS) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            opacity: [0.05, 0.08, 0.05],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            opacity: [0.03, 0.06, 0.03],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-crimson/5 blur-[150px] rounded-full" 
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,18,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>

      <header className="container relative z-50 flex h-32 items-end justify-between pb-6 border-b border-foreground/10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-foreground flex items-center justify-center group cursor-pointer overflow-hidden">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.4 }}
            >
              <Code2 className="h-7 w-7 text-black" />
            </motion.div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-black text-3xl tracking-widest leading-none">CODE</h1>
            <h1 className="font-black text-3xl tracking-widest leading-none text-primary">MASTERY</h1>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden lg:flex flex-col items-end">
            <span className="text-[9px] font-black tracking-[0.3em] opacity-40">SYSTEM_VERSION</span>
            <span className="text-[11px] font-black tracking-[0.2em] text-primary">PROTOCOL_V4.2.0</span>
          </div>
          <CyberpunkButton variant="outline" size="sm" asChild>
            <Link to="/setup">INITIALIZE</Link>
          </CyberpunkButton>
        </div>
      </header>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="container py-32 md:py-56 text-left relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl relative z-10"
          >
            <div className="flex items-center gap-6 mb-10">
              <div className="h-[2px] w-16 bg-primary" />
              <span className="text-[11px] font-black tracking-[0.4em] text-primary uppercase">USER_STATUS: UNAUTHENTICATED</span>
              <div className="px-3 py-1 border border-primary/20 text-[9px] font-black tracking-[0.2em] text-primary/60">
                CONNECTION: STABLE
              </div>
            </div>
            
            <h2 className="text-7xl md:text-[11rem] font-black uppercase tracking-tighter mb-10 leading-[0.8] mix-blend-difference">
              BORN FROM <br />
              <span className="text-transparent border-t-2 border-b-2 border-foreground/10 py-4 inline-block">THE VOID</span> <br />
              <span className="text-primary">FORGED</span> IN CODE
            </h2>
            
            <div className="flex flex-col md:flex-row gap-12 items-start md:items-center mb-16">
              <p className="text-[13px] font-black tracking-[0.1em] text-foreground/40 max-w-xl uppercase leading-loose">
                THE DEFINITIVE PROTOCOL FOR MASTERING THE DIGITAL ARTS. 
                FROM THE FIRST <span className="text-foreground">{"<HTML>"}</span> TAG TO 
                INDUSTRIAL-GRADE DISTRIBUTED ARCHITECTURES. NO COMPROMISE.
              </p>
              <div className="h-20 w-[1px] bg-foreground/10 hidden md:block" />
              <div className="flex flex-col gap-2">
                <span className="text-[9px] font-black tracking-[0.3em] opacity-30 uppercase">ENROLLMENT_OPEN</span>
                <span className="text-[20px] font-black tracking-widest text-foreground">24,802 NODES ACTIVE</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <CyberpunkButton variant="brutalist" size="lg" asChild className="w-full sm:w-64">
                <Link to="/setup">BEGIN_ACQUISITION <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </CyberpunkButton>
              <CyberpunkButton variant="outline" size="lg" asChild className="w-full sm:w-64">
                <Link to="/compiler">OPEN_ENVIRONMENT <Terminal className="ml-2 h-4 w-4" /></Link>
              </CyberpunkButton>
            </div>
          </motion.div>

          {/* LARGE DECORATIVE BACKGROUND TEXT */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-[0.02] pointer-events-none select-none">
            <span className="text-[30rem] font-black leading-none tracking-tighter">PROTO</span>
          </div>
        </section>

        {/* CORE PHASES SECTION */}
        <section className="container py-24 border-t border-foreground/10">
          <div className="flex items-center justify-between mb-16">
            <div>
              <span className="text-[11px] font-black tracking-[0.4em] text-primary uppercase block mb-4">CURRICULUM_MATRIX</span>
              <h3 className="text-4xl md:text-6xl font-black">THE RECURSION PATH</h3>
            </div>
            <div className="hidden md:block text-right">
              <span className="text-[10px] font-black tracking-[0.2em] opacity-40 uppercase block">LAST_UPDATE</span>
              <span className="text-[11px] font-black tracking-[0.1em]">MAY_2026_HOTFIX</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Code2, 
                title: "STRUCTURE", 
                label: "PHASE_01", 
                desc: "HTML SEMANTICS & TECHNICAL ARCHITECTURE", 
                count: "50 MODULES",
                image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop"
              },
              { 
                icon: Palette, 
                title: "AESTHETICS", 
                label: "PHASE_02", 
                desc: "ADVANCED CSS, BRUTALIST UI & MOTION DESIGN", 
                count: "55 MODULES",
                image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
              },
              { 
                icon: Zap, 
                title: "LOGIC", 
                label: "PHASE_03", 
                desc: "JAVASCRIPT ENGINE & SYSTEM ASYNCHRONICITY", 
                count: "70 MODULES",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=1000&auto=format&fit=crop"
              },
            ].map((t, i) => (
              <CyberpunkCard key={t.title} image={t.image} hover={true} showPlayIcon={true}>
                <div className="h-full flex flex-col justify-between relative z-10">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-black tracking-[0.3em] text-primary px-2 py-1 bg-primary/10 border border-primary/20">{t.label}</span>
                      <t.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <h4 className="text-4xl font-black mb-4 tracking-tighter">{t.title}</h4>
                    <p className="text-[11px] font-black tracking-widest text-foreground/40 uppercase mb-8 leading-relaxed">{t.desc}</p>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-foreground/10">
                    <div className="flex flex-col">
                      <span className="text-[8px] font-black tracking-[0.3em] opacity-30 uppercase">DATA_SETS</span>
                      <span className="text-[13px] font-black tracking-widest text-primary">{t.count}</span>
                    </div>
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="w-10 h-10 border border-foreground/20 flex items-center justify-center bg-foreground/5"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </div>
                </div>
              </CyberpunkCard>
            ))}
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="container py-40">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-[11px] font-black tracking-[0.4em] text-crimson uppercase block mb-6">SYSTEM_CAPABILITIES</span>
              <h3 className="text-5xl md:text-7xl font-black mb-10 leading-none">ENGINEERED FOR SUPREMACY</h3>
              <p className="text-[13px] font-black tracking-[0.1em] text-foreground/30 uppercase leading-loose max-w-lg mb-12">
                EVERY INTERFACE INTERACTION IS OPTIMIZED FOR MAXIMUM COGNITIVE RETENTION 
                AND TECHNICAL PRECISION. NO DISTRACTIONS. NO WEAKNESS.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "LIVE_COMPILER", icon: Terminal },
                  { title: "ANALOGY_CORE", icon: Activity },
                  { title: "XP_PROTOCOL", icon: Zap },
                  { title: "CERT_MATRIX", icon: Shield },
                ].map((f) => (
                  <div key={f.title} className="p-6 border border-foreground/5 bg-foreground/[0.02] hover:border-foreground/20 transition-all group cursor-pointer">
                    <f.icon className="h-5 w-5 text-foreground/20 mb-4 group-hover:text-primary transition-colors" />
                    <h5 className="font-black text-[13px] tracking-[0.2em] mb-2">{f.title}</h5>
                    <div className="h-[1px] w-0 group-hover:w-full bg-primary transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square border border-foreground/10 relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" 
                  alt="Feature detail"
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:bg-transparent transition-all" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 border border-foreground/40 flex items-center justify-center backdrop-blur-md">
                    <Lock className="h-8 w-8 text-foreground animate-pulse" />
                  </div>
                </div>
                {/* DECORATIVE CORNER */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-primary" />
              </div>
              {/* SHADOW ACCENT */}
              <div className="absolute -bottom-10 -right-10 w-full h-full border border-foreground/5 -z-10" />
            </div>
          </div>
        </section>
      </main>

      <footer className="container py-24 border-t border-foreground/10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-foreground flex items-center justify-center">
                <Code2 className="h-5 w-5 text-black" />
              </div>
              <h4 className="font-black text-xl tracking-tighter">CODEMASTERY</h4>
            </div>
            <p className="text-[9px] font-black tracking-[0.3em] text-foreground/20 uppercase">
              ESTABLISHED 2026 // TERMINAL_ID: 0x82942 // GLOBAL_SYNC: ACTIVE
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black tracking-[0.4em] text-primary">RESOURCES</span>
              <div className="flex flex-col gap-2">
                {['ARCHIVE', 'PROTOCOL', 'SYSTEMS'].map(l => (
                  <span key={l} className="text-[11px] font-black tracking-[0.2em] text-foreground/40 hover:text-foreground cursor-pointer transition-colors uppercase">{l}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black tracking-[0.4em] text-crimson">SECURITY</span>
              <div className="flex flex-col gap-2">
                {['FIREWALL', 'ENCRYPTION', 'AUDIT'].map(l => (
                  <span key={l} className="text-[11px] font-black tracking-[0.2em] text-foreground/40 hover:text-foreground cursor-pointer transition-colors uppercase">{l}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black tracking-[0.4em] text-foreground/60">LEGAL</span>
              <div className="flex flex-col gap-2">
                {['PRIVACY', 'TERMS', 'LICENSE'].map(l => (
                  <span key={l} className="text-[11px] font-black tracking-[0.2em] text-foreground/40 hover:text-foreground cursor-pointer transition-colors uppercase">{l}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-foreground/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] font-black tracking-[0.5em] text-foreground/10 uppercase">
          <span>© 2026 CODEMASTERY_TERMINAL</span>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span>ALL_SYSTEMS_OPERATIONAL</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
