# Pydantic Structured Output với OpenAI Responses API

> **Khóa học:** Pydantic Crash Course — tiếng Việt  
> **Học phần:** Module 07 — Structured output với LLM  
> **Loại nội dung:** Bài học / thực hành  
> **Mức độ:** Cơ bản → ứng dụng

## 1. Tóm tắt

Định nghĩa Pydantic schema và truyền trực tiếp cho SDK parser để nhận đối tượng có cấu trúc.

## 2. Mục tiêu học tập

Sau bài học này, bạn có thể:

- Viết model gồm các trường text, number, list, nested.
- Gọi `client.responses.parse(text_format=...)` và đọc `output_parsed`.
- Xử lý trường hợp không có dữ liệu parsed, từ chối hoặc lỗi kết nối.

## 3. Bối cảnh và vấn đề

Trong Python SDK, `responses.parse` hỗ trợ truyền Pydantic class qua `text_format`. SDK xử lý việc chuyển schema theo cơ chế tương thích và parse output về object typed. Đây là cách giảm code thủ công `json.loads` + regex + gán dict. Lệnh gọi thực tế cần API key và **tên model có hỗ trợ Structured Outputs** của tài khoản. Bài minh họa lấy tên model từ biến môi trường để không đóng đinh một phiên bản dễ lỗi thời.

## 4. Kiến thức cốt lõi

### 4.1. Tạo schema có nested result

```python
from pydantic import BaseModel

class Step(BaseModel):
    explanation: str
    result: str

class Answer(BaseModel):
    steps: list[Step]
    final_answer: str
```

Trường trong schema dùng tên có nghĩa để mô hình biết cần trả gì. Với output hướng đến provider schema strict, **ưu tiên field required**, tránh quá nhiều kiểu phức tạp hoặc validators tùy biến không ánh xạ được sang JSON Schema.

### 4.2. Luồng gọi SDK

Khởi tạo `OpenAI()` bằng `OPENAI_API_KEY` trong environment. Truyền `model`, `input`, `text_format=Answer`; sau đó đọc `response.output_parsed`. Giá trị này có thể là `None` khi không có nội dung final đã parse. Cần xử lý trạng thái không thành công, refused và ứng dụng vẫn có retry/fallback phù hợp.

## 5. Ví dụ và thực hành hướng dẫn

```python
import os
from openai import OpenAI
from pydantic import BaseModel

class ActionStep(BaseModel):
    description: str
    result: str

class Solution(BaseModel):
    steps: list[ActionStep]
    final_answer: str

model_name = os.environ["OPENAI_MODEL"]  # chọn model hỗ trợ Structured Outputs
client = OpenAI()  # OPENAI_API_KEY lấy từ môi trường

response = client.responses.parse(
    model=model_name,
    input="Giải phương trình 2x + 4 = 10, trình bày hai bước.",
    text_format=Solution,
)

result = response.output_parsed
if result is None:
    # Kiểm tra response.status và response.output để phân biệt refusal/incomplete
    raise RuntimeError("Không nhận được structured output hợp lệ")
print(result.final_answer)
for step in result.steps:
    print(step.description, step.result)
```

Cài `openai` bằng `uv add openai` hoặc `pip install openai`; không hardcode khóa thật vào file. Cấu trúc API ở đây là `client.responses.parse`, không phải một REST endpoint do ứng dụng tự tạo.

## 6. Điểm dễ sai và cách khắc phục

- Structured Outputs hỗ trợ subset JSON Schema, do đó một số `Field` constraints/validators không được provider hỗ trợ trong strict schema.
- Nếu chỉ chạy `print(response.output_text)` rồi parse tay, có thể bỏ lỡ metadata hoặc edge cases. Ưu tiên `output_parsed` khi dùng SDK parser.
- Kết quả có thể rỗng hoặc bị từ chối; cần có giao diện lỗi phù hợp.
- Chi phí và dữ liệu nhạy cảm: không gửi PII hoặc tài liệu riêng nếu chưa có căn cứ pháp lý/cấu hình phù hợp.

## 7. Bài tập tự luyện

Tạo `MeetingExtract(title, participants: list[str], date_note: str)`; yêu cầu LLM trích xuất từ 3 câu lịch họp. Viết test giả lập bằng `MeetingExtract.model_validate` khi không có API key. Tiêu chí: code xử lý `output_parsed is None` và không in secret.

## 8. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Phương thức Python SDK nào có thể parse Responses API về Pydantic model?**

A. `client.responses.parse(..., text_format=Model)`  
B. `client.responses.text()`  
C. `Model.http_get()`  
D. `client.model_dump_json()`  

**Đáp án:** A.  
**Giải thích:** SDK cung cấp helper `responses.parse` và tham số `text_format`.

**Câu 2. Đối tượng parsed được đọc ở thuộc tính nào?**

A. `response.output_text_only`  
B. `response.output_parsed`  
C. `response.schema`  
D. `response.model_config`  

**Đáp án:** B.  
**Giải thích:** `output_parsed` trả model parsed hoặc None.

**Câu 3. Nếu `output_parsed is None`, nên làm gì?**

A. Cố gắng dùng `result.steps` ngay  
B. Bỏ qua và lưu null vào DB  
C. Xem trạng thái/refusal/incomplete và có fallback  
D. Tự khẳng định thành công  

**Đáp án:** C.  
**Giải thích:** Kết quả None không được coi là schema hợp lệ.


## 9. Tổng kết

Pydantic + SDK parser tạo pipeline typed từ prompt đến Python model. Luôn bao phủ trạng thái thất bại và kiểm tra tính đúng của nội dung.
