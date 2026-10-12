# Module 09 · Bài 03 — Medium Analyzer- Boilerplate Project Setup

> **Thể loại gốc:** Bài giảng (video trong Udemy). **Section:** RAG Foundations: Embeddings & Vector Databases  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

## 1. Mục tiêu bài học

- Hiểu và giải thích được **Medium Analyzer- Boilerplate Project Setup** trong bối cảnh module **Nền tảng RAG: embedding và vector database**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Medium Analyzer: hỏi–đáp theo tập bài viết demo tự tạo.**.

## 2. Kiến thức trọng tâm

**Góc nhìn 1.** Cấu hình dự án gồm Python phù hợp, môi trường ảo, khóa từ biến môi trường, package được khóa phiên bản và bài test smoke. Không commit `.env` thật vào Git.

**Góc nhìn 2.** RAG không tự sửa hallucination nếu tài liệu lỗi hoặc prompt bỏ qua nguồn. Nên quản lý version dữ liệu, ghi provenance và đánh giá retrieval trước khi đánh giá phần sinh câu trả lời.

**Đưa vào dự án:** Xây pipeline nạp tài liệu, chia đoạn, vector hóa, lưu trữ, tìm kiếm và trả lời.

## 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *Medium Analyzer- Boilerplate Project Setup*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

## 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

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

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

## 5. Bài tập thực hành

- **A — Hiểu:** Tạo `uv venv`, cài dependencies, viết smoke test import và chạy trong môi trường sạch.
- **B — Xây dựng:** Xây tập 10 câu hỏi gồm câu đúng nguồn, câu ngoài nguồn và câu phủ định. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

## 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **Medium Analyzer- Boilerplate Project Setup**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
**Gợi ý:** xác định rõ ranh giới giữa model, host runtime, data source và tool executor.

**Câu hỏi 2.** Nêu một bằng chứng giúp kiểm tra rằng giải pháp không chỉ "có vẻ đúng".  
**Gợi ý:** sử dụng schema validation, case đối chứng, nguồn trích dẫn, log hoặc metric phù hợp.

**Câu hỏi 3.** Đâu là lỗi thường gặp khi triển khai khái niệm này?  
**Gợi ý:** Một cấu hình tốt tái lập được, không yêu cầu copy API key vào source code.

## 7. Tiêu chí hoàn thành

- [ ] Giải thích được khái niệm bằng 3–5 câu không nhìn tài liệu.
- [ ] Chạy hoặc phân tích đúng một ví dụ minh họa, ghi hạn chế khi chưa có API key.
- [ ] Hoàn thành nhiệm vụ A–C; ghi lại ít nhất một trường hợp thất bại.
- [ ] Cập nhật trạng thái học trong `../progress.csv`.

## 8. Tài liệu tham khảo

- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)
- [RAG](https://docs.langchain.com/oss/python/langchain/retrieval)
- [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview)
- [LangSmith](https://docs.langchain.com/langsmith/home)

