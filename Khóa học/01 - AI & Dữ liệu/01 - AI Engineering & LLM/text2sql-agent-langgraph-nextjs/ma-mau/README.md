# Mã mẫu tham khảo: Text-to-SQL Agent

Mã nguồn bổ trợ cho khóa học. Đây là **các file ghi đè vào dự án Next.js mới**, không phải dự án đã cài sẵn `node_modules`.

## Chạy thử

```bash
npx create-next-app@latest text2sql-agent --ts --tailwind --app --src-dir --import-alias "@/*"
cd text2sql-agent
npm install langchain @langchain/langgraph @langchain/core @langchain/community zod sqlite3 server-only
```

Chép các file ở `ma-mau/src` vào `src/` của dự án vừa tạo. Sao chép `.env.example` thành `.env.local`, thay bằng thông tin watsonx.ai thật và model **hỗ trợ tool calling**.

```bash
npm run dev
```

Vào `http://localhost:3000` và hỏi `Có bao nhiêu khách hàng?`, `Khách hàng nào có nhiều đơn nhất?`.

## Giới hạn

- Chưa được kiểm thử với tài khoản và model watsonx.ai thực tế, phụ thuộc môi trường và quyền truy cập của bạn.
- SQLite `:memory:` chỉ phù hợp demo Node.js một tiến trình; dữ liệu có thể mất khi khởi động lại hoặc hot-reload.
- Chỉ cho phép truy vấn đọc; cả bộ lọc ứng dụng và `PRAGMA query_only` đều là **hàng rào demo**, không thay thế tài khoản DB chỉ đọc, phân quyền hay kiểm toán production.
- Không triển khai công khai endpoint này nếu chưa bổ sung xác thực, hạn mức, giới hạn tài nguyên truy vấn, kiểm soát quyền từng bảng/cột, chống prompt injection và chính sách dữ liệu.

## Tham khảo API

- https://docs.langchain.com/oss/javascript/migrate/langgraph-v1
- https://reference.langchain.com/javascript/langchain-langgraph/prebuilt/createReactAgent
- https://ibm.github.io/watsonx-ai-node-sdk/
