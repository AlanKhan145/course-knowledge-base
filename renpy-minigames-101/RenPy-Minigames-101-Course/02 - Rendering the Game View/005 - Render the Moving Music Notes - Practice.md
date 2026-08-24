# 005 - Render the Moving Music Notes

## Module

Module 02 - Rendering the Game View

## Thời lượng

12 phút 50 giây

## Nội dung bài học

Tạo dữ liệu cho từng nốt, gán nốt vào một trong bốn làn, lưu thời điểm nốt xuất hiện, tính vị trí dựa trên thời gian hiện tại, di chuyển nốt theo từng khung hình, loại bỏ nốt hết vòng đời và yêu cầu Ren'Py render lại liên tục.

## Ghi chú dữ liệu

```python
note = {
    "time": 12.450,
    "track": 2,
    "hit": False
}
```

## Công thức khái quát

```text
Tiến độ nốt = thời gian đã trôi qua / thời gian di chuyển
Vị trí Y = vị trí bắt đầu + tiến độ nốt x quãng đường di chuyển
```

## Việc cần làm

- [ ] Tạo list notes.
- [ ] Gán `time`, `track`, `hit`.
- [ ] Tính progress của note.
- [ ] Tính vị trí Y.
- [ ] Render note đúng track.
- [ ] Redraw liên tục.

## Ghi chú cá nhân

-

---

# Bài luyện tập

## Mục tiêu


## Đề bài


## Yêu cầu hoàn thành

- [ ] 
- [ ] 
- [ ] 

## Kết quả / lời giải


## Ghi chú
