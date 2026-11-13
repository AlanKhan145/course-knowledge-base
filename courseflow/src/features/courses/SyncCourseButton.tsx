"use client";
import { Check, RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

/** Re-scan just this course after its Markdown files were added/renamed/removed outside the web editor. */
export function SyncCourseButton({ slug }: { slug: string }) {
  const router = useRouter();
  const [state, setState] = useState<"idle" | "busy" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");
  return (
    <div>
      <button
        type="button"
        disabled={state === "busy"}
        onClick={async () => {
          setState("busy");
          const r = await fetch(`/api/admin/rescan?course=${encodeURIComponent(slug)}`, { method: "POST" }).catch(() => null);
          const j = r ? await r.json().catch(() => ({})) : {};
          if (r?.ok) {
            setState("done");
            setMsg(`${j.modules} module · ${j.lessons} bài · đọc lại ${j.parsed} file`);
            router.refresh();
          } else {
            setState("error");
            setMsg(j.error ?? "Không đồng bộ được");
          }
        }}
        className={cn("flex w-full items-center justify-center gap-1.5 rounded-xl border px-3 py-2 text-sm", state === "error" ? "border-danger/40 text-danger" : "border-border")}
        title="Quét lại thư mục của khóa này khi bạn vừa thêm, đổi tên hoặc xoá file Markdown"
      >
        {state === "done" ? <Check className="size-4 text-success" /> : <RefreshCw className={cn("size-4", state === "busy" && "animate-spin")} />}
        {state === "busy" ? "Đang đồng bộ…" : "Đồng bộ khóa"}
      </button>
      {msg ? <p className={cn("mt-1 text-center text-xs", state === "error" ? "text-danger" : "text-muted")}>{msg}</p> : null}
    </div>
  );
}
