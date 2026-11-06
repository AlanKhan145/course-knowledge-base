# Ba lớp AI SDK: Core, UI và RSC

> **Loại bài:** lesson · **Chuyên đề:** Module 01 — Nền tảng và kiến trúc

## 1. Tóm tắt

Vercel AI SDK có các lớp phục vụ những nhiệm vụ khác nhau: tương tác mô hình, streaming cho giao diện và quản lý React Server Components. Phân biệt rõ các lớp giúp xây dựng đúng luồng dữ liệu và tránh trộn mã cũ với API mới.

## 2. Mục tiêu học tập

- Mô tả nhiệm vụ của AI SDK Core, AI SDK UI và AI SDK RSC.
- Phân biệt AI state với UI state.
- Nhận diện khi nào nên dùng AI SDK UI thay vì RSC.

## 3. AI SDK Core: tương tác với mô hình

`generateText` tạo một kết quả hoàn chỉnh, còn `streamText` gửi phản hồi dần. Core quản lý model, message, tool schema, prompt và dữ liệu kết quả. Cùng một logic backend có thể dùng provider khác nhau như OpenAI hoặc Anthropic bằng adapter tương ứng. Provider phải có credentials và model identifier hợp lệ; không nên giả định hai provider có tính năng giống hệt nhau.

```ts
import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

const result = streamText({
  model: openai(process.env.OPENAI_MODEL ?? 'gpt-4o-mini'),
  prompt: 'Giải thích tool calling trong hai câu.',
});
```

Ví dụ dùng một model identifier minh họa; cần chọn model thực sự khả dụng trong tài khoản trước khi chạy. `streamText` không tự định nghĩa giao diện; nó xử lý nội dung sinh từ mô hình.

## 4. AI SDK UI: state và streaming ở client

AI SDK UI cung cấp hook như `useChat` để gửi message, nhận stream, theo dõi trạng thái và tổ chức các `parts` khác nhau của phản hồi. Trong API hiện đại, hook React được import từ `@ai-sdk/react`; input form tự quản lý bằng React state và gửi bằng `sendMessage`.

```tsx
'use client';
import { useChat } from '@ai-sdk/react';
const { messages, sendMessage, status } = useChat();
```

`messages` chứa lịch sử hiển thị, còn `status` giúp thiết kế loading, disable và error UI. Với Generative UI, `parts` của message có thể bao gồm `text` và các `tool-*` đã có đầu ra.

## 5. AI SDK RSC: tạo thành phần ở phía server

Luồng Next.js 14 lịch sử dùng `createAI`, `streamUI`, `getMutableAIState`, `useUIState`, `useActions` và `createStreamableUI`. Cơ chế này cho phép server action trả React node dần dần và lưu trạng thái giữa client/server. Các API RSC được chuyển sang `@ai-sdk/rsc` ở phiên bản mới hơn; mã cũ có thể dùng `ai/rsc`.

**Lưu ý tương thích:** RSC hiện được ghi là experimental, và tài liệu chính thức khuyến nghị AI SDK UI cho production. Vì thế phần RSC trong khóa này được học để hiểu kiến trúc và bảo trì code đời cũ; các bài cuối dùng Route Handler + `streamText` + `useChat` làm đường triển khai chính.

## 6. AI state và UI state không phải một

**AI state** là lịch sử và dữ liệu mà mô hình cần đọc (vai trò, nội dung, kết quả tool); nên giữ dạng serializable. **UI state** là cách ứng dụng biểu diễn lịch sử đó: thông báo, React elements, widget và trạng thái tương tác. Hai người dùng có thể có cùng một kết quả tool nhưng dùng giao diện mobile/desktop khác nhau. Không nên lưu trực tiếp component, hàm hoặc secret vào AI state.

```text
AI state: {role:'tool', name:'drawGrid', result:{rows:2,columns:3}}
UI state: <GridPreview rows={2} columns={3} />
```

Ở ứng dụng hiện đại, thiết kế nên ưu tiên lưu **data có thể tái dựng** và render UI từ data, thay vì cố tuần tự hóa React component xuống database.

## 7. Thực hành và kiểm tra

**Thực hành:** Tạo bảng ba cột `Core / UI / RSC`, phân loại `streamText`, `useChat`, `createAI`, `streamUI`, `getMutableAIState`. Sau đó viết một cặp ví dụ AI state và UI state cho yêu cầu “vẽ lưới 2×3”. **Đạt** nếu AI state không chứa JSX.

## 8. Câu hỏi ôn tập

### Câu 1

`streamText` thuộc lớp nào?

A. UI  
B. Core  
C. Chakra UI
D. RSC  

**Đáp án:** B.

**Giải thích:** Core phụ trách gọi mô hình và streaming.

### Câu 2

`useChat` của React trong SDK hiện đại thường được import từ đâu?

A. zod
B. next/server  
C. @ai-sdk/react  
D. @ai-sdk/rsc  

**Đáp án:** C.

**Giải thích:** @ai-sdk/react là gói cho React hooks.

### Câu 3

AI state nên lưu loại dữ liệu nào?

A. Secret key
B. JSX và function  
C. CSS object  
D. Message và kết quả tool có thể tuần tự hóa  

**Đáp án:** D.

**Giải thích:** AI state dùng làm ngữ cảnh cho LLM và cần dữ liệu có thể serialize.

### Câu 4

Vì sao hướng dẫn triển khai production ưu tiên AI SDK UI?

A. RSC hiện experimental, UI được khuyến nghị  
B. UI chạy toàn bộ LLM trong trình duyệt  
C. UI không cần backend
D. RSC là API duy nhất ổn định  

**Đáp án:** A.

**Giải thích:** Tài liệu chính thức khuyến nghị AI SDK UI cho production.

### Câu 5

Mục nào thuộc UI state?

A. Địa chỉ API key  
B. Component lưới đang hiển thị  
C. Prompt hệ thống server  
D. Tool schema

**Đáp án:** B.

**Giải thích:** UI state mô tả biểu diễn trực quan của kết quả.

## 9. Tổng kết

Vercel AI SDK có các lớp phục vụ những nhiệm vụ khác nhau: tương tác mô hình, streaming cho giao diện và quản lý React Server Components. Phân biệt rõ các lớp giúp xây dựng đúng luồng dữ liệu và tránh trộn mã cũ với API mới.
