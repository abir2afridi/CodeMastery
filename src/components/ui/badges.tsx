import { cn } from "@/lib/utils";
import { Zap, Trophy, Flame, Star } from "lucide-react";
import type { Difficulty } from "@/lib/curriculum/types";

const difficultyMap: Record<Difficulty, string> = {
  "Absolute Beginner": "border-neon-blue/30 text-neon-blue bg-neon-blue/5",
  Beginner: "border-neon-blue/30 text-neon-blue bg-neon-blue/5",
  Intermediate: "border-yellow-400/30 text-yellow-400 bg-yellow-400/5",
  Advanced: "border-crimson/30 text-crimson bg-crimson/5",
  Expert: "border-crimson/50 text-crimson bg-crimson/10 shadow-[0_0_10px_rgba(255,0,110,0.2)]",
};

export function DifficultyBadge({ difficulty, className }: { difficulty: Difficulty; className?: string }) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 border px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.2em] transition-all", 
      difficultyMap[difficulty], 
      className
    )}>
      {difficulty}
    </span>
  );
}

export function XPBadge({ xp, className }: { xp: number; className?: string }) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 bg-neon-blue/10 border border-neon-blue/30 px-2 py-0.5 text-[9px] font-black text-neon-blue uppercase tracking-[0.2em]", 
      className
    )}>
      <Zap className="h-2.5 w-2.5" /> {xp} XP
    </span>
  );
}

export function StreakBadge({ count }: { count: number }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-crimson/10 border border-crimson/30 px-2.5 py-1 text-[10px] font-black text-crimson uppercase tracking-[0.2em]">
      <Flame className="h-3 w-3" /> {count} DAY STREAK
    </span>
  );
}

export function LevelBadge({ level, name }: { level: number; name: string }) {
  return (
    <div className="flex items-center gap-0 border border-white/10 overflow-hidden">
      <div className="px-2 py-1 bg-white/[0.02] border-r border-white/10 flex items-center gap-1.5">
        <Star className="h-3 w-3 text-neon-blue" />
        <span className="font-black text-[9px] tracking-widest uppercase">LVL {level}</span>
      </div>
      <div className="px-2 py-1 bg-neon-blue text-black font-black text-[9px] tracking-widest uppercase">
        {name}
      </div>
    </div>
  );
}

export function TrophyBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.2em]">
      <Trophy className="h-3 w-3" /> CERTIFIED_SUBJECT
    </span>
  );
}
