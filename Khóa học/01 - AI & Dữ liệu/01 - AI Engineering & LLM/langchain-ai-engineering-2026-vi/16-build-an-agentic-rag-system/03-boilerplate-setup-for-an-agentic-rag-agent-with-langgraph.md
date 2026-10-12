# Module 16 · Bài 03 — Boilerplate Setup for an Agentic RAG Agent with LangGraph

> **Thể loại gốc:** Bài giảng (video trong Udemy). **Section:** Build an Agentic RAG System  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

## 1. Mục tiêu bài học

- Hiểu và giải thích được **Boilerplate Setup for an Agentic RAG Agent with LangGraph** trong bối cảnh module **Agentic RAG với LangGraph**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **RAG assistant với fallback web-search khi tài liệu chưa đủ bằng chứng.**.

## 2. Kiến thức trọng tâm

**Góc nhìn 1.** Cấu hình dự án gồm Python phù hợp, môi trường ảo, khóa từ biến môi trường, package được khóa phiên bản và bài test smoke. Không commit `.env` thật vào Git.

**Góc nhìn 2.** RAG không tự sửa hallucination nếu tài liệu lỗi hoặc prompt bỏ qua nguồn. Nên quản lý version dữ liệu, ghi provenance và đánh giá retrieval trước khi đánh giá phần sinh câu trả lời.

**Góc nhìn 3.** LangGraph biểu diễn đồ thị nơi các node nhận state và trả partial updates; edges xác định lộ trình. Tạo graph bằng `StateGraph`, `START`, `END`, sau đó `.compile()` để chạy.

**Đưa vào dự án:** Chọn luồng retrieval, đánh giá độ liên quan, tìm web bổ sung và tự kiểm chất lượng.

## 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *Boilerplate Setup for an Agentic RAG Agent with LangGraph*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

## 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

```python
from typing import TypedDict
from langgraph.graph import StateGraph, START, END
class S(TypedDict): count: int
def plus_one(s: S): return {"count": s["count"] + 1}
g = StateGraph(S); g.add_node("plus_one", plus_one)
g.add_edge(START, "plus_one"); g.add_edge("plus_one", END)
print(g.compile().invoke({"count": 0}))
```

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

## 5. Bài tập thực hành

- **A — Hiểu:** Tạo `uv venv`, cài dependencies, viết smoke test import và chạy trong môi trường sạch.
- **B — Xây dựng:** Xây tập 10 câu hỏi gồm câu đúng nguồn, câu ngoài nguồn và câu phủ định. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

## 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **Boilerplate Setup for an Agentic RAG Agent with LangGraph**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
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

