# Bài 2. Triển khai trên Railway, kiểm soát secrets và rollback

> **Module 11 — Docker và Railway deployment**  
> Thời điểm tham chiếu: [2:59:50](https://www.youtube.com/watch?v=qF5il_9IwME&t=10790s).  
> Hình thức: bài học kết hợp thực hành.

## 1. Tóm tắt

Tạo dịch vụ frontend/backend trên Railway, cấu hình biến, kiểm tra logs và hình dung cơ chế deploy từ Git.

## 2. Mục tiêu học tập

- Giải thích được cơ chế và lý do kỹ thuật của chủ đề **Triển khai trên Railway, kiểm soát secrets và rollback**.
- Tự triển khai hoặc mô phỏng các bước thực hành và kiểm tra kết quả theo tiêu chí được nêu.
- Nhận diện các lỗi thiết kế/triển khai phổ biến và lựa chọn biện pháp xử lý có căn cứ.

## 3. Bối cảnh và vấn đề cần giải quyết

Railway được dùng để triển khai demo production-style với hai service riêng. Có thể cấu hình trực tiếp trên giao diện hoặc qua công cụ hỗ trợ/MCP, nhưng cấp quyền cho agent tạo dự án, sửa secrets hay thay đổi production là quyết định bảo mật cần phê duyệt. Trong bài thực hành có các bước dò lỗi image, biến môi trường và chọn vùng.

## 4. Kiến thức cốt lõi

### 4.1. Thiết lập hai services

Backend cần source path, Dockerfile, start command, DATABASE_URL, LLM key và CORS origins. Frontend cần API public URL và Supabase public credentials. Chọn region phù hợp với Postgres để giảm RTT; thiết lập domain công khai đúng với sản phẩm.

### 4.2. Secrets và log

Dùng secret/variable manager của Railway và quản lý phạm vi của biến. Không xuất secret ra terminal/log khi nhờ MCP debug. Đối với API docs công khai, cần cân nhắc auth, rate limiting và mức độ lộ thông tin của endpoint.

### 4.3. Cập nhật và rollback

Kết nối Git branch với deploy tự động có kiểm soát. Đưa migration tương thích ngược trước khi rollout schema-breaking; chuẩn bị cách rollback code và backup database. Theo dõi startup logs, health và một câu hỏi có citation sau deploy.

## 5. Quy trình áp dụng từng bước

Các bước dưới đây là phương án thực hành để tái tạo và kiểm chứng các nguyên tắc đã học. Điều chỉnh tên file, biến môi trường và phiên bản dependency theo dự án của bạn.

**Bước 1.** Tạo Railway project và hai services tương ứng frontend/backend.

**Bước 2.** Cấu hình environment variables và region; không copy secret vào `Dockerfile`.

**Bước 3.** Deploy backend, kiểm tra `/health`; sau đó deploy frontend và thử login/ask/source.

**Bước 4.** Ghi quy trình deploy lại, xem logs và rollback khi gặp sự cố.

## 6. Ví dụ minh họa

Ví dụ sau tập trung vào một nguyên lý triển khai. Đây là mã/giả mã dùng cho học tập, có thể cần bổ sung các thành phần vận hành và kiểm thử khi tích hợp vào repository thực tế.

```text
Railway Project
├── backend service → FastAPI → Supabase Postgres
│   └── secrets: DATABASE_URL, LLM key, ...
└── frontend service → static React build
    └── public: API URL, Supabase URL/public key
```

## 7. Kiểm tra kết quả và tiêu chí hoàn thành

- [ ] Frontend truy cập backend domain thật, không gọi localhost.
- [ ] Secrets ở đúng service và không xuất hiện trong bundle JS.

**Checkpoint:** Người học cần trình bày được dữ liệu đầu vào, biến đổi hoặc hành động chính, đầu ra quan sát được và tình huống thất bại của phần này. Nếu chưa chứng minh được bằng lệnh chạy, ảnh chụp, test hoặc bảng so sánh, chưa nên đánh dấu hoàn tất.

## 8. Lỗi thường gặp và cách tự debug

1. Không cho coding agent toàn quyền production khi chưa giới hạn scope.

2. Không chạy migration phá dữ liệu tự động trong một deploy không có backup.

Khi gặp lỗi, hãy thu nhỏ tình huống về một input cụ thể, kiểm tra log/request id, xác nhận từng lớp độc lập và chỉ sửa một giả thuyết tại một thời điểm. Cách làm này giúp phân biệt sai dữ liệu, sai hợp đồng API và sai cấu hình môi trường.

## 9. Bài tập ứng dụng

Tạo runbook triển khai một trang có preflight, lệnh kiểm thử, phương án rollback và người phê duyệt.

**Sản phẩm nộp:** một README ngắn mô tả cách chạy, dữ liệu/case thử, bằng chứng đã kiểm tra và tối thiểu một tình huống lỗi được xử lý. Nếu thực hành với tài khoản thật, loại bỏ mọi secret và dữ liệu nhạy cảm khỏi bản nộp.

## 10. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Cần tách service nào trên Railway?

A. Frontend web và backend API.  
B. Secret/variables của service phía server.  
C. Đăng nhập, hỏi đáp và mở citation trên domain thật.  
D. Triển khai lỗi có thể gây downtime hoặc sai dữ liệu.  

**Đáp án: A.** Mỗi lớp có build/start và môi trường khác nhau.

**Câu 2.** Secret nên nằm ở đâu?

A. Đăng nhập, hỏi đáp và mở citation trên domain thật.  
B. Triển khai lỗi có thể gây downtime hoặc sai dữ liệu.  
C. Agent có thể thay đổi quyền, tài nguyên hoặc secrets ngoài dự kiến.  
D. Secret/variables của service phía server.  

**Đáp án: D.** Không hardcode vào image hoặc frontend.

**Câu 3.** Thử quan trọng sau deploy?

A. Triển khai lỗi có thể gây downtime hoặc sai dữ liệu.  
B. Agent có thể thay đổi quyền, tài nguyên hoặc secrets ngoài dự kiến.  
C. Đăng nhập, hỏi đáp và mở citation trên domain thật.  
D. Frontend web và backend API.  

**Đáp án: C.** Local success không bằng production readiness.

**Câu 4.** Vì sao cần kế hoạch rollback?

A. Agent có thể thay đổi quyền, tài nguyên hoặc secrets ngoài dự kiến.  
B. Triển khai lỗi có thể gây downtime hoặc sai dữ liệu.  
C. Frontend web và backend API.  
D. Secret/variables của service phía server.  

**Đáp án: B.** Phải có đường quay lại an toàn.

**Câu 5.** MCP deploy có rủi ro gì?

A. Agent có thể thay đổi quyền, tài nguyên hoặc secrets ngoài dự kiến.  
B. Frontend web và backend API.  
C. Secret/variables của service phía server.  
D. Đăng nhập, hỏi đáp và mở citation trên domain thật.  

**Đáp án: A.** Nên giới hạn quyền và review hành động.

## 11. Tổng kết

Bài học tập trung vào **Triển khai trên Railway, kiểm soát secrets và rollback** như một mắt xích của Document Copilot. Giá trị quan trọng nhất không chỉ là chạy được một chức năng mà còn là lý giải được thiết kế, truy vết được dữ liệu và kiểm chứng bằng trường hợp thực tế.

**Mốc học video:** [2:59:50](https://www.youtube.com/watch?v=qF5il_9IwME&t=10790s) — 3:34:28.
