# Bài 02 — Thực hành có hướng dẫn: Tool Calling và công cụ bên ngoài

> **Module 04 · Lab** · Video: [xem từ 00:26:35](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=1595s).

**Tổng quan:** Dùng `function_tool` và `WebSearchTool`, thiết kế schema, phân biệt mock tool với truy xuất dữ liệu thật.

## 1. Nhiệm vụ

Lập agent có hai tool: `get_weather` (đọc mock) và `convert_temperature` (tính Celsius → Fahrenheit). Hỏi “Thời tiết mẫu tại Hà Nội tương đương bao nhiêu °F?” rồi quan sát agent dùng hai tool hay tự tính.

## 2. Mã nguồn thực hành

```python
from agents import Agent, Runner, function_tool

@function_tool
def get_weather(city: str) -> dict:
    """Trả dữ liệu thời tiết mô phỏng; nhiệt độ là Celsius."""
    return {"city": city, "temperature_c": 26, "source": "demo_mock"}

@function_tool
def convert_temperature(celsius: float) -> float:
    """Chuyển từ độ Celsius sang độ Fahrenheit."""
    return celsius * 9 / 5 + 32

agent = Agent(
    name="Weather Math Assistant",
    instructions=("Chỉ mô tả thời tiết là dữ liệu mẫu. "
                  "Dùng công cụ khi cần dữ liệu và tính toán; nêu đơn vị."),
    tools=[get_weather, convert_temperature],
)
print(Runner.run_sync(agent, "Nhiệt độ mẫu Hà Nội là bao nhiêu độ F?").final_output)
```

## 3. Kiểm chứng độc lập

Tự tính bằng Python `26 * 9/5 + 32` và đối chiếu. Nếu agent không gọi `convert_temperature` nhưng trả đúng, câu trả lời vẫn đúng song không thỏa tiêu chí sử dụng tool; sửa instructions hoặc thiết kế eval để kiểm tra các bước thực thi.

## 4. Tình huống thử nghiệm

- Hỏi thời tiết của hai thành phố: xem có nhiều lượt gọi tool không.
- Hỏi “Celsius là gì?”: tool không bắt buộc.
- Hỏi “Hôm nay ở Hà Nội có mưa không?”: agent phải nói dữ liệu mock, không suy đoán realtime.
- Thêm dữ liệu không hợp lệ (`temperature_c` là chuỗi) và quan sát hậu quả; sửa tool để luôn trả schema ổn định.

## 5. Debug

Phân biệt lỗi model (gọi sai tool) với lỗi Python (tool ném exception) và lỗi dữ liệu (tool trả dữ liệu cũ/sai). In log ở phía server cho biết tên tool và trạng thái, tránh log API key, thông tin định danh hoặc dữ liệu cá nhân thừa.

## 6. Deliverable

File `tool_lab.py`, bảng ba truy vấn cùng tool đã chạy, kết quả mong đợi và câu trả lời thực nhận. Nâng cao: thay mock bằng API thời tiết hợp pháp có khóa riêng lưu trong `.env`.

## 7. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Dùng decorator nào để đưa hàm Python thành function tool?

A. `@dataclass`  
B. `@staticmethod`  
C. `@function_tool`  
D. `@handoff`  

**Đáp án:** C. **Giải thích:** SDK đọc chữ ký hàm để tạo schema công cụ.

### Câu 2

Kết quả `get_weather` giả lập nên được trình bày như thế nào?

A. Khẳng định thời tiết realtime  
B. Xóa nhãn nguồn  
C. Ẩn nguồn khỏi người dùng  
D. Ghi rõ là dữ liệu mẫu  

**Đáp án:** D. **Giải thích:** Mock không thể xác nhận tình trạng ngoài đời.

### Câu 3

Tool gọi API lỗi, cách xử lý đúng?

A. Trả trạng thái lỗi rõ ràng, không đoán dữ liệu  
B. Giả lập kết quả rồi trình bày là thật  
C. Lặp vô hạn  
D. Đưa token lên frontend  

**Đáp án:** A. **Giải thích:** Lỗi cần được phản ánh trung thực và retry có giới hạn.

### Câu 4

Model quyết định tool nào chạy, nhưng kiểm tra quyền phải đặt ở đâu?

A. Chỉ trong prompt  
B. Trong tầng ứng dụng và code của tool  
C. Trong file README  
D. Trong tên model  

**Đáp án:** B. **Giải thích:** Prompt không thay thế authorization.

### Câu 5

Muốn xem agent đã gọi tool hay chưa, nên dùng cơ chế nào?

A. Số từ trong câu trả lời  
B. Tên notebook  
C. Tracing hoặc log execution  
D. Dòng đầu tiên của prompt  

**Đáp án:** C. **Giải thích:** Quan sát run mới cho thấy tool call thực tế.


**Tài liệu tra cứu:** [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) · [1](https://openai.github.io/openai-agents-python/tools/)
