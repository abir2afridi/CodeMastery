import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop"
  },
  { 
    id: "css" as TrackId, 
    title: "AESTHETICS", 
    icon: Palette, 
    desc: "CASCADING STYLE ARCHITECTURE. VISUAL SUPREMACY.", 
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
  },
  { 
    id: "javascript" as TrackId, 
    title: "LOGIC", 
    icon: Zap, 
    desc: "DYNAMIC ENGINE EXECUTION. SYSTEM INTERACTIVITY.", 
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=1000&auto=format&fit=crop"
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

      <main className="flex-1 flex items-center justify-center p-6 relative z-10">
        <div className="max-w-4xl w-full">
          <AnimatePresence mode="wait">
            {step === 0 ? (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-12"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-[2px] w-12 bg-primary" />
                    <span className="text-[11px] font-black tracking-[0.4em] text-primary uppercase">IDENTITY_INITIALIZATION</span>
                  </div>
                  <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">
                    WHO ARE <br />
                    <span className="text-primary">YOU?</span>
                  </h1>
                  <p className="text-[13px] font-black tracking-[0.1em] text-foreground/40 uppercase max-w-md leading-relaxed">
                    ESTABLISH YOUR NETWORK IDENTITY TO BEGIN THE ACQUISITION PROTOCOL.
                  </p>
                </div>

                <div className="space-y-6 max-w-md">
                  <div className="space-y-2">
                    <label className="terminal-label">SUBJECT_DESIGNATION</label>
                    <CyberpunkInput 
                      autoFocus 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      placeholder="ENTER_NAME..." 
                      icon={<User className="h-4 w-4" />}
                      onKeyDown={(e) => e.key === "Enter" && name.trim() && setStep(1)}
                    />
                  </div>
                  <CyberpunkButton 
                    disabled={!name.trim()} 
                    onClick={() => setStep(1)} 
                    variant="brutalist"
                    className="w-full"
                  >
                    CONTINUE_PROTOCOL <ArrowRight className="ml-2 h-4 w-4" />
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
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-[2px] w-12 bg-primary" />
                    <span className="text-[11px] font-black tracking-[0.4em] text-primary uppercase">PATH_SELECTION</span>
                  </div>
                  <h2 className="text-6xl md:text-8xl font-black leading-none mb-6 uppercase">
                    CHOOSE YOUR <br />
                    <span className="text-primary">VECTOR</span>
                  </h2>
                  <p className="text-[13px] font-black tracking-[0.1em] text-foreground/40 uppercase max-w-md leading-relaxed">
                    SELECT THE INITIAL DATA STREAM TO COMMENCE THE DOWNLOAD.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
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
                            <div className="flex items-center justify-between mb-4">
                              <span className={cn(
                                "text-[9px] font-black tracking-[0.2em] px-2 py-1",
                                pick === t.id ? "bg-primary text-black" : "bg-foreground/10 text-foreground"
                              )}>
                                {t.id.toUpperCase()}
                              </span>
                              <t.icon className={cn("h-5 w-5", pick === t.id ? "text-primary" : "text-foreground/40")} />
                            </div>
                            <h4 className="text-2xl font-black tracking-tighter mb-2">{t.title}</h4>
                            <p className="text-[10px] font-black tracking-widest text-foreground/40 uppercase leading-relaxed">{t.desc}</p>
                          </div>
                        </div>
                      </CyberpunkCard>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
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
                    INITIALIZE_LEARNING_MATRIX <Zap className="ml-2 h-4 w-4" />
                  </CyberpunkButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* FOOTER DECORATION */}
      <div className="p-6 border-t border-foreground/5 flex items-center justify-between opacity-20">
        <span className="text-[9px] font-black tracking-[0.4em] uppercase">SYSTEM_STATE: WAITING_FOR_USER</span>
        <span className="text-[9px] font-black tracking-[0.4em] uppercase">AES_ENCRYPTION: ACTIVE</span>
      </div>
    </div>
  );
};

export default Setup;
