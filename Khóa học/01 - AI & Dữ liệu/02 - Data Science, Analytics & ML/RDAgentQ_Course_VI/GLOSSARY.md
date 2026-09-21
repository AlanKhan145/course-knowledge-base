# Glossary

- **Factor**: đặc trưng/tín hiệu định lượng dùng để dự đoán return hoặc xếp hạng tài sản.
- **Factor library**: tập hợp các factor được giữ lại để dùng chung trong pipeline.
- **SOTA set**: tập nghiệm tốt nhất hiện tại theo tiêu chuẩn đánh giá của hệ thống.
- **IC (Information Coefficient)**: tương quan chéo giữa dự đoán và kết quả thực tế trên cùng một thời điểm.
- **ICIR**: trung bình IC chia độ lệch chuẩn IC theo thời gian; đo độ ổn định của IC.
- **Rank IC**: Spearman correlation giữa xếp hạng dự đoán và xếp hạng return thực tế.
- **ARR**: annualized return/annual return ratio, lợi nhuận quy đổi theo năm.
- **IR (SHR*)**: trong thiết lập paper, benchmark được đặt bằng risk-free rate nên IR số học trùng Sharpe Ratio.
- **MDD**: maximum drawdown, mức sụt giảm lớn nhất từ đỉnh xuống đáy.
- **CR / Calmar Ratio**: ARR chia trị tuyệt đối của MDD.
- **Co-STEER**: agent triển khai code kết hợp scheduling, reasoning, self-feedback và practical knowledge reuse.
- **Knowledge forest**: cấu trúc tri thức giúp Synthesis Unit tổ chức các hướng nghiên cứu/hypothesis theo lịch sử thử nghiệm.
- **Contextual bandit**: bài toán chọn hành động dựa trên trạng thái hiện tại và reward quan sát được.
- **Thompson Sampling**: chiến lược bandit lấy mẫu từ posterior để cân bằng exploration và exploitation.
- **Qlib**: nền tảng nghiên cứu đầu tư định lượng được paper dùng làm môi trường thực thi/backtest.
