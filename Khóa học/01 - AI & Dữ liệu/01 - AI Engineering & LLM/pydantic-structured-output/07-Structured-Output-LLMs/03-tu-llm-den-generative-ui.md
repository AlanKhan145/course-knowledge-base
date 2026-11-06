# Thiết kế Structured Output cho UI động của AI Agent

> **Khóa học:** Pydantic Crash Course — tiếng Việt  
> **Học phần:** Module 07 — Structured output với LLM  
> **Loại nội dung:** Bài học / thực hành  
> **Mức độ:** Cơ bản → ứng dụng

## 1. Tóm tắt

Cho phép AI chọn kiểu phản hồi phù hợp trong khi backend giữ quyền xác nhận dữ liệu và hành động.

## 2. Mục tiêu học tập

Sau bài học này, bạn có thể:

- Thiết kế message envelope với kiểu phản hồi rõ ràng.
- Tách quyết định hiển thị, dữ liệu thô và tool action.
- Mô tả quy trình xử lý kết quả trong React frontend.

## 3. Bối cảnh và vấn đề

Một ứng dụng chat thông minh không phải lúc nào cũng nên trả cùng một JSON món ăn. Khi người dùng hỏi “Hôm nay ăn gì?”, bot có thể cần gợi ý bữa ăn; khi hỏi “Tổng calo tuần này”, bot cần biểu đồ; khi hỏi định nghĩa protein, bot chỉ cần text; khi thiếu thông tin, bot hỏi thêm. Vì thế dữ liệu trả về phải có **envelope** (vỏ phản hồi) để frontend biết render component nào, nhưng backend phải tự quyết định kết quả nào an toàn và có đủ dữ liệu.

## 4. Kiến thức cốt lõi

### 4.1. Dạng phản hồi nhiều nhánh

```python
from typing import Literal
from pydantic import BaseModel

class TextBlock(BaseModel):
    type: Literal["text"]
    text: str

class NutritionCard(BaseModel):
    type: Literal["nutrition_card"]
    title: str
    calories: int
    protein_g: float

class AskUser(BaseModel):
    type: Literal["follow_up"]
    question: str

class ChatView(BaseModel):
    blocks: list[TextBlock | NutritionCard | AskUser]
```

`blocks` mô tả UI theo khối thay vì workflow tuyến tính. Đối với hệ thống lớn, nên thiết kế discriminator rõ và giới hạn số block, đồng thời tránh để LLM tự quyết định dữ liệu số lấy từ đâu.

### 4.2. Phân tách trách nhiệm

1. **LLM/planner** phân loại ý định hoặc tạo candidate block có schema.
2. **Tool layer** truy vấn database theo schema input và quyền của user.
3. **Backend** hợp nhất dữ liệu đã kiểm tra, chuẩn hóa và quyết định có trả card, text hay chart.
4. **Frontend** render theo `type`, chỉ từ tập component được hỗ trợ; không render HTML/code tùy ý từ LLM mà không có chính sách an toàn.

Đầu ra của planner không nhất thiết phải giống hoàn toàn dữ liệu cuối cùng gửi UI. Ví dụ calories nên tính từ database/mã nghiệp vụ nếu cần độ tin cậy.

## 5. Ví dụ và thực hành hướng dẫn

```python
from typing import Literal
from pydantic import BaseModel, Field

class TextBlock(BaseModel):
    type: Literal["text"] = "text"
    text: str

class MealBlock(BaseModel):
    type: Literal["meal"] = "meal"
    meal_id: str
    title: str
    kcal: int = Field(ge=0)

class ChatOutput(BaseModel):
    blocks: list[TextBlock | MealBlock] = Field(min_length=1)

payload = {
    "blocks": [
        {"type": "text", "text": "Gợi ý một lựa chọn phù hợp:"},
        {"type": "meal", "meal_id": "m_17", "title": "Cơm gà", "kcal": 630},
    ]
}
view = ChatOutput.model_validate(payload)
for block in view.blocks:
    print(block.type)
```

Backend có thể thêm `meal_id` và kcal chuẩn sau khi truy vấn DB. Frontend ánh xạ `meal` → `MealCard`, `text` → `ChatBubble` và hiển thị giao diện tương tác phù hợp.

## 6. Điểm dễ sai và cách khắc phục

- Không dùng output schema ép tất cả câu hỏi vào cùng một loại card.
- Không tin tưởng ID hoặc giá trị năng lượng do LLM bịa; tra cứu nguồn chuẩn và xác thực authorization.
- Nếu dùng union không có discriminator, payload nhập nhằng có thể khiến việc chọn nhánh khó dự đoán; cân nhắc `Annotated[..., Field(discriminator="type")]` khi các lớp có `Literal` rõ ràng.
- Tool action nhạy cảm luôn cần policy và có thể cần xác nhận người dùng.

## 7. Bài tập tự luyện

Thiết kế thêm `ChartBlock(type="chart", title, labels, values)` và `FollowUpBlock`; viết router UI bằng pseudocode `switch(block.type)`. Tạo 4 payload giả. Tiêu chí: từng payload validate độc lập, chỉ render component cho phép.

## 8. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Nếu người dùng chỉ hỏi định nghĩa protein, bot cần trả gì?**

A. Có thể trả text block, không ép tạo món ăn  
B. Luôn bắt buộc trả meal card  
C. Luôn gọi công cụ thanh toán  
D. Luôn trả 1000 calo  

**Đáp án:** A.  
**Giải thích:** UI động nên theo intent, không workflow cố định.

**Câu 2. Nơi phù hợp xác minh `meal_id` tồn tại và user có quyền xem?**

A. Chỉ giao diện React  
B. Backend service/database layer  
C. Chỉ trong prompt  
D. Trong CSS  

**Đáp án:** B.  
**Giải thích:** Schema kiểm tra cấu trúc, backend kiểm tra quyền và dữ liệu thật.

**Câu 3. Mục đích của `block.type` là gì?**

A. Lưu access token  
B. Điều chỉnh số luồng GPU  
C. Giúp frontend chọn component được cho phép  
D. Xác định tỷ giá  

**Đáp án:** C.  
**Giải thích:** Type tag hỗ trợ render có kiểm soát.


## 9. Tổng kết

Structured Output cho phép tạo Generative UI đa dạng, nhưng phân quyền, định lượng và thực thi tool vẫn do backend kiểm soát.
