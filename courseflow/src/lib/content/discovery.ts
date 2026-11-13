// Course Discovery Engine: walks a content root and infers
//   Domain → Category (→ Sub-category) → Course → Module (→ group) → Lesson
// from the folder structure, sidecar manifests and per-file metadata.
// It never writes into the content root.
import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import { parse as parseYaml } from "yaml";
import {
  classifyMarkdownFile,
  isAppendixName,
  isCodeProject,
  isIgnoredDir,
  isResourceDirName,
  isTaxonomyName,
  isWrapperDirName,
  levelFromTaxonomy,
  overviewPriority,
  taxonomyTitle,
  type DocKind,
} from "./classify.ts";
import { humanizeName, leadingNumber, naturalCompare, normRel, readingMinutes, slugify } from "./text.ts";
import { shortHash } from "./hash.ts";
import type { Frontmatter, HeadingInfo } from "./lesson-meta.ts";

// ---------------------------------------------------------------- tree walk

export interface MdFile {
  name: string;
  rel: string; // relative to content root
  mtime: number;
  size: number;
}

export interface DirNode {
  name: string;
  rel: string;
  dirs: DirNode[];
  md: MdFile[];
  files: string[]; // non-markdown file names
  resource: boolean; // this folder (and below) is supporting material
  code: boolean; // code project
}

/** Small concurrency limiter for filesystem calls (the content disk can be slow). */
export function limiter(max: number) {
  let active = 0;
  const queue: (() => void)[] = [];
  return async function run<T>(fn: () => Promise<T>): Promise<T> {
    if (active >= max) await new Promise<void>((r) => queue.push(r));
    active++;
    try {
      return await fn();
    } finally {
      active--;
      queue.shift()?.();
    }
  };
}

const fsLimit = limiter(24);

export async function walkDir(rootAbs: string, rel: string, inResource = false, depth = 0): Promise<DirNode> {
  const abs = path.join(rootAbs, rel);
  const name = rel ? path.basename(rel) : "";
  let entries: fs.Dirent[] = [];
  try {
    entries = await fsLimit(() => fsp.readdir(abs, { withFileTypes: true }));
  } catch {
    entries = [];
  }
  const dirNames = entries.filter((e) => e.isDirectory()).map((e) => e.name);
  const fileNames = entries.filter((e) => e.isFile()).map((e) => e.name);
  const code = isCodeProject(fileNames, dirNames);
  const resource = inResource || code || (depth > 0 && isResourceDirName(name));
  const node: DirNode = { name, rel: normRel(rel), dirs: [], md: [], files: [], resource, code };
  const mdNames = fileNames.filter((f) => /\.(md|markdown)$/i.test(f));
  node.files = fileNames.filter((f) => !/\.(md|markdown)$/i.test(f));
  node.md = await Promise.all(
    mdNames.map(async (f) => {
      const r = normRel(path.posix.join(node.rel, f));
      try {
        const st = await fsLimit(() => fsp.stat(path.join(abs, f)));
        return { name: f, rel: r, mtime: Math.floor(st.mtimeMs), size: st.size };
      } catch {
        return { name: f, rel: r, mtime: 0, size: 0 };
      }
    }),
  );
  const subdirs = dirNames.filter((d) => !isIgnoredDir(d)).sort(naturalCompare);
  node.dirs = await Promise.all(subdirs.map((d) => walkDir(rootAbs, path.posix.join(node.rel, d), resource, depth + 1)));
  node.md.sort((a, b) => naturalCompare(a.name, b.name));
  return node;
}

export function* iterMd(node: DirNode): Generator<MdFile> {
  yield* node.md;
  for (const d of node.dirs) yield* iterMd(d);
}

export function collectPaths(node: DirNode, into: Set<string>): Set<string> {
  into.add(node.rel);
  for (const f of node.md) into.add(f.rel);
  for (const f of node.files) into.add(normRel(path.posix.join(node.rel, f)));
  for (const d of node.dirs) collectPaths(d, into);
  return into;
}

// ---------------------------------------------------------------- doc lookup

