import { Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Code2, Palette, Zap, ArrowRight, Terminal, Shield, Activity, Lock, Menu } from "lucide-react";
import { CyberpunkButton, CyberpunkCard, CyberpunkBadge } from "@/components/ui/cyberpunk";
import { useProgress } from "@/hooks/useProgress";
import { useState, useEffect } from "react";

const Landing = () => {
  const { progress, ready } = useProgress();
  const [activeSection, setActiveSection] = useState("hero");
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "phases", "features"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  if (ready && progress) return <Navigate to="/learn" replace />;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative selection:bg-primary/30">

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

      {/* STICKY SECTION NAVIGATION - MOBILE HIDDEN */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-4">
          {[
            { id: "hero", label: "HOME" },
            { id: "phases", label: "TRACKS" },
            { id: "features", label: "FEATURES" },
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-3 h-3 rounded-full border-2 transition-all ${
                activeSection === section.id
                  ? "border-primary bg-primary"
                  : "border-foreground/20 hover:border-foreground/40"
              }`}
              title={section.label}
            />
          ))}
        </div>
      </div>

      <header className="relative z-50 flex h-16 md:h-20 items-center justify-between px-3 md:px-6 lg:px-8 border-b border-foreground/10 w-full max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
          <div className="w-6 h-6 md:w-8 md:h-10 lg:w-10 lg:h-12 bg-foreground flex items-center justify-center group cursor-pointer overflow-hidden flex-shrink-0">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.4 }}
            >
              <Code2 className="h-3 w-3 md:h-4 md:w-5 lg:h-6 lg:w-7 text-black" />
            </motion.div>
          </div>
          <Link to="/" className="flex flex-col min-w-0 flex-1">
            <h1 className="font-black text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-widest leading-none truncate">CODE</h1>
            <h1 className="font-black text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-widest leading-none text-primary truncate">MASTERY</h1>
          </Link>
        </div>
        <div className="flex items-center gap-1 md:gap-4 lg:gap-8 flex-shrink-0">
          <div className="hidden md:flex flex-col items-end text-right">
            <span className="text-[7px] md:text-[9px] font-black tracking-[0.3em] opacity-40">SYSTEM_VERSION</span>
            <span className="text-[8px] md:text-[11px] font-black tracking-[0.2em] text-primary">PROTOCOL_V4.2.0</span>
          </div>
          <CyberpunkButton variant="outline" size="sm" asChild className="text-[8px] md:text-xs px-2 md:px-3 py-1.5 md:py-2">
            <Link to="/setup">INITIALIZE</Link>
          </CyberpunkButton>
        </div>
      </header>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section id="hero" className="container py-6 md:py-8 lg:py-12 text-left relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl md:max-w-5xl relative z-10"
          >
            <div className="flex flex-wrap items-center gap-2 md:gap-4 lg:gap-6 mb-4 md:mb-6">
              <div className="h-[1px] w-12 md:w-16 bg-primary" />
              <span className="text-[9px] md:text-[11px] font-black tracking-[0.4em] text-primary uppercase">USER_STATUS: UNAUTHENTICATED</span>
              <div className="px-2 md:px-3 py-0.5 md:py-1 border border-primary/20 text-[8px] md:text-[9px] font-black tracking-[0.2em] text-primary/60">
                CONNECTION: STABLE
              </div>
              <div className="px-2 md:px-3 py-0.5 md:py-1 border border-crimson/20 text-[8px] md:text-[9px] font-black tracking-[0.2em] text-crimson/60">
                SYSTEM: ONLINE
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tighter mb-4 md:mb-6 leading-[0.9] mix-blend-difference">
              BORN FROM <br />
              <span className="text-transparent border-t-2 border-b-2 border-foreground/10 py-1 md:py-2 inline-block">THE VOID</span> <br />
              <span className="text-primary">FORGED</span> IN CODE
            </h2>
            
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 mb-6 md:mb-8">
              <div className="p-3 md:p-4 border border-foreground/10 bg-foreground/[0.02]">
                <div className="text-[9px] md:text-[10px] font-black tracking-[0.3em] text-primary mb-2">MISSION_ALPHA</div>
                <div className="text-[10px] md:text-[11px] font-black tracking-[0.1em] text-foreground/60 uppercase leading-relaxed">
                  MASTER FUNDAMENTAL WEB ARCHITECTURE THROUGH IMMERSIVE PROTOCOLS
                </div>
              </div>
              <div className="p-3 md:p-4 border border-foreground/10 bg-foreground/[0.02]">
                <div className="text-[9px] md:text-[10px] font-black tracking-[0.3em] text-crimson mb-2">MISSION_BETA</div>
                <div className="text-[10px] md:text-[11px] font-black tracking-[0.1em] text-foreground/60 uppercase leading-relaxed">
                  ADVANCE TO COMPLEX SYSTEMS AND CYBERSECURITY FUNDAMENTALS
                </div>
              </div>
              <div className="p-3 md:p-4 border border-foreground/10 bg-foreground/[0.02]">
                <div className="text-[9px] md:text-[10px] font-black tracking-[0.3em] text-foreground/40 mb-2">MISSION_OMEGA</div>
                <div className="text-[10px] md:text-[11px] font-black tracking-[0.1em] text-foreground/60 uppercase leading-relaxed">
                  ACHIEVE MASTERY LEVEL AND BECOME SYSTEM ARCHITECT
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-6 mb-6 md:mb-8">
              <div className="flex-1">
                <p className="text-[11px] md:text-[12px] font-black tracking-[0.1em] text-foreground/40 uppercase leading-relaxed mb-4">
                  THE DEFINITIVE PROTOCOL FOR MASTERING THE DIGITAL ARTS. 
                  FROM <span className="text-foreground">{"<HTML>"}</span> TO ADVANCED SYSTEMS.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-primary rounded-full" />
                    <span className="text-[9px] md:text-[10px] font-black tracking-[0.2em] text-foreground/50 uppercase">175+ INTERACTIVE MODULES</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-crimson rounded-full" />
                    <span className="text-[9px] md:text-[10px] font-black tracking-[0.2em] text-foreground/50 uppercase">LIVE CODE ENVIRONMENT</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-foreground/40 rounded-full" />
                    <span className="text-[9px] md:text-[10px] font-black tracking-[0.2em] text-foreground/50 uppercase">AI-POWERED LEARNING</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-col gap-4 md:gap-6 min-w-fit">
                <div className="flex flex-col gap-1 md:gap-2">
                  <span className="text-[8px] md:text-[9px] font-black tracking-[0.3em] opacity-30 uppercase">ENROLLMENT_OPEN</span>
                  <span className="text-[14px] md:text-[18px] font-black tracking-widest text-foreground">24,802 NODES</span>
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <span className="text-[8px] md:text-[9px] font-black tracking-[0.3em] opacity-30 uppercase">SUCCESS_RATE</span>
                  <span className="text-[14px] md:text-[18px] font-black tracking-widest text-primary">94.7%</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 sm:gap-4">
              <CyberpunkButton variant="brutalist" size="lg" asChild className="w-full bg-white text-black hover:bg-cyan-400 hover:text-black border-2 border-white hover:border-cyan-400 shadow-lg hover:shadow-cyan-400/50">
                <Link to="/setup">BEGIN_ACQUISITION <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </CyberpunkButton>
              <CyberpunkButton variant="outline" size="lg" asChild className="w-full bg-black/80 text-white border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black hover:border-cyan-300 shadow-lg hover:shadow-cyan-400/50">
                <Link to="/compiler" className="flex items-center justify-center gap-2">
                  <span className="text-white hover:text-black transition-colors duration-200">OPEN_ENVIRONMENT</span>
                  <Terminal className="ml-2 h-4 w-4 text-white hover:text-black transition-colors duration-200" />
                </Link>
              </CyberpunkButton>
            </div>
          </motion.div>

          {/* LARGE DECORATIVE BACKGROUND TEXT - MOBILE HIDDEN */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-[0.02] pointer-events-none select-none hidden xl:block">
            <span className="text-[30rem] font-black leading-none tracking-tighter">PROTO</span>
          </div>
        </section>

        {/* CORE PHASES SECTION */}
        <section id="phases" className="container py-6 md:py-8 border-t border-foreground/10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 md:mb-8">
            <div>
              <span className="text-[10px] md:text-[11px] font-black tracking-[0.4em] text-primary uppercase block mb-2">CURRICULUM_MATRIX</span>
              <h3 className="text-2xl md:text-3xl lg:text-5xl font-black">THE RECURSION PATH</h3>
            </div>
            <div className="hidden md:block text-right">
              <span className="text-[10px] font-black tracking-[0.2em] opacity-40 uppercase block">LAST_UPDATE</span>
              <span className="text-[11px] font-black tracking-[0.1em]">MAY_2026_HOTFIX</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { 
                icon: Code2, 
                title: "STRUCTURE", 
                label: "PHASE_01", 
                desc: "HTML5 SEMANTICS, ACCESSIBILITY & TECHNICAL ARCHITECTURE FUNDAMENTALS", 
                count: "45 MODULES",
                duration: "6 WEEKS",
                level: "BEGINNER",
                image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop"
              },
              { 
                icon: Palette, 
                title: "AESTHETICS", 
                label: "PHASE_02", 
                desc: "ADVANCED CSS3, GRID, FLEXBOX, BRUTALIST UI & MOTION DESIGN SYSTEMS", 
                count: "52 MODULES",
                duration: "7 WEEKS",
                level: "INTERMEDIATE",
                image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
              },
              { 
                icon: Zap, 
                title: "LOGIC", 
                label: "PHASE_03", 
                desc: "JAVASCRIPT ES6+, DOM MANIPULATION, ASYNC PATTERNS & PERFORMANCE OPTIMIZATION", 
                count: "68 MODULES",
                duration: "8 WEEKS",
                level: "INTERMEDIATE",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=1000&auto=format&fit=crop"
              },
              { 
                icon: Shield, 
                title: "SYSTEMS", 
                label: "PHASE_04", 
                desc: "REACT, STATE MANAGEMENT, TESTING & PRODUCTION DEPLOYMENT STRATEGIES", 
                count: "58 MODULES",
                duration: "9 WEEKS",
                level: "ADVANCED",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
              },
            ].map((t, i) => (
              <CyberpunkCard key={t.title} image={t.image} hover={true} showPlayIcon={true}>
                <div className="h-full flex flex-col justify-between relative z-10">
                  <div>
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <span className="text-[9px] md:text-[10px] font-black tracking-[0.3em] text-white px-2 py-1 bg-black/60 border border-white/20">{t.label}</span>
                      <t.icon className="h-4 w-4 md:h-5 md:w-5 text-white" />
                    </div>
                    <h4 className="text-2xl md:text-3xl font-black mb-2 md:mb-3 tracking-tighter text-white">{t.title}</h4>
                    <p className="text-[9px] md:text-[10px] font-black tracking-widest text-white/90 uppercase mb-3 md:mb-4 leading-relaxed">{t.desc}</p>
                    <div className="grid grid-cols-2 gap-2 mb-3 md:mb-4">
                      <div className="flex flex-col">
                        <span className="text-[8px] font-black tracking-[0.3em] text-white/70 uppercase">DURATION</span>
                        <span className="text-[10px] md:text-[11px] font-black tracking-widest text-white">{t.duration}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[8px] font-black tracking-[0.3em] text-white/70 uppercase">LEVEL</span>
                        <span className="text-[10px] md:text-[11px] font-black tracking-widest text-cyan-400">{t.level}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-white/20">
                    <div className="flex flex-col">
                      <span className="text-[8px] font-black tracking-[0.3em] text-white/70 uppercase">MODULES</span>
                      <span className="text-[12px] md:text-[13px] font-black tracking-widest text-cyan-400">{t.count}</span>
                    </div>
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="w-8 h-8 md:w-10 md:h-10 border border-foreground/20 flex items-center justify-center bg-foreground/5"
                    >
                      <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                    </motion.div>
                  </div>
                </div>
              </CyberpunkCard>
            ))}
          </div>
        </section>

        {/* FEATURES GRID */}
        <section id="features" className="container py-8 md:py-12">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="text-[10px] md:text-[11px] font-black tracking-[0.4em] text-crimson uppercase block mb-3 md:mb-4">SYSTEM_CAPABILITIES</span>
              <h3 className="text-3xl md:text-4xl lg:text-6xl font-black mb-4 md:mb-6 leading-none">ENGINEERED FOR SUPREMACY</h3>
              <p className="text-[11px] md:text-[12px] font-black tracking-[0.1em] text-foreground/30 uppercase leading-relaxed max-w-lg mb-4 md:mb-6">
                OPTIMIZED FOR MAXIMUM COGNITIVE RETENTION AND TECHNICAL PRECISION.
                NO DISTRACTIONS. NO WEAKNESS.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {[
                  { 
                    title: "LIVE_COMPILER", 
                    icon: Terminal,
                    desc: "Real-time code execution with instant feedback and debugging tools"
                  },
                  { 
                    title: "ANALOGY_CORE", 
                    icon: Activity,
                    desc: "AI-powered learning through complex technical analogies and metaphors"
                  },
                  { 
                    title: "XP_PROTOCOL", 
                    icon: Zap,
                    desc: "Gamified progression system with skill trees and achievement unlocks"
                  },
                  { 
                    title: "CERT_MATRIX", 
                    icon: Shield,
                    desc: "Industry-recognized certifications with verifiable blockchain credentials"
                  },
                  { 
                    title: "NEURAL_SYNC", 
                    icon: Code2,
                    desc: "Adaptive learning algorithms that personalize content to your pace"
                  },
                  { 
                    title: "QUANTUM_DEBUG", 
                    icon: Shield,
                    desc: "Advanced error detection and code optimization suggestions"
                  },
                ].map((f) => (
                  <div key={f.title} className="p-3 md:p-4 border border-foreground/5 bg-foreground/[0.02] hover:border-foreground/20 transition-all group cursor-pointer">
                    <f.icon className="h-4 w-4 md:h-5 md:w-5 text-foreground/20 mb-2 md:mb-3 group-hover:text-primary transition-colors" />
                    <h5 className="font-black text-[11px] md:text-[12px] tracking-[0.2em] mb-2">{f.title}</h5>
                    <p className="text-[8px] md:text-[9px] font-black tracking-[0.1em] text-foreground/40 uppercase leading-relaxed">{f.desc}</p>
                    <div className="h-[1px] w-0 group-hover:w-full bg-primary transition-all duration-300 mt-2 md:mt-3" />
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
                  <div className="w-16 h-16 md:w-24 md:h-24 border border-foreground/40 flex items-center justify-center backdrop-blur-md">
                    <Lock className="h-6 w-6 md:h-8 md:w-8 text-foreground animate-pulse" />
                  </div>
                </div>
                {/* DECORATIVE CORNER */}
                <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 border-t-2 border-r-2 border-primary" />
              </div>
              {/* SHADOW ACCENT */}
              <div className="absolute -bottom-8 md:-bottom-10 -right-8 md:-right-10 w-full h-full border border-foreground/5 -z-10" />
            </div>
          </div>
        </section>

        {/* STATISTICS SECTION */}
        <section className="container py-8 md:py-12 border-t border-foreground/10">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-[10px] md:text-[11px] font-black tracking-[0.4em] text-primary uppercase block mb-3 md:mb-4">NETWORK_ANALYTICS</span>
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-black mb-3 md:mb-4">PROTOCOL PERFORMANCE METRICS</h3>
            <p className="text-[10px] md:text-[11px] font-black tracking-[0.1em] text-foreground/40 uppercase max-w-2xl mx-auto">
              REAL-TIME SYSTEM MONITORING AND LEARNER ACHIEVEMENT TRACKING
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {[
              { value: "24,802", label: "ACTIVE_NODES", change: "+12.3%", positive: true },
              { value: "94.7%", label: "SUCCESS_RATE", change: "+2.1%", positive: true },
              { value: "1.2M", label: "CODE_SUBMISSIONS", change: "+18.7%", positive: true },
              { value: "8.4K", label: "CERTIFICATIONS", change: "+9.2%", positive: true },
              { value: "175", label: "INTERACTIVE_MODULES", change: "+15", positive: true },
              { value: "42ms", label: "AVG_RESPONSE_TIME", change: "-8ms", positive: true },
              { value: "99.99%", label: "UPTIME", change: "STABLE", positive: true },
              { value: "156", label: "COUNTRIES_ACTIVE", change: "+23", positive: true },
            ].map((stat, i) => (
              <div key={i} className="p-4 md:p-6 border border-foreground/10 bg-foreground/[0.02] text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-black text-primary mb-2">{stat.value}</div>
                <div className="text-[9px] md:text-[10px] font-black tracking-[0.3em] text-foreground/40 uppercase mb-2 md:mb-3">{stat.label}</div>
                <div className={`text-[8px] md:text-[9px] font-black tracking-[0.2em] uppercase ${
                  stat.positive ? 'text-primary' : 'text-crimson'
                }`}>
                  {stat.change}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SOCIAL PROOF SECTION */}
        <section className="container py-8 md:py-12">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="text-[10px] md:text-[11px] font-black tracking-[0.4em] text-crimson uppercase block mb-3 md:mb-4">COMMUNITY_FEEDBACK</span>
              <h3 className="text-2xl md:text-3xl lg:text-5xl font-black mb-4 md:mb-6 leading-none">VOICES FROM THE MATRIX</h3>
              <p className="text-[10px] md:text-[11px] font-black tracking-[0.1em] text-foreground/30 uppercase leading-relaxed max-w-lg mb-6 md:mb-8">
                REAL TESTIMONIALS FROM LEARNERS WHO HAVE MASTERED THE PROTOCOL
              </p>
              
              <div className="space-y-4 md:space-y-6">
                {[
                  {
                    name: "ALEX_CHEN",
                    role: "FRONTEND_ARCHITECT",
                    company: "TECH_CORP",
                    text: "THE CODEMASTERY PROTOCOL TRANSFORMED MY CAREER. WENT FROM JUNIOR TO LEAD IN 18 MONTHS."
                  },
                  {
                    name: "SARAH_KIM",
                    role: "FULL_STACK_ENGINEER",
                    company: "STARTUP_X",
                    text: "THE GAMIFIED APPROACH AND REAL-TIME FEEDBACK MADE LEARNING ACTIVELY ENJOYABLE."
                  },
                  {
                    name: "MARCUS_JOHNSON",
                    role: "SYSTEMS_ARCHITECT",
                    company: "ENTERPRISE_SYS",
                    text: "FINALLY FOUND A PLATFORM THAT TEACHES ACTUAL PRODUCTION-READY SKILLS."
                  },
                ].map((testimonial, i) => (
                  <div key={i} className="p-3 md:p-4 border border-foreground/10 bg-foreground/[0.02]">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0">
                        <span className="text-[9px] md:text-[10px] font-black tracking-widest text-primary">
                          {testimonial.name.split('_')[0][0]}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="text-[9px] md:text-[10px] font-black tracking-[0.1em] text-foreground/60 uppercase mb-2">
                          {testimonial.text}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                          <span className="text-[8px] md:text-[9px] font-black tracking-[0.2em] text-primary">
                            {testimonial.name.replace('_', ' ')}
                          </span>
                          <span className="text-[7px] md:text-[8px] font-black tracking-[0.3em] text-foreground/30">
                            {testimonial.role.replace('_', ' ')} @ {testimonial.company}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square border border-foreground/10 relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Community"
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:bg-transparent transition-all" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="text-3xl md:text-4xl font-black text-primary mb-2">500+</div>
                    <div className="text-[9px] md:text-[10px] font-black tracking-[0.3em] text-foreground/60 uppercase">COMPANIES HIRE</div>
                    <div className="text-[9px] md:text-[10px] font-black tracking-[0.3em] text-foreground/60 uppercase">OUR GRADUATES</div>
                  </div>
                </div>
                {/* DECORATIVE CORNER */}
                <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 border-t-2 border-r-2 border-crimson" />
              </div>
              {/* SHADOW ACCENT */}
              <div className="absolute -bottom-8 md:-bottom-10 -right-8 md:-right-10 w-full h-full border border-foreground/5 -z-10" />
            </div>
          </div>
        </section>
      </main>

      <footer className="container py-6 md:py-8 border-t border-foreground/10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-foreground flex items-center justify-center">
                <Code2 className="h-4 w-4 md:h-5 md:w-7 text-black" />
              </div>
              <h4 className="font-black text-lg md:text-xl tracking-tighter">CODEMASTERY</h4>
            </div>
            <p className="text-[8px] md:text-[9px] font-black tracking-[0.3em] text-foreground/20 uppercase max-w-xs">
              ESTABLISHED 2026 // TERMINAL_ID: 0x82942 // GLOBAL_SYNC: ACTIVE
            </p>
            <div className="space-y-1 md:space-y-2">
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-primary rounded-full" />
                <span className="text-[7px] md:text-[8px] font-black tracking-[0.2em] text-foreground/40 uppercase">VERSION 4.2.0</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-crimson rounded-full" />
                <span className="text-[7px] md:text-[8px] font-black tracking-[0.2em] text-foreground/40 uppercase">AES-256 ENCRYPTION</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-foreground/40 rounded-full" />
                <span className="text-[7px] md:text-[8px] font-black tracking-[0.2em] text-foreground/40 uppercase">ISO 27001 COMPLIANT</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8">
            <div className="flex flex-col gap-3 md:gap-4">
              <span className="text-[9px] md:text-[10px] font-black tracking-[0.4em] text-primary">LEARNING</span>
              <div className="flex flex-col gap-1 md:gap-2">
                {['CURRICULUM', 'MODULES', 'CERTIFICATIONS', 'WORKSHOPS'].map(l => (
                  <span key={l} className="text-[10px] md:text-[11px] font-black tracking-[0.2em] text-foreground/40 hover:text-foreground cursor-pointer transition-colors uppercase">{l}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 md:gap-4">
              <span className="text-[9px] md:text-[10px] font-black tracking-[0.4em] text-crimson">TOOLS</span>
              <div className="flex flex-col gap-1 md:gap-2">
                {['COMPILER', 'DEBUGGER', 'ANALYZER', 'MONITOR'].map(l => (
                  <span key={l} className="text-[10px] md:text-[11px] font-black tracking-[0.2em] text-foreground/40 hover:text-foreground cursor-pointer transition-colors uppercase">{l}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 md:gap-4">
              <span className="text-[9px] md:text-[10px] font-black tracking-[0.4em] text-foreground/60">COMMUNITY</span>
              <div className="flex flex-col gap-1 md:gap-2">
                {['FORUM', 'DISCORD', 'MEETUPS', 'BLOG'].map(l => (
                  <span key={l} className="text-[10px] md:text-[11px] font-black tracking-[0.2em] text-foreground/40 hover:text-foreground cursor-pointer transition-colors uppercase">{l}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 md:gap-4">
              <span className="text-[9px] md:text-[10px] font-black tracking-[0.4em] text-foreground/40">SUPPORT</span>
              <div className="flex flex-col gap-1 md:gap-2">
                {['DOCUMENTATION', 'API_DOCS', 'STATUS', 'CONTACT'].map(l => (
                  <span key={l} className="text-[10px] md:text-[11px] font-black tracking-[0.2em] text-foreground/40 hover:text-foreground cursor-pointer transition-colors uppercase">{l}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-foreground/5">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 md:gap-6">
            <div className="text-[8px] md:text-[9px] font-black tracking-[0.5em] text-foreground/10 uppercase">
              <span>© 2026 CODEMASTERY_TERMINAL</span>
              <span className="mx-1 md:mx-2">//</span>
              <span>LICENSED UNDER MIT PROTOCOL</span>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-green-500" />
                <span className="text-[8px] md:text-[9px] font-black tracking-[0.5em] text-foreground/10 uppercase">ALL_SYSTEMS_OPERATIONAL</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-primary" />
                <span className="text-[8px] md:text-[9px] font-black tracking-[0.5em] text-foreground/10 uppercase">UPTIME_99.99%</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-crimson" />
                <span className="text-[8px] md:text-[9px] font-black tracking-[0.5em] text-foreground/10 uppercase">SECURITY_LEVEL_MAX</span>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-6 text-center">
            <p className="text-[7px] md:text-[8px] font-black tracking-[0.3em] text-foreground/5 uppercase">
              LAST_SYSTEM_UPDATE: MAY_2026_HOTFIX // NEXT_MAINTENANCE: JUNE_15_2026_02:00_UTC
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
