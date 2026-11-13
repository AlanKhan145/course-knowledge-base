import type { Metadata } from "next";
import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { QualityTable, type QualityCourse } from "@/features/review/QualityTable";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Chất lượng học liệu" };

interface QualityFile {
  generatedAt: string;
  summary: Record<string, unknown>;
  courses: QualityCourse[];
}

export default async function QualityPage() {
  let data: QualityFile | null = null;
  try {
    data = JSON.parse(await fs.readFile(path.resolve(process.cwd(), "reports", "quality.json"), "utf8")) as QualityFile;
  } catch {
    data = null;
  }
  return (
    <main id="main" className="mx-auto max-w-7xl px-4 pt-8 pb-20 sm:px-6">
      <h1 className="flex items-center gap-3 text-3xl font-bold tracking-tight"><ShieldCheck className="size-7 text-accent" /> Chất lượng học liệu</h1>
      <p className="mt-2 max-w-3xl text-muted">
        Điểm tự động chỉ đo những gì máy kiểm tra được (metadata, cấu trúc, câu hỏi có đáp án, ví dụ, liên kết hỏng, trùng lặp, mục tóm tắt). Độ chính xác nội dung, độ phù hợp với mục tiêu và đáp án đúng hay sai vẫn cần người đọc —
        dùng <Link href="/review" className="text-accent underline">Biên tập</Link> để đánh dấu.
      </p>
      {data ? (
        <>
          <p className="mt-2 text-xs text-muted">Báo cáo sinh lúc {new Date(data.generatedAt).toLocaleString("vi-VN")} bằng <code>npm run quality</code>.</p>
          <QualityTable courses={data.courses} />
        </>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-border-strong p-8 text-center">
          <p className="font-semibold">Chưa có báo cáo</p>
          <p className="mt-1 text-sm text-muted">Chạy <code>npm run quality</code> trong thư mục courseflow.</p>
        </div>
      )}
    </main>
  );
}
