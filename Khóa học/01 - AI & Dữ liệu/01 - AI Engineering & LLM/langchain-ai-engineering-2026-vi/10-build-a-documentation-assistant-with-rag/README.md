# Module 10 — Trợ lý đọc tài liệu bằng RAG

**Tên section Udemy:** Build a Documentation Assistant with RAG  
**Số mục học tập:** 17  
**Dự án xuyên module:** Documentation Assistant: hỏi–đáp có trích nguồn trên tài liệu Python.

## Kết quả cần đạt

- [ ] Thiết kế idempotent ingestion và batch indexing.
- [ ] Kết hợp tìm kiếm với model và dẫn chứng.
- [ ] Xây giao diện Streamlit và xử lý lỗi.

## Giải thích và định hướng

Thu thập tài liệu kỹ thuật, xử lý trùng lặp, chia chunk, lập chỉ mục và dựng giao diện.

Mỗi lesson trong module được viết độc lập bằng tiếng Việt, có khái niệm chính, ví dụ code, ba nhiệm vụ (hiểu – xây dựng – kiểm chứng) và phần tự kiểm. Đề cương/tựa bài giữ tên gốc để dễ tìm trong Udemy, nhưng nội dung không trích từ video.

## Lab của module

**Mục tiêu:** Documentation Assistant: hỏi–đáp có trích nguồn trên tài liệu Python.

```python
# Pipeline ingestion/retrieval thu nhỏ, dùng tài liệu tự tạo.
from langchain_core.documents import Document
from langchain_text_splitters import RecursiveCharacterTextSplitter

docs = [Document(page_content="API requests cần authentication.", metadata={"url": "local-doc"})]
chunks = RecursiveCharacterTextSplitter(chunk_size=100, chunk_overlap=15).split_documents(docs)
assert all(c.metadata.get("url") for c in chunks)
print([(x.page_content, x.metadata) for x in chunks])
```

## Danh sách bài học

01. [What are we building? A lightweight Cursor/ Feature Feature (RAG)](01-what-are-we-building-a-lightweight-cursor-feature-feature-rag.md) — `VIDEO`
02. [Quick Note: Pipenv vs uv](02-quick-note-pipenv-vs-uv.md) — `ARTICLE`
03. [Environment Setup](03-environment-setup.md) — `VIDEO`
04. [Ingestion Pipeline Intro](04-ingestion-pipeline-intro.md) — `VIDEO`
05. [Imports](05-imports.md) — `VIDEO`
06. [Tavily Crawling](06-tavily-crawling.md) — `VIDEO`
07. [[Optional] TavilyMap, TavilyExtract for High customizability](07-optional-tavilymap-tavilyextract-for-high-customizability.md) — `VIDEO`
08. [[Optional] Crawling Deep Dive](08-optional-crawling-deep-dive.md) — `VIDEO`
09. [Quick Recap](09-quick-recap.md) — `VIDEO`
10. [Chunking (Text Splitting)](10-chunking-text-splitting.md) — `VIDEO`
11. [Batch Indexing](11-batch-indexing.md) — `VIDEO`
12. [Retrieval Agent Implementation](12-retrieval-agent-implementation.md) — `VIDEO`
13. [Run, Debug, Trace RAG Agent](13-run-debug-trace-rag-agent.md) — `VIDEO`
14. ["Frontend" with Streamlit (UI)](14-frontend-with-streamlit-ui.md) — `VIDEO`
15. [Documentation Helper In Production](15-documentation-helper-in-production.md) — `VIDEO`
16. [Choosing the right RAG Architecture](16-choosing-the-right-rag-architecture.md) — `VIDEO`
17. [TextSplitting Playground](17-textsplitting-playground.md) — `VIDEO`

## Bài tập tổng kết module

1. Tạo phiên bản demo có README, .env.example và hướng dẫn chạy tái lập được.
2. Viết tối thiểu 5 test cases, bao gồm một case lỗi hoặc thiếu dữ liệu.
3. Đối chiếu ba kết quả cần đạt ở đầu module và tự chấm 0–2 điểm mỗi tiêu chí.
4. Bổ sung sơ đồ kiến trúc, danh sách rủi ro và liên kết trace/screenshot nếu có.

**Nguồn tên bài:** Udemy course curriculum. **Giảng giải và bài tập:** được viết mới cho bản tự học.
