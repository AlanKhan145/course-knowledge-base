# Module 03 — Xây dựng search agent dùng công cụ

**Tên section Udemy:** Build a Search Agent with Tools  
**Số mục học tập:** 9  
**Dự án xuyên module:** Agent tìm thông tin tuyển dụng AI Engineer, trích xuất kỹ năng và nguồn.

## Kết quả cần đạt

- [ ] Định nghĩa @tool với docstring và type hint.
- [ ] Dùng create_agent, phân biệt message, tool-call và tool-result.
- [ ] Kiểm tra kết quả bằng Pydantic và dữ liệu có nguồn.

## Giải thích và định hướng

Cho phép mô hình quyết định khi nào gọi công cụ tìm kiếm và trả kết quả có cấu trúc.

Mỗi lesson trong module được viết độc lập bằng tiếng Việt, có khái niệm chính, ví dụ code, ba nhiệm vụ (hiểu – xây dựng – kiểm chứng) và phần tự kiểm. Đề cương/tựa bài giữ tên gốc để dễ tìm trong Udemy, nhưng nội dung không trích từ video.

## Lab của module

**Mục tiêu:** Agent tìm thông tin tuyển dụng AI Engineer, trích xuất kỹ năng và nguồn.

```python
from langchain.agents import create_agent
from langchain.tools import tool

@tool
def search_jobs(skill: str) -> str:
    """Tra cứu kỹ năng tuyển dụng giả lập; không gọi internet."""
    return f"Vị trí cần biết {skill}, Python, API và kiểm thử."

agent = create_agent(
    model="openai:gpt-4o-mini",
    tools=[search_jobs],
    system_prompt="Tư vấn nghề AI, dùng dữ liệu công cụ nếu cần."
)
result = agent.invoke({"messages": [{"role": "user", "content": "Kỹ năng LangChain cần cho AI Engineer?"}]})
print(result["messages"][-1].content)
```

## Danh sách bài học

01. [What are AI Agents? A High-Level Overview](01-what-are-ai-agents-a-high-level-overview.md) — `VIDEO`
02. [What are we building? AI Job Search Agent](02-what-are-we-building-ai-job-search-agent.md) — `VIDEO`
03. [The Evolution of LangChain ReAct Agents](03-the-evolution-of-langchain-react-agents.md) — `VIDEO`
04. [Setting Up the Environment for a LangChain Search Agent](04-setting-up-the-environment-for-a-langchain-search-agent.md) — `VIDEO`
05. [Creating Your First LangChain Agent: Tools and LLMs](05-creating-your-first-langchain-agent-tools-and-llms.md) — `VIDEO`
06. [From Query to Answer: How a LangChain Agent Thinks](06-from-query-to-answer-how-a-langchain-agent-thinks.md) — `VIDEO`
07. [Integrating Real-World Search with Tavily and LangChain Tools](07-integrating-real-world-search-with-tavily-and-langchain-tools.md) — `VIDEO`
08. [Structured Output with LangChain Agents Using Pydantic](08-structured-output-with-langchain-agents-using-pydantic.md) — `VIDEO`
09. [[THEORY] Predictable Agent Responses with LangChain Structured Output](09-theory-predictable-agent-responses-with-langchain-structured-outpu.md) — `VIDEO`

## Bài tập tổng kết module

1. Tạo phiên bản demo có README, .env.example và hướng dẫn chạy tái lập được.
2. Viết tối thiểu 5 test cases, bao gồm một case lỗi hoặc thiếu dữ liệu.
3. Đối chiếu ba kết quả cần đạt ở đầu module và tự chấm 0–2 điểm mỗi tiêu chí.
4. Bổ sung sơ đồ kiến trúc, danh sách rủi ro và liên kết trace/screenshot nếu có.

**Nguồn tên bài:** Udemy course curriculum. **Giảng giải và bài tập:** được viết mới cho bản tự học.
