# RIKI JLPT 2025 — Course Index

## Mục tiêu

Đây là mục lục vận hành cho bộ khóa RIKI từ N5 đến N1. Mỗi cấp độ được tách thành các track có thứ tự học rõ ràng; kho tài liệu và đề thi dùng chung được đặt ngoài curriculum chính.

## Lộ trình tổng

```text
N5: Foundation → Core Lessons → Zoom → Resources
N4: Core Lessons → Zoom → Bài tập → Practice Exams → Resources
N3: JUNBI → TAISAKU → Zoom bổ trợ → Practice Exams
N2: JUNBI → TAISAKU → Zoom → Practice Exams
N1: JUNBI → TAISAKU → Practice Exams
```

## Các khóa

| Level | Khóa | Track chính | Quy mô record đã lập | Trạng thái |
|---|---|---|---:|---|
| N5 | [N5 RIKI 2025](./n5-riki/README.md) | Foundation, Core Lessons, Zoom | 25 bài core + 66 buổi Zoom | `partial` |
| N4 | [N4 RIKI 2025](./n4-riki/README.md) | Core Lessons, Zoom, Bài tập, Luyện đề | 25 bài core + 50+ buổi Zoom | `partial` |
| N3 | [N3 RIKI 2025](./n3-riki/README.md) | JUNBI, TAISAKU, Zoom, Giải đề | 20 nhóm + 35 Kanji + 23 grammar task | `partial` |
| N2 | [N2 RIKI 2025](./n2-riki/README.md) | JUNBI, TAISAKU, Zoom, Luyện đề | 36 buổi Zoom + 7 đề năm | `partial` |
| N1 | [N1 RIKI 2025](./n1-riki/README.md) | JUNBI, TAISAKU, Luyện đề | 17 vocab + 20 grammar + 25 reading | `partial` |
| — | [Resource Library](./resource-library/README.md) | Tài liệu N5–N1, đề thi năm | 9 nhóm tài nguyên | `confirmed` |

## File lesson Markdown

Các file lesson dùng bố cục gần với những khóa Markdown hiện có trong workspace:

1. Mục tiêu học tập.
2. Nội dung/khái niệm trọng tâm.
3. Từ vựng hoặc cấu trúc mẫu.
4. Ví dụ/hội thoại nếu nguồn đã cung cấp.
5. Luyện tập và checklist tự đánh giá.
6. Asset gốc và trạng thái dữ liệu.

Lesson có đủ dữ liệu nguồn được biên soạn thành note; lesson mới chỉ có tên được giữ ở dạng `scaffold`, không suy đoán nội dung video.

## Database manifest

[curriculum.json](./curriculum.json) là bản manifest tối thiểu để import vào LMS. Các trường chính:

```text
course → tracks → lessons → modules → assets
```

`source_status` được giữ trên các record để phân biệt dữ liệu xác nhận, dữ liệu một phần và tiêu đề chưa rõ.

## Kiểm tra nhanh

- Từ root mở file này để đi đến từng cấp độ.
- Từ mỗi cấp độ mở README của track để xem lesson map.
- Dùng `curriculum.json` khi cần tạo record database.
- Bổ sung link Drive thật vào trường `file_url`/`source_url`; không đặt link giả trong lesson note.

🏠 [README curriculum map](./README.md)
