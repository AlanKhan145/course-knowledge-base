# Bài 1. Phân tích nghiệp vụ và xác định phạm vi MVP

> **Module 02 — Yêu cầu khách hàng và dữ liệu SEC**  
> Thời điểm tham chiếu: [0:04:32](https://www.youtube.com/watch?v=qF5il_9IwME&t=272s).  
> Hình thức: bài học kết hợp thực hành.

## 1. Tóm tắt

Chuyển lời yêu cầu của một nhóm phân tích đầu tư thành user story, điều kiện nghiệm thu và ranh giới an toàn cho một Document Copilot.

## 2. Mục tiêu học tập

- Giải thích được cơ chế và lý do kỹ thuật của chủ đề **Phân tích nghiệp vụ và xác định phạm vi MVP**.
- Tự triển khai hoặc mô phỏng các bước thực hành và kiểm tra kết quả theo tiêu chí được nêu.
- Nhận diện các lỗi thiết kế/triển khai phổ biến và lựa chọn biện pháp xử lý có căn cứ.

## 3. Bối cảnh và vấn đề cần giải quyết

Driftwood Capital là công ty nghiên cứu đầu tư giả định phục vụ khách hàng tổ chức. Nhà phân tích mất thời gian đọc, sao chép và đối chiếu báo cáo công khai để lấy số liệu. Mục tiêu sản phẩm không phải tự động khuyến nghị mua bán mà là giảm việc lặp lại và đưa bằng chứng có thể kiểm tra vào quá trình nghiên cứu.

## 4. Kiến thức cốt lõi

### 4.1. User story và độ tin cậy

Một user story có thể viết: “Là nhà phân tích, tôi muốn hỏi thay đổi doanh thu của Apple theo năm và mở nguồn của từng số liệu để tự kiểm tra”. Đầu ra cần có câu trả lời, báo cáo, kỳ, công ty và liên kết đến vị trí gốc; hệ thống phải nói rõ khi không tìm đủ bằng chứng.

### 4.2. Phạm vi MVP

Trọng tâm: ứng dụng web nội bộ, đăng nhập bằng tài khoản được cấp, hỏi đáp corpus SEC đã nhập và lịch sử chat riêng của mỗi người. Không gồm giao dịch chứng khoán, tư vấn đầu tư, thanh toán, đa tenant, ứng dụng mobile hay đồng bộ tài liệu tự động.

### 4.3. Định nghĩa hoàn thành

Mục tiêu nghiệp vụ được nêu trong brief là để nhóm thí điểm sử dụng ứng dụng và tiết kiệm ít nhất ba giờ/tuần. Đây là kỳ vọng của dự án, không phải kết quả thực nghiệm đã kiểm chứng. Kỹ thuật cần kèm chỉ số riêng: độ chính xác citations, khả năng đăng nhập, độ ổn định và độ trễ.

## 5. Quy trình áp dụng từng bước

Các bước dưới đây là phương án thực hành để tái tạo và kiểm chứng các nguyên tắc đã học. Điều chỉnh tên file, biến môi trường và phiên bản dependency theo dự án của bạn.

**Bước 1.** Lập bảng stakeholder gồm nhà phân tích, quản trị viên và người vận hành.

**Bước 2.** Chuyển các tình huống “so sánh nhiều năm”, “đọc bảng”, “mở dẫn chứng” thành test case.

**Bước 3.** Gắn mỗi yêu cầu với một thành phần: auth, storage, retrieval, LLM, citation viewer.

**Bước 4.** Viết danh sách out-of-scope công khai để tránh feature creep.

## 6. Ví dụ minh họa

Ví dụ sau tập trung vào một nguyên lý triển khai. Đây là mã/giả mã dùng cho học tập, có thể cần bổ sung các thành phần vận hành và kiểm thử khi tích hợp vào repository thực tế.

```json
{
  "user_story": "Compare Apple revenue mix across years",
  "acceptance": [
    "Câu trả lời nêu rõ các năm và chỉ tiêu",
    "Mỗi dữ kiện chính có citation mở được",
    "Không đủ bằng chứng thì không đoán"
  ]
}
```

## 7. Kiểm tra kết quả và tiêu chí hoàn thành

- [ ] Có thể đối chiếu mỗi user story với một bài kiểm thử.
- [ ] Không có gợi ý mua/bán hoặc cam kết lợi nhuận trong đầu ra.

**Checkpoint:** Người học cần trình bày được dữ liệu đầu vào, biến đổi hoặc hành động chính, đầu ra quan sát được và tình huống thất bại của phần này. Nếu chưa chứng minh được bằng lệnh chạy, ảnh chụp, test hoặc bảng so sánh, chưa nên đánh dấu hoàn tất.

## 8. Lỗi thường gặp và cách tự debug

1. Đừng xem văn bản mượt là tiêu chí thành công nếu nguồn sai.

2. Không xem mục tiêu tiết kiệm thời gian là đã đạt khi chưa đo trên nhóm thí điểm.

Khi gặp lỗi, hãy thu nhỏ tình huống về một input cụ thể, kiểm tra log/request id, xác nhận từng lớp độc lập và chỉ sửa một giả thuyết tại một thời điểm. Cách làm này giúp phân biệt sai dữ liệu, sai hợp đồng API và sai cấu hình môi trường.

## 9. Bài tập ứng dụng

Lập tài liệu yêu cầu một trang gồm 5 user stories, 5 acceptance criteria và 5 điều chưa hỗ trợ.

**Sản phẩm nộp:** một README ngắn mô tả cách chạy, dữ liệu/case thử, bằng chứng đã kiểm tra và tối thiểu một tình huống lỗi được xử lý. Nếu thực hành với tài khoản thật, loại bỏ mọi secret và dữ liệu nhạy cảm khỏi bản nộp.

## 10. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Mục đích chính của Copilot là gì?

A. Giảm thời gian tổng hợp báo cáo và hỗ trợ kiểm chứng số liệu.  
B. Đề xuất giao dịch tự động.  
C. Chỉ tiêu kỳ vọng của dự án cần xác thực qua pilot.  
D. Có thể truy ngược đến bằng chứng.  

**Đáp án: A.** Sản phẩm hỗ trợ nghiên cứu chứ không thay quyết định đầu tư.

**Câu 2.** Tính năng nào nằm ngoài MVP?

A. Chỉ tiêu kỳ vọng của dự án cần xác thực qua pilot.  
B. Có thể truy ngược đến bằng chứng.  
C. Để giữ phạm vi, ngân sách và kỳ vọng thống nhất.  
D. Đề xuất giao dịch tự động.  

**Đáp án: D.** Đây không phải hệ thống khuyến nghị đầu tư.

**Câu 3.** Mốc ba giờ/tuần có ý nghĩa gì?

A. Có thể truy ngược đến bằng chứng.  
B. Để giữ phạm vi, ngân sách và kỳ vọng thống nhất.  
C. Chỉ tiêu kỳ vọng của dự án cần xác thực qua pilot.  
D. Giảm thời gian tổng hợp báo cáo và hỗ trợ kiểm chứng số liệu.  

**Đáp án: C.** Không phải con số đã chứng minh.

**Câu 4.** Yêu cầu nào quan trọng nhất với câu trả lời số liệu?

A. Để giữ phạm vi, ngân sách và kỳ vọng thống nhất.  
B. Có thể truy ngược đến bằng chứng.  
C. Giảm thời gian tổng hợp báo cáo và hỗ trợ kiểm chứng số liệu.  
D. Đề xuất giao dịch tự động.  

**Đáp án: B.** Sai lệch nhỏ có thể kéo theo quyết định phân tích sai.

**Câu 5.** Vì sao ghi out-of-scope?

A. Để giữ phạm vi, ngân sách và kỳ vọng thống nhất.  
B. Giảm thời gian tổng hợp báo cáo và hỗ trợ kiểm chứng số liệu.  
C. Đề xuất giao dịch tự động.  
D. Chỉ tiêu kỳ vọng của dự án cần xác thực qua pilot.  

**Đáp án: A.** Phạm vi rõ ràng giúp ưu tiên kỹ thuật.

## 11. Tổng kết

Bài học tập trung vào **Phân tích nghiệp vụ và xác định phạm vi MVP** như một mắt xích của Document Copilot. Giá trị quan trọng nhất không chỉ là chạy được một chức năng mà còn là lý giải được thiết kế, truy vết được dữ liệu và kiểm chứng bằng trường hợp thực tế.

**Mốc học video:** [0:04:32](https://www.youtube.com/watch?v=qF5il_9IwME&t=272s) — 0:18:45.
