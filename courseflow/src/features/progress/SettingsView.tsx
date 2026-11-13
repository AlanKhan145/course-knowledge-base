"use client";
import { Download, RefreshCw, Trash2, Upload } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { emptyState, exportJson, importJson, update, useLearner } from "./store";

export function SettingsView({ lastScan, local, stats }: { lastScan: string | null; local: boolean; stats: { courses: number; lessons: number } }) {
  const s = useLearner((x) => x);
  const file = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [scan, setScan] = useState<{ running: boolean; lastScan: string | null } | null>(null);

  useEffect(() => {
    let t: ReturnType<typeof setInterval> | null = null;
    const poll = () => fetch("/api/admin/rescan").then((r) => r.json()).then(setScan).catch(() => undefined);
    void poll();
    t = setInterval(poll, 5000);
    return () => {
      if (t) clearInterval(t);
    };
  }, []);

  const download = () => {
    const blob = new Blob([exportJson()], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `courseflow-tien-do-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const counts = [
    ["Bài đã mở", Object.keys(s.lessons).length],
    ["Bài đã học", Object.values(s.lessons).filter((l) => l.status === "completed").length],
    ["Đánh dấu biên tập", Object.keys(s.reviews).length],
    ["Ghi chú", Object.keys(s.notes).length],
    ["Bài đã lưu", Object.keys(s.bookmarks).length],
    ["Lần làm quiz", s.attempts.length],
  ] as const;

  return (
    <main id="main" className="mx-auto max-w-3xl space-y-6 px-4 pt-8 pb-20 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Cài đặt</h1>

      <section className="rounded-2xl border border-border bg-surface p-5">
        <h2 className="font-semibold">Dữ liệu học tập của bạn</h2>
        <p className="mt-1 text-sm text-muted">Lưu trong trình duyệt này (IndexedDB), giữ nguyên khi tắt máy. Xuất JSON để sao lưu hoặc chuyển sang máy khác.</p>
        <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {counts.map(([k, v]) => (
            <div key={k} className="rounded-xl bg-surface-2 p-3">
              <dt className="text-xs text-muted">{k}</dt>
              <dd className="text-lg font-semibold tabular-nums">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-4 flex flex-wrap gap-2">
          <button onClick={download} className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white dark:text-bg"><Download className="size-4" /> Xuất JSON</button>
          <button onClick={() => file.current?.click()} className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-semibold"><Upload className="size-4" /> Nhập JSON (gộp)</button>
          <input
            ref={file}
            type="file"
            accept="application/json,.json"
            className="hidden"
            onChange={async (e) => {
              const f = e.target.files?.[0];
              if (!f) return;
              const r = importJson(await f.text(), "merge");
              setMsg(r.ok ? "Đã gộp dữ liệu từ file." : r.error);
              e.target.value = "";
            }}
          />
          <button
            onClick={() => {
              if (confirm("Xoá toàn bộ tiến độ, ghi chú, đánh dấu và lịch sử quiz trên trình duyệt này? Nên xuất JSON trước.")) {
                update(() => emptyState());
                setMsg("Đã xoá dữ liệu học tập.");
              }
            }}
            className="inline-flex items-center gap-2 rounded-xl border border-danger/40 px-4 py-2 text-sm font-semibold text-danger"
          >
            <Trash2 className="size-4" /> Xoá dữ liệu
          </button>
        </div>
        {msg ? <p className="mt-3 text-sm text-accent" role="status">{msg}</p> : null}
      </section>

      <section className="rounded-2xl border border-border bg-surface p-5">
        <h2 className="font-semibold">Catalog học liệu</h2>
        <p className="mt-1 text-sm text-muted">
          {stats.courses.toLocaleString("vi-VN")} khóa · {stats.lessons.toLocaleString("vi-VN")} bài. Quét lần cuối: {scan?.lastScan ?? lastScan ? new Date((scan?.lastScan ?? lastScan)!).toLocaleString("vi-VN") : "chưa quét"}.
        </p>
        <p className="mt-1 text-sm text-muted">Quét lại chỉ đọc những file đã thay đổi; chạy nền, không làm gián đoạn việc học. Sửa bài trên web thì không cần quét lại.</p>
        {local ? (
          <button
            onClick={() => fetch("/api/admin/rescan", { method: "POST" }).then((r) => r.json()).then(setScan)}
            disabled={scan?.running}
            className="mt-3 inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-semibold disabled:opacity-60"
          >
            <RefreshCw className={`size-4 ${scan?.running ? "animate-spin" : ""}`} /> {scan?.running ? "Đang quét…" : "Quét lại học liệu"}
          </button>
        ) : (
          <p className="mt-2 text-sm text-muted">Chế độ công khai: quét bằng lệnh <code>npm run scan</code>.</p>
        )}
      </section>
    </main>
  );
}
