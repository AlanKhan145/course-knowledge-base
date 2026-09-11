# Bài 06 - Thiết kế thí nghiệm và hệ metric

**Loại:** Lesson  
**Nguồn chính:** PDF trang 5

## 1. Hai track đánh giá

- **Track 1:** 633 real-world single-asset queries từ Stage 1.
- **Track 2:** 270 structured queries từ Stage 2 theo taxonomy 3 × 3.

Track 1 kiểm tra tính sát thực tế và baseline difficulty. Track 2 cho phép chẩn đoán có kiểm soát theo loại năng lực và độ khó.

## 2. Sáu LLM được đánh giá

Bài báo benchmark:

- claude-sonnet-4.5;
- deepseek-v3.2;
- gemini-3-flash-preview;
- gemini-3-pro-preview;
- gpt-5.2;
- grok-4.1-fast.

Tất cả dùng cùng prompt template, không model-specific tuning.

## 3. Generation protocol

Mỗi query chạy **5 independent generations**.

- Stage 1: 633 × 6 × 5 = **18.990** implementations ở temperature 0,7.
- Stage 2: 270 × 6 × 2 temperature × 5 = **16.200** implementations.
- Tổng: **35.190** implementations.

Stage 2 so sánh temperature 0 và 0,7 để kiểm tra mức độ nhạy theo decoding.

## 4. Backtest configuration

### 4.1 Tài sản

- Crypto: BTCUSDT, ETHUSDT.
- US equities: AAPL, GOOGL, MSFT, NVDA, TSLA.

### 4.2 Thời gian và ràng buộc

- 2021-01-01 đến 2026-01-01.
- Daily frequency.
- 300-day lookback.
- Long-only single-asset.
- Tín hiệu nhị phân invest/cash.
- One-way transaction cost: 10^-3.
- Không mô hình hóa slippage và liquidity constraint.

## 5. Sáu metric

| Metric | Vai trò trong bài báo | Hướng mong muốn |
|---|---|---|
| ARR | Annual Rate of Return | Cao hơn |
| SR | Sharpe Ratio | Cao hơn |
| MDD | Maximum Drawdown | Thấp hơn |
| CR | Calmar Ratio | Cao hơn |
| SoR | Sortino Ratio | Cao hơn |
| VOL | Volatility | Thấp hơn |

Bài báo dùng đồng thời nhiều metric vì model có thể đạt return cao bằng cách chấp nhận drawdown và volatility cao hơn.

## 6. Cách báo cáo thống kê

Metric được báo cáo dưới dạng **mean ± standard deviation** qua nhiều lần sinh. Kết quả còn được phân tầng theo:

- model tổng thể;
- asset;
- difficulty level ở Stage 2.

![Table 1 - Real-world queries](../assets/tables/table-01-real-world-results.png)

## 7. Lưu ý

Định nghĩa công thức chính thức của các metric được bài báo dẫn sang Appendix E, nhưng appendix không có trong PDF được cung cấp. Khóa học vì vậy giữ nguyên vai trò khái niệm của metric thay vì tự chèn công thức ngoài nguồn.
