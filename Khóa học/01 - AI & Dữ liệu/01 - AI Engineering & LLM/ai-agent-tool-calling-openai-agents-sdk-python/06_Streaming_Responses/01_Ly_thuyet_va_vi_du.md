# Streaming phản hồi và sự kiện chạy Agent

**Loại:** Lesson | **Trình độ:** Cơ bản → Trung cấp | **Thời điểm học:** 00:56:56

## 1. Tóm tắt
Phát văn bản theo từng phần, theo dõi event tool/handoff và tích hợp vào giao diện ứng dụng.

## 2. Mục tiêu học tập
- Giải thích được kiến thức cốt lõi của **Streaming phản hồi và sự kiện chạy Agent** bằng ví dụ độc lập.
- Phân biệt được trường hợp sử dụng đúng và rủi ro triển khai thường gặp.
- Chạy hoặc kiểm tra được đoạn Python minh họa theo yêu cầu của bài.
- Phân tích kết quả, xác định lỗi và đề xuất cách sửa có căn cứ.

## 3. Bối cảnh và vấn đề
Từ một ứng dụng mô hình chỉ phản hồi văn bản, chúng ta muốn xây dựng hệ thống có thể xử lý nhiệm vụ, gọi công cụ khi phù hợp, báo cáo trạng thái và giữ đúng quyền truy cập. Bài học giải thích từng khái niệm bằng ví dụ có thể kiểm tra, không phụ thuộc vào một UI cụ thể.

## 4. Kiến thức cốt lõi

### 4.1. Vì sao streaming cải thiện UX
Không streaming: người dùng chờ toàn bộ quá trình rồi mới nhận văn bản. Streaming: UI nhận các delta sớm hơn và có thể hiển thị trạng thái bước đang chạy. Không nên nhầm “đã có token đầu” với “task đã hoàn thành”.

`Runner.run_streamed(...)` trả đối tượng streaming; gọi `stream_events()` để nhận raw model events và higher-level run item/agent update events.

### 4.2. Raw response event và run item
`RawResponsesStreamEvent` phù hợp để hiển thị `response.output_text.delta`. `RunItemStreamEvent` mô tả sự kiện như tool được gọi hoặc hoàn tất; `AgentUpdatedStreamEvent` cho biết thay đổi agent. UI cần phân tách text hiển thị với progress trạng thái công việc.

Đối với web app, server có thể chuyển sự kiện qua SSE hoặc WebSocket. Tuy nhiên, UI nên xử lý reconnect, cancel, lỗi khi ngắt giữa chừng và phân biệt kết quả đã stream với câu trả lời cuối.

### 4.3. Đóng stream và xử lý lỗi
Tiêu thụ hết `stream_events()` trước khi coi run hoàn tất vì có bước post-processing sau delta cuối. Với tool ghi, không hủy vô điều kiện sau khi đã gọi nếu side effect đang diễn ra; cần thiết kế idempotency và thông báo trạng thái thật.

Lỗi timeout, bị guardrail chặn hoặc call model thất bại cần được phản hồi dưới dạng trạng thái lỗi, không ghép lẫn vào câu trả lời như thể mô hình tự nói.

## 5. Ví dụ Python
```python
import asyncio
from agents import Agent, Runner
from openai.types.responses import ResponseTextDeltaEvent

agent = Agent(name="Explainer", instructions="Giải thích chủ đề ngắn gọn và chính xác.")

async def main():
    result = Runner.run_streamed(agent, "Giải thích agent loop trong 5 câu")
    async for event in result.stream_events():
        if event.type == "raw_response_event" and isinstance(event.data, ResponseTextDeltaEvent):
            print(event.data.delta, end="", flush=True)
    print("\n--- Hoàn thành ---")
    print(result.final_output)

asyncio.run(main())
```

## 6. Phân tích ví dụ
`ResponseTextDeltaEvent` mang phần văn bản mới sinh. `result.final_output` chỉ nên dùng sau khi iterator kết thúc. Ví dụ console không cần frontend và là bước đầu để chuyển sang SSE.

**Lưu ý khi chạy:** Cần cấu hình `OPENAI_API_KEY`, cài `openai-agents` và dùng model mà tài khoản có quyền truy cập. Lời gọi API có thể phát sinh phí. Các ví dụ không thay thế bước kiểm tra quyền và dữ liệu trong ứng dụng thực.

## 7. Lỗi thường gặp và cách tránh
- **Sai lầm:** Coi token cuối là giao dịch bên ngoài đã commit. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.
- **Sai lầm:** Nối mọi loại event như text hiển thị cho người dùng. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.
- **Sai lầm:** Bỏ qua cancel/retry và tình trạng request treo. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.

## 8. Thực hành ngắn
Làm CLI chat streaming có 2 trạng thái “đang trả lời” và “hoàn thành”; mở rộng log khi agent đổi hoặc gọi tool.

## 9. Câu hỏi ôn tập trắc nghiệm
### 9.1. Câu 1
`run_streamed` trả gì?

A. Một chuỗi đầy đủ ngay  
B. Đối tượng để duyệt sự kiện bất đồng bộ  
C. Một video  
D. Một tệp CSV  

**Đáp án:** B
**Giải thích:** Ta cần đọc `stream_events()` để nhận sự kiện.

### 9.2. Câu 2
Để hiển thị text sớm, nên lắng nghe gì?

A. File descriptor  
B. HTTP header  
C. ResponseTextDeltaEvent  
D. SQLite commit  

**Đáp án:** C
**Giải thích:** Delta mô tả phần văn bản được sinh thêm.

### 9.3. Câu 3
Tool call event có nên ghép trực tiếp vào đoạn trả lời?

A. Luôn luôn  
B. Chỉ khi có 3 tool  
C. Không bao giờ hiển thị progress  
D. Không, nên tách trạng thái và nội dung  

**Đáp án:** D
**Giải thích:** Sự kiện điều phối không nhất thiết là câu trả lời cho user.

### 9.4. Câu 4
Khi nào coi streamed run hoàn tất?

A. Sau khi duyệt hết sự kiện và SDK hoàn thành xử lý  
B. Sau delta đầu  
C. Ngay khi tool bắt đầu  
D. Sau 1 giây  

**Đáp án:** A
**Giải thích:** Cuối iterator là ranh giới hoàn tất của một lần chạy.

### 9.5. Câu 5
Vì sao cần kiểm soát hủy stream?

A. Để đổi theme  
B. Tool có thể đã gây side effect  
C. Để dùng nhiều màu  
D. Vì model không hỗ trợ asyncio  

**Đáp án:** B
**Giải thích:** Hủy stream không tự đảo ngược thay đổi bên ngoài.

## 10. Tổng kết
Phát văn bản theo từng phần, theo dõi event tool/handoff và tích hợp vào giao diện ứng dụng. Mấu chốt là chọn mức tự động hóa vừa đủ, giữ dữ liệu có căn cứ và thử nghiệm hành vi thực tế trước khi đưa vào hệ thống phục vụ người dùng.

## 11. Đọc thêm
- [Tài liệu SDK chính thức](https://openai.github.io/openai-agents-python/)
- [Quickstart Python](https://openai.github.io/openai-agents-python/quickstart/)
