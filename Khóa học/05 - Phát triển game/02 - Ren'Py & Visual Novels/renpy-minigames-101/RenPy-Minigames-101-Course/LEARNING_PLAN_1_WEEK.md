# Learning Plan - 1 Week

## Ngày 1 - Displayable nền

- Học bài 001-003.
- Chạy project hoàn chỉnh.
- Tạo screen gọi `RhythmGameDisplayable`.
- Tạo class kế thừa `renpy.Displayable` có `render()` và `event()`.

## Ngày 2 - Render track

- Học bài 004.
- Chia màn hình thành bốn track.
- Gán track cho phím lên, xuống, trái, phải.
- Render màn hình tĩnh và vùng hit.

## Ngày 3 - Render note

- Học bài 005-006.
- Tạo dữ liệu note có `time`, `track`, `hit`.
- Tính vị trí note theo thời gian.
- Điều chỉnh travel time và offset.

## Ngày 4 - Beat map

- Học bài 007-009.
- Sinh beat map bằng Aubio hoặc Librosa.
- Đọc beat map bằng `renpy.open_file()`.
- Phát nhạc khi minigame bắt đầu.

## Ngày 5 - Input và hit/miss

- Học bài 010.
- Nhận `KEYDOWN` bằng PyGame.
- Ánh xạ arrow keys sang track.
- Tính delta giữa thời điểm bấm và note timing.

## Ngày 6 - HUD và return result

- Học bài 011-012.
- Phóng to note trong hit window.
- Hiển thị hits/misses/total notes.
- Trả `(num_hits, num_notes)` về Ren'Py script.

## Ngày 7 - Difficulty và tích hợp otome

- Học bài 013-015.
- Tạo settings dễ/thường/khó.
- Thêm ý tưởng Perfect/Great/Good/Miss.
- Nối kết quả rhythm game với affection, route hoặc CG unlock.
