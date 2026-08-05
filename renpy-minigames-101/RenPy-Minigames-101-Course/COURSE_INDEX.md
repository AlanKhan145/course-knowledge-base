# Course Index

## Ren'Py Minigames 101

Khóa học này dùng một rhythm game bốn làn để dạy cách xây gameplay thời gian thực trong Ren'Py bằng Python. Giá trị chính nằm ở Creator-Defined Displayable, vòng lặp render, nhận phím bằng PyGame, đọc beat map, đồng bộ nốt với âm nhạc, tính hit/miss và trả kết quả về visual novel.

## Mục tiêu đầu ra

Sau khóa học, bạn nên có thể:

- Gọi displayable tùy chỉnh từ Ren'Py screen.
- Tạo class kế thừa `renpy.Displayable`.
- Viết `render()` để vẽ giao diện game theo từng khung hình.
- Viết `event()` để nhận input bàn phím bằng PyGame.
- Chia màn hình thành bốn track rhythm game.
- Tạo nốt nhạc di chuyển theo thời gian.
- Đọc beat map từ file text bằng `renpy.open_file()`.
- Phát nhạc và đồng bộ nốt với thời điểm beat.
- Dùng Aubio hoặc Librosa để sinh beat map.
- Tính hit/miss, cập nhật HUD và trả kết quả về script.
- Dùng kết quả minigame để thay đổi route, affection hoặc CG unlock.

## Tài liệu trong khóa

- [SYLLABUS.md](SYLLABUS.md): mục lục đầy đủ theo bài.
- [LEARNING_PLAN_1_WEEK.md](LEARNING_PLAN_1_WEEK.md): lịch học 1 tuần.
- [PROJECT_BRIEFS.md](PROJECT_BRIEFS.md): brief rhythm game và mở rộng otome.
- [PRACTICE_CHECKLIST.md](PRACTICE_CHECKLIST.md): checklist kỹ thuật minigame.

## Danh sách module

| Module | Nội dung | Bài học | Thời lượng | Sản phẩm |
| --- | --- | ---: | --- | --- |
| 01 - Introduction | Course material, screens, displayables và Creator-Defined Displayable | 3 | khoảng 14 phút | Skeleton rhythm displayable |
| 02 - Rendering the Game View | Track, notes, timing, beat map, music và file loading | 6 | khoảng 35 phút | Rhythm game render được nốt theo nhạc |
| 03 - Detecting Player Interaction Events | PyGame key events, hit window, note zoom và HUD score | 3 | khoảng 18 phút | Rhythm game có input và tính điểm |
| 04 - Bonus Features | Difficulty, pause idea, finer scoring và recap | 3 | khoảng 9 phút | Kế hoạch mở rộng minigame |

## Đường học khuyến nghị

1. Học `Python Basics for Ren'Py Developers` trước nếu chưa vững list, dictionary, function và class.
2. Chạy project hoàn chỉnh để cảm được mục tiêu gameplay.
3. Khi viết displayable, test từng phần: render track trước, render note sau, rồi mới đọc beat map.
4. Khi thêm input, log track và timing delta để debug hit/miss.
5. Sau khóa học, thử nối kết quả rhythm game với affection hoặc CG unlock trong project otome.
