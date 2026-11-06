# Bài 04 — Thread ID, cô lập hội thoại và đọc state

## 1. Tóm tắt

Một chatbot phục vụ nhiều cuộc hội thoại cần khóa phân tách state. Trong LangGraph, khóa đó là `thread_id` nằm trong `configurable`. Checkpointer tổ chức snapshot theo thread; gọi cùng ID tạo tiếp cùng lịch sử, đổi ID mở một chuỗi trạng thái khác.

## 2. Mục tiêu học tập

- Tạo hai cuộc trò chuyện độc lập trong cùng graph.
- Phân biệt định danh người dùng, định danh cuộc hội thoại và checkpoint ID.
- Đọc `get_state` của từng thread để chứng minh phân tách.
- Áp dụng nguyên tắc backend xác thực quyền sở hữu thread.

## 3. Ví dụ 2 thread

Từ code `graph` đã compile với `InMemorySaver`:

```python
thread_a = {'configurable': {'thread_id': 'user01-chat-A'}}
thread_b = {'configurable': {'thread_id': 'user01-chat-B'}}

graph.invoke(
    {'messages': [('user', 'Tôi tên Khánh.')]},
    config=thread_a,
)
graph.invoke(
    {'messages': [('user', 'Tên tôi là gì?')]},
    config=thread_a,
)

graph.invoke(
    {'messages': [('user', 'Tên tôi là gì?')]},
    config=thread_b,
)

messages_a = graph.get_state(thread_a).values['messages']
messages_b = graph.get_state(thread_b).values['messages']
print('Thread A:', [(m.type, m.content[:60]) for m in messages_a])
print('Thread B:', [(m.type, m.content[:60]) for m in messages_b])
```

Thread B không nhận message giới thiệu tên của thread A. Đừng kiểm tra độc lập bằng cách đoán câu trả lời “Tôi không biết”; kiểm tra **đầu vào và snapshot**. Model vẫn có thể đoán ngẫu nhiên nếu prompt mơ hồ.

## 4. Cấu trúc định danh trong ứng dụng

Với app chat thật, nên lưu bảng nghiệp vụ như:

| `user_id` | `conversation_id` | `thread_id` |
| --- | --- | --- |
| `u01` | `cv01` | `u01-cv01` |
| `u01` | `cv02` | `u01-cv02` |
| `u02` | `cv03` | `u02-cv03` |

Backend nhận `conversation_id` từ giao diện, xác thực token phiên đăng nhập, tra quyền truy cập rồi suy ra `thread_id` nội bộ. **Không** tin hoàn toàn ID do client cung cấp: nếu nhập ID của người khác mà backend tự dùng trực tiếp, có thể dẫn tới lộ hội thoại.

Một cách sinh ID phiên mới:

```python
from uuid import uuid4
thread_id = str(uuid4())
```

Chuỗi này phải được lưu cùng `conversation_id` của người dùng; tạo ID ngẫu nhiên mới ở **mỗi request** sẽ làm bot luôn bắt đầu cuộc chat mới.

## 5. Checkpoint ID không phải thread ID

`thread_id` xác định lịch sử theo cuộc trò chuyện. `checkpoint_id` (nếu được dùng) xác định snapshot cụ thể trong lịch sử. Người dùng muốn hỏi thêm câu mới thì dùng `graph.invoke(new_input, config)` với cùng thread. Lặp lại checkpoint ID sai cách có thể gây replay không mong muốn; không cần truyền checkpoint ID cho luồng chat thông thường.

## 6. Bài tập quan sát trạng thái

Tạo ít nhất hai thread với 3 và 1 lượt trao đổi. Sau đó viết hàm `show_thread(config)` hiển thị số `HumanMessage`, `AIMessage`, nội dung 50 ký tự đầu của mỗi message và tổng số message. Kết quả kỳ vọng: số lượng và nội dung mỗi thread khác nhau, không xuất hiện câu giới thiệu thuộc thread kia.

## 7. Các điểm dễ sai

- Dùng một `thread_id='1'` cho toàn bộ người dùng → trộn hội thoại.
- Không truyền `config` ở một `invoke` trong graph có checkpoint → không xác định đúng thread.
- Sinh thread ID mới cho mỗi câu → “mất trí nhớ” mặc dù saver hoạt động.
- Nghĩ `PostgresSaver` tự bảo vệ dữ liệu → database không thay thế kiểm tra authorization ở tầng ứng dụng.
- Dùng ID chứa thông tin cá nhân dễ đoán → nên chọn ID ngẫu nhiên hoặc mapping kín.

## 8. Câu hỏi ôn tập

**Câu 1.** Người dùng bấm “New Chat”. Hành động cốt lõi?  
A. Dùng `thread_id` mới.  
B. Tăng `temperature`.  
C. Xóa database.  
D. Cài lại model.  
**Đáp án: A.** Thread mới tạo lịch sử riêng.

**Câu 2.** `thread_id` có thể dùng thay xác thực người dùng không?  
A. Có nếu ID khó đoán.  
B. Có nếu dùng Postgres.  
C. Không; backend phải xác thực và phân quyền.  
D. Có nếu thêm summary.  
**Đáp án: C.** ID là khóa lưu trữ, không phải chứng chỉ truy cập.

**Câu 3.** Tại sao sinh UUID mới cho mỗi request có thể làm bot quên?  
A. UUID quá dài để lưu.  
B. Mỗi request truy cập thread trống khác.  
C. UUID xóa weights.  
D. UUID tắt checkpointer.  
**Đáp án: B.** Không có lịch sử liên tiếp nếu luôn đổi khóa.

**Câu 4.** Muốn xem state mà không thêm lượt chat nên dùng?  
A. `llm.invoke('test')`  
B. `graph.invoke` với câu hỏi giả  
C. Xóa tất cả messages  
D. `graph.get_state(config)`  
**Đáp án: D.** `get_state` là thao tác đọc snapshot.

**Câu 5.** Phát biểu nào đúng?  
A. `checkpoint_id` là tên tài khoản.  
B. Mỗi thread chỉ được có một checkpoint.  
C. `thread_id` là chuỗi trạng thái, `checkpoint_id` là một snapshot.  
D. Hai thread tự chia sẻ tên người dùng.  
**Đáp án: C.** Hai ID định danh hai cấp khác nhau.

## 9. Tổng kết

Quản lý memory đa người dùng là bài toán đồng thời về **cấu trúc trạng thái** và **phân quyền**. Không thể dùng một tên thread tùy tiện cho mọi cuộc hội thoại.
