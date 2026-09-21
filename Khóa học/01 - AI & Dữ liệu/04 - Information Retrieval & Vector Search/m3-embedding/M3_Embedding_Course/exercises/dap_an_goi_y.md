# Đáp án gợi ý - M3-Embedding

## Phần A

1. Multi-Linguality, Multi-Functionality, Multi-Granularity.
2. Hidden state của token `[CLS]`, sau normalization.
3. Linear projection `W_lex^T h` rồi ReLU; term lặp giữ max weight.
4. Late interaction: với mỗi query token lấy max similarity với passage tokens rồi average.
5. Query và passage khác ngôn ngữ nên rất ít term đồng xuất hiện; sparse dựa nhiều vào lexical overlap.
6. Unsupervised corpora, labeled fine-tuning data, synthetic data.
7. Thiếu supervision cho long-document retrieval.
8. Tránh model dựa quá nhiều vào các câu đầu thường mang tính tóm tắt.
9. Weighted ensemble của dense, sparse và multi-vector scores của chính model.
10. Sparse branch: 36.7 -> 53.9 trên MIRACL nDCG@10.
11. Padding lãng phí.
12. Chia large batch thành sub-batches, encode tuần tự với gradient checkpointing rồi gom embeddings.
13. Số lượng in-batch negatives hiệu dụng trong distributed training.
14. Mỗi 256 tokens trong thí nghiệm appendix.
15. Trung bình last hidden states của nhiều CLS tokens.

## Phần B

### Bài 1

`0.74 + 0.3*0.62 + 0.80 = 1.726`.

### Bài 2

Mức tăng tuyệt đối: `53.9 - 36.7 = 17.2` điểm nDCG@10. Đây là bằng chứng cơ chế: nó cho thấy sparse branch phụ thuộc mạnh vào SKD, trong khi score cuối của hệ thống không tự nói được thành phần nào tạo hiệu quả.

### Bài 3

`130 / 6 ≈ 21.67x`, phù hợp với mô tả “hơn 20 lần”.

### Bài 4

- Mất khi bỏ long-doc fine-tuning: `52.5 - 41.2 = 11.3`.
- MCLS phục hồi: `45.0 - 41.2 = 3.8`.
- MCLS vẫn cách full model: `52.5 - 45.0 = 7.5`.

## Phần C

### Cross-lingual QA

Dense và multi-vector nên là tín hiệu chính vì MKQA cho thấy hai mode này quanh 75 Recall@100 trong khi sparse chỉ 45.3. Sparse có thể vẫn được giữ như tín hiệu phụ nếu corpus/query thực tế có lexical overlap, nhưng paper cho thấy không nên phụ thuộc vào nó trong cross-lingual setting.

### Search tài liệu 7000-8000 tokens

Ít nhất cần nghĩ tới: long-document training data, max sequence length 8192, length-aware batching/split-batch, gradient checkpointing và evaluation trên long-doc benchmark. Hybrid weights cũng nên được validation vì MLDR thiên nhiều về sparse hơn MIRACL.

### Compute hạn chế

Dùng MCLS: chèn nhiều CLS, mỗi 256 tokens trong setup paper, rồi average các CLS hidden states. Ablation cho thấy MCLS cải thiện 41.2 -> 45.0 nhưng không đạt 52.5 của full long-doc fine-tuned dense model.

### Ablation SKD

Giữ nguyên encoder, data, batch, hard negatives và training stages; chỉ tắt distillation processing để ba retrieval method train độc lập. Đây chính là logic ablation của paper.

## Phần D

1. MIRACL All 71.5; MKQA All 75.5 Recall@100; MLDR All 65.0; NarrativeQA All 61.7.
2. MKQA: sparse rất yếu tương đối do cross-lingual lexical mismatch.
3. MLDR: sparse 62.2 vượt dense 52.5 khoảng 9.7 điểm trung bình.
4. 60.5 -> 66.1 -> 69.2, cho thấy RetroMAE và thêm unsupervised pretraining đều đóng góp.
5. M3 tăng rõ khi max sequence length tăng, mạnh nhất ở 8192 trong Figure 5.

## Phần E

Không có một đáp án duy nhất. Một đáp án tốt phải chứng minh từng quyết định bằng pattern trong paper: dense/sparse cho candidate, multi-vector cho rerank có kiểm soát chi phí, long-doc support tới 8192, cross-lingual ưu tiên semantic branches, và hybrid weights phải validation theo downstream scenario.
