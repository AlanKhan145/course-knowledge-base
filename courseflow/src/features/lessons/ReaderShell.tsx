"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUp, ChevronLeft, ChevronRight, Clock, Expand, ListTree, Minimize2, PanelLeft, Search, X } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import type { LessonDetail, LessonOutline, ModuleOutline } from "@/lib/content/types";
import type { TocItem } from "@/lib/markdown/plugins";
import { cn, formatMinutes } from "@/lib/utils";
import { Logo } from "@/components/SiteHeader";
import { ThemeToggle } from "@/components/ThemeToggle";
import { openCommandPalette } from "@/features/search/palette-bus";
import { addReadingTime, openLesson, setScroll, getState, useLearner } from "@/features/progress/store";
import { CourseOutline } from "./CourseOutline";
import { TableOfContents } from "./TableOfContents";
import { LessonActions } from "./LessonActions";
import { ReadingPrefs } from "./ReadingPrefs";
import { highlightTerms } from "./highlight-terms";

export interface ReaderCourse {
  id: string;
  slug: string;
  title: string;
  domainTitle: string;
  categoryTitle: string;
  modules: ModuleOutline[];
  resources: LessonOutline[];
  lessonCount: number;
  gradableCount: number;
}

interface Props {
  course: ReaderCourse;
  lesson: LessonDetail;
  toc: TocItem[];
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
  position: { index: number; total: number } | null;
  related: { courseSlug: string; courseTitle: string; slug: string; title: string }[];
  questionCount: number;
  editHref: string | null;
  relPath: string;
  children: ReactNode;
}

const WIDTH = { narrow: "40rem", normal: "46rem", wide: "58rem" };

