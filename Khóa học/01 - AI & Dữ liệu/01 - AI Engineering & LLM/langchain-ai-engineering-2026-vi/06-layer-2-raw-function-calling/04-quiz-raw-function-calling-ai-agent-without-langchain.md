# Module 06 · Bài 04 — Quiz: Raw Function Calling — AI Agent Without LangChain

> **Thể loại gốc:** Trắc nghiệm. **Section:** Layer 2: Raw Function Calling  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

## 1. Mục tiêu bài học

- Hiểu và giải thích được **Quiz: Raw Function Calling — AI Agent Without LangChain** trong bối cảnh module **Tầng 2: Function calling thô**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Dùng SDK mô hình cục bộ để gửi mô tả hàm, nhận arguments và trả result.**.

## 2. Kiến thức trọng tâm

**Góc nhìn 1.** Trong LCEL, runnable có thể ghép bằng toán tử `|` và gọi `.invoke()`/`.stream()`. Cần hiểu kiểu input-output từng bước, vì thiếu parser hoặc sai key là lỗi phổ biến.

**Góc nhìn 2.** Tool calling gồm (1) định nghĩa schema, (2) mô hình đề nghị tên tool + arguments, (3) host kiểm tra quyền và validate, (4) host thực thi, (5) đưa kết quả trở lại mô hình. Model không tự thực thi Python bên trong tool.

**Đưa vào dự án:** Quan sát JSON Schema của tool và giao thức gọi hàm trực tiếp thay vì trừu tượng hóa.

## 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *Quiz: Raw Function Calling — AI Agent Without LangChain*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

## 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

```python
tool_schema = {"name": "lookup", "parameters": {
  "type": "object", "properties": {"sku": {"type": "string"}},
  "required": ["sku"]}}
print(tool_schema)
```

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

## 5. Bài tập thực hành

- **A — Hiểu:** Vẽ sơ đồ prompt → model → parser và ghi rõ kiểu dữ liệu ở mỗi mũi tên.
- **B — Xây dựng:** Định nghĩa tool với `str`/`int`, chủ động thử input sai kiểu và tên tool không có trong allowlist. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

## 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **Quiz: Raw Function Calling — AI Agent Without LangChain**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
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

---

## Bài kiểm tra trắc nghiệm

**Số câu:** 6 • **Điểm tối đa:** 6 • **Đạt:** từ 80%

Làm bài mà chưa mở phần đáp án. Mỗi câu chọn đúng **một** phương án.

**Câu 1. JSON Schema `required` biểu thị gì?**

- A. Thời gian chờ
- B. Model identifier
- C. Độ dài token
- D. Trường bắt buộc

**Câu 2. Vì sao dùng SDK thô?**

- A. Bỏ qua API
- B. Luôn rẻ hơn
- C. Hiểu giao thức và control
- D. Tránh mọi validation

**Câu 3. Ai quyết định gọi hàm thật?**

- A. Pydantic model
- B. Host application
- C. JSON object
- D. Vector DB

**Câu 4. Xử lý tên tool không tồn tại thế nào?**

- A. Từ chối và ghi lỗi an toàn
- B. eval tên đó
- C. Thử mọi hàm Python
- D. Bỏ qua audit

**Câu 5. Arguments thiếu trường phải làm gì?**

- A. Tự suy diễn mọi dữ liệu
- B. Gọi tool ngay
- C. Xóa system prompt
- D. Validate và yêu cầu sửa

**Câu 6. Vì sao dùng timeout?**

- A. Đổi schema
- B. Tạo embeddings
- C. Giới hạn chi phí và treo
- D. Tăng context

<details>
<summary>Đáp án và giải thích</summary>

1. **D. Trường bắt buộc** — JSON Schema `required` biểu thị gì?
2. **C. Hiểu giao thức và control** — Vì sao dùng SDK thô?
3. **B. Host application** — Ai quyết định gọi hàm thật?
4. **A. Từ chối và ghi lỗi an toàn** — Xử lý tên tool không tồn tại thế nào?
5. **D. Validate và yêu cầu sửa** — Arguments thiếu trường phải làm gì?
6. **C. Giới hạn chi phí và treo** — Vì sao dùng timeout?

</details>

### Bài tập bổ sung

Viết một ví dụ kiểm chứng lại hai câu mà bạn còn phân vân; ghi nhận xét trong `study-notes.md`.
