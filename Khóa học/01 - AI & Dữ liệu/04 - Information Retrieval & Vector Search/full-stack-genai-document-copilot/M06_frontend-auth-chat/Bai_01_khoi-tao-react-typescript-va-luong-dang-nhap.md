# Bài 1. Khởi tạo React/TypeScript và luồng đăng nhập

> **Module 06 — React frontend, Auth và Chat**  
> Thời điểm tham chiếu: [1:08:15](https://www.youtube.com/watch?v=qF5il_9IwME&t=4095s).  
> Hình thức: bài học kết hợp thực hành.

## 1. Tóm tắt

Dựng frontend có Supabase Auth và bảo vệ route bằng phiên đăng nhập, đồng thời hiểu vai trò của backend verify token.

## 2. Mục tiêu học tập

- Giải thích được cơ chế và lý do kỹ thuật của chủ đề **Khởi tạo React/TypeScript và luồng đăng nhập**.
- Tự triển khai hoặc mô phỏng các bước thực hành và kiểm tra kết quả theo tiêu chí được nêu.
- Nhận diện các lỗi thiết kế/triển khai phổ biến và lựa chọn biện pháp xử lý có căn cứ.

## 3. Bối cảnh và vấn đề cần giải quyết

Frontend dùng React, TypeScript, Tailwind và các UI components như shadcn/ui. `pnpm` giúp quản lý package. Supabase Auth quản lý session, nhưng việc ẩn nút hay route không đủ để bảo vệ dữ liệu: backend cần xác minh JWT và database cần có RLS hoặc kiểm tra quyền tương đương.

## 4. Kiến thức cốt lõi

### 4.1. Client và session

Khởi tạo một Supabase client dùng URL và publishable/anon key. Khi ứng dụng mở lại, restore session; khi session hết hạn, refresh hoặc chuyển tới màn hình đăng nhập. Xử lý loading để tránh nhấp nháy sai giao diện.

### 4.2. Mô hình cấp tài khoản

Ứng dụng nội bộ có thể triển khai mời hoặc tạo account thủ công thay vì cho mọi người tự đăng ký. Nếu tắt email confirmation trong môi trường thử, cần hiểu tác động bảo mật và không xem đây là mặc định an toàn khi triển khai thực.

### 4.3. Auth xuyên toàn stack

Frontend gửi access token trong Authorization header tới FastAPI. API xác minh chữ ký, issuer, audience, expiry theo cấu hình Supabase và lấy user id từ token hợp lệ thay vì tin user_id do browser tự gửi.

## 5. Quy trình áp dụng từng bước

Các bước dưới đây là phương án thực hành để tái tạo và kiểm chứng các nguyên tắc đã học. Điều chỉnh tên file, biến môi trường và phiên bản dependency theo dự án của bạn.

**Bước 1.** Scaffold ứng dụng React TypeScript, thiết lập Tailwind và component library.

**Bước 2.** Cài Supabase JS client, tạo lớp auth state, trang login và route guard.

**Bước 3.** Tạo account test được cấp quyền; thử login/logout/refresh session.

**Bước 4.** Gọi endpoint bảo vệ: không token phải bị từ chối, token hợp lệ mới trả dữ liệu user.

## 6. Ví dụ minh họa

Ví dụ sau tập trung vào một nguyên lý triển khai. Đây là mã/giả mã dùng cho học tập, có thể cần bổ sung các thành phần vận hành và kiểm thử khi tích hợp vào repository thực tế.

```typescript
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
);

// Không đưa service-role key hoặc OpenAI API key vào đây.
```

## 7. Kiểm tra kết quả và tiêu chí hoàn thành

- [ ] Logout làm biến mất chat riêng và request có token cũ bị xử lý đúng quy tắc.
- [ ] Browser không có server secret.

**Checkpoint:** Người học cần trình bày được dữ liệu đầu vào, biến đổi hoặc hành động chính, đầu ra quan sát được và tình huống thất bại của phần này. Nếu chưa chứng minh được bằng lệnh chạy, ảnh chụp, test hoặc bảng so sánh, chưa nên đánh dấu hoàn tất.

## 8. Lỗi thường gặp và cách tự debug

1. Route guard là UX chứ không thay authorization server-side.

2. Không triển khai auto-confirm email thiếu cân nhắc trong production.

Khi gặp lỗi, hãy thu nhỏ tình huống về một input cụ thể, kiểm tra log/request id, xác nhận từng lớp độc lập và chỉ sửa một giả thuyết tại một thời điểm. Cách làm này giúp phân biệt sai dữ liệu, sai hợp đồng API và sai cấu hình môi trường.

## 9. Bài tập ứng dụng

Xây login page và ba kiểm thử: access không token, token hết hạn, token hợp lệ.

**Sản phẩm nộp:** một README ngắn mô tả cách chạy, dữ liệu/case thử, bằng chứng đã kiểm tra và tối thiểu một tình huống lỗi được xử lý. Nếu thực hành với tài khoản thật, loại bỏ mọi secret và dữ liệu nhạy cảm khỏi bản nộp.

## 10. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Bảo vệ API dựa vào thông tin nào?

A. JWT đã được backend xác minh.  
B. Khi quyền dữ liệu được giới hạn đúng qua RLS và API.  
C. Chưa, backend vẫn phải kiểm tra quyền.  
D. Giữ trạng thái đăng nhập nhất quán khi refresh trang.  

**Đáp án: A.** Không tin user id do client tự khai báo.

**Câu 2.** Supabase publishable key có thể ở browser khi nào?

A. Chưa, backend vẫn phải kiểm tra quyền.  
B. Giữ trạng thái đăng nhập nhất quán khi refresh trang.  
C. Cấp tài khoản/invite có kiểm soát.  
D. Khi quyền dữ liệu được giới hạn đúng qua RLS và API.  

**Đáp án: D.** Public key không tương đương quyền admin.

**Câu 3.** Route guard đủ bảo mật chưa?

A. Giữ trạng thái đăng nhập nhất quán khi refresh trang.  
B. Cấp tài khoản/invite có kiểm soát.  
C. Chưa, backend vẫn phải kiểm tra quyền.  
D. JWT đã được backend xác minh.  

**Đáp án: C.** Client-side code có thể bị bỏ qua.

**Câu 4.** Tại sao cần restore session?

A. Cấp tài khoản/invite có kiểm soát.  
B. Giữ trạng thái đăng nhập nhất quán khi refresh trang.  
C. JWT đã được backend xác minh.  
D. Khi quyền dữ liệu được giới hạn đúng qua RLS và API.  

**Đáp án: B.** Tránh bắt đăng nhập lại vô lý.

**Câu 5.** App nội bộ thường dùng onboarding kiểu nào?

A. Cấp tài khoản/invite có kiểm soát.  
B. JWT đã được backend xác minh.  
C. Khi quyền dữ liệu được giới hạn đúng qua RLS và API.  
D. Chưa, backend vẫn phải kiểm tra quyền.  

**Đáp án: A.** Hạn chế người dùng ngoài tổ chức.

## 11. Tổng kết

Bài học tập trung vào **Khởi tạo React/TypeScript và luồng đăng nhập** như một mắt xích của Document Copilot. Giá trị quan trọng nhất không chỉ là chạy được một chức năng mà còn là lý giải được thiết kế, truy vết được dữ liệu và kiểm chứng bằng trường hợp thực tế.

**Mốc học video:** [1:08:15](https://www.youtube.com/watch?v=qF5il_9IwME&t=4095s) — 1:34:49.
