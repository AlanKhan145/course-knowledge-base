# 002 - Introduction to Screens and Displayables in Ren'Py

## Module

Module 01 - Introduction

## Thời lượng

4 phút 45 giây

## Nội dung bài học

Giới thiệu Screen Language, vai trò của screen trong giao diện Ren'Py, khái niệm displayable, phân biệt displayable có sẵn và displayable tự tạo, đồng thời chuẩn bị screen chứa rhythm game.

## Ghi chú script

```renpy
screen rhythm_game(music_file, beatmap_file):
    add RhythmGameDisplayable(music_file, beatmap_file)
```

## Mục tiêu sau bài học

- Hiểu screen là nơi gắn minigame vào Ren'Py UI.
- Hiểu displayable là thứ Ren'Py có thể vẽ lên màn hình.
- Biết rhythm game sẽ được nhúng vào screen bằng `add`.

## Việc cần làm

- [ ] Tạo screen `rhythm_game`.
- [ ] Truyền `music_file` và `beatmap_file`.
- [ ] Chuẩn bị gọi displayable tùy chỉnh.

## Ghi chú cá nhân

-
