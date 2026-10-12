# Module 09 — Nền tảng RAG: embedding và vector database

**Tên section Udemy:** RAG Foundations: Embeddings & Vector Databases  
**Số mục học tập:** 10  
**Dự án xuyên module:** Medium Analyzer: hỏi–đáp theo tập bài viết demo tự tạo.

## Kết quả cần đạt

- [ ] Giải thích embedding, similarity và top-k retrieval.
- [ ] Tách ingestion khỏi retrieval.
- [ ] Đánh giá nguồn dẫn chứng thay vì chỉ tính lưu loát.

## Giải thích và định hướng

Xây pipeline nạp tài liệu, chia đoạn, vector hóa, lưu trữ, tìm kiếm và trả lời.

Mỗi lesson trong module được viết độc lập bằng tiếng Việt, có khái niệm chính, ví dụ code, ba nhiệm vụ (hiểu – xây dựng – kiểm chứng) và phần tự kiểm. Đề cương/tựa bài giữ tên gốc để dễ tìm trong Udemy, nhưng nội dung không trích từ video.

## Lab của module

**Mục tiêu:** Medium Analyzer: hỏi–đáp theo tập bài viết demo tự tạo.

```python
from langchain_core.documents import Document
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings
from langchain_chroma import Chroma

docs = [Document(page_content="LangChain xây dựng ứng dụng LLM.", metadata={"source": "doc-1"})]
splitter = RecursiveCharacterTextSplitter(chunk_size=250, chunk_overlap=40)
chunks = splitter.split_documents(docs)
store = Chroma.from_documents(chunks, embedding=OpenAIEmbeddings())
print(store.similarity_search("LangChain là gì?", k=1))
```

## Danh sách bài học

01. [Introduction to Retrieval Augmentation Generation (RAG)](01-introduction-to-retrieval-augmentation-generation-rag.md) — `VIDEO`
02. [Introduction to RAG Implementation](02-introduction-to-rag-implementation.md) — `VIDEO`
03. [Medium Analyzer- Boilerplate Project Setup](03-medium-analyzer-boilerplate-project-setup.md) — `VIDEO`
04. [Medium Analyzer- Class Review: Loaders,TextSplitter,OpenAIEmbeddings,Pinecone](04-medium-analyzer-class-review-loaders-textsplitter-openaiembeddings.md) — `VIDEO`
05. [Medium Analyzer- Ingestion Implementation](05-medium-analyzer-ingestion-implementation.md) — `VIDEO`
06. [RECAP](06-recap.md) — `VIDEO`
07. [Medium Analyzer- Naive Retrieval Implementation Implementation](07-medium-analyzer-naive-retrieval-implementation-implementation.md) — `VIDEO`
08. [Medium Analyzer- 2 Step RAG](08-medium-analyzer-2-step-rag.md) — `VIDEO`
09. [LangChain RAG Documentation](09-langchain-rag-documentation.md) — `VIDEO`
10. [RAG Implementation with Vector Stores Quiz](10-rag-implementation-with-vector-stores-quiz.md) — `QUIZ`

## Bài tập tổng kết module

1. Tạo phiên bản demo có README, .env.example và hướng dẫn chạy tái lập được.
2. Viết tối thiểu 5 test cases, bao gồm một case lỗi hoặc thiếu dữ liệu.
3. Đối chiếu ba kết quả cần đạt ở đầu module và tự chấm 0–2 điểm mỗi tiêu chí.
4. Bổ sung sơ đồ kiến trúc, danh sách rủi ro và liên kết trace/screenshot nếu có.

**Nguồn tên bài:** Udemy course curriculum. **Giảng giải và bài tập:** được viết mới cho bản tự học.
