---
title: "Bài 05 — Thêm pg_textsearch và truy vấn BM25"
course: "Hybrid Search với PostgreSQL"
lesson_number: 5
lesson_type: "lab"
language: vi
---

# Bài 05 — Thêm pg_textsearch và truy vấn BM25

**Chủ đề:** PostgreSQL · pg_textsearch · pgvector · Hybrid Search  
**Loại bài:** lab

## 1. Tổng quan

Bài này đưa ranking BM25 vào đúng cột đã được đo baseline. `pg_textsearch` cung cấp kiểu chỉ mục `bm25`, toán tử điểm `<@>` và bộ tạo truy vấn `to_bm25query`. Cú pháp và khả năng có thể khác theo phiên bản; dùng lệnh kiểm tra extension trước khi chạy.

## 2. Tạo chỉ mục BM25

```sql
CREATE EXTENSION IF NOT EXISTS pg_textsearch;

CREATE INDEX IF NOT EXISTS articles_body_bm25_idx
ON articles USING bm25 (body)
WITH (text_config='english');
```

Ví dụ trên dựa trên cú pháp tiện ích mở rộng đã công bố. Với cơ sở dữ liệu lớn, có thể cân nhắc điều chỉnh `maintenance_work_mem` và `max_parallel_maintenance_workers` theo tài nguyên máy chủ. Ví dụ thực hành chọn mức ngân sách tham khảo 256 MB và tối đa 4 maintenance workers, không phải thông số tối ưu phổ quát.

## 3. Điểm âm và hướng sắp xếp

```sql
SELECT id, title,
       body <@> to_bm25query('volcano eruption ash aviation',
                             'articles_body_bm25_idx') AS score
FROM articles
ORDER BY score ASC
LIMIT 10;
```

`<@>` trả **âm của điểm BM25** trong `pg_textsearch`: `-20` thể hiện kết quả mạnh hơn `-5`. Vì vậy thứ tự cần là **`ASC`**, trái với ví dụ `ts_rank DESC`. Điểm không phải phần trăm độ phù hợp. Khi ứng dụng cần loại kết quả không khớp, nên ràng buộc ngưỡng/tập ứng viên theo semantics phiên bản sử dụng, tránh đưa bài có điểm bằng 0 vào màn hình.

## 4. Vì sao chỉ mục này khác GIN?

GIN tìm các tài liệu thỏa điều kiện `tsquery`. Truy vấn top-k theo BM25 có thể dùng đường truy xuất trả ứng viên theo điểm, với kỹ thuật bỏ qua khối không thể tăng thứ hạng. Điều này cần được **xác minh** bằng kế hoạch SQL; không nên dùng kết quả của hai câu truy vấn có quy tắc matching khác nhau để kết luận tốc độ thuật toán.

```sql
EXPLAIN (ANALYZE, BUFFERS)
SELECT id, title
FROM articles
ORDER BY body <@> to_bm25query('volcano eruption ash aviation',
                               'articles_body_bm25_idx')
LIMIT 10;
```

Nếu query GIN gốc yêu cầu cả năm lexeme mà trả 0 hàng, trong khi BM25 trả 10 hàng, hai bài toán không tương đương. Một lần đo minh họa có thể thấy baseline rất nhanh vì không có kết quả; điều đó không chứng minh baseline nhanh hơn mọi truy vấn BM25.

## 5. Truy vấn dùng tham số an toàn

Python nên truyền văn bản do user nhập thành *giá trị tham số*:

```python
sql = """
SELECT id, title
FROM articles
ORDER BY body <@> to_bm25query(%s, 'articles_body_bm25_idx')
LIMIT %s
"""
cur.execute(sql, (user_query, limit))
```

Không nối dữ liệu user trực tiếp vào cấu trúc câu SQL. Tên index là cấu hình cố định của ứng dụng; query string là dữ liệu được binding.

## 6. Checkpoint

- Tạo chỉ mục BM25, chạy truy vấn, xác nhận `ASC`.
- Lưu top-10 cho ba truy vấn đã dùng ở baseline.
- So sánh plan và giải thích liệu hai phương pháp đang chọn cùng tập ứng viên hay không.
- Ghi chú phiên bản extension đang chạy và thay đổi không tương thích (nếu có).

## 7. Câu hỏi ôn tập

### Câu 1

Với toán tử pg_textsearch `<@>`, giá trị nào xếp trước?

A. 0  
B. -5  
C. -20  
D. 5  

**Đáp án:** C  
**Giải thích:** Điểm trả về âm: âm hơn biểu thị tín hiệu BM25 mạnh hơn.

### Câu 2

Hướng ORDER BY phù hợp cho điểm âm BM25 là?

A. ASC  
B. DESC  
C. RANDOM  
D. Không sắp xếp  

**Đáp án:** A  
**Giải thích:** ASC đặt -20 trước -5.

### Câu 3

Lý do giữ tên index cố định ở phía ứng dụng?

A. Nó phải do user nhập  
B. Nó chỉ định thống kê phù hợp và tránh user sửa cấu trúc SQL  
C. Không cần biết tên index  
D. Nó thay mật khẩu  

**Đáp án:** B  
**Giải thích:** Index cung cấp ngữ cảnh chấm điểm; user chỉ cung cấp dữ liệu tìm kiếm.

### Câu 4

So sánh truy vấn AND = 0 kết quả với BM25 = 10 kết quả có công bằng về tốc độ?

A. Có, chúng cùng bài toán  
B. Có, vì cùng bảng  
C. Không quan trọng dữ liệu  
D. Không, vì điều kiện và khối lượng công việc khác nhau  

**Đáp án:** D  
**Giải thích:** Phải chuẩn hóa điều kiện và số khớp trước khi so tốc độ.

### Câu 5

Ý nghĩa chính của EXPLAIN ở bài này?

A. Kiểm tra đường truy cập chỉ mục thực tế  
B. Thay model embedding  
C. Dịch nội dung  
D. Tăng điểm BM25  

**Đáp án:** A  
**Giải thích:** EXPLAIN cho thấy SQL đã chạy theo plan nào.
