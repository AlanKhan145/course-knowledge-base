# Module 07 · Bài 05 — Agent Loop With ReAct Prompt

> **Thể loại gốc:** Bài giảng (video trong Udemy). **Section:** Layer 3: The ReAct Prompt Underneath  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

## 1. Mục tiêu bài học

- Hiểu và giải thích được **Agent Loop With ReAct Prompt** trong bối cảnh module **Tầng 3: ReAct từ prompt**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Tự xây bộ parser Action/Action Input/Observation với dữ liệu giả.**.

## 2. Kiến thức trọng tâm

**Góc nhìn 1.** ReAct kết hợp suy luận ở mức hành động với quan sát từ tool. Thiết kế thực tế nên lưu tool call và kết quả thay vì phụ thuộc vào việc mô hình in toàn bộ suy nghĩ nội bộ.

**Góc nhìn 2.** Để kiểm soát agent loop, phải có điều kiện dừng, giới hạn lần gọi, cơ chế xử lý exception và định dạng kết quả cuối. Kiểm thử cả đường thành công lẫn trường hợp model liên tục gọi lại một tool.

**Đưa vào dự án:** Dựng agent bằng prompt mô tả công cụ khi model không hỗ trợ native tool calling.

## 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *Agent Loop With ReAct Prompt*, ghi kiểu dữ liệu, nguồn và ràng buộc.
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

- **A — Hiểu:** Vẽ luồng User → Model → Tool → Model → Final và nêu điểm dừng.
- **B — Xây dựng:** Giả lập agent gọi liên tiếp cùng một tool 100 lần; thiết lập cơ chế dừng ở bước 5. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

## 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **Agent Loop With ReAct Prompt**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
**Gợi ý:** xác định rõ ranh giới giữa model, host runtime, data source và tool executor.

**Câu hỏi 2.** Nêu một bằng chứng giúp kiểm tra rằng giải pháp không chỉ "có vẻ đúng".  
**Gợi ý:** sử dụng schema validation, case đối chứng, nguồn trích dẫn, log hoặc metric phù hợp.

**Câu hỏi 3.** Đâu là lỗi thường gặp khi triển khai khái niệm này?  
**Gợi ý:** Không gọi tool khi không cần; dừng nếu đã có đáp án hoặc vượt giới hạn bước.

## 7. Tiêu chí hoàn thành

- [ ] Giải thích được khái niệm bằng 3–5 câu không nhìn tài liệu.
- [ ] Chạy hoặc phân tích đúng một ví dụ minh họa, ghi hạn chế khi chưa có API key.
- [ ] Hoàn thành nhiệm vụ A–C; ghi lại ít nhất một trường hợp thất bại.
- [ ] Cập nhật trạng thái học trong `../progress.csv`.

## 8. Tài liệu tham khảo

- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)
- [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview)
- [LangSmith](https://docs.langchain.com/langsmith/home)

