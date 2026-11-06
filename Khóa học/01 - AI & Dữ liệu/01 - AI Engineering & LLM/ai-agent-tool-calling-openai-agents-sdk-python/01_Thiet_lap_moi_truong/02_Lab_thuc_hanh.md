# Thực hành — Thiết lập môi trường Python, API key và Jupyter

**Loại:** Lab | **Đầu ra:** mã Python hoạt động và bản ghi kiểm thử

## 1. Tổng quan
Thiết lập dự án từ thư mục trống và viết một script kiểm tra key an toàn; chọn kernel notebook đúng `.venv`.

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
Tạo thư mục dự án, chạy `python -m venv .venv` và kích hoạt theo hệ điều hành.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.2. Bước 2
Tạo `requirements.txt` gồm `openai-agents`, `python-dotenv`, `ipykernel`, rồi cài bằng `pip install -r requirements.txt`.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.3. Bước 3
Tạo `.env` cùng `.gitignore` theo hướng dẫn; không để key thật trong ảnh màn hình.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.4. Bước 4
Chạy script kiểm tra key; tạo notebook và chọn kernel tương ứng.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.5. Bước 5
Thử tắt/đổi kernel để quan sát sự khác nhau giữa môi trường đúng và sai.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

## 5. Mã tham khảo
```python
from dotenv import load_dotenv
import os

load_dotenv()
if not os.getenv("OPENAI_API_KEY"):
    raise RuntimeError("Thiếu OPENAI_API_KEY trong môi trường")
print("Đã cấu hình API key (không in giá trị bí mật).")
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
`venv` chủ yếu dùng để làm gì?

A. Tạo API key  
B. Cô lập dependency của dự án  
C. Mở cổng mạng  
D. Nén file  

**Đáp án:** B
**Giải thích:** Môi trường riêng tránh ảnh hưởng giữa các dự án.

### 10.2. Câu 2
Đâu là nơi không nên chứa API key thật?

A. Secret manager  
B. Biến môi trường  
C. File được commit lên GitHub  
D. File `.env` bị bỏ qua khỏi Git  

**Đáp án:** C
**Giải thích:** Source control không phải kho chứa bí mật.

### 10.3. Câu 3
Notebook không import được SDK dù terminal cài được: kiểm tra gì đầu tiên?

A. Màu VS Code  
B. Tên notebook  
C. Card đồ họa  
D. Kernel/interpreter của notebook  

**Đáp án:** D
**Giải thích:** Kernel sai là nguyên nhân phổ biến.

### 10.4. Câu 4
Cú pháp cài theo dependency file là gì?

A. pip install -r requirements.txt  
B. pip freeze -r  
C. python env run  
D. pip init  

**Đáp án:** A
**Giải thích:** `-r` đọc danh sách gói từ file.

### 10.5. Câu 5
Có API key thì suy ra điều gì?

A. Mọi model đều miễn phí  
B. Không cần hạn mức  
C. Có thông tin xác thực, còn cần xét quyền và billing  
D. Không cần internet  

**Đáp án:** C
**Giải thích:** Quyền truy cập và chi phí vẫn phụ thuộc tài khoản, model và mức sử dụng.

## 11. Tổng kết
Tạo môi trường độc lập, cài gói SDK, dùng notebook và quản lý thông tin bí mật đúng cách. Thực hành thành công khi có bằng chứng chạy và bảng kiểm chứng, không chỉ đoạn code viết đúng cú pháp.
