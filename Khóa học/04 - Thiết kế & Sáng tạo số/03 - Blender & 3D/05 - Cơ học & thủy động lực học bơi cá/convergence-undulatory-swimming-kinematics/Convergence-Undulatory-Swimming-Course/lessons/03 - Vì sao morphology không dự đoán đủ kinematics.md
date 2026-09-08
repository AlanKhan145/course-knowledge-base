# Bài 3 — Vì sao morphology không dự đoán đủ kinematics

## Mục tiêu

- Phân biệt hình thái, động học và cơ chế tạo lực.
- Hiểu head-to-tail amplitude không nhất thiết giảm theo trực giác.
- Thiết kế animation không gắn cứng vào nhãn loài.

## Nội dung cốt lõi

Nguồn cho biết không quan sát thấy mức giảm head-to-tail amplitude đơn giản như dự đoán. Body-wave length cũng khác giữa anguilliform và thunniform nhưng có biến thiên lớn. Vì vậy, hai loài có hình thái khác nhau có thể có midline kinematics tương tự; ngược lại, cùng một nhãn hình thái không đảm bảo chuyển động giống nhau.

Trong workflow, lưu riêng các lớp: mesh cơ thể, curve midline, amplitude profile, phase và lực đẩy giả lập. Khi render, dùng một bảng ghi “observed / assumed / illustrative” cho từng tham số.

## Bài tập

Tạo một đôi cá: đổi morphology nhưng giữ controller, sau đó giữ morphology và đổi amplitude profile. So sánh hai animation để thấy hai lớp dữ liệu độc lập.

