# Tích hợp assistant-ui vào Next.js bằng LangGraph Runtime

> **Loại:** Lab · **Trọng tâm:** Xây dựng trang chat React kết nối LangGraph API.

## 1. Tổng quan

Ở cấp độ giao diện, assistant-ui cung cấp React runtime và các thành phần chat. Runtime giải quyết việc nạp thread, nhận stream và cập nhật message; giao diện trang lo bố cục, kích thước, navigation và các thành phần trình bày. Cách này tránh việc mỗi dự án phải tự triển khai logic xử lý token chunk, loading và tool part ngay từ đầu.

## 2. Mục tiêu

- Cài đúng packages cho LangGraph Runtime trong React.
- Giải thích sự khác nhau giữa cách khởi tạo template và manual setup.
- Liên kết `AssistantRuntimeProvider` với thành phần hiển thị `Thread`.
- Tải lại message và interrupt từ một `thread_id` có sẵn.

## 3. Hai con đường khởi tạo

### 3.1. Khởi tạo từ template

```bash
npx create-assistant-ui@latest -t langchain my-app
cd my-app
npm run dev:frontend
```

Template hiện hành sử dụng `useStreamRuntime` từ `@assistant-ui/react-langchain`. Đây là lựa chọn tốt nếu bắt đầu một ứng dụng mới và muốn nhanh chóng có UI chat. Template có thể đi kèm agent mẫu và script khác; hãy đọc README mà CLI tạo ra.

### 3.2. Tích hợp thủ công

Với Next.js/React đã có sẵn, cài runtime chuyên dụng:

```bash
npm install @assistant-ui/react @assistant-ui/react-langgraph @langchain/langgraph-sdk
```

Đây là đường tích hợp dựa trên `useLangGraphRuntime`. Hai runtime không nên bị trộn tùy ý: mỗi runtime có cách thiết lập và tập tính năng riêng.

## 4. Tạo LangGraph client

File `lib/chatApi.ts`:

```typescript
import { Client } from "@langchain/langgraph-sdk";

export const createClient = () => {
  const apiUrl =
    process.env["NEXT_PUBLIC_LANGGRAPH_API_URL"] ||
    (typeof window !== "undefined"
      ? new URL("/api", window.location.href).href
      : "/api");
  return new Client({ apiUrl });
};
```

Trong development có thể trỏ client trực tiếp tới URL dev server nếu server cho phép. Trong production, sử dụng proxy cùng origin, giữ credential và kiểm tra phiên đăng nhập ở backend.

## 5. Định nghĩa component chat

### 5.1. Runtime và state loader

File `components/MyAssistant.tsx`:

```tsx
"use client";

import { useMemo } from "react";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import {
  unstable_createLangGraphStream,
  useLangGraphRuntime,
  type LangChainMessage,
} from "@assistant-ui/react-langgraph";
import { createClient } from "@/lib/chatApi";
import { Thread } from "@/components/assistant-ui/elements/thread.aui";

const ASSISTANT_ID = process.env["NEXT_PUBLIC_LANGGRAPH_ASSISTANT_ID"]!;

export function MyAssistant() {
  const client = useMemo(() => createClient(), []);
  const stream = useMemo(
    () => unstable_createLangGraphStream({ client, assistantId: ASSISTANT_ID }),
    [client],
  );
  const runtime = useLangGraphRuntime({
    unstable_allowCancellation: true,
    stream,
    create: async () => {
      const { thread_id } = await client.threads.create();
      return { externalId: thread_id };
    },
    load: async (externalId) => {
      const state = await client.threads.getState<{ messages: LangChainMessage[] }>(externalId);
      return {
        messages: state.values.messages,
        interrupts: state.tasks[0]?.interrupts,
      };
    },
  });
  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <Thread />
    </AssistantRuntimeProvider>
  );
}
```

Đây là cấu trúc manual setup được tài liệu assistant-ui công bố. Đường dẫn import `Thread` yêu cầu bạn đã tạo UI components theo template/guide của phiên bản đang dùng. `unstable_` trong tên API cho thấy cần kiểm tra tài liệu khi nâng cấp.

### 5.2. Mount trên trang

File `app/page.tsx`:

```tsx
import { MyAssistant } from "@/components/MyAssistant";

export default function Home() {
  return <main className="h-dvh"><MyAssistant /></main>;
}
```

Đặt chiều cao rõ ràng giúp thread có không gian cuộn phù hợp và composer không bị đẩy khỏi màn hình trên desktop.

## 6. Môi trường, checkpoint và kiểm thử

Trong development:

```dotenv
NEXT_PUBLIC_LANGGRAPH_API_URL=http://localhost:2024
NEXT_PUBLIC_LANGGRAPH_ASSISTANT_ID=your_graph_id
```

Hãy thay `your_graph_id` bằng tên graph đã đăng ký. Thử gửi tin nhắn, refresh và kiểm tra việc phục hồi thread trong chế độ runtime đã cấu hình. Nếu tạo mới hoàn toàn mỗi lần refresh, cần bổ sung persistence/thread list thích hợp thay vì mặc định đây là lỗi của renderer.

**Debug:** lỗi CORS thường do kết nối trực tiếp frontend tới backend không được cho phép; lỗi 404 có thể do assistant ID/path sai; lỗi 401/403 liên quan xác thực hoặc proxy. Không đưa secret trực tiếp vào `NEXT_PUBLIC_`.

## 7. Deliverable và tổng kết

Sản phẩm cần có trang chat Next.js hiển thị Thread, gửi message, nhận stream và có client LangGraph tách khỏi component UI. Đảm bảo không lưu API key bí mật ở client, và giải thích vai trò của `create`, `load`, `stream` trong runtime.

## 8. Câu hỏi ôn tập

### Câu 1

Lựa chọn manual setup dùng runtime nào?

A. useChatRuntime  
B. useLangGraphRuntime  
C. useLocalRuntime với backend tùy ý  
D. useReducer duy nhất

**Đáp án:** B

**Giải thích:** Manual integration trong tài liệu LangGraph dùng useLangGraphRuntime.

### Câu 2

Dùng `NEXT_PUBLIC_` cho thông tin nào?

A. API key bí mật  
B. Password database  
C. Assistant ID không nhạy cảm  
D. Token đăng nhập riêng

**Đáp án:** C

**Giải thích:** Các biến NEXT_PUBLIC_ được đưa vào bundle phía client.

### Câu 3

`load` callback phục vụ công việc gì?

A. Nạp lịch sử và interrupt từ thread  
B. Tạo CSS  
C. Mua cổ phiếu  
D. Cài dependency

**Đáp án:** A

**Giải thích:** load khôi phục trạng thái hội thoại có sẵn trên server.

### Câu 4

Muốn kiểm soát lời gọi từ client trong production nên?

A. Đặt secret ở JSX  
B. Vô hiệu hóa authentication  
C. Bỏ rate limit  
D. Dùng proxy server có kiểm tra quyền

**Đáp án:** D

**Giải thích:** Proxy giữ khóa ở server và cho phép kiểm tra quyền cho từng tài nguyên.

### Câu 5

Component provider nhận gì?

A. Chỉ className  
B. Đối tượng runtime  
C. Một API key trong text  
D. Git commit hash

**Đáp án:** B

**Giải thích:** AssistantRuntimeProvider dùng runtime để cung cấp ngữ cảnh chat cho subtree.
