# 008 - Dictionaries: Lookup Table Using Keys

## Module

Module 03 - Data Structures in Python

## Thời lượng

4 phút 44 giây

## Nội dung bài học

Học dictionary: cấu trúc `key: value`, tạo dictionary, truy cập bằng khóa, thêm/cập nhật dữ liệu, kiểm tra khóa tồn tại, lưu nhiều chỉ số liên quan trong cùng một cấu trúc và dùng dictionary làm bảng tra cứu.

## Ví dụ affection system

```renpy
default affection = {
    "lucian": 0,
    "cassian": 0,
    "elias": 0,
    "noah": 0
}

$ affection["lucian"] += 2
$ affection["cassian"] -= 1
```

```renpy
if affection["lucian"] >= 10:
    jump lucian_romance_scene
```

## Ứng dụng

- Điểm hảo cảm của nhiều nam chính.
- Inventory có số lượng.
- Hồ sơ nhân vật.
- Chỉ số người chơi.
- Bảng thông tin item.
- Điểm từng minigame.
- Trạng thái nhiệm vụ.

## Việc cần làm

- [ ] Tạo dictionary affection.
- [ ] Cập nhật điểm bằng key.
- [ ] Kiểm tra điểm để mở scene.
- [ ] Thử thêm một nhân vật mới vào dictionary.

## Ghi chú cá nhân

-
