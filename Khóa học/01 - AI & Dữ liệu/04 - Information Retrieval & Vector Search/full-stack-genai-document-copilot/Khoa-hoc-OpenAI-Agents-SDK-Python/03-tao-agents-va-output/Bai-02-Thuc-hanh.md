# Bài 02 — Thực hành có hướng dẫn: Tạo Agent và structured output

> **Module 03 · Lab** · Video: [xem từ 00:16:10](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=970s).

**Tổng quan:** Tạo `Agent`, chạy bằng `Runner`, dùng `instructions`, `model` và `output_type` với Pydantic.

## 1. Đề bài

Tạo một “Recipe Agent” nhận tên món ăn, xuất dữ liệu có cấu trúc, sau đó dùng agent thứ hai viết phần hướng dẫn ngắn từ dữ liệu đó. Đây là lab minh họa schema, không phải cơ sở dữ liệu dinh dưỡng đã kiểm chứng.

## 2. Tạo file `recipe_lab.py`

```python
from pydantic import BaseModel, Field
from agents import Agent, Runner

class Recipe(BaseModel):
    title: str
    ingredients: list[str]
    cooking_time_minutes: int = Field(ge=0)
    servings: int = Field(ge=1)

creator = Agent(
    name="Recipe Creator",
    instructions="Tạo công thức món ăn. Ingredients là danh sách nguyên liệu, thời gian tính phút.",
    output_type=Recipe,
)
explainer = Agent(
    name="Recipe Explainer",
    instructions="Viết hướng dẫn nấu ngắn gọn dựa trên dữ liệu được gửi; không tự thay đổi nguyên liệu.",
)

recipe_result = Runner.run_sync(creator, "Mì Ý xúc xích")
recipe = recipe_result.final_output
assert isinstance(recipe, Recipe)

explanation = Runner.run_sync(explainer, recipe.model_dump_json())
print(recipe.model_dump_json(indent=2))
print(explanation.final_output)
```

## 3. Quan sát output

Sửa `servings` trong prompt thành 2 và quan sát kết quả; thử nhập món không rõ ràng. Nếu model không thể xác định tên món, nên yêu cầu làm rõ thay vì tự tạo chi tiết vô căn cứ. So sánh việc truyền `recipe.title` với `recipe.model_dump_json()` sang agent thứ hai: cách sau giữ được nhiều thông tin hơn.

## 4. Kiểm thử schema

Thêm kiểm tra đơn vị thời gian, danh sách nguyên liệu rỗng, và số khẩu phần. `Field(ge=1)` chặn số phần ăn nhỏ hơn 1 về mặt schema; tuy nhiên cần thêm validator nghiệp vụ nếu muốn giới hạn tối đa hoặc đảm bảo nguyên liệu không rỗng.

## 5. Debug và checkpoint

Nếu trả về `str` thay vì instance `Recipe`, hãy xác minh `output_type=Recipe` đặt trên đúng agent và bạn đang đọc `result.final_output`. Nếu gặp lỗi model không hỗ trợ structured output, đổi sang model được tài liệu liệt kê thay vì ép parse JSON bằng thủ thuật chuỗi.

## 6. Bàn giao

Nộp `recipe_lab.py`, kèm ba dữ liệu đầu vào và kết quả quan sát. Nêu được lý do schema hữu ích khi frontend cần dựng thẻ món ăn, điều chỉnh khẩu phần hoặc tính tổng nguyên liệu.

## 7. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Thuộc tính nào mô tả cấu trúc dữ liệu trả về từ agent?

A. `handoff_description`  
B. `name`  
C. `output_type`  
D. `tools`  

**Đáp án:** C. **Giải thích:** `output_type` nhận kiểu Pydantic để tạo structured output.

### Câu 2

Khi gọi `Runner.run` trong code async, thao tác đúng là gì?

A. Dùng `%pip`  
B. Gọi `.execute()`  
C. Dùng `json.loads` mặc định  
D. Dùng `await`  

**Đáp án:** D. **Giải thích:** `Runner.run` trả kết quả bất đồng bộ.

### Câu 3

Cho kết quả agent 1 làm input agent 2 bằng Python là mô hình nào?

A. Điều phối tuần tự do ứng dụng quyết định  
B. Handoff tự động  
C. Guardrail  
D. Web search  

**Đáp án:** A. **Giải thích:** Lập trình viên quyết định agent được chạy ở mỗi bước.

### Câu 4

Pydantic tự bảo đảm điều gì?

A. Tính đúng đắn mọi con số  
B. Cấu trúc và ràng buộc kiểu được khai báo  
C. Món ăn chuẩn y khoa  
D. Model không bao giờ sai  

**Đáp án:** B. **Giải thích:** Schema không thay thế kiểm chứng nội dung.

### Câu 5

Trường nào dùng để chỉ dẫn hành vi của agent?

A. `result.final_output`  
B. `.env`  
C. `instructions`  
D. `trace_id`  

**Đáp án:** C. **Giải thích:** Instructions là chỉ thị nhiệm vụ cho mô hình.


**Tài liệu tra cứu:** [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) · [1](https://openai.github.io/openai-agents-python/agents/)
