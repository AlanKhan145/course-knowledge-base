# Gợi ý đáp án — Metrics và backtest

## Bài 1

Mean IC = `(0.04 + 0.02 + 0.05 - 0.01 + 0.03) / 5 = 0.026`.

Population std xấp xỉ `0.0206`, nên ICIR xấp xỉ `1.26`. Nếu dùng sample std, kết quả sẽ khác; bài yêu cầu population.

ICIR thấp khi IC dao động mạnh theo thời gian, kể cả mean IC dương.

## Bài 2

Peak 1.10 rơi xuống 0.99, drawdown = `(1.10 - 0.99)/1.10 = 10%`. Đây là MDD lớn nhất của chuỗi.

## Bài 3

`0.142 / 0.0742 ≈ 1.91`, gần với Table 1. Sai khác do các số hiển thị đã làm tròn.

## Bài 4 — Leakage examples

- dùng giá/return của `t+1` để tạo feature tại `t`;
- normalization bằng thống kê lấy từ toàn bộ test period;
- chọn factor/hyperparameter trực tiếp theo test performance;
- corporate/fundamental data không respect publication lag.
