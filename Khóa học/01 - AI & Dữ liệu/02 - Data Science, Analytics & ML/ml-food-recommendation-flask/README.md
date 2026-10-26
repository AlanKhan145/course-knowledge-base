# Khóa học: Xây dựng hệ thống gợi ý công thức nấu ăn bằng Machine Learning và Flask

**Ngôn ngữ:** Tiếng Việt · **Lộ trình:** Từ dữ liệu CSV đến ứng dụng Flask chạy được · **Mức học:** Python căn bản → Machine Learning ứng dụng.

## Mục tiêu khóa học

Xây dựng website nhận danh sách nguyên liệu và các giá trị dinh dưỡng, từ đó truy hồi tối đa ba công thức có sẵn gần nhất. Phương pháp: `pandas` → `TfidfVectorizer` → `StandardScaler` → `scipy.sparse.hstack` → `NearestNeighbors` → `Flask` + `Bootstrap`.

## Mục lục

1. [Bài 01 — Bài toán và kiến trúc hệ thống gợi ý công thức](bai-hoc/01-bai-toan-va-kien-truc.md)
2. [Bài 02 — Khám phá dữ liệu CSV và đặc trưng công thức](bai-hoc/02-kham-pha-du-lieu.md)
3. [Bài 03 — Tiền xử lý nguyên liệu và giá trị dinh dưỡng](bai-hoc/03-tien-xu-ly.md)
4. [Bài 04 — Biểu diễn nguyên liệu bằng TF-IDF](bai-hoc/04-tf-idf.md)
5. [Bài 05 — Chuẩn hóa dinh dưỡng và ghép đặc trưng](bai-hoc/05-scaling-va-ghep-vector.md)
6. [Bài 06 — Tìm công thức gần nhất với NearestNeighbors](bai-hoc/06-nearest-neighbors.md)
7. [Bài 07 — Lab Python: xây công cụ gợi ý từ CSV](bai-hoc/07-lab-python.md)
8. [Bài 08 — Thiết kế giao diện HTML, CSS và Bootstrap](bai-hoc/08-giao-dien-html.md)
9. [Bài 09 — Flask backend: route, nhận form và trả kết quả](bai-hoc/09-flask-backend.md)
10. [Bài 10 — Tích hợp end-to-end và kiểm thử hệ thống](bai-hoc/10-tich-hop-va-kiem-thu.md)
11. [Đồ án cuối khóa](bai-hoc/11-do-an-cuoi-khoa.md)

## Cấu trúc thư mục

```text
Khoa_hoc_Goi_y_Cong_thuc_ML_Flask/
├── README.md
├── bai-hoc/
│   ├── 01-bai-toan-va-kien-truc.md
│   ├── ...
│   └── 11-do-an-cuoi-khoa.md
└── thuc-hanh/
    ├── README.md
    ├── app.py
    ├── recommender.py
    ├── requirements.txt
    ├── data/recipes_demo.csv
    ├── templates/index.html
    ├── static/style.css
    └── tests/test_recommender.py
```

## Học và chạy theo thứ tự

Đọc Bài 01–06 để nắm nền tảng biểu diễn vector, sau đó Bài 07 chạy Python, Bài 08 thiết kế UI, Bài 09 tích hợp Flask, Bài 10 kiểm thử và Bài 11 hoàn thiện đồ án.

Từ thư mục `thuc-hanh/`:

```bash
python -m venv .venv
# Windows PowerShell: .venv\Scripts\Activate.ps1
# Linux/macOS: source .venv/bin/activate
python -m pip install -r requirements.txt
python -m unittest discover -s tests -v
python app.py
```

Mở `http://127.0.0.1:5000/` và thử `chicken, rice`. Cài đặt Python cùng môi trường gói phù hợp trước khi chạy.

## Dữ liệu và phạm vi

- `recipes_demo.csv` gồm các dòng giả lập **tự tạo để thực hành** vì không kèm file CSV gốc. Những con số dinh dưỡng **không phải thông tin đã xác minh**; không dùng cho quyết định sức khỏe.
- Tính năng cốt lõi dựa trên công thức trong kho dữ liệu, **không sáng tạo công thức ngoài dataset**.
- Transcript tự động có thể sai tên thư viện. Ở mã thực hành dùng đúng API Python: `pandas`, `scikit-learn`, `NearestNeighbors`, `TfidfVectorizer`, `StandardScaler`, `Flask`.
- `image_url` và số lượt đánh giá được giới thiệu trong phần dữ liệu; bộ CSV minh họa không yêu cầu ảnh để chạy.
- Giá trị dinh dưỡng là mức mục tiêu đưa vào phép tìm hàng xóm, không phải bộ lọc ràng buộc cứng. Không đảm bảo mọi nguyên liệu truy vấn đều có mặt trong kết quả; cần bước lọc riêng cho dị ứng.
- Code demo phục vụ học local, không cấu hình production; `debug=True` không được bật khi triển khai công khai.
