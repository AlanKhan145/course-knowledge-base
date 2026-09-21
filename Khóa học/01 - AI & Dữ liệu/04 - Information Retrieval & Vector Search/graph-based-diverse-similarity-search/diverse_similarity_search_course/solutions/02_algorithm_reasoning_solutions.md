# Solution 02 — Algorithm Reasoning

## Bài 1

Màu `F`. Sau khi bỏ phần tử màu `E`, `ALG` còn `{A,B,C,D}`; `F` chưa xuất hiện nên thêm một điểm màu `F` vẫn colorful.

## Bài 2

Queue có thể insert candidate A mới, sau đó xóa item A có distance lớn nhất để count(A) trở lại 2. Nếu queue tổng vượt `L`, tiếp tục xóa item xa nhất toàn queue.

## Bài 3

- `m=1`: ngay blocker color đầu tiên đủ điều kiện geometry có thể làm đạt `m` và prune.
- `m=3`: cần blocker từ 3 color khác nhau, ví dụ A, B, C.
- Nếu `col(w)=A`, một blocker màu A có thể prune `w` theo điều kiện same-color ngay cả khi chưa đủ `m` color khác nhau.

## Bài 4

- `k`: tối đa `k` representative màu khác nhau trong một local region.
- `(8α)^d`: bound số small balls/local regions cần cover một ring.
- `logΔ`: số ring/scale từ `Dmax` xuống `Dmin`.

## Bài 5

Diverse search cần adjacency list cho phép tiếp cận color đa dạng. Nếu graph standard đã prune các edge đó, query-time diversity constraint chỉ làm traversal bị hạn chế hơn. Variant C sửa cả connectivity lúc build nên diverse search có đường đi phù hợp.

## Bài 6

1. `k=20`, `k'=2`, `color=document_id`.
2. Với mỗi query, sort toàn bộ/sample exact candidates theo distance và greedily nhận chunk nếu document count chưa vượt 2 cho tới đủ 20.
3. Ví dụ: p95/p99 latency, QPS, index memory, build time, diversity violations, context unique-doc count.
