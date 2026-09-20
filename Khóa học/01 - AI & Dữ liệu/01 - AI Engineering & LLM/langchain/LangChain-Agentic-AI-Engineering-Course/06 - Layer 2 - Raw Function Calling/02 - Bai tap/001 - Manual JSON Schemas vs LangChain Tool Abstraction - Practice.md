# 001 - Bài tập: Manual JSON Schemas và LangChain Tool Abstraction

## 1. Mục tiêu

Bài tập giúp người học:

- Viết được tool schema cho một hàm Python theo cấu trúc đã học.
- Xác định đúng metadata mà LLM cần để gọi một tool.
- Phân biệt việc tự quản lý schema với việc dùng abstraction của LangChain.
- Giải thích được ảnh hưởng của khác biệt provider đến chi phí tích hợp.

## 2. Kiến thức cần dùng

Sử dụng các khái niệm:

- raw function calling;
- JSON tool schema;
- `type`, `function`, `name`, `description`, `parameters`, `properties`, `required`;
- Google-style docstring;
- LangChain Tool abstraction.

## 3. Đề bài

Giả sử ứng dụng có hai hàm Python là `get_product_price` và `apply_discount`. Mục tiêu là chuẩn bị chúng để LLM có thể chọn công cụ khi ứng dụng gọi trực tiếp Ollama SDK, không dùng LangChain Tool decorator.

## 4. Nhiệm vụ

### 4.1. Xây dựng schema cho `get_product_price`

Tạo một dictionary JSON-compatible mô tả tool `get_product_price` với các thông tin sau:

- loại tool là function;
- tên function là `get_product_price`;
- mục đích là tra cứu giá sản phẩm trong danh mục;
- có tham số bắt buộc `product`;
- `product` có kiểu string;
- mô tả tham số có thể dùng các ví dụ laptop, tai nghe và bàn phím.

### 4.2. Tổ chức `tools_for_llm`

Đưa schema vừa tạo vào một danh sách tên `tools_for_llm`. Chuẩn bị cấu trúc để có thể thêm schema của `apply_discount` theo cùng nguyên tắc.

Không cần tự bịa thêm tham số của `apply_discount` nếu chưa có định nghĩa hàm cụ thể.

### 4.3. So sánh hai cách cung cấp tool cho Ollama

Viết ngắn gọn sự khác biệt giữa:

1. tự viết JSON schema;
2. truyền trực tiếp hàm Python để Ollama chuyển đổi thành tool.

Trong phần so sánh phải đề cập vai trò của Google-style docstring.

### 4.4. Phân tích lợi ích của LangChain

Viết một đoạn giải thích từ 5 đến 8 câu trả lời câu hỏi:

> Vì sao việc chuyển từ Ollama sang một provider khác có thể tốn nhiều công sức hơn nếu ứng dụng tự xử lý toàn bộ schema và message format?

Liên hệ câu trả lời với Tool abstraction của LangChain.

## 5. Yêu cầu hoàn thành

- [ ] Schema của `get_product_price` có đủ tên, mô tả và cấu trúc tham số.
- [ ] `product` được đánh dấu là tham số bắt buộc.
- [ ] Có danh sách `tools_for_llm` chứa tool schema.
- [ ] Phân biệt được manual schema và chuyển đổi trực tiếp từ Python function.
- [ ] Nêu đúng vai trò của Google-style docstring.
- [ ] Giải thích được vì sao abstraction giúp giảm mã phụ thuộc provider.

## 6. Tiêu chí tự đánh giá

| Tiêu chí | Đạt khi |
| --- | --- |
| Đúng cấu trúc tool | Schema biểu diễn đúng function và parameters |
| Đúng ý nghĩa | Mô tả tool đủ để LLM hiểu mục đích và input |
| Không bịa API | Không thêm trường hoặc tham số không có căn cứ |
| Hiểu abstraction | Phân tích được phần công việc LangChain tự động hóa |
| Trình bày | Code block và giải thích rõ ràng, ngắn gọn |

## 7. Gợi ý

Bắt đầu từ câu hỏi: "Nếu LLM không nhìn thấy code Python, nó cần những thông tin tối thiểu nào để quyết định gọi `get_product_price`?" Từ đó ánh xạ các thông tin thành `name`, `description` và `parameters`.
