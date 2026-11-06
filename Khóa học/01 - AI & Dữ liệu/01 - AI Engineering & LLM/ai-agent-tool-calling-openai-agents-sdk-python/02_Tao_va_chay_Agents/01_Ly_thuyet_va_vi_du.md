# Creating Agents, Runner và Structured Output

**Loại:** Lesson | **Trình độ:** Cơ bản → Trung cấp | **Thời điểm học:** 00:16:10

## 1. Tóm tắt
Khai báo Agent, chạy bằng Runner, nối hai agent theo trình tự và định dạng kết quả bằng Pydantic.

## 2. Mục tiêu học tập
- Giải thích được kiến thức cốt lõi của **Creating Agents, Runner và Structured Output** bằng ví dụ độc lập.
- Phân biệt được trường hợp sử dụng đúng và rủi ro triển khai thường gặp.
- Chạy hoặc kiểm tra được đoạn Python minh họa theo yêu cầu của bài.
- Phân tích kết quả, xác định lỗi và đề xuất cách sửa có căn cứ.

## 3. Bối cảnh và vấn đề
Từ một ứng dụng mô hình chỉ phản hồi văn bản, chúng ta muốn xây dựng hệ thống có thể xử lý nhiệm vụ, gọi công cụ khi phù hợp, báo cáo trạng thái và giữ đúng quyền truy cập. Bài học giải thích từng khái niệm bằng ví dụ có thể kiểm tra, không phụ thuộc vào một UI cụ thể.

## 4. Kiến thức cốt lõi

### 4.1. Tạo Agent và cấu hình hành vi
`Agent` mô tả tên, `instructions`, model và các công cụ hoặc handoff tùy chọn. `instructions` là phạm vi hành vi của agent, không phải bảo đảm tuyệt đối. `Runner.run` điều phối việc gọi mô hình và thu `final_output`.

Có thể dùng `Runner.run_sync` trong script đồng bộ; nếu đang ở sự kiện asyncio (ví dụ notebook) dùng `await Runner.run(...)` để tránh lồng event loop.

### 4.2. Orchestration tuần tự
Cách đơn giản nhất để hai agent hợp tác là chạy tác nhân thứ nhất, lấy `final_output` đưa vào tác nhân thứ hai. Đây là điều phối bằng mã Python (deterministic orchestration), khác với `handoff` nơi mô hình lựa chọn chuyển quyền điều khiển.

Ví dụ: tác nhân A tạo câu chuyện cười theo chủ đề; B dịch sang ngôn ngữ khác. Mối quan hệ A → B không yêu cầu hai agent tự thương lượng.

### 4.3. Structured output với Pydantic
Đầu ra chuỗi tự nhiên dễ đọc nhưng khó sử dụng ổn định trong ứng dụng. `BaseModel` khai báo kiểu dữ liệu: title (`str`), ingredients (`list[str]`), cook_minutes (`int`) và servings (`int`). Đặt `output_type=Recipe` để SDK yêu cầu model trả kết quả theo schema.

Lược đồ giúp xác thực **cấu trúc**, không tự bảo đảm tính đúng về dinh dưỡng, số liệu, chất lượng công thức hay nguồn gốc dữ liệu. Kiểm tra nội dung ở lớp ứng dụng trước khi lưu vào database.

## 5. Ví dụ Python
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

## 6. Phân tích ví dụ
`output_type` định nghĩa schema; `result.final_output` trở thành đối tượng Python đã xác thực kiểu. `Field(ge=...)` đặt ràng buộc số tối thiểu. Dùng `model_dump()` khi cần serialize thành dictionary.

**Lưu ý khi chạy:** Cần cấu hình `OPENAI_API_KEY`, cài `openai-agents` và dùng model mà tài khoản có quyền truy cập. Lời gọi API có thể phát sinh phí. Các ví dụ không thay thế bước kiểm tra quyền và dữ liệu trong ứng dụng thực.

## 7. Lỗi thường gặp và cách tránh
- **Sai lầm:** Coi `instructions` như cơ chế bảo mật tuyệt đối. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.
- **Sai lầm:** Coi JSON hợp lệ là dữ liệu đáng tin tuyệt đối. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.
- **Sai lầm:** Dùng `Runner.run_sync` bên trong vòng lặp asyncio đang hoạt động. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.

## 8. Thực hành ngắn
Tạo hai agent: một tạo công thức món ăn và một viết bản tóm tắt mua sắm, truyền `Recipe` thành dữ liệu đầu vào; so sánh với quy trình trả lời bằng chuỗi thuần.

## 9. Câu hỏi ôn tập trắc nghiệm
### 9.1. Câu 1
Thành phần chạy vòng lặp agent là gì?

A. BaseModel  
B. Runner  
C. Markdown  
D. dotenv  

**Đáp án:** B
**Giải thích:** Runner quản lý các lượt gọi mô hình và công cụ.

### 9.2. Câu 2
`output_type` phù hợp khi nào?

A. Muốn tự động thanh toán  
B. Muốn đổi giao diện IDE  
C. Muốn đầu ra theo schema  
D. Muốn tăng tốc mạng  

**Đáp án:** C
**Giải thích:** Schema cho phép dùng kết quả như dữ liệu có cấu trúc.

### 9.3. Câu 3
Nối agent A → B trong Python khác handoff thế nào?

A. Không có mô hình  
B. Luôn chạy song song  
C. Luôn truy cập database  
D. Ứng dụng quyết định thứ tự, không cần mô hình lựa chọn chuyển giao  

**Đáp án:** D
**Giải thích:** Deterministic orchestration được quy định bằng code.

### 9.4. Câu 4
`Field(ge=1)` buộc điều kiện nào?

A. Giá trị ≥ 1  
B. Giá trị ≤ 1  
C. Giá trị là string  
D. Danh sách không rỗng  

**Đáp án:** A
**Giải thích:** Pydantic kiểm tra giá trị số theo giới hạn khai báo.

### 9.5. Câu 5
Schema đúng có đảm bảo dữ liệu món ăn đúng không?

A. Có với mọi model  
B. Không, cần xác minh nội dung  
C. Chỉ đúng khi chạy notebook  
D. Không cần xác thực  

**Đáp án:** B
**Giải thích:** Ràng buộc kiểu dữ liệu không kiểm chứng sự thật.

## 10. Tổng kết
Khai báo Agent, chạy bằng Runner, nối hai agent theo trình tự và định dạng kết quả bằng Pydantic. Mấu chốt là chọn mức tự động hóa vừa đủ, giữ dữ liệu có căn cứ và thử nghiệm hành vi thực tế trước khi đưa vào hệ thống phục vụ người dùng.

## 11. Đọc thêm
- [Tài liệu SDK chính thức](https://openai.github.io/openai-agents-python/)
- [Quickstart Python](https://openai.github.io/openai-agents-python/quickstart/)
