# Bài 01 — Từ keyframe sang procedural animation

## 1. Mục tiêu học tập

Hiểu sự khác nhau giữa animation được vẽ bằng keyframe và animation được sinh bởi một hàm theo thời gian.

## 2. Keyframe và procedural

Trong animation truyền thống, animator xác định các trạng thái ở frame cụ thể. Procedural animation thay thế một phần công việc đó bằng hàm toán học.

Ví dụ:

```text
position = f(time)
rotation = g(position_now, position_future)
body_wave = h(time, position_along_body)
```

Nhờ vậy chuyển động có thể chạy rất dài mà không cần keyframe cho từng chu kỳ.

## 3. Tại sao Geometry Nodes phù hợp?

Geometry Nodes có thể thao tác trực tiếp với vị trí, rotation và thuộc tính của geometry bằng field. `Set Position` là node cốt lõi để thay đổi vị trí điểm/instance. Tài liệu Blender 3.0 mô tả `Position` là vị trí mới và `Offset` là phần dịch thêm.

Nguồn: https://docs.blender.org/manual/en/3.0/modeling/geometry_nodes/geometry/set_position.html

## 4. Giới hạn cần hiểu

Procedural không đồng nghĩa tự nhiên về mặt sinh học. Nếu chỉ dịch mesh và xoay cứng, cá có thể trông như một vật thể bay. Vì vậy cần thêm hướng bơi, delay dọc thân và wave.

## 5. Checkpoint

Nêu ba phần của chuyển động cá có thể procedural hóa và một phần vẫn nên dùng rig/shape deformation.
