# Bài 07 — Dùng Position để tạo độ trễ dọc thân

## 1. Mục tiêu học tập

Tạo một mask/gradient biểu diễn vị trí từ đầu tới đuôi.

## 2. Vấn đề “cá như vật thể cứng”

Nếu toàn bộ vertex nhận cùng rotation/offset, đầu, thân và đuôi cùng chuyển một lúc.

## 3. Tạo gradient

Có thể dùng:

```text
Position
→ Distance / Map Range / Separate XYZ
→ Normalize
```

để tạo `body_factor` từ khoảng 0 ở đầu đến 1 ở đuôi.

Nếu mesh được định hướng dọc một trục rõ ràng, `Separate XYZ` thường ổn định hơn `Distance from origin`.

## 4. Body factor

```text
body_factor = normalized longitudinal coordinate
```

Từ đó:

```text
delay = body_factor × DelayStrength
```

## 5. Checkpoint

Khi origin của mesh không nằm ở đầu hoặc giữa thân, dùng Distance-from-origin có thể gây lỗi gì?
