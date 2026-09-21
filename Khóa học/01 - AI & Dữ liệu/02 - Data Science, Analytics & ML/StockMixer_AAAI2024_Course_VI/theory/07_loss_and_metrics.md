# Bài 07 - Loss function và các metric đánh giá

## 1. Tại sao không chỉ dùng MSE?

Trong đầu tư, thứ tự stock theo expected return cũng quan trọng như sai số tuyệt đối. Vì vậy paper kết hợp pointwise regression với pairwise ranking-aware loss.

\[
L = L_{MSE} + \alpha \sum_{i=1}^{N}\sum_{j=1}^{N}
\max\left(0,-(\hat r_i^t-\hat r_j^t)(r_i^t-r_j^t)\right)
\]

Paper đặt `α = 0.1`.

## 2. Trực giác của pairwise term

Với hai cổ phiếu `i` và `j`:

- nếu ground truth nói `i` có return cao hơn `j`, ta muốn predicted score cũng theo thứ tự đó;
- khi predicted difference và true difference cùng dấu, tích của chúng dương, dấu âm ở trước làm `max(0, ...)` về 0;
- khi hai thứ tự ngược nhau, term trở thành dương và tạo penalty.

## 3. Metric 1: IC

**Information Coefficient (IC)** được paper mô tả là trung bình Pearson correlation giữa prediction và actual result. Nó phản ánh mức độ liên hệ tuyến tính giữa score dự đoán và outcome thực tế.

## 4. Metric 2: RIC

**Rank Information Coefficient (RIC)** dùng Spearman correlation, nên tập trung vào thứ hạng thay vì khoảng cách số học tuyệt đối. Đây là metric rất phù hợp với stock selection.

## 5. Metric 3: Precision@N

Chọn `N` prediction đứng đầu. Precision@N là tỷ lệ các stock có label positive trong nhóm này. Paper đưa ví dụ 4/10 stock positive thì Precision@10 = 40%.

## 6. Metric 4: Sharpe Ratio

Paper dùng:

\[
SR = \frac{R_t-R_f}{\theta}
\]

trong đó `R_t` là return, `R_f` là risk-free rate và `θ` là standard deviation của returns. SR đưa risk vào đánh giá thay vì chỉ nhìn return.

## 7. Mối liên hệ loss - metric

Ranking term trực tiếp khuyến khích ordering tốt hơn, vì vậy có liên hệ tự nhiên với RIC và stock-selection behavior. MSE giữ dự đoán return không trôi quá xa về giá trị.
