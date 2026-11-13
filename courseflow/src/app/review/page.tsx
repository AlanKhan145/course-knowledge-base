import type { Metadata } from "next";
import { ReviewBoard } from "@/features/review/ReviewBoard";

export const metadata: Metadata = { title: "Biên tập học liệu" };

export default function ReviewPage() {
  return <ReviewBoard />;
}
