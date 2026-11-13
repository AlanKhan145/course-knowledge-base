// Server-side lesson renderer: markdown → React tree + TOC + quizzes.
// Review-question sections are lifted out of the markdown and rendered as interactive quizzes;
// the source file is never modified.
import path from "node:path";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import type { ReactNode } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeKatex from "rehype-katex";
import { toJsxRuntime, type Components } from "hast-util-to-jsx-runtime";
import GithubSlugger from "github-slugger";
import { parse as parseYaml } from "yaml";
import type { Root } from "hast";
import { splitFrontmatter } from "../content/lesson-meta.ts";
import { parseQuizSections } from "../assessment/parse-markdown-quiz.ts";
import { quizFileSchema, type Question, type Quiz } from "../assessment/schema.ts";
import { fileExists, lessonByPath, readLessonSource } from "../content/repository.ts";
import { remarkCallouts, rehypeCodeBlocks, rehypeEmbeds, rehypeHeadingIds, rehypeTableWrap, type TocItem } from "./plugins.ts";
import { CodeBlock } from "@/components/markdown/CodeBlock";
import { Callout } from "@/components/markdown/Callout";
import { LessonImage } from "@/components/markdown/LessonImage";
import { YouTubeEmbed } from "@/components/markdown/YouTubeEmbed";
import { TaskCheckbox } from "@/components/markdown/TaskCheckbox";
import { QuizBlock } from "@/features/assessment/QuizBlock";

export interface RenderContext {
  lessonId: string;
  lessonTitle: string;
  rootId: string;
  lessonPath: string;
  courseId: string;
  courseSlug: string;
}

export interface RenderedLesson {
  body: ReactNode;
  toc: TocItem[];
  quizzes: Quiz[];
}

const schema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames ?? []), "aside", "details", "summary", "kbd", "mark", "figure", "figcaption", "video", "audio", "source", "u", "abbr", "center", "small"],
  attributes: {
    ...defaultSchema.attributes,
    "*": [...(defaultSchema.attributes?.["*"] ?? []), "className", "align", "title"],
    aside: ["dataCallout", "dataTitle"],
    img: [...(defaultSchema.attributes?.img ?? []), "width", "height", "loading"],
    video: ["src", "controls", "poster", "width", "height", "loop", "muted", "playsInline"],
    audio: ["src", "controls"],
    source: ["src", "type"],
    code: ["className"],
    details: ["open"],
  },
};

export function assetUrl(rootId: string, rel: string): string {
  return `/api/asset/${encodeURIComponent(rootId)}/${rel.split("/").map(encodeURIComponent).join("/")}`;
}

function decode(s: string): string {
  try {
    return decodeURIComponent(s);
  } catch {
    return s;
  }
}

type Resolved = { kind: "external" | "anchor" | "lesson" | "asset"; href: string; filePath?: string } | { kind: "broken"; href: string; filePath?: string };

export function resolveHref(ctx: RenderContext, raw: string): Resolved {
  const href = raw.trim().replace(/^<|>$/g, "");
  if (!href) return { kind: "broken", href: raw };
  if (/^(https?:|mailto:|tel:)/i.test(href)) return { kind: "external", href };
  if (href.startsWith("#")) return { kind: "anchor", href };
  if (/^(javascript|data|vbscript|file):/i.test(href)) return { kind: "broken", href: raw };
  const [p, hash] = href.split("#");
  const clean = decode(p.split("?")[0]);
  const target = clean.startsWith("/")
    ? path.posix.normalize(clean.slice(1))
    : path.posix.normalize(path.posix.join(path.posix.dirname(ctx.lessonPath), clean));
  if (!target || target.startsWith("..")) return { kind: "broken", href: raw };
  if (/\.(md|markdown)$/i.test(target)) {
    const l = lessonByPath(ctx.rootId, target);
    if (l) return { kind: "lesson", href: `/learn/${l.courseSlug}/${l.lessonSlug}${hash ? "#" + hash : ""}` };
  }
  if (fileExists(ctx.rootId, target)) return { kind: "asset", href: assetUrl(ctx.rootId, target), filePath: target };
  return { kind: "broken", href: raw, filePath: target };
}

