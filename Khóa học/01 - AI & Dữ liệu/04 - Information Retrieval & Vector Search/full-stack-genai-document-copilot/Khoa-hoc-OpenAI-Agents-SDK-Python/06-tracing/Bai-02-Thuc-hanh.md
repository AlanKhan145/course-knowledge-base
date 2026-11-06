# Bài 02 — Thực hành có hướng dẫn: Tracing và quan sát Agent

> **Module 06 · Lab** · Video: [xem từ 00:50:32](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=3032s).

**Tổng quan:** Theo dõi run, tool calls và handoffs để phát hiện lỗi; đọc trace/span và bảo vệ dữ liệu nhạy cảm.

## 1. Đề bài

Có hai bước: tạo outline và viết bài. Hãy đo và đối chiếu số lần gọi agent, kiểm tra lần nào không thỏa ràng buộc.

## 2. Mẫu code

```python
from agents import Agent, Runner, trace, function_tool

@function_tool
def count_words(text: str) -> int:
    """Đếm số từ bằng cách tách theo khoảng trắng."""
    return len(text.split())

outline = Agent(name="Outline", instructions="Lập dàn ý đúng 3 ý cho chủ đề")
writer = Agent(
    name="Writer",
    instructions="Viết đoạn giải thích từ dàn ý; có thể dùng count_words để đo độ dài.",
    tools=[count_words],
)

with trace("content-pipeline-lab"):
    first = Runner.run_sync(outline, "Agent tool calling")
    second = Runner.run_sync(writer, first.final_output)
print(second.final_output)
```

## 3. Quan sát

Tìm trace tương ứng trong hệ thống quan sát của SDK/Platform. Ghi lại có bao nhiêu model call, có gọi `count_words` không, và prompt nào gây sự khác biệt. Nếu tool không được gọi, đó không hẳn là lỗi chạy: model được quyền chọn tool nếu instructions không bắt buộc.

## 4. Debug

Thử thay prompt `writer` bằng “Trước khi trả lời hãy dùng count_words để đo độ dài”. Quan sát có cải thiện tỉ lệ gọi tool không. Truy vết không bảo đảm model sẽ tuân thủ 100%; nếu yêu cầu chắc chắn, có thể gọi hàm đo từ phía Python trực tiếp.

## 5. Deliverable

Lập bảng gồm `test_case`, `tool_called`, `final_output_ok`, `note`. Mô tả lỗi được tìm ra nhờ trace và chỉnh sửa tối thiểu để giải quyết.

## 6. Checklist hoàn thành

Trace có tên; ít nhất một run được quan sát; không log secrets; có giải thích về khác nhau giữa chất lượng output và quá trình tool execution.

## 7. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Span khác trace ở điểm nào?

A. Span là API key  
B. Span luôn là file JSON  
C. Span biểu diễn bước thành phần của workflow  
D. Span dùng để chạy model  

**Đáp án:** C. **Giải thích:** Trace bao gồm các span như tool call, handoff.

### Câu 2

Nếu output sai nhưng tool trả đúng, nên xem gì trước?

A. Chỉ cài lại Python  
B. Xóa data gốc  
C. Thay đổi tên folder  
D. Instructions và cách model sử dụng kết quả tool  

**Đáp án:** D. **Giải thích:** Trace giúp phân biệt lỗi tool và lỗi suy luận.

### Câu 3

`with trace(...)` dùng để làm gì?

A. Nhóm các hoạt động trong một workflow có tên  
B. Bắt buộc tạo handoff  
C. Bảo mật password  
D. Tự động đánh giá accuracy  

**Đáp án:** A. **Giải thích:** Đây là cách đặt phạm vi truy vết.

### Câu 4

Tracing có thể chứa dữ liệu gì?

A. Chỉ số dòng source code  
B. Nội dung prompt và tham số tool nhạy cảm  
C. Chỉ phiên bản Python  
D. Không có dữ liệu người dùng  

**Đáp án:** B. **Giải thích:** Cần kiểm soát quyền truy cập và redaction.

### Câu 5

Tracing có thay thế authorization không?

A. Có trong mọi trường hợp  
B. Có nếu model mạnh  
C. Không, phải kiểm tra quyền trước khi thực thi  
D. Có với tool không có docstring  

**Đáp án:** C. **Giải thích:** Trace là công cụ quan sát, không phải quyền thực thi.


**Tài liệu tra cứu:** [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) · [1](https://openai.github.io/openai-agents-python/tracing/)
