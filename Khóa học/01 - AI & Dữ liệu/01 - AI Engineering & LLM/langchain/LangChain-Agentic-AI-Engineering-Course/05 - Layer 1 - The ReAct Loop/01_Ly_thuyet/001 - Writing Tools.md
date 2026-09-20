# 001 - Writing Tools

## 1. Tóm tắt

Một agent chỉ có thể sử dụng công cụ hiệu quả khi công cụ được mô tả đủ rõ cho mô hình ngôn ngữ. Bài này xây dựng lớp nền cho agent thương mại điện tử mẫu: khởi tạo chat model, định nghĩa hai tool, mô tả input/output bằng type hint và docstring, sau đó chuẩn bị hàm `run_agent()` và tracing bằng LangSmith.

Điểm quan trọng không nằm ở độ phức tạp của hai hàm mẫu. Mục tiêu là hiểu cách một hàm Python trở thành một tool mà LLM có thể nhận biết và yêu cầu thực thi.

## 2. Mục tiêu học tập

Sau bài này, người học có thể:

- giải thích vai trò của `init_chat_model()` trong lớp trừu tượng model của LangChain;
- sử dụng `@tool` để biến một hàm Python thành tool cho agent;
- giải thích vì sao tên hàm, docstring, tham số và kiểu dữ liệu ảnh hưởng đến tool calling;
- phân biệt `SystemMessage`, `HumanMessage` và `ToolMessage`;
- thiết lập giới hạn số vòng lặp cho agent;
- mô tả cách LangSmith tracing bao bọc toàn bộ một lần chạy agent.

## 3. Chuẩn bị môi trường và model

Ứng dụng bắt đầu bằng việc tải biến môi trường từ file dotenv. Đây là nơi thường chứa khóa API hoặc cấu hình cần thiết cho provider.

LangChain cung cấp `init_chat_model()` để khởi tạo chat model thông qua một giao diện thống nhất. Thay vì để toàn bộ chương trình phụ thuộc trực tiếp vào class riêng của từng provider, model có thể được chọn thông qua cấu hình phù hợp.

Muốn sử dụng một provider, môi trường vẫn phải có gói tích hợp tương ứng. Ví dụ, khi dùng OpenAI cần có gói tích hợp LangChain cho OpenAI; khi dùng Ollama cần có gói tích hợp LangChain cho Ollama. Lớp trừu tượng giúp giảm thay đổi trong mã nguồn, nhưng không thay thế dependency của provider.

Trong ví dụ của section, model cục bộ Qwen3 1.7B được chạy qua Ollama. Việc lựa chọn model này chỉ phục vụ cho bài thực hành; vòng lặp agent không được thiết kế để phụ thuộc vào riêng model đó.

## 4. Các loại message cần cho agent

Ba loại message được dùng xuyên suốt vòng lặp:

| Message | Vai trò |
|---|---|
| `SystemMessage` | Chứa vai trò và các quy tắc mà agent phải tuân thủ. |
| `HumanMessage` | Chứa yêu cầu của người dùng. |
| `ToolMessage` | Chứa kết quả thực thi tool để gửi trở lại cho model. |

Việc chuẩn hóa message giúp cùng một cấu trúc hội thoại có thể được truyền qua nhiều chat model khác nhau mà không phải viết lại toàn bộ logic agent.

## 5. Giới hạn vòng lặp agent

Agent sẽ tiếp tục gọi model và tool nhiều lần cho đến khi model tạo câu trả lời cuối cùng. Vì vậy cần một giới hạn để tránh vòng lặp không kết thúc.

Ví dụ sử dụng tối đa 10 lần lặp. Con số 10 không phải yêu cầu kỹ thuật bắt buộc mà là một giới hạn kinh nghiệm cho bài học. Ý nghĩa chính là agent phải luôn có cơ chế dừng an toàn khi hành vi không diễn ra như mong đợi.

## 6. Tool thứ nhất: tra cứu giá sản phẩm

Tool `get_product_price` nhận tên sản phẩm và trả về giá tương ứng trong catalog mẫu. Nếu sản phẩm không tồn tại, triển khai minh họa trả về `0`.

Một cấu trúc tối thiểu có thể được hình dung như sau:

```python
@tool
def get_product_price(product: str) -> float:
    """Tra cứu giá của một sản phẩm trong catalog."""
    # Tra cứu product trong bảng giá và trả về giá tương ứng.
    ...
```

Giá trị của ví dụ không phải phần quan trọng nhất. Phần quan trọng là metadata của tool:

- tên hàm cho model biết tool đại diện cho thao tác gì;
- docstring mô tả mục đích;
- tên và type của tham số mô tả input;
- kiểu trả về giúp hoàn thiện schema của tool.

## 7. Tool thứ hai: áp dụng giảm giá

