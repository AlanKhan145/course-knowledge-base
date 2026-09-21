# Exercise 02 — Algorithm Reasoning

## Bài 1 — Color replacement

`ALG` có 5 điểm màu `{A,B,C,D,E}`. `OPT` có 5 điểm màu `{A,B,C,D,F}`. Phần tử xa nhất trong `ALG` có màu `E` và không thuộc `OPT`.

1. Màu nào chắc chắn có thể cung cấp một `p*∈OPT\ALG` để thay?
2. Vì sao replacement này giữ colorful?

## Bài 2 — k'-colorful

Với `k=10`, `k'=2`, output hiện có counts:

```text
A:2, B:2, C:2, D:2, E:2
```

Một candidate màu `A` gần query hơn item `A` xa nhất. Hãy mô tả thao tác đúng của DiversePriorityQueue.

## Bài 3 — Pruning diversity

Một candidate edge `p→w` đã bị geometry block bởi các vertex màu A, A, B, C theo thứ tự.

- Với `m=1`, khi nào `w` có thể bị prune?
- Với `m=3`, khi nào?
- Nếu `col(w)=A`, điều gì thay đổi?

## Bài 4 — Degree bound

Giải thích bằng lời vì sao degree bound có cấu trúc:

\[
\text{representatives per local region}
\times
\text{regions per scale}
\times
\text{number of scales}.
\]

Sau đó ánh xạ từng phần sang `k`, `(8α)^d`, `logΔ`.

## Bài 5 — Experiment interpretation

Giả sử tại recall=90%:

```text
A: post-processing = 80 ms
B: standard graph + diverse search = 110 ms
C: diverse graph + diverse search = 28 ms
```

Hãy giải thích vì sao kết quả B không bác bỏ ý tưởng diverse search, mà lại cho thấy index construction là một phần thiết yếu.

## Bài 6 — RAG design

Một hệ thống có 5 triệu chunks từ 200 nghìn documents. Bạn muốn top-20 context chunks nhưng không quá 2 chunks/document.

1. Chọn `k`, `k'`, `color`.
2. Ground truth benchmark nên được xây thế nào?
3. Ngoài recall và mean latency, đề xuất thêm 3 metric hệ thống.
