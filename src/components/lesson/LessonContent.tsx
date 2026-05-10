import { useState } from "react";
import type { Section } from "@/lib/curriculum/types";
import { CalloutBox } from "./CalloutBox";
import { MiniCompiler } from "./MiniCompiler";
import { AnnotatedCode } from "./AnnotatedCode";
import { Button } from "@/components/ui/button";
import { ChevronDown, BookOpen, Sparkles, Lightbulb } from "lucide-react";
import { useI18n } from "@/lib/i18n";

function renderParagraph(text: string, key: string) {
  // simple inline `code` rendering
  const parts = text.split(/(`[^`]+`)/g);
  return (
    <p key={key} className="text-foreground/90 leading-relaxed mb-4">
      {parts.map((p, i) =>
        p.startsWith("`") && p.endsWith("`") ? (
          <code key={i} className="px-1.5 py-0.5 rounded bg-muted text-primary font-mono text-sm">{p.slice(1, -1)}</code>
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
    <section id={section.id} className="scroll-mt-24 mb-12">
      <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 flex items-center gap-2">
        <span className="h-1.5 w-8 bg-gradient-violet rounded-full" /> {section.title}
      </h2>

      <div className="glass-card p-4 mb-4 border-l-4 border-l-primary">
        <p className="text-xs uppercase font-bold text-primary tracking-wider mb-1 flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5" /> {t("lesson.whyMatters")}
        </p>
        <p className="text-sm text-foreground/85">{section.whyItMatters}</p>
      </div>

      {section.realWorldAnalogy && (
        <div className="glass-card p-4 mb-6 border-l-4 border-l-secondary">
          <p className="text-xs uppercase font-bold text-secondary-foreground tracking-wider mb-1 flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5" /> {t("lesson.analogy")}
          </p>
          <p className="text-sm text-foreground/85">{section.realWorldAnalogy}</p>
        </div>
      )}

      <div className="prose prose-invert max-w-none">
        {section.content.split("\n\n").map((para, i) => renderParagraph(para, `${section.id}-p-${i}`))}
      </div>

      {section.callouts?.map((c, i) => <CalloutBox key={i} callout={c} />)}

      {section.codeExamples?.map((ex) => (
        <div key={ex.id} className="my-6">
          <h3 className="text-lg font-display font-semibold mb-1">{ex.title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{ex.description}</p>
          <MiniCompiler initial={ex.code} />
          <AnnotatedCode code={ex.code} />
          <div className="glass-card p-3 text-sm text-foreground/85 mt-3">{ex.explanation}</div>
          {ex.tryItPrompt && (
            <p className="mt-2 text-xs italic text-primary flex items-center gap-1.5">
              <Lightbulb className="h-3.5 w-3.5" /> {ex.tryItPrompt}
            </p>
          )}
        </div>
      ))}

      {section.microExercise && (
        <div className="glass-card p-4 my-6 border border-primary/30">
          <p className="text-xs uppercase font-bold text-primary tracking-wider mb-2">{t("lesson.microExercise")}</p>
          <p className="text-sm mb-3">{section.microExercise.instruction}</p>
          <MiniCompiler initial={section.microExercise.starterCode} />
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => setShowHint(!showHint)}>{showHint ? t("lesson.hideHint") : t("lesson.showHint")}</Button>
            <Button size="sm" variant="outline" onClick={() => setShowSolution(!showSolution)}>{showSolution ? t("lesson.hideSolution") : t("lesson.showSolution")}</Button>
          </div>
          {showHint && <p className="mt-3 text-sm text-warning">💡 {section.microExercise.hint}</p>}
          {showSolution && (
            <div className="mt-3">
              <MiniCompiler initial={section.microExercise.solution} />
              <AnnotatedCode code={section.microExercise.solution} />
            </div>
          )}
        </div>
      )}

      {section.deepDive && (
        <div className="my-6">
          <button onClick={() => setShowDeep(!showDeep)} className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-glow">
            <ChevronDown className={`h-4 w-4 transition-transform ${showDeep ? "rotate-180" : ""}`} />
            {t("lesson.deepDive")}
          </button>
          {showDeep && (
            <div className="mt-3 glass-card p-4 text-sm text-foreground/85">
              {section.deepDive.split("\n\n").map((p, i) => renderParagraph(p, `${section.id}-d-${i}`))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
