import { htmlChapters } from "./html-curriculum";
import { cssChapters } from "./css-curriculum";
import { jsChapters } from "./js-curriculum";
import { pythonTrack } from "./python-curriculum";
import { typescriptTrack } from "./typescript-curriculum";
import { cTrack } from "./c-curriculum";
import { cppTrack } from "./cpp-curriculum";
import { javaTrack } from "./java-curriculum";
import type { Track, TrackId, Chapter } from "./types";

export const tracks: Track[] = [
  {
    id: "html",
    title: "HTML",
    titleBn: "এইচটিএমএল",
    tagline: "Builds structure of every website.",
    taglineBn: "প্রতিটি ওয়েবসাইটের কাঠামো তৈরি করে।",
    icon: "https://img.icons8.com/color/144/html-5--v1.png",
    colorVar: "html",
    totalChapters: htmlChapters.length,
    estimatedHours: Math.round(htmlChapters.reduce((sum, c) => sum + c.estimatedMinutes, 0) / 60),
    chapters: htmlChapters,
    brandColor: "#E34F26",
    glowColor: "rgba(227, 79, 38, 0.4)",
  },
  {
    id: "css",
    title: "CSS",
    titleBn: "সিএসএস",
    tagline: "Make websites beautiful and responsive.",
    taglineBn: "ওয়েবসাইটকে সুন্দর এবং প্রতিক্রিয়াশীল করুন।",
    icon: "https://img.icons8.com/color/144/css3.png",
    colorVar: "css",
    totalChapters: cssChapters.length,
    estimatedHours: Math.round(cssChapters.reduce((sum, c) => sum + c.estimatedMinutes, 0) / 60),
    chapters: cssChapters,
    brandColor: "#1572B6",
    glowColor: "rgba(21, 114, 182, 0.4)",
  },
  {
    id: "javascript",
    title: "JavaScript",
    titleBn: "জাভাস্ক্রিপ্ট",
    tagline: "Add interactivity and bring sites to life.",
    taglineBn: "ইন্টারঅ্যাক্টিভিটি যোগ করুন এবং সাইটগুলোকে জীবন্ত করুন।",
    icon: "https://img.icons8.com/color/144/javascript--v1.png",
    colorVar: "javascript",
    totalChapters: jsChapters.length,
    estimatedHours: Math.round(jsChapters.reduce((sum, c) => sum + c.estimatedMinutes, 0) / 60),
    chapters: jsChapters,
    brandColor: "#F7DF1E",
    glowColor: "rgba(247, 223, 30, 0.4)",
  },
  {
    id: "python",
    title: "Python",
    titleBn: "পাইথন",
    tagline: "From scripts to systems — world's most versatile language",
    taglineBn: "স্ক্রিপ্ট থেকে সিস্টেম — বিশ্বের সবচেয়ে বহুমুখী ভাষা",
    icon: "https://img.icons8.com/color/144/python--v1.png",
    colorVar: "python",
    totalChapters: pythonTrack.totalChapters,
    estimatedHours: pythonTrack.estimatedHours,
    chapters: pythonTrack.chapters,
    brandColor: "#F7DF1E",
    glowColor: "#3776AB",
  },
  {
    id: "typescript",
    title: "TypeScript",
    titleBn: "টাইপস্ক্রিপ্ট",
    tagline: "JavaScript, but with superpowers",
    taglineBn: "জাভাস্ক্রিপ্ট, কিন্তু সুপারপাওয়ার্স সহ",
    icon: "https://img.icons8.com/color/144/typescript--v1.png",
    colorVar: "typescript",
    totalChapters: typescriptTrack.totalChapters,
    estimatedHours: typescriptTrack.estimatedHours,
    chapters: typescriptTrack.chapters,
    brandColor: "#3178C6",
    glowColor: "#3178C6",
  },
  {
    id: "c",
    title: "C Programming",
    titleBn: "C প্রোগ্রামিং",
    tagline: "The language that built the modern world",
    taglineBn: "আধুনিক বিশ্ব যে ভাষায় তৈরি",
    icon: "https://img.icons8.com/color/144/c-programming.png",
    colorVar: "c",
    totalChapters: cTrack.totalChapters,
    estimatedHours: cTrack.estimatedHours,
    chapters: cTrack.chapters,
    brandColor: "#A8B9CC",
    glowColor: "#A8B9CC",
  },
  {
    id: "cpp",
    title: "C++ Programming",
    titleBn: "C++ প্রোগ্রামিং",
    tagline: "Zero-cost abstractions. Maximum power.",
    taglineBn: "শূন্য-খরচ বিমূর্ততা। সর্বোচ্চ শক্তি।",
    icon: "https://img.icons8.com/?size=96&id=40669&format=png",
    colorVar: "cpp",
    totalChapters: cppTrack.totalChapters,
    estimatedHours: cppTrack.estimatedHours,
    chapters: cppTrack.chapters,
    brandColor: "#00599C",
    glowColor: "#00599C",
  },
  {
    id: "java",
    title: "Java",
    titleBn: "জাভা",
    tagline: "Write once, run anywhere — the enterprise standard",
    taglineBn: "একবার লিখুন, সব জায়গায় চালান",
    icon: "https://img.icons8.com/?size=160&id=mQ01rhdaQzyT&format=png",
    colorVar: "java",
    totalChapters: javaTrack.totalChapters,
    estimatedHours: javaTrack.estimatedHours,
    chapters: javaTrack.chapters,
    brandColor: "#ED8B00",
    glowColor: "#ED8B00",
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
