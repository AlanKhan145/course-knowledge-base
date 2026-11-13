"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { Maximize2, Minus, Plus, RotateCcw, Workflow, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useId, useRef, useState } from "react";

let mermaidPromise: Promise<typeof import("mermaid").default> | null = null;
function loadMermaid() {
  mermaidPromise ??= import("mermaid").then((m) => m.default);
  return mermaidPromise;
}

let renderQueue: Promise<unknown> = Promise.resolve();

/** Lazy-loaded Mermaid diagram with theme support, fullscreen viewer, zoom and pan. */
export function MermaidDiagram({ code }: { code: string }) {
  const { resolvedTheme } = useTheme();
  const rawId = useId().replace(/[^a-zA-Z0-9]/g, "");
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Render once the browser is idle (lessons hold only a few diagrams; avoids layout-dependent observers).
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number; cancelIdleCallback?: (id: number) => void };
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(() => setVisible(true), { timeout: 1200 });
      return () => w.cancelIdleCallback?.(id);
    }
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!visible) return;
    let cancelled = false;
    const dark = resolvedTheme === "dark";
    renderQueue = renderQueue.then(async () => {
      try {
        const mermaid = await loadMermaid();
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          theme: dark ? "dark" : "base",
          fontFamily: "var(--font-be-vietnam), ui-sans-serif, system-ui",
          themeVariables: dark
            ? { primaryColor: "#1f3a31", primaryBorderColor: "#5ec2a1", lineColor: "#8fa39b", primaryTextColor: "#ecebe5", fontSize: "15px" }
            : { primaryColor: "#e2efe9", primaryBorderColor: "#1e6b58", lineColor: "#6c685e", primaryTextColor: "#1d1c19", secondaryColor: "#fbefd5", tertiaryColor: "#f6f5f1", fontSize: "15px" },
        });
        const { svg } = await mermaid.render(`m${rawId}${dark ? "d" : "l"}`, code);
        if (!cancelled) {
          setSvg(svg);
          setError(null);
        }
      } catch (e) {
        if (!cancelled) setError((e as Error).message?.split("\n")[0] ?? "Lỗi cú pháp Mermaid");
        document.querySelectorAll(`#dm${rawId}d, #dm${rawId}l`).forEach((n) => n.remove());
      }
    });
    return () => {
      cancelled = true;
    };
  }, [visible, code, resolvedTheme, rawId]);

  return (
    <figure ref={ref} className="not-prose my-7 overflow-hidden rounded-xl border border-border bg-surface">
      <figcaption className="flex items-center justify-between border-b border-border px-4 py-1.5 text-xs text-muted">
        <span className="inline-flex items-center gap-1.5 font-medium">
          <Workflow className="size-3.5" /> Sơ đồ
        </span>
        {svg ? <FullscreenViewer svg={svg} /> : null}
      </figcaption>
      {error ? (
        <div className="p-4">
          <p className="mb-2 text-sm text-danger">Không vẽ được sơ đồ: {error}</p>
          <pre className="overflow-x-auto rounded-lg bg-surface-2 p-3 font-mono text-xs text-text-2">{code}</pre>
        </div>
      ) : svg ? (
        <div className="mermaid-canvas overflow-x-auto p-4 sm:p-6" dangerouslySetInnerHTML={{ __html: svg }} />
      ) : (
        <div className="p-6">
          <div className="skeleton mx-auto h-40 w-full max-w-md" aria-label="Đang vẽ sơ đồ" />
        </div>
      )}
    </figure>
  );
}

function FullscreenViewer({ svg }: { svg: string }) {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const drag = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);
  const reset = () => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };
  return (
    <Dialog.Root onOpenChange={(o) => !o && reset()}>
      <Dialog.Trigger className="inline-flex items-center gap-1 rounded-md px-2 py-1 hover:bg-surface-2 hover:text-text" aria-label="Phóng to sơ đồ">
        <Maximize2 className="size-3.5" /> Phóng to
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-2 z-50 flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-pop sm:inset-6">
          <div className="flex items-center justify-between border-b border-border px-4 py-2">
            <Dialog.Title className="text-sm font-semibold">Sơ đồ</Dialog.Title>
            <div className="flex items-center gap-1">
              <button className="rounded-md p-2 hover:bg-surface-2" onClick={() => setScale((s) => Math.max(0.3, s / 1.25))} aria-label="Thu nhỏ">
                <Minus className="size-4" />
              </button>
              <span className="w-12 text-center text-xs tabular-nums text-muted">{Math.round(scale * 100)}%</span>
              <button className="rounded-md p-2 hover:bg-surface-2" onClick={() => setScale((s) => Math.min(6, s * 1.25))} aria-label="Phóng to">
                <Plus className="size-4" />
              </button>
              <button className="rounded-md p-2 hover:bg-surface-2" onClick={reset} aria-label="Đặt lại">
                <RotateCcw className="size-4" />
              </button>
              <Dialog.Close className="ml-2 rounded-md p-2 hover:bg-surface-2" aria-label="Đóng">
                <X className="size-4" />
              </Dialog.Close>
            </div>
          </div>
          <div
            className="relative flex-1 cursor-grab touch-none overflow-hidden bg-bg active:cursor-grabbing"
            onWheel={(e) => setScale((s) => Math.min(6, Math.max(0.3, s * (e.deltaY < 0 ? 1.1 : 0.9))))}
            onPointerDown={(e) => {
              (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
              drag.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
            }}
            onPointerMove={(e) => {
              if (!drag.current) return;
              setOffset({ x: drag.current.ox + e.clientX - drag.current.x, y: drag.current.oy + e.clientY - drag.current.y });
            }}
            onPointerUp={() => (drag.current = null)}
          >
            <div
              className="mermaid-canvas zoomed absolute top-1/2 left-1/2 p-8"
              style={{ transform: `translate(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px)) scale(${scale})`, transformOrigin: "center" }}
              dangerouslySetInnerHTML={{ __html: svg }}
            />
          </div>
          <Dialog.Description className="border-t border-border px-4 py-1.5 text-xs text-muted">Kéo để di chuyển · cuộn chuột để phóng to/thu nhỏ</Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
