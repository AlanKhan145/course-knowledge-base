# Bài 07 — Lab: kiểm chứng persistence qua khởi động lại

## 1. Bài toán

Một chatbot demo thường trông như “có trí nhớ” khi tất cả lượt chạy trong cùng Python process. Lab này bắt buộc **dừng tiến trình**, dựng lại graph từ đầu và chứng minh state được lấy từ PostgreSQL thay vì từ biến RAM còn sót.

## 2. Mục tiêu và điều kiện

- Tạo state tại thread A, sau đó thoát process.
- Khởi động process mới và đọc history trước khi gọi LLM.
- Kiểm tra thread B không có nội dung thread A.
- Kiểm tra restart container Postgres mà không xóa volume.

Cần hoàn thành Bài 05–06, có `compose.yaml`, `.env` và Python dependencies.

## 3. Bước 1 — Ghi dữ liệu

Tạo `write_state.py`:

```python
import os
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langgraph.checkpoint.postgres import PostgresSaver
from langgraph.graph import StateGraph, MessagesState, START, END

load_dotenv()
llm = ChatOpenAI(model=os.environ['OPENAI_MODEL'], temperature=0)

def chat(state: MessagesState):
    return {'messages': [llm.invoke(state['messages'])]}

builder = StateGraph(MessagesState)
builder.add_node('chat', chat)
builder.add_edge(START, 'chat')
builder.add_edge('chat', END)

config = {'configurable': {'thread_id': 'lab-restart-A'}}
with PostgresSaver.from_conn_string(os.environ['POSTGRES_URI']) as saver:
    saver.setup()
    graph = builder.compile(checkpointer=saver)
    graph.invoke({'messages': [('user', 'Tôi là Minh, thích học Python.')]}, config)
    print('Trước restart:', len(graph.get_state(config).values['messages']))
```

Chạy `python write_state.py`, sau đó đảm bảo chương trình kết thúc. Có thể kiểm tra DB vẫn healthy bằng `docker compose ps`.

## 4. Bước 2 — Đọc từ process khác

Tạo `read_state.py`:

```python
import os
from dotenv import load_dotenv
from langgraph.graph import StateGraph, MessagesState, START, END
from langgraph.checkpoint.postgres import PostgresSaver

load_dotenv()

def placeholder(state: MessagesState):
    return {'messages': []}  # Không gọi model; chỉ nhằm biên dịch graph

builder = StateGraph(MessagesState)
builder.add_node('chat', placeholder)
builder.add_edge(START, 'chat')
builder.add_edge('chat', END)

with PostgresSaver.from_conn_string(os.environ['POSTGRES_URI']) as saver:
    graph = builder.compile(checkpointer=saver)
    for thread_id in ['lab-restart-A', 'lab-restart-B']:
        config = {'configurable': {'thread_id': thread_id}}
        snapshot = graph.get_state(config)
        history = snapshot.values.get('messages', [])
        print(thread_id, '->', [m.content for m in history])
```

Chạy `python read_state.py`. Thread A phải có câu giới thiệu “Minh”; thread B chưa được ghi dữ liệu thì history rỗng. `placeholder` không chạy vì chỉ dùng `get_state` để đọc checkpoint; đây là test persistence thuần, không phụ thuộc đầu ra ngôn ngữ.

## 5. Bước 3 — Restart DB an toàn

```bash
docker compose stop
docker compose start
docker compose ps
python read_state.py
```

Nếu có volume và kết nối ổn, history vẫn tồn tại. Chỉ thực hiện `docker compose down -v` nếu bạn chủ động muốn phá hủy toàn bộ dữ liệu thử nghiệm.

## 6. Checkpoint và kết quả kỳ vọng

| Kiểm tra | Tiêu chí thành công |
| --- | --- |
| Ghi thread A | Snapshot chứa message giới thiệu |
| Thoát Python | Process đã kết thúc hẳn |
| Chạy file read độc lập | Đọc lại được message cũ của A |
| Đọc thread B | Không có lịch sử A |
| Restart DB giữ volume | History A vẫn còn |

## 7. Debug có hệ thống

Nếu A rỗng: kiểm tra `thread_id` có đúng chuỗi và đúng database/port; hãy chắc chắn `write_state.py` hoàn thành thành công. Nếu không kết nối: xem `docker compose ps` và log. Nếu B có dữ liệu A: kiểm tra đã vô tình gửi cùng `thread_id` hoặc đọc nhầm config. Nếu `get_state` lỗi schema: chạy `saver.setup()` ở bước khởi tạo database.

## 8. Deliverable

Nộp `write_state.py`, `read_state.py`, `compose.yaml` và log minh chứng 5 điều kiện thành công. Che dữ liệu nhạy cảm trong log. Một lần chạy đúng phải chứng minh **bộ nhớ bền, phân tách thread và đọc state không cần gọi model**.

## 9. Câu hỏi ôn tập

**Câu 1.** Vì sao dùng hai file Python riêng?  
A. Chạy nhanh hơn.  
B. Tránh viết `import`.  
C. Kiểm chứng state qua process mới, không dựa RAM cũ.  
D. Đổi model.  
**Đáp án: C.** Đây là điều kiện chính để chứng minh persistence.

**Câu 2.** Tại sao bước đọc không gọi LLM?  
A. Kiểm tra state trực tiếp, tránh tạo message mới.  
B. Vì PostgreSQL cấm LLM.  
C. Vì graph không hỗ trợ model.  
D. Vì cần xóa history trước.  
**Đáp án: A.** `get_state` cho bằng chứng độc lập với câu trả lời bot.

**Câu 3.** Thread B rỗng giúp kiểm chứng gì?  
A. PostgreSQL không chạy.  
B. Chưa cài langgraph.  
C. Model ít token.  
D. Ranh giới cô lập theo thread ID.  
**Đáp án: D.** B khác A nên không đọc hội thoại A.

**Câu 4.** Restart Postgres và giữ volume thường gây ra điều gì?  
A. Xóa checkpoint.  
B. Dữ liệu được giữ khi DB hoạt động lại.  
C. Model tự summarization.  
D. Tạo thread mới.  
**Đáp án: B.** Dữ liệu nằm trên named volume.

**Câu 5.** Nếu read script dùng nhầm tên database thì kết quả có thể ra sao?  
A. Luôn vẫn đọc được thread A.  
B. Thread ID tự sửa URI.  
C. Không thấy history đúng dù ID trùng.  
D. Model tự chuyển DB.  
**Đáp án: C.** Khóa ID chỉ có ý nghĩa trong kho lưu trữ cụ thể.

## 10. Tổng kết

Một demo memory chỉ hoàn thành khi vượt qua bài kiểm tra độc lập giữa hai process và hai thread. Bằng chứng rõ nhất là nội dung snapshot trong database sau restart.
