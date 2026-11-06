# Bài 06 — Persistent Short-Term Memory với PostgresSaver

## 1. Tổng quan

`PostgresSaver` có cùng mục đích checkpoint như `InMemorySaver`, nhưng dùng PostgreSQL để lưu và tải trạng thái. Sự thay đổi chính nằm ở chỗ tạo saver và khởi tạo cấu trúc database; logic `StateGraph`, `MessagesState`, `thread_id` và node chat gần như giữ nguyên.

## 2. Mục tiêu

- Kết nối PostgreSQL từ Python và gọi `PostgresSaver.from_conn_string()`.
- Khởi tạo bảng bằng `.setup()` khi lần đầu dùng.
- Gắn checkpointer vào graph bằng `compile(checkpointer=...)`.
- Thử hai thread, xem checkpoint và xác minh history qua nhiều lời gọi.
- Phân biệt persistent graph state với model context và với long-term memory.

## 3. Cài dependencies

PostgreSQL phải đang chạy và có URI hợp lệ từ bài lab Docker. Tại môi trường ảo Python:

```bash
python -m pip install -U langgraph langchain-openai langgraph-checkpoint-postgres "psycopg[binary]" python-dotenv
```

Trong `.env` trên máy, thêm hai khóa:

```dotenv
OPENAI_API_KEY=thay_bang_api_key_that
OPENAI_MODEL=ten_model_co_quyen_truy_cap
POSTGRES_URI=postgresql://app:app_password_local_only@localhost:5432/langgraph_memory?sslmode=disable
```

Mật khẩu demo chỉ được dùng cho môi trường local. Không commit `.env`.

## 4. Code hoàn chỉnh

Tạo `postgres_chat.py`:

```python
import os
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langgraph.graph import StateGraph, MessagesState, START, END
from langgraph.checkpoint.postgres import PostgresSaver

load_dotenv()
model = ChatOpenAI(model=os.environ['OPENAI_MODEL'], temperature=0)


def chat(state: MessagesState):
    reply = model.invoke(state['messages'])
    return {'messages': [reply]}


builder = StateGraph(MessagesState)
builder.add_node('chat', chat)
builder.add_edge(START, 'chat')
builder.add_edge('chat', END)

uri = os.environ['POSTGRES_URI']
with PostgresSaver.from_conn_string(uri) as checkpointer:
    checkpointer.setup()  # cần khi DB chưa có schema; có thể chạy khi khởi động local
    graph = builder.compile(checkpointer=checkpointer)

    thread1 = {'configurable': {'thread_id': 'demo-postgres-1'}}
    thread2 = {'configurable': {'thread_id': 'demo-postgres-2'}}

    graph.invoke({'messages': [('user', 'Tôi tên Khánh.')]}, config=thread1)
    reply1 = graph.invoke({'messages': [('user', 'Tên tôi là gì?')]}, config=thread1)
    reply2 = graph.invoke({'messages': [('user', 'Tên tôi là gì?')]}, config=thread2)

    print('Thread 1:', reply1['messages'][-1].content)
    print('Thread 2:', reply2['messages'][-1].content)
    print('Số tin thread 1:', len(graph.get_state(thread1).values['messages']))
```

**Điểm phải chú ý:** các thao tác với `graph` nằm **bên trong** khối `with`. Bước này bảo đảm kết nối PostgreSQL do context manager quản lý vẫn còn mở khi graph đọc/ghi. Với dịch vụ lâu dài, quản lý pool/connection theo vòng đời app thay vì mở kết nối cho mỗi câu chat.

## 5. Sự khác biệt RAM và PostgreSQL

| Yếu tố | `InMemorySaver` | `PostgresSaver` |
| --- | --- | --- |
| Kho checkpoint | RAM process | Bảng PostgreSQL |
| Cần Docker / database? | Không | Có database đang chạy |
| Mất state khi restart Python? | Có | Không, nếu DB/volume còn |
| Cần `.setup()`? | Không | Có ở bước khởi tạo schema |
| Phù hợp | Demo, test | Ứng dụng cần persistence |

