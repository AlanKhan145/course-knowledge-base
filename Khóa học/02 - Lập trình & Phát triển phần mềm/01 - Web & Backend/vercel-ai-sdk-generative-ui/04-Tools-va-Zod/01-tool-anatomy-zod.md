# Anatomy của AI Tool: description, Zod schema và execute

> **Loại bài:** lesson · **Chuyên đề:** Module 04 — Tool calling và Zod

## 1. Tóm tắt

Mỗi tool định nghĩa một khả năng mà LLM có thể yêu cầu backend thực hiện. Tên, mô tả và schema ảnh hưởng đến việc model chọn tool và điền tham số; hàm thực thi quyết định kết quả nghiệp vụ.

## 2. Mục tiêu học tập

- Định nghĩa tool có `description`, `inputSchema` và `execute`.
- Giải thích Zod validation và ràng buộc range.
- Phân biệt lỗi hiểu ý định và lỗi dữ liệu đầu vào.

## 3. Một tool có những phần nào?

`name` là key của object `tools`. `description` nói rõ tool phục vụ yêu cầu gì. `inputSchema` xác định kiểu và các giới hạn đầu vào, đóng vai trò hợp đồng giữa mô hình với backend. `execute` dùng input hợp lệ và trả data. **Tool không chỉ là một hàm JavaScript**: nó là một hành động đã được công khai cho LLM trong phạm vi cụ thể.

## 4. Ví dụ drawGrid dùng Zod

```ts
import { tool } from 'ai';
import { z } from 'zod';

export const drawGrid = tool({
  description:
    'Tạo bản xem trước lưới dashboard theo số hàng và số cột; ' +
    'chỉ gọi khi người dùng yêu cầu bố cục lưới.',
  inputSchema: z.object({
    rows: z.number().int().min(1).max(8)
      .describe('Số hàng nguyên, từ 1 đến 8'),
    columns: z.number().int().min(1).max(8)
      .describe('Số cột nguyên, từ 1 đến 8'),
  }),
  execute: async ({ rows, columns }) => ({ rows, columns }),
});
```

Schema chặn những giá trị như `0`, `-1`, `3.14`, hoặc số vượt thiết kế. Mô tả rõ ràng giúp model nhận ra lúc nào nên dùng tool, nhưng không bảo đảm model luôn chọn đúng. Vì thế cần xem log test tình huống và có fallback khi model không đủ thông tin.

## 5. Phân biệt input schema với output schema

Input schema ràng buộc **tham số model đề xuất**. Kết quả tool có thể xuất phát từ database hoặc API bên ngoài và cần kiểm tra riêng. Ví dụ:

```ts
const GridResult = z.object({
  rows: z.number().int().min(1).max(8),
  columns: z.number().int().min(1).max(8),
});

const safeData = GridResult.parse(resultFromTool);
```

Với dịch vụ bên ngoài, một dữ liệu hợp lệ về mặt type vẫn có thể sai về nghiệp vụ; ví dụ số dư của ví không thuộc người dùng. Validation không thay authentication và authorization.

## 6. Khi thiếu tham số

Nếu người dùng chỉ nói “Vẽ lưới”, model không nên tự đoán mặc định số hàng/cột nếu chưa có quy ước. Có hai cách phù hợp: hỏi tiếp “Bạn muốn bao nhiêu hàng và cột?” hoặc hiển thị form lấy các tham số. Không nên tự chạy 100×100 vì thiếu giới hạn sẽ gây quá tải UI.

Nếu yêu cầu “Vẽ 2 hàng, 3 cột”, input đã đủ và tool có thể chạy ngay. Vì vậy mô tả tốt vừa hướng dẫn tool selection, vừa làm rõ khi nào cần hỏi lại.

## 7. Bài kiểm thử schema

| Input | Kỳ vọng |
| --- | --- |
| `{rows:2,columns:3}` | Pass |
| `{rows:-1,columns:3}` | Reject |
| `{rows:2.5,columns:3}` | Reject |
| `{rows:9,columns:3}` | Reject |
| `{rows:"2",columns:3}` | Reject nếu không dùng coercion |

Tránh dùng `z.coerce.number()` bừa bãi khi cần type nghiêm ngặt; ứng dụng nên chủ động chọn nơi cho phép chuyển đổi chuỗi số.

## 8. Thực hành và kiểm tra

**Lab:** Dùng Zod viết schema `drawGrid`, kiểm tra năm input trong bảng và ghi lại pass/fail. Đổi `description` thành mơ hồ (“Làm mọi việc”) rồi giải thích vì sao tool dễ bị model chọn nhầm. **Deliverable:** schema, test cases, mô tả cập nhật.

## 9. Câu hỏi ôn tập

### Câu 1

Trong tool, phần nào giải thích khi nào model nên gọi?

A. description  
B. CSS class  
C. return type của JSX  
D. Next metadata

**Đáp án:** A.

**Giải thích:** Mô tả rõ ràng hỗ trợ model chọn tool đúng ngữ cảnh.

### Câu 2

Cú pháp Zod phù hợp để chỉ cho phép số nguyên từ 1 đến 8?

A. z.string()  
B. z.number().int().min(1).max(8)  
C. z.boolean()  
D. z.any()

**Đáp án:** B.

**Giải thích:** Chuỗi ràng buộc xác định type, tính nguyên và khoảng cho phép.

### Câu 3

`execute` nên trả gì trong kiến trúc client-rendering?

A. HTML từ model
B. React component tùy ý  
C. Data có cấu trúc  
D. API key  

**Đáp án:** C.

**Giải thích:** Client render component từ dữ liệu hợp lệ của tool.

### Câu 4

Schema đầu vào có tự xác minh quyền sở hữu ví không?

A. Chỉ trên mobile  
B. Chỉ trong RSC
C. Có  
D. Không, authz phải làm riêng  

**Đáp án:** D.

**Giải thích:** Type validation không chứng minh quyền truy cập nghiệp vụ.

### Câu 5

Người dùng nói “vẽ lưới” mà không cung cấp kích thước, giải pháp an toàn là?

A. Hỏi thêm hoặc mở form  
B. Gửi data rỗng như hoàn thành
C. Đoán 1000 hàng  
D. Bỏ qua yêu cầu  

**Đáp án:** A.

**Giải thích:** Thiếu tham số nên lấy bổ sung từ người dùng.

## 10. Tổng kết

Mỗi tool định nghĩa một khả năng mà LLM có thể yêu cầu backend thực hiện. Tên, mô tả và schema ảnh hưởng đến việc model chọn tool và điền tham số; hàm thực thi quyết định kết quả nghiệp vụ.
