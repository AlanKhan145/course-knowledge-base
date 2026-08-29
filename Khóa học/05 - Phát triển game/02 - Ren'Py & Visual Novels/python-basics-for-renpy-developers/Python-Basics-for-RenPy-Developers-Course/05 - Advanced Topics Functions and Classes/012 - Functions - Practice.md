# 012 - Functions

## Module

Module 05 - Advanced Topics: Functions and Classes

## Thời lượng

6 phút 23 giây

## Nội dung bài học

Học hàm: khai báo bằng `def`, truyền tham số, trả kết quả bằng `return`, tái sử dụng logic, giảm code trùng lặp và gọi hàm từ script Ren'Py.

## Ví dụ Ren'Py

```renpy
init python:
    def change_affection(character, amount):
        affection[character] += amount
        return affection[character]
```

```renpy
$ change_affection("lucian", 2)
```

## Ví dụ kiểm tra route

```renpy
init python:
    def can_unlock_route(character):
        return (
            affection.get(character, 0) >= 10
            and found_secret_letter
        )
```

## Ứng dụng

- Cộng/trừ điểm hảo cảm.
- Thêm item vào inventory.
- Kiểm tra điều kiện ending.
- Tính điểm minigame.
- Chọn kết quả ngẫu nhiên.
- Làm sạch script hội thoại.

## Việc cần làm

- [ ] Viết `change_affection`.
- [ ] Viết `has_item`.
- [ ] Viết `can_unlock_route`.
- [ ] Gọi function từ menu hoặc label.

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
