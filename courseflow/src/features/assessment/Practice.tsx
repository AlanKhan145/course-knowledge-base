"use client";
import { Illustration } from "@/components/Illustration";
import { Dices, Loader2, Shuffle, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { CourseSummary } from "@/lib/content/types";
import type { Quiz } from "@/lib/assessment/schema";
import { cn, relativeTime } from "@/lib/utils";
import { useLearner, useLearnerReady, type LearnerState } from "@/features/progress/store";
import { endOfLearningDay, retrievability } from "@/lib/assessment/fsrs";
import { QuizRunner } from "./QuizRunner";

type Source = "learned" | "read" | "both" | "bookmarked" | "needs_edit";

const SOURCE_LABEL: Record<Source, string> = {
  learned: "Bài đã học",
  read: "Bài đã đọc qua",
  both: "Đã học + đã đọc qua",
  bookmarked: "Bài đã lưu",
  needs_edit: "Bài đánh dấu cần sửa",
};

function lessonsFor(s: LearnerState, source: Source): { id: string; courseId: string }[] {
  const out = new Map<string, string>();
  if (source === "learned" || source === "both") for (const [id, l] of Object.entries(s.lessons)) if (l.status === "completed") out.set(id, l.courseId);
  if (source === "read" || source === "both") for (const [id, r] of Object.entries(s.reviews)) if (r.status === "read" || r.status === "edited") out.set(id, r.courseId);
  if (source === "bookmarked") for (const [id, b] of Object.entries(s.bookmarks)) out.set(id, b.courseId);
  if (source === "needs_edit") for (const [id, r] of Object.entries(s.reviews)) if (r.status === "needs_edit") out.set(id, r.courseId);
  return [...out.entries()].map(([id, courseId]) => ({ id, courseId }));
}

interface PoolResponse {
  questions: { question: Quiz["questions"][number]; lessonId: string; courseId: string; lessonTitle: string; href: string; courseTitle: string }[];
  lessonsUsed: number;
  available: number;
}

export function Practice() {
  const s = useLearner((x) => x);
  const ready = useLearnerReady();
  const [source, setSource] = useState<Source>("learned");
  const [course, setCourse] = useState("");
  const [count, setCount] = useState(10);
  const [shuffleQ, setShuffleQ] = useState(true);
  const [shuffleO, setShuffleO] = useState(true);
  const [mode, setMode] = useState<"practice" | "exam">("practice");
  const [minutes, setMinutes] = useState(10);
  const [selfGraded, setSelfGraded] = useState(false);
  const [courses, setCourses] = useState<CourseSummary[]>([]);
  const [pool, setPool] = useState<PoolResponse | null>(null);
  const [seed, setSeed] = useState(0);
  const [loading, setLoading] = useState(false);
  const [skipTemplated, setSkipTemplated] = useState(true);
  const [tab, setTab] = useState<"due" | "random">("random");
  const [now] = useState(() => Date.now());

  // Spaced repetition: cards due by the end of today's learning day, most-forgotten first.
  const due = useMemo(() => {
    if (!ready) return [];
    const end = endOfLearningDay(now);
    return Object.values(s.cards)
      .filter((c) => !c.suspended && c.due <= end)
      .sort((a, b) => retrievability((now - a.lastReview) / 86_400_000, a.stability) - retrievability((now - b.lastReview) / 86_400_000, b.stability));
  }, [s.cards, ready, now]);
  const totalCards = Object.keys(s.cards).length;
  const nextDue = useMemo(() => Object.values(s.cards).filter((c) => !c.suspended).reduce((m, c) => Math.min(m, c.due), Infinity), [s.cards]);

  const startDue = async () => {
    setLoading(true);
    try {
      const r = await fetch("/api/quiz/cards", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ keys: due.slice(0, 50).map((c) => c.key) }) });
      const j = await r.json();
      setPool({ questions: j.questions, lessonsUsed: 0, available: due.length });
      setSeed(Math.floor(Math.random() * 1e9));
    } finally {
      setLoading(false);
    }
  };

  const all = useMemo(() => (ready ? lessonsFor(s, source) : []), [s, source, ready]);
  const courseIds = useMemo(() => [...new Set(all.map((l) => l.courseId))], [all]);
  const picked = course ? all.filter((l) => l.courseId === course) : all;
  const courseOptions = courseIds.length ? courses : [];

  useEffect(() => {
    if (!courseIds.length) return;
    fetch(`/api/courses?ids=${encodeURIComponent(courseIds.slice(0, 100).join(","))}`)
      .then((r) => r.json())
      .then((j) => setCourses(j.courses ?? []))
      .catch(() => setCourses([]));
  }, [courseIds]);

  const generate = async () => {
    const nextSeed = Math.floor(Math.random() * 1e9);
    setLoading(true);
    try {
      const r = await fetch("/api/quiz/pool", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ lessonIds: picked.map((l) => l.id), count, seed: nextSeed, includeSelfGraded: selfGraded, skipTemplated }),
      });
      setPool(await r.json());
      setSeed(nextSeed);
    } finally {
      setLoading(false);
    }
  };

  const quiz: Quiz | null = pool?.questions.length
    ? { id: `practice:${course || "all"}`, title: "Ôn tập ngẫu nhiên", questions: pool.questions.map((x) => x.question), timeLimit: mode === "exam" ? minutes * 60 : undefined }
    : null;
  const origins = useMemo(
    () => Object.fromEntries((pool?.questions ?? []).map((x) => [x.question.id, { title: x.lessonTitle, href: x.href, sub: x.courseTitle, lessonId: x.lessonId, courseId: x.courseId }])),
    [pool],
  );
  const history = s.attempts.filter((a) => a.scope === "practice").slice(-6).reverse();

  return (
    <main id="main" className="mx-auto max-w-6xl px-4 pt-8 pb-20 sm:px-6">
      <header className="mb-6">
        <p className="text-sm font-medium text-accent">Truy hồi chủ động</p>
        <h1 className="mt-1 flex items-center gap-3 text-3xl font-bold tracking-tight"><Shuffle className="size-7 text-accent" /> Ôn tập</h1>
        <p className="mt-2 max-w-2xl text-muted">Tự nhớ lại trước khi xem đáp án giúp nhớ lâu hơn đọc lại. Mỗi câu bạn trả lời được xếp lịch ôn lại đúng lúc sắp quên (thuật toán FSRS).</p>
      </header>

      <div className="mb-5 flex gap-2" role="tablist">
        <button role="tab" aria-selected={tab === "due"} onClick={() => (setTab("due"), setPool(null))} className={cn("rounded-full border px-4 py-2 text-sm", tab === "due" ? "border-accent bg-accent-soft font-semibold text-accent-ink" : "border-border")}>
          Đến hạn hôm nay <span className="ml-1 tabular-nums">{ready ? due.length : "…"}</span>
        </button>
        <button role="tab" aria-selected={tab === "random"} onClick={() => (setTab("random"), setPool(null))} className={cn("rounded-full border px-4 py-2 text-sm", tab === "random" ? "border-accent bg-accent-soft font-semibold text-accent-ink" : "border-border")}>
          Ngẫu nhiên tùy chọn
        </button>
      </div>

      {tab === "due" ? (
        <div className="grid gap-6 lg:grid-cols-[19rem_1fr]">
          <aside className="space-y-3 self-start rounded-2xl border border-border bg-surface p-5 text-sm lg:sticky lg:top-20">
            <p className="font-semibold">Lịch ôn cách quãng</p>
            <p className="text-muted">{totalCards} thẻ đang theo dõi · {due.length} thẻ đến hạn.</p>
            <p className="text-muted">{due.length ? "Thẻ dễ quên nhất được hỏi trước." : Number.isFinite(nextDue) ? `Thẻ tiếp theo đến hạn ${new Date(nextDue).toLocaleString("vi-VN")}.` : "Chưa có thẻ nào."}</p>
            <button onClick={() => void startDue()} disabled={!due.length || loading} className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 font-semibold text-white disabled:opacity-50 dark:text-bg">
              {loading ? <Loader2 className="size-4 animate-spin" /> : <Dices className="size-4" />} Bắt đầu ôn {Math.min(50, due.length) || ""} thẻ
            </button>
            <p className="text-xs leading-relaxed text-muted">Chọn “Mức tự tin” trước khi nộp: đúng nhưng chỉ đoán thì câu sẽ quay lại sớm hơn; sai mà chắc chắn được hỏi lại ngay.</p>
          </aside>
          <section className="min-w-0">
            {pool && quiz ? (
              <QuizRunner key={seed} quiz={{ ...quiz, id: "srs:due", title: "Ôn tập hôm nay" }} courseId="mixed" scope="practice" mode="practice" shuffleQuestions={false} shuffleOptions={shuffleO} origins={origins} onRetake={() => (setPool(null), setTab("due"))} />
            ) : (
              <div className="rounded-3xl border border-dashed border-border-strong p-10 text-center">
                {!due.length ? <Illustration name="empty-review" className="mx-auto mb-3 h-40 w-auto" /> : null}
                <p className="text-lg font-semibold">{due.length ? `${due.length} thẻ đang chờ bạn` : "Hôm nay không còn thẻ đến hạn"}</p>
                <p className="mx-auto mt-1 max-w-md text-sm text-muted">Thẻ được tạo khi bạn nộp câu hỏi ôn tập trong bài học hoặc ở tab Ngẫu nhiên. Nghỉ một hôm cũng không sao — lịch tự điều chỉnh.</p>
              </div>
            )}
          </section>
        </div>
      ) : null}

      <div className={cn("grid gap-6 lg:grid-cols-[19rem_1fr]", tab !== "random" && "hidden")}>
        <aside className="space-y-5 self-start rounded-2xl border border-border bg-surface p-5 lg:sticky lg:top-20">
          <p className="flex items-center gap-2 text-sm font-semibold"><SlidersHorizontal className="size-4" /> Thiết lập đề</p>
          <Field label="Lấy câu hỏi từ">
            <select value={source} onChange={(e) => (setSource(e.target.value as Source), setCourse(""))} className="w-full rounded-lg border border-border bg-bg-elevated px-2 py-2 text-sm">
              {(Object.keys(SOURCE_LABEL) as Source[]).map((k) => <option key={k} value={k}>{SOURCE_LABEL[k]}</option>)}
            </select>
            <p className="mt-1 text-xs text-muted">{ready ? `${all.length} bài · ${courseIds.length} khóa` : "Đang đọc tiến độ…"}</p>
          </Field>
          <Field label="Khóa học">
            <select value={course} onChange={(e) => setCourse(e.target.value)} className="w-full rounded-lg border border-border bg-bg-elevated px-2 py-2 text-sm" disabled={!courseIds.length}>
              <option value="">Tất cả khóa (trộn)</option>
              {courseOptions.map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
            </select>
          </Field>
          <Field label={`Số câu: ${count}`}>
            <input type="range" min={3} max={50} value={count} onChange={(e) => setCount(Number(e.target.value))} className="w-full accent-[var(--accent)]" />
          </Field>
          <div className="space-y-2">
            <Toggle checked={shuffleQ} onChange={setShuffleQ} label="Xáo thứ tự câu hỏi" />
            <Toggle checked={shuffleO} onChange={setShuffleO} label="Xáo thứ tự đáp án" hint="Tắt nếu câu có phương án kiểu “Cả A và B”" />
            <Toggle checked={selfGraded} onChange={setSelfGraded} label="Gồm câu tự luận (tự chấm)" />
            <Toggle checked={skipTemplated} onChange={setSkipTemplated} label="Bỏ câu hỏi mẫu lặp" hint="Câu chỉ khác nhau ở tên bài trong ngoặc kép" />
          </div>
          <Field label="Chế độ">
            <div className="grid grid-cols-2 gap-1">
              {(["practice", "exam"] as const).map((m) => (
                <button key={m} onClick={() => setMode(m)} className={cn("rounded-lg border px-2 py-1.5 text-sm", mode === m ? "border-accent bg-accent-soft font-semibold text-accent-ink" : "border-border")}>
                  {m === "practice" ? "Luyện tập" : "Kiểm tra"}
                </button>
              ))}
            </div>
            {mode === "exam" ? (
              <label className="mt-2 flex items-center gap-2 text-sm">
                Thời gian
                <input type="number" min={1} max={180} value={minutes} onChange={(e) => setMinutes(Math.max(1, Number(e.target.value) || 1))} className="w-16 rounded-lg border border-border bg-bg-elevated px-2 py-1 text-sm" /> phút
              </label>
            ) : null}
          </Field>
          <button
            onClick={() => void generate()}
            disabled={!picked.length || loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-hover disabled:opacity-50 dark:text-bg"
          >
            {loading ? <Loader2 className="size-4 animate-spin" /> : <Dices className="size-4" />} {pool ? "Xáo đề mới" : "Tạo đề"}
          </button>
          {history.length ? (
            <div className="border-t border-border pt-4">
              <p className="mb-2 text-xs font-semibold text-muted uppercase">Lần ôn gần đây</p>
              <ul className="space-y-1.5 text-sm">
                {history.map((h) => (
                  <li key={h.id} className="flex justify-between gap-2">
                    <span className="text-muted">{relativeTime(h.finishedAt)} · {h.questionCount} câu</span>
                    <b className={cn("tabular-nums", h.percent >= 80 ? "text-success" : h.percent >= 50 ? "text-amber" : "text-danger")}>{h.percent}%</b>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </aside>

        <section className="min-w-0">
          {!ready ? (
            <div className="skeleton h-64" />
          ) : !all.length ? (
            <Empty source={source} />
          ) : !pool ? (
            <div className="rounded-3xl border border-dashed border-border-strong p-10 text-center">
              <Illustration name="empty-progress" className="mx-auto mb-2 h-36 w-auto" />
              <Dices className="mx-auto size-10 text-accent" />
              <p className="mt-3 text-lg font-semibold">Sẵn sàng: {picked.length} bài để lấy câu hỏi</p>
              <p className="mt-1 text-sm text-muted">Chọn thiết lập bên trái rồi bấm “Tạo đề”. Mỗi lần xáo sẽ ra bộ câu khác nhau.</p>
            </div>
          ) : quiz ? (
            <>
              <p className="mb-3 text-sm text-muted">
                {pool.questions.length} câu lấy từ {new Set(pool.questions.map((q) => q.lessonId)).size} bài · {pool.available.toLocaleString("vi-VN")} câu có thể dùng
              </p>
              <QuizRunner
                key={seed}
                quiz={quiz}
                courseId={course || "mixed"}
                scope="practice"
                mode={mode}
                timeLimit={mode === "exam" ? minutes * 60 : undefined}
                shuffleQuestions={shuffleQ}
                shuffleOptions={shuffleO}
                origins={origins}
                onRetake={() => void generate()}
              />
            </>
          ) : (
            <div className="rounded-2xl border border-border bg-surface p-8 text-center">
              <p className="font-semibold">Các bài đã chọn chưa có câu hỏi chấm được</p>
              <p className="mt-1 text-sm text-muted">Bật “Gồm câu tự luận” hoặc chọn nguồn khác. Bạn cũng có thể thêm câu hỏi theo <Link href="/templates" className="text-accent underline">template</Link>.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

function Empty({ source }: { source: Source }) {
  return (
    <div className="rounded-3xl border border-dashed border-border-strong p-10 text-center">
      <Illustration name="empty-progress" className="mx-auto mb-3 h-40 w-auto" />
      <p className="text-lg font-semibold">Chưa có bài nào thuộc “{SOURCE_LABEL[source]}”</p>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted">
        Khi đọc xong một bài, bấm <b>Đánh dấu đã học</b> (hoặc chọn <b>Đã đọc qua</b> ở mục Đánh dấu biên tập). Câu hỏi ôn tập của bài đó sẽ được đưa vào đây.
      </p>
      <Link href="/explore" className="mt-4 inline-block rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white dark:text-bg">Chọn khóa để học</Link>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-1.5 text-xs font-semibold text-muted uppercase">{label}</p>
      {children}
    </div>
  );
}

function Toggle({ checked, onChange, label, hint }: { checked: boolean; onChange: (v: boolean) => void; label: string; hint?: string }) {
  return (
    <label className="flex cursor-pointer items-start gap-2.5 text-sm">
      <button type="button" role="switch" aria-checked={checked} onClick={() => onChange(!checked)} className={cn("relative mt-0.5 h-5 w-9 shrink-0 rounded-full transition", checked ? "bg-accent" : "bg-surface-3")}>
        <span className={cn("absolute top-0.5 size-4 rounded-full bg-white shadow transition-all", checked ? "left-4.5" : "left-0.5")} />
      </button>
      <span>
        {label}
        {hint ? <span className="block text-xs text-muted">{hint}</span> : null}
      </span>
    </label>
  );
}
