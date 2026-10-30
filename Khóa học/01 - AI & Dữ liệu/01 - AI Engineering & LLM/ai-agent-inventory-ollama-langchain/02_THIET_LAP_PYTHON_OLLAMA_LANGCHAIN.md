# Bài 02 — Thiết lập Python, Ollama, LangChain và môi trường phát triển

## 1. Tóm tắt

Để chạy ứng dụng hỏi đáp tồn kho trên máy tính, cần có Python, trình soạn thảo, một máy chủ chạy mô hình ngôn ngữ cục bộ và các thư viện kết nối. Bài này thiết lập môi trường tách biệt để dự án dễ kiểm soát phụ thuộc và sửa lỗi.

## 2. Mục tiêu học tập

- Kiểm tra được Python, Ollama và VS Code.
- Tạo và kích hoạt môi trường ảo Python.
- Tải, liệt kê và chạy một model Ollama.
- Cài đặt đúng nhóm thư viện dành cho SQLite, LangChain và Streamlit.
- Chẩn đoán một số lỗi kết nối thường gặp.

## 3. Các thành phần cần cài

**Python** chạy script, đọc bảng và thực thi ứng dụng. **VS Code** là môi trường chỉnh sửa tệp. **Ollama** phục vụ model ngôn ngữ trên máy. LangChain chỉ là thư viện Python; cài `langchain` không đồng nghĩa đã cài tất cả integration như `langchain-ollama` hoặc `langchain-community`.

Ollama có thể vận hành cục bộ mà không thu phí token từ một API cloud, nhưng vẫn cần tài nguyên RAM/VRAM, điện và dung lượng đĩa. Khả năng chạy model tùy phần cứng; không có bảo đảm một model phù hợp với mọi laptop.

## 4. Chuẩn bị thư mục và môi trường ảo

Tạo một thư mục dự án, ví dụ `supermarket-agent`, mở thư mục bằng VS Code rồi mở Terminal. Tại Windows PowerShell:

```powershell
mkdir supermarket-agent
cd supermarket-agent
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python --version
```

Trên Linux/macOS, dùng `source .venv/bin/activate`. Nếu PowerShell chặn activation, có thể dùng trực tiếp `.venv\Scripts\python.exe` để tránh thay đổi chính sách thực thi hệ thống.

## 5. Cài Ollama và model

Cài Ollama từ trang chính thức. Mở Terminal và thử:

```bash
ollama --version
ollama list
ollama pull mistral
ollama run mistral
```

`ollama list` liệt kê các model đã tải, `ollama pull` tải model theo tên, `ollama run` bắt đầu một phiên tương tác. Để thoát phiên tương tác, dùng lệnh thoát được Ollama hiển thị hoặc `Ctrl+C` theo môi trường. Có thể chọn model khác khi phù hợp nhưng phải sửa đúng tên trong `agent.py`.

Trong dự án, model sẽ được gọi qua `ChatOllama` chứ không phải gọi lệnh CLI ở mỗi câu hỏi. Ollama cần có service cục bộ đang hoạt động khi chạy ứng dụng.

## 6. Cài thư viện Python

Tệp `assets/requirements.txt` chứa các nhóm thư viện dùng trong project. Từ thư mục chứa tệp:

```bash
python -m pip install -r requirements.txt
```

| Thư viện | Chức năng |
| --- | --- |
| `pandas` | Đọc, kiểm tra, biến đổi bảng Excel/CSV |
| `openpyxl` | Engine để `pandas.read_excel()` đọc `.xlsx` |
| `SQLAlchemy` | Kết nối SQLite trong tầng LangChain SQL |
| `langchain`, `langchain-community`, `langchain-classic` | Agent/API legacy và SQL toolkit |
| `langchain-ollama` | Tích hợp `ChatOllama` |
| `streamlit` | Giao diện web bằng Python |

Các package trên có vòng đời và tương thích phiên bản khác nhau; dùng môi trường ảo và lưu phiên bản sau khi cài thành công bằng `python -m pip freeze > requirements-lock.txt`. Không tự đoán rằng mọi bản LangChain đều hỗ trợ đúng một import path.

