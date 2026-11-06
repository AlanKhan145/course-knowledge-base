# Từ kiến trúc RSC cũ sang AI SDK UI hiện đại

> **Loại bài:** lesson · **Chuyên đề:** Module 03 — Server Actions và AI SDK RSC

## 1. Tóm tắt

Khi bảo trì dự án Next.js 14 sử dụng `createAI` và `streamUI`, cần nhận diện API đời cũ và di chuyển dần sang `streamText`, Route Handler và `useChat` nếu xây hệ thống production mới.

## 2. Mục tiêu học tập

- Đối chiếu các primitive RSC với đối tác UI/Core.
- Mô tả tiến trình migration mà không đánh mất tool results.
- Tránh sai lầm sao chép cú pháp SDK v4 vào phiên bản hiện đại.

## 3. Vì sao phải biết migration?

Những ví dụ phổ biến của Next.js 14 đặt phần lớn logic trong `app/actions.tsx`: `streamUI` trực tiếp tạo React node và `createAI` gói state. SDK mới hướng tới streaming dữ liệu có cấu trúc đến client, nơi React tự quyết định component. Kết quả là tăng tính dễ kiểm thử, lưu history và kiểm soát render. RSC hiện được ghi nhận experimental, không phải lộ trình mặc định cho ứng dụng production.

## 4. Bảng chuyển đổi

| Kiến trúc RSC | Hướng UI/Core hiện đại |
| --- | --- |
| `streamUI` tạo React node | `streamText` trả tool data / stream |
| `createAI` provider riêng | `useChat` + React state / app state |
| `useAIState`, `useUIState` | Chat messages, `parts`, application store |
| Action gọi model | Route Handler `/api/chat` |
| `generate` trả component | `execute` trả dữ liệu, client render component |
| `ai/rsc` ở SDK cũ | `@ai-sdk/rsc` ở bản mới; chỉ dùng nếu cần RSC |

Không có một phép đổi tên 1:1 cho mọi API: phải di chuyển logic sang đúng lớp trách nhiệm.

## 5. Quy trình migration có kiểm soát

1. Khóa phiên bản thư viện hiện tại và viết smoke tests cho mỗi tool quan trọng.
2. Ghi rõ schema dữ liệu mà mỗi component cần nhận.
3. Chuyển tool từ `generate` (JSX server) thành `execute` (data có kiểu), nếu phù hợp.
4. Dựng `app/api/chat/route.ts` với `streamText`; chọn model adapter tương ứng.
5. Đổi client sang `useChat`, render dựa trên `message.parts` và tool state.
6. Kiểm tra persistence, xác thực, confirm-before-write và error handling.
7. Gỡ `createAI`/RSC provider sau khi mọi đường phụ thuộc đã chuyển thành công.

## 6. Ví dụ biến đổi một tool

```tsx
// RSC: generate -> trả component server
// generate: async function* ({ rows, columns }) {
//   yield <Skeleton />;
//   return <GridPreview rows={rows} columns={columns} />;
// }

// Core hiện đại: execute -> trả data cho client
import { tool } from 'ai';
import { z } from 'zod';
export const drawGrid = tool({
  description: 'Vẽ dashboard lưới theo số hàng, số cột.',
  inputSchema: z.object({
    rows: z.number().int().min(1).max(8),
    columns: z.number().int().min(1).max(8),
  }),
  execute: async ({ rows, columns }) => ({ rows, columns }),
});
```

Client sử dụng data trả về để render `GridPreview`. Nhờ vậy model không có quyền nhúng mã tùy ý vào React tree.

## 7. Những lỗi migration dễ gặp

- `useChat` không còn nhất thiết quản lý input hộ ứng dụng; dùng `useState` và `sendMessage` theo tài liệu hiện tại.
- Thay vì `message.content`, dùng `message.parts` để nhận tool results.
- Thay `parameters` của mẫu RSC bằng `inputSchema` cho `tool()` hiện đại.
- Không nhầm `toDataStreamResponse` ở ví dụ cũ với `toUIMessageStreamResponse` trong hướng dẫn hiện tại.
- Với thao tác có tác động thật, migration phải giữ logic auth/approval, không chỉ chuyển giao diện.

## 8. Thực hành và kiểm tra

**Thực hành:** Lấy tool `drawGrid` RSC, viết lại dạng `tool({inputSchema, execute})` và mô tả UI sẽ đọc `tool-drawGrid`. Đánh dấu ba lỗi version mà người mới có thể gặp. **Đạt** khi không trả JSX từ `execute` trong phiên bản client-rendering.

## 9. Câu hỏi ôn tập

### Câu 1

Chiến lược migration tốt nhất là?

A. Chép nguyên RSC generator vào streamText  
B. Bỏ validation
C. Đổi tên mọi import rồi chạy  
D. Tách tool result thành data và render ở client  

**Đáp án:** D.

**Giải thích:** Chuyển trách nhiệm render sang UI giúp mã dễ kiểm thử và lưu trữ.

### Câu 2

API tool schema phổ biến của `tool()` hiện đại là gì?

A. inputSchema  
B. promptSchema  
C. jsxSchema
D. parameters  

**Đáp án:** A.

**Giải thích:** inputSchema được dùng để mô tả đầu vào và validate tool call.

### Câu 3

Message trong UI hiện đại cần đọc trường nào để render tool parts?

A. secret  
B. parts  
C. metadata.serverOnly  
D. DOM

**Đáp án:** B.

**Giải thích:** parts chứa các phần text và tool kết quả.

### Câu 4

Trước khi gỡ provider RSC nên làm gì?

A. Xóa history
B. Chỉ đổi theme  
C. Kiểm tra mọi đường phụ thuộc và smoke test  
D. Tắt auth  

**Đáp án:** C.

**Giải thích:** Migration phải bảo đảm luồng chức năng vẫn hoạt động.

### Câu 5

Vì sao không thể luôn coi migration là đổi tên API?

A. Vì React không dùng TypeScript  
B. Vì backend đã bị xóa
C. Vì AI SDK không có JS  
D. Vì cách tổ chức state, streaming và render thay đổi  

**Đáp án:** D.

**Giải thích:** Kiến trúc phân chia trách nhiệm khác nhau.

## 10. Tổng kết

Khi bảo trì dự án Next.js 14 sử dụng `createAI` và `streamUI`, cần nhận diện API đời cũ và di chuyển dần sang `streamText`, Route Handler và `useChat` nếu xây hệ thống production mới.
