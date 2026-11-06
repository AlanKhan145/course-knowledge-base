# Bài 01 — Kiến thức nền tảng: Handoffs: chuyển giao giữa các Agent

> **Module 05 · Lesson** · Video: [xem từ 00:36:31](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=2191s).

**Tổng quan:** Xây agent chuyên môn và triage, hiểu handoff thật sự khác pipeline bằng code hay Agent.as_tool.

## 1. Mục tiêu

Tạo hai chuyên gia và một agent định tuyến, dùng `handoffs`, `handoff_description`, `handoff()` và metadata có cấu trúc khi chuyển quyền xử lý.

## 2. Handoff là gì?

Handoff chuyển **quyền điều khiển lượt xử lý** cho một agent khác. Khi một agent tiếp nhận handoff, nó sẽ trở thành agent đang chạy và có thể trả lời người dùng. Điều này khác với chạy hai agent tuần tự bằng Python hoặc `Agent.as_tool()`, nơi agent quản lý vẫn tiếp tục nắm quyền.

Ví dụ: người dùng hỏi “Vì sao Thế chiến II bùng nổ?”, router nên chuyển sang History Tutor; hỏi “Giải phương trình x+2=5” sẽ chuyển sang Math Tutor.

## 3. Cấu hình Handoff cơ bản

```python
from agents import Agent, Runner

math = Agent(name="Math Tutor", instructions="Giải toán theo các bước dễ hiểu")
history = Agent(name="History Tutor", instructions="Giải thích lịch sử trung lập, có mốc thời gian")
triage = Agent(
    name="Homework Router",
    instructions="Chuyển câu hỏi toán cho Math Tutor, lịch sử cho History Tutor.",
    handoffs=[math, history],
)
print(Runner.run_sync(triage, "Giải phương trình 2x = 8").final_output)
```

Khi có nhiều agent, tên và handoff description phải đủ rõ để model chọn đích. Có thể thêm `handoff_description="Nhận câu hỏi về toán học"` trong định nghĩa agent chuyên gia.

## 4. Handoff tùy chỉnh

`handoff()` cho phép khai báo callback `on_handoff` và schema metadata:

```python
from pydantic import BaseModel
from agents import Agent, Runner, handoff, RunContextWrapper

class EscalationData(BaseModel):
    reason: str

manager = Agent(name="Manager", instructions="Xử lý các yêu cầu cần quản lý hỗ trợ")

def on_escalate(ctx: RunContextWrapper[None], input_data: EscalationData):
    print("Lý do chuyển cấp:", input_data.reason)

support = Agent(
    name="Support",
    instructions="Trả lời vấn đề cơ bản; nếu ngoài quyền hãy chuyển quản lý và nêu lý do.",
    handoffs=[handoff(agent=manager, on_handoff=on_escalate, input_type=EscalationData)],
)
```

`input_type` là schema **tham số metadata của hành động handoff**, không phải thay thế lời nhắn ban đầu hoặc toàn bộ context. `on_handoff` thuận tiện để ghi nhận lý do; không nên đặt hành động nhạy cảm thiếu authorization ở callback.

## 5. Điều gì được chuyển tiếp?

Agent đích thường nhận lịch sử liên quan để giải quyết yêu cầu. Nếu chứa thông tin không nên lộ, cần dùng bộ lọc/hạn chế lịch sử và thiết kế phân quyền. Handoff không mặc nhiên xóa context. Dữ liệu context do ứng dụng quản lý là một khái niệm khác với lịch sử model nhìn thấy.

## 6. Những lỗi phổ biến

Handoff quá sớm → agent đích thiếu dữ liệu; chuyển nhầm → `handoff_description` mơ hồ; vòng lặp chuyển giao → agent quay qua lại; quá nhiều agent → chi phí và latency tăng. Theo dõi trace để biết chính xác agent nào nhận nhiệm vụ và giới hạn `max_turns` để tránh lặp vô hạn.

## 7. Tổng kết

Handoff phù hợp khi agent chuyên môn cần **tiếp quản** tương tác. Nếu chỉ cần lấy một kết quả con rồi trở về router, dùng agent-as-tool thường hợp lý hơn.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Đặc trưng chính của handoff là gì?

A. Chuyển quyền điều khiển sang agent chuyên môn  
B. Chỉ ghi log  
C. Chỉ tạo schema Pydantic  
D. Chỉ chuyển chuỗi qua Python  

**Đáp án:** A. **Giải thích:** Agent đích tiếp nhận nhiệm vụ trong runtime.

### Câu 2

Vì sao nên đặt `handoff_description` rõ ràng?

A. Bảo mật API key  
B. Giúp router chọn đúng chuyên gia  
C. Thay thế JWT  
D. Tự chạy database  

**Đáp án:** B. **Giải thích:** Mô tả là tín hiệu lựa chọn handoff cho model.

### Câu 3

`input_type` trong `handoff()` phục vụ việc nào?

A. Mặc định thay toàn bộ input  
B. Luôn sửa lời nhắn người dùng  
C. Cấu trúc metadata model gửi khi handoff  
D. Xóa session  

**Đáp án:** C. **Giải thích:** Metadata được parse và truyền cho `on_handoff`.

### Câu 4

Muốn biết agent cuối thực hiện trả lời, có thể đọc gì?

A. `.gitignore`  
B. `requirements.txt`  
C. `Field(ge=1)`  
D. `result.last_agent`  

**Đáp án:** D. **Giải thích:** RunResult lưu agent thực thi cuối cùng.

### Câu 5

Handoff có mặc nhiên xóa lịch sử?

A. Không, cần thiết kế lọc lịch sử nếu cần  
B. Luôn xóa sạch  
C. Luôn mã hóa toàn bộ  
D. Luôn ngắt kết nối  

**Đáp án:** A. **Giải thích:** Agent tiếp nhận có thể thấy context tương ứng nếu không lọc.


**Tài liệu tra cứu:** [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) · [1](https://openai.github.io/openai-agents-python/handoffs/)
