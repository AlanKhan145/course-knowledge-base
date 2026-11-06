# Bài 02 — Thực hành có hướng dẫn: Streaming phản hồi và sự kiện

> **Module 07 · Lab** · Video: [xem từ 00:56:56](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=3416s).

**Tổng quan:** Hiển thị kết quả từng phần, xử lý `Runner.run_streamed`, phân biệt token delta và event cấp Agent.

## 1. Đề bài

Xây chương trình console hiển thị từng phần của câu trả lời và trạng thái agent. Ghi nhận thời điểm nhận delta đầu tiên để so sánh với thời điểm hoàn tất (không cần đo thành benchmark).

## 2. Code mẫu

```python
import asyncio
from time import perf_counter
from agents import Agent, Runner
from openai.types.responses import ResponseTextDeltaEvent

async def main():
    agent = Agent(name="Stream Tutor", instructions="Giải thích theo ba bước ngắn")
    start = perf_counter()
    first_delta_time = None
    result = Runner.run_streamed(agent, "Giải thích decorators Python")

    async for event in result.stream_events():
        if event.type == "raw_response_event" and isinstance(event.data, ResponseTextDeltaEvent):
            if first_delta_time is None:
                first_delta_time = perf_counter() - start
            print(event.data.delta, end="", flush=True)
        elif event.type == "agent_updated_stream_event":
            print(f"\n[Agent: {event.new_agent.name}]\n")

    print("\n------")
    print("Delta đầu tiên sau:", first_delta_time, "giây")
    print("Tổng thời gian:", round(perf_counter() - start, 2), "giây")
    print("Hoàn tất:", result.is_complete)

asyncio.run(main())
```

## 3. Checkpoint

Chương trình phải in ra nhiều mảnh văn bản và kết thúc rõ ràng. Nếu đầu ra chỉ xuất hiện một lần, kiểm tra loại event, buffer của terminal và việc dùng `flush=True`; cũng có thể do backend gộp đoạn.

## 4. Thử tình huống thực tế

Thêm tool mock `get_topic_outline`. Nếu model dùng tool, quan sát khoảng thời gian im lặng trước khi có token. Không giả mạo tiến độ “Đang chạy tool...” nếu không có event chứng minh.

## 5. Kiểm thử UI

Lập kịch bản khi người dùng ngắt giữa chừng, mạng mất kết nối, text được stream nhưng final output lỗi. Thiết kế UI có trạng thái `generating`, `completed`, `error`, `cancelled`; chỉ lưu câu trả lời đầy đủ khi nhận tín hiệu hoàn tất.

## 6. Deliverable

File `stream_lab.py`, bảng nhận xét về thời gian delta đầu và tổng thời gian cho hai câu hỏi dài/ngắn; một sơ đồ luồng SSE hoặc WebSocket sẽ dùng nếu đưa lên frontend.

## 7. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Phương thức nào tạo run hỗ trợ stream?

A. `Runner.run_sync()`  
B. `trace()`  
C. `Runner.run_streamed()`  
D. `handoff()`  

**Đáp án:** C. **Giải thích:** Đây là entrypoint streaming của SDK.

### Câu 2

Muốn nhận từng sự kiện trong một streamed run, dùng gì?

A. `print(result)` ngay  
B. `await result.final_output`  
C. `agent.tools()`  
D. `async for event in result.stream_events()`  

**Đáp án:** D. **Giải thích:** Cần duyệt async iterator tới khi hoàn tất.

### Câu 3

Dữ liệu nào thích hợp nối trực tiếp vào UI văn bản?

A. Text delta, không phải mọi event  
B. Mọi tool arguments  
C. Mọi span tracing  
D. API key  

**Đáp án:** A. **Giải thích:** Các event có ý nghĩa khác nhau.

### Câu 4

Khi nào một streamed run được coi hoàn tất?

A. Khi có ký tự đầu tiên  
B. Khi `stream_events()` đã được tiêu thụ xong  
C. Khi tool bắt đầu  
D. Ngay sau tạo `result`  

**Đáp án:** B. **Giải thích:** Iterator kết thúc mới cho biết run xong.

### Câu 5

Streaming có tự làm agent chạy ít bước hơn?

A. Có, luôn bỏ qua tools  
B. Có, luôn dùng một model call  
C. Không, nó chỉ thay đổi cách quan sát output  
D. Có, loại bỏ guardrails  

**Đáp án:** C. **Giải thích:** Logic điều phối về cơ bản không đổi.


**Tài liệu tra cứu:** [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) · [1](https://openai.github.io/openai-agents-python/streaming/)
