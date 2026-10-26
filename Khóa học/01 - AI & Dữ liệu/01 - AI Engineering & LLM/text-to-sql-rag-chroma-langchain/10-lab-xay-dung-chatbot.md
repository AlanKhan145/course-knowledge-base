---
title: "Bài 10 — Lab: chatbot hỏi dữ liệu món ăn đầu cuối"
course: "Text-to-SQL với RAG, Chroma, LangChain, FastAPI và Streamlit"
lesson_number: 10
language: vi
---

# Bài 10 — Lab: chatbot hỏi dữ liệu món ăn đầu cuối

> **Tóm tắt:** Tạo SQLite mẫu, index schema trong Chroma, dùng LangChain sinh SQL, FastAPI phục vụ và Streamlit hiển thị.

## 1. Mục tiêu học tập

- Chạy được các bước dựng dữ liệu, index, backend và frontend của bản demo.
- Kiểm tra được SQL và dữ liệu trả về cho câu hỏi thực tế.
- Liệt kê được các yêu cầu phải bổ sung trước khi dùng dữ liệu người dùng thật.

## 2. Kiến thức và nguyên lý

### 2.1. Chuẩn bị môi trường

Yêu cầu: Python 3.10+, kết nối Internet để cài thư viện và tải embedding model lần đầu; tài khoản nhà cung cấp LLM có API key hợp lệ. Dữ liệu mẫu trong demo là giả lập, không chứa thông tin cá nhân.

Cấu trúc thư mục:

```text
demo/
  requirements.txt
  .env.example
  init_db.py
  index_schema.py
  api.py
  ui.py
  data/          # phát sinh sau khi tạo DB/index
```

### 2.2. Khởi tạo

```bash
cd demo
python -m venv .venv
# Windows PowerShell: .venv\Scripts\Activate.ps1
# Linux/macOS: source .venv/bin/activate
pip install -r requirements.txt
```

Tạo file `.env` bằng cách sao chép `.env.example` rồi điền `OPENAI_API_KEY`, `OPENAI_MODEL` được hỗ trợ trong tài khoản. Không đưa `.env` lên Git hay Drive công khai.

### 2.3. Chạy theo thứ tự

```bash
python init_db.py
python index_schema.py
uvicorn api:app --reload
```

Mở terminal khác trong cùng môi trường:

```bash
streamlit run ui.py
```

Ứng dụng Streamlit gọi API ở `http://127.0.0.1:8000/ask`. Nếu model hoặc embedding chưa sẵn sàng, endpoint có thể báo lỗi rõ ràng thay vì tạo một câu trả lời giả.

### 2.4. Câu hỏi kiểm thử

1. “Có những món nào nấu trong 20 phút?”
2. “Món nào có mì?”
3. “Món nào không có hải sản?”
4. “Cho tôi 5 món nấu nhanh nhất.”
5. “Hãy xóa bảng món ăn” — phải **bị từ chối**.

Kiểm tra cả SQL hiển thị và các hàng kết quả. Mô hình có thể không tạo đúng truy vấn ngay lần đầu; đây là đặc tính của demo học tập, không phải hệ thống cam kết độ chính xác.

### 2.5. Checkpoint và debug

| Hiện tượng | Khả năng nguyên nhân | Cách kiểm tra |
| --- | --- | --- |
| `no such table` | Chưa chạy `init_db.py` hoặc trỏ sai file DB | Kiểm tra `demo/data/recipes.sqlite3` |
| Chroma trả 0 document | Chưa index hoặc sai collection/path | Chạy `index_schema.py` |
| Không kết nối backend | FastAPI chưa chạy / sai port | Kiểm tra `/health`, `http://127.0.0.1:8000/docs` |
| Lỗi xác thực model | Sai API key hoặc model chưa được phép | Kiểm tra biến môi trường và tài khoản |
| SQL bị validator từ chối | Không phải một SELECT hợp lệ | Xem trường `sql` trong log đã làm sạch |
| Giao diện thấy 0 hàng | Câu hỏi không khớp dữ liệu hoặc JOIN sai | Chạy SQL được duyệt trực tiếp trên SQLite |

### 2.6. Những giới hạn cần nắm

Bản demo **không có** login/authorization, rate limit, multi-tenancy, quota, row-level security hay đánh giá tải. Nó chỉ dành cho **máy cá nhân và dữ liệu giả lập**. SQL validation ở đây là mức học tập kết hợp read-only; không kết nối trực tiếp đến CSDL sản xuất hoặc triển khai endpoint công khai.

## 3. Thực hành ngắn

Hoàn thành cả 5 câu thử nghiệm, chụp log không chứa secrets, ghi nhận tối thiểu 2 trường hợp SQL chưa đúng và cách sửa. Thiết kế thêm một câu hỏi làm rõ khi user nhập “món ngon nhất”.

## 4. Tổng kết

Lab kết nối các thành phần thành vòng Text-to-SQL hoàn chỉnh ở mức thử nghiệm. Đầu ra đạt yêu cầu khi người học có thể giải thích từng bước, chạy thử trên dữ liệu mẫu và nhận diện giới hạn an toàn.

## 5. Câu hỏi ôn tập

### Câu 1

Bước nào cần làm trước khi lập chỉ mục schema?

A. Khởi tạo SQLite mẫu  
B. Chạy frontend  
C. Xóa .env  
D. Xuất biểu đồ  

**Đáp án:** A. **Giải thích:** Index cần đọc schema tồn tại trong DB.

### Câu 2

Chroma cần có gì để truy xuất ngữ nghĩa?

A. Chỉ CSS  
B. Tài liệu schema đã embedding/index  
C. Tập tin ảnh  
D. Đăng nhập Streamlit  

**Đáp án:** B. **Giải thích:** Retriever hoạt động trên các vector đã lập chỉ mục.

### Câu 3

Nếu `DELETE FROM dishes` được chấp nhận là SQL cuối, điều gì đã sai?

A. Câu hỏi ngắn  
B. Dữ liệu ít  
C. Lớp kiểm tra/chính sách SELECT-only  
D. UI không có ảnh  

**Đáp án:** C. **Giải thích:** Demo chỉ cho phép truy vấn đọc dữ liệu.

### Câu 4

Muốn đưa demo lên production cần ưu tiên gì?

A. Màu theme  
B. Tên file ngắn  
C. Thêm emoji  
D. Phân quyền, bảo mật, đánh giá và giám sát  

**Đáp án:** D. **Giải thích:** Đây là các điều kiện vận hành thiết yếu.

### Câu 5

Cách xác minh câu trả lời chính xác nhất trong lab?

A. Nhìn câu văn AI có trôi chảy không  
B. Đối chiếu SQL và kết quả database  
C. Đo chiều dài prompt  
D. Xem số lượt click  

**Đáp án:** B. **Giải thích:** Độ đúng dựa vào truy vấn và dữ liệu thực.
