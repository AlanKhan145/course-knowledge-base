# Bài 01 — Kiến thức nền tảng: Tool Calling và công cụ bên ngoài

> **Module 04 · Lesson** · Video: [xem từ 00:26:35](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=1595s).

**Tổng quan:** Dùng `function_tool` và `WebSearchTool`, thiết kế schema, phân biệt mock tool với truy xuất dữ liệu thật.

## 1. Mục tiêu

Biến một hàm Python thành công cụ, giải thích cách model quyết định gọi tool, phân biệt kết quả công cụ với suy luận của mô hình và thiết kế ràng buộc an toàn khi dùng API bên ngoài.

## 2. Vì sao tool thay đổi khả năng Agent?

Một mô hình không có dữ liệu thời gian thực có thể tạo ra câu trả lời có vẻ thuyết phục nhưng không phản ánh hiện tại. Tool cho phép agent đọc dữ liệu bên ngoài hoặc thực hiện phép tính có thể kiểm chứng. Trong SDK, khai báo `@function_tool` thường giúp tạo schema từ chữ ký và docstring hàm.

```python
from agents import Agent, Runner, function_tool

@function_tool
def get_weather(city: str) -> str:
    """Lấy thời tiết mẫu của một thành phố. Dữ liệu giả lập, không phải realtime."""
    demo = {"Hanoi": "Trời quang, 26°C", "Dallas": "Nắng, 30°C"}
    return demo.get(city, "Không có dữ liệu cho thành phố này")

weather_agent = Agent(
    name="Weather Helper",
    instructions="Chỉ cung cấp thời tiết từ get_weather; nếu thiếu dữ liệu hãy nói rõ.",
    tools=[get_weather],
)
print(Runner.run_sync(weather_agent, "Thời tiết ở Dallas?").final_output)
```

Dữ liệu trên **giả lập có chủ đích** để học tool calling. Không được trình bày nhiệt độ đó như dự báo thật.

## 3. Vòng lặp gọi tool

1. App đăng ký tool với tên, tham số và mô tả.
2. LLM nhận danh sách tool, quyết định có cần gọi hay không.
3. Runtime xác thực tham số theo schema và gọi Python.
4. Tool trả kết quả cho runtime, được đưa trở lại ngữ cảnh của model.
5. Model có thể gọi thêm tool hoặc đưa câu trả lời cuối.

Một agent có thể không gọi tool nếu câu hỏi không cần dữ liệu, hoặc nếu instructions mơ hồ. Tracing sẽ giúp xác minh tool thật sự chạy.

## 4. Tool có tham số và giới hạn

Tham số type annotation càng rõ, mô hình càng dễ tạo lời gọi hợp lệ. Docstring nên giải thích chức năng, đơn vị và giới hạn. Tool đọc dữ liệu và tool thay đổi trạng thái cần quyền khác nhau: `get_event` và `cancel_event` không thể được bảo vệ như nhau. Đặt kiểm tra quyền trong **code tool**, không chỉ trong prompt.

## 5. Built-in Web Search

SDK có những công cụ tích hợp như `WebSearchTool` (tùy tính khả dụng của model và tài khoản):

```python
from agents import Agent, Runner, WebSearchTool

news_agent = Agent(
    name="News Researcher",
    instructions="Tìm thông tin mới; nêu nguồn và ngày nếu công cụ cung cấp.",
    tools=[WebSearchTool()],
)
result = Runner.run_sync(news_agent, "Tóm tắt một nghiên cứu AI gần đây")
print(result.final_output)
```

Tool tìm kiếm có thể phát sinh chi phí. Kết quả web không được xem như mệnh lệnh đáng tin; cần kiểm tra nguồn và tránh đưa nội dung web vào quyền điều khiển tool.

## 6. Tích hợp API tự viết

Một tool Python có thể gọi dịch vụ nội bộ qua HTTP hoặc truy xuất Database. Tool nên trả dữ liệu tối thiểu đã lọc, không trả bí mật, SQL raw hay toàn bộ bảng không cần thiết. Nếu dữ liệu không tìm thấy, trả trạng thái `not_found` rõ ràng. Nếu mạng lỗi, nêu `temporary_error` và cho ứng dụng xử lý retry có giới hạn.

## 7. Tổng kết

Tool tạo ra cầu nối giữa lập luận ngôn ngữ và thế giới có dữ liệu/hành động. Chất lượng tool contract, quyền thực thi và khả năng truy vết quan trọng không kém prompt.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Dùng decorator nào để đưa hàm Python thành function tool?

A. `@function_tool`  
B. `@dataclass`  
C. `@staticmethod`  
D. `@handoff`  

**Đáp án:** A. **Giải thích:** SDK đọc chữ ký hàm để tạo schema công cụ.

### Câu 2

Kết quả `get_weather` giả lập nên được trình bày như thế nào?

A. Khẳng định thời tiết realtime  
B. Ghi rõ là dữ liệu mẫu  
C. Xóa nhãn nguồn  
D. Ẩn nguồn khỏi người dùng  

**Đáp án:** B. **Giải thích:** Mock không thể xác nhận tình trạng ngoài đời.

### Câu 3

Tool gọi API lỗi, cách xử lý đúng?

A. Giả lập kết quả rồi trình bày là thật  
B. Lặp vô hạn  
C. Trả trạng thái lỗi rõ ràng, không đoán dữ liệu  
D. Đưa token lên frontend  

**Đáp án:** C. **Giải thích:** Lỗi cần được phản ánh trung thực và retry có giới hạn.

### Câu 4

Model quyết định tool nào chạy, nhưng kiểm tra quyền phải đặt ở đâu?

A. Chỉ trong prompt  
B. Trong file README  
C. Trong tên model  
D. Trong tầng ứng dụng và code của tool  

**Đáp án:** D. **Giải thích:** Prompt không thay thế authorization.

### Câu 5

Muốn xem agent đã gọi tool hay chưa, nên dùng cơ chế nào?

A. Tracing hoặc log execution  
B. Số từ trong câu trả lời  
C. Tên notebook  
D. Dòng đầu tiên của prompt  

**Đáp án:** A. **Giải thích:** Quan sát run mới cho thấy tool call thực tế.


**Tài liệu tra cứu:** [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) · [1](https://openai.github.io/openai-agents-python/tools/)
