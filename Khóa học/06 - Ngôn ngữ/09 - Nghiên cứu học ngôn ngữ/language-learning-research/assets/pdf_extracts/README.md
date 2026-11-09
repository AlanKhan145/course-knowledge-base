# PDF image extracts

Thư mục này được điền tự động sau khi chạy:

```bash
python scripts/extract_pdf_images.py
```

Mỗi subfolder giữ `cover.png`, tối đa vài trang evidence/figure phù hợp và `SOURCE.md` ghi PDF/page nguồn. Không crop figure tự động để tránh làm mất caption/trục/legend; ảnh là **toàn trang PDF** để giữ ngữ cảnh nghiên cứu.
