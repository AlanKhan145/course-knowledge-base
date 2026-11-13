// unified plugins used by the lesson renderer.
import { visit, SKIP } from "unist-util-visit";
import { toString as hastToString } from "hast-util-to-string";
import type { Root as MdRoot, Blockquote, Paragraph, Text, Strong } from "mdast";
import type { Root as HRoot, Element, ElementContent } from "hast";
import GithubSlugger from "github-slugger";

// --------------------------------------------------------------- callouts

export type CalloutType = "note" | "tip" | "important" | "warning" | "caution" | "example" | "summary";

const ALERT = /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION|EXAMPLE|SUMMARY|INFO|DANGER|QUESTION)\][+-]?\s*/i;
const LABELS: [RegExp, CalloutType][] = [
  [/^(lưu ý|ghi chú|note|nb)$/i, "note"],
  [/^(mẹo|gợi ý|tip|hint|thủ thuật)$/i, "tip"],
  [/^(quan trọng|important|phạm vi|key point|điểm chính|ghi nhớ)$/i, "important"],
  [/^(cảnh báo|chú ý|warning|caution|nguy hiểm|danger|an toàn)$/i, "warning"],
  [/^(ví dụ|example|minh họa)$/i, "example"],
  [/^(tóm tắt|tổng kết|summary|tl;dr|kết luận)$/i, "summary"],
];
const ALERT_MAP: Record<string, CalloutType> = {
  NOTE: "note", INFO: "note", TIP: "tip", IMPORTANT: "important", WARNING: "warning", CAUTION: "caution", DANGER: "caution",
  EXAMPLE: "example", SUMMARY: "summary", QUESTION: "note",
};
export const CALLOUT_TITLE: Record<CalloutType, string> = {
  note: "Lưu ý", tip: "Mẹo", important: "Quan trọng", warning: "Cảnh báo", caution: "Cẩn thận", example: "Ví dụ", summary: "Tóm tắt",
};

/** `> [!TIP] Tiêu đề` (GitHub alerts) and `> **Lưu ý:** …` → <aside class="callout"> */
export function remarkCallouts() {
  return (tree: MdRoot) => {
    visit(tree, "blockquote", (node: Blockquote) => {
      const first = node.children[0] as Paragraph | undefined;
      if (!first || first.type !== "paragraph") return;
      const head = first.children[0];
      let type: CalloutType | null = null;
      let title: string | null = null;
      if (head?.type === "text") {
        const m = (head as Text).value.match(ALERT);
        if (m) {
          type = ALERT_MAP[m[1].toUpperCase()] ?? "note";
          let rest = (head as Text).value.slice(m[0].length);
          const nl = rest.indexOf("\n");
          const firstLine = nl === -1 ? rest : rest.slice(0, nl);
          if (firstLine.trim() && first.children.length === 1) {
            title = firstLine.trim();
            rest = nl === -1 ? "" : rest.slice(nl + 1);
          } else if (firstLine.trim() && nl !== -1) {
            title = firstLine.trim();
            rest = rest.slice(nl + 1);
          }
          (head as Text).value = rest;
          if (!rest.trim() && first.children.length === 1) node.children.shift();
        }
      } else if (head?.type === "strong") {
        const label = (head as Strong).children.map((c) => ("value" in c ? c.value : "")).join("").trim();
        const clean = label.replace(/[:：.]\s*$/, "").trim();
        const hit = LABELS.find(([re]) => re.test(clean));
        if (hit && (label.endsWith(":") || (first.children[1]?.type === "text" && /^\s*[:：]/.test((first.children[1] as Text).value)))) {
          type = hit[1];
          title = clean;
          first.children.shift();
          const nx = first.children[0];
          if (nx?.type === "text") (nx as Text).value = (nx as Text).value.replace(/^\s*[:：]?\s*/, "");
        }
      }
      if (!type) return;
      node.data = {
        ...(node.data ?? {}),
        hName: "aside",
        hProperties: { className: ["callout", `callout-${type}`], dataCallout: type, dataTitle: title ?? CALLOUT_TITLE[type] },
      };
    });
  };
}

// --------------------------------------------------------------- heading ids + TOC

export interface TocItem {
  id: string;
  text: string;
  depth: number;
}

