# Bài 03 — Thiết lập dự án Python, LangChain và Ollama

> **Loại:** Lab · **Mục tiêu:** Cài đặt môi trường, kết nối mô hình hỗ trợ tool-calling và tách cấu hình khỏi mã nguồn.

## 1. Tổng quan

Một ứng dụng SQL Agent cần ít nhất ba dịch vụ: Python để điều phối, SQLite để cung cấp dữ liệu và LLM để quyết định truy vấn. Có thể dùng **Ollama cục bộ** hoặc **Groq qua API** với cùng một giao diện Chat Model trong LangChain.

## 2. Mục tiêu học tập

- Tạo môi trường ảo Python và cài dependency.
- Giải thích vai trò của `MODEL_PROVIDER`, `MODEL_NAME` và `GROQ_API_KEY`.
- Triển khai Model Factory theo cấu hình môi trường.
- Phân biệt chạy cục bộ với kết nối nhà cung cấp API.

## 3. Cấu trúc dự án

```text
ma-nguon/
├── .env.example        # Mẫu cấu hình
├── requirements.txt    # Danh sách thư viện
├── seed_data.py        # Tạo SQLite
├── db_access.py        # Tầng truy vấn chỉ đọc
├── tools_sql.py        # Bốn LangChain tools
├── model_factory.py    # Model Factory
├── agent.py            # Agent loop
├── cli.py              # Giao diện terminal dùng Rich
├── app.py              # Giao diện Streamlit
└── ecommerce.db        # Dữ liệu minh họa
```

## 4. Cài đặt từng bước

**Bước 1 — Mở terminal tại thư mục `ma-nguon/`.** Khuyến nghị Python 3.10 trở lên; yêu cầu chính xác phụ thuộc phiên bản thư viện đang cài. Kiểm tra bằng `python --version`.

**Bước 2 — Tạo môi trường ảo:**

```bash
python -m venv .venv
```

Kích hoạt trên Windows PowerShell:

```powershell
.\.venv\Scripts\Activate.ps1
```

Trên macOS/Linux:

```bash
source .venv/bin/activate
```

**Bước 3 — Cài thư viện:**

```bash
python -m pip install -r requirements.txt
```

Danh sách gồm `langchain-core`, `langchain-ollama`, `langchain-groq`, `streamlit`, `rich`, `python-dotenv`. Không tự gán version cố định nếu chưa kiểm chứng khả năng tương thích của cả bộ; trong môi trường sản xuất nên khóa dependency và chạy CI.

**Bước 4 — Chuẩn bị Ollama:** Cài Ollama theo hướng dẫn chính thức tại <https://ollama.com/> rồi tải một model có hỗ trợ tool-calling:

```bash
ollama pull qwen2.5:7b
```

Model này có thể cần đáng kể RAM; máy yếu có thể dùng model nhỏ hơn nếu **được xác nhận có hỗ trợ tool-calling** và đạt yêu cầu chất lượng truy vấn.

**Bước 5 — Tạo cấu hình:**

```bash
cp .env.example .env
```

Nếu dùng PowerShell, thay bằng:

```powershell
Copy-Item .env.example .env
```

Mặc định `MODEL_PROVIDER=ollama`, `MODEL_NAME=qwen2.5:7b`, `DATABASE_PATH=ecommerce.db`.

**Bước 6 — Tạo dữ liệu và khởi chạy:**

```bash
python seed_data.py
streamlit run app.py
```

## 5. Model Factory

Trong `model_factory.py`, hàm `create_model()` kiểm tra `MODEL_PROVIDER` và khởi tạo lớp phù hợp:

```python
from langchain_ollama import ChatOllama

model = ChatOllama(model="qwen2.5:7b", temperature=0)
```

Đối với Groq:

```python
from langchain_groq import ChatGroq

model = ChatGroq(model="llama-3.3-70b-versatile", temperature=0)
```

Trước khi chuyển sang `groq`, phải cung cấp `GROQ_API_KEY` trong biến môi trường hoặc `.env`. Khả dụng của từng model Groq có thể thay đổi theo thời gian; kiểm tra danh mục model của dịch vụ. **Không commit `.env` chứa API key lên Git.** Với Groq, câu hỏi, schema hoặc kết quả tool mà ứng dụng gửi tới model sẽ đi ra ngoài máy cá nhân; đây không còn là chế độ hoàn toàn cục bộ.

## 6. Checkpoint và debug

| Hiện tượng | Khả năng và hướng xử lý |
| --- | --- |
| `ModuleNotFoundError` | Kiểm tra đã kích hoạt `.venv` và cài `requirements.txt` |
| Không kết nối được Ollama | Kiểm tra tiến trình Ollama và model đã tải |
| Model không gọi tool | Kiểm tra model/phiên bản có tool-calling, thử câu hỏi rõ hơn |
| Thiếu `GROQ_API_KEY` | Khai báo khóa, không đưa vào file chia sẻ |
| Không tìm thấy `ecommerce.db` | Chạy `python seed_data.py` trong thư mục code |

**Deliverable:** Một giao diện Streamlit mở được, trong sidebar hiển thị 4 bảng của database và một câu hỏi trả về dữ liệu có căn cứ.

## 7. Tổng kết

Tách cấu hình khỏi logic giúp đổi nhà cung cấp model mà không sửa Agent. Quan trọng nhất là xác nhận model có hỗ trợ tool-calling, kiểm soát dữ liệu gửi ra ngoài và kiểm thử đường chạy từ Python đến SQLite.

## 8. Câu hỏi ôn tập

### Câu 1

Vai trò chính của Model Factory?

A. Đổi mô hình qua cấu hình mà không sửa Agent  

B. Lưu tất cả đơn hàng  

C. Tạo bảng SQLite  

D. Render Markdown  

**Đáp án:** A

**Giải thích:** Factory tách lựa chọn nhà cung cấp khỏi logic Agent.

### Câu 2

Trước khi chọn Groq phải cấu hình gì?

A. SQLITE_PASSWORD  

B. STOCK_NUMBER  

C. GROQ_API_KEY  

D. TABLE_PREFIX  

**Đáp án:** C

**Giải thích:** Groq là dịch vụ API cần khóa xác thực.

### Câu 3

Lệnh tạo SQLite mẫu trong dự án?

A. streamlit create  

B. ollama pull sqlite  

C. pip install sqlite-data  

D. python seed_data.py  

**Đáp án:** D

**Giải thích:** Script seed_data.py tạo schema và dữ liệu minh họa.

### Câu 4

Mô hình sử dụng với agent tool-calling phải có gì?

A. GPU bắt buộc  

B. Khả năng gọi công cụ phù hợp  

C. Chỉ hỗ trợ JSON  

D. Tên dài trên 20 ký tự  

**Đáp án:** B

**Giải thích:** Agent cần model xuất được tool calls.

### Câu 5

Điểm cần lưu ý khi dùng Groq thay Ollama cục bộ?

A. Schema/câu hỏi có thể được gửi ra ngoài máy  

B. SQLite không còn chạy  

C. Python không cần thiết  

D. Không thể dùng SQL  

**Đáp án:** A

**Giải thích:** API model thường nhận nội dung được gửi để suy luận.