export interface DocInfo {
  rowid: number;
  path: string;
  h1: string | null;
  description: string | null;
  fm: Frontmatter;
  headings: HeadingInfo[];
  words: number;
  questions: number;
  gradable: number;
  hasMermaid: boolean;
  hasMath: boolean;
  hasImages: boolean;
  hasCode: boolean;
  links: string[];
  lang: string;
  objectives: string[];
  prerequisites: string[];
  sourceUrl: string | null;
  mtime: number;
  hash: string | null;
}

export type DocLookup = (rel: string) => DocInfo | undefined;

// ---------------------------------------------------------------- manifests

export interface CourseManifest {
  id?: string;
  title?: string;
  description?: string;
  level?: string;
  language?: string;
  tags?: string[];
  objectives?: string[];
  prerequisites?: string[];
  hidden?: boolean;
  /** Override module titles/order by folder name relative to the course. */
  modules?: { dir: string; title?: string; order?: number; hidden?: boolean }[];
  /** Per-lesson overrides keyed by path relative to the course folder. */
  lessons?: Record<string, { title?: string; order?: number; kind?: DocKind; hidden?: boolean }>;
}

/** Content folders may already hold a course.json/yaml in another tool's format: keep only fields we understand. */
export function sanitizeManifest(raw: Record<string, unknown>): CourseManifest {
  const str = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : undefined);
  const list = (v: unknown) => (Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : undefined);
  const m: CourseManifest = {
    id: str(raw.id),
    title: str(raw.title),
    description: str(raw.description),
    level: str(raw.level),
    language: str(raw.language),
    tags: list(raw.tags),
    objectives: list(raw.objectives),
    prerequisites: list(raw.prerequisites),
    hidden: raw.hidden === true,
  };
  if (Array.isArray(raw.modules)) {
    m.modules = raw.modules
      .filter((x): x is Record<string, unknown> => !!x && typeof x === "object" && typeof (x as { dir?: unknown }).dir === "string")
      .map((x) => ({ dir: String(x.dir), title: str(x.title), order: typeof x.order === "number" ? x.order : undefined, hidden: x.hidden === true }));
  }
  if (raw.lessons && typeof raw.lessons === "object" && !Array.isArray(raw.lessons)) m.lessons = raw.lessons as CourseManifest["lessons"];
  for (const k of Object.keys(m) as (keyof CourseManifest)[]) if (m[k] === undefined) delete m[k];
  return m;
}

export function readManifest(courseAbs: string, manifestsDir: string | null, courseId: string): CourseManifest | null {
  const candidates = [
    path.join(courseAbs, "courseflow.yaml"),
    path.join(courseAbs, "course.yaml"),
    path.join(courseAbs, "course.yml"),
    path.join(courseAbs, "course.json"),
    ...(manifestsDir ? [path.join(manifestsDir, `${courseId}.yaml`), path.join(manifestsDir, `${courseId}.json`)] : []),
  ];
  let merged: CourseManifest | null = null;
  for (const file of candidates) {
    try {
      if (!fs.existsSync(file)) continue;
      const raw = fs.readFileSync(file, "utf8");
      const data = (file.endsWith(".json") ? JSON.parse(raw) : parseYaml(raw)) as Record<string, unknown>;
      if (data && typeof data === "object" && !Array.isArray(data)) merged = { ...(merged ?? {}), ...sanitizeManifest(data) };
    } catch {
      /* invalid manifest → reported by the validator, ignored here */
    }
  }
  return merged;
}

// ---------------------------------------------------------------- catalog rows

