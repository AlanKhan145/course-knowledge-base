# Module 03 — Cloth Physics

**16 bài • 4 giờ 56 phút**

Module này tập trung vào vải, áp lực, đường may, collision và cách dùng cloth với animation của nhân vật hoặc object.

## Mục tiêu

- Hiểu Quality, Stiffness, Damping, Internal Springs và Pressure.
- Ghim đỉnh, may mép và tạo hình vải có chủ đích.
- Thiết lập collision giữa cloth và cơ thể hoặc đạo cụ.
- Dùng Vertex Group và Property Weights để điều khiển vùng vải.
- Cache, kiểm tra lỗi và export cloth animation.

## Danh sách bài học

| # | Bài học | Thời lượng | Trọng tâm thực hành |
|---:|---|---:|---|
| 001 | [Cloth Quality, Stiffness và các thiết lập cơ bản](001%20-%20Cloth%20Quality%2C%20Stiffness%20v%C3%A0%20c%C3%A1c%20thi%E1%BA%BFt%20l%E1%BA%ADp%20c%C6%A1%20b%E1%BA%A3n.md) | 27:44 | Solver và độ cứng của vải |
| 002 | [Internal Springs](002%20-%20Internal%20Springs.md) | 17:04 | Giữ khoảng cách nội bộ |
| 003 | [Cloth Pressure](003%20-%20Cloth%20Pressure.md) | 13:32 | Làm phồng một bề mặt kín |
| 004 | [Cloth Cache](004%20-%20Cloth%20Cache.md) | 10:53 | Cache, playback và reset |
| 005 | [Pinning và Sewing cho Cloth](005%20-%20Pinning%20v%C3%A0%20Sewing%20cho%20Cloth.md) | 17:55 | Ghim và may mép |
| 006 | [Cloth Collision](006%20-%20Cloth%20Collision.md) | 13:36 | Va chạm với object |
| 007 | [Property Weights](007%20-%20Property%20Weights.md) | 11:27 | Phân vùng thuộc tính |
| 008 | [Cloth Field Weights](008%20-%20Cloth%20Field%20Weights.md) | 4:43 | Ảnh hưởng của force field |
| 009 | [Thiết lập Collision](009%20-%20Thi%E1%BA%BFt%20l%E1%BA%ADp%20Collision.md) | 25:49 | Chuẩn bị collider ổn định |
| 010 | [Animation với Cloth](010%20-%20Animation%20v%E1%BB%9Bi%20Cloth.md) | 13:36 | Kết hợp cloth với keyframe |
| 011 | [Object tương tác với Cloth](011%20-%20Object%20t%C6%B0%C6%A1ng%20t%C3%A1c%20v%E1%BB%9Bi%20Cloth.md) | 10:35 | Vật thể xuyên qua hoặc đẩy vải |
| 012 | [Làm rèm sân khấu](012%20-%20L%C3%A0m%20r%C3%A8m%20s%C3%A2n%20kh%E1%BA%A5u.md) | 27:50 | Dự án rèm kéo và rủ xuống |
| 013 | [Mô phỏng áo choàng nhân vật](013%20-%20M%C3%B4%20ph%E1%BB%8Fng%20%C3%A1o%20cho%C3%A0ng%20nh%C3%A2n%20v%E1%BA%ADt.md) | 27:53 | Cloth trên nhân vật chuyển động |
| 014 | [Mô phỏng quần áo nhân vật](014%20-%20M%C3%B4%20ph%E1%BB%8Fng%20qu%E1%BA%A7n%20%C3%A1o%20nh%C3%A2n%20v%E1%BA%ADt.md) | 38:02 | Garment và collision phức tạp |
| 015 | [Animation bơm căng quả bóng](015%20-%20Animation%20b%C6%A1m%20c%C4%83ng%20qu%E1%BA%A3%20b%C3%B3ng.md) | 20:32 | Pressure và biến dạng kín |
| 016 | [Export Cloth sang Unreal và Unity](016%20-%20Export%20Cloth%20sang%20Unreal%20v%C3%A0%20Unity.md) | 14:45 | Chuẩn bị cache để export |

## Bài thực hành đề xuất

Dựng một tấm vải có pin group ở mép trên, một collider hình trụ phía sau và một object chuyển động đi qua. Sau đó làm thêm một quả bóng vải được bơm căng bằng Pressure. So sánh kết quả khi tăng quality, giảm time step và thay đổi collision thickness.

## Quy trình kiểm tra

```text
Mesh đủ subdivisions
    ↓
Apply Scale và kiểm tra normals
    ↓
Tạo pin group / collider
    ↓
Thiết lập Cloth
    ↓
Play đoạn ngắn
    ↓
Cache sau khi topology và animation ổn định
```

## Checklist

- [ ] Vải có đủ topology cho độ cong cần thiết.
- [ ] Pinning không giữ nhầm toàn bộ mesh.
- [ ] Collider có scale và khoảng đệm hợp lý.
- [ ] Đã kiểm tra self-collision khi cần.
- [ ] Đã cache sau khi chốt animation nhân vật.
- [ ] Không dùng subdivision quá nặng trước khi solver ổn định.

## Quiz Section 3 — trọng tâm ôn tập

Giải thích pinning, sewing, pressure, internal springs và property weights; nêu ba nguyên nhân khiến vải xuyên collider; và mô tả lúc nào nên cache lại simulation.
