# Module 08 — Tổng kết kiến trúc agent

**Tên section Udemy:** Wrap-up: From Layers Back to LangChain  
**Số mục học tập:** 2  
**Dự án xuyên module:** Viết tài liệu quyết định kiến trúc agent cho một dịch vụ AI.

## Kết quả cần đạt

- [ ] Chọn giữa agent cấp cao và graph tùy độ phức tạp.
- [ ] Phân biệt function calling với thực thi hàm.
- [ ] Xác định lớp cần log và test.

## Giải thích và định hướng

Ghép ba tầng thành một góc nhìn kỹ thuật nhất quán, xác định lúc dùng framework.

Mỗi lesson trong module được viết độc lập bằng tiếng Việt, có khái niệm chính, ví dụ code, ba nhiệm vụ (hiểu – xây dựng – kiểm chứng) và phần tự kiểm. Đề cương/tựa bài giữ tên gốc để dễ tìm trong Udemy, nhưng nội dung không trích từ video.

## Lab của module

**Mục tiêu:** Viết tài liệu quyết định kiến trúc agent cho một dịch vụ AI.

```python
from langchain.agents import create_agent
from langchain.tools import tool

@tool
def price(sku: str) -> int:
    """Trả giá giả lập theo mã hàng."""
    return {"A1": 250}.get(sku, 0)

agent = create_agent("openai:gpt-4o-mini", tools=[price])
# Dùng LangChain cấp cao khi không cần tùy biến đồ thị phức tạp.
```

## Danh sách bài học

01. [Intro](01-intro.md) — `VIDEO`
02. [[Theory] Understanding Function Calling for LLMs](02-theory-understanding-function-calling-for-llms.md) — `VIDEO`

## Bài tập tổng kết module

1. Tạo phiên bản demo có README, .env.example và hướng dẫn chạy tái lập được.
2. Viết tối thiểu 5 test cases, bao gồm một case lỗi hoặc thiếu dữ liệu.
3. Đối chiếu ba kết quả cần đạt ở đầu module và tự chấm 0–2 điểm mỗi tiêu chí.
4. Bổ sung sơ đồ kiến trúc, danh sách rủi ro và liên kết trace/screenshot nếu có.

**Nguồn tên bài:** Udemy course curriculum. **Giảng giải và bài tập:** được viết mới cho bản tự học.
