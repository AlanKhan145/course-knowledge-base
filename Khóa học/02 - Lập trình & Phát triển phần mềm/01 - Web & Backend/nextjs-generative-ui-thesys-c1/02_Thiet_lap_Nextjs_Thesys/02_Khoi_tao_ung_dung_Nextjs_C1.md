# Khởi tạo ứng dụng Next.js bằng C1 CLI

**Loại bài:** Bài học thực hành · **Mục tiêu:** Tạo được dự án mẫu C1, chạy dev server và xác định những biến môi trường phải giữ kín.

**Bối cảnh:** Khóa học Generative UI với Next.js và Thesys C1. Nội dung C1 dùng API legacy; với dự án mới, xem OpenUI ở https://www.openui.com/docs.

## 1. Chuẩn bị
Cần Node.js phù hợp với bản Next.js và CLI bạn đang sử dụng; [C1 Quickstart (legacy)](https://docs.thesys.dev/legacy/guides/setup) nêu Node.js 20.9+ cho starter C1. Cần npm, trình biên tập mã và tài khoản có API key Thesys. Nếu CLI không còn cấp quyền tạo C1 vì đã chuyển sang OpenUI, xem bài migration cuối khóa.

## 2. Tạo project từ CLI
```bash
node --version
npm --version
npx create-c1-app
```
Theo hướng dẫn CLI, làm theo câu hỏi trong terminal để đặt tên thư mục và xác thực tài khoản. Ví dụ chọn tên `my-c1-project`, sau đó:
```bash
cd my-c1-project
npm install
npm run dev
```
Truy cập `http://localhost:3000`. Nếu cổng đã được dùng, đọc URL mà dev server thực sự in ra. Không coi tên project hay cách CLI hỏi tương tác là bất biến: CLI có thể được cập nhật.

## 3. Kiểm tra cấu hình bí mật
Mẫu có thể tạo `.env` / `.env.local`. Cấu hình riêng tư về nguyên tắc:
```dotenv
THESYS_API_KEY=your_server_side_key_here
THESYS_C1_MODEL=your_enabled_model_id
```
Đây là **tên biến minh họa** cho kiến trúc tự dựng; starter có thể dùng tên khác. Luôn xem mã trong project để biết biến được đọc thật sự. Không dùng tiền tố `NEXT_PUBLIC_` cho API key; không commit `.env*` chứa khóa lên Git. Khi gặp lỗi 401, kiểm tra key từ server mà không ghi giá trị ra log.

## 4. Kiểm tra sau cài đặt
Mở tab chat, gửi “Chào, hãy cho tôi 3 lựa chọn để tìm hiểu về Generative UI”. Bạn cần thấy ít nhất một phản hồi và không có lỗi mạng. Dùng DevTools xác định request được gửi vào route nội bộ nào. Nếu HTTP 500: kiểm tra terminal của Next.js, cấu hình model, khóa, giới hạn tài khoản. Nếu CSS vỡ: kiểm tra stylesheet của thư viện renderer.

## 5. Deliverables
Ảnh màn hình ứng dụng chạy, tên thư mục project, giải thích mỗi file quan trọng và tài liệu liệt kê **tên biến** (không ghi secret). Kèm bản ghi lỗi nếu chưa chạy được.

## 6. Tổng kết
CLI giúp tạo scaffold nhanh; giá trị của bài này là biết khởi động, kiểm tra và không rò rỉ thông tin bí mật.

## 7. Câu hỏi ôn tập

**Câu 1.** Lệnh khởi tạo C1 trong tài liệu legacy là?

A. npm run build  
B. npx create-c1-app  
C. git init --bare  
D. python manage.py runserver  

**Đáp án:** B. **Giải thích:** Legacy quickstart hướng dẫn create-c1-app.

**Câu 2.** Lệnh chạy dev server npm thường dùng?

A. npm run dev  
B. npm publish  
C. npm audit --fix --force  
D. npm uninstall  

**Đáp án:** A. **Giải thích:** Script dev khởi chạy Next.js trong dự án mẫu.

**Câu 3.** Vì sao không dùng NEXT_PUBLIC_ cho API key?

A. Để CSS đẹp  
B. Để giảm RAM  
C. Vì có thể lộ vào bundle phía client  
D. Vì loại bỏ lỗi 404  

**Đáp án:** C. **Giải thích:** Các biến client-visible không phù hợp lưu secret.

**Câu 4.** Khi trang lỗi 500 nên kiểm tra đầu tiên?

A. Đổi màu theme  
B. Xóa history mọi người  
C. Tắt mạng  
D. Log server và key/model config  

**Đáp án:** D. **Giải thích:** 500 thường cần kiểm tra lỗi từ route backend.

**Câu 5.** Cấu hình model nên lấy từ đâu?

A. Model được tài khoản/console hỗ trợ  
B. Tự đoán ID  
C. Giá từ bảng SKU  
D. Tên theme  

**Đáp án:** A. **Giải thích:** Model ID phải tồn tại và được phép sử dụng.

