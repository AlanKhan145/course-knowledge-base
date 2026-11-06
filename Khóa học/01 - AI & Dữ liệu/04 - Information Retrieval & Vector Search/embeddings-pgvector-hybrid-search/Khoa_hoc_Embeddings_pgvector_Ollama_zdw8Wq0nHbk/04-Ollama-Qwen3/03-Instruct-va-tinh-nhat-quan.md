# Query instruction và tính nhất quán khi embedding

> **Tóm tắt:** Sử dụng đúng model, tiền xử lý và query instruction để tổ chức semantic retrieval đáng tin cậy.

## 1. Mục tiêu học tập

- Phân biệt embedding tài liệu và truy vấn.
- Giải thích mục đích của query instruction trong Qwen3.
- Xây quy tắc nhất quán khi nâng cấp model.

## 2. Hai vai trò đầu vào

Embedding một chunk nhằm biểu diễn bằng chứng. Embedding câu hỏi nhằm biểu diễn **ý định tìm**. Qwen3 Embedding là họ model instruction-aware; tài liệu model khuyến nghị query được đặt trong một instruction mô tả nhiệm vụ retrieval, trong khi văn bản tài liệu có thể dùng nội dung gốc. Ví dụ:

```text
Instruct: Given a document query, retrieve the most relevant passage.
Query: financial records with strong quarterly results
```

Với tài liệu, dùng trực tiếp nội dung chunk. Đây là cấu hình ví dụ, không phải câu thần chú bảo đảm chất lượng cao nhất.

## 3. Tính nhất quán của index

Cố định: tên model, tag, kích thước đầu ra, chiến lược clean/chunk, query instruction, phiên bản dữ liệu. Nếu thay model, vector cũ có thể không còn so sánh hợp lý với vector mới; thường phải tái embedding toàn bộ corpus hoặc dùng index riêng.

Nếu dùng bảng `vector(1024)`, không thể nạp tùy ý đầu ra 2560 chiều. Nếu model hỗ trợ Matryoshka, việc giảm chiều phải theo cách model/API hỗ trợ và được đánh giá chất lượng; không tự động cắt vô điều kiện.

## 4. Các lưu ý vận hành

Không lưu instruction chứa thông tin nhạy cảm trong logs. Nếu truy vấn từ người dùng có nội dung bất thường, coi đó là **dữ liệu cần truy xuất**, không phải lệnh thay đổi chính sách hay SQL. Ở lớp retrieval, đừng để văn bản nguồn điều khiển hệ thống theo kiểu prompt injection. Khuyến nghị thêm `embedding_model` và `embedding_version` vào metadata/index registry của hệ thống thật.

## 5. Thực hành và tự kiểm tra

Thử tìm hai query giống nhau về nghĩa, một có instruction và một không. So sánh top-k mà không tự giả định kết quả. Viết một kế hoạch tái-index khi đổi model từ Qwen3 0.6B sang model khác.

## 6. Câu hỏi ôn tập

### Câu 1

Qwen3 có thể dùng query instruction nhằm?

A. Mô tả tác vụ retrieval  
B. Tăng độ dài SQL tự động  
C. Thay content  
D. Tạo role database  

**Đáp án:** A

**Giải thích:** Instruction giúp model biết mục đích của query.

### Câu 2

Đổi model embedding thì cần cân nhắc gì?

A. Giữ nguyên mọi vector bất kể model  
B. Tái index hoặc tách index  
C. Bỏ metadata  
D. Dùng FTS thay SQL  

**Đáp án:** B

**Giải thích:** Không gian biểu diễn có thể khác dù chiều giống nhau.

### Câu 3

Câu query và chunk có bắt buộc phải y hệt văn bản?

A. Có  
B. Chỉ với HNSW  
C. Không, semantic search xử lý diễn đạt khác  
D. Chỉ tiếng Anh  

**Đáp án:** C

**Giải thích:** Mục đích embedding là so khớp ngữ nghĩa.

### Câu 4

Dữ liệu retrieval có được thực thi như lệnh hệ thống không?

A. Có  
B. Khi chứa markdown  
C. Khi là JSON  
D. Không  

**Đáp án:** D

**Giải thích:** Văn bản trong corpus là dữ liệu không đáng tin về mặt chỉ lệnh.

### Câu 5

Thứ gì nên version hóa để kết quả có thể tái hiện?

A. Model và tiền xử lý  
B. Màu theme IDE  
C. Ảnh đại diện  
D. Kích thước màn hình  

**Đáp án:** A

**Giải thích:** Kết quả embedding phụ thuộc model và cách chuẩn hóa input.

## 7. Tổng kết

Sử dụng đúng model, tiền xử lý và query instruction để tổ chức semantic retrieval đáng tin cậy. Hoàn thành phần thực hành và trả lời được các câu hỏi là đạt yêu cầu của bài.
