# Bài 15 — Project: cá bơi procedural vô hạn

## 1. Mục tiêu

Tạo một Geometry Nodes setup có thể chạy tùy ý lâu mà không keyframe thủ công.

![Ảnh tham khảo node graph liên quan đến fish tail trong Geometry Nodes](https://blenderartists.org/uploads/default/original/4X/1/8/f/18f38c7a7c3bc77526d67e76c5caf44458f4d9f3.jpeg)

*Ảnh tham khảo trực tuyến: [Blender Artists — fish tail Geometry Nodes troubleshooting](https://blenderartists.org/t/my-fish-tail-is-going-all-over-the-place-in-geometry-node/1467949). Ảnh giao diện Geometry Nodes có Noise Texture, Subtract và Set Position.*

## 2. Yêu cầu chức năng

### 2.1 Motion

- Noise-driven path.
- Centered around một vùng xác định.
- Speed điều chỉnh được.
- Seed điều chỉnh được.

### 2.2 Orientation

- Cá hướng theo `P(t + Δt) - P(t)`.
- Không lật ngược khi đổi hướng.
- Local forward axis được tài liệu hóa.

### 2.3 Body deformation

- Sine wave.
- Phase delay dọc thân.
- Tail mạnh hơn head.
- Có thể bật/tắt deformation.

### 2.4 Organization

Node graph bắt buộc chia frame:

1. TIME
2. PATH
3. CENTER/SCALE
4. DIRECTION
5. ORIENTATION
6. BODY MASK
7. BODY WAVE
8. OUTPUT

## 3. Deliverable

- `.blend`.
- 1 GIF/MP4 preview.
- Screenshot full node graph.
- Bảng thông số.
- README giải thích local axes.
- 3 preset: slow, normal, fast.

## 4. Rubric

| Tiêu chí | Điểm |
|---|---:|
| Procedural path | 15 |
| Speed/seed parameterization | 10 |
| Orientation chính xác | 20 |
| Không flip/twist nghiêm trọng | 15 |
| Body wave có phase delay | 20 |
| Node organization | 10 |
| Documentation | 5 |
| Preview | 5 |
| **Tổng** | **100** |

## 5. Mở rộng

Có thể phát triển tiếp sang:

- bể cá giới hạn;
- obstacle avoidance;
- nhiều cá với seed khác nhau;
- schooling;
- proximity steering;
- kết hợp Geometry Nodes với armature;
- điều khiển vây theo turning state.
