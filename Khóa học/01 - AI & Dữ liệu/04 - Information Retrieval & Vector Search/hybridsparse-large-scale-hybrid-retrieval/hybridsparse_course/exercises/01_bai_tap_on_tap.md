# Bài tập ôn tập HybridSparse

## Phần A - Khái niệm

1. So sánh sparse retrieval và dense retrieval theo ba tiêu chí: tín hiệu chính, điểm mạnh, hạn chế.
2. Giải thích vì sao chạy hai retriever độc lập rồi fuse có thể tăng latency.
3. “Structural unification does not guarantee behavioral alignment” có nghĩa gì trong ngữ cảnh OneSparse/HybridSparse?
4. Vì sao candidate overlap quan trọng với intersection-based retrieval?

## Phần B - Kiến trúc

5. Vẽ lại bằng ASCII pipeline từ tokenized query đến `q_sem` và `q_lex`.
6. `H_glo` có vai trò gì?
7. Nhánh lexical sử dụng kiểu pooling nào theo Eq. 4?
8. FLOPS regularization được đặt vào objective để giải quyết vấn đề gì?

## Phần C - Loss

9. Viết lại `L_co` và giải thích từng thành phần.
10. Viết lại hybrid score `s_hy`.
11. Vì sao `L_reg` khác với việc chỉ cộng score lúc inference?
12. Trong `L_dis`, teacher distribution là gì?
13. Nếu `lambda_dis = 0`, thành phần alignment nào bị loại bỏ?

## Phần D - Serving

14. Dense embedding được biến thành tín hiệu có thể dùng trong unified inverted index bằng khái niệm nào?
15. Nêu ba bước query serving trong paper.
16. Tại sao Top-N virtual terms được dùng thay vì gửi toàn bộ candidates/clusters?
17. Multi-way merge đứng ở vị trí nào trong pipeline?

## Phần E - Đọc số liệu

18. HybridSparse đạt MRR@10 bao nhiêu trên MSMARCO?
19. HybridSparse đạt R@100 bao nhiêu trên MS Web Search?
20. Trên production offline test, HybridSparse đạt Rel@50 và R@50 bao nhiêu so với OneSparse_BM25 baseline?
21. Khi bỏ two-stage fine-tuning, R@50 còn bao nhiêu?
22. Khi bỏ distillation, R@50 thay đổi như thế nào so với full HybridSparse?
23. Giải thích chính xác ý nghĩa của +1.30% RPM trong Table 4.

## Phần F - Phân tích hệ thống

24. Hãy mô tả một failure mode nếu sparse branch retrieve candidate A nhưng dense branch không đưa A vào vùng candidate tương ứng trong intersection pipeline.
25. Shared backbone giải quyết được phần nào của misalignment, và vì sao paper vẫn cần `L_reg`/`L_dis`?
26. Nếu mục tiêu production ưu tiên relevance hơn recall, paper gợi ý tham số/khía cạnh nào có thể cần tune?
27. Liệt kê ít nhất bốn thông tin cần thêm nếu muốn reproduce hoàn toàn hệ thống.