export interface DomainRow {
  id: string;
  title: string;
  ord: number;
  dir: string;
  rootId: string;
}
export interface CategoryRow {
  id: string;
  domainId: string;
  parentId: string | null;
  title: string;
  ord: number;
  dir: string;
  level: string | null;
}
export interface ModuleRow {
  id: string;
  courseId: string;
  ord: number;
  title: string;
  dir: string;
  overviewPath: string | null;
  lessonCount: number;
  questionCount: number;
  kind: "module" | "intro" | "appendix" | "overview";
}
export interface LessonRow {
  id: string;
  slug: string;
  courseId: string;
  moduleId: string | null;
  ord: number;
  groupLabel: string | null;
  title: string;
  description: string | null;
  rootId: string;
  path: string;
  kind: DocKind;
  docRowid: number;
  words: number;
  questions: number;
  gradable: number;
  minutes: number;
  hasMermaid: boolean;
  hasMath: boolean;
  hasImages: boolean;
  hasCode: boolean;
  tags: string[];
  lang: string;
  mtime: number;
}
export interface CourseRow {
  id: string;
  slug: string;
  rootId: string;
  dir: string;
  domainId: string;
  categoryId: string;
  subcategoryId: string | null;
  title: string;
  description: string | null;
  language: string;
  level: string | null;
  tags: string[];
  objectives: string[];
  prerequisites: string[];
  sourceUrl: string | null;
  overviewPath: string | null;
  structure: string;
  moduleCount: number;
  lessonCount: number;
  resourceCount: number;
  questionCount: number;
  gradableCount: number;
  wordCount: number;
  estMinutes: number;
  media: { mermaid: number; math: number; images: number; code: number };
  updatedAt: number;
  status: "ready" | "partial" | "overview-only" | "empty";
  ord: number;
}
export interface IssueRow {
  courseId: string;
  lessonId: string | null;
  severity: "error" | "warning" | "info";
  code: string;
  message: string;
  detail: string | null;
}

export interface CatalogBuild {
  domains: DomainRow[];
  categories: CategoryRow[];
  courses: CourseRow[];
  modules: ModuleRow[];
  lessons: LessonRow[];
  issues: IssueRow[];
  skipped: { path: string; reason: string }[];
}

// ---------------------------------------------------------------- helpers

function cleanHeadingTitle(t: string): string {
  return t
    .replace(/^(?:module|mô[- ]?đun|chương|chuong|phần|phan|tuần|tuan|week|section|part|chapter|bài|bai|lesson|unit)\s*\d+\s*[.:)\-–—]*\s*/i, "")
    .replace(/^\d+(?:\.\d+)*\s*[.:)\-–—]+\s*/, "")
    .trim();
}

function genericTitle(t: string | null | undefined): boolean {
  if (!t) return true;
  return /^(readme|index|mục lục( khóa học| module)?|overview|tổng quan|table of contents|giới thiệu)$/i.test(t.trim());
}

function hasLessons(node: DirNode, kind: (f: MdFile, inResource: boolean) => DocKind | null): boolean {
  if (node.resource) return false;
  if (node.md.some((f) => kind(f, false) === "lesson")) return true;
  return node.dirs.some((d) => hasLessons(d, kind));
}

function compareSegments(a: string[], b: string[]): number {
  const n = Math.min(a.length, b.length);
  for (let i = 0; i < n; i++) {
    const c = naturalCompare(a[i].replace(/\.(md|markdown)$/i, ""), b[i].replace(/\.(md|markdown)$/i, ""));
    if (c) return c;
  }
  return a.length - b.length;
}

function lessonIdFor(courseId: string, relInCourse: string, name: string, fm: Frontmatter): string {
  if (fm.id) return slugify(String(fm.id), 120) || `${courseId}-${shortHash(relInCourse)}`;
  const ud = name.match(/^([A-Z]{1,4}\d+-S\d+-L\d+)/i);
  if (ud) return `${courseId}--${ud[1].toLowerCase()}`;
  return `${courseId}--${shortHash(relInCourse, 12)}`;
}

// ---------------------------------------------------------------- course build

interface CourseContext {
  rootId: string;
  domainId: string;
  categoryId: string;
  subcategoryId: string | null;
  levelHint: string | null;
  manifestsDir: string | null;
  rootAbs: string;
  allPaths: Set<string>;
  ord: number;
}

