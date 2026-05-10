import { useEffect, useState, useCallback } from "react";
import { loadProgress, saveProgress, bumpStreak } from "@/lib/progress";
import type { UserProgress } from "@/lib/curriculum/types";

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    const p = loadProgress();
    if (p) {
      bumpStreak(p);
      setProgress({ ...p });
    }
  }, []);

  const refresh = useCallback(() => {
    const p = loadProgress();
    setProgress(p ? { ...p } : null);
  }, []);

  const update = useCallback((updater: (p: UserProgress) => void) => {
    const p = loadProgress();
    if (!p) return;
    updater(p);
    saveProgress(p);
    setProgress({ ...p });
  }, []);

  return { progress, refresh, update, ready: progress !== null };
}
