# 006 - Debugging response và AIMessage trong LangChain

**Học phần:** The GIST of LangChain - Get started with your Hello World chain  
**Loại bài:** lesson  
**Thời lượng:** 1 phút

---

## 1. Tóm tắt

Sau khi chain chạy thành công, debugger được dùng để quan sát object trả về thay vì chỉ in `response.content`. Response của chat model là một message object, thường là `AIMessage`, chứa nội dung model sinh ra cùng nhiều metadata hữu ích cho debugging, monitoring và phân tích.

## 2. Mục tiêu học tập

Sau bài học, người học có thể:

- Dùng breakpoint để dừng chương trình tại vị trí nhận response.
- Nhận biết `response.content` là phần nội dung văn bản của message.
- Kiểm tra type và metadata của AI response.
- Giải thích vì sao metadata hữu ích khi debug ứng dụng LLM.

## 3. Quan sát response bằng debugger

Đặt breakpoint sau lời gọi:

```python
response = chain.invoke(
    {
        "information": information,
    }
)
```

Chạy chương trình ở debug mode và dừng tại breakpoint. Thay vì coi `response` là một chuỗi text, hãy mở object để xem cấu trúc của nó.

Phần nội dung chính nằm ở:

```python
response.content
```

Đây là giá trị thường được in ra cho người dùng.

## 4. AIMessage chứa nhiều hơn nội dung văn bản

Message object còn có thể chứa metadata liên quan đến lần gọi model. Trong ví dụ, debugger được dùng để kiểm tra các thông tin như:

- loại message;
- model đã sử dụng;
- finish reason;
- token usage;
- response metadata;
- dữ liệu liên quan đến khả năng tool calling.

Điều này giải thích vì sao LangChain trả về một object có cấu trúc thay vì chỉ trả về string.

## 5. Vì sao metadata quan trọng?

Khi ứng dụng chỉ có một chain nhỏ, `response.content` có thể đủ để kiểm tra kết quả. Khi workflow lớn hơn, metadata giúp trả lời các câu hỏi vận hành:

- Model nào thực sự xử lý request?
- Request kết thúc theo lý do nào?
- Bao nhiêu token đã được sử dụng?
- Response có chứa dữ liệu phục vụ tool calling hay không?
- Một lỗi hoặc output bất thường xảy ra ở đâu?

Debug object trực tiếp là bước đầu tiên để hiểu dữ liệu mà LangChain giữ xung quanh một lần gọi LLM. LangSmith sẽ mở rộng khả năng này từ mức một object trong IDE sang tracing toàn bộ workflow.
