# Module 07 — Tầng 3: ReAct từ prompt

**Tên section Udemy:** Layer 3: The ReAct Prompt Underneath  
**Số mục học tập:** 6  
**Dự án xuyên module:** Tự xây bộ parser Action/Action Input/Observation với dữ liệu giả.

## Kết quả cần đạt

- [ ] Tách chỉ dẫn khỏi kết quả công cụ.
- [ ] Phân tích rủi ro của việc parse text thuần.
- [ ] Đặt giới hạn số bước và đầu ra cuối.

## Giải thích và định hướng

Dựng agent bằng prompt mô tả công cụ khi model không hỗ trợ native tool calling.

Mỗi lesson trong module được viết độc lập bằng tiếng Việt, có khái niệm chính, ví dụ code, ba nhiệm vụ (hiểu – xây dựng – kiểm chứng) và phần tự kiểm. Đề cương/tựa bài giữ tên gốc để dễ tìm trong Udemy, nhưng nội dung không trích từ video.

## Lab của module

**Mục tiêu:** Tự xây bộ parser Action/Action Input/Observation với dữ liệu giả.

```python
# Mô phỏng parser đơn giản; production nên dùng native tool calling.
from dataclasses import dataclass

@dataclass
class Action:
    tool: str
    tool_input: str

allowed = {"lookup": lambda x: f"Found: {x}"}
action = Action(tool="lookup", tool_input="policy")
if action.tool not in allowed: raise ValueError("unknown tool")
print(allowed[action.tool](action.tool_input))
```

## Danh sách bài học

01. [What are we building? Function Calling. Yes we are building Function Calling.](01-what-are-we-building-function-calling-yes-we-are-building-function.md) — `VIDEO`
02. [Generating Dynamic Tool Descriptions in Python](02-generating-dynamic-tool-descriptions-in-python.md) — `VIDEO`
03. [Understanding the ReAct Prompt: Building AI Agents Without Function Calling](03-understanding-the-react-prompt-building-ai-agents-without-function.md) — `VIDEO`
04. [Implementing Manual Tool Calling for LLMs](04-implementing-manual-tool-calling-for-llms.md) — `VIDEO`
05. [Agent Loop With ReAct Prompt](05-agent-loop-with-react-prompt.md) — `VIDEO`
06. [Agents Interview](06-agents-interview.md) — `ROLE`

## Bài tập tổng kết module

1. Tạo phiên bản demo có README, .env.example và hướng dẫn chạy tái lập được.
2. Viết tối thiểu 5 test cases, bao gồm một case lỗi hoặc thiếu dữ liệu.
3. Đối chiếu ba kết quả cần đạt ở đầu module và tự chấm 0–2 điểm mỗi tiêu chí.
4. Bổ sung sơ đồ kiến trúc, danh sách rủi ro và liên kết trace/screenshot nếu có.

**Nguồn tên bài:** Udemy course curriculum. **Giảng giải và bài tập:** được viết mới cho bản tự học.
