"use client";
import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { foldVi } from "@/lib/content/text";
import { cn } from "@/lib/utils";

export interface QualityCourse {
  id: string;
  title: string;
  domain: string;
  category: string;
  status: string;
  score: number;
  label: string;
  scores: Record<string, number>;
  metrics: Record<string, number>;
  suggestions: { code: string; severity: string; text: string; refs: { id: string; title: string; path: string }[]; more: number }[];
}

const AREA: Record<string, string> = { metadata: "Metadata", structure: "Cấu trúc", titles: "Tiêu đề", exercises: "Bài tập & câu hỏi", examples: "Ví dụ", links: "Liên kết", readability: "Khả năng đọc" };

export function QualityTable({ courses }: { courses: QualityCourse[] }) {
  const [q, setQ] = useState("");
  const [domain, setDomain] = useState("");
  const [open, setOpen] = useState<string | null>(null);
  const domains = useMemo(() => [...new Set(courses.map((c) => c.domain))], [courses]);
  const fq = foldVi(q.trim());
  const list = courses
    .filter((c) => (!domain || c.domain === domain) && (!fq || foldVi(c.title).includes(fq)))
    .sort((a, b) => a.score - b.score);
  return (
    <div className="mt-6">
      <div className="mb-3 flex flex-wrap gap-2">
        <label className="flex h-10 flex-1 items-center gap-2 rounded-xl border border-border bg-surface px-3 sm:max-w-sm">
          <Search className="size-4 text-muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Lọc khóa học" className="flex-1 bg-transparent text-sm outline-none" aria-label="Lọc khóa học" />
        </label>
        <select value={domain} onChange={(e) => setDomain(e.target.value)} className="h-10 rounded-xl border border-border bg-surface px-2 text-sm" aria-label="Lĩnh vực">
          <option value="">Mọi lĩnh vực</option>
          {domains.map((d) => <option key={d}>{d}</option>)}
        </select>
        <span className="self-center text-sm text-muted">{list.length} khóa, xếp từ điểm thấp nhất</span>
      </div>
      <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
        {list.slice(0, 200).map((c) => (
          <li key={c.id}>
            <button onClick={() => setOpen(open === c.id ? null : c.id)} className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-surface-2/50" aria-expanded={open === c.id}>
              <span className={cn("w-12 text-right text-lg font-bold tabular-nums", c.score >= 80 ? "text-success" : c.score >= 65 ? "text-amber" : "text-danger")}>{Math.round(c.score)}</span>
              <span className="min-w-0 flex-1">
                <span className="block truncate font-medium">{c.title}</span>
                <span className="block truncate text-xs text-muted">{c.domain} · {c.category} · {c.metrics.lessons} bài · {c.suggestions.length} đề xuất</span>
              </span>
              <ChevronDown className={cn("size-4 text-muted transition-transform", open !== c.id && "-rotate-90")} />
            </button>
            {open === c.id ? (
              <div className="space-y-4 border-t border-border bg-bg-elevated px-4 py-4 sm:pl-19">
                <div className="flex flex-wrap gap-2">
                  {Object.entries(c.scores).map(([k, v]) => (
                    <span key={k} className="rounded-lg bg-surface-2 px-2 py-1 text-xs">{AREA[k] ?? k}: <b className={cn(v >= 80 ? "text-success" : v >= 50 ? "text-amber" : "text-danger")}>{Math.round(v)}</b></span>
                  ))}
                </div>
                <ul className="space-y-3">
                  {c.suggestions.map((s, i) => (
                    <li key={i} className="text-sm">
                      <p className={cn("font-medium", s.severity === "high" ? "text-danger" : s.severity === "medium" ? "text-amber" : "text-text-2")}>{s.text}</p>
                      {s.refs.length ? (
                        <ul className="mt-1 space-y-0.5 pl-4 text-xs text-muted">
                          {s.refs.slice(0, 6).map((r) => (
                            <li key={r.id} className="truncate">
                              <Link href={`/courses/${c.id}/review`} className="hover:text-accent">{r.title}</Link> <span className="font-mono opacity-70">{r.path}</span>
                            </li>
                          ))}
                          {s.more || s.refs.length > 6 ? <li>… và {s.more + Math.max(0, s.refs.length - 6)} bài khác</li> : null}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <Link href={`/courses/${c.id}`} className="rounded-lg border border-border px-3 py-1.5 text-xs">Trang khóa học</Link>
                  <Link href={`/courses/${c.id}/review`} className="rounded-lg border border-accent/40 bg-accent-soft px-3 py-1.5 text-xs font-semibold text-accent-ink">Bảng biên tập</Link>
                </div>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
