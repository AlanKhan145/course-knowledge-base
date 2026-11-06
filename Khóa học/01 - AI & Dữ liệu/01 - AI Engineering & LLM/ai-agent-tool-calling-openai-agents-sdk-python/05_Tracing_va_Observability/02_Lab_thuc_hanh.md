# Thực hành — Tracing và quan sát vòng đời Agent

**Loại:** Lab | **Đầu ra:** mã Python hoạt động và bản ghi kiểm thử

## 1. Tổng quan
Ghi nhận trace cho quy trình hỗ trợ khách hàng: triage → chuyên gia → phản hồi; xác định một run đi đúng và một run đi sai nhánh.

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
Bật cấu hình tracing theo tài liệu của phiên bản SDK dùng trong dự án.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.2. Bước 2
Chạy 3 yêu cầu có kết quả khác nhau và đặt tên workflow có ý nghĩa.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.3. Bước 3
Kiểm tra spans cho generation, handoff và tool (nếu có).

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.4. Bước 4
Viết báo cáo debug gồm expected, observed, root cause giả thuyết và thay đổi instructions.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.5. Bước 5
Không xuất key, cookie hay thông tin cá nhân vào log chia sẻ.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

## 5. Mã tham khảo
```python
import asyncio
from agents import Agent, Runner, trace

analyzer = Agent(name="Analyzer", instructions="Tóm tắt ý chính rõ ràng.")
reviewer = Agent(name="Reviewer", instructions="Kiểm tra tính mạch lạc của đoạn tóm tắt.")

async def main():
    with trace("Two-stage review"):
        first = await Runner.run(analyzer, "Tóm tắt lợi ích của unit test")
        second = await Runner.run(reviewer, str(first.final_output))
    print(second.final_output)

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
Trace khác span ở điểm nào?

A. Trace luôn là tool  
B. Trace chứa nhiều span của workflow  
C. Span là user  
D. Không có khác biệt  

**Đáp án:** B
**Giải thích:** Trace tập hợp hoạt động; spans mô tả bước con.

### 10.2. Câu 2
Dữ liệu nào có thể quan sát để debug?

A. Chỉ kết quả UI  
B. Chỉ CPU  
C. Tool call và handoff  
D. Không có  

**Đáp án:** C
**Giải thích:** Tracing hiển thị bước thực thi quan trọng.

### 10.3. Câu 3
Vì sao cần hạn chế nội dung trong trace?

A. Cho code ngắn  
B. Tăng độ đẹp dashboard  
C. Tránh ngoại lệ  
D. Có thể chứa thông tin nhạy cảm  

**Đáp án:** D
**Giải thích:** Logs có thể làm lộ dữ liệu nếu không kiểm soát.

### 10.4. Câu 4
`with trace(...)` thường dùng để làm gì?

A. Nhóm spans của workflow  
B. Tạo API key  
C. Tạo DB  
D. Đổi model tự động  

**Đáp án:** A
**Giải thích:** Dùng trace scope để nhóm các run liên quan.

### 10.5. Câu 5
Trace chứng minh output đúng tuyệt đối không?

A. Có  
B. Không, cần đánh giá chất lượng riêng  
C. Chỉ với 2 agents  
D. Chỉ khi có streaming  

**Đáp án:** B
**Giải thích:** Trace cho biết quá trình, không tự đánh giá tính đúng.

## 11. Tổng kết
Theo dõi calls, handoffs và lỗi bằng traces/spans; xây dựng cách debug có hệ thống. Thực hành thành công khi có bằng chứng chạy và bảng kiểm chứng, không chỉ đoạn code viết đúng cú pháp.
