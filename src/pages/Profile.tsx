import { Navigate } from "react-router-dom";
import { useProgress } from "@/hooks/useProgress";
import { getLevel, LEVELS } from "@/lib/progress";
import { tracks } from "@/lib/curriculum";
import { Progress } from "@/components/ui/progress";
import { Trophy, Flame, Zap, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const { progress, ready } = useProgress();
  if (ready && !progress) return <Navigate to="/" replace />;
  if (!progress) return null;

  const lvl = getLevel(progress.totalXP);
  const reset = () => {
    if (confirm("Reset all progress? This cannot be undone.")) {
      localStorage.removeItem("codemastery-progress-v1");
      window.location.href = "/";
    }
  };

  return (
    <div className="container py-8 max-w-4xl">
      <div className="glass-card p-6 md:p-8 mb-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-16 w-16 rounded-full bg-gradient-violet flex items-center justify-center text-2xl font-display font-bold text-primary-foreground">
            {progress.name[0]?.toUpperCase()}
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold">{progress.name}</h1>
            <p className="text-sm text-muted-foreground">Member since {new Date(progress.createdAt).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-3">
          <div className="bg-muted/30 p-3 rounded-lg text-center">
            <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
            <p className="text-2xl font-display font-bold">{progress.totalXP}</p>
            <p className="text-xs text-muted-foreground">Total XP</p>
          </div>
          <div className="bg-muted/30 p-3 rounded-lg text-center">
            <Flame className="h-5 w-5 text-warning mx-auto mb-1" />
            <p className="text-2xl font-display font-bold">{progress.currentStreak}</p>
            <p className="text-xs text-muted-foreground">Day streak (best: {progress.longestStreak})</p>
          </div>
          <div className="bg-muted/30 p-3 rounded-lg text-center">
            <Trophy className="h-5 w-5 text-warning mx-auto mb-1" />
            <p className="text-2xl font-display font-bold">{Object.values(progress.tracks).filter((t) => t.certificateId).length}</p>
            <p className="text-xs text-muted-foreground">Certificates</p>
          </div>
        </div>
      </div>

      <div className="glass-card p-6 mb-6">
        <h2 className="text-lg font-display font-bold mb-3">Level {lvl.level} · {lvl.name}</h2>
        <Progress value={lvl.progress} className="h-2 mb-2" />
        <p className="text-xs text-muted-foreground">{progress.totalXP - lvl.levelMin} / {lvl.nextMin - lvl.levelMin} XP to next level</p>
        <div className="grid grid-cols-7 gap-1 mt-4">
          {LEVELS.map((l, i) => (
            <div key={i} className={`p-2 rounded text-center text-xs ${i + 1 === lvl.level ? "bg-primary/20 text-primary border border-primary/40" : "bg-muted/20 text-muted-foreground"}`}>
              {l.name}
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-xl font-display font-bold mb-3">Track progress</h2>
      <div className="space-y-3 mb-6">
        {tracks.map((t) => {
          const tp = progress.tracks[t.id];
          const completed = Object.values(tp.chapters).filter((c) => c.status === "completed").length;
          const pct = (completed / t.chapters.length) * 100;
          return (
            <div key={t.id} className="glass-card p-4">
              <div className="flex justify-between mb-2">
                <h3 className="font-display font-semibold">{t.title}</h3>
                <span className="text-sm text-muted-foreground font-mono">{completed}/{t.chapters.length}</span>
              </div>
              <Progress value={pct} className="h-1.5" />
              {tp.certificateId && (
                <p className="text-xs text-warning mt-2 flex items-center gap-1"><Trophy className="h-3 w-3" /> Certificate {tp.certificateId}</p>
              )}
            </div>
          );
        })}
      </div>

      <Button variant="outline" onClick={reset} className="text-destructive border-destructive/40 hover:bg-destructive/10">Reset all progress</Button>
    </div>
  );
};

export default Profile;
