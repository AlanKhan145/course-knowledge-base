---
title: "Bài 04 — Tìm kiếm toàn văn PostgreSQL: tsvector, tsquery và GIN"
course: "Hybrid Search với PostgreSQL"
lesson_number: 4
lesson_type: "lab"
language: vi
---

# Bài 04 — Tìm kiếm toàn văn PostgreSQL: tsvector, tsquery và GIN

**Chủ đề:** PostgreSQL · pg_textsearch · pgvector · Hybrid Search  
**Loại bài:** lab

## 1. Tổng quan và mục tiêu

Trước khi thêm BM25, cần có **baseline** từ tính năng Full-Text Search của PostgreSQL. Người học sẽ lập chỉ mục GIN, chạy truy vấn `AND` và `OR`, xếp hạng bằng `ts_rank`, rồi đọc `EXPLAIN (ANALYZE, BUFFERS)`.

## 2. Biểu diễn văn bản thành lexeme

`to_tsvector('english', body)` tách văn bản thành lexeme, có thể xử lý biến thể của từ và stop words tùy cấu hình tiếng Anh. `plainto_tsquery` biến một chuỗi tìm kiếm thường thành tsquery, mặc định liên kết các lexeme có nghĩa bằng `AND`. Chỉ mục GIN giúp tìm bài chứa các lexeme đó.

```sql
CREATE INDEX IF NOT EXISTS articles_body_fts_idx
ON articles USING GIN (to_tsvector('english', body));

SELECT id, title,
       ts_rank(to_tsvector('english', body),
               plainto_tsquery('english', 'volcano eruption ash aviation')) AS rank
FROM articles
WHERE to_tsvector('english', body)
      @@ plainto_tsquery('english', 'volcano eruption ash aviation')
ORDER BY rank DESC
LIMIT 10;
```

`@@` kiểm tra có khớp không. `ts_rank` tính điểm với những bài đã đủ điều kiện. `ORDER BY rank DESC` ưu tiên điểm cao. `LIMIT 10` giới hạn *số dòng đầu ra*, không bảo đảm DB chỉ phải đọc mười hàng.

## 3. AND khác OR ở đâu?

Khi truy vấn yêu cầu quá nhiều lexeme cùng xuất hiện, có thể không có kết quả. Quy tắc đối chiếu có thể được nới lỏng:

```sql
SELECT title
FROM articles
WHERE to_tsvector('english', body)
   @@ to_tsquery('english', 'volcano | ash | aviation')
LIMIT 10;
```

| Toán tử | Ý nghĩa | Tác động |
| --- | --- | --- |
| `&` | AND | Phải thỏa các vế |
| `\|` | OR | Đủ một trong các vế |
| `!` | NOT | Loại tài liệu thỏa vế phủ định |
| `<->` | FOLLOWED BY | Các lexeme theo thứ tự liền nhau ở mức tìm kiếm toàn văn |

Đổi `&` thành `|` chỉ thay **tập ứng viên**; đó không phải là bằng chứng thuật toán ranking đã tốt hơn.

## 4. Đọc query plan

```sql
EXPLAIN (ANALYZE, BUFFERS)
SELECT id, title
FROM articles
WHERE to_tsvector('english', body)
      @@ plainto_tsquery('english', 'Apollo 13')
ORDER BY ts_rank(to_tsvector('english', body),
                 plainto_tsquery('english', 'Apollo 13')) DESC
LIMIT 10;
```

Kiểm tra có `Bitmap Index Scan` trên GIN, số `actual rows`, `Sort` và tổng `Execution Time` hay không. `EXPLAIN ANALYZE` **thực sự chạy truy vấn**; nếu dùng với SQL ghi dữ liệu cần cẩn thận. `BUFFERS` cho thấy số trang được truy cập. Thời gian sẽ khác nhau theo cache, số khớp, máy chủ và cấu hình.

## 5. Checkpoint và bài tập

Chạy cùng ba truy vấn: `volcano eruption ash aviation`, `jazz trumpet New Orleans`, `Apollo 13`. Lưu title top-10 và query plan cho baseline. Thử lặp lại sau khi cache ấm lên và ghi **mỗi phép đo** thay vì khẳng định một runtime cố định.

## 6. Debug

Nếu kết quả `AND` rỗng, xem `to_tsquery` được parse ra sao rồi thử `OR`. Nếu database không sử dụng GIN trên bảng rất nhỏ, không mặc nhiên coi là lỗi: planner có thể chọn đường quét khác vì chi phí thấp hơn.

## 7. Deliverable và checklist

- [ ] Tạo GIN trên `to_tsvector`
- [ ] Thực hiện ba truy vấn baseline
- [ ] Lưu top-10 cùng query plan
- [ ] Phân biệt số dòng kết quả với số dòng đã được xét

## 8. Câu hỏi ôn tập

### Câu 1

Để lọc bài có từ theo FTS, dùng toán tử nào?

A. <@>  
B. @@  
C. !=  
D. =>  

**Đáp án:** B  
**Giải thích:** @@ kiểm tra tsvector có khớp tsquery.

### Câu 2

Một truy vấn AND có 0 kết quả, thao tác nào nới tập ứng viên?

A. Tăng RAM  
B. Đổi LIMIT thành 0  
C. Đổi toán tử thành OR  
D. Đổi bảng thành view  

**Đáp án:** C  
**Giải thích:** OR cho phép bất kỳ thành phần nào khớp.

### Câu 3

`ts_rank` thường sắp xếp top liên quan theo hướng nào?

A. DESC  
B. ASC  
C. Không có ORDER BY  
D. RANDOM  

**Đáp án:** A  
**Giải thích:** Trong baseline ts_rank, điểm càng cao được đặt đầu nhờ DESC.

### Câu 4

`LIMIT 10` khẳng định được điều gì?

A. Chỉ xét đúng 10 bài  
B. Không thể có Sort  
C. Luôn dùng GIN  
D. Tối đa 10 dòng được trả về  

**Đáp án:** D  
**Giải thích:** Giới hạn output không mặc nhiên giới hạn tổng công việc.

### Câu 5

Tùy chọn BUFFERS trong EXPLAIN giúp quan sát?

A. Độ tương đồng embedding  
B. Các trang/buffer dữ liệu truy cập  
C. Số ký tự tiêu đề  
D. Địa chỉ IP user  

**Đáp án:** B  
**Giải thích:** BUFFERS bổ sung thống kê truy cập buffer cho kế hoạch thực thi.
