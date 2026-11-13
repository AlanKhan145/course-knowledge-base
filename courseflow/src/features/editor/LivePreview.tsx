"use client";
// Client-side preview for the editor: same plugins as the reader, quizzes interactive, no disk access.
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { toJsxRuntime, type Components } from "hast-util-to-jsx-runtime";
import GithubSlugger from "github-slugger";
import { parse as parseYaml } from "yaml";
import * as path from "@/lib/posix-path";
import type { Root } from "hast";
import { createProcessor } from "@/lib/markdown/pipeline";
import { splitFrontmatter } from "@/lib/content/lesson-meta";
import { parseQuizSections } from "@/lib/assessment/parse-markdown-quiz";
import { quizFileSchema, type Question, type Quiz } from "@/lib/assessment/schema";
import { Callout } from "@/components/markdown/Callout";
import { LessonImage } from "@/components/markdown/LessonImage";
import { MermaidDiagram } from "@/components/markdown/MermaidDiagram";
import { CopyButton } from "@/components/markdown/CopyButton";
import { YouTubeEmbed } from "@/components/markdown/YouTubeEmbed";
import { QuizBlock } from "@/features/assessment/QuizBlock";

function assetUrl(rootId: string, rel: string) {
  return `/api/asset/${encodeURIComponent(rootId)}/${rel.split("/").map(encodeURIComponent).join("/")}`;
}

function PlainCode({ lang, code }: { lang: string; code: string }) {
  return (
    <figure className="not-prose my-6 overflow-hidden rounded-xl border border-border bg-[var(--code-bg)]">
      <figcaption className="flex items-center justify-between border-b border-border px-4 py-1.5 text-xs text-muted">
        <span>{lang || "Code"}</span>
        <CopyButton text={code} />
      </figcaption>
      <pre className="overflow-x-auto p-4 font-mono text-[0.84rem] leading-relaxed text-text-2">
        <code>{code}</code>
      </pre>
    </figure>
  );
}

export function LivePreview({ source, rootId, lessonPath, lessonId, courseId }: { source: string; rootId: string; lessonPath: string; lessonId: string; courseId: string }) {
  const [debounced, setDebounced] = useState(source);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(source), 280);
    return () => clearTimeout(t);
  }, [source]);

  const node = useMemo(() => {
    try {
      return renderPreview(debounced, { rootId, lessonPath, lessonId, courseId });
    } catch (e) {
      return <p className="text-danger">Không xem trước được: {(e as Error).message}</p>;
    }
  }, [debounced, rootId, lessonPath, lessonId, courseId]);
  return <>{node}</>;
}

function renderPreview(text: string, ctx: { rootId: string; lessonPath: string; lessonId: string; courseId: string }): ReactNode {
  const { body } = splitFrontmatter(text);
  const sections = parseQuizSections(body, ctx.lessonId);
  const lines = body.split(/\r?\n/);
  const slugger = new GithubSlugger();
  const toc: { id: string; text: string; depth: number }[] = [];
  const processor = createProcessor({ slugger, toc });
  const dir = path.dirname(ctx.lessonPath);
  const resolve = (src: string) => {
    if (/^(https?:|data:)/i.test(src)) return { href: src, file: undefined };
    if (/^(javascript|vbscript|file):/i.test(src)) return { href: null, file: undefined };
    const clean = decodeURIComponent(src.split("#")[0].split("?")[0]);
    const target = path.normalize(path.join(dir, clean));
    if (target.startsWith("..")) return { href: null, file: target };
    return { href: assetUrl(ctx.rootId, target), file: target };
  };
  let n = 0;
  const components = {
    codeblock: (p: Record<string, unknown>) => {
      const lang = String(p["data-lang"] ?? "");
      const code = String(p["data-code"] ?? "");
      if (lang === "mermaid") return <MermaidDiagram code={code} />;
      if (lang === "quiz") {
        try {
          let raw: unknown = code.trim().startsWith("{") || code.trim().startsWith("[") ? JSON.parse(code) : parseYaml(code);
          if (Array.isArray(raw)) raw = { questions: raw };
          const res = quizFileSchema.safeParse(raw);
          if (!res.success) return <PlainCode lang={`quiz — lỗi: ${res.error.issues[0]?.path.join(".")} ${res.error.issues[0]?.message}`} code={code} />;
          const id = `${ctx.lessonId}:preview${++n}`;
          const quiz: Quiz = { id, title: res.data.title ?? "Câu hỏi ôn tập", questions: res.data.questions.map((q, i) => ({ ...q, id: q.id === "__auto" ? `${id}:q${i + 1}` : q.id }) as Question) };
          return <QuizBlock quiz={quiz} lessonId={ctx.lessonId} courseId={ctx.courseId} />;
        } catch (e) {
          return <PlainCode lang={`quiz — lỗi: ${(e as Error).message}`} code={code} />;
        }
      }
      return <PlainCode lang={lang} code={code} />;
    },
    aside: (p: Record<string, unknown>) => (
      <Callout type={String(p["data-callout"] ?? "note")} title={String(p["data-title"] ?? "")}>
        {p.children as ReactNode}
      </Callout>
    ),
    img: (p: Record<string, unknown>) => {
      const src = String(p.src ?? "");
      const r = resolve(src);
      return <LessonImage src={r.href} alt={String(p.alt ?? "")} title={p.title ? String(p.title) : undefined} original={src} filePath={r.file} />;
    },
    a: (p: Record<string, unknown>) => {
      const href = String(p.href ?? "");
      return (
        <a href={href} target={/^https?:/.test(href) ? "_blank" : undefined} rel="noopener noreferrer" onClick={(e) => !/^https?:|^#/.test(href) && e.preventDefault()} title={href}>
          {p.children as ReactNode}
        </a>
      );
    },
    youtube: (p: Record<string, unknown>) => <YouTubeEmbed id={String(p["data-id"])} title={String(p["data-title"] ?? "")} />,
  } as unknown as Components;
  const md = (s: string, key: string) => {
    if (!s.trim()) return null;
    const tree = processor.runSync(processor.parse(s)) as Root;
    return <Fragment key={key}>{toJsxRuntime(tree, { Fragment, jsx, jsxs, components, passKeys: true, elementAttributeNameCase: "react" }) as ReactNode}</Fragment>;
  };
  const parts: ReactNode[] = [];
  let pos = 0;
  sections.forEach((s, i) => {
    parts.push(md(lines.slice(pos, s.start).join("\n"), `m${i}`));
    parts.push(<QuizBlock key={`q${i}`} quiz={{ id: `${ctx.lessonId}:preview-s${i}`, title: s.title, questions: s.questions }} lessonId={ctx.lessonId} courseId={ctx.courseId} />);
    pos = s.end;
  });
  parts.push(md(lines.slice(pos).join("\n"), "end"));
  return <>{parts}</>;
}
