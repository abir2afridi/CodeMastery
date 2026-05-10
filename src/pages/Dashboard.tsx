import { Link, Navigate } from "react-router-dom";
import { useProgress } from "@/hooks/useProgress";
import { tracks } from "@/lib/curriculum";
import { Code2, Palette, Zap, ArrowRight, Flame, Trophy } from "lucide-react";
import { getLevel } from "@/lib/progress";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const iconMap = { html: Code2, css: Palette, javascript: Zap };
const colorMap = { html: "text-html", css: "text-css", javascript: "text-js" };

const Dashboard = () => {
  const { progress, ready } = useProgress();
  if (ready && !progress) return <Navigate to="/" replace />;
  if (!progress) return null;

  const lvl = getLevel(progress.totalXP);

  return (
    <div className="container py-8 md:py-12">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-1">Welcome back, {progress.name} 👋</h1>
        <p className="text-muted-foreground mb-8">Pick up where you left off — or start a new track.</p>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-4 mb-10">
        <div className="glass-card p-4">
          <p className="text-xs uppercase font-mono text-muted-foreground mb-1">Level</p>
          <p className="text-2xl font-display font-bold">{lvl.level} · {lvl.name}</p>
          <Progress value={lvl.progress} className="h-1.5 mt-2" />
        </div>
        <div className="glass-card p-4">
          <p className="text-xs uppercase font-mono text-muted-foreground mb-1">Total XP</p>
          <p className="text-2xl font-display font-bold text-primary">{progress.totalXP}</p>
        </div>
        <div className="glass-card p-4">
          <p className="text-xs uppercase font-mono text-muted-foreground mb-1 flex items-center gap-1"><Flame className="h-3 w-3" /> Streak</p>
          <p className="text-2xl font-display font-bold text-warning">{progress.currentStreak} <span className="text-sm font-normal text-muted-foreground">days</span></p>
        </div>
        <div className="glass-card p-4">
          <p className="text-xs uppercase font-mono text-muted-foreground mb-1 flex items-center gap-1"><Trophy className="h-3 w-3" /> Certificates</p>
          <p className="text-2xl font-display font-bold">
            {Object.values(progress.tracks).filter((t) => t.certificateId).length} / 3
          </p>
        </div>
      </div>

      <h2 className="text-xl font-display font-semibold mb-4">Your tracks</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {tracks.map((track, i) => {
          const Icon = iconMap[track.id];
          const tp = progress.tracks[track.id];
          const completed = Object.values(tp.chapters).filter((c) => c.status === "completed").length;
          const total = track.chapters.length;
          const pct = total > 0 ? (completed / total) * 100 : 0;
          return (
            <motion.div key={track.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Link to={`/learn/${track.id}`} className="block glass-card p-6 hover:shadow-elegant transition-all group">
                <div className="flex items-start justify-between mb-3">
                  <Icon className={`h-10 w-10 ${colorMap[track.id]}`} />
                  {tp.certificateId && <Trophy className="h-5 w-5 text-warning" />}
                </div>
                <h3 className="text-2xl font-display font-bold mb-1">{track.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{track.tagline}</p>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span>{completed}/{total} chapters</span>
                  <span className="text-primary">{Math.round(pct)}%</span>
                </div>
                <Progress value={pct} className="h-1.5 mb-4" />
                <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1 transition-all">
                  {tp.started ? "Continue" : "Start track"} <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
