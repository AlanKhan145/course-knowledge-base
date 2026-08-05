# 008 - Generate Beat Maps Using Librosa in Python

## Module

Module 02 - Rendering the Game View

## Thời lượng

3 phút 35 giây

## Nội dung bài học

Dùng Librosa thay cho Aubio: load file âm thanh, phát hiện onset frame, chuyển onset frame sang giây, ghi kết quả ra beat map và điều chỉnh tham số phát hiện beat.

## Ghi chú API

```python
y, sr = librosa.load(file_path)

onset_frames = librosa.onset.onset_detect(
    y=y,
    sr=sr
)
```

Librosa được giới thiệu như phương án thay thế vì được bảo trì tích cực hơn Aubio, nhưng API có thể thay đổi theo phiên bản.

## Việc cần làm

- [ ] Cài Librosa nếu dùng workflow này.
- [ ] Chạy script `generate_beatmap_librosa.py`.
- [ ] Kiểm tra API `y=` và `sr=`.
- [ ] So sánh beat map với bản Aubio nếu cần.

## Ghi chú cá nhân

-
