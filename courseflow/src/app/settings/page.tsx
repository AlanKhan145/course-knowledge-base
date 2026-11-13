import type { Metadata } from "next";
import { getCatalogStats, localEditingEnabled } from "@/lib/content/repository";
import { SettingsView } from "@/features/progress/SettingsView";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Cài đặt" };

export default function SettingsPage() {
  const s = getCatalogStats();
  return <SettingsView lastScan={s.lastScan} local={localEditingEnabled()} stats={{ courses: s.courses, lessons: s.lessons }} />;
}
