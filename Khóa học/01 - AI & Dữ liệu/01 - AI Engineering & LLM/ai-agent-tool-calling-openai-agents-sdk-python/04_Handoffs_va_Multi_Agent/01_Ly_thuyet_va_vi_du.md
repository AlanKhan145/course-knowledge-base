# Handoffs và điều phối nhiều Agent

**Loại:** Lesson | **Trình độ:** Cơ bản → Trung cấp | **Thời điểm học:** 00:36:31

## 1. Tóm tắt
Hiểu chuyển quyền điều khiển, phân tuyến yêu cầu và phối hợp agent hỗ trợ khách hàng có ngữ cảnh.

## 2. Mục tiêu học tập
- Giải thích được kiến thức cốt lõi của **Handoffs và điều phối nhiều Agent** bằng ví dụ độc lập.
- Phân biệt được trường hợp sử dụng đúng và rủi ro triển khai thường gặp.
- Chạy hoặc kiểm tra được đoạn Python minh họa theo yêu cầu của bài.
- Phân tích kết quả, xác định lỗi và đề xuất cách sửa có căn cứ.

## 3. Bối cảnh và vấn đề
Từ một ứng dụng mô hình chỉ phản hồi văn bản, chúng ta muốn xây dựng hệ thống có thể xử lý nhiệm vụ, gọi công cụ khi phù hợp, báo cáo trạng thái và giữ đúng quyền truy cập. Bài học giải thích từng khái niệm bằng ví dụ có thể kiểm tra, không phụ thuộc vào một UI cụ thể.

## 4. Kiến thức cốt lõi

### 4.1. Handoff chuyển quyền điều khiển
Khi khai báo `handoffs=[target_agent]`, agent hiện tại có thể đề xuất chuyển luồng sang agent đích. Agent nhận quyền tiếp tục giải quyết yêu cầu theo instructions, tools và chính sách riêng; `final_output` cuối cùng không nhất thiết đến từ agent đầu.

Đối chiếu: nối hai agent bằng mã Python là thứ tự cố định; `handoff` là tuyến động do model quyết định. Trong dự án thực, cần kiểm soát nguồn gốc dữ liệu, tách quyền và giới hạn chuyển qua lại.

### 4.2. Triage và chuyên gia
Triage agent nhận câu hỏi chung, phân loại nhu cầu và chuyển sang agent hỗ trợ kỹ thuật, agent hóa đơn hoặc agent tư vấn. Mỗi chuyên gia cần mô tả rõ phạm vi xử lý, điều kiện từ chối/leo thang và công cụ riêng.

Chẳng hạn người dùng “đã thanh toán nhưng chưa nhận hóa đơn” nên đến billing agent; “ứng dụng không đăng nhập được” nên tới technical support. Nếu thiếu thông tin, triage cần hỏi làm rõ thay vì chuyển tùy tiện.

### 4.3. Handoff metadata và kiểm toán
`handoff()` cho phép đặt mô tả hoặc callback `on_handoff`; với `input_type` Pydantic có thể yêu cầu model nêu lý do chuyển, mức độ ưu tiên. Đây là metadata chuyển giao, không phải dữ liệu đầu vào duy nhất của agent tiếp theo.

Trong hệ thống có hành động ảnh hưởng tài khoản, callback không nên tin metadata do model tạo để quyết định quyền; quyền phải được tra từ backend.

## 5. Ví dụ Python
```python
import asyncio
from agents import Agent, Runner

billing = Agent(name="Billing", instructions="Giải thích vấn đề hóa đơn; không tự hoàn tiền.")
technical = Agent(name="Technical", instructions="Hướng dẫn xử lý lỗi đăng nhập và phần mềm.")
triage = Agent(
    name="Triage",
    instructions="Chuyển câu hỏi về hóa đơn sang Billing, lỗi ứng dụng sang Technical.",
    handoffs=[billing, technical],
)

async def main():
    result = await Runner.run(triage, "Tôi không nhận được hóa đơn sau khi thanh toán")
    print("Agent cuối:", result.last_agent.name)
    print(result.final_output)

asyncio.run(main())
```

## 6. Phân tích ví dụ
`result.last_agent` cho biết agent nắm điều khiển khi run kết thúc. Việc handoff phụ thuộc quyết định model và không được đảm bảo xảy ra cho mọi input; đo qua tracing/test thay vì suy đoán.

**Lưu ý khi chạy:** Cần cấu hình `OPENAI_API_KEY`, cài `openai-agents` và dùng model mà tài khoản có quyền truy cập. Lời gọi API có thể phát sinh phí. Các ví dụ không thay thế bước kiểm tra quyền và dữ liệu trong ứng dụng thực.

## 7. Lỗi thường gặp và cách tránh
- **Sai lầm:** Gộp tool ghi dữ liệu nhạy cảm vào triage không cần thiết. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.
- **Sai lầm:** Để hai agent chuyển qua lại vô hạn hoặc không có fallback. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.
- **Sai lầm:** Nhầm handoff với việc gọi agent như một công cụ trả kết quả cho manager. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.

## 8. Thực hành ngắn
Xây dựng hệ thống hỗ trợ 3 nhánh (billing, technical, general); tạo tập câu hỏi kiểm thử phân tuyến và kiểm tra agent cuối.

## 9. Câu hỏi ôn tập trắc nghiệm
### 9.1. Câu 1
Sau handoff, ai tiếp tục xử lý yêu cầu?

A. Luôn agent ban đầu  
B. Agent đích được chuyển giao  
C. Python CLI  
D. Database  

**Đáp án:** B
**Giải thích:** Handoff chuyển quyền sang agent đích.

### 9.2. Câu 2
`last_agent` có ý nghĩa gì?

A. Tool cuối  
B. Model đầu  
C. Agent cuối của run  
D. Số lượt chạy  

**Đáp án:** C
**Giải thích:** Kết quả run chứa agent đang nắm quyền khi hoàn thành.

### 9.3. Câu 3
Triage agent nên đảm nhận gì?

A. Viết mọi câu trả lời chuyên sâu  
B. Xóa dữ liệu cũ  
C. Luôn từ chối  
D. Phân tuyến theo phạm vi chuyên gia  

**Đáp án:** D
**Giải thích:** Triage chuyên phát hiện đúng tuyến xử lý.

### 9.4. Câu 4
Handoff metadata có dùng làm phân quyền được không?

A. Không, quyền phải kiểm ở backend  
B. Có luôn  
C. Có nếu là JSON  
D. Chỉ khi chứa priority  

**Đáp án:** A
**Giải thích:** Lý do model tạo không chứng minh người dùng được phép.

### 9.5. Câu 5
Một lỗi thiết kế multi-agent thường gặp?

A. Ghi lại agent cuối  
B. Handoff qua lại không có điều kiện dừng  
C. Mỗi agent có chuyên môn  
D. Có bài test phân tuyến  

**Đáp án:** B
**Giải thích:** Chu kỳ chuyển giao làm tăng chi phí và có thể không hoàn thành.

## 10. Tổng kết
Hiểu chuyển quyền điều khiển, phân tuyến yêu cầu và phối hợp agent hỗ trợ khách hàng có ngữ cảnh. Mấu chốt là chọn mức tự động hóa vừa đủ, giữ dữ liệu có căn cứ và thử nghiệm hành vi thực tế trước khi đưa vào hệ thống phục vụ người dùng.

## 11. Đọc thêm
- [Tài liệu SDK chính thức](https://openai.github.io/openai-agents-python/)
- [Quickstart Python](https://openai.github.io/openai-agents-python/quickstart/)
