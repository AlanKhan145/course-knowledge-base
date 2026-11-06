# Bài 02 — Embedding, cosine similarity và thiết kế chunk

## 1. Tóm tắt

Embedding biến một chuỗi thành một vector số thực. Với `nomic-embed-text` bản mặc định trong bài thực hành, vector dự kiến có **768 chiều**; cần đo lại bằng `len(embedding)` trước khi tạo hoặc nạp bảng. Nếu tài liệu và câu hỏi được nhúng bằng model/phiên bản khác nhau, tọa độ không còn so sánh được một cách có nghĩa.

## 2. Mục tiêu học tập

- Phân biệt vector, số chiều, embedding model và similarity metric.
- Giải thích cosine similarity và cosine distance.
- Thiết kế chunk có nguồn gốc và thứ tự để tái dựng ngữ cảnh.
- Nhận diện lỗi mismatch kích thước embedding và dữ liệu bị cắt cụt.

## 3. Từ văn bản đến vector

Ví dụ minh họa giản lược: câu “Airflow scheduling” có thể thành `[0.2, -0.1, 0.7]`. Trong ứng dụng thực tế, vector có hàng trăm chiều và được suy luận từ model đã huấn luyện; ví dụ 3 chiều không phải kết quả thực của Ollama.

Dữ liệu cơ bản nên lưu: `source_url`, `title`, `chunk_index`, `content`, `embedding`, thời điểm cập nhật. Chỉ lưu embedding mà bỏ văn bản và nguồn sẽ khiến hệ thống khó giải thích tại sao trả ra kết quả.

## 4. Cosine similarity

Cho hai vector $a$ và $b$:

$$
\cos(a,b)=\frac{\sum_i a_i b_i}{\sqrt{\sum_i a_i^2}\sqrt{\sum_i b_i^2}}
$$

Nếu cùng hướng, cosine similarity gần 1; vuông góc thì gần 0. PostgreSQL/pgvector dùng `<=>` để tính **cosine distance**: khoảng cách cosine thường được định nghĩa $d=1-\cos(a,b)$. Vì thế **độ gần lớn** tương đương **khoảng cách nhỏ**. SQL xếp hạng:

```sql
SELECT id, title, 1 - (embedding <=> '[0.1,0.2,0.3]') AS score
FROM example_vectors
ORDER BY embedding <=> '[0.1,0.2,0.3]'
LIMIT 5;
```

Đây chỉ là minh họa nếu bảng `example_vectors` chứa `vector(3)`; không chạy ví dụ này trực tiếp trên bảng `vector(768)`.

## 5. Chia tài liệu thành chunk

Một trang HTML dài chứa cả tiêu đề, menu, chân trang và nhiều mục. Nhúng toàn bộ trang sẽ làm mất sự chính xác; nhúng từng câu quá ngắn lại mất ngữ cảnh. Cách khởi đầu đơn giản là chia theo đoạn văn và gộp đến khoảng 800–1.200 ký tự mỗi chunk, overlap 100–200 ký tự. Đây là giá trị **thử nghiệm**, không phải mức tối ưu cho mọi model; cần đo bằng bộ câu hỏi thực tế.

Ví dụ:

```text
Trang 1: Airflow Docker tutorial
  chunk 0: Yêu cầu Docker + Compose
  chunk 1: Tạo môi trường và cấu hình
  chunk 2: Chạy webserver và scheduler
Trang 2: LocalExecutor
  chunk 0: Khái niệm, giới hạn
```

Mỗi chunk phải giữ URL và vị trí; khi trả về có thể dẫn người đọc đúng trang. Với bài nhập môn, tránh chunk tràn qua ranh giới hai tài liệu.

## 6. Tiền tố nhiệm vụ của model

Một số embedding model dùng tiền tố phân biệt mục đích: `search_document: ...` cho đoạn được index và `search_query: ...` cho truy vấn. Với Nomic Embed, đây là thói quen nên kiểm tra theo model cụ thể; **phải áp dụng nhất quán trong cả ingest và query**. Nếu thay model, cần re-embed tài liệu và dựng lại index.

## 7. Sai lầm thường gặp

- Lưu embedding 768 chiều nhưng gửi truy vấn 384 chiều: PostgreSQL báo sai kích thước hoặc phép đo không hợp lệ.
- Lấy điểm `1-distance` để gọi là xác suất: không được hiệu chỉnh về xác suất.
- Gửi HTML chứa menu lặp lại: kết quả bị nhiễu.
- Chỉ quan tâm Top-1: nên kiểm tra Top-k và nguồn tài liệu.

## 8. Bài tập

Lấy ba đoạn nhỏ nói về cài đặt, executor và lịch chạy; đề xuất cách chunk sao cho mỗi đoạn có đủ ngữ cảnh. Tạo năm truy vấn tương ứng, dự kiến chunk nào nằm Top-3 và ghi lý do. Sau khi có hệ thống, so sánh dự kiến với kết quả thực.

## 9. Tổng kết

Chất lượng semantic search phụ thuộc vào cả model, cách chia tài liệu, độ sạch nội dung, phép đo và quá trình đánh giá. Tối ưu truy vấn không bù được dữ liệu đầu vào kém.

## 10. Câu hỏi ôn tập

### Câu 1

Toán tử `<=>` trong pgvector biểu diễn gì?

A. Cosine distance  
B. Tích vô hướng dương  
C. Nối hai vector  
D. So sánh văn bản  

**Đáp án:** A  
**Giải thích:** Toán tử `<=>` dùng cosine distance.

### Câu 2

Vì sao cần dùng cùng embedding model cho index và query?

A. Để giảm số bảng  
B. Để các vector cùng không gian biểu diễn  
C. Để loại bỏ SQL  
D. Để tự động dịch HTML  

**Đáp án:** B  
**Giải thích:** Vector từ các model khác nhau không bảo đảm tọa độ tương thích.

### Câu 3

Khi `ORDER BY embedding <=> query` mặc định tăng dần, hàng đứng đầu có gì?

A. Cosine distance nhỏ nhất  
B. Tài liệu dài nhất  
C. Title ngắn nhất  
D. Thời gian tạo mới nhất  

**Đáp án:** A  
**Giải thích:** Khoảng cách nhỏ tương ứng vector gần truy vấn hơn.

### Câu 4

Thuộc tính nào quan trọng để hiển thị trích dẫn?

A. Tên container  
B. URL nguồn và thứ tự chunk  
C. Số CPU  
D. Tên driver Docker  

**Đáp án:** B  
**Giải thích:** URL và vị trí giúp truy ngược nội dung gốc.

### Câu 5

Nếu giảm chunk xuống một từ, rủi ro chính là gì?

A. Quên cài PostgreSQL  
B. Mất ngữ cảnh cần thiết  
C. Cosine distance không tính được  
D. Vector tự rút xuống một chiều  

**Đáp án:** B  
**Giải thích:** Chunk cực ngắn thường không giữ đủ ngữ cảnh của câu trả lời.

