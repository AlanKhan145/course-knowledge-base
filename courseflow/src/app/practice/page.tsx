import type { Metadata } from "next";
import { Practice } from "@/features/assessment/Practice";

export const metadata: Metadata = { title: "Ôn tập ngẫu nhiên" };

export default function PracticePage() {
  return <Practice />;
}
