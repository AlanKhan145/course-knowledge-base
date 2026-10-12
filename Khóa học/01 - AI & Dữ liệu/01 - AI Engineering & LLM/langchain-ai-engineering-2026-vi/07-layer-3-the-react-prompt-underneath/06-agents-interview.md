# Module 07 · Bài 06 — Agents Interview

> **Thể loại gốc:** Phỏng vấn giả lập. **Section:** Layer 3: The ReAct Prompt Underneath  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

## 1. Mục tiêu bài học

- Hiểu và giải thích được **Agents Interview** trong bối cảnh module **Tầng 3: ReAct từ prompt**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Tự xây bộ parser Action/Action Input/Observation với dữ liệu giả.**.

## 2. Kiến thức trọng tâm

**Góc nhìn 1.** Dựng agent bằng prompt mô tả công cụ khi model không hỗ trợ native tool calling.

**Đưa vào dự án:** Dựng agent bằng prompt mô tả công cụ khi model không hỗ trợ native tool calling.

## 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *Agents Interview*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

## 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

```python
# Mô phỏng parser đơn giản; production nên dùng native tool calling.
from dataclasses import dataclass

@dataclass
class Action:
    tool: str
    tool_input: str

allowed = {"lookup": lambda x: f"Found: {x}"}
action = Action(tool="lookup", tool_input="policy")
if action.tool not in allowed: raise ValueError("unknown tool")
print(allowed[action.tool](action.tool_input))
```

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

## 5. Bài tập thực hành

- **A — Hiểu:** Hãy mô tả lại trọng tâm bài học bằng một sơ đồ input → process → output.
- **B — Xây dựng:** Áp dụng bài **Agents Interview** vào dự án: Tự xây bộ parser Action/Action Input/Observation với dữ liệu giả. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

## 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **Agents Interview**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
**Gợi ý:** xác định rõ ranh giới giữa model, host runtime, data source và tool executor.

**Câu hỏi 2.** Nêu một bằng chứng giúp kiểm tra rằng giải pháp không chỉ "có vẻ đúng".  
**Gợi ý:** sử dụng schema validation, case đối chứng, nguồn trích dẫn, log hoặc metric phù hợp.

**Câu hỏi 3.** Đâu là lỗi thường gặp khi triển khai khái niệm này?  
**Gợi ý:** Có ví dụ đầu vào, đầu ra, kiểm thử thành công và thất bại.

## 7. Tiêu chí hoàn thành

- [ ] Giải thích được khái niệm bằng 3–5 câu không nhìn tài liệu.
- [ ] Chạy hoặc phân tích đúng một ví dụ minh họa, ghi hạn chế khi chưa có API key.
- [ ] Hoàn thành nhiệm vụ A–C; ghi lại ít nhất một trường hợp thất bại.
- [ ] Cập nhật trạng thái học trong `../progress.csv`.

## 8. Tài liệu tham khảo

- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)
- [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview)
- [LangSmith](https://docs.langchain.com/langsmith/home)

---

## Role-play: Phỏng vấn vị trí AI Engineer về Agent Architecture

**Hình thức:** một người phỏng vấn, một người ứng viên, 15–20 phút; ghi âm nếu được sự đồng ý.

**Câu hỏi phỏng vấn**

1. Phân biệt chatbot thông thường và AI agent; đưa ví dụ thực tế.
2. Hãy mô tả vòng lặp Model → Tool → Observation → Model.
3. Ai thực sự thực thi tool, và runtime phải kiểm tra điều gì?
4. Agent gọi cùng tool 20 lần, bạn xử lý thế nào?
5. Với bài toán trả lời tài liệu, chọn simple RAG hay agentic RAG khi nào?
6. Làm gì để giảm rò rỉ API key, prompt injection và truy cập tool quá quyền?

**Rubric (10 điểm):** kiến trúc 3đ, giải thích tool-calling 2đ, an toàn 2đ, testing/tracing 2đ, truyền đạt 1đ.

**Sau role-play:** viết `STAR` (Situation, Task, Action, Result) tóm tắt một dự án agent của bạn trong 180–250 chữ. Không tuyên bố đã triển khai production nếu chưa làm.

