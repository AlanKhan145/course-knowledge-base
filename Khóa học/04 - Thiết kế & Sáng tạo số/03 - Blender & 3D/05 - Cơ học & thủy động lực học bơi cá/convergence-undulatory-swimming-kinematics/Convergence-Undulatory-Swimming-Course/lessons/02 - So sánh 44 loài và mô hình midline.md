# Bài 2 — So sánh 44 loài và mô hình midline

## Mục tiêu

- Biểu diễn midline theo không gian và thời gian.
- Hiểu vai trò của đa thức bậc hai trong mô tả biên độ.
- Thiết lập một controller có thể so sánh nhiều loài.

## Nội dung cốt lõi

Abstract báo cáo so sánh 44 loài và nhận thấy phần lớn loài có amplitude profile phù hợp với đa thức bậc hai. Đây là một mô tả gọn: thay vì keyframe từng đốt sống, ta dùng chiều dài chuẩn hóa `s` từ đầu đến đuôi và hàm `A(s)` để xác định biên độ dao động.

Một controller đơn giản có thể dùng:

`y(s,t) = A(s) × sin(2πft − k s + φ)`

Trong đó `A(s)` được điều khiển bởi ba hệ số của đa thức bậc hai. Công thức trên là khung minh họa cho asset, không phải toàn bộ phương trình hay dữ liệu gốc của bài báo.

## Bài tập

Tạo hai curve có cùng frequency nhưng khác wave length. Chuẩn hóa chiều dài thân trước khi so sánh hình ảnh.

