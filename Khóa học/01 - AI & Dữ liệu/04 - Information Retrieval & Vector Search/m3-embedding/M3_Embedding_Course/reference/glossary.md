# Glossary - thuật ngữ chính

| Thuật ngữ | Nghĩa trong khóa học |
|---|---|
| Embedding | Biểu diễn vector/latent representation của văn bản |
| Dense retrieval | Retrieval dùng vector tổng hợp, ở M3 là normalized `[CLS]` |
| Sparse / lexical retrieval | Retrieval dùng learned term weights và lexical overlap |
| Multi-vector retrieval | Dùng nhiều token embeddings và late interaction |
| Late interaction | Tính tương tác token-level sau khi query/document đã được encode |
| Relevance score | Điểm đo mức liên quan giữa query và passage/document |
| Hybrid retrieval | Kết hợp nhiều retrieval signals để lấy/rerank candidate |
| InfoNCE | Contrastive objective tăng score positive so với negatives |
| Hard negative | Negative khó, giống/relevant bề ngoài nhưng không phải positive |
| In-batch negatives | Các sample khác trong cùng batch được dùng như negatives |
| Self-knowledge distillation | Dùng integrated score của chính các branch làm teacher |
| Multi-stage training | RetroMAE/adaptation -> unsupervised pretrain -> fine-tune |
| Gradient checkpointing | Đổi thêm compute lấy giảm activation memory |
| Split-batch | Chia logical batch lớn thành sub-batches để encode |
| MCLS | Multiple CLS; nhiều CLS trên long text rồi average representation |
| MIRACL | Benchmark multilingual retrieval, paper dùng nDCG@10 |
| MKQA | Benchmark cross-lingual setting, paper dùng Recall@100 |
| MLDR | Multilingual Long-Doc Retrieval benchmark trong paper |
| nDCG@10 | Ranking metric tập trung top 10 và vị trí kết quả |
| Recall@100 | Tỷ lệ relevant answer/passages xuất hiện trong top 100 |
