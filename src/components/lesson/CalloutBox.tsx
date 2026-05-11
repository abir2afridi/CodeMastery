import { Info, AlertTriangle, XCircle, Lightbulb, Sparkles, Bug, BookOpen, Zap, ShieldAlert, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Callout } from "@/lib/curriculum/types";
import { motion } from "framer-motion";
import { useI18n } from "@/hooks/useI18n";

const styles: Record<Callout["type"], { icon: LucideIcon; accent: string; bg: string; label: string; text: string }> = {
  tip: { icon: Lightbulb, accent: "border-primary", bg: "bg-primary/5", label: "INTEL_TIP", text: "text-primary" },
  warning: { icon: AlertTriangle, accent: "border-yellow-500", bg: "bg-yellow-500/5", label: "CAUTION_PROTO", text: "text-yellow-500" },
  error: { icon: ShieldAlert, accent: "border-crimson", bg: "bg-crimson/5", label: "SYSTEM_FAILURE", text: "text-crimson" },
  info: { icon: Info, accent: "border-blue-400", bg: "bg-blue-400/5", label: "DATA_LINK", text: "text-blue-400" },
  analogy: { icon: BookOpen, accent: "border-purple-400", bg: "bg-purple-400/5", label: "NEURAL_ANALOGY", text: "text-purple-400" },
  "common-mistake": { icon: Bug, accent: "border-orange-500", bg: "bg-orange-500/5", label: "GLITCH_DETECTED", text: "text-orange-500" },
  "pro-tip": { icon: Sparkles, accent: "border-primary", bg: "bg-primary/10 shadow-[0_0_20px_rgba(var(--primary),0.1)]", label: "ELITE_PROTOCOL", text: "text-primary" },
};

export function CalloutBox({ callout }: { callout: Callout }) {
  const { lang } = useI18n();
  const isBn = lang === "bn";
  const s = styles[callout.type];
  const Icon = s.icon;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "my-8 relative border border-border overflow-hidden group",
        s.bg
      )}
    >
      {/* Brutalist accents */}
      <div className={cn("absolute top-0 left-0 w-1 h-full", s.accent.replace("border-", "bg-"))} />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-border/20" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary/40" />

      <div className="p-5 md:p-6 ml-1">
        <div className="flex items-start gap-4">
          <div className={cn(
            "p-2 border border-border/20 bg-background/50 relative shrink-0",
            s.text
          )}>
            <Icon className="h-5 w-5" />
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-current opacity-40" />
          </div>

          <div className="space-y-3 flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={cn("text-[9px] font-black tracking-[0.3em] uppercase", s.text)}>
                  {s.label}
                </span>
                <div className="h-px w-8 bg-border/20" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">
                  {isBn && callout.titleBn ? callout.titleBn : callout.title}
                </span>
              </div>
              <Zap className={cn("h-3 w-3 opacity-20", s.text)} />
            </div>
            
            <p className="text-[15px] leading-relaxed font-medium text-foreground/80">
              {isBn && callout.contentBn ? callout.contentBn : callout.content}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
    </motion.div>
  );
}

