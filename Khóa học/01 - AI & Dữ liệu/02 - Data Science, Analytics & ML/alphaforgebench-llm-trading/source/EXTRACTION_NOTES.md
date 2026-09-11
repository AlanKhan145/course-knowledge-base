# Ghi chú trích xuất nguồn

## Tệp nguồn

- `AlphaForge.pdf`: PDF người dùng cung cấp, 10 trang.
- `full_text.txt`: text trích xuất bằng `pdftotext -layout`.
- `references-extracted.txt`: phần References được tách từ text thô.
- `pdf_info.json`: metadata và thông tin cấu trúc PDF.

## Hình ảnh

Ảnh được trích xuất theo hai lớp:

1. `assets/raw-extracted/`: các raster object được trích trực tiếp từ PDF.
2. `assets/figures/` và `assets/tables/`: bản curated, ghép/cắt để dễ dùng trong Markdown.

### Ánh xạ hình

- Figure 1 -> PDF trang 3 -> `figure-01-alphaforgebench-framework.png`.
- Figure 2 -> PDF trang 6 -> `figure-02-radar-temperature-comparison.png`.
- Figure 3 -> PDF trang 8 -> `figure-03-sharpe-by-level.png`.
- Figure 4 -> PDF trang 8 -> `figure-04-sharpe-by-asset.png`.
- Figure 5 -> PDF trang 8 -> `figure-05-aligned-return-curves.png`.
- Table 1 -> PDF trang 5 -> `table-01-real-world-results.png`.
- Table 2 -> PDF trang 7 -> `table-02-llm-augmented-results.png`.

## Giới hạn

PDF nhắc nhiều Appendix nhưng tệp hiện tại không chứa appendix. Nội dung khóa học không tự bổ sung các phần đó bằng nguồn ngoài.