function parseQuizFence(code: string, ctx: RenderContext, n: number): Quiz | { error: string } {
  let raw: unknown;
  try {
    raw = code.trim().startsWith("{") || code.trim().startsWith("[") ? JSON.parse(code) : parseYaml(code);
  } catch (e) {
    return { error: `Không đọc được khối quiz: ${(e as Error).message}` };
  }
  if (Array.isArray(raw)) raw = { questions: raw };
  const res = quizFileSchema.safeParse(raw);
  if (!res.success) {
    const issue = res.error.issues[0];
    return { error: `Khối quiz sai cấu trúc ở “${issue?.path.join(".") || "gốc"}”: ${issue?.message}` };
  }
  return toQuiz(res.data, `${ctx.lessonId}:block${n}`, "quiz-block");
}

function toQuiz(data: import("../assessment/schema.ts").QuizFile, id: string, source: string): Quiz {
  return {
    id: data.id ?? id,
    title: data.title ?? "Câu hỏi ôn tập",
    timeLimit: data.timeLimit,
    passScore: data.passScore,
    shuffleQuestions: data.shuffleQuestions,
    shuffleOptions: data.shuffleOptions,
    questions: data.questions.map((q, i) => ({ ...q, id: q.id === "__auto" ? `${id}:q${i + 1}` : q.id, source }) as Question),
  };
}

async function loadSidecarQuiz(ctx: RenderContext): Promise<Quiz | null> {
  const base = ctx.lessonPath.replace(/\.(md|markdown)$/i, "");
  for (const ext of [".quiz.json", ".quiz.yaml", ".quiz.yml"]) {
    const text = await readLessonSource(ctx.rootId, base + ext);
    if (!text) continue;
    try {
      const raw = ext === ".quiz.json" ? JSON.parse(text) : parseYaml(text);
      const res = quizFileSchema.safeParse(raw);
      if (res.success) return toQuiz(res.data, `${ctx.lessonId}:sidecar`, "sidecar");
    } catch {
      return null;
    }
  }
  return null;
}

