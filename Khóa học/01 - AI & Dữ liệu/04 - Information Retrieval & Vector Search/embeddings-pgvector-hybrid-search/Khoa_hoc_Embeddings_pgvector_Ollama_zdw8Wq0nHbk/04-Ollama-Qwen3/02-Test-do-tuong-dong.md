# Kiểm tra semantic similarity với ba câu

> **Tóm tắt:** Đánh giá trực quan mô hình embedding bằng các câu cùng ý và khác chủ đề trước khi dùng với dữ liệu thật.

## 1. Mục tiêu học tập

- Sinh vector cho ba câu.
- Tính cosine similarity đúng chuẩn.
- Giải thích vì sao ví dụ không thể thay thế benchmark retrieval.

## 2. Thiết kế ba câu kiểm thử

Dùng hai câu gần nghĩa và một câu không liên quan:

1. “The business achieved record quarterly revenue.”
2. “The company posted exceptionally strong sales this quarter.”
3. “The train arrived at the station in the morning.”

Kỳ vọng cặp (1,2) tương đồng hơn cặp (1,3). Mức điểm thực tế phụ thuộc model, câu và prompt; không gán trước một giá trị như 0.42 hay 0.85.

## 3. Mã Python đo cosine

```python
import math
from ollama import Client

texts = [
    'The business achieved record quarterly revenue.',
    'The company posted exceptionally strong sales this quarter.',
    'The train arrived at the station in the morning.',
]
client = Client(host='http://127.0.0.1:11434')
vectors = client.embed(model='qwen3-embedding:0.6b', input=texts).embeddings
assert len(vectors) == 3 and all(len(v) == 1024 for v in vectors)

def cosine(a, b):
    dot = sum(x*y for x, y in zip(a, b))
    na = math.sqrt(sum(x*x for x in a))
    nb = math.sqrt(sum(x*x for x in b))
    return dot / (na*nb)

print('near meaning:', cosine(vectors[0], vectors[1]))
print('different topic:', cosine(vectors[0], vectors[2]))
```

Nên dùng `zip` chỉ sau khi xác nhận kích thước bằng nhau; nếu không, `zip` im lặng bỏ phần dư. Kiểm tra vector khác vector zero trước khi chia.

## 4. Đọc kết quả có trách nhiệm

Cosine similarity không phải xác suất “câu đúng”. Hai câu cùng chủ đề chưa chắc trả lời cùng câu hỏi. Một thí nghiệm ba câu chỉ xác nhận sơ bộ rằng model có phân biệt ngữ nghĩa trong ví dụ; để đánh giá retrieval phải dùng nhiều query, nhãn relevance và thước đo như Recall@k, MRR/nDCG.

## 5. Thực hành và tự kiểm tra

Chạy script, ghi lại hai điểm cosine và viết kết luận 2–3 câu. Thử thay câu thứ ba bằng câu có nhiều từ giống câu 1 nhưng mang ý nghĩa phủ định, xem độ tương đồng có bị đánh lừa không.

## 6. Câu hỏi ôn tập

### Câu 1

Cặp nào dự kiến có cosine cao hơn?

A. Câu 1–2  
B. Câu 1–3  
C. Luôn bằng nhau  
D. Không cần model  

**Đáp án:** A

**Giải thích:** Hai câu đầu diễn đạt một chủ đề gần nghĩa.

### Câu 2

Cosine similarity có phải xác suất đúng?

A. Có  
B. Không  
C. Có nếu 1024 chiều  
D. Chỉ với HNSW  

**Đáp án:** B

**Giải thích:** Cosine đo tương đồng vector, không hiệu chỉnh thành xác suất.

### Câu 3

Vì sao kiểm tra độ dài trước zip?

A. Tăng accuracy  
B. Khởi động Docker  
C. Tránh việc zip cắt phần dư im lặng  
D. Tạo FTS  

**Đáp án:** C

**Giải thích:** Zip dừng tại sequence ngắn nhất.

### Câu 4

Đo Recall@k cần gì?

A. Chỉ một câu  
B. Chỉ index  
C. Chỉ model size  
D. Tập câu hỏi có nhãn relevance  

**Đáp án:** D

**Giải thích:** Metric đánh giá cần ground truth.

### Câu 5

Nếu cả ba câu có điểm cao thì kết luận nào phù hợp?

A. Cần xem thêm ví dụ và đánh giá rộng hơn  
B. Model chắc chắn hoàn hảo  
C. Database hỏng  
D. Cosine không bao giờ âm  

**Đáp án:** A

**Giải thích:** Test nhỏ không đủ xác nhận chất lượng chung.

## 7. Tổng kết

Đánh giá trực quan mô hình embedding bằng các câu cùng ý và khác chủ đề trước khi dùng với dữ liệu thật. Hoàn thành phần thực hành và trả lời được các câu hỏi là đạt yêu cầu của bài.
