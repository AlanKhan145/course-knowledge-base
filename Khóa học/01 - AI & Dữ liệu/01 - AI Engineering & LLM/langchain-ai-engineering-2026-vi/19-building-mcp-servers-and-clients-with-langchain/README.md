# Module 19 — Tự xây MCP server/client với LangChain

**Tên section Udemy:** Building MCP Servers and Clients with LangChain  
**Số mục học tập:** 9  
**Dự án xuyên module:** Server tính toán và tra cứu dữ liệu an toàn, client gọi qua transport được hỗ trợ.

## Kết quả cần đạt

- [ ] Định nghĩa công cụ MCP có input/output hợp lệ.
- [ ] Tích hợp tool vào agent với adapter.
- [ ] Log lỗi nhưng không ghi khóa bí mật.

## Giải thích và định hướng

Viết server dùng Python SDK, client và adapter chuyển MCP tools sang LangChain tools.

Mỗi lesson trong module được viết độc lập bằng tiếng Việt, có khái niệm chính, ví dụ code, ba nhiệm vụ (hiểu – xây dựng – kiểm chứng) và phần tự kiểm. Đề cương/tựa bài giữ tên gốc để dễ tìm trong Udemy, nhưng nội dung không trích từ video.

## Lab của module

**Mục tiêu:** Server tính toán và tra cứu dữ liệu an toàn, client gọi qua transport được hỗ trợ.

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

## Danh sách bài học

01. [Intro](01-intro.md) — `VIDEO`
02. [Boilerplate](02-boilerplate.md) — `VIDEO`
03. [Servers](03-servers.md) — `VIDEO`
04. [What are we MCBuilding?](04-what-are-we-mcbuilding.md) — `VIDEO`
05. [Simple MCP Server](05-simple-mcp-server.md) — `VIDEO`
06. [Bridging the Gap: The LangChain MCP Adapter Explained](06-bridging-the-gap-the-langchain-mcp-adapter-explained.md) — `VIDEO`
07. [Imports](07-imports.md) — `VIDEO`
08. [Client](08-client.md) — `VIDEO`
09. [Tracing](09-tracing.md) — `VIDEO`

## Bài tập tổng kết module

1. Tạo phiên bản demo có README, .env.example và hướng dẫn chạy tái lập được.
2. Viết tối thiểu 5 test cases, bao gồm một case lỗi hoặc thiếu dữ liệu.
3. Đối chiếu ba kết quả cần đạt ở đầu module và tự chấm 0–2 điểm mỗi tiêu chí.
4. Bổ sung sơ đồ kiến trúc, danh sách rủi ro và liên kết trace/screenshot nếu có.

**Nguồn tên bài:** Udemy course curriculum. **Giảng giải và bài tập:** được viết mới cho bản tự học.
