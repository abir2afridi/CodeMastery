import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import type { UILang, Dict } from "./i18n/types";
export type { UILang };
import { en, bn } from "./i18n/translations";
import { I18nContext } from "@/hooks/useI18n";

const DICTS: Record<UILang, Dict> = { en, bn };
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
