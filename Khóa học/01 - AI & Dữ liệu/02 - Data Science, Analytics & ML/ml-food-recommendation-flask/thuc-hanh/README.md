# Chạy ứng dụng mẫu

Yêu cầu Python, pip, cài thư viện từ `requirements.txt`. Đứng trong thư mục này:

```bash
python -m venv .venv
# Windows PowerShell:
.venv\Scripts\Activate.ps1
# Linux/macOS:
# source .venv/bin/activate
python -m pip install -r requirements.txt
python -m unittest discover -s tests -v
python app.py
```

Mở `http://127.0.0.1:5000/`, nhập `chicken, rice` hoặc `tofu, broccoli`. Nếu lỗi activation bị chặn trong PowerShell, có thể gọi trực tiếp `.venv\Scripts\python.exe -m pip install -r requirements.txt` và `.venv\Scripts\python.exe app.py` mà không kích hoạt. Nguyên liệu demo ghi bằng tiếng Anh theo CSV. Nội dung dinh dưỡng minh họa, không dùng làm căn cứ y tế.
