# Tạo chat React với useChat, message parts và trạng thái

> **Loại bài:** lesson · **Chuyên đề:** Module 02 — Streaming, model và chat

## 1. Tóm tắt

Hook `useChat` quản lý lịch sử hội thoại và giao tiếp stream trong giao diện React. Khi có Generative UI, ứng dụng cần render `message.parts` chứ không chỉ một trường text duy nhất.

## 2. Mục tiêu học tập

- Tạo form gửi tin nhắn hỗ trợ Enter và nút gửi.
- Render các text parts và xử lý tool parts.
- Thiết kế loading, stop và error state đúng trách nhiệm.

## 3. Chat client đơn giản

```tsx
// components/chat.tsx
'use client';
import { useChat } from '@ai-sdk/react';
import { useState } from 'react';

export function Chat() {
  const [input, setInput] = useState('');
  const { messages, sendMessage, status, error, stop } = useChat();
  const busy = status === 'submitted' || status === 'streaming';

async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    setInput('');
    await sendMessage({ text });
  }

return (
    <main>
      <div aria-live="polite">
        {messages.map(message => (
          <section key={message.id}>
            <strong>{message.role === 'user' ? 'Bạn' : 'AI'}</strong>
            {message.parts.map((part, i) => {
              if (part.type === 'text') {
                return <p key={i}>{part.text}</p>;
              }
              return null;
            })}
          </section>
        ))}
      </div>
      {error && <p role="alert">Không gửi được tin nhắn. Hãy thử lại.</p>}
      <form onSubmit={submit}>
        <input value={input} onChange={e => setInput(e.target.value)}
          aria-label="Nội dung trò chuyện" />
        <button disabled={!input.trim() || busy} type="submit">Gửi</button>
        {busy && <button type="button" onClick={() => stop()}>Dừng</button>}
      </form>
    </main>
  );
}
```

Form `onSubmit` giải quyết cả việc nhấn Enter và bấm nút gửi. Không đặt onClick trên button mà quên submit của form; đó là nguyên nhân phổ biến khiến một trong hai thao tác hoạt động còn thao tác kia lỗi.

## 4. Vì sao phải render `parts`?

Một phản hồi có thể chứa text, tool call, kết quả tool, file và các phần chuyên biệt khác. Đọc mỗi `message.content` theo phong cách SDK cũ có thể không render được widget. Với công cụ tên `drawGrid`, phần kết quả có thể xuất hiện dưới dạng `part.type === 'tool-drawGrid'`.

```tsx
// Thêm vào nhánh bên trong message.parts.map(...)
if (part.type === 'tool-drawGrid') {
  if (part.state === 'output-available') {
    return <GridPreview key={i} {...part.output} />;
  }
  if (part.state === 'output-error') {
    return <p key={i}>Không tạo được lưới.</p>;
  }
  return <p key={i}>Đang tạo lưới…</p>;
}
```

`GridPreview` là component bạn định nghĩa; ví dụ chỉ hợp lệ sau khi tool `drawGrid` và component này đã được xây dựng ở module tương ứng.

## 5. Trạng thái và những lỗi UI quan trọng

`status` có thể là `submitted`, `streaming`, `ready` hoặc `error`. Mặc định nên khóa submit khi đang gửi nếu ứng dụng chưa hỗ trợ xử lý song song. Khi người dùng yêu cầu dừng, `stop()` gửi tín hiệu hủy stream; backend vẫn phải thiết kế hành động an toàn vì ngắt UI không tự hoàn tác một nghiệp vụ đã commit.

Nếu muốn shortcut “Vẽ dashboard”, chỉ cần gọi `sendMessage({ text: 'Tạo dashboard 2 hàng 3 cột' })`, sử dụng cùng pipeline gửi form. Không gọi tool nghiệp vụ thẳng từ shortcut nếu muốn LLM vẫn quyết định theo ngữ cảnh.

## 6. Thực hành và kiểm tra

**Thực hành:** Cài UI, gửi message bằng Enter và nút Gửi, thử ngắt stream; thêm một shortcut gửi prompt. Kiểm tra `aria-live`, thông báo lỗi và không gửi message rỗng. **Đạt** khi mỗi thao tác tạo đúng một message, không nhân đôi request.

## 7. Câu hỏi ôn tập

### Câu 1

Cách nào tránh lỗi Enter không gửi nhưng nút Gửi hoạt động?

A. Dùng form onSubmit  
B. Xóa input  
C. Đặt timeout  
D. Ẩn button

**Đáp án:** A.

**Giải thích:** onSubmit xử lý cả Enter lẫn click submit.

### Câu 2

Vì sao cần duyệt `message.parts`?

A. Chỉ để đổi màu  
B. Để thấy cả text và tool result  
C. Để lấy API key  
D. Để render PDF

**Đáp án:** B.

**Giải thích:** Parts đại diện các loại dữ liệu khác nhau của message.

### Câu 3

Khi status là streaming, UX hợp lý là gì?

A. Ẩn text
B. Luôn bỏ nút dừng  
C. Cho dừng stream, kiểm soát submit  
D. Tự mua token  

**Đáp án:** C.

**Giải thích:** Có thể cho người dùng hủy và tránh gửi trùng.

### Câu 4

Trong `useChat` hiện đại, thao tác gửi text minh họa dùng gì?

A. createAI()  
B. z.parse(input)
C. writeFile  
D. sendMessage({ text })  

**Đáp án:** D.

**Giải thích:** sendMessage gửi nội dung chat lên endpoint.

### Câu 5

`stop()` có tự hoàn tác giao dịch trên backend đã hoàn thành không?

A. Không  
B. Chỉ nếu dùng RSC
C. Có mọi trường hợp  
D. Chỉ với CSS  

**Đáp án:** A.

**Giải thích:** Dừng stream UI không đảm bảo rollback hành động nghiệp vụ.

## 8. Tổng kết

Hook `useChat` quản lý lịch sử hội thoại và giao tiếp stream trong giao diện React. Khi có Generative UI, ứng dụng cần render `message.parts` chứ không chỉ một trường text duy nhất.
