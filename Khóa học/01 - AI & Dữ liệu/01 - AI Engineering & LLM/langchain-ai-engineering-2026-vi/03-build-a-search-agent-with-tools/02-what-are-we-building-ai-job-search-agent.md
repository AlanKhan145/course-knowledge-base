# Module 03 · Bài 02 — What are we building? AI Job Search Agent

> **Thể loại gốc:** Bài giảng (video trong Udemy). **Section:** Build a Search Agent with Tools  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

## 1. Mục tiêu bài học

- Hiểu và giải thích được **What are we building? AI Job Search Agent** trong bối cảnh module **Xây dựng search agent dùng công cụ**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Agent tìm thông tin tuyển dụng AI Engineer, trích xuất kỹ năng và nguồn.**.

## 2. Kiến thức trọng tâm

**Góc nhìn 1.** Công cụ tìm kiếm cung cấp dữ kiện bên ngoài và cập nhật. Trả về của search phải được xem như dữ liệu không tin cậy; cần ghi URL, thời điểm truy cập và phân biệt trích dẫn với kết luận.

**Đưa vào dự án:** Cho phép mô hình quyết định khi nào gọi công cụ tìm kiếm và trả kết quả có cấu trúc.

## 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *What are we building? AI Job Search Agent*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

## 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

```python
from langchain.agents import create_agent
from langchain.tools import tool

@tool
def search_jobs(skill: str) -> str:
    """Tra cứu kỹ năng tuyển dụng giả lập; không gọi internet."""
    return f"Vị trí cần biết {skill}, Python, API và kiểm thử."

agent = create_agent(
    model="openai:gpt-4o-mini",
    tools=[search_jobs],
    system_prompt="Tư vấn nghề AI, dùng dữ liệu công cụ nếu cần."
)
result = agent.invoke({"messages": [{"role": "user", "content": "Kỹ năng LangChain cần cho AI Engineer?"}]})
print(result["messages"][-1].content)
```

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

## 5. Bài tập thực hành

- **A — Hiểu:** Thiết kế kết quả gồm `title`, `url`, `snippet`, `retrieved_at`, thử hai nguồn mâu thuẫn.
- **B — Xây dựng:** Áp dụng bài **What are we building? AI Job Search Agent** vào dự án: Agent tìm thông tin tuyển dụng AI Engineer, trích xuất kỹ năng và nguồn. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

## 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **What are we building? AI Job Search Agent**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
**Gợi ý:** xác định rõ ranh giới giữa model, host runtime, data source và tool executor.

**Câu hỏi 2.** Nêu một bằng chứng giúp kiểm tra rằng giải pháp không chỉ "có vẻ đúng".  
**Gợi ý:** sử dụng schema validation, case đối chứng, nguồn trích dẫn, log hoặc metric phù hợp.

**Câu hỏi 3.** Đâu là lỗi thường gặp khi triển khai khái niệm này?  
**Gợi ý:** Không khẳng định thông tin chắc chắn nếu nguồn thiếu hoặc mâu thuẫn.

## 7. Tiêu chí hoàn thành

- [ ] Giải thích được khái niệm bằng 3–5 câu không nhìn tài liệu.
- [ ] Chạy hoặc phân tích đúng một ví dụ minh họa, ghi hạn chế khi chưa có API key.
- [ ] Hoàn thành nhiệm vụ A–C; ghi lại ít nhất một trường hợp thất bại.
- [ ] Cập nhật trạng thái học trong `../progress.csv`.

## 8. Tài liệu tham khảo

- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)
- [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview)
- [LangSmith](https://docs.langchain.com/langsmith/home)

