# KHÓA HỌC — PROCEDURAL FISH ANIMATION BẰNG BLENDER GEOMETRY NODES

## 1. Mục tiêu

Khóa học này dùng nội dung tutorial làm **context kỹ thuật**, sau đó giảng lại thành một lesson/course độc lập. Trọng tâm là tạo một chuyển động cá hoàn toàn procedural: vị trí thay đổi theo thời gian, thân và vây có độ trễ, cá tự xoay theo hướng đang bơi, và thân có dao động hình sin để tạo cảm giác tự đẩy trong nước.

![Ví dụ tham khảo về animation cá procedural trong Blender](https://cdn.80.lv/api/upload/content/30/64f9c0c87a8a5.jpg)

*Ảnh tham khảo trực tuyến: [Procedural Goldfish Animations Created With Blender](https://80.lv/articles/procedural-goldfish-animations-created-with-blender/). Tham khảo hình ảnh một dự án animation cá procedural trong Blender. Không đóng gói lại ảnh; chỉ liên kết nguồn.*

## 2. Đối tượng

Phù hợp cho người đã biết giao diện Blender cơ bản và muốn học Geometry Nodes theo hướng animation/procedural motion.

## 3. Kết quả đầu ra

Sau khóa học, người học có thể:

1. Tạo quỹ đạo chuyển động không cần keyframe thủ công.
2. Dùng Noise Texture như một hàm tín hiệu theo thời gian.
3. Chuẩn hóa giá trị noise quanh tâm bằng phép trừ.
4. Điều khiển biên độ bằng Scale/Multiply.
5. Tạo độ trễ biến dạng theo vị trí dọc cơ thể.
6. Suy ra hướng chuyển động từ hai mẫu vị trí ở hai thời điểm gần nhau.
7. Căn rotation của cá theo vector vận tốc.
8. Tránh lật/xoắn sai trục bằng cách xử lý axis đúng.
9. Tạo body sway bằng `sin(time)`.
10. Đổi pattern bằng offset/seed mà không cần keyframe.
11. Chuyển workflow Blender 3.0 sang Blender mới.
12. Thiết kế một node graph sạch, có frame và nhóm tham số.

## 4. Cấu trúc

| Module | Chủ đề | Bài |
|---|---|---:|
| 01 | Nền tảng procedural motion | 2 |
| 02 | Quỹ đạo bằng Noise Texture | 2 |
| 03 | Time, speed và centering | 2 |
| 04 | Độ trễ thân/vây | 2 |
| 05 | Hướng bơi và rotation | 3 |
| 06 | Body wave và tuning | 2 |
| 07 | Migration Blender mới + project | 2 |

**Tổng: 15 bài.**

## 5. Ý tưởng toán học trung tâm

Ta xem vị trí cá là hàm của thời gian:

```text
P(t) = center + amplitude × centered_noise(t)
```

Hướng bơi xấp xỉ:

```text
D(t) = P(t + Δt) - P(t)
```

Dao động thân:

```text
wave(t, x) = A × sin(ωt + φ(x))
```

Trong đó `φ(x)` tạo độ lệch pha theo chiều dài thân, giúp đầu đi trước và đuôi/vây theo sau.

## 6. Cấu trúc thư mục

```text
khoa_hoc_geometry_nodes_ca_procedural/
├── 00_README.md
├── KHOA_HOC_GEOMETRY_NODES_CA_PROCEDURAL.md
├── IMAGE_SOURCES.md
├── REFERENCES.md
├── assets/
│   ├── gif/
│   │   └── procedural_fish_geometry_nodes.gif
│   └── images/
│       └── README.md
└── modules/
    ├── 01_nen_tang/
    ├── 02_noise_motion/
    ├── 03_time_centering/
    ├── 04_delay/
    ├── 05_orientation/
    ├── 06_body_wave/
    └── 07_modern_blender_project/
```
