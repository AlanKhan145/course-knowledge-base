# Module 11 — Lý thuyết prompt và context engineering

**Tên section Udemy:** Prompt and Context Engineering Theory  
**Số mục học tập:** 9  
**Dự án xuyên module:** Thử nghiệm bộ prompt với các nhóm câu hỏi có đáp án.

## Kết quả cần đạt

- [ ] So sánh zero-shot, few-shot và ReAct.
- [ ] Viết prompt không làm lộ chain-of-thought riêng tư.
- [ ] Đánh giá độ chính xác bằng bộ test cố định.

## Giải thích và định hướng

Phân biệt instruction, examples, context, tools và constraints; quản trị ngân sách ngữ cảnh.

Mỗi lesson trong module được viết độc lập bằng tiếng Việt, có khái niệm chính, ví dụ code, ba nhiệm vụ (hiểu – xây dựng – kiểm chứng) và phần tự kiểm. Đề cương/tựa bài giữ tên gốc để dễ tìm trong Udemy, nhưng nội dung không trích từ video.

## Lab của module

**Mục tiêu:** Thử nghiệm bộ prompt với các nhóm câu hỏi có đáp án.

```python
from langchain_core.prompts import ChatPromptTemplate
prompt = ChatPromptTemplate.from_messages([
    ("system", "Trả lời từ context. Nếu thiếu bằng chứng, nêu chưa biết."),
    ("human", "CONTEXT: {context}\nCÂU HỎI: {question}")
])
print(prompt.invoke({"context": "API dùng HTTPS", "question": "API dùng giao thức nào?"}))
```

## Danh sách bài học

01. [The GIST of Large Langauge Models](01-the-gist-of-large-langauge-models.md) — `VIDEO`
02. [What is a Prompt? Composition of a formal prompt](02-what-is-a-prompt-composition-of-a-formal-prompt.md) — `VIDEO`
03. [Zero Shot Prompting](03-zero-shot-prompting.md) — `VIDEO`
04. [Few Shot Prompting](04-few-shot-prompting.md) — `VIDEO`
05. [Chain of Thought Prompting](05-chain-of-thought-prompting.md) — `VIDEO`
06. [ReAct Prompting](06-react-prompting.md) — `VIDEO`
07. [Prompt Engineering Quick Tips](07-prompt-engineering-quick-tips.md) — `VIDEO`
08. [Context Engineering](08-context-engineering.md) — `VIDEO`
09. [Context Engineering a System Prompt](09-context-engineering-a-system-prompt.md) — `VIDEO`

## Bài tập tổng kết module

1. Tạo phiên bản demo có README, .env.example và hướng dẫn chạy tái lập được.
2. Viết tối thiểu 5 test cases, bao gồm một case lỗi hoặc thiếu dữ liệu.
3. Đối chiếu ba kết quả cần đạt ở đầu module và tự chấm 0–2 điểm mỗi tiêu chí.
4. Bổ sung sơ đồ kiến trúc, danh sách rủi ro và liên kết trace/screenshot nếu có.

**Nguồn tên bài:** Udemy course curriculum. **Giảng giải và bài tập:** được viết mới cho bản tự học.
