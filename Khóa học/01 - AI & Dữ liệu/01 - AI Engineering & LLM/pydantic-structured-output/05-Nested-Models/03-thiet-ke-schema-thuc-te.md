# Thiết kế schema nhiều tầng cho API và AI Agent

> **Khóa học:** Pydantic Crash Course — tiếng Việt  
> **Học phần:** Module 05 — Nested models  
> **Loại nội dung:** Bài học / thực hành  
> **Mức độ:** Cơ bản → ứng dụng

## 1. Tóm tắt

Tổ chức các model nhỏ, rõ ràng, tái sử dụng được ở input, business layer và output của AI Agent.

## 2. Mục tiêu học tập

Sau bài học này, bạn có thể:

- Phân rã payload nhiều tầng thành model độc lập.
- Quyết định khi nào tách input model và output model.
- Kiểm soát dữ liệu thừa, dữ liệu nhạy cảm và hợp đồng API.

## 3. Bối cảnh và vấn đề

Một AI Agent xử lý đơn hàng có thể cần nhiều view dữ liệu: request từ frontend, entity nội bộ và response để hiển thị. Không nên tái sử dụng một model duy nhất chứa mọi trường, vì client không được phép tự cung cấp `internal_cost` hay `is_admin`, cũng không nên nhận lại khóa bí mật từ server. Thiết kế schema theo **hướng dữ liệu** (input/output) giúp tránh tình trạng dữ liệu thừa và gán nhầm trường.

## 4. Kiến thức cốt lõi

### 4.1. Ba lớp mô hình

- **Input schema:** chỉ field được client phép gửi, nghiêm ngặt với extra key.
- **Domain schema:** biểu diễn dữ liệu nội bộ đã chuẩn hóa, có ràng buộc nghiệp vụ.
- **Output schema:** những field frontend được phép nhận, có thể khác input.

### 4.2. Ví dụ tách request và response

```python
from pydantic import BaseModel, ConfigDict, Field

class MealPreferenceInput(BaseModel):
    model_config = ConfigDict(extra="forbid")
    calories_target: int = Field(ge=0, le=5000)
    allergies: list[str] = Field(default_factory=list)

class MealCardOutput(BaseModel):
    title: str
    calories: int = Field(ge=0)
    ingredients: list[str]
    rationale: str
```

`MealPreferenceInput` không chứa `id` người dùng, quyết định quyền hay cột nội bộ của database. `MealCardOutput` chỉ diễn tả dữ liệu card để render, không đồng nghĩa lúc nào AI cũng phải trả món ăn. Tùy intent, hệ thống có thể dùng các output model khác nhau.

## 5. Ví dụ và thực hành hướng dẫn

```python
from typing import Literal
from pydantic import BaseModel, Field

class TextReply(BaseModel):
    type: Literal["text"] = "text"
    content: str

class MealCard(BaseModel):
    type: Literal["meal_card"] = "meal_card"
    title: str
    calories: int = Field(ge=0)

class AssistantResponse(BaseModel):
    response: TextReply | MealCard

text = AssistantResponse.model_validate({"response": {"type": "text", "content": "Chào bạn"}})
meal = AssistantResponse.model_validate({"response": {"type": "meal_card", "title": "Cơm gà", "calories": 600}})
print(text.response.type, meal.response.type)
```

Ví dụ minh họa rằng dữ liệu UI có nhiều kiểu; khi mở rộng union phức tạp nên dùng discriminated union với discriminator rõ ràng.

## 6. Điểm dễ sai và cách khắc phục

- Không đưa cả model database ra frontend mà không chọn lọc các trường.
- Chỉ validate output từ LLM vẫn chưa đủ: mã nghiệp vụ phải quyết định tool nào thực sự được phép gọi.
- Đối với external APIs, thêm giới hạn payload size và số phần tử; Pydantic không tự bảo vệ mọi trường hợp resource exhaustion.

## 7. Bài tập tự luyện

Thiết kế ba model `SearchMealRequest`, `MealResult`, `ChatMessage`. Vẽ sơ đồ request→service→response và chỉ rõ trường nào user không được điều khiển. Tiêu chí: có schema input/output tách biệt và 3 test extra field.

## 8. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Vì sao không nên trả thẳng entity database ra frontend?**

A. Có thể lộ trường nội bộ hoặc dữ liệu nhạy cảm  
B. Vì Pydantic không đọc được database  
C. Vì frontend không hiểu JSON  
D. Vì sẽ làm model mất type hints  

**Đáp án:** A.  
**Giải thích:** Output model kiểm soát field mà client được xem.

**Câu 2. Một `response.type` dùng để làm gì trong nhiều kiểu UI?**

A. Là khóa API  
B. Phân biệt kiểu payload để render đúng thành phần  
C. Là giá tiền của sản phẩm  
D. Là bảng SQL  

**Đáp án:** B.  
**Giải thích:** Type tag là discriminator cho cấu trúc UI.

**Câu 3. Pydantic validation đủ để kiểm soát AI gọi tool có quyền ghi/xóa không?**

A. Có, vì schema chặn mọi rủi ro  
B. Có, nếu dùng EmailStr  
C. Không, cần kiểm tra quyền và chính sách ở tầng tool/business  
D. Có, nếu dùng Decimal  

**Đáp án:** C.  
**Giải thích:** Schema đảm bảo hình dạng arguments, không đảm bảo quyền thực hiện hành động.


## 9. Tổng kết

Thiết kế schema theo ranh giới input, domain và output là nền tảng cho API đáng tin và giao diện AI có nhiều loại phản hồi.
