// The markdown → hast processor shared by the server renderer and the editor's live preview.
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeKatex from "rehype-katex";
import type GithubSlugger from "github-slugger";
import { remarkCallouts, rehypeCodeBlocks, rehypeEmbeds, rehypeHeadingIds, rehypeTableWrap, type TocItem } from "./plugins.ts";

export const sanitizeSchema = {
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

export function createProcessor(opts: { slugger: GithubSlugger; toc: TocItem[]; dropFirstH1?: { done: boolean } }) {
  return unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkCallouts)
    .use(remarkRehype, { allowDangerousHtml: true, footnoteLabel: "Chú thích", footnoteBackLabel: "Quay lại nội dung" })
    .use(rehypeRaw)
    .use(rehypeSanitize, sanitizeSchema)
    .use(rehypeKatex, { throwOnError: false, strict: false })
    .use(rehypeCodeBlocks)
    .use(rehypeEmbeds)
    .use(rehypeTableWrap)
    .use(rehypeHeadingIds, opts);
}
