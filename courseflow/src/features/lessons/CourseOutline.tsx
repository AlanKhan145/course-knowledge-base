"use client";
import { CheckCircle2, ChevronDown, Circle, CircleDot, FileText, PencilLine, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { foldVi } from "@/lib/content/text";
import { cn } from "@/lib/utils";
import { useLearner, type LearnerState } from "@/features/progress/store";
import type { ReaderCourse } from "./ReaderShell";

export function StatusIcon({ s, id, className }: { s: LearnerState; id: string; className?: string }) {
  const p = s.lessons[id];
  if (p?.status === "completed") return <CheckCircle2 className={cn("size-4 text-success", className)} aria-label="Đã học" />;
  if (p) return <CircleDot className={cn("size-4 text-amber", className)} aria-label="Đang học" />;
  return <Circle className={cn("size-4 text-border-strong", className)} aria-label="Chưa học" />;
}

export function ReviewDot({ s, id }: { s: LearnerState; id: string }) {
  const r = s.reviews[id];
  if (!r) return null;
  const cls = r.status === "needs_edit" ? "bg-danger" : r.status === "edited" ? "bg-success" : "bg-info";
  const label = r.status === "needs_edit" ? "Cần sửa" : r.status === "edited" ? "Đã sửa" : "Đã đọc qua";
  return <span className={cn("size-1.5 shrink-0 rounded-full", cls)} title={`Biên tập: ${label}`} aria-label={`Biên tập: ${label}`} />;
}

export function CourseOutline({ course, currentId }: { course: ReaderCourse; currentId: string }) {
  const s = useLearner((x) => x);
  const [q, setQ] = useState("");
  const currentModule = course.modules.find((m) => m.lessons.some((l) => l.id === currentId))?.id;
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const activeRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: "center" });
  }, [currentId]);

  const ids = useMemo(() => course.modules.flatMap((m) => m.lessons.map((l) => l.id)), [course.modules]);
  const done = ids.filter((id) => s.lessons[id]?.status === "completed").length;
  const pct = ids.length ? Math.round((done / ids.length) * 100) : 0;
  const fq = foldVi(q.trim());

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-border p-4">
        <div className="mb-1.5 flex items-center justify-between text-xs text-muted">
          <span>Tiến độ khóa học</span>
          <span className="tabular-nums">
            {done}/{ids.length} · {pct}%
          </span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-surface-3" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
          <div className="h-full rounded-full bg-success transition-all" style={{ width: `${pct}%` }} />
        </div>
        <label className="mt-3 flex items-center gap-2 rounded-lg border border-border bg-bg-elevated px-2.5">
          <Search className="size-3.5 text-muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Tìm bài trong khóa…" className="h-8 flex-1 bg-transparent text-sm outline-none placeholder:text-muted" aria-label="Tìm bài trong khóa" />
        </label>
      </div>
      <nav className="scrollbar-thin min-h-0 flex-1 overflow-y-auto px-2 py-2">
        {course.modules.map((m) => {
          const lessons = fq ? m.lessons.filter((l) => foldVi(l.title).includes(fq)) : m.lessons;
          if (fq && !lessons.length) return null;
          const isOpen = !!fq || (open[m.id] ?? m.id === currentModule);
          const mDone = m.lessons.filter((l) => s.lessons[l.id]?.status === "completed").length;
          return (
            <div key={m.id} className="mb-1">
              <button
                type="button"
                onClick={() => setOpen((o) => ({ ...o, [m.id]: !(o[m.id] ?? m.id === currentModule) }))}
                className="flex w-full items-start gap-2 rounded-lg px-2 py-2 text-left hover:bg-surface-2"
                aria-expanded={isOpen}
              >
                <ChevronDown className={cn("mt-0.5 size-4 shrink-0 text-muted transition-transform", !isOpen && "-rotate-90")} />
                <span className="min-w-0 flex-1">
                  <span className="block text-[13px] leading-snug font-semibold text-text">
                    {m.kind === "module" ? <span className="text-muted">{m.ord}. </span> : null}
                    {m.title}
                  </span>
                  <span className="text-[11px] text-muted tabular-nums">
                    {mDone}/{m.lessons.length} bài
                  </span>
                </span>
              </button>
              {isOpen ? (
                <ul className="mb-1 ml-3 border-l border-border pl-1">
                  {lessons.map((l, i) => {
                    const active = l.id === currentId;
                    const showGroup = l.groupLabel && l.groupLabel !== lessons[i - 1]?.groupLabel;
                    return (
                      <li key={l.id}>
                        {showGroup ? <p className="mt-2 mb-0.5 px-2 text-[11px] font-medium tracking-wide text-muted uppercase">{l.groupLabel}</p> : null}
                        <Link
                          ref={active ? activeRef : undefined}
                          href={`/learn/${course.slug}/${l.slug}`}
                          className={cn("flex items-start gap-2 rounded-lg px-2 py-1.5 text-[13px] leading-snug", active ? "bg-accent-soft font-medium text-accent-ink" : "text-text-2 hover:bg-surface-2")}
                          aria-current={active ? "page" : undefined}
                        >
                          <StatusIcon s={s} id={l.id} className="mt-px shrink-0" />
                          <span className="min-w-0 flex-1">{l.title}</span>
                          <ReviewDot s={s} id={l.id} />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>
          );
        })}
        {course.resources.length && !fq ? (
          <div className="mt-3 border-t border-border pt-3">
            <p className="mb-1 px-2 text-[11px] font-semibold tracking-wide text-muted uppercase">Tài liệu khóa học</p>
            <ul>
              {course.resources.slice(0, 40).map((r) => (
                <li key={r.id}>
                  <Link href={`/learn/${course.slug}/${r.slug}`} className={cn("flex items-start gap-2 rounded-lg px-2 py-1.5 text-[13px] text-text-2 hover:bg-surface-2", r.id === currentId && "bg-accent-soft text-accent-ink")}>
                    {r.kind === "overview" ? <FileText className="mt-px size-4 shrink-0 text-muted" /> : <PencilLine className="mt-px size-4 shrink-0 text-muted" />}
                    <span className="min-w-0 flex-1 truncate">{r.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </nav>
    </div>
  );
}
