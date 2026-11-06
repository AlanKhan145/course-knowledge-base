# Bài 02 — Thực hành có hướng dẫn: Handoffs: chuyển giao giữa các Agent

> **Module 05 · Lab** · Video: [xem từ 00:36:31](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=2191s).

**Tổng quan:** Xây agent chuyên môn và triage, hiểu handoff thật sự khác pipeline bằng code hay Agent.as_tool.

## 1. Lab: Bộ phận chăm sóc khách hàng

Tạo Support Agent xử lý câu hỏi đơn giản và Manager Agent xử lý khi vượt thẩm quyền. Dữ liệu trong ví dụ là giả định, không phải một hệ thống CRM thật.

## 2. Chạy cấu hình

```python
from pydantic import BaseModel
from agents import Agent, Runner, handoff, RunContextWrapper

class Escalation(BaseModel):
    reason: str
    urgency: str

manager = Agent(
    name="Manager",
    instructions="Tiếp nhận sự cố được chuyển cấp; nêu bước xử lý tiếp theo, không hứa hoàn tiền.",
)

def log_escalation(ctx: RunContextWrapper[None], data: Escalation):
    print(f"[AUDIT] {data.urgency}: {data.reason}")

support = Agent(
    name="Support",
    instructions="Giải thích câu hỏi thông thường. Khi gặp tranh chấp thanh toán, chuyển Manager.",
    handoffs=[handoff(agent=manager, on_handoff=log_escalation, input_type=Escalation)],
)

result = Runner.run_sync(support, "Tôi bị trừ tiền hai lần, cần người quản lý hỗ trợ")
print("Agent cuối:", result.last_agent.name)
print(result.final_output)
```

## 3. Case kiểm thử

| Đầu vào | Kỳ vọng |
| --- | --- |
| “Làm sao đổi mật khẩu?” | Support trả lời trực tiếp |
| “Tôi bị thanh toán trùng” | Có thể handoff Manager |
| “Xin chào” | Không handoff |
| “Hoàn tiền ngay 10 triệu!” | Không tự làm hành động tài chính |

## 4. Checkpoint

Xem `result.last_agent.name`, log trong callback và trace của cuộc chạy. Nếu case thanh toán không chuyển quyền, thay đổi instructions để giải thích rõ tiêu chí chuyển cấp. Nếu lạm dụng handoff, thu hẹp phạm vi của Manager.

## 5. Debug và an toàn

Không đưa email, số thẻ, mật khẩu hay token vào log `reason`. Callback ở ví dụ chỉ in log, chưa thực thi nghiệp vụ. Khi tích hợp hệ thống thực cần ẩn dữ liệu nhạy cảm, xác thực người dùng và kiểm tra quyền ngoài model.

## 6. Deliverable

File `support_handoff.py`, bảng kết quả bốn test, một biểu đồ handoff có hai agent và giải thích khác biệt giữa *handoff*, *sequential pipeline* và *agent-as-tool*.

## 7. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Đặc trưng chính của handoff là gì?

A. Chỉ ghi log  
B. Chỉ tạo schema Pydantic  
C. Chuyển quyền điều khiển sang agent chuyên môn  
D. Chỉ chuyển chuỗi qua Python  

**Đáp án:** C. **Giải thích:** Agent đích tiếp nhận nhiệm vụ trong runtime.

### Câu 2

Vì sao nên đặt `handoff_description` rõ ràng?

A. Bảo mật API key  
B. Thay thế JWT  
C. Tự chạy database  
D. Giúp router chọn đúng chuyên gia  

**Đáp án:** D. **Giải thích:** Mô tả là tín hiệu lựa chọn handoff cho model.

### Câu 3

`input_type` trong `handoff()` phục vụ việc nào?

A. Cấu trúc metadata model gửi khi handoff  
B. Mặc định thay toàn bộ input  
C. Luôn sửa lời nhắn người dùng  
D. Xóa session  

**Đáp án:** A. **Giải thích:** Metadata được parse và truyền cho `on_handoff`.

### Câu 4

Muốn biết agent cuối thực hiện trả lời, có thể đọc gì?

A. `.gitignore`  
B. `result.last_agent`  
C. `requirements.txt`  
D. `Field(ge=1)`  

**Đáp án:** B. **Giải thích:** RunResult lưu agent thực thi cuối cùng.

### Câu 5

Handoff có mặc nhiên xóa lịch sử?

A. Luôn xóa sạch  
B. Luôn mã hóa toàn bộ  
C. Không, cần thiết kế lọc lịch sử nếu cần  
D. Luôn ngắt kết nối  

**Đáp án:** C. **Giải thích:** Agent tiếp nhận có thể thấy context tương ứng nếu không lọc.


**Tài liệu tra cứu:** [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) · [1](https://openai.github.io/openai-agents-python/handoffs/)
