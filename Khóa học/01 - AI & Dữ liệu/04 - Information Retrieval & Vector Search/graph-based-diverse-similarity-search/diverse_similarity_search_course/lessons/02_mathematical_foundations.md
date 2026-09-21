# Lesson 02 — Nền tảng toán học và phát biểu bài toán

## Mục tiêu

Bài này chuẩn hóa toàn bộ ký hiệu để khi đọc pseudocode và theorem không bị lẫn giữa **relevance distance** và **diversity**.

## 1. Metric relevance `D`

Ta làm việc trong metric space `(X,D)`. Tập dữ liệu là `P ⊂ X`, `|P|=n`.

Với một tập nghiệm `S` có `k` điểm và query `q`, ký hiệu `S_i(q)` là khoảng cách từ `q` đến điểm gần thứ `i` trong `S`. Đặc biệt:

\[
S_k(q)=\max_{p\in S}D(p,q)
\]

là khoảng cách của phần tử xa nhất trong top-`k` nghiệm.

Mục tiêu Colorful NN là làm nhỏ nhất `S_k` nhưng vẫn thỏa diversity.

## 2. Colorful và k'-colorful

### Colorful

Một tập `S` là **colorful** nếu không có hai điểm cùng color.

Đây chính là `k'=1`.

### k'-colorful

Một tập `S` là **k'-colorful** nếu mỗi color xuất hiện không quá `k'` lần.

Hai đầu mút quan trọng:

- `k'=1`: diversity rất mạnh;
- `k'=k`: constraint gần như biến mất, quay về `k`-NN thông thường.

## 3. Colorful NN

Ta cần tiền xử lý `P` thành data structure để mỗi query `q` trả về `S ⊂ P`, `|S|=k`, `S` colorful và `S_k` nhỏ nhất có thể.

Điểm quan trọng: đây không phải bài toán “lọc theo một màu query chỉ định”. Query không yêu cầu màu cụ thể; hệ thống phải chủ động tạo một output đa dạng.

## 4. Ball trong metric `D`

\[
B_D(p,r)=\{u\in X: D(u,p)<r\}.
\]

Ball là công cụ cơ bản trong chứng minh pruning: nếu nhiều điểm nằm rất gần nhau so với khoảng cách tới `p`, không nhất thiết phải giữ edge từ `p` đến tất cả chúng.

## 5. Doubling dimension

Tập `P` có doubling dimension `d` nếu bất kỳ ball bán kính `2r` nào cũng có thể được cover bởi nhiều nhất `2^d` ball bán kính `r`.

Trực giác:

- `d` đo **intrinsic dimension**, không nhất thiết bằng dimension embedding;
- nếu dữ liệu có intrinsic dimension nhỏ, một vùng không gian có thể cover bằng số lượng ball nhỏ có kiểm soát;
- nhờ vậy ta bound được số representative/edge cần giữ.

Paper sử dụng hệ quả: một ball bán kính `r` có thể cover bởi `O(α^d)` ball bán kính nhỏ hơn khoảng `r/α`.

## 6. Aspect ratio Δ

Định nghĩa:

\[
\Delta = \frac{D_{max}}{D_{min}},
\]

với:

- `Dmax`: khoảng cách lớn nhất giữa hai điểm trong `P`;
- `Dmin`: khoảng cách nhỏ nhất giữa hai điểm khác nhau.

Khi chia không gian thành các “ring” theo cấp khoảng cách giảm theo lũy thừa 2, số cấp chỉ khoảng `log Δ`. Đây là nguồn gốc của `log Δ` trong bound bậc graph và search.

## 7. Theorem 1.1 — điều cần hiểu

Ở case đơn giản `k'=1`, paper xây graph và search sao cho output `S` có `k` màu khác nhau, đồng thời mỗi điểm trả về không quá xa so với radius tối ưu `R`.

Approximation factor theo `D` có dạng:

\[
\frac{\alpha+1}{\alpha-1}+\varepsilon.
\]

Số bước search cỡ:

\[
O\left(k\log_\alpha\frac{\Delta}{\varepsilon}\right).
\]

Bậc graph có bound:

\[
O\left(k(8\alpha)^d\log\Delta\right).
\]

### Đọc các công thức này thế nào?

- `α` lớn hơn làm approximation factor theo công thức tốt hơn, nhưng `(8α)^d` làm cost graph tăng.
- `d` xuất hiện ở số mũ: dữ liệu intrinsic dimension cao có thể làm bound tệ nhanh.
- `log Δ` thể hiện việc search/pruning đi qua nhiều thang khoảng cách.
- `k` là overhead do phải duy trì nhiều representative đa dạng thay vì một NN.

## 8. Recall trong phần thực nghiệm

Paper dùng recall@100 so với **ground truth diverse top-100**, không phải ground truth k-NN thông thường.

Ground truth được xây bằng cách duyệt toàn bộ vector theo khoảng cách tới query rồi greedily nhận điểm nếu nó không vi phạm `k'` constraint cho tới khi đủ 100 điểm.

Điều này rất quan trọng: nếu bạn đánh giá diverse algorithm bằng recall so với non-diverse top-100, metric sẽ không đo đúng mục tiêu.

## Câu hỏi tự kiểm tra

1. Vì sao `S_k` là đại lượng hợp lý để đo “closeness” của một set top-`k`?
2. `k'=k` làm bài toán trở thành gì?
3. Doubling dimension khác embedding dimension như thế nào về mặt trực giác?
4. Vì sao `log Δ` xuất hiện tự nhiên khi ta xét các ring theo thang khoảng cách?
5. Khi `α` tăng, trade-off lý thuyết chính là gì?
