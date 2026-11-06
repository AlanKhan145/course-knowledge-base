# Model providers và truyền văn bản theo thời gian thực

> **Loại bài:** lesson · **Chuyên đề:** Module 02 — Streaming, model và chat

## 1. Tóm tắt

Streaming giúp phản hồi hiển thị từng phần thay vì chờ LLM tạo xong toàn bộ. Route Handler sử dụng `streamText` của AI SDK Core và trả stream cho chat UI.

## 2. Mục tiêu học tập

- Viết Route Handler dùng `streamText`.
- Giải thích cách đổi provider và model.
- Phân biệt response streaming với promise hoàn tất.

## 3. Chuẩn bị môi trường

Một Next.js app dùng App Router, TypeScript và khóa API của provider là đủ để thực hành. Cài gói SDK và Zod bằng package manager của dự án:

```bash
npm install ai @ai-sdk/react @ai-sdk/openai zod
```

Dành secrets cho `.env.local`, tuyệt đối không commit lên git. Ví dụ: `OPENAI_API_KEY=...` và `OPENAI_MODEL=...` được đọc ở server. Khi chuyển sang Anthropic, cài adapter tương ứng, cấp khóa thích hợp và cập nhật cấu hình model.

## 4. Tạo Route Handler

```ts
// app/api/chat/route.ts
import { streamText, convertToModelMessages, type UIMessage } from 'ai';
import { openai } from '@ai-sdk/openai';

export async function POST(request: Request) {
  const { messages }: { messages: UIMessage[] } = await request.json();

const result = streamText({
    model: openai(process.env.OPENAI_MODEL ?? 'gpt-4o-mini'),
    system: 'Bạn là trợ lý lập trình. Trả lời ngắn gọn và chính xác.',
    messages: await convertToModelMessages(messages),
  });

return result.toUIMessageStreamResponse();
}
```

`UIMessage` là dạng client cần để hiển thị; `convertToModelMessages` chuyển sang dạng thích hợp cho model. `toUIMessageStreamResponse` đóng gói stream dùng cho `useChat`. Model ID là ví dụ, cần thay bằng model provider hỗ trợ thực tế. Trong ứng dụng thực tế, xác thực người dùng và giới hạn kích thước body trước khi gọi mô hình.

## 5. Provider là adapter, không phải giao diện

```ts
import { openai } from '@ai-sdk/openai';
// model: openai('model-id-thuc-su-duoc-cap')

// Muốn dùng Anthropic: cài @ai-sdk/anthropic và dùng:
// import { anthropic } from '@ai-sdk/anthropic';
// model: anthropic('model-id-thuc-su-duoc-cap')
```

Ứng dụng nên cấu hình provider ở server (env hoặc server-side setting đã xác thực). Dropdown model cho người dùng có thể gửi `modelId` lên API, nhưng backend phải **allowlist**; không cho client cung cấp tên provider tùy ý hoặc giá/token limit vượt chính sách.

## 6. Streaming và UX

Với non-streaming, UI thường chờ toàn bộ kết quả mới hiển thị. Với streaming, token hoặc chunk đến dần; có thể xuất hiện text, reasoning/tool parts tùy model. Vấn đề thường gặp gồm stream bị ngắt, network timeout, lỗi quota, người dùng gửi thêm yêu cầu khi stream chưa xong và stream lỗi sau khi đã hiển thị một phần.

Bất kỳ thứ gì do client gửi (kể cả `messages`) đều phải coi là dữ liệu không tin cậy. Streaming không làm mất nhu cầu xác thực, kiểm soát chi phí và logging có bảo vệ dữ liệu.

## 7. Thực hành và kiểm tra

**Lab:** Tạo endpoint `/api/chat`, gửi một message từ UI theo bài kế tiếp và kiểm tra phản hồi tăng dần. Thử xóa `OPENAI_API_KEY` để thấy tình huống lỗi; không hiển thị raw stack trace hoặc secret cho người dùng. **Checkpoint:** Request POST có status phù hợp và `useChat` nhận được stream có thể render.

## 8. Câu hỏi ôn tập

### Câu 1

`streamText` khác `generateText` ở điểm chính nào?

A. Chỉ sinh JSON  
B. Chỉ chạy client
C. Không gọi LLM  
D. Cho dữ liệu đến dần  

**Đáp án:** D.

**Giải thích:** streamText cung cấp nội dung dần trong quá trình model sinh.

### Câu 2

Sau `streamText`, cách trả response phù hợp `useChat` hiện đại là?

A. toUIMessageStreamResponse()  
B. JSON.stringify(model)  
C. localStorage
D. res.send(JSX)  

**Đáp án:** A.

**Giải thích:** Hàm này chuyển kết quả thành protocol stream mà UI sử dụng.

### Câu 3

Client được gửi model ID tùy ý đến server có an toàn không?

A. Có nếu ẩn trong DOM  
B. Không; backend nên allowlist  
C. Có nếu HTTPS  
D. Có nếu dùng CSS

**Đáp án:** B.

**Giải thích:** Allowlist ngăn truy cập model hoặc mức chi phí không được phép.

### Câu 4

API key nên đặt ở đâu?

A. App client  
B. GitHub README  
C. Environment phía server  
D. URL query

**Đáp án:** C.

**Giải thích:** Bí mật phải ở server.

### Câu 5

Lợi ích nổi bật của streaming là?

A. Loại bỏ lỗi network  
B. Không cần message
C. Giảm mọi chi phí bằng 0  
D. Cho phản hồi hiển thị trước khi hoàn tất  

**Đáp án:** D.

**Giải thích:** Người dùng thấy phản hồi dần thay vì đợi toàn bộ.

## 9. Tổng kết

Streaming giúp phản hồi hiển thị từng phần thay vì chờ LLM tạo xong toàn bộ. Route Handler sử dụng `streamText` của AI SDK Core và trả stream cho chat UI.
