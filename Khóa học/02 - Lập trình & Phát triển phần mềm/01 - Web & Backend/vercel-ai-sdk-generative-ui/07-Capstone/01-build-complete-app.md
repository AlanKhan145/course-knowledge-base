# Dự án cuối khóa: Xây dựng Chat + Generative Grid UI

> **Loại bài:** project · **Chuyên đề:** Module 07 — Capstone và đánh giá

## 1. Tóm tắt

Xây ứng dụng mẫu Next.js có streaming chat, tool `drawGrid`, validation Zod và renderer React. Dự án dùng hướng AI SDK UI hiện đại để dễ bảo trì; các bài RSC trước đó giúp đọc hiểu mã lịch sử.

## 2. Mục tiêu học tập

- Xây ứng dụng end-to-end gồm API route, tool, client chat và component grid.
- Dùng streaming để render message và tool output.
- Kiểm thử cả yêu cầu tự nhiên và form gửi.

## 3. Yêu cầu sản phẩm

Người dùng có thể nhập câu tự nhiên hoặc nhấn shortcut để tạo grid. Nếu message là câu hỏi bình thường, assistant trả text. Nếu yêu cầu tạo grid với hàng/cột rõ ràng, LLM gọi `drawGrid`; UI hiện loading rồi component. Nếu thiếu thông số, assistant hỏi làm rõ. Chưa cần ví thật, giá crypto, airdrop hay smart contract write.

## 4. Tạo dự án và biến môi trường

```bash
npx create-next-app@latest generative-ui-lab --ts --app
cd generative-ui-lab
npm install ai @ai-sdk/react @ai-sdk/openai zod
npm run dev
```

Trong `.env.local`:

```dotenv
OPENAI_API_KEY=your_key_here
OPENAI_MODEL=your_supported_model_id
```

Chọn model hỗ trợ tool calling mà tài khoản có quyền dùng. Không đưa khóa thật vào bài nộp hoặc commit Git.

## 5. Code backend: `app/api/chat/route.ts`

```ts
import {
  streamText, convertToModelMessages, tool,
  type UIMessage,
} from 'ai';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';

export async function POST(request: Request) {
  const { messages }: { messages: UIMessage[] } = await request.json();
  const result = streamText({
    model: openai(process.env.OPENAI_MODEL ?? 'gpt-4o-mini'),
    system: [
      'Bạn là trợ lý tạo giao diện dashboard.',
      'Chỉ dùng drawGrid nếu người dùng yêu cầu lưới.',
      'Nếu thiếu số hàng hoặc số cột, hãy hỏi người dùng.',
      'Không bịa dữ liệu nghiệp vụ.',
    ].join(' '),
    messages: await convertToModelMessages(messages),
    tools: {
      drawGrid: tool({
        description: 'Hiển thị lưới dashboard theo số hàng và số cột.',
        inputSchema: z.object({
          rows: z.number().int().min(1).max(8),
          columns: z.number().int().min(1).max(8),
        }),
        execute: async ({ rows, columns }) => ({ rows, columns }),
      }),
    },
  });
  return result.toUIMessageStreamResponse();
}
```

Ở production, cần validate HTTP body và xác thực/rate-limit request trước lời gọi model. `messages` là dữ liệu từ client, nên không tin cậy về mặt phân quyền.

## 6. Component lưới: `components/grid-preview.tsx`

```tsx
export function GridPreview({ rows, columns }: {
  rows: number; columns: number;
}) {
  if (![rows, columns].every(Number.isInteger) ||
      rows < 1 || columns < 1 || rows > 8 || columns > 8) {
    return <p>Kích thước lưới không hợp lệ.</p>;
  }
  return <div className="grid gap-2 my-3"
    style={{ gridTemplateColumns: `repeat(${columns},minmax(0,1fr))` }}>
    {Array.from({ length: rows * columns }, (_, i) =>
      <div className="rounded border p-3 text-center" key={i}>Ô {i + 1}</div>
    )}
  </div>;
}
```

## 7. Client chat: `app/page.tsx`

