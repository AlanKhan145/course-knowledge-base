# Bài 2. Thiết kế màn hình hội thoại, lịch sử và API contract

> **Module 06 — React frontend, Auth và Chat**  
> Thời điểm tham chiếu: [1:08:15](https://www.youtube.com/watch?v=qF5il_9IwME&t=4095s).  
> Hình thức: bài học kết hợp thực hành.

## 1. Tóm tắt

Định nghĩa trải nghiệm chat có thể lưu/tải lại, xử lý trạng thái lỗi và đảm bảo quyền riêng tư theo người dùng.

## 2. Mục tiêu học tập

- Giải thích được cơ chế và lý do kỹ thuật của chủ đề **Thiết kế màn hình hội thoại, lịch sử và API contract**.
- Tự triển khai hoặc mô phỏng các bước thực hành và kiểm tra kết quả theo tiêu chí được nêu.
- Nhận diện các lỗi thiết kế/triển khai phổ biến và lựa chọn biện pháp xử lý có căn cứ.

## 3. Bối cảnh và vấn đề cần giải quyết

Giao diện chat tối thiểu cần sidebar cuộc hội thoại, nút tạo chat mới, danh sách message, input, trạng thái đang xử lý và logout. Backend giữ nguồn dữ liệu chuẩn cho lịch sử hội thoại; frontend chỉ là client. Một conversation ID phải được kiểm tra owner ở mọi lần đọc/ghi.

## 4. Kiến thức cốt lõi

### 4.1. Contract hội thoại

Các endpoint minh họa: `GET /conversations`, `POST /conversations`, `GET /conversations/{id}/messages`, `POST /conversations/{id}/messages`. Response của message nên có `role`, `content`, `citations`, `created_at`, `status`, và id ổn định.

### 4.2. State cần tách

Có state của session, current conversation, message list, draft text và request state. Chú ý race condition khi đổi chat trong lúc request trước chưa kết thúc; nội dung không được “chảy” từ chat này sang chat khác.

### 4.3. Lịch sử chat là dữ liệu nhạy cảm

Truy vấn conversation theo owner_id từ token; không lấy tất cả rồi lọc ở client. Index cho owner + updated_at để sidebar tải nhanh; phân trang khi lịch sử dài.

## 5. Quy trình áp dụng từng bước

Các bước dưới đây là phương án thực hành để tái tạo và kiểm chứng các nguyên tắc đã học. Điều chỉnh tên file, biến môi trường và phiên bản dependency theo dự án của bạn.

**Bước 1.** Vẽ wireframe sidebar/chat pane và các trạng thái empty/loading/error.

**Bước 2.** Dựng mock API responses trước để hoàn thiện model TypeScript.

**Bước 3.** Kết nối API có Authorization và lưu conversation/messages thực.

**Bước 4.** Thử người dùng B truy cập conversation ID của A và xác minh API từ chối.

## 6. Ví dụ minh họa

Ví dụ sau tập trung vào một nguyên lý triển khai. Đây là mã/giả mã dùng cho học tập, có thể cần bổ sung các thành phần vận hành và kiểm thử khi tích hợp vào repository thực tế.

```typescript
type Citation = { chunkId: string; title: string; sourceUrl: string };
type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  citations: Citation[];
  status: "pending" | "complete" | "error";
};
```

## 7. Kiểm tra kết quả và tiêu chí hoàn thành

- [ ] Reload trang không làm mất nội dung đã lưu.
- [ ] Đổi conversation giữa request không hiển thị nhầm kết quả.

**Checkpoint:** Người học cần trình bày được dữ liệu đầu vào, biến đổi hoặc hành động chính, đầu ra quan sát được và tình huống thất bại của phần này. Nếu chưa chứng minh được bằng lệnh chạy, ảnh chụp, test hoặc bảng so sánh, chưa nên đánh dấu hoàn tất.

## 8. Lỗi thường gặp và cách tự debug

1. Không lọc quyền owner chỉ trên frontend.

2. Không coi một message lỗi là đã hoàn tất; cần trạng thái retry rõ ràng.

Khi gặp lỗi, hãy thu nhỏ tình huống về một input cụ thể, kiểm tra log/request id, xác nhận từng lớp độc lập và chỉ sửa một giả thuyết tại một thời điểm. Cách làm này giúp phân biệt sai dữ liệu, sai hợp đồng API và sai cấu hình môi trường.

## 9. Bài tập ứng dụng

Tạo hai account test; ghi 2 hội thoại mỗi account và kiểm thử isolation sau logout/login.

**Sản phẩm nộp:** một README ngắn mô tả cách chạy, dữ liệu/case thử, bằng chứng đã kiểm tra và tối thiểu một tình huống lỗi được xử lý. Nếu thực hành với tài khoản thật, loại bỏ mọi secret và dữ liệu nhạy cảm khỏi bản nộp.

## 10. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Dữ liệu chuẩn cho lịch sử nên nằm ở đâu?

A. Database phía server.  
B. Thuộc về user của token hợp lệ.  
C. Phân biệt đang chạy, hoàn tất và lỗi.  
D. Giảm lượng dữ liệu tải ở sidebar.  

**Đáp án: A.** Frontend state bị mất khi refresh và không đáng tin về quyền.

**Câu 2.** Conversation ID phải được kiểm tra điều gì?

A. Phân biệt đang chạy, hoàn tất và lỗi.  
B. Giảm lượng dữ liệu tải ở sidebar.  
C. Kết quả request cũ hiển thị trong hội thoại mới.  
D. Thuộc về user của token hợp lệ.  

**Đáp án: D.** Biết id không đồng nghĩa có quyền truy cập.

**Câu 3.** Tác dụng của status trong message?

A. Giảm lượng dữ liệu tải ở sidebar.  
B. Kết quả request cũ hiển thị trong hội thoại mới.  
C. Phân biệt đang chạy, hoàn tất và lỗi.  
D. Database phía server.  

**Đáp án: C.** UX tốt phản ánh vòng đời request.

**Câu 4.** Vì sao phân trang lịch sử?

A. Kết quả request cũ hiển thị trong hội thoại mới.  
B. Giảm lượng dữ liệu tải ở sidebar.  
C. Database phía server.  
D. Thuộc về user của token hợp lệ.  

**Đáp án: B.** Danh sách dài không nên truyền hết mỗi lần.

**Câu 5.** Lỗi race condition khi chuyển chat biểu hiện ra sao?

A. Kết quả request cũ hiển thị trong hội thoại mới.  
B. Database phía server.  
C. Thuộc về user của token hợp lệ.  
D. Phân biệt đang chạy, hoàn tất và lỗi.  

**Đáp án: A.** Phải gắn response với conversation ban đầu.

## 11. Tổng kết

Bài học tập trung vào **Thiết kế màn hình hội thoại, lịch sử và API contract** như một mắt xích của Document Copilot. Giá trị quan trọng nhất không chỉ là chạy được một chức năng mà còn là lý giải được thiết kế, truy vết được dữ liệu và kiểm chứng bằng trường hợp thực tế.

**Mốc học video:** [1:08:15](https://www.youtube.com/watch?v=qF5il_9IwME&t=4095s) — 1:34:49.
