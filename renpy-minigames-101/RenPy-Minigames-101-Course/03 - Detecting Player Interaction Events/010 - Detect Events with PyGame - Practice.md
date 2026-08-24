# 010 - Detect Events with PyGame

## Module

Module 03 - Detecting Player Interaction Events

## Thời lượng

9 phút 50 giây

## Nội dung bài học

Nhận sự kiện bàn phím trong displayable, kiểm tra `KEYDOWN`, ánh xạ bốn phím mũi tên sang bốn track, tìm nốt gần vùng bấm nhất, so sánh thời gian bấm với thời gian chuẩn, xác định hit/miss, đánh dấu nốt đã xử lý và ngăn một nốt được tính nhiều lần.

## Ghi chú code

```python
key_to_track = {
    pygame.K_UP: 0,
    pygame.K_DOWN: 1,
    pygame.K_LEFT: 2,
    pygame.K_RIGHT: 3
}
```

## Hit threshold

```text
Sai lệch thời gian <= 0.3 giây -> Hit
Sai lệch thời gian > 0.3 giây -> Miss
```

## Việc cần làm

- [ ] Kiểm tra event type `KEYDOWN`.
- [ ] Ánh xạ arrow keys sang track.
- [ ] Tìm note gần nhất cùng track.
- [ ] Tính timing delta.
- [ ] Đánh dấu note đã xử lý.
- [ ] Không tính trùng note.

## Ghi chú cá nhân

-

---

# Bài luyện tập

## Mục tiêu


## Đề bài


## Yêu cầu hoàn thành

- [ ] 
- [ ] 
- [ ] 

## Kết quả / lời giải


## Ghi chú
