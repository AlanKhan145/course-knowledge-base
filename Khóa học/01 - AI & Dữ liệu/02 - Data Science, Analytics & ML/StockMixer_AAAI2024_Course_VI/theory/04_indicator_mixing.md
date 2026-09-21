# Bài 04 - Indicator Mixing

## 1. Mục tiêu

Indicator Mixing học quan hệ giữa các feature tài chính trong cùng một thời điểm trước khi học temporal pattern. Paper cho ví dụ chênh lệch open và close trong cùng ngày có thể mang tín hiệu cho tương lai.

Với một stock:

\[
x \in \mathbb{R}^{T \times F}
\]

Ta transpose để đưa indicator dimension vào trục mixing:

\[
x^T \in \mathbb{R}^{F \times T}
\]

## 2. Công thức

\[
\hat{x}^{T} = x^{T} + W_2\sigma\left(W_1\mathrm{LayerNorm}(x^{T})\right)
\]

Sau mixing, ta trở lại representation:

\[
\hat{x} \in \mathbb{R}^{T \times F}
\]

và chuyển sang Time Mixing.

## 3. Tại sao làm indicator trước time?

Nếu temporal encoder nhận từng vector feature chưa được trộn, cross-indicator relation chỉ có thể được học gián tiếp. Paper cho rằng trộn indicator trước giúp representation thời gian chứa tín hiệu kết hợp giữa các chỉ báo ngay từ đầu.

## 4. Ablation nói gì?

Trên NASDAQ, bỏ Indicator Mixing giảm từ `IC 0.043 / RIC 0.501` xuống `0.040 / 0.465`. Trên NYSE, giảm từ `0.029 / 0.351` xuống `0.027 / 0.291`.

Mức giảm không lớn bằng khi bỏ Time Mixing, nhưng vẫn cho thấy indicator correlation có đóng góp.

## 5. Shape drill

Với `T=16`, `F=8`:

- input stock: `16 × 8`;
- transpose: `8 × 16`;
- MLP mixing theo `F=8`;
- transpose/arrange lại: `16 × 8`.

Điểm cần nhớ: block không làm mất số time steps; nó chỉ trao đổi thông tin dọc indicator axis.
