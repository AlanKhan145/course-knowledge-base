# Module 22 — Middleware và Harness Engineering

**Tên section Udemy:** Agent Middleware and Harness Engineering  
**Số mục học tập:** 3  
**Dự án xuyên module:** Middleware kiểm tra hành động nhạy cảm trước khi cho phép chạy.

## Kết quả cần đạt

- [ ] Giải thích pre/post-model và pre/post-tool hook.
- [ ] Áp dụng principle of least privilege.
- [ ] Thiết kế cơ chế human approval.

## Giải thích và định hướng

Đặt policy quanh vòng gọi model/tool: logging, guardrail, approval và reliability.

Mỗi lesson trong module được viết độc lập bằng tiếng Việt, có khái niệm chính, ví dụ code, ba nhiệm vụ (hiểu – xây dựng – kiểm chứng) và phần tự kiểm. Đề cương/tựa bài giữ tên gốc để dễ tìm trong Udemy, nhưng nội dung không trích từ video.

## Lab của module

**Mục tiêu:** Middleware kiểm tra hành động nhạy cảm trước khi cho phép chạy.

```python
# Guardrail độc lập: chặn tool theo policy trước khi chạy.
ALLOWED = {"read_docs", "calculate"}

def authorize_tool(name: str, approved: bool=False) -> bool:
    return name in ALLOWED or (approved and name == "write_report")

assert not authorize_tool("delete_database")
print("tool policy ok")
```

## Danh sách bài học

01. [Introduction to Agent Middleware (Hooks)](01-introduction-to-agent-middleware-hooks.md) — `VIDEO`
02. [What is Agent Middleware](02-what-is-agent-middleware.md) — `VIDEO`
03. [Middleware Usecases: Security & Reliability](03-middleware-usecases-security-reliability.md) — `VIDEO`

## Bài tập tổng kết module

1. Tạo phiên bản demo có README, .env.example và hướng dẫn chạy tái lập được.
2. Viết tối thiểu 5 test cases, bao gồm một case lỗi hoặc thiếu dữ liệu.
3. Đối chiếu ba kết quả cần đạt ở đầu module và tự chấm 0–2 điểm mỗi tiêu chí.
4. Bổ sung sơ đồ kiến trúc, danh sách rủi ro và liên kết trace/screenshot nếu có.

**Nguồn tên bài:** Udemy course curriculum. **Giảng giải và bài tập:** được viết mới cho bản tự học.
