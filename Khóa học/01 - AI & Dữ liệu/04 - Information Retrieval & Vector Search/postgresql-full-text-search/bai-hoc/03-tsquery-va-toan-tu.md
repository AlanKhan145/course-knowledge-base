---
title: "Bài 03 — `tsquery`: toán tử, cụm từ và truy vấn kiểu web"
course: "PostgreSQL Full-Text Search"
type: "lesson"
order: 3
language: "vi"
---

# Bài 03 — `tsquery`: toán tử, cụm từ và truy vấn kiểu web

## 1. Tóm tắt

`tsquery` mô tả điều kiện tìm kiếm trên biểu diễn `tsvector`. Nó có thể kết hợp các từ với AND, OR, NOT, tìm theo thứ tự, tìm theo tiền tố và nhận cú pháp gần với ô tìm kiếm phổ thông.

## 2. Mục tiêu học tập

- Tạo `tsquery` bằng bốn hàm thường dùng.
- Áp dụng `&`, `|`, `!`, `<->` và toán tử tiền tố `:*`.
- Dùng `@@` để kiểm tra một tài liệu có khớp điều kiện hay không.
- Chọn hàm chuyển đổi an toàn cho văn bản người dùng nhập.

## 3. Bốn cách tạo truy vấn

| Hàm | Ý nghĩa | Tình huống |
| --- | --- | --- |
| `to_tsquery` | Viết cú pháp truy vấn FTS tường minh | Bộ lọc nội bộ có cú pháp chính xác |
| `plainto_tsquery` | Các từ cách nhau bằng khoảng trắng nối bằng AND | Ô nhập từ khóa đơn giản |
| `phraseto_tsquery` | Giữ quan hệ thứ tự/khoảng cách giữa từ | Tìm cụm từ |
| `websearch_to_tsquery` | Nhận cú pháp gần ô tìm kiếm web: từ, ngoặc kép, `-`, `OR` | Search box cho người dùng |

```sql
SELECT to_tsquery('english', 'dark & !light');
SELECT plainto_tsquery('english', 'dark world');
SELECT phraseto_tsquery('english', 'dark world');
SELECT websearch_to_tsquery('english', 'Albert life -Einstein');
```

`to_tsquery` **không** chấp nhận một chuỗi tìm kiếm gồm các từ tự do không có toán tử theo cùng cách với `plainto_tsquery`: đừng nối thẳng nội dung nhập của người dùng vào biểu thức SQL hoặc cú pháp `to_tsquery`.

## 4. Các toán tử trong `tsquery`

```sql
SELECT to_tsvector('english','Darkness brings light')
       @@ to_tsquery('english','dark & light') AS both_terms;

SELECT to_tsvector('english','A beautiful day for a car ride')
       @@ to_tsquery('english','rid:*') AS prefix_match;

SELECT to_tsvector('english','bright light')
       @@ to_tsquery('english','bright <-> light') AS adjacent;
```

Trong `tsquery`, `&` là AND, `|` là OR, `!` là NOT. `<->` biểu diễn hai lexeme kề nhau; `<N>` biểu diễn khoảng cách vị trí có quy tắc giữa hai lexeme. Cú pháp `:*` là tiền tố **lexeme**, không phải bất kỳ substring như `%` trong `LIKE`.

## 5. Dùng toán tử `@@`

`@@` xác định sự khớp giữa biểu diễn tài liệu và truy vấn. Khi truy vấn một bảng:

```sql
SELECT id, content
FROM quotes
WHERE to_tsvector('english', content)
      @@ websearch_to_tsquery('english', 'darkness');
```

Biểu diễn ngược thứ tự toán hạng cũng được PostgreSQL hỗ trợ, nhưng quy ước `tsvector @@ tsquery` thường dễ đọc hơn. Ở giai đoạn học, cứ hiểu rằng `to_tsvector` chuẩn bị *tài liệu*, còn `websearch_to_tsquery` chuẩn bị *ý định tìm kiếm*.

## 6. Truy vấn giao diện kiểu Google

Với biểu thức `Albert life -Einstein`, người dùng yêu cầu nội dung có Albert, có life nhưng không có Einstein. Đặt cụm từ trong dấu ngoặc kép để yêu cầu các từ theo thứ tự:

```sql
SELECT websearch_to_tsquery('english', '"beautiful day" -rain');
```

Không phải mọi cú pháp nâng cao của Google đều được hỗ trợ. `websearch_to_tsquery` là trình phân tích cú pháp đơn giản, không phải một bản sao toàn bộ máy tìm kiếm Google.

**Thực hành:** giải thích khác biệt giữa `plainto_tsquery('english','beautiful day')` và `phraseto_tsquery('english','beautiful day')`, rồi tìm tài liệu khớp cả hai.
## Câu hỏi ôn tập

**Câu 1.** Hàm nào phù hợp nhất cho một ô tìm kiếm nhận từ và dấu trừ?

A. `to_tsvector`  
B. `pg_column_size`  
C. `websearch_to_tsquery`  
D. `setweight`  

**Đáp án: C.** Hàm này phân tích cú pháp tìm kiếm gần kiểu web.

**Câu 2.** Trong `tsquery`, `!` đại diện cho?

A. NOT  
B. AND  
C. OR  
D. Dấu thăng  

**Đáp án: A.** `!` phủ định một điều kiện lexeme.

**Câu 3.** `<->` yêu cầu gì?

A. Từ giống âm  
B. Từ đồng nghĩa  
C. Cùng số ký tự  
D. Lexeme kề nhau theo vị trí  

**Đáp án: D.** Đây là toán tử khoảng cách giữa hai lexeme liền kề.

**Câu 4.** Khác biệt của tiền tố `:*` với `LIKE` là gì?

A. Tìm substring ngẫu nhiên  
B. Tìm theo tiền tố lexeme  
C. Tự sửa chính tả  
D. Không dùng được với chữ  

**Đáp án: B.** Prefix trong FTS diễn ra trên lexeme.

**Câu 5.** Hàm nào thích hợp cho hai từ tự do và quan hệ AND?

A. `setweight`  
B. `ts_headline`  
C. `plainto_tsquery`  
D. `ts_stat`  

**Đáp án: C.** Hàm này biến chuỗi từ khóa thành truy vấn kết hợp từ bằng AND.


## Tổng kết

Hãy tự chạy lại các truy vấn trong bài, đối chiếu kết quả và ghi chú ít nhất một tình huống ứng dụng thực tế. Khi thay đổi dữ liệu, cần kiểm tra cả độ đúng của kết quả lẫn cách PostgreSQL thực thi truy vấn.
