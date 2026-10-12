# Module 26 · Bài 02 — AI Agents in Cybersecurity CTF Competitions

> **Thể loại gốc:** Bài giảng (video trong Udemy). **Section:** Industry Insights: Building Production Security Agents with Roy Miara  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

## 1. Mục tiêu bài học

- Hiểu và giải thích được **AI Agents in Cybersecurity CTF Competitions** trong bối cảnh module **Bài học thực tế: Security agents**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Đề xuất mô hình agent hỗ trợ rà soát log bảo mật ở chế độ read-only.**.

## 2. Kiến thức trọng tâm

**Góc nhìn 1.** Security agent cần mặc định read-only và có approval với hành động thay đổi hệ thống. CTF là môi trường giả lập; bài học production phải ghi lại mọi hành động và tách quyền theo service account.

**Đưa vào dự án:** Hiểu bài toán bảo mật dùng agent, harness và cách kiểm soát biến thiên kết quả.

## 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *AI Agents in Cybersecurity CTF Competitions*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

## 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

```python
# Mọi hành động agent phục vụ bảo mật nên mặc định là read-only.
ALLOWED_ACTIONS = {"read_log", "summarize_alert"}
def execute(action: str):
    if action not in ALLOWED_ACTIONS: raise PermissionError("not allowed")
    return {"action": action, "status": "simulated"}
print(execute("read_log"))
```

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

## 5. Bài tập thực hành

- **A — Hiểu:** Viết allowlist 3 tool đọc log và test không cho phép chạy shell tùy ý.
- **B — Xây dựng:** Áp dụng bài **AI Agents in Cybersecurity CTF Competitions** vào dự án: Đề xuất mô hình agent hỗ trợ rà soát log bảo mật ở chế độ read-only. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

## 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **AI Agents in Cybersecurity CTF Competitions**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
**Gợi ý:** xác định rõ ranh giới giữa model, host runtime, data source và tool executor.

**Câu hỏi 2.** Nêu một bằng chứng giúp kiểm tra rằng giải pháp không chỉ "có vẻ đúng".  
**Gợi ý:** sử dụng schema validation, case đối chứng, nguồn trích dẫn, log hoặc metric phù hợp.

**Câu hỏi 3.** Đâu là lỗi thường gặp khi triển khai khái niệm này?  
**Gợi ý:** Audit trail, RBAC và sandbox là các lớp kiểm soát độc lập.

## 7. Tiêu chí hoàn thành

- [ ] Giải thích được khái niệm bằng 3–5 câu không nhìn tài liệu.
- [ ] Chạy hoặc phân tích đúng một ví dụ minh họa, ghi hạn chế khi chưa có API key.
- [ ] Hoàn thành nhiệm vụ A–C; ghi lại ít nhất một trường hợp thất bại.
- [ ] Cập nhật trạng thái học trong `../progress.csv`.

## 8. Tài liệu tham khảo

- [Security](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)