export function buildCourse(
  node: DirNode,
  courseId: string,
  ctx: CourseContext,
  getDoc: DocLookup,
  out: CatalogBuild,
): void {
  const courseRel = node.rel;
  const manifest = readManifest(path.join(ctx.rootAbs, courseRel), ctx.manifestsDir, courseId);
  if (manifest?.hidden) {
    out.skipped.push({ path: courseRel, reason: "manifest hidden" });
    return;
  }
  const id = manifest?.id ? slugify(manifest.id) || courseId : courseId;
  const relInCourse = (rel: string) => normRel(path.posix.relative(courseRel, rel));
  const lessonOverride = (rel: string) => manifest?.lessons?.[relInCourse(rel)];

  const kindOf = (f: MdFile, inResource: boolean): DocKind | null => {
    const doc = getDoc(f.rel);
    const ov = lessonOverride(f.rel);
    if (ov?.hidden || doc?.fm.draft) return null;
    if (ov?.kind) return ov.kind;
    if (inResource) return "resource";
    return classifyMarkdownFile(f.name, doc?.fm.kind);
  };

  // 1. Effective content root: collapse single-child chains and wrapper folders.
  const rootLessons: MdFile[] = [];
  const overviewDocs: MdFile[] = [];
  const resourceDocs: MdFile[] = [];
  const takeDirect = (n: DirNode) => {
    for (const f of n.md) {
      const k = kindOf(f, n.resource);
      if (k === "lesson") rootLessons.push(f);
      else if (k === "overview") overviewDocs.push(f);
      else if (k === "resource") resourceDocs.push(f);
    }
  };
  let eff = node;
  const structure: string[] = [];
  for (let guard = 0; guard < 6; guard++) {
    takeDirect(eff);
    const contentDirs = eff.dirs.filter((d) => hasLessons(d, kindOf));
    const directLessons = eff.md.some((f) => kindOf(f, eff.resource) === "lesson");
    if (contentDirs.length === 1 && (!directLessons || isWrapperDirName(contentDirs[0].name)) && contentDirs[0].dirs.some((d) => hasLessons(d, kindOf))) {
      structure.push(`collapse:${contentDirs[0].name}`);
      eff = contentDirs[0];
      continue;
    }
    break;
  }

  // Resource docs anywhere below (resource folders, code projects).
  const gatherResources = (n: DirNode) => {
    for (const d of n.dirs) {
      if (d.resource) {
        for (const f of iterMd(d)) if (kindOf(f, true)) resourceDocs.push(f);
      } else gatherResources(d);
    }
  };
  gatherResources(node);

  const modules: ModuleRow[] = [];
  const lessons: LessonRow[] = [];
  const usedSlugs = new Set<string>();
  const usedIds = new Set<string>();

  const makeLesson = (f: MdFile, moduleId: string | null, groupLabel: string | null, kind: DocKind): LessonRow | null => {
    const doc = getDoc(f.rel);
    if (!doc) return null;
    const ov = lessonOverride(f.rel);
    let lid = lessonIdFor(id, relInCourse(f.rel), f.name, doc.fm);
    if (usedIds.has(lid)) lid = `${lid}-${shortHash(f.rel, 6)}`;
    usedIds.add(lid);
    let slug = slugify(doc.fm.slug ?? f.name.replace(/\.(md|markdown)$/i, ""), 70) || lid.slice(-12);
    if (usedSlugs.has(slug)) {
      let n = 2;
      while (usedSlugs.has(`${slug}-${n}`)) n++;
      slug = `${slug}-${n}`;
    }
    usedSlugs.add(slug);
    const title = ov?.title ?? doc.fm.title ?? (genericTitle(doc.h1) ? null : doc.h1) ?? humanizeName(f.name);
    return {
      id: lid,
      slug,
      courseId: id,
      moduleId,
      ord: 0,
      groupLabel,
      title,
      description: doc.description,
      rootId: ctx.rootId,
      path: f.rel,
      kind,
      docRowid: doc.rowid,
      words: doc.words,
      questions: doc.questions,
      gradable: doc.gradable,
      minutes: typeof doc.fm.duration === "number" ? doc.fm.duration : readingMinutes(doc.words),
      hasMermaid: doc.hasMermaid,
      hasMath: doc.hasMath,
      hasImages: doc.hasImages,
      hasCode: doc.hasCode,
      tags: doc.fm.tags ?? [],
      lang: doc.lang,
      mtime: f.mtime,
    };
  };

  const sortLessons = (items: { f: MdFile; segs: string[] }[]) => {
    items.sort((a, b) => compareSegments(a.segs, b.segs));
    const withOrder = items.map((it, i) => {
      const doc = getDoc(it.f.rel);
      const o = lessonOverride(it.f.rel)?.order ?? doc?.fm.order;
      return { ...it, key: typeof o === "number" ? o : null, i };
    });
    if (withOrder.some((x) => x.key !== null)) {
      withOrder.sort((a, b) => (a.key ?? a.i + 1e6) - (b.key ?? b.i + 1e6) || a.i - b.i);
    }
    return withOrder;
  };

  const addModule = (title: string, dir: string, kind: ModuleRow["kind"], files: { f: MdFile; segs: string[]; group: string | null }[], overview: MdFile | null) => {
    if (!files.length) return;
    const mid = `${id}--m-${shortHash(dir + "|" + kind, 8)}`;
    const mod: ModuleRow = { id: mid, courseId: id, ord: modules.length + 1, title, dir, overviewPath: overview?.rel ?? null, lessonCount: 0, questionCount: 0, kind };
    const groupOf = new Map(files.map((x) => [x.f.rel, x.group]));
    for (const it of sortLessons(files)) {
      const l = makeLesson(it.f, mid, groupOf.get(it.f.rel) ?? null, "lesson");
      if (!l) continue;
      lessons.push(l);
      mod.lessonCount++;
      mod.questionCount += l.questions;
    }
    if (mod.lessonCount) modules.push(mod);
  };

  // 2. Root-level lessons split into intro / appendix.
  const contentDirs = eff.dirs.filter((d) => hasLessons(d, kindOf));
  const intro = rootLessons.filter((f) => !contentDirs.length || !isAppendixName(f.name));
  const appendix = contentDirs.length ? rootLessons.filter((f) => isAppendixName(f.name)) : [];
  addModule(contentDirs.length ? "Mở đầu" : "Nội dung khóa học", eff.rel, "intro", intro.map((f) => ({ f, segs: [f.name], group: null })), null);

  // 3. One module per content folder; deeper folders become groups.
  const modOverrides = new Map((manifest?.modules ?? []).map((m) => [normRel(m.dir), m]));
  const moduleDirs = contentDirs
    .map((d, i) => ({ d, i, ov: modOverrides.get(relInCourse(d.rel)) ?? modOverrides.get(d.name) }))
    .filter((x) => !x.ov?.hidden)
    .sort((a, b) => (a.ov?.order ?? a.i + 1e6) - (b.ov?.order ?? b.i + 1e6));
  for (const { d, ov } of moduleDirs) {
    const files: { f: MdFile; segs: string[]; group: string | null }[] = [];
    let overview: MdFile | null = null;
    const visit = (n: DirNode, segs: string[]) => {
      if (n.resource) return;
      for (const f of n.md) {
        const k = kindOf(f, false);
        if (k === "lesson") files.push({ f, segs: [...segs, f.name], group: segs.length ? segs.map(humanizeName).join(" › ") : null });
        else if (k === "overview" && segs.length === 0 && (!overview || overviewPriority(f.name) < overviewPriority(overview.name))) overview = f;
        else if (k === "overview" || k === "resource") resourceDocs.push(f);
      }
      for (const sub of n.dirs) visit(sub, [...segs, sub.name]);
    };
    visit(d, []);
    const ovDoc = overview ? getDoc((overview as MdFile).rel) : undefined;
    const fromH1 = ovDoc?.h1 && !genericTitle(cleanHeadingTitle(ovDoc.h1)) ? cleanHeadingTitle(ovDoc.h1) : null;
    const title = ov?.title ?? fromH1 ?? humanizeName(d.name);
    addModule(title, d.rel, "module", files, overview);
  }
  addModule("Tài liệu bổ sung", eff.rel + "#appendix", "appendix", appendix.map((f) => ({ f, segs: [f.name], group: null })), null);

  // 4. Course overview doc.
  overviewDocs.sort((a, b) => overviewPriority(a.name) - overviewPriority(b.name) || a.rel.split("/").length - b.rel.split("/").length);
  const overview = overviewDocs[0] ?? null;
  const ovDoc = overview ? getDoc(overview.rel) : undefined;

  let status: CourseRow["status"] = "ready";
  if (!lessons.length) {
    // Overview-only courses: make substantial overview docs readable as lessons.
    const promotable = overviewDocs.filter((f) => (getDoc(f.rel)?.words ?? 0) >= 120);
    addModule("Tổng quan khóa học", courseRel + "#overview", "overview", promotable.map((f) => ({ f, segs: f.rel.split("/"), group: null })), null);
    status = lessons.length ? "overview-only" : "empty";
  }

  // Resource + overview docs are readable but excluded from progress.
  const resourceSeen = new Set(lessons.map((l) => l.path));
  for (const f of [...overviewDocs, ...resourceDocs]) {
    if (resourceSeen.has(f.rel)) continue;
    resourceSeen.add(f.rel);
    const k = overviewDocs.includes(f) ? "overview" : "resource";
    const l = makeLesson(f, null, null, k);
    if (l) lessons.push(l);
  }

  const real = lessons.filter((l) => l.kind === "lesson");
  real.forEach((l, i) => (l.ord = i + 1));
  lessons.filter((l) => l.kind !== "lesson").forEach((l, i) => (l.ord = 100000 + i));

  const words = real.reduce((s, l) => s + l.words, 0);
  if (status === "ready") {
    const tiny = real.filter((l) => l.words < 80).length;
    if (real.length < 3 || words / Math.max(1, real.length) < 150 || tiny / Math.max(1, real.length) > 0.4) status = "partial";
  }

  const firstDocs = real.slice(0, 5).map((l) => getDoc(l.path));
  const langVotes = new Map<string, number>();
  for (const d of [ovDoc, ...firstDocs]) if (d) langVotes.set(d.lang, (langVotes.get(d.lang) ?? 0) + 1);
  const language = manifest?.language ?? ([...langVotes.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? "vi");

  const folderTitle = humanizeName(node.name);
  const title =
    manifest?.title ?? (ovDoc?.fm.title as string | undefined) ?? (ovDoc?.h1 && !genericTitle(ovDoc.h1) ? ovDoc.h1 : null) ?? folderTitle;
  const description =
    manifest?.description ?? ovDoc?.description ?? null;
  const objectives = manifest?.objectives ?? ovDoc?.objectives ?? [];
  const prerequisites = manifest?.prerequisites ?? ovDoc?.prerequisites ?? [];
  const tags = [...new Set([...(manifest?.tags ?? []), ...((ovDoc?.fm.tags as string[] | undefined) ?? [])])];

  const resourceFiles = countResourceFiles(node);
  const course: CourseRow = {
    id,
    slug: id,
    rootId: ctx.rootId,
    dir: courseRel,
    domainId: ctx.domainId,
    categoryId: ctx.categoryId,
    subcategoryId: ctx.subcategoryId,
    title: title.replace(/\s+/g, " ").trim(),
    description,
    language,
    level: manifest?.level ?? (ovDoc?.fm.difficulty as string | undefined) ?? ctx.levelHint,
    tags,
    objectives,
    prerequisites,
    sourceUrl: ovDoc?.sourceUrl ?? firstDocs.find((d) => d?.sourceUrl)?.sourceUrl ?? null,
    overviewPath: overview?.rel ?? null,
    structure: structure.join(",") || "flat",
    moduleCount: modules.filter((m) => m.kind !== "appendix").length,
    lessonCount: real.length,
    resourceCount: lessons.length - real.length + resourceFiles,
    questionCount: real.reduce((s, l) => s + l.questions, 0),
    gradableCount: real.reduce((s, l) => s + l.gradable, 0),
    wordCount: words,
    estMinutes: real.reduce((s, l) => s + l.minutes, 0),
    media: {
      mermaid: real.filter((l) => l.hasMermaid).length,
      math: real.filter((l) => l.hasMath).length,
      images: real.filter((l) => l.hasImages).length,
      code: real.filter((l) => l.hasCode).length,
    },
    updatedAt: Math.max(0, ...lessons.map((l) => l.mtime)),
    status,
    ord: ctx.ord,
  };

  out.courses.push(course);
  out.modules.push(...modules);
  out.lessons.push(...lessons);
  collectIssues(course, modules, lessons, getDoc, ctx, out.issues, node, kindOf);
}

function countResourceFiles(node: DirNode): number {
  let n = 0;
  const visit = (d: DirNode) => {
    n += d.files.filter((f) => /\.(pdf|ipynb|zip|pptx?|docx?|xlsx?|csv|mp4|mp3|webm|wav|py|js|ts|blend|psd|fig)$/i.test(f)).length;
    d.dirs.forEach(visit);
  };
  visit(node);
  return n;
}

// ---------------------------------------------------------------- automated quality checks

function collectIssues(
  course: CourseRow,
  modules: ModuleRow[],
  lessons: LessonRow[],
  getDoc: DocLookup,
  ctx: CourseContext,
  issues: IssueRow[],
  node: DirNode,
  kindOf: (f: MdFile, r: boolean) => DocKind | null,
): void {
  const add = (severity: IssueRow["severity"], code: string, message: string, lessonId: string | null = null, detail: string | null = null) =>
    issues.push({ courseId: course.id, lessonId, severity, code, message, detail });

  if (course.status === "empty") add("error", "course-empty", "Khóa học chưa có bài học Markdown nào");
  if (course.status === "overview-only") add("warning", "course-overview-only", "Khóa học mới chỉ có file tổng quan, chưa có bài học riêng");
  if (!course.overviewPath) add("info", "course-no-overview", "Thiếu README / mục lục khóa học");
  if (!course.description) add("warning", "course-no-description", "Không tìm thấy mô tả khóa học");
  if (!course.objectives.length) add("info", "course-no-objectives", "Chưa có mục tiêu học tập (mục “Mục tiêu” trong README hoặc manifest)");

  const real = lessons.filter((l) => l.kind === "lesson");
  const titles = new Map<string, LessonRow[]>();
  const hashes = new Map<string, LessonRow[]>();
  for (const l of real) {
    const doc = getDoc(l.path);
    const key = l.title.toLowerCase();
    titles.set(key, [...(titles.get(key) ?? []), l]);
    if (doc?.hash) hashes.set(doc.hash, [...(hashes.get(doc.hash) ?? []), l]);
    if (!doc?.h1 && !doc?.fm.title) add("info", "lesson-no-title", "Bài học không có tiêu đề H1/frontmatter, dùng tên file", l.id, l.path);
    if (l.words < 80) add("warning", "lesson-too-short", `Bài học rất ngắn (${l.words} từ)`, l.id, l.path);
    if (doc) {
      const dir = path.posix.dirname(l.path);
      for (const link of doc.links) {
        const clean = decodeSafe(link.split("#")[0].split("?")[0]);
        if (!clean) continue;
        const target = normRel(path.posix.normalize(path.posix.join(dir, clean)));
        if (target.startsWith("..") || !ctx.allPaths.has(target)) {
          add("error", "broken-link", `Liên kết/tài nguyên không tìm thấy: ${link}`, l.id, l.path);
        }
      }
    }
  }
  for (const [, group] of titles) {
    if (group.length > 1 && new Set(group.map((g) => g.moduleId)).size === 1)
      add("warning", "duplicate-title", `Trùng tiêu đề bài học: “${group[0].title}” (${group.length} bài)`, group[0].id, group.map((g) => g.path).join("\n"));
  }
  for (const [, group] of hashes) {
    if (group.length > 1) add("warning", "duplicate-content", `Nội dung trùng lặp hoàn toàn (${group.length} file)`, group[0].id, group.map((g) => g.path).join("\n"));
  }
  for (const m of modules) {
    const ls = real.filter((l) => l.moduleId === m.id);
    const unnumbered = ls.filter((l) => leadingNumber(path.posix.basename(l.path)) === null && getDoc(l.path)?.fm.order === undefined);
    if (ls.length > 2 && unnumbered.length === ls.length) add("info", "order-unclear", `Module “${m.title}”: tên file không có số thứ tự, sắp xếp theo bảng chữ cái`);
  }
  // Folders that look like modules but hold no markdown.
  const visit = (d: DirNode, depth: number) => {
    for (const sub of d.dirs) {
      if (sub.resource) continue;
      const mdCount = [...iterMd(sub)].filter((f) => kindOf(f, false)).length;
      if (mdCount === 0 && depth < 2 && isTaxonomyLikeModule(sub.name)) add("info", "empty-module-folder", `Thư mục “${sub.name}” không có bài học Markdown`, null, sub.rel);
      else visit(sub, depth + 1);
    }
  };
  visit(node, 0);
  if (real.length && course.gradableCount === 0) add("info", "no-quiz", "Khóa học chưa có câu hỏi trắc nghiệm có đáp án");
}

function isTaxonomyLikeModule(name: string): boolean {
  return /^(\d+|module|chương|chuong|phần|phan|week|tuần|tuan|section|part|chapter)/i.test(name);
}

function decodeSafe(s: string): string {
  try {
    return decodeURIComponent(s);
  } catch {
    return s;
  }
}

// ---------------------------------------------------------------- taxonomy walk

function looksLikeSubcategory(node: DirNode): boolean {
  if (!isTaxonomyName(node.name)) return false;
  if (node.files.some((f) => /^(courseflow|course)\.(ya?ml|json)$/i.test(f))) return false;
  const lessonMd = node.md.filter((f) => classifyMarkdownFile(f.name) === "lesson");
  if (lessonMd.length) return false;
  // Sub-categories hold course folders, which in turn hold markdown.
  return node.dirs.length > 0 && node.dirs.some((d) => d.md.length > 0 || d.dirs.length > 0);
}

export interface BuildOptions {
  rootId: string;
  rootAbs: string;
  manifestsDir: string | null;
}

export function buildCatalog(tree: DirNode, getDoc: DocLookup, opts: BuildOptions): CatalogBuild {
  const out: CatalogBuild = { domains: [], categories: [], courses: [], modules: [], lessons: [], issues: [], skipped: [] };
  const allPaths = collectPaths(tree, new Set());
  const usedCourseIds = new Set<string>();
  let courseOrd = 0;
  const courseIdFor = (node: DirNode) => {
    let cid = slugify(node.name, 80) || shortHash(node.rel);
    if (usedCourseIds.has(cid)) cid = `${cid}-${shortHash(node.rel, 6)}`;
    usedCourseIds.add(cid);
    return cid;
  };

  tree.dirs.forEach((domainNode, di) => {
    if (!isTaxonomyName(domainNode.name)) {
      out.skipped.push({ path: domainNode.rel, reason: "not a numbered domain folder" });
      return;
    }
    const domainId = slugify(domainNode.name);
    out.domains.push({ id: domainId, title: taxonomyTitle(domainNode.name), ord: di + 1, dir: domainNode.rel, rootId: opts.rootId });
    const misc: DirNode[] = [];
    let catOrd = 0;
    const doCourse = (cnode: DirNode, categoryId: string, subId: string | null, levelHint: string | null) => {
      if (cnode.resource && cnode.code) {
        out.skipped.push({ path: cnode.rel, reason: "code project, not a course" });
        return;
      }
      const hasMd = iterMd(cnode).next().done === false;
      const cid = courseIdFor(cnode);
      if (!hasMd) {
        out.skipped.push({ path: cnode.rel, reason: "no markdown" });
        out.issues.push({ courseId: cid, lessonId: null, severity: "error", code: "course-empty", message: "Thư mục khóa học không có file Markdown", detail: cnode.rel });
        return;
      }
      buildCourse(cnode, cid, { rootId: opts.rootId, domainId, categoryId, subcategoryId: subId, levelHint, manifestsDir: opts.manifestsDir, rootAbs: opts.rootAbs, allPaths, ord: ++courseOrd }, getDoc, out);
    };
    for (const catNode of domainNode.dirs) {
      if (!isTaxonomyName(catNode.name)) {
        misc.push(catNode);
        continue;
      }
      const categoryId = `${domainId}--${slugify(catNode.name)}`;
      const level = levelFromTaxonomy(catNode.name);
      out.categories.push({ id: categoryId, domainId, parentId: null, title: taxonomyTitle(catNode.name), ord: ++catOrd, dir: catNode.rel, level });
      let subOrd = 0;
      for (const child of catNode.dirs) {
        if (looksLikeSubcategory(child)) {
          const subId = `${categoryId}--${slugify(child.name)}`;
          const subLevel = levelFromTaxonomy(child.name) ?? level;
          out.categories.push({ id: subId, domainId, parentId: categoryId, title: taxonomyTitle(child.name), ord: ++subOrd, dir: child.rel, level: subLevel });
          for (const c of child.dirs) doCourse(c, categoryId, subId, subLevel);
        } else doCourse(child, categoryId, null, level);
      }
    }
    if (misc.length) {
      const categoryId = `${domainId}--khac`;
      out.categories.push({ id: categoryId, domainId, parentId: null, title: "Khác", ord: 999, dir: domainNode.rel, level: null });
      for (const c of misc) doCourse(c, categoryId, null, null);
    }
  });
  return out;
}
