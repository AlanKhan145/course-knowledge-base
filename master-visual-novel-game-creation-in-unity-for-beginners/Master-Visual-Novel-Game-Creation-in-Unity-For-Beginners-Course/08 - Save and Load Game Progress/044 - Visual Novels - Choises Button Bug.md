# 044 - Visual Novels - Choises Button Bug

## Module

Module 08 - Save and Load Game Progress

## Thời lượng

3 phút 40 giây

## Nội dung bài học

Sửa lỗi choice panel tự hủy: không xóa object cha chứa panel, chỉ xóa các nút con, làm mới lựa chọn khi chuyển node và ngăn lựa chọn cũ xuất hiện lại.

Ghi chú: "Choises" là lỗi chính tả trong tiêu đề gốc; từ đúng là "Choices".

## Việc cần làm

- [ ] Kiểm tra hàm clear choices.
- [ ] Chỉ destroy các child button.
- [ ] Không destroy choice panel.
- [ ] Tạo lại choices sau khi chuyển node.
- [ ] Test nhiều node liên tiếp có choices.

## Ghi chú cá nhân

-
