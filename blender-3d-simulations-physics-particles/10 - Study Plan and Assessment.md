# Kế hoạch học và đánh giá

## Kế hoạch 8 tuần

| Tuần | Phạm vi | Sản phẩm cần hoàn thành |
|---:|---|---|
| 1 | Module 01 và phần đầu Module 02 | Scene kiểm tra transform, keyframe và domino nhỏ |
| 2 | Constraint trong Module 02 | Cơ cấu hinge, piston hoặc spring |
| 3 | Project xe và export | Xe vượt chướng ngại vật, render preview |
| 4 | Module 03 và Module 06 | Rèm hoặc áo choàng; jello nhỏ |
| 5 | Module 04: particle và boids | Đàn cá/ong có leader |
| 6 | Module 04: hair, snow và project | Một shot particle hoàn chỉnh |
| 7 | Module 05, 07 và 08 | Force field, dấu vết và lửa/khói preview |
| 8 | Module 09 và capstone | Shot liquid tùy chọn và project trứng nở |

## Cách chấm một project module

- **30% setup:** collection, scale, normals, collision và file organization.
- **30% simulation:** chuyển động ổn định, không lỗi rõ ràng, thông số có chủ đích.
- **20% cache và debug:** biết xóa cache, thử lại và ghi lại thay đổi.
- **20% presentation:** camera, ánh sáng, vật liệu và render preview.

## 12 câu hỏi kiểm tra tổng hợp

1. Vì sao Apply Scale có thể thay đổi kết quả collision?
2. Khi nào nên dùng Passive Rigid Body thay cho object animation thông thường?
3. Collision Shape nào phù hợp để prototype nhanh một hệ nhiều object?
4. Damping khác friction ở điểm nào?
5. Vì sao cloth cần pin group và collider có margin?
6. Boid Brain điều khiển hành vi khác gì so với Newtonian Physics?
7. Khi nào nên dùng particle để tạo debris, khi nào nên dùng Rigid Body?
8. Turbulence và Drag phối hợp thế nào để chuyển động không bị cứng?
9. Canvas và Brush trong Dynamic Paint có vai trò gì?
10. Domain, Flow và Effector trong Fire/Smoke hoặc Liquid liên quan thế nào?
11. Vì sao nên kiểm tra preview resolution trước khi cache final?
12. Hãy mô tả pipeline phù hợp cho shot vỏ trứng nứt và bung mảnh.

## Tiêu chuẩn đạt

Người học đạt khi có thể giải thích lựa chọn solver, hoàn thành ít nhất bốn project module và nộp capstone có:

- file `.blend` có collection rõ ràng;
- cache hoặc quy trình tái tạo simulation;
- render preview tối thiểu 120 frame;
- ghi chú các thông số chính và lỗi đã xử lý;
- một bản xuất video hoặc image sequence xem được.

