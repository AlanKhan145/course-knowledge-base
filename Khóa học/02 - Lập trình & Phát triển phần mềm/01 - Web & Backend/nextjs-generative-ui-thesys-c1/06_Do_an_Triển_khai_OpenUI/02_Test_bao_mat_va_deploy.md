# Kiểm thử, bảo mật, chi phí và triển khai

**Loại bài:** Bài học thực hành · **Mục tiêu:** Lập checklist production cho Next.js Generative UI: bảo vệ key, quyền dữ liệu, streaming, lỗi và ngân sách.

**Bối cảnh:** Khóa học Generative UI với Next.js và Thesys C1. Nội dung C1 dùng API legacy; với dự án mới, xem OpenUI ở https://www.openui.com/docs.

## 1. Những rủi ro chính
Giao diện có AI có thể trình bày nội dung thuyết phục dù dữ liệu sai; thực thi custom action từ input không đáng tin; lộ secret do để trong client; user truy cập thread của người khác; tốn chi phí vì context dài; stream đứt mà UI đánh dấu hoàn tất. Bảo vệ phải đặt theo lớp, không chỉ bổ sung system prompt “hãy cẩn thận”.

## 2. Kiểm soát backend
Xác thực mọi endpoint truy cập dữ liệu riêng, xác định quyền theo tài nguyên, rate limit theo user/IP phù hợp, validate request bằng schema, giới hạn kích thước upload, timeout và retry có điều kiện. Đối với action nhạy cảm, cần xác nhận rõ và idempotency để không gây hành động trùng. Không gửi thông tin người dùng không cần thiết sang nhà cung cấp AI.

## 3. Chính sách dữ liệu AI
Chỉ lấy dữ liệu đã được cấp quyền, rút gọn dữ liệu thành phần cần thiết, thêm timestamp và nguồn cho kết quả biến đổi theo thời gian. Nếu có công cụ search hoặc SQL, sử dụng truy vấn được tham số hóa và quyền read-only khi thích hợp. Với SQL tool, không thực thi trực tiếp chuỗi SQL do LLM tạo nếu chưa có lớp validation/allowlist thích hợp.

## 4. Kiểm thử từng lớp
| Lớp | Kiểm tra | Kết quả mong đợi |
| --- | --- | --- |
| Dữ liệu | CSV rỗng/sai cột | Thông báo hữu ích |
| Auth | Truy cập thread người khác | 403/404 phù hợp |
| API | C1 timeout/429 | Không treo UI, có lỗi thử lại |
| Renderer | Response dở khi stream | Không crash |
| Action | Tham số không hợp lệ | Từ chối an toàn |
| UX | Mobile, keyboard, dark mode | Sử dụng được |

## 5. Quan sát và chi phí
Ghi log request ID, endpoint, latency, status, token usage nếu API trả về, số lỗi render và tỷ lệ hoàn thành hành động. Không log API key, mật khẩu, dữ liệu riêng tư. Theo dõi chi phí trên một lượt chat, tỷ lệ cache, số lượt retry và độ dài context; thiết lập giới hạn ngân sách phù hợp dịch vụ đang dùng.

## 6. Deploy
Đặt secret trong môi trường host, khai báo biến môi trường server-side, build production, cấu hình đúng domain CORS khi cần, kiểm tra route từ host. Sau triển khai: gửi test prompt, theo dõi server log, thử mobile, kiểm tra quyền truy cập, xác nhận download và xử lý lỗi. Không ghi giả định gói miễn phí hoặc giá cố định trong README; giá/limit thay đổi theo dịch vụ.

## 7. Tổng kết
Một UI sinh đẹp chưa đủ: tính đúng, quyền truy cập, độ ổn định và quan sát được lỗi là tiêu chuẩn đưa sản phẩm đến người dùng.

## 8. Câu hỏi ôn tập

**Câu 1.** Biện pháp cơ bản ngăn lộ API key?

A. Giữ secret ở server  
B. Viết trong NEXT_PUBLIC_  
C. In ra console client  
D. Dán vào URL  

**Đáp án:** A. **Giải thích:** Secret phía server tránh lộ cho browser.

**Câu 2.** Trường hợp user đọc thread người khác nên?

A. Hiển thị tóm tắt  
B. Từ chối theo quyền  
C. Trả lời ngẫu nhiên  
D. Đổi theme  

**Đáp án:** B. **Giải thích:** Thread phải gắn quyền sở hữu.

**Câu 3.** Khi C1 trả 429 cần?

A. Xóa toàn bộ dữ liệu  
B. Bỏ auth  
C. Xử lý rate-limit và thông báo/retry hợp lý  
D. Bật eval  

**Đáp án:** C. **Giải thích:** 429 là hạn chế request và cần xử lý có kiểm soát.

**Câu 4.** Trước khi chạy action thanh toán cần?

A. Chỉ nội dung mô hình  
B. Chỉ nút lớn  
C. Không kiểm tra  
D. Auth và xác nhận, chống gọi trùng  

**Đáp án:** D. **Giải thích:** Action có side effect yêu cầu an toàn.

**Câu 5.** Nên log gì thay vì secret?

A. Request ID, latency, status  
B. API key thô  
C. Dữ liệu khách hàng đầy đủ  
D. Token truy cập  

**Đáp án:** A. **Giải thích:** Telemetry cần tối thiểu thông tin nhạy cảm.

