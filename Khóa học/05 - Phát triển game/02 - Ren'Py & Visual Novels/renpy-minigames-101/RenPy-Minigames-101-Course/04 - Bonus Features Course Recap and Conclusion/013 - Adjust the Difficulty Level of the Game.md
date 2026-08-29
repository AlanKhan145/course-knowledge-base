# 013 - Adjust the Difficulty Level of the Game

## Module

Module 04 - Bonus Features, Course Recap and Conclusion

## Thời lượng

4 phút 21 giây

## Nội dung bài học

Điều chỉnh độ khó bằng cách thay đổi tốc độ di chuyển nốt, thời gian tồn tại, cửa sổ hit, mật độ nốt, lọc onset từ beat map, tạo cấp độ dễ/thường/khó và truyền cấu hình vào displayable.

## Ví dụ cấu hình

```python
difficulty_settings = {
    "easy": {
        "travel_time": 4.0,
        "hit_threshold": 0.40
    },
    "normal": {
        "travel_time": 3.0,
        "hit_threshold": 0.30
    },
    "hard": {
        "travel_time": 2.0,
        "hit_threshold": 0.18
    }
}
```

## Việc cần làm

- [ ] Tạo difficulty settings.
- [ ] Truyền difficulty vào displayable.
- [ ] Điều chỉnh travel time.
- [ ] Điều chỉnh hit threshold.
- [ ] Giảm/tăng mật độ note.

## Ghi chú cá nhân

-
