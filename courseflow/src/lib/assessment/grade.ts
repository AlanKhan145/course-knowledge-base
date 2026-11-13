// Deterministic grading rules. Documented in docs/CONTENT_SCHEMA.md#chấm-điểm.
import type { Question } from "./schema.ts";
import { foldVi } from "../content/text.ts";

export type Response =
  | { type: "single"; value: string | null }
  | { type: "multiple"; value: string[] }
  | { type: "true_false"; value: boolean | null }
  | { type: "fill_blank"; value: string[] }
  | { type: "short_answer"; value: string; selfGrade?: "correct" | "incorrect" | null }
  | { type: "ordering"; value: string[] }
  | { type: "matching"; value: Record<string, string> };

export interface GradeResult {
  /** 0..1 */
  score: number;
  correct: boolean;
  /** false → excluded from the total (reflection question without key or not self-graded yet). */
  counted: boolean;
  /** Needs the learner to mark their own answer (short answer with a model answer only). */
  needsSelfGrade: boolean;
  answered: boolean;
}

export function normalizeAnswer(s: string, caseSensitive = false): string {
  let t = s.normalize("NFC").trim().replace(/\s+/g, " ").replace(/[.。!?;,:]+$/u, "");
  if (!caseSensitive) t = t.toLowerCase();
  return t;
}

/** Loose match: also ignores diacritics (for learners typing without Vietnamese keyboard). */
function matches(input: string, accepted: string[], caseSensitive = false): boolean {
  const a = normalizeAnswer(input, caseSensitive);
  if (!a) return false;
  return accepted.some((x) => {
    const b = normalizeAnswer(x, caseSensitive);
    return a === b || (!caseSensitive && foldVi(a) === foldVi(b));
  });
}

export function isSelfGraded(q: Question): boolean {
  return q.type === "short_answer" && !(q.accept && q.accept.length);
}

export function emptyResponse(q: Question): Response {
  switch (q.type) {
    case "single":
      return { type: "single", value: null };
    case "multiple":
      return { type: "multiple", value: [] };
    case "true_false":
      return { type: "true_false", value: null };
    case "fill_blank":
      return { type: "fill_blank", value: q.blanks.map(() => "") };
    case "short_answer":
      return { type: "short_answer", value: "", selfGrade: null };
    case "ordering":
      return { type: "ordering", value: [] };
    case "matching":
      return { type: "matching", value: {} };
  }
}

export function isAnswered(r: Response): boolean {
  switch (r.type) {
    case "single":
      return r.value !== null;
    case "true_false":
      return r.value !== null;
    case "multiple":
      return r.value.length > 0;
    case "fill_blank":
      return r.value.some((v) => v.trim() !== "");
    case "short_answer":
      return r.value.trim() !== "";
    case "ordering":
      return r.value.length > 0;
    case "matching":
      return Object.keys(r.value).length > 0;
  }
}

export function grade(q: Question, r: Response): GradeResult {
  const answered = isAnswered(r);
  const ok = (score: number): GradeResult => ({ score, correct: score >= 0.999, counted: true, needsSelfGrade: false, answered });
  if (q.type !== r.type) return ok(0);
  switch (q.type) {
    case "single":
      return ok(r.type === "single" && r.value === q.answer ? 1 : 0);
    case "true_false":
      return ok(r.type === "true_false" && r.value === q.answer ? 1 : 0);
    case "multiple": {
      if (r.type !== "multiple") return ok(0);
      const correct = new Set(q.answer);
      const picked = new Set(r.value);
      const hits = [...picked].filter((x) => correct.has(x)).length;
      const wrong = picked.size - hits;
      const exact = hits === correct.size && wrong === 0;
      if (q.scoring === "all-or-nothing") return ok(exact ? 1 : 0);
      // Partial credit: each wrong pick cancels one right pick; never negative.
      return ok(exact ? 1 : Math.max(0, (hits - wrong) / correct.size));
    }
    case "fill_blank": {
      if (r.type !== "fill_blank") return ok(0);
      const n = q.blanks.length;
      const right = q.blanks.filter((acc, i) => matches(r.value[i] ?? "", acc, q.caseSensitive)).length;
      return ok(right / n);
    }
    case "short_answer": {
      if (r.type !== "short_answer") return ok(0);
      if (q.accept && q.accept.length) return ok(matches(r.value, q.accept) ? 1 : 0);
      // No answer key: never auto-grade. Learner compares with the model answer.
      if (!q.modelAnswer) return { score: 0, correct: false, counted: false, needsSelfGrade: false, answered };
      if (r.selfGrade === "correct") return { score: 1, correct: true, counted: true, needsSelfGrade: false, answered };
      if (r.selfGrade === "incorrect") return { score: 0, correct: false, counted: true, needsSelfGrade: false, answered };
      return { score: 0, correct: false, counted: false, needsSelfGrade: true, answered };
    }
    case "ordering": {
      if (r.type !== "ordering" || r.value.length !== q.items.length) return ok(0);
      const right = q.items.filter((item, i) => r.value[i] === item).length;
      return ok(right === q.items.length ? 1 : right / q.items.length);
    }
    case "matching": {
      if (r.type !== "matching") return ok(0);
      const right = q.pairs.filter((p) => r.value[p.left] === p.right).length;
      return ok(right / q.pairs.length);
    }
  }
}

export interface QuizScore {
  earned: number;
  possible: number;
  percent: number;
  correctCount: number;
  countedCount: number;
  pendingSelfGrade: number;
  wrongIds: string[];
}

export function scoreQuiz(questions: Question[], responses: Record<string, Response>): QuizScore {
  let earned = 0;
  let possible = 0;
  let correctCount = 0;
  let pendingSelfGrade = 0;
  const wrongIds: string[] = [];
  for (const q of questions) {
    const g = grade(q, responses[q.id] ?? emptyResponse(q));
    if (g.needsSelfGrade) pendingSelfGrade++;
    if (!g.counted) continue;
    possible += 1;
    earned += g.score;
    if (g.correct) correctCount++;
    else wrongIds.push(q.id);
  }
  return {
    earned,
    possible,
    percent: possible ? Math.round((earned / possible) * 100) : 0,
    correctCount,
    countedCount: possible,
    pendingSelfGrade,
    wrongIds,
  };
}

/** Deterministic shuffle (seeded) so a retake can reshuffle while SSR stays stable. */
export function seededShuffle<T>(arr: readonly T[], seed: number): T[] {
  const a = arr.slice();
  let s = seed >>> 0 || 1;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) >>> 0;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
