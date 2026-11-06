# Thiết lập Node, React, biến môi trường và cấu trúc dự án

> **Khóa học:** YouTube Conversational RAG · **Bài 03/20** · **Module:** Nền tảng RAG và chuẩn bị môi trường

## Tóm tắt

Chuẩn bị hai ứng dụng riêng: một server phụ trách AI và dữ liệu, một client chỉ phụ trách giao diện.

## Mục tiêu học tập

- Khởi tạo hai project TypeScript.
- Phân tách biến môi trường public/private.
- Xây dựng được API health check để kiểm tra kết nối.

## 1. Công cụ chuẩn bị

Cần có Node.js phiên bản LTS phù hợp với các gói đang cài, npm, trình chỉnh sửa code, tài khoản Supabase và API key của provider model. Không khóa cứng phiên bản theo transcript: package và API của LangChain thay đổi khá nhanh; cài cùng một major tương thích và kiểm tra changelog khi phát sinh lỗi.

Tạo project theo cấu trúc:

```text
youtube-rag/
  api/
    src/
      app.ts
      lib/
      routes/
      services/
    .env
    package.json
  web/
    src/App.tsx
    .env
    package.json
```

## 2. Khởi tạo backend

```bash
mkdir youtube-rag && cd youtube-rag
mkdir api && cd api
npm init -y
npm install express cors dotenv @supabase/supabase-js @langchain/openai @langchain/community @langchain/core @langchain/textsplitters langchain
npm install -D typescript tsx @types/node @types/express @types/cors
npx tsc --init
```

Thêm script vào `api/package.json`:

```json
{
  "scripts": {
    "dev": "tsx watch src/app.ts",
    "typecheck": "tsc --noEmit"
  }
}
```

Mẫu `src/app.ts`:

```ts
import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: process.env.WEB_ORIGIN ?? "http://localhost:5173" }));
app.use(express.json({ limit: "1mb" }));
app.get("/health", (_req, res) => res.json({ ok: true }));
app.listen(8080, () => console.log("API ready at http://localhost:8080"));
```

Chạy `npm run dev`, sau đó `curl http://localhost:8080/health`. Endpoint trả về `{"ok":true}` là checkpoint đầu tiên. Nếu chạy TypeScript NodeNext, nhất quán `moduleResolution`, `type` và phần mở rộng import theo cấu hình; ví dụ minh họa ở đây giả định công cụ `tsx`.

## 3. Tạo React + Vite

```bash
cd ..
npm create vite@latest web -- --template react-ts
cd web
npm install
npm run dev
```

Đặt `web/.env`:

```dotenv
VITE_API_BASE_URL=http://localhost:8080
```

Bất kỳ tên biến `VITE_*` nào đều được đưa vào bundle phía browser. Vì vậy **không** đặt `OPENAI_API_KEY`, `SUPABASE_SECRET_KEY` hay service-role key trong file env frontend. Backend dùng:

```dotenv
SUPABASE_URL=https://YOUR_PROJECT.supabase.co
SUPABASE_SECRET_KEY=YOUR_SERVER_ONLY_KEY
OPENAI_API_KEY=YOUR_OPENAI_KEY
WEB_ORIGIN=http://localhost:5173
```

Không commit `.env`; tạo `.env.example` không có secret để chia sẻ cách cấu hình.

## 4. Kế hoạch endpoint

| Method | Path | Mục đích |
| --- | --- | --- |
| `GET` | `/health` | Kiểm tra server |
| `POST` | `/api/ingest` | Nhập video, tạo/tái sử dụng document và chat |
| `POST` | `/api/chat` | Nhận câu hỏi, lọc vector, streaming SSE |
| `GET` | `/api/conversations/:id/messages` | Đọc lịch sử đã lưu (bài mở rộng) |

`/api/ingest` cần trả `conversation_id`, `document_id`; `/api/chat` nhận các ID này chứ không nhận “toàn bộ transcript” qua client.

## 5. Những lỗi thường gặp

- CORS: origin client không khớp backend; không nên đặt `*` khi dùng cookie/credentials.
- `process.env` là `undefined`: quên tải dotenv, tên biến sai, chạy sai thư mục.
- Code import lỗi: hai phiên bản `langchain` và `@langchain/core` không tương thích.
- Khóa bí mật lộ trong Git: phải thu hồi và cấp lại, không chỉ xóa khỏi commit mới.

## 6. Thực hành

Tạo server health check và frontend fetch GET. Mở DevTools kiểm tra API có trả JSON. Tạo file `.gitignore` bỏ qua `.env`, `node_modules`, `dist`.

## 7. Tổng kết

Ranh giới browser/server rõ ràng ngay từ đầu giúp tránh nhiều vấn đề về quyền truy cập database và tránh phải viết lại logic khi triển khai thực tế.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Biến nào có thể đưa vào client Vite?

A. SUPABASE_SECRET_KEY  
B. OPENAI_API_KEY  
C. VITE_API_BASE_URL  
D. Database password  

**Đáp án:** C. **Giải thích:** API base URL công khai không phải bí mật.

### Câu 2

Endpoint nào thích hợp để kiểm tra Express chạy?

A. /health  
B. /delete-all  
C. /private-key  
D. /sql-admin  

**Đáp án:** A. **Giải thích:** Health check chỉ trả trạng thái đơn giản.

### Câu 3

Khi gặp lỗi CORS cần kiểm tra gì trước?

A. Độ dài embedding  
B. Màu nút bấm  
C. UUID video  
D. Origin của web so với cấu hình backend  

**Đáp án:** D. **Giải thích:** Origin sai là nguyên nhân phổ biến.

### Câu 4

Mục tiêu của thư mục `api/`?

A. Lưu key dưới web  
B. Xử lý dữ liệu và gọi model trên server  
C. Tạo CSS  
D. Thay thế PostgreSQL  

**Đáp án:** B. **Giải thích:** API tập trung nghiệp vụ nhạy cảm.

### Câu 5

Vì sao tạo `.env.example`?

A. Để đặt secret thật  
B. Để chia sẻ tên biến mà không lộ khóa  
C. Để build React nhanh gấp đôi  
D. Để tạo embeddings  

**Đáp án:** B. **Giải thích:** Mẫu cấu hình không chứa khóa thật.


## Tài liệu tham khảo để kiểm tra API hiện hành

- [Supabase LangChain integration](https://supabase.com/docs/guides/ai/langchain)
- [Supabase vector columns](https://supabase.com/docs/guides/ai/vector-columns)
- [Supabase vector indexes](https://supabase.com/docs/guides/ai/vector-indexes)
- [Supabase HNSW indexes](https://supabase.com/docs/guides/ai/vector-indexes/hnsw-indexes)
- [LangChain JS API reference](https://reference.langchain.com/javascript/)
- [LangChain recursive text splitter](https://reference.langchain.com/javascript/langchain-textsplitters/RecursiveCharacterTextSplitter)
- [LangChain SupabaseVectorStore](https://reference.langchain.com/javascript/langchain-community/vectorstores/supabase)

**Lưu ý phiên bản:** các ví dụ `createHistoryAwareRetriever`, `createStuffDocumentsChain`, `createRetrievalChain` dùng chain API truyền thống. Nếu major `langchain` đang cài không còn export đường dẫn đó, dùng phiên bản tương thích hoặc cập nhật theo reference hiện hành. Các đoạn code trong từng bài giải thích thành phần cốt lõi và được ghép cùng các helper trong cùng module; chúng không phải tất cả là file chạy độc lập.
