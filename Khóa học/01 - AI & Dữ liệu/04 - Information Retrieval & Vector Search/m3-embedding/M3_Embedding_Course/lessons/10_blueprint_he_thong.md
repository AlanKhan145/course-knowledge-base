# Bài 10 - Capstone: biến M3-Embedding thành blueprint một hệ thống retrieval

> Bài này không thêm kết quả thực nghiệm ngoài paper. Mục tiêu là sắp xếp lại các thành phần của paper thành một blueprint kiến trúc để bạn kiểm tra xem mình đã hiểu toàn hệ thống chưa.

## 1. Pipeline offline: chuẩn bị corpus

### Bước A - Encode dense

Với mỗi document/passage, lưu vector `[CLS]` đã normalize.

### Bước B - Encode sparse

Với mỗi token, lưu learned lexical weight sau projection + ReLU, giữ max nếu term lặp.

### Bước C - Encode multi-vector khi cần

Lưu projected token embeddings cho late interaction. Do chi phí lớn hơn, có thể chỉ chuẩn bị cho corpus hoặc candidate set tùy kiến trúc triển khai.

## 2. Pipeline online: từ query đến kết quả

```text
Query
  │
  ├─ Dense encoding ───> Dense candidate search ─────┐
  │                                                   │
  ├─ Sparse weights ──> Sparse candidate search ─────┼─> Candidate merge
  │                                                   │
  └─ Multi-vector ────────────────────────────────────┘      │
                                                             ↓
                                                 fine-grained reranking
                                                             │
                                                             ↓
                                                  weighted hybrid score
                                                             │
                                                             ↓
                                                        final ranking
```

Trong main experiment MIRACL, dense và sparse lấy top-1000; multi-vector rerank top-200 từ dense. Đây là một concrete implementation pattern trong paper.

## 3. Quyết định theo loại bài toán

### Multilingual cùng ngôn ngữ

Paper cho thấy dense mạnh, multi-vector và hybrid thường cải thiện thêm. Sparse vẫn cung cấp lexical signal bổ sung.

### Cross-lingual

Ưu tiên dense/multi-vector semantic matching. Sparse bị hạn chế do query/document ít term trùng giữa ngôn ngữ.

### Long-document

Không nên mặc định dense là đủ. Trên MLDR và NarrativeQA, sparse và hybrid có đóng góp rất lớn. Cần hỗ trợ sequence dài trong cả training data lẫn batching.

## 4. Blueprint training

```text
Stage 0: XLM-RoBERTa + RetroMAE adaptation, mở max position 8192
        ↓
Stage 1: massive unsupervised multilingual pre-training
         - dense contrastive learning
         - cross-lingual pairs
         - length-aware batching
        ↓
Stage 2: fine-tuning
         - labeled data + MultiLongDoc synthetic data
         - 7 hard negatives/query
         - warm-up three retrieval heads
         - self-knowledge distillation
         - split-batch + gradient checkpointing
         - cross-GPU embedding broadcast
```

## 5. Checklist tái hiện ý tưởng, không nhất thiết tái hiện quy mô

### Representation

- [ ] `[CLS]` dense embedding được normalize.
- [ ] lexical head học scalar term weights.
- [ ] multi-vector head tạo token embeddings và late interaction.

### Training

- [ ] contrastive objective có positive + negatives.
- [ ] length buckets giảm padding.
- [ ] long-sequence batch có memory strategy.
- [ ] integrated score làm teacher nếu triển khai SKD.

### Data

- [ ] có dữ liệu đa ngôn ngữ đủ rộng.
- [ ] có parallel data nếu cần cross-lingual alignment.
- [ ] có supervision cho long documents.
- [ ] tránh shortcut chỉ đọc phần đầu document.

### Evaluation

- [ ] tách multilingual, cross-lingual và long-doc benchmark.
- [ ] đánh giá riêng Dense/Sparse/Multi-vector/Hybrid.
- [ ] có ablation cho SKD, pretraining và long-doc data.

## 6. Pseudocode scoring

```python
# Conceptual pseudocode derived from the paper
Hq = encoder(query)
Hp = encoder(passage)

q_dense = normalize(Hq[0])
p_dense = normalize(Hp[0])
s_dense = dot(q_dense, p_dense)

q_weights = relu(project_lex(Hq))
p_weights = relu(project_lex(Hp))
s_lex = weighted_overlap(q_weights, p_weights)

Eq = normalize(project_multi(Hq))
Ep = normalize(project_multi(Hp))
s_mul = mean(max_sim(Eq, Ep))

s_rank = w1*s_dense + w2*s_lex + w3*s_mul
```

Pseudocode chỉ thể hiện logic thuật toán trong paper, không đại diện cho API cụ thể của một thư viện.

## 7. Bài capstone

Hãy viết một thiết kế 1-2 trang cho một trong ba hệ thống:

- thư viện nội dung đa ngôn ngữ;
- search qua tài liệu kỹ thuật dài;
- QA cross-lingual trên corpus tiếng Anh.

Thiết kế phải nêu:

1. candidate retrieval dùng branch nào;
2. có rerank bằng multi-vector không;
3. cách chọn/training hybrid weights;
4. document length mục tiêu;
5. dữ liệu training cần có;
6. metric và benchmark tương ứng;
7. limitation nào của M3 ảnh hưởng trực tiếp.

Nếu trả lời được bảy mục này bằng lập luận từ paper, bạn đã hiểu kiến trúc ở mức hệ thống thay vì chỉ nhớ bảng điểm.
