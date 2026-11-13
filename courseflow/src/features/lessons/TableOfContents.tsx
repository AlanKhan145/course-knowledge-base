"use client";
import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/markdown/plugins";
import { cn } from "@/lib/utils";

/** H2/H3 table of contents with scroll-spy. */
export function TableOfContents({ toc }: { toc: TocItem[] }) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    if (!toc.length) return;
    const els = toc.map((t) => document.getElementById(t.id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-72px 0px -65% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [toc]);
  if (!toc.length) return <p className="text-xs text-muted">Bài này không có mục con.</p>;
  return (
    <nav aria-label="Mục lục">
      <p className="mb-2 text-xs font-semibold tracking-wide text-muted uppercase">Trong bài này</p>
      <ul className="space-y-0.5 border-l border-border">
        {toc.map((t) => (
          <li key={t.id}>
            <a
              href={`#${t.id}`}
              className={cn(
                "-ml-px block border-l-2 py-1 text-[13px] leading-snug transition-colors",
                t.depth === 3 ? "pl-6" : "pl-3",
                active === t.id ? "border-accent font-medium text-accent" : "border-transparent text-muted hover:text-text",
              )}
            >
              {t.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
