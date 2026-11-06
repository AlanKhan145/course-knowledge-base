# Bài 01 — Kiến thức nền tảng: Streaming phản hồi và sự kiện

> **Module 07 · Lesson** · Video: [xem từ 00:56:56](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=3416s).

**Tổng quan:** Hiển thị kết quả từng phần, xử lý `Runner.run_streamed`, phân biệt token delta và event cấp Agent.

## 1. Mục tiêu

Giải thích lợi ích của streaming, in văn bản khi mô hình phát token và phát hiện các sự kiện tool/handoff thay vì chỉ chờ `final_output`.

## 2. Streaming giải quyết vấn đề gì?

Với non-streaming, frontend không hiển thị kết quả cho tới khi toàn bộ agent chạy xong. Nếu agent cần gọi nhiều công cụ, người dùng có thể thấy ứng dụng “đứng”. Streaming cho phép xuất từng phần của lời đáp và cập nhật tiến độ. Tuy nhiên token đầu tiên có thể xuất hiện **sau** các lượt tool; streaming không bảo đảm phản hồi luôn đến ngay.

SDK trả `RunResultStreaming` từ `Runner.run_streamed()`. Để quan sát, duyệt bất đồng bộ qua `result.stream_events()` cho tới khi hết.

## 3. Dạng sự kiện

| Event | Ý nghĩa | Gợi ý giao diện |
| --- | --- | --- |
| Raw response event | Tín hiệu trực tiếp từ model như text delta | Nối từng đoạn văn bản |
| Run item event | Tool call/tool output/message | Hiển thị nhãn hoạt động |
| Agent updated event | Thay đổi agent hiện hành | Đổi trạng thái chuyên gia |

Không lấy mọi event và in thành text. Chỉ các event delta văn bản mới dùng để nối câu; tool event phải xử lý riêng và không chứa payload bí mật để đưa lên UI.

## 4. In text delta vào terminal

```python
import asyncio
from agents import Agent, Runner
from openai.types.responses import ResponseTextDeltaEvent

async def main():
    agent = Agent(name="Explainer", instructions="Giải thích Python generators rõ ràng")
    result = Runner.run_streamed(agent, "Generators dùng để làm gì?")
    async for event in result.stream_events():
        if event.type == "raw_response_event" and isinstance(event.data, ResponseTextDeltaEvent):
            print(event.data.delta, end="", flush=True)
    print("\n[Đã hoàn thành]")

asyncio.run(main())
```

Đoạn code dùng kiểu sự kiện từ OpenAI Responses. Nếu môi trường khác hoặc SDK thay đổi, xác minh `event.type` và trường `data` theo tài liệu hiện hành. Không coi mọi event `response.*` là text delta.

## 5. Sự kiện trong nhiều agent

Trong workflow có router, handoff và function tools, người dùng có thể muốn thấy: “đang phân tích”, “đang tìm kiếm”, “đang tổng hợp”. Những nhãn này nên ánh xạ từ event hoặc trạng thái ứng dụng, **không tự coi là chứng minh đã thực hiện công cụ** nếu chưa có event thực tế.

Để hiển thị trên web, server có thể chuyển event thành Server-Sent Events (SSE) hoặc WebSocket. Backend cần quản lý hủy kết nối, dừng run, timeout và không tiết lộ event nội bộ chứa secrets.

## 6. Kết thúc streaming đúng cách

Kết thúc chỉ khi async iterator hoàn tất. `final_output` là kết quả sau khi agent hoàn thành, và có thể khác với những đoạn text hiển thị giữa chừng nếu có nhiều agent hoặc tool. Không lưu output chưa hoàn tất thành câu trả lời cuối mà không ghi trạng thái.

## 7. Tổng kết

Streaming cải thiện trải nghiệm, nhưng không làm thay đổi logic của agent. Cần phân biệt *raw token*, *run event* và *kết quả cuối* để UI không hiển thị sai.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Phương thức nào tạo run hỗ trợ stream?

A. `Runner.run_streamed()`  
B. `Runner.run_sync()`  
C. `trace()`  
D. `handoff()`  

**Đáp án:** A. **Giải thích:** Đây là entrypoint streaming của SDK.

### Câu 2

Muốn nhận từng sự kiện trong một streamed run, dùng gì?

A. `print(result)` ngay  
B. `async for event in result.stream_events()`  
C. `await result.final_output`  
D. `agent.tools()`  

**Đáp án:** B. **Giải thích:** Cần duyệt async iterator tới khi hoàn tất.

### Câu 3

Dữ liệu nào thích hợp nối trực tiếp vào UI văn bản?

A. Mọi tool arguments  
B. Mọi span tracing  
C. Text delta, không phải mọi event  
D. API key  

**Đáp án:** C. **Giải thích:** Các event có ý nghĩa khác nhau.

### Câu 4

Khi nào một streamed run được coi hoàn tất?

A. Khi có ký tự đầu tiên  
B. Khi tool bắt đầu  
C. Ngay sau tạo `result`  
D. Khi `stream_events()` đã được tiêu thụ xong  

**Đáp án:** D. **Giải thích:** Iterator kết thúc mới cho biết run xong.

### Câu 5

Streaming có tự làm agent chạy ít bước hơn?

A. Không, nó chỉ thay đổi cách quan sát output  
B. Có, luôn bỏ qua tools  
C. Có, luôn dùng một model call  
D. Có, loại bỏ guardrails  

**Đáp án:** A. **Giải thích:** Logic điều phối về cơ bản không đổi.


**Tài liệu tra cứu:** [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) · [1](https://openai.github.io/openai-agents-python/streaming/)
