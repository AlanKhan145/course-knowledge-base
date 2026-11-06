# Bài 03 — Thực hành Short-Term Memory với InMemorySaver

## 1. Tổng quan

`InMemorySaver` là checkpointer lưu trong RAM của tiến trình Python. Nó phù hợp khi học tập và test logic vì không cần database. Tuy nhiên, toàn bộ checkpoint sẽ biến mất khi tiến trình kết thúc hoặc kernel Jupyter restart.

## 2. Mục tiêu

- Tạo chatbot nhiều lượt và kiểm tra tên người dùng được duy trì trong cùng thread.
- In lịch sử hội thoại sau mỗi lượt.
- Chứng minh tác động của việc tạo checkpointer mới và restart chương trình.
- Phân biệt restart interpreter với gọi lại `graph.invoke` trong cùng tiến trình.

## 3. Chuẩn bị

```bash
python -m pip install -U langgraph langchain-openai python-dotenv
```

Tạo `.env` chứa `OPENAI_API_KEY` và `OPENAI_MODEL` hợp lệ. Giữ file này ngoài Git và không chia sẻ lên Drive. Có thể chạy qua terminal hoặc notebook; trong notebook, **restart kernel** mới mô phỏng mất RAM, chứ chỉ chạy lại một cell đôi khi tạo checkpointer mới mà thôi.

## 4. Các bước thực hành

Tạo file `inmemory_chat.py`:

```python
import os
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langgraph.graph import StateGraph, MessagesState, START, END
from langgraph.checkpoint.memory import InMemorySaver

load_dotenv()
llm = ChatOpenAI(model=os.environ['OPENAI_MODEL'], temperature=0)

def chat(state: MessagesState):
    response = llm.invoke(state['messages'])
    return {'messages': [response]}

builder = StateGraph(MessagesState)
builder.add_node('chat', chat)
builder.add_edge(START, 'chat')
builder.add_edge('chat', END)
saver = InMemorySaver()
graph = builder.compile(checkpointer=saver)

config = {'configurable': {'thread_id': 'demo-thread-1'}}
questions = [
    'Xin chào, tôi tên Khánh.',
    'Tôi đang học LangGraph và PostgreSQL.',
    'Tên tôi là gì và tôi đang học công nghệ gì?',
]

for question in questions:
    output = graph.invoke({'messages': [('user', question)]}, config=config)
    print('User:', question)
    print('AI:', output['messages'][-1].content)
    print('Số messages:', len(graph.get_state(config).values['messages']))
```

`('user', question)` là cách biểu diễn message hợp lệ khi invoke graph; `MessagesState` sẽ chuyển thành đối tượng message. Sau ba lượt tiêu chuẩn, history có cả user và assistant messages. Số lượng có thể lớn hơn nếu graph được mở rộng bằng các node khác.

## 5. Kiểm tra trạng thái trong RAM

Thêm cuối file:

```python
history = graph.get_state(config).values['messages']
for idx, message in enumerate(history, start=1):
    print(idx, message.type, message.content[:120])
```

Dữ liệu đọc được nằm trong state của **graph + saver cụ thể**. Nếu tạo `InMemorySaver()` mới rồi compile graph mới, bộ nhớ của đối tượng mới rỗng ngay cả khi process vẫn đang chạy.

## 6. Thử nghiệm mất dữ liệu

1. Chạy file, kiểm tra lịch sử có tên Khánh.
2. Thoát hẳn script; chạy một script khác xây đúng graph với `InMemorySaver` mới.
3. **Không** gửi lại câu giới thiệu tên; chỉ gửi “Tên tôi là gì?” với cùng `thread_id`.
4. Kiểm tra `get_state`: history cũ đã mất vì RAM thuộc tiến trình trước không tồn tại.

Có thể so sánh theo bảng:

| Tình huống | Saver | Thread ID | History cũ có thể truy xuất? |
| --- | --- | --- | --- |
| Trong cùng tiến trình | Cùng `InMemorySaver` | Cùng | Có |
| Thread khác | Cùng `InMemorySaver` | Khác | Không |
| Khởi động tiến trình mới | Saver mới | Cùng chuỗi ID | Không |

## 7. Debug và lỗi thường gặp

- `KeyError: OPENAI_MODEL`: chưa khai báo tên model trong `.env`; khởi tạo bằng model bạn có quyền dùng.
- Lỗi xác thực: kiểm tra `OPENAI_API_KEY`, không in key ra log.
- `get_state` rỗng: dùng nhầm thread ID, saver mới hoặc chưa `invoke` vào thread.
- “Chạy lại cell rồi quên”: có thể cell đã khởi tạo lại `saver` làm mất state; thử giữ saver ở cell độc lập.
- Không nên suy từ câu bot trả lời: hãy xem trực tiếp `len(messages)` và nội dung state.

## 8. Kết quả cần nộp

Một file Python chạy được, log ba lượt, log số message, và giải thích bằng 3–5 câu vì sao memory mất sau restart. Có thể chụp terminal trước/sau nhưng không để lộ token/API key.

## 9. Câu hỏi ôn tập

**Câu 1.** Lý do chính không dùng `InMemorySaver` làm kho bền vững là gì?  
A. Không có khái niệm thread.  
B. Không hoạt động với LangGraph.  
C. Luôn chỉ lưu 1 message.  
D. Trạng thái mất khi process dừng.  
**Đáp án: D.** RAM trong tiến trình không đảm bảo persistence qua restart.

**Câu 2.** Chạy lại chương trình, giữ nguyên chuỗi `thread_id` nhưng tạo saver mới, kết quả?  
A. Tự khôi phục state từ cloud.  
B. Không có history trước đó.  
C. Có history nhờ ID cố định.  
D. Luôn báo lỗi biên dịch.  
**Đáp án: B.** ID chỉ là khóa tra cứu, không phải nơi chứa dữ liệu.

**Câu 3.** Để đọc lịch sử, nên dùng gì?  
A. `graph.get_state(config).values['messages']`  
B. `print(llm)`  
C. `os.getenv('OPENAI_MODEL')`  
D. `Docker ps`  
**Đáp án: A.** Snapshot chứa các message hiện lưu trong thread.

**Câu 4.** Hai đoạn code cùng process nhưng dùng `InMemorySaver()` khác nhau có chia sẻ lịch sử?  
A. Luôn luôn.  
B. Khi temperature bằng 0.  
C. Không, trừ khi có cơ chế truyền/chia sẻ trạng thái riêng.  
D. Có nếu tên node giống nhau.  
**Đáp án: C.** Hai đối tượng saver khác nhau có kho RAM riêng.

**Câu 5.** Khi debug kết quả bot lạ, kiểm tra đầu tiên thích hợp là gì?  
A. Màu terminal.  
B. Tên file notebook.  
C. Kích thước màn hình.  
D. `thread_id` và history thực sự trong snapshot.  
**Đáp án: D.** Chúng quyết định ngữ cảnh có tồn tại trong ứng dụng hay không.

## 10. Tổng kết

`InMemorySaver` giúp chứng minh memory nhanh nhưng không lưu bền; khả năng khôi phục sau restart là lý do để chuyển sang PostgreSQL.
