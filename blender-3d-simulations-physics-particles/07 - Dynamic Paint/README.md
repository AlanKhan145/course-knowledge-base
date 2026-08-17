# Module 07 — Dynamic Paint

**11 bài • 3 giờ 16 phút**

Dynamic Paint biến object thành Canvas hoặc Brush để tạo dấu vết, màu, displacement và mặt nước phản ứng theo chuyển động.

## Mục tiêu

- Thiết lập Canvas, Surface và Brush.
- Chọn format, frame range, wave hoặc paint effect phù hợp.
- Dùng velocity và source settings để tạo vệt chuyển động.
- Tạo dấu chân, vết xước, sóng thuyền, splash và vũng nước.

## Danh sách bài học

| # | Bài học | Thời lượng | Trọng tâm thực hành |
|---:|---|---:|---|
| 001 | [Thiết lập Dynamic Paint](001%20-%20Thi%E1%BA%BFt%20l%E1%BA%ADp%20Dynamic%20Paint.md) | 13:57 | Canvas và Brush cơ bản |
| 002 | [Dynamic Paint Surface](002%20-%20Dynamic%20Paint%20Surface.md) | 24:25 | Surface format và output |
| 003 | [Dynamic Paint Effects](003%20-%20Dynamic%20Paint%20Effects.md) | 9:19 | Paint, wetmap và displacement |
| 004 | [Initial Color trong Dynamic Paint](004%20-%20Initial%20Color%20trong%20Dynamic%20Paint.md) | 5:40 | Màu ban đầu của canvas |
| 005 | [Brush Settings](005%20-%20Brush%20Settings.md) | 6:59 | Kích thước và cách tác động |
| 006 | [Brush Source Settings](006%20-%20Brush%20Source%20Settings.md) | 17:07 | Mesh, proximity và source |
| 007 | [Brush Velocity Settings](007%20-%20Brush%20Velocity%20Settings.md) | 16:57 | Tác động theo tốc độ |
| 008 | [Animation dấu chân](008%20-%20Animation%20d%E1%BA%A5u%20ch%C3%A2n.md) | 39:36 | Vệt chân qua mặt đất |
| 009 | [Hiệu ứng cào/xước bề mặt](009%20-%20Hi%E1%BB%87u%20%E1%BB%A9ng%20c%C3%A0o%20-%20x%C6%B0%E1%BB%9Bc%20b%E1%BB%81%20m%E1%BA%B7t.md) | 20:02 | Brush tạo dấu xước |
| 010 | [Hiệu ứng sóng do thuyền tạo ra](010%20-%20Hi%E1%BB%87u%20%E1%BB%A9ng%20s%C3%B3ng%20do%20thuy%E1%BB%81n%20t%E1%BA%A1o%20ra.md) | 15:27 | Waves và object chuyển động |
| 011 | [Hiệu ứng giọt mưa, splash và vũng nước](011%20-%20Hi%E1%BB%87u%20%E1%BB%A9ng%20gi%E1%BB%8Dt%20m%C6%B0a%2C%20splash%20v%C3%A0%20v%C5%A9ng%20n%C6%B0%E1%BB%9Bc.md) | 26:29 | Nhiều brush trong một shot |

## Bài thực hành đề xuất

Tạo một mặt phẳng Canvas, cho một object Brush chạy qua để tạo dấu vết, sau đó dùng output của Dynamic Paint để điều khiển màu hoặc displacement. Thử thêm giọt mưa và so sánh kết quả khi thay đổi brush velocity.

## Ứng dụng cho animation

Dynamic Paint hữu ích để làm dấu chân quanh quả trứng, vết nứt lan trên bề mặt hoặc bụi màu bị quét đi. Với vỏ trứng, nên dùng nó như lớp visual phụ, còn việc vỡ mảnh vẫn do Rigid Body đảm nhiệm.

## Checklist

- [ ] Biết object nào là Canvas và object nào là Brush.
- [ ] Surface frame range khớp với shot.
- [ ] Đã cache sau khi chốt chuyển động brush.
- [ ] Output được nối đúng vào material hoặc displacement.
- [ ] Đã kiểm tra scale của canvas và brush.

## Quiz Section 7 — trọng tâm ôn tập

Giải thích Canvas, Brush, Surface và output; so sánh tác động của source với velocity; và nêu lý do một vệt sơn có thể xuất hiện sai frame.
