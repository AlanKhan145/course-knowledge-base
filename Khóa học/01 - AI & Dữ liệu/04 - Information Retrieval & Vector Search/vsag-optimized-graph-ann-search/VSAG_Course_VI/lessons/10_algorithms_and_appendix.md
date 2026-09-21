# Bài 10 - Thuật toán nâng cao: Greedy Search, Index Construction, Proof và Pareto Tuning

## Mục tiêu

Ghép pseudocode và phần appendix thành một mental model đầy đủ về vòng đời index.

## 1. Algorithm 1 - Deterministic Access Greedy Search

Input chính:

- graph `G` và edge labels `L`;
- base dataset `D`;
- initial nodes `I`;
- query `x_q`;
- distance low/high precision `τ_l`, `τ_h`;
- `k, efs, m_s, α_s, ω, ν`.

Pipeline:

```text
initialize candidate heap C
initialize visited V
push initial nodes
while C has unexpanded node:
    take nearest unexpanded x_i
    collect valid neighbors N using ID/label/degree checks
    prefetch first ω neighbors
    for each N[k]:
        prefetch N[k+ω]
        load vector
        compute low-precision distance
        update C while keeping |C| ≤ efs
selective re-rank C
return top-k + high-precision distances
```

Điểm cần nhớ: graph traversal, prefetch, runtime ILP filtering và dual precision đều nằm trong cùng algorithm.

## 2. Algorithm 2 - Prune-based Labeling

Mục tiêu không chỉ prune edge, mà còn xác định **edge tồn tại từ pruning threshold nào**.

Với mỗi candidate neighbor theo thứ tự distance:

- kiểm tra các neighbor gần hơn;
- nếu pruning condition thỏa, candidate bị prune ở threshold hiện tại;
- nếu không, gán label hiện tại;
- tiếp tục với các `α_c` tăng dần.

Label cuối cùng encode một family của graph configurations.

## 3. Algorithm 3 - VSAG Index Construction

Mỗi point được insert qua ba bước:

1. Greedy search để tìm approximate neighbors;
2. prune-based labeling để tạo out-edges và labels;
3. thêm reverse edges, rồi re-label/re-prune phần neighbor list bị ảnh hưởng.

Khác với construction truyền thống ở chỗ VSAG giữ thông tin đủ để tái tạo nhiều lựa chọn pruning sau này.

## 4. Theorem 4.1 - degree hierarchy

Dưới các giả định trong theorem, nếu hai graph chỉ khác maximum degree và `a < b`, graph degree `a` là subgraph của graph degree `b`.

Trực giác: quá trình thêm edge giống nhau cho đến khi graph nhỏ dừng ở `a` edges; graph lớn tiếp tục thêm, không xóa những edge đầu.

## 5. Theorem 4.2 - pruning-rate inclusion

Dưới giả định ANN candidate sets trong construction không đổi, graph với pruning rates khác nhau có quan hệ inclusion. Điều này cho phép mô tả mỗi edge bằng preservation threshold `α_e`.

Các theorem không nói mọi graph tùy ý đều nested; chúng áp dụng dưới điều kiện construction mà paper nêu rõ. Khi triển khai hoặc generalize sang thuật toán khác, các điều kiện này phải được kiểm tra.

## 6. Pareto optimal configuration

Tuning index-level parameters là multi-objective optimization. Một cấu hình có thể:

- recall cao hơn nhưng latency lớn hơn;
- latency thấp hơn nhưng recall giảm;
- hoặc bị một cấu hình khác dominate ở cả hai mặt.

Pareto frontier giữ các cấu hình không bị dominate. Khi có SLA cụ thể, tuner chọn điểm phù hợp thay vì cố tìm một “best parameter” duy nhất cho mọi workload.

## 7. Tuning cost breakdown

Table 6 cho thấy VSAG tách offline và online cost. Ví dụ SIFT1M:

- build index: 5998.564 s;
- ILP tuning: 68.185 s;
- ELP tuning: 10.293 s;
- QLP training: 50.768 s;
- online QLP tuning cho 1000 queries: khoảng 0.001 s;
- search: 0.217 s.

Điều quan trọng là tuning được thiết kế để không làm online path trở nên đắt.

## 8. Khi đọc appendix

Nên dùng appendix để xác minh:

- pseudocode có đúng với intuition trong main text không;
- theorem có điều kiện gì;
- kết quả tuning phụ thuộc giả định nào;
- application claim dùng metric nào.

Không nên chỉ đọc kết luận theorem mà bỏ qua assumptions.

## Tự kiểm tra

1. Vì sao Algorithm 1 kiểm tra ID trước khi load vector data?
2. Reverse edge insertion có thể làm neighbor list của node cũ thay đổi thế nào?
3. Tại sao Pareto frontier phù hợp cho recall-latency trade-off?

**Đối chiếu nguồn:** Algorithm 1-3, Appendix A-E, Table 6, Theorem 4.1-4.2.
