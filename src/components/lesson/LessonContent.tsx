import { useState } from "react";
import type { Section, TrackId } from "@/lib/curriculum/types";
import { tracks } from "@/lib/curriculum";
import { CalloutBox } from "./CalloutBox";
import { MiniCompiler } from "./MiniCompiler";
import { AnnotatedCode } from "./AnnotatedCode";
import { CyberpunkButton } from "@/components/ui/cyberpunk";
import { ChevronDown, BookOpen, Sparkles, Lightbulb, Terminal, Zap, Activity, Hash, Globe, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/hooks/useI18n";
import { cn } from "@/lib/utils";

function renderParagraph(text: string, key: string, brandColor?: string) {
  const parts = text.split(/(`[^`]+`)/g);
  return (
    <p key={key} className="text-foreground leading-relaxed mb-8 text-[17px] font-medium tracking-normal selection:bg-primary/30">
      {parts.map((p, i) =>
        p.startsWith("`") && p.endsWith("`") ? (
          <code 
            key={i} 
            style={{ color: brandColor, borderColor: `${brandColor}33`, backgroundColor: `${brandColor}0D` }}
            className="px-1.5 py-0.5 border font-mono text-[14px] font-bold"
          >
            {p.slice(1, -1)}
          </code>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </p>
  );
}

export function SectionView({ section, trackId }: { section: Section, trackId: TrackId }) {
  const [showDeep, setShowDeep] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const { t, lang } = useI18n();
  const isBn = lang === "bn";
  const track = tracks.find(t => t.id === trackId);
  const brandColor = track?.brandColor || "var(--primary)";

  return (
    <motion.section 
      id={section.id} 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="scroll-mt-32 mb-40 relative group"
    >
      {/* Brutalist Section Marker */}
      <div 
        style={{ background: `linear-gradient(to bottom, ${brandColor}66, rgba(255,255,255,0.05), transparent)` }}
        className="absolute -left-8 md:-left-16 top-0 bottom-0 w-px" 
      />
      <div 
        style={{ borderColor: `${brandColor}66` }}
        className="absolute -left-[35px] md:-left-[67px] top-0 w-4 h-4 bg-background border flex items-center justify-center"
      >
        <div style={{ backgroundColor: brandColor }} className="w-1.5 h-1.5 animate-pulse" />
      </div>

      <div className="flex flex-col mb-12 gap-3">
        <div className="flex items-center gap-4">
          <div style={{ backgroundColor: `${brandColor}1A`, borderColor: `${brandColor}33` }} className="px-2 py-0.5 border">
            <span style={{ color: brandColor }} className="text-[9px] font-black tracking-[0.3em] uppercase">{t("system.section")}_{section.id.toUpperCase()}</span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-border/40 to-transparent" />
          <span className="text-[10px] font-mono text-foreground-20 tracking-tighter">{t("system.coordinate")}: {Math.floor(Math.random() * 999)}.{Math.floor(Math.random() * 999)}</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-foreground italic">
          {isBn && section.titleBn ? section.titleBn : section.title}
        </h2>
      </div>

      {/* Intro Cards */}
      <div className="grid md:grid-cols-2 gap-4 mb-16">
        <div 
          style={{ borderColor: `${brandColor}33` }}
          className="p-8 bg-surface/50 border relative overflow-hidden group/card hover:border-primary/40 transition-colors"
        >
          <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover/card:opacity-[0.07] transition-opacity rotate-12">
            {track?.icon ? (
              <img src={track.icon} className="h-24 w-24 grayscale opacity-20" alt="" />
            ) : (
              <Sparkles className="h-24 w-24" />
            )}
          </div>
          <div className="flex items-center gap-2 mb-4">
            <div style={{ backgroundColor: `${brandColor}1A`, borderColor: `${brandColor}33` }} className="p-1.5 border">
              <Sparkles style={{ color: brandColor }} className="h-3.5 w-3.5" />
            </div>
            <span style={{ color: brandColor }} className="text-[10px] font-black tracking-[0.3em] uppercase">
              {t("lesson.whyMatters")}
            </span>
          </div>
          <p className="text-lg font-bold uppercase tracking-tight text-foreground-80 leading-tight">
            {isBn && section.whyItMattersBn ? section.whyItMattersBn : section.whyItMatters}
          </p>
        </div>

        {section.realWorldAnalogy && (
          <div className="p-8 bg-surface/50 border border-border/40 relative overflow-hidden group/card hover:border-blue-500/40 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover/card:opacity-[0.07] transition-opacity -rotate-12">
              <Globe className="h-24 w-24" />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-blue-500/10 border border-blue-500/20">
                <Globe className="h-3.5 w-3.5 text-blue-400" />
              </div>
              <span className="text-[10px] font-black tracking-[0.3em] text-blue-400 uppercase">
                {t("lesson.analogy")}
              </span>
            </div>
            <p className="text-lg font-bold uppercase tracking-tight text-foreground-40 leading-tight">
              {isBn && section.realWorldAnalogyBn ? section.realWorldAnalogyBn : section.realWorldAnalogy}
            </p>
          </div>
        )}
      </div>

      <div className="max-w-4xl mb-16 relative">
        {(isBn && section.contentBn ? section.contentBn : section.content).split("\n\n").map((para, i) => renderParagraph(para, `${section.id}-p-${i}`, brandColor))}
        {/* Sub-border */}
        <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-foreground/10" />
      </div>

      <div className="space-y-16">
        {section.callouts?.map((c, i) => <CalloutBox key={i} callout={c} />)}
      </div>

      {section.codeExamples?.map((ex) => (
        <div key={ex.id} className="my-24 relative">
          {/* Header */}
          <div className="flex items-end justify-between mb-6 px-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div style={{ backgroundColor: brandColor }} className="w-2 h-2" />
                <span style={{ color: brandColor }} className="text-[10px] font-black tracking-[0.4em] uppercase italic">{t("system.exhibit")}_{ex.id.toUpperCase()}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-foreground">
                {isBn && ex.titleBn ? ex.titleBn : ex.title}
              </h3>
            </div>
            <div className="flex flex-col items-end gap-1 opacity-20 hidden sm:flex">
              <span className="text-[8px] font-mono tracking-widest">TIMESTAMP: {Date.now()}</span>
              <div className="h-px w-32 bg-foreground/10" />
            </div>
          </div>
          
          <div className="bg-surface/30 border border-border/40 p-1">
             <div className="bg-[#080808] border border-border/20 p-6 md:p-10 space-y-10">
                <div className="flex items-start gap-4">
                   <div style={{ backgroundColor: `${brandColor}0D`, borderColor: `${brandColor}33` }} className="p-3 border shrink-0">
                      <Terminal style={{ color: brandColor }} className="h-5 w-5" />
                   </div>
                   <p className="text-[15px] font-medium text-foreground-40 leading-relaxed max-w-3xl">
                      {isBn && ex.descriptionBn ? ex.descriptionBn : ex.description}
                   </p>
                </div>
                
                <div className="grid gap-8">
                  <div className="relative group/comp">
                    <div style={{ backgroundColor: brandColor }} className="absolute -top-3 left-6 px-2 py-0.5 text-black text-[8px] font-black uppercase tracking-[0.2em] z-20">{t("system.liveExecution")}</div>
                    <MiniCompiler initial={ex.code} />
                  </div>
                  <div className="relative group/anno">
                    <div className="absolute -top-3 left-6 px-2 py-0.5 bg-foreground/10 text-foreground-40 text-[8px] font-black uppercase tracking-[0.2em] z-20">{t("system.annotationMap")}</div>
                    <AnnotatedCode code={ex.code} />
                  </div>
                </div>

                <div style={{ borderColor: `${brandColor}66` }} className="p-6 bg-background border-t-2 relative overflow-hidden group/analysis">
                  <div className="absolute top-0 right-0 p-4 opacity-[0.02] group-hover/analysis:opacity-[0.05] transition-opacity">
                    <Activity style={{ color: brandColor }} className="h-16 w-16" />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <Activity style={{ color: brandColor }} className="h-4 w-4 animate-pulse" />
                    <span style={{ color: brandColor }} className="text-[10px] font-black tracking-[0.3em] uppercase">{t("system.analysisLog")}</span>
                  </div>
                  <p className="text-base text-foreground-80 leading-relaxed font-medium">
                    {isBn && ex.explanationBn ? ex.explanationBn : ex.explanation}
                  </p>
                </div>

                {ex.tryItPrompt && (
                  <motion.div 
                    whileHover={{ x: 5 }}
                    style={{ borderColor: `${brandColor}1A` }}
                    className="flex items-center gap-4 p-5 bg-zinc-900 border hover:border-primary/30 transition-colors"
                  >
                    <div className="p-2 bg-yellow-500/10 border border-yellow-500/20">
                      <Zap className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wide text-foreground-40 italic">
                      {isBn && ex.tryItPromptBn ? ex.tryItPromptBn : ex.tryItPrompt}
                    </span>
                  </motion.div>
                )}
             </div>
          </div>
        </div>
      ))}

      {section.microExercise && (
        <div className="my-32 relative group">
          <div style={{ background: `linear-gradient(to right, ${brandColor}33, #3b82f61a, ${brandColor}33)` }} className="absolute -inset-1 opacity-40 blur-xl group-hover:opacity-60 transition-opacity" />
          <div style={{ borderColor: `${brandColor}4D` }} className="relative bg-background border p-8 md:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity rotate-12">
              <Zap style={{ color: brandColor }} className="h-64 w-64" />
            </div>
            
            <div className="space-y-6 mb-12">
              <div style={{ backgroundColor: brandColor }} className="inline-flex items-center gap-3 px-4 py-2 text-black font-black text-xs tracking-[0.3em] uppercase italic">
                <Zap className="h-4 w-4 fill-black" />
                {t("lesson.microExercise")}
              </div>
              <h4 className="text-4xl md:text-5xl font-black uppercase tracking-tighter max-w-3xl leading-[0.95] text-foreground">
                {isBn && section.microExercise.instructionBn ? section.microExercise.instructionBn : section.microExercise.instruction}
              </h4>
            </div>
            
            <div className="space-y-10">
              <div className="relative">
                <div style={{ backgroundColor: brandColor }} className="absolute -top-3 left-6 px-2 py-0.5 text-black text-[8px] font-black uppercase tracking-[0.2em] z-20">{t("system.challengeEnv")}</div>
                <MiniCompiler initial={section.microExercise.starterCode} />
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <CyberpunkButton variant="outline" size="sm" onClick={() => setShowHint(!showHint)} className="px-6 font-black tracking-widest">
                  {showHint ? t("lesson.hideHint") : t("lesson.showHint")}
                </CyberpunkButton>
                <CyberpunkButton variant="neon" size="sm" onClick={() => setShowSolution(!showSolution)} className="px-6 font-black tracking-widest">
                  {showSolution ? t("lesson.hideSolution") : t("lesson.showSolution")}
                </CyberpunkButton>
              </div>

              <AnimatePresence>
                {showHint && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 border-l-4 border-yellow-500 bg-yellow-500/5 relative">
                       <div className="absolute top-2 right-2 opacity-5"><Lightbulb className="h-12 w-12 text-yellow-500" /></div>
                       <p className="text-[11px] font-black uppercase tracking-[0.3em] text-yellow-500 mb-2 flex items-center gap-2">
                          <Shield className="h-3.5 w-3.5" /> {t("system.hintEncrypted")}
                       </p>
                       <p className="text-lg font-bold text-foreground-80 italic">
                          {isBn && section.microExercise.hintBn ? section.microExercise.hintBn : section.microExercise.hint}
                       </p>
                    </div>
                  </motion.div>
                )}

                {showSolution && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="space-y-12 pt-12 border-t border-border/20"
                  >
                    <div className="flex items-center gap-4">
                      <div className="px-3 py-1 bg-green-500/10 border border-green-500/20">
                        <span className="text-[10px] font-black tracking-[0.4em] text-green-500 uppercase italic">{t("system.masterSolution")}</span>
                      </div>
                      <div className="h-px flex-1 bg-green-500/20" />
                    </div>
                    <div className="grid gap-10">
                      <div className="relative">
                        <div className="absolute -top-3 left-6 px-2 py-0.5 bg-green-500 text-black text-[8px] font-black uppercase tracking-[0.2em] z-20">{t("system.goldenSource")}</div>
                        <div className="p-1 bg-green-500/10 border border-green-500/30">
                          <MiniCompiler initial={section.microExercise.solution} />
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute -top-3 left-6 px-2 py-0.5 bg-foreground/10 text-foreground-40 text-[8px] font-black uppercase tracking-[0.2em] z-20">{t("system.solutionWalkthrough")}</div>
                        <div className="p-1 bg-surface/50 border border-border/20">
                          <AnnotatedCode code={section.microExercise.solution} />
                        </div>
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
        <div className="my-32 border-t border-border/20 pt-16">
          <button 
            onClick={() => setShowDeep(!showDeep)} 
            className="flex items-center gap-6 group w-full text-left"
          >
            <div 
              style={{ 
                backgroundColor: showDeep ? brandColor : "transparent",
                borderColor: showDeep ? brandColor : "rgba(255,255,255,0.1)",
                boxShadow: showDeep ? `0 0 30px ${brandColor}33` : "none"
              }}
              className="w-16 h-16 border flex items-center justify-center transition-all group-hover:bg-primary/5"
            >
              <ChevronDown className={cn(
                "h-6 w-6 transition-transform",
                showDeep ? "rotate-180 text-black" : "text-foreground-20 group-hover:text-primary"
              )} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <Hash className="h-3 w-3 text-foreground-20" />
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground-20">OPTIONAL_RESOURCES_v2.0</p>
              </div>
              <span 
                style={{ color: showDeep ? brandColor : undefined }}
                className={cn(
                  "text-2xl md:text-3xl font-black uppercase tracking-tighter transition-colors",
                  !showDeep && "text-foreground-40 group-hover:text-foreground-80"
                )}
              >
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
                <div className="mt-12 p-10 md:p-16 bg-background border border-border/40 relative">
                  <div className="absolute top-6 right-6 text-[9px] font-black text-zinc-800 tracking-[0.5em] uppercase">{t("system.accessGranted")}</div>
                  <div className="max-w-4xl relative">
                    {(isBn && section.deepDiveBn ? section.deepDiveBn : section.deepDive).split("\n\n").map((p, i) => renderParagraph(p, `${section.id}-d-${i}`, brandColor))}
                    {/* Vertical decorative line inside deep dive */}
                    <div style={{ backgroundColor: `${brandColor}33` }} className="absolute -left-8 top-0 bottom-0 w-0.5" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.section>
  );
}


