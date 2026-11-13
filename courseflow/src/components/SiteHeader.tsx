"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Home, NotebookPen, Search, Settings, Shuffle } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { openCommandPalette } from "@/features/search/palette-bus";

const NAV = [
  { href: "/", label: "Trang chủ", icon: Home },
  { href: "/explore", label: "Khám phá", icon: Compass },
  { href: "/practice", label: "Ôn tập", icon: Shuffle },
  { href: "/review", label: "Biên tập", icon: NotebookPen },
  { href: "/settings", label: "Cài đặt", icon: Settings },
];

export function SiteHeader() {
  const pathname = usePathname();
  if (pathname.startsWith("/learn/") || pathname.startsWith("/edit/")) return null; // reader/editor have their own bars
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-4 sm:px-6">
        <Logo />
        <nav className="ml-2 hidden items-center gap-0.5 md:flex" aria-label="Điều hướng chính">
          {NAV.map((n) => {
            const active = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
            return (
              <Link key={n.href} href={n.href} className={cn("rounded-lg px-3 py-1.5 text-sm font-medium transition", active ? "bg-surface-2 text-text" : "text-muted hover:text-text")} aria-current={active ? "page" : undefined}>
                {n.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          onClick={() => openCommandPalette()}
          className="ml-auto flex h-9 w-full max-w-xs items-center gap-2 rounded-xl border border-border bg-surface px-3 text-sm text-muted transition hover:border-border-strong"
          aria-label="Tìm kiếm (Ctrl+K)"
        >
          <Search className="size-4" />
          <span className="flex-1 truncate text-left">Tìm khóa học, bài học…</span>
          <kbd className="hidden rounded border border-border px-1.5 font-mono text-[10px] sm:inline">Ctrl K</kbd>
        </button>
        <ThemeToggle />
      </div>
      <nav className="flex border-t border-border/70 md:hidden" aria-label="Điều hướng chính (di động)">
        {NAV.map((n) => {
          const active = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
          const Icon = n.icon;
          return (
            <Link key={n.href} href={n.href} className={cn("flex flex-1 flex-col items-center gap-0.5 py-1.5 text-[11px]", active ? "text-accent" : "text-muted")}>
              <Icon className="size-4" />
              {n.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

export function Logo({ compact }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2 font-semibold tracking-tight text-text" aria-label="CourseFlow — trang chủ">
      <svg viewBox="0 0 32 32" className="size-7" aria-hidden>
        <rect width="32" height="32" rx="9" fill="var(--accent)" />
        <path d="M9 21.5c3.2-7.5 8.5-10.8 14-11" stroke="white" strokeWidth="2.6" strokeLinecap="round" fill="none" />
        <circle cx="10" cy="21.5" r="2.4" fill="var(--amber)" />
      </svg>
      {compact ? null : <span className="text-[15px]">CourseFlow</span>}
    </Link>
  );
}
