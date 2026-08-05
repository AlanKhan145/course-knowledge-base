# Project Briefs

## Project chính - Four-Lane Rhythm Game

### Mục tiêu

Xây rhythm game bốn làn trong Ren'Py bằng Creator-Defined Displayable. Nốt di chuyển theo nhạc, người chơi bấm bốn phím mũi tên, hệ thống tính hit/miss và trả kết quả về visual novel.

### Kiến trúc

```text
Visual Novel Script
  -> call screen rhythm_game(...)
  -> RhythmGameDisplayable
     -> Đọc beat map
     -> Phát nhạc
     -> Tạo danh sách nốt
     -> Render bốn track
     -> Render nốt theo thời gian
     -> Nhận input PyGame
     -> Kiểm tra hit/miss
     -> Cập nhật HUD
     -> Trả kết quả
  -> Cốt truyện xử lý kết quả
```

### Điều kiện hoàn thành

- [ ] Screen gọi được rhythm displayable.
- [ ] Beat map được đọc từ file.
- [ ] Nhạc phát khi minigame bắt đầu.
- [ ] Có bốn track tương ứng bốn phím mũi tên.
- [ ] Nốt di chuyển đúng theo thời gian.
- [ ] Người chơi có thể hit/miss note.
- [ ] HUD hiển thị score.
- [ ] Kết quả trả về Ren'Py script.

## Project mở rộng - Otome Music Date

### Mục tiêu

Đưa rhythm game vào route nhạc công hoặc buổi hẹn âm nhạc, dùng accuracy để tăng hảo cảm, mở CG hoặc chuyển scene.

```renpy
label music_date:
    "Hai người bắt đầu biểu diễn."

    $ quick_menu = False
    call screen rhythm_game(
        "audio/date_song.ogg",
        "audio/date_song.beatmap.txt"
    )
    $ quick_menu = True

    $ hits, total_notes = _return
    $ accuracy = hits / float(total_notes)

    if accuracy >= 0.8:
        $ affection["lucian"] += 3
        $ persistent.music_date_cg = True
        jump music_date_success
    else:
        $ affection["lucian"] += 1
        jump music_date_normal
```

### Điều kiện hoàn thành

- [ ] Có scene dẫn vào minigame.
- [ ] Có nhạc riêng cho date scene.
- [ ] Accuracy ảnh hưởng affection.
- [ ] Accuracy cao mở CG hoặc cảnh riêng.
- [ ] Accuracy thấp vẫn có scene phản hồi hợp lý.

## Project mở rộng sau khóa

- Thêm combo system.
- Thêm ranking S/A/B/C.
- Thêm high score persistence.
- Thêm calibration offset.
- Thêm chart editor đơn giản.
- Thêm note hold hoặc multi-hit.
