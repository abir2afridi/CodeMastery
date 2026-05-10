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
  "system.return": "SYS.RETURN_TO_TRACK",
  "system.nodeStatus": "NODE_STATUS",
  "system.syncActive": "SYNC_ACTIVE",
  "system.neuralBitrate": "NEURAL_BITRATE",
  "system.syncIdentity": "SYNC_IDENTITY",
  "system.segmentIndex": "SEGMENT_INDEX",
  "system.securityProtocol": "SECURITY_PROTOCOL",
  "system.difficulty": "DIFFICULTY",
  "system.reward": "REWARD",
  "system.estLoad": "EST_LOAD",
  "system.dataStream": "DATA_STREAM_01",
  "system.commandBuffer": "COMMAND_BUFFER",
  "system.readOnly": "READ_ONLY_ACCESS",
  "system.syncSuccess": "DATA_SYNC_SUCCESS",
  "system.packetsCaptured": "ALL_PACKETS_CAPTURED_AND_VERIFIED",
  "system.initQuiz": "INITIALIZE_QUIZ",
  "system.nextPhase": "NEXT_PHASE",
  "system.syncProgress": "SYNC_IN_PROGRESS",
  "system.readyHandshake": "SUBJECT_READY_FOR_FINAL_HANDSHAKE",
  "system.insufficientData": "INSUFFICIENT_DATA_EXPOSURE",
  "system.finalizeSync": "FINALIZE_SYNC_PROTOCOL",
  "system.syncLocked": "SYNC_LOCKED",
  "system.prevNode": "PREV_NODE",
  "system.nextNode": "NEXT_NODE",
  "system.nodeMap": "NODE_MAP",
  "system.metrics": "SYSTEM_METRICS",
  "system.coreVer": "CORE_VER",
  "system.syncLatency": "SYNC_LATENCY",
  "system.dataParity": "DATA_PARITY",
  "system.bufferUsage": "BUFFER_USAGE",
  "system.initSandbox": "INITIALIZE_SANDBOX",
  "compiler.reset": "Reset",
  "compiler.console": "Console output",
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
  "system.return": "SYS.ট্র্যাকে_ফিরুন",
  "system.nodeStatus": "নোড_স্ট্যাটাস",
  "system.syncActive": "সিঙ্ক_সক্রিয়",
  "system.neuralBitrate": "নিউরাল_বিটরেট",
  "system.syncIdentity": "সিঙ্ক_আইডেন্টিটি",
  "system.segmentIndex": "সেগমেন্ট_ইনডেক্স",
  "system.securityProtocol": "সিকিউরিটি_প্রোটোকল",
  "system.difficulty": "অসুবিধা",
  "system.reward": "পুরস্কার",
  "system.estLoad": "আনুমানিক_সময়",
  "system.dataStream": "ডেটা_স্ট্রিম_০১",
  "system.commandBuffer": "কমান্ড_বাফার",
  "system.readOnly": "রিড_অনলি_অ্যাক্সেস",
  "system.syncSuccess": "ডেটা_সিঙ্ক_সফল",
  "system.packetsCaptured": "সব_প্যাকেট_সংগৃহীত_ও_যাচাইকৃত",
  "system.initQuiz": "কুইজ_শুরু_করুন",
  "system.nextPhase": "পরবর্তী_ধাপ",
  "system.syncProgress": "সিঙ্ক_চলছে",
  "system.readyHandshake": "সাবজেক্ট_ফাইনাল_হ্যান্ডশেকের_জন্য_প্রস্তুত",
  "system.insufficientData": "অপ্রতুল_ডেটা_এক্সপোজার",
  "system.finalizeSync": "সিঙ্ক_প্রোটোকল_সম্পন্ন_করুন",
  "system.syncLocked": "সিঙ্ক_লকড",
  "system.prevNode": "পূর্ববর্তী_নোড",
  "system.nextNode": "পরবর্তী_নোড",
  "system.nodeMap": "নোড_ম্যাপ",
  "system.metrics": "সিস্টেম_মেট্রিক্স",
  "system.coreVer": "কোর_ভার্সন",
  "system.syncLatency": "সিঙ্ক_ল্যাটেন্সি",
  "system.dataParity": "ডেটা_পারিটি",
  "system.bufferUsage": "বাফার_ব্যবহার",
  "system.initSandbox": "স্যান্ডবক্স_শুরু_করুন",
  "compiler.reset": "রিসেট",
  "compiler.console": "কনসোল আউটপুট",
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
