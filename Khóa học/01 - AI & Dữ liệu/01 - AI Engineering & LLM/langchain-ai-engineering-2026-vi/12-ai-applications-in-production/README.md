# Module 12 — Ứng dụng LLM trong production

**Tên section Udemy:** AI Applications In Production  
**Số mục học tập:** 9  
**Dự án xuyên module:** Viết production-readiness checklist cho API AI.

## Kết quả cần đạt

- [ ] Thiết lập data retention và quyền truy cập.
- [ ] Thiết kế fallback khi provider gặp sự cố.
- [ ] Giải thích các chỉ số latency, cost và chất lượng.

## Giải thích và định hướng

Tập trung độ tin cậy, riêng tư, lưu trữ dữ liệu, logging, chi phí và trải nghiệm người dùng.

Mỗi lesson trong module được viết độc lập bằng tiếng Việt, có khái niệm chính, ví dụ code, ba nhiệm vụ (hiểu – xây dựng – kiểm chứng) và phần tự kiểm. Đề cương/tựa bài giữ tên gốc để dễ tìm trong Udemy, nhưng nội dung không trích từ video.

## Lab của module

**Mục tiêu:** Viết production-readiness checklist cho API AI.

```python
# Ví dụ test bất biến trong pipeline production.
def redact_secret(s: str) -> str:
    return s.replace("sk-demo", "[REDACTED]")

assert "sk-demo" not in redact_secret("token=sk-demo")
print("check ok")
```

## Danh sách bài học

01. [LLM Applications in Production](01-llm-applications-in-production.md) — `VIDEO`
02. [LLM Application Development landscape](02-llm-application-development-landscape.md) — `VIDEO`
03. [LLMs in Production: Privacy & Data Retention](03-llms-in-production-privacy-data-retention.md) — `VIDEO`
04. [Generative UI/UX featuring CopilotKit](04-generative-ui-ux-featuring-copilotkit.md) — `VIDEO`
05. [Official LangChain Academy Courses](05-official-langchain-academy-courses.md) — `VIDEO`
06. [Open LLMs VS Managed LLM Providers](06-open-llms-vs-managed-llm-providers.md) — `VIDEO`
07. [Confidence in AI Results By Assaf Elovic & Harrison Chase](07-confidence-in-ai-results-by-assaf-elovic-harrison-chase.md) — `VIDEO`
08. [AI FOMO is the New Normal](08-ai-fomo-is-the-new-normal.md) — `VIDEO`
09. [Finished course? Whats next!](09-finished-course-whats-next.md) — `VIDEO`

## Bài tập tổng kết module

1. Tạo phiên bản demo có README, .env.example và hướng dẫn chạy tái lập được.
2. Viết tối thiểu 5 test cases, bao gồm một case lỗi hoặc thiếu dữ liệu.
3. Đối chiếu ba kết quả cần đạt ở đầu module và tự chấm 0–2 điểm mỗi tiêu chí.
4. Bổ sung sơ đồ kiến trúc, danh sách rủi ro và liên kết trace/screenshot nếu có.

**Nguồn tên bài:** Udemy course curriculum. **Giảng giải và bài tập:** được viết mới cho bản tự học.
