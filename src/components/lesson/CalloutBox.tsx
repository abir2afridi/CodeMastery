import { Info, AlertTriangle, XCircle, Lightbulb, Sparkles, Bug, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Callout } from "@/lib/curriculum/types";

const styles: Record<Callout["type"], { icon: any; cls: string; label: string }> = {
  tip: { icon: Lightbulb, cls: "border-primary/40 bg-primary/5 text-foreground", label: "Tip" },
  warning: { icon: AlertTriangle, cls: "border-warning/40 bg-warning/5", label: "Warning" },
  error: { icon: XCircle, cls: "border-destructive/40 bg-destructive/5", label: "Error" },
  info: { icon: Info, cls: "border-secondary/40 bg-secondary/5", label: "Info" },
  analogy: { icon: BookOpen, cls: "border-secondary/40 bg-secondary/10", label: "Analogy" },
  "common-mistake": { icon: Bug, cls: "border-destructive/40 bg-destructive/5", label: "Common Mistake" },
  "pro-tip": { icon: Sparkles, cls: "border-primary/50 bg-primary/10", label: "Pro Tip" },
};

export function CalloutBox({ callout }: { callout: Callout }) {
  const s = styles[callout.type];
  const Icon = s.icon;
  return (
    <div className={cn("my-4 flex gap-3 rounded-lg border-l-4 p-4", s.cls)}>
      <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.label} · {callout.title}</p>
        <p className="text-sm leading-relaxed">{callout.content}</p>
      </div>
    </div>
  );
}
