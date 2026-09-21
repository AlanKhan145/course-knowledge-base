# Bài tập 04 - Mini Reimplementation Task

Thiết kế skeleton PyTorch, chưa cần train thật.

## Yêu cầu

Tạo các module:

```text
IndicatorMixing
MaskedTimeMixing
MultiScaleEncoder
StockMixing
StockMixer
PairwiseRankingLoss
```

## Unit tests tối thiểu

1. Input `[N,T,F]` cho ra prediction `[N]` hoặc `[N,1]`.
2. Indicator Mixing không đổi `T` và `F` tổng thể.
3. Với `T=16`, scales `[1,2,4]` tạo lengths `[16,8,4]`.
4. Effective time weights tuân thủ triangular mask.
5. StockMixing trả lại đúng `[N,d]`.
6. Pairwise loss bằng 0 cho một cặp có ordering đúng và dương cho ordering ngược trong ví dụ đơn giản.

## Báo cáo ngắn

Viết `implementation_notes.md` trả lời:

- axis nào Linear đang tác động;
- bạn dùng transpose ở đâu;
- orientation của triangular mask được xác nhận bằng test nào;
- phần nào của code dựa trực tiếp vào paper, phần nào là engineering decision của bạn.
