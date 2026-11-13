"use client";
import { Illustration } from "@/components/Illustration";
import { History, ListRestart, RotateCcw, Send, Timer, Trophy } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn, relativeTime } from "@/lib/utils";
import { emptyResponse, grade, isAnswered, scoreQuiz, seededShuffle, type Response } from "@/lib/assessment/grade";
import type { Question, Quiz } from "@/lib/assessment/schema";
import type { Confidence } from "@/lib/assessment/fsrs";
import { getState, recordAttempt, reviewCards, update, useLearner, type CardReview, type QuizAttempt } from "@/features/progress/store";
import { QuestionCard } from "./QuestionCard";

export interface QuizRunnerProps {
  quiz: Quiz;
  courseId: string;
  lessonId?: string;
  moduleId?: string;
  scope: QuizAttempt["scope"];
  mode: "practice" | "exam";
  /** Exam: seconds; overrides quiz.timeLimit */
  timeLimit?: number;
  compact?: boolean;
  /** Override quiz-level shuffle settings (random review page). */
  shuffleQuestions?: boolean;
  shuffleOptions?: boolean;
  /** Where each question came from (shown under the card). */
  origins?: Record<string, { title: string; href: string; sub?: string; lessonId?: string; courseId?: string }>;
  onRetake?: () => void;
}

function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

