"use client";
import { Bookmark, BookmarkCheck, Check, CheckCircle2, Copy, FilePen, NotebookPen, StickyNote } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { LessonDetail } from "@/lib/content/types";
import { cn, relativeTime } from "@/lib/utils";
import { REVIEW_LABEL, saveNote, setCompleted, setReview, toggleBookmark, useLearner, type ReviewStatus } from "@/features/progress/store";
import type { ReaderCourse } from "./ReaderShell";

interface Props {
  course: ReaderCourse;
  lesson: LessonDetail;
  countable: boolean;
  editHref: string | null;
  relPath: string;
  variant: "top" | "bottom";
}

const REVIEW_STYLE: Record<ReviewStatus | "none", string> = {
  none: "border-border text-muted",
  read: "border-info/50 bg-info-soft text-info",
  needs_edit: "border-danger/50 bg-danger-soft text-danger",
  edited: "border-success/50 bg-success-soft text-success",
};

export function LessonActions({ course, lesson, countable, editHref, relPath, variant }: Props) {
  const progress = useLearner((s) => s.lessons[lesson.id]);
  const bookmark = useLearner((s) => s.bookmarks[lesson.id]);
  const review = useLearner((s) => s.reviews[lesson.id]);
  const note = useLearner((s) => s.notes[lesson.id]);
  const done = progress?.status === "completed";
  const [copied, setCopied] = useState(false);

  const bm = () =>
    toggleBookmark(lesson.id, { courseId: course.id, courseSlug: course.slug, courseTitle: course.title, lessonSlug: lesson.slug, lessonTitle: lesson.title });
  const mark = (status: ReviewStatus | null) =>
    setReview(lesson.id, status ? { status, note: review?.note, courseId: course.id, fileMtime: lesson.mtime } : null);
  const changedSinceMark = review && lesson.mtime > review.fileMtime + 1000;

  if (variant === "top") {
    return (
      <div className="chrome-hide mt-5 flex flex-wrap items-center gap-2">
        {countable ? (
          <button
            type="button"
            onClick={() => setCompleted(course.id, lesson.id, !done)}
            className={cn("inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition", done ? "border-success/50 bg-success-soft text-success" : "border-border text-text-2 hover:border-border-strong")}
            aria-pressed={done}
          >
            {done ? <CheckCircle2 className="size-3.5" /> : <Check className="size-3.5" />} {done ? "Đã học" : "Đánh dấu đã học"}
          </button>
        ) : null}
        <button type="button" onClick={bm} className={cn("inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition", bookmark ? "border-amber/50 bg-amber-soft text-amber" : "border-border text-text-2 hover:border-border-strong")} aria-pressed={!!bookmark}>
          {bookmark ? <BookmarkCheck className="size-3.5" /> : <Bookmark className="size-3.5" />} {bookmark ? "Đã lưu" : "Lưu bài"}
        </button>
        <ReviewMenu value={review?.status ?? "none"} onChange={mark} />
        {editHref ? (
          <>
            <Link href={`/edit/${course.slug}/${lesson.slug}`} className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent-soft px-3 py-1.5 text-xs font-semibold text-accent-ink hover:border-accent" title="Soạn và lưu Markdown ngay trên web">
              <FilePen className="size-3.5" /> Sửa trên web
            </Link>
            <a href={editHref} className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted hover:border-border-strong" title="Mở file Markdown trong VS Code">
              VS Code
            </a>
          </>
        ) : null}
        <button
          type="button"
          onClick={async () => {
            await navigator.clipboard?.writeText(relPath).catch(() => undefined);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted hover:border-border-strong"
          title={relPath}
        >
          <Copy className="size-3.5" /> {copied ? "Đã chép đường dẫn" : "Chép đường dẫn file"}
        </button>
        {changedSinceMark ? <span className="text-xs text-amber">File đã thay đổi sau lần đánh dấu {relativeTime(review!.at)}</span> : null}
      </div>
    );
  }

  return (
    <section className="chrome-hide mt-14 space-y-4 font-sans" aria-label="Hoàn thành và ghi chú">
      {countable ? (
        <div className={cn("flex flex-col gap-3 rounded-2xl border p-5 sm:flex-row sm:items-center", done ? "border-success/40 bg-success-soft" : "border-border bg-surface")}>
          <div className="flex-1">
            <p className="font-semibold text-text">{done ? "Bạn đã học xong bài này" : "Học xong bài này?"}</p>
            <p className="text-sm text-muted">
              {done ? `Hoàn thành ${progress?.completedAt ? relativeTime(progress.completedAt) : ""}. Câu hỏi của bài sẽ có trong trang Ôn tập ngẫu nhiên.` : "Tiến độ chỉ được tính khi bạn tự đánh dấu — cuộn hết trang không tự tính là xong."}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setCompleted(course.id, lesson.id, !done)}
            className={cn("inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition", done ? "border border-success/40 bg-surface text-success" : "bg-accent text-white hover:bg-accent-hover dark:text-bg")}
          >
            <CheckCircle2 className="size-4" /> {done ? "Bỏ đánh dấu" : "Đánh dấu đã học"}
          </button>
        </div>
      ) : null}
      <div className="grid gap-4 md:grid-cols-2">
        <NoteEditor
          key={`note-${lesson.id}`}
          icon={<StickyNote className="size-4" />}
          title="Ghi chú cá nhân"
          placeholder="Ý chính, câu hỏi còn thắc mắc…"
          value={note?.text ?? ""}
          onSave={(text) => saveNote(lesson.id, { text, courseId: course.id, courseSlug: course.slug, lessonSlug: lesson.slug, lessonTitle: lesson.title })}
        />
        <div className="rounded-2xl border border-border bg-surface p-4">
          <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-text">
            <NotebookPen className="size-4" /> Đánh dấu biên tập
          </p>
          <div className="flex flex-wrap gap-1.5">
            {(["none", "read", "needs_edit", "edited"] as const).map((st) => {
              const on = (review?.status ?? "none") === st;
              return (
                <button key={st} type="button" onClick={() => mark(st === "none" ? null : st)} className={cn("rounded-full border px-3 py-1 text-xs font-semibold transition", on ? REVIEW_STYLE[st] : "border-border text-muted hover:border-border-strong")} aria-pressed={on}>
                  {REVIEW_LABEL[st]}
                </button>
              );
            })}
          </div>
          {review ? (
            <NoteEditor
              key={`review-${lesson.id}`}
              compact
              title="Cần sửa gì?"
              placeholder="VD: thiếu ví dụ, câu 3 sai đáp án, thêm sơ đồ…"
              value={review.note ?? ""}
              onSave={(text) => setReview(lesson.id, { ...review, note: text })}
            />
          ) : (
            <p className="mt-2 text-xs text-muted">Dùng khi rà soát học liệu: đánh dấu bài đã đọc qua hoặc cần sửa theo template. Không thay đổi file gốc.</p>
          )}
        </div>
      </div>
    </section>
  );
}

function ReviewMenu({ value, onChange }: { value: ReviewStatus | "none"; onChange: (s: ReviewStatus | null) => void }) {
  return (
    <label className={cn("inline-flex items-center gap-1.5 rounded-full border py-1.5 pr-1 pl-3 text-xs font-semibold", REVIEW_STYLE[value])}>
      <NotebookPen className="size-3.5" />
      <select value={value} onChange={(e) => onChange(e.target.value === "none" ? null : (e.target.value as ReviewStatus))} className="cursor-pointer bg-transparent pr-1 outline-none" aria-label="Trạng thái biên tập">
        {(["none", "read", "needs_edit", "edited"] as const).map((s) => (
          <option key={s} value={s}>
            {REVIEW_LABEL[s]}
          </option>
        ))}
      </select>
    </label>
  );
}

function NoteEditor({ title, placeholder, value, onSave, icon, compact }: { title: string; placeholder: string; value: string; onSave: (t: string) => void; icon?: React.ReactNode; compact?: boolean }) {
  const [text, setText] = useState(value);
  const [savedText, setSavedText] = useState(value);
  const saved = text === savedText;
  useEffect(() => {
    if (text === savedText) return;
    const t = setTimeout(() => {
      onSave(text);
      setSavedText(text);
    }, 600);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, savedText]);
  return (
    <div className={compact ? "mt-3" : "rounded-2xl border border-border bg-surface p-4"}>
      <p className="mb-2 flex items-center justify-between gap-2 text-sm font-semibold text-text">
        <span className="flex items-center gap-2">
          {icon}
          {title}
        </span>
        <span className="text-[11px] font-normal text-muted">{saved ? (text ? "Đã lưu" : "") : "Đang lưu…"}</span>
      </p>
      <textarea value={text} onChange={(e) => setText(e.target.value)} rows={compact ? 2 : 4} placeholder={placeholder} className="w-full resize-y rounded-xl border border-border bg-bg-elevated px-3 py-2 text-sm text-text outline-none placeholder:text-muted focus:border-accent" />
    </div>
  );
}
