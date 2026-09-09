# Bài 06 - Thiết kế thực nghiệm và Backtest

## 1. Mục tiêu

Đọc đúng các metric, dataset split, base model, transaction cost và baseline của paper.

## 2. Metrics

Paper dùng:

- **IC (Information Coefficient):** correlation giữa predicted score và actual return theo ngày.
- **RankIC:** correlation sau khi rank.
- **ICIR:** mức ổn định của IC, so mean IC với standard deviation.
- **IR (Information Ratio):** risk-adjusted excess return so với benchmark.
- **AR (Annualized Return):** annualized excess return.
- **MDD (Maximum Drawdown):** mức giảm lớn nhất từ peak đến trough.

Một factor chống alpha decay tốt không chỉ cần return cao mà còn cần IC/RankIC/ICIR ổn định theo thời gian.

## 3. Dataset và split

![Table 1 - Dataset splits](../assets/tables/table-01-dataset-splits.png)

| Asset | Split | Period | Trading days |
|---|---|---:|---:|
| S&P 500 | Train | 2015-01 → 2019-12 | 1258 |
| S&P 500 | Validation | 2020-01 → 2020-12 | 253 |
| S&P 500 | Test | 2021-01 → 2025-01 | 1004 |
| CSI 500 | Train | 2015-01 → 2019-12 | 1219 |
| CSI 500 | Validation | 2020-01 → 2020-12 | 243 |
| CSI 500 | Test | 2021-01 → 2025-01 | 968 |

Raw feature để xây factor chỉ gồm **OHLCV**: open, high, low, close, volume.

- CSI 500: dữ liệu từ Baostock.
- S&P 500: dữ liệu từ Yahoo Finance.

## 4. Model và factor pipeline

- AlphaAgent dùng **GPT-3.5-turbo** làm foundational LLM trong thiết lập chính.
- RD-Agent dùng GPT-4-turbo theo thiết lập tác giả baseline.
- Bốn base alpha: intraday return, daily return, 20-day relative volume, normalized daily range.
- Base alpha + alpha mới được đưa vào **LightGBM**.
- Feature và return được cross-sectional Z-score normalization.
- LightGBM có maximum depth 4 và dự báo next-day return.

## 5. Portfolio/backtest rule

Paper dùng top-k dropout:

- chọn 50 cổ phiếu top-ranked theo predicted return;
- loại 5 cổ phiếu lowest-ranked theo rule mô tả trong paper;
- có transaction fee.

Transaction cost:

- CSI 500: buy 0.0005, sell 0.0015.
- S&P 500: chỉ sell fee 0.0005.

## 6. Baselines

Paper so AlphaAgent với:

- LSTM;
- Transformer;
- LightGBM;
- StockMixer;
- TRA;
- AlphaForge;
- RD-Agent;
- OpenAI-o1;
- DeepSeek-R1.

## 7. Bài tập tự luyện

1. Vì sao paper cần cả IC/ICIR lẫn AR/IR/MDD?
2. Vì sao transaction cost quan trọng khi đánh giá alpha thực tế?
3. Test period kéo dài nhiều năm có vai trò gì khi chủ đề chính là alpha decay?

## 8. Nguồn trong paper

- Section 4.1 - Experiment Settings, trang 6.
- Table 1, trang 6.
