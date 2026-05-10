import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getChapter, getTrack } from "@/lib/curriculum";
import type { TrackId, Exercise } from "@/lib/curriculum/types";
import { MiniCompiler } from "@/components/lesson/MiniCompiler";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ArrowLeft, Lightbulb, Eye, EyeOff, RotateCcw, CheckCircle2 } from "lucide-react";

export default function PracticePage() {
  const { trackId, chapterId } = useParams<{ trackId: TrackId; chapterId: string }>();
  const track = trackId ? getTrack(trackId) : undefined;
  const chapter = trackId && chapterId ? getChapter(trackId, chapterId) : undefined;
  const [activeIdx, setActiveIdx] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [hintsShown, setHintsShown] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  const exercises = chapter?.exercises ?? [];
  const ex: Exercise | undefined = exercises[activeIdx];

  const initial = useMemo(
    () => (showSolution ? ex?.solution : ex?.starterCode) ?? {},
    [ex, showSolution, resetKey],
  );

  const goToExercise = (i: number) => {
    setActiveIdx(i);
    setShowSolution(false);
    setHintsShown(0);
    setResetKey((k) => k + 1);
  };

  if (!track || !chapter) {
    return (
      <div className="container mx-auto p-8 text-center">
        <p className="text-muted-foreground">Chapter not found.</p>
        <Link to="/learn"><Button variant="link">Back to dashboard</Button></Link>
      </div>
    );
  }

  if (exercises.length === 0) {
    return (
      <div className="container mx-auto p-8 max-w-3xl">
        <Link to={`/learn/${trackId}/${chapterId}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="h-4 w-4" /> Back to lesson
        </Link>
        <h1 className="text-3xl font-display font-bold mb-2">Practice — {chapter.title}</h1>
        <p className="text-muted-foreground">No practice exercises yet for this chapter.</p>
      </div>
    );
  }

  const completedCount = Object.values(completed).filter(Boolean).length;

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-6xl">
      <Link to={`/learn/${trackId}/${chapterId}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4">
        <ArrowLeft className="h-4 w-4" /> Back to lesson
      </Link>

      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{track.title} · Chapter {chapter.number}</p>
          <h1 className="text-3xl md:text-4xl font-display font-bold">Practice — {chapter.title}</h1>
        </div>
        <Badge variant="secondary" className="text-sm">
          {completedCount} / {exercises.length} done
        </Badge>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {exercises.map((e, i) => (
          <Button
            key={e.id}
            variant={i === activeIdx ? "default" : "outline"}
            size="sm"
            onClick={() => goToExercise(i)}
          >
            {completed[e.id] && <CheckCircle2 className="h-3.5 w-3.5 mr-1 text-accent" />}
            #{i + 1} · {e.title}
            <Badge variant="secondary" className="ml-2">L{e.difficulty}</Badge>
          </Button>
        ))}
      </div>

      {ex && (
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-6">
          <Card className="p-5 space-y-4 h-fit">
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <h2 className="text-xl font-semibold">{ex.title}</h2>
                <Badge>Difficulty {ex.difficulty}</Badge>
                {showSolution && (
                  <Badge variant="outline" className="border-accent text-accent">Solution shown</Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{ex.description}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Requirements</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                {ex.requirements.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </div>

            {hintsShown > 0 && (
              <div className="border-l-2 border-primary/50 pl-3 space-y-1">
                <p className="text-xs uppercase tracking-wider text-primary">Hints</p>
                {ex.hints.slice(0, hintsShown).map((h, i) => (
                  <p key={i} className="text-sm"><span className="text-muted-foreground">{i + 1}.</span> {h}</p>
                ))}
              </div>
            )}

            {showSolution && (
              <div className="border-l-2 border-accent pl-3">
                <p className="text-xs uppercase tracking-wider text-accent mb-1">Solution explained</p>
                <p className="text-sm">{ex.solutionExplanation}</p>
              </div>
            )}

            <div className="flex flex-wrap gap-2 pt-2">
              <Button
                variant="outline" size="sm"
                onClick={() => setHintsShown((n) => Math.min(n + 1, ex.hints.length))}
                disabled={hintsShown >= ex.hints.length}
              >
                <Lightbulb className="h-4 w-4 mr-1" />
                Hint ({hintsShown}/{ex.hints.length})
              </Button>

              {!showSolution ? (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" /> Show solution
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Reveal the solution?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Wrestling with a problem is where real learning happens. Try at least one more hint before peeking — but no judgment if you're stuck.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Keep trying</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => { setShowSolution(true); setResetKey((k) => k + 1); }}
                      >
                        Show me
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              ) : (
                <Button
                  variant="outline" size="sm"
                  onClick={() => { setShowSolution(false); setResetKey((k) => k + 1); }}
                >
                  <EyeOff className="h-4 w-4 mr-1" /> Hide solution
                </Button>
              )}

              <Button
                variant="ghost" size="sm"
                onClick={() => { setShowSolution(false); setHintsShown(0); setResetKey((k) => k + 1); }}
              >
                <RotateCcw className="h-4 w-4 mr-1" /> Reset
              </Button>

              <Button
                variant={completed[ex.id] ? "secondary" : "default"}
                size="sm"
                onClick={() => setCompleted((c) => ({ ...c, [ex.id]: !c[ex.id] }))}
              >
                <CheckCircle2 className="h-4 w-4 mr-1" />
                {completed[ex.id] ? "Marked done" : "Mark done"}
              </Button>
            </div>

            {completed[ex.id] && activeIdx < exercises.length - 1 && (
              <Button
                variant="link" size="sm" className="px-0"
                onClick={() => goToExercise(activeIdx + 1)}
              >
                Next exercise →
              </Button>
            )}
          </Card>

          <div>
            <MiniCompiler key={`${ex.id}-${resetKey}-${showSolution}`} initial={initial} />
          </div>
        </div>
      )}
    </div>
  );
}
