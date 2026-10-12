# Module 28 · Bài 06 — Prompt Engineering Won't Fix Insecure AI Code

> **Thể loại gốc:** Bài giảng (video trong Udemy). **Section:** The Dark Side of "Vibe Coding": Vulnerabilities in AI-Generated Apps  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

## 1. Mục tiêu bài học

- Hiểu và giải thích được **Prompt Engineering Won't Fix Insecure AI Code** trong bối cảnh module **Rủi ro ứng dụng được AI tạo mã**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Review API demo theo checklist bảo mật và test trường hợp tấn công.**.

## 2. Kiến thức trọng tâm

**Góc nhìn 1.** Zero-shot dựa chỉ dẫn, few-shot bổ sung ví dụ đại diện. Với bài toán phức tạp nên yêu cầu kết quả và bước kiểm chứng phù hợp, không cần ép hệ thống phơi bày suy nghĩ nội bộ.

**Góc nhìn 2.** Mã do AI tạo phải qua review như mọi mã nguồn khác. Kiểm thử authorization, truy cập tài nguyên nội bộ, rate limiting và business rules ở backend; prompt không thể thay điều kiện kiểm tra quyền.

**Đưa vào dự án:** Phân tích RBAC, SSRF, CSRF, rate limiting, business logic và cách test security.

## 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *Prompt Engineering Won't Fix Insecure AI Code*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

## 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

```python
# Khẳng định quyền truy cập ở backend, không nhờ mô hình quyết định.
def get_invoice(requester_id: int, invoice: dict):
    if invoice["owner_id"] != requester_id:
        raise PermissionError("forbidden")
    return invoice

try:
    get_invoice(7, {"owner_id": 8, "total": 100})
except PermissionError:
    print("RBAC/ownership check passed")
```

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

## 5. Bài tập thực hành

- **A — Hiểu:** Thử 3 prompt trên cùng 20 input; so tỷ lệ đáp đúng schema và task success.
- **B — Xây dựng:** Viết test người dùng A không được đọc tài nguyên của B, và test URL nội bộ bị chặn. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

## 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **Prompt Engineering Won't Fix Insecure AI Code**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
**Gợi ý:** xác định rõ ranh giới giữa model, host runtime, data source và tool executor.

**Câu hỏi 2.** Nêu một bằng chứng giúp kiểm tra rằng giải pháp không chỉ "có vẻ đúng".  
**Gợi ý:** sử dụng schema validation, case đối chứng, nguồn trích dẫn, log hoặc metric phù hợp.

**Câu hỏi 3.** Đâu là lỗi thường gặp khi triển khai khái niệm này?  
**Gợi ý:** Ví dụ đa dạng nhưng nhất quán giúp giảm hiểu nhầm yêu cầu.

## 7. Tiêu chí hoàn thành

- [ ] Giải thích được khái niệm bằng 3–5 câu không nhìn tài liệu.
- [ ] Chạy hoặc phân tích đúng một ví dụ minh họa, ghi hạn chế khi chưa có API key.
- [ ] Hoàn thành nhiệm vụ A–C; ghi lại ít nhất một trường hợp thất bại.
- [ ] Cập nhật trạng thái học trong `../progress.csv`.

## 8. Tài liệu tham khảo

- [Security](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)

