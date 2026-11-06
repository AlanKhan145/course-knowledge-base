# Bài 09 — Trimming hội thoại với trim_messages

## 1. Tóm tắt

Trimming chọn một phần history để gửi vào model, thường ưu tiên tin nhắn mới nhất trong giới hạn token. Nó thay đổi **input của lời gọi hiện tại**, không tự xóa messages khỏi `MessagesState` hoặc database. Bài này dùng `trim_messages` của LangChain và so sánh rõ input đã trim với state nguyên vẹn.

## 2. Mục tiêu

- Sử dụng `trim_messages` với `strategy='last'`, `max_tokens` và token counter.
- Chọn điểm bắt đầu/kết thúc hợp lệ cho message sequence.
- Chứng minh `len(model_input) <= len(state['messages'])` nhưng state chưa bị xóa.
- Tái tạo bài thử với `MAX_TOKENS=150`, phân tích vì sao mô hình quên tên ban đầu.

## 3. Chuẩn bị và code

Cần `langchain-core`, `langgraph`, `langchain-openai` và `.env`. Bổ sung vào code chatbot của bài 03:

```python
from langchain_core.messages.utils import (
    trim_messages,
    count_tokens_approximately,
)

MAX_TOKENS = 150  # giá trị cho demo, không phải mức production

def chat(state: MessagesState):
    model_input = trim_messages(
        state['messages'],
        strategy='last',
        token_counter=count_tokens_approximately,
        max_tokens=MAX_TOKENS,
        start_on='human',
        end_on=('human', 'tool'),
    )
    print('State messages:', len(state['messages']))
    print('Messages gửi LLM:', len(model_input))
    print('Token ước lượng:', count_tokens_approximately(model_input))
    response = model.invoke(model_input)
    return {'messages': [response]}
```

`start_on='human'` cố gắng giữ điểm bắt đầu phù hợp cho chat model; `end_on=('human','tool')` điều chỉnh điểm cuối hợp lệ theo loại message. Trong chương trình có tool calls, phải kiểm tra tính toàn vẹn của cặp AI tool-call và ToolMessage, không được cắt ngẫu nhiên khiến chuỗi không hợp lệ. Nếu dùng `SystemMessage`, hãy xem tham số `include_system=True` và kiểm tra lại ngân sách thực tế, bởi không phải mọi chiến lược phù hợp với mọi loại history.

## 4. Cơ chế lựa chọn

Giả sử history gồm 3 lượt:

```text
H1: Tôi tên Khánh.
A1: Chào Khánh.
H2: Hãy giải thích chi tiết về bộ nhớ ngắn hạn.
A2: [câu trả lời rất dài]
H3: Tên tôi là gì?
```

Khi tổng số token vượt 150, `strategy='last'` ưu tiên phần cuối. Nếu `A2` quá dài để cùng tồn tại với `H3` trong giới hạn, công cụ có thể chọn ngữ cảnh chỉ còn `H3` (tùy đặc điểm message/token). LLM không còn thấy `H1` nên không có căn cứ trả lời đúng tên. Đây là đánh đổi **có chủ ý** của một chiến lược ưu tiên dữ liệu mới nhất.

## 5. Kiểm tra input và state cạnh nhau

Thêm sau lần invoke:

```python
state_history = graph.get_state(config).values['messages']
print('Tin nhắn còn lưu:', len(state_history))
for message in state_history:
    print(message.type, message.content[:80])
```

Nếu thấy `H1` vẫn có trong state, nghĩa là trimming chỉ xảy ra khi xây input gửi model. Để biết model thấy gì, log `model_input` trong node; không dùng `get_state` như thể đó là prompt đã trim.

## 6. Tối ưu ứng dụng thực tế

- Chọn `max_tokens` theo giới hạn của model và lượng output dự kiến, không cứng nhắc lấy 150.
- Cố gắng giữ system instruction (nếu có) theo cơ chế phù hợp, tránh rơi mất quy tắc an toàn ở lượt dài.
- Tránh cắt giữa tool-call và tool-result; giữ message sequence hợp lệ.
- Nếu cần nhớ một dữ kiện cũ quan trọng, kết hợp summary hoặc truy xuất dữ kiện cụ thể.
- Ghi metric `state_tokens`, `prompt_tokens`, `trimmed_count` và tỷ lệ lỗi thiếu ngữ cảnh.

## 7. Lab

Gửi lần lượt 4 thông điệp vào cùng thread: “Tôi tên Khánh”, “Tôi đang học LangGraph”, “Hãy giải thích STM bằng một đoạn dài”, “Tên tôi là gì?”. Chạy với giới hạn 150, sau đó tăng giới hạn (nếu phù hợp model) và ghi log message nào được đưa vào model. **Không** kết luận mọi lần thử cho cùng câu trả lời, vì độ dài AI output và cách token hóa thay đổi theo model.

Checkpoint: sau mỗi lần, `get_state` vẫn còn lịch sử đầy đủ. Mặt khác, log trước `model.invoke` chỉ có phần được chọn từ trimming.

## 8. Debug

- Đếm token xấp xỉ có thể không khớp cách nhà cung cấp tính phí.
- Nếu `model_input` rỗng hoặc không có user message, kiểm tra budget quá nhỏ và `start_on`/`end_on`.
- Nếu bot nhớ tên khi đã trim: xem model_input có còn lời giới thiệu hay không, hoặc model đã đoán.
- Nếu provider trả lỗi message role, xem các cặp tool messages và vị trí system message.

## 9. Câu hỏi ôn tập

**Câu 1.** Trimming có tự loại message khỏi state không?  
A. Có, mặc định là xóa hết.  
B. Không, chỉ chọn messages đầu vào cho model ở bước đó.  
C. Có, khi dùng Docker.  
D. Có nếu đổi tên node.  
**Đáp án: B.** `trim_messages` tạo danh sách input được chọn.

**Câu 2.** `strategy='last'` ưu tiên gì?  
A. Tin nhắn gần nhất.  
B. Tin nhắn dài nhất.  
C. Tin nhắn hệ thống ngẫu nhiên.  
D. Thread đầu tiên.  
**Đáp án: A.** Đây là chiến lược giữ phần cuối history.

**Câu 3.** Vì sao model có thể quên tên được giới thiệu sớm?  
A. Vì ID UUID không hỗ trợ unicode.  
B. Vì Postgres chạy chậm.  
C. Vì `MessagesState` không lưu user.  
D. Vì message giới thiệu có thể không được đưa vào input đã trim.  
**Đáp án: D.** Model không có quyền truy cập trực tiếp vào messages bị lược khỏi prompt.

**Câu 4.** Muốn kiểm chứng trimming thật sự hoạt động, nên log gì?  
A. Chỉ ghi nhiệt độ GPU.  
B. Chỉ tên database.  
C. `model_input` và state history.  
D. Chỉ model output.  
**Đáp án: C.** So sánh hai tập messages là bằng chứng trực tiếp.

**Câu 5.** Nguy cơ khi trim tool messages tùy tiện?  
A. Khiến message sequence không hợp lệ.  
B. Tăng dung lượng Docker image.  
C. Buộc mở thread mới.  
D. Đổi ngôn ngữ Python.  
**Đáp án: A.** Một số provider yêu cầu tool results đi kèm tool calls.

## 10. Tổng kết

Trimming là giải pháp nhanh để chặn prompt quá dài nhưng không thay thế việc lưu dữ kiện trọng yếu. Hãy hiểu rõ **state trước trim**, **input sau trim** và **thông tin model có thể sử dụng**.
