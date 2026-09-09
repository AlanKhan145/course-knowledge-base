from __future__ import annotations

import argparse
import glob
import os
from pathlib import Path

from PIL import Image, WebPImagePlugin
import PIL._webp as _webp


def make_webp(src: Path, dst: Path, *, quality: int, step: int, crop_y: int,
              size: int = 1024, duration: int = 42) -> None:
    files = sorted(glob.glob(str(src / "frame_*.png")))
    files = files[::step]
    if not files:
        raise RuntimeError(f"No frames found in {src}")

    # Preserve the complete animation timing when frames are sampled.
    frame_duration = duration * step
    # RGBA background is only metadata; the actual frames are opaque RGB.
    background = (0 << 24) | (0 << 16) | (0 << 8) | 0
    enc = _webp.WebPAnimEncoder(
        (size, size), background, 0, True, 3, 5, False, False
    )

    timestamp = 0
    for index, filename in enumerate(files):
        with Image.open(filename) as source:
            frame = source.convert("RGB")
            # The renders are 540x960. Crop only empty vertical background so
            # the requested square output is not geometrically distorted.
            frame = frame.crop((0, crop_y, frame.width, crop_y + frame.width))
            frame = frame.resize((size, size), Image.Resampling.LANCZOS)
            converted = WebPImagePlugin._convert_frame(frame)
            enc.add(converted.getim(), timestamp, False, quality, 100, 6)
            timestamp += frame_duration

    enc.add(None, timestamp, False, quality, 100, 0)
    data = enc.assemble("", "", "")
    if data is None:
        raise RuntimeError("WebP encoder returned no data")
    dst.parent.mkdir(parents=True, exist_ok=True)
    dst.write_bytes(data)
    print(f"{dst}\t{len(data)} bytes\t{len(files)} frames\tq={quality}\tstep={step}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("src", type=Path)
    parser.add_argument("dst", type=Path)
    parser.add_argument("--quality", type=int, required=True)
    parser.add_argument("--step", type=int, default=1)
    parser.add_argument("--crop-y", type=int, default=180)
    parser.add_argument("--duration", type=int, default=42)
    args = parser.parse_args()
    make_webp(args.src, args.dst, quality=args.quality, step=args.step,
              crop_y=args.crop_y, duration=args.duration)
