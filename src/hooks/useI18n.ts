import { createContext, useContext } from "react";
import { UILang } from "@/lib/i18n/types";

export interface I18nContextType {
  lang: UILang;
  setLang: (l: UILang) => void;
  t: (key: string) => string;
}

export const I18nContext = createContext<I18nContextType | null>(null);

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
