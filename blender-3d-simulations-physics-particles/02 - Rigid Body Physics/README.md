# Module 02 — Rigid Body Physics

**30 bài • 8 giờ 20 phút**

Rigid Body là module quan trọng nhất cho các vật thể cứng: domino, mảnh vỏ trứng, bánh xe, gỗ, đá và các cơ cấu có khớp nối.

## Mục tiêu

- Hiểu Active, Passive, mass, collision shape, friction và restitution.
- Thiết lập Rigid Body World, cache và damping.
- Dùng Fixed, Point, Hinge, Slider, Piston, Generic, Spring và Motor Constraint.
- Dựng một hệ thống xe vượt địa hình bằng rigid body.
- Chuẩn bị scene để render và export sang engine khác.

## Danh sách bài học

| # | Bài học | Thời lượng | Trọng tâm thực hành |
|---:|---|---:|---|
| 001 | Texture miễn phí dùng trong khóa học | 5:41 | Chuẩn bị asset và quản lý tài nguyên |
| 002 | Các file `.blend` của khóa học | 0:10 | Mở, lưu và kiểm tra file mẫu |
| 003 | Bảng phím tắt Blender | 2:05 | Tạo bảng phím tắt dùng xuyên suốt khóa |
| 004 | Loại Rigid Body và Mass | 13:09 | Active, Passive và khối lượng |
| 005 | Collision Shape | 19:52 | Chọn Box, Sphere, Capsule, Mesh và Convex Hull |
| 006 | Friction và độ nảy | 9:34 | Điều khiển trượt và bật |
| 007 | Collision Margin | 4:26 | Khoảng đệm và lỗi va chạm |
| 008 | Rigid Body Collection | 2:36 | Giới hạn object tham gia simulation |
| 009 | Damping cho Translation và Rotation | 7:08 | Giảm vận tốc và xoay dư |
| 010 | Deactivation của Rigid Body | 6:24 | Cho vật thể ngủ khi đã ổn định |
| 011 | Mô phỏng Domino bằng Rigid Body | 42:51 | Xây chuỗi domino hoàn chỉnh |
| 012 | Thiết lập Rigid Body World | 32:30 | Solver, cache, speed và quality |
| 013 | Render animation Domino | 11:57 | Camera, ánh sáng và render preview |
| 014 | Sửa lỗi/crash khi dùng Rigid Body Constraint | 6:38 | Khoanh vùng lỗi constraint |
| 015 | Fixed Rigid Body Constraint | 11:18 | Khóa vật thể vào một điểm |
| 016 | Point Rigid Body Constraint | 32:36 | Khớp xoay quanh điểm |
| 017 | Hinge Rigid Body Constraint | 24:17 | Tạo bản lề và cửa xoay |
| 018 | Slider Rigid Body Constraint | 27:05 | Giới hạn chuyển động tịnh tiến |
| 019 | Piston Rigid Body Constraint | 17:40 | Cơ cấu đẩy-kéo |
| 020 | Generic Rigid Body Constraint | 45:50 | Giới hạn nhiều trục |
| 021 | Generic Spring Rigid Body Constraint | 22:38 | Tạo cơ cấu đàn hồi |
| 022 | Motor Rigid Body Constraint | 24:26 | Cấp chuyển động quay chủ động |
| 023 | Tạo hệ thống vật lý cho xe | 17:33 | Chassis, wheel và collision |
| 024 | Tạo Driver điều khiển xe | 16:54 | Liên kết tham số với driver |
| 025 | Kết nối các Rigid Body với xe | 17:00 | Hoàn thiện constraint của bánh xe |
| 026 | Tạo đường vượt chướng ngại vật | 15:29 | Dốc, gờ và địa hình |
| 027 | Thêm asset vào scene | 14:49 | Đặt asset mà không phá simulation |
| 028 | Texture cho scene | 13:36 | Hoàn thiện vật liệu và bối cảnh |
| 029 | Render animation hoàn chỉnh | 20:53 | Cache, render và kiểm tra shot |
| 030 | Export sang Unreal Engine hoặc Unity | 13:05 | Chuẩn bị dữ liệu cho game engine |

## Khái niệm phải nắm

```text
Rigid Body World
    ├── Active object: bị solver điều khiển
    ├── Passive object: collision tĩnh hoặc animation dẫn đường
    ├── Collision Shape: hình dùng để tính va chạm
    ├── Constraint: quan hệ giữa hai rigid body
    └── Cache: dữ liệu kết quả theo frame
```

## Bài thực hành đề xuất

Hoàn thành hai project nhỏ:

1. **Domino:** ít nhất 20 quân domino, một cú đẩy rõ ràng, vật liệu đơn giản và render preview 120 frame.
2. **Xe vượt địa hình:** bốn bánh, một chassis, ít nhất ba loại chướng ngại vật và một camera bám theo xe.

## Ứng dụng cho vỏ trứng

Tách vỏ trứng thành nhiều mảnh có origin và scale đúng. Dùng một object bên trong làm Passive hoặc Active tùy shot; dùng collision shape đơn giản cho mảnh vỏ; chỉ bật mesh collision khi silhouette yêu cầu. Deactivation và damping giúp mảnh vỏ không rung mãi sau va chạm.

## Checklist

- [ ] Đã Apply Scale trước khi thêm Rigid Body.
- [ ] Biết chọn collision shape theo độ chính xác và chi phí solver.
- [ ] Có thể tạo cache và xóa cache trước khi thử lại.
- [ ] Đã kiểm tra Active/Passive và collection tham gia world.
- [ ] Biết dùng constraint và giới hạn đúng trục.
- [ ] Render preview trước khi render toàn bộ animation.

## Quiz Section 2 — trọng tâm ôn tập

Giải thích sự khác nhau giữa Active và Passive; khi nào dùng Convex Hull thay cho Mesh; friction, restitution và damping tác động ra sao; vì sao object cần Apply Scale; và cách tìm constraint gây crash hoặc rung.

