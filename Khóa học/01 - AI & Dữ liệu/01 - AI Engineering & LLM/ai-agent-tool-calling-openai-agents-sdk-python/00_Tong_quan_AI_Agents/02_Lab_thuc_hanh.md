# Thực hành — Tổng quan AI Agents và lộ trình học

**Loại:** Lab | **Đầu ra:** mã Python hoạt động và bản ghi kiểm thử

## 1. Tổng quan
Vẽ vòng lặp agent của trợ lý lập kế hoạch: phân loại yêu cầu “gợi ý lịch”, “kiểm tra lịch”, “tạo lịch”; ghi rõ thao tác nào phải gọi tool và thao tác nào cần xác nhận. Chạy mã ví dụ và so sánh lời trả lời với quyền thực tế.

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
Tạo bảng ba loại hành động: hỏi–đáp, đọc dữ liệu, thay đổi dữ liệu.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.2. Bước 2
Viết hướng dẫn hạn chế việc khẳng định đã đặt lịch nếu không có tool.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.3. Bước 3
Chạy thử 3 câu hỏi cùng một agent rồi ghi lại trạng thái mong muốn.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.4. Bước 4
Phác thảo điều kiện dừng và kế hoạch xử lý khi công cụ lỗi.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

## 5. Mã tham khảo
```python
from agents import Agent, Runner

assistant = Agent(
    name="Daily planning assistant",
    instructions="Giúp người dùng lập kế hoạch. Không khẳng định đã đặt lịch nếu chưa có công cụ đặt lịch."
)
result = Runner.run_sync(assistant, "Lập một lịch học Python 60 phút")
print(result.final_output)
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
Đặc điểm cốt lõi của agent có tool là gì?

A. Mọi câu trả lời đều đúng  
B. Có thể lựa chọn thực thi hành động qua công cụ được cấp  
C. Không cần ràng buộc quyền  
D. Luôn có nhiều mô hình  

**Đáp án:** B
**Giải thích:** Công cụ tạo cầu nối có kiểm soát từ mô hình sang thao tác thực.

### 10.2. Câu 2
Yêu cầu “đặt lịch” không có tool lịch phải xử lý thế nào?

A. Thông báo đã đặt  
B. Tự tạo kết quả giả  
C. Giải thích chưa thể thực hiện và gợi ý bước kế tiếp  
D. Bỏ qua yêu cầu  

**Đáp án:** C
**Giải thích:** Không thể xác nhận side effect khi chưa thực thi công cụ tương ứng.

### 10.3. Câu 3
Khi nào nên ưu tiên một agent?

A. Nhiệm vụ hẹp, ít công cụ  
B. Mọi trường hợp  
C. Bất kỳ khi nào có database  
D. Khi có 100 công cụ  

**Đáp án:** A
**Giải thích:** Một agent đơn giản thường rẻ, dễ quan sát và bảo trì hơn.

### 10.4. Câu 4
Vòng lặp nào mô tả đúng?

A. Tool → user → tool vô hạn  
B. LLM → kết thúc luôn  
C. Tool tự chọn instruction  
D. Model chọn tool, ứng dụng thực thi, trả kết quả về vòng lặp  

**Đáp án:** D
**Giải thích:** Runner điều phối các bước mô hình/tool đến khi có kết quả cuối.

### 10.5. Câu 5
Vì sao giới hạn quyền là cần thiết?

A. Để tăng token  
B. Vì agent có thể gọi tool gây tác động ngoài hệ thống  
C. Để thay thế authentication  
D. Vì model tự động kiểm tra mọi quyền  

**Đáp án:** B
**Giải thích:** Thực thi công cụ phải được ràng buộc bởi quyền và quy tắc ứng dụng.

## 11. Tổng kết
Phân biệt LLM, agent, tool và hệ thống nhiều agent; nắm được vòng lặp thực thi và xác định phạm vi phù hợp để sử dụng agent. Thực hành thành công khi có bằng chứng chạy và bảng kiểm chứng, không chỉ đoạn code viết đúng cú pháp.
