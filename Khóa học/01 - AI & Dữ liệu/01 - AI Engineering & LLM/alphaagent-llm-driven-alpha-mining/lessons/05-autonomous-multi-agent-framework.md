# Bài 05 - Autonomous Multi-Agent Framework

## 1. Mục tiêu

Hiểu closed-loop ba agent của AlphaAgent và cách feedback được dùng để tiến hóa hypothesis/factor.

![Figure 1 - AlphaAgent workflow](../assets/figures/figure-01-alphaagent-workflow.png)

**Figure 1 (paper, trang 4)** cho thấy luồng tổng quát:

**external knowledge → Idea Agent → hypothesis → Factor Agent → factor proposals → Eval Agent → backtest/self-reflection/analysis → feedback → vòng tiếp theo**.

## 2. Idea Agent

Idea Agent tổng hợp market hypothesis từ:

- human knowledge;
- research report;
- market insight;
- kết quả/thất bại của các vòng trước.

Hypothesis có cấu trúc bốn phần:

1. **Observation** - pattern quan sát được hoặc kết quả thực nghiệm từ vòng trước.
2. **Knowledge** - financial theory, market intuition hoặc practitioner conjecture.
3. **Justification** - giải thích economic mechanism liên kết observation và hypothesis.
4. **Specification** - constraint triển khai, ví dụ window “10-day high/low”.

Ban đầu, user/domain expert cung cấp research direction hoặc market insight để hình thành \(h_0\). Các vòng sau dùng feedback để tiếp tục phát triển hypothesis.

## 3. Factor Agent

Factor Agent là cầu nối giữa hypothesis và factor expression. Nó:

- sinh nhiều implementation cho mỗi hypothesis;
- áp dụng complexity/alignment/originality filters;
- duy trì knowledge base các factor thành công và thất bại;
- phân loại failure mode, ví dụ hypothesis misalignment hoặc structural complexity violation;
- dùng kinh nghiệm cũ để tránh lặp lỗi ở vòng sau.

## 4. Eval Agent

Eval Agent đánh giá theo nhiều chiều:

- predictive capability;
- return performance;
- risk control;
- executability và numerical stability.

Ngoài backtest, agent còn duy trì evaluation history để phát hiện pattern thành công/thất bại và gửi lại insight cho Idea Agent.

## 5. Closed loop

Điểm quan trọng của AlphaAgent là **không kết thúc sau một lần generation**. Nó tạo vòng lặp:

1. đề xuất hypothesis;
2. sinh factor;
3. kiểm tra constraint;
4. backtest;
5. self-reflection/analysis;
6. feedback;
7. refine hypothesis và factor ở vòng tiếp theo.

Đây là cơ chế giúp framework liên tục exploration thay vì chỉ khai thác pattern lịch sử cố định.

## 6. Bài tập tự luyện

1. Failure “factor chạy lỗi numerical” thuộc agent nào phát hiện trước?
2. Failure “factor đúng code nhưng không đúng market hypothesis” liên quan agent/constraint nào?
3. Tại sao evaluation history có ích hơn chỉ giữ factor tốt nhất?

## 7. Nguồn trong paper

- Section 3.3 - Autonomous Multi-Agent Framework, trang 5-6.
- Figure 1, trang 4.
