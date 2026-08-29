# 009 - Play Music and Read the Beat Map Files into Ren'Py

## Module

Module 02 - Rendering the Game View

## Thời lượng

4 phút 34 giây

## Nội dung bài học

Truyền đường dẫn nhạc và beat map vào minigame, đọc nội dung file, tách từng dòng thành timestamp, chuyển chuỗi sang float, tạo danh sách nốt, bắt đầu phát nhạc và đồng bộ thời gian render với audio.

## Ghi chú Ren'Py 8

```python
with renpy.open_file(beatmap_path, "utf-8") as file:
    text = file.read()
```

## Ví dụ gọi screen

```renpy
call screen rhythm_game(
    "audio/my-music.ogg",
    "audio/my-music.beatmap.txt"
)
```

## Việc cần làm

- [ ] Truyền `music_file`.
- [ ] Truyền `beatmap_file`.
- [ ] Đọc beat map bằng `renpy.open_file`.
- [ ] Parse timestamp thành float.
- [ ] Tạo notes.
- [ ] Phát nhạc khi game bắt đầu.

## Ghi chú cá nhân

-
