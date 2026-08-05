# 012 - Score Hits and Misses on a Heads-Up Display

## Module

Module 03 - Detecting Player Interaction Events

## Thời lượng

4 phút 49 giây

## Nội dung bài học

Tạo biến đếm tổng số nốt, số hit, số miss, hiển thị chỉ số trên HUD, cập nhật HUD theo thời gian thực, trả kết quả về visual novel khi bài nhạc kết thúc và dùng kết quả để thay đổi lời thoại hoặc diễn biến.

## Ví dụ nhận kết quả

```renpy
$ num_hits, num_notes = _return

e "You hit [num_hits] notes out of [num_notes]. Good work!"
```

## Ví dụ nối với route

```renpy
if num_hits >= num_notes * 0.8:
    $ affection["lucian"] += 3
    jump rhythm_game_success
else:
    jump rhythm_game_failed
```

## Việc cần làm

- [ ] Đếm tổng số note.
- [ ] Đếm hits.
- [ ] Đếm misses.
- [ ] Render HUD.
- [ ] Return `(num_hits, num_notes)`.
- [ ] Dùng `_return` trong script.

## Ghi chú cá nhân

-
