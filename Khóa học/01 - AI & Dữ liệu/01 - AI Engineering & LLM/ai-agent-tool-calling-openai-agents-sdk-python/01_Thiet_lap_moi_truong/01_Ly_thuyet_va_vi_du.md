# Thiết lập môi trường Python, API key và Jupyter

**Loại:** Lesson | **Trình độ:** Cơ bản → Trung cấp | **Thời điểm học:** 00:06:37

## 1. Tóm tắt
Tạo môi trường độc lập, cài gói SDK, dùng notebook và quản lý thông tin bí mật đúng cách.

## 2. Mục tiêu học tập
- Giải thích được kiến thức cốt lõi của **Thiết lập môi trường Python, API key và Jupyter** bằng ví dụ độc lập.
- Phân biệt được trường hợp sử dụng đúng và rủi ro triển khai thường gặp.
- Chạy hoặc kiểm tra được đoạn Python minh họa theo yêu cầu của bài.
- Phân tích kết quả, xác định lỗi và đề xuất cách sửa có căn cứ.

## 3. Bối cảnh và vấn đề
Từ một ứng dụng mô hình chỉ phản hồi văn bản, chúng ta muốn xây dựng hệ thống có thể xử lý nhiệm vụ, gọi công cụ khi phù hợp, báo cáo trạng thái và giữ đúng quyền truy cập. Bài học giải thích từng khái niệm bằng ví dụ có thể kiểm tra, không phụ thuộc vào một UI cụ thể.

## 4. Kiến thức cốt lõi

### 4.1. Virtual environment và dependency
`venv` tách các gói của từng dự án, giảm xung đột thư viện và giúp tái lập môi trường. Cấu trúc cơ bản gồm thư mục dự án, `.venv/`, `requirements.txt`, `.env` và mã nguồn. `requirements.txt` lưu danh sách gói cần cài, nhưng không tự động quản lý bí mật hoặc định nghĩa môi trường thực thi.

```bash
python --version
python -m venv .venv
# Windows PowerShell: .venv\Scripts\Activate.ps1
# macOS/Linux: source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install openai-agents python-dotenv ipykernel
python -m pip freeze > requirements-lock.txt
```
Ví dụ dành cho Python hiện đại tương thích với phiên bản SDK được cài; trước khi pin phiên bản hãy đối chiếu metadata của release đang sử dụng.

### 4.2. Jupyter Notebook và môi trường chạy
Tạo file `.ipynb` và chọn đúng Python interpreter/kernel của `.venv` trong VS Code. Với Jupyter, `%pip install ...` chạy trong kernel đang chọn; tuy nhiên cách này dễ làm lệch dependency giữa các notebook, nên phần hướng dẫn khuyến khích thống nhất file yêu cầu cài đặt.

Một lỗi thường gặp là cài thành công ở terminal nhưng notebook vẫn `ModuleNotFoundError`: nguyên nhân thường do notebook chọn kernel khác môi trường vừa cài.

### 4.3. API key và bảo mật
Tạo API key trên dashboard phù hợp với project của bạn. Chỉ lưu key trong biến môi trường hoặc secret manager; tuyệt đối không commit `.env`, hiển thị nguyên key trong notebook, đưa vào ảnh chụp hay gửi lên repository. API key có thể cần tổ chức/project có hạn mức và phương thức thanh toán riêng; mức chi phí phụ thuộc model và số lượng token/công cụ.

Trong `.gitignore` nên thêm `.env`, `.venv/`, `__pycache__/`, `*.db`. Trong `.env` đặt `OPENAI_API_KEY=...` và biến `OPENAI_MODEL=...` nếu muốn chỉ rõ model. Tên model cụ thể và quyền truy cập cần kiểm tra trong tài khoản lúc thực hành.

## 5. Ví dụ Python
```python
from dotenv import load_dotenv
import os

load_dotenv()
if not os.getenv("OPENAI_API_KEY"):
    raise RuntimeError("Thiếu OPENAI_API_KEY trong môi trường")
print("Đã cấu hình API key (không in giá trị bí mật).")
```

## 6. Phân tích ví dụ
`load_dotenv()` nạp các biến từ `.env`; `os.getenv` chỉ kiểm tra sự tồn tại. Đừng in hay ghi log key. Nếu dùng Jupyter, chạy ô nạp biến trước ô dùng SDK.

**Lưu ý khi chạy:** Cần cấu hình `OPENAI_API_KEY`, cài `openai-agents` và dùng model mà tài khoản có quyền truy cập. Lời gọi API có thể phát sinh phí. Các ví dụ không thay thế bước kiểm tra quyền và dữ liệu trong ứng dụng thực.

## 7. Lỗi thường gặp và cách tránh
- **Sai lầm:** Chạy lệnh cài gói ngoài môi trường ảo. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.
- **Sai lầm:** Commit `.env` hoặc gắn key cứng trong file Python. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.
- **Sai lầm:** Nghĩ rằng có key đồng nghĩa được dùng mọi model miễn phí. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.

## 8. Thực hành ngắn
Thiết lập dự án từ thư mục trống và viết một script kiểm tra key an toàn; chọn kernel notebook đúng `.venv`.

## 9. Câu hỏi ôn tập trắc nghiệm
### 9.1. Câu 1
`venv` chủ yếu dùng để làm gì?

A. Tạo API key  
B. Cô lập dependency của dự án  
C. Mở cổng mạng  
D. Nén file  

**Đáp án:** B
**Giải thích:** Môi trường riêng tránh ảnh hưởng giữa các dự án.

### 9.2. Câu 2
Đâu là nơi không nên chứa API key thật?

A. Secret manager  
B. Biến môi trường  
C. File được commit lên GitHub  
D. File `.env` bị bỏ qua khỏi Git  

**Đáp án:** C
**Giải thích:** Source control không phải kho chứa bí mật.

### 9.3. Câu 3
Notebook không import được SDK dù terminal cài được: kiểm tra gì đầu tiên?

A. Màu VS Code  
B. Tên notebook  
C. Card đồ họa  
D. Kernel/interpreter của notebook  

**Đáp án:** D
**Giải thích:** Kernel sai là nguyên nhân phổ biến.

### 9.4. Câu 4
Cú pháp cài theo dependency file là gì?

A. pip install -r requirements.txt  
B. pip freeze -r  
C. python env run  
D. pip init  

**Đáp án:** A
**Giải thích:** `-r` đọc danh sách gói từ file.

### 9.5. Câu 5
Có API key thì suy ra điều gì?

A. Mọi model đều miễn phí  
B. Không cần hạn mức  
C. Có thông tin xác thực, còn cần xét quyền và billing  
D. Không cần internet  

**Đáp án:** C
**Giải thích:** Quyền truy cập và chi phí vẫn phụ thuộc tài khoản, model và mức sử dụng.

## 10. Tổng kết
Tạo môi trường độc lập, cài gói SDK, dùng notebook và quản lý thông tin bí mật đúng cách. Mấu chốt là chọn mức tự động hóa vừa đủ, giữ dữ liệu có căn cứ và thử nghiệm hành vi thực tế trước khi đưa vào hệ thống phục vụ người dùng.

## 11. Đọc thêm
- [Tài liệu SDK chính thức](https://openai.github.io/openai-agents-python/)
- [Quickstart Python](https://openai.github.io/openai-agents-python/quickstart/)
