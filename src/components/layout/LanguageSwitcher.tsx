import { useI18n } from "@/hooks/useI18n";
import { type UILang } from "@/lib/i18n";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const OPTIONS: { code: UILang; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "bn", label: "Bangla", native: "বাংলা" },
];

export function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n();
  const current = OPTIONS.find((o) => o.code === lang)!;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 gap-1.5" aria-label={t("common.language")}>
          <Languages className="h-4 w-4" />
          <span className="text-xs font-medium">{current.native}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[8rem]">
        {OPTIONS.map((o) => (
          <DropdownMenuItem
            key={o.code}
            onClick={() => setLang(o.code)}
            className={o.code === lang ? "bg-primary/10 text-primary" : ""}
          >
            <span className="flex-1">{o.native}</span>
            <span className="text-xs text-muted-foreground ml-2">{o.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
