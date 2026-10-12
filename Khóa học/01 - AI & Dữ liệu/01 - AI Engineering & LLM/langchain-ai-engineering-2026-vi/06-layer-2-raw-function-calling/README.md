# Module 06 — Tầng 2: Function calling thô

**Tên section Udemy:** Layer 2: Raw Function Calling  
**Số mục học tập:** 4  
**Dự án xuyên module:** Dùng SDK mô hình cục bộ để gửi mô tả hàm, nhận arguments và trả result.

## Kết quả cần đạt

- [ ] Đọc được schema kiểu object/properties/required.
- [ ] Validate arguments trước khi gọi hàm Python.
- [ ] So sánh API thô với @tool của LangChain.

## Giải thích và định hướng

Quan sát JSON Schema của tool và giao thức gọi hàm trực tiếp thay vì trừu tượng hóa.

Mỗi lesson trong module được viết độc lập bằng tiếng Việt, có khái niệm chính, ví dụ code, ba nhiệm vụ (hiểu – xây dựng – kiểm chứng) và phần tự kiểm. Đề cương/tựa bài giữ tên gốc để dễ tìm trong Udemy, nhưng nội dung không trích từ video.

## Lab của module

**Mục tiêu:** Dùng SDK mô hình cục bộ để gửi mô tả hàm, nhận arguments và trả result.

```python
from pydantic import BaseModel, Field

class StockArgs(BaseModel):
    sku: str = Field(min_length=1, max_length=40)

raw_arguments = {"sku": "A1"}  # minh họa JSON tool-call từ provider
parsed = StockArgs.model_validate(raw_arguments)
print({"stock": parsed.sku, "available": True})
```

## Danh sách bài học

01. [[Layer 2] Manual JSON Schemas vs. LangChain Tool Abstraction](01-layer-2-manual-json-schemas-vs-langchain-tool-abstraction.md) — `VIDEO`
02. [Building a ReAct Agent Loop with the Raw Ollama SDK](02-building-a-react-agent-loop-with-the-raw-ollama-sdk.md) — `VIDEO`
03. [Recap](03-recap.md) — `VIDEO`
04. [Quiz: Raw Function Calling — AI Agent Without LangChain](04-quiz-raw-function-calling-ai-agent-without-langchain.md) — `QUIZ`

## Bài tập tổng kết module

1. Tạo phiên bản demo có README, .env.example và hướng dẫn chạy tái lập được.
2. Viết tối thiểu 5 test cases, bao gồm một case lỗi hoặc thiếu dữ liệu.
3. Đối chiếu ba kết quả cần đạt ở đầu module và tự chấm 0–2 điểm mỗi tiêu chí.
4. Bổ sung sơ đồ kiến trúc, danh sách rủi ro và liên kết trace/screenshot nếu có.

**Nguồn tên bài:** Udemy course curriculum. **Giảng giải và bài tập:** được viết mới cho bản tự học.
