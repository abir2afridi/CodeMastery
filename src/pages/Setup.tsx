import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Code2, Palette, Zap, ArrowRight, User } from "lucide-react";
import { CyberpunkButton, CyberpunkCard, CyberpunkInput } from "@/components/ui/cyberpunk";
import { initProgress } from "@/lib/progress";
import type { TrackId } from "@/lib/curriculum/types";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const tracks = [
  { 
    id: "html" as TrackId, 
    title: "STRUCTURE", 
    icon: Code2, 
    desc: "HYPERTEXT MARKUP PROTOCOL. THE CORE FOUNDATION.", 
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop",
    label: "HTML5",
    duration: "8 weeks",
    level: "BEGINNER",
    count: "12"
  },
  { 
    id: "css" as TrackId, 
    title: "AESTHETICS", 
    icon: Palette, 
    desc: "CASCADING STYLE ARCHITECTURE. VISUAL SUPREMACY.", 
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    label: "CSS3",
    duration: "6 weeks", 
    level: "BEGINNER",
    count: "10"
  },
  { 
    id: "javascript" as TrackId, 
    title: "LOGIC", 
    icon: Zap, 
    desc: "DYNAMIC ENGINE EXECUTION. SYSTEM INTERACTIVITY.", 
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=1000&auto=format&fit=crop",
    label: "JAVASCRIPT",
    duration: "12 weeks",
    level: "INTERMEDIATE", 
    count: "15"
  },
];