export function ReaderShell({ course, lesson, toc, prev, next, position, related, questionCount, editHref, relPath, children }: Props) {
  const router = useRouter();
  const sp = useSearchParams();
  const prefs = useLearner((s) => s.prefs);
  const [focus, setFocus] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const articleRef = useRef<HTMLElement>(null);
  const countable = lesson.kind === "lesson";

  // open + resume
  useEffect(() => {
    openLesson({ courseId: course.id, lessonId: lesson.id, lessonSlug: lesson.slug, lessonTitle: lesson.title, countable });
    const hl = sp.get("hl");
    if (hl && articleRef.current) {
      const first = highlightTerms(articleRef.current, hl.split(/\s+/).filter(Boolean));
      first?.scrollIntoView({ block: "center" });
      return;
    }
    if (location.hash) return;
    const ratio = getState().lessons[lesson.id]?.scrollRatio;
    if (ratio && ratio > 0.02 && ratio < 0.98) {
      requestAnimationFrame(() => window.scrollTo({ top: ratio * (document.documentElement.scrollHeight - innerHeight) }));
    } else window.scrollTo({ top: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson.id]);

  // reading time: counts only while the tab is visible and the learner was active in the last 2 minutes
  useEffect(() => {
    let lastActive = Date.now();
    const mark = () => (lastActive = Date.now());
    const evs = ["scroll", "keydown", "pointermove", "pointerdown", "touchstart"] as const;
    evs.forEach((e) => window.addEventListener(e, mark, { passive: true }));
    const id = setInterval(() => {
      if (document.visibilityState === "visible" && Date.now() - lastActive < 120_000) addReadingTime(lesson.id, 15);
    }, 15_000);
    return () => {
      clearInterval(id);
      evs.forEach((e) => window.removeEventListener(e, mark));
    };
  }, [lesson.id]);

  // scroll progress + remember position
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - innerHeight;
        const r = max > 0 ? Math.min(1, scrollY / max) : 1;
        setProgress(r);
        setScroll(lesson.id, r);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lesson.id]);

  // heading anchors (copy link to a heading)
  useEffect(() => {
    const root = articleRef.current;
    if (!root) return;
    root.querySelectorAll<HTMLElement>("h2[id], h3[id], h4[id]").forEach((h) => {
      if (h.querySelector(".heading-anchor")) return;
      const a = document.createElement("a");
      a.href = `#${h.id}`;
      a.className = "heading-anchor";
      a.textContent = "#";
      a.setAttribute("aria-label", `Sao chép liên kết tới “${h.textContent}”`);
      a.addEventListener("click", (e) => {
        e.preventDefault();
        history.replaceState(null, "", `#${h.id}`);
        void navigator.clipboard?.writeText(location.href);
        h.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      h.prepend(a);
    });
  }, [lesson.id]);

  const go = useCallback((slug: string | undefined) => slug && router.push(`/learn/${course.slug}/${slug}`), [router, course.slug]);

  // keyboard shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("input, textarea, select, [contenteditable=true]") || e.ctrlKey || e.metaKey) return;
      if ((e.altKey && e.key === "ArrowRight") || e.key === "]") (e.preventDefault(), go(next?.slug));
      else if ((e.altKey && e.key === "ArrowLeft") || e.key === "[") (e.preventDefault(), go(prev?.slug));
      else if (e.key === "f" && !e.altKey) setFocus((f) => !f);
      else if (e.key === "Escape") setFocus(false);
      else if (e.key === "/") (e.preventDefault(), openCommandPalette());
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, next?.slug, prev?.slug]);

  const fullscreen = async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
      setFocus(true);
    } catch {
      /* not allowed */
    }
  };

  const outline = <CourseOutline course={course} currentId={lesson.id} />;

  return (
    <div data-focus={focus} className="min-h-dvh" style={{ ["--reader-size" as string]: `${prefs.fontSize}px`, ["--reader-width" as string]: WIDTH[prefs.width] }}>
      {/* reading progress */}
      <div className="fixed inset-x-0 top-0 z-50 h-0.5 bg-transparent" aria-hidden>
        <div className="h-full bg-accent transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />
      </div>

      <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/90 backdrop-blur-md">
        <div className="flex h-13 items-center gap-2 px-3 sm:px-4">
          <button type="button" className="chrome-hide flex size-9 items-center justify-center rounded-xl text-muted hover:bg-surface-2 lg:hidden" onClick={() => setDrawer(true)} aria-label="Mở danh sách bài học">
            <PanelLeft className="size-4.5" />
          </button>
          <Logo compact />
          <Link href={`/courses/${course.slug}`} className="min-w-0 truncate text-sm font-medium text-text-2 hover:text-text">
            {course.title}
          </Link>
          {position ? <span className="hidden shrink-0 text-xs text-muted tabular-nums sm:inline">· Bài {position.index}/{position.total}</span> : null}
          <div className="ml-auto flex items-center gap-1">
            <button type="button" onClick={() => openCommandPalette()} className="flex size-9 items-center justify-center rounded-xl text-muted hover:bg-surface-2 hover:text-text" aria-label="Tìm kiếm">
              <Search className="size-4" />
            </button>
            <ReadingPrefs />
            <button type="button" onClick={() => setFocus((f) => !f)} className={cn("hidden size-9 items-center justify-center rounded-xl hover:bg-surface-2 sm:flex", focus ? "text-accent" : "text-muted")} aria-pressed={focus} aria-label="Chế độ tập trung (F)" title="Chế độ tập trung (F)">
              <Minimize2 className="size-4" />
            </button>
            <button type="button" onClick={fullscreen} className="hidden size-9 items-center justify-center rounded-xl text-muted hover:bg-surface-2 hover:text-text sm:flex" aria-label="Toàn màn hình" title="Toàn màn hình">
              <Expand className="size-4" />
            </button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[100rem]">
        {/* left: course outline */}
        <aside className="chrome-hide sticky top-13 hidden h-[calc(100dvh-3.25rem)] w-80 shrink-0 border-r border-border lg:block" aria-label="Danh sách bài học">
          {outline}
        </aside>

        {/* center: article */}
        <main id="main" className="min-w-0 flex-1 px-4 pt-6 pb-24 sm:px-8 lg:px-12">
          <div className="mx-auto" style={{ maxWidth: "var(--reader-width)" }}>
            <nav className="chrome-hide mb-4 flex flex-wrap items-center gap-1 text-xs text-muted" aria-label="Breadcrumb">
              <Link href="/explore" className="hover:text-text">{course.domainTitle}</Link>
              <ChevronRight className="size-3" />
              <Link href={`/courses/${course.slug}`} className="max-w-[16rem] truncate hover:text-text">{course.title}</Link>
              {lesson.moduleTitle ? (
                <>
                  <ChevronRight className="size-3" />
                  <span className="max-w-[16rem] truncate">{lesson.moduleOrd ? `${lesson.moduleOrd}. ` : ""}{lesson.moduleTitle}</span>
                </>
              ) : null}
            </nav>
            <header className="mb-8">
              {lesson.groupLabel ? <p className="mb-1 text-sm font-medium text-accent">{lesson.groupLabel}</p> : null}
              {lesson.kind !== "lesson" ? (
                <p className="mb-2 inline-block rounded-full bg-surface-2 px-2.5 py-0.5 text-xs text-muted">{lesson.kind === "overview" ? "Tổng quan / mục lục" : "Tài liệu bổ sung"} · không tính tiến độ</p>
              ) : null}
              <h1 className="text-[1.9rem] leading-tight font-bold tracking-tight text-text text-balance sm:text-[2.25rem]">{lesson.title}</h1>
              {lesson.description ? <p className="mt-3 text-[1.05rem] leading-relaxed text-muted">{lesson.description}</p> : null}
              <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                <span className="inline-flex items-center gap-1"><Clock className="size-3.5" /> Khoảng {formatMinutes(Math.max(1, Math.round(lesson.words / 200)))} đọc</span>
                <span>{lesson.words.toLocaleString("vi-VN")} từ</span>
                {questionCount ? <span>{questionCount} câu hỏi ôn tập</span> : null}
              </p>
              <LessonActions course={course} lesson={lesson} countable={countable} editHref={editHref} relPath={relPath} variant="top" />
            </header>

            <article ref={articleRef} className={cn("prose-lesson", prefs.font === "serif" && "font-serif-reading")}>
              {children}
            </article>

            <LessonActions course={course} lesson={lesson} countable={countable} editHref={editHref} relPath={relPath} variant="bottom" />

            <nav className="mt-8 grid gap-3 sm:grid-cols-2" aria-label="Chuyển bài">
              {prev ? (
                <Link href={`/learn/${course.slug}/${prev.slug}`} className="group rounded-2xl border border-border bg-surface p-4 transition hover:border-border-strong">
                  <span className="flex items-center gap-1 text-xs text-muted"><ChevronLeft className="size-3.5" /> Bài trước</span>
                  <span className="mt-1 line-clamp-2 block text-sm font-semibold text-text">{prev.title}</span>
                </Link>
              ) : <span />}
              {next ? (
                <Link href={`/learn/${course.slug}/${next.slug}`} className="group rounded-2xl border border-border bg-surface p-4 text-right transition hover:border-border-strong">
                  <span className="flex items-center justify-end gap-1 text-xs text-muted">Bài tiếp theo <ChevronRight className="size-3.5" /></span>
                  <span className="mt-1 line-clamp-2 block text-sm font-semibold text-text">{next.title}</span>
                </Link>
              ) : (
                <Link href={`/courses/${course.slug}`} className="rounded-2xl border border-accent/40 bg-accent-soft p-4 text-right">
                  <span className="text-xs text-accent-ink">Hết khóa học</span>
                  <span className="mt-1 block text-sm font-semibold text-text">Về trang khóa học</span>
                </Link>
              )}
            </nav>
            <p className="chrome-hide mt-4 text-center text-[11px] text-muted">Phím tắt: <kbd className="font-mono">[</kbd> / <kbd className="font-mono">]</kbd> chuyển bài · <kbd className="font-mono">F</kbd> tập trung · <kbd className="font-mono">/</kbd> tìm kiếm</p>
          </div>
        </main>

        {/* right: TOC */}
        <aside className="chrome-hide sticky top-13 hidden h-[calc(100dvh-3.25rem)] w-64 shrink-0 overflow-y-auto py-6 pr-4 xl:block" aria-label="Mục lục bài">
          <TableOfContents toc={toc} />
          {related.length ? (
            <div className="mt-8">
              <p className="mb-2 text-xs font-semibold tracking-wide text-muted uppercase">Bài liên quan</p>
              <ul className="space-y-2">
                {related.map((r) => (
                  <li key={r.courseSlug + r.slug}>
                    <Link href={`/learn/${r.courseSlug}/${r.slug}`} className="block text-sm leading-snug text-text-2 hover:text-accent">
                      {r.title}
                      <span className="block truncate text-[11px] text-muted">{r.courseTitle}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="mt-8 inline-flex items-center gap-1 text-xs text-muted hover:text-text">
            <ArrowUp className="size-3.5" /> Lên đầu bài
          </button>
        </aside>
      </div>

      {/* mobile: TOC button */}
      {toc.length ? (
        <button type="button" onClick={() => setTocOpen(true)} className="chrome-hide fixed right-4 bottom-4 z-30 flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 text-sm font-medium shadow-pop xl:hidden" aria-label="Mục lục bài">
          <ListTree className="size-4" /> Mục lục
        </button>
      ) : null}

      <Drawer open={drawer} onOpenChange={setDrawer} side="left" title="Bài học trong khóa">
        <div onClick={(e) => (e.target as HTMLElement).closest("a") && setDrawer(false)} className="h-full">{outline}</div>
      </Drawer>
      <Drawer open={tocOpen} onOpenChange={setTocOpen} side="bottom" title="Mục lục bài">
        <div className="p-4" onClick={(e) => (e.target as HTMLElement).closest("a") && setTocOpen(false)}>
          <TableOfContents toc={toc} />
        </div>
      </Drawer>
    </div>
  );
}

function Drawer({ open, onOpenChange, side, title, children }: { open: boolean; onOpenChange: (o: boolean) => void; side: "left" | "bottom"; title: string; children: ReactNode }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40" />
        <Dialog.Content
          className={cn(
            "fixed z-50 flex flex-col bg-surface shadow-pop",
            side === "left" ? "inset-y-0 left-0 w-[min(22rem,88vw)] border-r border-border" : "inset-x-0 bottom-0 max-h-[75vh] rounded-t-2xl border-t border-border",
          )}
          aria-describedby={undefined}
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <Dialog.Title className="text-sm font-semibold">{title}</Dialog.Title>
            <Dialog.Close className="rounded-lg p-1.5 hover:bg-surface-2" aria-label="Đóng">
              <X className="size-4" />
            </Dialog.Close>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
