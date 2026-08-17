# Module 05 — Forcefields

**16 bài • 2 giờ 34 phút**

Forcefield là lớp điều khiển giúp particle, boid, cloth hoặc object phản ứng với môi trường thay vì chỉ rơi theo gravity.

## Mục tiêu

- Hiểu Force, Boids, Charge, Wind, Vortex, Magnetic, Harmonic, Lennard-Jones, Texture, Curve Guide, Turbulence và Drag.
- Tạo chuyển động có hướng, có xoáy, có nhiễu hoặc có lực cản.
- Kết hợp force field với particle và animation để tạo cảm giác tự nhiên.

## Danh sách bài học

| # | Bài học | Thời lượng | Trọng tâm thực hành |
|---:|---|---:|---|
| 001 | Force Forcefield | 27:38 | Lực hút và đẩy cơ bản |
| 002 | Boids Forcefield | 5:46 | Tác động lên hành vi đàn |
| 003 | Charge Forcefield | 2:44 | Tương tác giống điện tích |
| 004 | Wind Forcefield | 2:29 | Gió theo hướng |
| 005 | Vortex Forcefield | 6:32 | Xoáy quanh tâm |
| 006 | Magnetic Forcefield | 3:32 | Lực từ và hướng hút |
| 007 | Harmonic Forcefield | 7:27 | Dao động quanh vị trí |
| 008 | Lennard-Jones Forcefield | 3:30 | Hút-đẩy theo khoảng cách |
| 009 | Texture Forcefield | 9:40 | Biến thiên lực bằng texture |
| 010 | Curve Guide Forcefield | 13:54 | Dẫn particle theo curve |
| 011 | Turbulence Forcefield | 3:56 | Nhiễu chuyển động |
| 012 | Drag Forcefield | 3:03 | Giảm tốc và năng lượng |
| 013 | Làm cỏ chuyển động theo gió | 19:20 | Gió tác động lên cỏ |
| 014 | Tạo đàn bướm bay | 18:26 | Boid và field kết hợp |
| 015 | Gió thổi tuyết | 8:26 | Tuyết rơi lệch theo gió |
| 016 | Animation quái vật tóc | 17:17 | Tóc phản ứng với field |

## Bài thực hành đề xuất

Dựng một scene có các hạt bay theo Curve Guide, đi qua một vùng Turbulence rồi chậm lại bởi Drag. Tạo thêm một shot cỏ hoặc tuyết để học cách điều chỉnh lực theo tỉ lệ scene.

## Nguyên tắc phối lực

```text
Lực chính: xác định hướng lớn
Turbulence: thêm sai lệch nhỏ
Drag: giới hạn tốc độ
Vortex: tạo quỹ đạo xoắn
Curve Guide: ép đi theo đường
```

Turbulence nên tạo bất định vừa đủ. Nếu biên độ quá lớn, particle mất hướng; nếu quá nhỏ, chuyển động vẫn cứng như keyframe.

## Ứng dụng cho vỏ trứng

Dùng Vortex hoặc Turbulence ở mức nhẹ để mảnh vỏ không bay theo các đường thẳng giống nhau. Drag giúp hãm mảnh sau cú bung. Có thể kết hợp một lực chính hướng ra ngoài với một vùng Turbulence nhỏ quanh điểm nứt.

## Checklist

- [ ] Biết lực nào tạo hướng và lực nào chỉ tạo biến thiên.
- [ ] Đã kiểm tra hướng, strength, falloff và khoảng tác động.
- [ ] Không dùng quá nhiều field mạnh cùng lúc.
- [ ] Đã kiểm tra kết quả trong camera shot chứ không chỉ ở viewport.

## Quiz Section 5 — trọng tâm ôn tập

So sánh Wind, Vortex, Turbulence và Drag; giải thích cách Curve Guide định hướng particle; và nêu cách giữ mảnh vỏ bay tự nhiên nhưng vẫn nằm trong khung hình.

