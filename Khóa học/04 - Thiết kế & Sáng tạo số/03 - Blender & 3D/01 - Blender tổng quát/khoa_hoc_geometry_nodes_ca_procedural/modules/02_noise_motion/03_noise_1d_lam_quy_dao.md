# Bài 03 — Noise Texture 1D làm quỹ đạo procedural

## 1. Mục tiêu học tập

Biến Noise Texture thành nguồn chuyển động theo thời gian.

![Ví dụ Noise Texture được dùng trong Geometry Nodes](https://devtalk.blender.org/uploads/default/original/3X/e/d/edf95be9c8820a41d310fac78d06d7abae339954.png)

*Ảnh tham khảo trực tuyến: [Blender Developer Forum — Geometry Nodes noise displacement](https://devtalk.blender.org/t/geometry-nodes/16108?page=149). Ảnh minh họa Noise Texture trong Geometry Nodes.*

## 2. Noise không chỉ để tạo texture

Noise Texture trả về tín hiệu pseudo-random liên tục. Khi đầu vào thay đổi theo thời gian, output thay đổi mượt, phù hợp để tạo một đường chuyển động hữu cơ.

Blender mô tả Noise Texture là fractal Perlin noise. Ở chế độ 1D, giá trị `W` là tọa độ dùng để lấy mẫu noise.

Nguồn Blender 3.0: https://docs.blender.org/manual/en/3.0/modeling/geometry_nodes/texture/noise.html

## 3. Thiết lập khởi đầu

Một cấu hình đơn giản:

```text
Noise Dimensions: 1D
Scale: 1
Detail: 0
W: time
```

`Detail = 0` tạo tín hiệu đơn giản hơn, dễ kiểm soát. Sau khi graph hoạt động mới tăng detail nếu cần.

## 4. Vì sao noise tốt hơn Random Value mỗi frame?

Random độc lập theo frame gây giật. Noise liên tục theo input nên vị trí chuyển mượt.

## 5. Checkpoint

Giải thích vì sao đổi `W` theo thời gian tạo animation dù không keyframe.
