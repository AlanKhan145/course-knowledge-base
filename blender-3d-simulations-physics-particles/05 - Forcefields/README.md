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
| 001 | [Force Forcefield](001%20-%20Force%20Forcefield.md) | 27:38 | Lực hút và đẩy cơ bản |
| 002 | [Boids Forcefield](002%20-%20Boids%20Forcefield.md) | 5:46 | Tác động lên hành vi đàn |
| 003 | [Charge Forcefield](003%20-%20Charge%20Forcefield.md) | 2:44 | Tương tác giống điện tích |
| 004 | [Wind Forcefield](004%20-%20Wind%20Forcefield.md) | 2:29 | Gió theo hướng |
| 005 | [Vortex Forcefield](005%20-%20Vortex%20Forcefield.md) | 6:32 | Xoáy quanh tâm |
| 006 | [Magnetic Forcefield](006%20-%20Magnetic%20Forcefield.md) | 3:32 | Lực từ và hướng hút |
| 007 | [Harmonic Forcefield](007%20-%20Harmonic%20Forcefield.md) | 7:27 | Dao động quanh vị trí |
| 008 | [Lennard-Jones Forcefield](008%20-%20Lennard-Jones%20Forcefield.md) | 3:30 | Hút-đẩy theo khoảng cách |
| 009 | [Texture Forcefield](009%20-%20Texture%20Forcefield.md) | 9:40 | Biến thiên lực bằng texture |
| 010 | [Curve Guide Forcefield](010%20-%20Curve%20Guide%20Forcefield.md) | 13:54 | Dẫn particle theo curve |
| 011 | [Turbulence Forcefield](011%20-%20Turbulence%20Forcefield.md) | 3:56 | Nhiễu chuyển động |
| 012 | [Drag Forcefield](012%20-%20Drag%20Forcefield.md) | 3:03 | Giảm tốc và năng lượng |
| 013 | [Làm cỏ chuyển động theo gió](013%20-%20L%C3%A0m%20c%E1%BB%8F%20chuy%E1%BB%83n%20%C4%91%E1%BB%99ng%20theo%20gi%C3%B3.md) | 19:20 | Gió tác động lên cỏ |
| 014 | [Tạo đàn bướm bay](014%20-%20T%E1%BA%A1o%20%C4%91%C3%A0n%20b%C6%B0%E1%BB%9Bm%20bay.md) | 18:26 | Boid và field kết hợp |
| 015 | [Gió thổi tuyết](015%20-%20Gi%C3%B3%20th%E1%BB%95i%20tuy%E1%BA%BFt.md) | 8:26 | Tuyết rơi lệch theo gió |
| 016 | [Animation quái vật tóc](016%20-%20Animation%20qu%C3%A1i%20v%E1%BA%ADt%20t%C3%B3c.md) | 17:17 | Tóc phản ứng với field |

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
