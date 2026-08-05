# 003 - Implement Creator-Defined Displayables

## Module

Module 01 - Introduction

## Thời lượng

6 phút 43 giây

## Nội dung bài học

Tạo class Python kế thừa displayable của Ren'Py, viết hàm khởi tạo, lưu trạng thái minigame, triển khai `render()`, triển khai `event()`, yêu cầu Ren'Py render lại giao diện và trả kết quả minigame về script chính.

## Ghi chú code

```python
class RhythmGameDisplayable(renpy.Displayable):
    def __init__(self, music_file, beatmap_file):
        super().__init__()
        self.music_file = music_file
        self.beatmap_file = beatmap_file

    def render(self, width, height, st, at):
        # Vẽ game tại thời điểm st.
        pass

    def event(self, ev, x, y, st):
        # Nhận bàn phím hoặc sự kiện người chơi.
        pass
```

## Việc cần làm

- [ ] Tạo `RhythmGameDisplayable`.
- [ ] Lưu đường dẫn nhạc và beat map.
- [ ] Tạo biến trạng thái minigame.
- [ ] Viết skeleton `render`.
- [ ] Viết skeleton `event`.
- [ ] Chuẩn bị return result.

## Ghi chú cá nhân

-
