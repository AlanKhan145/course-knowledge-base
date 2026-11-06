# Bài 1. Thiết kế trải nghiệm ứng dụng chat nội bộ

> **Module 10 — Hoàn thiện UI và readiness cho pilot**  
> Thời điểm tham chiếu: [2:50:17](https://www.youtube.com/watch?v=qF5il_9IwME&t=10217s).  
> Hình thức: bài học kết hợp thực hành.

## 1. Tóm tắt

Đánh giá và hoàn thiện màn hình theo các use case thực tế thay vì chỉ làm đẹp giao diện.

## 2. Mục tiêu học tập

- Giải thích được cơ chế và lý do kỹ thuật của chủ đề **Thiết kế trải nghiệm ứng dụng chat nội bộ**.
- Tự triển khai hoặc mô phỏng các bước thực hành và kiểm tra kết quả theo tiêu chí được nêu.
- Nhận diện các lỗi thiết kế/triển khai phổ biến và lựa chọn biện pháp xử lý có căn cứ.

## 3. Bối cảnh và vấn đề cần giải quyết

Giao diện cần đủ thân thiện để các nhà phân tích sử dụng liên tục: sidebar lịch sử, chủ đề trò chuyện, header, ô nhập co giãn, markdown rendering, citation markers, panel nguồn và trạng thái công việc của agent. Dùng shadcn/ui và các thành phần chat có thể tăng tốc scaffold nhưng phải kiểm tra accessibility và tình huống dữ liệu thật.

## 4. Kiến thức cốt lõi

### 4.1. Thiết kế theo luồng

Kiểm tra từ đăng nhập → tạo chat → đặt câu hỏi → chờ → xem citation → mở nguồn → quay lại chat → đăng xuất. Bất kỳ chỗ tắc nào giữa các bước đều ảnh hưởng hiệu quả hơn việc thay đổi màu sắc.

### 4.2. Khả năng đọc

Phân cấp typography; có trạng thái empty; message content không bị tràn; text dài và bảng cuộn hợp lý; citation gần claim. Dùng skeleton hay indicator khi cần nhưng không cản thao tác đọc chat cũ.

### 4.3. Độ tin cậy UX

Không khóa toàn app khi một answer đang chạy. Có timeout, retry, copy response, thông báo không đủ bằng chứng và phân biệt error từ browser/API/LLM. Không “tô đẹp” câu trả lời thiếu citations thành một đáp án chắc chắn.

## 5. Quy trình áp dụng từng bước

Các bước dưới đây là phương án thực hành để tái tạo và kiểm chứng các nguyên tắc đã học. Điều chỉnh tên file, biến môi trường và phiên bản dependency theo dự án của bạn.

**Bước 1.** Vẽ checklist các trạng thái của một message và mỗi màn hình.

**Bước 2.** Kiểm tra hiển thị bảng Markdown, đoạn dài, URL và citations.

**Bước 3.** Thử bằng bàn phím: tab, enter gửi, shift+enter xuống dòng, Escape đóng panel (nếu thiết kế).

**Bước 4.** Đánh giá layout ở viewport desktop thông dụng và màn hình hẹp.

## 6. Ví dụ minh họa

Ví dụ sau tập trung vào một nguyên lý triển khai. Đây là mã/giả mã dùng cho học tập, có thể cần bổ sung các thành phần vận hành và kiểm thử khi tích hợp vào repository thực tế.

```text
Login → Chat list → New chat → Ask
                           ↓
                   Search / Read / Verify
                           ↓
                 Answer + citation markers
                           ↓
                   Evidence side panel
```

## 7. Kiểm tra kết quả và tiêu chí hoàn thành

- [ ] Mọi thao tác chính có trạng thái phản hồi rõ ràng.
- [ ] Người dùng kiểm tra được bằng chứng mà không mất chat đang đọc.

**Checkpoint:** Người học cần trình bày được dữ liệu đầu vào, biến đổi hoặc hành động chính, đầu ra quan sát được và tình huống thất bại của phần này. Nếu chưa chứng minh được bằng lệnh chạy, ảnh chụp, test hoặc bảng so sánh, chưa nên đánh dấu hoàn tất.

## 8. Lỗi thường gặp và cách tự debug

1. Không để UI phụ thuộc vào mẫu dữ liệu ngắn và đẹp.

2. Không mặc định mọi answer có citation; thiếu nguồn phải có trạng thái riêng.

Khi gặp lỗi, hãy thu nhỏ tình huống về một input cụ thể, kiểm tra log/request id, xác nhận từng lớp độc lập và chỉ sửa một giả thuyết tại một thời điểm. Cách làm này giúp phân biệt sai dữ liệu, sai hợp đồng API và sai cấu hình môi trường.

## 9. Bài tập ứng dụng

Chọn 5 UX issues, ghi mức độ tác động, ảnh chụp trước/sau và tiêu chí hoàn thành.

**Sản phẩm nộp:** một README ngắn mô tả cách chạy, dữ liệu/case thử, bằng chứng đã kiểm tra và tối thiểu một tình huống lỗi được xử lý. Nếu thực hành với tài khoản thật, loại bỏ mọi secret và dữ liệu nhạy cảm khỏi bản nộp.

## 10. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Ưu tiên UX của Document Copilot?

A. Làm rõ quá trình hỏi đáp và kiểm chứng nguồn.  
B. Giải thích hành động đầu tiên khi chưa có chat/dữ liệu.  
C. Bảng, code/đoạn dài và liên kết.  
D. Hiển thị tiến trình, timeout và cách thử lại.  

**Đáp án: A.** Ứng dụng là công cụ công việc có yêu cầu tin cậy.

**Câu 2.** Vì sao cần empty state?

A. Bảng, code/đoạn dài và liên kết.  
B. Hiển thị tiến trình, timeout và cách thử lại.  
C. Gần claim mà nó hỗ trợ.  
D. Giải thích hành động đầu tiên khi chưa có chat/dữ liệu.  

**Đáp án: D.** Đây là trạng thái người dùng mới thường gặp.

**Câu 3.** Thử Markdown cần chú ý gì?

A. Hiển thị tiến trình, timeout và cách thử lại.  
B. Gần claim mà nó hỗ trợ.  
C. Bảng, code/đoạn dài và liên kết.  
D. Làm rõ quá trình hỏi đáp và kiểm chứng nguồn.  

**Đáp án: C.** Content thực tế khác mock đơn giản.

**Câu 4.** Khi API chậm?

A. Gần claim mà nó hỗ trợ.  
B. Hiển thị tiến trình, timeout và cách thử lại.  
C. Làm rõ quá trình hỏi đáp và kiểm chứng nguồn.  
D. Giải thích hành động đầu tiên khi chưa có chat/dữ liệu.  

**Đáp án: B.** Spinner vô hạn gây mất tin tưởng.

**Câu 5.** Citation marker nên ở đâu?

A. Gần claim mà nó hỗ trợ.  
B. Làm rõ quá trình hỏi đáp và kiểm chứng nguồn.  
C. Giải thích hành động đầu tiên khi chưa có chat/dữ liệu.  
D. Bảng, code/đoạn dài và liên kết.  

**Đáp án: A.** Dễ đối chiếu bằng chứng hơn danh sách nguồn mơ hồ.

## 11. Tổng kết

Bài học tập trung vào **Thiết kế trải nghiệm ứng dụng chat nội bộ** như một mắt xích của Document Copilot. Giá trị quan trọng nhất không chỉ là chạy được một chức năng mà còn là lý giải được thiết kế, truy vết được dữ liệu và kiểm chứng bằng trường hợp thực tế.

**Mốc học video:** [2:50:17](https://www.youtube.com/watch?v=qF5il_9IwME&t=10217s) — 2:59:50.
