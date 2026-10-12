# Module 09 · Bài 10 — RAG Implementation with Vector Stores Quiz

> **Thể loại gốc:** Trắc nghiệm. **Section:** RAG Foundations: Embeddings & Vector Databases  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

## 1. Mục tiêu bài học

- Hiểu và giải thích được **RAG Implementation with Vector Stores Quiz** trong bối cảnh module **Nền tảng RAG: embedding và vector database**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Medium Analyzer: hỏi–đáp theo tập bài viết demo tự tạo.**.

## 2. Kiến thức trọng tâm

**Góc nhìn 1.** Embedding biến văn bản thành vector số để so độ tương đồng. Chunking, độ dài đoạn, metadata và embedding model ảnh hưởng lớn đến recall; vector search không tự nhận biết thông tin đúng hay sai.

**Góc nhìn 2.** RAG 2 bước thường retrieve trước rồi đưa context vào prompt để generate. LLM chỉ nên trả lời trong phạm vi bằng chứng; cần trả câu “chưa tìm thấy” khi không đủ nguồn.

**Góc nhìn 3.** RAG không tự sửa hallucination nếu tài liệu lỗi hoặc prompt bỏ qua nguồn. Nên quản lý version dữ liệu, ghi provenance và đánh giá retrieval trước khi đánh giá phần sinh câu trả lời.

**Đưa vào dự án:** Xây pipeline nạp tài liệu, chia đoạn, vector hóa, lưu trữ, tìm kiếm và trả lời.

## 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *RAG Implementation with Vector Stores Quiz*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

## 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

```python
# Cài langchain-openai và thiết lập OPENAI_API_KEY trước khi chạy.
from langchain_openai import OpenAIEmbeddings
emb = OpenAIEmbeddings(model="text-embedding-3-small")
vector = emb.embed_query("Ví dụ về embedding")
print(len(vector))
```

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

## 5. Bài tập thực hành

- **A — Hiểu:** Viết 5 tài liệu và 5 câu hỏi; kiểm tra top-3 retrieval chứa đoạn nào.
- **B — Xây dựng:** Thiết kế câu hỏi có và không có trong corpus; so sánh hành vi của hệ thống. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

## 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **RAG Implementation with Vector Stores Quiz**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
**Gợi ý:** xác định rõ ranh giới giữa model, host runtime, data source và tool executor.

**Câu hỏi 2.** Nêu một bằng chứng giúp kiểm tra rằng giải pháp không chỉ "có vẻ đúng".  
**Gợi ý:** sử dụng schema validation, case đối chứng, nguồn trích dẫn, log hoặc metric phù hợp.

**Câu hỏi 3.** Đâu là lỗi thường gặp khi triển khai khái niệm này?  
**Gợi ý:** Đo Recall@k trước khi tối ưu câu trả lời LLM.

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

---

## Bài kiểm tra trắc nghiệm

**Số câu:** 6 • **Điểm tối đa:** 6 • **Đạt:** từ 80%

Làm bài mà chưa mở phần đáp án. Mỗi câu chọn đúng **một** phương án.

**Câu 1. Embedding biểu diễn văn bản dưới dạng gì?**

- A. Tệp video
- B. Prompt hệ thống
- C. SQL schema
- D. Vector số

**Câu 2. Chunk overlap giúp gì?**

- A. Thay model
- B. Mã hóa khóa
- C. Giảm mất mạch giữa đoạn
- D. Tăng độ tin cậy tự động

**Câu 3. Ingestion có cần idempotency không?**

- A. Chỉ khi dùng UI
- B. Có, tránh trùng lặp
- C. Không bao giờ
- D. Chỉ nếu chatbot offline

**Câu 4. Top-k retrieval là gì?**

- A. Lấy k đoạn xếp hạng cao
- B. Tạo k model
- C. Gọi k API key
- D. Đo k người dùng

**Câu 5. Nếu không có nguồn phù hợp thì sao?**

- A. Bịa câu trả lời
- B. Chọn nguồn bất kỳ
- C. Xóa citation
- D. Nêu chưa đủ bằng chứng

**Câu 6. Metric nên đo ở retrieval là gì?**

- A. FPS
- B. Battery life
- C. Recall@k
- D. CSS score

<details>
<summary>Đáp án và giải thích</summary>

1. **D. Vector số** — Embedding biểu diễn văn bản dưới dạng gì?
2. **C. Giảm mất mạch giữa đoạn** — Chunk overlap giúp gì?
3. **B. Có, tránh trùng lặp** — Ingestion có cần idempotency không?
4. **A. Lấy k đoạn xếp hạng cao** — Top-k retrieval là gì?
5. **D. Nêu chưa đủ bằng chứng** — Nếu không có nguồn phù hợp thì sao?
6. **C. Recall@k** — Metric nên đo ở retrieval là gì?

</details>

### Bài tập bổ sung

Viết một ví dụ kiểm chứng lại hai câu mà bạn còn phân vân; ghi nhận xét trong `study-notes.md`.
