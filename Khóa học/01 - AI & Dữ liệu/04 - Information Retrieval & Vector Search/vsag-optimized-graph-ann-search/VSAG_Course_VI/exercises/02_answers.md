# Đáp án gợi ý - Câu hỏi ôn tập

1. ANNS chấp nhận approximate result để giảm chi phí search; exact NN cố tìm đúng nearest neighbors hoàn toàn.
2. Neighbor graph không đảm bảo vector nằm gần nhau về địa chỉ bộ nhớ; traversal nhảy theo edge nên locality kém.
3. Software prefetch do code phát lệnh chủ động; hardware prefetch do CPU suy đoán access pattern, đặc biệt hiệu quả với sequential pattern.
4. `ω, ν`: ELP; `efs`: QLP; `m_c, α_c`: ILP; `δ`: storage/resource tuning knob của PRS.
5. Query dễ không cần candidate budget lớn như query khó; adaptive budget tránh over-search.
6. Labeled union graph giữ edge metadata để runtime filter ra graph tương ứng nhiều cấu hình ILP.
7. Nén dữ liệu thành INT8/INT4 giúp SIMD xử lý nhiều phần tử hơn và giảm bandwidth/storage footprint.
8. Chỉ high-precision evaluate subset có khả năng ảnh hưởng top-k.
9. QPS cao với recall thấp có thể không đạt chất lượng; phải so tại cùng recall target hoặc cùng QPS.
10. Space-time/resource trade-off: dùng thêm memory redundancy để giảm stalls và tăng compute utilization.

Các câu suy luận nên dựa trên measurement: cache miss, CPU utilization, memory bandwidth, recall target và query distribution. Không có một parameter setting cố định đúng cho mọi môi trường.
