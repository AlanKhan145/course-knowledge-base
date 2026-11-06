# Truy vấn Full-Text Search trong PostgreSQL

> **Tóm tắt:** Dùng tsvector/tsquery và GIN để tìm đoạn chứa các từ khóa, hiểu giới hạn của lexical retrieval.

## 1. Mục tiêu học tập

- Viết truy vấn `@@`/`to_tsquery`.
- Phân biệt AND và OR trong tsquery.
- Đọc kết quả FTS và giới hạn của khớp từ.

## 2. Từ văn bản sang lexeme

Cột `fts` là `tsvector` tự sinh từ `to_tsvector('english', content)`. PostgreSQL tách từ, có thể loại stop-word và biến đổi từ theo cấu hình English. FTS không phải `LIKE` trên cả chuỗi thô.

```sql
select id, content
from public.chunks
where fts @@ to_tsquery('english', 'data & center')
limit 10;
```

`&` biểu diễn AND; `|` biểu diễn OR. Dùng `websearch_to_tsquery` khi cần xử lý biểu thức dạng người dùng và cần tránh tự ghép cú pháp tsquery từ dữ liệu chưa tin cậy.

## 3. Thứ tự và điểm liên quan

Nếu cần xếp hạng bằng FTS, dùng:

```sql
select id, content, ts_rank(fts, websearch_to_tsquery('english','data center')) as rank
from public.chunks
where fts @@ websearch_to_tsquery('english','data center')
order by rank desc
limit 5;
```

`ts_rank` đo độ phù hợp lexical và **không** cùng thang với cosine similarity. Trên bảng có GIN index, planner có thể sử dụng index để giảm dữ liệu cần đọc.

## 4. Khi nào FTS bị hạn chế

Người dùng hỏi “đơn vị điện toán đám mây tăng trưởng thế nào” nhưng tài liệu chỉ nói “data center revenue”, hệ thống lexical có thể bỏ sót do khác từ. Ngược lại, FTS phù hợp khi người dùng tìm chính xác mã hoặc thuật ngữ có mặt trong nguồn. Nếu corpus bằng tiếng Việt, cấu hình `'english'` không phù hợp mặc định; cần chọn kỹ chiến lược tách từ/dictionary trước khi đưa vào sản xuất.

## 5. Thực hành và tự kiểm tra

Trong Studio chạy truy vấn `data & center` và `data | center`; so sánh số dòng. Chạy `websearch_to_tsquery` và ghi chú sự khác nhau giữa matching và ranking.

## 6. Câu hỏi ôn tập

### Câu 1

Toán tử `@@` trong FTS?

A. Khớp tsvector với tsquery  
B. Tính cosine  
C. Chạy Docker  
D. Cấp quyền role  

**Đáp án:** A

**Giải thích:** `@@` kiểm tra một vector từ khóa có đáp ứng truy vấn không.

### Câu 2

`data & center` yêu cầu gì?

A. Chỉ data  
B. Cả hai lexeme  
C. Chỉ center  
D. Cả hai phải liên tiếp  

**Đáp án:** B

**Giải thích:** `&` là AND, không nhất thiết cụm kế nhau.

### Câu 3

Hàm nào dùng xếp hạng full-text?

A. len  
B. cosine  
C. ts_rank  
D. vector_dims  

**Đáp án:** C

**Giải thích:** ts_rank đánh giá lexical relevance.

### Câu 4

Có được so trực tiếp số ts_rank với cosine 0.8?

A. Có  
B. Chỉ trong Docker  
C. Có nếu có HNSW  
D. Không vì thang đo khác nhau  

**Đáp án:** D

**Giải thích:** Các score đo đại lượng khác.

### Câu 5

Cấu hình `english` mặc định phù hợp nhất với?

A. Văn bản tiếng Anh  
B. Tiếng Việt tùy ý  
C. Ảnh  
D. Tất cả ngôn ngữ như nhau  

**Đáp án:** A

**Giải thích:** FTS dictionary phải phù hợp ngôn ngữ corpus.

## 7. Tổng kết

Dùng tsvector/tsquery và GIN để tìm đoạn chứa các từ khóa, hiểu giới hạn của lexical retrieval. Hoàn thành phần thực hành và trả lời được các câu hỏi là đạt yêu cầu của bài.
