import { cn } from "@/lib/utils";
import { Zap, Trophy, Flame, Star } from "lucide-react";
import type { Difficulty } from "@/lib/curriculum/types";

const difficultyMap: Record<Difficulty, string> = {
  "Absolute Beginner": "bg-success/15 text-success border-success/30",
  Beginner: "bg-primary/15 text-primary border-primary/30",
  Intermediate: "bg-warning/15 text-warning border-warning/30",
  Advanced: "bg-secondary/20 text-secondary-foreground border-secondary/40",
  Expert: "bg-destructive/15 text-destructive border-destructive/30",
};

export function DifficultyBadge({ difficulty, className }: { difficulty: Difficulty; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium font-mono", difficultyMap[difficulty], className)}>
      {difficulty}
    </span>
  );
}

export function XPBadge({ xp, className }: { xp: number; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full bg-primary/10 border border-primary/30 px-2.5 py-0.5 text-xs font-semibold text-primary", className)}>
      <Zap className="h-3 w-3" /> {xp} XP
    </span>
  );
}

export function StreakBadge({ count }: { count: number }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-warning/10 border border-warning/30 px-2.5 py-1 text-xs font-semibold text-warning">
      <Flame className="h-3.5 w-3.5" /> {count} day{count === 1 ? "" : "s"}
    </span>
  );
}

export function LevelBadge({ level, name }: { level: number; name: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-violet text-white px-3 py-1 text-xs font-bold shadow-glow-violet">
      <Star className="h-3.5 w-3.5" /> Lv {level} · {name}
    </span>
  );
}

export function TrophyBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-warning/15 text-warning border border-warning/30 px-2.5 py-0.5 text-xs font-semibold">
      <Trophy className="h-3 w-3" /> Certified
    </span>
  );
}
