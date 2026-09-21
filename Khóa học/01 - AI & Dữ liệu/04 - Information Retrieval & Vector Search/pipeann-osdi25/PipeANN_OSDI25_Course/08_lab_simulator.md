# Bài 08 - Lab: mô phỏng Best-First và PipeSearch

> Đây là **bài thực hành sư phạm**, không phải implementation của tác giả paper.

## Mục tiêu

Xây một simulator nhỏ để quan sát ba đại lượng:

- query latency;
- I/O pipeline utilization;
- số I/O speculative / wasted.

Không cần triển khai ANN thực sự. Ta chỉ mô phỏng scheduler.

## 1. Mô hình đơn giản

Giả sử mỗi candidate có:

- `rank_score`: candidate gần query đến mức nào;
- `io_latency`: thời gian đọc record, random 35-70 µs;
- `compute_latency`: thời gian explore, random 8-20 µs;
- `useful`: sau khi explore có tạo neighbor tốt hơn không.

Pipeline width `W` là số read tối đa đang in-flight.

## 2. Simulator A - Batch best-first

Pseudo-code:

```text
while not converged:
    choose W best candidates
    start W reads at the same time
    wait until ALL W reads finish
    explore all W records
    update candidate pool
```

Ghi lại:

- thời gian SSD có ít hơn `W` request active;
- thời gian CPU idle;
- thời gian query hoàn tất.

## 3. Simulator B - PipeSearch

```text
while not converged:
    while inflight < W and candidate available:
        issue one async read

    if a completed record exists:
        explore nearest completed record
        update candidate pool

    advance clock to next event
```

Ở đây event có thể là:

- I/O completion;
- compute completion.

## 4. Thêm speculative I/O

Để mô phỏng waste, cho mỗi candidate một xác suất bị “dominated” sau khi neighbor information mới đến.

Nếu read đã issue trước khi candidate bị loại khỏi top-L, đánh dấu read đó là speculative/wasted.

Thử tăng `W` từ:

```text
1, 2, 4, 8, 16, 32
```

Bạn nên quan sát pattern tương tự paper:

- latency giảm khi W tăng ở giai đoạn đầu;
- tới một điểm, lợi ích latency nhỏ dần;
- I/O waste tăng khi pipeline quá rộng;
- throughput giả lập suy giảm nếu giả sử SSD có giới hạn IOPS/bandwidth.

## 5. Dynamic pipeline lab

Chia query thành hai phase:

```text
phase 1: first 30% useful records
phase 2: remaining 70%
```

Đặt:

- approach: `W = 4`;
- converge: tăng `W` khi tỷ lệ completed read vẫn còn trong candidate pool > 0.9.

So sánh với fixed `W = 8` và fixed `W = 16`.

## 6. Metric cần in ra

```text
Scheduler         Latency(us)   Avg IO depth   IO/search   Waste%
BestFirst-W8      ...           ...            ...         ...
PipeSearch-W8     ...           ...            ...         ...
DynamicPipe       ...           ...            ...         ...
```

## 7. Câu hỏi phân tích

1. Khi variance của I/O latency tăng, batch best-first bị ảnh hưởng thế nào?
2. Khi compute latency tăng từ 10 µs lên 40 µs, PipeSearch có thêm cơ hội overlap hay không?
3. Nếu `W` rất lớn nhưng candidate quality chưa ổn định, waste thay đổi thế nào?
4. Dynamic pipeline có thắng fixed width ở mọi workload không?
5. Nếu storage latency chỉ 1 µs, bạn dự đoán lợi ích PipeSearch thay đổi thế nào?

## 8. Mở rộng nâng cao

Nếu muốn gần paper hơn:

- mô hình `P`, `E`, `U`, `Q` riêng;
- mỗi explored node sinh ra 16-128 neighbors;
- dùng distance score để prune top-`L`;
- mỗi I/O có full vector + neighbor list;
- đo recall bằng một graph synthetic có ground truth top-k.

Bài lab này giúp chuyển insight “algorithm-hardware alignment” thành một thí nghiệm có thể nhìn thấy trên timeline.
