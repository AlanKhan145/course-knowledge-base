# Module 04 — Kiến trúc 3 tầng của AI Agent

**Tên section Udemy:** Agents Under the Hood: The 3 Layers  
**Số mục học tập:** 4  
**Dự án xuyên module:** Thiết kế agent thương mại điện tử tra cứu sản phẩm, giá và tồn kho giả lập.

## Kết quả cần đạt

- [ ] Vẽ ba tầng của agent và ranh giới trách nhiệm.
- [ ] Hiểu vòng ReAct: suy xét, gọi tool, nhận kết quả.
- [ ] Nhận diện rủi ro vòng lặp vô hạn hoặc tool lỗi.

## Giải thích và định hướng

Hiểu tầng orchestration, tool-calling và prompting, cùng chu trình quan sát–hành động.

Mỗi lesson trong module được viết độc lập bằng tiếng Việt, có khái niệm chính, ví dụ code, ba nhiệm vụ (hiểu – xây dựng – kiểm chứng) và phần tự kiểm. Đề cương/tựa bài giữ tên gốc để dễ tìm trong Udemy, nhưng nội dung không trích từ video.

## Lab của module

**Mục tiêu:** Thiết kế agent thương mại điện tử tra cứu sản phẩm, giá và tồn kho giả lập.

```python
def architecture():
    return {
        "orchestration": "quản lý state, số bước và dừng",
        "tool_calling": "định nghĩa schema, gọi tool an toàn",
        "prompting": "hướng dẫn mô hình chọn hành động",
    }
print(architecture())
```

## Danh sách bài học

01. [Introduction to The Core Architecture of AI Agents: A Deep Dive](01-introduction-to-the-core-architecture-of-ai-agents-a-deep-dive.md) — `VIDEO`
02. [What are we building? An E-Commerce Agent](02-what-are-we-building-an-e-commerce-agent.md) — `VIDEO`
03. [[Theory] The Gist of ReACT](03-theory-the-gist-of-react.md) — `VIDEO`
04. [Setup](04-setup.md) — `VIDEO`

## Bài tập tổng kết module

1. Tạo phiên bản demo có README, .env.example và hướng dẫn chạy tái lập được.
2. Viết tối thiểu 5 test cases, bao gồm một case lỗi hoặc thiếu dữ liệu.
3. Đối chiếu ba kết quả cần đạt ở đầu module và tự chấm 0–2 điểm mỗi tiêu chí.
4. Bổ sung sơ đồ kiến trúc, danh sách rủi ro và liên kết trace/screenshot nếu có.

**Nguồn tên bài:** Udemy course curriculum. **Giảng giải và bài tập:** được viết mới cho bản tự học.
