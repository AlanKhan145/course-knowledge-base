# Bài 11 — Kết luận và nguyên tắc mô hình hóa hành vi cá

- **Module:** 04. Thảo luận và ứng dụng
- **Loại:** Lesson tổng kết + ứng dụng suy luận
- **Nguồn chính:** Conclusions; phần ứng dụng được đánh dấu riêng

## Mục tiêu học tập

Tổng hợp kết luận của nghiên cứu và chuyển chúng thành nguyên tắc thiết kế mô hình hành vi mà không vượt quá bằng chứng của nguồn.

## 1. Kết luận trực tiếp từ bài báo

Nghiên cứu kết luận rằng hiện có **bằng chứng hạn chế** cho việc chiếu trực tiếp các quan hệ giữa hình dạng và swimming performance sang routine swimming behaviour. Vì vậy, không nên suy ra hành vi thường nhật chỉ từ hình dạng cơ thể.

Các công cụ quan sát cá không bị làm phiền trong môi trường tự nhiên được kỳ vọng sẽ tạo ra ngày càng nhiều dữ liệu hành vi, giúp kiểm tra thêm các yếu tố ngoài hình dạng và locomotor mode.

## 2. Những điều nguồn không chứng minh

Bài báo này không cung cấp:

- một rig xương chuẩn cho animation;
- biên độ tail beat tối ưu;
- pha chuyển động chính xác của từng vây;
- tốc độ tuyệt đối áp dụng cho mọi loài cá;
- một thuật toán AI sinh hành vi.

Những nội dung đó cần nguồn khác nếu muốn mô hình hóa chi tiết.

## 3. Ứng dụng suy luận cho mô phỏng/animation

> **Phần này là suy luận thiết kế từ kết quả nghiên cứu, không phải kết luận được tác giả trình bày như một thuật toán.**

Một mô hình hành vi cá hợp lý không nên dùng duy nhất `body_shape → behaviour_profile`. Có thể tách tối thiểu thành các lớp tham số:

1. **Morphology:** hình dạng thân, cuống đuôi, vây.
2. **Propulsion mode:** BCF, MPF hoặc mode phối hợp.
3. **Routine behaviour:** tốc độ mục tiêu, độ dài bout, xác suất rẽ, xác suất station holding.
4. **Context:** môi trường, nhiệm vụ, luồng nước, thức ăn, nguy cơ, vị trí trong không gian.

Kết quả nghiên cứu gợi ý rằng lớp 3 nên có độ tự do riêng thay vì bị khóa cứng bởi lớp 1 hoặc 2.

## 4. Checklist khi dùng paper này làm nguồn mô hình

- Dùng paper để thiết kế **biến hành vi** và logic đo lường.
- Dùng Figure 1 để hiểu giả thuyết cổ điển, nhưng không xem nó là luật cứng.
- Dùng Figure 2 để nhớ phải kiểm soát **body size**.
- Dùng Figure 3 để tạo các profile có thể vừa nhanh vừa rẽ nhiều.
- Dùng Figure 4 để tránh hard-code hành vi từ một trục hình dạng duy nhất.
- Nếu cần kinematics chi tiết của vây/thân, bổ sung paper chuyên về hydrodynamics và anatomy.
