# Bài 9 - Ablation Study, giới hạn và cách đọc claim của paper

## 1. Ablation quan trọng hơn bảng leaderboard ở điểm nào?

Leaderboard cho biết hệ thống đầy đủ hoạt động ra sao. Ablation hỏi: **thành phần nào tạo ra phần cải thiện đó?** Paper có hai ablation chính trong phần main text: self-knowledge distillation và multi-stage training.

## 2. Ablation self-knowledge distillation

![Ablation tables](../assets/07_ablation_results.png)

MIRACL nDCG@10:

| Mode | M3 có SKD | M3 không SKD |
|---|---:|---:|
| Dense | 69.2 | 68.7 |
| Sparse | 53.9 | 36.7 |
| Multi-vector | 70.5 | 69.3 |

Phân tích:

- dense chỉ giảm nhẹ khi bỏ SKD;
- multi-vector giảm vừa phải;
- sparse giảm **rất lớn**.

Điều này hỗ trợ trực tiếp lập luận rằng SKD giúp điều hòa xung đột giữa các retrieval objectives, đặc biệt với sparse branch.

## 3. Ablation multi-stage training

Dense MIRACL nDCG@10:

| Training recipe | Score |
|---|---:|
| Fine-tune trực tiếp | 60.5 |
| RetroMAE + Fine-tune | 66.1 |
| RetroMAE + Unsupervised pretrain + Fine-tune | **69.2** |

Hai bước cải thiện tách biệt:

1. dùng model đã qua RetroMAE tốt hơn fine-tune trực tiếp từ XLM-RoBERTa;
2. thêm pre-training trên massive unsupervised data cải thiện tiếp trước fine-tuning.

Paper dùng ablation này để cho thấy kết quả không chỉ đến từ fine-tuning dataset cuối cùng.

## 4. Ablation long-document data và MCLS

Trên MLDR:

- Dense đầy đủ: 52.5;
- Dense không long-doc fine-tuning: 41.2;
- Dense không long-doc + MCLS: 45.0.

Suy luận đúng theo số liệu:

- long-doc fine-tuning đóng góp lớn;
- MCLS phục hồi một phần khả năng khi không thể fine-tune long document;
- MCLS không thay thế hoàn toàn training dài.

## 5. Limitations do chính paper nêu

### 5.1 Generalizability ngoài benchmark

Tác giả thừa nhận dù kết quả mạnh trên MIRACL và MKQA, khả năng khái quát tới dataset/real-world scenario đa dạng hơn cần nghiên cứu thêm.

### 5.2 Document dài hơn 8192 tokens

M3 hỗ trợ tới 8192 tokens trong thiết kế được báo cáo. Paper không chứng minh hiệu quả cho document cực dài vượt giới hạn này và nhấn mạnh chi phí compute/efficiency.

### 5.3 Chênh lệch giữa ngôn ngữ

Paper tuyên bố hỗ trợ hơn 100 ngôn ngữ nhưng cũng thừa nhận phân bố training data không đồng đều và chưa phân tích đầy đủ robustness theo language family/linguistic characteristics.

## 6. Ethics consideration

Tác giả lưu ý open-source model chịu các tác động chung của việc phát hành công khai. Ngoài ra, dữ liệu ngôn ngữ phân bố không đều có thể dẫn tới chất lượng khác nhau giữa các ngôn ngữ và tạo vấn đề fairness.

## 7. Cách đọc claim “state of the art” một cách khoa học

Trong paper, claim SOTA gắn với **các benchmark và setup được báo cáo**. Khi sử dụng kết quả, nên giữ nguyên phạm vi:

- benchmark nào;
- split nào;
- metric nào;
- mode nào của M3;
- tokenizer/candidate strategy nào;
- max sequence length nào.

Không nên tự động mở rộng một kết quả MIRACL/MKQA thành kết luận “tốt nhất cho mọi hệ thống retrieval thực tế”. Chính phần limitations của paper cũng cảnh báo về khả năng khái quát.

## 8. Tự kiểm tra

1. Ablation nào là bằng chứng mạnh nhất cho vai trò của SKD?
2. Multi-stage training cho thấy pre-training đóng góp ra sao?
3. MCLS phục hồi bao nhiêu điểm so với Dense-w.o.long trên MLDR?
4. Ba limitation chính mà paper tự nêu là gì?
