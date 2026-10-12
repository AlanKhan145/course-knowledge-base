# Module 17 · Bài 04 — [Theory] The GIST of the Protocol with Tool Calling

> **Thể loại gốc:** Bài giảng (video trong Udemy). **Section:** Model Context Protocol (MCP) Foundations  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

## 1. Mục tiêu bài học

- Hiểu và giải thích được **[Theory] The GIST of the Protocol with Tool Calling** trong bối cảnh module **Nền tảng Model Context Protocol**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Vẽ kiến trúc kết nối một agent với hai server MCP thử nghiệm.**.

## 2. Kiến thức trọng tâm

**Góc nhìn 1.** Tool calling gồm (1) định nghĩa schema, (2) mô hình đề nghị tên tool + arguments, (3) host kiểm tra quyền và validate, (4) host thực thi, (5) đưa kết quả trở lại mô hình. Model không tự thực thi Python bên trong tool.

**Góc nhìn 2.** MCP là giao thức chuẩn hóa cách client khám phá và sử dụng tools/resources/prompts từ server. Server không phải model; client điều phối lời gọi và host quyết định quyền thực thi.

**Đưa vào dự án:** Phân biệt host, MCP client, MCP server; hiểu tools/resources/prompts và transports.

## 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *[Theory] The GIST of the Protocol with Tool Calling*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

## 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

```python
from langchain.tools import tool
@tool
def multiply(a: int, b: int) -> int:
    """Nhân hai số nguyên để phục vụ tính toán."""
    return a * b
print(multiply.invoke({"a": 6, "b": 7}))
```

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

## 5. Bài tập thực hành

- **A — Hiểu:** Định nghĩa tool với `str`/`int`, chủ động thử input sai kiểu và tên tool không có trong allowlist.
- **B — Xây dựng:** Phác họa host, client, server, transport và ranh giới permission. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

## 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **[Theory] The GIST of the Protocol with Tool Calling**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
**Gợi ý:** xác định rõ ranh giới giữa model, host runtime, data source và tool executor.

**Câu hỏi 2.** Nêu một bằng chứng giúp kiểm tra rằng giải pháp không chỉ "có vẻ đúng".  
**Gợi ý:** sử dụng schema validation, case đối chứng, nguồn trích dẫn, log hoặc metric phù hợp.

**Câu hỏi 3.** Đâu là lỗi thường gặp khi triển khai khái niệm này?  
**Gợi ý:** Host runtime phải xác thực args và quyền; mô hình chỉ là nơi đề nghị lời gọi.

## 7. Tiêu chí hoàn thành

- [ ] Giải thích được khái niệm bằng 3–5 câu không nhìn tài liệu.
- [ ] Chạy hoặc phân tích đúng một ví dụ minh họa, ghi hạn chế khi chưa có API key.
- [ ] Hoàn thành nhiệm vụ A–C; ghi lại ít nhất một trường hợp thất bại.
- [ ] Cập nhật trạng thái học trong `../progress.csv`.

## 8. Tài liệu tham khảo

- [MCP](https://modelcontextprotocol.io/introduction)
- [Python SDK MCP](https://py.sdk.modelcontextprotocol.io/)
- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)

