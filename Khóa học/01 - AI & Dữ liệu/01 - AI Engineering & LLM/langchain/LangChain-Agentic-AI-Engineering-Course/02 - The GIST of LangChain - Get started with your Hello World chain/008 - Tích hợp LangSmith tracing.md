# 008 - Tích hợp LangSmith để tracing ứng dụng LangChain

**Học phần:** The GIST of LangChain - Get started with your Hello World chain  
**Loại bài:** lab  
**Thời lượng:** 7 phút

---

## 1. Tổng quan

Debugger cho phép xem một response tại một thời điểm; LangSmith mở rộng khả năng quan sát thành tracing cho toàn bộ chain. Sau khi cấu hình API key và các environment variable cần thiết, các LangChain object có thể được trace tự động. Mỗi run cho phép xem input, output, model, thời gian chạy, token và cấu trúc các bước bên trong `RunnableSequence`.

## 2. Mục tiêu

Hoàn thành bài này, người học có thể:

- Cấu hình LangSmith tracing bằng environment variable.
- Tạo project để nhóm các trace.
- Chạy chain và tìm run tương ứng trong LangSmith.
- Đọc input, output và các bước của `RunnableSequence`.
- Quan sát latency, trạng thái, token và model.
- So sánh trace khi dùng model cục bộ và model từ OpenAI.

## 3. Cấu hình LangSmith

Sau khi tạo tài khoản LangSmith, tạo API key cho tracing. Các giá trị được đặt trong `.env`.

```dotenv
LANGSMITH_TRACING=true
LANGSMITH_API_KEY=<YOUR_LANGSMITH_API_KEY>
LANGSMITH_PROJECT=Hello World
```

Bài học cũng đề cập `LANGSMITH_ENDPOINT`. Endpoint mặc định được dùng cho region mặc định; khi tài khoản hoặc region yêu cầu endpoint khác, cần cấu hình đúng endpoint tương ứng để tránh lỗi xác thực.

```dotenv
LANGSMITH_ENDPOINT=<REGIONAL_ENDPOINT_IF_REQUIRED>
```

Không commit API key vào Git.

## 4. Chạy chain và mở trace

Sau khi environment variable được nạp, code LangChain hiện có không cần viết thêm logic tracing riêng cho ví dụ này. Chạy lại `main.py`, sau đó mở project `Hello World` trong LangSmith.

Một run của chain sẽ xuất hiện dưới dạng `RunnableSequence`.

Trong trace, có thể quan sát:

- input dưới dạng human message;
- output dưới dạng AI message;
- chat model đã được gọi;
- thời điểm bắt đầu và kết thúc;
- thời gian chờ token đầu tiên;
- trạng thái thành công hay lỗi;
- tổng token đã sử dụng.

## 5. Đọc cấu trúc RunnableSequence

Hello World chain được tạo bằng:

```python
chain = summary_prompt_template | llm
```

Trace thể hiện chính flow này. Bước đầu tiên là `PromptTemplate` format dữ liệu runtime thành prompt value. Output đó được chuyển vào chat model để tạo AI response.

```text
{"information": ...}
        ↓
PromptTemplate
        ↓
Prompt value
        ↓
Chat model
        ↓
AIMessage
```

Tracing làm cho LCEL bớt trừu tượng vì người học có thể nhìn thấy từng bước thực sự được thực thi.

## 6. So sánh nhiều lần chạy

Bài học chạy chain với model Ollama, sau đó chuyển trở lại GPT-5 và chạy lại. LangSmith giữ các run riêng, cho phép so sánh model và thời gian thực thi.

Trong ví dụ, run dùng GPT-5 mất khoảng `16 giây`. Con số này là quan sát của lần chạy cụ thể trong bài, không phải benchmark chung cho model.

Ở trang tổng hợp trace, LangSmith còn cho phép lọc run, dùng tag và quan sát các thống kê như error rate, median token, `P50` và `P90`.

## 7. Vì sao tracing quan trọng?

Khi chain chỉ có hai bước, flow còn dễ hình dung. Với agent, tool và nhiều nhánh xử lý, chỉ nhìn output cuối cùng không cho biết model đã làm gì ở từng bước.

Tracing giúp trả lời:

- Prompt cuối cùng thực sự là gì?
- Model nào đã được gọi?
- Bước nào chậm?
- Token được dùng ở đâu?
- Run nào bị lỗi?
- Output của bước trước đã trở thành input của bước sau như thế nào?

Đây là nền tảng để debug, monitor và phân tích ứng dụng LLM khi workflow phức tạp hơn.
