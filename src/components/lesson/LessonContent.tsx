import { useState } from "react";
import type { Section } from "@/lib/curriculum/types";
import { CalloutBox } from "./CalloutBox";
import { MiniCompiler } from "./MiniCompiler";
import { AnnotatedCode } from "./AnnotatedCode";
import { CyberpunkButton } from "@/components/ui/cyberpunk";
import { ChevronDown, BookOpen, Sparkles, Lightbulb, Terminal, Zap, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function renderParagraph(text: string, key: string) {
  // simple inline `code` rendering
  const parts = text.split(/(`[^`]+`)/g);
  return (
    <p key={key} className="text-foreground/70 leading-relaxed mb-10 text-[16px] font-medium tracking-wide">
      {parts.map((p, i) =>
        p.startsWith("`") && p.endsWith("`") ? (
          <code key={i} className="px-2 py-0.5 border border-primary/40 bg-primary/10 text-primary font-mono text-[14px] font-black">{p.slice(1, -1)}</code>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </p>
  );
}

export function SectionView({ section }: { section: Section }) {
  const [showDeep, setShowDeep] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const { t } = useI18n();

  return (
    <section id={section.id} className="scroll-mt-32 mb-32 border-l-2 border-foreground/5 pl-8 md:pl-12">
      <div className="flex flex-col mb-10 gap-2">
        <div className="flex items-center gap-3">
          <div className="h-4 w-1 bg-primary" />
          <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase">DATA_SECTION</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
          {section.title}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-border/20 mb-12 border border-border/10">
        <div className="p-8 bg-surface relative overflow-hidden group hover:bg-foreground/[0.02] transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Sparkles className="h-12 w-12" />
          </div>
          <p className="text-[10px] font-black tracking-[0.3em] text-primary mb-4 uppercase flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5" /> {t("lesson.whyMatters")}
          </p>
          <p className="text-sm font-black uppercase tracking-widest text-foreground/80 leading-relaxed">{section.whyItMatters}</p>
        </div>

        {section.realWorldAnalogy && (
          <div className="p-8 bg-surface relative overflow-hidden group hover:bg-foreground/[0.02] transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <BookOpen className="h-12 w-12" />
            </div>
            <p className="text-[10px] font-black tracking-[0.3em] text-foreground/30 mb-4 uppercase flex items-center gap-2">
              <BookOpen className="h-3.5 w-3.5" /> {t("lesson.analogy")}
            </p>
            <p className="text-sm font-black uppercase tracking-widest text-foreground/60 leading-relaxed">{section.realWorldAnalogy}</p>
          </div>
        )}
      </div>

      <div className="max-w-4xl mb-12">
        {section.content.split("\n\n").map((para, i) => renderParagraph(para, `${section.id}-p-${i}`))}
      </div>

      <div className="space-y-12">
        {section.callouts?.map((c, i) => <CalloutBox key={i} callout={c} />)}
      </div>

      {section.codeExamples?.map((ex) => (
        <div key={ex.id} className="my-20 p-1 bg-border/20 relative group">
          <div className="bg-surface p-10 border border-border/20 space-y-8">
            <div className="flex items-center justify-between pb-6 border-b border-border/10">
               <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-primary" />
                    <span className="text-[9px] font-black tracking-[0.4em] text-primary uppercase">CODE_SPECIMEN</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter">{ex.title}</h3>
               </div>
               <div className="text-[10px] font-mono text-foreground/20 tracking-tighter hidden sm:block">
                 HASH: {Math.random().toString(16).slice(2, 10).toUpperCase()}
               </div>
            </div>
            
            <p className="text-[13px] font-black uppercase tracking-[0.1em] text-foreground/40 leading-relaxed max-w-2xl">{ex.description}</p>
            
            <div className="space-y-6">
              <div className="border border-border/20 bg-muted/20">
                <MiniCompiler initial={ex.code} />
              </div>
              <div className="border border-border/20 bg-muted/10">
                <AnnotatedCode code={ex.code} />
              </div>
            </div>

            <div className="p-6 bg-primary/5 border-l-4 border-primary space-y-4">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-primary" />
                <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase">ANALYSIS_LOG</span>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed font-medium">{ex.explanation}</p>
            </div>

            {ex.tryItPrompt && (
              <div className="flex items-center gap-3 p-4 bg-foreground/5 border border-border/10">
                <Lightbulb className="h-4 w-4 text-yellow-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-foreground/60">{ex.tryItPrompt}</span>
              </div>
            )}
          </div>
        </div>
      ))}

      {section.microExercise && (
        <div className="my-20 relative p-1 bg-primary/20">
          <div className="bg-surface p-12 border border-primary/30 space-y-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Zap className="h-32 w-32 text-primary" />
            </div>
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-primary text-primary-foreground font-black text-[10px] tracking-[0.3em] uppercase">
                <Zap className="h-4 w-4" />
                {t("lesson.microExercise")}
              </div>
              <h4 className="text-3xl font-black uppercase tracking-tight max-w-2xl leading-none">
                {section.microExercise.instruction}
              </h4>
            </div>
            
            <div className="space-y-8">
              <div className="border border-border/20 bg-muted/20 shadow-2xl">
                <MiniCompiler initial={section.microExercise.starterCode} />
              </div>
              
              <div className="flex flex-wrap gap-4">
                <CyberpunkButton variant="outline" size="sm" onClick={() => setShowHint(!showHint)} className="bg-foreground/5">
                  {showHint ? t("lesson.hideHint") : t("lesson.showHint")}
                </CyberpunkButton>
                <CyberpunkButton variant="outline" size="sm" onClick={() => setShowSolution(!showSolution)} className="bg-foreground/5">
                  {showSolution ? t("lesson.hideSolution") : t("lesson.showSolution")}
                </CyberpunkButton>
              </div>

              <AnimatePresence>
                {showHint && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="p-6 border-l-4 border-yellow-500/40 bg-yellow-500/5 text-yellow-500/80"
                  >
                    <p className="text-[12px] font-black uppercase tracking-widest flex items-center gap-3">
                      <Lightbulb className="h-5 w-5" /> HINT_DECODED: {section.microExercise.hint}
                    </p>
                  </motion.div>
                )}

                {showSolution && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6 pt-10 border-t border-border/20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 bg-green-500 animate-pulse" />
                      <span className="text-[10px] font-black tracking-[0.4em] text-green-500 uppercase">OPTIMAL_SOLUTION_RECOVERED</span>
                    </div>
                    <div className="space-y-4">
                      <div className="border border-green-500/20">
                        <MiniCompiler initial={section.microExercise.solution} />
                      </div>
                      <div className="border border-border/10">
                        <AnnotatedCode code={section.microExercise.solution} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}

      {section.deepDive && (
        <div className="my-20 border-t-2 border-border/10 pt-12">
          <button 
            onClick={() => setShowDeep(!showDeep)} 
            className="flex items-center gap-4 group"
          >
            <div className={cn(
              "w-12 h-12 border-2 border-border/20 flex items-center justify-center transition-all group-hover:border-primary",
              showDeep && "bg-primary border-primary shadow-[0_0_20px_rgba(0,163,255,0.3)]"
            )}>
              <ChevronDown className={cn(
                "h-5 w-5 transition-transform group-hover:text-primary",
                showDeep ? "rotate-180 text-primary-foreground group-hover:text-primary-foreground" : "text-foreground/40"
              )} />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/20 mb-1">OPTIONAL_PROTOCOLS</p>
              <span className={cn(
                "text-xl font-black uppercase tracking-widest transition-colors",
                showDeep ? "text-primary" : "text-foreground/60 group-hover:text-foreground"
              )}>
                {t("lesson.deepDive")}
              </span>
            </div>
          </button>
          
          <AnimatePresence>
            {showDeep && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-10 p-10 bg-foreground/[0.01] border border-border/10 relative">
                  <div className="absolute top-4 right-4 text-[8px] font-mono text-foreground/10 tracking-[0.5em] uppercase">DEEP_DIVE_ENABLED</div>
                  <div className="max-w-3xl">
                    {section.deepDive.split("\n\n").map((p, i) => renderParagraph(p, `${section.id}-d-${i}`))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </section>
  );
}

