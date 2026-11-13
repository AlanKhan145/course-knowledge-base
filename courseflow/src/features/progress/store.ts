"use client";
// Learner state, persisted in IndexedDB (survives closing the browser).
// Keyed by stable lesson/course ids, so renaming a lesson title never loses progress.
// Namespaced by profile id → multi-account can be added later without changing callers.
import { get, set } from "idb-keyval";
import { useSyncExternalStore } from "react";
import type { Response } from "@/lib/assessment/grade";
import { gradeFrom, schedule, type CardState, type Confidence } from "@/lib/assessment/fsrs";
import { sha1Hex } from "@/lib/content/hash";

export interface LessonProgress {
  courseId: string;
  status: "in_progress" | "completed";
  firstOpenedAt: number;
  lastOpenedAt: number;
  completedAt?: number;
  timeSpentSec: number;
  scrollRatio?: number;
}

export interface CourseProgress {
  startedAt: number;
  lastOpenedAt: number;
  lastLessonId: string;
  lastLessonSlug: string;
  lastLessonTitle: string;
}

export interface BookmarkEntry {
  courseId: string;
  courseSlug: string;
  courseTitle: string;
  lessonSlug: string;
  lessonTitle: string;
  at: number;
}

export interface NoteEntry {
  text: string;
  updatedAt: number;
  courseId: string;
  courseSlug: string;
  lessonSlug: string;
  lessonTitle: string;
}

export interface QuizAttempt {
  id: string;
  quizId: string;
  scope: "lesson" | "module" | "course" | "practice";
  mode: "practice" | "exam";
  courseId: string;
  lessonId?: string;
  moduleId?: string;
  title: string;
  startedAt: number;
  finishedAt: number;
  earned: number;
  possible: number;
  percent: number;
  questionCount: number;
  wrongIds: string[];
  responses: Record<string, Response>;
}

/** Editorial review mark (for the author fixing lessons against the template). */
export type ReviewStatus = "read" | "needs_edit" | "edited";
export interface ReviewEntry {
  status: ReviewStatus;
  note?: string;
  at: number;
  courseId: string;
  /** file mtime when the mark was set → detect "file changed since marked" */
  fileMtime: number;
}

export const REVIEW_LABEL: Record<ReviewStatus | "none", string> = {
  none: "Chưa xem",
  read: "Đã đọc qua",
  needs_edit: "Cần sửa",
  edited: "Đã sửa xong",
};

export interface ReaderPrefs {
  fontSize: number; // px
  width: "narrow" | "normal" | "wide";
  font: "sans" | "serif";
}

export interface LearnerState {
  version: 1;
  lessons: Record<string, LessonProgress>;
  courses: Record<string, CourseProgress>;
  bookmarks: Record<string, BookmarkEntry>;
  favorites: Record<string, { at: number }>;
  notes: Record<string, NoteEntry>;
  attempts: QuizAttempt[];
  checklist: Record<string, Record<number, boolean>>;
  reviews: Record<string, ReviewEntry>;
  /** Spaced-repetition cards, keyed by `${lessonId}::${promptHash}` (stable when question order changes). */
  cards: Record<string, CardState>;
  /** seconds of active reading per local day (YYYY-MM-DD) */
  activity: Record<string, number>;
  prefs: ReaderPrefs;
}

const PROFILE = "default";
const KEY = `courseflow:${PROFILE}:state`;

export function emptyState(): LearnerState {
  return {
    version: 1,
    lessons: {},
    courses: {},
    bookmarks: {},
    favorites: {},
    notes: {},
    attempts: [],
    checklist: {},
    reviews: {},
    cards: {},
    activity: {},
    prefs: { fontSize: 17, width: "normal", font: "sans" },
  };
}

let state: LearnerState = emptyState();
let ready = false;
const listeners = new Set<() => void>();
let saveTimer: ReturnType<typeof setTimeout> | null = null;
let loading: Promise<void> | null = null;

function emit() {
  for (const l of listeners) l();
}

function writeNow() {
  set(KEY, state).catch(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {
      /* storage unavailable */
    }
  });
}

let microtaskQueued = false;
/** Important changes (marks, notes, quiz results): written right away (coalesced per tick). */
function persist() {
  if (saveTimer) {
    clearTimeout(saveTimer);
    saveTimer = null;
  }
  if (microtaskQueued) return;
  microtaskQueued = true;
  queueMicrotask(() => {
    microtaskQueued = false;
    writeNow();
  });
}

/** High-frequency changes (scroll position, reading time): debounced. */
function persistSoon() {
  if (saveTimer) clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    saveTimer = null;
    writeNow();
  }, 800);
}

export function flushNow() {
  if (saveTimer) {
    clearTimeout(saveTimer);
    saveTimer = null;
  }
  return set(KEY, state).catch(() => undefined);
}

