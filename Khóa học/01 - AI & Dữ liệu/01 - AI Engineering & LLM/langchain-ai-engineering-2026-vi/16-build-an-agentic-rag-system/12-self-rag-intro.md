# Module 16 · Bài 12 — Self RAG- Intro

> **Thể loại gốc:** Bài giảng (video trong Udemy). **Section:** Build an Agentic RAG System  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

## 1. Mục tiêu bài học

- Hiểu và giải thích được **Self RAG- Intro** trong bối cảnh module **Agentic RAG với LangGraph**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **RAG assistant với fallback web-search khi tài liệu chưa đủ bằng chứng.**.

## 2. Kiến thức trọng tâm

**Góc nhìn 1.** RAG không tự sửa hallucination nếu tài liệu lỗi hoặc prompt bỏ qua nguồn. Nên quản lý version dữ liệu, ghi provenance và đánh giá retrieval trước khi đánh giá phần sinh câu trả lời.

**Góc nhìn 2.** Corrective RAG kiểm tra tài liệu tìm được trước khi generate; Self-RAG tự phản hồi về chất lượng bằng chứng; Adaptive RAG chọn chiến lược dựa theo câu hỏi. Mỗi nhánh làm tăng độ phức tạp và chi phí.

**Đưa vào dự án:** Chọn luồng retrieval, đánh giá độ liên quan, tìm web bổ sung và tự kiểm chất lượng.

## 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *Self RAG- Intro*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

## 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

```python
# Router RAG thu nhỏ: cần kiểm thử với nhiều bộ dữ liệu.
def route(question: str, has_relevant_docs: bool) -> str:
    return "generate_with_docs" if has_relevant_docs else "web_search_or_abstain"

assert route("Cấu hình API?", False) == "web_search_or_abstain"
print("Đường đi:", route("Cấu hình API?", True))
```

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

## 5. Bài tập thực hành

- **A — Hiểu:** Xây tập 10 câu hỏi gồm câu đúng nguồn, câu ngoài nguồn và câu phủ định.
- **B — Xây dựng:** Đo route accuracy trên câu hỏi đơn giản/khó/ngoài miền và tính chi phí mỗi nhánh. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

## 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **Self RAG- Intro**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
**Gợi ý:** xác định rõ ranh giới giữa model, host runtime, data source và tool executor.

**Câu hỏi 2.** Nêu một bằng chứng giúp kiểm tra rằng giải pháp không chỉ "có vẻ đúng".  
**Gợi ý:** sử dụng schema validation, case đối chứng, nguồn trích dẫn, log hoặc metric phù hợp.

**Câu hỏi 3.** Đâu là lỗi thường gặp khi triển khai khái niệm này?  
**Gợi ý:** Đánh giá retrieval recall, precision nguồn và tỷ lệ từ chối đúng.

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

