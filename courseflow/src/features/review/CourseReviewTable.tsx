"use client";
import { AlertTriangle, CheckCircle2, ChevronLeft, Circle, FilePen, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { ReviewRow } from "@/lib/content/repository";
import { foldVi } from "@/lib/content/text";
import { cn } from "@/lib/utils";
import { REVIEW_LABEL, setReview, useLearner, type ReviewStatus } from "@/features/progress/store";

type Filter = "all" | "none" | ReviewStatus | "changed" | "unlearned" | "learned" | "low";
const FILTERS: [Filter, string][] = [
  ["all", "Tất cả"],
  ["none", "Chưa xem"],
  ["read", "Đã đọc qua"],
  ["needs_edit", "Cần sửa"],
  ["edited", "Đã sửa xong"],
  ["changed", "File đổi sau khi đánh dấu"],
  ["unlearned", "Chưa học"],
  ["learned", "Đã học"],
  ["low", "Khớp template < 60%"],
];

export function CourseReviewTable({ course, rows }: { course: { id: string; slug: string; title: string }; rows: ReviewRow[] }) {
  const reviews = useLearner((s) => s.reviews);
  const lessons = useLearner((s) => s.lessons);
  const [filter, setFilter] = useState<Filter>("all");
  const [q, setQ] = useState("");

  const statusOf = (r: ReviewRow): ReviewStatus | "none" => reviews[r.id]?.status ?? "none";
  const changed = (r: ReviewRow) => !!reviews[r.id] && r.mtime > reviews[r.id].fileMtime + 1000;
  const match = (r: ReviewRow, f: Filter) => {
    switch (f) {
      case "all":
        return true;
      case "changed":
        return changed(r);
      case "unlearned":
        return lessons[r.id]?.status !== "completed";
      case "learned":
        return lessons[r.id]?.status === "completed";
      case "low":
        return r.template.score < 60;
      default:
        return statusOf(r) === f;
    }
  };
  const fq = foldVi(q.trim());
  const visible = rows.filter((r) => match(r, filter) && (!fq || foldVi(r.title).includes(fq) || foldVi(r.relPath).includes(fq)));
  const counts = useMemo(() => Object.fromEntries(FILTERS.map(([f]) => [f, rows.filter((r) => match(r, f)).length])), [rows, reviews, lessons]); // eslint-disable-line react-hooks/exhaustive-deps
  const seen = rows.filter((r) => statusOf(r) !== "none").length;
  const avgTemplate = rows.length ? Math.round(rows.reduce((s, r) => s + r.template.score, 0) / rows.length) : 0;

  const mark = (r: ReviewRow, st: ReviewStatus | "none") =>
    setReview(r.id, st === "none" ? null : { status: st, note: reviews[r.id]?.note, courseId: course.id, fileMtime: r.mtime });
  const bulk = (st: ReviewStatus) => {
    if (!confirm(`Đánh dấu ${visible.length} bài đang hiển thị là “${REVIEW_LABEL[st]}”?`)) return;
    for (const r of visible) mark(r, st);
  };

  return (
    <main id="main" className="mx-auto max-w-7xl px-4 pt-6 pb-20 sm:px-6">
      <Link href={`/courses/${course.slug}`} className="inline-flex items-center gap-1 text-sm text-muted hover:text-text"><ChevronLeft className="size-4" /> {course.title}</Link>
      <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Bảng biên tập</h1>
      <p className="mt-1 text-sm text-muted">
        Đã xem {seen}/{rows.length} bài · khớp template trung bình {avgTemplate}% · lỗi tự phát hiện ở {rows.filter((r) => r.issues.length).length} bài
      </p>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-surface-3">
        <div className="h-full bg-info transition-all" style={{ width: `${rows.length ? (seen / rows.length) * 100 : 0}%` }} />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {FILTERS.map(([f, label]) => (
          <button key={f} onClick={() => setFilter(f)} className={cn("rounded-full border px-3 py-1 text-xs", filter === f ? "border-accent bg-accent-soft font-semibold text-accent-ink" : "border-border text-text-2")}>
            {label} <span className="text-muted tabular-nums">{counts[f]}</span>
          </button>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <label className="flex h-9 flex-1 items-center gap-2 rounded-xl border border-border bg-surface px-3 sm:max-w-xs">
          <Search className="size-4 text-muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Lọc theo tên bài / đường dẫn" className="flex-1 bg-transparent text-sm outline-none" aria-label="Lọc bài" />
        </label>
        <span className="text-xs text-muted">Đánh dấu hàng loạt {visible.length} bài:</span>
        {(["read", "needs_edit"] as const).map((st) => (
          <button key={st} onClick={() => bulk(st)} disabled={!visible.length} className="rounded-lg border border-border px-2.5 py-1 text-xs hover:bg-surface-2 disabled:opacity-40">
            {REVIEW_LABEL[st]}
          </button>
        ))}
      </div>

      <div className="mt-4 overflow-x-auto rounded-2xl border border-border bg-surface">
        <table className="w-full min-w-[56rem] text-sm">
          <thead className="bg-surface-2 text-left text-xs text-muted">
            <tr>
              <th className="px-3 py-2 font-medium">#</th>
              <th className="px-3 py-2 font-medium">Bài học</th>
              <th className="px-3 py-2 font-medium">Học</th>
              <th className="px-3 py-2 font-medium">Biên tập</th>
              <th className="px-3 py-2 font-medium">Khớp template</th>
              <th className="px-3 py-2 font-medium">Câu hỏi</th>
              <th className="px-3 py-2 font-medium" />
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {visible.map((r) => {
              const st = statusOf(r);
              return (
                <tr key={r.id} className="align-top hover:bg-surface-2/40">
                  <td className="px-3 py-2.5 text-xs text-muted tabular-nums">{r.ord}</td>
                  <td className="max-w-[26rem] px-3 py-2.5">
                    <Link href={`/learn/${course.slug}/${r.slug}`} className="font-medium hover:text-accent">{r.title}</Link>
                    <p className="truncate text-xs text-muted">{r.moduleOrd ? `${r.moduleOrd}. ` : ""}{r.moduleTitle}</p>
                    <p className="truncate font-mono text-[11px] text-muted" title={r.relPath}>{r.relPath}</p>
                    {r.issues.map((i, k) => (
                      <p key={k} className={cn("mt-0.5 flex items-center gap-1 text-xs", i.severity === "error" ? "text-danger" : "text-amber")}><AlertTriangle className="size-3" />{i.message}</p>
                    ))}
                    {changed(r) ? <p className="mt-0.5 text-xs text-amber">File đã đổi sau khi đánh dấu</p> : null}
                    {reviews[r.id]?.note ? <p className="mt-1 rounded bg-surface-2 px-2 py-0.5 text-xs text-text-2">{reviews[r.id]!.note}</p> : null}
                  </td>
                  <td className="px-3 py-2.5">{lessons[r.id]?.status === "completed" ? <CheckCircle2 className="size-4 text-success" aria-label="Đã học" /> : <Circle className="size-4 text-border-strong" aria-label="Chưa học" />}</td>
                  <td className="px-3 py-2.5">
                    <select value={st} onChange={(e) => mark(r, e.target.value as ReviewStatus | "none")} className={cn("rounded-lg border bg-bg-elevated px-2 py-1 text-xs", st === "needs_edit" ? "border-danger/50 text-danger" : st === "edited" ? "border-success/50 text-success" : st === "read" ? "border-info/50 text-info" : "border-border text-muted")} aria-label="Trạng thái biên tập">
                      {(["none", "read", "needs_edit", "edited"] as const).map((s) => <option key={s} value={s}>{REVIEW_LABEL[s]}</option>)}
                    </select>
                  </td>
                  <td className="px-3 py-2.5">
                    <span className={cn("font-semibold tabular-nums", r.template.score >= 80 ? "text-success" : r.template.score >= 60 ? "text-amber" : "text-danger")}>{r.template.score}%</span>
                    {r.template.missing.filter((m) => m.required).length ? (
                      <p className="mt-0.5 max-w-[14rem] text-[11px] leading-snug text-muted">Thiếu: {r.template.missing.filter((m) => m.required).map((m) => m.label).join(", ")}</p>
                    ) : null}
                  </td>
                  <td className="px-3 py-2.5 text-xs text-muted tabular-nums">{r.gradable}/{r.questions}</td>
                  <td className="px-3 py-2.5">
                    {r.editHref ? (
                      <Link href={`/edit/${course.slug}/${r.slug}`} className="inline-flex items-center gap-1 rounded-lg border border-accent/40 bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent-ink"><FilePen className="size-3.5" /> Sửa</Link>
                    ) : null}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {!visible.length ? <p className="p-8 text-center text-sm text-muted">Không có bài nào khớp bộ lọc.</p> : null}
      </div>
    </main>
  );
}
