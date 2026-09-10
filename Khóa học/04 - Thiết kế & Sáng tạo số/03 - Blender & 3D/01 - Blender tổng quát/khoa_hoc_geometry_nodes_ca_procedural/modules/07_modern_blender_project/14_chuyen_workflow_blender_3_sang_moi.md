# Bài 14 — Chuyển workflow Blender 3.0 sang Blender mới

## 1. Mục tiêu học tập

Không bị kẹt vì tên node cũ.

## 2. Mapping khái niệm

| Tutorial Blender 3.0 | Blender mới |
|---|---|
| Value + driver `#frame` | `Scene Time` |
| Align Euler to Vector | Align Rotation to Vector |
| Rotate Euler | Rotate Rotation / rotation utilities |
| Vector Math/Math | Vẫn dùng, socket/type có thể khác |
| Set Position | Vẫn là node nền tảng |
| Noise Texture | Vẫn dùng, nhiều tham số hơn |

`Scene Time` xuất thời gian theo giây hoặc frame. Trong manual Blender mới, `Align Euler to Vector` và `Rotate Euler` nằm trong nhóm deprecated, còn Rotation utilities mới gồm `Align Rotation to Vector`, `Axes to Rotation`, `Rotate Rotation` và `Rotate Vector`.

Nguồn:
- https://docs.blender.org/manual/en/3.5/modeling/geometry_nodes/input/scene/scene_time.html
- https://docs.blender.org/manual/en/5.2/modeling/geometry_nodes/utilities/rotation/align_rotation_to_vector.html
- https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/texture/noise.html

## 3. Nguyên tắc migration

Không cố “dịch node từng cái”. Hãy dịch **ý nghĩa**:

```text
time → path → future sample → direction → orientation → local deformation
```

## 4. Checkpoint

Nếu một node tutorial biến mất, hãy xác định input/output mà nó thực hiện trước khi tìm node thay thế.
