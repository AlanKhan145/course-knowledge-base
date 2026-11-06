# Bài 1. Tích hợp API chat và tiến trình agent vào UI

> **Module 09 — Tích hợp chat UI và citations**  
> Thời điểm tham chiếu: [2:20:05](https://www.youtube.com/watch?v=qF5il_9IwME&t=8405s).  
> Hình thức: bài học kết hợp thực hành.

## 1. Tóm tắt

Kết nối form chat với API có auth, loading/progress, lỗi và trạng thái hoàn tất; hiểu cách tránh response race.

## 2. Mục tiêu học tập

- Giải thích được cơ chế và lý do kỹ thuật của chủ đề **Tích hợp API chat và tiến trình agent vào UI**.
- Tự triển khai hoặc mô phỏng các bước thực hành và kiểm tra kết quả theo tiêu chí được nêu.
- Nhận diện các lỗi thiết kế/triển khai phổ biến và lựa chọn biện pháp xử lý có căn cứ.

## 3. Bối cảnh và vấn đề cần giải quyết

Khi retrieval và agent có nhiều bước, người dùng có thể chờ đáng kể. UI nên thông báo các pha có ý nghĩa như tìm tài liệu, đọc đoạn và tổng hợp câu trả lời. Trạng thái không nên là các câu “giả vờ tiến độ”; nó phải dựa vào sự kiện hoặc trạng thái thật của backend khi có.

## 4. Kiến thức cốt lõi

### 4.1. API contract có error model

Thống nhất request JSON gồm conversation_id, content; response có message_id, answer, citations và status. HTTP 401/403 phản ánh quyền; 422 phản ánh schema đầu vào; lỗi LLM hoặc timeout cần thông điệp retry riêng.

### 4.2. Progress events

Có thể dùng SSE, WebSocket hoặc polling tùy hệ thống. Với SSE, server gửi event loại `searching`, `reading`, `verifying`, `completed`, `failed` và event id khi cần resume. Đây là một thiết kế minh họa, không khẳng định endpoint cụ thể của repo.

### 4.3. Phân quyền theo request

Mỗi API call kèm access token. Khi refresh session, request mới phải lấy token mới. Khi chuyển hội thoại hoặc thoát trang, hủy subscription/request để tránh cập nhật sai state.

## 5. Quy trình áp dụng từng bước

Các bước dưới đây là phương án thực hành để tái tạo và kiểm chứng các nguyên tắc đã học. Điều chỉnh tên file, biến môi trường và phiên bản dependency theo dự án của bạn.

**Bước 1.** Tạo HTTP client có typed response và centralized error handler.

**Bước 2.** Khi gửi message, tạo placeholder pending có request id.

**Bước 3.** Cập nhật status từ server, kết thúc bằng answer/citations thực.

**Bước 4.** Thử lỗi 422, 401, timeout và đổi chat khi request chạy.

## 6. Ví dụ minh họa

Ví dụ sau tập trung vào một nguyên lý triển khai. Đây là mã/giả mã dùng cho học tập, có thể cần bổ sung các thành phần vận hành và kiểm thử khi tích hợp vào repository thực tế.

```typescript
type ChatStatus = "searching" | "reading" | "verifying" | "completed" | "failed";

function statusLabel(s: ChatStatus): string {
  return ({
    searching: "Đang tìm hồ sơ",
    reading: "Đang đọc nguồn",
    verifying: "Đang kiểm chứng",
    completed: "Hoàn tất",
    failed: "Có lỗi"
  })[s];
}
```

## 7. Kiểm tra kết quả và tiêu chí hoàn thành

- [ ] Không hiện thông báo “xong” trước khi API xác nhận.
- [ ] Response được gắn đúng conversation và request ban đầu.

**Checkpoint:** Người học cần trình bày được dữ liệu đầu vào, biến đổi hoặc hành động chính, đầu ra quan sát được và tình huống thất bại của phần này. Nếu chưa chứng minh được bằng lệnh chạy, ảnh chụp, test hoặc bảng so sánh, chưa nên đánh dấu hoàn tất.

## 8. Lỗi thường gặp và cách tự debug

1. HTTP 422 thường là lệch schema frontend/backend; so request body và model.

2. Không hiển thị thông tin nội bộ, stack trace hoặc secret trong UI lỗi.

Khi gặp lỗi, hãy thu nhỏ tình huống về một input cụ thể, kiểm tra log/request id, xác nhận từng lớp độc lập và chỉ sửa một giả thuyết tại một thời điểm. Cách làm này giúp phân biệt sai dữ liệu, sai hợp đồng API và sai cấu hình môi trường.

## 9. Bài tập ứng dụng

Viết UI mock cho bốn trạng thái searching/reading/verifying/failed và tích hợp một request thật.

**Sản phẩm nộp:** một README ngắn mô tả cách chạy, dữ liệu/case thử, bằng chứng đã kiểm tra và tối thiểu một tình huống lỗi được xử lý. Nếu thực hành với tài khoản thật, loại bỏ mọi secret và dữ liệu nhạy cảm khỏi bản nộp.

## 10. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** HTTP 422 thường gợi ý điều gì trong FastAPI?

A. Request không đúng schema validation.  
B. Sự kiện hoặc trạng thái backend thực.  
C. Hủy/kiểm tra request id trước khi cập nhật state.  
D. 401 thiếu/sai xác thực; 403 không có quyền.  

**Đáp án: A.** Cần so payload frontend với Pydantic model.

**Câu 2.** Progress UI nên dựa vào gì?

A. Hủy/kiểm tra request id trước khi cập nhật state.  
B. 401 thiếu/sai xác thực; 403 không có quyền.  
C. Nội dung và citations hợp lệ kèm trạng thái completed.  
D. Sự kiện hoặc trạng thái backend thực.  

**Đáp án: D.** Giả tiến độ gây hiểu lầm.

**Câu 3.** Khi người dùng chuyển chat giữa request?

A. 401 thiếu/sai xác thực; 403 không có quyền.  
B. Nội dung và citations hợp lệ kèm trạng thái completed.  
C. Hủy/kiểm tra request id trước khi cập nhật state.  
D. Request không đúng schema validation.  

**Đáp án: C.** Tránh hiển thị nhầm câu trả lời.

**Câu 4.** 401 khác 403 như thế nào?

A. Nội dung và citations hợp lệ kèm trạng thái completed.  
B. 401 thiếu/sai xác thực; 403 không có quyền.  
C. Request không đúng schema validation.  
D. Sự kiện hoặc trạng thái backend thực.  

**Đáp án: B.** UI cần xử lý đúng authentication và authorization.

**Câu 5.** Điều gì xuất hiện khi hoàn tất answer?

A. Nội dung và citations hợp lệ kèm trạng thái completed.  
B. Request không đúng schema validation.  
C. Sự kiện hoặc trạng thái backend thực.  
D. Hủy/kiểm tra request id trước khi cập nhật state.  

**Đáp án: A.** Không chỉ dừng spinner.

## 11. Tổng kết

Bài học tập trung vào **Tích hợp API chat và tiến trình agent vào UI** như một mắt xích của Document Copilot. Giá trị quan trọng nhất không chỉ là chạy được một chức năng mà còn là lý giải được thiết kế, truy vết được dữ liệu và kiểm chứng bằng trường hợp thực tế.

**Mốc học video:** [2:20:05](https://www.youtube.com/watch?v=qF5il_9IwME&t=8405s) — 2:50:17.
