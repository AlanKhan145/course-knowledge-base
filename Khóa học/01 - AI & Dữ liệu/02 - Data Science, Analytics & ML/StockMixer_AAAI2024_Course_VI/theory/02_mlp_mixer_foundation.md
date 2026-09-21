# Bài 02 - MLP-based Mixing nền tảng

## 1. Mixing block chuẩn

StockMixer xây trên dạng residual MLP block:

\[
y = x + W_2\,\sigma\big(W_1\,\mathrm{LayerNorm}(x)\big)
\]

Với `x ∈ R^(a×b)`, mixing được thực hiện theo chiều `a`. Hai ma trận:

\[
W_1 \in \mathbb{R}^{h \times a}, \qquad W_2 \in \mathbb{R}^{a \times h}
\]

Paper nói hidden dimension `h` thường được đặt bằng `a` trong thiết kế của họ.

## 2. Vai trò của từng thành phần

- **LayerNorm**: giảm ảnh hưởng của độ lệch scale/offset trước khi MLP trộn thông tin.
- **Linear 1**: chiếu các phần tử dọc chiều cần mixing sang hidden representation.
- **Activation**: đưa phi tuyến vào block.
- **Linear 2**: chiếu lại về kích thước gốc.
- **Residual**: giữ đường truyền trực tiếp từ input, giúp block cân bằng giữa tín hiệu gốc và tín hiệu đã trộn.

## 3. Điểm mạnh của MLP-Mixer đối với bài toán này

MLP block có cấu trúc đơn giản và chi phí tính toán tuyến tính theo phép linear. Quan trọng hơn, cùng một ý tưởng mixing có thể áp dụng lên các chiều khác nhau bằng transpose/reshape hợp lý. Đây là nền để StockMixer lần lượt trộn:

1. chỉ báo `F`,
2. thời gian `T`,
3. cổ phiếu `N`.

## 4. Nhưng cùng một mixing không thể dùng y hệt cho mọi chiều

Đây là điểm cốt lõi của paper. Indicator dimension có thể dùng block chuẩn; time dimension cần **mask theo hướng thời gian** và **multi-scale patching**; stock dimension cần bottleneck qua `m` trạng thái thị trường.

![Standard mixing vs time mixing](../images/02_paper_figure2_time_mixing.png)

## 5. Activation function không phải chi tiết phụ

Paper thực nghiệm GELU, Sigmoid, tanh, ReLU và HardSwish trên NASDAQ. ReLU và HardSwish cho kết quả tốt hơn rõ rệt so với Sigmoid/tanh; HardSwish đạt IC và RIC cao nhất trong hình được báo cáo. Điều này cho thấy lựa chọn activation của MLP block có thể ảnh hưởng trực tiếp tới performance trên stock time series.

Xem: `images/06_paper_figure3_activation.png`.
