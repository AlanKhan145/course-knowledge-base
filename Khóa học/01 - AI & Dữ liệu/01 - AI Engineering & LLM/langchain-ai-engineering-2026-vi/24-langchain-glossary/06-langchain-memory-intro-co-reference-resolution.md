# Module 24 · Bài 06 — LangChain Memory Intro- Co Reference Resolution

> **Thể loại gốc:** Bài giảng (video trong Udemy). **Section:** LangChain Glossary  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

## 1. Mục tiêu bài học

- Hiểu và giải thích được **LangChain Memory Intro- Co Reference Resolution** trong bối cảnh module **Từ điển khái niệm LangChain**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Tạo bộ flashcards và notebook khái niệm có thể tra cứu.**.

## 2. Kiến thức trọng tâm

**Góc nhìn 1.** Trong LCEL, runnable có thể ghép bằng toán tử `|` và gọi `.invoke()`/`.stream()`. Cần hiểu kiểu input-output từng bước, vì thiếu parser hoặc sai key là lỗi phổ biến.

**Góc nhìn 2.** Messages có role và content; Document có page_content và metadata. Memory cần phân biệt context tạm thời trong một phiên với store dài hạn; việc lưu PII phải minh bạch và có TTL/chính sách xóa.

**Đưa vào dự án:** Ôn tập chat models, messages, splitters, documents, token, context và memory.

## 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *LangChain Memory Intro- Co Reference Resolution*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

## 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

```python
from langchain_core.messages import SystemMessage, HumanMessage
from langchain_core.documents import Document

messages = [SystemMessage(content="Bạn là trợ lý học tập."), HumanMessage(content="RAG là gì?")]
doc = Document(page_content="RAG cung cấp ngữ cảnh từ tài liệu.", metadata={"source":"demo"})
print(messages[-1].content, doc.metadata)
```

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

## 5. Bài tập thực hành

- **A — Hiểu:** Vẽ sơ đồ prompt → model → parser và ghi rõ kiểu dữ liệu ở mỗi mũi tên.
- **B — Xây dựng:** Thiết kế memory lưu sở thích không nhạy cảm và không lặp context dài quá mức. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

## 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **LangChain Memory Intro- Co Reference Resolution**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
**Gợi ý:** xác định rõ ranh giới giữa model, host runtime, data source và tool executor.

**Câu hỏi 2.** Nêu một bằng chứng giúp kiểm tra rằng giải pháp không chỉ "có vẻ đúng".  
**Gợi ý:** sử dụng schema validation, case đối chứng, nguồn trích dẫn, log hoặc metric phù hợp.

**Câu hỏi 3.** Đâu là lỗi thường gặp khi triển khai khái niệm này?  
**Gợi ý:** Prompt trả PromptValue/messages, model trả AIMessage, parser thường trả string.

## 7. Tiêu chí hoàn thành

- [ ] Giải thích được khái niệm bằng 3–5 câu không nhìn tài liệu.
- [ ] Chạy hoặc phân tích đúng một ví dụ minh họa, ghi hạn chế khi chưa có API key.
- [ ] Hoàn thành nhiệm vụ A–C; ghi lại ít nhất một trường hợp thất bại.
- [ ] Cập nhật trạng thái học trong `../progress.csv`.

## 8. Tài liệu tham khảo

- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)
- [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview)
- [LangSmith](https://docs.langchain.com/langsmith/home)

