# Cosine similarity, cosine distance và top-k retrieval

> **Tóm tắt:** Hiểu công thức cosine và cách ánh xạ sang toán tử pgvector `<=>` để sắp xếp kết quả.

## 1. Mục tiêu học tập

- Tính được cosine similarity từ hai vector đơn giản.
- Giải thích ý nghĩa của cosine distance.
- Đọc đúng câu lệnh `ORDER BY embedding <=> query_embedding`.

## 2. Công thức cosine

Với $a,b$ là hai vector khác vector không, cosine similarity:

$$
\operatorname{cos}(a,b)=\frac{a \cdot b}{\|a\|_2\,\|b\|_2}
$$

Nếu $a=(1,0)$ và $b=(1,1)$ thì $\operatorname{cos}(a,b)=1/\sqrt{2}\approx0.707$. Cosine có miền toán học $[-1,1]$, **không** phải luôn $[0,1]$. Giá trị gần 1 là cùng hướng; gần 0 gần trực giao; gần -1 ngược hướng.

## 3. Toán tử trong PostgreSQL

pgvector hỗ trợ `<=>` cho cosine **distance**:

$$
\text{cosine distance} = 1 - \text{cosine similarity}
$$

Do đó, sắp xếp tăng dần theo `<=>` lấy các chunk giống query hơn. Nếu muốn báo cáo độ tương đồng, tính `1 - (embedding <=> query_embedding)`. Đừng gọi giá trị toán tử `<=>` là similarity.

```sql
select id, content, 1 - (embedding <=> '[...]'::extensions.vector) as similarity
from public.chunks
order by embedding <=> '[...]'::extensions.vector
limit 5;
```

`[...]` ở trên chỉ là placeholder; phải thay bằng đủ 1024 số của query embedding.

## 4. Top-k và đánh giá

Top-k là số đoạn lấy về, ví dụ `k=5`. Top-k cao tăng khả năng thấy bằng chứng liên quan nhưng tăng nhiễu và context budget. Không có ngưỡng similarity tối ưu dùng chung cho mọi corpus. Nên kiểm tra relevance từng kết quả và tỷ lệ câu hỏi truy vấn thành công trước khi gắn threshold.

## 5. Thực hành và tự kiểm tra

Tính cosine cho `(1,0)` và `(0,1)`; `(1,0)` và `(1,0)`; `(1,0)` và `(-1,0)`. Sau đó giải thích khi nào toán tử `<=>` cho khoảng cách 0, 1, 2.

## 6. Câu hỏi ôn tập

### Câu 1

Giá trị cosine của hai vector cùng hướng?

A. Gần 1  
B. Gần 0  
C. Luôn -1  
D. Không có giá trị  

**Đáp án:** A

**Giải thích:** Cùng hướng tạo góc gần 0 độ.

### Câu 2

Toán tử `<=>` của pgvector biểu thị?

A. Inner join  
B. Số row  
C. Cosine distance  
D. FTS score  

**Đáp án:** C

**Giải thích:** `<=>` đo khoảng cách cosine.

### Câu 3

Muốn lấy vector gần query nhất dùng thứ tự nào?

A. Distance giảm dần  
B. Distance tăng dần  
C. ID giảm dần  
D. Độ dài content  

**Đáp án:** B

**Giải thích:** Khoảng cách càng nhỏ thì càng gần.

### Câu 4

Cosine có thể âm không?

A. Không  
B. Chỉ với JSON  
C. Không nếu có HNSW  
D. Có  

**Đáp án:** D

**Giải thích:** Hai vector ngược hướng có cosine âm.

### Câu 5

Giá trị top-k ảnh hưởng điều gì?

A. Số đoạn retrieval trả về  
B. Số chiều model  
C. Phiên bản Docker  
D. Tên schema  

**Đáp án:** A

**Giải thích:** k giới hạn tập kết quả được lấy.

## 7. Tổng kết

Hiểu công thức cosine và cách ánh xạ sang toán tử pgvector `<=>` để sắp xếp kết quả. Hoàn thành phần thực hành và trả lời được các câu hỏi là đạt yêu cầu của bài.
