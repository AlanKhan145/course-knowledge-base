---
title: "Bài 05 — Xếp hạng, `ts_headline` và giao diện kết quả"
course: "PostgreSQL Full-Text Search"
type: "lesson"
order: 5
language: "vi"
---

# Bài 05 — Xếp hạng, `ts_headline` và giao diện kết quả

## 1. Tóm tắt

Tìm được kết quả chỉ là bước đầu. Công cụ tìm kiếm tốt cần sắp xếp tài liệu theo mức độ liên quan và cho người dùng thấy đoạn nội dung khiến nó được trả về.

## 2. Mục tiêu học tập

- Áp dụng `ts_rank` và `ts_rank_cd`.
- Sắp xếp theo điểm giảm dần và thêm điều kiện ổn định.
- Tạo đoạn trích có từ được nhấn mạnh bằng `ts_headline`.
- Nhận diện hạn chế hiệu năng và XSS khi hiển thị HTML.

## 3. Xếp hạng bằng `ts_rank`

```sql
SELECT id, author, content,
       ts_rank(to_tsvector('english', content),
               websearch_to_tsquery('english', 'darkness light')) AS score
FROM quotes
WHERE to_tsvector('english', content)
      @@ websearch_to_tsquery('english', 'darkness light')
ORDER BY score DESC, id ASC;
```

`ts_rank` tính độ liên quan dựa trên sự xuất hiện của lexeme, mức độ phủ và trọng số. Điểm này **không** phải xác suất hay phần trăm. Với thực tế, tránh so sánh trực tiếp điểm giữa nhiều cấu hình, bộ trọng số hoặc kiểu truy vấn khác nhau như thể chúng cùng một thang đo chuẩn.

## 4. `ts_rank_cd`: xét mức độ gần nhau

`ts_rank_cd` là cover-density ranking: quan tâm thêm khoảng cách giữa các từ được truy vấn. Hai từ xuất hiện gần nhau trong cùng một đoạn thường phù hợp hơn hai từ rải rác ở những phần rất xa nhau của tài liệu.

```sql
SELECT ts_rank_cd(
  to_tsvector('english','Darkness and light are close'),
  plainto_tsquery('english','darkness light')
);
```

Khi dùng `ts_rank_cd`, vector cần thông tin vị trí; nếu loại bỏ vị trí, kết quả xếp hạng có thể không còn phản ánh độ gần từ.

## 5. Hiển thị lý do khớp với `ts_headline`

```sql
SELECT ts_headline(
  'english',
  'No darkness can extinguish the light',
  plainto_tsquery('english', 'darkness light'),
  'StartSel=<mark>,StopSel=</mark>,MaxWords=20,MinWords=5'
) AS snippet;
```

`ts_headline` nhận **văn bản gốc** (không phải `tsvector`) và tạo đoạn trích có đánh dấu. PostgreSQL không đảm bảo đầu ra là HTML an toàn để nhúng trực tiếp. Nếu kết quả chứa văn bản do người dùng cung cấp, ứng dụng phải escape/sanitize theo ngữ cảnh trước khi render; có thể chọn marker không phải HTML và tô sáng có kiểm soát tại frontend.

## 6. Thiết kế kết quả tìm kiếm

Một kết quả hữu ích thường có `source_type`, `source_id`, `title`, `snippet`, `score`. Có thể bổ sung URL chi tiết và loại đối tượng để biết nên mở phim hay câu trích dẫn. Phân trang với `LIMIT`/`OFFSET` có thể phù hợp lúc đầu; sản phẩm lớn cần đo lường kỹ chiến lược phân trang và điểm tie-break.

**Lưu ý hiệu năng:** gọi `ts_headline` trên tất cả các hàng trước khi lọc có thể tốn chi phí. Ưu tiên lọc, xếp hạng, chọn giới hạn kết quả rồi mới tạo đoạn trích cho một tập nhỏ.

**Thực hành:** so sánh thứ tự kết quả khi dùng `ts_rank` và `ts_rank_cd` cho cùng truy vấn; giải thích nếu thứ tự khác nhau.
## Câu hỏi ôn tập

**Câu 1.** `ts_rank` trả về đại lượng nào?

A. Xác suất đúng tuyệt đối  
B. Tỷ lệ phần trăm người dùng  
C. Điểm mức độ liên quan  
D. Dung lượng dữ liệu  

**Đáp án: C.** Đó là điểm ranking, không phải phần trăm.

**Câu 2.** Hàm nào tính đến mức độ gần của từ trong tài liệu?

A. `ts_rank_cd`  
B. `LIKE`  
C. `REFRESH`  
D. `array_agg`  

**Đáp án: A.** Cover-density ưu tiên những phần khớp gần nhau.

**Câu 3.** Dữ liệu nào đi vào `ts_headline` để tạo snippet?

A. Chỉ ID  
B. Index file  
C. `tsquery` thay cho văn bản  
D. Văn bản gốc cùng truy vấn  

**Đáp án: D.** Hàm này làm việc trực tiếp với nội dung văn bản.

**Câu 4.** Khi dùng HTML từ `ts_headline`, cần lưu ý gì?

A. Không bao giờ được cache  
B. Escape/sanitize để tránh XSS  
C. Luôn render qua `innerHTML`  
D. Chỉ dùng cho số nguyên  

**Đáp án: B.** `ts_headline` không tự bảo đảm an toàn HTML.

**Câu 5.** Tối ưu snippet thường thực hiện lúc nào?

A. Trước khi lọc mọi hàng  
B. Trước khi tính `tsvector` toàn bảng  
C. Sau khi giới hạn tập kết quả cần hiển thị  
D. Trước khi chạy WHERE bất kỳ  

**Đáp án: C.** Chỉ tạo đoạn trích cho kết quả cuối cùng giúp giảm công việc.


## Tổng kết

Hãy tự chạy lại các truy vấn trong bài, đối chiếu kết quả và ghi chú ít nhất một tình huống ứng dụng thực tế. Khi thay đổi dữ liệu, cần kiểm tra cả độ đúng của kết quả lẫn cách PostgreSQL thực thi truy vấn.
