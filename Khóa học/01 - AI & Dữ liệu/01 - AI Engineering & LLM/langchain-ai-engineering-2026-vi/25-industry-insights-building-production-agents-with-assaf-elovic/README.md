# Module 25 — Bài học thực tế: Production agents

**Tên section Udemy:** Industry Insights: Building Production Agents with Assaf Elovic  
**Số mục học tập:** 3  
**Dự án xuyên module:** Thiết kế vòng feedback với rating và dữ liệu kiểm thử.

## Kết quả cần đạt

- [ ] Tách đánh giá model và đánh giá sản phẩm.
- [ ] Phân loại phản hồi người dùng.
- [ ] Ưu tiên metrics ảnh hưởng người dùng.

## Giải thích và định hướng

Các yếu tố làm hệ thống AI đáng tin: kiến trúc, trust, feedback loop và tính minh bạch.

Mỗi lesson trong module được viết độc lập bằng tiếng Việt, có khái niệm chính, ví dụ code, ba nhiệm vụ (hiểu – xây dựng – kiểm chứng) và phần tự kiểm. Đề cương/tựa bài giữ tên gốc để dễ tìm trong Udemy, nhưng nội dung không trích từ video.

## Lab của module

**Mục tiêu:** Thiết kế vòng feedback với rating và dữ liệu kiểm thử.

```python
# Đo vòng phản hồi đơn giản; không lưu dữ liệu cá nhân.
feedback = [{"helpful": True}, {"helpful": False}, {"helpful": True}]
rate = sum(x["helpful"] for x in feedback) / len(feedback)
print(f"Helpful rate: {rate:.1%}")
```

## Danh sách bài học

01. [The Core Architecture of Production-Grade AI](01-the-core-architecture-of-production-grade-ai.md) — `VIDEO`
02. [How to Make Users Trust Your AI Agents](02-how-to-make-users-trust-your-ai-agents.md) — `VIDEO`
03. [Tutorial: Building a Lean AI Feedback Loop](03-tutorial-building-a-lean-ai-feedback-loop.md) — `VIDEO`

## Bài tập tổng kết module

1. Tạo phiên bản demo có README, .env.example và hướng dẫn chạy tái lập được.
2. Viết tối thiểu 5 test cases, bao gồm một case lỗi hoặc thiếu dữ liệu.
3. Đối chiếu ba kết quả cần đạt ở đầu module và tự chấm 0–2 điểm mỗi tiêu chí.
4. Bổ sung sơ đồ kiến trúc, danh sách rủi ro và liên kết trace/screenshot nếu có.

**Nguồn tên bài:** Udemy course curriculum. **Giảng giải và bài tập:** được viết mới cho bản tự học.
