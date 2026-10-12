# Khóa học tự học AI Engineering với LangChain & LangGraph (2026)

> **Nguồn đề cương:** [Udemy — LangChain: AI Engineering with LangChain & LangGraph](https://www.udemy.com/course/langchain/?couponCode=MT261012G1), giảng viên Eden Marco. Danh sách 29 section / 210 mục học tập được đối chiếu với dữ liệu syllabus công khai vào ngày 12/10/2026.
>
> **Tài liệu này KHÔNG phải bản tải về hoặc transcript của khóa Udemy.** Tên section/lesson dùng để đối chiếu; tất cả bài giảng tiếng Việt, ví dụ và bài tập ở đây là nội dung biên soạn mới từ kiến thức công khai. Những file này không cung cấp quyền xem video trả phí.

## Đối tượng và điều kiện đầu vào

- Đã có nền tảng Python (function, class, typing, exception) và biết Git, venv, HTTP API, JSON.
- Mục tiêu: tự phát triển agent, RAG, LangGraph, MCP và có cách kiểm thử/triển khai an toàn.
- Bài thực hành dùng dịch vụ bên ngoài cần API key và có thể tốn phí; nhiều bài có thể chạy với mock/local model.

## Khởi động nhanh

```bash
# Khuyến khích Python 3.11+ và công cụ uv.
python -m venv .venv
# Windows PowerShell: .venv\Scripts\Activate.ps1
# macOS/Linux: source .venv/bin/activate
python -m pip install -r requirements.txt
# Sao chép .env.example thành .env, sau đó cấu hình key riêng.
```

**Bắt đầu:** đọc `00-HUONG-DAN/01-lo-trinh-hoc.md`, sau đó mở `01-.../README.md` và bài `01-...md`. Có thể đánh dấu bài hoàn thành trong `progress.csv`.

## Danh sách 29 module

| # | Module Udemy (gốc) | Mục học tập | Chủ đề Việt hóa |
|---:|---|---:|---|
| 1 | [Introduction](01-introduction/README.md) | 5 | Định hướng và thiết lập lộ trình |
| 2 | [Your First LangChain App](02-your-first-langchain-app/README.md) | 11 | Xây dựng ứng dụng LangChain đầu tiên |
| 3 | [Build a Search Agent with Tools](03-build-a-search-agent-with-tools/README.md) | 9 | Xây dựng search agent dùng công cụ |
| 4 | [Agents Under the Hood: The 3 Layers](04-agents-under-the-hood-the-3-layers/README.md) | 4 | Kiến trúc 3 tầng của AI Agent |
| 5 | [Layer 1: Write the ReAct Loop Yourself](05-layer-1-write-the-react-loop-yourself/README.md) | 5 | Tầng 1: Tự viết vòng lặp ReAct |
| 6 | [Layer 2: Raw Function Calling](06-layer-2-raw-function-calling/README.md) | 4 | Tầng 2: Function calling thô |
| 7 | [Layer 3: The ReAct Prompt Underneath](07-layer-3-the-react-prompt-underneath/README.md) | 6 | Tầng 3: ReAct từ prompt |
| 8 | [Wrap-up: From Layers Back to LangChain](08-wrap-up-from-layers-back-to-langchain/README.md) | 2 | Tổng kết kiến trúc agent |
| 9 | [RAG Foundations: Embeddings & Vector Databases](09-rag-foundations-embeddings-vector-databases/README.md) | 10 | Nền tảng RAG: embedding và vector database |
| 10 | [Build a Documentation Assistant with RAG](10-build-a-documentation-assistant-with-rag/README.md) | 17 | Trợ lý đọc tài liệu bằng RAG |
| 11 | [Prompt and Context Engineering Theory](11-prompt-and-context-engineering-theory/README.md) | 9 | Lý thuyết prompt và context engineering |
| 12 | [AI Applications In Production](12-ai-applications-in-production/README.md) | 9 | Ứng dụng LLM trong production |
| 13 | [LangGraph Fundamentals](13-langgraph-fundamentals/README.md) | 13 | Nền tảng LangGraph |
| 14 | [Build a Reflection Agent in LangGraph](14-build-a-reflection-agent-in-langgraph/README.md) | 5 | Reflection Agent với LangGraph |
| 15 | [Build a Reflexion Agent in LangGraph](15-build-a-reflexion-agent-in-langgraph/README.md) | 8 | Reflexion Agent với LangGraph |
| 16 | [Build an Agentic RAG System](16-build-an-agentic-rag-system/README.md) | 14 | Agentic RAG với LangGraph |
| 17 | [Model Context Protocol (MCP) Foundations](17-model-context-protocol-mcp-foundations/README.md) | 6 | Nền tảng Model Context Protocol |
| 18 | [Using a Pre-built Server (mcpdoc) with AI Clients (Cursor & Claude)](18-using-a-pre-built-server-mcpdoc-with-ai-clients-cursor-claude/README.md) | 5 | Sử dụng MCP server sẵn có |
| 19 | [Building MCP Servers and Clients with LangChain](19-building-mcp-servers-and-clients-with-langchain/README.md) | 9 | Tự xây MCP server/client với LangChain |
| 20 | [Deep Agents](20-deep-agents/README.md) | 6 | Deep Agents |
| 21 | [Deep Agents Skills](21-deep-agents-skills/README.md) | 6 | Deep Agents Skills |
| 22 | [Agent Middleware and Harness Engineering](22-agent-middleware-and-harness-engineering/README.md) | 3 | Middleware và Harness Engineering |
| 23 | [Jev & System One Models (Decision Models) with LangChain](23-jev-system-one-models-decision-models-with-langchain/README.md) | 15 | Jev và mô hình ra quyết định System One |
| 24 | [LangChain Glossary](24-langchain-glossary/README.md) | 7 | Từ điển khái niệm LangChain |
| 25 | [Industry Insights: Building Production Agents with Assaf Elovic](25-industry-insights-building-production-agents-with-assaf-elovic/README.md) | 3 | Bài học thực tế: Production agents |
| 26 | [Industry Insights: Building Production Security Agents with Roy Miara](26-industry-insights-building-production-security-agents-with-roy-mia/README.md) | 4 | Bài học thực tế: Security agents |
| 27 | [Agent Security Foundations](27-agent-security-foundations/README.md) | 8 | Nền tảng bảo mật AI Agent |
| 28 | [The Dark Side of "Vibe Coding": Vulnerabilities in AI-Generated Apps](28-the-dark-side-of-vibe-coding-vulnerabilities-in-ai-generated-apps/README.md) | 6 | Rủi ro ứng dụng được AI tạo mã |
| 29 | [Bonus](29-bonus/README.md) | 1 | Bonus và mở rộng |

## Cách học mỗi bài

1. Đọc mục tiêu và lý thuyết; tự giải thích bằng lời của mình.
2. Chạy hoặc phân tích snippet trong file `.md`; tùy bài có thể cần API key.
3. Hoàn thành nhiệm vụ A (hiểu), B (xây dựng), C (kiểm thử).
4. Tự trả lời câu hỏi cuối bài trước khi xem gợi ý.
5. Đánh dấu vào `progress.csv`; hoàn thành project cuối module.

## Lưu ý phiên bản

LangChain 1.x ưu tiên `from langchain.agents import create_agent` cho agent cấp cao. `langgraph.prebuilt.create_react_agent` là API cũ đã bị đánh dấu deprecated; bài tập trong bộ này dùng `create_agent` hoặc `StateGraph` khi phù hợp. SDK khác (MCP, Deep Agents, providers) vẫn có thể thay đổi: xem docs chính thức và `pip show <package>` trước khi chạy.

## Tài liệu đối chiếu

- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)
- [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview)
- [RAG](https://docs.langchain.com/oss/python/langchain/retrieval)
- [MCP](https://modelcontextprotocol.io/introduction)
- [Deep Agents](https://docs.langchain.com/oss/python/deepagents/overview)
- [LangSmith](https://docs.langchain.com/langsmith/home)
- [Python SDK MCP](https://py.sdk.modelcontextprotocol.io/)
- [Security](https://owasp.org/www-project-top-10-for-large-language-model-applications/)

**Bản biên soạn độc lập**; không đại diện cho Udemy hoặc giảng viên.
