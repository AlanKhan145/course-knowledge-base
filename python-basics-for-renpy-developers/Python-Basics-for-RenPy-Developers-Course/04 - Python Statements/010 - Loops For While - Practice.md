# 010 - Loops: For, While

## Module

Module 04 - Python Statements

## Thời lượng

5 phút 22 giây

## Nội dung bài học

Học vòng lặp `for`, `range()`, vòng lặp `while`, điều kiện dừng, tránh vòng lặp vô hạn và lặp lại hành động trong minigame.

## Ví dụ Python

```python
for day in range(1, 8):
    print("Day", day)
```

## Ví dụ minigame

```renpy
$ attempts = 3

while attempts > 0:
    $ answer = renpy.input("Nhập mật mã:")

    if answer == "MOON":
        jump puzzle_success

    $ attempts -= 1
```

## Ứng dụng

- Minigame đoán mật mã.
- Hệ thống chiến đấu đơn giản.
- Lặp qua nhiều ngày.
- Sinh nhiều lựa chọn.
- Kiểm tra nhiều item.

## Việc cần làm

- [ ] Viết vòng `for` qua số ngày.
- [ ] Viết vòng `while` có biến đếm.
- [ ] Tạo điều kiện dừng rõ ràng.
- [ ] Tạo minigame 3 lượt thử.

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