Trong hệ thống thật, `.setup()` nên được quản lý như bước khởi tạo/migration; quyền tài khoản DB và việc kiểm soát phiên phải được thiết kế riêng.

## 6. Kiểm tra persistence

Không chỉ hỏi bot “nhớ tên tôi không”; đọc trực tiếp state của một thread sau lần chạy khác:

```python
# Đặt bên trong khối with, sau khi graph đã compile
config = {'configurable': {'thread_id': 'demo-postgres-1'}}
snapshot = graph.get_state(config)
print([m.content for m in snapshot.values.get('messages', [])])
```

Nếu history có thông điệp giới thiệu ban đầu, checkpoint đã được tải từ Postgres. Test chính xác qua restart nằm ở bài 07.

## 7. Lỗi thường gặp

- `relation ... does not exist`: chưa gọi `checkpointer.setup()` khi khởi tạo schema.
- `connection refused`: DB chưa healthy, sai hostname hoặc port.
- `password authentication failed`: URI không khớp tài khoản DB.
- `TypeError` từ hàng dữ liệu khi tự tạo `psycopg.Connection`: cẩn thận với cấu hình `autocommit=True`, `row_factory=dict_row` theo tài liệu saver; cách `from_conn_string` phù hợp hơn cho lab.
- Kết nối đóng: graph được dùng sau khi đã thoát `with`.
- “Đã lưu Postgres nên model sẽ nhớ mọi thứ”: model vẫn bị giới hạn input context; database không tự giải bài toán này.

## 8. Thực hành

Đổi tên thread 2 thành một thread mới, chạy lại, đếm message. Dừng Python nhưng **không** xóa volume; chạy script khôi phục ở bài 07. Lập bảng trước/sau với số messages, ID và nguồn data.

## 9. Câu hỏi ôn tập

**Câu 1.** Thao tác nào quan trọng khi lần đầu tạo schema saver?  
A. `model.invoke()`  
B. `checkpointer.setup()`  
C. `thread_id = 0`  
D. `docker compose down -v`  
**Đáp án: B.** `.setup()` tạo bảng/index cần thiết.

**Câu 2.** Vì sao giữ `graph` trong khối `with`?  
A. Để đổi temperature.  
B. Để lấy UUID mới.  
C. Để tự xóa tin nhắn.  
D. Để kết nối saver còn hiệu lực khi graph thao tác.  
**Đáp án: D.** Context manager kiểm soát vòng đời kết nối.

**Câu 3.** Dùng thread khác trên cùng Postgres có tự thấy history?  
A. Không, mỗi thread có state riêng.  
B. Có, bởi cùng database.  
C. Chỉ nếu model có 1M token.  
D. Có, sau `setup`.  
**Đáp án: A.** Persistence không xóa ranh giới thread.

**Câu 4.** Gọi `PostgresSaver` đã đủ giải context overflow?  
A. Đủ vì Postgres có RAM.  
B. Đủ nếu dùng Docker.  
C. Chưa; phải kiểm soát nội dung gửi tới model.  
D. Đủ sau restart.  
**Đáp án: C.** State lưu trữ có thể lớn hơn ngữ cảnh model.

**Câu 5.** Nếu `down -v` làm mất dữ liệu DB, `thread_id` cũ có khôi phục history được?  
A. Có từ trọng số model.  
B. Không, nếu không có bản sao lưu khác.  
C. Có từ Docker image.  
D. Có khi đổi port.  
**Đáp án: B.** ID không chứa dữ liệu; volume đã mất là kho dữ liệu bị xóa.

## 10. Tổng kết

Để lưu lâu dài **trạng thái hội thoại trong từng thread**, thay `InMemorySaver` bằng `PostgresSaver`, kết nối database và khởi tạo schema. Không thay đổi ý nghĩa `thread_id`.
