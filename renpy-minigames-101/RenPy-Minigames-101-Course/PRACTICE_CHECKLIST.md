# Practice Checklist

## Screen and Displayable

- [ ] Tạo screen `rhythm_game`.
- [ ] Gọi displayable bằng `add`.
- [ ] Tạo class kế thừa `renpy.Displayable`.
- [ ] Viết `__init__`.
- [ ] Viết `render()`.
- [ ] Viết `event()`.
- [ ] Gọi redraw để render liên tục.
- [ ] Return result về script.

## Rendering

- [ ] Render vùng rhythm game.
- [ ] Chia thành bốn track.
- [ ] Tính lane width.
- [ ] Tính lane spacing.
- [ ] Render vùng hit.
- [ ] Tạo note data.
- [ ] Tính vị trí note theo thời gian.
- [ ] Loại bỏ hoặc bỏ qua note hết vòng đời.

## Beat Map and Audio

- [ ] Sinh beat map bằng Aubio.
- [ ] Sinh beat map bằng Librosa.
- [ ] Lưu file `.beatmap.txt`.
- [ ] Đọc beat map bằng `renpy.open_file()`.
- [ ] Chuyển từng dòng thành float.
- [ ] Tạo notes từ beat times.
- [ ] Phát nhạc khi minigame bắt đầu.
- [ ] Kiểm tra offset audio/render.

## Input and Scoring

- [ ] Nhận `KEYDOWN`.
- [ ] Ánh xạ mũi tên lên/xuống/trái/phải sang track.
- [ ] Tìm note gần vùng hit nhất.
- [ ] Dùng hit threshold.
- [ ] Đánh dấu note đã xử lý.
- [ ] Không tính một note nhiều lần.
- [ ] Đếm hits.
- [ ] Đếm misses.
- [ ] Hiển thị HUD.

## Integration

- [ ] Tắt quick menu trong lúc chơi nếu cần.
- [ ] Chặn rollback quanh minigame nếu cần.
- [ ] Nhận `_return` sau `call screen`.
- [ ] Tính accuracy.
- [ ] Tăng affection dựa trên kết quả.
- [ ] Unlock CG hoặc scene nếu đạt điểm.

## Extensions

- [ ] Easy/normal/hard difficulty.
- [ ] Perfect/Great/Good/Miss scoring.
- [ ] Pause idea.
- [ ] High score persistence.
- [ ] Calibration offset.
- [ ] Touch/mobile controls.
