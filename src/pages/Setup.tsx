import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Code2, Palette, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { initProgress } from "@/lib/progress";
import type { TrackId } from "@/lib/curriculum/types";
import { motion } from "framer-motion";

const tracks = [
  { id: "html" as TrackId, title: "HTML", icon: Code2, color: "text-html border-html/40", desc: "Best place to start. Learn how websites are structured." },
  { id: "css" as TrackId, title: "CSS", icon: Palette, color: "text-css border-css/40", desc: "Make sites beautiful. Pick if you've used HTML before." },
  { id: "javascript" as TrackId, title: "JavaScript", icon: Zap, color: "text-js border-js/40", desc: "Add interactivity. Pick if you know HTML & CSS." },
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
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-8 md:p-10 max-w-2xl w-full">
        {step === 0 ? (
          <>
            <h1 className="text-3xl font-display font-bold mb-2">Welcome to CodeMastery 👋</h1>
            <p className="text-muted-foreground mb-6">Let's set up your learning journey. What should we call you?</p>
            <Input autoFocus value={name} onChange={(e) => setName(e.target.value)} placeholder="Your first name" className="h-12 text-lg mb-4" onKeyDown={(e) => e.key === "Enter" && name.trim() && setStep(1)} />
            <Button disabled={!name.trim()} onClick={() => setStep(1)} className="w-full h-11">Continue <ArrowRight className="ml-1 h-4 w-4" /></Button>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-display font-bold mb-2">Pick your starting track</h1>
            <p className="text-muted-foreground mb-6">Don't worry — you can switch tracks anytime. New here? Start with <span className="text-html font-semibold">HTML</span>.</p>
            <div className="space-y-3 mb-6">
              {tracks.map((t) => (
                <button key={t.id} onClick={() => setPick(t.id)}
                  className={`w-full text-left glass-card p-4 border-2 transition-all flex items-center gap-4 ${pick === t.id ? `${t.color} shadow-glow` : "border-transparent hover:border-border"}`}>
                  <t.icon className={`h-8 w-8 ${t.color.split(" ")[0]}`} />
                  <div className="flex-1">
                    <p className="font-display font-bold">{t.title}</p>
                    <p className="text-sm text-muted-foreground">{t.desc}</p>
                  </div>
                </button>
              ))}
            </div>
            <Button disabled={!pick} onClick={finish} className="w-full h-11">Start learning <ArrowRight className="ml-1 h-4 w-4" /></Button>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Setup;
