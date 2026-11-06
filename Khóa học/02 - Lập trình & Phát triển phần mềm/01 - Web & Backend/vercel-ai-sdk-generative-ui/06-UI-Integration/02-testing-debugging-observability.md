# Debugging, kiểm thử và quan sát hệ thống Generative UI

> **Loại bài:** lesson · **Chuyên đề:** Module 06 — Tích hợp React UI và chất lượng

## 1. Tóm tắt

Để ứng dụng dễ tin cậy, cần kiểm tra riêng khả năng chọn tool của LLM, validation, nghiệp vụ, streaming protocol và component rendering. Test giao diện đẹp chưa đủ nếu tool không đúng hoặc dữ liệu bị sai.

## 2. Mục tiêu học tập

- Thiết kế test matrix cho các tool và UI states.
- Nhận diện lỗi cấu hình streaming/version phổ biến.
- Đề xuất logging bảo vệ dữ liệu nhạy cảm.

## 3. Bốn lớp cần kiểm thử

**Schema tests** kiểm tra input hợp lệ. **Tool tests** dùng mock backend để kiểm tra output và lỗi. **Conversation tests** kiểm tra model chọn đúng tool ở nhiều ngữ cảnh. **UI integration tests** kiểm tra React render loading/ready/error/empty và hoạt động keyboard. Các lớp này bổ sung cho nhau: một schema hoàn hảo không bảo đảm model chọn tool đúng.

## 4. Ma trận kiểm thử

| Ca | Input | Kỳ vọng |
| --- | --- | --- |
| Hello | “Chào bạn” | Text, không cần tool |
| Grid đầy đủ | “2 hàng, 3 cột” | drawGrid 2×3 |
| Grid thiếu | “Vẽ lưới” | Hỏi thêm/hiện form |
| Grid sai | rows=-3 | Reject |
| Wallet no auth | “Ví của tôi” | Yêu cầu đăng nhập |
| Airdrop rỗng | ecosystem không có dữ liệu | Empty state |
| ABI read | `balanceOf(view)` | Form chỉ đọc |
| ABI write | `transfer(nonpayable)` | Review, không auto-send |
| Stream break | Network abort | Hiển thị stop/error hợp lý |

## 5. Cách debug theo điểm ranh giới

1. UI không gửi? Kiểm tra form `onSubmit`, trạng thái disabled và network tab.
2. Endpoint không nhận? Kiểm tra đường `/api/chat`, phương thức POST, HTTP status và body JSON.
3. Model không gọi tool? Kiểm tra `description`, system instruction và tool availability, không vội ép keywords.
4. Tool có call nhưng không render? Kiểm tra `message.parts`, `part.type`, `part.state` và mapping component.
5. Component lỗi? Kiểm tra kết quả parse Zod, optional fields, empty arrays và responsive constraints.
6. Stream treo? Kiểm tra stream completion, client abort và nhánh error, nhất là với RSC `done()`.

## 6. Observability và bảo mật log

Mỗi request nên có request ID, thời gian xử lý, tên tool, trạng thái và latency. Đừng ghi API key, seed phrase, private wallet data hoặc prompt chứa thông tin bí mật vào log công khai. Có thể log inputs ở mức đã redaction và giới hạn retention theo chính sách. Khi lỗi, UI hiển thị câu đơn giản; server giữ chi tiết kỹ thuật ở hệ thống log bảo vệ.

## 7. Kiểm thử bằng unit test đơn giản

```ts
import { z } from 'zod';
const Grid = z.object({ rows: z.number().int().min(1).max(8),
  columns: z.number().int().min(1).max(8) });

console.assert(Grid.safeParse({ rows: 2, columns: 3 }).success);
console.assert(!Grid.safeParse({ rows: -1, columns: 3 }).success);
console.assert(!Grid.safeParse({ rows: 2.5, columns: 3 }).success);
```

Trong dự án thực tế, nên dùng test runner để ghi nhận kết quả và tự động chạy trong CI thay vì chỉ `console.assert`.

## 8. Thực hành và kiểm tra

**Lab:** Chạy 9 case trong test matrix, ghi `expected tool`, `actual tool`, `expected UI` và lỗi. Chọn một lỗi rồi debug từ network → backend → tool → UI. **Deliverable:** bảng kết quả và nguyên nhân gốc.

## 9. Câu hỏi ôn tập

### Câu 1

Có schema test rồi có cần test model chọn tool không?

A. Chỉ khi dùng CSS  
B. Chỉ cần screenshot
C. Không  
D. Có, đó là lớp lỗi khác  

**Đáp án:** D.

**Giải thích:** Schema kiểm tra input nhưng không kiểm tra routing ngữ nghĩa.

### Câu 2

Khi tool chạy mà UI không hiện, nên kiểm tra đầu tiên trường nào?

A. message.parts và part.state  
B. API key public  
C. Meta tags  
D. CSS only

**Đáp án:** A.

**Giải thích:** Tool results được truyền qua parts trong useChat.

### Câu 3

Log nào nên bị hạn chế hoặc che?

A. Tên tool  
B. Secret key/seed phrase  
C. Request ID  
D. Latency

**Đáp án:** B.

**Giải thích:** Thông tin bí mật không được lộ qua log.

### Câu 4

Lỗi “stream treo” với RSC có thể do gì?

A. CSS margin  
B. Thiếu title
C. Thiếu done()  
D. Sai favicon  

**Đáp án:** C.

**Giải thích:** Streamable UI cần báo hoàn tất đúng cách.

### Câu 5

Khi endpoint 404, điểm kiểm tra tốt nhất là?

A. Zod schema của ABI  
B. Đổi theme
C. Giá token  
D. Cây route và URL request  

**Đáp án:** D.

**Giải thích:** Route Handler file path quyết định endpoint.

## 10. Tổng kết

Để ứng dụng dễ tin cậy, cần kiểm tra riêng khả năng chọn tool của LLM, validation, nghiệp vụ, streaming protocol và component rendering. Test giao diện đẹp chưa đủ nếu tool không đúng hoặc dữ liệu bị sai.
