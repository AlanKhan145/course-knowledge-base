---
title: "Bài 04 — Kết nối watsonx.ai và tạo agent ReAct"
course: "Xây dựng Text-to-SQL Agent với LangGraph, Next.js, watsonx.ai và SQLite"
lesson_number: 4
lesson_type: "lesson"
language: "vi"
---

# Bài 04 — Kết nối watsonx.ai và tạo agent ReAct

> **Tóm tắt:** Tạo agent biết gọi tool và sử dụng model chat được cấp quyền trong IBM watsonx.ai.

## 1. Mục tiêu học tập

- Thiết lập ChatWatsonx từ biến môi trường.
- Phân biệt createReactAgent cũ và createAgent hiện hành.
- Giải thích cách agent quyết định gọi tool hoặc trả lời trực tiếp.

## 2. Model chat và tool calling

Một model Text-to-SQL không chỉ cần “biết cú pháp SQL”; nó còn cần tạo **tool call có schema** để yêu cầu backend chạy SQL. Không phải mọi model trên watsonx.ai đều có công cụ này; hãy lựa chọn model hỗ trợ và được phép sử dụng trong dự án của bạn.

```ts
import { ChatWatsonx } from "@langchain/community/chat_models/ibm";

const model = new ChatWatsonx({
  model: process.env.WATSONX_MODEL_ID!,
  projectId: process.env.WATSONX_PROJECT_ID!,
  serviceUrl: process.env.WATSONX_SERVICE_URL!,
  version: process.env.WATSONX_API_VERSION!,
  watsonxAIAuthType: "iam",
  watsonxAIApikey: process.env.WATSONX_AI_APIKEY!,
  temperature: 0,
});
```

Dấu `!` cho TypeScript biết ta mong biến tồn tại; nó không tự xác minh runtime. Mã mẫu dùng `requireEnv` để ném lỗi nếu cấu hình thiếu.

## 3. Vòng đời agent

LangGraph từng cung cấp `createReactAgent` qua `@langchain/langgraph/prebuilt`. Trong LangGraph v1, phần prebuilt này đã **deprecated**, thay bằng `createAgent` thuộc package `langchain` trên nền LangGraph. Vì vậy khóa học giữ nguyên tư tưởng ReAct nhưng viết theo API mới:

```ts
import { createAgent } from "langchain";

const agent = createAgent({
  model,
  tools: [getFromDB],
  systemPrompt: "Bạn là trợ lý truy vấn SQLite, chỉ sử dụng tool khi cần dữ liệu thật.",
});

const result = await agent.invoke({
  messages: [{ role: "user", content: "Có bao nhiêu khách hàng?" }],
});
```

`getFromDB` là công cụ sẽ được định nghĩa khi có database. Khi chưa có tool, có thể bắt đầu với `tools: []` để xác minh model chat hoạt động. Việc đổi `createReactAgent` sang `createAgent` còn thay đổi tên cấu hình prompt (`systemPrompt`).

## 4. Kiểu tin nhắn và tuần tự hóa

LangChain cung cấp `HumanMessage`, `AIMessage`, `SystemMessage`, `BaseMessage`. Về bản chất:

| Loại | Ai tạo | Dùng để làm gì |
|---|---|---|
| HumanMessage | Người dùng | Câu hỏi, yêu cầu |
| AIMessage | Chat model | Phản hồi, có thể chứa tool call |
| SystemMessage | Ứng dụng | Hướng dẫn vai trò và nguyên tắc |
| ToolMessage | Công cụ | Kết quả trả lại cho agent |

Đối tượng class có metadata, đôi khi không thích hợp đưa trực tiếp qua ranh giới client–server. Mã mẫu gửi JSON `{role, content}` từ giao diện, rồi để LangChain chuẩn hóa message ở backend. Nếu dùng Server Actions thay API route, vẫn phải tuân thủ giới hạn tuần tự hóa giá trị đầu vào/đầu ra; không gửi các instance class phức tạp qua mạng nếu không có hợp đồng dữ liệu rõ ràng.

## 5. Prompt điều khiển hành vi

Một system prompt thích hợp nói rõ: đây là SQLite, tên bảng và cột phải đặt trong nháy kép, sử dụng `GetFromDB` khi cần biết dữ liệu nội bộ, không bịa số liệu, và khi lỗi thì sửa truy vấn trong phạm vi cho phép. Prompt **không thay thế quyền database**.

## 6. Lỗi thường gặp

- **401/403:** xác minh API key, dự án, quyền truy cập model.
- **Không gọi tool:** model có thể không hỗ trợ tool calling hoặc mô tả tool quá mơ hồ.
- **Tool call lặp:** hạn chế vòng lặp, thu gọn lịch sử, kiểm tra lỗi SQL cụ thể.
- **Không đọc được biến env:** đã khởi động lại `npm run dev` sau khi thêm `.env.local` chưa?

## 7. Tự thực hành

Trước khi nối SQL, hãy tạo một agent chỉ có model và hỏi “Kể một câu chuyện cười về SQL”. Ghi nhận kết quả, sau đó thử một câu hỏi đòi hỏi dữ liệu nội bộ để thấy vì sao cần công cụ.

## 8. Câu hỏi ôn tập

### Câu 1

API nào được khuyến nghị thay createReactAgent trong LangGraph v1?

A. createAgent  
B. createServer  
C. useState  
D. createDatabase  

**Đáp án:** A  
**Giải thích:** LangChain v1 cung cấp `createAgent` chạy trên LangGraph.

### Câu 2

Điều kiện quan trọng để LLM gọi GetFromDB là gì?

A. Có Tailwind  
B. Model hỗ trợ tool calling  
C. Có trình duyệt Chrome  
D. Phải dùng NoSQL  

**Đáp án:** B  
**Giải thích:** Tool calling là khả năng của model/API.

### Câu 3

Trong agent, kết quả thực thi tool thường xuất hiện dưới dạng gì?

A. CSS rule  
B. Component  
C. ToolMessage  
D. API key  

**Đáp án:** C  
**Giải thích:** ToolMessage mang dữ liệu từ tool về cho agent.

### Câu 4

Câu nào đúng về prompt?

A. Prompt đủ thay thế phân quyền SQL  
B. Prompt bảo mật được API key cho frontend  
C. Prompt cho phép tự ý DROP bảng  
D. Prompt định hướng hành vi nhưng không thay kiểm soát quyền  

**Đáp án:** D  
**Giải thích:** Giới hạn quyền phải cưỡng chế tại backend/DB.

### Câu 5

Khi nào có thể bắt đầu với tools: []?

A. Thử riêng kết nối chat model  
B. Để JOIN hai bảng  
C. Để chạy SQL thật  
D. Để thay .env.local  

**Đáp án:** A  
**Giải thích:** Agent không tool vẫn giúp kiểm chứng kết nối model.
