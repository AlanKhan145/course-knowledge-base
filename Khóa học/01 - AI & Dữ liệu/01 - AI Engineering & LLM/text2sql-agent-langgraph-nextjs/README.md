# Khóa học: Xây dựng AI Text-to-SQL Agent

**Next.js · TypeScript · LangChain/LangGraph · watsonx.ai · SQLite**

Khóa học thực hành xây trợ lý có thể giao tiếp với cơ sở dữ liệu bằng tiếng Việt. Bạn sẽ tạo giao diện chat, xây agent có khả năng gọi `GetFromDB`, dùng SQLite để trả lời câu hỏi đếm khách hàng và JOIN đơn hàng, sau đó bổ sung lớp kiểm soát an toàn và bài tập chuyển hướng thành trợ lý tư vấn món ăn.

## Lộ trình học

| Bài | Nội dung | Loại |
|---|---|---|
| [01](bai-hoc/01-tong-quan-text2sql.md) | Bài toán, kiến trúc, ReAct | Lý thuyết |
| [02](bai-hoc/02-khoi-tao-nextjs.md) | Khởi tạo dự án, env | Lab |
| [03](bai-hoc/03-frontend-chat.md) | React state, chat UI | Lab |
| [04](bai-hoc/04-agent-watsonx.md) | watsonx.ai và agent | Lý thuyết |
| [05](bai-hoc/05-sqlite-schema.md) | Schema, seed dữ liệu | Lab |
| [06](bai-hoc/06-cong-cu-sql.md) | Công cụ `GetFromDB`, SQL | Lab |
| [07](bai-hoc/07-ket-noi-end-to-end.md) | Tích hợp và debug | Lab |
| [08](bai-hoc/08-guardrails-testing.md) | Guardrails, kiểm thử | Ôn tập |
| [09](bai-hoc/09-du-an-mon-an.md) | Dự án tư vấn món ăn | Project |
| [10](bai-hoc/10-tong-ket.md) | Ôn tập và đánh giá | Assessment |

Mỗi bài được viết độc lập bằng tiếng Việt, có mục tiêu rõ ràng, ví dụ, câu hỏi trắc nghiệm với đáp án/giải thích, sơ đồ Mermaid khi cần.

## Đầu ra thực hành

- `ma-mau/` chứa mã TypeScript tham khảo cho `page.tsx`, `api/chat/route.ts`, `lib/agent.ts`, `lib/database.ts` và file `.env.example`.
- `thuc-hanh/KICH_BAN_KIEM_THU.md` chứa bảng test SQL và phản hồi.
- Tạo một dự án Next.js mới bằng CLI rồi **chép** mã mẫu vào; thư mục `ma-mau` không phải repo đã cài hoàn chỉnh.

## Lưu ý quan trọng

- Hướng dẫn dùng `createAgent` (LangChain v1 chạy trên LangGraph); `createReactAgent` trong LangGraph v1 đã deprecated. Cách dùng ReAct trong nội dung vẫn được giữ nguyên.
- Dữ liệu 10 khách hàng và 14 đơn hàng là dữ liệu mẫu tự xây, không phải dữ liệu thực.
- Mã mẫu chưa được chạy thử bằng watsonx.ai có credentials thật. Khả năng tool calling, quyền và model ID phụ thuộc tài khoản.
- Không triển khai dữ liệu khách hàng thật với chỉ những guardrails của demo.

## Tài liệu API đối chiếu

- [Hướng dẫn chuyển từ createReactAgent sang createAgent](https://docs.langchain.com/oss/javascript/migrate/langgraph-v1)
- [Tham chiếu hàm createReactAgent đã deprecated](https://reference.langchain.com/javascript/langchain-langgraph/prebuilt/createReactAgent)
- [IBM watsonx.ai Node SDK - xác thực](https://ibm.github.io/watsonx-ai-node-sdk/)

*Mô hình, phiên bản thư viện và cấu hình IBM có thể thay đổi. Đọc tài liệu nhà cung cấp trước khi sử dụng trên production.*
