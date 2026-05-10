import { Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Code2, Palette, Zap, ArrowRight, Sparkles, Trophy, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/hooks/useProgress";

const Landing = () => {
  const { progress, ready } = useProgress();
  if (ready && progress) return <Navigate to="/learn" replace />;

  return (
    <div className="min-h-screen overflow-hidden">
      <header className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-display font-bold text-lg">
          <Code2 className="h-6 w-6 text-primary" />
          Code<span className="text-primary">Mastery</span>
        </div>
        <Button asChild variant="outline" size="sm"><Link to="/setup">Get Started</Link></Button>
      </header>

      <section className="container py-20 md:py-32 text-center relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-xs font-mono uppercase tracking-wider text-primary mb-6">
            <Sparkles className="h-3 w-3" /> Zero to Pro · 175 chapters · Free
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Learn to code from <span className="gradient-text">absolute zero</span><br />to professional mastery.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            HTML · CSS · JavaScript — every concept explained with real-world analogies, runnable code, micro-exercises, quizzes, and certificates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="shadow-elegant"><Link to="/setup">Start learning <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
            <Button asChild variant="outline" size="lg"><Link to="/compiler">Try the compiler <Terminal className="ml-1 h-4 w-4" /></Link></Button>
          </div>
        </motion.div>
      </section>

      <section className="container py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Code2, color: "text-html", title: "HTML", desc: "50 chapters covering structure, semantics, accessibility, SEO, and projects.", count: "50 chapters · ~25 hrs" },
            { icon: Palette, color: "text-css", title: "CSS", desc: "55 chapters from selectors to grid, animations, and responsive design.", count: "55 chapters · ~30 hrs" },
            { icon: Zap, color: "text-js", title: "JavaScript", desc: "70 chapters: fundamentals, async, DOM, OOP, modules, and real apps.", count: "70 chapters · ~40 hrs" },
          ].map((t, i) => (
            <motion.div key={t.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="glass-card p-6 hover:shadow-glow transition-all">
              <t.icon className={`h-8 w-8 mb-3 ${t.color}`} />
              <h3 className="text-2xl font-display font-bold mb-2">{t.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{t.desc}</p>
              <p className="text-xs font-mono text-primary">{t.count}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Built for true beginners. Powerful enough for pros.</h2>
          <p className="text-muted-foreground">Every feature designed to take you from "what's a tag?" to job-ready.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Terminal, title: "Live compiler", desc: "4-panel editor with HTML, CSS, JS and live preview." },
            { icon: Sparkles, title: "Real analogies", desc: "Every concept explained simply before going technical." },
            { icon: Code2, title: "Quizzes & XP", desc: "Test yourself, earn XP, level up." },
            { icon: Trophy, title: "Certificates", desc: "Verifiable proof of mastery, downloadable as PNG/PDF." },
          ].map((f) => (
            <div key={f.title} className="glass-card p-5">
              <f.icon className="h-6 w-6 text-primary mb-2" />
              <h3 className="font-display font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="container py-10 text-center text-xs text-muted-foreground border-t border-border">
        Built with care · CodeMastery © {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Landing;
