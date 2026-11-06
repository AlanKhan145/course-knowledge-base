# Quản lý AI state, UI state và sinh UI bằng streamUI

> **Loại bài:** lesson · **Chuyên đề:** Module 03 — Server Actions và AI SDK RSC

## 1. Tóm tắt

AI state cung cấp ngữ cảnh cho mô hình; UI state là cây hiển thị React. Với AI SDK RSC, `streamUI` cho phép Server Action trả UI dạng stream và các tool có thể sử dụng generator để cập nhật skeleton rồi kết quả.

## 2. Mục tiêu học tập

- Giải thích cập nhật AI state khi gửi và nhận message.
- Đọc được chu trình loading → render của `streamUI`.
- Nhận diện lỗi thường gặp khi không kết thúc stream.

## 3. Dòng trạng thái trong RSC

Câu hỏi của người dùng phải được đưa vào AI state trước khi model trả lời. Khi có response, backend bổ sung message assistant hoặc tool result. UI state chứa phần trực quan ứng với các message đó, ví dụ text bubble, skeleton hoặc dashboard. Tránh nhầm AI state là dữ liệu React node; điều này làm persistence và debug khó khăn.

## 4. Ví dụ khái niệm `streamUI`

```tsx
// Ví dụ cú pháp RSC; cần đồng bộ đúng version @ai-sdk/rsc trong dự án.
import { streamUI } from '@ai-sdk/rsc';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';

const result = await streamUI({
  model: openai('gpt-4o-mini'),
  prompt: 'Vẽ lưới 2 hàng, 3 cột',
  text: ({ content }) => <p>{content}</p>,
  tools: {
    drawGrid: {
      description: 'Tạo lưới dashboard theo kích thước được yêu cầu.',
      inputSchema: z.object({ rows: z.number().int().min(1), columns: z.number().int().min(1) }),
      generate: async function* ({ rows, columns }) {
        yield <p>Đang dựng lưới…</p>;
        return <GridPreview rows={rows} columns={columns} />;
      },
    },
  },
});
// result.value là React node stream để trả về cho client.
```

`generate` trả React node thuộc RSC; trong SDK RSC cũ tool dùng `parameters` thay vì `inputSchema` ở ví dụ trên. **Không dùng nguyên cấu hình này cho `streamText` hiện đại**: tool `streamText` thường dùng `inputSchema` và `execute`, còn client render các phần `tool-*`. Đây là khác biệt cốt lõi khi đọc hai hệ API.

## 5. Trạng thái loading và kết thúc stream

Generator `generate` có thể `yield` skeleton trước, rồi `return` component. Luồng phải được kết thúc đúng. Với `createStreamableUI`, sau `update` hoặc `append`, phải gọi `done()` khi hoàn thành, hoặc báo `error()` khi thất bại; nếu không, client có thể ở trạng thái loading vô hạn.

```tsx
import { createStreamableUI } from '@ai-sdk/rsc';
const ui = createStreamableUI(<p>Đang tải…</p>);
try {
  ui.update(<p>Đã tải dữ liệu</p>);
  ui.done();
} catch (error) {
  ui.error(error instanceof Error ? error : new Error('Unknown error'));
}
```

## 6. Persistence và đồng bộ

Không nên coi history chỉ trong memory là bền vững. Nếu cần lưu hội thoại, lưu message và kết quả tool ở database bằng ID riêng theo người dùng; khi mở lại conversation, render component từ dữ liệu đã lưu. Tránh lưu React nodes trong database hoặc để prompt có thể giả làm system message. Đặc biệt phải kiểm tra quyền sở hữu `conversationId` trước khi load hoặc cập nhật.

## 7. Thực hành và kiểm tra

**Thực hành:** Viết timeline có 7 mốc: user submit → validate → append AI state → loading UI → tool call → tool result → render complete. Thêm hai nhánh lỗi: tool lỗi và stream bị ngắt. **Đạt** nếu cả hai nhánh đều kết thúc ở trạng thái có thể quan sát được.

## 8. Câu hỏi ôn tập

### Câu 1

AI state dùng chủ yếu cho mục đích nào?

A. Tạo ảnh raster
B. Lưu animation CSS  
C. Ngữ cảnh mà model cần  
D. Kích cỡ màn hình  

**Đáp án:** C.

**Giải thích:** AI state gồm conversation history và kết quả tool.

### Câu 2

Trong `streamUI` RSC, generator có thể yield gì trước kết quả?

A. Database password  
B. CSS bundle
C. API key  
D. Skeleton/loading component  

**Đáp án:** D.

**Giải thích:** Generator cho phép hiển thị loading trước khi kết quả sẵn sàng.

### Câu 3

Nếu dùng `createStreamableUI` mà không gọi `done()`, điều gì có thể xảy ra?

A. Client loading không kết thúc  
B. Zod tự sửa lỗi  
C. Model được đổi
D. Stream luôn tự đóng  

**Đáp án:** A.

**Giải thích:** done() báo hoàn tất stream.

### Câu 4

Khác nhau quan trọng giữa RSC tool và streamText tool hiện đại?

A. Cả hai chỉ có CSS  
B. RSC thường dùng generate component; Core tool dùng execute trả data  
C. Core cần JSX server  
D. RSC không có schema

**Đáp án:** B.

**Giải thích:** Hai luồng có trách nhiệm và API tool khác nhau.

### Câu 5

Nên lưu gì để tái dựng chat sau khi refresh?

A. React function  
B. JSX object  
C. Message và tool result có cấu trúc  
D. DOM reference

**Đáp án:** C.

**Giải thích:** Dữ liệu serializable có thể dùng dựng lại UI.

## 9. Tổng kết

AI state cung cấp ngữ cảnh cho mô hình; UI state là cây hiển thị React. Với AI SDK RSC, `streamUI` cho phép Server Action trả UI dạng stream và các tool có thể sử dụng generator để cập nhật skeleton rồi kết quả.
