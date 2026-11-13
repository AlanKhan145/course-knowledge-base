"use client";
import * as Dialog from "@radix-ui/react-dialog";
import * as Popover from "@radix-ui/react-popover";
import CodeMirror, { EditorView, type ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { diffLines } from "diff";
import { ArrowLeft, CheckCircle2, Columns2, Eye, FileDiff, History, LayoutTemplate, Loader2, PenLine, Plus, Save, TriangleAlert, X } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { extractDocMeta } from "@/lib/content/lesson-meta";
import { checkTemplate, TEMPLATE_SECTIONS } from "@/lib/content/template-check";
import { cn, relativeTime } from "@/lib/utils";
import { setReview, useLearner } from "@/features/progress/store";
import { LivePreview } from "./LivePreview";
import { SNIPPETS } from "./snippets";

interface Props {
  rootId: string;
  path: string;
  lessonId: string;
  lessonSlug: string;
  lessonTitle: string;
  courseId: string;
  courseSlug: string;
  courseTitle: string;
  editHref: string | null;
}

type Status = "loading" | "clean" | "dirty" | "saving" | "saved" | "conflict" | "error";
type View = "split" | "edit" | "preview";

export function MarkdownEditor(p: Props) {
  const [content, setContent] = useState("");
  const [base, setBase] = useState<{ content: string; hash: string } | null>(null);
  const [status, setStatus] = useState<Status>("loading");
  const [error, setError] = useState<string | null>(null);
  const [view, setView] = useState<View>("split");
  const [markEdited, setMarkEdited] = useState(true);
  const [lastBackup, setLastBackup] = useState<string | null>(null);
  const cm = useRef<ReactCodeMirrorRef>(null);
  const { resolvedTheme } = useTheme();
  const review = useLearner((s) => s.reviews[p.lessonId]);

  const load = useCallback(async () => {
    const r = await fetch(`/api/edit?root=${encodeURIComponent(p.rootId)}&path=${encodeURIComponent(p.path)}`);
    const j = await r.json();
    if (!r.ok) {
      setStatus("error");
      setError(j.error);
      return;
    }
    setContent(j.content);
    setBase({ content: j.content, hash: j.hash });
    setStatus("clean");
    setError(null);
  }, [p.rootId, p.path]);

  useEffect(() => {
    let alive = true;
    queueMicrotask(() => alive && void load());
    return () => {
      alive = false;
    };
  }, [load]);

  const dirty = base !== null && content !== base.content;
  // What the badge shows: unsaved edits win over a stale "clean"/"saved" state.
  const shownStatus: Status = dirty && (status === "clean" || status === "saved") ? "dirty" : !dirty && status === "dirty" ? "clean" : status;

  useEffect(() => {
    const h = (e: BeforeUnloadEvent) => {
      if (dirty) e.preventDefault();
    };
    window.addEventListener("beforeunload", h);
    return () => window.removeEventListener("beforeunload", h);
  }, [dirty]);

  const save = useCallback(
    async (force = false) => {
      if (!base) return;
      setStatus("saving");
      const r = await fetch("/api/edit", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ root: p.rootId, path: p.path, content, baseHash: force ? null : base.hash }),
      });
      const j = await r.json();
      if (r.status === 409) {
        setStatus("conflict");
        setError(j.error);
        return;
      }
      if (!r.ok) {
        setStatus("error");
        setError(j.error);
        return;
      }
      setBase({ content, hash: j.hash });
      setLastBackup(j.backup);
      setStatus("saved");
      setError(null);
      if (markEdited) setReview(p.lessonId, { status: "edited", note: review?.note, courseId: p.courseId, fileMtime: j.mtime });
    },
    [base, content, p.rootId, p.path, p.lessonId, p.courseId, markEdited, review?.note],
  );

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
        if (dirty) void save();
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [dirty, save]);

  const insert = (text: string) => {
    const v = cm.current?.view;
    if (!v) {
      setContent((c) => c + "\n\n" + text);
      return;
    }
    const pos = v.state.selection.main.head;
    const line = v.state.doc.lineAt(pos);
    const at = line.to;
    const t = (line.text.trim() ? "\n\n" : "\n") + text + "\n";
    v.dispatch({ changes: { from: at, insert: t }, selection: { anchor: at + t.length } });
    v.focus();
  };

  const meta = useMemo(() => {
    try {
      return extractDocMeta(content);
    } catch {
      return null;
    }
  }, [content]);
  const report = meta ? checkTemplate(meta.headings, meta.fm, meta.gradable) : null;

  const extensions = useMemo(() => [markdown({ base: markdownLanguage, codeLanguages: languages }), EditorView.lineWrapping], []);

  return (
    <div className="flex h-dvh flex-col bg-bg">
      <header className="flex flex-wrap items-center gap-2 border-b border-border bg-surface px-3 py-2">
        <Link href={`/learn/${p.courseSlug}/${p.lessonSlug}`} className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm text-muted hover:bg-surface-2 hover:text-text">
          <ArrowLeft className="size-4" /> Về bài học
        </Link>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">{p.lessonTitle}</p>
          <p className="truncate font-mono text-[11px] text-muted" title={p.path}>{p.path}</p>
        </div>
        <StatusBadge status={shownStatus} />
        <div className="flex rounded-lg border border-border p-0.5" role="group" aria-label="Chế độ xem">
          {([
            ["edit", PenLine, "Soạn"],
            ["split", Columns2, "Chia đôi"],
            ["preview", Eye, "Xem trước"],
          ] as const).map(([v, Icon, label]) => (
            <button key={v} onClick={() => setView(v)} className={cn("flex items-center gap-1 rounded-md px-2 py-1 text-xs", view === v ? "bg-surface-2 font-semibold text-text" : "text-muted")} aria-pressed={view === v} title={label}>
              <Icon className="size-3.5" /> <span className="hidden md:inline">{label}</span>
            </button>
          ))}
        </div>
        <InsertMenu onInsert={insert} />
        <DiffDialog before={base?.content ?? ""} after={content} disabled={!dirty} />
        <HistoryDialog rootId={p.rootId} path={p.path} current={content} lastBackup={lastBackup} onRestore={(t) => setContent(t)} />
        {p.editHref ? (
          <a href={p.editHref} className="hidden rounded-lg border border-border px-2.5 py-1.5 text-xs text-muted hover:text-text lg:inline">VS Code</a>
        ) : null}
        <button
          onClick={() => void save(status === "conflict")}
          disabled={!dirty || status === "saving"}
          className={cn("flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-sm font-semibold text-white transition disabled:opacity-50 dark:text-bg", status === "conflict" ? "bg-danger" : "bg-accent hover:bg-accent-hover")}
          title="Ctrl + S"
        >
          {status === "saving" ? <Loader2 className="size-4 animate-spin" /> : <Save className="size-4" />}
          {status === "conflict" ? "Lưu đè" : "Lưu"}
        </button>
      </header>
      {error ? (
        <div className="flex items-center gap-2 border-b border-danger/30 bg-danger-soft px-4 py-2 text-sm text-danger">
          <TriangleAlert className="size-4 shrink-0" /> <span className="flex-1">{error}</span>
          {status === "conflict" ? (
            <button onClick={() => void load()} className="rounded-md border border-danger/40 px-2 py-0.5 text-xs">Tải lại bản trên đĩa (bỏ thay đổi)</button>
          ) : null}
        </div>
      ) : null}
      <div className="flex min-h-0 flex-1">
        {view !== "preview" ? (
          <div className={cn("min-h-0 overflow-hidden border-r border-border", view === "split" ? "w-1/2" : "flex-1")}>
            {status === "loading" ? (
              <div className="space-y-2 p-4">{Array.from({ length: 12 }, (_, i) => <div key={i} className="skeleton h-4" style={{ width: `${40 + ((i * 37) % 55)}%` }} />)}</div>
            ) : (
              <CodeMirror
                ref={cm}
                value={content}
                onChange={setContent}
                extensions={extensions}
                theme={resolvedTheme === "dark" ? "dark" : "light"}
                height="100%"
                className="h-full text-[14px] [&_.cm-editor]:h-full [&_.cm-scroller]:font-mono"
                basicSetup={{ lineNumbers: true, foldGutter: true, highlightActiveLine: true }}
                aria-label="Nội dung Markdown"
              />
            )}
          </div>
        ) : null}
        {view !== "edit" ? (
          <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 sm:px-8">
            <article className="prose-lesson mx-auto" style={{ maxWidth: "46rem" }}>
              <LivePreview source={content} rootId={p.rootId} lessonPath={p.path} lessonId={p.lessonId} courseId={p.courseId} />
            </article>
          </div>
        ) : null}
        <aside className="hidden w-72 shrink-0 overflow-y-auto border-l border-border bg-surface p-4 xl:block" aria-label="Kiểm tra template">
          <p className="flex items-center justify-between text-sm font-semibold">
            <span className="flex items-center gap-2"><LayoutTemplate className="size-4" /> Khớp template</span>
            {report ? <span className={cn("tabular-nums", report.score >= 80 ? "text-success" : report.score >= 50 ? "text-amber" : "text-danger")}>{report.score}%</span> : null}
          </p>
          <ul className="mt-3 space-y-1 text-[13px]">
            {TEMPLATE_SECTIONS.map((s) => {
              const ok = report?.present.includes(s.key);
              return (
                <li key={s.key} className="flex items-center gap-2">
                  {ok ? <CheckCircle2 className="size-3.5 shrink-0 text-success" /> : <span className={cn("size-3.5 shrink-0 rounded-full border", s.required ? "border-danger" : "border-border-strong")} />}
                  <span className={cn("flex-1", !ok && "text-muted")}>{s.label}{s.required ? "" : " (tuỳ chọn)"}</span>
                  {!ok ? (
                    <button onClick={() => insert(`## ${s.label}\n\n…`)} className="rounded p-0.5 text-muted hover:bg-surface-2 hover:text-text" aria-label={`Chèn mục ${s.label}`} title="Chèn mục này">
                      <Plus className="size-3.5" />
                    </button>
                  ) : null}
                </li>
              );
            })}
          </ul>
          <div className="mt-4 space-y-1 border-t border-border pt-3 text-xs text-muted">
            <p>Frontmatter: {report?.hasFrontmatter ? "có" : "chưa có"}</p>
            <p>Câu hỏi chấm được: {report?.gradable ?? 0} (nên ≥ 3)</p>
            <p>{meta?.words.toLocaleString("vi-VN") ?? 0} từ · {meta?.hasMermaid ? "có sơ đồ" : "chưa có sơ đồ"} · {meta?.hasImages ? "có ảnh" : "chưa có ảnh"}</p>
          </div>
          <label className="mt-4 flex items-start gap-2 border-t border-border pt-3 text-xs text-text-2">
            <input type="checkbox" checked={markEdited} onChange={(e) => setMarkEdited(e.target.checked)} className="mt-0.5 accent-[var(--accent)]" />
            Khi lưu, đánh dấu bài là “Đã sửa xong”
          </label>
          <p className="mt-3 text-[11px] leading-relaxed text-muted">Mỗi lần lưu, bản cũ được sao lưu trong <code>courseflow/.data/backups</code>; khôi phục bằng nút Lịch sử.</p>
          <Link href="/templates" className="mt-3 inline-block text-xs text-accent hover:underline">Xem template mẫu đầy đủ →</Link>
        </aside>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: Status }) {
  const map: Record<Status, [string, string]> = {
    loading: ["Đang mở…", "text-muted"],
    clean: ["Chưa thay đổi", "text-muted"],
    dirty: ["Chưa lưu", "text-amber"],
    saving: ["Đang lưu…", "text-muted"],
    saved: ["Đã lưu", "text-success"],
    conflict: ["Xung đột", "text-danger"],
    error: ["Lỗi", "text-danger"],
  };
  const [label, cls] = map[status];
  return <span className={cn("hidden text-xs font-medium sm:inline", cls)} role="status">{label}</span>;
}

