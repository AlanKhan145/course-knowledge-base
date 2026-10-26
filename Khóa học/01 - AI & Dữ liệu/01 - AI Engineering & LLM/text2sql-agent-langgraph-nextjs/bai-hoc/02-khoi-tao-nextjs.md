---
title: "Bài 02 — Khởi tạo dự án Next.js và cấu trúc mã nguồn"
course: "Xây dựng Text-to-SQL Agent với LangGraph, Next.js, watsonx.ai và SQLite"
lesson_number: 2
lesson_type: "lab"
language: "vi"
---

# Bài 02 — Khởi tạo dự án Next.js và cấu trúc mã nguồn

> **Tóm tắt:** Tạo bộ khung frontend và server với TypeScript, Tailwind và các thư viện cần cho agent.

## 1. Mục tiêu học tập

- Khởi tạo được Next.js App Router và chạy môi trường dev.
- Giải thích đúng công dụng của page.tsx, API route và thư mục lib.
- Thiết lập file env mà không làm lộ thông tin xác thực.

## 2. Chuẩn bị

Cần Node.js phiên bản đang được Next.js hiện hành hỗ trợ, npm, VS Code, tài khoản IBM watsonx.ai có model chat hỗ trợ **tool calling**, và API key cho dự án. Việc có một model trong danh sách không đồng nghĩa model đó hỗ trợ tool calling.

## 3. Khởi tạo ứng dụng

Tại terminal:

```bash
npx create-next-app@latest text2sql-agent --ts --tailwind --app --src-dir --import-alias "@/*"
cd text2sql-agent
npm run dev
```

Mở `http://localhost:3000` để thấy trang mặc định. Khóa học dùng App Router với `src/app/page.tsx`; cách này khác các ứng dụng Next.js cũ dùng `pages/`.

Tắt lệnh dev rồi cài các package dành cho demo:

```bash
npm install langchain @langchain/langgraph @langchain/core @langchain/community zod sqlite3 server-only
```

`langchain` chứa `createAgent`; `@langchain/community` chứa tích hợp `ChatWatsonx`; `zod` khai báo schema tham số tool/API; `sqlite3` chạy DB; `server-only` đánh dấu module không dùng từ client. Tên package dựa trên API v1 tại thời điểm biên soạn, không ghim số phiên bản.

## 4. Tổ chức dự án

```text
text2sql-agent/
├── .env.local
├── src/
│   ├── app/
│   │   ├── page.tsx            # giao diện chat
│   │   └── api/chat/route.ts   # nhận HTTP POST
│   └── lib/
│       ├── agent.ts           # model + tool + agent
│       └── database.ts        # khởi tạo và truy vấn SQLite
└── package.json
```

Thư mục `ma-mau/` trong bộ học liệu chứa các file tương ứng để tham khảo hoặc sao chép vào dự án vừa tạo.

## 5. Biến môi trường

Tạo `.env.local` từ ví dụ `ma-mau/.env.example`:

```dotenv
WATSONX_AI_AUTH_TYPE=iam
WATSONX_AI_APIKEY=your-secret-api-key
WATSONX_PROJECT_ID=your-project-id
WATSONX_SERVICE_URL=https://us-south.ml.cloud.ibm.com
WATSONX_API_VERSION=2024-05-31
WATSONX_MODEL_ID=your-tool-calling-chat-model-id
```

`WATSONX_API_VERSION` là **giá trị ví dụ cho cấu hình API**; kiểm tra phiên bản được hỗ trợ trong môi trường thực tế. Region trong `WATSONX_SERVICE_URL` phải tương ứng với tài khoản. Không đưa `NEXT_PUBLIC_` trước biến bí mật và không commit `.env.local`.

## 6. Kiểm tra và sửa lỗi

- Nếu `npx` không chạy: kiểm tra `node --version`, `npm --version` và quyền truy cập npm registry.
- Nếu không tìm thấy module: đứng đúng thư mục dự án và cài package đã nêu.
- Nếu thiếu thông tin xác thực: kiểm tra biến môi trường bằng tên, không in toàn bộ giá trị khóa ra terminal.
- Nếu lỗi model: kiểm tra `projectId`, `serviceUrl`, model ID và **khả năng tool calling**.

**Checkpoint:** ứng dụng Next.js chạy cục bộ, thư mục `src/lib` tồn tại, file `.env.local` đã được đưa vào `.gitignore`.

## 7. Bàn giao

Một dự án Next.js rỗng nhưng chạy được, sẵn cấu trúc thư mục và cấu hình. Chưa cần kết nối LLM tại checkpoint này.

## 8. Câu hỏi ôn tập

### Câu 1

Lệnh nào khởi động máy chủ Next.js phục vụ phát triển?

A. npm run dev  
B. npm run lint  
C. npm init -y  
D. node database.ts  

**Đáp án:** A  
**Giải thích:** `npm run dev` chạy máy chủ phát triển Next.js.

### Câu 2

API key nên đặt ở đâu?

A. Hằng số trong page.tsx  
B. Thuộc tính HTML data-key  
C. File .env.local phía server  
D. Giá trị Tailwind class  

**Đáp án:** C  
**Giải thích:** Khóa xác thực phải ở server, không lộ trong mã client.

### Câu 3

File nào cung cấp giao diện chính trong App Router?

A. package.json  
B. src/app/page.tsx  
C. src/lib/database.ts  
D. tsconfig.json  

**Đáp án:** B  
**Giải thích:** `page.tsx` định nghĩa UI cho route tương ứng.

### Câu 4

Thư viện dùng để mô tả schema tool là gì?

A. Tailwind  
B. SQLite  
C. React DOM  
D. Zod  

**Đáp án:** D  
**Giải thích:** Zod giúp ràng buộc cấu trúc dữ liệu đầu vào.

### Câu 5

Câu nào đúng về NEXT_PUBLIC_?

A. Được dùng an toàn cho API key  
B. Thay thế server action  
C. Giá trị tiền tố này có thể lộ ở client  
D. Là yêu cầu bắt buộc của watsonx.ai  

**Đáp án:** C  
**Giải thích:** Next.js đưa biến NEXT_PUBLIC_ vào mã trình duyệt khi được sử dụng.
