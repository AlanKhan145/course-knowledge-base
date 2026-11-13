// Writes reports/SURVEY.md — the discovery report (counts, structures, statuses).
import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { getDbPath } from "../../src/lib/content/config.ts";
import type { ScanStats } from "../../src/lib/content/scanner.ts";

export function writeSurveyReport(stats: ScanStats[]): string {
  const db = new DatabaseSync(getDbPath(), { readOnly: true });
  const q = <T,>(sql: string, ...a: (string | number)[]) => db.prepare(sql).all(...a) as unknown as T[];
  const lines: string[] = [];
  const now = new Date().toISOString().slice(0, 16).replace("T", " ");
  lines.push(`# Báo cáo khảo sát kho học liệu`, "", `Sinh tự động bởi \`npm run scan\` lúc ${now}. Không chỉnh tay — chạy lại scan để cập nhật.`, "");
  for (const s of stats) {
    lines.push(`## Content root \`${s.root}\``, "");
    lines.push("| Chỉ số | Giá trị |", "|---|---:|");
    const rows: [string, number | string][] = [
      ["File Markdown", s.mdFiles], ["Lĩnh vực (domain)", s.domains], ["Chuyên ngành + cấp con", s.categories],
      ["Khóa học có nội dung", s.courses], ["Module", s.modules], ["Bài học (tính tiến độ)", s.lessons],
      ["Tài liệu tổng quan / bổ sung", s.resources], ["Câu hỏi nhận diện được", s.questions], ["Câu hỏi chấm tự động được", s.gradable],
      ["Thư mục bị bỏ qua", s.skipped], ["Thời gian quét (s)", (s.ms.total / 1000).toFixed(1)],
    ];
    for (const [k, v] of rows) lines.push(`| ${k} | ${typeof v === "number" ? v.toLocaleString("vi-VN") : v} |`);
    lines.push("", "### Tình trạng khóa học", "", "| Trạng thái | Số khóa |", "|---|---:|");
    const label: Record<string, string> = { ready: "Đầy đủ", partial: "Chưa hoàn thiện (ít bài / bài quá ngắn)", "overview-only": "Chỉ có tổng quan", empty: "Trống" };
    for (const [k, v] of Object.entries(s.byStatus)) lines.push(`| ${label[k] ?? k} | ${v} |`);
    lines.push("", "### Lỗi kiểm tra tự động", "", "| Mã | Số lượng |", "|---|---:|");
    for (const [k, v] of Object.entries(s.issues).sort((a, b) => b[1] - a[1])) lines.push(`| \`${k}\` | ${v.toLocaleString("vi-VN")} |`);
  }
  lines.push("", "## Theo lĩnh vực", "", "| Lĩnh vực | Chuyên ngành | Khóa | Bài học | Câu hỏi |", "|---|---:|---:|---:|---:|");
  for (const d of q<{ id: string; title: string }>("SELECT id, title FROM domains ORDER BY ord")) {
    const c = q<{ n: number; l: number; qn: number }>("SELECT count(*) n, sum(lesson_count) l, sum(question_count) qn FROM courses WHERE domain_id = ?", d.id)[0];
    const cats = q<{ n: number }>("SELECT count(*) n FROM categories WHERE domain_id = ?", d.id)[0];
    lines.push(`| ${d.title} | ${cats.n} | ${c.n} | ${(c.l ?? 0).toLocaleString("vi-VN")} | ${(c.qn ?? 0).toLocaleString("vi-VN")} |`);
  }
  lines.push("", "## Kiểu cấu trúc khóa học", "", "| Cấu trúc | Số khóa | Ví dụ |", "|---|---:|---|");
  for (const r of q<{ s: string; n: number; ex: string }>("SELECT CASE WHEN structure = 'flat' THEN 'phẳng (module = thư mục con)' ELSE 'có thư mục bọc: ' || structure END s, count(*) n, min(title) ex FROM courses GROUP BY structure ORDER BY n DESC LIMIT 15"))
    lines.push(`| ${r.s} | ${r.n} | ${r.ex} |`);
  lines.push("", "## Media trong bài học", "", "| Loại | Số bài |", "|---|---:|");
  const m = q<{ mer: number; math: number; img: number; code: number }>("SELECT sum(has_mermaid) mer, sum(has_math) math, sum(has_images) img, sum(has_code) code FROM lessons WHERE kind='lesson'")[0];
  lines.push(`| Sơ đồ Mermaid | ${m.mer} |`, `| Công thức toán | ${m.math} |`, `| Hình ảnh | ${m.img} |`, `| Code block | ${m.code} |`);
  lines.push("", "## Khóa học sâu nhất / lớn nhất", "", "| Khóa | Module | Bài |", "|---|---:|---:|");
  for (const r of q<{ title: string; module_count: number; lesson_count: number }>("SELECT title, module_count, lesson_count FROM courses ORDER BY lesson_count DESC LIMIT 10"))
    lines.push(`| ${r.title} | ${r.module_count} | ${r.lesson_count} |`);
  db.close();
  const out = path.resolve("reports", "SURVEY.md");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, lines.join("\n") + "\n", "utf8");
  return out;
}
