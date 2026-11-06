# Bài 2. Chunking theo cấu trúc và tạo embeddings trong pgvector

> **Module 07 — Document ingestion, chunking và embeddings**  
> Thời điểm tham chiếu: [1:34:49](https://www.youtube.com/watch?v=qF5il_9IwME&t=5689s).  
> Hình thức: bài học kết hợp thực hành.

## 1. Tóm tắt

Tạo chunks có thứ tự, ngữ cảnh và vector; hiểu trade-off chunk size, overlap, chi phí và khả năng tìm kiếm.

## 2. Mục tiêu học tập

- Giải thích được cơ chế và lý do kỹ thuật của chủ đề **Chunking theo cấu trúc và tạo embeddings trong pgvector**.
- Tự triển khai hoặc mô phỏng các bước thực hành và kiểm tra kết quả theo tiêu chí được nêu.
- Nhận diện các lỗi thiết kế/triển khai phổ biến và lựa chọn biện pháp xử lý có căn cứ.

## 3. Bối cảnh và vấn đề cần giải quyết

Tài liệu chuyển đổi cần được chia thành các đơn vị đủ ngắn để tìm kiếm nhưng đủ dài để hiểu. HybridChunker/HierarchicalChunker của Docling là lựa chọn có ý thức cấu trúc: trước hết phân theo heading và block tài liệu, sau đó điều chỉnh theo tokenizer/model limit. Đây là cách tốt hơn cắt mỗi N ký tự một cách mù quáng.

## 4. Kiến thức cốt lõi

### 4.1. Nguyên tắc chunk

Một chunk nên mang `document_id`, `chunk_index`, section path, raw text, contextualized text và metadata nguồn. Với bảng dài, thử giữ header cột và đơn vị ở cùng chunk dữ liệu; có thể thêm thông tin phần/heading vào nội dung embedding để khử mơ hồ.

### 4.2. Embeddings và chỉ mục

Embedding biến text thành vector phục vụ semantic similarity. Chiều vector phải khớp model đang dùng và định nghĩa cột `vector(n)`. pgvector cho phép truy vấn theo khoảng cách; full-text index riêng có thể phục vụ keyword retrieval. Không nên tự bịa dimension của model.

### 4.3. Chi phí, batching và retry

Embedding nhiều chunks phát sinh API cost. Nên lưu checksum và chỉ tính lại khi text/model thay đổi; dùng batch có giới hạn, retry backoff cho rate limit, ghi số record thành công/thất bại. Thay embedding model có thể cần re-index toàn bộ dữ liệu.

## 5. Quy trình áp dụng từng bước

Các bước dưới đây là phương án thực hành để tái tạo và kiểm chứng các nguyên tắc đã học. Điều chỉnh tên file, biến môi trường và phiên bản dependency theo dự án của bạn.

**Bước 1.** Thiết kế schema `document_chunks` có vị trí và source metadata.

**Bước 2.** Chạy chunker trên hai tài liệu, so sánh cách cắt bảng/heading với cắt theo số ký tự.

**Bước 3.** Tạo embedding cho batch nhỏ; xác nhận dimension khớp cột vector.

**Bước 4.** Viết lệnh ingest resume để có thể chạy lại không tính lại tất cả embeddings.

## 6. Ví dụ minh họa

Ví dụ sau tập trung vào một nguyên lý triển khai. Đây là mã/giả mã dùng cho học tập, có thể cần bổ sung các thành phần vận hành và kiểm thử khi tích hợp vào repository thực tế.

```sql
-- Ví dụ schema; kích thước VECTOR phải khớp model thực tế
CREATE EXTENSION IF NOT EXISTS vector;
CREATE TABLE document_chunks (
    id bigserial PRIMARY KEY,
    document_id bigint NOT NULL,
    chunk_index integer NOT NULL,
    section text,
    content text NOT NULL,
    -- embedding vector(<model_dimension>)
    UNIQUE (document_id, chunk_index)
);
```

## 7. Kiểm tra kết quả và tiêu chí hoàn thành

- [ ] Chunk giữ đủ heading và metadata để truy ngược hồ sơ.
- [ ] Chạy lại batch không tạo thêm chunks trùng hoặc gọi lại embeddings không cần thiết.

**Checkpoint:** Người học cần trình bày được dữ liệu đầu vào, biến đổi hoặc hành động chính, đầu ra quan sát được và tình huống thất bại của phần này. Nếu chưa chứng minh được bằng lệnh chạy, ảnh chụp, test hoặc bảng so sánh, chưa nên đánh dấu hoàn tất.

## 8. Lỗi thường gặp và cách tự debug

1. Không giả định token bằng số ký tự; phải dùng tokenizer/model budget đúng.

2. Không thay embedding model mà vẫn dùng chung index/dimension cũ.

Khi gặp lỗi, hãy thu nhỏ tình huống về một input cụ thể, kiểm tra log/request id, xác nhận từng lớp độc lập và chỉ sửa một giả thuyết tại một thời điểm. Cách làm này giúp phân biệt sai dữ liệu, sai hợp đồng API và sai cấu hình môi trường.

## 9. Bài tập ứng dụng

Chọn ba kích thước chunk, đánh giá thủ công 10 câu hỏi có liên quan tới bảng; ghi khả năng tìm đúng chunk và số token ingest.

**Sản phẩm nộp:** một README ngắn mô tả cách chạy, dữ liệu/case thử, bằng chứng đã kiểm tra và tối thiểu một tình huống lỗi được xử lý. Nếu thực hành với tài khoản thật, loại bỏ mọi secret và dữ liệu nhạy cảm khỏi bản nộp.

## 10. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Ưu điểm chunk theo cấu trúc?

A. Giữ heading, bảng và ngữ cảnh tài liệu.  
B. Khôi phục thứ tự và tìm chunk lân cận.  
C. Model embedding và cột vector database.  
D. Tránh tính lại embedding không thay đổi.  

**Đáp án: A.** Cắt cứng có thể phá vỡ ngữ nghĩa.

**Câu 2.** Vì sao lưu chunk_index?

A. Model embedding và cột vector database.  
B. Tránh tính lại embedding không thay đổi.  
C. Mất ngữ cảnh câu hỏi và đơn vị bảng.  
D. Khôi phục thứ tự và tìm chunk lân cận.  

**Đáp án: D.** Vị trí hỗ trợ mở rộng ngữ cảnh.

**Câu 3.** Embedding dimension phải khớp gì?

A. Tránh tính lại embedding không thay đổi.  
B. Mất ngữ cảnh câu hỏi và đơn vị bảng.  
C. Model embedding và cột vector database.  
D. Giữ heading, bảng và ngữ cảnh tài liệu.  

**Đáp án: C.** Sai kích thước làm index/search lỗi.

**Câu 4.** Vì sao dùng checksum khi ingest lại?

A. Mất ngữ cảnh câu hỏi và đơn vị bảng.  
B. Tránh tính lại embedding không thay đổi.  
C. Giữ heading, bảng và ngữ cảnh tài liệu.  
D. Khôi phục thứ tự và tìm chunk lân cận.  

**Đáp án: B.** Giảm chi phí và trùng dữ liệu.

**Câu 5.** Rủi ro của chunk quá nhỏ?

A. Mất ngữ cảnh câu hỏi và đơn vị bảng.  
B. Giữ heading, bảng và ngữ cảnh tài liệu.  
C. Khôi phục thứ tự và tìm chunk lân cận.  
D. Model embedding và cột vector database.  

**Đáp án: A.** Similarity cao chưa chắc đủ bằng chứng.

## 11. Tổng kết

Bài học tập trung vào **Chunking theo cấu trúc và tạo embeddings trong pgvector** như một mắt xích của Document Copilot. Giá trị quan trọng nhất không chỉ là chạy được một chức năng mà còn là lý giải được thiết kế, truy vết được dữ liệu và kiểm chứng bằng trường hợp thực tế.

**Mốc học video:** [1:34:49](https://www.youtube.com/watch?v=qF5il_9IwME&t=5689s) — 1:59:52.
