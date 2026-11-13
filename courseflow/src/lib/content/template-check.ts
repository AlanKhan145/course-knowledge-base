// Compares a lesson's structure with templates/lesson.md. Read-only: it reports, never rewrites.
import type { HeadingInfo } from "./lesson-meta.ts";

export interface TemplateSection {
  key: string;
  label: string;
  required: boolean;
  match: RegExp;
}

export const TEMPLATE_SECTIONS: TemplateSection[] = [
  { key: "overview", label: "Tổng quan", required: true, match: /(tổng quan|tóm tắt nhanh|giới thiệu|overview|introduction|^tóm tắt$|bối cảnh)/i },
  { key: "objectives", label: "Mục tiêu học tập", required: true, match: /(mục tiêu|objectives?|learning outcomes|bạn sẽ học)/i },
  { key: "prerequisites", label: "Kiến thức cần chuẩn bị", required: false, match: /(cần chuẩn bị|kiến thức (nền|cần có|tiên quyết)|prerequisites?|yêu cầu trước)/i },
  { key: "core", label: "Kiến thức cốt lõi", required: true, match: /(kiến thức cốt lõi|khái niệm|cốt lõi|core concepts?|key concepts?|lý thuyết|nội dung chính)/i },
  { key: "detail", label: "Giải thích chi tiết", required: false, match: /(giải thích|chi tiết|phân tích|deep dive|cách hoạt động|how it works)/i },
  { key: "example", label: "Ví dụ minh họa", required: true, match: /(ví dụ|minh họa|example|demo|case study|tình huống)/i },
  { key: "practice", label: "Thực hành / bài tập", required: false, match: /(thực hành|bài tập|luyện tập|practice|exercise|lab|hands[- ]on|áp dụng)/i },
  { key: "mistakes", label: "Lỗi thường gặp", required: false, match: /(lỗi thường gặp|sai lầm|điểm dễ sai|common mistakes|pitfalls|lưu ý)/i },
  { key: "summary", label: "Tóm tắt kiến thức", required: true, match: /(tóm tắt|tổng kết|summary|recap|kết luận|ghi nhớ)/i },
  { key: "quiz", label: "Câu hỏi ôn tập", required: true, match: /(câu hỏi|quiz|ôn tập|kiểm tra|knowledge check|review questions|self[- ]check)/i },
  { key: "references", label: "Tài liệu tham khảo", required: false, match: /(tài liệu tham khảo|tham khảo|references?|đọc thêm|further reading|nguồn)/i },
  { key: "next", label: "Bài học tiếp theo", required: false, match: /(bài (học )?tiếp theo|next (lesson|steps?)|bước tiếp theo)/i },
];

export interface TemplateReport {
  /** 0–100, weighted: required sections 2 pts, optional 1 pt, gradable quiz ≥3 questions +2, frontmatter +1 */
  score: number;
  present: string[];
  missing: { key: string; label: string; required: boolean }[];
  hasFrontmatter: boolean;
  gradable: number;
}

export function checkTemplate(headings: HeadingInfo[], fm: Record<string, unknown>, gradable: number): TemplateReport {
  const texts = headings.filter((h) => h.depth >= 2 && h.depth <= 3).map((h) => h.text.replace(/^[\dIVX]+(\.\d+)*[.)]?\s*/i, "").trim());
  const present: string[] = [];
  const missing: TemplateReport["missing"] = [];
  let got = 0;
  let max = 0;
  for (const s of TEMPLATE_SECTIONS) {
    const w = s.required ? 2 : 1;
    max += w;
    const ok = s.key === "quiz" ? gradable > 0 || texts.some((t) => s.match.test(t)) : texts.some((t) => s.match.test(t));
    if (ok) {
      present.push(s.key);
      got += w;
    } else missing.push({ key: s.key, label: s.label, required: s.required });
  }
  const hasFrontmatter = !!(fm && (fm.title || fm.id || fm.description));
  max += 3;
  if (gradable >= 3) got += 2;
  if (hasFrontmatter) got += 1;
  return { score: Math.round((got / max) * 100), present, missing, hasFrontmatter, gradable };
}