function InsertMenu({ onInsert }: { onInsert: (t: string) => void }) {
  return (
    <Popover.Root>
      <Popover.Trigger className="flex items-center gap-1 rounded-lg border border-border px-2.5 py-1.5 text-xs text-text-2 hover:bg-surface-2">
        <Plus className="size-3.5" /> Chèn
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content align="end" sideOffset={6} className="z-50 w-64 rounded-xl border border-border bg-surface p-1.5 shadow-pop">
          {SNIPPETS.map((s) => (
            <Popover.Close asChild key={s.label}>
              <button onClick={() => onInsert(s.text)} className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-surface-2">
                {s.label}
                <span className="block text-[11px] text-muted">{s.hint}</span>
              </button>
            </Popover.Close>
          ))}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

function DiffView({ before, after }: { before: string; after: string }) {
  const parts = useMemo(() => diffLines(before, after), [before, after]);
  const added = parts.filter((x) => x.added).reduce((s, x) => s + (x.count ?? 0), 0);
  const removed = parts.filter((x) => x.removed).reduce((s, x) => s + (x.count ?? 0), 0);
  return (
    <div>
      <p className="mb-2 text-xs text-muted"><span className="text-success">+{added}</span> dòng · <span className="text-danger">−{removed}</span> dòng</p>
      <pre className="overflow-x-auto rounded-lg border border-border bg-bg-elevated font-mono text-[12px] leading-relaxed">
        {parts.map((x, i) => {
          const lines = x.value.replace(/\n$/, "").split("\n");
          if (!x.added && !x.removed) {
            if (lines.length > 6) return <div key={i} className="px-3 text-muted">{lines.slice(0, 2).map((l) => "  " + l).join("\n")}{"\n  ⋯ " + (lines.length - 4) + " dòng không đổi ⋯\n"}{lines.slice(-2).map((l) => "  " + l).join("\n")}</div>;
            return <div key={i} className="px-3 text-muted">{lines.map((l) => "  " + l).join("\n")}</div>;
          }
          return (
            <div key={i} className={cn("px-3", x.added ? "bg-success-soft text-success" : "bg-danger-soft text-danger")}>
              {lines.map((l) => (x.added ? "+ " : "− ") + l).join("\n")}
            </div>
          );
        })}
      </pre>
    </div>
  );
}

function DiffDialog({ before, after, disabled }: { before: string; after: string; disabled: boolean }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger disabled={disabled} className="flex items-center gap-1 rounded-lg border border-border px-2.5 py-1.5 text-xs text-text-2 hover:bg-surface-2 disabled:opacity-40">
        <FileDiff className="size-3.5" /> <span className="hidden sm:inline">Xem thay đổi</span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50" />
        <Dialog.Content className="fixed inset-4 z-50 flex flex-col rounded-2xl border border-border bg-surface p-4 shadow-pop sm:inset-10" aria-describedby={undefined}>
          <div className="mb-3 flex items-center justify-between">
            <Dialog.Title className="font-semibold">Thay đổi so với bản trên đĩa</Dialog.Title>
            <Dialog.Close aria-label="Đóng"><X className="size-5" /></Dialog.Close>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto"><DiffView before={before} after={after} /></div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function HistoryDialog({ rootId, path, current, lastBackup, onRestore }: { rootId: string; path: string; current: string; lastBackup: string | null; onRestore: (t: string) => void }) {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState<{ id: string; at: number; size: number }[] | null>(null);
  const [sel, setSel] = useState<{ id: string; content: string } | null>(null);
  useEffect(() => {
    if (!open) return;
    fetch(`/api/edit?root=${encodeURIComponent(rootId)}&path=${encodeURIComponent(path)}&backups=1`).then((r) => r.json()).then(setList).catch(() => setList([]));
  }, [open, rootId, path, lastBackup]);
  const pick = async (id: string) => {
    const r = await fetch(`/api/edit?root=${encodeURIComponent(rootId)}&path=${encodeURIComponent(path)}&backup=${encodeURIComponent(id)}`);
    const j = await r.json();
    if (r.ok) setSel({ id, content: j.content });
  };
  return (
    <Dialog.Root open={open} onOpenChange={(o) => (setOpen(o), o && setSel(null))}>
      <Dialog.Trigger className="flex items-center gap-1 rounded-lg border border-border px-2.5 py-1.5 text-xs text-text-2 hover:bg-surface-2">
        <History className="size-3.5" /> <span className="hidden sm:inline">Lịch sử</span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50" />
        <Dialog.Content className="fixed inset-4 z-50 flex flex-col rounded-2xl border border-border bg-surface p-4 shadow-pop sm:inset-10" aria-describedby={undefined}>
          <div className="mb-3 flex items-center justify-between">
            <Dialog.Title className="font-semibold">Các bản đã sao lưu</Dialog.Title>
            <Dialog.Close aria-label="Đóng"><X className="size-5" /></Dialog.Close>
          </div>
          <div className="grid min-h-0 flex-1 gap-4 md:grid-cols-[16rem_1fr]">
            <ul className="overflow-y-auto rounded-xl border border-border">
              {list === null ? <li className="p-3 text-sm text-muted">Đang tải…</li> : null}
              {list?.length === 0 ? <li className="p-3 text-sm text-muted">Chưa có bản sao lưu. Bản cũ được lưu tự động mỗi lần bạn bấm Lưu.</li> : null}
              {list?.map((b) => (
                <li key={b.id}>
                  <button onClick={() => void pick(b.id)} className={cn("w-full px-3 py-2 text-left text-sm hover:bg-surface-2", sel?.id === b.id && "bg-accent-soft")}>
                    {new Date(b.at).toLocaleString("vi-VN")}
                    <span className="block text-xs text-muted">{relativeTime(b.at)} · {(b.size / 1024).toFixed(1)} KB</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="min-h-0 overflow-y-auto">
              {sel ? (
                <>
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <p className="text-sm text-muted">Khác biệt giữa bản sao lưu và nội dung đang soạn</p>
                    <button
                      onClick={() => {
                        onRestore(sel.content);
                        setOpen(false);
                      }}
                      className="rounded-lg bg-accent px-3 py-1.5 text-sm font-semibold text-white dark:text-bg"
                    >
                      Khôi phục bản này vào trình soạn
                    </button>
                  </div>
                  <DiffView before={current} after={sel.content} />
                  <p className="mt-2 text-xs text-muted">Khôi phục chỉ nạp nội dung vào trình soạn; bấm Lưu để ghi ra file.</p>
                </>
              ) : (
                <p className="p-3 text-sm text-muted">Chọn một bản bên trái để xem khác biệt.</p>
              )}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
