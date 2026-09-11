# Bài 02 - Từ benchmark kiến thức tài chính đến benchmark giao dịch

**Loại:** Lesson  
**Nguồn chính:** PDF trang 2-3

## 1. Nhóm benchmark kiến thức tài chính

Bài báo nhắc tới nhiều hệ benchmark tập trung vào QA, reasoning số liệu hoặc đánh giá năng lực tài chính tổng quát, gồm FinQA, TAT-QA, ConvFinQA, BloombergGPT, FinGPT, PIXIU, FinBen, FinTextQA, CFinBench, Fin-Eva và UCFE.

Ưu điểm của nhóm này là dễ chuẩn hóa và tái lập. Hạn chế theo bài báo là chúng chủ yếu đo hiểu biết hoặc reasoning trên snapshot lịch sử, chưa trực tiếp kiểm tra quá trình tạo chiến lược giao dịch có thể thực thi.

## 2. Nhóm benchmark trading và agent

Bài báo đặt AlphaForgeBench trong bối cảnh các hướng như FINCON, AlphaFin, INVESTORBENCH, DeepFund, FutureX, Alpha Arena, RockAlpha và LiveTradeBench.

Các hướng này đưa LLM gần hơn với thị trường động, price prediction, alpha generation hoặc live trading.

## 3. Vấn đề tái lập của live evaluation

Bài báo nhấn mạnh một "reproducibility crisis": kết quả live trading phụ thuộc thời điểm chạy, còn LLM lại có stochasticity. Vì vậy một single-run live evaluation có thể khó tái lập độc lập và khó dùng làm thước đo duy nhất để so sánh mô hình.

## 4. Khoảng trống mà AlphaForgeBench nhắm tới

Theo bài báo, benchmark cần một pipeline đủ toàn diện để đánh giá đồng thời:

- hiểu yêu cầu chiến lược;
- tạo alpha/factor;
- sinh code thực thi;
- backtest thống nhất;
- đo hiệu năng và độ ổn định qua nhiều lần sinh.

AlphaForgeBench chọn cách đánh giá **logic chiến lược white-box** thay cho chỉ quan sát hành động black-box.

## 5. Câu hỏi ôn tập

1. Benchmark kiến thức tĩnh và benchmark live trading mạnh/yếu ở điểm nào?
2. Tại sao live trading có giá trị sinh thái cao nhưng khó tái lập?
3. Vì sao code-generation có thể là điểm trung gian giữa reasoning tài chính và execution thực tế?
