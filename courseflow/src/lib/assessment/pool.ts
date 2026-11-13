// Random question pool drawn from a set of lessons (server side; reads only the lessons it needs).
import { parse as parseYaml } from "yaml";
import { splitFrontmatter } from "../content/lesson-meta.ts";
import { readLessonSource } from "../content/repository.ts";
import { getDb } from "../content/repository.ts";
import { parseQuizSections } from "./parse-markdown-quiz.ts";
import { quizFileSchema, type Question } from "./schema.ts";
import { seededShuffle } from "./grade.ts";
import { foldVi } from "../content/text.ts";
import { sha1Hex } from "../content/hash.ts";

export interface PoolQuestion {
  question: Question;
  lessonId: string;
  lessonTitle: string;
  courseId: string;
  href: string;
  courseTitle: string;
}

export interface PoolRequest {
  lessonIds: string[];
  count: number;
  seed: number;
  includeSelfGraded?: boolean;
  /** Skip template questions that only differ by the lesson title (default true). */
  skipTemplated?: boolean;
}

/**
 * Template-generated questions repeat across many lessons and only differ by the lesson title in quotes
 * (“Khi tập “<tên bài>”…”). They test nothing specific, so random/spaced review skips them by default.
 */
export function isTemplatedQuestion(prompt: string, lessonTitle: string): boolean {
  const t = foldVi(lessonTitle).replace(/[^\p{L}\p{N}]+/gu, " ").trim();
  if (t.length < 4) return false;
  for (const m of prompt.matchAll(/[“"«]([^”"»]{3,200})[”"»]/g)) {
    const q = foldVi(m[1]).replace(/[^\p{L}\p{N}]+/gu, " ").trim();
    if (q && (q === t || t.includes(q) || q.includes(t))) return true;
  }
  return false;
}

function gradable(q: Question, includeSelf: boolean) {
  if (q.type !== "short_answer") return true;
  if (q.accept?.length) return true;
  return includeSelf && !!q.modelAnswer;
}

export async function lessonQuestions(rootId: string, path: string, lessonId: string): Promise<Question[]> {
  const text = await readLessonSource(rootId, path);
  if (!text) return [];
  const { body } = splitFrontmatter(text);
  const out = parseQuizSections(body, lessonId).flatMap((s) => s.questions);
  let n = 0;
  for (const m of body.matchAll(/^(```|~~~)quiz[^\n]*\n([\s\S]*?)\n\1\s*$/gm)) {
    n++;
    try {
      const code = m[2];
      let raw: unknown = code.trim().startsWith("{") || code.trim().startsWith("[") ? JSON.parse(code) : parseYaml(code);
      if (Array.isArray(raw)) raw = { questions: raw };
      const res = quizFileSchema.safeParse(raw);
      if (res.success) out.push(...res.data.questions.map((q, i) => ({ ...q, id: q.id === "__auto" ? `${lessonId}:block${n}:q${i + 1}` : q.id }) as Question));
    } catch {
      /* invalid block: shown as an error inside the lesson, skipped here */
    }
  }
  return out;
}

export async function buildPool(req: PoolRequest): Promise<{ questions: PoolQuestion[]; lessonsUsed: number; available: number }> {
  const db = getDb();
  if (!db || !req.lessonIds.length) return { questions: [], lessonsUsed: 0, available: 0 };
  const ids = [...new Set(req.lessonIds)].slice(0, 5000);
  type Row = { id: string; slug: string; title: string; root_id: string; path: string; gradable: number; questions: number; course_slug: string; course_title: string; course_id: string };
  const rows: Row[] = [];
  for (let i = 0; i < ids.length; i += 400) {
    const chunk = ids.slice(i, i + 400);
    rows.push(
      ...(db
        .prepare(
          `SELECT l.id, l.slug, l.title, l.root_id, l.path, l.gradable, l.questions, c.slug AS course_slug, c.title AS course_title, c.id AS course_id
           FROM lessons l JOIN courses c ON c.id = l.course_id WHERE l.id IN (${chunk.map(() => "?").join(",")}) AND l.questions > 0`,
        )
        .all(...chunk) as unknown as Row[]),
    );
  }
  const available = rows.reduce((s, r) => s + (req.includeSelfGraded ? r.questions : r.gradable), 0);
  const count = Math.max(1, Math.min(100, req.count));
  // Visit lessons in random order and stop once there are enough candidates (keeps disk reads low).
  const order = seededShuffle(rows, req.seed);
  const candidates: PoolQuestion[] = [];
  let used = 0;
  for (const r of order) {
    const qs = (await lessonQuestions(r.root_id, r.path, r.id)).filter(
      (q) => gradable(q, !!req.includeSelfGraded) && (req.skipTemplated === false || !isTemplatedQuestion(q.prompt, r.title)),
    );
    if (!qs.length) continue;
    used++;
    for (const q of qs) candidates.push({ question: q, lessonId: r.id, lessonTitle: r.title, courseId: r.course_id, href: `/learn/${r.course_slug}/${r.slug}`, courseTitle: r.course_title });
    if (candidates.length >= count * 3 && used >= Math.min(order.length, Math.ceil(count / 2))) break;
  }
  // Spread across lessons: round-robin over lessons, each lesson's questions shuffled.
  const byLesson = new Map<string, PoolQuestion[]>();
  for (const c of seededShuffle(candidates, req.seed + 1)) byLesson.set(c.lessonId, [...(byLesson.get(c.lessonId) ?? []), c]);
  const picked: PoolQuestion[] = [];
  const queues = [...byLesson.values()];
  while (picked.length < count && queues.some((q) => q.length)) {
    for (const q of queues) {
      const next = q.shift();
      if (next) picked.push(next);
      if (picked.length >= count) break;
    }
  }
  return { questions: seededShuffle(picked, req.seed + 2), lessonsUsed: used, available };
}

/** Questions for specific spaced-repetition cards (`${lessonId}::${promptHash}`); reads only those lessons. */
export async function questionsForCards(keys: string[]): Promise<{ questions: PoolQuestion[]; missing: string[] }> {
  const db = getDb();
  if (!db) return { questions: [], missing: keys };
  const byLesson = new Map<string, Set<string>>();
  for (const k of keys.slice(0, 300)) {
    const i = k.lastIndexOf("::");
    if (i < 0) continue;
    const lid = k.slice(0, i);
    byLesson.set(lid, (byLesson.get(lid) ?? new Set()).add(k.slice(i + 2)));
  }
  const out: PoolQuestion[] = [];
  const found = new Set<string>();
  for (const [lid, hashes] of byLesson) {
    const r = db
      .prepare("SELECT l.id, l.slug, l.title, l.root_id, l.path, c.slug AS course_slug, c.title AS course_title, c.id AS course_id FROM lessons l JOIN courses c ON c.id = l.course_id WHERE l.id = ?")
      .get(lid) as { id: string; slug: string; title: string; root_id: string; path: string; course_slug: string; course_title: string; course_id: string } | undefined;
    if (!r) continue;
    for (const q of await lessonQuestions(r.root_id, r.path, r.id)) {
      const h = sha1Hex(q.prompt.trim()).slice(0, 10);
      if (!hashes.has(h) || found.has(`${lid}::${h}`)) continue;
      found.add(`${lid}::${h}`);
      out.push({ question: q, lessonId: r.id, lessonTitle: r.title, courseId: r.course_id, href: `/learn/${r.course_slug}/${r.slug}`, courseTitle: r.course_title });
    }
  }
  return { questions: out, missing: keys.filter((k) => !found.has(k)) };
}
