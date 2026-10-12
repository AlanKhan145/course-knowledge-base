# Module 18 — Sử dụng MCP server sẵn có

**Tên section Udemy:** Using a Pre-built Server (mcpdoc) with AI Clients (Cursor & Claude)  
**Số mục học tập:** 5  
**Dự án xuyên module:** Kết nối một MCP docs server dùng dữ liệu công khai vào công cụ AI.

## Kết quả cần đạt

- [ ] Cấu hình server được tin cậy.
- [ ] Hiểu mục đích llms.txt và docs MCP.
- [ ] Kiểm tra tool list và tài nguyên trước khi gọi.

## Giải thích và định hướng

Kiểm tra server bằng MCP Inspector, khai thác tài liệu và kết nối client có sẵn.

Mỗi lesson trong module được viết độc lập bằng tiếng Việt, có khái niệm chính, ví dụ code, ba nhiệm vụ (hiểu – xây dựng – kiểm chứng) và phần tự kiểm. Đề cương/tựa bài giữ tên gốc để dễ tìm trong Udemy, nhưng nội dung không trích từ video.

## Lab của module

**Mục tiêu:** Kết nối một MCP docs server dùng dữ liệu công khai vào công cụ AI.

```python
# Mẫu cấu hình minh họa: KHÔNG tự chạy server lạ nếu chưa rà soát.
mcp_config = {
    "mcpServers": {
        "docs": {"command": "python", "args": ["trusted_docs_server.py"]}
    }
}
print(mcp_config)
```

## Danh sách bài học

01. [What are we building? MCP Doc](01-what-are-we-building-mcp-doc.md) — `VIDEO`
02. [MCP Inspector](02-mcp-inspector.md) — `VIDEO`
03. [LLM.txt](03-llm-txt.md) — `VIDEO`
04. [mcpdoc](04-mcpdoc.md) — `VIDEO`
05. [LangChain's Official Managed MCP Server](05-langchain-s-official-managed-mcp-server.md) — `VIDEO`

## Bài tập tổng kết module

1. Tạo phiên bản demo có README, .env.example và hướng dẫn chạy tái lập được.
2. Viết tối thiểu 5 test cases, bao gồm một case lỗi hoặc thiếu dữ liệu.
3. Đối chiếu ba kết quả cần đạt ở đầu module và tự chấm 0–2 điểm mỗi tiêu chí.
4. Bổ sung sơ đồ kiến trúc, danh sách rủi ro và liên kết trace/screenshot nếu có.

**Nguồn tên bài:** Udemy course curriculum. **Giảng giải và bài tập:** được viết mới cho bản tự học.
