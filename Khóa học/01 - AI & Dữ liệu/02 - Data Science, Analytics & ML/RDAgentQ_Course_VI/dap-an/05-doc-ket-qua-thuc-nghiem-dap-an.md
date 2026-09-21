# Đáp án gợi ý — Đọc kết quả thực nghiệm

## Phần A

R&D-Agent(Q) o3-mini trong Table 1: IC 0.0532, ARR 0.1421, IR 1.7382, MDD -0.0742.

So với R&D-Factor GPT-4o (IC 0.0489, ARR 0.1461, IR 1.6835, MDD -0.0750), joint system có IC/IR tốt hơn và MDD hơi thấp hơn về độ lớn, nhưng ARR hiển thị thấp hơn. Đây là ví dụ rõ rằng “joint” không có nghĩa mọi metric cùng tăng.

Không thể chỉ nhìn ARR vì risk-adjusted performance, drawdown, stability và transaction effects đều quan trọng.

## Phần B

Trong ablation, Bandit có kết quả mạnh trên nhiều metric và nhiều SOTA selections trong setting được báo cáo. `VL` là valid loops; `SL` là SOTA selections. Kết luận nên giới hạn ở experimental setup của paper, không suy rộng universal.

## Phần C

Table 10 đo chất lượng implementation trên từng task; Table 11 thêm yếu tố task selection/order dưới budget. Scheduler không thể cứu một implementation agent liên tục sinh code sai; ngược lại code generator mạnh nhưng schedule tệ có thể lãng phí budget vào task khó/ít giá trị.
