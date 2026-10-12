# Module 26 — Bài học thực tế: Security agents

**Tên section Udemy:** Industry Insights: Building Production Security Agents with Roy Miara  
**Số mục học tập:** 4  
**Dự án xuyên module:** Đề xuất mô hình agent hỗ trợ rà soát log bảo mật ở chế độ read-only.

## Kết quả cần đạt

- [ ] Chặn hành động nguy hiểm theo policy.
- [ ] Thiết lập sandbox và audit log.
- [ ] Đánh giá false positive/false negative.

## Giải thích và định hướng

Hiểu bài toán bảo mật dùng agent, harness và cách kiểm soát biến thiên kết quả.

Mỗi lesson trong module được viết độc lập bằng tiếng Việt, có khái niệm chính, ví dụ code, ba nhiệm vụ (hiểu – xây dựng – kiểm chứng) và phần tự kiểm. Đề cương/tựa bài giữ tên gốc để dễ tìm trong Udemy, nhưng nội dung không trích từ video.

## Lab của module

**Mục tiêu:** Đề xuất mô hình agent hỗ trợ rà soát log bảo mật ở chế độ read-only.

```python
# Mọi hành động agent phục vụ bảo mật nên mặc định là read-only.
ALLOWED_ACTIONS = {"read_log", "summarize_alert"}
def execute(action: str):
    if action not in ALLOWED_ACTIONS: raise PermissionError("not allowed")
    return {"action": action, "status": "simulated"}
print(execute("read_log"))
```

## Danh sách bài học

01. [Intro](01-intro.md) — `VIDEO`
02. [AI Agents in Cybersecurity CTF Competitions](02-ai-agents-in-cybersecurity-ctf-competitions.md) — `VIDEO`
03. [Harness Engineering](03-harness-engineering.md) — `VIDEO`
04. [Managing Variance and Hallucinations in Production Agents](04-managing-variance-and-hallucinations-in-production-agents.md) — `VIDEO`

## Bài tập tổng kết module

1. Tạo phiên bản demo có README, .env.example và hướng dẫn chạy tái lập được.
2. Viết tối thiểu 5 test cases, bao gồm một case lỗi hoặc thiếu dữ liệu.
3. Đối chiếu ba kết quả cần đạt ở đầu module và tự chấm 0–2 điểm mỗi tiêu chí.
4. Bổ sung sơ đồ kiến trúc, danh sách rủi ro và liên kết trace/screenshot nếu có.

**Nguồn tên bài:** Udemy course curriculum. **Giảng giải và bài tập:** được viết mới cho bản tự học.
