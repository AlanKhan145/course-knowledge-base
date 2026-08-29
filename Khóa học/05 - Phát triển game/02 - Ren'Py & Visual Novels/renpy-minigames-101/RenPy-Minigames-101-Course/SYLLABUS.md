# Syllabus

## Thông tin tổng quan

| Nội dung | Thông tin |
| --- | --- |
| Tên khóa học | Ren'Py Minigames 101 |
| Phụ đề | Learn to build minigames in Ren'Py & Python by building a Rhythm Game from scratch |
| Giảng viên | Lynn Zheng |
| Cập nhật gần nhất | Tháng 2/2024 |
| Ngôn ngữ | Tiếng Anh |
| Phụ đề | Tiếng Anh tự động |
| Số module | 4 |
| Số bài học | 15 |
| Tổng thời lượng | 1 giờ 15 phút |
| Project chính | Rhythm game bốn làn |
| Công nghệ | Ren'Py, Python, PyGame, Aubio, Librosa |

Ghi chú: tại thời điểm kiểm tra ngày 05/08/2026, trang Udemy hiển thị khoảng 4,1/5 điểm, 38 lượt đánh giá và 381 học viên. Các con số này có thể thay đổi.

## Yêu cầu đầu vào

- Kiến thức Ren'Py cơ bản.
- Kiến thức lập trình cơ bản.
- Kiến thức Python cơ bản.
- Khả năng sử dụng list và dictionary.
- Khả năng viết hàm.
- Hiểu class và lập trình hướng đối tượng.

Giảng viên khuyến nghị học `Python Basics for Ren'Py Developers` trước nếu chưa vững Python.

## Module 01 - Introduction

| Bài | Tên bài | Thời lượng | Trọng tâm |
| --- | --- | --- | --- |
| 001 | How to Use the Course Material | 02:37 | Tài liệu, GitHub, project hoàn chỉnh và cách so sánh code |
| 002 | Introduction to Screens and Displayables in Ren'Py | 04:45 | Screen Language, displayable và screen chứa rhythm game |
| 003 | Implement Creator-Defined Displayables | 06:43 | Class kế thừa `renpy.Displayable`, `render()`, `event()` và return result |

## Module 02 - Rendering the Game View

| Bài | Tên bài | Thời lượng | Trọng tâm |
| --- | --- | --- | --- |
| 004 | Render the Game Screen and the Tracks on Which Notes Will Appear | 04:35 | Bốn track dọc, arrow keys, lane width và static render |
| 005 | Render the Moving Music Notes | 12:50 | Note data, track, spawn timing, movement, cleanup và redraw |
| 006 | Time the Music Notes According to the Custom Music File | 05:10 | Custom music, onset, beat timing, offset và beat map |
| 007 | Generate Beat Maps Using Aubio in Python | 04:03 | Aubio source/onset và `.beatmap.txt` |
| 008 | Generate Beat Maps Using Librosa in Python | 03:35 | Librosa load, onset detect và tham số `y=` |
| 009 | Play Music and Read the Beat Map Files into Ren'Py | 04:34 | Music path, beatmap path, `renpy.open_file()`, notes và audio sync |

## Module 03 - Detecting Player Interaction Events

| Bài | Tên bài | Thời lượng | Trọng tâm |
| --- | --- | --- | --- |
| 010 | Detect Events with PyGame | 09:50 | `KEYDOWN`, arrow-to-track, hit/miss threshold và note processed |
| 011 | Zoom in on the Notes When They Are Within the Hit Threshold | 03:49 | Scale note trong hit window |
| 012 | Score Hits and Misses on a Heads-Up Display | 04:49 | Hits, misses, total notes, HUD và `_return` |

## Module 04 - Bonus Features, Course Recap and Conclusion

| Bài | Tên bài | Thời lượng | Trọng tâm |
| --- | --- | --- | --- |
| 013 | Adjust the Difficulty Level of the Game | 04:21 | Travel time, hit threshold, note density và difficulty settings |
| 014 | Other Features: Pausing the Minigame, Finer-Grained Scoring, etc. | 02:55 | Pause idea, timing adjustment, Perfect/Great/Good/Miss |
| 015 | Course Conclusion and Resources | 01:22 | Recap displayable, render, input, beat map, HUD và resources |

## Project cuối khóa

```text
renpy-minigames101/
|
|-- game/
|   |-- audio/
|   |   |-- my-music.ogg
|   |   `-- my-music.beatmap.txt
|   |-- images/
|   |-- gui/
|   |-- rhythm_game_displayable.rpy
|   |-- screens.rpy
|   |-- script.rpy
|   |-- gui.rpy
|   `-- options.rpy
|
`-- generate_beatmap/
    |-- generate_beatmap_aubio.py
    `-- generate_beatmap_librosa.py
```

## Phạm vi thực tế

Mặc dù tên khóa học dùng từ "Minigames", chương trình công khai xây dựng chi tiết một minigame duy nhất: rhythm game bốn phím. Kỹ thuật có thể tái sử dụng cho minigame khác gồm render theo thời gian, input, trạng thái, HUD, scoring và trả kết quả về visual novel.

Khóa học không trực tiếp xây puzzle kéo thả, memory matching, hidden object, quiz, cooking game, dress-up, battle system, card game, chess, fishing game, dating sim hoặc point-and-click exploration.
