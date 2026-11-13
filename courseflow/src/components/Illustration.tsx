"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

/** Decorative illustration from public/illus (generated assets). Hidden if the file is missing. */
export function Illustration({ name, className }: { name: "empty-courses" | "empty-progress" | "empty-search" | "empty-review" | "hero-study" | "quiz-perfect"; className?: string }) {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={`/illus/${name}.webp`} alt="" aria-hidden loading="lazy" decoding="async" onError={() => setOk(false)} className={cn("pointer-events-none select-none", className)} />;
}
