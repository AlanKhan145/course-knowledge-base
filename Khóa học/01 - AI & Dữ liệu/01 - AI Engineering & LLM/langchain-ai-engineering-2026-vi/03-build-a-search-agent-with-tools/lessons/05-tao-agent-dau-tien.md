# Bài 05 — Tạo LangChain Agent đầu tiên với LLM và công cụ Python

> **Chương 03:** Xây dựng Search Agent bằng LangChain · **Loại:** Hướng dẫn lập trình · **Thực hành:** `../examples/05_first_agent_mock_tool.py`

## 1. Tóm tắt

`create_agent` là API cấp cao để kết nối mô hình, danh sách công cụ và system prompt trong LangChain hiện đại. Công cụ đơn giản nhất có thể được định nghĩa bằng hàm Python có **type hints**, **docstring** và decorator `@tool`. LangChain chuyển mô tả công cụ thành schema để mô hình biết khi nào nên sử dụng và cần truyền đối số nào. Công cụ Python chỉ thực thi khi runtime chấp nhận quyết định gọi công cụ của mô hình.

## 2. Mục tiêu học tập

- Viết một hàm `@tool` với tên, docstring và các tham số đã định kiểu.
- Khởi tạo `ChatOpenAI` và truyền công cụ cho `create_agent`.
- Gửi `messages` vào `.invoke()` rồi lấy `AIMessage` cuối.
- Phân biệt công cụ giả lập với công cụ web thật để tránh khẳng định sai.

## 3. Công cụ trong LangChain

Một tool mô tả một **năng lực có tên** mà runtime sẵn sàng cung cấp. Ví dụ `multiply(a, b)` nhận hai số nguyên và trả phép nhân; `search_jobs(query)` nhận chuỗi truy vấn và trả dữ liệu. Để LLM lựa chọn đúng, mô tả cần nói rõ mục đích và các ràng buộc của công cụ. Tên `search_jobs_mock` nên khác tên `search_jobs_web` để không đánh đồng dữ liệu thử với dữ liệu thực.

```python
from langchain.tools import tool

@tool
def multiply(a: int, b: int) -> int:
    """Nhân hai số nguyên a và b và trả về tích."""
    return a * b

print(multiply.invoke({"a": 6, "b": 7}))  # 42
```

`@tool` thu thập `name`, `description` và input schema. Người phát triển chịu trách nhiệm cài đặt nội dung hàm. Với dữ liệu ngoài, phải kiểm tra kiểu đầu vào, quyền thực thi, timeout và tác dụng phụ (nếu có). Việc chọn công cụ không làm cho kết quả của công cụ mặc nhiên đáng tin.

## 4. Tạo tác nhân tối thiểu

```python
from langchain.agents import create_agent
from langchain.tools import tool
from langchain_openai import ChatOpenAI

@tool
def web_search_demo(query: str) -> str:
    """Trả kết quả giả lập để thử tool calling; không truy cập Internet."""
    return f"DEMO ONLY: không có thông tin web thực về {query}"

model = ChatOpenAI(model="gpt-4o-mini")
agent = create_agent(
    model=model,
    tools=[web_search_demo],
    system_prompt="Phải nói rõ mọi kết quả công cụ là dữ liệu demo.",
)
result = agent.invoke({
    "messages": [{"role": "user", "content": "Dùng công cụ demo để thử câu hỏi về Tokyo"}]
})
print(result["messages"][-1].content)
```

Đây là agent thật ở tầng điều phối LLM, nhưng **công cụ không tìm web thật**. Cần `OPENAI_API_KEY` và có thể phát sinh chi phí API mô hình. Cách viết `messages` dưới dạng danh sách là rõ ràng và tương thích tốt khi sau này thêm nhiều lượt hội thoại.

## 5. Giải thích từng bước

1. `ChatOpenAI` tạo client mô hình; model sẽ được gọi qua API khi invoke.
2. Decorator `@tool` mô tả năng lực và schema cho mô hình.
3. `create_agent(model=..., tools=[...])` xây vòng lặp quyết định và thực thi.
4. `agent.invoke({"messages": [...]})` chuyển câu hỏi thành trạng thái ban đầu.
5. Khi cần, LLM trả một hay nhiều `tool_calls`; runtime gọi hàm Python.
6. Runtime đưa `ToolMessage` về ngữ cảnh; LLM có thể trả lời cuối.

