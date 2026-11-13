import { AlertTriangle, BookMarked, Info, Lightbulb, ListChecks, OctagonAlert, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

const STYLE: Record<string, { icon: typeof Info; cls: string }> = {
  note: { icon: Info, cls: "border-info/35 bg-info-soft [--c:var(--info)]" },
  tip: { icon: Lightbulb, cls: "border-success/35 bg-success-soft [--c:var(--success)]" },
  important: { icon: Sparkles, cls: "border-violet/35 bg-violet-soft [--c:var(--violet)]" },
  warning: { icon: AlertTriangle, cls: "border-amber/45 bg-amber-soft [--c:var(--amber)]" },
  caution: { icon: OctagonAlert, cls: "border-danger/35 bg-danger-soft [--c:var(--danger)]" },
  example: { icon: BookMarked, cls: "border-accent/30 bg-accent-soft [--c:var(--accent)]" },
  summary: { icon: ListChecks, cls: "border-border-strong bg-surface-2 [--c:var(--text-2)]" },
};

export function Callout({ type, title, children }: { type: string; title: string; children: ReactNode }) {
  const s = STYLE[type] ?? STYLE.note;
  const Icon = s.icon;
  return (
    <aside className={`callout not-italic my-6 rounded-xl border px-4 py-3 sm:px-5 ${s.cls}`} role="note" aria-label={title}>
      <p className="m-0! flex items-center gap-2 font-sans text-[0.82em] font-semibold tracking-wide text-[var(--c)] uppercase">
        <Icon className="size-4 shrink-0" aria-hidden />
        {title}
      </p>
      <div className="callout-body mt-1.5 text-[0.95em] text-text-2 [&>*+*]:mt-2 [&>p:first-child]:mt-0">{children}</div>
    </aside>
  );
}
