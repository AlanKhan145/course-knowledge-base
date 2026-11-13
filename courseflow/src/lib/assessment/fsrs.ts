// FSRS-6 (Free Spaced Repetition Scheduler) — compact implementation of the spec in
// docs/LEARNING_DESIGN.md §4 (default parameters, desired retention 0.9, max interval 180 days).
// Pure functions: safe on server and client.

export const W = [0.212, 1.2931, 2.3065, 8.2956, 6.4133, 0.8334, 3.0194, 0.001, 1.8722, 0.1666, 0.796, 1.4835, 0.0614, 0.2629, 1.6483, 0.6014, 1.8729, 0.5425, 0.0912, 0.0658, 0.1542];
const DECAY = -W[20];
const FACTOR = Math.pow(0.9, 1 / DECAY) - 1;
const DAY = 86_400_000;

export type Grade = 1 | 2 | 3 | 4; // Again | Hard | Good | Easy
export type Confidence = 1 | 2 | 3; // Đoán | Khá chắc | Chắc chắn

export interface CardState {
  key: string;
  courseId: string;
  lessonId: string;
  due: number;
  stability: number;
  difficulty: number;
  reps: number;
  lapses: number;
  lastReview: number;
  state: "review" | "relearning";
  suspended?: boolean;
}

const clamp = (x: number, a: number, b: number) => Math.min(b, Math.max(a, x));

/** Probability of recall after t days with stability S. */
export function retrievability(tDays: number, S: number): number {
  return Math.pow(1 + (FACTOR * Math.max(0, tDays)) / S, DECAY);
}

export function nextIntervalDays(S: number, desired = 0.9, maxDays = 180): number {
  const i = (S / FACTOR) * (Math.pow(desired, 1 / DECAY) - 1);
  return clamp(Math.round(i), 1, maxDays);
}

function d0(g: Grade) {
  return W[4] - Math.exp(W[5] * (g - 1)) + 1;
}

/** Learning day starts at 04:00 local time. */
export function dayIndex(ms: number): number {
  const d = new Date(ms - 4 * 3600_000);
  return Math.floor(new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime() / DAY);
}

export function endOfLearningDay(now = Date.now()): number {
  const d = new Date(now - 4 * 3600_000);
  return new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1, 4).getTime() - 1;
}

export function schedule(card: CardState | null, g: Grade, now: number, base: { key: string; courseId: string; lessonId: string }, desired = 0.9): CardState {
  if (!card) {
    const S = W[g - 1];
    const D = clamp(d0(g), 1, 10);
    const days = g === 1 ? 0 : nextIntervalDays(S, desired);
    return { ...base, due: g === 1 ? now + 10 * 60_000 : now + days * DAY, stability: S, difficulty: D, reps: g >= 2 ? 1 : 0, lapses: 0, lastReview: now, state: g === 1 ? "relearning" : "review" };
  }
  const t = Math.max(0, (now - card.lastReview) / DAY);
  const sameDay = dayIndex(now) === dayIndex(card.lastReview);
  const R = retrievability(t, card.stability);
  // difficulty with linear damping + mean reversion towards D0(4)
  const dPrime = card.difficulty + -W[6] * (g - 3) * ((10 - card.difficulty) / 9);
  const D = clamp(W[7] * d0(4) + (1 - W[7]) * dPrime, 1, 10);
  let S: number;
  if (sameDay) {
    const f = Math.exp(W[17] * (g - 3 + W[18])) * Math.pow(card.stability, -W[19]);
    S = card.stability * (g >= 2 ? Math.max(1, f) : f);
  } else if (g === 1) {
    S = Math.min(W[11] * Math.pow(D, -W[12]) * (Math.pow(card.stability + 1, W[13]) - 1) * Math.exp(W[14] * (1 - R)), card.stability / Math.exp(W[17] * W[18]));
  } else {
    const hard = g === 2 ? W[15] : 1;
    const easy = g === 4 ? W[16] : 1;
    S = card.stability * (1 + Math.exp(W[8]) * (11 - D) * Math.pow(card.stability, -W[9]) * (Math.exp(W[10] * (1 - R)) - 1) * hard * easy);
  }
  S = Math.max(0.001, S);
  const lapses = g === 1 && card.state === "review" && !sameDay ? card.lapses + 1 : card.lapses;
  const reps = g >= 2 && !sameDay ? card.reps + 1 : card.reps;
  const due = g === 1 ? now + 10 * 60_000 : now + nextIntervalDays(S, desired) * DAY;
  return { ...card, stability: S, difficulty: D, lapses, reps, lastReview: now, due, state: g === 1 ? "relearning" : "review", suspended: lapses >= 8 ? true : card.suspended };
}

/** Map quiz score + confidence to an FSRS grade (docs/LEARNING_DESIGN.md §4.4). */
export function gradeFrom(score: number, conf: Confidence, opts: { recallType: boolean; reps: number; firstSeenRecently: boolean }): Grade {
  let g: Grade;
  if (score < 0.5) g = 1;
  else if (score < 1) g = 2;
  else if (conf === 1) g = 2;
  else if (conf === 3 && opts.recallType && opts.reps >= 2) g = 4;
  else g = 3;
  if (opts.firstSeenRecently && g === 4) g = 3;
  return g;
}
