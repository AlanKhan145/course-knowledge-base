# Module 05 — Tầng 1: Tự viết vòng lặp ReAct

**Tên section Udemy:** Layer 1: Write the ReAct Loop Yourself  
**Số mục học tập:** 5  
**Dự án xuyên module:** Agent đặt hàng mô phỏng với bộ công cụ tra cứu tồn kho và chính sách.

## Kết quả cần đạt

- [ ] Viết dispatcher không dùng eval.
- [ ] Không thực thi tên tool không nằm trong allowlist.
- [ ] Thiết lập max_steps và kiểm thử timeout.

## Giải thích và định hướng

Tự quản lý phản hồi tool_calls, dispatcher, ToolMessage và số lần lặp tối đa.

Mỗi lesson trong module được viết độc lập bằng tiếng Việt, có khái niệm chính, ví dụ code, ba nhiệm vụ (hiểu – xây dựng – kiểm chứng) và phần tự kiểm. Đề cương/tựa bài giữ tên gốc để dễ tìm trong Udemy, nhưng nội dung không trích từ video.

## Lab của module

**Mục tiêu:** Agent đặt hàng mô phỏng với bộ công cụ tra cứu tồn kho và chính sách.

```python
# Minh họa vòng lặp với allowlist công cụ, chưa phụ thuộc provider.
tools = {"stock": lambda sku: {"sku": sku, "qty": 3}}
steps = [{"name": "stock", "args": {"sku": "A1"}}]
for step in steps[:5]:
    if step["name"] not in tools:
        raise ValueError("Tool not permitted")
    print(tools[step["name"]](**step["args"]))
```

## Danh sách bài học

01. [Writing Tools](01-writing-tools.md) — `VIDEO`
02. [Tool Binding and Defensive Prompting](02-tool-binding-and-defensive-prompting.md) — `VIDEO`
03. [Understanding the ReAct Agent Loop in Langchain](03-understanding-the-react-agent-loop-in-langchain.md) — `VIDEO`
04. [Model Switch](04-model-switch.md) — `VIDEO`
05. [Quiz: AI Agent Loop with LangChain Tool Calling](05-quiz-ai-agent-loop-with-langchain-tool-calling.md) — `QUIZ`

## Bài tập tổng kết module

1. Tạo phiên bản demo có README, .env.example và hướng dẫn chạy tái lập được.
2. Viết tối thiểu 5 test cases, bao gồm một case lỗi hoặc thiếu dữ liệu.
3. Đối chiếu ba kết quả cần đạt ở đầu module và tự chấm 0–2 điểm mỗi tiêu chí.
4. Bổ sung sơ đồ kiến trúc, danh sách rủi ro và liên kết trace/screenshot nếu có.

**Nguồn tên bài:** Udemy course curriculum. **Giảng giải và bài tập:** được viết mới cho bản tự học.
