# Bài 2. Cấu hình Supabase, biến môi trường và kết nối an toàn

> **Module 04 — Kế hoạch và cấu hình môi trường**  
> Thời điểm tham chiếu: [0:28:34](https://www.youtube.com/watch?v=qF5il_9IwME&t=1714s).  
> Hình thức: bài học kết hợp thực hành.

## 1. Tóm tắt

Cấu hình được project Supabase, kết nối Postgres và phân biệt chính xác public key với server secret.

## 2. Mục tiêu học tập

- Giải thích được cơ chế và lý do kỹ thuật của chủ đề **Cấu hình Supabase, biến môi trường và kết nối an toàn**.
- Tự triển khai hoặc mô phỏng các bước thực hành và kiểm tra kết quả theo tiêu chí được nêu.
- Nhận diện các lỗi thiết kế/triển khai phổ biến và lựa chọn biện pháp xử lý có căn cứ.

## 3. Bối cảnh và vấn đề cần giải quyết

Ứng dụng cần project Supabase lưu database và quản lý đăng nhập. Việc đặt project và backend ở khu vực gần nhau giảm độ trễ mạng. Các giá trị như URL Supabase và publishable/anon key có thể xuất hiện trên frontend khi RLS được thiết kế đúng; mật khẩu DB và secret/service-role key phải ở server, không được commit.

## 4. Kiến thức cốt lõi

### 4.1. Tạo project và kiểm tra tính bảo mật

Chọn vùng phù hợp, dùng mật khẩu mạnh và bật RLS cho các bảng cần giới hạn theo tài khoản. Tạo file `.env.example` riêng cho backend/frontend chỉ ghi tên biến, không chứa giá trị nhạy cảm.

### 4.2. Kết nối database

`DATABASE_URL` chứa username, password, host, database và phương thức kết nối. Ký tự đặc biệt trong password phải được URL-encode chính xác trong connection URI; nếu dùng dotenv hoặc shell cũng cần chú ý dấu `#`, khoảng trắng và quote.

### 4.3. Kiểm tra cấu hình

Kiểm tra biến được load, hostname đúng, service được quyền kết nối và không rò secret qua log. Lỗi kết nối có thể do region, firewall, chuỗi DSN, mật khẩu sai hoặc phiên bản driver.

## 5. Quy trình áp dụng từng bước

Các bước dưới đây là phương án thực hành để tái tạo và kiểm chứng các nguyên tắc đã học. Điều chỉnh tên file, biến môi trường và phiên bản dependency theo dự án của bạn.

**Bước 1.** Tạo Supabase project và lưu credential trong secret manager hoặc `.env` cục bộ.

**Bước 2.** Tạo `backend/.env.example` có `DATABASE_URL`, `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `OPENAI_API_KEY`.

**Bước 3.** Tạo `frontend/.env.example` với `VITE_SUPABASE_URL` và `VITE_SUPABASE_PUBLISHABLE_KEY`.

**Bước 4.** Thử kết nối read-only hoặc health check và kiểm tra `.gitignore`.

## 6. Ví dụ minh họa

Ví dụ sau tập trung vào một nguyên lý triển khai. Đây là mã/giả mã dùng cho học tập, có thể cần bổ sung các thành phần vận hành và kiểm thử khi tích hợp vào repository thực tế.

```bash
cat > backend/.env.example <<'EOF'
DATABASE_URL=postgresql+psycopg://USER:PASSWORD@HOST:5432/postgres
SUPABASE_URL=https://PROJECT.supabase.co
SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLIC_KEY
OPENAI_API_KEY=YOUR_SERVER_SECRET
EOF
printf "**/.env\n**/.env.local\n" >> .gitignore
git status --ignored
```

## 7. Kiểm tra kết quả và tiêu chí hoàn thành

- [ ] Biến bí mật không có trong Git và frontend build output.
- [ ] Kết nối database thành công mà không in toàn bộ DSN ra console.

**Checkpoint:** Người học cần trình bày được dữ liệu đầu vào, biến đổi hoặc hành động chính, đầu ra quan sát được và tình huống thất bại của phần này. Nếu chưa chứng minh được bằng lệnh chạy, ảnh chụp, test hoặc bảng so sánh, chưa nên đánh dấu hoàn tất.

## 8. Lỗi thường gặp và cách tự debug

1. Không dùng service-role key ở client; RLS không bảo vệ thao tác có quyền bypass.

2. Không sửa trực tiếp password trong URI mà quên URL-encode ký tự đặc biệt.

Khi gặp lỗi, hãy thu nhỏ tình huống về một input cụ thể, kiểm tra log/request id, xác nhận từng lớp độc lập và chỉ sửa một giả thuyết tại một thời điểm. Cách làm này giúp phân biệt sai dữ liệu, sai hợp đồng API và sai cấu hình môi trường.

## 9. Bài tập ứng dụng

Viết script health-check cấu hình chỉ báo biến nào bị thiếu; không bao giờ hiển thị giá trị secret.

**Sản phẩm nộp:** một README ngắn mô tả cách chạy, dữ liệu/case thử, bằng chứng đã kiểm tra và tối thiểu một tình huống lỗi được xử lý. Nếu thực hành với tài khoản thật, loại bỏ mọi secret và dữ liệu nhạy cảm khỏi bản nộp.

## 10. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Khóa nào chỉ nên ở server?

A. OpenAI API key và Supabase service-role key.  
B. Áp chính sách truy cập hàng dữ liệu theo vai trò/người dùng.  
C. Giảm độ trễ kết nối backend–database.  
D. Có thể cần URL-encode đúng để URI không bị phân tích sai.  

**Đáp án: A.** Đó là secret có thể bị lộ khi đóng gói trình duyệt.

**Câu 2.** RLS có tác dụng gì?

A. Giảm độ trễ kết nối backend–database.  
B. Có thể cần URL-encode đúng để URI không bị phân tích sai.  
C. `.env.example` không chứa giá trị secret thật.  
D. Áp chính sách truy cập hàng dữ liệu theo vai trò/người dùng.  

**Đáp án: D.** Public key không tự đảm bảo dữ liệu được bảo vệ.

**Câu 3.** Vì sao chọn cùng khu vực triển khai?

A. Có thể cần URL-encode đúng để URI không bị phân tích sai.  
B. `.env.example` không chứa giá trị secret thật.  
C. Giảm độ trễ kết nối backend–database.  
D. OpenAI API key và Supabase service-role key.  

**Đáp án: C.** Đường truyền xa thường tăng round-trip.

**Câu 4.** Vấn đề khi mật khẩu có ký tự # trong DSN?

A. `.env.example` không chứa giá trị secret thật.  
B. Có thể cần URL-encode đúng để URI không bị phân tích sai.  
C. OpenAI API key và Supabase service-role key.  
D. Áp chính sách truy cập hàng dữ liệu theo vai trò/người dùng.  

**Đáp án: B.** Ký tự reserved có ý nghĩa đặc biệt trong URL.

**Câu 5.** File nào nên commit?

A. `.env.example` không chứa giá trị secret thật.  
B. OpenAI API key và Supabase service-role key.  
C. Áp chính sách truy cập hàng dữ liệu theo vai trò/người dùng.  
D. Giảm độ trễ kết nối backend–database.  

**Đáp án: A.** Mẫu cấu hình hỗ trợ onboarding an toàn.

## 11. Tổng kết

Bài học tập trung vào **Cấu hình Supabase, biến môi trường và kết nối an toàn** như một mắt xích của Document Copilot. Giá trị quan trọng nhất không chỉ là chạy được một chức năng mà còn là lý giải được thiết kế, truy vết được dữ liệu và kiểm chứng bằng trường hợp thực tế.

**Mốc học video:** [0:28:34](https://www.youtube.com/watch?v=qF5il_9IwME&t=1714s) — 0:43:42.
