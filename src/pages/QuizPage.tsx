import { Link, Navigate, useParams } from "react-router-dom";
import { getChapter, getNextChapter, getTrack } from "@/lib/curriculum";
import { useProgress } from "@/hooks/useProgress";
import { recordQuizScore } from "@/lib/progress";
import type { TrackId } from "@/lib/curriculum/types";
import { useState } from "react";
import { QuizCard } from "@/components/quiz/QuizCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, RotateCcw, Trophy, ArrowLeft } from "lucide-react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

const QuizPage = () => {
  const { trackId, chapterId } = useParams<{ trackId: TrackId; chapterId: string }>();
  const track = trackId ? getTrack(trackId) : undefined;
  const chapter = trackId && chapterId ? getChapter(trackId, chapterId) : undefined;
  const { progress, update, refresh } = useProgress();
  const [idx, setIdx] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  if (!track || !chapter || !trackId || !chapterId) return <Navigate to="/learn" replace />;
  if (!progress) return null;

  const next = getNextChapter(trackId, chapterId);
  const total = chapter.quiz.questions.length;

  const handleAnswer = (c: boolean) => { if (c) setCorrect((x) => x + 1); };
  const handleNext = () => {
    if (idx + 1 >= total) {
      const score = Math.round((correct / total) * 100);
      const passed = score >= chapter.quiz.passingScore;
      update((p) => recordQuizScore(p, trackId, chapterId, score, passed));
      if (passed) confetti({ particleCount: 120, spread: 80, origin: { y: 0.5 } });
      setDone(true);
      refresh();
    } else setIdx(idx + 1);
  };
  const retry = () => { setIdx(0); setCorrect(0); setDone(false); };

  if (done) {
    const score = Math.round((correct / total) * 100);
    const passed = score >= chapter.quiz.passingScore;
    return (
      <div className="container py-12 max-w-xl text-center">
        <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass-card p-8">
          {passed ? <Trophy className="h-16 w-16 text-warning mx-auto mb-4" /> : <RotateCcw className="h-16 w-16 text-muted-foreground mx-auto mb-4" />}
          <h1 className="text-3xl font-display font-bold mb-2">{passed ? "Chapter unlocked! 🎉" : "Almost there!"}</h1>
          <p className="text-muted-foreground mb-6">You scored</p>
          <div className="text-6xl font-display font-bold mb-2 text-primary">{score}%</div>
          <p className="text-sm text-muted-foreground mb-6">{correct} of {total} correct · Passing: {chapter.quiz.passingScore}%</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Button variant="outline" onClick={retry}><RotateCcw className="h-4 w-4 mr-1" /> Retry quiz</Button>
            {passed && next && <Button asChild><Link to={`/learn/${trackId}/${next.id}`}>Next chapter <ArrowRight className="h-4 w-4 ml-1" /></Link></Button>}
            {passed && !next && <Button asChild><Link to={`/certificate/${progress.tracks[trackId].certificateId ?? ""}`}>View certificate <Trophy className="h-4 w-4 ml-1" /></Link></Button>}
            <Button variant="ghost" asChild><Link to={`/learn/${trackId}`}>Back to track</Link></Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <Button variant="ghost" size="sm" asChild className="mb-4"><Link to={`/learn/${trackId}/${chapterId}`}><ArrowLeft className="h-4 w-4 mr-1" /> Back to lesson</Link></Button>
      <div className="max-w-2xl mx-auto mb-4">
        <p className="text-xs uppercase font-mono text-muted-foreground mb-1">Chapter {chapter.number} Quiz</p>
        <h1 className="text-2xl font-display font-bold mb-3">{chapter.title}</h1>
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-gradient-violet transition-all" style={{ width: `${((idx + 1) / total) * 100}%` }} />
        </div>
      </div>
      <QuizCard question={chapter.quiz.questions[idx]} index={idx} total={total} onAnswer={handleAnswer} onNext={handleNext} />
    </div>
  );
};

export default QuizPage;
