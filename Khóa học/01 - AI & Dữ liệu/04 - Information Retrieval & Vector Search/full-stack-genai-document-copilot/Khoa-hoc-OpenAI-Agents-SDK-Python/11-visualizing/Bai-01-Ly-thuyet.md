# Bài 01 — Kiến thức nền tảng: Visualizing: vẽ sơ đồ mạng Agent

> **Module 11 · Lesson** · Video: [xem từ 01:31:34](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=5494s).

**Tổng quan:** Sử dụng tùy chọn visualization và Graphviz để quan sát quan hệ agent, tool và handoff.

## 1. Mục tiêu

Tạo sơ đồ tĩnh thể hiện agent ban đầu, các chuyên gia nhận handoff và công cụ; khắc phục vấn đề Graphviz không nhận executable.

## 2. Visualizing khác Tracing

Visualization mô tả **cấu trúc có thể xảy ra** trong cấu hình: agent nào biết agent nào, tool nào được gắn. Tracing ghi **những bước thật sự đã chạy** với input cụ thể. Vì vậy sơ đồ có đường `Router → Math Tutor` không có nghĩa mọi câu hỏi đều đi qua đó.

## 3. Cài đặt

Tính năng đồ thị thường cần phần tùy chọn và Graphviz hệ thống:

```bash
python -m pip install 'openai-agents[viz]'
```

Trên Windows, cài Graphviz từ website chính thức và thêm thư mục chứa `dot.exe` vào `PATH`; trên macOS/Linux dùng package manager phù hợp. Kiểm tra:

```bash
dot -V
```

Nếu cài xong mà terminal chưa nhận `dot`, đóng và mở lại terminal/IDE để nhận `PATH` mới.

## 4. Vẽ đồ thị

```python
from agents import Agent, function_tool
from agents.extensions.visualization import draw_graph

@function_tool
def format_answer(text: str) -> str:
    """Chuẩn hóa văn bản để hiển thị."""
    return text.strip()

math = Agent(name="Math Tutor", instructions="Giải toán", tools=[format_answer])
history = Agent(name="History Tutor", instructions="Giải thích lịch sử")
router = Agent(
    name="Triage",
    instructions="Phân luồng câu hỏi học tập.",
    handoffs=[math, history],
)
draw_graph(router)
```

Tùy môi trường, biểu đồ hiển thị trực tiếp hoặc được lưu bằng cơ chế Graphviz tương ứng. Hãy xem tài liệu `draw_graph` đang cài để biết tham số xuất file thay vì đoán đường dẫn API.

## 5. Cách đọc đồ thị

Node Agent thể hiện vai trò; cạnh handoff thể hiện quyền chuyển giao; tool gắn với node thể hiện khả năng của agent. Hãy kiểm tra mỗi agent có trách nhiệm rõ ràng, không cấu hình quá nhiều đường chuyển nhầm hoặc tool nhạy cảm trên agent không cần dùng.

## 6. Hạn chế

Sơ đồ không đo chất lượng model, không chứng minh bảo mật, không phản ánh điều kiện runtime `is_enabled` trong mọi tình huống và không thay tracing. Dùng sơ đồ để review kiến trúc trước khi triển khai.

## 7. Tổng kết

Dùng visualization để nhìn hệ thống ở mức thiết kế, tracing để nhìn hệ thống trong lúc thực thi. Hai công cụ bổ sung cho nhau.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Visualization khác tracing ở điểm nào?

A. Visualization cho thấy cấu trúc, tracing cho thấy hành vi thực thi  
B. Cả hai là guardrail  
C. Visualization thay được API key  
D. Tracing chỉ dành cho frontend  

**Đáp án:** A. **Giải thích:** Đồ thị tĩnh và trace runtime phục vụ câu hỏi khác nhau.

### Câu 2

Bộ cài nào thường cần để tạo đồ thị visualization?

A. Chỉ `python-dotenv`  
B. Graphviz và phần tùy chọn SDK `viz`  
C. Chỉ SQLite  
D. Chỉ Pydantic  

**Đáp án:** B. **Giải thích:** Thư viện có thể gọi chương trình `dot` của Graphviz.

### Câu 3

Lệnh nào xác nhận Graphviz executable khả dụng?

A. `python -V`  
B. `pip freeze`  
C. `dot -V`  
D. `git status`  

**Đáp án:** C. **Giải thích:** Phiên bản `dot` chứng minh công cụ đã trên PATH.

### Câu 4

Nhìn thấy cạnh handoff trong sơ đồ có nghĩa gì?

A. Handoff chắc chắn đã diễn ra  
B. Tool đã gọi  
C. Output đã qua kiểm duyệt  
D. Agent có thể chuyển quyền theo cạnh đó  

**Đáp án:** D. **Giải thích:** Sơ đồ cấu trúc không chứng minh sự kiện runtime.

### Câu 5

Nếu Graphviz không nhận `dot` sau cài đặt, nên thử gì?

A. Kiểm tra PATH và mở lại terminal  
B. Xóa mã nguồn Agent  
C. Bỏ .env  
D. Thêm tool giả  

**Đáp án:** A. **Giải thích:** Thay đổi PATH thường chỉ áp dụng cho process mới.


**Tài liệu tra cứu:** [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) · [1](https://openai.github.io/openai-agents-python/visualization/)
