# Bài 01 — Kiến thức nền tảng: Context Management: dữ liệu ứng dụng và dữ liệu model

> **Module 10 · Lesson** · Video: [xem từ 01:23:08](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=4988s).

**Tổng quan:** Phân biệt RunContextWrapper local với lịch sử model, dùng context cho hồ sơ và dependency một cách an toàn.

## 1. Mục tiêu

Giải thích hai loại context, dùng `RunContextWrapper` trong function tool và tách dữ liệu bảo mật khỏi nội dung gửi trực tiếp cho LLM.

## 2. Hai ý nghĩa của Context

`context` trong SDK có thể là đối tượng Python do ứng dụng cung cấp, chứa người dùng đã xác thực, cấu hình hoặc các dependency. Đó là **local context**, không được đưa nguyên đối tượng cho mô hình theo mặc định. Loại thứ hai là **LLM context**: prompt, lịch sử, tool output và các thông điệp mà model thực sự nhận.

| Vấn đề | Local context | Model context |
| --- | --- | --- |
| Ai truy cập? | Python tool, callback, hook | LLM |
| Ví dụ | `user_id`, client DB, permissions | Câu hỏi, lịch sử, kết quả search |
| Có tự xuất hiện trong prompt không? | Không | Có |
| Có nên chứa secrets? | Có thể chứa reference an toàn nhưng kiểm soát truy cập | Không nên |

## 3. Khai báo dữ liệu Context

```python
from dataclasses import dataclass
from agents import Agent, Runner, function_tool, RunContextWrapper

@dataclass
class UserContext:
    user_id: str
    display_name: str
    is_admin: bool = False

@function_tool
def get_user_name(ctx: RunContextWrapper[UserContext]) -> str:
    """Lấy tên hiển thị của người dùng đã xác thực trong ứng dụng."""
    return ctx.context.display_name

agent = Agent[UserContext](
    name="Personal Assistant",
    instructions="Khi cần tên người dùng, gọi get_user_name.",
    tools=[get_user_name],
)
profile = UserContext(user_id="demo_01", display_name="Minh")
result = Runner.run_sync(agent, "Tên hiển thị của tôi là gì?", context=profile)
print(result.final_output)
```

Để dùng local context trong code, khai báo kiểu tổng quát `RunContextWrapper[T]`; các agent, tool và hook cùng run nên dùng loại context tương thích. Tránh nhầm rằng model nhìn thấy `ctx.context` trực tiếp; model chỉ thấy **kết quả tool trả ra** khi có tool call.

## 4. Quyền truy cập tài nguyên

Giả sử tool `get_order(order_id)` truy vấn database. `order_id` do model sinh ra không đáng tin. Backend cần dùng `ctx.context.user_id` đã xác thực để lọc record: chỉ cho lấy đơn thuộc user. Đừng tin prompt “Tôi chỉ lấy đơn của mình”.

## 5. Dynamic Instructions và tính cá nhân hóa

Bạn có thể tạo hướng dẫn động dựa trên context không nhạy cảm. Tuy nhiên việc đưa trực tiếp hồ sơ người dùng vào prompt có rủi ro lộ dữ liệu. Chỉ cung cấp đúng dữ kiện model cần để hoàn thành câu hỏi, và cân nhắc dùng tool truy vấn có kiểm soát thay vì nạp tất cả vào prompt.

## 6. Tối ưu context window

Hội thoại dài cần chọn lọc lịch sử, tóm tắt và tránh đưa toàn bộ dữ liệu database vào context. Khi tóm tắt, phân biệt dữ kiện đã được user xác nhận với suy đoán của model. Không sử dụng tóm tắt làm “nguồn chân lý” cho giao dịch quan trọng.

## 7. Tổng kết

Local context là vùng dữ liệu tin cậy do app sở hữu; model context là thông tin model có thể đọc. Đường nối giữa hai vùng chính là tool/hướng dẫn, cần được kiểm soát chặt.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1

`RunContextWrapper.context` là loại dữ liệu nào?

A. Dữ liệu Python cục bộ do ứng dụng cung cấp  
B. Toàn bộ prompt đã gửi  
C. Bắt buộc là web URL  
D. Một loại trace  

**Đáp án:** A. **Giải thích:** Local context không tự được gửi tới model.

### Câu 2

Model muốn đọc một trường trong local context, cách thiết kế phù hợp?

A. In toàn bộ object vào prompt  
B. Đăng ký tool có kiểm soát và trả trường cần thiết  
C. Cho model quyền sửa database  
D. Bật streaming  

**Đáp án:** B. **Giải thích:** Tool là cầu nối có quyền hạn.

### Câu 3

Ai nên kiểm tra `order_id` thuộc về user được xác thực?

A. Chỉ model  
B. Tên agent  
C. Backend và truy vấn DB theo `ctx.context.user_id`  
D. Người dùng trong prompt  

**Đáp án:** C. **Giải thích:** Không tin tham số do model sinh ra như chứng cứ quyền sở hữu.

### Câu 4

Khi hội thoại dài, giải pháp nào hợp lý?

A. Nạp nguyên database vào prompt  
B. Tăng vô hạn token  
C. Bỏ hết input trước  
D. Lọc/tóm tắt lịch sử và giữ dữ kiện đã xác thực  

**Đáp án:** D. **Giải thích:** Context giới hạn cả chi phí và tính liên quan.

### Câu 5

Một cờ `verified=True` có thể lấy từ đâu khi triển khai thật?

A. Cơ chế xác thực của server  
B. LLM tự sinh  
C. Lời yêu cầu của user  
D. URL query không ký  

**Đáp án:** A. **Giải thích:** Thông tin trusted phải đến từ tầng ứng dụng.


**Tài liệu tra cứu:** [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) · [1](https://openai.github.io/openai-agents-python/context/)
