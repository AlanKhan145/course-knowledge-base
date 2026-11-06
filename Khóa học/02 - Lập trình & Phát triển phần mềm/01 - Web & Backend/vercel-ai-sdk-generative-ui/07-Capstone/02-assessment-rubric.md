# Đánh giá cuối khóa: Thiết kế Generative UI an toàn và mở rộng

> **Loại bài:** assessment · **Chuyên đề:** Module 07 — Capstone và đánh giá

## 1. Tóm tắt

Bài tổng kết yêu cầu vận dụng đồng thời kiến trúc, tool calling, schema, component renderer, streaming, UX và bảo mật. Không chỉ kiểm tra demo hoạt động, mà cần lý giải vì sao từng phần đặt đúng tầng hệ thống.

## 2. Mục tiêu học tập

- Đánh giá một kiến trúc Generative UI theo rubric.
- Thiết kế kế hoạch mở rộng từ grid đến donut chart, airdrop và ABI.
- Xác định các điều kiện an toàn trước production.

## 3. Đề bài cuối khóa

Xuất phát từ `Generative UI Lab` ở bài project, bổ sung **một** chức năng trực quan: Wallet Donut Chart (dùng mock USD), Airdrop Cards (dữ liệu demo có nhãn), hoặc ABI Preview (không gửi transaction). Giữ kiến trúc: model → tool inputSchema → backend execute → result → React component.

Phần nộp phải có sơ đồ và test cases. Với wallet, ghi rõ `mock`. Với airdrop, hiển thị nguồn/status. Với ABI, tách read và write và không cung cấp shortcut thực thi giao dịch.

## 4. Tiêu chí đánh giá (100 điểm)

| Hạng mục | Điểm | Minh chứng |
| --- | ---: | --- |
| Kiến trúc Core/UI/RSC và ranh giới client/server | 15 | Sơ đồ và giải thích |
| Tool description + Zod inputSchema | 20 | Code và negative tests |
| Streaming và xử lý message.parts | 15 | Ghi lại text/tool result |
| Component UX đủ ready/loading/error/empty | 15 | Screenshots hoặc video demo |
| Kiểm thử multi-turn và shortcut | 10 | Bảng test |
| Bảo mật dữ liệu và authz/approval | 15 | Threat checklist |
| Code rõ, README, không leak secrets | 10 | Repo / tài liệu |
| **Tổng** | **100** | |

## 5. Bài tự đánh giá theo kịch bản

1. User hỏi “Bạn là ai?”: Vì sao không nên dựng donut chart?
2. User hỏi “vẽ 3 cột”: Ứng dụng cần hỏi gì thêm?
3. User hỏi “giữ 2 hàng, đổi thành 4 cột”: Ngữ cảnh nào cần lưu?
4. Tool `getWalletBalances` bị timeout: Phân biệt “lỗi kết nối” và “ví không có tài sản” như thế nào?
5. Airdrop card trỏ đến URL lạ: Có thể hiển thị không? Cần bảo vệ gì?
6. ABI chứa `transfer`: Tại sao UI render form không đồng nghĩa quyền gửi transaction?
7. Người dùng nhập prompt yêu cầu “bỏ qua authorization”: Tầng nào vẫn bảo vệ dữ liệu?
8. Khi ứng dụng dùng RSC mẫu cũ, hãy mô tả tối thiểu ba thay đổi để chuyển sang AI SDK UI hiện đại.

## 6. Cấu trúc báo cáo nộp

```text
capstone/
  README.md         # mục tiêu, cách chạy, phiên bản/dependencies thực tế
  architecture.md   # sơ đồ dữ liệu, auth boundaries
  tests.md          # test cases và kết quả
  screenshots/      # các trạng thái giao diện
  src/              # Next.js project
```

Báo cáo phải tách rõ **đã triển khai** và **đề xuất thêm**. Không khẳng định đã kết nối blockchain thật khi chỉ dùng mock data hoặc giao diện đọc ABI.

## 7. Definition of Done và production gate

Một demo đạt khi stream chạy, tool chọn đúng cho các yêu cầu chính, schema chặn input vô lý, UI đủ trạng thái cơ bản và không lộ secret. Chuyển sang production còn cần authentication, authorization, rate limit, observability, persistence, input size limits, monitoring lỗi, chính sách chi phí và quy trình phê duyệt thao tác có side effects. Việc “đã gọi được LLM” chỉ là điểm khởi đầu, chưa phải bằng chứng an toàn.

## 8. Thực hành và kiểm tra

**Nhiệm vụ nộp:** Hoàn thành một trong ba chức năng mở rộng, 10 test cases và bản phân tích rủi ro một trang. **Đạt** khi được tối thiểu 70/100 điểm, không lỗi nghiêm trọng như lộ API key hoặc tự gửi transaction. **Xuất sắc** khi có kiểm thử nhiều lượt, fallback, và tách dữ liệu mock/real minh bạch.

## 9. Câu hỏi ôn tập

### Câu 1

Rubric nhấn mạnh điều gì hơn “giao diện đẹp”?

A. Chỉ tên project
B. Tool/schema, streaming, UX và bảo mật  
C. Số icon  
D. Chỉ animation  

**Đáp án:** B.

**Giải thích:** Đánh giá trải đều kiến trúc, correctness và safety.

### Câu 2

Một demo wallet dùng dữ liệu giả phải?

A. Tự định giá
B. Ẩn thông tin mock  
C. Gắn nhãn mock rõ ràng  
D. Hiện là số dư thật  

**Đáp án:** C.

**Giải thích:** Không làm người dùng hiểu sai dữ liệu giả là dữ liệu thật.

### Câu 3

Khi chuyển production, yêu cầu nào là bắt buộc?

A. Bỏ logging  
B. Cho AI thực thi mọi tool
C. Tắt auth  
D. Rate limit và authorization  

**Đáp án:** D.

**Giải thích:** Production cần kiểm soát truy cập, lạm dụng và hoạt động.

### Câu 4

Với ABI `transfer`, việc hiển thị form có tự động cho phép gửi transaction không?

A. Không, cần xác nhận và quyền  
B. Chỉ trên desktop  
C. Khi có chart
D. Có  

**Đáp án:** A.

**Giải thích:** Render UI khác với hành động có side effect.

### Câu 5

Ở câu “đổi thành 4 cột”, ứng dụng cần dữ liệu nào?

A. CSS theme
B. Ngữ cảnh lưới hiện tại  
C. API key của người khác  
D. Log trống  

**Đáp án:** B.

**Giải thích:** Multi-turn cần giữ/khôi phục thông số không đổi.

## 10. Tổng kết

Bài tổng kết yêu cầu vận dụng đồng thời kiến trúc, tool calling, schema, component renderer, streaming, UX và bảo mật. Không chỉ kiểm tra demo hoạt động, mà cần lý giải vì sao từng phần đặt đúng tầng hệ thống.
