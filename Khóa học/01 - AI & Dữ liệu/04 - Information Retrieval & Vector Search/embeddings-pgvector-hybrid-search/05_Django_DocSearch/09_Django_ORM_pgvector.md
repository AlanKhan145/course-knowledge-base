# Bài 09 — Tích hợp PostgreSQL + pgvector với Django ORM

## 1. Tổng quan

Django cung cấp model, ORM, URL routing và template để biến bản CLI thành web app. Thư viện `pgvector` Python có integration `pgvector.django`, hỗ trợ `VectorField`, `CosineDistance` và `HnswIndex`. Trong khóa học, bảng `document_chunks` đã được tạo bằng `init.sql`; Django sẽ đọc bảng này qua một model **unmanaged**, tránh tạo trùng bảng/migration. Nếu xây dự án mới từ đầu bằng Django, có thể dùng migration `VectorExtension()` và managed models.

## 2. Mục tiêu học tập

- Tạo project Django kết nối PostgreSQL local.
- Ánh xạ bảng hiện có sang model `DocumentChunk`.
- Viết queryset nearest neighbor bằng `CosineDistance`.
- Phân biệt migration tạo bảng và model ánh xạ bảng có sẵn.

## 3. Khởi tạo project

Trong thư mục `pgvector-docsearch` (sau khi chạy các bài trước):

```bash
python -m pip install django 'psycopg[binary]' pgvector requests python-dotenv
python -m django startproject config .
python manage.py startapp docsearch
```

Thêm `'docsearch'` vào `INSTALLED_APPS` trong `config/settings.py`. Sau đó thay cấu hình `DATABASES` bằng:

```python
import os
from dotenv import load_dotenv
load_dotenv(BASE_DIR / '.env')

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv('POSTGRES_DB', 'vector_db'),
        'USER': os.getenv('POSTGRES_USER', 'rag'),
        'PASSWORD': os.getenv('POSTGRES_PASSWORD', ''),
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
}
```

Các biến môi trường này có thể được đặt trong `.env` của Compose từ bài 03. `BASE_DIR` do Django sinh sẵn. Khi chuyển lên production phải dùng secrets, tắt `DEBUG`, đặt `ALLOWED_HOSTS` và không expose DB public.

## 4. Ánh xạ `document_chunks`

Nội dung file `docsearch/models.py`:

```python
from django.db import models
from pgvector.django import VectorField

class DocumentChunk(models.Model):
    id = models.BigAutoField(primary_key=True)
    source_url = models.TextField()
    title = models.TextField()
    chunk_index = models.IntegerField()
    content = models.TextField()
    embedding = VectorField(dimensions=768)
    created_at = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'document_chunks'
```

`managed=False` bảo Django **không tạo hoặc xóa bảng** qua migration. Nhưng các thao tác ORM vẫn làm việc với bảng thật nếu schema khớp. Không sửa `db_table` tùy tiện. Kiểm tra:

```bash
python manage.py check
python manage.py migrate
python manage.py shell
```

Trong shell:

```python
from docsearch.models import DocumentChunk
print(DocumentChunk.objects.count())
print(DocumentChunk.objects.values('title', 'source_url').first())
```

Lệnh `migrate` ở đây tạo bảng quản trị mặc định của Django; không phải dựng lại bảng chunks đã tồn tại.

## 5. Truy vấn semantic bằng Django ORM

```python
from pgvector.django import CosineDistance
from docsearch.models import DocumentChunk

# vector 768 chiều đã được Ollama sinh ra và kiểm tra độ dài
vector = [0.0] * 768  # Chỉ minh họa kiểu dữ liệu, KHÔNG dùng để tìm kiếm thực
# Dùng vector embedding thực trong truy vấn bên dưới:
# results = DocumentChunk.objects.annotate(
#     distance=CosineDistance('embedding', actual_vector)
# ).order_by('distance')[:5]
```

Không dùng vector toàn số 0 để cosine search: chuẩn vector bằng 0 khiến phép đo cosine không có nghĩa. Endpoint trong bài 10 sẽ thay `actual_vector` bằng embedding thật của câu hỏi.

## 6. Nếu chọn Django quản lý schema từ đầu

Một dự án mới có thể tạo migration bật extension như sau (chỉ là phương án **thay thế**, không áp dụng đồng thời với `init.sql` trong lab này):

```python
from django.db import migrations
from pgvector.django import VectorExtension

class Migration(migrations.Migration):
    initial = True
    dependencies = []
    operations = [VectorExtension()]
```

Sau đó dùng `managed=True` mặc định và migration tạo bảng. HNSW ở Django hỗ trợ `HnswIndex` với `opclasses=['vector_cosine_ops']`; nếu index đã tồn tại do SQL, không tạo trùng.

## 7. Checkpoint

- [ ] `python manage.py check` không báo cấu hình sai.
- [ ] Django ORM đếm được số chunk giống SQL.
- [ ] Biết khi nào `managed=False` phù hợp.
- [ ] Không dùng vector 0 để đo cosine.

## 8. Tổng kết

Django ORM là tầng ứng dụng trên bảng PostgreSQL. Có thể khởi đầu từ database sẵn có và dần chuyển sang migration đầy đủ, miễn một nguồn chịu trách nhiệm quản lý schema để tránh xung đột.

## 9. Câu hỏi ôn tập

### Câu 1

Django field nào đại diện cột pgvector?

A. JSONField  
B. VectorField  
C. BinaryField  
D. IPAddressField  

**Đáp án:** B  
**Giải thích:** `pgvector.django.VectorField` ánh xạ cột vector.

### Câu 2

`managed=False` có tác động nào?

A. Django không tự quản lý tạo/xóa bảng bằng migrations  
B. Django không đọc được bảng  
C. Django vô hiệu hóa tất cả query  
D. Django xóa extension  

**Đáp án:** A  
**Giải thích:** Unmanaged model vẫn đọc/ghi ORM nhưng Django không quản lý vòng đời bảng.

### Câu 3

Công cụ ORM nào dùng cosine distance?

A. CosineDistance  
B. L2NormOnly  
C. FullTextRank  
D. TextContains  

**Đáp án:** A  
**Giải thích:** `CosineDistance` tạo biểu thức khoảng cách cosine.

### Câu 4

Trường `db_table` của ví dụ cần là gì?

A. django_admin_log  
B. document_chunks  
C. vector_model_store  
D. airflow_jobs  

**Đáp án:** B  
**Giải thích:** Model ánh xạ bảng đã tạo bởi SQL là document_chunks.

### Câu 5

Vì sao không dùng vector 768 số 0 để thử cosine?

A. Vì vector đó không có hướng xác định để tính cosine  
B. Vì nó là SQL injection  
C. Vì Django sẽ tự xóa DB  
D. Vì số 0 làm tăng cổng HTTP  

**Đáp án:** A  
**Giải thích:** Cosine giữa vector zero và vector khác không xác định theo công thức chuẩn.

