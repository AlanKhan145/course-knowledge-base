# Gợi ý và đáp án

## 1-5

1. Exact nearest neighbor trong không gian nhiều chiều tốn kém; ANNS chấp nhận xấp xỉ để giảm lượng vector cần truy cập. Graph-based index cho phép navigation qua các neighbor thay vì quét toàn bộ dữ liệu.
2. `L` là độ dài candidate pool; `W` là số I/O có thể phát song song/in-flight.
3. `W=1` chỉ read sau khi có neighbor information mới nhất, nên ít speculative decision hơn.
4. I/O latency dài; SSD hỗ trợ asynchronous parallel I/O.
5. Batch/step tiếp theo chỉ bắt đầu sau khi I/O và compute của step trước hoàn tất.

## 6-10

6. Batch phải đợi request chậm nhất; các request khác đã xong tạo slot trống nhưng chưa được refill.
7. Candidate pool trong RAM đã đủ để chọn một candidate chưa read, không nhất thiết đợi mọi I/O/compute trước hoàn tất.
8. `Q` là read chưa hoàn tất; `U` là record đã đọc xong nhưng chưa explore.
9. Pipelining phát nhiều speculative I/O hơn, tăng I/O/search và dễ saturate SSD ở workload throughput cao.
10. I/O waste thay đổi theo search phase; đầu search cần W nhỏ, converge phase chịu được W lớn hơn.

## 11-15

11. Approach: đang tiến về vùng target, candidate thay đổi nhanh. Converge: đã ở gần target, top candidates ổn định và dần verify top-k.
12. Nó rút ngắn đoạn approach phải làm bằng disk search, nơi speculative I/O kém hiệu quả.
13. Tỷ lệ completed I/O mà vector fetched vẫn nằm trong candidate pool; >0.9 thì tăng W trong evaluation.
14. Mỗi lần explore bổ sung neighbor information trước khi quyết định I/O tiếp theo, giảm stale decisions.
15. Vamana trên DEEP phải tính distance float tốn hơn, còn PipeANN dùng PQ distance cho neighbor navigation, nên phần compute che I/O tốt hơn và gap nhỏ hơn.

## 16-20

16. 39.1% DiskANN và 48.5% Starling.
17. 0.719 ms và 19.4K QPS.
18. Starling reorders records để giảm I/O/search; ở recall cao disk bandwidth dễ saturate và speculative I/O của PipeANN ảnh hưởng throughput.
19. PipeANN có drop nhỏ: ít nhất 95.9% recall của DiskANN, và ít nhất 98.8% khi recall ≥0.9 trong thí nghiệm cùng L.
20. Converge phase dài hơn; I/O speculative đầu search chiếm tỷ lệ nhỏ hơn và nhiều read cuối cùng cũng được best-first cần tới.

## 21-25 - Gợi ý

21. Có xu hướng giảm W nếu I/O không còn là bottleneck lớn; cần benchmark vì compute/I/O balance thay đổi.
22. Khó hơn. Candidate pool có thể không đủ candidate chưa read để duy trì pipeline rộng.
23. Ví dụ controller dựa trên moving average `useful_completion_ratio`, I/O depth và derivative của candidate best-distance; tăng W khi utility ổn định, giảm W khi waste tăng.
24. Dùng Starling-style locality optimization để giảm I/O/search, nhưng giữ PipeANN scheduler để overlap compute-I/O; cần đánh giá build cost và layout compatibility.
25. Giữ candidate pool, two-phase logic và dynamic pipeline; thay io_uring disk read bằng RDMA read/CXL prefetch và điều chỉnh W theo concurrency/latency của fabric.
