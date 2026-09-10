# Bài 12 — Sine wave cho chuyển động thân

## 1. Mục tiêu học tập

Tạo một dao động lặp có kiểm soát thay vì dùng noise cho mọi thứ.

## 2. Hàm cơ bản

```text
wave = sin(time × frequency) × strength
```

Sau đó áp wave vào rotation quanh trục uốn thân.

## 3. Thêm phase theo thân

```text
wave = sin(time × frequency - body_factor × phase) × strength
```

Đây là dạng phù hợp hơn vì sóng lan từ trước ra sau.

## 4. Local space

Body sway nên xảy ra trong local space của cá. Nếu dùng world Z cho mọi hướng, cá quay sang hướng khác sẽ uốn sai.

Ở Blender mới có nhiều utility rotation/vector rõ ràng hơn, bao gồm `Rotate Rotation` và `Rotate Vector`; manual mới liệt kê `Align Rotation to Vector` trong nhóm Rotation utilities.

Nguồn: https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/utilities/vector/vector_rotate.html

## 5. Checkpoint

Phân biệt `frequency`, `strength` và `phase delay`.
