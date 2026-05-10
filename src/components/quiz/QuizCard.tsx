import { useState } from "react";
import type { QuizQuestion } from "@/lib/curriculum/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <div className="glass-card p-6 max-w-2xl mx-auto animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-mono text-muted-foreground">Question {index + 1} of {total}</span>
        <span className="text-xs font-mono uppercase text-primary">{question.type.replace("-", " ")}</span>
      </div>
      <h3 className="text-lg font-display font-semibold mb-4">{question.question}</h3>
      {question.code && (
        <pre className="bg-background border border-border rounded-lg p-3 text-xs font-mono mb-4 overflow-x-auto scrollbar-thin">
          <code>{question.code}</code>
        </pre>
      )}

      {(question.type === "mcq" || question.type === "true-false" || question.type === "code-output" || question.type === "spot-the-bug") && question.options && (
        <div className="space-y-2 mb-4">
          {question.options.map((opt, i) => {
            const isSel = selected === i;
            const isRight = i === question.correctAnswer;
            const cls = submitted
              ? isRight
                ? "border-success bg-success/10"
                : isSel
                  ? "border-destructive bg-destructive/10"
                  : "border-border"
              : isSel
                ? "border-primary bg-primary/10"
                : "border-border hover:border-primary/50";
            return (
              <button
                key={i}
                disabled={submitted}
                onClick={() => setSelected(i)}
                className={cn("w-full text-left p-3 rounded-lg border transition-all flex items-center gap-3", cls)}
              >
                <span className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs font-mono shrink-0">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1 text-sm">{opt}</span>
                {submitted && isRight && <Check className="h-4 w-4 text-success" />}
                {submitted && isSel && !isRight && <X className="h-4 w-4 text-destructive" />}
              </button>
            );
          })}
        </div>
      )}

      {question.type === "fill-blank" && (
        <Input
          value={textAnswer}
          disabled={submitted}
          onChange={(e) => setTextAnswer(e.target.value)}
          placeholder="Type your answer..."
          className="mb-4 font-mono"
        />
      )}

      {submitted && (
        <div className={cn("p-4 rounded-lg mb-4", isCorrect ? "bg-success/10 border border-success/30" : "bg-destructive/10 border border-destructive/30")}>
          <p className="font-semibold mb-1 flex items-center gap-2">
            {isCorrect ? <><Check className="h-4 w-4 text-success" /> Correct!</> : <><X className="h-4 w-4 text-destructive" /> Not quite.</>}
          </p>
          <p className="text-sm text-foreground/85">{question.explanation}</p>
        </div>
      )}

      <div className="flex justify-end">
        {!submitted ? (
          <Button onClick={submit} disabled={selected === null && !textAnswer}>Submit answer</Button>
        ) : (
          <Button onClick={next}>{index + 1 === total ? "See results" : "Next question →"}</Button>
        )}
      </div>
    </div>
  );
}
