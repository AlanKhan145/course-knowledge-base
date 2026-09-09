# Bài 01 - Alpha Mining và bài toán Alpha Decay

## 1. Mục tiêu học tập

Sau bài này, người học có thể giải thích alpha factor, alpha mining, alpha decay và hai nguyên nhân trọng tâm khiến alpha suy giảm theo thời gian.

## 2. Alpha factor là gì?

Trong đầu tư định lượng, **alpha factor** là một đặc trưng hoặc biểu thức định lượng nhằm tạo ra tín hiệu dự báo lợi suất tương lai của tài sản. **Alpha mining** là quá trình tìm kiếm những factor như vậy trong một không gian biểu thức rất lớn.

Điểm quan trọng của paper là: một factor có backtest tốt chưa đủ. Nó còn phải duy trì được sức dự báo khi thị trường thay đổi.

## 3. Alpha decay

**Alpha decay** là sự suy giảm sức dự báo hoặc khả năng tạo excess return của factor theo thời gian.

Paper nhấn mạnh hai nguồn chính:

### 3.1 Overfitting và p-hacking

Khi quá trình tìm factor tối ưu quá mạnh trên dữ liệu lịch sử, ta dễ tìm thấy các pattern ngẫu nhiên trông có vẻ có ý nghĩa trong backtest. Những factor này thường suy giảm nhanh khi đưa vào dữ liệu mới hoặc live market.

### 3.2 Factor crowding

Nếu quá nhiều nhà đầu tư cùng khai thác những tín hiệu giống nhau, lợi thế có thể bị “crowd”. Khi chiến lược phổ biến, hành vi giao dịch tập thể có thể làm giảm predictability của factor và thậm chí tạo ra reversal trong giai đoạn stress.

## 4. Vì sao GP/RL và LLM thuần túy chưa đủ?

Paper mô tả hai nhóm hạn chế:

- **Genetic Programming (GP) / Reinforcement Learning (RL):** dễ ưu tiên tối đa hóa metric lịch sử mà không giữ đủ financial/economic rationale; kết quả có thể quá phức tạp hoặc thiếu lý do kinh tế.
- **LLM-based alpha mining:** có lợi thế domain knowledge, nhưng nếu thiếu constraint thì dễ quay lại những factor phổ biến như momentum, value, size, RSI; điều này làm factor homogenization và crowding nặng hơn.

## 5. Ý tưởng trung tâm của AlphaAgent

AlphaAgent đưa regularization trực tiếp vào quá trình khám phá factor theo ba hướng:

1. **Originality enforcement** - kiểm tra factor mới có quá giống alpha đã tồn tại hay không.
2. **Hypothesis alignment** - kiểm tra factor có thực sự triển khai đúng market hypothesis hay không.
3. **Complexity control** - tránh biểu thức quá dài, quá nhiều tham số hoặc quá nhiều feature.

Ba cơ chế này hướng LLM đến cân bằng giữa **tính mới**, **lý do tài chính** và **khả năng thích nghi**.

## 6. Kết quả cấp cao của paper

Trên CSI 500 và S&P 500 trong giai đoạn kiểm thử 2021-2024, paper báo cáo AlphaAgent có hiệu năng và độ bền alpha tốt hơn các baseline được so sánh. Kết quả tổng thể được phân tích kỹ ở Bài 07 và Bài 08.

## 7. Câu hỏi tự luyện

1. Tại sao backtest tốt không đồng nghĩa factor sẽ bền trong live market?
2. Overfitting và factor crowding khác nhau ở cơ chế nào?
3. Vì sao một LLM giàu kiến thức tài chính vẫn có thể sinh ra factor dễ decay?
4. Ba regularization mechanism của AlphaAgent nhắm tới ba rủi ro nào?

## 8. Nguồn trong paper

- Abstract và Section 1 - Introduction, trang 1-2.
- Section 2 - Related Work, trang 2-3.