function normalize(raw: unknown): LearnerState {
  const base = emptyState();
  if (!raw || typeof raw !== "object") return base;
  const r = raw as Partial<LearnerState>;
  return {
    ...base,
    ...r,
    version: 1,
    prefs: { ...base.prefs, ...(r.prefs ?? {}) },
    attempts: Array.isArray(r.attempts) ? r.attempts : [],
  };
}

export function ensureLoaded(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  loading ??= (async () => {
    let raw: unknown = null;
    try {
      raw = await get(KEY);
    } catch {
      raw = null;
    }
    if (!raw) {
      try {
        const ls = localStorage.getItem(KEY);
        if (ls) raw = JSON.parse(ls);
      } catch {
        raw = null;
      }
    }
    state = normalize(raw);
    for (const fn of pendingBeforeLoad.splice(0)) state = fn(state);
    ready = true;
    emit();
    persist();
  })();
  return loading;
}

const pendingBeforeLoad: ((s: LearnerState) => LearnerState)[] = [];

export function update(fn: (s: LearnerState) => LearnerState) {
  if (!ready && typeof window !== "undefined") {
    // Apply after the saved state is loaded so an early click is never overwritten by it.
    pendingBeforeLoad.push(fn);
    void ensureLoaded();
    return;
  }
  state = fn(state);
  emit();
  persist();
}

export function getState() {
  return state;
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  void ensureLoaded();
  return () => listeners.delete(cb);
}

const serverSnapshot = emptyState();

/** Select a slice of learner state. `ready` is false until IndexedDB has been read. */
export function useLearner<T>(select: (s: LearnerState) => T): T {
  return useSyncExternalStore(
    subscribe,
    () => select(state),
    () => select(serverSnapshot),
  );
}

export function useLearnerReady(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => ready,
    () => false,
  );
}

// ------------------------------------------------------------------ actions

export function todayKey(d = new Date()): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function openLesson(p: { courseId: string; lessonId: string; lessonSlug: string; lessonTitle: string; countable: boolean }) {
  const now = Date.now();
  update((s) => {
    const prev = s.lessons[p.lessonId];
    const course = s.courses[p.courseId];
    return {
      ...s,
      lessons: p.countable
        ? { ...s.lessons, [p.lessonId]: prev ? { ...prev, lastOpenedAt: now } : { courseId: p.courseId, status: "in_progress", firstOpenedAt: now, lastOpenedAt: now, timeSpentSec: 0 } }
        : s.lessons,
      courses: {
        ...s.courses,
        [p.courseId]: { startedAt: course?.startedAt ?? now, lastOpenedAt: now, lastLessonId: p.lessonId, lastLessonSlug: p.lessonSlug, lastLessonTitle: p.lessonTitle },
      },
    };
  });
}

export function addReadingTime(lessonId: string, seconds: number) {
  if (seconds <= 0) return;
  const day = todayKey();
  update((s) => {
    const l = s.lessons[lessonId];
    return {
      ...s,
      lessons: l ? { ...s.lessons, [lessonId]: { ...l, timeSpentSec: l.timeSpentSec + seconds } } : s.lessons,
      activity: { ...s.activity, [day]: (s.activity[day] ?? 0) + seconds },
    };
  });
}

export function setScroll(lessonId: string, ratio: number) {
  const l = state.lessons[lessonId];
  if (!l || Math.abs((l.scrollRatio ?? 0) - ratio) < 0.01) return;
  state = { ...state, lessons: { ...state.lessons, [lessonId]: { ...l, scrollRatio: ratio } } };
  persistSoon();
}

export function setCompleted(courseId: string, lessonId: string, done: boolean) {
  const now = Date.now();
  update((s) => {
    const prev = s.lessons[lessonId] ?? { courseId, status: "in_progress" as const, firstOpenedAt: now, lastOpenedAt: now, timeSpentSec: 0 };
    return {
      ...s,
      lessons: { ...s.lessons, [lessonId]: { ...prev, status: done ? "completed" : "in_progress", completedAt: done ? now : undefined } },
    };
  });
}

export function toggleBookmark(lessonId: string, entry: Omit<BookmarkEntry, "at">) {
  update((s) => {
    const next = { ...s.bookmarks };
    if (next[lessonId]) delete next[lessonId];
    else next[lessonId] = { ...entry, at: Date.now() };
    return { ...s, bookmarks: next };
  });
}

export function toggleFavorite(courseId: string) {
  update((s) => {
    const next = { ...s.favorites };
    if (next[courseId]) delete next[courseId];
    else next[courseId] = { at: Date.now() };
    return { ...s, favorites: next };
  });
}

export function saveNote(lessonId: string, entry: Omit<NoteEntry, "updatedAt">) {
  update((s) => {
    const next = { ...s.notes };
    if (!entry.text.trim()) delete next[lessonId];
    else next[lessonId] = { ...entry, updatedAt: Date.now() };
    return { ...s, notes: next };
  });
}