const Setup = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [pick, setPick] = useState<TrackId | null>(null);
  const navigate = useNavigate();

  const finish = () => {
    if (!name.trim() || !pick) return;
    initProgress(name.trim(), pick);
    navigate(`/learn/${pick}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative selection:bg-primary/30 flex flex-col">
      {/* BACKGROUND ACCENTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ opacity: [0.05, 0.08, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" 
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,18,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>

      <header className="relative z-50 flex h-14 sm:h-16 md:h-20 items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 border-b border-foreground/10 w-full max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4 flex-1 min-w-0">
          <div className="w-5 h-4 sm:w-5 sm:h-6 md:w-8 md:h-10 lg:w-10 lg:h-12 bg-foreground flex items-center justify-center group cursor-pointer overflow-hidden flex-shrink-0">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.4 }}
            >
              <Code2 className="h-3 w-3 sm:h-3 sm:w-4 md:h-5 lg:h-6 lg:w-7 text-black" />
            </motion.div>
          </div>
          <Link to="/" className="flex flex-col min-w-0 flex-1">
            <h1 className="font-black text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-widest leading-none truncate">CODE</h1>
            <h1 className="font-black text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-widest leading-none text-primary truncate">MASTERY</h1>
          </Link>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 md:gap-4 lg:gap-8 flex-shrink-0">
          <div className="hidden sm:flex flex-col items-end text-right">
            <span className="text-[6px] sm:text-[7px] md:text-[9px] font-black tracking-[0.3em] text-foreground/40">SYSTEM_VERSION</span>
            <span className="text-[7px] sm:text-[8px] md:text-[11px] font-black tracking-[0.2em] text-primary">PROTOCOL_V4.2.0</span>
          </div>
          <CyberpunkButton variant="outline" size="sm" asChild className="text-[7px] sm:text-[8px] md:text-xs px-1.5 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2">
            <Link to="/setup">INITIALIZE</Link>
          </CyberpunkButton>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 relative z-10">
        <div className="max-w-4xl w-full">
          <AnimatePresence mode="wait">
            {step === 0 ? (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-8 sm:space-y-12"
              >
                <div>
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="h-[2px] w-8 sm:w-12 bg-primary" />
                    <span className="text-[10px] sm:text-[11px] font-black tracking-[0.4em] text-primary uppercase">IDENTITY_INITIALIZATION</span>
                  </div>
                  <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-none mb-4 sm:mb-6">
                    WHO ARE <br />
                    <span className="text-primary">YOU?</span>
                  </h1>
                  <p className="text-[11px] sm:text-[12px] font-black tracking-[0.1em] text-foreground/40 uppercase max-w-md leading-relaxed">
                    ESTABLISH YOUR NETWORK IDENTITY TO BEGIN THE ACQUISITION PROTOCOL.
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6 max-w-md">
                  <div className="space-y-2">
                    <label className="terminal-label">SUBJECT_DESIGNATION</label>
                    <CyberpunkInput 
                      autoFocus 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      placeholder="ENTER_NAME..." 
                      icon={<User className="h-3 w-3 sm:h-3 sm:w-4" />}
                      onKeyDown={(e) => e.key === "Enter" && name.trim() && setStep(1)}
                    />
                  </div>
                  <CyberpunkButton 
                    disabled={!name.trim()} 
                    onClick={() => setStep(1)} 
                    variant="brutalist"
                    className="w-full"
                  >
                    CONTINUE_PROTOCOL <ArrowRight className="ml-2 h-3 w-3 sm:h-3 sm:w-4" />
                  </CyberpunkButton>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-12"
              >
                <div>
                  <div className="flex items-center gap-2.5 sm:gap-4 mb-3 sm:mb-6">
                    <div className="h-[2px] w-10 sm:w-12 bg-primary" />
                    <span className="text-[10px] sm:text-[11px] font-black tracking-[0.4em] text-primary uppercase">PATH_SELECTION</span>
                  </div>
                  <h2 className="text-5xl sm:text-7xl md:text-8xl font-black leading-none mb-4 sm:mb-6">
                    CHOOSE YOUR <br />
                    <span className="text-primary">VECTOR</span>
                  </h2>
                  <p className="text-[12px] sm:text-[13px] font-black tracking-[0.1em] text-foreground/40 uppercase max-w-md leading-relaxed">
                    SELECT THE INITIAL DATA STREAM TO COMMENCE THE DOWNLOAD.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  {tracks.map((t) => (
                    <div key={t.id} onClick={() => setPick(t.id)} className="cursor-pointer">
                      <CyberpunkCard 
                        image={t.image} 
                        hover={true} 
                        className={cn(
                          "transition-all duration-300",
                          pick === t.id ? "ring-2 ring-neon-blue" : "opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
                        )}
                      >
                        <div className="h-full flex flex-col justify-between relative z-10">
                          <div>
                            <div className="flex items-center justify-between mb-3 sm:mb-4">
                              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-black tracking-[0.3em] text-foreground px-1.5 sm:px-2 py-1 bg-muted border-border">{t.label}</span>
                              <t.icon className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
                            </div>
                            <h4 className="text-xl sm:text-2xl font-black mb-1.5 sm:mb-2 tracking-tighter text-foreground">{t.title}</h4>
                            <p className="text-[8px] sm:text-[9px] md:text-[10px] font-black tracking-widest text-foreground/60 uppercase mb-2 sm:mb-3 leading-relaxed">{t.desc}</p>
                            <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                              <div className="flex flex-col">
                                <span className="text-[7px] sm:text-[8px] font-black tracking-[0.3em] text-foreground/60 uppercase">DURATION</span>
                                <span className="text-[9px] sm:text-[10px] md:text-[11px] font-black tracking-widest text-foreground">{t.duration}</span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[7px] sm:text-[8px] font-black tracking-[0.3em] text-foreground/60 uppercase">LEVEL</span>
                                <span className="text-[9px] sm:text-[10px] md:text-[11px] font-black tracking-widest text-cyan-400">{t.level}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-white/20">
                            <div className="flex flex-col">
                              <span className="text-[7px] sm:text-[8px] font-black tracking-[0.3em] text-foreground/60 uppercase">MODULES</span>
                              <span className="text-[9px] sm:text-[10px] md:text-[11px] font-black tracking-widest text-cyan-400">{t.count}</span>
                            </div>
                            <motion.div 
                              whileHover={{ x: 5 }}
                              className="w-6 h-6 sm:w-8 md:h-10 border border-foreground/20 flex items-center justify-center bg-foreground/5"
                            >
                              <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                            </motion.div>
                          </div>
                        </div>
                      </CyberpunkCard>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <CyberpunkButton 
                    variant="outline" 
                    onClick={() => setStep(0)}
                    className="w-full sm:w-48"
                  >
                    BACK
                  </CyberpunkButton>
                  <CyberpunkButton 
                    disabled={!pick} 
                    onClick={finish} 
                    variant="brutalist"
                    className="w-full sm:flex-1"
                  >
                    INITIALIZE_LEARNING_MATRIX <Zap className="ml-2 h-3 w-3 sm:h-3 sm:w-3" />
                  </CyberpunkButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* FOOTER DECORATION */}
      <div className="p-4 sm:p-6 border-t border-foreground/5 flex items-center justify-between opacity-20">
        <span className="text-[8px] sm:text-[9px] font-black tracking-[0.4em] uppercase">SYSTEM_STATE: WAITING_FOR_USER</span>
        <span className="text-[8px] sm:text-[9px] font-black tracking-[0.4em] uppercase">AES_ENCRYPTION: ACTIVE</span>
      </div>
    </div>
  );
};

export default Setup;