## 7. Kiểm tra kết nối mô hình

Tạo tệp `test_ollama.py` với nội dung:

```python
from langchain_ollama import ChatOllama

llm = ChatOllama(model="mistral", temperature=0)
response = llm.invoke("Chỉ trả lời bằng một câu: SQLite dùng để làm gì?")
print(response.content)
```

Thực thi `python test_ollama.py`. `temperature=0` thường giúp giảm tính ngẫu nhiên của việc tạo câu trả lời, **không chứng minh dữ liệu đúng và không loại bỏ hallucination**. Phần bảo đảm dữ liệu phải dựa trên kiểm tra SQL và đối chiếu đầu ra.

## 8. Các vấn đề thường gặp

| Hiện tượng | Nguyên nhân có thể | Cách kiểm tra |
| --- | --- | --- |
| `ollama` không được nhận diện | Chưa cài hoặc chưa được thêm PATH | Mở terminal mới, kiểm tra lệnh `ollama --version` |
| `Connection refused` tới Ollama | Service chưa chạy | Khởi động Ollama và thử lại |
| `model not found` | Tên model sai/chưa tải | `ollama list`; chạy `ollama pull <tên>` |
| `ModuleNotFoundError` | Chưa cài gói trong đúng môi trường | Kiểm tra Python đang dùng; cài với `python -m pip` |
| Chậm hoặc hết bộ nhớ | Model quá lớn so với máy | Thử model nhỏ hơn hoặc giảm tải |

## 9. Thực hành

Cài đặt và kiểm tra đủ `python --version`, `ollama list`, `import streamlit`, `import langchain_ollama`. Ghi lại tên model đã tải vào nhật ký học tập; tách đây là cấu hình máy riêng, không áp đặt cho máy khác.

## 10. Câu hỏi ôn tập

### Câu 1

Lệnh nào kiểm tra các model Ollama đã tải?

A. `ollama run`  
B. `ollama list`  
C. `ollama install`  
D. `ollama import`

**Đáp án:** B. **Giải thích:** `ollama list` trả về các model đang có trên máy.

### Câu 2

`langchain-ollama` dùng để làm gì?

A. Là database SQLite.  
B. Thay thế VS Code.  
C. Tạo bảng tồn kho.  
D. Kết nối LangChain với Ollama, chẳng hạn qua `ChatOllama`.

**Đáp án:** D. **Giải thích:** Đây là gói tích hợp model, không phải database hay IDE.

### Câu 3

Mục đích chính của môi trường ảo Python là gì?

A. Cô lập package của từng dự án.  
B. Tăng gấp đôi RAM.  
C. Tự động tải dữ liệu tồn kho.  
D. Chuyển CSV thành SQL.

**Đáp án:** A. **Giải thích:** Virtual environment giúp tránh xung đột phụ thuộc giữa các dự án.

### Câu 4

`temperature=0` có ý nghĩa gì?

A. Không bao giờ trả lời sai.  
B. Cấm gọi công cụ.  
C. Giảm tính ngẫu nhiên khi tạo phản hồi, nhưng không bảo đảm tính đúng.  
D. Tự tạo chế độ đọc SQL.

**Đáp án:** C. **Giải thích:** Cài đặt sampling không thay cho xác thực dữ liệu.

### Câu 5

Khi `ChatOllama` báo `model not found`, bước hợp lý nhất là gì?

A. Xóa toàn bộ SQL.  
B. Kiểm tra tên model bằng `ollama list` và tải đúng model.  
C. Tăng độ dài prompt.  
D. Đổi tên bảng dữ liệu.

**Đáp án:** B. **Giải thích:** Lỗi này thường liên quan model chưa có trên máy hoặc tên được cấu hình sai.

## 11. Tổng kết

Môi trường thực hành gồm Python + các package thích hợp, Ollama có model và Streamlit. Kiểm tra độc lập từng thành phần trước khi lắp agent giúp phân biệt lỗi môi trường với lỗi luồng xử lý.
