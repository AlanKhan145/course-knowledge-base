# Bài 07 — Viết truy vấn cosine và kiểm chứng semantic search

## 1. Tổng quan lab

Sau khi nạp document chunk, câu hỏi phải được chuyển thành vector theo cùng model. Kết quả được truy vấn bằng `ORDER BY embedding <=> query_vector LIMIT k`. Bài này xây bản CLI đơn giản để cô lập backend retrieval trước khi thêm Django.

## 2. Mục tiêu

- Phân biệt truy vấn vector với tìm kiếm `ILIKE`.
- Viết tham số SQL an toàn, trả `title`, URL, snippet, similarity.
- Giải thích lý do cần `ORDER BY`, `LIMIT` và threshold.
- Đánh giá ít nhất năm query kiểm thử có kết quả kỳ vọng.

## 3. Mẫu SQL chuẩn

```sql
SELECT id, title, source_url, chunk_index, content,
       embedding <=> '[...]' AS cosine_distance,
       1 - (embedding <=> '[...]') AS cosine_similarity
FROM document_chunks
ORDER BY embedding <=> '[...]' ASC
LIMIT 5;
```

Trong thực tế không gõ tay `[...]`: ứng dụng truyền đối tượng vector có **768 phần tử** qua driver. Dùng `ORDER BY embedding <=> $vector LIMIT k` thay vì sắp xếp `1-(distance)` giảm dần khi muốn planner tận dụng HNSW index sau này. Cosine similarity lớn hơn là gần hơn; distance nhỏ hơn là gần hơn. Một điểm giống 0.80 chưa chứng minh câu trả lời đúng.

## 4. Tạo `search.py` có thể chạy

```python
import os
import sys
import requests
import psycopg
from dotenv import load_dotenv
from pgvector import Vector
from pgvector.psycopg import register_vector

load_dotenv()
DB = os.environ['DATABASE_URL']
MODEL = os.getenv('EMBED_MODEL', 'nomic-embed-text')
OLLAMA = os.getenv('OLLAMA_URL', 'http://localhost:11434').rstrip('/')


def embed_question(question: str) -> Vector:
    r = requests.post(f'{OLLAMA}/api/embed',
        json={'model': MODEL, 'input': 'search_query: ' + question, 'truncate': False},
        timeout=180)
    r.raise_for_status()
    values = r.json()['embeddings'][0]
    if len(values) != 768:
        raise RuntimeError('Embedding dimensions khác vector(768)')
    return Vector(values)


def search(question: str, limit: int = 5):
    vector = embed_question(question)
    with psycopg.connect(DB) as conn:
        register_vector(conn)
        with conn.cursor() as cur:
            cur.execute("""
                SELECT title, source_url, chunk_index, content,
                       1 - (embedding <=> %s) AS similarity
                FROM document_chunks
                ORDER BY embedding <=> %s
                LIMIT %s
            """, (vector, vector, limit))
            return cur.fetchall()

if __name__ == '__main__':
    q = ' '.join(sys.argv[1:]) or 'How do I set up Airflow with Docker?'
    for idx, (title, url, pos, content, score) in enumerate(search(q), 1):
        print(f'{idx}. {title} | score={score:.3f} | chunk={pos}')
        print(f'   {url}')
        print(f'   {content[:240]}...')
```

Chạy:

```bash
python search.py "How do I set up Airflow with Docker?"
python search.py "What is LocalExecutor in Airflow?"
```

**Giải thích:** SQL dùng placeholder `%s` để truyền dữ liệu, không format thẳng chuỗi vector vào SQL. Một câu hỏi được embed một lần trong mỗi lần gọi `search`. Các kết quả chứa URL để người dùng bấm mở và kiểm chứng thông tin.

## 5. Kiểm thử 5 tình huống

| Câu hỏi | Tín hiệu kết quả kỳ vọng |
| --- | --- |
| `How to install Airflow with Docker?` | Các trang setup/Docker |
| `What is a LocalExecutor?` | Trang về executor, nếu đã ingest |
| `How to install Python dependencies?` | Hướng dẫn pip/setup có trong corpus |
| `How do I configure a DAG?` | Nội dung DAG, nếu có trong corpus |
| `What is the capital of Mars?` | Không nên đưa ra câu trả lời chắc chắn nếu corpus không có |

Không được tuyên bố 5/5 đúng khi chưa chạy thực nghiệm. Với corpus nhỏ, hệ thống luôn trả Top-k gần nhất dù câu hỏi lạc chủ đề; cần cân nhắc một ngưỡng thích hợp, thử nghiệm trên dữ liệu gán nhãn và cho phép “không tìm thấy tài liệu phù hợp”.

## 6. Giới hạn của retrieval

Một query ngắn như `pip` có thể mơ hồ. Kết quả liên quan đến pip install, Airflow setup hoặc Python environment. Có thể cải thiện bằng cách mở rộng query, kết hợp keyword search, đưa thêm metadata/chunk title vào embedding hoặc dùng reranker — nhưng các cải tiến phải được đo riêng.

## 7. Checkpoint

- [ ] In được Top-5 gồm URL và similarity.
- [ ] Kết quả cho “Docker” có nội dung cài đặt trong nguồn thực tế.
- [ ] Không nối thẳng input người dùng vào SQL.
- [ ] Đọc được `EXPLAIN` khi cần phân tích hiệu năng.

## 8. Tổng kết

Semantic search bằng SQL có thể bắt đầu rất đơn giản. Chất lượng cần đo trên corpus thật; điểm cosine chỉ là một tín hiệu xếp hạng, không phải xác suất đúng.

## 9. Câu hỏi ôn tập

### Câu 1

Truy vấn phù hợp với cosine kNN trong pgvector là gì?

A. ORDER BY embedding <=> query LIMIT k  
B. ORDER BY title DESC  
C. WHERE length(content) > k  
D. GROUP BY embedding  

**Đáp án:** A  
**Giải thích:** Sắp xếp theo cosine distance tăng dần lấy vector gần nhất.

### Câu 2

Tại sao nên truyền vector bằng parameter binding?

A. Để tránh ghép trực tiếp dữ liệu người dùng vào SQL  
B. Để vector chỉ còn một chiều  
C. Để tăng số container  
D. Để bỏ PostgreSQL password  

**Đáp án:** A  
**Giải thích:** Parameter binding giúp truyền giá trị đúng kiểu và giảm rủi ro SQL injection.

### Câu 3

Similarity được tính từ cosine distance như thế nào?

A. similarity = distance + 1  
B. similarity = 1 - distance  
C. similarity = distance × 10  
D. similarity = 1 / number_of_chunks  

**Đáp án:** B  
**Giải thích:** Cosine distance theo quy ước này bằng 1 trừ cosine similarity.

### Câu 4

Nếu query hoàn toàn lạc chủ đề, Top-k mặc định có thể làm gì?

A. Không trả hàng nào chắc chắn  
B. Vẫn trả k đoạn gần nhất dù không liên quan  
C. Tự tải tài liệu web mới  
D. Tự huấn luyện model mới  

**Đáp án:** B  
**Giải thích:** kNN luôn tìm hàng gần nhất trong corpus hiện có dù chất lượng có thể thấp.

### Câu 5

Vì sao cần lưu source_url trong kết quả?

A. Để người dùng kiểm chứng trích dẫn  
B. Để tính tích vô hướng  
C. Để thay dữ liệu embedding  
D. Để Docker đo RAM  

**Đáp án:** A  
**Giải thích:** URL giúp người dùng kiểm tra nội dung nguồn thực tế.

