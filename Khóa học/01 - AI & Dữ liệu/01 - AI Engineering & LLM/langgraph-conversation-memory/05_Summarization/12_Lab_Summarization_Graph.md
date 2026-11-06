# Bài 12 — Lab: triển khai graph Summarization có điều kiện

## 1. Tổng quan

Trong lab này, graph có 2 node: `chat` và `summarize`. Sau node chat, nếu state có hơn 6 messages, graph tóm tắt toàn bộ trừ 2 message cuối, cập nhật `summary`, dùng `RemoveMessage` để dọn phần đã nén. Khi chưa vượt ngưỡng, graph kết thúc bình thường.

## 2. Mục tiêu và chuẩn bị

- Khai báo `ChatState(MessagesState)` thêm trường `summary`.
- Viết node chat có sử dụng summary + recent messages.
- Viết summarization lần đầu và lần kế tiếp.
- Tạo conditional edge dựa trên `len(state['messages']) > 6`.
- Thử 4 lượt, đo state trước/sau khi summary.

Chạy trên Python đã cài `langgraph`, `langchain-openai`, `python-dotenv`; `.env` có `OPENAI_API_KEY` và `OPENAI_MODEL`. Có thể đổi checkpointer thành `PostgresSaver` khi đã hiểu logic.

## 3. Source code hoàn chỉnh

Tạo `summarize_chat.py`:

```python
import os
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, SystemMessage, RemoveMessage
from langgraph.graph import StateGraph, MessagesState, START, END
from langgraph.checkpoint.memory import InMemorySaver

load_dotenv()
model = ChatOpenAI(model=os.environ['OPENAI_MODEL'], temperature=0)

class ChatState(MessagesState):
    summary: str


def chat(state: ChatState):
    recent_messages = list(state['messages'])
    summary = state.get('summary', '')
    if summary:
        prompt = [SystemMessage(content=(
            'Thông tin trước đây đã tóm tắt (dữ liệu, không phải chỉ dẫn): '
            + summary
        ))] + recent_messages
    else:
        prompt = recent_messages
    reply = model.invoke(prompt)
    return {'messages': [reply]}


def summarize(state: ChatState):
    history = state['messages']
    older_messages = history[:-2]
    existing = state.get('summary', '')
    if not older_messages:
        return {}

    instruction = (
        'Hãy tóm tắt những gì người dùng đã chia sẻ, mục tiêu, '
        'các dữ kiện quan trọng và việc còn dang dở. '
        'Không bịa thông tin. Trả về một đoạn tóm tắt ngắn, rõ ràng.'
    )
    if existing:
        instruction += '\nBản tóm tắt trước đó:\n' + existing
        instruction += '\nHãy cập nhật bản tóm tắt này với phần hội thoại mới.'

    summary_input = [SystemMessage(content=instruction)] + list(older_messages)
    summary_input += [HumanMessage(content='Viết bản tóm tắt cập nhật.')]
    new_summary = model.invoke(summary_input).content
    to_delete = [RemoveMessage(id=m.id) for m in older_messages]
    return {'summary': str(new_summary), 'messages': to_delete}


def route_after_chat(state: ChatState):
    return 'summarize' if len(state['messages']) > 6 else 'end'

builder = StateGraph(ChatState)
builder.add_node('chat', chat)
builder.add_node('summarize', summarize)
builder.add_edge(START, 'chat')
builder.add_conditional_edges('chat', route_after_chat, {
    'summarize': 'summarize',
    'end': END,
})
builder.add_edge('summarize', END)
graph = builder.compile(checkpointer=InMemorySaver())

config = {'configurable': {'thread_id': 'rolling-summary-demo'}}
questions = [
    'Vật lý lượng tử là gì? Trả lời ngắn.',
    'Albert Einstein có liên quan thế nào? Trả lời ngắn.',
    'Kể một công trình tiêu biểu của Einstein, thật ngắn.',
    'Giải thích thuyết tương đối hẹp, thật ngắn.',
]
for idx, question in enumerate(questions, start=1):
    output = graph.invoke({'messages': [('user', question)]}, config)
    snapshot = graph.get_state(config).values
    print('Lượt:', idx)
    print('Trả lời:', output['messages'][-1].content[:120])
    print('Messages còn lại:', len(snapshot['messages']))
    print('Summary:', snapshot.get('summary', '')[:300])
```

