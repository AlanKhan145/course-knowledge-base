# Project Briefs

## Project 01 - Affection System

### Mục tiêu

Tạo hệ thống điểm hảo cảm cho nhiều nhân vật bằng dictionary và helper function.

```renpy
default affection = {
    "Lucian": 0,
    "Cassian": 0,
    "Elias": 0
}
```

### Điều kiện hoàn thành

- [ ] Có ít nhất 3 nhân vật.
- [ ] Lựa chọn trong menu tăng/giảm điểm.
- [ ] Có function `change_affection(character, amount)`.
- [ ] Có điều kiện route hoặc ending dựa trên điểm.

## Project 02 - Basic Inventory

### Mục tiêu

Tạo inventory bằng list và lựa chọn có điều kiện dựa trên item.

```renpy
default inventory = []
```

### Điều kiện hoàn thành

- [ ] Người chơi nhận được item.
- [ ] Item được thêm bằng `append`.
- [ ] Menu chỉ hiện lựa chọn đặc biệt khi có item.
- [ ] Có function `has_item(item_name)`.

## Project 03 - Unlock Tracker

### Mục tiêu

Dùng set để theo dõi CG, hint, ending hoặc achievement đã mở khóa.

```renpy
default unlocked_cgs = set()
```

### Điều kiện hoàn thành

- [ ] Unlock không bị trùng.
- [ ] Có ít nhất 3 unlockable.
- [ ] Có màn kiểm tra danh sách đã mở.

## Project 04 - Password Minigame

### Mục tiêu

Dùng `while`, input và điều kiện để tạo minigame đoán mật mã có số lần thử giới hạn.

### Điều kiện hoàn thành

- [ ] Có tối đa 3 lượt thử.
- [ ] Đáp án đúng dẫn đến success label.
- [ ] Hết lượt dẫn đến fail label.
- [ ] Kết quả minigame lưu bằng Boolean flag.

## Project 05 - LoveInterest Class

### Mục tiêu

Dùng class để gom dữ liệu và hành vi của một nhân vật route.

```renpy
init python:
    class LoveInterest:
        def __init__(self, name, affection=0):
            self.name = name
            self.affection = affection
            self.flags = set()
```

### Điều kiện hoàn thành

- [ ] Có ít nhất 2 object nhân vật.
- [ ] Có method tăng affection.
- [ ] Có method kiểm tra route unlock.
- [ ] Dùng object trong điều kiện Ren'Py.
