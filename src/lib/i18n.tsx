import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type UILang = "en" | "bn";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.dashboard": "Dashboard",
  "nav.compiler": "Compiler",
  "nav.profile": "Profile",
  "nav.search": "Search chapters",
  "common.continue": "Continue",
  "common.start": "Start",
  "common.next": "Next",
  "common.previous": "Previous",
  "common.complete": "Mark complete",
  "common.completed": "Completed",
  "common.locked": "Locked",
  "common.preview": "Preview",
  "common.minutes": "min",
  "common.xp": "XP",
  "common.language": "Language",
  "lesson.objectives": "Learning objectives",
  "lesson.whyMatters": "Why it matters",
  "lesson.analogy": "Real-World Analogy",
  "lesson.deepDive": "Deep Dive (optional)",
  "lesson.microExercise": "Micro-Exercise",
  "lesson.showHint": "Show hint",
  "lesson.hideHint": "Hide hint",
  "lesson.showSolution": "Show solution",
  "lesson.hideSolution": "Hide solution",
  "lesson.quickRef": "Quick Reference",
  "lesson.takeQuiz": "Take quiz",
  "lesson.practice": "Practice exercises",
  "annotated.explain": "Explain line-by-line",
  "annotated.hide": "Hide line-by-line",
  "annotated.hint": "Hover a line to see what it does. Explanations are auto-generated heuristics — they describe the intent of common patterns, not every nuance.",
  "annotated.hoverLine": "hover a line for its meaning",
  "palette.placeholder": "Search chapters, tracks, pages…",
  "palette.empty": "No matches",
  "palette.shortcut": "Press ⌘K to open anywhere",
  "palette.tracks": "Tracks",
  "palette.pages": "Pages",
  "palette.chapters": "Chapters",
};

const bn: Dict = {
  "nav.dashboard": "ড্যাশবোর্ড",
  "nav.compiler": "কম্পাইলার",
  "nav.profile": "প্রোফাইল",
  "nav.search": "অধ্যায় খুঁজুন",
  "common.continue": "চালিয়ে যান",
  "common.start": "শুরু করুন",
  "common.next": "পরবর্তী",
  "common.previous": "পূর্ববর্তী",
  "common.complete": "সম্পন্ন চিহ্নিত করুন",
  "common.completed": "সম্পন্ন",
  "common.locked": "বন্ধ",
  "common.preview": "প্রিভিউ",
  "common.minutes": "মিনিট",
  "common.xp": "এক্সপি",
  "common.language": "ভাষা",
  "lesson.objectives": "শেখার লক্ষ্য",
  "lesson.whyMatters": "কেন গুরুত্বপূর্ণ",
  "lesson.analogy": "বাস্তব জীবনের উদাহরণ",
  "lesson.deepDive": "গভীর আলোচনা (ঐচ্ছিক)",
  "lesson.microExercise": "ছোট অনুশীলন",
  "lesson.showHint": "ইঙ্গিত দেখান",
  "lesson.hideHint": "ইঙ্গিত লুকান",
  "lesson.showSolution": "সমাধান দেখান",
  "lesson.hideSolution": "সমাধান লুকান",
  "lesson.quickRef": "দ্রুত রেফারেন্স",
  "lesson.takeQuiz": "কুইজ দিন",
  "lesson.practice": "অনুশীলন করুন",
  "annotated.explain": "প্রতিটি লাইনের ব্যাখ্যা দেখান",
  "annotated.hide": "ব্যাখ্যা লুকান",
  "annotated.hint": "প্রতিটি লাইনের অর্থ দেখতে মাউস হোভার করুন। ব্যাখ্যাগুলো সাধারণ প্যাটার্নের জন্য স্বয়ংক্রিয়ভাবে তৈরি — সব সূক্ষ্মতা ব্যাখ্যা করে না।",
  "annotated.hoverLine": "অর্থ দেখতে লাইনে হোভার করুন",
  "palette.placeholder": "অধ্যায়, ট্র্যাক, পেজ খুঁজুন…",
  "palette.empty": "কিছু পাওয়া যায়নি",
  "palette.shortcut": "যেকোনো জায়গায় ⌘K চাপুন",
  "palette.tracks": "ট্র্যাক",
  "palette.pages": "পেজ",
  "palette.chapters": "অধ্যায়",
};

const DICTS: Record<UILang, Dict> = { en, bn };

interface Ctx {
  lang: UILang;
  setLang: (l: UILang) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "cm.lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<UILang>(() => {
    if (typeof window === "undefined") return "en";
    const saved = localStorage.getItem(STORAGE_KEY) as UILang | null;
    if (saved === "en" || saved === "bn") return saved;
    return navigator.language?.toLowerCase().startsWith("bn") ? "bn" : "en";
  });

  const setLang = useCallback((l: UILang) => {
    setLangState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch { /* ignore */ }
    document.documentElement.lang = l;
  }, []);

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  const t = useCallback((key: string) => DICTS[lang][key] ?? DICTS.en[key] ?? key, [lang]);
  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