export function recordAttempt(a: QuizAttempt) {
  update((s) => ({ ...s, attempts: [...s.attempts, a].slice(-2000) }));
}

export function setChecklist(lessonId: string, index: number, checked: boolean) {
  update((s) => ({ ...s, checklist: { ...s.checklist, [lessonId]: { ...(s.checklist[lessonId] ?? {}), [index]: checked } } }));
}

export function setReview(lessonId: string, entry: Omit<ReviewEntry, "at"> | null) {
  update((s) => {
    const next = { ...s.reviews };
    if (!entry) delete next[lessonId];
    else next[lessonId] = { ...entry, at: Date.now() };
    return { ...s, reviews: next };
  });
}

export function cardKey(lessonId: string, prompt: string): string {
  return `${lessonId}::${sha1Hex(prompt.trim()).slice(0, 10)}`;
}

export interface CardReview {
  lessonId: string;
  courseId: string;
  prompt: string;
  score: number;
  conf: Confidence;
  recallType: boolean;
}

/** Update spaced-repetition cards after a submitted quiz. */
export function reviewCards(items: CardReview[]) {
  if (!items.length) return;
  const now = Date.now();
  update((s) => {
    const cards = { ...s.cards };
    for (const it of items) {
      const key = cardKey(it.lessonId, it.prompt);
      const prev = cards[key] ?? null;
      const completedAt = s.lessons[it.lessonId]?.completedAt ?? s.lessons[it.lessonId]?.lastOpenedAt ?? 0;
      const g = gradeFrom(it.score, it.conf, { recallType: it.recallType, reps: prev?.reps ?? 0, firstSeenRecently: !prev && now - completedAt < 3600_000 });
      cards[key] = schedule(prev, g, now, { key, courseId: it.courseId, lessonId: it.lessonId });
    }
    return { ...s, cards };
  });
}

export function setPrefs(p: Partial<ReaderPrefs>) {
  update((s) => ({ ...s, prefs: { ...s.prefs, ...p } }));
}

// ------------------------------------------------------------------ derived

export function courseCompletion(s: LearnerState, courseId: string, lessonIds: string[]) {
  let done = 0;
  for (const id of lessonIds) if (s.lessons[id]?.status === "completed") done++;
  return { done, total: lessonIds.length, percent: lessonIds.length ? Math.round((done / lessonIds.length) * 100) : 0 };
}

export function streakDays(activity: Record<string, number>, minSeconds = 60): number {
  let n = 0;
  const d = new Date();
  if ((activity[todayKey(d)] ?? 0) < minSeconds) d.setDate(d.getDate() - 1);
  while ((activity[todayKey(d)] ?? 0) >= minSeconds) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}

// ------------------------------------------------------------------ export / import

export function exportJson(): string {
  return JSON.stringify({ app: "courseflow", profile: PROFILE, exportedAt: new Date().toISOString(), state }, null, 2);
}

export function importJson(text: string, mode: "replace" | "merge" = "merge"): { ok: true } | { ok: false; error: string } {
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    return { ok: false, error: "File không phải JSON hợp lệ" };
  }
  const p = parsed as { app?: string; state?: unknown };
  if (p?.app !== "courseflow" || !p.state) return { ok: false, error: "Không phải file xuất từ CourseFlow" };
  const incoming = normalize(p.state);
  if (mode === "replace") {
    update(() => incoming);
    return { ok: true };
  }
  update((s) => {
    const lessons = { ...s.lessons };
    for (const [id, l] of Object.entries(incoming.lessons)) {
      const cur = lessons[id];
      if (!cur || (l.status === "completed" && cur.status !== "completed") || l.lastOpenedAt > cur.lastOpenedAt)
        lessons[id] = { ...l, timeSpentSec: Math.max(l.timeSpentSec, cur?.timeSpentSec ?? 0) };
    }
    const attemptIds = new Set(s.attempts.map((a) => a.id));
    const activity = { ...s.activity };
    for (const [d, v] of Object.entries(incoming.activity)) activity[d] = Math.max(activity[d] ?? 0, v);
    return {
      ...s,
      lessons,
      courses: { ...incoming.courses, ...s.courses },
      bookmarks: { ...incoming.bookmarks, ...s.bookmarks },
      favorites: { ...incoming.favorites, ...s.favorites },
      notes: { ...incoming.notes, ...s.notes },
      attempts: [...s.attempts, ...incoming.attempts.filter((a) => !attemptIds.has(a.id))].sort((a, b) => a.finishedAt - b.finishedAt),
      checklist: { ...incoming.checklist, ...s.checklist },
      reviews: { ...incoming.reviews, ...s.reviews },
      cards: { ...incoming.cards, ...s.cards },
      activity,
    };
  });
  return { ok: true };
}
