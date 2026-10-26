---
title: "Bài 10 — Đánh giá chất lượng, giới hạn và mở rộng"
course: "PostgreSQL Full-Text Search"
type: "lesson"
order: 10
language: "vi"
---

# Bài 10 — Đánh giá chất lượng, giới hạn và mở rộng

## 1. Tóm tắt

FTS không kết thúc ở câu SQL đúng cú pháp. Một hệ thống tìm kiếm tốt phải có dữ liệu đại diện, truy vấn kiểm thử, đo độ chính xác của kết quả, độ mới sau cập nhật và hiệu năng. Việc chọn Elasticsearch, Algolia hay kỹ thuật nâng cao chỉ nên dựa trên nhu cầu cụ thể.

## 2. Mục tiêu học tập

- Lập bộ câu hỏi kiểm thử cho tìm kiếm thực tế.
- Phân biệt các tình huống không có kết quả vì cấu hình ngôn ngữ, lỗi gõ hoặc dữ liệu cũ.
- Thiết lập quy trình đo hiệu năng và độ mới.
- Mô tả đường nâng cấp khi FTS không còn đủ.

## 3. Bộ kiểm thử từ góc nhìn sản phẩm

| Nhóm | Ví dụ truy vấn | Điều cần kiểm tra |
| --- | --- | --- |
| Từ đơn | `Albert` | Tên tác giả, phim chứa Albert |
| Nhiều từ | `darkness light` | Cả hai lexeme khớp theo cấu hình |
| Cụm từ | `"beautiful day"` | Trật tự và tính kề nhau |
| Phủ định | `Albert life -Einstein` | Loại nội dung chứa Einstein |
| Tên riêng | `The Who` | Không mất từ quan trọng vì stop word |
| Gõ sai | `somthing` | Gợi ý nhưng không cưỡng ép |
| Dữ liệu vừa tạo | Tên phim mới | Có độ trễ do refresh không? |

Mỗi truy vấn nên có kỳ vọng cụ thể, tối thiểu: danh sách kết quả đúng, thứ tự tương đối mong muốn và thời gian đáp ứng trong môi trường đo.

## 4. Lỗi thường gặp và cách xác định

1. **Đúng chuỗi nhưng không khớp FTS:** kiểm tra cấu hình text search và `ts_debug`; từ dừng có thể đã bị xóa, hoặc truy vấn/tài liệu sử dụng ngôn ngữ khác nhau.
2. **Kết quả quá nhiều hoặc quá ít:** xem toán tử AND/OR, mức gán trọng số và loại trường được chỉ mục.
3. **Có nội dung mới nhưng không tìm thấy:** kiểm tra lần refresh gần nhất của materialized view và `search_terms`.
4. **Tìm kiếm chậm:** kiểm tra execution plan, tỷ lệ rows matched, số hàng được rank, index, CPU/IO.
5. **Gợi ý sai:** đo ngưỡng trigram và kiểm tra từ điển/tên riêng.

## 5. Tài liệu hóa đo đạc

Lưu query, số hàng tìm được, truy vấn mong muốn, p50/p95 latency, kế hoạch SQL và thời điểm cập nhật. Trước khi thay đổi ngưỡng `similarity_threshold` hoặc trọng số, chạy lại cùng bộ thử để xem có cải thiện thật không. Một thay đổi có thể giúp tìm `somthing` nhưng làm tăng các gợi ý sai với tên người.

## 6. Lựa chọn hướng nâng cấp

FTS giải tốt các nhu cầu tìm theo từ, cụm từ và kết hợp trường. Nếu cần truy vấn ngữ nghĩa như “phim về sự cứu rỗi” khớp với nội dung không chứa từ khóa tương tự, cân nhắc embeddings/vector search hoặc hybrid search; đó là lớp kỹ thuật bổ sung, **không phải** tính năng ngữ nghĩa mặc định của FTS.

Nếu phải mở rộng tìm kiếm liên cụm máy, xử lý phân tích rất chuyên sâu hoặc có yêu cầu chuyên biệt, hãy đánh giá công cụ tìm kiếm chuyên dụng. Khi đó cần tính thêm độ phức tạp đồng bộ, độ trễ cập nhật, vận hành, lưu trữ và chi phí.

**Thực hành:** hoàn thành checklist trong bài project, tự ghi 5 test case của ứng dụng và xác định điều kiện để bạn chọn PostgreSQL FTS thay vì giải pháp khác.
## Câu hỏi ôn tập

**Câu 1.** Khi kết quả không xuất hiện sau INSERT nguồn, nên kiểm tra gì trước?

A. CSS  
B. Lịch sử trình duyệt  
C. Màu nút  
D. Lần refresh materialized view  

**Đáp án: D.** Dữ liệu materialized view có thể cũ.

**Câu 2.** Điều nào không được đảm bảo bởi PostgreSQL FTS mặc định?

A. Kết hợp lexeme bằng AND  
B. Hiểu nghĩa sâu của câu không chung từ khóa  
C. Lập chỉ mục GIN  
D. Tìm cụm từ  

**Đáp án: B.** Semantic matching thường cần cơ chế bổ sung.

**Câu 3.** Vì sao cần bộ truy vấn benchmark cố định?

A. So sánh thay đổi trên cùng điều kiện  
B. Để tăng số bảng  
C. Để xóa stop word  
D. Để không cần kiểm thử  

**Đáp án: A.** Bộ thử nhất quán giúp đánh giá trước/sau thay đổi.

**Câu 4.** Khi ranking thay đổi, nên quan sát?

A. Chỉ kích thước font  
B. Chỉ port Docker  
C. Thứ tự và chất lượng kết quả trên bộ truy vấn  
D. Chỉ màu output  

**Đáp án: C.** Chất lượng tìm kiếm phải đo trên thứ tự kết quả.

**Câu 5.** Dấu hiệu nào cho thấy cần cân nhắc kiến trúc hybrid?

A. Muốn giữ một ô tìm kiếm  
B. Cần khớp cả ý nghĩa khi từ ngữ không giống nhau  
C. Có một bảng SQL  
D. Muốn dùng `LIMIT`  

**Đáp án: B.** FTS theo lexeme không đủ cho nhiều yêu cầu matching theo nghĩa.


## Tổng kết

Hãy tự chạy lại các truy vấn trong bài, đối chiếu kết quả và ghi chú ít nhất một tình huống ứng dụng thực tế. Khi thay đổi dữ liệu, cần kiểm tra cả độ đúng của kết quả lẫn cách PostgreSQL thực thi truy vấn.
