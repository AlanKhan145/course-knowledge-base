"use client";
import { Illustration } from "@/components/Illustration";
import * as Dialog from "@radix-ui/react-dialog";
import MiniSearch from "minisearch";
import { ChevronRight, Filter, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import type { CourseSummary, DomainSummary } from "@/lib/content/types";
import { foldVi } from "@/lib/content/text";
import { domainStyle } from "@/lib/domain-style";
import { cn, LANG_LABEL, LEVEL_LABEL } from "@/lib/utils";
import { useLearner } from "@/features/progress/store";
import { CourseCard } from "./CourseCard";

type Sort = "default" | "title" | "updated" | "progress" | "lessons";
type Status = "all" | "new" | "learning" | "done";

export function Explore({ courses, domains }: { courses: CourseSummary[]; domains: DomainSummary[] }) {
  const sp = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const domain = sp.get("domain") ?? "";
  const category = sp.get("cat") ?? "";
  const sort = (sp.get("sort") as Sort) ?? "default";
  const [q, setQ] = useState(sp.get("q") ?? "");
  const [lang, setLang] = useState("");
  const [level, setLevel] = useState("");
  const [status, setStatus] = useState<Status>("all");
  const [limit, setLimit] = useState(48);
  const [drawer, setDrawer] = useState(false);
  const lessons = useLearner((s) => s.lessons);

  const setParam = (k: string, v: string) => {
    const p = new URLSearchParams(sp.toString());
    if (v) p.set(k, v);
    else p.delete(k);
    if (k === "domain") p.delete("cat");
    router.replace(`${pathname}?${p.toString()}`, { scroll: false });
    setLimit(48);
  };

  const doneByCourse = useMemo(() => {
    const m = new Map<string, number>();
    for (const k in lessons) if (lessons[k].status === "completed") m.set(lessons[k].courseId, (m.get(lessons[k].courseId) ?? 0) + 1);
    return m;
  }, [lessons]);
  const startedByCourse = useMemo(() => {
    const m = new Set<string>();
    for (const k in lessons) m.add(lessons[k].courseId);
    return m;
  }, [lessons]);

  const index = useMemo(() => {
    const ms = new MiniSearch<CourseSummary>({
      fields: ["title", "extra"],
      extractField: (doc, field) => (field === "extra" ? `${doc.categoryTitle} ${doc.subcategoryTitle ?? ""} ${doc.domainTitle} ${doc.tags.join(" ")} ${doc.slug.replace(/-/g, " ")}` : String((doc as unknown as Record<string, unknown>)[field] ?? "")),
      processTerm: (t) => foldVi(t),
      searchOptions: { boost: { title: 3 }, fuzzy: 0.2, prefix: true },
    });
    ms.addAll(courses);
    return ms;
  }, [courses]);

  const filtered = useMemo(() => {
    let list = courses;
    if (q.trim().length >= 2) {
      const hits = index.search(q.trim());
      const rank = new Map(hits.map((h, i) => [h.id as string, i]));
      list = list.filter((c) => rank.has(c.id)).sort((a, b) => rank.get(a.id)! - rank.get(b.id)!);
    }
    if (domain) list = list.filter((c) => c.domainId === domain);
    if (category) list = list.filter((c) => c.categoryId === category || c.subcategoryId === category);
    if (lang) list = list.filter((c) => c.language === lang);
    if (level) list = list.filter((c) => (level === "none" ? !c.level : c.level === level));
    if (status !== "all")
      list = list.filter((c) => {
        const d = doneByCourse.get(c.id) ?? 0;
        if (status === "done") return c.lessonCount > 0 && d >= c.lessonCount;
        if (status === "learning") return startedByCourse.has(c.id) && d < c.lessonCount;
        return !startedByCourse.has(c.id);
      });
    const pct = (c: CourseSummary) => (c.lessonCount ? (doneByCourse.get(c.id) ?? 0) / c.lessonCount : 0);
    if (sort === "title") list = [...list].sort((a, b) => a.title.localeCompare(b.title, "vi"));
    if (sort === "updated") list = [...list].sort((a, b) => b.updatedAt - a.updatedAt);
    if (sort === "progress") list = [...list].sort((a, b) => pct(b) - pct(a));
    if (sort === "lessons") list = [...list].sort((a, b) => b.lessonCount - a.lessonCount);
    return list;
  }, [courses, q, index, domain, category, lang, level, status, sort, doneByCourse, startedByCourse]);

  const currentDomain = domains.find((d) => d.id === domain);
  const langs = [...new Set(courses.map((c) => c.language))];

  const filters = (
    <div className="space-y-6 text-sm">
      <FilterGroup title="Lĩnh vực">
        <Choice active={!domain} onClick={() => setParam("domain", "")} label="Tất cả" count={courses.length} />
        {domains.map((d) => (
          <Choice key={d.id} active={domain === d.id} onClick={() => setParam("domain", d.id)} label={d.title} count={d.courseCount} />
        ))}
      </FilterGroup>
      {currentDomain ? (
        <FilterGroup title="Chuyên ngành">
          <Choice active={!category} onClick={() => setParam("cat", "")} label="Tất cả" />
          {currentDomain.categories.map((c) => (
            <Choice key={c.id} active={category === c.id} onClick={() => setParam("cat", c.id)} label={c.title} count={c.courseCount} indent={!!c.parentId} />
          ))}
        </FilterGroup>
      ) : null}
      <FilterGroup title="Trạng thái học">
        {(["all", "new", "learning", "done"] as Status[]).map((st) => (
          <Choice key={st} active={status === st} onClick={() => setStatus(st)} label={{ all: "Tất cả", new: "Chưa học", learning: "Đang học", done: "Hoàn thành" }[st]} />
        ))}
      </FilterGroup>
      <FilterGroup title="Ngôn ngữ">
        <Choice active={!lang} onClick={() => setLang("")} label="Tất cả" />
        {langs.map((l) => (
          <Choice key={l} active={lang === l} onClick={() => setLang(l)} label={LANG_LABEL[l] ?? l} count={courses.filter((c) => c.language === l).length} />
        ))}
      </FilterGroup>
      <FilterGroup title="Trình độ">
        <Choice active={!level} onClick={() => setLevel("")} label="Tất cả" />
        {["beginner", "intermediate", "advanced"].map((l) => (
          <Choice key={l} active={level === l} onClick={() => setLevel(l)} label={LEVEL_LABEL[l]} count={courses.filter((c) => c.level === l).length} />
        ))}
        <Choice active={level === "none"} onClick={() => setLevel("none")} label="Chưa phân loại" />
      </FilterGroup>
    </div>
  );

  return (
    <main id="main" className="mx-auto max-w-7xl px-4 pt-6 pb-20 sm:px-6">
      <nav className="mb-2 flex items-center gap-1 text-xs text-muted" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-text">Trang chủ</Link>
        <ChevronRight className="size-3" />
        <Link href="/explore" className="hover:text-text">Khám phá</Link>
        {currentDomain ? (
          <>
            <ChevronRight className="size-3" />
            <span>{currentDomain.title}</span>
          </>
        ) : null}
      </nav>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="flex items-center gap-3 text-2xl font-bold tracking-tight sm:text-3xl">
            {currentDomain ? <DomainIcon title={currentDomain.title} /> : null}
            {currentDomain?.title ?? "Khám phá khóa học"}
          </h1>
          <p className="mt-1 text-sm text-muted">{filtered.length.toLocaleString("vi-VN")} khóa học</p>
        </div>
        <div className="flex flex-wrap gap-2 sm:flex-nowrap">
          <label className="flex h-10 w-full items-center gap-2 rounded-xl border border-border bg-surface px-3 sm:w-80">
            <Search className="size-4 text-muted" />
            <input value={q} onChange={(e) => (setQ(e.target.value), setLimit(48))} placeholder="Lọc theo tên (không dấu cũng được)" className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted" aria-label="Lọc khóa học theo tên" />
            {q ? (
              <button onClick={() => setQ("")} aria-label="Xóa">
                <X className="size-4 text-muted" />
              </button>
            ) : null}
          </label>
          <select value={sort} onChange={(e) => setParam("sort", e.target.value === "default" ? "" : e.target.value)} className="h-10 min-w-0 flex-1 rounded-xl border border-border bg-surface px-2 text-sm sm:flex-none" aria-label="Sắp xếp">
            <option value="default">Theo danh mục</option>
            <option value="title">Tên A–Z</option>
            <option value="updated">Mới cập nhật</option>
            <option value="progress">Tiến độ</option>
            <option value="lessons">Nhiều bài nhất</option>
          </select>
          <button onClick={() => setDrawer(true)} className="flex h-10 items-center gap-1.5 rounded-xl border border-border bg-surface px-3 text-sm lg:hidden">
            <Filter className="size-4" /> Lọc
          </button>
        </div>
      </div>
      <div className="grid gap-8 lg:grid-cols-[15rem_1fr]">
        <aside className="hidden lg:block" aria-label="Bộ lọc">
          <div className="sticky top-20 max-h-[calc(100dvh-6rem)] overflow-y-auto pr-2 scrollbar-thin">{filters}</div>
        </aside>
        <section>
          {filtered.length ? (
            <>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.slice(0, limit).map((c) => (
                  <CourseCard key={c.id} c={c} />
                ))}
              </div>
              {filtered.length > limit ? (
                <div className="mt-8 text-center">
                  <button onClick={() => setLimit((l) => l + 48)} className="rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-semibold hover:bg-surface-2">
                    Xem thêm ({(filtered.length - limit).toLocaleString("vi-VN")} khóa)
                  </button>
                </div>
              ) : null}
            </>
          ) : (
            <div className="rounded-2xl border border-dashed border-border-strong p-12 text-center">
              <Illustration name="empty-search" className="mx-auto mb-3 h-36 w-auto" />
              <p className="font-semibold">Không có khóa học phù hợp</p>
              <p className="mt-1 text-sm text-muted">Thử bỏ bớt bộ lọc, hoặc tìm theo nội dung bài học bằng Ctrl + K.</p>
            </div>
          )}
        </section>
      </div>
      <Dialog.Root open={drawer} onOpenChange={setDrawer}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40" />
          <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-[min(20rem,88vw)] overflow-y-auto border-l border-border bg-surface p-5" aria-describedby={undefined}>
            <div className="mb-4 flex items-center justify-between">
              <Dialog.Title className="font-semibold">Bộ lọc</Dialog.Title>
              <Dialog.Close aria-label="Đóng"><X className="size-5" /></Dialog.Close>
            </div>
            {filters}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </main>
  );
}

function DomainIcon({ title }: { title: string }) {
  const { icon: Icon, hue } = domainStyle(title);
  return (
    <span className="flex size-10 items-center justify-center rounded-xl" style={{ background: `hsl(${hue} 45% 90%)`, color: `hsl(${hue} 45% 30%)` }}>
      <Icon className="size-5" />
    </span>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold tracking-wide text-muted uppercase">{title}</p>
      <ul className="space-y-0.5">{children}</ul>
    </div>
  );
}

function Choice({ active, onClick, label, count, indent }: { active: boolean; onClick: () => void; label: string; count?: number; indent?: boolean }) {
  return (
    <li>
      <button onClick={onClick} className={cn("flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-1.5 text-left", indent && "pl-6", active ? "bg-accent-soft font-medium text-accent-ink" : "text-text-2 hover:bg-surface-2")} aria-pressed={active}>
        <span className="min-w-0 truncate">{label}</span>
        {count !== undefined ? <span className="text-xs text-muted tabular-nums">{count}</span> : null}
      </button>
    </li>
  );
}
