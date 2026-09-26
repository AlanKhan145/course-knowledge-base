# 08 — Review volume, quy mô cộng đồng và case study

## 1. Số rating

Paper cho biết một classic trung bình nhận khoảng **440.000 ratings nhiều hơn trên Goodreads** trong dữ liệu so sánh, mặc dù các Douban-exclusive works xuất bản đầu tiên bằng Chinese/Japanese thường có lợi thế ngược lại trên Douban.

Tác giả thảo luận rằng quy mô rating lớn hơn có thể đi cùng độ phân tán quan điểm lớn hơn, nhưng đây là một **khả năng giải thích**, không phải causal proof.

## 2. Số review

Figure 12 định nghĩa chênh lệch là:

> `Goodreads review count − Douban review count`

Mean differences theo figure:

- shared classics: khoảng **+6,041**
- Douban-exclusive classics: khoảng **−9,512**
- Goodreads-exclusive classics: khoảng **+16,415**

Dấu âm ở nhóm Douban-exclusive nghĩa là nhóm này trung bình có nhiều reviews hơn trên Douban.

## 3. Hai ví dụ cực trị

### The Alchemist

- Goodreads: **92,829 reviews**
- Douban: **2,970 reviews**

### To Live — Yu Hua

- Douban: **169,574 reviews**
- Goodreads: **1,343 reviews**

Hai ví dụ cho thấy **platform popularity** có thể đảo chiều rất mạnh tùy tác phẩm và cộng đồng.

## 4. Case study về convergence

Paper cũng đưa *A Global History: From Prehistory to the 21st Century* làm ví dụ có rating overall và star distributions tương đối gần nhau giữa hai nền tảng.

## 5. Cách diễn giải an toàn

Không nên nói:

> “Người dùng nền tảng A thích sách hơn nền tảng B.”

Nên nói:

> “Trong dataset và phép đối sánh của nghiên cứu, rating/review volume cho nhóm tác phẩm X có xu hướng khác theo nền tảng; khác biệt có thể liên quan đến quy mô cộng đồng, mức độ quen thuộc của tác phẩm, edition aggregation và bối cảnh nền tảng.”

## Bài tập

Viết một đoạn 120 từ mô tả *To Live* chỉ dựa trên review counts nêu trên, tránh suy diễn động cơ của người dùng.
