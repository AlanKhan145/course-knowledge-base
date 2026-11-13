"use client";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const order = ["light", "dark", "system"] as const;
  const current = mounted ? ((theme as (typeof order)[number]) ?? "system") : "system";
  const next = order[(order.indexOf(current) + 1) % order.length];
  const Icon = current === "light" ? Sun : current === "dark" ? Moon : Monitor;
  const label = { light: "Sáng", dark: "Tối", system: "Theo hệ thống" }[current];
  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-muted transition hover:text-text"
      aria-label={`Giao diện: ${label}. Bấm để đổi`}
      title={`Giao diện: ${label}`}
    >
      <Icon className="size-4" />
    </button>
  );
}
