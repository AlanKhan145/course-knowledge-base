# Bài tập 02 - Lab tái hiện tư duy benchmark

Mục tiêu của lab không phải bắt buộc tái tạo chính xác toàn bộ con số trong paper, mà là tái tạo **phương pháp kiểm chứng**.

## Lab A - Recall/QPS curve

1. Chọn một dataset ANN public có ground truth.
2. Chạy một graph baseline với nhiều `efs`.
3. Ghi `(Recall@10, QPS)` cho từng cấu hình.
4. Vẽ curve.
5. Không kết luận hệ thống A nhanh hơn B nếu recall points khác nhau quá nhiều.

## Lab B - Prefetch ablation

Tạo các phiên bản:

- baseline;
- + quantization;
- + software prefetch;
- + stride;
- + tuned stride/depth;
- + deterministic filtering.

Đo:

- QPS;
- L3 cache load/miss;
- CPU utilization;
- memory bandwidth nếu công cụ cho phép.

## Lab C - Query-adaptive efs

1. Thu log search state.
2. Tạo feature đơn giản như số node scanned và top candidate distances.
3. Phân loại query thành easy/hard.
4. So fixed `efs` với adaptive `efs` ở cùng recall target.

## Lab D - ILP design thought experiment

Với grid:

```text
m_c ∈ {8, 16, 24, 32}
α_c ∈ {1.0, 1.2, 1.4, 1.6}
```

Tính số index cần build nếu brute-force. Sau đó mô tả metadata tối thiểu cần lưu để một labeled graph mô phỏng nhiều cấu hình.

## Báo cáo

Báo cáo nên có:

- environment;
- dataset statistics;
- parameters;
- recall/QPS plot;
- ablation table;
- hardware-counter evidence;
- limitations và khác biệt so với paper.
