# Module 13 — Nền tảng LangGraph

**Tên section Udemy:** LangGraph Fundamentals  
**Số mục học tập:** 13  
**Dự án xuyên module:** Biến ReAct loop thành state graph có điểm dừng.

## Kết quả cần đạt

- [ ] Dùng StateGraph và TypedDict/State schema.
- [ ] Tạo node trả về partial state update.
- [ ] Giới hạn graph, trace và test đường đi.

## Giải thích và định hướng

Mô hình hóa trạng thái, node, edge, conditional edge và compile đồ thị tác vụ.

Mỗi lesson trong module được viết độc lập bằng tiếng Việt, có khái niệm chính, ví dụ code, ba nhiệm vụ (hiểu – xây dựng – kiểm chứng) và phần tự kiểm. Đề cương/tựa bài giữ tên gốc để dễ tìm trong Udemy, nhưng nội dung không trích từ video.

## Lab của module

**Mục tiêu:** Biến ReAct loop thành state graph có điểm dừng.

```python
from typing import TypedDict
from langgraph.graph import StateGraph, START, END

class State(TypedDict):
    text: str
    summary: str

def summarize(state: State) -> dict:
    return {"summary": state["text"][:40]}

graph = StateGraph(State)
graph.add_node("summarize", summarize)
graph.add_edge(START, "summarize")
graph.add_edge("summarize", END)
app = graph.compile()
print(app.invoke({"text": "Hello LangGraph", "summary": ""}))
```

## Danh sách bài học

01. [What is LangGraph?](01-what-is-langgraph.md) — `VIDEO`
02. [Why LangGraph? LangGraph VS LangChain](02-why-langgraph-langgraph-vs-langchain.md) — `VIDEO`
03. [What are Graphs?](03-what-are-graphs.md) — `VIDEO`
04. [LangGraph & Flow Engineering](04-langgraph-flow-engineering.md) — `VIDEO`
05. [LangGraph Core Components](05-langgraph-core-components.md) — `VIDEO`
06. [[Hands On] Implementing ReAct AgentExecutor with LangGraph](06-hands-on-implementing-react-agentexecutor-with-langgraph.md) — `VIDEO`
07. [Quick Note: poetry vs uv](07-quick-note-poetry-vs-uv.md) — `ARTICLE`
08. [[Hands On] Get Started: Setting Up Your ReAct Agent Project Environment](08-hands-on-get-started-setting-up-your-react-agent-project-environme.md) — `VIDEO`
09. [[Hands On] Coding the Agent's Brain: Implementing the ReAct Runnable](09-hands-on-coding-the-agent-s-brain-implementing-the-react-runnable.md) — `VIDEO`
10. [[Hands On] 43. Building Blocks: Defining Your Agent's Nodes in LangGraph](10-hands-on-43-building-blocks-defining-your-agent-s-nodes-in-langgra.md) — `VIDEO`
11. [[Hands On] Bringing Your ReAct Agent to Life: Connecting Nodes into a Graph](11-hands-on-bringing-your-react-agent-to-life-connecting-nodes-into-a.md) — `VIDEO`
12. [[Hands On] Running Our LangGraph React Agent with Function Calling](12-hands-on-running-our-langgraph-react-agent-with-function-calling.md) — `VIDEO`
13. [[IMPORTANT] Building Modern LLM Agents: From History to LangGraph v1.0](13-important-building-modern-llm-agents-from-history-to-langgraph-v1.md) — `VIDEO`

## Bài tập tổng kết module

1. Tạo phiên bản demo có README, .env.example và hướng dẫn chạy tái lập được.
2. Viết tối thiểu 5 test cases, bao gồm một case lỗi hoặc thiếu dữ liệu.
3. Đối chiếu ba kết quả cần đạt ở đầu module và tự chấm 0–2 điểm mỗi tiêu chí.
4. Bổ sung sơ đồ kiến trúc, danh sách rủi ro và liên kết trace/screenshot nếu có.

**Nguồn tên bài:** Udemy course curriculum. **Giảng giải và bài tập:** được viết mới cho bản tự học.
