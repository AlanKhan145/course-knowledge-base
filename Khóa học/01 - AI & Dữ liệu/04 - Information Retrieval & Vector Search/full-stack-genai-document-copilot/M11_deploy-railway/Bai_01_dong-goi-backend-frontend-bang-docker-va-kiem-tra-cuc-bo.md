# Bài 1. Đóng gói backend/frontend bằng Docker và kiểm tra cục bộ

> **Module 11 — Docker và Railway deployment**  
> Thời điểm tham chiếu: [2:59:50](https://www.youtube.com/watch?v=qF5il_9IwME&t=10790s).  
> Hình thức: bài học kết hợp thực hành.

## 1. Tóm tắt

Hiểu vai trò Dockerfile, image, runtime configuration và cách kiểm tra hai dịch vụ trước deploy.

## 2. Mục tiêu học tập

- Giải thích được cơ chế và lý do kỹ thuật của chủ đề **Đóng gói backend/frontend bằng Docker và kiểm tra cục bộ**.
- Tự triển khai hoặc mô phỏng các bước thực hành và kiểm tra kết quả theo tiêu chí được nêu.
- Nhận diện các lỗi thiết kế/triển khai phổ biến và lựa chọn biện pháp xử lý có căn cứ.

## 3. Bối cảnh và vấn đề cần giải quyết

Deployment không đơn giản là chạy `uvicorn` trên máy của lập trình viên. Backend cần Python runtime, dependencies và lệnh start; frontend cần build assets và web server thích hợp (chẳng hạn Caddy). Docker giúp mô tả môi trường có thể xây dựng lặp lại, nhưng cần phân biệt build-time variable, runtime secret và domain/cors.

## 4. Kiến thức cốt lõi

### 4.1. Image cho backend

Dùng base image tin cậy, cài dependency có lockfile, sao chép source cần thiết và chạy server theo cổng nền tảng cấp. Không đưa `.env`, secret hoặc cache nặng vào image. Chú ý chạy ứng dụng với quyền phù hợp.

### 4.2. Image cho frontend

Vite build ra static assets. Một web server như Caddy có thể phục vụ SPA và định tuyến fallback. Chỉ đưa những biến VITE_ thực sự public vào lúc build; secret không được inject vào JS build.

### 4.3. Local parity

Trước khi upload, build image và chạy lệnh kiểm tra, thử frontend gọi API theo URL đúng. Lỗi hay xuất hiện: backend bind localhost thay vì 0.0.0.0, CORS sai, path rewrite sai và env thiếu.

## 5. Quy trình áp dụng từng bước

Các bước dưới đây là phương án thực hành để tái tạo và kiểm chứng các nguyên tắc đã học. Điều chỉnh tên file, biến môi trường và phiên bản dependency theo dự án của bạn.

**Bước 1.** Tạo Dockerfile backend và frontend, thêm `.dockerignore`.

**Bước 2.** Build image; chạy local và thử `/health`.

**Bước 3.** Mở build output frontend để kiểm tra không lẫn secret.

**Bước 4.** Ghi lại lệnh start và port từng dịch vụ trong tài liệu vận hành.

## 6. Ví dụ minh họa

Ví dụ sau tập trung vào một nguyên lý triển khai. Đây là mã/giả mã dùng cho học tập, có thể cần bổ sung các thành phần vận hành và kiểm thử khi tích hợp vào repository thực tế.

```dockerfile
FROM python:3.12-slim
WORKDIR /app
# Ví dụ khung minh họa, cần bổ sung cách cài uv + locked dependencies
COPY . /app
# RUN ... install locked dependencies ...
# CMD chạy app ở cổng do hạ tầng cấp; không hardcode secret
```

## 7. Kiểm tra kết quả và tiêu chí hoàn thành

- [ ] Image không chứa `.env` và có startup command rõ.
- [ ] Dịch vụ nghe ở host/port đúng và health check chạy được.

**Checkpoint:** Người học cần trình bày được dữ liệu đầu vào, biến đổi hoặc hành động chính, đầu ra quan sát được và tình huống thất bại của phần này. Nếu chưa chứng minh được bằng lệnh chạy, ảnh chụp, test hoặc bảng so sánh, chưa nên đánh dấu hoàn tất.

## 8. Lỗi thường gặp và cách tự debug

1. Không copy toàn bộ home directory hoặc secret vào image.

2. Không coi build image thành công là API đã kết nối DB hay phục vụ được traffic.

Khi gặp lỗi, hãy thu nhỏ tình huống về một input cụ thể, kiểm tra log/request id, xác nhận từng lớp độc lập và chỉ sửa một giả thuyết tại một thời điểm. Cách làm này giúp phân biệt sai dữ liệu, sai hợp đồng API và sai cấu hình môi trường.

## 9. Bài tập ứng dụng

Build cả hai dịch vụ rồi viết `smoke.sh` xác nhận health và trang chat trả HTTP 200; không dùng secret thật trong demo.

**Sản phẩm nộp:** một README ngắn mô tả cách chạy, dữ liệu/case thử, bằng chứng đã kiểm tra và tối thiểu một tình huống lỗi được xử lý. Nếu thực hành với tài khoản thật, loại bỏ mọi secret và dữ liệu nhạy cảm khỏi bản nộp.

## 10. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Docker giải quyết điều gì?

A. Đóng gói môi trường runtime có thể triển khai lặp lại.  
B. Tránh đóng gói secret, cache và file không cần thiết.  
C. Static JS/CSS/assets có thể đọc trên browser.  
D. Địa chỉ được platform truy cập, thường 0.0.0.0.  

**Đáp án: A.** Giảm phụ thuộc máy cài đặt thủ công.

**Câu 2.** Vì sao cần `.dockerignore`?

A. Static JS/CSS/assets có thể đọc trên browser.  
B. Địa chỉ được platform truy cập, thường 0.0.0.0.  
C. Chạy container và gọi health/API thực.  
D. Tránh đóng gói secret, cache và file không cần thiết.  

**Đáp án: D.** Giảm size và rủi ro rò dữ liệu.

**Câu 3.** Vite build chứa gì?

A. Địa chỉ được platform truy cập, thường 0.0.0.0.  
B. Chạy container và gọi health/API thực.  
C. Static JS/CSS/assets có thể đọc trên browser.  
D. Đóng gói môi trường runtime có thể triển khai lặp lại.  

**Đáp án: C.** Không phải nơi an toàn cho secret.

**Câu 4.** Backend nên bind host nào trong container?

A. Chạy container và gọi health/API thực.  
B. Địa chỉ được platform truy cập, thường 0.0.0.0.  
C. Đóng gói môi trường runtime có thể triển khai lặp lại.  
D. Tránh đóng gói secret, cache và file không cần thiết.  

**Đáp án: B.** Bind 127.0.0.1 chỉ nghe loopback container.

**Câu 5.** Sau build cần thử gì?

A. Chạy container và gọi health/API thực.  
B. Đóng gói môi trường runtime có thể triển khai lặp lại.  
C. Tránh đóng gói secret, cache và file không cần thiết.  
D. Static JS/CSS/assets có thể đọc trên browser.  

**Đáp án: A.** Build không bảo đảm start thành công.

## 11. Tổng kết

Bài học tập trung vào **Đóng gói backend/frontend bằng Docker và kiểm tra cục bộ** như một mắt xích của Document Copilot. Giá trị quan trọng nhất không chỉ là chạy được một chức năng mà còn là lý giải được thiết kế, truy vết được dữ liệu và kiểm chứng bằng trường hợp thực tế.

**Mốc học video:** [2:59:50](https://www.youtube.com/watch?v=qF5il_9IwME&t=10790s) — 3:34:28.
