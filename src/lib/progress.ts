import type { UserProgress, TrackId, ChapterProgress } from "./curriculum/types";
import { tracks } from "./curriculum";

const KEY = "codemastery-progress-v1";

function emptyTrack() {
  return { started: false, chapters: {} as Record<string, ChapterProgress> };
}

export function loadProgress(): UserProgress | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw) as UserProgress;
  } catch { return null; }
}

export function saveProgress(p: UserProgress) {
  p.lastActiveAt = new Date().toISOString();
  localStorage.setItem(KEY, JSON.stringify(p));
}

export function initProgress(name: string, startTrack: TrackId): UserProgress {
  const now = new Date().toISOString();
  const p: UserProgress = {
    name,
    createdAt: now,
    lastActiveAt: now,
    currentStreak: 1,
    longestStreak: 1,
    lastStreakDate: new Date().toDateString(),
    totalXP: 0,
    tracks: {
      html: emptyTrack(),
      css: emptyTrack(),
      javascript: emptyTrack(),
    },
  };
  startTrackFor(p, startTrack);
  saveProgress(p);
  return p;
}

export function startTrackFor(p: UserProgress, trackId: TrackId) {
  const t = p.tracks[trackId];
  if (!t.started) {
    t.started = true;
    t.startedAt = new Date().toISOString();
    const track = tracks.find((x) => x.id === trackId)!;
    if (track.chapters[0]) t.currentChapterId = track.chapters[0].id;
  }
}

export function getChapterProgress(p: UserProgress, trackId: TrackId, chapterId: string): ChapterProgress {
  const t = p.tracks[trackId];
  return t.chapters[chapterId] || {
    status: "not_started", quizAttempts: 0, exercisesCompleted: 0, xpEarned: 0,
  };
}

export function isChapterUnlocked(p: UserProgress, trackId: TrackId, chapterId: string): boolean {
  const track = tracks.find((t) => t.id === trackId);
  if (!track) return false;
  const ch = track.chapters.find((c) => c.id === chapterId);
  if (!ch) return false;
  if (ch.prerequisites.length === 0) return true;
  return ch.prerequisites.every((pr) => getChapterProgress(p, trackId, pr).status === "completed");
}

export function markChapterComplete(p: UserProgress, trackId: TrackId, chapterId: string, xp: number) {
  const t = p.tracks[trackId];
  const cur = getChapterProgress(p, trackId, chapterId);
  if (cur.status !== "completed") {
    p.totalXP += xp;
    cur.xpEarned = (cur.xpEarned || 0) + xp;
  }
  cur.status = "completed";
  cur.completedAt = new Date().toISOString();
  t.chapters[chapterId] = cur;
  saveProgress(p);
}

export function recordQuizScore(p: UserProgress, trackId: TrackId, chapterId: string, score: number, passed: boolean) {
  const t = p.tracks[trackId];
  const cur = getChapterProgress(p, trackId, chapterId);
  cur.quizAttempts += 1;
  cur.quizScore = Math.max(cur.quizScore || 0, score);
  if (passed) {
    if (cur.status !== "completed") {
      const ch = tracks.find(x => x.id === trackId)?.chapters.find(c => c.id === chapterId);
      const bonus = score === 100 ? 100 : 50;
      p.totalXP += bonus;
      cur.xpEarned = (cur.xpEarned || 0) + bonus;
      if (ch) {
        p.totalXP += ch.xpReward;
        cur.xpEarned += ch.xpReward;
      }
    }
    cur.status = "completed";
    cur.completedAt = new Date().toISOString();
  }
  t.chapters[chapterId] = cur;
  // Check certificate eligibility
  const track = tracks.find((x) => x.id === trackId)!;
  const allDone = track.chapters.every((c) => t.chapters[c.id]?.status === "completed");
  if (allDone && !t.certificateId) {
    t.certificateId = `CM-${trackId.toUpperCase()}-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    t.certificateIssuedAt = new Date().toISOString();
    t.completedAt = new Date().toISOString();
  }
  saveProgress(p);
}

export function bumpStreak(p: UserProgress) {
  const today = new Date().toDateString();
  if (p.lastStreakDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (p.lastStreakDate === yesterday) {
    p.currentStreak += 1;
  } else {
    p.currentStreak = 1;
  }
  p.longestStreak = Math.max(p.longestStreak, p.currentStreak);
  p.lastStreakDate = today;
  p.totalXP += 10;
  saveProgress(p);
}

export const LEVELS = [
  { min: 0, name: "Newcomer" },
  { min: 500, name: "Explorer" },
  { min: 1500, name: "Builder" },
  { min: 3500, name: "Developer" },
  { min: 7000, name: "Coder" },
  { min: 12000, name: "Engineer" },
  { min: 20000, name: "Master" },
];

export function getLevel(xp: number) {
  let level = 0;
  for (let i = 0; i < LEVELS.length; i++) if (xp >= LEVELS[i].min) level = i;
  const current = LEVELS[level];
  const next = LEVELS[level + 1];
  return {
    level: level + 1,
    name: current.name,
    currentXP: xp,
    levelMin: current.min,
    nextMin: next?.min ?? current.min,
    progress: next ? Math.min(100, ((xp - current.min) / (next.min - current.min)) * 100) : 100,
  };
}
