# Thuật ngữ cốt lõi

| Thuật ngữ | Giải thích ngắn |
| --- | --- |
| Generative UI | Phản hồi giao diện động dựa trên ý định, dữ liệu và các component được kiểm soát |
| LLM | Large Language Model; suy luận ngôn ngữ và lựa chọn tool |
| Tool calling | Model yêu cầu thực hiện một tool với input có cấu trúc |
| `description` | Mô tả khả năng tool để model biết khi nào dùng |
| `inputSchema` | Hợp đồng input của tool, thường biểu diễn bằng Zod |
| `execute` | Hàm backend thực hiện tool và trả kết quả dữ liệu |
| Zod | Thư viện khai báo/kiểm tra schema runtime cho TypeScript |
| AI state | Lịch sử hội thoại/ngữ cảnh cho mô hình |
| UI state | Trạng thái hiển thị và tương tác của giao diện |
| `streamText` | Stream phản hồi của LLM từ backend |
| `useChat` | React hook cho chat streaming và message state |
| `UIMessage.parts` | Các phần text/tool và dữ liệu có cấu trúc trong message |
| RSC | React Server Components; trong AI SDK RSC có streamUI/createAI |
| Server Action | Hàm chạy phía server được client kích hoạt qua cơ chế framework |
| Route Handler | Endpoint HTTP trong `app/**/route.ts` của Next.js |
| ABI | Contract interface mô tả function names, input, output, mutability |
| Read-only | Không chủ đích làm thay đổi trạng thái nguồn dữ liệu |
| Side effect | Hành động làm thay đổi dữ liệu/tài sản/hệ thống bên ngoài |
| Human-in-the-loop | Người dùng duyệt đầu vào và kết quả trước bước nhạy cảm |
| Mock data | Dữ liệu giả lập để học và thử nghiệm, không phải dữ liệu thời gian thực |

## Ghi nhớ

Luôn phân biệt: LLM chọn tool ≠ quyền thực hiện; schema đúng type ≠ user đã được ủy quyền; UI render thành công ≠ giao dịch hoàn tất.