Mô hình **có thể không chọn** tool nếu không thấy cần, ngay cả khi bạn cung cấp danh sách công cụ. Nếu cần bảo đảm tra cứu thật cho tác vụ dữ liệu thời gian thực, hãy bổ sung chính sách ứng dụng để kiểm tra kết quả có observation phù hợp trước khi hiển thị là đã xác minh.

## 6. Chạy mã của khóa học

```bash
uv run python examples/05_first_agent_mock_tool.py
```

File dùng `src/ai_job_agent/mock_data.py` đọc dữ liệu từ `data/mock_jobs.json`. Có thể thay prompt để xem khi nào mô hình gọi `search_jobs_mock`. Nếu chạy không có `OPENAI_API_KEY`, script chủ động dừng với thông báo thiếu key.

## 7. Cách viết docstring hiệu quả

Docstring kém: `"""Tìm."""`. Docstring đủ rõ: `"""Tìm tin việc làm AI Engineer từ nguồn cho phép, trả tiêu đề, URL và đoạn trích; không xác nhận trạng thái tuyển dụng khi chưa kiểm tra."""`. Trường hợp nhiều tham số nên thêm `Args:` cho `query`, `limit`, `location`. Nhưng cần nhớ: **docstring giúp mô hình hiểu**, còn **runtime validation** mới ngăn đầu vào sai hoặc vượt giới hạn.

## 8. Bài tập thực hành

**A — Tool cơ bản:** Viết `@tool def calculate_years(current_year: int, start_year: int) -> int` và thử `.invoke()` với hai giá trị nguyên. Không dùng `eval`.

**B — Tool tìm kiếm:** Sửa `search_jobs_mock` nhận thêm tham số `limit: int = 3`, giới hạn 1–10, mô tả kiểu và lý do giới hạn. Kiểm tra khi `limit=100`.

**C — Kết nối agent:** Thêm công cụ đọc từ điển kỹ năng `explain_skill(skill: str)` cho agent. Thử truy vấn chỉ hỏi định nghĩa và truy vấn cần dữ liệu giả lập; quan sát có chọn tool khác nhau không.

**Hoàn thành khi:** dùng `.invoke()` đúng định dạng và giải thích được tại sao cần docstring, type hint cũng như runtime validation.

## 9. Câu hỏi ôn tập

### Câu 1
Decorator nào được sử dụng phổ biến để chuyển hàm Python thành LangChain tool?

A. `@property`.  
B. `@staticmethod`.  
C. `@tool`.  
D. `@classmethod`.

**Đáp án: C.** **Giải thích:** `@tool` tạo đối tượng công cụ với schema và mô tả cho mô hình.

### Câu 2
Điều gì đặc biệt quan trọng để LLM biết đầu vào cần truyền vào tool?

A. Tên tham số, type hints và mô tả.  
B. Tên ổ cứng.  
C. Màu sắc terminal.  
D. Phiên bản trình duyệt.

**Đáp án: A.** **Giải thích:** LangChain xây metadata/schema của công cụ từ các thành phần này.

### Câu 3
Tại sao câu `web_search_demo` không được báo như dự báo thời tiết thật?

A. Vì Python không thể trả chuỗi.  
B. Vì tên hàm là tiếng Anh.  
C. Vì prompt có tiếng Việt.  
D. Vì công cụ trả giá trị tĩnh giả lập, không truy cập Internet.

**Đáp án: D.** **Giải thích:** Dữ liệu giả lập không phải bằng chứng cập nhật.

### Câu 4
Kết quả final text của agent đơn giản thường được lấy từ đâu?

A. `result["tool_schema"]`.  
B. `result["messages"][-1].content`.  
C. `result["password"]`.  
D. `model.description`.

**Đáp án: B.** **Giải thích:** Trạng thái agent lưu lịch sử trong `messages`; phần tử cuối thường là câu trả lời cuối.

### Câu 5
Muốn chống `limit=100000` khiến API bị gọi quá mức, biện pháp tin cậy nhất là gì?

A. Chỉ nhắc LLM đừng làm thế.  
B. Đổi tên tool.  
C. Validate và chặn tham số ngay tại tool/runtime.  
D. In toàn bộ prompt.

**Đáp án: C.** **Giải thích:** Chính sách ở cấp thực thi có hiệu lực dù mô hình đề nghị đối số bất hợp lý.

## 10. Tổng kết

Định nghĩa `@tool`, tạo model, truyền `tools` vào `create_agent` và gọi `.invoke()` là **chuỗi thao tác cốt lõi**. Công cụ quyết định phạm vi hành động, còn prompt và schema giúp mô hình lựa chọn đúng; runtime tiếp tục giữ quyền kiểm soát thực thi.
