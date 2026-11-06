# Full-text, TF-IDF và tìm kiếm ngữ nghĩa

> **Tóm tắt:** Phân biệt truy vấn dựa trên token với truy vấn dựa trên embedding, không tuyệt đối hóa bất kỳ phương pháp nào.

## 1. Mục tiêu học tập

- Nhận diện ưu và nhược điểm của lexical search.
- Chọn chiến lược phù hợp với loại truy vấn.
- Thiết kế một thử nghiệm so sánh hai cách retrieval.

## 2. Full-text search nhận diện token

PostgreSQL FTS chuyển văn bản thành lexeme bằng parser/dictionary và thực hiện truy vấn với `tsvector`, `tsquery`. Với cấu hình `english`, xử lý tiếng Anh có stemming và stop words. Tìm `data & center` là phép AND hai từ sau khi xử lý; không phải phép kiểm tra chuỗi con tùy ý.

TF-IDF là một phương pháp lexical ranking khác thường gặp trong IR; nó không đồng nhất với FTS ranking (`ts_rank`) của PostgreSQL. Cả hai đều dựa nhiều vào token xuất hiện.

## 3. Semantic search tìm gần nghĩa

Với truy vấn “record-breaking quarterly performance”, một chunk ghi “record quarterly revenue” hoặc “strong earnings this quarter” có thể được chấm điểm gần nghĩa dù không trùng đầy đủ từ. Điều này giúp truy vấn diễn đạt lại. Tuy nhiên kết quả có thể bị lẫn các đoạn nói về cùng lĩnh vực nhưng không trả lời đúng câu hỏi.

## 4. Ma trận lựa chọn

| Tình huống | Full-text | Vector |
| --- | --- | --- |
| Tìm mã sản phẩm, thuật ngữ chính xác | Thường phù hợp | Có thể bỏ sót chính xác |
| Từ đồng nghĩa, diễn đạt lại | Có hạn chế | Thường có lợi thế |
| Cần kiểm soát theo toán tử AND | Trực tiếp | Không biểu diễn logic chính xác |
| Kết hợp ngữ cảnh rộng | Kết quả phụ thuộc từ khóa | Hữu ích, cần đánh giá |

Hybrid retrieval kết hợp hai danh sách và reranking để cải thiện tổng thể; đó là bước nâng cao **ngoài phạm vi triển khai chính** của khóa học này.

## 5. Thực hành và tự kiểm tra

Viết 3 query: một mã chính xác, một câu dùng từ đồng nghĩa với tài liệu, một câu hỏi mơ hồ. Dự đoán phương pháp mạnh hơn và chuẩn bị bảng đánh giá kết quả top-5. Không kết luận từ một ví dụ duy nhất.

## 6. Câu hỏi ôn tập

### Câu 1

FTS của PostgreSQL sử dụng dạng nào?

A. tsvector/tsquery  
B. JPEG  
C. GPU tensor duy nhất  
D. Git branch  

**Đáp án:** A

**Giải thích:** FTS truy vấn lexeme qua tsvector và tsquery.

### Câu 2

TF-IDF có đồng nghĩa với ts_rank không?

A. Có hoàn toàn  
B. Không, là phương pháp lexical khác  
C. Chỉ khi có Ollama  
D. Chỉ khi database trống  

**Đáp án:** B

**Giải thích:** Cơ chế scoring khác nhau.

### Câu 3

Loại query nào vector thường hữu ích?

A. ID chính xác  
B. Mật khẩu  
C. Câu diễn đạt khác từ cùng nghĩa  
D. `WHERE id=1`  

**Đáp án:** C

**Giải thích:** Embedding giúp tìm sự tương đồng ý nghĩa.

### Câu 4

Vector search bảo đảm luôn đúng nghĩa?

A. Có  
B. Có nếu 1024 chiều  
C. Có nếu HNSW  
D. Không  

**Đáp án:** D

**Giải thích:** Embedding retrieval vẫn có false positive.

### Câu 5

Hybrid search kết hợp gì?

A. Lexical và semantic signals  
B. Docker và GPU  
C. Markdown và CSS  
D. JSON và XML  

**Đáp án:** A

**Giải thích:** Hybrid kết hợp hai kiểu tín hiệu truy xuất.

## 7. Tổng kết

Phân biệt truy vấn dựa trên token với truy vấn dựa trên embedding, không tuyệt đối hóa bất kỳ phương pháp nào. Hoàn thành phần thực hành và trả lời được các câu hỏi là đạt yêu cầu của bài.
