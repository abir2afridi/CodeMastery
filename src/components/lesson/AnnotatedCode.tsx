import { useMemo, useState } from "react";
import { explainLine, type Lang } from "@/lib/curriculum/explainLine";
import type { CodeSnippet } from "@/lib/curriculum/types";
import { CyberpunkButton } from "@/components/ui/cyberpunk/Button";
import { Eye, EyeOff, ScrollText, Code2, Zap, Info } from "lucide-react";
import { useI18n } from "@/hooks/useI18n";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  code: CodeSnippet;
  /** Optional author-provided overrides keyed by 1-indexed line number per lang. */
  annotations?: Partial<Record<Lang, Record<number, string>>>;
  defaultOpen?: boolean;
}

const LANG_LABEL: Record<Lang, string> = { 
  html: "HTML_MARKUP", 
  css: "STYLE_SHEET", 
  javascript: "LOGIC_SCRIPT" 
};

function tokenize(line: string, lang: Lang) {
  // Lightweight syntax highlight via classes; not a full parser.
  if (lang === "html") {
    return line.replace(/(&)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/(&lt;\/?)([a-zA-Z0-9-]+)/g, '$1<span class="text-primary font-bold">$2</span>')
      .replace(/(\s)([a-zA-Z-]+)=/g, '$1<span class="text-warning">$2</span>=')
      .replace(/("[^"]*")/g, '<span class="text-success">$1</span>');
  }
  if (lang === "css") {
    return line.replace(/</g, "&lt;")
      .replace(/(\/\*.*?\*\/)/g, '<span class="text-muted-foreground italic opacity-60">$1</span>')
      .replace(/^([\s]*)([a-zA-Z-]+)(\s*:)/g, '$1<span class="text-primary font-bold">$2</span>$3')
      .replace(/(:\s*)([^;{]+)/g, '$1<span class="text-success">$2</span>');
  }
  return line.replace(/</g, "&lt;")
    .replace(/(\/\/.*$)/g, '<span class="text-muted-foreground italic opacity-60">$1</span>')
    .replace(/\b(const|let|var|function|return|if|else|for|while|true|false|null|undefined|new|class|import|export|from|async|await|try|catch|throw)\b/g, '<span class="text-primary font-bold">$1</span>')
    .replace(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g, '<span class="text-success">$1</span>')
    .replace(/\b(\d+\.?\d*)\b/g, '<span class="text-warning">$1</span>');
}

function Pane({ lang, source, overrides }: { lang: Lang; source: string; overrides?: Record<number, string> }) {
  const lines = useMemo(() => source.replace(/\t/g, "  ").split("\n"), [source]);
  const [hover, setHover] = useState<number | null>(null);
  const { lang: ui, t } = useI18n();

  return (
    <div className="relative border border-border bg-white dark:bg-zinc-950/40 backdrop-blur-md overflow-hidden group/pane shadow-sm">
      {/* Brutalist accents */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-primary/5 -mr-4 -mt-4 rotate-45 pointer-events-none" />
      
      <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-zinc-50 dark:bg-white/5">
        <div className="flex items-center gap-2">
          <Code2 className="h-3 w-3 text-primary" />
          <span className="text-[10px] font-black tracking-[0.2em] text-foreground/80 uppercase">
            {LANG_LABEL[lang]}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
          <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">{t("annotated.hoverLine")}</span>
        </div>
      </div>

      <div className="font-mono text-[12px] leading-relaxed relative py-1">
        {lines.map((line, i) => {
          const n = i + 1;
          const meaning = overrides?.[n] ?? explainLine(line, lang, ui);
          const isActive = hover === n;
          
          return (
            <div
              key={n}
              onMouseEnter={() => setHover(n)}
              onMouseLeave={() => setHover((h) => (h === n ? null : h))}
              onFocus={() => setHover(n)}
              tabIndex={0}
              className={cn(
                "group/line grid grid-cols-[3rem_1fr] md:grid-cols-[3rem_1fr_auto] gap-4 px-3 py-0.5 outline-none transition-all duration-200 relative items-start",
                isActive ? "bg-primary/10 z-10" : "hover:bg-primary/5"
              )}
            >
              {isActive && (
                <motion.div 
                  layoutId={`active-line-${lang}`}
                  className="absolute inset-y-0 left-0 w-1 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                />
              )}
              
              <span className={cn(
                "text-right select-none transition-colors duration-200 font-bold tabular-nums shrink-0 mt-0.5",
                isActive ? "text-primary" : "text-foreground/40"
              )}>
                {n.toString().padStart(2, '0')}
              </span>
              
              <div className="min-w-0">
                <code
                  className={cn(
                    "whitespace-pre-wrap break-all transition-colors duration-200 block",
                    isActive ? "text-foreground font-medium" : "text-foreground/90"
                  )}
                  dangerouslySetInnerHTML={{ __html: tokenize(line || " ", lang) }}
                />
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="md:hidden pt-2 pb-1"
                    >
                      <p className="text-[11px] font-sans font-bold text-primary italic border-l-2 border-primary/20 pl-3">
                        {meaning}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="hidden md:flex items-center gap-2 pointer-events-none self-center"
                  >
                    <span className="h-px w-4 bg-primary/30" />
                    <span className="text-[11px] font-sans font-bold text-primary italic max-w-[400px] truncate">
                      {meaning}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {hover !== null && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-primary/20 bg-primary/5 px-4 py-3 text-[12px] text-foreground/90 flex gap-3 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-1 shrink-0">
              <span className="font-black text-primary text-[10px]">L{hover.toString().padStart(2, '0')}</span>
              <Info className="h-3 w-3 text-primary/40" />
            </div>
            <div className="flex-1 leading-relaxed">
              <span className="font-semibold text-primary/80 mr-2 uppercase text-[10px] tracking-wider">MEANING:</span>
              <span className="font-bold">{overrides?.[hover] ?? explainLine(lines[hover - 1] ?? "", lang, ui)}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function AnnotatedCode({ code, annotations, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const { t } = useI18n();
  const langs: Lang[] = [];
  if (code.html !== undefined) langs.push("html");
  if (code.css !== undefined) langs.push("css");
  if (code.javascript !== undefined) langs.push("javascript");
  if (langs.length === 0) return null;

  return (
    <div className="my-6">
      <div className="flex items-center gap-4 mb-3">
        <CyberpunkButton 
          size="sm" 
          variant={open ? "neon" : "brutalist"} 
          onClick={() => setOpen((o) => !o)} 
          className="h-9 px-4 gap-2"
        >
          {open ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          <span className="hidden sm:inline">{open ? t("annotated.hide") : t("annotated.explain")}</span>
          <span className="sm:hidden">{open ? "HIDE" : "EXPLAIN"}</span>
          <Zap className={cn("h-3 w-3 ml-1", open ? "animate-pulse" : "opacity-40")} />
        </CyberpunkButton>
        <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-4 pt-1">
              {langs.map((lang) => (
                <Pane
                  key={lang}
                  lang={lang}
                  source={code[lang] ?? ""}
                  overrides={annotations?.[lang]}
                />
              ))}
              <div className="flex items-center gap-2 px-1">
                <div className="w-1 h-1 bg-primary rounded-full" />
                <p className="text-[11px] text-muted-foreground font-medium italic">
                  {t("annotated.hint")}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

