# Bài 2. Kiểm thử smoke, logging và tiêu chí pilot

> **Module 10 — Hoàn thiện UI và readiness cho pilot**  
> Thời điểm tham chiếu: [2:50:17](https://www.youtube.com/watch?v=qF5il_9IwME&t=10217s).  
> Hình thức: bài học kết hợp thực hành.

## 1. Tóm tắt

Xây checklist kiểm thử luồng end-to-end, đánh giá câu trả lời và ghi nhận lỗi trước khi mời nhóm dùng thử.

## 2. Mục tiêu học tập

- Giải thích được cơ chế và lý do kỹ thuật của chủ đề **Kiểm thử smoke, logging và tiêu chí pilot**.
- Tự triển khai hoặc mô phỏng các bước thực hành và kiểm tra kết quả theo tiêu chí được nêu.
- Nhận diện các lỗi thiết kế/triển khai phổ biến và lựa chọn biện pháp xử lý có căn cứ.

## 3. Bối cảnh và vấn đề cần giải quyết

Triển khai được chưa đồng nghĩa ready cho người thật. Tối thiểu cần kiểm thử đăng nhập, riêng tư lịch sử, retrieval, citations, ingestion và tình huống thiếu nguồn; chuẩn bị logs để lần theo request chứ không chép bí mật ra console.

## 4. Kiến thức cốt lõi

### 4.1. Bộ câu hỏi kiểm chứng

Tạo tối thiểu 10 câu hỏi có câu trả lời kiểm tra được từ SEC: hỏi số liệu đơn kỳ, so sánh nhiều năm, trích bảng, tài liệu không có, cùng ticker nhưng khác kỳ. Chấm theo evidence correctness, completeness, citation accuracy và unsupported claim.

### 4.2. Logging có cấu trúc

Mỗi request có id để nối frontend–API–retrieval–LLM. Ghi thời gian từng bước, số chunk, số tool calls, lỗi và outcome; không log user password, access token hay full prompt chứa dữ liệu nhạy cảm nếu chưa có chính sách.

### 4.3. Ngưỡng bàn giao

Pilot checklist có lệnh setup, môi trường, cách tạo account, cách theo dõi log và xử lý sự cố. Mục tiêu tiết kiệm thời gian cần đo riêng qua thử nghiệm thực tế; không gắn nhãn hoàn thành dựa trên cảm tính.

## 5. Quy trình áp dụng từng bước

Các bước dưới đây là phương án thực hành để tái tạo và kiểm chứng các nguyên tắc đã học. Điều chỉnh tên file, biến môi trường và phiên bản dependency theo dự án của bạn.

**Bước 1.** Viết 10 câu hỏi kèm ground truth và nguồn.

**Bước 2.** Test login/logout, owner access, API input validation, chat history và citation side panel.

**Bước 3.** Thêm request id và structured logs ở API.

**Bước 4.** Lập biên bản pilot readiness, ghi rõ lỗi còn tồn tại và giới hạn sử dụng.

## 6. Ví dụ minh họa

Ví dụ sau tập trung vào một nguyên lý triển khai. Đây là mã/giả mã dùng cho học tập, có thể cần bổ sung các thành phần vận hành và kiểm thử khi tích hợp vào repository thực tế.

```json
{
  "request_id": "req-example",
  "stage": "retrieval",
  "duration_ms": 320,
  "retrieved_chunks": 8,
  "status": "ok"
}
```

## 7. Kiểm tra kết quả và tiêu chí hoàn thành

- [ ] 10 case được chạy lại sau mỗi thay đổi quan trọng.
- [ ] Log không bao gồm raw secret và có thể tra theo request id.

**Checkpoint:** Người học cần trình bày được dữ liệu đầu vào, biến đổi hoặc hành động chính, đầu ra quan sát được và tình huống thất bại của phần này. Nếu chưa chứng minh được bằng lệnh chạy, ảnh chụp, test hoặc bảng so sánh, chưa nên đánh dấu hoàn tất.

## 8. Lỗi thường gặp và cách tự debug

1. Đừng dùng chỉ một test câu hỏi đúng để chứng minh grounding.

2. Đừng dùng thời gian tiết kiệm dự kiến như kết quả pilot đã xác nhận.

Khi gặp lỗi, hãy thu nhỏ tình huống về một input cụ thể, kiểm tra log/request id, xác nhận từng lớp độc lập và chỉ sửa một giả thuyết tại một thời điểm. Cách làm này giúp phân biệt sai dữ liệu, sai hợp đồng API và sai cấu hình môi trường.

## 9. Bài tập ứng dụng

Viết test matrix 10 câu hỏi × 4 tiêu chí và tạo issue backlog cho những case chưa đạt.

**Sản phẩm nộp:** một README ngắn mô tả cách chạy, dữ liệu/case thử, bằng chứng đã kiểm tra và tối thiểu một tình huống lỗi được xử lý. Nếu thực hành với tài khoản thật, loại bỏ mọi secret và dữ liệu nhạy cảm khỏi bản nộp.

## 10. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Tại sao cần bộ câu hỏi chuẩn?

A. Để so chất lượng trước/sau một thay đổi.  
B. Theo dõi một lượt hỏi xuyên các dịch vụ.  
C. Access token và secret thật.  
D. Có kiểm thử, giám sát và kế hoạch xử lý sự cố.  

**Đáp án: A.** Thử ngẫu hứng không tạo baseline.

**Câu 2.** Request id giúp gì?

A. Access token và secret thật.  
B. Có kiểm thử, giám sát và kế hoạch xử lý sự cố.  
C. Quan sát nhóm pilot so với cách làm việc trước.  
D. Theo dõi một lượt hỏi xuyên các dịch vụ.  

**Đáp án: D.** Hữu ích khi debug lỗi ngẫu nhiên.

**Câu 3.** Log gì là rủi ro?

A. Có kiểm thử, giám sát và kế hoạch xử lý sự cố.  
B. Quan sát nhóm pilot so với cách làm việc trước.  
C. Access token và secret thật.  
D. Để so chất lượng trước/sau một thay đổi.  

**Đáp án: C.** Lộ log có thể trở thành lộ quyền.

**Câu 4.** Readiness khác chức năng chạy được ở điểm nào?

A. Quan sát nhóm pilot so với cách làm việc trước.  
B. Có kiểm thử, giám sát và kế hoạch xử lý sự cố.  
C. Để so chất lượng trước/sau một thay đổi.  
D. Theo dõi một lượt hỏi xuyên các dịch vụ.  

**Đáp án: B.** Người dùng thật tạo tình huống ngoài happy path.

**Câu 5.** Đo tiết kiệm thời gian bằng cách nào?

A. Quan sát nhóm pilot so với cách làm việc trước.  
B. Để so chất lượng trước/sau một thay đổi.  
C. Theo dõi một lượt hỏi xuyên các dịch vụ.  
D. Access token và secret thật.  

**Đáp án: A.** Không có dữ liệu thì không thể khẳng định KPI.

## 11. Tổng kết

Bài học tập trung vào **Kiểm thử smoke, logging và tiêu chí pilot** như một mắt xích của Document Copilot. Giá trị quan trọng nhất không chỉ là chạy được một chức năng mà còn là lý giải được thiết kế, truy vết được dữ liệu và kiểm chứng bằng trường hợp thực tế.

**Mốc học video:** [2:50:17](https://www.youtube.com/watch?v=qF5il_9IwME&t=10217s) — 2:59:50.