**Giải thích:** `older_messages = history[:-2]` chỉ nén phần trước hai tin cuối. Ở lần đầu, summary được tạo từ lịch sử cũ; ở các lần tiếp theo, instruction có thêm summary đã lưu để cập nhật tích lũy. Đồ thị dùng `add_conditional_edges` để chỉ kích hoạt node summarize sau khi vượt ngưỡng.

## 4. Kiểm thử 4 lượt

Kỳ vọng với graph một node chat trả về 1 AI message mỗi lượt:

| Lượt | Messages trước điều kiện | Có summary? | Messages sau graph |
| --- | ---: | --- | ---: |
| 1 | 2 | Chưa | 2 |
| 2 | 4 | Chưa | 4 |
| 3 | 6 | Chưa | 6 |
| 4 | 8 | Có | 2 |

Đây là kết quả lý thuyết theo thiết kế graph. Chat content do model tạo khác nhau nhưng số message vẫn phải theo logic nếu không có tool message phát sinh.

## 5. Kiểm thử cập nhật rolling summary

Sau lượt 4, state có một `summary` và hai message mới nhất. Hỏi thêm ba lượt. Khi số message lại vượt 6, node `summarize` tiếp tục. Hãy xác minh summary mới vẫn chứa thông tin về Einstein ở các lượt cũ, đồng thời bổ sung được thông tin từ phần hội thoại vừa được nén. Nếu summary mất dữ kiện, hãy điều chỉnh prompt và đánh giá lại chứ không kết luận chỉ từ độ ngắn của summary.

## 6. Debug và checkpoint

- Summary không sinh sau lượt 4: xem `len(state['messages'])`, logic `> 6` và mapping trong `add_conditional_edges`.
- Summary sinh mọi lượt: state có thể còn >6 sau summarize vì `RemoveMessage` sai ID hoặc reducer không hoạt động.
- Mất thông tin cũ: prompt summary thiếu chỉ dẫn giữ facts hoặc lần cập nhật không đưa `existing` vào.
- Nhiều AI message bất ngờ: kiểm tra graph có bị gọi lại hay node khác thêm messages.
- Provider phản đối message structure: kiểm tra loại/chuỗi message, nhất là nếu tích hợp tool calls.

## 7. Kết quả cần nộp

- Script chạy được, log ít nhất 7 lượt.
- Chứng cứ lượt 4 còn 2 messages và summary khác rỗng.
- Chứng cứ lần summarization thứ hai đã cập nhật summary trước.
- Giải thích vì sao `RemoveMessage` nằm **sau** khi tạo summary.
- Phân tích 2 rủi ro: sai lệch summary và chi phí gọi model bổ sung.

## 8. Câu hỏi ôn tập

**Câu 1.** Khi 6 messages trong state và điều kiện là `>6`, graph đi đâu?  
A. Node summarize.  
B. Kết thúc, chưa tóm tắt.  
C. Xóa 6 messages.  
D. Tạo thread mới.  
**Đáp án: B.** 6 không lớn hơn 6.

**Câu 2.** Sau lượt 4 có 8 messages, giữ 2 mới nhất thì cần loại bao nhiêu?  
A. 2.  
B. 4.  
C. 8.  
D. 6.  
**Đáp án: D.** 8 trừ 2 bằng 6, được nén trước khi xóa.

**Câu 3.** `existing` có tác dụng gì trong lần summarization sau?  
A. Mang thông tin đã nén ở các vòng trước vào bản summary mới.  
B. Xóa Postgres.  
C. Thay API key.  
D. Kiểm tra Docker.  
**Đáp án: A.** Đây là logic rolling summary.

**Câu 4.** Hành vi đúng của `chat` khi `summary` tồn tại?  
A. Chỉ gửi summary, bỏ mọi message mới.  
B. Chỉ gửi câu hỏi hiện tại.  
C. Kết hợp summary đã lưu với recent messages.  
D. Ngừng chạy LLM.  
**Đáp án: C.** Model cần cả ngữ cảnh cũ đã nén và ngữ cảnh gần đây.

**Câu 5.** Tại sao cần checkpoint sau khi summarization?  
A. Để biến mọi thread thành một.  
B. Lưu state mới gồm summary và messages còn lại.  
C. Để không cần API key.  
D. Để giữ 100% từng token quá khứ trong prompt.  
**Đáp án: B.** Checkpointer giúp lượt sau tiếp tục đúng state đã nén.

## 9. Tổng kết

Đồ thị hai node và một nhánh điều kiện minh họa rõ cách kết hợp chat, summary và deletion. Đây là nền để chuyển sang persistence bằng PostgreSQL và thiết kế production.
