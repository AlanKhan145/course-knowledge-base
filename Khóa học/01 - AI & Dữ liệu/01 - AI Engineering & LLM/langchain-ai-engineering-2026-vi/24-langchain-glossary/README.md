# Module 24 — Từ điển khái niệm LangChain

**Tên section Udemy:** LangChain Glossary  
**Số mục học tập:** 7  
**Dự án xuyên module:** Tạo bộ flashcards và notebook khái niệm có thể tra cứu.

## Kết quả cần đạt

- [ ] Nhận biết các message role.
- [ ] Lý giải chunk overlap và metadata.
- [ ] Phân biệt session memory với long-term store.

## Giải thích và định hướng

Ôn tập chat models, messages, splitters, documents, token, context và memory.

Mỗi lesson trong module được viết độc lập bằng tiếng Việt, có khái niệm chính, ví dụ code, ba nhiệm vụ (hiểu – xây dựng – kiểm chứng) và phần tự kiểm. Đề cương/tựa bài giữ tên gốc để dễ tìm trong Udemy, nhưng nội dung không trích từ video.

## Lab của module

**Mục tiêu:** Tạo bộ flashcards và notebook khái niệm có thể tra cứu.

```python
from langchain_core.messages import SystemMessage, HumanMessage
from langchain_core.documents import Document

messages = [SystemMessage(content="Bạn là trợ lý học tập."), HumanMessage(content="RAG là gì?")]
doc = Document(page_content="RAG cung cấp ngữ cảnh từ tài liệu.", metadata={"source":"demo"})
print(messages[-1].content, doc.metadata)
```

## Danh sách bài học

01. [ChatModels](01-chatmodels.md) — `VIDEO`
02. [Messages](02-messages.md) — `VIDEO`
03. [RecursiveCharacterTextSplitter](03-recursivecharactertextsplitter.md) — `VIDEO`
04. [Document](04-document.md) — `VIDEO`
05. [LangChain Token Limitation Handeling Strategies](05-langchain-token-limitation-handeling-strategies.md) — `VIDEO`
06. [LangChain Memory Intro- Co Reference Resolution](06-langchain-memory-intro-co-reference-resolution.md) — `VIDEO`
07. [LangChain Memory Theory Deepdive (LangGraph)](07-langchain-memory-theory-deepdive-langgraph.md) — `VIDEO`

## Bài tập tổng kết module

1. Tạo phiên bản demo có README, .env.example và hướng dẫn chạy tái lập được.
2. Viết tối thiểu 5 test cases, bao gồm một case lỗi hoặc thiếu dữ liệu.
3. Đối chiếu ba kết quả cần đạt ở đầu module và tự chấm 0–2 điểm mỗi tiêu chí.
4. Bổ sung sơ đồ kiến trúc, danh sách rủi ro và liên kết trace/screenshot nếu có.

**Nguồn tên bài:** Udemy course curriculum. **Giảng giải và bài tập:** được viết mới cho bản tự học.
