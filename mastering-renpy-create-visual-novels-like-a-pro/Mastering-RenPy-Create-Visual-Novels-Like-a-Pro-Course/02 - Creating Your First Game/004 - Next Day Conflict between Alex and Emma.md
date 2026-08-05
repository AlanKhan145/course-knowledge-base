# 004 - Next Day: Conflict between Alex and Emma

## Module

Module 02 - Creating Your First Game

## Thời lượng

8 phút 54 giây

## Nội dung bài học

Bài học tạo scene tranh cãi giữa Alex và Emma. Nội dung dùng `scene`, `show`, `hide`, animation, âm thanh và menu ba lựa chọn để người chơi đứng về phía Alex, đứng về phía Emma hoặc giữ trung lập.

## Mục tiêu sau bài học

- Điều khiển thay đổi background và sprite trong scene căng thẳng.
- Tạo menu có ba lựa chọn.
- Thay đổi điểm quan hệ theo lựa chọn.
- Dẫn người chơi đến nhánh truyện khác nhau.

## Logic lựa chọn

```text
Bảo vệ Alex    -> Alex tăng, Emma có thể giảm
Bảo vệ Emma    -> Emma tăng, Alex có thể giảm
Giữ trung lập  -> ít thay đổi hoặc cả hai giảm nhẹ
```

## Việc cần làm trong Ren'Py

- [ ] Viết lời thoại tranh cãi.
- [ ] Thay đổi sprite/biểu cảm theo cảm xúc.
- [ ] Thêm sound effect để tăng kịch tính.
- [ ] Tạo ba lựa chọn rõ hậu quả.
- [ ] Test từng nhánh.

## Kiểm tra nhanh

- [ ] Không còn sprite cũ bị sót sau khi `hide`.
- [ ] Điểm Alex/Emma thay đổi đúng.
- [ ] Lựa chọn trung lập không phá luồng truyện.

## Ghi chú cá nhân

-
