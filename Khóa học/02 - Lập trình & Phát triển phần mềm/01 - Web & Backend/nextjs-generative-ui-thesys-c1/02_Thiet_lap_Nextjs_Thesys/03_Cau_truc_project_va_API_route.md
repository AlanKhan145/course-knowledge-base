# Đọc cấu trúc project và triển khai route API

**Loại bài:** Bài học thực hành · **Mục tiêu:** Xác định được layout, page, route handler; giải thích khác nhau giữa endpoint C1 đơn lẻ và hợp đồng /api/chat cho C1Chat.

**Bối cảnh:** Khóa học Generative UI với Next.js và Thesys C1. Nội dung C1 dùng API legacy; với dự án mới, xem OpenUI ở https://www.openui.com/docs.

## 1. Tổ chức App Router
Cấu trúc thường gặp:
```text
app/
  layout.tsx             # khung ứng dụng và CSS
  page.tsx               # trang chính
  api/
    chat/route.ts        # API chat của starter
    generate/route.ts    # endpoint thử độc lập (tự thêm)
```
Trong Next.js App Router, file `route.ts` là HTTP route handler, còn `page.tsx` render nội dung trang. Component cần event handler và state dùng `"use client"`.

## 2. C1 API tương thích OpenAI
Backend dùng OpenAI JS client với base URL C1:
```typescript
import OpenAI from "openai";

export const c1 = new OpenAI({
  apiKey: process.env.THESYS_API_KEY,
  baseURL: "https://api.thesys.dev/v1/embed",
});
```
OpenAI client gửi `chat.completions.create` đến endpoint `/chat/completions` dưới base URL này. Bạn cần chọn model C1 **đang được tài khoản hỗ trợ**, không dùng placeholder trong sản phẩm.

## 3. Route sinh một widget độc lập
Đây là ví dụ **standalone**, dùng với `C1Component`, không phải API tương thích đầy đủ với `C1Chat`:
```typescript
// app/api/generate/route.ts
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.THESYS_API_KEY,
  baseURL: "https://api.thesys.dev/v1/embed",
});

export async function POST(req: Request) {
  const { prompt } = await req.json();
  if (typeof prompt !== "string" || !prompt.trim()) {
    return Response.json({ error: "Invalid prompt" }, { status: 400 });
  }
  const model = process.env.THESYS_C1_MODEL;
  if (!model || !process.env.THESYS_API_KEY) {
    return Response.json({ error: "Server not configured" }, { status: 500 });
  }
  const result = await client.chat.completions.create({
    model,
    messages: [{ role: "user", content: prompt }],
  });
  return new Response(result.choices[0]?.message.content ?? "", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
```
Production cần `try/catch`, rate limiting, auth và schema validation. Đoạn code chỉ minh họa đường đi của dữ liệu.

## 4. Lưu ý về contract của C1Chat
`<C1Chat apiUrl="/api/chat" />` gửi payload phục vụ hội thoại, gồm `prompt`, `threadId`, `responseId` theo tài liệu Conversational API. Không thể lấy endpoint standalone chỉ đọc `{prompt: string}` rồi cho rằng mọi tính năng thread, history và streaming sẽ tự hoạt động. Hãy giữ route `/api/chat` của starter hoặc triển khai hợp đồng trong [Conversational API](https://docs.thesys.dev/legacy/guides/conversational/backend-api).

## 5. Bài thực hành
Tách một route `/api/generate` chuyên sinh báo cáo không có history, sau đó vẽ sơ đồ một route `/api/chat` có thread. Liệt kê những phần khác nhau: request payload, lưu history, stream và danh tính người dùng.

## 6. Tổng kết
Nắm route contract giúp tránh lỗi phổ biến: frontend chat hoàn chỉnh nhưng backend lại chỉ hỗ trợ API một lượt.

## 7. Câu hỏi ôn tập

**Câu 1.** Trong App Router, file nào chứa HTTP route handler?

A. app/styles.css  
B. app/layout.tsx  
C. app/api/chat/route.ts  
D. app/favicon.ico  

**Đáp án:** C. **Giải thích:** Route handler đặt trong route.ts của thư mục tương ứng.

**Câu 2.** Chức năng của baseURL trong OpenAI client C1 là?

A. Đổi endpoint gọi sang C1  
B. Đổi cổng dev server  
C. Định màu theme  
D. Lưu file upload  

**Đáp án:** A. **Giải thích:** BaseURL hướng request đến dịch vụ C1.

**Câu 3.** Endpoint /api/generate ví dụ xử lý kiểu gì?

A. Thread bền vững  
B. Thanh toán  
C. Cập nhật profile  
D. Một yêu cầu độc lập  

**Đáp án:** D. **Giải thích:** Ví dụ không quản lý lịch sử thread.

**Câu 4.** Vì sao cần kiểm tra contract C1Chat?

A. Vì không hỗ trợ React  
B. Vì chat truyền thêm thông tin thread/response  
C. Vì API chỉ có GET  
D. Vì chỉ chạy trong Python  

**Đáp án:** B. **Giải thích:** Chat khác request một lượt về trạng thái và streaming.

**Câu 5.** Khi client gửi prompt rỗng nên trả gì?

A. HTTP 400  
B. HTTP 201  
C. HTTP 301  
D. Trả API key  

**Đáp án:** A. **Giải thích:** Đầu vào không hợp lệ nên được từ chối rõ ràng.

