# Bài 10 — Deletion: xóa messages trong LangGraph state bằng RemoveMessage

## 1. Tóm tắt

Khác trimming, deletion làm thay đổi danh sách `messages` của **trạng thái hiện tại** thông qua `RemoveMessage(id=...)`. Nó hữu ích khi giảm độ dài state hoặc khi đã nén thông tin cũ thành summary. Tuy nhiên, xóa message khỏi state hiện hành **không đồng nghĩa** xóa mọi bản checkpoint lịch sử, file backup hay log audit.

## 2. Mục tiêu học tập

- Dùng `RemoveMessage` đúng với reducer của `MessagesState`.
- Xây workflow `START -> chat -> cleanup -> END`.
- Đặt luật xóa khi `len(messages) > 10`, xóa 6 tin nhắn cũ nhất, giữ tin mới.
- Giải thích vì sao sau 7 lượt (14 messages) trạng thái có thể còn 8 tin.

## 3. Vì sao cần reducer?

`MessagesState` dùng reducer hiểu ý nghĩa đặc biệt của đối tượng `RemoveMessage`. Một thao tác update `{ 'messages': [RemoveMessage(id=message.id)] }` yêu cầu reducer xóa message có ID tương ứng. Nếu state dùng danh sách thường với luật overwrite, hành vi sẽ không đúng như mong muốn. Message muốn xóa phải tồn tại và có ID tương ứng.

## 4. Code workflow

Từ graph chatbot cơ bản, bổ sung một node `cleanup`:

```python
from langchain_core.messages import RemoveMessage
from langgraph.graph import StateGraph, MessagesState, START, END
from langgraph.checkpoint.memory import InMemorySaver

# Biến model được khởi tạo như bài trước

def chat(state: MessagesState):
    reply = model.invoke(state['messages'])
    return {'messages': [reply]}


def cleanup(state: MessagesState):
    history = state['messages']
    if len(history) > 10:
        # Quy tắc demo: bỏ 6 messages cũ nhất tại mỗi lần vượt ngưỡng.
        return {'messages': [RemoveMessage(id=m.id) for m in history[:6]]}
    return {}

builder = StateGraph(MessagesState)
builder.add_node('chat', chat)
builder.add_node('cleanup', cleanup)
builder.add_edge(START, 'chat')
builder.add_edge('chat', 'cleanup')
builder.add_edge('cleanup', END)
graph = builder.compile(checkpointer=InMemorySaver())
```

Quy tắc này bám sát demo học tập: **vượt hơn 10**, xóa **6 đầu tiên**. Nó không phải chính sách phổ quát tối ưu, cũng không luôn giữ đúng 4 message: ví dụ 14 messages đến lượt thứ bảy, sau khi xóa sáu còn tám. Cách giữ bốn message mới nhất phải được viết khác, ví dụ `history[:-4]`.

## 5. Theo dõi ví dụ bảy lượt

Mỗi lượt chat thông thường thêm một human và một AI message:

| Lượt | Số message sau chat, trước cleanup | Cleanup? | Còn trong state |
| --- | ---: | --- | ---: |
| 1 | 2 | Không | 2 |
| 2 | 4 | Không | 4 |
| 3 | 6 | Không | 6 |
| 4 | 8 | Không | 8 |
| 5 | 10 | Không | 10 |
| 6 | 12 | Xóa 6 đầu tiên | 6 |
| 7 | 8 | Không | 8 |

Vì vậy, sau 7 lượt còn 8 messages, không phải 14. Đây là kết quả **của quy tắc xóa cụ thể** trong bảng, không phải đặc tính mặc định của `RemoveMessage`.

## 6. Chạy kiểm tra

```python
config = {'configurable': {'thread_id': 'cleanup-lab'}}
for idx in range(1, 8):
    graph.invoke({'messages': [('user', f'Đây là câu hỏi số {idx}.')]}, config)
    count = len(graph.get_state(config).values['messages'])
    print(f'Lượt {idx}: {count} messages')
```

Khi chạy, bạn sẽ nhìn được hiệu ứng giảm số message ở lượt 6. Nếu model trả về nhiều messages hoặc có tool calls, phép đếm có thể khác giả định 2 message/lượt.

## 7. Cảnh báo quan trọng

1. **Mất context cũ:** xóa tên hoặc ràng buộc người dùng khiến model không sử dụng được khi gọi lần tiếp theo.
2. **Tính hợp lệ message:** không xóa một phần tool-call chain khiến provider từ chối request; quan tâm ranh giới hội thoại.
3. **Checkpoint lịch sử:** `RemoveMessage` thay đổi state hiện tại; nó không tự làm sạch các checkpoint lịch sử hoặc log ở tầng DB. Xóa dữ liệu theo yêu cầu pháp lý/quyền riêng tư cần thiết kế riêng (retention, backup, delete thread khi phù hợp).
4. **Có cần summary?** Khi cần giữ ý quan trọng, nên summarization trước rồi mới xóa messages cũ.
5. **Không nhầm với `trim_messages`:** trimming không trả `RemoveMessage`; nó chỉ chọn prompt.

## 8. Thực hành nâng cao

Thay quy tắc `history[:6]` bằng `history[:-4]`, chạy lại 7 lượt và so sánh. Đề xuất cách giữ nguyên cặp human/AI cuối, không xóa orphan tool messages. Giải thích trade-off giữa chính sách xóa 6 và chính sách luôn giữ 4.

## 9. Câu hỏi ôn tập

**Câu 1.** Muốn xóa một message theo ID cần gì?  
A. `RemoveMessage(id=...)` trên state có message reducer.  
B. `temperature=0`.  
C. `trim_messages(strategy='last')`.  
D. Đổi tên thread.  
**Đáp án: A.** Reducer xử lý tín hiệu xóa theo ID.

**Câu 2.** Ở ngưỡng >10 và xóa 6 đầu tiên, sau lượt 6 có 12 messages thì còn bao nhiêu?  
A. 12.  
B. 10.  
C. 6.  
D. 4.  
**Đáp án: C.** 12 trừ 6 bằng 6.

**Câu 3.** Với kịch bản 7 lượt, sau lượt 7 còn bao nhiêu?  
A. 14.  
B. 8.  
C. 4.  
D. 2.  
**Đáp án: B.** Lượt 6 còn 6, lượt 7 thêm 2 nên thành 8.

**Câu 4.** `RemoveMessage` có bảo đảm xóa mọi bản backup?  
A. Có khi dùng Postgres.  
B. Có nếu xóa hai message.  
C. Có nếu restart Python.  
D. Không, chỉ điều chỉnh state và cần chính sách xóa dữ liệu riêng.  
**Đáp án: D.** Lịch sử checkpoint và backup có vòng đời dữ liệu khác.

**Câu 5.** Vì sao deletion thường kết hợp summarization?  
A. Để bảo tồn phần ngữ nghĩa cũ trước khi xóa messages chi tiết.  
B. Để xóa Docker volume.  
C. Để đổi mô hình.  
D. Để dùng chung mọi thread.  
**Đáp án: A.** Summary giữ lại đại ý thay vì bỏ hẳn context.

## 10. Tổng kết

Trimming chọn dữ liệu gửi; deletion làm sạch state hiện tại; summarization nén dữ liệu trước khi xóa. Không đánh đồng deletion với xóa dữ liệu ở mọi tầng lưu trữ.
