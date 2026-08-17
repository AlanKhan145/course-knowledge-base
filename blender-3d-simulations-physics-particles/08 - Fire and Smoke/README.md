# Module 08 — Fire & Smoke

**15 bài • 3 giờ 53 phút**

Module này dùng hệ thống fluid để tạo lửa, khói, khí nóng và các shot có chuyển động thể tích.

## Mục tiêu

- Thiết lập Domain, Flow, Effector và cache.
- Hiểu Adaptive Domain, Border Collision, Fire/Gas, Guides và Collections.
- Điều khiển source, initial velocity và force field.
- Tối ưu viewport, preview và render thể tích.
- Hoàn thành shot lửa trại, xe phát nổ và tornado.

## Danh sách bài học

| # | Bài học | Thời lượng | Trọng tâm thực hành |
|---:|---|---:|---|
| 001 | [Thiết lập Fire & Smoke](001%20-%20Thi%E1%BA%BFt%20l%E1%BA%ADp%20Fire%20%26%20Smoke.md) | 5:13 | Flow, Domain và effector cơ bản |
| 002 | [Domain Settings](002%20-%20Domain%20Settings.md) | 16:25 | Kích thước, resolution và solver |
| 003 | [Border Collision và Adaptive Domain](003%20-%20Border%20Collision%20v%C3%A0%20Adaptive%20Domain.md) | 7:51 | Giới hạn và tối ưu vùng tính |
| 004 | [Fire/Gas Settings](004%20-%20Fire%20-%20Gas%20Settings.md) | 16:28 | Nhiệt, khói và mật độ |
| 005 | [Guides và Collections](005%20-%20Guides%20v%C3%A0%20Collections.md) | 9:33 | Điều hướng flow bằng guide |
| 006 | [Fire Cache](006%20-%20Fire%20Cache.md) | 11:20 | Cache và quản lý dữ liệu |
| 007 | [Thiết lập hiển thị trong Viewport](007%20-%20Thi%E1%BA%BFt%20l%E1%BA%ADp%20hi%E1%BB%83n%20th%E1%BB%8B%20trong%20Viewport.md) | 13:37 | Preview nhanh và debug |
| 008 | [Flow Settings](008%20-%20Flow%20Settings.md) | 10:42 | Loại flow và hành vi |
| 009 | [Flow Source và Initial Velocity](009%20-%20Flow%20Source%20v%C3%A0%20Initial%20Velocity.md) | 11:39 | Nguồn phát và vận tốc ban đầu |
| 010 | [Effector Objects](010%20-%20Effector%20Objects.md) | 13:21 | Vật cản trong domain |
| 011 | [Fluid Flow Forcefield](011%20-%20Fluid%20Flow%20Forcefield.md) | 11:50 | Lực tác động lên dòng khí |
| 012 | [Mô phỏng lửa trại](012%20-%20M%C3%B4%20ph%E1%BB%8Fng%20l%E1%BB%ADa%20tr%E1%BA%A1i.md) | 31:22 | Shot lửa trại hoàn chỉnh |
| 013 | [Tạo cảnh xe phát nổ](013%20-%20T%E1%BA%A1o%20c%E1%BA%A3nh%20xe%20ph%C3%A1t%20n%E1%BB%95.md) | 45:06 | Lửa, khói và debris trong shot |
| 014 | [Animation Tornado](014%20-%20Animation%20Tornado.md) | 22:22 | Xoáy thể tích và chuyển động |
| 015 | [Export Fire sang Unreal Engine](015%20-%20Export%20Fire%20sang%20Unreal%20Engine.md) | 6:22 | Chuẩn bị dữ liệu export |

## Bài thực hành đề xuất

Làm một ngọn lửa nhỏ trong domain thấp để kiểm tra flow và material. Sau khi cache ổn định, tăng resolution và dựng shot lửa trại có camera cố định. Chỉ sau đó mới thử explosion hoặc tornado.

## Ứng dụng cho trứng nở

Fire & Smoke không bắt buộc cho shot vỏ trứng vỡ. Có thể dùng một ít bụi hoặc hơi nóng để tăng cảm giác năng lượng, nhưng cần giữ volume nhẹ để không che mất silhouette của vỏ và nhân vật.

## Checklist

- [ ] Domain bao phủ toàn bộ vùng simulation nhưng không dư quá nhiều.
- [ ] Flow và Effector nằm đúng collection.
- [ ] Adaptive Domain chỉ dùng khi không làm mất vùng cần thiết.
- [ ] Đã kiểm tra voxel resolution bằng preview thấp.
- [ ] Cache được lưu trước khi render final.
- [ ] Material volume được kiểm tra ở đúng engine render.

## Quiz Section 8 — trọng tâm ôn tập

Giải thích Domain, Flow và Effector; Adaptive Domain giúp gì; vì sao resolution cao làm cache chậm; và cách khoanh vùng lỗi khi lửa không xuất hiện.
