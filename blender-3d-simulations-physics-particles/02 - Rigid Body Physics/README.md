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
| 001 | [Texture miễn phí dùng trong khóa học](001%20-%20Texture%20mi%E1%BB%85n%20ph%C3%AD%20d%C3%B9ng%20trong%20kh%C3%B3a%20h%E1%BB%8Dc.md) | 5:41 | Chuẩn bị asset và quản lý tài nguyên |
| 002 | [Các file `.blend` của khóa học](002%20-%20C%C3%A1c%20file%20.blend%20c%E1%BB%A7a%20kh%C3%B3a%20h%E1%BB%8Dc.md) | 0:10 | Mở, lưu và kiểm tra file mẫu |
| 003 | [Bảng phím tắt Blender](003%20-%20B%E1%BA%A3ng%20ph%C3%ADm%20t%E1%BA%AFt%20Blender.md) | 2:05 | Tạo bảng phím tắt dùng xuyên suốt khóa |
| 004 | [Loại Rigid Body và Mass](004%20-%20Lo%E1%BA%A1i%20Rigid%20Body%20v%C3%A0%20Mass.md) | 13:09 | Active, Passive và khối lượng |
| 005 | [Collision Shape](005%20-%20Collision%20Shape.md) | 19:52 | Chọn Box, Sphere, Capsule, Mesh và Convex Hull |
| 006 | [Friction và độ nảy](006%20-%20Friction%20v%C3%A0%20%C4%91%E1%BB%99%20n%E1%BA%A3y.md) | 9:34 | Điều khiển trượt và bật |
| 007 | [Collision Margin](007%20-%20Collision%20Margin.md) | 4:26 | Khoảng đệm và lỗi va chạm |
| 008 | [Rigid Body Collection](008%20-%20Rigid%20Body%20Collection.md) | 2:36 | Giới hạn object tham gia simulation |
| 009 | [Damping cho Translation và Rotation](009%20-%20Damping%20cho%20Translation%20v%C3%A0%20Rotation.md) | 7:08 | Giảm vận tốc và xoay dư |
| 010 | [Deactivation của Rigid Body](010%20-%20Deactivation%20c%E1%BB%A7a%20Rigid%20Body.md) | 6:24 | Cho vật thể ngủ khi đã ổn định |
| 011 | [Mô phỏng Domino bằng Rigid Body](011%20-%20M%C3%B4%20ph%E1%BB%8Fng%20Domino%20b%E1%BA%B1ng%20Rigid%20Body.md) | 42:51 | Xây chuỗi domino hoàn chỉnh |
| 012 | [Thiết lập Rigid Body World](012%20-%20Thi%E1%BA%BFt%20l%E1%BA%ADp%20Rigid%20Body%20World.md) | 32:30 | Solver, cache, speed và quality |
| 013 | [Render animation Domino](013%20-%20Render%20animation%20Domino.md) | 11:57 | Camera, ánh sáng và render preview |
| 014 | [Sửa lỗi/crash khi dùng Rigid Body Constraint](014%20-%20S%E1%BB%ADa%20l%E1%BB%97i%20-%20crash%20khi%20d%C3%B9ng%20Rigid%20Body%20Constraint.md) | 6:38 | Khoanh vùng lỗi constraint |
| 015 | [Fixed Rigid Body Constraint](015%20-%20Fixed%20Rigid%20Body%20Constraint.md) | 11:18 | Khóa vật thể vào một điểm |
| 016 | [Point Rigid Body Constraint](016%20-%20Point%20Rigid%20Body%20Constraint.md) | 32:36 | Khớp xoay quanh điểm |
| 017 | [Hinge Rigid Body Constraint](017%20-%20Hinge%20Rigid%20Body%20Constraint.md) | 24:17 | Tạo bản lề và cửa xoay |
| 018 | [Slider Rigid Body Constraint](018%20-%20Slider%20Rigid%20Body%20Constraint.md) | 27:05 | Giới hạn chuyển động tịnh tiến |
| 019 | [Piston Rigid Body Constraint](019%20-%20Piston%20Rigid%20Body%20Constraint.md) | 17:40 | Cơ cấu đẩy-kéo |
| 020 | [Generic Rigid Body Constraint](020%20-%20Generic%20Rigid%20Body%20Constraint.md) | 45:50 | Giới hạn nhiều trục |
| 021 | [Generic Spring Rigid Body Constraint](021%20-%20Generic%20Spring%20Rigid%20Body%20Constraint.md) | 22:38 | Tạo cơ cấu đàn hồi |
| 022 | [Motor Rigid Body Constraint](022%20-%20Motor%20Rigid%20Body%20Constraint.md) | 24:26 | Cấp chuyển động quay chủ động |
| 023 | [Tạo hệ thống vật lý cho xe](023%20-%20T%E1%BA%A1o%20h%E1%BB%87%20th%E1%BB%91ng%20v%E1%BA%ADt%20l%C3%BD%20cho%20xe.md) | 17:33 | Chassis, wheel và collision |
| 024 | [Tạo Driver điều khiển xe](024%20-%20T%E1%BA%A1o%20Driver%20%C4%91i%E1%BB%81u%20khi%E1%BB%83n%20xe.md) | 16:54 | Liên kết tham số với driver |
| 025 | [Kết nối các Rigid Body với xe](025%20-%20K%E1%BA%BFt%20n%E1%BB%91i%20c%C3%A1c%20Rigid%20Body%20v%E1%BB%9Bi%20xe.md) | 17:00 | Hoàn thiện constraint của bánh xe |
| 026 | [Tạo đường vượt chướng ngại vật](026%20-%20T%E1%BA%A1o%20%C4%91%C6%B0%E1%BB%9Dng%20v%C6%B0%E1%BB%A3t%20ch%C6%B0%E1%BB%9Bng%20ng%E1%BA%A1i%20v%E1%BA%ADt.md) | 15:29 | Dốc, gờ và địa hình |
| 027 | [Thêm asset vào scene](027%20-%20Th%C3%AAm%20asset%20v%C3%A0o%20scene.md) | 14:49 | Đặt asset mà không phá simulation |
| 028 | [Texture cho scene](028%20-%20Texture%20cho%20scene.md) | 13:36 | Hoàn thiện vật liệu và bối cảnh |
| 029 | [Render animation hoàn chỉnh](029%20-%20Render%20animation%20ho%C3%A0n%20ch%E1%BB%89nh.md) | 20:53 | Cache, render và kiểm tra shot |
| 030 | [Export sang Unreal Engine hoặc Unity](030%20-%20Export%20sang%20Unreal%20Engine%20ho%E1%BA%B7c%20Unity.md) | 13:05 | Chuẩn bị dữ liệu cho game engine |

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
