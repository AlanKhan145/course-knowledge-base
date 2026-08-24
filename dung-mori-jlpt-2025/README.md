# Dũng Mori 2025 — JLPT Japanese Curriculum

Bộ curriculum Dũng Mori 2025 từ N5 đến N1, được chuẩn hóa từ cấu trúc thư mục, tên bài, tên chương và tài liệu đã nhận diện trên Drive.

> Nguồn có nhiều folder chỉ ghi “Chương 01”, “Download…” hoặc có shortcut/bản sao. Các tên chưa đủ dữ kiện được giữ nguyên trạng thái `partial`/`unknown_title`, không tự suy đoán nội dung.

## Mục lục vận hành

- [COURSE_INDEX.md](./COURSE_INDEX.md) — cây khóa học và lộ trình.
- [LESSON_INDEX.md](./LESSON_INDEX.md) — danh sách link tới từng file bài/chương/module.
- [curriculum.json](./curriculum.json) — manifest `Course → Stage → Module → Lesson → Asset`.
- [N5 Dũng Mori 2025](./n5-dung-mori/README.md)
- [N4 Dũng Mori 2025](./n4-dung-mori/README.md)
- [N3 Dũng Mori 2025](./n3-dung-mori/README.md)
- [N2 Dũng Mori 2025](./n2-dung-mori/README.md)
- [N1 Dũng Mori 2025](./n1-dung-mori/README.md)

## Lộ trình tổng

```text
N5: Foundation → Bài giảng 01–25 → Đề thi → N5.pdf
N4: Bài giảng 26–50 → Tài liệu Minna → Lịch học → Đề thi
N3: Chặng 1 xây nền → Chặng 2 đọc/nghe → Chặng 3 luyện thi
N2: Chặng 1 kiến thức → Chặng 2 luyện thi → sách/hướng dẫn/lộ trình
N1: Chặng 1 nền → Chặng 2 đọc/nghe → Chặng 3 luyện thi → sách/lộ trình
```

## Quy ước dữ liệu

- `confirmed`: tên nhánh hoặc số lượng được nhận diện trực tiếp từ nguồn.
- `partial`: đã xác định cấu trúc nhưng chưa có đầy đủ asset/tên chi tiết.
- `unknown_title`: nguồn có record nhưng chỉ có số hoặc chưa có tiêu đề.
- `source_name_preserved`: giữ nguyên tên nguồn, ví dụ `Thi thử JLPT1`.
- `scaffold`: khung Markdown chờ transcript, link Drive hoặc file bài học.

## Schema lesson chuẩn

```text
Lesson
├── Vocabulary / Từ vựng
├── Kanji / Chữ Hán
├── Grammar / Ngữ pháp
├── Advanced / Mở rộng
├── Conversation / Hội thoại
├── Reading / Đọc hiểu
├── Listening / Nghe hiểu
├── Test / Bài kiểm tra
└── Assets: video, PDF, DOCX, ebook, roadmap
```

Các bài chỉ có metadata được ghi trong lesson map; hai bài có cấu trúc chi tiết đã được tách thành note mẫu: [N5 Bài 01](./n5-dung-mori/02-lessons/bai-01-chao-hoi.md) và [N4 Bài 26](./n4-dung-mori/01-lessons/bai-26.md).

## Ghi chú nguồn

- Thứ tự Drive có thể không phản ánh thứ tự học; manifest dùng `sort_order` riêng khi cần.
- `Thi thử JLPT1/2/3` trong N2 được giữ như tên lần thi thử, không hiểu thành cấp N1/N2/N3.
- N2 thiếu Chương 06 ở module Từ vựng; không tự điền.
- Các chương chỉ có số ở N3/N2/N1 được giữ đúng số chương.
