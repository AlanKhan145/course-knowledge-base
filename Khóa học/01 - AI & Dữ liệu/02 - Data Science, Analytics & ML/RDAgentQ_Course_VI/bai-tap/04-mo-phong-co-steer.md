# Bài tập 04 — Mô phỏng Co-STEER

## Mục tiêu

Tự cài một phiên bản tối giản của Algorithm 1, không cần LLM thật.

## Task graph

```text
A: load & validate OHLCV
B: implement 20d momentum      depends on A
C: implement turnover feature  depends on A
D: combine B + C               depends on B, C
E: write final output          depends on D
```

## Yêu cầu

1. Biểu diễn graph bằng adjacency list hoặc `networkx`.
2. Mỗi task có complexity score ban đầu = 1.
3. `implement(task)` được mô phỏng bằng hàm có thể thành công/thất bại.
4. Nếu fail, tăng complexity và schedule lại.
5. Lưu `(task, mock_code, feedback)` vào knowledge base.
6. Với task mới, retrieve task cũ theo một similarity function đơn giản.
7. In execution trace sau mỗi vòng.

## Câu hỏi phân tích

- Scheduler thay đổi order ra sao khi một task fail nhiều lần?
- Nếu chỉ random order, điều gì có thể tệ hơn?
- Knowledge retrieval giúp giảm số attempt trong trường hợp nào?
