# Thực hành — Creating Agents, Runner và Structured Output

**Loại:** Lab | **Đầu ra:** mã Python hoạt động và bản ghi kiểm thử

## 1. Tổng quan
Tạo hai agent: một tạo công thức món ăn và một viết bản tóm tắt mua sắm, truyền `Recipe` thành dữ liệu đầu vào; so sánh với quy trình trả lời bằng chuỗi thuần.

## 2. Mục tiêu
- Tự triển khai được ví dụ trong một dự án Python độc lập.
- Quan sát được kết quả thực tế của Agent/Runner hoặc tool.
- Tìm và giải thích được ít nhất một tình huống lỗi.
- Hoàn thiện checklist và câu hỏi ôn tập.

## 3. Chuẩn bị
- Python và virtual environment đang kích hoạt.
- `pip install openai-agents python-dotenv`.
- Biến `OPENAI_API_KEY` được cấu hình an toàn; không đưa key vào code hay bản nộp.
- Trình soạn thảo VS Code, PyCharm hoặc Jupyter.
- Đọc mục tiêu và kiến thức cốt lõi trước khi bắt đầu.

## 4. Quy trình thực hiện

### 4.1. Bước 1
Viết `Recipe(BaseModel)` có title, ingredients, cook_minutes, servings.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.2. Bước 2
Tạo `Agent(..., output_type=Recipe)` và chạy ít nhất hai món.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.3. Bước 3
Tạo agent thứ hai nhận danh sách nguyên liệu để tạo shopping list theo nhóm.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.4. Bước 4
Thử sửa schema để bổ sung `notes: list[str]` và quan sát cấu trúc dữ liệu.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.5. Bước 5
Kiểm tra những trường hợp model dự đoán không chắc chắn, không tự động lưu kết quả chưa rà soát.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

## 5. Mã tham khảo
```python
import asyncio
from pydantic import BaseModel, Field
from agents import Agent, Runner

class Recipe(BaseModel):
    title: str
    ingredients: list[str]
    cook_minutes: int = Field(ge=0)
    servings: int = Field(ge=1)

recipe_agent = Agent(
    name="Recipe Agent",
    instructions="Tạo công thức dễ thực hiện; thời gian tính theo phút.",
    output_type=Recipe,
)

async def main():
    result = await Runner.run(recipe_agent, "Mì Ý sốt cà chua cho 2 người")
    recipe: Recipe = result.final_output
    print(recipe.model_dump())

if __name__ == "__main__":
    asyncio.run(main())
```
Đoạn mã là điểm khởi đầu, không phải toàn bộ lời giải cho mọi bước thực hành. Hãy bổ sung phần kiểm thử và xử lý tình huống theo yêu cầu. **Không chạy tool có side effect trên dữ liệu thật trong bài lab.**

## 6. Kiểm thử và đối chiếu kết quả
| Ca kiểm thử | Đầu vào | Kỳ vọng | Kết quả quan sát |
| --- | --- | --- | --- |
| Bình thường | Một yêu cầu đúng phạm vi | Có kết quả hợp lệ | Tự điền |
| Thiếu dữ liệu | Một tham số vắng/sai | Giải thích thiếu dữ liệu | Tự điền |
| Trường hợp biên | Yêu cầu mơ hồ/khó | Không bịa hoặc vượt quyền | Tự điền |

## 7. Debug và khắc phục
- **`ModuleNotFoundError`:** xác nhận `python -m pip show openai-agents` trong đúng môi trường.
- **Authentication/permission:** xác nhận key và quyền model, không in key.
- **Kết quả model thiếu ổn định:** thử nhiều câu đầu vào, thắt chặt schema/tiêu chí, quan sát trace.
- **Tool hoặc stream bị lỗi:** ghi exception, không báo đã hoàn thành hành động ngoài hệ thống nếu chưa có xác nhận.
- **Nhầm dữ liệu thực và demo:** ghi rõ dữ liệu nào cố định và dữ liệu nào cần API/DB thật.

## 8. Deliverable
Nộp một file Python hoặc notebook đã chạy được; bảng ba ca kiểm thử; ảnh chụp/log đã che thông tin nhạy cảm; báo cáo ngắn về một lỗi và cách giải quyết.

## 9. Checklist hoàn thành
- [ ] Chạy được code trong môi trường riêng.
- [ ] Không commit API key, file `.env` hoặc dữ liệu nhạy cảm.
- [ ] Có ít nhất ba ca kiểm thử và kết quả quan sát.
- [ ] Đã phân biệt hành vi model với thao tác thực.
- [ ] Giải thích được một lỗi và cách khắc phục.

## 10. Câu hỏi ôn tập trắc nghiệm
### 10.1. Câu 1
Thành phần chạy vòng lặp agent là gì?

A. BaseModel  
B. Runner  
C. Markdown  
D. dotenv  

**Đáp án:** B
**Giải thích:** Runner quản lý các lượt gọi mô hình và công cụ.

### 10.2. Câu 2
`output_type` phù hợp khi nào?

A. Muốn tự động thanh toán  
B. Muốn đổi giao diện IDE  
C. Muốn đầu ra theo schema  
D. Muốn tăng tốc mạng  

**Đáp án:** C
**Giải thích:** Schema cho phép dùng kết quả như dữ liệu có cấu trúc.

### 10.3. Câu 3
Nối agent A → B trong Python khác handoff thế nào?

A. Không có mô hình  
B. Luôn chạy song song  
C. Luôn truy cập database  
D. Ứng dụng quyết định thứ tự, không cần mô hình lựa chọn chuyển giao  

**Đáp án:** D
**Giải thích:** Deterministic orchestration được quy định bằng code.

### 10.4. Câu 4
`Field(ge=1)` buộc điều kiện nào?

A. Giá trị ≥ 1  
B. Giá trị ≤ 1  
C. Giá trị là string  
D. Danh sách không rỗng  

**Đáp án:** A
**Giải thích:** Pydantic kiểm tra giá trị số theo giới hạn khai báo.

### 10.5. Câu 5
Schema đúng có đảm bảo dữ liệu món ăn đúng không?

A. Có với mọi model  
B. Không, cần xác minh nội dung  
C. Chỉ đúng khi chạy notebook  
D. Không cần xác thực  

**Đáp án:** B
**Giải thích:** Ràng buộc kiểu dữ liệu không kiểm chứng sự thật.

## 11. Tổng kết
Khai báo Agent, chạy bằng Runner, nối hai agent theo trình tự và định dạng kết quả bằng Pydantic. Thực hành thành công khi có bằng chứng chạy và bảng kiểm chứng, không chỉ đoạn code viết đúng cú pháp.
