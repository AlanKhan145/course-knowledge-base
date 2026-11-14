"use client";
import { BookOpen, CheckCircle2, ChevronDown, ChevronRight, CircleHelp, ClipboardCheck, ExternalLink, FileText, GraduationCap, Heart, Layers, ListChecks, NotebookPen, PlayCircle, Timer } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { CourseDetail } from "@/lib/content/types";
import { cn, formatDate, formatMinutes, LANG_LABEL, LEVEL_LABEL } from "@/lib/utils";
import { CourseCover } from "@/components/CourseCover";
import { ProgressBar } from "@/features/catalog/CourseCard";
import { StatusIcon, ReviewDot } from "@/features/lessons/CourseOutline";
import { toggleFavorite, useLearner } from "@/features/progress/store";
import { SyncCourseButton } from "./SyncCourseButton";

export function CourseDetailView({ course }: { course: CourseDetail }) {
  const s = useLearner((x) => x);
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const all = useMemo(() => course.modules.flatMap((m) => m.lessons), [course.modules]);
  const done = all.filter((l) => s.lessons[l.id]?.status === "completed").length;
  const pct = all.length ? Math.round((done / all.length) * 100) : 0;
  const cp = s.courses[course.id];
  const resume = cp && all.some((l) => l.slug === cp.lastLessonSlug) ? cp.lastLessonSlug : null;
  const firstUndone = all.find((l) => s.lessons[l.id]?.status !== "completed");
  const target = resume ?? firstUndone?.slug ?? all[0]?.slug;
  const fav = !!s.favorites[course.id];
  const attempts = s.attempts.filter((a) => a.courseId === course.id);
  const allOpen = course.modules.every((m) => open[m.id]);

  return (
    <main id="main" className="pb-20">
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_22rem]">
          <div className="min-w-0">
            <nav className="mb-3 flex flex-wrap items-center gap-1 text-xs text-muted" aria-label="Breadcrumb">
              <Link href="/explore" className="hover:text-text">Khám phá</Link>
              <ChevronRight className="size-3" />
              <Link href={`/explore?domain=${course.domainId}`} className="hover:text-text">{course.domainTitle}</Link>
              <ChevronRight className="size-3" />
              <Link href={`/explore?domain=${course.domainId}&cat=${course.categoryId}`} className="hover:text-text">{course.categoryTitle}</Link>
              {course.subcategoryId ? (
                <>
                  <ChevronRight className="size-3" />
                  <Link href={`/explore?domain=${course.domainId}&cat=${course.subcategoryId}`} className="hover:text-text">{course.subcategoryTitle}</Link>
                </>
              ) : null}
            </nav>
            <h1 className="text-3xl leading-tight font-bold tracking-tight text-balance sm:text-4xl">{course.title}</h1>
            <p className="mt-3 max-w-3xl text-[1.05rem] leading-relaxed text-muted">
              {course.description ?? `Khóa học gồm ${course.moduleCount} module với ${course.lessonCount} bài học${course.gradableCount ? ` và ${course.gradableCount.toLocaleString("vi-VN")} câu hỏi ôn tập có đáp án` : ""}.`}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-2">
              <span className="inline-flex items-center gap-1.5"><Layers className="size-4 text-muted" />{course.moduleCount} module</span>
              <span className="inline-flex items-center gap-1.5"><BookOpen className="size-4 text-muted" />{course.lessonCount} bài học</span>
              <span className="inline-flex items-center gap-1.5"><CircleHelp className="size-4 text-muted" />{course.gradableCount.toLocaleString("vi-VN")} câu hỏi có đáp án</span>
              <span className="inline-flex items-center gap-1.5"><Timer className="size-4 text-muted" />khoảng {formatMinutes(course.estMinutes)} đọc</span>
              <span className="inline-flex items-center gap-1.5"><GraduationCap className="size-4 text-muted" />{course.level ? LEVEL_LABEL[course.level] ?? course.level : "Chưa phân loại trình độ"}</span>
              <span>{LANG_LABEL[course.language] ?? course.language}</span>
              <span className="text-muted">Cập nhật {formatDate(course.updatedAt)}</span>
            </div>
            {course.status === "partial" ? (
              <p className="mt-4 inline-block rounded-lg bg-amber-soft px-3 py-1.5 text-sm text-amber">Khóa học chưa hoàn thiện: ít bài hoặc nhiều bài còn ngắn.</p>
            ) : null}
          </div>
          <div className="space-y-3 rounded-2xl border border-border bg-bg-elevated p-4">
            <CourseCover id={course.id} domainTitle={course.domainTitle} className="h-32 rounded-xl" />
            <div className="flex items-center gap-3">
              <ProgressBar value={pct} className="flex-1" />
              <span className="text-sm tabular-nums text-muted">{done}/{all.length}</span>
            </div>
            {target ? (
              <Link href={`/learn/${course.slug}/${target}`} className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 font-semibold text-white transition hover:bg-accent-hover dark:text-bg">
                <PlayCircle className="size-5" /> {resume ? "Tiếp tục học" : done ? "Học tiếp bài chưa xong" : "Bắt đầu học"}
              </Link>
            ) : null}
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => toggleFavorite(course.id)} className={cn("flex items-center justify-center gap-1.5 rounded-xl border px-3 py-2 text-sm", fav ? "border-danger/40 bg-danger-soft text-danger" : "border-border")} aria-pressed={fav}>
                <Heart className={cn("size-4", fav && "fill-current")} /> {fav ? "Đã thích" : "Yêu thích"}
              </button>
              <Link href={`/courses/${course.slug}/review`} className="flex items-center justify-center gap-1.5 rounded-xl border border-border px-3 py-2 text-sm">
                <NotebookPen className="size-4" /> Biên tập
              </Link>
            </div>
            <SyncCourseButton slug={course.slug} />
            {course.gradableCount >= 5 ? (
              <Link href={`/courses/${course.slug}/quiz/final`} className="flex items-center justify-center gap-1.5 rounded-xl border border-violet/40 bg-violet-soft px-3 py-2 text-sm font-semibold text-violet">
                <ClipboardCheck className="size-4" /> Kiểm tra cuối khóa
              </Link>
            ) : null}
            {course.sourceUrl ? (
              <a href={course.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 text-xs text-muted hover:text-text">
                Trang nguồn khóa học <ExternalLink className="size-3" />
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 pt-8 sm:px-6 lg:grid-cols-[1fr_22rem]">
        <div className="min-w-0 space-y-8">
          {course.objectives.length ? (
            <section className="rounded-2xl border border-border bg-surface p-5">
              <h2 className="mb-3 flex items-center gap-2 font-semibold"><ListChecks className="size-4 text-accent" /> Bạn sẽ học được</h2>
              <ul className="grid gap-2 sm:grid-cols-2">
                {course.objectives.map((o, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-2"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" />{o}</li>
                ))}
              </ul>
            </section>
          ) : null}
          {course.prerequisites.length ? (
            <section>
              <h2 className="mb-2 font-semibold">Kiến thức cần có</h2>
              <ul className="list-disc space-y-1 pl-5 text-sm text-text-2">{course.prerequisites.map((o, i) => <li key={i}>{o}</li>)}</ul>
            </section>
          ) : null}

          <section aria-labelledby="curriculum">
            <div className="mb-3 flex items-end justify-between">
              <h2 id="curriculum" className="text-xl font-semibold">Nội dung khóa học</h2>
              <button onClick={() => setOpen(Object.fromEntries(course.modules.map((m) => [m.id, !allOpen])))} className="text-sm text-accent hover:underline">
                {allOpen ? "Thu gọn tất cả" : "Mở tất cả"}
              </button>
            </div>
            <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
              {course.modules.map((m) => {
                const mDone = m.lessons.filter((l) => s.lessons[l.id]?.status === "completed").length;
                const isOpen = !!open[m.id];
                const gradable = m.lessons.reduce((x, l) => x + l.gradable, 0);
                const state = mDone === m.lessons.length && m.lessons.length ? "done" : mDone || m.lessons.some((l) => s.lessons[l.id]) ? "learning" : "new";
                return (
                  <div key={m.id}>
                    <button onClick={() => setOpen((o) => ({ ...o, [m.id]: !o[m.id] }))} className="flex w-full items-center gap-3 px-4 py-3.5 text-left hover:bg-surface-2/50" aria-expanded={isOpen}>
                      <ChevronDown className={cn("size-4 shrink-0 text-muted transition-transform", !isOpen && "-rotate-90")} />
                      <span className="min-w-0 flex-1">
                        <span className="block font-medium">{m.kind === "module" ? `${m.ord}. ` : ""}{m.title}</span>
                        <span className="text-xs text-muted">
                          {m.lessons.length} bài · {formatMinutes(m.lessons.reduce((x, l) => x + l.minutes, 0))}{gradable ? ` · ${gradable} câu hỏi` : ""}
                        </span>
                      </span>
                      <span className={cn("rounded-full px-2 py-0.5 text-[11px] font-semibold", state === "done" ? "bg-success-soft text-success" : state === "learning" ? "bg-amber-soft text-amber" : "bg-surface-2 text-muted")}>
                        {state === "done" ? "Hoàn thành" : state === "learning" ? `${mDone}/${m.lessons.length}` : "Chưa học"}
                      </span>
                    </button>
                    {isOpen ? (
                      <ul className="border-t border-border bg-bg-elevated/60 py-1">
                        {m.lessons.map((l, i) => (
                          <li key={l.id}>
                            {l.groupLabel && l.groupLabel !== m.lessons[i - 1]?.groupLabel ? <p className="px-11 pt-2 pb-1 text-[11px] font-medium tracking-wide text-muted uppercase">{l.groupLabel}</p> : null}
                            <Link href={`/learn/${course.slug}/${l.slug}`} className="flex items-center gap-3 px-11 py-2 text-sm hover:bg-surface-2/60">
                              <StatusIcon s={s} id={l.id} className="shrink-0" />
                              <span className="min-w-0 flex-1">{l.title}</span>
                              <ReviewDot s={s} id={l.id} />
                              {l.gradable ? <span className="text-xs text-muted" title="Câu hỏi ôn tập">{l.gradable} câu</span> : null}
                              <span className="w-14 text-right text-xs text-muted">{l.minutes} phút</span>
                            </Link>
                          </li>
                        ))}
                        {gradable >= 4 && m.kind === "module" ? (
                          <li>
                            <Link href={`/courses/${course.slug}/quiz/${m.id}`} className="mx-11 my-2 inline-flex items-center gap-1.5 rounded-lg border border-violet/30 bg-violet-soft px-3 py-1.5 text-xs font-semibold text-violet">
                              <ClipboardCheck className="size-3.5" /> Ôn tập tổng kết module
                            </Link>
                          </li>
                        ) : null}
                      </ul>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        <aside className="space-y-4">
          {course.resources.length ? (
            <div className="rounded-2xl border border-border bg-surface p-4">
              <p className="mb-2 text-sm font-semibold">Tài liệu khóa học</p>
              <ul className="space-y-1">
                {course.resources.slice(0, 30).map((r) => (
                  <li key={r.id}>
                    <Link href={`/learn/${course.slug}/${r.slug}`} className="flex items-start gap-2 rounded-lg px-1.5 py-1 text-sm text-text-2 hover:bg-surface-2">
                      <FileText className="mt-0.5 size-4 shrink-0 text-muted" />
                      <span className="min-w-0">{r.title}<span className="block text-[11px] text-muted">{r.kind === "overview" ? "Tổng quan / mục lục" : "Tài liệu bổ sung"}</span></span>
                    </Link>
                  </li>
                ))}
              </ul>
              {course.resourceFileCount ? <p className="mt-2 text-xs text-muted">Cùng {course.resourceFileCount} file đính kèm (PDF, notebook, mã nguồn…) trong thư mục khóa.</p> : null}
            </div>
          ) : null}
          {attempts.length ? (
            <div className="rounded-2xl border border-border bg-surface p-4">
              <p className="mb-2 text-sm font-semibold">Bài kiểm tra đã làm</p>
              <ul className="space-y-1.5 text-sm">
                {attempts.slice(-8).reverse().map((a) => (
                  <li key={a.id} className="flex justify-between gap-2">
                    <span className="min-w-0 truncate text-text-2">{a.title}</span>
                    <b className={cn("tabular-nums", a.percent >= 80 ? "text-success" : a.percent >= 50 ? "text-amber" : "text-danger")}>{a.percent}%</b>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className="rounded-2xl border border-border bg-surface p-4 text-sm text-muted">
            <p><b className="text-text">{course.wordCount.toLocaleString("vi-VN")}</b> từ nội dung</p>
            <p className="mt-1">Sơ đồ ở {course.media.mermaid} bài · công thức ở {course.media.math} bài · ảnh ở {course.media.images} bài · code ở {course.media.code} bài</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
