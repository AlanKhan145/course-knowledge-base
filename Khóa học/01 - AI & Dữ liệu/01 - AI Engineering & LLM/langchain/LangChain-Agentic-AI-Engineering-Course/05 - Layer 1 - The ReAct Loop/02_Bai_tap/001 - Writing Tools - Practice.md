# 001 - Writing Tools - Practice

## 1. Mục tiêu

Bài tập giúp người học tự xây dựng lớp tool cơ bản cho agent thương mại điện tử và kiểm tra xem metadata của tool đã đủ rõ để dùng cho tool calling hay chưa.

Sau khi hoàn thành, người học có thể:

- định nghĩa tool bằng `@tool`;
- mô tả input/output bằng type hint và docstring;
- triển khai phép tính giảm giá xác định;
- tạo khung `run_agent()` có giới hạn iteration và tracing.

## 2. Kiến thức cần dùng

- `init_chat_model()`;
- decorator `@tool`;
- `SystemMessage`, `HumanMessage`, `ToolMessage`;
- LangSmith `traceable`;
- giới hạn số vòng lặp;
- ba mức giảm: Đồng 5%, Bạc 12%, Vàng 23%.

## 3. Đề bài

Xây dựng phần nền của một shopping agent có hai tool:

1. `get_product_price(product)` để tra cứu giá sản phẩm trong catalog.
2. `apply_discount(price, tier)` để áp dụng cấp giảm giá.

Chưa cần triển khai vòng lặp ReAct hoàn chỉnh.

## 4. Nhiệm vụ

### 4.1. Tool tra cứu giá

Tạo `get_product_price` với các yêu cầu:

- nhận tên sản phẩm dạng chuỗi;
- trả về giá dạng số;
- có docstring mô tả rõ công dụng;
- dùng một catalog mẫu;
- với kịch bản kiểm thử chính, `laptop` có giá `1299`;
- nếu không tìm thấy sản phẩm, xử lý theo quy ước của bài thay vì tự sinh một mức giá.

### 4.2. Tool áp dụng giảm giá

Tạo `apply_discount` với các mức:

- Đồng: 5%;
- Bạc: 12%;
- Vàng: 23%.

Kết quả phải được làm tròn đến hai chữ số thập phân.

### 4.3. Khung agent

Tạo `run_agent(question)` nhận câu hỏi của người dùng và chuẩn bị:

- biến giới hạn iteration;
- model được khởi tạo qua lớp trừu tượng LangChain;
- tracing cho toàn bộ lần chạy.

Chưa cần bind tool hoặc thực thi tool trong bài này.

## 5. Yêu cầu hoàn thành

- [ ] Hai hàm đều được chuyển thành LangChain tool.
- [ ] Docstring mô tả đúng chức năng của từng tool.
- [ ] Tham số có type hint rõ ràng.
- [ ] `apply_discount` dùng đúng ba tỷ lệ đã cho.
- [ ] Kết quả tiền được làm tròn hai chữ số.
- [ ] Có giới hạn số vòng lặp, không để agent chạy vô hạn về sau.
- [ ] `run_agent()` nằm trong một trace có thể quan sát bằng LangSmith.

## 6. Tiêu chí tự kiểm tra

Trước khi chuyển sang bài tiếp theo, tự trả lời được các câu hỏi:

1. Vì sao docstring của tool ảnh hưởng đến LLM dù docstring không làm thay đổi phép tính Python?
2. Type hint được dùng cho mục đích gì khi tạo tool schema?
3. Vì sao phép giảm giá nên nằm trong tool thay vì giao cho model tự tính?
4. Giới hạn iteration bảo vệ hệ thống khỏi trường hợp nào?

## 7. Gợi ý

Nếu chưa chắc tool đã được mô tả đúng, hãy kiểm tra metadata/schema mà LangChain tạo ra từ tên hàm, docstring và tham số. Không cần viết vòng lặp ReAct trong bài này.
