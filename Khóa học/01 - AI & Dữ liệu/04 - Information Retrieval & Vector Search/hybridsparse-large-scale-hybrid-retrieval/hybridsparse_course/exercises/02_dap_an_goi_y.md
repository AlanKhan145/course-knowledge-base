# Đáp án gợi ý

## Phần A

1. Sparse dùng lexical/vocabulary terms, hiệu quả và dễ diễn giải nhưng chịu vocabulary mismatch; dense dùng low-dimensional semantic embeddings, mạnh semantic matching nhưng có thể làm mất salient lexical signals.
2. Vì phải chạy hai search/index pipelines riêng rồi mới fuse/rerank, tạo redundant computation và thêm bước xử lý.
3. Dù sparse/dense cùng nằm trong unified index, hai scorer vẫn có thể ưu tiên candidate khác nhau; cấu trúc chung chưa bảo đảm distributions/candidate sets tương thích.
4. Intersection giữ phần giao. Candidate tốt chỉ xuất hiện ở một branch có thể bị loại khỏi candidate set.

## Phần B

5. `query -> F_global -> {F_sem -> dense pooler -> q_sem, F_lex -> vocabulary projection/sparse pooling -> q_lex}`.
6. `H_glo` là shared hidden state cho cả semantic và lexical branch.
7. SPLADE-style projection + ReLU + max aggregation + log transform.
8. Khuyến khích sparse representation đủ thưa để giữ hiệu quả sparse retrieval.

## Phần C

9. `L_co = λ_sem L_sem + λ_lex L_lex + L_flops`.
10. `s_hy = w_sem s_sem + w_lex s_lex`.
11. `L_reg` đưa hybrid score vào training objective, nên hybrid behavior được tối ưu trực tiếp thay vì chỉ ghép ở inference.
12. `P_hy`.
13. Consistency distillation bị loại bỏ.

## Phần D

14. Virtual terms.
15. Sinh `q_sem/q_lex`; ANN từ `q_sem` để lấy Top-N virtual terms; fetch posting lists của lexical + virtual terms, intersection/multi-way merge và rank bằng hybrid score.
16. Paper nêu mục tiêu giảm bandwidth; đồng thời sparse side cũng giới hạn Top-M terms để giảm latency.
17. Sau khi lấy posting lists, trước khi trả Top-K docs.

## Phần E

18. `0.3877`.
19. `0.8524`.
20. `Rel@50 = +38.33%`, `R@50 = +26.05%`.
21. `+21.76%`.
22. Tăng nhẹ từ `+26.05%` lên `+26.47%`, trong khi Rel@50 giảm xuống `+37.12%`.
23. Đây là additional RPM gain của HybridSparse so với **phiên bản trước nó**, theo chú thích Table 4; không nên tự diễn giải là trực tiếp so với cùng baseline ban đầu nếu không có số liệu đó.

## Phần F

24. Candidate A có thể bị loại khỏi intersection và không còn cơ hội được downstream ranker phục hồi.
25. Shared backbone tạo feature space chung và parameter sharing, nhưng không trực tiếp ép ranking distributions đồng thuận; `L_reg` và `L_dis` làm alignment ở level score/distribution.
26. Paper nói distillation weight có thể được tune để cân bằng recall và relevance theo production requirements.
27. Ví dụ: learning rate, optimizer, batch size, số step/epoch, giá trị lambda, M/N, chi tiết virtual-term clustering/index, latency/partition configuration.
