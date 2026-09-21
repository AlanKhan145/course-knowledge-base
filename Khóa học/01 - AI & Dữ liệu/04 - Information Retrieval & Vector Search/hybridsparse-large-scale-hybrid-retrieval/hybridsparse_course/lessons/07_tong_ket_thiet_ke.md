# Bài 7 - Tổng kết thiết kế, đóng góp và giới hạn từ paper

## 1. Chuỗi logic của HybridSparse

Toàn bộ paper có thể đọc như một chuỗi nhân quả:

```text
Sparse và dense bổ sung cho nhau
        ↓
Chỉ hợp nhất index chưa đủ vì score/candidate có thể lệch
        ↓
Shared backbone tạo feature space chung
        ↓
Co-training tối ưu hai branch cùng lúc
        ↓
Hybrid regularization tối ưu trực tiếp hybrid score
        ↓
Consistency distillation căn chỉnh distributions
        ↓
Unified OneSparse serving dùng lexical + virtual terms
        ↓
Cải thiện public benchmarks + production metrics + RPM
```

## 2. Đóng góp kỹ thuật mà paper nhấn mạnh

### 2.1 Unified modeling

Shared backbone + two lightweight branches cho sparse/dense giúp giảm redundant computation và tạo nền tảng biểu diễn chung.

### 2.2 Joint optimization

Không huấn luyện hai retriever hoàn toàn độc lập. Semantic và lexical branches được co-train.

### 2.3 Hybrid-guided alignment

Hai thành phần quan trọng:

- hybrid score regularization;
- consistency distillation.

Mục tiêu là làm sparse/dense score distributions tương thích hơn, phù hợp với intersection-based candidate selection.

### 2.4 Production-compatible serving

Paper không thay thế OneSparse serving bằng pipeline phức tạp mới. Thay vào đó, nó dùng unified index, ANN virtual terms, posting lists và multi-way merge đã phù hợp triển khai quy mô lớn.

## 3. Những điều paper cung cấp đủ rõ

Bạn có thể rút ra tương đối rõ:

- kiến trúc high-level;
- các loss/objective chính;
- ba bước online retrieval;
- public datasets và metrics;
- production dataset scale;
- một số hyper/implementation details quan trọng như embedding dimension, tokenizer vocabulary, software/hardware;
- kết quả benchmark, ablation và A/B test.

## 4. Những điều paper không mô tả đủ để tái lập 1:1

Do paper chỉ 5 trang, nhiều chi tiết không được nêu đầy đủ, ví dụ:

- giá trị cụ thể của toàn bộ `lambda` trong objective;
- chi tiết optimizer, learning rate schedule, batch size;
- số epoch/steps cho từng stage;
- chính xác cách chọn `M` lexical terms và `N` virtual terms;
- chi tiết partitioning, network topology và latency numbers;
- toàn bộ recipe tạo virtual-term clusters/index;
- full production feature pipeline.

Vì vậy khóa học này không suy đoán các giá trị đó. Nếu muốn xây reproduction project, cần thêm source/code hoặc tài liệu liên quan như OneSparse, SPANN/SPTAG, SPLADE và SimANS.

## 5. Checklist đọc một paper retrieval theo cách tương tự

Khi đọc paper khác, có thể dùng khung sau:

1. **Representation:** query/document được biểu diễn thế nào?
2. **Scoring:** similarity/score tính ra sao?
3. **Training:** positive/negative, loss, regularizer, distillation?
4. **Index:** inverted index, ANN hay hybrid?
5. **Candidate generation:** union, intersection hay rerank?
6. **Serving:** có thêm online stage không? Có partition không?
7. **Evaluation:** dataset, scale, metric, baseline?
8. **Ablation:** thành phần nào thực sự đóng góp?
9. **Production:** offline gain có chuyển thành online business metric không?
10. **Reproducibility:** paper còn thiếu những tham số nào?

## 6. Tóm tắt một câu

**HybridSparse là framework hybrid retrieval hợp nhất sparse và dense không chỉ ở index/serving mà còn ở feature space và training objective, nhằm tăng alignment và candidate overlap trong first-stage retrieval quy mô lớn.**
