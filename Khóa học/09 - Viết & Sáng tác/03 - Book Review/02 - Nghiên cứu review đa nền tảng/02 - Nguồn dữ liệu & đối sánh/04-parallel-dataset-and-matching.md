# 04 — Xây dựng parallel dataset và bài toán matching

## Mục tiêu

Hiểu workflow tạo dataset song song và lý do phải kết hợp tự động hóa với kiểm tra thủ công.

## 1. Workflow 3 bước của paper

1. **Xác định các trang sách có khả năng ghép cặp** giữa hai nền tảng.
2. **Thu thập dữ liệu** từ các trang đã chọn.
3. **Làm sạch và pairing** dữ liệu Goodreads–Douban để tạo parallel dataset.

## 2. Vấn đề 1 — Book metadata không đơn giản

Cùng title + author chưa chắc là cùng một đơn vị dữ liệu:

- có thể là các volume khác nhau của một bộ;
- một work có nhiều edition;
- title thay đổi theo bản dịch;
- author name có nhiều dạng viết;
- metadata trên trang có thể sai hoặc thiếu.

Paper dùng *Animal Farm* làm ví dụ về việc một tác phẩm có nhiều tên dịch tiếng Trung khác nhau.

## 3. Vấn đề 2 — Metadata trên web có thể sai

Paper trình bày ví dụ các trang có thông tin bị gắn nhầm. Ý nghĩa phương pháp rất quan trọng:

> **Automated matching không đủ cho quality control khi metadata nguồn không đáng tin cậy.**

Vì thế, nhóm nghiên cứu kết hợp **human inspection + manual cleaning + computational processing**.

## 4. Vấn đề 3 — Truy vấn khác ngôn ngữ trả về kết quả khác

Case *Aloeswood Incense* cho thấy tìm bằng:

- simplified Chinese;
- traditional Chinese;
- English title;

có thể trả về số kết quả khác nhau trên Goodreads.

Nhóm nghiên cứu vì vậy thử nhiều dạng title, và khi cần còn dùng author name hoặc series name để tìm candidate match.

## 5. Checklist matching

Đây là checklist học tập được biên soạn từ workflow của paper:

- [ ] original title
- [ ] translated/common English title
- [ ] author name variants
- [ ] series/volume information
- [ ] publication/edition clues
- [ ] manual verification of candidate page
- [ ] record paired URLs
- [ ] record uncertainty / missing match

## 6. Bài tập tình huống

Bạn có 3 trang cùng tên một tiểu thuyết, nhưng khác publisher, year và translator. Hãy viết 5 câu hỏi cần kiểm tra trước khi quyết định ghép với một trang ở nền tảng khác.
