# StockMixer Cheat Sheet

## Tensor

\[
X \in R^{N\times T\times F}
\]

- `N`: stocks
- `T`: lookback days
- `F`: indicators

## Pipeline

`Indicator Mixing → Multi-scale Time Mixing → Stock Mixing → FC prediction`

## Generic Mixer

\[
y=x+W_2\sigma(W_1LN(x))
\]

## Time Mixer

- triangular trainable weights;
- multi-scale pooling/patching;
- setup paper: `T=16`, `k={1,2,4}`;
- `d=16+8+4=28`.

## Stock Mixer

\[
\hat H=H+M_2\sigma(M_1LN(H))
\]

`M1: N→m`, `M2: m→N`.

Paper grid-search `m`: NASDAQ 20, NYSE 25, S&P500 8.

## Loss

`MSE + 0.1 × pairwise ranking loss`

## Metrics

- IC: Pearson
- RIC: Spearman
- Precision@N
- Sharpe Ratio

## Ablation takeaway

Tác động: **Time > Stock > Indicator**.
