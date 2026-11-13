import { FolderSearch } from "lucide-react";

export function EmptyCatalog() {
  return (
    <main id="main" className="mx-auto flex max-w-xl flex-col items-center px-6 py-24 text-center">
      <span className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-accent-soft text-accent">
        <FolderSearch className="size-7" />
      </span>
      <h1 className="text-2xl font-bold">Chưa có catalog khóa học</h1>
      <p className="mt-3 text-muted">
        CourseFlow đọc học liệu qua một chỉ mục dựng sẵn. Hãy chạy lệnh quét trong thư mục <code>courseflow</code> (lần đầu mất vài chục phút trên ổ chậm, các lần sau chỉ đọc file thay đổi):
      </p>
      <pre className="mt-4 w-full rounded-xl border border-border bg-surface p-4 text-left font-mono text-sm">npm run scan</pre>
      <p className="mt-4 text-sm text-muted">
        Thư mục học liệu mặc định là <code>../Khóa học</code>; đổi bằng biến môi trường <code>COURSEFLOW_CONTENT_ROOTS</code>.
      </p>
    </main>
  );
}
