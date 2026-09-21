# Bài tập 03 — Thiết kế factor hypothesis

## Scenario

Bạn có OHLCV theo ngày và một số fundamental fields. Baseline factor library đã có momentum 5/20/60 ngày và volatility 20 ngày.

## Nhiệm vụ

Thiết kế **3 hypothesis**, mỗi hypothesis phải gồm:

- `Motivation` — cơ sở kinh tế/thống kê;
- `Novelty` — khác factor đang có ở đâu;
- `Inputs` — field nào được dùng;
- `Transformation` — công thức/pseudocode;
- `Expected behavior` — kỳ vọng trong regime nào;
- `Failure modes` — khi nào factor có thể hỏng;
- `Validation` — schema check, leakage check, dedup và backtest.

## Ràng buộc

- Không dùng dữ liệu tương lai.
- Không dùng text/news vì scenario chỉ có structured data.
- Mỗi factor phải xuất DataFrame index `(datetime, instrument)` với một cột float.
- Nếu correlation với SOTA factor >= 0.99 thì xem là redundant.
