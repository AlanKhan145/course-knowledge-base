# 1. Tài liệu RIKI — Resource Library

Kho tài liệu tách khỏi curriculum chính. Một resource có thể được nhiều level hoặc nhiều track dùng chung; không sao chép vào từng lesson.

## Nhóm tài nguyên

| Nhóm | Dùng cho | Trạng thái |
|---|---|---|
| Tài Liệu N5 | N5 Foundation/Core/Zoom | `confirmed` |
| Tài Liệu N4 | N4 Core/Zoom/Practice | `confirmed` |
| Tài Liệu N3 | N3 JUNBI/TAISAKU/Exams | `confirmed` |
| Tài Liệu N2 | N2 JUNBI/TAISAKU/Exams | `confirmed` |
| Tài Liệu N1 | N1 JUNBI/TAISAKU/Exams | `confirmed` |
| Đề thi N4–N5 các năm | N4 Practice Exams | `confirmed` |
| Đề thi N3 các năm | N3 Practice Exams | `confirmed` |
| Đề thi N2 các năm | N2 Practice Exams | `confirmed` |
| Đề thi N1 các năm | N1 Practice Exams | `confirmed` |

## Resource record

```json
{
  "level": "N4",
  "resource_type": "ebook_pdf",
  "title": "Tên tài liệu theo Drive",
  "file_name": "source-file.pdf",
  "file_url": null,
  "source_status": "partial",
  "used_by": ["n4-core", "n4-practice"]
}
```

## Quy tắc

- Giữ nguyên tên file gốc để tìm kiếm.
- Không tạo link giả; `file_url` để `null` đến khi có URL thật.
- Tài liệu có thể liên kết nhiều course bằng `used_by`.
- Đề thi lưu thêm `exam_date`, `section` và `solution_asset` khi có.

↩ [Course Index](../COURSE_INDEX.md)
