# Server Actions và AI provider trong Next.js 14

> **Loại bài:** lesson · **Chuyên đề:** Module 03 — Server Actions và AI SDK RSC

## 1. Tóm tắt

Server Actions cho phép client yêu cầu server thực thi một hàm mà không cần viết route tương đương cho mọi thao tác. Mẫu Generative UI dựa trên RSC thường đặt actions và AI provider ở `app/actions.tsx` rồi bọc cây component trong layout.

## 2. Mục tiêu học tập

- Giải thích chức năng và phạm vi truy cập của Server Actions.
- Mô tả vai trò của `createAI` và `useActions`.
- Tách đúng ranh giới server/client khi dùng provider UI.

## 3. Server Actions là gì?

Server Action là hàm chạy trên server và có thể được gọi từ phía client thông qua cơ chế được Next.js hỗ trợ. Từ khóa `'use server'` chỉ ra ranh giới này. Action không được coi là hàm nội bộ bí mật: client có thể kích hoạt, nên phải kiểm tra danh tính, quyền, input và giới hạn tần suất như khi thiết kế một API public.

```ts
// app/actions.ts
'use server';
import { z } from 'zod';

const AskSchema = z.object({ prompt: z.string().trim().min(1).max(2000) });

export async function validateAsk(raw: unknown) {
  const { prompt } = AskSchema.parse(raw);
  return { accepted: true, length: prompt.length };
}
```

Đoạn mã kiểm tra dữ liệu, chưa gọi mô hình. Dù dùng Zod trên server, quyền truy cập vẫn phải được kiểm tra độc lập.

## 4. Mẫu `createAI` của RSC

Trong code đời Next.js 14, `createAI` tạo provider chia sẻ AI state, UI state và map action cho client. Mã ứng dụng lúc đó thường chứa `app/actions.tsx` với `createAI`, `streamUI`, `getMutableAIState`; `app/layout.tsx` sử dụng `<AI>` bao toàn app, và client gọi server action qua `useActions`.

```tsx
// Minh họa ý tưởng của AI SDK RSC, không phải khuyến nghị production mới.
import { createAI } from '@ai-sdk/rsc';

export const AI = createAI({
  actions: { /* submitUserMessage: ... */ },
  initialAIState: [],
  initialUIState: [],
});
```

Khi học code cũ, import có thể là `ai/rsc` tùy thời kỳ. Không trộn import `ai/rsc` từ bản cũ và `@ai-sdk/rsc` trong cùng dự án nếu chưa xác định phiên bản.

## 5. Client boundary và Chakra UI

`layout.tsx` thường là server component; đối với Chakra provider cần sử dụng các API dựa vào React context/hook, đặt wrapper trong file có `'use client'`. Root layout sau đó render `<Providers>{children}</Providers>`. Cấu trúc giữ metadata và các phần server-only ngoài client bundle.

## 6. Server Action khác Route Handler ở đâu?

| Khía cạnh | Server Action | Route Handler |
| --- | --- | --- |
| Gọi từ | UI / form / RSC flow | HTTP endpoint rõ ràng |
| Hợp với | Cập nhật dữ liệu, thao tác tương tác | Streaming chat, API cho nhiều client |
| Bảo mật | Cần auth, validation, rate limit | Cần auth, validation, rate limit |
| Trong khóa học | Phân tích mẫu RSC lịch sử | Hướng production với `useChat` |

Không phải tất cả Server Action đều gắn với AI và không phải mọi Generative UI đều cần Server Action.

## 7. Thực hành và kiểm tra

**Bài tập:** Vẽ sơ đồ phân biệt `validateAsk` server action và `/api/chat` route handler. Nêu ba việc bắt buộc phải làm trước khi server action mua token. **Đạt** khi đề cập auth, phê duyệt giao dịch, validate input và giới hạn quyền thực thi.

## 8. Câu hỏi ôn tập

### Câu 1

`use server` nghĩa là gì?

A. Bắt buộc chạy trong browser  
B. Hàm chạy ở phía server  
C. Không thể bị gọi từ client  
D. Không cần validation

**Đáp án:** B.

**Giải thích:** Server Action chạy phía server nhưng vẫn có thể được client kích hoạt.

### Câu 2

`createAI` hỗ trợ điều gì trong kiến trúc RSC?

A. Tạo ví Web3
B. Tạo cơ sở dữ liệu  
C. Quản lý AI/UI state và actions qua provider  
D. Tự viết CSS  

**Đáp án:** C.

**Giải thích:** createAI thiết lập context trạng thái và actions cho RSC.

### Câu 3

Server Action nhận lệnh mua tiền điện tử cần bước nào?

A. Chỉ bật animation  
B. Đặt secret phía client
C. Tin mọi input  
D. Kiểm tra quyền và xác nhận  

**Đáp án:** D.

**Giải thích:** Hành động tác động tài sản yêu cầu kiểm soát nghiệp vụ và ủy quyền.

### Câu 4

Chakra UI provider cần xử lý vấn đề nào?

A. Client boundary cho context/hook  
B. Biến Zod thành HTML  
C. Tắt SSR toàn app
D. Chỉ chạy SQL  

**Đáp án:** A.

**Giải thích:** Provider tương tác client cần client component wrapper.

### Câu 5

Streaming chat dành cho nhiều client thường tiện triển khai dưới dạng nào?

A. Chỉ CSS  
B. Route Handler HTTP  
C. README  
D. Static JSON file

**Đáp án:** B.

**Giải thích:** Route Handler cung cấp endpoint rõ ràng cho các client.

## 9. Tổng kết

Server Actions cho phép client yêu cầu server thực thi một hàm mà không cần viết route tương đương cho mọi thao tác. Mẫu Generative UI dựa trên RSC thường đặt actions và AI provider ở `app/actions.tsx` rồi bọc cây component trong layout.
