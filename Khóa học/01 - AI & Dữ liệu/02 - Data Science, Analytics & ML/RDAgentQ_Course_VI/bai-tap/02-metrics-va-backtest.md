# Bài tập 02 — Metrics và backtest

## Bài 1 — ICIR

Giả sử daily IC trong 5 ngày là:

```text
0.04, 0.02, 0.05, -0.01, 0.03
```

1. Tính mean IC.
2. Tính standard deviation theo quy ước population.
3. Tính ICIR.
4. Giải thích vì sao mean IC dương nhưng ICIR vẫn có thể thấp.

## Bài 2 — Drawdown

NAV theo ngày:

```text
1.00, 1.05, 1.10, 1.02, 0.99, 1.08, 1.15
```

Tính maximum drawdown theo peak-to-trough.

## Bài 3 — Calmar

Nếu ARR = 14.2% và MDD = -7.42%, hãy tính Calmar Ratio gần đúng. So sánh với con số trong Table 1 và giải thích sai khác nhỏ nếu có do rounding.

## Bài 4 — Portfolio protocol

Viết pseudocode cho strategy:

- model xếp hạng cổ phiếu cuối ngày t;
- rebalance ngày t+1;
- giữ top-k;
- tính transaction costs;
- cập nhật NAV.

Sau đó nêu ít nhất 3 nguồn leakage thường gặp.
