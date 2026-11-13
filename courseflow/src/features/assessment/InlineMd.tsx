import { Fragment, type ReactNode } from "react";

// Tiny, safe markdown renderer for quiz text: **bold**, *italic*, `code`, [link](https://…),
// line breaks and "- " bullet lines. No raw HTML is ever interpreted.
const TOKEN = /(\*\*[^*]+\*\*|__[^_]+__|`[^`]+`|\*[^*\s][^*]*\*|_[^_\s][^_]*_|\[[^\]]+\]\((?:https?:\/\/|\/)[^)\s]+\)|\$[^$\n]+\$)/g;

function inline_(text: string): ReactNode[] {
  return inline(text.replace(/\n+/g, " "), "i");
}

function inline(text: string, keyBase: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let i = 0;
  for (const m of text.matchAll(TOKEN)) {
    const idx = m.index ?? 0;
    if (idx > last) out.push(text.slice(last, idx));
    const t = m[0];
    const key = `${keyBase}-${i++}`;
    if (t.startsWith("**") || t.startsWith("__")) out.push(<strong key={key}>{inline(t.slice(2, -2), key)}</strong>);
    else if (t.startsWith("`")) out.push(<code key={key} className="rounded bg-surface-2 px-1 py-0.5 font-mono text-[0.88em]">{t.slice(1, -1)}</code>);
    else if (t.startsWith("[")) {
      const mm = t.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      out.push(
        <a key={key} href={mm?.[2]} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">
          {mm?.[1]}
        </a>,
      );
    } else if (t.startsWith("$")) out.push(<span key={key} className="font-serif italic">{t.slice(1, -1)}</span>);
    else out.push(<em key={key}>{inline(t.slice(1, -1), key)}</em>);
    last = idx + t.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function InlineMd({ text, className, inline: asSpan }: { text: string; className?: string; inline?: boolean }) {
  if (asSpan) return <span className={className}>{inline_(text)}</span>;
  const lines = text.split("\n");
  const blocks: ReactNode[] = [];
  let list: string[] = [];
  const flush = (k: number) => {
    if (!list.length) return;
    blocks.push(
      <ul key={`ul${k}`} className="my-1.5 list-disc space-y-0.5 pl-5">
        {list.map((l, j) => (
          <li key={j}>{inline(l, `li${k}-${j}`)}</li>
        ))}
      </ul>,
    );
    list = [];
  };
  lines.forEach((l, k) => {
    const b = l.match(/^\s*[-*+]\s+(.*)$/);
    if (b) {
      list.push(b[1]);
      return;
    }
    flush(k);
    if (!l.trim()) return;
    blocks.push(
      <Fragment key={k}>
        {blocks.length ? <br /> : null}
        {inline(l, `l${k}`)}
      </Fragment>,
    );
  });
  flush(lines.length);
  return <div className={className}>{blocks}</div>;
}
