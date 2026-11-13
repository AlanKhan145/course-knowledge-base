import type { SearchSnippetPart } from "@/lib/content/types";

export function Snippet({ parts, className }: { parts: SearchSnippetPart[]; className?: string }) {
  return (
    <p className={className}>
      {parts.map((p, i) =>
        p.hit ? (
          <mark key={i} className="rounded bg-amber-soft px-0.5 font-medium text-text">
            {p.text}
          </mark>
        ) : (
          <span key={i}>{p.text}</span>
        ),
      )}
    </p>
  );
}
