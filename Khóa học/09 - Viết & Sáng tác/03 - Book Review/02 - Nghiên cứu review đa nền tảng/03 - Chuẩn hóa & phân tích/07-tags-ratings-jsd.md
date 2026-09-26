# 07 — Tags, ratings, distributions và Jensen–Shannon

## 1. So sánh tags

Paper so sánh tag clouds của ba nhóm:

- Douban-exclusive classics;
- Goodreads-exclusive classics;
- shared classics.

Một số quan sát:

- “literature”, “fiction”, “classic” phổ biến trên cả hai nền tảng;
- Goodreads thường thấy các tag như “gothic”, “historical fiction”, và các tag liên quan “academic/school”;
- “martial arts” và “manga” nổi bật trong nhóm Douban-exclusive;
- “WuXia” là ví dụ cho thấy một category văn hóa có thể bị biểu diễn khác nhau khi chuyển qua hệ thống tag của nền tảng khác.

## 2. Rating trung bình chưa đủ

Phần lớn overall ratings trong nghiên cứu tập trung khoảng **3.8–4.7/5**. Paper quan sát Douban ratings nhìn chung cao hơn Goodreads trong các nhóm so sánh.

Nhưng một average rating gần nhau không có nghĩa cộng đồng đánh giá giống nhau.

## 3. Case study: Who Moved My Cheese?

### Douban

- overall: **7.6/10 = 3.8/5**
- 5 sao: **26.4%**
- 4 sao: **39.9%**
- 3 sao: **27.8%**

### Goodreads

- overall: **3.86/5**
- 5 sao: **35%**
- 4 sao: **30%**
- 3 sao: **21%**
- 2 sao: **7%**
- 1 sao: **4%**

Hai overall ratings chỉ chênh khoảng **0.06**, nhưng hình dạng phân phối khác đáng kể. Đây là lý do paper phân tích star-wise distributions.

## 4. Jensen–Shannon

Paper dùng **Jensen–Shannon distance** (square root of Jensen–Shannon divergence) từ SciPy để lượng hóa khác biệt giữa hai phân phối 1–5 sao.

Mean Jensen–Shannon distance:

- Douban-exclusive: **0.200**
- Goodreads-exclusive: **0.201**
- Shared classics: **0.208**

Paper nhấn mạnh JSD/Jensen–Shannon distance có tính đối xứng và hữu hạn, thuận tiện hơn Kullback–Leibler divergence cho mục tiêu so sánh hai phân phối.

## 5. Tư duy phân tích

Khi đánh giá reception, hãy hỏi theo thứ tự:

1. average rating có khác không?
2. distribution có khác không?
3. sample size có đủ tương xứng không?
4. đơn vị rating là edition hay all editions?
5. platform context có giải thích một phần khác biệt không?

## Bài tập

Giải thích trong 5–7 câu tại sao **3.80 vs 3.86** không đủ để kết luận hai cộng đồng phản ứng gần như giống nhau với *Who Moved My Cheese?*.
