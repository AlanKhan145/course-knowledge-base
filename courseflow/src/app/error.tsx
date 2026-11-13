"use client";
import { useEffect } from "react";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => console.error(error), [error]);
  return (
    <main id="main" className="mx-auto max-w-lg px-6 py-24 text-center">
      <h1 className="text-2xl font-bold">Đã có lỗi khi hiển thị trang</h1>
      <p className="mt-2 text-sm text-muted">{error.message}</p>
      <button onClick={reset} className="mt-6 rounded-xl bg-accent px-4 py-2 font-semibold text-white dark:text-bg">Thử lại</button>
    </main>
  );
}
