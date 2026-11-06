# Thực hành — Handoffs và điều phối nhiều Agent

**Loại:** Lab | **Đầu ra:** mã Python hoạt động và bản ghi kiểm thử

## 1. Tổng quan
Xây dựng hệ thống hỗ trợ 3 nhánh (billing, technical, general); tạo tập câu hỏi kiểm thử phân tuyến và kiểm tra agent cuối.

## 2. Mục tiêu
- Tự triển khai được ví dụ trong một dự án Python độc lập.
- Quan sát được kết quả thực tế của Agent/Runner hoặc tool.
- Tìm và giải thích được ít nhất một tình huống lỗi.
- Hoàn thiện checklist và câu hỏi ôn tập.

## 3. Chuẩn bị
- Python và virtual environment đang kích hoạt.
- `pip install openai-agents python-dotenv`.
- Biến `OPENAI_API_KEY` được cấu hình an toàn; không đưa key vào code hay bản nộp.
- Trình soạn thảo VS Code, PyCharm hoặc Jupyter.
- Đọc mục tiêu và kiến thức cốt lõi trước khi bắt đầu.

## 4. Quy trình thực hiện

### 4.1. Bước 1
Định nghĩa phạm vi rõ ràng cho ba chuyên gia và nhiệm vụ của triage.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.2. Bước 2
Đưa các agent chuyên gia vào `handoffs` của triage.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.3. Bước 3
Chuẩn bị 9 câu hỏi gồm câu rõ ràng, mơ hồ và câu ngoài phạm vi.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.4. Bước 4
Chạy test, ghi `last_agent.name`, kết quả và lý do đúng/sai.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.5. Bước 5
Bổ sung fallback cho yêu cầu mơ hồ và số lượt tối đa để tránh lặp.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

## 5. Mã tham khảo
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
Đoạn mã là điểm khởi đầu, không phải toàn bộ lời giải cho mọi bước thực hành. Hãy bổ sung phần kiểm thử và xử lý tình huống theo yêu cầu. **Không chạy tool có side effect trên dữ liệu thật trong bài lab.**

## 6. Kiểm thử và đối chiếu kết quả
| Ca kiểm thử | Đầu vào | Kỳ vọng | Kết quả quan sát |
| --- | --- | --- | --- |
| Bình thường | Một yêu cầu đúng phạm vi | Có kết quả hợp lệ | Tự điền |
| Thiếu dữ liệu | Một tham số vắng/sai | Giải thích thiếu dữ liệu | Tự điền |
| Trường hợp biên | Yêu cầu mơ hồ/khó | Không bịa hoặc vượt quyền | Tự điền |

## 7. Debug và khắc phục
- **`ModuleNotFoundError`:** xác nhận `python -m pip show openai-agents` trong đúng môi trường.
- **Authentication/permission:** xác nhận key và quyền model, không in key.
- **Kết quả model thiếu ổn định:** thử nhiều câu đầu vào, thắt chặt schema/tiêu chí, quan sát trace.
- **Tool hoặc stream bị lỗi:** ghi exception, không báo đã hoàn thành hành động ngoài hệ thống nếu chưa có xác nhận.
- **Nhầm dữ liệu thực và demo:** ghi rõ dữ liệu nào cố định và dữ liệu nào cần API/DB thật.

## 8. Deliverable
Nộp một file Python hoặc notebook đã chạy được; bảng ba ca kiểm thử; ảnh chụp/log đã che thông tin nhạy cảm; báo cáo ngắn về một lỗi và cách giải quyết.

## 9. Checklist hoàn thành
- [ ] Chạy được code trong môi trường riêng.
- [ ] Không commit API key, file `.env` hoặc dữ liệu nhạy cảm.
- [ ] Có ít nhất ba ca kiểm thử và kết quả quan sát.
- [ ] Đã phân biệt hành vi model với thao tác thực.
- [ ] Giải thích được một lỗi và cách khắc phục.

## 10. Câu hỏi ôn tập trắc nghiệm
### 10.1. Câu 1
Sau handoff, ai tiếp tục xử lý yêu cầu?

A. Luôn agent ban đầu  
B. Agent đích được chuyển giao  
C. Python CLI  
D. Database  

**Đáp án:** B
**Giải thích:** Handoff chuyển quyền sang agent đích.

### 10.2. Câu 2
`last_agent` có ý nghĩa gì?

A. Tool cuối  
B. Model đầu  
C. Agent cuối của run  
D. Số lượt chạy  

**Đáp án:** C
**Giải thích:** Kết quả run chứa agent đang nắm quyền khi hoàn thành.

### 10.3. Câu 3
Triage agent nên đảm nhận gì?

A. Viết mọi câu trả lời chuyên sâu  
B. Xóa dữ liệu cũ  
C. Luôn từ chối  
D. Phân tuyến theo phạm vi chuyên gia  

**Đáp án:** D
**Giải thích:** Triage chuyên phát hiện đúng tuyến xử lý.

### 10.4. Câu 4
Handoff metadata có dùng làm phân quyền được không?

A. Không, quyền phải kiểm ở backend  
B. Có luôn  
C. Có nếu là JSON  
D. Chỉ khi chứa priority  

**Đáp án:** A
**Giải thích:** Lý do model tạo không chứng minh người dùng được phép.

### 10.5. Câu 5
Một lỗi thiết kế multi-agent thường gặp?

A. Ghi lại agent cuối  
B. Handoff qua lại không có điều kiện dừng  
C. Mỗi agent có chuyên môn  
D. Có bài test phân tuyến  

**Đáp án:** B
**Giải thích:** Chu kỳ chuyển giao làm tăng chi phí và có thể không hoàn thành.

## 11. Tổng kết
Hiểu chuyển quyền điều khiển, phân tuyến yêu cầu và phối hợp agent hỗ trợ khách hàng có ngữ cảnh. Thực hành thành công khi có bằng chứng chạy và bảng kiểm chứng, không chỉ đoạn code viết đúng cú pháp.
