# PipeANN Cheat Sheet

## Bài toán

On-disk graph ANNS có latency cao vì best-first search không khai thác tốt SSD async/parallel I/O.

## Hai mismatch

1. **Ordered compute-I/O:** step sau đợi I/O + compute step trước.
2. **Synchronous batch:** phải đợi request chậm nhất trong batch.

Motivation measurements:

- `W=1`: compute = 9.5% I/O latency;
- `W=8`: compute = 45.6% I/O latency;
- pipeline utilization: 76% ở W=8, 58% ở W=32.

## PipeSearch

State:

```text
P = candidate pool
E = explored
U = read-complete but unexplored
Q = unfinished I/O
W = pipeline width
```

Loop:

```text
pipeline chưa đầy → issue read candidate tốt nhất
có record trong U → explore và update P
poll Q → completion chuyển sang U
```

Lợi ích:

- overlap compute-I/O;
- pipeline utilization tốt hơn.

Vấn đề:

- W lớn → speculative I/O → I/O waste → throughput giảm.

## PipeANN

### Approach phase

- candidate thay đổi nhanh;
- waste cao;
- in-memory entry point;
- bắt đầu `W=4`.

### Converge phase

- candidate ổn định;
- nhiều unverified top-k;
- waste giảm;
- tăng W động.

Dynamic rule trong evaluation:

- estimate recalled vectors đạt 5 → bắt đầu adapt;
- ratio finished I/O vẫn nằm trong candidate pool > 0.9 → tăng `W` thêm 1;
- max W = 32.

## Algorithm optimization

Nhiều I/O cùng complete:

```text
issue 1 → explore 1 → issue 1 → explore 1
```

thay vì refill toàn bộ pipeline ngay.

## Implementation

- io_uring;
- private ring per thread;
- `prep_read`;
- non-blocking `peek_batch_cqe`;
- SQ polling;
- overlap first I/O với PQ table init;
- AVX512 non-temporal load giảm cache pollution.

## Key results

- 100M @ recall 0.9: latency = 39.1% DiskANN, 48.5% Starling; 70.6% thấp hơn SPANN.
- 100M @ recall 0.9: throughput cao hơn các baseline 1.35× trung bình.
- SIFT1B @ recall 0.9: 0.719 ms, 19.4K QPS.
- SPACEV1B @ recall 0.9: 0.578 ms, 26.1K QPS.
- Billion-scale: 35.0% latency và 1.71× throughput so với DiskANN trong kết quả được paper nêu.
- So với in-memory Vamana @ recall 0.9: 2.02× SIFT100M, 1.14× DEEP100M.
- Memory: <40 GB cho billion-scale setup.

## Trade-offs

- vẫn có speculative I/O;
- throughput kém hơn ideal W=1 ở recall thấp;
- cùng `L`, recall hơi thấp hơn DiskANN;
- gap accuracy giảm khi `L` lớn / recall cao.

## One-sentence takeaway

**PipeANN giảm latency bằng cách biến graph search từ batch-synchronous best-first thành một pipeline async thích nghi theo tiến trình search, đồng thời kiểm soát I/O waste để giữ throughput.**
