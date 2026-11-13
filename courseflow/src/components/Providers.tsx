"use client";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { ensureLoaded, flushNow } from "@/features/progress/store";
import { CommandPalette } from "@/features/search/CommandPalette";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    void ensureLoaded();
    const onHide = () => void flushNow();
    window.addEventListener("pagehide", onHide);
    document.addEventListener("visibilitychange", () => document.visibilityState === "hidden" && onHide());
    return () => window.removeEventListener("pagehide", onHide);
  }, []);
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
      <CommandPalette />
    </ThemeProvider>
  );
}
