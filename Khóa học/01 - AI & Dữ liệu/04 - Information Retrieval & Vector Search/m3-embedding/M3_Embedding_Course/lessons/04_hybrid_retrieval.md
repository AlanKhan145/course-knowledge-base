# Bài 4 - Hybrid Retrieval: phối hợp Dense, Sparse và Multi-Vector

## 1. Từ ba score đến một pipeline

M3 không chỉ cung cấp ba scoring function độc lập. Paper còn mô tả cách phối hợp chúng trong một quy trình hybrid.

Sau khi có:

- `s_dense` - dense similarity;
- `s_lex` - sparse/lexical score;
- `s_mul` - multi-vector late-interaction score;

điểm rerank tổng hợp là:

\[
s_{rank}=w_1s_{dense}+w_2s_{lex}+w_3s_{mul}
\]

Các hệ số không cố định cho mọi downstream scenario.

## 2. Candidate retrieval trước, rerank sau

Paper mô tả quy trình thực tế:

1. Dense và sparse có thể chạy riêng để lấy candidate.
2. Multi-vector có thể **không dùng ở bước candidate retrieval** do chi phí cao.
3. Hợp nhất hoặc chọn candidate set.
4. Tính integrated score để rerank.

### Cấu hình trong MIRACL

- Dense: search top-1000 với Faiss.
- Sparse: search top-1000 với Lucene.
- Multi-vector: rerank top-200 candidate lấy từ dense.
- Dense + Sparse: rerank union của top-1000 dense và top-1000 sparse với `w1=1`, `w2=0.3`, `w3=0`.
- All: rerank top-200 từ dense với `w1=1`, `w2=0.3`, `w3=1`.

Đây là ví dụ rõ về việc **representation càng chi tiết thì càng nên đặt ở giai đoạn candidate nhỏ hơn** để kiểm soát chi phí.

## 3. Trọng số phụ thuộc loại dữ liệu

Với long-document retrieval trên MLDR, paper đổi trọng số:

- Dense + Sparse: `w1=0.2`, `w2=0.8`.
- All: `w1=0.15`, `w2=0.5`, `w3=0.35`.

Sự thay đổi này phù hợp với kết quả thực nghiệm: sparse retrieval đặc biệt mạnh trên long-document benchmark MLDR. Vì vậy, hybrid score không nên được hiểu là một công thức “mặc định toàn cầu”; nó là cơ chế cho phép downstream task phân bổ trọng số theo thế mạnh thực nghiệm.

## 4. Complementarity giữa ba tín hiệu

Dense, sparse và multi-vector nhìn relevance theo ba góc:

```text
Dense       : semantic summary toàn query/document
Sparse      : token/term importance + lexical overlap
Multi-vector: token-level semantic interaction
```

Nếu một query có từ khóa định danh quan trọng, sparse có thể bổ sung cho dense. Nếu relevance nằm ở tương tác cục bộ giữa các phần query và passage, multi-vector bổ sung fine-grained signal. Nếu query và document khác ngôn ngữ, sparse có thể yếu vì thiếu token overlap, còn dense/multi-vector vẫn dựa vào không gian semantic đã học.

## 5. Đọc kết quả hybrid trên MIRACL

![Bảng MIRACL](../assets/04_miracl_results_table.png)

Trên MIRACL dev, paper báo cáo nDCG@10 trung bình:

| Chế độ M3 | Avg nDCG@10 |
|---|---:|
| Dense | 69.2 |
| Sparse | 53.9 |
| Multi-vec | 70.5 |
| Dense + Sparse | 70.4 |
| All | **71.5** |

Kết quả quan trọng không phải chỉ là “All cao nhất”, mà là **các tín hiệu có tính bổ sung**. Multi-vector cải thiện dense; dense+sparse cũng cải thiện dense; kết hợp cả ba đạt kết quả tốt hơn từng nhánh riêng trong bảng này.

## 6. Một ví dụ tính score

Giả sử một candidate có:

- `s_dense = 0.78`
- `s_lex = 0.55`
- `s_mul = 0.82`

Nếu dùng cấu hình MIRACL `w=(1, 0.3, 1)`:

\[
s_{rank}=0.78+0.3\times0.55+0.82=1.765
\]

Giá trị tuyệt đối của score không quan trọng bằng việc nó được dùng nhất quán để sắp xếp candidate trong cùng pipeline.

## 7. Câu hỏi thiết kế cần luôn đặt ra

Khi xây hybrid retrieval, hãy phân biệt ba quyết định:

1. **Ai lấy candidate?** dense, sparse hay cả hai?
2. **Ai rerank?** có dùng multi-vector không?
3. **Tổ hợp score như thế nào?** trọng số phải dựa vào downstream setting và validation.

Paper minh họa cả ba quyết định này thay vì chỉ giới thiệu một embedding vector.

## 8. Tự kiểm tra

1. Vì sao multi-vector không nhất thiết được dùng ở candidate retrieval?
2. Dense+Sparse trong MIRACL lấy candidate theo cách nào?
3. Vì sao trọng số của MLDR thiên nhiều về sparse hơn MIRACL?
4. Hybrid retrieval thể hiện “multi-functionality” ở cấp hệ thống như thế nào?
