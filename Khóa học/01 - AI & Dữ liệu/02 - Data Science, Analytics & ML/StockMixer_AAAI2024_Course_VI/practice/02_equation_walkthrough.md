# Bài tập 02 - Đi qua từng công thức

## Phần A - Pairwise ranking

Cho ground-truth returns của hai stock:

```text
r_i = 0.03
r_j = -0.01
```

Trường hợp 1:

```text
rhat_i = 0.02
rhat_j = 0.00
```

Trường hợp 2:

```text
rhat_i = -0.01
rhat_j = 0.02
```

Tính dấu của:

\[
-(\hat r_i-\hat r_j)(r_i-r_j)
\]

và cho biết trường hợp nào bị ranking penalty.

## Phần B - Market bottleneck

Với `N=1000`, `m=20`, so sánh trực giác số latent channels của direct N→N mixing và bottleneck N→m→N. Không cần tính tổng parameter chính xác nếu chưa biết các axis phụ; chỉ giải thích vì sao bottleneck ép mô hình qua một số market states hữu hạn.

## Phần C - Multi-scale

Với T=32 và scales `{1,2,4}`, tính tổng temporal lengths sau pooling. Sau đó thảo luận vì sao tăng scale tới `{1,2,4,8}` vừa thêm context vừa tăng dimension/chi phí.
