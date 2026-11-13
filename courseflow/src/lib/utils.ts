import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMinutes(min: number): string {
  if (!min || min < 1) return "< 1 phút";
  if (min < 60) return `${min} phút`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h} giờ ${m} phút` : `${h} giờ`;
}

export function formatDuration(sec: number): string {
  if (sec < 60) return `${Math.round(sec)} giây`;
  return formatMinutes(Math.round(sec / 60));
}

export function formatDate(ms: number): string {
  if (!ms) return "—";
  return new Date(ms).toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });
}

export function relativeTime(ms: number): string {
  const diff = Date.now() - ms;
  const m = Math.round(diff / 60000);
  if (m < 1) return "vừa xong";
  if (m < 60) return `${m} phút trước`;
  const h = Math.round(m / 60);
  if (h < 24) return `${h} giờ trước`;
  const d = Math.round(h / 24);
  if (d < 30) return `${d} ngày trước`;
  return formatDate(ms);
}

export const LEVEL_LABEL: Record<string, string> = { beginner: "Cơ bản", intermediate: "Trung cấp", advanced: "Nâng cao" };
export const LANG_LABEL: Record<string, string> = { vi: "Tiếng Việt", en: "English", mixed: "Việt – Anh" };
