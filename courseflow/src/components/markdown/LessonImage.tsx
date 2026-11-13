"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { Check, Copy, ImageIcon, ImageOff, Minus, Plus, X, ZoomIn } from "lucide-react";
import { useState } from "react";

/** Where the image lives: path as written in the markdown → file path inside the content root, with a copy button. */
function ImagePath({ original, filePath, missing }: { original?: string; filePath?: string; missing?: boolean }) {
  const [copied, setCopied] = useState(false);
  if (!original && !filePath) return null;
  const external = !!original && /^https?:/i.test(original);
  return (
    <span className="mt-1.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 font-mono text-[11px] text-muted">
      <ImageIcon className="size-3 shrink-0" aria-hidden />
      <span className="max-w-full truncate" title={original}>
        {original}
      </span>
      {filePath && !external && filePath !== original ? (
        <span className={missing ? "max-w-full truncate text-danger" : "max-w-full truncate opacity-75"} title={filePath}>
          → {missing ? "không có file: " : ""}
          {filePath}
        </span>
      ) : null}
      <button
        type="button"
        onClick={async () => {
          await navigator.clipboard?.writeText(filePath ?? original ?? "").catch(() => undefined);
          setCopied(true);
          setTimeout(() => setCopied(false), 1400);
        }}
        className="inline-flex items-center gap-0.5 rounded px-1 font-sans hover:bg-surface-2 hover:text-text"
        aria-label="Chép đường dẫn ảnh"
        title="Chép đường dẫn ảnh"
      >
        {copied ? <Check className="size-3 text-success" /> : <Copy className="size-3" />}
      </button>
    </span>
  );
}

/** Lesson image: lazy, captioned, shows its path, click to open a zoomable lightbox. */
export function LessonImage({ src, alt, title, original, filePath }: { src: string | null; alt: string; title?: string; original?: string; filePath?: string }) {
  const [scale, setScale] = useState(1);
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <span className="not-prose my-4 block">
        <span className="flex items-center gap-3 rounded-xl border border-dashed border-danger/40 bg-danger-soft/50 px-4 py-3 text-sm text-danger" role="img" aria-label={alt || "Ảnh bị thiếu"}>
          <ImageOff className="size-4 shrink-0" />
          <span>Không tải được ảnh{alt ? `: “${alt}”` : ""}</span>
        </span>
        <ImagePath original={original} filePath={filePath} missing />
      </span>
    );
  }
  const caption = title || alt;
  return (
    <Dialog.Root onOpenChange={() => setScale(1)}>
      <span className="not-prose my-6 block">
        <Dialog.Trigger asChild>
          <button type="button" className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-border bg-surface-2" aria-label={`Phóng to ảnh${alt ? ": " + alt : ""}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setFailed(true)} className="mx-auto max-h-[70vh] w-auto max-w-full object-contain" />
            <span className="absolute right-2 bottom-2 inline-flex items-center gap-1 rounded-md bg-black/55 px-2 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
              <ZoomIn className="size-3.5" /> Phóng to
            </span>
          </button>
        </Dialog.Trigger>
        {caption ? <span className="mt-2 block text-center text-[0.85em] text-muted">{caption}</span> : null}
        <ImagePath original={original} filePath={filePath} />
      </span>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80" />
        <Dialog.Content className="fixed inset-0 z-50 flex flex-col" aria-describedby={undefined}>
          <div className="flex items-center justify-between gap-3 px-4 py-3 text-white">
            <Dialog.Title className="min-w-0 truncate text-sm">
              {caption || "Hình ảnh"} <span className="ml-2 font-mono text-xs opacity-60">{filePath ?? original}</span>
            </Dialog.Title>
            <div className="flex items-center gap-1">
              <button className="rounded-md p-2 hover:bg-white/10" onClick={() => setScale((s) => Math.max(0.5, s / 1.3))} aria-label="Thu nhỏ">
                <Minus className="size-4" />
              </button>
              <span className="w-12 text-center text-xs tabular-nums">{Math.round(scale * 100)}%</span>
              <button className="rounded-md p-2 hover:bg-white/10" onClick={() => setScale((s) => Math.min(5, s * 1.3))} aria-label="Phóng to">
                <Plus className="size-4" />
              </button>
              <Dialog.Close className="ml-2 rounded-md p-2 hover:bg-white/10" aria-label="Đóng">
                <X className="size-5" />
              </Dialog.Close>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center overflow-auto p-4" onWheel={(e) => setScale((s) => Math.min(5, Math.max(0.5, s * (e.deltaY < 0 ? 1.1 : 0.9))))}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} className="max-h-full max-w-full object-contain transition-transform" style={{ transform: `scale(${scale})` }} />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
