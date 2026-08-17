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
| 001 | Cloth Quality, Stiffness và các thiết lập cơ bản | 27:44 | Solver và độ cứng của vải |
| 002 | Internal Springs | 17:04 | Giữ khoảng cách nội bộ |
| 003 | Cloth Pressure | 13:32 | Làm phồng một bề mặt kín |
| 004 | Cloth Cache | 10:53 | Cache, playback và reset |
| 005 | Pinning và Sewing cho Cloth | 17:55 | Ghim và may mép |
| 006 | Cloth Collision | 13:36 | Va chạm với object |
| 007 | Property Weights | 11:27 | Phân vùng thuộc tính |
| 008 | Cloth Field Weights | 4:43 | Ảnh hưởng của force field |
| 009 | Thiết lập Collision | 25:49 | Chuẩn bị collider ổn định |
| 010 | Animation với Cloth | 13:36 | Kết hợp cloth với keyframe |
| 011 | Object tương tác với Cloth | 10:35 | Vật thể xuyên qua hoặc đẩy vải |
| 012 | Làm rèm sân khấu | 27:50 | Dự án rèm kéo và rủ xuống |
| 013 | Mô phỏng áo choàng nhân vật | 27:53 | Cloth trên nhân vật chuyển động |
| 014 | Mô phỏng quần áo nhân vật | 38:02 | Garment và collision phức tạp |
| 015 | Animation bơm căng quả bóng | 20:32 | Pressure và biến dạng kín |
| 016 | Export Cloth sang Unreal và Unity | 14:45 | Chuẩn bị cache để export |

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