Tool `apply_discount` nhận giá hiện tại và cấp khuyến mãi. Ba cấp được sử dụng trong ví dụ là:

| Cấp | Tỷ lệ giảm |
|---|---:|
| Đồng | 5% |
| Bạc | 12% |
| Vàng | 23% |

Công thức tính giá sau giảm là:

```text
giá cuối = giá gốc × (1 - tỷ lệ giảm / 100)
```

Kết quả được làm tròn đến hai chữ số thập phân.

Một khung tool tương ứng:

```python
@tool
def apply_discount(price: float, tier: str) -> float:
    """Áp dụng mức giảm theo cấp và trả về giá cuối cùng."""
    ...
```

Việc đưa phép tính vào tool có hai lợi ích trong kiến trúc agent mẫu. Thứ nhất, phép tính được thực hiện bởi mã xác định thay vì yêu cầu model tự tính. Thứ hai, agent có thể tạo một chuỗi thao tác rõ ràng: lấy giá thật trước, sau đó mới áp dụng giảm giá.

## 8. Vì sao docstring và type hint quan trọng

Khi dùng `@tool`, LangChain thu thập metadata của hàm để tạo mô tả tool phù hợp cho chat model. Thông tin quan trọng gồm:

- tên tool;
- mô tả từ docstring;
- danh sách tham số;
- kiểu dữ liệu của tham số;
- kiểu dữ liệu trả về.

Các metadata này được chuyển thành định dạng mà provider hỗ trợ cho function/tool calling. Vì vậy, viết tool cho agent không chỉ là viết logic Python; cần thiết kế interface đủ rõ để model chọn đúng tool và điền đúng argument.

Một docstring mơ hồ hoặc tham số đặt tên thiếu nghĩa có thể làm giảm chất lượng tool selection ngay cả khi code bên trong hoàn toàn đúng.

## 9. Khung `run_agent()`

Sau khi định nghĩa tool, ứng dụng chuẩn bị hàm `run_agent(question)` để nhận câu hỏi của người dùng. Ở thời điểm này, hàm chưa chứa vòng lặp ReAct hoàn chỉnh; nó mới là điểm vào cho logic agent ở các bài tiếp theo.

Trường hợp thử nghiệm xuyên suốt section là yêu cầu tính giá một chiếc laptop sau khi áp dụng ưu đãi vàng. Để trả lời đúng, agent cần hoàn thành hai bước theo thứ tự:

```text
Câu hỏi người dùng
      ↓
Tra cứu giá sản phẩm
      ↓
Áp dụng mức giảm vàng
      ↓
Trả lời người dùng
```

Chuỗi này tạo ra một bài toán đủ đơn giản để quan sát rõ cách LLM quyết định tool call qua nhiều vòng lặp.

## 10. Theo dõi bằng LangSmith

Hàm `run_agent()` được bao bọc bằng tracing của LangSmith để toàn bộ lần chạy có thể xuất hiện trong cùng một trace.

Ví dụ sử dụng decorator `traceable` với tên trace `LangChain Agent Loop`. Khi logic agent được bổ sung ở các bài sau, những thao tác nằm trong hàm này có thể được quan sát trong cùng một phạm vi.

Tracing đặc biệt hữu ích để theo dõi:

- thời gian thực thi;
- lượng token tiêu thụ;
- chi phí khi provider cung cấp thông tin này;
- thứ tự các lần gọi model;
- thứ tự các lần gọi tool;
- input và output của từng bước.

Một trace rỗng ở giai đoạn đầu vẫn có giá trị: nó xác nhận rằng đầu vào của `run_agent()` đã được ghi lại đúng và tạo sẵn khung quan sát cho vòng lặp được triển khai tiếp theo.

## 11. Những điểm dễ sai

Không nên xem tool chỉ như một hàm Python thông thường. Với agent, phần interface của hàm quan trọng gần tương đương phần logic bên trong.

Cần tránh các lỗi sau:

- docstring không mô tả rõ chức năng;
- tên tham số mơ hồ;
- type hint không phản ánh dữ liệu thực tế;
- thiếu integration package của provider;
- không đặt giới hạn vòng lặp;
- không có tracing hoặc log khiến khó xác định agent đã chọn tool nào.

## 12. Tổng kết

Bài này hoàn thành lớp nền cho ReAct agent: model có thể được khởi tạo qua lớp trừu tượng của LangChain, các hàm nghiệp vụ được biến thành tool bằng `@tool`, metadata của tool được chuẩn hóa để phục vụ function calling, và `run_agent()` được chuẩn bị để theo dõi bằng LangSmith.

Ở bước tiếp theo, các tool này sẽ được bind vào model và agent sẽ nhận một system prompt có các quy tắc phòng thủ để giảm hành vi đoán dữ liệu hoặc bỏ qua tool.
