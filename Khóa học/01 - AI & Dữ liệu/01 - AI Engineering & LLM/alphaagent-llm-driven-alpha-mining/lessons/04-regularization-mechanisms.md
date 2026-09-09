# Bài 04 - Ba cơ chế Regularization của AlphaAgent

## 1. Mục tiêu

Nắm được complexity control, originality enforcement và hypothesis-factor alignment.

## 2. Complexity control

Paper đưa ra một regularization dạng:

\[
\mathcal{R}_g(f,h)=\alpha_1\,SL(f)+\alpha_2\,PC(f)+\alpha_3\,ER(f,h)
\]

Trong đó:

- \(SL(f)\): symbolic length của factor;
- \(PC(f)\): số free parameter, ví dụ window length;
- \(ER(f,h)\): phần kết hợp novelty và hypothesis alignment.

Mục tiêu là tránh factor “over-engineered”: quá dài, quá nhiều hyperparameter, khó diễn giải và dễ overfit.

## 3. Originality bằng AST similarity

Với hai factor \(f_i, f_j\), AlphaAgent parse chúng thành AST và tìm **largest common subtree**. Paper định nghĩa similarity dựa trên kích thước common subtree lớn nhất có cấu trúc isomorphic.

Sau đó factor mới được so với một **alpha zoo** \(\mathcal{Z}=\{\phi_1,\ldots,\phi_N\}\):

\[
S(f)=\max_{\phi\in\mathcal{Z}} s(f,\phi)
\]

Nếu factor mới quá giống một factor nổi tiếng/đã tồn tại, novelty thấp và nguy cơ crowding cao hơn.

![Figure 2 - AST originality](../assets/figures/figure-02-ast-similarity.png)

## 4. Hypothesis alignment

Paper tách alignment thành hai lớp:

1. **Hypothesis ↔ Description:** description có triển khai hợp lý market hypothesis không?
2. **Description ↔ Expression:** expression có thực sự phản ánh description không?

Consistency score:

\[
C(h,d,f)=\alpha c_1(h,d)+(1-\alpha)c_2(d,f)
\]

Paper đặt \(\alpha=0.5\).

Ví dụ paper đưa ra: description tuyên bố factor phản ánh liquidity dynamics, nhưng expression không có volume, bid-ask spread hay market depth → \(c_2\) thấp.

## 5. ER term

Paper tiếp tục định nghĩa:

\[
ER(f,h)=\beta_1S(f)+\beta_2C(h,d,f)+\beta_3\log(1+|F_f|)
\]

với \(F_f\) là tập raw feature được factor sử dụng. Paper mô tả lower ER score là tốt hơn; các term nhằm phạt similarity, đảm bảo alignment và hạn chế dùng quá nhiều feature.

> Ghi chú học thuật: khóa học giữ đúng cách paper trình bày biểu thức và diễn giải, không tự sửa quy ước dấu/hệ số của tác giả.

## 6. Ba constraint phối hợp như thế nào?

Một factor tốt theo logic AlphaAgent phải đồng thời:

- không sao chép factor cũ;
- có financial rationale rõ;
- expression triển khai đúng rationale;
- không quá phức tạp;
- vẫn có predictive effectiveness khi backtest.

## 7. Bài tập tự luyện

Cho ba candidate:

- A: IC tốt nhưng AST gần như giống RSI.
- B: mới lạ nhưng expression không liên quan hypothesis.
- C: đúng hypothesis nhưng dùng 20 feature và nhiều window parameter.

Hãy chỉ ra constraint chính nên loại từng candidate.

## 8. Nguồn trong paper

- Section 3.2.2, trang 4-5.
- Equations (4)-(8).
- Figure 2.
