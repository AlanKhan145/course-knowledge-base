# Bài 03 - Operator Library, AST và Factor Parsing

## 1. Mục tiêu

Hiểu vì sao AlphaAgent không để LLM sinh code tự do, mà dùng operator library và abstract syntax tree (AST) như một intermediate representation.

## 2. Vấn đề của code-based factor generation

Paper chỉ ra LLM-generated code có thể gặp:

- không tương thích format dữ liệu;
- khác biệt package/version;
- khó giữ semantic consistency khi code dài;
- mâu thuẫn giữa “chạy được” và “đúng ý nghĩa hypothesis”.

## 3. Operator Library

AlphaAgent định nghĩa thư viện operator \(\mathcal{O}\) chứa các phép toán toán học/tài chính chuẩn hóa, ví dụ:

- rolling minimum / maximum;
- moving average;
- conditional checks;
- các operator time-series khác.

Thư viện này là lớp trung gian giữa **market insight cấp cao** và **factor implementation cấp thấp**.

## 4. Parsing hypothesis thành factor

Paper mô tả hàm:

\[
\mathcal{G}:(\mathcal{H},X)\rightarrow\mathcal{F}
\]

Quy trình ba bước:

1. **Nhận diện key phrase** trong hypothesis, ví dụ “triangle pattern”, “breakout”.
2. **Ánh xạ** key phrase sang operator tương ứng và gán parameter như window/threshold.
3. **Lắp ráp AST** mô tả dependency và execution flow.

Trong AST:

- leaf node: raw feature như `$high`, `$low`, `$volume`;
- internal node: operator như `TS_MIN(.)`, `SMA(.)`;
- edge: luồng dữ liệu giữa operation.

## 5. AST không chỉ để chạy factor

AST còn là nền tảng để:

- đo symbolic length;
- đếm free parameters;
- tìm common subtree;
- so sánh factor mới với alpha zoo;
- enforce novelty và complexity.

![Figure 2 - AST similarity](../assets/figures/figure-02-ast-similarity.png)

**Figure 2 (paper, trang 5)** minh họa factor mới \(f\) và các factor trong alpha zoo dưới dạng expression/AST. Originality được đánh giá thông qua common subtree lớn nhất.

## 6. Bài tập tự luyện

Hãy tưởng tượng hypothesis: “volume giảm trong khi intraday range co hẹp trong 5 ngày”.

1. Các raw feature nào có thể xuất hiện ở leaf node?
2. Cần operator rolling/moving nào?
3. Một AST quá sâu có thể làm tăng rủi ro gì theo thiết kế của paper?

## 7. Nguồn trong paper

- Section 3.2 - Factor Generation Modeling.
- Section 3.2.1 - Factor Parsing with Abstract Syntax Trees, trang 3-4.
- Figure 2, trang 5.
