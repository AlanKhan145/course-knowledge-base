# 011 - Looping Over Iterables: Lists, Sets, Dictionaries

## Module

Module 04 - Python Statements

## Thời lượng

6 phút 14 giây

## Nội dung bài học

Học iterable, lặp qua list, set, khóa dictionary, giá trị dictionary và cặp khóa-giá trị bằng `.items()`. Bài này kết hợp cấu trúc dữ liệu với vòng lặp để tạo UI hoặc logic động.

## Ví dụ

```python
for item in inventory:
    print(item)
```

```python
for character, points in affection.items():
    print(character, points)
```

```python
best_match = max(affection, key=affection.get)
```

## Ứng dụng

- Hiển thị toàn bộ inventory.
- Tạo danh sách nhân vật động.
- Tính route có điểm cao nhất.
- Hiển thị bảng trạng thái.
- Kiểm tra achievement.
- Sinh menu từ dữ liệu.

## Việc cần làm

- [ ] Lặp qua list inventory.
- [ ] Lặp qua set unlocks.
- [ ] Lặp qua dictionary bằng `.items()`.
- [ ] Tìm nhân vật có affection cao nhất.

## Ghi chú cá nhân

-