```tsx
'use client';
import { useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { GridPreview } from '@/components/grid-preview';

export default function Page() {
  const [input, setInput] = useState('');
  const { messages, sendMessage, status, stop, error } = useChat();
  const busy = status === 'streaming' || status === 'submitted';

function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    void sendMessage({ text });
    setInput('');
  }

return <main className="mx-auto max-w-2xl p-6 space-y-4">
    <h1 className="text-2xl font-semibold">Generative UI Lab</h1>
    <button type="button" disabled={busy}
      onClick={() => void sendMessage({text:'Tạo lưới 2 hàng, 3 cột'})}>
      Ví dụ: lưới 2 × 3
    </button>
    <div className="space-y-4" aria-live="polite">
      {messages.map(message => <section key={message.id} className="border rounded p-3">
        <strong>{message.role === 'user' ? 'Bạn' : 'AI'}</strong>
        {message.parts.map((part, i) => {
          if (part.type === 'text') return <p key={i}>{part.text}</p>;
          if (part.type === 'tool-drawGrid') {
            if (part.state === 'output-available')
              return <GridPreview key={i} {...part.output} />;
            if (part.state === 'output-error')
              return <p key={i}>Không thể tạo lưới.</p>;
            return <p key={i}>Đang dựng lưới…</p>;
          }
          return null;
        })}
      </section>)}
    </div>
    {error && <p role="alert">Có lỗi khi trả lời.</p>}
    <form onSubmit={submit} className="flex gap-2">
      <input className="flex-1 border p-2 rounded" value={input}
        onChange={e => setInput(e.target.value)}
        aria-label="Nhập câu hỏi" />
      <button type="submit" disabled={busy || !input.trim()}>Gửi</button>
      {busy && <button type="button" onClick={stop}>Dừng</button>}
    </form>
  </main>;
}
```

## 8. Kiểm thử và hoàn thiện

Chạy `npm run dev`, vào localhost:3000. Thử lần lượt “Xin chào”, “Vẽ lưới 2 hàng 3 cột”, “Đổi thành 4 cột”, “Vẽ lưới” (thiếu dữ liệu), và “Vẽ lưới 100 hàng”. Kiểm tra cả Enter lẫn click Gửi. LLM có thể lựa chọn hỏi lại khác nhau tùy provider/model; nếu chọn tool với giá trị không hợp lệ, backend phải chặn.

Tính năng bổ sung tùy chọn: thêm `WalletSummary` dùng mock data, thêm test Zod, chọn provider trên server từ allowlist, và lưu conversation history vào database theo ID người dùng.

## 9. Thực hành và kiểm tra

**Deliverables:** Mã nguồn project Next.js, `.env.example` không chứa secret, screenshot 2×3, bảng test ít nhất 5 ca. **Definition of Done:** chat streaming, tool result dựng đúng 6 ô, input rỗng không gửi, lỗi được thông báo, không có secret client. **Tiêu chí mở rộng:** phân biệt được mock và real wallet data.

## 10. Câu hỏi ôn tập

### Câu 1

Trong capstone, route chat nằm ở đâu?

A. app/api/chat/route.ts  
B. app/layout.tsx  
C. components/grid-preview.tsx  
D. schemas/theme.ts

**Đáp án:** A.

**Giải thích:** Route Handler ở đúng đường dẫn /api/chat.

### Câu 2

Dữ liệu tool `drawGrid` trả về là gì?

A. React node server  
B. {rows, columns}  
C. Raw script  
D. API key

**Đáp án:** B.

**Giải thích:** Client dùng data để render component.

### Câu 3

Để hiển thị tool result, UI kiểm tra gì?

A. User agent  
B. Build hash
C. part.type và part.state  
D. window.title  

**Đáp án:** C.

**Giải thích:** Parts thể hiện tool và trạng thái của nó.

### Câu 4

Một input “vẽ lưới 100 hàng” nên?

A. Được chạy eval  
B. Đổi model ngay
C. Được render 10000 ô  
D. Bị chặn bởi giới hạn schema  

**Đáp án:** D.

**Giải thích:** Giới hạn 1–8 ngăn quá tải.

### Câu 5

`.env.example` dùng để làm gì?

A. Mô tả tên biến môi trường, không lộ secret  
B. Lưu React element  
C. Làm image asset
D. Lưu API key thật  

**Đáp án:** A.

**Giải thích:** Ví dụ cấu hình giúp cài đặt mà không tiết lộ credential.

## 11. Tổng kết

Xây ứng dụng mẫu Next.js có streaming chat, tool `drawGrid`, validation Zod và renderer React. Dự án dùng hướng AI SDK UI hiện đại để dễ bảo trì; các bài RSC trước đó giúp đọc hiểu mã lịch sử.
