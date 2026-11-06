# Bài 10 — Tạo API và giao diện DocSearch có tương tác

## 1. Tổng quan project nhỏ

Ứng dụng Django nhận câu hỏi từ form web, gọi Ollama để embed, sử dụng ORM để tìm Top-5 chunk, sau đó trả JSON gồm tiêu đề, snippet, URL và similarity. Frontend hiển thị thẻ kết quả có liên kết mở nguồn. Đây là **document search UI**, không mặc định là chatbot sinh văn bản.

## 2. Mục tiêu

- Viết API `GET /api/search/?q=...` có validation.
- Query ORM bằng vector thật, không nội suy SQL.
- Hiển thị score, snippet, link đến nguồn tài liệu.
- Xử lý lỗi backend, câu hỏi rỗng, timeout và trạng thái đang tải.

## 3. Backend: `docsearch/views.py`

```python
import os
import requests
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.http import require_GET
from pgvector.django import CosineDistance
from .models import DocumentChunk

OLLAMA = os.getenv('OLLAMA_URL', 'http://localhost:11434').rstrip('/')
MODEL = os.getenv('EMBED_MODEL', 'nomic-embed-text')

@require_GET
def index(request):
    return render(request, 'docsearch/index.html')

@require_GET
def search_api(request):
    q = request.GET.get('q', '').strip()
    if not (2 <= len(q) <= 500):
        return JsonResponse({'error': 'Câu hỏi phải dài 2–500 ký tự'}, status=400)
    try:
        r = requests.post(f'{OLLAMA}/api/embed',
            json={'model': MODEL, 'input': 'search_query: ' + q, 'truncate': False},
            timeout=180)
        r.raise_for_status()
        vector = r.json()['embeddings'][0]
        if len(vector) != 768:
            raise ValueError('Embedding dimension không phải 768')
        matches = (DocumentChunk.objects
                   .annotate(distance=CosineDistance('embedding', vector))
                   .order_by('distance')[:5])
        results = [{
            'title': item.title,
            'url': item.source_url,
            'chunk_index': item.chunk_index,
            'snippet': item.content[:600],
            'similarity': round(1 - float(item.distance), 4),
        } for item in matches]
        return JsonResponse({'question': q, 'results': results})
    except (requests.RequestException, ValueError, KeyError, IndexError):
        return JsonResponse({'error': 'Không thể tạo embedding hoặc tìm kiếm lúc này'}, status=503)
```

Cấu hình URL ở `docsearch/urls.py`:

```python
from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name='index'),
    path('api/search/', views.search_api, name='search_api'),
]
```

Thêm vào `config/urls.py`:

```python
from django.contrib import admin
from django.urls import include, path
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('docsearch.urls')),
]
```

Trong ứng dụng thực tế cần logging có cấu trúc, rate limiting, timeouts phù hợp và bộ lọc quyền truy cập. GET API giúp thử dễ; nếu triển khai công khai cần cân nhắc caching, chi phí tính embedding và hạn chế truy cập.

## 4. Template HTML có trạng thái tải và mở liên kết

Tạo `docsearch/templates/docsearch/index.html`:

```html
<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>DocSearch · Airflow</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 900px; margin: 5vh auto;
           padding: 0 20px; background: #f5f7fb; color: #1d2538; }
    form { display: flex; gap: 12px; }
    input { flex: 1; padding: 14px; border: 1px solid #ccd3df; border-radius: 12px; }
    button { padding: 14px 20px; border: 0; background: #254cdf; color: white;
             border-radius: 12px; cursor: pointer; }
    article { background: white; padding: 18px; border-radius: 14px;
              box-shadow: 0 2px 15px #0b174011; margin-top: 14px; }
    a { color: #2347bd; }
    small { color: #58657c; }
    #status { margin-top: 18px; }
  </style>
</head>
<body>
  <h1>Airflow DocSearch</h1>
  <p>Tìm tài liệu bằng ý nghĩa câu hỏi · PostgreSQL + pgvector + Ollama</p>
  <form id="search-form">
    <input id="query" name="q" required minlength="2" maxlength="500"
           placeholder="Ví dụ: How do I install Airflow using Docker?">
    <button type="submit">Tìm kiếm</button>
  </form>
  <p id="status" role="status" aria-live="polite"></p>
  <section id="results" aria-label="Kết quả tìm kiếm"></section>
  <script>
    const form = document.querySelector('#search-form');
    const query = document.querySelector('#query');
    const status = document.querySelector('#status');
    const results = document.querySelector('#results');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const q = query.value.trim();
      if (q.length < 2) return;
      results.replaceChildren();
      status.textContent = 'Đang tạo embedding và tìm kiếm...';
      try {
        const response = await fetch('/api/search/?q=' + encodeURIComponent(q));
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Lỗi tìm kiếm');
        status.textContent = `Tìm thấy ${data.results.length} đoạn gần nhất`;
        for (const item of data.results) {
          const article = document.createElement('article');
          const heading = document.createElement('h2');
          const link = document.createElement('a');
          link.href = item.url;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          link.textContent = item.title;
          heading.append(link);
          const info = document.createElement('small');
          info.textContent = `Similarity: ${item.similarity} · chunk #${item.chunk_index}`;
          const body = document.createElement('p');
          body.textContent = item.snippet;
          article.append(heading, info, body);
          results.append(article);
        }
      } catch (err) {
        status.textContent = err.message;
      }
    });
  </script>
