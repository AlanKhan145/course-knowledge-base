# Bài 01 — Kiến thức nền tảng: Multiturn Conversations: hội thoại nhiều lượt

> **Module 09 · Lesson** · Video: [xem từ 01:14:47](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=4487s).

**Tổng quan:** Duy trì lịch sử hội thoại bằng input items hoặc session, nhận biết chi phí context và tránh mất trạng thái.

## 1. Mục tiêu

Xây một vòng chat trong terminal, phân biệt từng lượt độc lập với hội thoại duy trì context và chọn cơ chế quản lý lịch sử phù hợp.

## 2. Một lượt so với nhiều lượt

Nếu mỗi lần gọi `Runner.run_sync(agent, user_message)` là một run hoàn toàn mới và không truyền lịch sử, agent không tự nhớ câu trước. Người dùng có thể hỏi “Tôi thích Python”, tiếp theo hỏi “Tại sao lại thích ngôn ngữ đó?” và agent không biết “ngôn ngữ đó” là gì nếu không có context.

Lịch sử cần bao gồm thông điệp và những item cần thiết liên quan đến tool/handoff để model hiểu đúng trạng thái. Không nên chỉ nối một chuỗi dài các câu trả lời vì có thể mất cấu trúc role/tool.

## 3. Quản lý thủ công qua result history

```python
from agents import Agent, Runner

agent = Agent(name="Tutor", instructions="Trả lời bằng tiếng Việt")
history = []
for msg in ["Tôi đang học Python", "Tôi vừa nói đang học ngôn ngữ gì?"]:
    history.append({"role": "user", "content": msg})
    result = Runner.run_sync(agent, history)
    history = result.to_input_list()
    print(result.final_output)
```

`to_input_list()` giữ các item thích hợp để truyền trở lại runner. Trong hệ thống lớn, ứng dụng phải quản lý việc lưu trữ, cắt lịch sử, quyền truy cập và xử lý concurrency.

## 4. Sessions do SDK quản lý

Một cơ chế khác là dùng `SQLiteSession` để gắn lịch sử với một ID:

```python
from agents import Agent, Runner, SQLiteSession

agent = Agent(name="Tutor", instructions="Bạn là giáo viên Python")
session = SQLiteSession("student-demo", "agent_history.db")

first = Runner.run_sync(agent, "Tôi đang học Python", session=session)
second = Runner.run_sync(agent, "Tôi đang học ngôn ngữ nào?", session=session)
print(second.final_output)
```

Session giúp quản lý lịch sử lượt chat. Trong production, ID phải được gắn với user đã xác thực, không dùng một session chung cho mọi người. Khi dùng session, thông thường chỉ đưa **input mới**, tránh đính kèm lại toàn bộ lịch sử làm nhân đôi nội dung.

## 5. Các cách giữ context

| Chiến lược | Lưu ở đâu | Tình huống |
| --- | --- | --- |
| `to_input_list()` | Ứng dụng | Cần kiểm soát chi tiết |
| `session=` | Session store SDK | Chat nhiều lượt liên tục |
| `previous_response_id` | Responses API | Nối lượt trên server |
| `conversation_id` | Conversations API | State do service quản lý |

Chọn một cách chính cho từng cuộc chat, tránh trộn nhiều cơ chế mà không xác định cách đồng bộ.

## 6. Thử thách thực tế

Khi hội thoại dài, chi phí context, tính riêng tư và nguy cơ nhầm lẫn tăng. Với hệ thống hỗ trợ khách hàng, có thể cần tóm tắt thông tin ổn định, xóa lịch sử cũ không liên quan hoặc tách dữ liệu hồ sơ thành context ứng dụng. Bộ nhớ hội thoại không thay thế cơ sở dữ liệu chính thức.

## 7. Tổng kết

Hội thoại liên tục là quản lý trạng thái; không chỉ là vòng lặp đọc `input()`. Cần biết ai sở hữu session, dữ liệu nào được lưu và khi nào lịch sử được đưa trở lại mô hình.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Vì sao gọi `Runner.run_sync(agent, message)` độc lập không đủ cho chat nhiều lượt?

A. Vì không tự đưa lịch sử cũ vào run mới  
B. Vì Python không hỗ trợ loop  
C. Vì structured output bắt buộc  
D. Vì model không có tokens  

**Đáp án:** A. **Giải thích:** Context phải được lưu hoặc chuyển tiếp có chủ đích.

### Câu 2

Cách nào quản lý history bằng file SQLite cục bộ?

A. `WebSearchTool`  
B. `SQLiteSession`  
C. `Field(ge=1)`  
D. `trace()`  

**Đáp án:** B. **Giải thích:** SDK có session implementation lưu lịch sử.

### Câu 3

`result.to_input_list()` phù hợp khi nào?

A. Cần làm tròn số  
B. Đổi màu UI  
C. Ứng dụng tự quản lý và chuyển tiếp lịch sử  
D. Tạo file ZIP  

**Đáp án:** C. **Giải thích:** Nó tạo item history có thể đưa lại vào Runner.

### Câu 4

Để nhiều user không thấy conversation của nhau, cần gì?

A. Một session ID chung  
B. Một prompt dài hơn  
C. Cùng file `requirements.txt`  
D. Session tách biệt và authorization  

**Đáp án:** D. **Giải thích:** Định danh và phân quyền trạng thái là việc của backend.

### Câu 5

Vì sao không nên lặp lại toàn bộ history khi đã dùng `session=`?

A. Có thể nhân đôi context  
B. Sẽ xóa database  
C. Làm key tự đổi  
D. Mất quyền sử dụng SDK  

**Đáp án:** A. **Giải thích:** Hai cơ chế state có thể chồng chéo.


**Tài liệu tra cứu:** [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) · [1](https://openai.github.io/openai-agents-python/sessions/) · [2](https://openai.github.io/openai-agents-python/running_agents/)
