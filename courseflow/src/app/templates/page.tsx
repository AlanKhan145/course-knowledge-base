import type { Metadata } from "next";
import fs from "node:fs/promises";
import path from "node:path";
import { Download, FileCode2, LayoutTemplate } from "lucide-react";
import { renderLesson } from "@/lib/markdown/render";
import { TEMPLATES_ROOT } from "@/lib/content/repository";
import { CopyButton } from "@/components/markdown/CopyButton";
import { TableOfContents } from "@/features/lessons/TableOfContents";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Template bài học" };

const FILES = [
  { file: "lesson.md", label: "Bài học (lesson.md)", hint: "Mẫu bài Markdown đầy đủ — sửa theo mẫu này" },
  { file: "quiz.json", label: "Bộ câu hỏi (quiz.json)", hint: "Đặt cạnh bài: <tên-bài>.quiz.json" },
  { file: "course.yaml", label: "Khóa học (course.yaml)", hint: "Metadata khóa — đặt trong thư mục khóa hoặc manifests/" },
  { file: "module.yaml", label: "Module (module.yaml)", hint: "Ghi chú về cách đặt tên/thứ tự module" },
  { file: "README.md", label: "Hướng dẫn (README.md)", hint: "Cách thêm khóa học mới" },
];

export default async function TemplatesPage({ searchParams }: { searchParams: Promise<{ f?: string }> }) {
  const { f } = await searchParams;
  const current = FILES.find((x) => x.file === f) ?? FILES[0];
  const dir = path.resolve(process.cwd(), "templates");
  const source = await fs.readFile(path.join(dir, current.file), "utf8").catch(() => "");
  const isLesson = current.file === "lesson.md";
  const rendered = isLesson
    ? await renderLesson(source, { lessonId: "template-preview", lessonTitle: "Template", rootId: TEMPLATES_ROOT, lessonPath: "lesson.md", courseId: "template", courseSlug: "template" })
    : null;
  return (
    <main id="main" className="mx-auto max-w-7xl px-4 pt-8 pb-24 sm:px-6">
      <header className="mb-6">
        <h1 className="flex items-center gap-3 text-3xl font-bold tracking-tight"><LayoutTemplate className="size-7 text-accent" /> Template học liệu</h1>
        <p className="mt-2 max-w-3xl text-muted">
          Mẫu chuẩn để bạn sửa từng bài. Trang web không tự sửa Markdown của bạn — bên trái là bản xem trước (ảnh, sơ đồ, công thức, câu hỏi trắc nghiệm hiển thị đúng như trong bài thật), bên phải là mã nguồn để chép. Thứ tự các mục dựa trên{" "}
          <a href="#ly-do" className="text-accent underline">nghiên cứu về cách học hiệu quả</a>.
        </p>
      </header>
      <nav className="mb-6 flex flex-wrap gap-2" aria-label="Các file template">
        {FILES.map((x) => (
          <a key={x.file} href={`/templates?f=${x.file}`} className={`rounded-xl border px-3 py-2 text-sm ${x.file === current.file ? "border-accent bg-accent-soft font-semibold text-accent-ink" : "border-border bg-surface"}`} title={x.hint}>
            {x.label}
          </a>
        ))}
      </nav>
      <div className={isLesson ? "grid gap-8 xl:grid-cols-[1fr_30rem]" : ""}>
        {rendered ? (
          <section className="min-w-0 rounded-3xl border border-border bg-bg-elevated px-5 py-8 sm:px-10" aria-label="Xem trước">
            <p className="mb-6 inline-block rounded-full bg-surface-2 px-3 py-1 text-xs text-muted">Xem trước — hiển thị như trong trang đọc bài</p>
            <div className="mb-8 rounded-2xl border border-border bg-surface p-4"><TableOfContents toc={rendered.toc} /></div>
            <article className="prose-lesson mx-auto" style={{ maxWidth: "46rem" }}>{rendered.body}</article>
          </section>
        ) : null}
        <section className="min-w-0 xl:sticky xl:top-20 xl:self-start" aria-label="Mã nguồn">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-2">
              <span className="flex items-center gap-2 font-mono text-xs text-muted"><FileCode2 className="size-4" /> templates/{current.file}</span>
              <span className="flex items-center gap-1">
                <CopyButton text={source} label="Chép mẫu" />
                <a href={`/api/asset/${TEMPLATES_ROOT}/${current.file}`} download={current.file} className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-muted hover:bg-surface-3 hover:text-text">
                  <Download className="size-3.5" /> Tải về
                </a>
              </span>
            </div>
            <pre className="max-h-[75vh] overflow-auto p-4 font-mono text-[12.5px] leading-relaxed whitespace-pre-wrap text-text-2">{source}</pre>
          </div>
          <p className="mt-3 text-xs text-muted">{current.hint}</p>
        </section>
      </div>
      {isLesson ? (
        <section id="ly-do" className="mt-12 max-w-3xl rounded-2xl border border-border bg-surface p-6 text-sm leading-relaxed text-text-2">
          <h2 className="mb-3 text-lg font-semibold text-text">Vì sao template theo thứ tự này?</h2>
          <ul className="list-disc space-y-1.5 pl-5">
            <li><b>Mục tiêu + thử đoán trước</b>: biết trước đích đến và đoán trước (kể cả đoán sai) giúp tập trung vào ý chính.</li>
            <li><b>Ví dụ có lời giải trước bài tự làm</b>: giảm quá tải khi gặp kiến thức mới, rồi giảm dần hỗ trợ.</li>
            <li><b>Sơ đồ đi kèm lời</b>: chữ + hình giúp hiểu quan hệ giữa các khái niệm.</li>
            <li><b>Câu hỏi ôn tập trước Tóm tắt</b>: tự nhớ lại (truy hồi) hiệu quả hơn đọc lại; trang Ôn tập ngẫu nhiên dùng lại đúng các câu này.</li>
            <li><b>Câu hỏi đọc riêng vẫn hiểu</b> (không lặp “Khi học bài …”), có giải thích vì sao phương án sai là sai.</li>
          </ul>
          <p className="mt-3 text-xs text-muted">Chi tiết và nguồn: <code>courseflow/docs/LEARNING_DESIGN.md</code>.</p>
        </section>
      ) : null}
    </main>
  );
}
