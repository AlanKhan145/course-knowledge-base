import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, FileText, Search } from "lucide-react";
import { listDomains, search } from "@/lib/content/repository";
import { Snippet } from "@/features/search/Snippet";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Tìm kiếm" };

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string; domain?: string }> }) {
  const { q = "", domain = "" } = await searchParams;
  const res = q.trim() ? await search(q, { limit: 40, domainId: domain || undefined }) : null;
  const domains = listDomains();
  const hl = encodeURIComponent(res?.terms.join(" ") ?? "");
  return (
    <main id="main" className="mx-auto max-w-4xl px-4 pt-8 pb-20 sm:px-6">
      <form action="/search" className="flex flex-col gap-2 sm:flex-row">
        <label className="flex h-12 flex-1 items-center gap-3 rounded-2xl border border-border-strong bg-surface px-4">
          <Search className="size-5 text-accent" />
          <input name="q" defaultValue={q} autoFocus placeholder="Tìm trong tên khóa, module, bài học và nội dung…" className="flex-1 bg-transparent outline-none" aria-label="Từ khóa" />
        </label>
        <select name="domain" defaultValue={domain} className="h-12 rounded-2xl border border-border bg-surface px-3 text-sm" aria-label="Lĩnh vực">
          <option value="">Mọi lĩnh vực</option>
          {domains.map((d) => <option key={d.id} value={d.id}>{d.title}</option>)}
        </select>
        <button className="h-12 rounded-2xl bg-accent px-5 font-semibold text-white dark:text-bg">Tìm</button>
      </form>
      {res ? (
        <>
          <p className="mt-4 text-sm text-muted">{res.courses.length + res.lessons.length} kết quả · {res.tookMs} ms · tìm không dấu: <b>{res.terms.join(" ")}</b></p>
          {res.courses.length ? (
            <section className="mt-6">
              <h2 className="mb-2 text-sm font-semibold tracking-wide text-muted uppercase">Khóa học</h2>
              <ul className="grid gap-2 sm:grid-cols-2">
                {res.courses.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/courses/${c.slug}`} className="flex gap-3 rounded-xl border border-border bg-surface p-3 hover:border-accent">
                      <BookOpen className="mt-0.5 size-4 shrink-0 text-accent" />
                      <span className="min-w-0">
                        <span className="block font-medium">{c.title}</span>
                        <span className="block truncate text-xs text-muted">{c.matchedIn === "module" ? `Khớp module: ${c.moduleTitle}` : `${c.domainTitle} · ${c.lessonCount} bài`}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
          <section className="mt-8">
            <h2 className="mb-2 text-sm font-semibold tracking-wide text-muted uppercase">Bài học</h2>
            {res.lessons.length ? (
              <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
                {res.lessons.map((l) => (
                  <li key={l.lessonId}>
                    <Link href={`/learn/${l.courseSlug}/${l.lessonSlug}?hl=${hl}`} className="flex gap-3 px-4 py-3 hover:bg-surface-2/50">
                      <FileText className="mt-1 size-4 shrink-0 text-muted" />
                      <span className="min-w-0">
                        <span className="block font-medium">{l.lessonTitle}</span>
                        <span className="block truncate text-xs text-muted">{l.domainTitle} · {l.courseTitle}{l.moduleTitle ? ` · ${l.moduleTitle}` : ""}</span>
                        {l.snippet ? <Snippet parts={l.snippet} className="mt-1 line-clamp-2 text-sm text-text-2" /> : null}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="rounded-2xl border border-dashed border-border-strong p-8 text-center text-muted">Không có bài học nào chứa “{q}”. Thử từ khóa ngắn hơn hoặc bỏ dấu.</p>
            )}
          </section>
        </>
      ) : (
        <p className="mt-10 text-center text-muted">Gõ từ khóa có dấu hoặc không dấu. Mẹo: nhấn <kbd className="rounded border border-border px-1 font-mono text-xs">Ctrl K</kbd> ở bất cứ đâu để tìm nhanh.</p>
      )}
    </main>
  );
}
