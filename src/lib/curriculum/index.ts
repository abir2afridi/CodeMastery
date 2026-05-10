import { htmlChapters } from "./html-curriculum";
import { cssChapters } from "./css-curriculum";
import { jsChapters } from "./js-curriculum";
import type { Track, TrackId, Chapter } from "./types";

export const tracks: Track[] = [
  {
    id: "html",
    title: "HTML",
    tagline: "Build the structure of every website.",
    icon: "Code2",
    colorVar: "html",
    totalChapters: htmlChapters.length,
    estimatedHours: Math.round(htmlChapters.reduce((sum, c) => sum + c.estimatedMinutes, 0) / 60),
    chapters: htmlChapters,
  },
  {
    id: "css",
    title: "CSS",
    tagline: "Make websites beautiful and responsive.",
    icon: "Palette",
    colorVar: "css",
    totalChapters: cssChapters.length,
    estimatedHours: Math.round(cssChapters.reduce((sum, c) => sum + c.estimatedMinutes, 0) / 60),
    chapters: cssChapters,
  },
  {
    id: "javascript",
    title: "JavaScript",
    tagline: "Add interactivity and bring sites to life.",
    icon: "Zap",
    colorVar: "js",
    totalChapters: jsChapters.length,
    estimatedHours: Math.round(jsChapters.reduce((sum, c) => sum + c.estimatedMinutes, 0) / 60),
    chapters: jsChapters,
  },
];

export const getTrack = (id: TrackId): Track | undefined => tracks.find((t) => t.id === id);

export const getChapter = (trackId: TrackId, chapterId: string): Chapter | undefined => {
  const track = getTrack(trackId);
  return track?.chapters.find((c) => c.id === chapterId);
};

export const getNextChapter = (trackId: TrackId, chapterId: string): Chapter | undefined => {
  const track = getTrack(trackId);
  if (!track) return undefined;
  const idx = track.chapters.findIndex((c) => c.id === chapterId);
  return idx >= 0 && idx < track.chapters.length - 1 ? track.chapters[idx + 1] : undefined;
};

export const getPrevChapter = (trackId: TrackId, chapterId: string): Chapter | undefined => {
  const track = getTrack(trackId);
  if (!track) return undefined;
  const idx = track.chapters.findIndex((c) => c.id === chapterId);
  return idx > 0 ? track.chapters[idx - 1] : undefined;
};

export * from "./types";
