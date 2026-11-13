import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-lg px-6 py-24 text-center">
      <p className="text-6xl font-bold text-accent">404</p>
      <h1 className="mt-4 text-2xl font-bold">Không tìm thấy trang</h1>
      <p className="mt-2 text-muted">Bài học có thể đã được đổi tên hoặc di chuyển. Chạy lại quét học liệu hoặc tìm lại bằng Ctrl + K.</p>
      <Link href="/explore" className="mt-6 inline-block rounded-xl bg-accent px-4 py-2 font-semibold text-white dark:text-bg">Về trang Khám phá</Link>
    </main>
  );
}
