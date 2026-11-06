# Khởi tạo PostgreSQL cục bộ bằng Supabase CLI và Docker

> **Tóm tắt:** Dùng Supabase CLI để chạy PostgreSQL và các dịch vụ hỗ trợ trên máy cá nhân, có Studio để quan sát dữ liệu.

## 1. Mục tiêu học tập

- Khởi tạo project Supabase local.
- Chạy stack và kiểm tra endpoint/keys.
- Phân biệt start, stop, db reset.

## 2. Supabase local stack

Supabase là nền tảng dựa trên PostgreSQL. Local stack cung cấp PostgreSQL, API, Studio và các thành phần kèm theo. `pgvector` là PostgreSQL extension tên `vector`; không phải một vector database server tách rời. Nhờ đó, metadata JSONB, truy vấn SQL, full-text và vector có thể cùng nằm trong một DB.

## 3. Các bước cài đặt

Khởi động Docker trước. Trong thư mục project mới:

```bash
npm install supabase --save-dev
npx supabase init
npx supabase start
npx supabase status
```

`init` tạo `supabase/config.toml`; `start` tải/chạy containers cần thiết. Theo cấu hình mặc định thông dụng, Studio ở `http://127.0.0.1:54323`, API ở `http://127.0.0.1:54321`; **đọc giá trị thực tế từ `npx supabase status`**, vì cổng có thể được cấu hình khác.

Muốn xem PostgreSQL trong Studio: vào Table Editor hoặc SQL Editor sau khi tạo bảng.

## 4. Cấu hình và khắc phục

Nếu `Docker daemon is not running`, bật Docker Desktop. Nếu port bị chiếm, xem container khác và config. Nếu CLI báo Node/npm thiếu, kiểm tra PATH. Lệnh `npx supabase stop` dừng stack mà không chủ động tái tạo DB; `npx supabase db reset` **xóa và xây lại** dữ liệu local từ migrations/seed.

Không mở các endpoint local ra mạng công cộng. Không sử dụng key quyền cao ở frontend.

## 5. Thực hành và tự kiểm tra

Tạo project, chạy `npx supabase status`, ghi lại URL API/Studio trong ghi chú cá nhân (không ghi secret key). Chụp danh sách container đang chạy. Kiểm tra Studio truy cập được.

## 6. Câu hỏi ôn tập

### Câu 1

Supabase local stack chạy nhờ gì?

A. Docker-compatible runtime  
B. Google Drive  
C. Mermaid  
D. Browser cookie  

**Đáp án:** A

**Giải thích:** CLI gọi container runtime.

### Câu 2

Lệnh tạo `supabase/config.toml`?

A. supabase status  
B. supabase init  
C. supabase db reset  
D. ollama pull  

**Đáp án:** B

**Giải thích:** init khởi tạo thư mục cấu hình.

### Câu 3

Làm sao lấy đúng địa chỉ API local?

A. Đoán từ README  
B. Dùng username  
C. supabase status  
D. Git history  

**Đáp án:** C

**Giải thích:** status trả về endpoint thực tế của stack.

### Câu 4

Lệnh nào tái tạo và có thể làm mất DB local?

A. supabase start  
B. supabase stop  
C. supabase status  
D. supabase db reset  

**Đáp án:** D

**Giải thích:** db reset là tác vụ phá hủy dữ liệu development hiện tại.

### Câu 5

pgvector là gì?

A. PostgreSQL extension  
B. Docker image duy nhất  
C. LLM chat  
D. Phần mở rộng VS Code  

**Đáp án:** A

**Giải thích:** pgvector mở rộng kiểu dữ liệu/toán tử của Postgres.

## 7. Tổng kết

Dùng Supabase CLI để chạy PostgreSQL và các dịch vụ hỗ trợ trên máy cá nhân, có Studio để quan sát dữ liệu. Hoàn thành phần thực hành và trả lời được các câu hỏi là đạt yêu cầu của bài.
