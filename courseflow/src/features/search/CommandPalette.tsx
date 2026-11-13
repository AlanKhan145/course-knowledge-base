"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, BookOpen, FileText, Loader2, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { SearchResult } from "@/lib/content/types";
import { cn } from "@/lib/utils";
import { onOpenPalette } from "./palette-bus";
import { Snippet } from "./Snippet";

interface Item {
  href: string;
  title: string;
  sub: string;
  kind: "course" | "lesson" | "all";
  snippet?: SearchResult["lessons"][number]["snippet"];
}

/** Global quick search (Ctrl/⌘+K): courses fuzzy, lessons full-text; accents optional. */
export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [res, setRes] = useState<SearchResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(0);
  const router = useRouter();
  const ctrl = useRef<AbortController | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    const off = onOpenPalette((query) => {
      setQ(query);
      setOpen(true);
    });
    return () => {
      window.removeEventListener("keydown", onKey);
      off();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const term = q.trim();
    if (term.length < 2) return;
    const t = setTimeout(async () => {
      ctrl.current?.abort();
      const c = new AbortController();
      ctrl.current = c;
      setLoading(true);
      try {
        const r = await fetch(`/api/search?q=${encodeURIComponent(term)}&limit=8`, { signal: c.signal });
        if (r.ok) setRes(await r.json());
        setActive(0);
      } catch {
        /* aborted */
      } finally {
        if (!c.signal.aborted) setLoading(false);
      }
    }, 160);
    return () => clearTimeout(t);
  }, [q, open]);

  const shown = q.trim().length >= 2 ? res : null;
  const items: Item[] = [
    ...(shown?.courses ?? []).map<Item>((c) => ({ href: `/courses/${c.slug}`, title: c.title, sub: c.matchedIn === "module" ? `Module: ${c.moduleTitle}` : `${c.domainTitle} · ${c.lessonCount} bài`, kind: "course" })),
    ...(shown?.lessons ?? []).map<Item>((l) => ({
      href: `/learn/${l.courseSlug}/${l.lessonSlug}?hl=${encodeURIComponent(res?.terms.join(" ") ?? "")}`,
      title: l.lessonTitle,
      sub: [l.courseTitle, l.moduleTitle].filter(Boolean).join(" · "),
      kind: "lesson",
      snippet: l.snippet,
    })),
  ];
  if (q.trim().length >= 2) items.push({ href: `/search?q=${encodeURIComponent(q.trim())}`, title: `Xem tất cả kết quả cho “${q.trim()}”`, sub: "Trang tìm kiếm với bộ lọc", kind: "all" });

  const go = (it: Item | undefined) => {
    if (!it) return;
    setOpen(false);
    router.push(it.href);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px]" />
        <Dialog.Content className="fixed top-[8vh] left-1/2 z-50 flex max-h-[80vh] w-[calc(100vw-1.5rem)] max-w-2xl -translate-x-1/2 flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-pop" aria-describedby={undefined}>
          <Dialog.Title className="sr-only">Tìm kiếm</Dialog.Title>
          <div className="flex items-center gap-3 border-b border-border px-4">
            {loading ? <Loader2 className="size-4 animate-spin text-muted" /> : <Search className="size-4 text-muted" />}
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") (e.preventDefault(), setActive((a) => Math.min(items.length - 1, a + 1)));
                if (e.key === "ArrowUp") (e.preventDefault(), setActive((a) => Math.max(0, a - 1)));
                if (e.key === "Enter") go(items[active]);
              }}
              placeholder="Gõ có dấu hoặc không dấu: “rag”, “giam mo”, “hiragana”…"
              className="h-14 flex-1 bg-transparent text-[15px] text-text outline-none placeholder:text-muted"
              aria-label="Từ khóa tìm kiếm"
              role="combobox"
              aria-expanded={items.length > 0}
              aria-controls="palette-results"
              aria-activedescendant={items[active] ? `pi-${active}` : undefined}
            />
            <kbd className="rounded border border-border px-1.5 font-mono text-[10px] text-muted">Esc</kbd>
          </div>
          <ul id="palette-results" role="listbox" className="scrollbar-thin overflow-y-auto p-2">
            {q.trim().length < 2 ? (
              <li className="px-3 py-8 text-center text-sm text-muted">Nhập ít nhất 2 ký tự. Tìm theo tên khóa học, module, tiêu đề và nội dung bài học.</li>
            ) : !loading && res && items.length <= 1 ? (
              <li className="px-3 py-8 text-center text-sm text-muted">Không có kết quả cho “{q}”.</li>
            ) : null}
            {items.map((it, i) => {
              const Icon = it.kind === "course" ? BookOpen : it.kind === "lesson" ? FileText : ArrowRight;
              return (
                <li key={it.href + i} id={`pi-${i}`} role="option" aria-selected={i === active}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onClick={() => go(it)}
                    className={cn("flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left", i === active ? "bg-surface-2" : "")}
                  >
                    <span className={cn("mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg", it.kind === "course" ? "bg-accent-soft text-accent" : "bg-surface-3 text-muted")}>
                      <Icon className="size-3.5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium text-text">{it.title}</span>
                      <span className="block truncate text-xs text-muted">{it.sub}</span>
                      {it.snippet ? <Snippet parts={it.snippet} className="mt-1 line-clamp-2 text-xs text-text-2" /> : null}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          {res ? <p className="border-t border-border px-4 py-1.5 text-[11px] text-muted">{res.tookMs} ms · ↑↓ chọn · Enter mở</p> : null}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