</body>
</html>
```

Chúng ta cố ý dùng `textContent` thay vì gán nội dung crawl vào `innerHTML` để giảm nguy cơ XSS. Link mở tab mới và giữ chính URL mà backend trả về. Không đặt secret key trong HTML/JS.

## 5. Chạy và kiểm thử

```bash
python manage.py runserver 127.0.0.1:8000
```

Truy cập `http://127.0.0.1:8000/`, nhập `Docker`, `pip`, `LocalExecutor`. Xem tab Network của DevTools: endpoint phải trả JSON với `results`. Nếu lệnh ORM thất bại, kiểm tra database schema, migration, query bằng `python manage.py shell` và logs Django. Lưu ý demo có thể không có `LocalExecutor` nếu bạn chưa nạp đúng trang.

## 6. Checkpoint

- [ ] Form truy vấn không reload trang.
- [ ] Có trạng thái loading và lỗi HTTP dễ hiểu.
- [ ] Kết quả có title, URL, score, snippet.
- [ ] Click URL mở đúng tài liệu nguồn.
- [ ] Nội dung tài liệu được đưa vào DOM bằng `textContent`.

## 7. Tổng kết

Giao diện chỉ là lớp trình bày trên pipeline tìm kiếm; kết quả có thể rất trực quan nhưng vẫn cần kiểm chứng truy xuất và bảo mật quyền dữ liệu trước khi vận hành thực tế.

## 8. Câu hỏi ôn tập

### Câu 1

Django dùng hàm gì để trả kết quả API JSON trong lab?

A. render_to_pdf  
B. JsonResponse  
C. HttpRedirectPermanent  
D. FileResponse  

**Đáp án:** B  
**Giải thích:** `JsonResponse` trả body JSON và status HTTP.

### Câu 2

Tại sao frontend dùng `textContent` cho snippet?

A. Để render script HTML trong tài liệu  
B. Để tránh diễn giải HTML/script không tin cậy  
C. Để Ollama chạy nhanh hơn  
D. Để PostgreSQL lưu văn bản dài hơn  

**Đáp án:** B  
**Giải thích:** `textContent` coi snippet là văn bản, hạn chế XSS khi dữ liệu crawl không đáng tin.

### Câu 3

Tham số câu hỏi đi vào API qua đâu?

A. Header Docker  
B. Query string `q`  
C. Tên bảng  
D. HNSW parameter m  

**Đáp án:** B  
**Giải thích:** Endpoint GET nhận input từ `request.GET.get("q")`.

### Câu 4

Nếu câu hỏi dài 1 ký tự thì backend làm gì?

A. Trả 400 validation error  
B. Tự bật HNSW  
C. Tự tạo trang mới  
D. Lưu chunk mới  

**Đáp án:** A  
**Giải thích:** API kiểm tra độ dài từ 2 đến 500 ký tự.

### Câu 5

Kết quả backend cần chứa giá trị nào để người dùng mở nguồn?

A. Password PostgreSQL  
B. source URL  
C. Docker secret  
D. Full embedding vector  

**Đáp án:** B  
**Giải thích:** URL trỏ tới tài liệu nguồn và được hiển thị thành link.

