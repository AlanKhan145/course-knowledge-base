# Từ tệp JSON sang cơ sở dữ liệu bền vững

> **Tóm tắt:** Phân biệt lưu tạm trong tiến trình, lưu tệp và lưu có chỉ mục trong PostgreSQL.

## 1. Mục tiêu học tập

- Giải thích vì sao biến Python mất khi tiến trình thoát.
- Phân biệt persistence với hiệu năng truy vấn.
- Nhận diện những gì database bổ sung so với JSON.

## 2. Vòng đời dữ liệu

Nếu chia chunk thành một list Python rồi tắt chương trình, nội dung trong RAM biến mất. Nếu ghi `chunks.json`, tệp vẫn còn nhưng muốn tìm kiếm thường phải đọc lại tệp, tự tính embedding hoặc tự xây index. Với nhiều tài liệu, dữ liệu càng khó cập nhật, lọc và phân quyền.

Database cho phép **persistence** (lưu bền trên ổ đĩa) và cung cấp ngôn ngữ truy vấn. Kết quả nhanh hay chậm còn phụ thuộc chỉ mục, số bản ghi, phần cứng và dạng câu hỏi; không thể mặc định mọi truy vấn đều dưới một giây.

## 3. Mô hình dữ liệu đơn giản

Bảng `chunks` có thể chứa bốn trường chính: `id` để định danh, `content text` chứa văn bản, `metadata jsonb` chứa thông tin bổ sung, `embedding vector(1024)` chứa các số thực. Ta thêm cột `fts tsvector` để truy vấn từ khóa.

`jsonb` hỗ trợ lọc có cấu trúc, ví dụ `metadata @> '{"source":"report.md"}'::jsonb`. PostgreSQL cũng có transaction, index và cơ chế sao lưu. Đừng nhầm `JSONB` với vector: chúng giải quyết những nhiệm vụ khác nhau.

## 4. Tính bền vững không đồng nghĩa backup

Khi Docker container dừng bình thường, dữ liệu Supabase local được giữ lại trong vùng lưu trữ phù hợp của stack. Tuy vậy, `db reset`, xóa volumes, xóa thư mục dữ liệu hay lỗi ổ đĩa vẫn có thể làm mất dữ liệu. Với production cần backup, restore, migration được version control và kế hoạch phục hồi.

Coi JSON gốc là **nguồn ingest có thể tái tạo** và database là **hệ thống phục vụ truy xuất**, thay vì tự động xóa dữ liệu gốc ngay sau lần nhập đầu tiên.

## 5. Thực hành và tự kiểm tra

Lập bảng so sánh RAM list, JSON file và PostgreSQL theo 4 tiêu chí: tồn tại sau khi tắt Python, truy vấn lọc, chỉ mục vector, khả năng thay đổi dữ liệu. Đưa ra một phương án dự phòng khi DB bị reset.

## 6. Câu hỏi ôn tập

### Câu 1

List Python có tồn tại sau khi tiến trình kết thúc không?

A. Không nếu không ghi ra nơi khác  
B. Có mãi mãi  
C. Có khi RAM lớn  
D. Chỉ khi dùng pgvector  

**Đáp án:** A

**Giải thích:** Dữ liệu trên RAM của tiến trình không tự bền vững.

### Câu 2

Vai trò chính của JSONB?

A. Lưu cosine distance  
B. Lưu metadata cấu trúc  
C. Thay thế khóa DB  
D. Tạo bảng tự động  

**Đáp án:** B

**Giải thích:** JSONB lưu thông tin bổ sung và hỗ trợ toán tử lọc.

### Câu 3

Dừng Docker luôn tương đương xóa dữ liệu?

A. Có  
B. Chỉ vào thứ Sáu  
C. Không, dừng thường khác reset và xóa volumes  
D. Chỉ khi có GPU  

**Đáp án:** C

**Giải thích:** Phải phân biệt stop và thao tác phá hủy dữ liệu.

### Câu 4

Một truy vấn luôn dưới 1 giây nếu dùng SQL?

A. Có  
B. Với 1 tỷ row  
C. Khi không có index  
D. Không có bảo đảm chung  

**Đáp án:** D

**Giải thích:** Độ trễ phụ thuộc nhiều biến.

### Câu 5

Dữ liệu nguồn nên được xử lý thế nào?

A. Giữ bản có thể tái ingest  
B. Luôn xóa ngay  
C. Đưa vào browser localStorage duy nhất  
D. Chỉ đặt trong comment SQL  

**Đáp án:** A

**Giải thích:** Khả năng phục hồi cần nguồn dữ liệu có thể xây lại.

## 7. Tổng kết

Phân biệt lưu tạm trong tiến trình, lưu tệp và lưu có chỉ mục trong PostgreSQL. Hoàn thành phần thực hành và trả lời được các câu hỏi là đạt yêu cầu của bài.
