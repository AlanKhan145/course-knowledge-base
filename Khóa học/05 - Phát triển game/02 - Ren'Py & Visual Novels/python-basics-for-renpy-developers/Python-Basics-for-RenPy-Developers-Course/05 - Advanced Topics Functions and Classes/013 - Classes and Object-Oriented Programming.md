# 013 - Classes and Object-Oriented Programming

## Module

Module 05 - Advanced Topics: Functions and Classes

## Thời lượng

8 phút 13 giây

## Nội dung bài học

Học class và lập trình hướng đối tượng: object, thuộc tính, hàm khởi tạo `__init__`, method, tạo nhiều object từ cùng một class và nhóm dữ liệu/hành vi liên quan.

## Ví dụ class nhân vật

```renpy
init python:
    class LoveInterest:
        def __init__(self, name, affection=0, route_unlocked=False):
            self.name = name
            self.affection = affection
            self.route_unlocked = route_unlocked

        def add_affection(self, amount):
            self.affection += amount

        def can_enter_route(self):
            return self.affection >= 10 and self.route_unlocked
```

```renpy
default lucian = LoveInterest("Lucian")
default cassian = LoveInterest("Cassian")

$ lucian.add_affection(2)

if lucian.can_enter_route():
    jump lucian_route
```

## Ứng dụng

- Class nhân vật.
- Class item.
- Class nhiệm vụ.
- Class câu hỏi minigame.
- Class kỹ năng.
- Class hồ sơ route.
- Class quản lý ending.

## Việc cần làm

- [ ] Tạo class `LoveInterest`.
- [ ] Tạo ít nhất 2 object nhân vật.
- [ ] Thêm method tăng affection.
- [ ] Thêm method kiểm tra route.
- [ ] Dùng object trong điều kiện Ren'Py.

## Ghi chú cá nhân

-
