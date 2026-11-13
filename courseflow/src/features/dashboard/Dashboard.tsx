"use client";
import { Illustration } from "@/components/Illustration";
import { ArrowRight, Bookmark, CheckCircle2, Clock, Flame, Heart, PlayCircle, Search, Trophy } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { CourseSummary } from "@/lib/content/types";
import { domainStyle } from "@/lib/domain-style";
import { cn, formatDuration, relativeTime } from "@/lib/utils";
import { CourseCover } from "@/components/CourseCover";
import { CourseCard, ProgressBar } from "@/features/catalog/CourseCard";
import { openCommandPalette } from "@/features/search/palette-bus";
import { streakDays, todayKey, useLearner, useLearnerReady } from "@/features/progress/store";
import { endOfLearningDay } from "@/lib/assessment/fsrs";

interface Props {
  stats: { courses: number; lessons: number; questions: number; gradable: number; lastScan: string | null };
  domains: { id: string; title: string; courseCount: number; lessonCount: number }[];
  recent: CourseSummary[];
  featured: Record<string, CourseSummary[]>;
}

export function Dashboard({ stats, domains, recent, featured }: Props) {
  const s = useLearner((x) => x);
  const ready = useLearnerReady();
  const [mine, setMine] = useState<{ courses: CourseSummary[]; lessonIds: Record<string, string[]> } | null>(null);

  const startedIds = useMemo(
    () => Object.entries(s.courses).sort((a, b) => b[1].lastOpenedAt - a[1].lastOpenedAt).map(([id]) => id),
    [s.courses],
  );
  const favIds = useMemo(() => Object.keys(s.favorites), [s.favorites]);
  const idsKey = [...new Set([...startedIds.slice(0, 12), ...favIds.slice(0, 12)])].join(",");

  useEffect(() => {
    if (!ready || !idsKey) return;
    fetch(`/api/courses?ids=${encodeURIComponent(idsKey)}`)
      .then((r) => r.json())
      .then(setMine)
      .catch(() => setMine({ courses: [], lessonIds: {} }));
  }, [idsKey, ready]);

  const mineData = idsKey ? mine : ready ? { courses: [], lessonIds: {} } : null;
  const byId = new Map((mineData?.courses ?? []).map((c) => [c.id, c]));
  const progressOf = (id: string) => {
    const ids = mineData?.lessonIds[id] ?? [];
    const done = ids.filter((l) => s.lessons[l]?.status === "completed").length;
    return { done, total: ids.length, pct: ids.length ? Math.round((done / ids.length) * 100) : 0 };
  };
  const last = startedIds[0] ? s.courses[startedIds[0]] : null;
  const lastCourse = startedIds[0] ? byId.get(startedIds[0]) : undefined;

  const completed = Object.values(s.lessons).filter((l) => l.status === "completed").length;
  const weekSec = useMemo(() => {
    let t = 0;
    const d = new Date();
    for (let i = 0; i < 7; i++) {
      t += s.activity[todayKey(d)] ?? 0;
      d.setDate(d.getDate() - 1);
    }
    return t;
  }, [s.activity]);
  const streak = streakDays(s.activity);
  const dueEnd = endOfLearningDay();
  const dueCount = Object.values(s.cards).filter((c) => !c.suspended && c.due <= dueEnd).length;
  const hasActivity = Object.keys(s.activity).length > 0;
  const attempts = s.attempts.slice(-5).reverse();
  const bookmarks = Object.entries(s.bookmarks).sort((a, b) => b[1].at - a[1].at).slice(0, 5);
  const interestDomains = [...new Set((mineData?.courses ?? []).map((c) => c.domainId))];
  const suggestions = (interestDomains.length ? interestDomains : Object.keys(featured).slice(0, 3))
    .flatMap((d) => featured[d] ?? [])
    .filter((c) => !s.courses[c.id])
    .slice(0, 4);

  return (
    <main id="main" className="mx-auto max-w-7xl px-4 pt-8 pb-20 sm:px-6">
      {/* hero */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-surface px-5 py-8 sm:px-10 sm:py-12">
        <div className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-accent-soft blur-2xl" aria-hidden />
        <div className="pointer-events-none absolute -bottom-32 right-40 size-64 rounded-full bg-amber-soft blur-2xl" aria-hidden />
        <Illustration name="hero-study" className="absolute top-1/2 right-8 hidden w-[34%] max-w-md -translate-y-1/2 rounded-2xl border border-border shadow-card lg:block" />
        <div className="relative max-w-2xl">
          <p className="text-sm font-medium text-accent">CourseFlow · Personal Learning Hub</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-balance sm:text-[2.6rem] sm:leading-[1.1]">Học có hệ thống từ {stats.courses.toLocaleString("vi-VN")} khóa học của bạn</h1>
          <p className="mt-3 text-muted">
            {stats.lessons.toLocaleString("vi-VN")} bài học · {stats.gradable.toLocaleString("vi-VN")} câu hỏi ôn tập có đáp án — tất cả đọc trực tiếp từ kho Markdown, không chỉnh sửa file gốc.
          </p>
          <button
            type="button"
            onClick={() => openCommandPalette()}
            className="mt-6 flex h-13 w-full items-center gap-3 rounded-2xl border border-border-strong bg-bg-elevated px-4 text-left text-muted shadow-card transition hover:border-accent"
          >
            <Search className="size-5 text-accent" />
            <span className="flex-1">Tìm khóa học, bài học, nội dung… (có dấu hoặc không dấu)</span>
            <kbd className="hidden rounded-md border border-border px-2 py-0.5 font-mono text-xs sm:inline">Ctrl K</kbd>
          </button>
        </div>
      </section>

      {/* domains */}
      <nav className="mt-6 flex gap-2 overflow-x-auto pb-1 scrollbar-thin" aria-label="Lĩnh vực">
        {domains.map((d) => {
          const { icon: Icon, hue } = domainStyle(d.title);
          return (
            <Link key={d.id} href={`/explore?domain=${d.id}`} className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-surface py-1.5 pr-3.5 pl-1.5 text-sm transition hover:border-border-strong">
              <span className="flex size-7 items-center justify-center rounded-full" style={{ background: `hsl(${hue} 45% 90%)`, color: `hsl(${hue} 45% 30%)` }}>
                <Icon className="size-3.5" />
              </span>
              <span className="font-medium">{d.title}</span>
              <span className="text-xs text-muted tabular-nums">{d.courseCount}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_20rem]">
        <div className="min-w-0 space-y-10">
          {/* today: review queue + 7-day activity (real data only) */}
          {ready ? (
            <section className="grid gap-4 sm:grid-cols-[1fr_1.2fr]" aria-label="Hôm nay">
              <Link href="/practice" className="group flex flex-col justify-between rounded-2xl border border-accent/30 bg-accent-soft p-5 transition hover:border-accent">
                <p className="text-sm font-medium text-accent-ink">Ôn tập hôm nay</p>
                <p className="mt-1 text-3xl font-bold tabular-nums text-text">
                  {dueCount} <span className="text-base font-medium text-text-2">câu cần ôn</span>
                </p>
                <p className="mt-1 text-xs text-text-2">{dueCount ? "Theo lịch giãn cách FSRS — câu dễ quên nhất trước." : Object.keys(s.cards).length ? "Đã ôn hết phần đến hạn. Quay lại sau nhé." : "Làm câu hỏi cuối mỗi bài để bắt đầu lịch ôn."}</p>
                <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-xl border border-accent/40 bg-surface px-3 py-1.5 text-sm font-semibold text-accent">
                  {dueCount ? "Bắt đầu ôn" : "Ôn ngẫu nhiên"} <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1.5 text-text-2"><Flame className="size-4 text-amber" /> {hasActivity ? `${streak} ngày liên tiếp` : "Chưa có ngày học"}</span>
                  <span className="flex items-center gap-1.5 text-text-2"><Clock className="size-4 text-info" /> {hasActivity ? `${formatDuration(weekSec)} tuần này` : "0 phút"}</span>
                </div>
                <WeekBars activity={s.activity} />
              </div>
            </section>
          ) : null}

          {/* continue */}
          {!ready ? (
            <div className="skeleton h-40" />
          ) : last && lastCourse ? (
            <section aria-labelledby="continue">
              <h2 id="continue" className="mb-3 text-lg font-semibold">Tiếp tục học</h2>
              <Link href={`/learn/${lastCourse.slug}/${last.lastLessonSlug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition hover:border-accent sm:flex-row">
                <CourseCover id={lastCourse.id} domainTitle={lastCourse.domainTitle} className="h-28 sm:h-auto sm:w-56" />
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <p className="text-xs text-muted">{lastCourse.title} · {relativeTime(last.lastOpenedAt)}</p>
                  <p className="text-lg leading-snug font-semibold">{last.lastLessonTitle}</p>
                  <div className="mt-auto flex items-center gap-3">
                    <ProgressBar value={progressOf(lastCourse.id).pct} className="flex-1" />
                    <span className="text-xs text-muted tabular-nums">
                      {progressOf(lastCourse.id).done}/{progressOf(lastCourse.id).total} bài
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-3 py-2 text-sm font-semibold text-white dark:text-bg">
                      <PlayCircle className="size-4" /> Học tiếp
                    </span>
                  </div>
                </div>
              </Link>
            </section>
          ) : (
            <section className="flex flex-col items-start gap-3 rounded-2xl border border-dashed border-border-strong p-6 sm:flex-row sm:items-center">
              <Illustration name="empty-courses" className="h-24 w-auto shrink-0" />
              <div className="flex-1">
                <p className="font-semibold">Bắt đầu hành trình học</p>
                <p className="text-sm text-muted">Chọn một khóa ở bên dưới hoặc vào Khám phá. Tiến độ được lưu ngay trên máy này.</p>
              </div>
              <Link href="/explore" className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white dark:text-bg">
                Khám phá <ArrowRight className="size-4" />
              </Link>
            </section>
          )}

          {/* in progress */}
          {ready && startedIds.length > 1 && mineData ? (
            <section aria-labelledby="inprogress">
              <h2 id="inprogress" className="mb-3 text-lg font-semibold">Khóa đang học</h2>
              <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
                {startedIds.slice(0, 8).map((id) => {
                  const c = byId.get(id);
                  if (!c) return null;
                  const p = progressOf(id);
                  return (
                    <li key={id}>
                      <Link href={`/courses/${c.slug}`} className="flex items-center gap-4 px-4 py-3 hover:bg-surface-2/60">
                        <CourseCover id={c.id} domainTitle={c.domainTitle} showIcon={false} className="size-10 shrink-0 rounded-lg" />
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-medium">{c.title}</span>
                          <ProgressBar value={p.pct} className="mt-1.5" />
                        </span>
                        <span className="w-16 text-right text-xs text-muted tabular-nums">{p.done}/{p.total}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          ) : null}

          {/* favorites */}
          {ready && favIds.length && mineData ? (
            <section aria-labelledby="favs">
              <h2 id="favs" className="mb-3 flex items-center gap-2 text-lg font-semibold"><Heart className="size-4 text-danger" /> Yêu thích</h2>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {favIds.map((id) => byId.get(id)).filter((c): c is CourseSummary => !!c).slice(0, 6).map((c) => <CourseCard key={c.id} c={c} />)}
              </div>
            </section>
          ) : null}

          <section aria-labelledby="suggest">
            <h2 id="suggest" className="mb-1 text-lg font-semibold">Gợi ý theo lĩnh vực {interestDomains.length ? "bạn đang học" : ""}</h2>
            <p className="mb-3 text-sm text-muted">Các khóa có nhiều câu hỏi ôn tập nhất trong lĩnh vực.</p>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{suggestions.map((c) => <CourseCard key={c.id} c={c} compact />)}</div>
          </section>

          <section aria-labelledby="recent">
            <div className="mb-3 flex items-end justify-between">
              <h2 id="recent" className="text-lg font-semibold">Mới cập nhật</h2>
              <Link href="/explore?sort=updated" className="text-sm text-accent hover:underline">Xem tất cả</Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{recent.map((c) => <CourseCard key={c.id} c={c} compact />)}</div>
          </section>
        </div>

        {/* side column */}
        <aside className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Stat icon={<CheckCircle2 className="size-4 text-success" />} label="Bài đã học" value={ready ? completed.toLocaleString("vi-VN") : "—"} />
            <Stat icon={<Clock className="size-4 text-info" />} label="7 ngày qua" value={ready ? (hasActivity ? formatDuration(weekSec) : "Chưa có") : "—"} />
            <Stat icon={<Flame className="size-4 text-amber" />} label="Chuỗi ngày" value={ready ? (hasActivity ? `${streak} ngày` : "Chưa có") : "—"} />
            <Stat icon={<Trophy className="size-4 text-violet" />} label="Lần làm quiz" value={ready ? String(s.attempts.length) : "—"} />
          </div>


          {attempts.length ? (
            <div className="rounded-2xl border border-border bg-surface p-4">
              <p className="mb-2 text-sm font-semibold">Kết quả gần đây</p>
              <ul className="space-y-2">
                {attempts.map((a) => (
                  <li key={a.id} className="flex items-center justify-between gap-2 text-sm">
                    <span className="min-w-0 truncate text-text-2">{a.title}</span>
                    <b className={cn("tabular-nums", a.percent >= 80 ? "text-success" : a.percent >= 50 ? "text-amber" : "text-danger")}>{a.percent}%</b>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {bookmarks.length ? (
            <div className="rounded-2xl border border-border bg-surface p-4">
              <p className="mb-2 flex items-center gap-2 text-sm font-semibold"><Bookmark className="size-4 text-amber" /> Bài đã lưu</p>
              <ul className="space-y-2">
                {bookmarks.map(([id, b]) => (
                  <li key={id}>
                    <Link href={`/learn/${b.courseSlug}/${b.lessonSlug}`} className="block text-sm leading-snug hover:text-accent">
                      {b.lessonTitle}
                      <span className="block truncate text-xs text-muted">{b.courseTitle}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {stats.lastScan ? <p className="px-1 text-xs text-muted">Catalog quét lúc {new Date(stats.lastScan).toLocaleString("vi-VN")}</p> : null}
        </aside>
      </div>
    </main>
  );
}

function WeekBars({ activity }: { activity: Record<string, number> }) {
  const days: { key: string; label: string; sec: number }[] = [];
  const d = new Date();
  d.setDate(d.getDate() - 6);
  for (let i = 0; i < 7; i++) {
    days.push({ key: todayKey(d), label: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"][d.getDay()], sec: activity[todayKey(d)] ?? 0 });
    d.setDate(d.getDate() + 1);
  }
  const max = Math.max(600, ...days.map((x) => x.sec));
  return (
    <div className="mt-4 flex h-20 items-end gap-2" role="img" aria-label={`Thời gian học 7 ngày: ${days.map((x) => `${x.label} ${Math.round(x.sec / 60)} phút`).join(", ")}`}>
      {days.map((x, i) => (
        <div key={x.key} className="flex flex-1 flex-col items-center gap-1">
          <div className={cn("w-full max-w-7 rounded-md", x.sec ? (i === 6 ? "bg-accent" : "bg-amber") : "bg-surface-3")} style={{ height: `${Math.max(6, (x.sec / max) * 56)}px` }} title={`${Math.round(x.sec / 60)} phút`} />
          <span className="text-[10px] text-muted">{x.label}</span>
        </div>
      ))}
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-3.5">
      <p className="flex items-center gap-1.5 text-xs text-muted">{icon}{label}</p>
      <p className="mt-1 text-lg font-semibold tabular-nums">{value}</p>
    </div>
  );
}
