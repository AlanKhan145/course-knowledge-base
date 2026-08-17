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
| 001 | Thiết lập Dynamic Paint | 13:57 | Canvas và Brush cơ bản |
| 002 | Dynamic Paint Surface | 24:25 | Surface format và output |
| 003 | Dynamic Paint Effects | 9:19 | Paint, wetmap và displacement |
| 004 | Initial Color trong Dynamic Paint | 5:40 | Màu ban đầu của canvas |
| 005 | Brush Settings | 6:59 | Kích thước và cách tác động |
| 006 | Brush Source Settings | 17:07 | Mesh, proximity và source |
| 007 | Brush Velocity Settings | 16:57 | Tác động theo tốc độ |
| 008 | Animation dấu chân | 39:36 | Vệt chân qua mặt đất |
| 009 | Hiệu ứng cào/xước bề mặt | 20:02 | Brush tạo dấu xước |
| 010 | Hiệu ứng sóng do thuyền tạo ra | 15:27 | Waves và object chuyển động |
| 011 | Hiệu ứng giọt mưa, splash và vũng nước | 26:29 | Nhiều brush trong một shot |

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

