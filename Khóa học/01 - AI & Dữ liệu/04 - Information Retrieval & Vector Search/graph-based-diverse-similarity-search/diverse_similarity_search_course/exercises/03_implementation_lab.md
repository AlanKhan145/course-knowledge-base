# Exercise 03 — Implementation Lab

## Mục tiêu

Xây một prototype nhỏ mô phỏng tư tưởng paper, không cần triển khai DiskANN production.

## Phần A — Dataset synthetic

Tạo `N=50,000` vector 32 chiều và 200 colors. Làm phân bố skew:

- 80% điểm thuộc 5 colors lớn;
- 20% còn lại chia cho 195 colors.

Sinh 200 query vectors.

## Phần B — Exact diverse ground truth

Với mỗi query:

1. tính exact distance tới mọi vector;
2. sort tăng dần;
3. greedily nhận candidate nếu color count < `k'`;
4. dừng khi đủ `k`.

Thử:

```text
k = 20
k' ∈ {1, 2, 5, 20}
```

## Phần C — Baseline reranking

Giả lập ANN bằng cách chỉ xem top-`r` exact nearest candidates.

Sweep:

```text
r ∈ {20, 40, 80, 160, 320, 640}
```

Sau đó post-process theo `k'`.

Đo:

- diverse Recall@20;
- số query không đủ 20 kết quả sau rerank;
- số candidate phải scan.

## Phần D — Diverse queue

Cài `DiversePriorityQueue(L,k')` theo Algorithm 6.

Unit tests:

- per-color count không vượt `k'`;
- tổng size không vượt `L`;
- candidate tốt hơn cùng color thay candidate tệ hơn;
- `k'=L` gần standard top-L queue.

## Phần E — Graph toy

Có thể dùng `hnswlib`/FAISS graph-like approximation hoặc tự tạo k-NN graph nhỏ. Mục tiêu học là so:

1. standard candidate queue;
2. diverse candidate queue;
3. graph được “enrich” bằng edge tới nhiều color local hơn.

Không cần tuyên bố tái hiện chính xác DiskANN.

## Phần F — Báo cáo

Tạo bảng:

| Method | k' | L/r | Recall@20 | Avg scanned | Mean latency | Violations |
|---|---:|---:|---:|---:|---:|---:|

Vẽ curve Recall vs Latency và trả lời:

1. Color skew ảnh hưởng reranking thế nào?
2. Khi `k'` tăng, bài toán tiến gần standard ANN ra sao?
3. Candidate pool `r` cần tăng mạnh nhất ở setting nào?
4. Graph có edge diversity giúp giảm exploration thế nào?

## Bonus — RAG simulation

Đổi `color` thành `document_id`, mỗi document có nhiều chunk. Đo thêm:

- số unique documents trong context;
- fraction context bị một document chiếm;
- relevance score trung bình;
- diverse recall.
