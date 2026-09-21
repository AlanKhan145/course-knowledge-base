# Bài tập 01 - Câu hỏi ôn tập

## Phần A - Khái niệm

1. Phân biệt exact nearest neighbor và ANNS.
2. Vì sao graph-based ANN thường gặp random memory access?
3. Giải thích sự khác nhau giữa software prefetch và hardware prefetch.
4. `ω`, `ν`, `efs`, `m_c`, `α_c`, `δ` lần lượt thuộc vai trò nào?
5. Vì sao query-level tuner có thể dùng query difficulty?
6. Edge label giúp tránh rebuild index như thế nào?
7. Scalar Quantization giảm `t_lp` bằng cách nào?
8. Selective re-rank giảm `n_hp` như thế nào?
9. Tại sao Recall và QPS phải đọc cùng nhau?
10. PRS là ví dụ của loại trade-off nào?

## Phần B - Suy luận

1. Một deployment mới có CPU nhanh hơn nhưng memory latency tương tự. `ω` có thể cần thay đổi theo hướng nào? Giải thích, không cần đưa số cụ thể.
2. Một workload có dimension thấp và CPU đang full utilization, memory còn dư. Có nên mặc định tăng `δ` lên 1 không? Nêu dữ liệu cần đo trước khi quyết định.
3. Nếu quantization làm QPS tăng mạnh nhưng recall giảm quá target SLA, bạn sẽ dùng cơ chế nào của VSAG để khôi phục accuracy?
4. Nếu cùng một index phục vụ cả query rất dễ và rất khó, fixed `efs` gặp nhược điểm gì?
5. Vì sao tuning ILP bằng brute force khó mở rộng theo số tham số?
