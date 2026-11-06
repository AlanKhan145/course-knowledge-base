# C1Chat và C1Component: chọn đúng mức tích hợp

**Loại bài:** Bài học thực hành · **Mục tiêu:** Triển khai được cách render chatbot dựng sẵn và renderer riêng; giải thích đánh đổi giữa tốc độ và quyền tùy chỉnh.

**Bối cảnh:** Khóa học Generative UI với Next.js và Thesys C1. Nội dung C1 dùng API legacy; với dự án mới, xem OpenUI ở https://www.openui.com/docs.

## 1. Hai mô hình tích hợp
**`C1Chat`** là chat có sẵn gồm lịch sử, composer và trạng thái tải. **`C1Component`** chỉ phụ trách hiển thị một phản hồi C1 thành UI; ứng dụng tự sở hữu khung chat, lưu state và gọi API. Vì thế, một dashboard có sidebar riêng thường cần `C1Component`, còn prototype chat mới có thể bắt đầu bằng `C1Chat`.

## 2. Tích hợp C1Chat nhanh
```tsx
"use client";
import { C1Chat } from "@thesysai/genui-sdk";
import "@crayonai/react-ui/styles/index.css";

export default function Home() {
  return <C1Chat apiUrl="/api/chat" />;
}
```
Đây là ví dụ theo SDK C1 legacy, giả sử `/api/chat` triển khai đúng contract. Chế độ mặc định sử dụng conversation store trong bộ nhớ nên lịch sử có thể mất khi tải lại trang. Không dùng làm lưu trữ production.

## 3. Dùng renderer với ứng dụng có sẵn
Cài SDK theo tài liệu:
```bash
npm install @thesysai/genui-sdk @crayonai/react-ui
```
Ví dụ component nhận chuỗi DSL đã lấy từ API:
```tsx
"use client";
import { C1Component, ThemeProvider } from "@thesysai/genui-sdk";
import "@crayonai/react-ui/styles/index.css";

type Props = { c1Response: string };
export function GeneratedAnswer({ c1Response }: Props) {
  return (
    <ThemeProvider>
      <C1Component c1Response={c1Response} />
    </ThemeProvider>
  );
}
```
`ThemeProvider` là nơi cấp theme khi dùng `C1Component` độc lập. Component này **không tự gọi API**; bạn phải tự gọi API rồi đưa response vào prop `c1Response`.

## 4. Bảng quyết định
| Đặc điểm | C1Chat | C1Component |
| --- | --- | --- |
| Composer/chat shell | Có sẵn | Tự xây dựng |
| Hỗ trợ hội thoại | Có | Tự quản lý |
| Render C1 UI | Có | Có |
| Tích hợp dashboard đã có | Cần tùy chỉnh layout | Linh hoạt |
| Độ phức tạp ban đầu | Thấp | Cao hơn |

## 5. Bài thực hành
Tạo một trang chỉ chứa `C1Chat`. Sau đó làm trang thứ hai có header và sidebar riêng, ở vùng chính render `GeneratedAnswer` từ API standalone. So sánh số dòng mã bạn phải tự quản lý, không so sánh chỉ dựa vào hình thức.

## 6. Tổng kết
Dùng `C1Chat` nếu cần nhanh một ứng dụng chat, dùng `C1Component` nếu bạn phải giữ UI/UX hiện có. Cả hai vẫn cần backend chuẩn.

## 7. Câu hỏi ôn tập

**Câu 1.** C1Chat giúp giảm công gì nhiều nhất?

A. Thiết kế compiler  
B. Xây chat shell, composer, loading  
C. Quản lý database tự động  
D. Phân quyền người dùng tự động  

**Đáp án:** B. **Giải thích:** C1Chat gói sẵn các thành phần chat.

**Câu 2.** C1Component có tự gọi API không?

A. Không, cần truyền response  
B. Có, luôn gọi C1  
C. Chỉ gọi khi chart xuất hiện  
D. Chỉ trong Python  

**Đáp án:** A. **Giải thích:** Renderer nhận c1Response đã có.

**Câu 3.** Component nào hợp với dashboard chat đã có sẵn?

A. Cron job  
B. SQL schema  
C. Websocket server  
D. C1Component  

**Đáp án:** D. **Giải thích:** Renderer độc lập tích hợp vào UI đang tồn tại.

**Câu 4.** Tại sao C1Chat mặc định chưa đủ cho production?

A. Không có React  
B. Không có màu theme  
C. History chỉ trong bộ nhớ  
D. Không đọc CSS  

**Đáp án:** C. **Giải thích:** Reload có thể làm mất lịch sử.

**Câu 5.** C1Component nên được bọc trong gì để cấp theme?

A. ThemeProvider  
B. HTTP cache  
C. Nginx  
D. API key  

**Đáp án:** A. **Giải thích:** ThemeProvider cung cấp token giao diện cho renderer.

