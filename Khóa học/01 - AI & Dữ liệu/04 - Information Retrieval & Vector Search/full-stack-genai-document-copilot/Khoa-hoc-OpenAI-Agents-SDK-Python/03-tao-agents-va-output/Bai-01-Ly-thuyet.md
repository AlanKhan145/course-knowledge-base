# Bài 01 — Kiến thức nền tảng: Tạo Agent và structured output

> **Module 03 · Lesson** · Video: [xem từ 00:16:10](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=970s).

**Tổng quan:** Tạo `Agent`, chạy bằng `Runner`, dùng `instructions`, `model` và `output_type` với Pydantic.

## 1. Mục tiêu

Tạo hai agent làm các nhiệm vụ riêng, nối output của agent thứ nhất cho agent thứ hai và trả kết quả đúng schema Pydantic.

## 2. Cấu hình Agent

`Agent` là đối tượng mô tả vai trò. `name` giúp quan sát, `instructions` mô tả nhiệm vụ, `model` có thể chọn mô hình mà tài khoản hỗ trợ. Ví dụ cơ bản:

```python
from agents import Agent, Runner

agent = Agent(
    name="Vietnamese Assistant",
    instructions="Bạn là trợ lý kỹ thuật, trả lời bằng tiếng Việt, rõ ràng và ngắn gọn.",
)
result = Runner.run_sync(agent, "Giải thích biến Python trong 2 câu")
print(result.final_output)
```

`Runner.run` là bất đồng bộ (`await Runner.run(...)`); `Runner.run_sync` tiện cho script đồng bộ. Có thể gặp sai lầm khi dùng `await` trong file `.py` ngoài hàm async. Trong script dùng `asyncio.run(main())`, hoặc chọn `run_sync`.

## 3. Instructions tốt và xấu

Chỉ thị “Bạn là trợ lý thông minh” quá rộng. Tốt hơn là nêu đối tượng, nhiệm vụ, hình thức kết quả và ràng buộc: “Nhận một chủ đề lập trình; viết giải thích ngắn, một ví dụ Python tối thiểu, không đoán đầu ra khi thiếu dữ kiện”. Instructions không tạo quyền truy cập dữ liệu: nếu không cấp tool thì agent không thể trực tiếp truy xuất dữ liệu thực của ứng dụng.

## 4. Kết nối tuần tự hai Agent

Một agent viết câu đùa về chủ đề, agent thứ hai dịch nó:

```python
from agents import Agent, Runner

joke = Agent(name="Joke", instructions="Tạo một câu đùa ngắn về chủ đề được cung cấp")
translator = Agent(name="Translator", instructions="Dịch văn bản nhận được sang tiếng Tây Ban Nha")

first = Runner.run_sync(joke, "Python")
second = Runner.run_sync(translator, first.final_output)
print(first.final_output)
print(second.final_output)
```

Đây là **điều phối bằng Python theo trình tự cố định**, chưa phải handoff. Mọi bước do lập trình viên chủ động gọi. Cách này phù hợp khi pipeline phải luôn đi theo thứ tự.

## 5. Structured output với Pydantic

Văn bản tự do không thuận tiện để hiển thị dữ liệu như công thức nấu ăn. `output_type` yêu cầu đầu ra tương thích với mô hình Pydantic:

```python
from pydantic import BaseModel
from agents import Agent, Runner

class Recipe(BaseModel):
    title: str
    ingredients: list[str]
    cooking_time_minutes: int
    servings: int

recipe_agent = Agent(
    name="Recipe Creator",
    instructions="Nhận tên món ăn. Trả công thức với thành phần và thời gian tính bằng phút.",
    output_type=Recipe,
)
result = Runner.run_sync(recipe_agent, "Spaghetti với xúc xích Ý")
recipe: Recipe = result.final_output
print(recipe.title, recipe.cooking_time_minutes)
print(recipe.model_dump())
```

Pydantic giúp kiểm tra **kiểu dữ liệu và cấu trúc**, chứ không tự bảo đảm nội dung chính xác. Nếu agent tạo thời gian nấu không hợp lý, bạn còn cần quy tắc nghiệp vụ hoặc kiểm chứng nguồn.

## 6. Chọn mô hình và chi phí

Tên model, khả năng hỗ trợ structured output, giá/token và quyền truy cập thay đổi theo thời gian. Hãy kiểm tra trang models và bảng giá mới nhất, không sao chép giá trong bài giảng cũ. Bắt đầu bằng mô hình được hỗ trợ, thử trên vài ví dụ và nâng chất lượng khi cần.

## 7. Tổng kết

`instructions` xác định cách hành xử; `output_type` xác định hợp đồng đầu ra; `Runner` thực thi. Kết nối tuần tự bằng Python là bước đầu tốt để nhận ra khi nào cần handoff thật sự.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Thuộc tính nào mô tả cấu trúc dữ liệu trả về từ agent?

A. `output_type`  
B. `handoff_description`  
C. `name`  
D. `tools`  

**Đáp án:** A. **Giải thích:** `output_type` nhận kiểu Pydantic để tạo structured output.

### Câu 2

Khi gọi `Runner.run` trong code async, thao tác đúng là gì?

A. Dùng `%pip`  
B. Dùng `await`  
C. Gọi `.execute()`  
D. Dùng `json.loads` mặc định  

**Đáp án:** B. **Giải thích:** `Runner.run` trả kết quả bất đồng bộ.

### Câu 3

Cho kết quả agent 1 làm input agent 2 bằng Python là mô hình nào?

A. Handoff tự động  
B. Guardrail  
C. Điều phối tuần tự do ứng dụng quyết định  
D. Web search  

**Đáp án:** C. **Giải thích:** Lập trình viên quyết định agent được chạy ở mỗi bước.

### Câu 4

Pydantic tự bảo đảm điều gì?

A. Tính đúng đắn mọi con số  
B. Món ăn chuẩn y khoa  
C. Model không bao giờ sai  
D. Cấu trúc và ràng buộc kiểu được khai báo  

**Đáp án:** D. **Giải thích:** Schema không thay thế kiểm chứng nội dung.

### Câu 5

Trường nào dùng để chỉ dẫn hành vi của agent?

A. `instructions`  
B. `result.final_output`  
C. `.env`  
D. `trace_id`  

**Đáp án:** A. **Giải thích:** Instructions là chỉ thị nhiệm vụ cho mô hình.


**Tài liệu tra cứu:** [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) · [1](https://openai.github.io/openai-agents-python/agents/)
