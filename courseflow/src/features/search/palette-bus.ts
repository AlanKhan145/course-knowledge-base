"use client";
// Tiny event bus so any button can open the global search palette.
const EVENT = "courseflow:open-palette";

export function openCommandPalette(query = "") {
  window.dispatchEvent(new CustomEvent(EVENT, { detail: query }));
}

export function onOpenPalette(cb: (q: string) => void) {
  const h = (e: Event) => cb(String((e as CustomEvent).detail ?? ""));
  window.addEventListener(EVENT, h);
  return () => window.removeEventListener(EVENT, h);
}
