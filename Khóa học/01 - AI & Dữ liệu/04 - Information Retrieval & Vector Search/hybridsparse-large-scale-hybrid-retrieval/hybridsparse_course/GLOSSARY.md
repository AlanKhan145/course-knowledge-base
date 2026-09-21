# Glossary - Thuật ngữ chính

| Thuật ngữ | Giải thích trong ngữ cảnh paper |
|---|---|
| Sparse retrieval | Retrieval dựa trên lexical/vocabulary-space signals và inverted index. |
| Dense retrieval | Retrieval dựa trên dense semantic embeddings và ANN search. |
| Hybrid retrieval | Kết hợp sparse + dense signals cho candidate generation/scoring. |
| Vocabulary mismatch | Query/document có ý gần nhau nhưng từ ngữ khác nhau, làm lexical match yếu. |
| Shared backbone | `F_global`, phần encoder dùng chung trước khi tách semantic/lexical branches. |
| Semantic encoder | Nhánh tạo dense embedding `q_sem` / `d_sem`. |
| Lexical encoder | Nhánh tạo vocabulary-sized sparse embedding `q_lex` / `d_lex`. |
| SPLADE-style | Thiết kế sparse neural lexical representation dùng vocabulary projection và sparse pooling. |
| FLOPS regularization | Regularization dùng để khuyến khích sparse activations. |
| Co-training | Tối ưu semantic và lexical branches trong cùng objective. |
| Hybrid score | `s_hy = w_sem s_sem + w_lex s_lex`. |
| Hybrid score regularization | Loss NLL tính trực tiếp từ hybrid score. |
| Consistency distillation | Dùng hybrid distribution làm teacher để align semantic/lexical distributions bằng KL divergence. |
| Virtual term | Đại diện dense/ANN signal dưới dạng term có thể tham gia unified index/posting-list retrieval. |
| OneSparse | Hệ thống nền mà paper dựa vào để hợp nhất sparse terms và dense virtual terms trong một inverted index. |
| SPTAG / SPANN | ANN indexing/search components được nhắc trong workflow và baseline setup của paper. |
| Posting list | Danh sách document IDs gắn với term/virtual term trong inverted index. |
| Multi-way merge | Bước hợp nhất nhiều posting lists để tạo/rank candidates. |
| MRR@10 | Mean Reciprocal Rank trong top 10. |
| Recall@K | Tỷ lệ ground-truth/relevant target xuất hiện trong Top-K. |
| R@50 | Production metric: clicked ad có nằm trong Top-50 không. |
| Rel@50 | Average relevance score của Top-50 trong production offline evaluation. |
| RPM | Revenue Per Mille; paper dùng làm online business metric trong A/B test. |
