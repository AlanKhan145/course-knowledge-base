"use client";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyButton({ text, label = "Sao chép" }: { text: string; label?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          setTimeout(() => setDone(false), 1600);
        } catch {
          /* clipboard blocked */
        }
      }}
      className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-muted transition hover:bg-surface-3 hover:text-text"
      aria-label={done ? "Đã sao chép" : label}
    >
      {done ? <Check className="size-3.5 text-success" /> : <Copy className="size-3.5" />}
      <span>{done ? "Đã chép" : label}</span>
    </button>
  );
}
