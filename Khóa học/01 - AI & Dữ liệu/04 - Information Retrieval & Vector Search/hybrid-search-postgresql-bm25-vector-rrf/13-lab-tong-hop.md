---
title: "Bài 13 — Lab tổng hợp: kiểm chứng ba chế độ tìm kiếm"
lesson_number: 13
lesson_type: lab
language: vi
---

# Bài 13 — Lab tổng hợp: kiểm chứng ba chế độ tìm kiếm

## 1. Tổng quan

Tích hợp các kỹ năng FTS, BM25, semantic và RRF vào một **báo cáo có thể lặp lại**. Không cần nộp toàn bộ web app nếu chưa có dataset/extension: kết quả ở mức SQL/đồ thị và script RRF có thể đủ cho checkpoint đầu.

## 2. Mục tiêu và chuẩn bị

Cần PostgreSQL có bảng dữ liệu, Python và tệp `RRF_demo.py`. Nếu muốn chạy BM25/semantic thực tế, cần extension tương thích cùng mô hình embedding tạo vector 384 chiều. Khi thiếu môi trường, dùng dữ liệu nhỏ có ghi nhãn **demo**, không giả mạo kết quả Wikipedia.

## 3. Quy trình 8 bước

1. Kiểm tra số dòng bài viết và số embedding; ghi cả hai con số.
2. Chạy `sql_postgres_baseline.sql` vào một database thử nghiệm riêng và đọc `EXPLAIN`.
3. Với dataset thật, chạy keyword baseline trên `Apollo 13`, `volcano eruption ash aviation`, `jazz trumpet New Orleans`.
4. Kiểm tra `pg_textsearch`, tạo chỉ mục BM25 tương thích, ghi top-10 và hướng `ORDER BY`.
5. Với tập đã embed, kiểm tra đủ vector và tìm top-10 semantic của `animals that produce their own light`.
6. Dùng RRF top-20 mỗi nhánh tạo top-10; thử semantic weight 0.5 và 0.7.
7. Ghi SQL latency riêng với thời gian API/embedding; ít nhất 3 lần đo mỗi query.
8. Viết báo cáo có ảnh chụp query plan, bảng đánh giá relevance, hạn chế về coverage và hướng cải tiến.

## 4. Checkpoint

| Mốc | Bằng chứng phải có |
| --- | --- |
| A | Schema 5 trường, số bài và số vector |
| B | Query plan và top-10 PostgreSQL FTS |
| C | Query plan và top-10 BM25, kiểm tra ASC |
| D | Top-10 semantic, lỗi liên quan tên riêng đã nhận diện |
| E | Hai danh sách ứng viên và thứ hạng RRF |
| F | Báo cáo latency phân tách và đánh giá chất lượng |

## 5. Debug

Nếu query trả 0 bài: kiểm tra matching `AND` và `OR` trước khi thay ranking. Nếu query semantic thiếu bài: kiểm tra danh sách đã embedding. Nếu hybrid kém: thử kiểm tra riêng chất lượng từng danh sách đầu vào và candidate depth. Nếu mã tô sáng tạo HTML sai: kiểm tra escape dữ liệu và marker highlight.

## 6. Deliverable

Nộp `bao_cao.md`, ảnh hoặc text của SQL plan, 5 nhóm kết quả keyword/semantic/hybrid, cấu hình index/model không chứa bí mật và file mã chạy RRF. Kết quả tốt phải phân biệt rõ **đã chạy và đo được** với **chỉ mô tả thiết kế**.

## 7. Checklist

- [ ] Query đúng 5 chủ đề cố định
- [ ] Có đủ kết quả hoặc ghi rõ nguyên nhân thiếu
- [ ] Không so điểm BM25 âm trực tiếp với vector distance
- [ ] Có kết quả RRF xác minh bằng Python
- [ ] Có ghi chú về độ bao phủ và phiên bản extension
