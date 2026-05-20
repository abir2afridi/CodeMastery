import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import type { UILang, Dict } from "./i18n/types";
export type { UILang };
import { en, bn } from "./i18n/translations";
import { I18nContext } from "@/hooks/useI18n";

const TS_DICTS: Record<UILang, Dict> = { en, bn };
const STORAGE_KEY = "cm.lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<UILang>(() => {
    if (typeof window === "undefined") return "en";
    const saved = localStorage.getItem(STORAGE_KEY) as UILang | null;
    if (saved === "en" || saved === "bn") return saved;
    return navigator.language?.toLowerCase().startsWith("bn") ? "bn" : "en";
  });

  const [jsonDicts, setJsonDicts] = useState<Record<UILang, Dict>>({ en: {}, bn: {} });

  // Load JSON locale files on mount (for translators/editors)
  useEffect(() => {
    async function loadJson() {
      try {
        const [enJson, bnJson] = await Promise.all([
          fetch("/locales/en/common.json").then(r => r.ok ? r.json() : {}).catch(() => ({})),
          fetch("/locales/bn/common.json").then(r => r.ok ? r.json() : {}).catch(() => ({})),
        ]);
        setJsonDicts({ en: enJson, bn: bnJson });
      } catch { /* JSON locales are optional */ }
    }
    loadJson();
  }, []);

  // Merge: JSON overrides TS, so translators can edit JSON files without touching TS
  const mergedDicts = useMemo(() => ({
    en: { ...TS_DICTS.en, ...jsonDicts.en },
    bn: { ...TS_DICTS.bn, ...jsonDicts.bn },
  }), [jsonDicts]);

  const setLang = useCallback((l: UILang) => {
    setLangState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch { /* ignore */ }
    document.documentElement.lang = l;
  }, []);

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  const t = useCallback((key: string) => mergedDicts[lang][key] ?? mergedDicts.en[key] ?? key, [lang, mergedDicts]);
  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
