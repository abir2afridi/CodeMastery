import { Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Code2, Palette, Zap, ArrowRight, Sparkles, Trophy, Terminal, Shield, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CyberpunkButton, CyberpunkCard, CyberpunkBadge } from "@/components/ui/cyberpunk";
import { useProgress } from "@/hooks/useProgress";

const Landing = () => {
  const { progress, ready } = useProgress();
  if (ready && progress) return <Navigate to="/learn" replace />;

  return (
    <div className="min-h-screen bg-obsidian text-foreground overflow-hidden">
      {/* AES-256 Encryption Status Banner */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <CyberpunkBadge variant="encryption">
          <Shield className="h-3 w-3 mr-2" />
          AES-256 ENCRYPTION ACTIVE
        </CyberpunkBadge>
      </div>

      <header className="container flex h-16 items-center justify-between border-b border-border">
        <div className="flex items-center gap-3 font-brutalist text-lg">
          <Code2 className="h-6 w-6 text-neon-blue neon-text" />
          <span className="text-foreground">CODE</span>
          <span className="text-neon-blue">MASTERY</span>
        </div>
        <div className="flex items-center gap-4">
          <CyberpunkBadge variant="protocol">
            <Activity className="h-3 w-3 mr-2" />
            PROTOCOL ACTIVE
          </CyberpunkBadge>
          <CyberpunkButton variant="outline" size="sm" asChild>
            <Link to="/setup">INITIALIZE</Link>
          </CyberpunkButton>
        </div>
      </header>

      <section className="container py-20 md:py-32 text-center relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <CyberpunkBadge variant="status" className="mb-8">
            <Sparkles className="h-3 w-3 mr-2" />
            ZERO TO PRO · 175 CHAPTERS · FREE ACCESS
          </CyberpunkBadge>
          <h1 className="text-5xl md:text-7xl font-brutalist font-black uppercase tracking-tighter mb-6 leading-tight">
            LEARN TO CODE FROM <span className="gradient-text">ABSOLUTE ZERO</span><br />TO PROFESSIONAL MASTERY
          </h1>
          <p className="terminal-text text-lg md:text-xl text-foreground-40 max-w-2xl mx-auto mb-10">
            HTML · CSS · JAVASCRIPT — EVERY CONCEPT EXPLAINED WITH REAL-WORLD ANALOGIES, RUNNABLE CODE, MICRO-EXERCISES, QUIZZES, AND CERTIFICATES
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CyberpunkButton variant="brutalist" size="lg" asChild>
              <Link to="/setup">START LEARNING <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </CyberpunkButton>
            <CyberpunkButton variant="outline" size="lg" asChild>
              <Link to="/compiler">TRY COMPILER <Terminal className="ml-2 h-4 w-4" /></Link>
            </CyberpunkButton>
          </div>
        </motion.div>
      </section>

      <section className="container py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Code2, color: "text-orange-500", title: "HTML", desc: "50 CHAPTERS COVERING STRUCTURE, SEMANTICS, ACCESSIBILITY, SEO, AND PROJECTS", count: "50 CHAPTERS · ~25 HRS" },
            { icon: Palette, color: "text-blue-500", title: "CSS", desc: "55 CHAPTERS FROM SELECTORS TO GRID, ANIMATIONS, AND RESPONSIVE DESIGN", count: "55 CHAPTERS · ~30 HRS" },
            { icon: Zap, color: "text-yellow-500", title: "JAVASCRIPT", desc: "70 CHAPTERS: FUNDAMENTALS, ASYNC, DOM, OOP, MODULES, AND REAL APPS", count: "70 CHAPTERS · ~40 HRS" },
          ].map((t, i) => (
            <CyberpunkCard key={t.title} className="p-6" hover={true}>
              <motion.div
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: i * 0.1 }} 
                viewport={{ once: true }}
                className="h-full flex flex-col"
              >
                <t.icon className={`h-8 w-8 mb-4 ${t.color} neon-text`} />
                <h3 className="text-2xl font-brutalist font-black uppercase tracking-tighter mb-3">{t.title}</h3>
                <p className="terminal-text text-foreground-40 text-sm mb-4 flex-grow">{t.desc}</p>
                <p className="text-xs font-mono text-neon-blue">{t.count}</p>
              </motion.div>
            </CyberpunkCard>
          ))}
        </div>
      </section>

      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-brutalist font-black uppercase tracking-tighter mb-4">BUILT FOR TRUE BEGINNERS. POWERFUL ENOUGH FOR PROS.</h2>
          <p className="terminal-text text-foreground-40">EVERY FEATURE DESIGNED TO TAKE YOU FROM "WHAT'S A TAG?" TO JOB-READY.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Terminal, title: "LIVE COMPILER", desc: "4-PANEL EDITOR WITH HTML, CSS, JS AND LIVE PREVIEW" },
            { icon: Sparkles, title: "REAL ANALOGIES", desc: "EVERY CONCEPT EXPLAINED SIMPLY BEFORE GOING TECHNICAL" },
            { icon: Code2, title: "QUIZZES & XP", desc: "TEST YOURSELF, EARN XP, LEVEL UP" },
            { icon: Trophy, title: "CERTIFICATES", desc: "VERIFIABLE PROOF OF MASTERY, DOWNLOADABLE AS PNG/PDF" },
          ].map((f) => (
            <CyberpunkCard key={f.title} className="p-5" aspectRatio="square">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col items-center text-center"
              >
                <f.icon className="h-8 w-8 text-neon-blue neon-text mb-3" />
                <h3 className="font-brutalist font-black text-sm uppercase tracking-tighter mb-2">{f.title}</h3>
                <p className="terminal-text text-foreground-40 text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            </CyberpunkCard>
          ))}
        </div>
      </section>

      <footer className="container py-10 text-center border-t border-border">
        <p className="terminal-text text-foreground-20 text-xs">BUILT WITH CARE · CODEMASTERY © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Landing;
