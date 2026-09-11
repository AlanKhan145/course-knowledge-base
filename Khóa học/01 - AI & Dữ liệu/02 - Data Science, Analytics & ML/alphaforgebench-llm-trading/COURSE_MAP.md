# Bản đồ khóa học và ánh xạ nguồn

| Bài | Chủ đề | Trang PDF chính | Tài sản liên quan |
|---|---|---:|---|
| 00 | Tổng quan bài báo và vấn đề nghiên cứu | 1-2 | - |
| 01 | Bất ổn của LLM khi trực tiếp ra quyết định giao dịch | 1-2 | - |
| 02 | Bối cảnh các benchmark tài chính | 2-3 | - |
| 03 | Kiến trúc AlphaForgeBench | 3-4 | `figure-01-alphaforgebench-framework.png` |
| 04 | Dataset Stage 1 và Stage 2 | 4 | `figure-01-alphaforgebench-framework.png` |
| 05 | Prompt, sinh code, backtest | 4-5 | `figure-01-alphaforgebench-framework.png` |
| 06 | Thiết kế thí nghiệm và hệ metric | 5 | `table-01-real-world-results.png` |
| 07 | Kết quả Stage 1 | 5-6 | Table 1 |
| 08 | Kết quả Stage 2 | 6-9 | Figure 2-5, Table 2 |
| 09 | Thảo luận, phạm vi và kết luận | 9 | - |

## Các con số trụ cột cần nhớ

- 3.176 factor-strategy entries sau Stage 1.
- 633 chiến lược single-asset được dùng trong Track 1.
- 270 structured queries ở Stage 2.
- Tổng cộng 903 queries.
- 6 LLM được benchmark.
- 5 lần sinh độc lập cho mỗi query/model.
- 7 tài sản: 2 crypto và 5 cổ phiếu Mỹ.
- 35.190 strategy implementations.
- Cửa sổ backtest: 2021-01-01 đến 2026-01-01.
- 6 metric: ARR, SR, MDD, CR, SoR, VOL.

## Lưu ý đọc nguồn

Bản PDF hiện có chỉ chứa phần bài báo chính 10 trang. Các appendix được trích dẫn trong bài không có trong gói nguồn, nên mọi nội dung khóa học đều dừng ở mức được 10 trang này hỗ trợ.
