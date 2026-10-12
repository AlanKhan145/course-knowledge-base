# Module 20 · Bài 04 — Deep Agents: Sub Agents and Hierarchical Delegation

> **Thể loại gốc:** Bài giảng (video trong Udemy). **Section:** Deep Agents  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

## 1. Mục tiêu bài học

- Hiểu và giải thích được **Deep Agents: Sub Agents and Hierarchical Delegation** trong bối cảnh module **Deep Agents**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Deep research assistant chia nghiên cứu thành các đầu việc.**.

## 2. Kiến thức trọng tâm

**Góc nhìn 1.** Deep agent giải bài nhiều bước bằng lập kế hoạch, quản lý TODO, phân nhiệm subagent và artifact lưu trong filesystem. Cần phân chia quyền ghi/đọc của subagent và giới hạn ngân sách.

**Đưa vào dự án:** Tạo agent có planning, todo, phân nhiệm subagent và cơ chế giữ ngữ cảnh.

## 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *Deep Agents: Sub Agents and Hierarchical Delegation*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

## 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

```python
# Thí nghiệm Deep Agent: cần cấu hình model/key trước khi chạy.
from deepagents import create_deep_agent
agent = create_deep_agent(
    model="openai:gpt-4o-mini",
    system_prompt="Chia nhiệm vụ lớn thành các bước, ghi rõ nguồn."
)
# result = agent.invoke({"messages": [{"role":"user", "content":"Lập kế hoạch nghiên cứu RAG"}]})
```

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

## 5. Bài tập thực hành

- **A — Hiểu:** Tạo plan 5 bước cho báo cáo nghiên cứu; gán output file và completion criteria cho từng bước.
- **B — Xây dựng:** Áp dụng bài **Deep Agents: Sub Agents and Hierarchical Delegation** vào dự án: Deep research assistant chia nghiên cứu thành các đầu việc. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

## 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **Deep Agents: Sub Agents and Hierarchical Delegation**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
**Gợi ý:** xác định rõ ranh giới giữa model, host runtime, data source và tool executor.

**Câu hỏi 2.** Nêu một bằng chứng giúp kiểm tra rằng giải pháp không chỉ "có vẻ đúng".  
**Gợi ý:** sử dụng schema validation, case đối chứng, nguồn trích dẫn, log hoặc metric phù hợp.

**Câu hỏi 3.** Đâu là lỗi thường gặp khi triển khai khái niệm này?  
**Gợi ý:** Chỉ delegate khi task đủ độc lập; truyền context tối thiểu và theo dõi kết quả.

## 7. Tiêu chí hoàn thành

- [ ] Giải thích được khái niệm bằng 3–5 câu không nhìn tài liệu.
- [ ] Chạy hoặc phân tích đúng một ví dụ minh họa, ghi hạn chế khi chưa có API key.
- [ ] Hoàn thành nhiệm vụ A–C; ghi lại ít nhất một trường hợp thất bại.
- [ ] Cập nhật trạng thái học trong `../progress.csv`.

## 8. Tài liệu tham khảo

- [Deep Agents](https://docs.langchain.com/oss/python/deepagents/overview)
- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)
- [LangSmith](https://docs.langchain.com/langsmith/home)

