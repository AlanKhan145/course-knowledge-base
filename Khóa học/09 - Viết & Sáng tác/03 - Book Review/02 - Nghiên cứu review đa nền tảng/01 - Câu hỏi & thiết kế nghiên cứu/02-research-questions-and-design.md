# 02 — Câu hỏi nghiên cứu và thiết kế so sánh

## Mục tiêu

Hiểu logic nghiên cứu trước khi đi vào kỹ thuật dữ liệu.

## 1. Ba nhóm câu hỏi chính

Paper xoay quanh ba nhóm vấn đề:

### A. Cái gì được xem là “classic” trên mỗi nền tảng?

- Danh sách classics có khác nhau không?
- Nền tảng nào nhấn mạnh những ngôn ngữ, thể loại hoặc truyền thống nào?

### B. Người đọc hai nền tảng đánh giá giống hay khác nhau?

- Rating trung bình hội tụ hay phân kỳ ở đâu?
- Phân phối sao có giống nhau không?
- Lượng ratings/reviews khác nhau ra sao?

### C. Làm thế nào để so sánh dữ liệu không đồng nhất?

- Cùng một tác phẩm có nhiều edition/version.
- Metadata có thể thiếu hoặc sai.
- Hai nền tảng tổ chức rating khác nhau.
- Dữ liệu nhiều ngôn ngữ làm matching khó hơn.

## 2. Thiết kế tổng quát

Nghiên cứu tạo hai tập classics, sau đó thu thập dữ liệu chéo để có thể so sánh cùng tác phẩm ở cả Douban và Goodreads.

```text
Goodreads classics (144) ─┐
                          ├─> tìm trang tương ứng trên nền tảng còn lại
Douban classics (141) ────┘
                          ↓
                  thu thập metadata + ratings + tags
                          ↓
                     làm sạch + ghép cặp
                          ↓
                     phân tích so sánh
```

## 3. Tại sao đây không phải “apples-to-apples” hoàn hảo?

Ngay từ thiết kế, hai danh sách classics không được tạo bằng **chính xác cùng một cơ chế** vì Douban và Goodreads cung cấp các loại dữ liệu khác nhau. Tác giả cố gắng tạo một thiết kế tương tự về ý tưởng, nhưng thừa nhận tính không đồng nhất của hệ thống.

Đây là bài học phương pháp quan trọng: **đừng giả định cùng tên biến = cùng ý nghĩa dữ liệu**.

## 4. Bài tập

Hãy viết một bảng 3 cột:

| Câu hỏi | Dữ liệu cần | Rủi ro diễn giải |
|---|---|---|
| Classic là gì? | tags/list membership | nền tảng tự chọn lọc người dùng |
| Rating khác nhau? | rating + distribution | edition aggregation khác nhau |
| Interest khác nhau? | tags/genre/review volume | không đồng nhất văn hóa và quy mô cộng đồng |

Bổ sung ít nhất 3 dòng nữa.
