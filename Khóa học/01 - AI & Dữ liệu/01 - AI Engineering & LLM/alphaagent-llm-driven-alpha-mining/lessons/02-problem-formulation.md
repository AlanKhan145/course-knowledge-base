# Bài 02 - Problem Formulation và Regularized Objective

## 1. Mục tiêu

Hiểu cách paper mô hình hóa alpha mining như một bài toán tối ưu, sau đó mở rộng objective để LLM tạo factor dưới regularization.

## 2. Không gian dữ liệu

Paper xét:

- Tập cổ phiếu: \(S = \{s_1,\ldots,s_N\}\)
- Cửa sổ thời gian: \(T = \{t_1,\ldots,t_T\}\)
- Feature tensor: \(X \in \mathbb{R}^{N\times T\times D}\)
- \(D\): số chiều raw features.

Một alpha factor \(f\) ánh xạ dữ liệu tại thời điểm \(t\) thành tín hiệu dự báo return kế tiếp:

\[
f(X_t) \rightarrow r_{t+1}
\]

## 3. Objective cơ bản

Paper viết bài toán dưới dạng:

\[
f^* = \arg\max_{f\in\mathcal{F}} \mathcal{L}(f(X), y) - \lambda\,\mathcal{R}(f)
\]

Trong đó:

- \(\mathcal{F}\): không gian biểu thức factor có thể tạo.
- \(y\): future return ground truth.
- \(\mathcal{L}\): metric phản ánh predictive effectiveness.
- \(\mathcal{R}\): regularization.
- \(\lambda\): hệ số cân bằng performance và regularization.

## 4. Đưa market hypothesis vào objective

AlphaAgent không chỉ cho LLM “tìm công thức tốt”, mà dùng **market hypothesis** \(h\in\mathcal{H}\) để điều hướng factor construction.

Objective được viết lại:

\[
f^* = \arg\max_{f\in\mathcal{F}} \mathcal{L}(f(X), y) - \lambda\,\mathcal{R}_g(f,h)
\]

Regularization \(\mathcal{R}_g(f,h)\) bao gồm ba thành phần mà paper quan tâm:

1. độ phức tạp của expression;
2. alignment với hypothesis;
3. novelty so với factor đã tồn tại.

## 5. Ý nghĩa thiết kế

Thay vì chỉ hỏi “factor nào cho metric lịch sử cao nhất?”, AlphaAgent đặt thêm câu hỏi:

- Factor có đơn giản và dễ diễn giải không?
- Factor có đúng với market insight ban đầu không?
- Factor có đang lặp lại alpha phổ biến không?

Do objective không lồi, paper mô tả việc tối ưu xen kẽ giữa predictive objective và regularization để tìm một nghiệm cục bộ cân bằng giữa hiệu năng và constraint.

## 6. Bài tập tự luyện

1. Viết lại objective nếu muốn tăng penalty cho complexity.
2. Nếu một factor có IC cao nhưng giống Alpha101 gần như hoàn toàn, phần nào của regularization nên chặn nó?
3. Nếu factor description nói về liquidity nhưng expression không dùng volume/spread/depth, loại constraint nào bị vi phạm?

## 7. Nguồn trong paper

- Section 3.1 - Problem Formulation, trang 3.
- Equations (1) và (2).
