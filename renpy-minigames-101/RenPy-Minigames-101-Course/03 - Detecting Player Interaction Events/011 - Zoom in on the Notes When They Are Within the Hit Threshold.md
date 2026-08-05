# 011 - Zoom in on the Notes When They Are Within the Hit Threshold

## Module

Module 03 - Detecting Player Interaction Events

## Thời lượng

3 phút 49 giây

## Nội dung bài học

Kiểm tra khoảng cách thời gian giữa nốt và vùng hit, thay đổi kích thước nốt khi nó đi vào vùng hợp lệ, thu nhỏ lại khi ra khỏi vùng và cung cấp tín hiệu trực quan giúp người chơi đọc nhịp tốt hơn.

## Hiệu ứng

```text
Nốt còn xa      -> Scale 1.0
Nốt trong vùng  -> Scale lớn hơn
Nốt đã vượt qua -> Miss hoặc biến mất
```

## Việc cần làm

- [ ] Tính delta giữa note time và current time.
- [ ] Nếu trong hit threshold, tăng scale.
- [ ] Nếu ngoài hit threshold, dùng scale thường.
- [ ] Kiểm tra hiệu ứng không làm note lệch track.

## Ghi chú cá nhân

-
