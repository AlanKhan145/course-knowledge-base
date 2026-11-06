# Bài 1. Lập kế hoạch kỹ thuật theo milestone và checkpoint

> **Module 04 — Kế hoạch và cấu hình môi trường**  
> Thời điểm tham chiếu: [0:28:34](https://www.youtube.com/watch?v=qF5il_9IwME&t=1714s).  
> Hình thức: bài học kết hợp thực hành.

## 1. Tóm tắt

Biến kiến trúc thành danh sách công việc có thứ tự, có phụ thuộc và có tiêu chí kiểm chứng sau mỗi bước.

## 2. Mục tiêu học tập

- Giải thích được cơ chế và lý do kỹ thuật của chủ đề **Lập kế hoạch kỹ thuật theo milestone và checkpoint**.
- Tự triển khai hoặc mô phỏng các bước thực hành và kiểm tra kết quả theo tiêu chí được nêu.
- Nhận diện các lỗi thiết kế/triển khai phổ biến và lựa chọn biện pháp xử lý có căn cứ.

## 3. Bối cảnh và vấn đề cần giải quyết

Không có thứ tự duy nhất cho mọi dự án. Một lộ trình hợp lý ở đây là dựng môi trường và database trước, sau đó auth/chat để tạo xương sống ứng dụng, tiếp đến ingestion–retrieval–grounding, cuối cùng hoàn thiện UI và deploy. Điều cốt yếu là mỗi milestone có một trạng thái kiểm tra được và giảm rủi ro cho bước kế tiếp.

## 4. Kiến thức cốt lõi

### 4.1. To-do là bản đồ công việc

Tạo `to-dos.md` chia thành phase: foundation; database; identity; ingestion; retrieval; orchestration; integration; pilot readiness; deployment. Mỗi mục nên có owner, dependency, expected output và phép test.

### 4.2. Định nghĩa checkpoint

Thay vì “xây database” hãy ghi “migration chạy thành công trên DB rỗng và có thể rollback”. Thay vì “chat UI” ghi “người dùng A không xem được lịch sử của B, tin nhắn tải lại sau refresh”.

### 4.3. Điểm dừng để review

Sau setup: thử kết nối DB. Sau auth: thử unauthorized/authorized. Sau ingestion: đối chiếu Markdown với HTML. Sau retrieval: truy vấn có ground truth. Sau deploy: smoke test trực tiếp trên domain.

## 5. Quy trình áp dụng từng bước

Các bước dưới đây là phương án thực hành để tái tạo và kiểm chứng các nguyên tắc đã học. Điều chỉnh tên file, biến môi trường và phiên bản dependency theo dự án của bạn.

**Bước 1.** Chia danh sách công việc lớn thành tasks không phụ thuộc nhau quá mức.

**Bước 2.** Mỗi task ghi file đầu ra hoặc endpoint cụ thể.

**Bước 3.** Đặt tiêu chí Go/No-Go trước khi sang giai đoạn tiếp theo.

**Bước 4.** Dùng Git commit đánh dấu mốc ổn định và log lỗi quan trọng.

## 6. Ví dụ minh họa

Ví dụ sau tập trung vào một nguyên lý triển khai. Đây là mã/giả mã dùng cho học tập, có thể cần bổ sung các thành phần vận hành và kiểm thử khi tích hợp vào repository thực tế.

```markdown
- [ ] Foundation: `uv sync` và `pnpm install` hoạt động
- [ ] DB: migration nâng cấp sạch
- [ ] Auth: token hợp lệ được chấp nhận
- [ ] Ingestion: chunk có source metadata
- [ ] Retrieval: câu hỏi mẫu có evidence
- [ ] Deployment: domain thật vượt smoke test
```

## 7. Kiểm tra kết quả và tiêu chí hoàn thành

- [ ] Các bước có thứ tự phụ thuộc rõ ràng.
- [ ] Checklist có thể giao cho một người khác chạy độc lập.

**Checkpoint:** Người học cần trình bày được dữ liệu đầu vào, biến đổi hoặc hành động chính, đầu ra quan sát được và tình huống thất bại của phần này. Nếu chưa chứng minh được bằng lệnh chạy, ảnh chụp, test hoặc bảng so sánh, chưa nên đánh dấu hoàn tất.

## 8. Lỗi thường gặp và cách tự debug

1. Không để agent tự đánh dấu Done khi chưa thử kết quả.

2. Không triển khai auth hoặc ingestion dựa trên schema chưa ổn định.

Khi gặp lỗi, hãy thu nhỏ tình huống về một input cụ thể, kiểm tra log/request id, xác nhận từng lớp độc lập và chỉ sửa một giả thuyết tại một thời điểm. Cách làm này giúp phân biệt sai dữ liệu, sai hợp đồng API và sai cấu hình môi trường.

## 9. Bài tập ứng dụng

Lập bảng 8 phase với phụ thuộc và một phép kiểm chứng tối thiểu cho mỗi phase.

**Sản phẩm nộp:** một README ngắn mô tả cách chạy, dữ liệu/case thử, bằng chứng đã kiểm tra và tối thiểu một tình huống lỗi được xử lý. Nếu thực hành với tài khoản thật, loại bỏ mọi secret và dữ liệu nhạy cảm khỏi bản nộp.

## 10. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Checkpoint tốt nhất cho database?

A. Migration chạy được và có phương án rollback.  
B. Theo dõi phụ thuộc và tiêu chí hoàn thành.  
C. Khó kiểm thử, review và khoanh vùng sai.  
D. Corpus đã được ingest và index.  

**Đáp án: A.** Từ “đã tạo bảng” chưa đủ để chứng minh an toàn.

**Câu 2.** Lợi ích của to-dos.md?

A. Khó kiểm thử, review và khoanh vùng sai.  
B. Corpus đã được ingest và index.  
C. Quyết định có đủ điều kiện chuyển giai đoạn.  
D. Theo dõi phụ thuộc và tiêu chí hoàn thành.  

**Đáp án: D.** Nó giúp kiểm soát dự án nhiều lớp.

**Câu 3.** Vì sao tránh task quá lớn?

A. Corpus đã được ingest và index.  
B. Quyết định có đủ điều kiện chuyển giai đoạn.  
C. Khó kiểm thử, review và khoanh vùng sai.  
D. Migration chạy được và có phương án rollback.  

**Đáp án: C.** Task nhỏ tạo phản hồi sớm.

**Câu 4.** Giai đoạn nào nên có trước retrieval?

A. Quyết định có đủ điều kiện chuyển giai đoạn.  
B. Corpus đã được ingest và index.  
C. Migration chạy được và có phương án rollback.  
D. Theo dõi phụ thuộc và tiêu chí hoàn thành.  

**Đáp án: B.** Không thể retrieve dữ liệu chưa có.

**Câu 5.** Go/No-Go dùng để làm gì?

A. Quyết định có đủ điều kiện chuyển giai đoạn.  
B. Migration chạy được và có phương án rollback.  
C. Theo dõi phụ thuộc và tiêu chí hoàn thành.  
D. Khó kiểm thử, review và khoanh vùng sai.  

**Đáp án: A.** Tránh lỗi nền tảng kéo dài sang production.

## 11. Tổng kết

Bài học tập trung vào **Lập kế hoạch kỹ thuật theo milestone và checkpoint** như một mắt xích của Document Copilot. Giá trị quan trọng nhất không chỉ là chạy được một chức năng mà còn là lý giải được thiết kế, truy vết được dữ liệu và kiểm chứng bằng trường hợp thực tế.

**Mốc học video:** [0:28:34](https://www.youtube.com/watch?v=qF5il_9IwME&t=1714s) — 0:43:42.
