# Bài tập và câu hỏi ôn tập

## Phần A - Concept check

1. Tại sao graph-based ANNS phù hợp với high-dimensional vector search hơn exact search trong bối cảnh của paper?
2. `L` và `W` khác nhau về chức năng như thế nào?
3. Vì sao `W=1` thường ít I/O waste hơn `W>1`?
4. Hai đặc tính SSD nào được paper dùng làm cơ sở thiết kế?
5. “Ordered compute-I/O across search steps” nghĩa là gì?
6. Vì sao batch synchronous làm pipeline utilization giảm khi I/O latency biến động?
7. Tại sao paper gọi dependency giữa compute và I/O là pseudo-dependency?
8. `U` và `Q` trong PipeSearch khác nhau thế nào?
9. Tại sao PipeSearch có thể giảm latency nhưng giảm throughput?
10. Vì sao không nên dùng một `W` cố định cho toàn bộ search?

## Phần B - Giải thích cơ chế

11. Mô tả approach phase và converge phase bằng lời của bạn.
12. Tại sao entry-point optimization giúp giảm I/O waste?
13. Dynamic approach dùng tỷ lệ nào để quyết định tăng W?
14. Tại sao “issue 1 I/O rồi explore 1 record” tốt hơn refill toàn bộ pipeline khi nhiều completion đến cùng lúc?
15. Tại sao DEEP100M cho gap với in-memory Vamana nhỏ hơn SIFT100M theo phân tích của paper?

## Phần C - Đọc kết quả

16. Ở recall 0.9, latency PipeANN bằng bao nhiêu phần trăm DiskANN và Starling trên 100M-scale?
17. Hai con số latency và QPS của SIFT1B ở recall 0.9 là gì?
18. Tại sao PipeANN có thể thua Starling về throughput ở recall 0.99?
19. Khi giữ cùng `L`, accuracy PipeANN so với DiskANN thay đổi thế nào?
20. Vì sao throughput trade-off giảm khi recall target tăng?

## Phần D - Bài tập thiết kế

21. Nếu SSD mới có latency chỉ bằng 1/4 SSD trong paper nhưng compute giữ nguyên, bạn dự đoán `W` tối ưu có xu hướng tăng hay giảm? Giải thích.
22. Nếu mỗi node có rất ít neighbors, PipeSearch có còn dễ fill pipeline không?
23. Thiết kế một heuristic khác cho dynamic W không dùng ratio 0.9.
24. Đề xuất cách kết hợp record reordering của Starling với PipeANN.
25. Nếu áp dụng ý tưởng lên RDMA remote memory, thành phần nào giữ nguyên và thành phần nào phải thay thế?
