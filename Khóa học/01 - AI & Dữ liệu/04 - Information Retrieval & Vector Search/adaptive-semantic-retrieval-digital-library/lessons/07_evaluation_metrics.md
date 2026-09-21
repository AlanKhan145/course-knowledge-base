# Bài 07 — Thiết kế thí nghiệm và Metric đánh giá Retrieval

## 1. Dataset trong thiết lập thực nghiệm

Nguồn mô tả ba collection:

- 500,000 academic papers;
- 120,000 cultural heritage artifacts;
- 250,000 medical documents;
- khoảng 35,000 user sessions trong 6 tháng.

Mục đích của thiết kế đa collection là kiểm tra framework ở domain khác nhau thay vì chỉ một kho tài liệu.

## 2. Precision, Recall, F1

$$Precision=\frac{TP}{TP+FP}$$

$$Recall=\frac{TP}{TP+FN}$$

$$F1=2\cdot\frac{Precision\cdot Recall}{Precision+Recall}$$

Trong search, precision trả lời “trong kết quả trả ra có bao nhiêu cái đúng”, còn recall trả lời “trong toàn bộ thứ đúng có bao nhiêu cái tìm được”.

## 3. MAP

Mean Average Precision đánh giá chất lượng ranking qua nhiều query, quan tâm vị trí xuất hiện của relevant items. Nó hữu ích hơn Precision đơn thuần khi cần so sánh thứ tự kết quả.

## 4. nDCG và Adaptive Relevance Metric

Nguồn đưa ra ARM để theo dõi độ phù hợp cá nhân hóa qua nhiều session:

$$
ARM(u,n)=\frac{1}{n}\sum_{i=1}^{n}w_i\cdot nDCG@k_i
$$

Trọng số thời gian ưu tiên session gần đây, nhờ vậy metric phản ánh hệ thống có học dần theo user hay không.

## 5. Response time và usability

Retrieval tốt nhưng latency quá cao sẽ không dùng được. Do đó phải theo dõi cả response time. Nguồn còn dùng System Usability Scale (SUS) cho user study, thể hiện nguyên tắc quan trọng: **quality metric và user experience metric không thay thế nhau**.

## 6. Evaluation protocol tốt cần gì?

- train/validation/test tách rõ;
- query set và relevance judgment rõ nguồn;
- baseline đủ mạnh;
- ablation để đo contribution;
- latency trong điều kiện tải thực tế;
- confidence interval hoặc repeated runs khi có randomness;
- cold-start evaluation riêng;
- personalization evaluation không trộn lẫn user history giữa split.

## Concept check

Nếu một model có Recall 0.90 nhưng Precision 0.40, khi nào nó vẫn hữu ích? Khi nào nó gây khó chịu cho người dùng?