export async function renderLesson(source: string, ctx: RenderContext): Promise<RenderedLesson> {
  const { body } = splitFrontmatter(source);
  const sections = parseQuizSections(body, ctx.lessonId);
  const lines = body.split(/\r?\n/);
  const slugger = new GithubSlugger();
  const toc: TocItem[] = [];
  const quizzes: Quiz[] = [];
  const dropFirstH1 = { done: false };
  let taskIndex = 0;
  // ```quiz blocks are parsed up-front so they are counted even before React renders them.
  const fenceQuizzes = new Map<string, Quiz | { error: string }>();
  let fenceN = 0;
  for (const m of body.matchAll(/^(```|~~~)quiz[^\n]*\n([\s\S]*?)\n\1\s*$/gm)) {
    const code = m[2].replace(/\n$/, "");
    const q = parseQuizFence(code, ctx, ++fenceN);
    fenceQuizzes.set(code.trim(), q);
    if (!("error" in q)) quizzes.push(q);
  }

  const components = {
    codeblock: (props: Record<string, unknown>) => {
      const lang = String(props["data-lang"] ?? "");
      const code = String(props["data-code"] ?? "");
      if (lang === "quiz") {
        const q = fenceQuizzes.get(code.trim()) ?? parseQuizFence(code, ctx, ++fenceN);
        if ("error" in q) return <CodeBlock lang="yaml" code={code} error={q.error} />;
        return <QuizBlock quiz={q} lessonId={ctx.lessonId} courseId={ctx.courseId} />;
      }
      return <CodeBlock lang={lang} code={code} />;
    },
    aside: (props: Record<string, unknown>) => (
      <Callout type={String(props["data-callout"] ?? "note")} title={String(props["data-title"] ?? "")}>
        {props.children as ReactNode}
      </Callout>
    ),
    img: (props: Record<string, unknown>) => {
      const src = String(props.src ?? "");
      const r = resolveHref(ctx, src);
      const alt = String(props.alt ?? "");
      if (r.kind === "broken") return <LessonImage src={null} alt={alt} original={src} filePath={r.filePath} />;
      return <LessonImage src={r.href} alt={alt} title={props.title ? String(props.title) : undefined} original={src} filePath={r.filePath} />;
    },
    a: (props: Record<string, unknown>) => {
      const raw = String(props.href ?? "");
      const children = props.children as ReactNode;
      if (props["data-footnote-ref"] !== undefined || props["data-footnote-backref"] !== undefined || raw.startsWith("#")) {
        return <a href={raw} className={props.className as string | undefined} {...(props["data-footnote-ref"] !== undefined ? { "data-footnote-ref": "" } : {})}>{children}</a>;
      }
      const r = resolveHref(ctx, raw);
      if (r.kind === "broken")
        return (
          <span className="broken-link" title={`Liên kết không tìm thấy: ${raw}`}>
            {children}
          </span>
        );
      if (r.kind === "external")
        return (
          <a href={r.href} target="_blank" rel="noopener noreferrer" className="external-link">
            {children}
          </a>
        );
      return <a href={r.href}>{children}</a>;
    },
    youtube: (props: Record<string, unknown>) => <YouTubeEmbed id={String(props["data-id"])} title={String(props["data-title"] ?? "")} />,
    lessonvideo: (props: Record<string, unknown>) => {
      const r = resolveHref(ctx, String(props["data-src"] ?? ""));
      if (r.kind === "broken") return <p className="broken-link">Không tìm thấy video: {String(props["data-src"])}</p>;
      return (
        <figure className="lesson-media">
          <video src={r.href} controls preload="metadata" />
          {props["data-title"] ? <figcaption>{String(props["data-title"])}</figcaption> : null}
        </figure>
      );
    },
    lessonaudio: (props: Record<string, unknown>) => {
      const r = resolveHref(ctx, String(props["data-src"] ?? ""));
      if (r.kind === "broken") return <p className="broken-link">Không tìm thấy audio: {String(props["data-src"])}</p>;
      return (
        <figure className="lesson-media">
          <audio src={r.href} controls preload="metadata" />
          {props["data-title"] ? <figcaption>{String(props["data-title"])}</figcaption> : null}
        </figure>
      );
    },
    input: (props: Record<string, unknown>) => {
      if (props.type !== "checkbox") return null;
      return <TaskCheckbox lessonId={ctx.lessonId} index={taskIndex++} defaultChecked={!!props.checked} />;
    },
  } as unknown as Components;

  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkCallouts)
    .use(remarkRehype, { allowDangerousHtml: true, footnoteLabel: "Chú thích", footnoteBackLabel: "Quay lại nội dung" })
    .use(rehypeRaw)
    .use(rehypeSanitize, schema)
    .use(rehypeKatex, { throwOnError: false, strict: false })
    .use(rehypeCodeBlocks)
    .use(rehypeEmbeds)
    .use(rehypeTableWrap)
    .use(rehypeHeadingIds, { slugger, toc, dropFirstH1 });

  const renderMd = async (md: string, key: string): Promise<ReactNode> => {
    if (!md.trim()) return null;
    const tree = (await processor.run(processor.parse(md))) as Root;
    return <Fragment key={key}>{toJsxRuntime(tree, { Fragment, jsx, jsxs, components, passKeys: true, elementAttributeNameCase: "react" }) as ReactNode}</Fragment>;
  };

  const parts: ReactNode[] = [];
  let pos = 0;
  for (const [i, s] of sections.entries()) {
    parts.push(await renderMd(lines.slice(pos, s.start).join("\n"), `md${i}`));
    const id = slugger.slug(s.title || "cau-hoi-on-tap");
    toc.push({ id, text: s.title || "Câu hỏi ôn tập", depth: 2 });
    const quiz: Quiz = { id: `${ctx.lessonId}:s${i + 1}`, title: s.title || "Câu hỏi ôn tập", questions: s.questions };
    quizzes.push(quiz);
    parts.push(
      <section key={`quiz${i}`} id={id} className="quiz-section scroll-mt-24" aria-label={quiz.title}>
        <QuizBlock quiz={quiz} lessonId={ctx.lessonId} courseId={ctx.courseId} heading={s.level <= 2 ? "h2" : "h3"} />
      </section>,
    );
    pos = s.end;
  }
  parts.push(await renderMd(lines.slice(pos).join("\n"), "mdEnd"));

  const sidecar = await loadSidecarQuiz(ctx);
  if (sidecar) {
    quizzes.push(sidecar);
    const id = slugger.slug(sidecar.title);
    toc.push({ id, text: sidecar.title, depth: 2 });
    parts.push(
      <section key="sidecar" id={id} className="quiz-section scroll-mt-24">
        <QuizBlock quiz={sidecar} lessonId={ctx.lessonId} courseId={ctx.courseId} />
      </section>,
    );
  }

  return { body: <>{parts}</>, toc, quizzes };
}
