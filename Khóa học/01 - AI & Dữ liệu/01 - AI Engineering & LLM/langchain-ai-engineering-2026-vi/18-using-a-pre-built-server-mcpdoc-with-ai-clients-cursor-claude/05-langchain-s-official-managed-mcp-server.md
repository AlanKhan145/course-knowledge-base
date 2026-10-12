# Module 18 · Bài 05 — LangChain's Official Managed MCP Server

> **Thể loại gốc:** Bài giảng (video trong Udemy). **Section:** Using a Pre-built Server (mcpdoc) with AI Clients (Cursor & Claude)  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

## 1. Mục tiêu bài học

- Hiểu và giải thích được **LangChain's Official Managed MCP Server** trong bối cảnh module **Sử dụng MCP server sẵn có**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Kết nối một MCP docs server dùng dữ liệu công khai vào công cụ AI.**.

## 2. Kiến thức trọng tâm

**Góc nhìn 1.** Trong LCEL, runnable có thể ghép bằng toán tử `|` và gọi `.invoke()`/`.stream()`. Cần hiểu kiểu input-output từng bước, vì thiếu parser hoặc sai key là lỗi phổ biến.

**Góc nhìn 2.** MCP Inspector giúp quan sát tool/resource của server trước tích hợp. Tài liệu `llms.txt` chủ yếu là danh mục gợi ý tài nguyên cho hệ thống AI, không phải nguồn thẩm quyền về tính an toàn của mã.

**Góc nhìn 3.** Adapter chuyển tool descriptors của MCP thành abstraction mà LangChain agent có thể dùng. Khi có nhiều server cần tránh trùng tên tool, chuẩn hóa errors, timeout và scope của token.

**Đưa vào dự án:** Kiểm tra server bằng MCP Inspector, khai thác tài liệu và kết nối client có sẵn.

## 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *LangChain's Official Managed MCP Server*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

## 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

```python
# server.py: chạy với `python server.py`; client cần cấu hình phù hợp.
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("SafeCalculator")

@mcp.tool()
def add(a: int, b: int) -> int:
    """Cộng hai số nguyên."""
    return a + b

if __name__ == "__main__":
    mcp.run(transport="stdio")
```

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

## 5. Bài tập thực hành

- **A — Hiểu:** Vẽ sơ đồ prompt → model → parser và ghi rõ kiểu dữ liệu ở mỗi mũi tên.
- **B — Xây dựng:** Dùng server demo tin cậy, liệt kê tool và thử lời gọi vô hại với input rỗng. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

## 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **LangChain's Official Managed MCP Server**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
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

- [MCP](https://modelcontextprotocol.io/introduction)
- [Python SDK MCP](https://py.sdk.modelcontextprotocol.io/)
- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)

