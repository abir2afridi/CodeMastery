import { useMemo, useState } from "react";
import { explainLine, type Lang } from "@/lib/curriculum/explainLine";
import type { CodeSnippet } from "@/lib/curriculum/types";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, ScrollText } from "lucide-react";
import { useI18n } from "@/lib/i18n";

interface Props {
  code: CodeSnippet;
  /** Optional author-provided overrides keyed by 1-indexed line number per lang. */
  annotations?: Partial<Record<Lang, Record<number, string>>>;
  defaultOpen?: boolean;
}

const LANG_LABEL: Record<Lang, string> = { html: "HTML", css: "CSS", javascript: "JavaScript" };

function tokenize(line: string, lang: Lang) {
  // Lightweight syntax highlight via classes; not a full parser.
  if (lang === "html") {
    return line.replace(/(&)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/(&lt;\/?)([a-zA-Z0-9-]+)/g, '$1<span class="text-primary">$2</span>')
      .replace(/(\s)([a-zA-Z-]+)=/g, '$1<span class="text-warning">$2</span>=')
      .replace(/("[^"]*")/g, '<span class="text-success">$1</span>');
  }
  if (lang === "css") {
    return line.replace(/</g, "&lt;")
      .replace(/(\/\*.*?\*\/)/g, '<span class="text-muted-foreground italic">$1</span>')
      .replace(/^([\s]*)([a-zA-Z-]+)(\s*:)/g, '$1<span class="text-primary">$2</span>$3')
      .replace(/(:\s*)([^;{]+)/g, '$1<span class="text-success">$2</span>');
  }
  return line.replace(/</g, "&lt;")
    .replace(/(\/\/.*$)/g, '<span class="text-muted-foreground italic">$1</span>')
    .replace(/\b(const|let|var|function|return|if|else|for|while|true|false|null|undefined|new|class|import|export|from|async|await|try|catch|throw)\b/g, '<span class="text-primary">$1</span>')
    .replace(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g, '<span class="text-success">$1</span>')
    .replace(/\b(\d+\.?\d*)\b/g, '<span class="text-warning">$1</span>');
}

function Pane({ lang, source, overrides }: { lang: Lang; source: string; overrides?: Record<number, string> }) {
  const lines = useMemo(() => source.replace(/\t/g, "  ").split("\n"), [source]);
  const [hover, setHover] = useState<number | null>(null);
  const { lang: ui, t } = useI18n();
  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden">
      <div className="px-3 py-1.5 text-[10px] uppercase font-mono tracking-wider text-muted-foreground border-b border-border bg-muted/20">
        {LANG_LABEL[lang]} — {t("annotated.hoverLine")}
      </div>
      <div className="font-mono text-xs leading-relaxed">
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
              className={`group grid grid-cols-[2.5rem_1fr_auto] gap-2 px-2 py-0.5 outline-none transition-colors ${
                isActive ? "bg-primary/10" : "hover:bg-muted/30"
              }`}
            >
              <span className="text-right text-muted-foreground/60 select-none">{n}</span>
              <code
                className="whitespace-pre overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: tokenize(line || " ", lang) }}
              />
              <span
                className={`text-[11px] font-sans text-foreground/80 max-w-[55%] text-right truncate transition-opacity ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-70"
                }`}
                title={meaning}
              >
                {meaning}
              </span>
            </div>
          );
        })}
      </div>
      {hover !== null && (
        <div className="border-t border-border bg-muted/20 px-3 py-2 text-xs text-foreground/85 flex gap-2">
          <span className="font-mono text-primary shrink-0">L{hover}</span>
          <span>{overrides?.[hover] ?? explainLine(lines[hover - 1] ?? "", lang, ui)}</span>
        </div>
      )}
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
    <div className="my-3">
      <Button size="sm" variant="outline" onClick={() => setOpen((o) => !o)} className="gap-1.5">
        {open ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
        {open ? t("annotated.hide") : t("annotated.explain")}
        <ScrollText className="h-3.5 w-3.5 opacity-60" />
      </Button>
      {open && (
        <div className="mt-3 space-y-3">
          {langs.map((lang) => (
            <Pane
              key={lang}
              lang={lang}
              source={code[lang] ?? ""}
              overrides={annotations?.[lang]}
            />
          ))}
          <p className="text-[11px] text-muted-foreground italic">{t("annotated.hint")}</p>
        </div>
      )}
    </div>
  );
}
