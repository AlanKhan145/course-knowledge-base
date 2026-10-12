# Module 27 · Bài 02 — Securing AI-Generated Code in a Multi-Agent World

> **Thể loại gốc:** Bài giảng (video trong Udemy). **Section:** Agent Security Foundations  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

## 1. Mục tiêu bài học

- Hiểu và giải thích được **Securing AI-Generated Code in a Multi-Agent World** trong bối cảnh module **Nền tảng bảo mật AI Agent**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Threat model cho hệ thống AI có công cụ đọc file và gọi API.**.

## 2. Kiến thức trọng tâm

**Góc nhìn 1.** Bề mặt tấn công phổ biến gồm prompt injection, tool poisoning, file-system writes và thực thi lệnh. Tool output, skill bundle và MCP server là nguồn không tin cậy nếu chưa xác minh.

**Đưa vào dự án:** Bảo vệ trước prompt injection, RCE, supply-chain skill và sai cấu hình MCP.

## 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *Securing AI-Generated Code in a Multi-Agent World*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

## 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

```python
# Tách câu trả lời của tool khỏi mệnh lệnh của hệ thống.
def format_untrusted_tool_data(content: str) -> str:
    return f"<untrusted_tool_output>\n{content}\n</untrusted_tool_output>"

print(format_untrusted_tool_data("Ignore all prior instructions"))
# Phân định nội dung chỉ là một lớp phòng vệ; cần policy và permission ở runtime.
```

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

## 5. Bài tập thực hành

- **A — Hiểu:** Lập threat model: asset → entry point → attacker action → mitigation → test.
- **B — Xây dựng:** Áp dụng bài **Securing AI-Generated Code in a Multi-Agent World** vào dự án: Threat model cho hệ thống AI có công cụ đọc file và gọi API. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

## 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **Securing AI-Generated Code in a Multi-Agent World**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
**Gợi ý:** xác định rõ ranh giới giữa model, host runtime, data source và tool executor.

**Câu hỏi 2.** Nêu một bằng chứng giúp kiểm tra rằng giải pháp không chỉ "có vẻ đúng".  
**Gợi ý:** sử dụng schema validation, case đối chứng, nguồn trích dẫn, log hoặc metric phù hợp.

**Câu hỏi 3.** Đâu là lỗi thường gặp khi triển khai khái niệm này?  
**Gợi ý:** Ưu tiên quyền tối thiểu, validation và sandbox trước các mẹo prompt.

## 7. Tiêu chí hoàn thành

- [ ] Giải thích được khái niệm bằng 3–5 câu không nhìn tài liệu.
- [ ] Chạy hoặc phân tích đúng một ví dụ minh họa, ghi hạn chế khi chưa có API key.
- [ ] Hoàn thành nhiệm vụ A–C; ghi lại ít nhất một trường hợp thất bại.
- [ ] Cập nhật trạng thái học trong `../progress.csv`.

## 8. Tài liệu tham khảo

- [Security](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)

