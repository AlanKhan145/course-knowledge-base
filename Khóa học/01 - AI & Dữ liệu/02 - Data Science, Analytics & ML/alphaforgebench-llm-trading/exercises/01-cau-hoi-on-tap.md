# Bài tập 01 - Câu hỏi ôn tập

**Loại:** Exercise  
**Mục tiêu:** Kiểm tra hiểu biết khái niệm từ toàn khóa học.

## Phần A - Câu hỏi ngắn

1. Ba biểu hiện bất ổn của LLM trong direct-trading benchmark là gì?
2. Vì sao ánh xạ continuous market signal sang discrete action dễ làm action flipping?
3. AlphaForgeBench đổi vai trò của LLM từ gì sang gì?
4. Stage 1 có bao nhiêu factor-strategy entries sau lọc? Bao nhiêu single-asset entries được dùng đánh giá?
5. Stage 2 tạo bao nhiêu structured queries?
6. Ba level trong taxonomy 3 × 3 là gì?
7. Vì sao Level 1 không đại diện đầy đủ năng lực strategic reasoning?
8. Sáu metric được dùng trong benchmark là gì?
9. Vì sao cần đọc ARR cùng MDD/VOL thay vì chỉ nhìn ARR?
10. Benchmark loại bỏ slippage và liquidity modeling vì lý do gì theo thiết kế thí nghiệm?

## Phần B - Đúng/Sai và giải thích

1. Temperature = 0 luôn đảm bảo direct-trading LLM tạo cùng action sequence.
2. Model có ARR cao nhất cũng có thể có drawdown cao nhất.
3. Level 3 dễ hơn Level 1 vì mô tả đầu vào ngắn hơn.
4. 35.190 là tổng số query trong benchmark.
5. Stage 2 được thiết kế để tăng khả năng chẩn đoán theo difficulty và cognitive demand.
6. Kết quả backtest trong bài báo là ước lượng trực tiếp cho lợi nhuận triển khai ngoài đời.

## Đáp án gợi ý ngắn

- Phần A: đối chiếu các bài 01, 04, 06, 08, 09.
- Phần B: 1 Sai, 2 Đúng, 3 Sai, 4 Sai, 5 Đúng, 6 Sai.

Người học nên tự giải thích bằng lập luận thay vì chỉ chép nhãn đúng/sai.
