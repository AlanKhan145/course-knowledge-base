# Module 14 · Bài 01 — What are we building? A Reflection Agent

> **Thể loại gốc:** Bài giảng (video trong Udemy). **Section:** Build a Reflection Agent in LangGraph  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

## 1. Mục tiêu bài học

- Hiểu và giải thích được **What are we building? A Reflection Agent** trong bối cảnh module **Reflection Agent với LangGraph**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Agent viết bài ngắn và cải thiện qua tối đa 2 vòng reflection.**.

## 2. Kiến thức trọng tâm

**Góc nhìn 1.** Reflection cho phép generator tạo câu trả lời, critic nêu thiếu sót và generator sửa. Reflexion có thể bổ sung hành động/công cụ để lấy bằng chứng rồi sửa. Cần hạn chế số vòng để tránh lặp vô hạn.

**Đưa vào dự án:** Tạo quy trình tạo bản nháp → đánh giá → sửa bản nháp với điều kiện dừng.

## 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *What are we building? A Reflection Agent*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

## 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

```python
from typing import TypedDict
from langgraph.graph import StateGraph, START, END

class State(TypedDict):
    draft: str
    feedback: str

def write(s: State): return {"draft": s["draft"] + " [revision]"}
def review(s: State): return {"feedback": "Bổ sung nguồn và ví dụ"}

g = StateGraph(State)
g.add_node("write", write); g.add_node("review", review)
g.add_edge(START, "review"); g.add_edge("review", "write"); g.add_edge("write", END)
print(g.compile().invoke({"draft": "Đề xuất ban đầu", "feedback": ""}))
```

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

## 5. Bài tập thực hành

- **A — Hiểu:** Thiết kế rubric gồm factuality, completeness, citations; dừng nếu rubric đạt.
- **B — Xây dựng:** Áp dụng bài **What are we building? A Reflection Agent** vào dự án: Agent viết bài ngắn và cải thiện qua tối đa 2 vòng reflection. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

## 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **What are we building? A Reflection Agent**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
**Gợi ý:** xác định rõ ranh giới giữa model, host runtime, data source và tool executor.

**Câu hỏi 2.** Nêu một bằng chứng giúp kiểm tra rằng giải pháp không chỉ "có vẻ đúng".  
**Gợi ý:** sử dụng schema validation, case đối chứng, nguồn trích dẫn, log hoặc metric phù hợp.

**Câu hỏi 3.** Đâu là lỗi thường gặp khi triển khai khái niệm này?  
**Gợi ý:** Không đánh giá chỉ bằng LLM tự nhận “tôi đã tốt hơn”; cần test cases.

## 7. Tiêu chí hoàn thành

- [ ] Giải thích được khái niệm bằng 3–5 câu không nhìn tài liệu.
- [ ] Chạy hoặc phân tích đúng một ví dụ minh họa, ghi hạn chế khi chưa có API key.
- [ ] Hoàn thành nhiệm vụ A–C; ghi lại ít nhất một trường hợp thất bại.
- [ ] Cập nhật trạng thái học trong `../progress.csv`.

## 8. Tài liệu tham khảo

- [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview)
- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)
- [LangSmith](https://docs.langchain.com/langsmith/home)