export function QuizRunner({ quiz, courseId, lessonId, moduleId, scope, mode, timeLimit, compact, shuffleQuestions, shuffleOptions, origins, onRetake }: QuizRunnerProps) {
  const [round, setRound] = useState(0);
  const [subset, setSubset] = useState<string[] | null>(null);
  const [responses, setResponses] = useState<Record<string, Response>>({});
  const [submitted, setSubmitted] = useState(false);
  const [attemptId, setAttemptId] = useState<string | null>(null);
  const [confirming, setConfirming] = useState(false);
  const [confidence, setConfidence] = useState<Record<string, Confidence>>({});
  const startedAt = useRef(0);
  const seed = hash(quiz.id) + round * 7919;
  const limit = mode === "exam" ? (timeLimit ?? quiz.timeLimit) : undefined;

  const questions: Question[] = useMemo(() => {
    let qs = quiz.questions;
    if (subset) qs = qs.filter((q) => subset.includes(q.id));
    const shuffle = shuffleQuestions ?? (mode === "exam" ? quiz.shuffleQuestions !== false : !!quiz.shuffleQuestions && round > 0);
    return shuffle ? seededShuffle(qs, seed) : qs;
  }, [quiz, subset, mode, round, seed]);

  const attempts = useLearner((s) => s.attempts);
  const history = useMemo(() => attempts.filter((a) => a.quizId === quiz.id).slice().reverse(), [attempts, quiz.id]);

  useEffect(() => {
    startedAt.current = Date.now();
  }, [round]);

  const answeredCount = questions.filter((q) => isAnswered(responses[q.id] ?? emptyResponse(q))).length;
  const score = useMemo(() => scoreQuiz(questions, responses), [questions, responses]);

  const finalize = () => {
    // Ordering questions that were never touched are graded in the order that was shown.
    const filled = { ...responses };
    for (const q of questions) {
      if (q.type === "ordering" && !(filled[q.id]?.type === "ordering" && (filled[q.id] as { value: string[] }).value.length)) {
        filled[q.id] = { type: "ordering", value: seededShuffle(q.items, seed + 7) };
      }
    }
    setResponses(filled);
    const s = scoreQuiz(questions, filled);
    const id = `${quiz.id}@${Date.now()}`;
    recordAttempt({
      id,
      quizId: quiz.id,
      scope,
      mode,
      courseId,
      lessonId,
      moduleId,
      title: quiz.title,
      startedAt: startedAt.current || Date.now(),
      finishedAt: Date.now(),
      earned: s.earned,
      possible: s.possible,
      percent: s.percent,
      questionCount: questions.length,
      wrongIds: s.wrongIds,
      responses: filled,
    });
    // Spaced repetition: every auto-graded question becomes (or updates) a review card.
    const items: CardReview[] = [];
    for (const q of questions) {
      const lid = origins?.[q.id]?.lessonId ?? lessonId;
      if (!lid) continue;
      const g = grade(q, filled[q.id] ?? emptyResponse(q));
      if (!g.counted || !g.answered) continue;
      items.push({ lessonId: lid, courseId: origins?.[q.id]?.courseId ?? courseId, prompt: q.prompt, score: g.score, conf: confidence[q.id] ?? 2, recallType: q.type !== "single" && q.type !== "multiple" && q.type !== "true_false" });
    }
    reviewCards(items);
    setAttemptId(id);
    setSubmitted(true);
    setConfirming(false);
  };

  // Self-graded answers change the score after submission: keep the stored attempt in sync.
  useEffect(() => {
    if (!submitted || !attemptId) return;
    const s = scoreQuiz(questions, responses);
    const cur = getState().attempts.find((a) => a.id === attemptId);
    if (!cur || (cur.earned === s.earned && cur.possible === s.possible)) return;
    update((st) => ({
      ...st,
      attempts: st.attempts.map((a) => (a.id === attemptId ? { ...a, earned: s.earned, possible: s.possible, percent: s.percent, wrongIds: s.wrongIds, responses } : a)),
    }));
  }, [responses, submitted, attemptId, questions]);

  const reset = (onlyWrong: boolean) => {
    if (!onlyWrong && onRetake) {
      onRetake();
      return;
    }
    setSubset(onlyWrong ? score.wrongIds : null);
    setResponses({});
    setConfidence({});
    setSubmitted(false);
    setAttemptId(null);
    setRound((r) => r + 1);
  };

  const gradable = questions.filter((q) => q.type !== "short_answer" || q.accept?.length || q.modelAnswer).length;
  const showFeedback = submitted;

  return (
    <div className={cn("rounded-3xl border border-border bg-bg-elevated", compact ? "p-3 sm:p-4" : "p-4 sm:p-6")}>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
        <span>
          <b className="text-text tabular-nums">{questions.length}</b> câu
          {gradable < questions.length ? <> · {gradable} câu có đáp án</> : null}
        </span>
        {mode === "exam" ? <span className="rounded-full bg-violet-soft px-2.5 py-0.5 text-xs font-semibold text-violet">Chế độ kiểm tra</span> : null}
        {limit && !submitted ? <Countdown key={round} seconds={limit} onEnd={finalize} /> : null}
        {history.length ? (
          <span className="inline-flex items-center gap-1.5">
            <History className="size-3.5" /> {history.length} lần làm · cao nhất <b className="text-text">{Math.max(...history.map((h) => h.percent))}%</b>
          </span>
        ) : null}
        {subset ? <span className="rounded-full bg-amber-soft px-2.5 py-0.5 text-xs font-semibold text-amber">Đang làm lại {subset.length} câu sai</span> : null}
      </div>

      {submitted ? <ScoreBanner percent={score.percent} correct={score.correctCount} counted={score.countedCount} pending={score.pendingSelfGrade} total={questions.length} pass={quiz.passScore} /> : null}

      <div className="space-y-4">
        {questions.map((q, i) => (
          <QuestionCard
            key={`${q.id}-${round}`}
            q={q}
            index={i}
            response={responses[q.id] ?? emptyResponse(q)}
            onChange={(r) => setResponses((prev) => ({ ...prev, [q.id]: r }))}
            submitted={submitted}
            seed={seed}
            shuffleOptions={shuffleOptions ?? (mode === "exam" ? !!quiz.shuffleOptions : false)}
            origin={origins?.[q.id]}
            confidence={confidence[q.id]}
            onConfidence={(c) => setConfidence((prev) => ({ ...prev, [q.id]: c }))}
            showFeedback={showFeedback}
          />
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        {!submitted ? (
          <>
            {confirming ? (
              <div className="flex flex-wrap items-center gap-2 rounded-xl bg-amber-soft px-3 py-2 text-sm text-text">
                Còn {questions.length - answeredCount} câu chưa trả lời. Vẫn nộp?
                <button type="button" onClick={finalize} className="rounded-lg bg-accent px-3 py-1.5 text-sm font-semibold text-white dark:text-bg">
                  Nộp bài
                </button>
                <button type="button" onClick={() => setConfirming(false)} className="rounded-lg px-3 py-1.5 text-sm hover:bg-surface-2">
                  Tiếp tục làm
                </button>
              </div>
            ) : (
              <button
                type="button"
                disabled={answeredCount === 0}
                onClick={() => (answeredCount < questions.length ? setConfirming(true) : finalize())}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-card transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50 dark:text-bg"
              >
                <Send className="size-4" /> Nộp bài
              </button>
            )}
            <span className="text-xs text-muted tabular-nums">
              Đã trả lời {answeredCount}/{questions.length}
            </span>
          </>
        ) : (
          <>
            <button type="button" onClick={() => reset(false)} className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-semibold hover:bg-surface-2">
              <RotateCcw className="size-4" /> Làm lại
            </button>
            {score.wrongIds.length && score.wrongIds.length < questions.length ? (
              <button type="button" onClick={() => reset(true)} className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-semibold hover:bg-surface-2">
                <ListRestart className="size-4" /> Làm lại {score.wrongIds.length} câu sai
              </button>
            ) : null}
          </>
        )}
      </div>

      {history.length > 1 && !compact ? (
        <details className="mt-5 text-sm">
          <summary className="cursor-pointer text-muted hover:text-text">Lịch sử làm bài</summary>
          <ul className="mt-2 divide-y divide-border rounded-xl border border-border bg-surface">
            {history.slice(0, 10).map((h) => (
              <li key={h.id} className="flex items-center justify-between gap-3 px-3 py-2">
                <span className="text-muted">
                  {relativeTime(h.finishedAt)} · {h.mode === "exam" ? "kiểm tra" : "luyện tập"} · {h.questionCount} câu
                </span>
                <b className={cn("tabular-nums", h.percent >= 80 ? "text-success" : h.percent >= 50 ? "text-amber" : "text-danger")}>{h.percent}%</b>
              </li>
            ))}
          </ul>
        </details>
      ) : null}
    </div>
  );
}

function ScoreBanner({ percent, correct, counted, pending, total, pass }: { percent: number; correct: number; counted: number; pending: number; total: number; pass?: number }) {
  const passed = pass !== undefined ? percent >= pass * 100 : null;
  const tone = percent >= 80 ? "text-success" : percent >= 50 ? "text-amber" : "text-danger";
  const r = 26;
  const c = 2 * Math.PI * r;
  return (
    <div className="mb-5 flex items-center gap-4 rounded-2xl border border-border bg-surface p-4" role="status" aria-live="polite">
      {percent === 100 ? <Illustration name="quiz-perfect" className="h-16 w-auto" /> : null}
      <svg viewBox="0 0 64 64" className="size-16 shrink-0 -rotate-90" aria-hidden>
        <circle cx="32" cy="32" r={r} fill="none" stroke="var(--surface-3)" strokeWidth="6" />
        <circle cx="32" cy="32" r={r} fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - percent / 100)} className={cn(tone, "transition-all duration-700")} />
      </svg>
      <div className="min-w-0">
        <p className={cn("flex items-center gap-2 text-2xl font-bold tabular-nums", tone)}>
          {percent}% {percent === 100 ? <Trophy className="size-5" /> : null}
        </p>
        <p className="text-sm text-muted">
          Đúng {correct}/{counted} câu được chấm{counted < total ? ` (trên ${total} câu)` : ""}
          {pending ? ` · ${pending} câu chờ bạn tự đánh giá` : ""}
          {passed !== null ? (passed ? " · Đạt" : ` · Chưa đạt (cần ${Math.round((pass ?? 0) * 100)}%)`) : ""}
        </p>
      </div>
    </div>
  );
}

function Countdown({ seconds, onEnd }: { seconds: number; onEnd: () => void }) {
  const [left, setLeft] = useState(seconds);
  const end = useRef(onEnd);
  useEffect(() => {
    end.current = onEnd;
  }, [onEnd]);
  useEffect(() => {
    const t0 = Date.now();
    const id = setInterval(() => {
      const l = Math.max(0, seconds - Math.floor((Date.now() - t0) / 1000));
      setLeft(l);
      if (l === 0) {
        clearInterval(id);
        end.current();
      }
    }, 500);
    return () => clearInterval(id);
  }, [seconds]);
  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold tabular-nums", left < 60 ? "bg-danger-soft text-danger" : "bg-surface-2 text-text")} role="timer" aria-live="off">
      <Timer className="size-3.5" /> {mm}:{ss}
    </span>
  );
}
