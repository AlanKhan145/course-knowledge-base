---
title: "Bài 06 — GIN, GiST và tối ưu Full-Text Search"
course: "PostgreSQL Full-Text Search"
type: "lesson"
order: 6
language: "vi"
---

# Bài 06 — GIN, GiST và tối ưu Full-Text Search

## 1. Tóm tắt

Nếu mỗi lần tìm kiếm đều tạo `tsvector` cho toàn bộ bảng, cơ sở dữ liệu có thể phải xử lý lại rất nhiều văn bản. Chỉ mục phù hợp giúp PostgreSQL nhanh chóng xác định các hàng có khả năng khớp, sau đó kiểm tra điều kiện và tính điểm khi cần.

## 2. Mục tiêu học tập

- Phân biệt chỉ mục GIN và GiST cho FTS.
- Tạo cột `tsvector` sinh sẵn (`GENERATED ALWAYS AS ... STORED`).
- Đọc kết quả `EXPLAIN (ANALYZE, BUFFERS)`.
- Giải thích vì sao một bảng nhỏ vẫn có thể được quét tuần tự.

## 3. So sánh GIN và GiST

| Tiêu chí | GIN | GiST |
| --- | --- | --- |
| Ý tưởng | Chỉ mục đảo: lexeme → danh sách mục tham chiếu | Biểu diễn nén/chữ ký để lọc ứng viên |
| Tính chính xác khi lọc chỉ mục FTS | Không có false-positive kiểu chữ ký GiST | Có thể phải kiểm tra lại vì chữ ký có thể trùng |
| Ưu tiên thường gặp | Lựa chọn được khuyến nghị phổ biến cho `tsvector` | Có thể cân nhắc trong tình huống chuyên biệt |
| Đánh đổi | Chi phí tạo/cập nhật chỉ mục, bộ nhớ/dung lượng | Có thể nhỏ hơn nhưng tăng recheck |

Không có quy tắc tuyệt đối rằng GIN luôn nhanh nhất; đo theo dữ liệu thật và kiểu workload.

## 4. Tạo cột tìm kiếm được lưu trữ

Nếu truy vấn chỉ phụ thuộc các cột trong cùng bảng, có thể tạo cột sinh sẵn:

```sql
ALTER TABLE quotes ADD COLUMN search_vector tsvector
GENERATED ALWAYS AS (
    setweight(to_tsvector('simple'::regconfig, coalesce(author,'')), 'A') ||
    setweight(to_tsvector('english'::regconfig, coalesce(content,'')), 'B')
) STORED;

CREATE INDEX quotes_search_vector_gin
ON quotes USING GIN (search_vector);
```

Cột sinh sẵn được tính lại khi dữ liệu liên quan trong hàng thay đổi. Biểu thức cột sinh phải đáp ứng quy tắc của PostgreSQL, trong đó có yêu cầu về tính bất biến của hàm; không thể tham chiếu trực tiếp sang bảng khác. Nếu cần thẻ hoặc diễn viên từ bảng quan hệ khác, hãy dùng phương án đồng bộ dữ liệu riêng hoặc materialized view.

## 5. Truy vấn sử dụng chỉ mục

```sql
EXPLAIN (ANALYZE, BUFFERS)
SELECT id, content
FROM quotes
WHERE search_vector @@ plainto_tsquery('english', 'darkness');
```

`Bitmap Index Scan` hoặc những bước sử dụng index là dấu hiệu planner có khai thác chỉ mục. Tuy vậy, với bảng rất ít hàng, PostgreSQL có thể chọn `Seq Scan` vì cách đó rẻ hơn. Không nên tuyên bố một index “không hoạt động” chỉ do một ví dụ nhỏ dùng quét tuần tự.

Cần chú ý `Planning Time`, `Execution Time`, số hàng thực tế và số block dữ liệu (buffers). Thử tăng quy mô dữ liệu để so sánh; `ANALYZE quotes;` cập nhật thống kê cho planner.

## 6. Đánh đổi và giới hạn

GIN có overhead khi dữ liệu cập nhật liên tục và khi xây chỉ mục. Truy vấn `ORDER BY ts_rank(...) DESC` vẫn cần xử lý điểm của các hàng khớp; GIN không tự lưu sẵn thứ hạng cho mọi truy vấn bất kỳ. Một chỉ mục tốt không thay thế việc giảm lượng dữ liệu, lọc theo điều kiện phù hợp và đo workload thực tế.

**Thực hành:** xem `EXPLAIN` cho hai cách: `to_tsvector('english', content) @@ ...` và `search_vector @@ ...`. Ghi lại kế hoạch và không suy diễn tốc độ từ một lần chạy.
## Câu hỏi ôn tập

**Câu 1.** Chỉ mục phổ biến được khuyến nghị cho cột `tsvector` là?

A. HASH  
B. BRIN  
C. GIN  
D. B-tree duy nhất  

**Đáp án: C.** GIN là lựa chọn thông dụng cho FTS.

**Câu 2.** Tại sao PostgreSQL vẫn có thể chọn `Seq Scan`?

A. Bảng nhỏ, quét tuần tự rẻ hơn  
B. Index bị cấm cho text  
C. FTS không hỗ trợ chỉ mục  
D. Vì dùng `WHERE`  

**Đáp án: A.** Planner tối ưu theo chi phí ước tính, không luôn ưu tiên index.

**Câu 3.** Cột generated có đọc trực tiếp dữ liệu bảng quan hệ khác được không?

A. Được mặc định  
B. Được khi có `LIMIT`  
C. Được bằng `UNION ALL`  
D. Không, biểu thức phải tuân thủ giới hạn của cột sinh  

**Đáp án: D.** Không thể trực tiếp tổng hợp các bảng khác trong generated column.

**Câu 4.** `EXPLAIN (ANALYZE, BUFFERS)` hữu ích vì?

A. Xóa cache  
B. Hiển thị kế hoạch và số đo thực thi  
C. Tự sửa query  
D. Sinh dữ liệu mới  

**Đáp án: B.** Kết quả cho biết kế hoạch và thông tin thực thi/buffers.

**Câu 5.** GIN có tự xếp hạng trước mọi query không?

A. Có  
B. Chỉ trên tiếng Anh  
C. Không, ranking vẫn được tính cho truy vấn cụ thể  
D. Chỉ khi có hai bảng  

**Đáp án: C.** Thứ hạng phụ thuộc biểu thức truy vấn tại thời điểm tìm.


## Tổng kết

Hãy tự chạy lại các truy vấn trong bài, đối chiếu kết quả và ghi chú ít nhất một tình huống ứng dụng thực tế. Khi thay đổi dữ liệu, cần kiểm tra cả độ đúng của kết quả lẫn cách PostgreSQL thực thi truy vấn.
