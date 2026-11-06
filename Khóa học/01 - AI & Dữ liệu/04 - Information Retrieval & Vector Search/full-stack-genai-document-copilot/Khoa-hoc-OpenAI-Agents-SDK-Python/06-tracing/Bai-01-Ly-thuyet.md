# Bài 01 — Kiến thức nền tảng: Tracing và quan sát Agent

> **Module 06 · Lesson** · Video: [xem từ 00:50:32](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=3032s).

**Tổng quan:** Theo dõi run, tool calls và handoffs để phát hiện lỗi; đọc trace/span và bảo vệ dữ liệu nhạy cảm.

## 1. Mục tiêu

Phân biệt trace với span, xác định công cụ nào được gọi trong từng lượt và sử dụng tracing để debug thay vì phỏng đoán từ câu trả lời cuối.

## 2. Vì sao tracing cần thiết?

Một hệ thống có ba agent và nhiều công cụ tạo ra luồng chạy khó quan sát bằng `print(final_output)`. Tracing cho phép xem agent bắt đầu/kết thúc, gọi model, tool, handoff và thời gian xử lý. Điều này đặc biệt hữu ích khi đầu ra có vẻ đúng nhưng quá trình bên trong lại gọi sai tool.

Trace là bức tranh của một workflow. Span là bước cụ thể như model generation, function call, handoff. Các span ghép lại giúp xác định nút tốn thời gian hoặc phát sinh lỗi.

## 3. Tracing mặc định và truy vết có tên

SDK có hỗ trợ tracing tích hợp. Có thể bọc một workflow nhiều lần chạy trong một trace:

```python
from agents import Agent, Runner, trace

planner = Agent(name="Planner", instructions="Viết dàn ý ngắn cho chủ đề được cho")
writer = Agent(name="Writer", instructions="Viết đoạn văn ngắn dựa trên dàn ý")

with trace("lesson-writing-workflow"):
    plan = Runner.run_sync(planner, "Python async/await")
    article = Runner.run_sync(writer, plan.final_output)
print(article.final_output)
```

Đặt tên trace theo nghiệp vụ, không nhét thông tin bí mật vào trace name. Chức năng ghi trace có thể phụ thuộc vào cấu hình SDK, mạng, tài khoản và chính sách dữ liệu.

## 4. Quy trình phân tích trace

1. Xác định user input và agent ban đầu.
2. Kiểm tra model đã yêu cầu tool/handoff nào.
3. Kiểm tra tham số tool và phản hồi lỗi/không có dữ liệu.
4. Xác định thời gian/usage nếu thông tin có sẵn.
5. So sánh final output với dữ liệu tool thực tế.

Nếu câu trả lời bị sai mà tool trả đúng, trọng tâm là instructions và cách model diễn giải. Nếu tool trả sai, trọng tâm là code công cụ và nguồn dữ liệu.

## 5. Privacy và môi trường production

Trace có thể chứa prompt, tham số tool, dữ liệu người dùng và đầu ra model. Đặt chính sách lưu trữ, redaction và quyền xem. Không gửi key, mật khẩu, dữ liệu y tế/khách hàng nhạy cảm vào tracing theo mặc định. Tránh coi trace là công cụ quản trị quyền; nó ghi nhận sau khi hành động xảy ra, không thay thế kiểm tra quyền trước khi thực thi.

## 6. Tổng kết

Tracing giúp chứng minh **hệ thống đã làm gì**, còn đánh giá output giúp biết **hệ thống đạt yêu cầu không**. Hai việc cần đi cùng nhau.

## 7. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Span khác trace ở điểm nào?

A. Span biểu diễn bước thành phần của workflow  
B. Span là API key  
C. Span luôn là file JSON  
D. Span dùng để chạy model  

**Đáp án:** A. **Giải thích:** Trace bao gồm các span như tool call, handoff.

### Câu 2

Nếu output sai nhưng tool trả đúng, nên xem gì trước?

A. Chỉ cài lại Python  
B. Instructions và cách model sử dụng kết quả tool  
C. Xóa data gốc  
D. Thay đổi tên folder  

**Đáp án:** B. **Giải thích:** Trace giúp phân biệt lỗi tool và lỗi suy luận.

### Câu 3

`with trace(...)` dùng để làm gì?

A. Bắt buộc tạo handoff  
B. Bảo mật password  
C. Nhóm các hoạt động trong một workflow có tên  
D. Tự động đánh giá accuracy  

**Đáp án:** C. **Giải thích:** Đây là cách đặt phạm vi truy vết.

### Câu 4

Tracing có thể chứa dữ liệu gì?

A. Chỉ số dòng source code  
B. Chỉ phiên bản Python  
C. Không có dữ liệu người dùng  
D. Nội dung prompt và tham số tool nhạy cảm  

**Đáp án:** D. **Giải thích:** Cần kiểm soát quyền truy cập và redaction.

### Câu 5

Tracing có thay thế authorization không?

A. Không, phải kiểm tra quyền trước khi thực thi  
B. Có trong mọi trường hợp  
C. Có nếu model mạnh  
D. Có với tool không có docstring  

**Đáp án:** A. **Giải thích:** Trace là công cụ quan sát, không phải quyền thực thi.


**Tài liệu tra cứu:** [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) · [1](https://openai.github.io/openai-agents-python/tracing/)
