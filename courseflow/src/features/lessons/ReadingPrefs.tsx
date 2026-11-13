"use client";
import * as Popover from "@radix-ui/react-popover";
import { Type } from "lucide-react";
import { cn } from "@/lib/utils";
import { setPrefs, useLearner } from "@/features/progress/store";

export function ReadingPrefs() {
  const p = useLearner((s) => s.prefs);
  return (
    <Popover.Root>
      <Popover.Trigger className="flex size-9 items-center justify-center rounded-xl text-muted hover:bg-surface-2 hover:text-text" aria-label="Tùy chỉnh đọc">
        <Type className="size-4" />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content align="end" sideOffset={8} className="z-50 w-72 rounded-2xl border border-border bg-surface p-4 shadow-pop">
          <p className="mb-2 text-xs font-semibold text-muted uppercase">Cỡ chữ</p>
          <div className="flex items-center gap-2">
            <button className="rounded-lg border border-border px-3 py-1 text-sm" onClick={() => setPrefs({ fontSize: Math.max(14, p.fontSize - 1) })} aria-label="Giảm cỡ chữ">
              A−
            </button>
            <span className="flex-1 text-center text-sm tabular-nums">{p.fontSize}px</span>
            <button className="rounded-lg border border-border px-3 py-1 text-sm" onClick={() => setPrefs({ fontSize: Math.min(24, p.fontSize + 1) })} aria-label="Tăng cỡ chữ">
              A+
            </button>
          </div>
          <p className="mt-4 mb-2 text-xs font-semibold text-muted uppercase">Độ rộng vùng đọc</p>
          <div className="grid grid-cols-3 gap-1">
            {(["narrow", "normal", "wide"] as const).map((w) => (
              <button key={w} onClick={() => setPrefs({ width: w })} className={cn("rounded-lg border px-2 py-1.5 text-xs", p.width === w ? "border-accent bg-accent-soft text-accent-ink" : "border-border")}>
                {{ narrow: "Hẹp", normal: "Vừa", wide: "Rộng" }[w]}
              </button>
            ))}
          </div>
          <p className="mt-4 mb-2 text-xs font-semibold text-muted uppercase">Kiểu chữ</p>
          <div className="grid grid-cols-2 gap-1">
            {(["sans", "serif"] as const).map((f) => (
              <button key={f} onClick={() => setPrefs({ font: f })} className={cn("rounded-lg border px-2 py-1.5 text-sm", f === "serif" && "font-serif", p.font === f ? "border-accent bg-accent-soft text-accent-ink" : "border-border")}>
                {f === "sans" ? "Không chân" : "Có chân"}
              </button>
            ))}
          </div>
          <Popover.Arrow className="fill-surface" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