export function rehypeHeadingIds(opts: { slugger: GithubSlugger; toc: TocItem[]; dropFirstH1?: { done: boolean } }) {
  return (tree: HRoot) => {
    visit(tree, "element", (node: Element, index, parent) => {
      if (!/^h[1-6]$/.test(node.tagName)) return;
      const depth = Number(node.tagName[1]);
      const text = hastToString(node).trim();
      if (depth === 1 && opts.dropFirstH1 && !opts.dropFirstH1.done && parent && typeof index === "number") {
        opts.dropFirstH1.done = true;
        parent.children.splice(index, 1);
        return [SKIP, index];
      }
      const id = opts.slugger.slug(text || "muc");
      node.properties = { ...node.properties, id };
      if (depth === 2 || depth === 3) opts.toc.push({ id, text, depth });
    });
  };
}

// --------------------------------------------------------------- code blocks → <codeblock>

/** `pre > code.language-x` → `<codeblock data-lang data-code>` so a component can own the rendering. */
export function rehypeCodeBlocks() {
  return (tree: HRoot) => {
    visit(tree, "element", (node: Element, index, parent) => {
      if (node.tagName !== "pre" || !parent || typeof index !== "number") return;
      const code = node.children.find((c): c is Element => c.type === "element" && c.tagName === "code");
      if (!code) return;
      const cls = (code.properties?.className as string[] | undefined) ?? [];
      const lang = cls.find((c) => c.startsWith("language-"))?.slice(9) ?? "";
      if (lang === "math") return; // handled by rehype-katex
      const replacement: Element = {
        type: "element",
        tagName: "codeblock",
        properties: { dataLang: lang.toLowerCase(), dataCode: hastToString(code).replace(/\n$/, "") },
        children: [],
      };
      parent.children.splice(index, 1, replacement);
      return SKIP;
    });
  };
}

// --------------------------------------------------------------- embeds

const YT = /^(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/i;
const VIDEO_EXT = /\.(mp4|webm|ogv|mov)(\?.*)?$/i;
const AUDIO_EXT = /\.(mp3|wav|ogg|m4a|flac)(\?.*)?$/i;

/** A paragraph that only holds a YouTube/video/audio link (or image pointing to a video) becomes an embed. */
export function rehypeEmbeds() {
  return (tree: HRoot) => {
    visit(tree, "element", (node: Element, index, parent) => {
      if (node.tagName !== "p" || !parent || typeof index !== "number") return;
      const kids = node.children.filter((c) => !(c.type === "text" && !c.value.trim()));
      if (kids.length !== 1 || kids[0].type !== "element") return;
      const el = kids[0] as Element;
      const href = String((el.tagName === "a" ? el.properties?.href : el.tagName === "img" ? el.properties?.src : "") ?? "");
      if (!href) return;
      let replacement: Element | null = null;
      const yt = href.match(YT);
      if (yt && el.tagName === "a") replacement = { type: "element", tagName: "youtube", properties: { dataId: yt[1], dataTitle: hastToString(el) }, children: [] };
      else if (VIDEO_EXT.test(href)) replacement = { type: "element", tagName: "lessonvideo", properties: { dataSrc: href, dataTitle: hastToString(el) || String(el.properties?.alt ?? "") }, children: [] };
      else if (AUDIO_EXT.test(href)) replacement = { type: "element", tagName: "lessonaudio", properties: { dataSrc: href, dataTitle: hastToString(el) || String(el.properties?.alt ?? "") }, children: [] };
      if (replacement) {
        parent.children.splice(index, 1, replacement as ElementContent);
        return SKIP;
      }
    });
  };
}

/** Wrap tables so wide ones scroll horizontally instead of overflowing the page. */
export function rehypeTableWrap() {
  return (tree: HRoot) => {
    visit(tree, "element", (node: Element, index, parent) => {
      if (node.tagName !== "table" || !parent || typeof index !== "number") return;
      if ((parent as Element).tagName === "div" && ((parent as Element).properties?.className as string[] | undefined)?.includes("table-wrap")) return;
      parent.children.splice(index, 1, { type: "element", tagName: "div", properties: { className: ["table-wrap"] }, children: [node] });
      return SKIP;
    });
  };
}
