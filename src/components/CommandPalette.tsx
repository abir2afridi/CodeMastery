import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator,
} from "@/components/ui/command";
import { tracks } from "@/lib/curriculum";
import { useI18n } from "@/lib/i18n";
import { Layout, Terminal, User, BookOpen, Code2 } from "lucide-react";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useI18n();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const allChapters = useMemo(
    () => tracks.flatMap((tr) => tr.chapters.map((c) => ({ track: tr, chapter: c }))),
    [],
  );

  const go = (path: string) => { setOpen(false); navigate(path); };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder={t("palette.placeholder")} />
      <CommandList>
        <CommandEmpty>{t("palette.empty")}</CommandEmpty>
        <CommandGroup heading={t("palette.pages")}>
          <CommandItem onSelect={() => go("/learn")}><Layout className="mr-2 h-4 w-4" />{t("nav.dashboard")}</CommandItem>
          <CommandItem onSelect={() => go("/compiler")}><Terminal className="mr-2 h-4 w-4" />{t("nav.compiler")}</CommandItem>
          <CommandItem onSelect={() => go("/profile")}><User className="mr-2 h-4 w-4" />{t("nav.profile")}</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={t("palette.tracks")}>
          {tracks.map((tr) => (
            <CommandItem key={tr.id} onSelect={() => go(`/learn/${tr.id}`)}>
              <Code2 className="mr-2 h-4 w-4" />{tr.title} <span className="ml-auto text-xs text-muted-foreground">{tr.chapters.length} ch</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={t("palette.chapters")}>
          {allChapters.map(({ track: tr, chapter: c }) => (
            <CommandItem
              key={`${tr.id}-${c.id}`}
              value={`${tr.title} ${c.number} ${c.title} ${c.subtitle}`}
              onSelect={() => go(`/learn/${tr.id}/${c.id}`)}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              <span className="text-muted-foreground font-mono text-xs mr-2">{tr.title.slice(0, 2).toUpperCase()}·{String(c.number).padStart(2, "0")}</span>
              <span className="truncate">{c.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
