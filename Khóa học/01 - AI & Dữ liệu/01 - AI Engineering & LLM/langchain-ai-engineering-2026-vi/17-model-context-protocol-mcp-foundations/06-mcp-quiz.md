# Module 17 · Bài 06 — MCP Quiz

> **Thể loại gốc:** Trắc nghiệm. **Section:** Model Context Protocol (MCP) Foundations  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

## 1. Mục tiêu bài học

- Hiểu và giải thích được **MCP Quiz** trong bối cảnh module **Nền tảng Model Context Protocol**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Vẽ kiến trúc kết nối một agent với hai server MCP thử nghiệm.**.

## 2. Kiến thức trọng tâm

**Góc nhìn 1.** Phân biệt host, MCP client, MCP server; hiểu tools/resources/prompts và transports.

**Đưa vào dự án:** Phân biệt host, MCP client, MCP server; hiểu tools/resources/prompts và transports.

## 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *MCP Quiz*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

## 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

```python
# Một model có thể gọi nhiều tool qua giao thức khác nhau.
architecture = {
  "host": "AI application",
  "client": "MCP connection manager",
  "server": "MCP tool/resource provider",
  "transport": "stdio or Streamable HTTP"
}
print(architecture)
```

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

## 5. Bài tập thực hành

- **A — Hiểu:** Hãy mô tả lại trọng tâm bài học bằng một sơ đồ input → process → output.
- **B — Xây dựng:** Áp dụng bài **MCP Quiz** vào dự án: Vẽ kiến trúc kết nối một agent với hai server MCP thử nghiệm. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

## 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **MCP Quiz**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
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

- [MCP](https://modelcontextprotocol.io/introduction)
- [Python SDK MCP](https://py.sdk.modelcontextprotocol.io/)
- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)

---

## Bài kiểm tra trắc nghiệm

**Số câu:** 6 • **Điểm tối đa:** 6 • **Đạt:** từ 80%

Làm bài mà chưa mở phần đáp án. Mỗi câu chọn đúng **một** phương án.

**Câu 1. MCP viết tắt của gì?**

- A. Model Chain Python
- B. Multi Code Platform
- C. Managed Cloud Provider
- D. Model Context Protocol

**Câu 2. MCP server cung cấp gì?**

- A. GPU
- B. Trình biên dịch Python
- C. Tools/resources/prompts
- D. Model weights bắt buộc

**Câu 3. MCP client thuộc bên nào?**

- A. Ollama model
- B. Ứng dụng/host kết nối server
- C. Database vector
- D. CSS frontend

**Câu 4. Transport phổ biến?**

- A. stdio và Streamable HTTP
- B. SMTP và POP3
- C. FTP và Telnet
- D. CSS và HTML

**Câu 5. Server từ nguồn lạ có an toàn mặc định?**

- A. Có
- B. Chỉ trên Windows
- C. Chỉ khi miễn phí
- D. Không

**Câu 6. Ai quyết định quyền thực thi tool?**

- A. Prompt của tài liệu
- B. Vector embedding
- C. Host/runtime policy
- D. Tên server

<details>
<summary>Đáp án và giải thích</summary>

1. **D. Model Context Protocol** — MCP viết tắt của gì?
2. **C. Tools/resources/prompts** — MCP server cung cấp gì?
3. **B. Ứng dụng/host kết nối server** — MCP client thuộc bên nào?
4. **A. stdio và Streamable HTTP** — Transport phổ biến?
5. **D. Không** — Server từ nguồn lạ có an toàn mặc định?
6. **C. Host/runtime policy** — Ai quyết định quyền thực thi tool?

</details>

### Bài tập bổ sung

Viết một ví dụ kiểm chứng lại hai câu mà bạn còn phân vân; ghi nhận xét trong `study-notes.md`.
