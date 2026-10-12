# Module 16 — Agentic RAG với LangGraph

**Tên section Udemy:** Build an Agentic RAG System  
**Số mục học tập:** 14  
**Dự án xuyên module:** RAG assistant với fallback web-search khi tài liệu chưa đủ bằng chứng.

## Kết quả cần đạt

- [ ] Thực hiện retrieve → grade → generate.
- [ ] Thiết kế corrective/self/adaptive RAG.
- [ ] Không bịa nguồn khi retrieval thất bại.

## Giải thích và định hướng

Chọn luồng retrieval, đánh giá độ liên quan, tìm web bổ sung và tự kiểm chất lượng.

Mỗi lesson trong module được viết độc lập bằng tiếng Việt, có khái niệm chính, ví dụ code, ba nhiệm vụ (hiểu – xây dựng – kiểm chứng) và phần tự kiểm. Đề cương/tựa bài giữ tên gốc để dễ tìm trong Udemy, nhưng nội dung không trích từ video.

## Lab của module

**Mục tiêu:** RAG assistant với fallback web-search khi tài liệu chưa đủ bằng chứng.

```python
# Router RAG thu nhỏ: cần kiểm thử với nhiều bộ dữ liệu.
def route(question: str, has_relevant_docs: bool) -> str:
    return "generate_with_docs" if has_relevant_docs else "web_search_or_abstain"

assert route("Cấu hình API?", False) == "web_search_or_abstain"
print("Đường đi:", route("Cấu hình API?", True))
```

## Danh sách bài học

01. [What are Building In this Section- Agentic RAG Architecture](01-what-are-building-in-this-section-agentic-rag-architecture.md) — `VIDEO`
02. [Improving RAG Quality with the Corrective RAG Flow](02-improving-rag-quality-with-the-corrective-rag-flow.md) — `VIDEO`
03. [Boilerplate Setup for an Agentic RAG Agent with LangGraph](03-boilerplate-setup-for-an-agentic-rag-agent-with-langgraph.md) — `VIDEO`
04. [Code Structure](04-code-structure.md) — `VIDEO`
05. [LangChain Vector Store Ingestion Pipeline (Unstructured, ChromaDB)](05-langchain-vector-store-ingestion-pipeline-unstructured-chromadb.md) — `VIDEO`
06. [Managing Information Flow in LangGraph: The GraphState](06-managing-information-flow-in-langgraph-the-graphstate.md) — `VIDEO`
07. [Fetching Context for LLMs: The LangGraph Retrieve Node](07-fetching-context-for-llms-the-langgraph-retrieve-node.md) — `VIDEO`
08. [Building a Relevance Filter for RAG using LangChain's Structured Output](08-building-a-relevance-filter-for-rag-using-langchain-s-structured-o.md) — `VIDEO`
09. [Implementing a Web Search Node in LangGraph using Tavily API](09-implementing-a-web-search-node-in-langgraph-using-tavily-api.md) — `VIDEO`
10. [Creating the LLM Generation Chain and Node for LangGraph](10-creating-the-llm-generation-chain-and-node-for-langgraph.md) — `VIDEO`
11. [Building and Running the Complete LangGraph Agent](11-building-and-running-the-complete-langgraph-agent.md) — `VIDEO`
12. [Self RAG- Intro](12-self-rag-intro.md) — `VIDEO`
13. [Self RAG- Implementation](13-self-rag-implementation.md) — `VIDEO`
14. [Adaptive RAG](14-adaptive-rag.md) — `VIDEO`

## Bài tập tổng kết module

1. Tạo phiên bản demo có README, .env.example và hướng dẫn chạy tái lập được.
2. Viết tối thiểu 5 test cases, bao gồm một case lỗi hoặc thiếu dữ liệu.
3. Đối chiếu ba kết quả cần đạt ở đầu module và tự chấm 0–2 điểm mỗi tiêu chí.
4. Bổ sung sơ đồ kiến trúc, danh sách rủi ro và liên kết trace/screenshot nếu có.

**Nguồn tên bài:** Udemy course curriculum. **Giảng giải và bài tập:** được viết mới cho bản tự học.
