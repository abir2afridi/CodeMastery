import { useState } from "react";
import type { QuizQuestion } from "@/lib/curriculum/types";
import { CyberpunkButton } from "@/components/ui/cyberpunk";
import { Input } from "@/components/ui/input";
import { Check, X, Terminal, ArrowRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  question: QuizQuestion;
  index: number;
  total: number;
  onAnswer: (correct: boolean) => void;
  onNext: () => void;
}

export function QuizCard({ question, index, total, onAnswer, onNext }: Props) {
  const [selected, setSelected] = useState<string | number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [textAnswer, setTextAnswer] = useState("");

  const isCorrect = (() => {
    if (selected === null && !textAnswer) return false;
    if (question.type === "fill-blank") {
      return textAnswer.trim().toLowerCase() === String(question.correctAnswer).toLowerCase();
    }
    return selected === question.correctAnswer;
  })();

  const submit = () => {
    setSubmitted(true);
    onAnswer(isCorrect);
  };
  const next = () => {
    setSelected(null); setTextAnswer(""); setSubmitted(false);
    onNext();
  };

  return (
    <motion.div 
      key={index}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="relative max-w-2xl mx-auto"
    >
      {/* CARD CONTAINER */}
      <div className="border border-white/10 bg-black/80 backdrop-blur-xl p-8 relative overflow-hidden">
        {/* CORNER DECORATIONS */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon-blue" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon-blue" />

        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-black tracking-[0.2em] text-white/20">QUERY_ID:</span>
            <span className="text-[9px] font-black tracking-[0.2em] text-neon-blue">0{index + 1} / 0{total}</span>
          </div>
          <div className="px-2 py-0.5 border border-neon-blue/20 bg-neon-blue/5">
            <span className="text-[8px] font-black tracking-[0.2em] text-neon-blue uppercase">{question.type.replace("-", "_")}</span>
          </div>
        </div>

        <h3 className="text-xl font-black uppercase tracking-tight mb-8 leading-tight">
          {question.question}
        </h3>

        {question.code && (
          <div className="mb-8 relative group">
            <div className="absolute -top-3 right-4 px-2 py-0.5 bg-[#1A1A1A] border border-white/10 text-[8px] font-black tracking-widest text-white/40 uppercase">
              CODE_SPECIMEN
            </div>
            <pre className="bg-black/40 border border-white/10 p-6 text-xs font-mono overflow-x-auto scrollbar-thin text-neon-blue/90">
              <code>{question.code}</code>
            </pre>
          </div>
        )}

        {(question.type === "mcq" || question.type === "true-false" || question.type === "code-output" || question.type === "spot-the-bug") && question.options && (
          <div className="space-y-3 mb-8">
            {question.options.map((opt, i) => {
              const isSel = selected === i;
              const isRight = i === question.correctAnswer;
              
              let stateClasses = "border-white/5 bg-white/[0.02] text-white/60 hover:border-white/20 hover:bg-white/[0.05]";
              
              if (submitted) {
                if (isRight) stateClasses = "border-green-500/50 bg-green-500/10 text-green-500";
                else if (isSel) stateClasses = "border-crimson/50 bg-crimson/10 text-crimson";
                else stateClasses = "border-white/5 opacity-30 text-white/40";
              } else if (isSel) {
                stateClasses = "border-neon-blue bg-neon-blue/10 text-neon-blue";
              }

              return (
                <button
                  key={i}
                  disabled={submitted}
                  onClick={() => setSelected(i)}
                  className={cn(
                    "w-full text-left p-4 transition-all flex items-center gap-4 border group relative",
                    stateClasses
                  )}
                >
                  <div className={cn(
                    "h-8 w-8 flex items-center justify-center text-[10px] font-black border transition-colors",
                    isSel ? "border-current bg-current/10" : "border-white/10 bg-white/5"
                  )}>
                    {String.fromCharCode(65 + i)}
                  </div>
                  <span className="flex-1 text-[13px] font-black uppercase tracking-wider">{opt}</span>
                  
                  {submitted && isRight && <Check className="h-4 w-4" />}
                  {submitted && isSel && !isRight && <X className="h-4 w-4" />}
                </button>
              );
            })}
          </div>
        )}

        {question.type === "fill-blank" && (
          <div className="mb-8">
            <div className="relative">
              <Input
                value={textAnswer}
                disabled={submitted}
                onChange={(e) => setTextAnswer(e.target.value)}
                placeholder="INPUT_RESPONSE_STRING..."
                className="h-14 bg-white/[0.02] border-white/10 rounded-none font-black uppercase tracking-widest text-neon-blue placeholder:text-white/10 focus-visible:ring-neon-blue/30 focus-visible:border-neon-blue"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <Terminal className="h-4 w-4 text-white/10" />
              </div>
            </div>
          </div>
        )}

        <AnimatePresence>
          {submitted && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className={cn(
                "p-6 border-l-2 mb-8 space-y-2",
                isCorrect ? "bg-green-500/5 border-green-500" : "bg-crimson/5 border-crimson"
              )}
            >
              <div className="flex items-center gap-2">
                <Zap className={cn("h-3 w-3", isCorrect ? "text-green-500" : "text-crimson")} />
                <span className="text-[10px] font-black tracking-[0.2em] uppercase">
                  {isCorrect ? "ANALYSIS_VERIFIED" : "DISCREPANCY_DETECTED"}
                </span>
              </div>
              <p className="text-[12px] font-black uppercase tracking-wider leading-relaxed text-white/80">
                {question.explanation}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-end pt-4 border-t border-white/5">
          {!submitted ? (
            <CyberpunkButton 
              onClick={submit} 
              disabled={selected === null && !textAnswer}
              variant="neon"
            >
              COMMIT_RESPONSE
            </CyberpunkButton>
          ) : (
            <CyberpunkButton onClick={next} variant="brutalist">
              {index + 1 === total ? "VIEW_SYNC_RESULTS" : "NEXT_QUERY"} <ArrowRight className="h-4 w-4" />
            </CyberpunkButton>
          )}
        </div>
      </div>
    </motion.div>
  );
}

