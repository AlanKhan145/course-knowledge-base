"use client";
import { AlertTriangle, ArrowRight, FilePen, NotebookPen } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { cn, relativeTime } from "@/lib/utils";
import { REVIEW_LABEL, setReview, useLearner, useLearnerReady, type ReviewStatus } from "@/features/progress/store";

type Info = Record<string, { mtime: number; courseSlug: string; slug: string; title: string; courseTitle: string }>;
const TABS: (ReviewStatus | "changed")[] = ["needs_edit", "read", "edited", "changed"];
const TAB_LABEL = { ...REVIEW_LABEL, changed: "File đổi sau khi đánh dấu" } as Record<string, string>;
const TONE: Record<string, string> = { needs_edit: "text-danger", read: "text-info", edited: "text-success", changed: "text-amber" };

export function ReviewBoard() {
  const reviews = useLearner((s) => s.reviews);
  const progress = useLearner((s) => s.courses);
  const ready = useLearnerReady();
  const [info, setInfo] = useState<Info>({});
  const [tab, setTab] = useState<(typeof TABS)[number]>("needs_edit");
  const ids = useMemo(() => Object.keys(reviews), [reviews]);

  useEffect(() => {
    if (!ids.length) return;
    fetch("/api/lessons/mtimes", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ids }) })
      .then((r) => r.json())
      .then(setInfo)
      .catch(() => undefined);
  }, [ids]);

  const changed = (id: string) => !!info[id] && info[id].mtime > reviews[id].fileMtime + 1000;
  const rows = ids
    .filter((id) => (tab === "changed" ? changed(id) : reviews[id].status === tab))
    .sort((a, b) => reviews[b].at - reviews[a].at);
  const count = (t: (typeof TABS)[number]) => ids.filter((id) => (t === "changed" ? changed(id) : reviews[id].status === t)).length;
  const courseLinks = useMemo(() => {
    const m = new Map<string, { slug: string; title: string; n: number }>();
    for (const id of ids) {
      const i = info[id];
      if (!i) continue;
      const e = m.get(i.courseSlug) ?? { slug: i.courseSlug, title: i.courseTitle, n: 0 };
      e.n++;
      m.set(i.courseSlug, e);
    }
    return [...m.values()].sort((a, b) => b.n - a.n);
  }, [ids, info]);

  return (
    <main id="main" className="mx-auto max-w-6xl px-4 pt-8 pb-20 sm:px-6">
      <header className="mb-6">
        <h1 className="flex items-center gap-3 text-3xl font-bold tracking-tight"><NotebookPen className="size-7 text-accent" /> Biên tập học liệu</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Theo dõi bài nào đã đọc qua, bài nào cần sửa theo <Link href="/templates" className="text-accent underline">template</Link>. Đánh dấu chỉ lưu trên máy này, không thay đổi file. Muốn xem cả bài <b>chưa xem</b>, mở bảng biên tập của từng khóa.
        </p>
      </header>
      <div className="mb-4 flex flex-wrap gap-2" role="tablist">
        {TABS.map((t) => (
          <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)} className={cn("rounded-full border px-3.5 py-1.5 text-sm", tab === t ? "border-accent bg-accent-soft font-semibold text-accent-ink" : "border-border text-text-2 hover:border-border-strong")}>
            <span className={TONE[t]}>●</span> {TAB_LABEL[t]} <span className="ml-1 text-muted tabular-nums">{ready ? count(t) : "…"}</span>
          </button>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_17rem]">
        <section className="overflow-hidden rounded-2xl border border-border bg-surface">
          {!ready ? <div className="skeleton m-4 h-32" /> : null}
          {ready && !rows.length ? (
            <p className="p-8 text-center text-sm text-muted">
              Chưa có bài nào ở mục này. Trong lúc đọc bài, dùng nút <b>Chưa xem ▾</b> ở đầu bài hoặc khung “Đánh dấu biên tập” cuối bài.
            </p>
          ) : null}
          <ul className="divide-y divide-border">
            {rows.map((id) => {
              const r = reviews[id];
              const i = info[id];
              return (
                <li key={id} className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center">
                  <div className="min-w-0 flex-1">
                    {i ? (
                      <Link href={`/learn/${i.courseSlug}/${i.slug}`} className="font-medium hover:text-accent">{i.title}</Link>
                    ) : (
                      <span className="text-muted">Bài không còn trong catalog ({id})</span>
                    )}
                    <p className="truncate text-xs text-muted">{i?.courseTitle} · đánh dấu {relativeTime(r.at)}</p>
                    {r.note ? <p className="mt-1 rounded-lg bg-surface-2 px-2 py-1 text-sm text-text-2">{r.note}</p> : null}
                    {changed(id) ? <p className="mt-1 flex items-center gap-1 text-xs text-amber"><AlertTriangle className="size-3.5" /> File đã thay đổi sau khi đánh dấu</p> : null}
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <select
                      value={r.status}
                      onChange={(e) => setReview(id, { ...r, status: e.target.value as ReviewStatus, fileMtime: i?.mtime ?? r.fileMtime })}
                      className="rounded-lg border border-border bg-bg-elevated px-2 py-1.5 text-xs"
                      aria-label="Trạng thái biên tập"
                    >
                      {(["read", "needs_edit", "edited"] as const).map((s) => <option key={s} value={s}>{REVIEW_LABEL[s]}</option>)}
                    </select>
                    {i ? (
                      <Link href={`/edit/${i.courseSlug}/${i.slug}`} className="inline-flex items-center gap-1 rounded-lg border border-accent/40 bg-accent-soft px-2.5 py-1.5 text-xs font-semibold text-accent-ink">
                        <FilePen className="size-3.5" /> Sửa
                      </Link>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
        <aside className="space-y-3">
          <div className="rounded-2xl border border-border bg-surface p-4">
            <p className="mb-2 text-sm font-semibold">Bảng biên tập theo khóa</p>
            <ul className="space-y-1.5 text-sm">
              {courseLinks.slice(0, 12).map((c) => (
                <li key={c.slug}>
                  <Link href={`/courses/${c.slug}/review`} className="flex items-center justify-between gap-2 hover:text-accent">
                    <span className="min-w-0 truncate">{c.title}</span>
                    <span className="text-xs text-muted">{c.n}</span>
                  </Link>
                </li>
              ))}
              {Object.entries(progress)
                .filter(([cid]) => !courseLinks.some((c) => c.slug === cid))
                .slice(0, 6)
                .map(([cid]) => (
                  <li key={cid}>
                    <Link href={`/courses/${cid}/review`} className="flex items-center justify-between gap-2 text-text-2 hover:text-accent">
                      <span className="min-w-0 truncate">{cid}</span> <ArrowRight className="size-3.5" />
                    </Link>
                  </li>
                ))}
            </ul>
            <p className="mt-3 text-xs text-muted">Mỗi khóa cũng có nút “Bảng biên tập” trên trang chi tiết.</p>
          </div>
          <Link href="/quality" className="block rounded-2xl border border-border bg-surface p-4 text-sm hover:border-border-strong">
            <b>Báo cáo chất lượng tự động</b>
            <span className="mt-1 block text-muted">Khóa thiếu mô tả, liên kết hỏng, bài quá ngắn, câu hỏi lặp mẫu…</span>
          </Link>
        </aside>
      </div>
    </main>
  );
}
