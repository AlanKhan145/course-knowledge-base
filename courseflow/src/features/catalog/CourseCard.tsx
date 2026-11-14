"use client";
import { BookOpen, CircleHelp, Heart, Layers, Timer } from "lucide-react";
import Link from "next/link";
import type { CourseSummary } from "@/lib/content/types";
import { cn, formatMinutes, LANG_LABEL, LEVEL_LABEL } from "@/lib/utils";
import { CourseCover } from "@/components/CourseCover";
import { toggleFavorite, useLearner } from "@/features/progress/store";

export function useCourseDone(courseId: string, total: number) {
  const lessons = useLearner((s) => s.lessons);
  let done = 0;
  for (const k in lessons) if (lessons[k].courseId === courseId && lessons[k].status === "completed") done++;
  return Math.min(done, total);
}

export function ProgressBar({ value, className, tone = "success" }: { value: number; className?: string; tone?: "success" | "accent" | "amber" }) {
  const color = tone === "success" ? "bg-success" : tone === "amber" ? "bg-amber" : "bg-accent";
  return (
    <div className={cn("h-1.5 overflow-hidden rounded-full bg-surface-3", className)} role="progressbar" aria-valuenow={Math.round(value)} aria-valuemin={0} aria-valuemax={100}>
      <div className={cn("h-full rounded-full transition-all", color)} style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  );
}

export function CourseCard({ c, compact }: { c: CourseSummary; compact?: boolean }) {
  const done = useCourseDone(c.id, c.lessonCount);
  const fav = useLearner((s) => !!s.favorites[c.id]);
  const pct = c.lessonCount ? Math.round((done / c.lessonCount) * 100) : 0;
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition hover:-translate-y-0.5 hover:border-border-strong hover:shadow-pop">
      <CourseCover id={c.id} domainTitle={c.domainTitle} className={compact ? "h-20" : "h-28"} />
      <button
        type="button"
        onClick={() => toggleFavorite(c.id)}
        className={cn("absolute top-2.5 right-2.5 z-10 flex size-8 items-center justify-center rounded-full bg-white/85 backdrop-blur transition dark:bg-black/45", fav ? "text-danger" : "text-muted opacity-0 group-hover:opacity-100 focus-visible:opacity-100")}
        aria-pressed={fav}
        aria-label={fav ? "Bỏ yêu thích" : "Yêu thích"}
      >
        <Heart className={cn("size-4", fav && "fill-current")} />
      </button>
      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1 truncate text-[11px] font-medium tracking-wide text-muted uppercase">{c.subcategoryTitle ? `${c.categoryTitle} · ${c.subcategoryTitle}` : c.categoryTitle}</p>
        <h3 className="line-clamp-2 text-[15px] leading-snug font-semibold text-text">
          <Link href={`/courses/${c.slug}`} className="after:absolute after:inset-0">
            {c.title}
          </Link>
        </h3>
        {!compact && c.description ? <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-muted">{c.description}</p> : null}
        <div className="mt-auto pt-3">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-muted">
            <span className="inline-flex items-center gap-1"><Layers className="size-3.5" />{c.moduleCount} module</span>
            <span className="inline-flex items-center gap-1"><BookOpen className="size-3.5" />{c.lessonCount} bài</span>
            {!compact && c.gradableCount ? <span className="inline-flex items-center gap-1"><CircleHelp className="size-3.5" />{c.gradableCount.toLocaleString("vi-VN")} câu</span> : null}
            {!compact ? <span className="inline-flex items-center gap-1"><Timer className="size-3.5" />{formatMinutes(c.estMinutes)}</span> : null}
          </p>
          {!compact ? (
            <p className="mt-2 flex flex-wrap gap-1.5">
              <span className="rounded-full bg-surface-2 px-2 py-0.5 text-[11px] text-text-2">{LANG_LABEL[c.language] ?? c.language}</span>
              {c.level ? <span className="rounded-full bg-surface-2 px-2 py-0.5 text-[11px] text-text-2">{LEVEL_LABEL[c.level] ?? c.level}</span> : null}
              {c.status === "partial" ? <span className="rounded-full bg-amber-soft px-2 py-0.5 text-[11px] text-amber">Chưa hoàn thiện</span> : null}
            </p>
          ) : null}
          {done > 0 ? (
            <div className="mt-3 flex items-center gap-2">
              <ProgressBar value={pct} className="flex-1" />
              <span className="text-[11px] text-muted tabular-nums">{pct}%</span>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
