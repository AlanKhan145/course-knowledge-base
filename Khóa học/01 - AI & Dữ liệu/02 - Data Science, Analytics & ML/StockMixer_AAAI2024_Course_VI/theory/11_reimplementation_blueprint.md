# Bài 11 - Blueprint tái hiện StockMixer bằng PyTorch

Mục tiêu bài này là chuyển công thức paper thành checklist implementation, nhưng **không tự bịa chi tiết mà paper không nói rõ**.

## 1. Data pipeline

Mỗi sample nên biểu diễn toàn thị trường trong một lookback window:

```text
X: [N, T, F]
T = 16 trong setup của paper
```

Target là next-day close/return theo thiết lập paper. Split phải theo thời gian, không random-shuffle tương lai vào train.

## 2. Generic mixing block

Pseudo-code:

```python
z = layer_norm(x)
z = linear_1(z, along=mixing_axis)
z = activation(z)
z = linear_2(z, restore_axis)
y = x + z
```

Cần cẩn thận transpose/reshape để Linear thực sự tác động lên đúng axis.

## 3. Indicator Mixing

```text
stock x: [T, F]
transpose: [F, T]
mix along F
restore: [T, F]
```

## 4. Multi-scale Time Mixing

Với `T=16`:

```text
scale k=1 -> length 16
scale k=2 -> length 8
scale k=4 -> length 4
```

Ở mỗi scale:

```text
pool/patch -> indicator mixing -> masked time mixing
```

Sau đó concat và FC để thu vector `h`.

## 5. Triangular mask

Paper nói chỉ upper-triangular part của weight matrix được train. Khi code, hãy viết unit test kiểm tra:

- phần bị mask luôn bằng 0 trong effective weight;
- gradient không cập nhật phần bị mask;
- tensor orientation khớp với phép nhân thực tế.

Đây là điểm nên đối chiếu code chính thức nếu mục tiêu là tái lập chính xác.

## 6. Stock Mixing

Stack mọi stock:

```text
H: [N, d]
```

Áp:

```text
LayerNorm -> M1(N→m) -> activation -> M2(m→N) -> residual
```

Vì Linear mặc định thường tác động last dimension, implementation có thể cần transpose `H` sang `[d, N]` hoặc viết phép matrix riêng. Shape test là bắt buộc.

## 7. Prediction head

Paper concatenates `H` và `H_hat`, sau đó dùng FC để dimension reduction và tạo final prediction.

## 8. Loss

```text
loss = mse_loss + alpha * pairwise_rank_loss
alpha = 0.1
```

Pairwise loss có `O(N^2)` pair nếu triển khai thẳng; paper không mô tả optimization trick chi tiết trong nội dung bài, vì vậy nếu tối ưu/chunking thì đó là quyết định implementation của người tái hiện.

## 9. Hyperparameters để bắt đầu

- T = 16
- scales = [1, 2, 4]
- LR = 1e-3
- alpha = 0.1
- one Stock Mixing block
- m = 20 / 25 / 8 tương ứng NASDAQ / NYSE / S&P500

## 10. Checklist validation

1. Unit test shape cho cả ba mixing axes.
2. Test mask không leak theo orientation đang dùng.
3. Kiểm tra split theo trading day.
4. Tính lại IC/RIC đúng theo ngày rồi average theo protocol.
5. Reproduce ít nhất một baseline đơn giản trước khi so StockMixer.
6. Chạy ≥3 seeds nếu muốn bám setup paper.
7. So bảng ablation trước khi kết luận implementation đúng.
