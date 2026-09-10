# Bài 06 — Seed/offset để đổi pattern chuyển động

## 1. Mục tiêu học tập

Đổi “đường bơi” mà không thay cấu trúc graph.

## 2. Ý tưởng

Nếu:

```text
P(t) = Noise(t)
```

thì:

```text
P_seed(t) = Noise(t + seed)
```

sẽ lấy một đoạn khác trên cùng trường noise.

## 3. Ứng dụng

Một `Add` node trước input noise cho phép:

```text
time + 500
```

hoặc một Group Input `Seed`.

Điều này rất hữu ích khi tạo nhiều cá: mỗi cá dùng một seed khác nhau nên không bơi giống hệt nhau.

## 4. Cảnh báo

Seed chỉ đổi pattern; nó không tự tạo avoidance, schooling hay collision.

## 5. Checkpoint

Giải thích tại sao 20 con cá dùng cùng `time`, `speed`, `seed` sẽ trông nhân bản.
