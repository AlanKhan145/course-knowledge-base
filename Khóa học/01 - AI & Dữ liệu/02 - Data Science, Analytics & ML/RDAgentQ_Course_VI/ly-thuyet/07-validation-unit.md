# Bài 07 — Validation Unit: kiểm tra trước khi tin kết quả

## Mục tiêu

Hiểu cách Validation Unit ngăn factor trùng lặp và chuẩn hóa việc đánh giá candidate.

## 1. Deduplication factor

Giả sử:

- \(F_{SOTA}\): factor library hiện tại;
- \(F_{new}\): factor mới.

Paper tính tương quan IC theo từng time slice giữa mọi cặp SOTA–new, sau đó lấy trung bình theo thời gian. Với mỗi factor mới \(n\), lấy mức tương quan tối đa với bất kỳ factor SOTA nào:

\[
IC^{(n)}_{max}=\max_m \mathbb{E}_t[IC^{(t)}_{m,n}].
\]

Nếu \(IC^{(n)}_{max}\ge 0.99\), factor mới được xem là redundant và loại bỏ.

## 2. Vì sao dedup trước backtest?

Nếu không dedup, agent có thể “khám phá” lại cùng một signal dưới tên khác. Khi đó:

- library phình to;
- chi phí model tăng;
- khó phân biệt novelty thật với biến thể gần như đồng nhất;
- analysis dễ đánh giá quá cao số lượng khám phá.

## 3. Đánh giá factor candidate

Factor còn lại được ghép với SOTA model (hoặc baseline model nếu chưa có) rồi chạy Qlib backtest. Nhờ cố định model trong vòng factor, ta đo tác động của factor rõ hơn.

## 4. Đánh giá model candidate

Quy trình đối xứng: model mới được ghép với SOTA factor set rồi chạy cùng pipeline backtest. Nhờ vậy joint system có hai nhánh nhưng cùng một chuẩn đánh giá.

## 5. Validation prompt?

Appendix E.4 nói Validation Unit **không dùng prompt**. Đây là một lựa chọn thiết kế đáng chú ý: những khâu có thể kiểm tra bằng chương trình thì nên dùng rule/code thay vì LLM.

## 6. Health checks trong Discussion

Appendix F nhấn mạnh cần kiểm tra factor để tránh signal nhiễu/sparse/leakage và factor trivial trước khi đưa vào vòng tối ưu. Đây là lớp bảo vệ quan trọng khi hệ có khả năng tự sinh hàng loạt candidate.

## 7. Mẫu validator tối thiểu

```text
validate_factor(candidate):
    assert schema_ok(candidate)
    assert no_future_leakage(candidate)
    assert not_all_nan(candidate)
    assert variance(candidate) > threshold
    assert max_similarity_with_sota(candidate) < 0.99
    return run_backtest(candidate)
```

Trong production, nên tách rõ **correctness validation** và **performance validation**; code chạy đúng chưa có nghĩa signal có giá trị.
