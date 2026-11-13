"use client";
import { Play } from "lucide-react";
import { useState } from "react";

/** Click-to-load YouTube embed (privacy-enhanced domain, nothing loads until the learner asks). */
export function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  const [on, setOn] = useState(false);
  return (
    <figure className="not-prose my-6">
      <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-black">
        {on ? (
          <iframe
            className="absolute inset-0 size-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
            title={title || "Video YouTube"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button type="button" onClick={() => setOn(true)} className="group absolute inset-0 flex flex-col items-center justify-center gap-3 text-white" aria-label={`Phát video: ${title || id}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" className="absolute inset-0 size-full object-cover opacity-70 transition group-hover:opacity-85" />
            <span className="relative flex size-16 items-center justify-center rounded-full bg-black/70 transition group-hover:scale-105">
              <Play className="ml-1 size-7 fill-white" />
            </span>
            <span className="relative max-w-[80%] truncate text-sm font-medium drop-shadow">{title || "Video YouTube"}</span>
          </button>
        )}
      </div>
    </figure>
  );
}
