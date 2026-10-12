# Module 17 — Nền tảng Model Context Protocol

**Tên section Udemy:** Model Context Protocol (MCP) Foundations  
**Số mục học tập:** 6  
**Dự án xuyên module:** Vẽ kiến trúc kết nối một agent với hai server MCP thử nghiệm.

## Kết quả cần đạt

- [ ] Mô tả message flow và handshake.
- [ ] Phân biệt stdio và Streamable HTTP.
- [ ] Nhận diện giới hạn quyền của công cụ.

## Giải thích và định hướng

Phân biệt host, MCP client, MCP server; hiểu tools/resources/prompts và transports.

Mỗi lesson trong module được viết độc lập bằng tiếng Việt, có khái niệm chính, ví dụ code, ba nhiệm vụ (hiểu – xây dựng – kiểm chứng) và phần tự kiểm. Đề cương/tựa bài giữ tên gốc để dễ tìm trong Udemy, nhưng nội dung không trích từ video.

## Lab của module

**Mục tiêu:** Vẽ kiến trúc kết nối một agent với hai server MCP thử nghiệm.

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

## Danh sách bài học

01. [[Theory] Why MCP (Model Context Protocol)](01-theory-why-mcp-model-context-protocol.md) — `VIDEO`
02. [[Theory] How LLMs REALLY Use Tools: Understanding Tool Calling](02-theory-how-llms-really-use-tools-understanding-tool-calling.md) — `VIDEO`
03. [[Theory] MCP Architecture](03-theory-mcp-architecture.md) — `VIDEO`
04. [[Theory] The GIST of the Protocol with Tool Calling](04-theory-the-gist-of-the-protocol-with-tool-calling.md) — `VIDEO`
05. [[Theory] MCP Servers](05-theory-mcp-servers.md) — `VIDEO`
06. [MCP Quiz](06-mcp-quiz.md) — `QUIZ`

## Bài tập tổng kết module

1. Tạo phiên bản demo có README, .env.example và hướng dẫn chạy tái lập được.
2. Viết tối thiểu 5 test cases, bao gồm một case lỗi hoặc thiếu dữ liệu.
3. Đối chiếu ba kết quả cần đạt ở đầu module và tự chấm 0–2 điểm mỗi tiêu chí.
4. Bổ sung sơ đồ kiến trúc, danh sách rủi ro và liên kết trace/screenshot nếu có.

**Nguồn tên bài:** Udemy course curriculum. **Giảng giải và bài tập:** được viết mới cho bản tự học.
