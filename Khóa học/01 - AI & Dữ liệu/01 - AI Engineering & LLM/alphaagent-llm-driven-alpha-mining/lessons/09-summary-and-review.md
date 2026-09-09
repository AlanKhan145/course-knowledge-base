# Bài 09 - Hàm ý, tổng kết và ôn tập

## 1. Hàm ý mà paper nhấn mạnh

Paper cho rằng alpha mining hiện đại cần **continuous exploration** thay vì chỉ fit pattern lịch sử hoặc tái sử dụng theory/factor đã quá phổ biến.

Trong thị trường hiệu quả hơn, competition và market adaptation làm statistical arbitrage dễ giảm return. Do đó framework tương lai cần cân bằng:

- **exploitation:** sử dụng pattern đã biết;
- **exploration:** tìm nguồn alpha mới chưa bị crowd.

## 2. Kết luận của AlphaAgent

AlphaAgent kết hợp:

- LLM-driven idea/factor/evaluation agents;
- originality enforcement;
- complexity control;
- hypothesis alignment;
- operator library + AST;
- backtest + feedback loop.

Mục tiêu không phải chỉ “sinh nhiều formula”, mà xây một quá trình discovery có constraint để giảm rủi ro alpha decay.

## 3. Sơ đồ ghi nhớ

```text
Market knowledge / insight
        ↓
    Idea Agent
        ↓ hypothesis h
   Factor Agent
        ↓ candidate factor f
 ┌──────────────────────────┐
 │ Regularization           │
 │ - originality            │
 │ - alignment              │
 │ - complexity             │
 └──────────────────────────┘
        ↓
     Eval Agent
        ↓
Backtest + risk + stability
        ↓
Feedback / reflection
        └──────────────→ next round
```

## 4. 15 câu hỏi ôn tập

1. Alpha factor là gì?
2. Alpha decay là gì?
3. Hai nguyên nhân alpha decay chính trong Introduction là gì?
4. Vì sao GP/RL có thể overfit historical performance?
5. Vì sao LLM không constraint có thể làm factor crowding nặng hơn?
6. Ba regularization mechanism của AlphaAgent là gì?
7. Operator library giải quyết vấn đề gì?
8. Leaf node và internal node trong AST đại diện cho gì?
9. Alpha zoo có vai trò gì?
10. Consistency score kiểm tra hai alignment nào?
11. Idea Agent có bốn thành phần hypothesis nào?
12. Factor Agent học từ failed case như thế nào?
13. Eval Agent đánh giá ba nhóm metric lớn nào?
14. Kết quả ablation nào cho thấy factor constraints hữu ích?
15. Base LLM mạnh hơn có làm framework design trở nên không cần thiết không? Hãy dùng Figure 7 và t-test để giải thích.

## 5. Đáp án ngắn

1. Biểu thức/đặc trưng định lượng tạo tín hiệu dự báo return.
2. Sự suy giảm predictive power/alpha theo thời gian.
3. Overfitting/p-hacking và factor crowding.
4. Vì tối ưu metric lịch sử mạnh nhưng thiếu economic rationale/regularization.
5. Vì dễ lặp lại factor đã biết như momentum/value/size/RSI.
6. Originality, hypothesis alignment, complexity control.
7. Chuẩn hóa primitive operation và làm cầu nối hypothesis → executable symbolic factor.
8. Leaf = raw feature; internal = operator.
9. Là tập factor tham chiếu để đo novelty/similarity.
10. hypothesis↔description và description↔expression.
11. Observation, Knowledge, Justification, Specification.
12. Lưu failure mode vào knowledge base để tránh lỗi tương tự ở vòng sau.
13. Predictive capability, return performance, risk control.
14. Hit ratio 0.29 so với 0.16 khi bỏ factor constraints.
15. Không; paper cho thấy base LLM ảnh hưởng chất lượng, nhưng AlphaAgent vẫn cải thiện so với RD-Agent trên từng model variant trong thí nghiệm được báo cáo.

## 6. Nguồn trong paper

- Section 4.6 - Implications, trang 9.
- Section 5 - Conclusion, trang 9.
