# Module 28 — Rủi ro ứng dụng được AI tạo mã

**Tên section Udemy:** The Dark Side of "Vibe Coding": Vulnerabilities in AI-Generated Apps  
**Số mục học tập:** 6  
**Dự án xuyên module:** Review API demo theo checklist bảo mật và test trường hợp tấn công.

## Kết quả cần đạt

- [ ] Tạo authorization test cho từng tenant.
- [ ] Chặn truy cập URL nội bộ từ SSRF.
- [ ] Không dùng prompt làm thay security controls.

## Giải thích và định hướng

Phân tích RBAC, SSRF, CSRF, rate limiting, business logic và cách test security.

Mỗi lesson trong module được viết độc lập bằng tiếng Việt, có khái niệm chính, ví dụ code, ba nhiệm vụ (hiểu – xây dựng – kiểm chứng) và phần tự kiểm. Đề cương/tựa bài giữ tên gốc để dễ tìm trong Udemy, nhưng nội dung không trích từ video.

## Lab của module

**Mục tiêu:** Review API demo theo checklist bảo mật và test trường hợp tấn công.

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

## Danh sách bài học

01. [Introduction](01-introduction.md) — `VIDEO`
02. [AI Coding Rarely Write SQL Injections or XSS Bugs](02-ai-coding-rarely-write-sql-injections-or-xss-bugs.md) — `VIDEO`
03. [AI Agents Struggle with Role-Based Access Control](03-ai-agents-struggle-with-role-based-access-control.md) — `VIDEO`
04. [AI Coding Agents Struggle with Business Logic and SSRF](04-ai-coding-agents-struggle-with-business-logic-and-ssrf.md) — `VIDEO`
05. [AI Coding Agents Struggle with Rate Limiting and CSRF](05-ai-coding-agents-struggle-with-rate-limiting-and-csrf.md) — `VIDEO`
06. [Prompt Engineering Won't Fix Insecure AI Code](06-prompt-engineering-won-t-fix-insecure-ai-code.md) — `VIDEO`

## Bài tập tổng kết module

1. Tạo phiên bản demo có README, .env.example và hướng dẫn chạy tái lập được.
2. Viết tối thiểu 5 test cases, bao gồm một case lỗi hoặc thiếu dữ liệu.
3. Đối chiếu ba kết quả cần đạt ở đầu module và tự chấm 0–2 điểm mỗi tiêu chí.
4. Bổ sung sơ đồ kiến trúc, danh sách rủi ro và liên kết trace/screenshot nếu có.

**Nguồn tên bài:** Udemy course curriculum. **Giảng giải và bài tập:** được viết mới cho bản tự học.
