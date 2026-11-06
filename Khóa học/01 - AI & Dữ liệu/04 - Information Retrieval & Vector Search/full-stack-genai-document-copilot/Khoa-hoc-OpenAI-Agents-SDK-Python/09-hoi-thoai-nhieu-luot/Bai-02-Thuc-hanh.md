# Bài 02 — Thực hành có hướng dẫn: Multiturn Conversations: hội thoại nhiều lượt

> **Module 09 · Lab** · Video: [xem từ 01:14:47](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=4487s).

**Tổng quan:** Duy trì lịch sử hội thoại bằng input items hoặc session, nhận biết chi phí context và tránh mất trạng thái.

## 1. Đề bài

Tạo chatbot terminal nhiều lượt nhớ chủ đề học hiện tại. Không dùng database sản xuất; lưu tạm trong SQLite file riêng trên máy.

## 2. Code

```python
from agents import Agent, Runner, SQLiteSession

agent = Agent(name="Python Tutor", instructions="Giải thích Python bằng tiếng Việt; dùng ngữ cảnh hội thoại.")
session = SQLiteSession("terminal-user-01", "chat_demo.db")

print("Nhập /quit để kết thúc")
while True:
    msg = input("Bạn: ").strip()
    if msg == "/quit":
        break
    if not msg:
        continue
    answer = Runner.run_sync(agent, msg, session=session)
    print("Agent:", answer.final_output)
```

## 3. Chuỗi test

Gõ “Tôi đang học list comprehension”, tiếp theo “Cho ví dụ”, sau đó “Tôi đang học chủ đề gì?”. Quan sát sự gắn kết giữa các lượt. Khởi động lại chương trình và kiểm tra session có tiếp tục lưu dữ liệu từ file SQLite hay không.

## 4. Kiểm thử phân tách người dùng

Đổi session ID từ `terminal-user-01` sang `terminal-user-02`. User thứ hai không nên thấy lịch sử của user thứ nhất. Không áp dụng literal session ID tĩnh cho ứng dụng thật; phải tạo ID gắn với user xác thực.

## 5. Debug

Nếu model quên, kiểm tra có tái sử dụng **cùng** session ID và database path. Nếu câu trả lời có lịch sử trùng lặp, kiểm tra có vừa truyền `session=...` vừa truyền toàn bộ `to_input_list()` cũ hay không.

## 6. Sản phẩm bàn giao

`multiturn_chat.py` và bảng 5 lượt thử. Trình bày các trạng thái đặc biệt: tạo session mới, xóa conversation theo yêu cầu, mất mạng giữa lượt, và hai cửa sổ sử dụng cùng một session.

## 7. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Vì sao gọi `Runner.run_sync(agent, message)` độc lập không đủ cho chat nhiều lượt?

A. Vì Python không hỗ trợ loop  
B. Vì structured output bắt buộc  
C. Vì không tự đưa lịch sử cũ vào run mới  
D. Vì model không có tokens  

**Đáp án:** C. **Giải thích:** Context phải được lưu hoặc chuyển tiếp có chủ đích.

### Câu 2

Cách nào quản lý history bằng file SQLite cục bộ?

A. `WebSearchTool`  
B. `Field(ge=1)`  
C. `trace()`  
D. `SQLiteSession`  

**Đáp án:** D. **Giải thích:** SDK có session implementation lưu lịch sử.

### Câu 3

`result.to_input_list()` phù hợp khi nào?

A. Ứng dụng tự quản lý và chuyển tiếp lịch sử  
B. Cần làm tròn số  
C. Đổi màu UI  
D. Tạo file ZIP  

**Đáp án:** A. **Giải thích:** Nó tạo item history có thể đưa lại vào Runner.

### Câu 4

Để nhiều user không thấy conversation của nhau, cần gì?

A. Một session ID chung  
B. Session tách biệt và authorization  
C. Một prompt dài hơn  
D. Cùng file `requirements.txt`  

**Đáp án:** B. **Giải thích:** Định danh và phân quyền trạng thái là việc của backend.

### Câu 5

Vì sao không nên lặp lại toàn bộ history khi đã dùng `session=`?

A. Sẽ xóa database  
B. Làm key tự đổi  
C. Có thể nhân đôi context  
D. Mất quyền sử dụng SDK  

**Đáp án:** C. **Giải thích:** Hai cơ chế state có thể chồng chéo.


**Tài liệu tra cứu:** [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) · [1](https://openai.github.io/openai-agents-python/sessions/) · [2](https://openai.github.io/openai-agents-python/running_agents/)
