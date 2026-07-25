# 044 — The Sculpting Brushes

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 06 — Digital Sculpting |
| **Bài học** | The Sculpting Brushes |
| **Thời lượng** | 6:37 |
| **Chủ đề chính** | Các loại cọ sculpting chính và công dụng |

## 1. Mục tiêu bài học

- Nhận biết và phân biệt công dụng của các brush chính: Grab, Clay Strips, Inflate/Deflate, Smooth, Crease, Scrape, Snake Hook, Pinch, Paint Brush.
- Biết chọn phím tắt số để chuyển nhanh giữa các brush.

## 2. Nội dung chính

**Grab** (`G` trong Sculpt Mode hoặc phím riêng) kéo toàn bộ một vùng vertex theo chuyển động chuột như nắm và kéo đất sét — dùng để chỉnh tỷ lệ/vị trí lớn của các hình khối. **Clay Strips** là brush đắp/đẽo phổ biến nhất, thêm khối lượng theo từng dải phẳng chồng lớp — brush chủ lực trong giai đoạn blocking secondary forms. **Inflate** phồng bề mặt ra theo hướng normal (như bơm hơi), **Deflate** (giữ `Ctrl`) làm ngược lại, hóp bề mặt vào trong.

**Smooth** (giữ `Shift` khi dùng brush khác, hoặc chọn riêng) làm mượt/trung bình hóa bề mặt, xóa bớt chi tiết gồ ghề — dùng liên tục xen kẽ giữa các bước đắp chi tiết. **Crease** tạo nếp gấp/rãnh sắc nét (giống Clay Strips nhưng thiên về đường rãnh lõm sâu), hữu ích cho nếp nhăn, khe cơ. **Scrape** cạo phẳng bề mặt theo một mặt phẳng tham chiếu, tạo các mặt phẳng nhân tạo — hữu ích khi cần vùng phẳng xen giữa các khối cong (ví dụ mặt phẳng của lưỡi rìu hoặc gò má).

**Snake Hook** kéo dài hình học ra theo một "cái móc" theo chuyển động chuột, khác Grab ở chỗ nó thực sự kéo dài thêm khối lượng mới thay vì chỉ di chuyển khối cũ — dùng để kéo dài sừng, móng vuốt, tua. **Pinch** ép các vertex lại gần nhau tạo cạnh sắc/nếp gấp mảnh. **Paint Brush** (thường dùng ở chế độ Vertex Paint hoặc Texture Paint, xuất hiện trong Sculpt Mode khi vẽ Mask hoặc Color Attribute) tô màu/mask trực tiếp lên bề mặt sculpt.

## 3. Quy trình thực hành gợi ý

1. Thêm một Icosphere, Subdivision Surface hoặc Multiresolution để tăng mật độ, vào Sculpt Mode.
2. Thử lần lượt từng brush: Grab để kéo lệch một vùng, Clay Strips để đắp một khối gồ lên, Inflate để phồng một vùng khác.
3. Dùng Smooth (giữ Shift) để làm mượt lại sau mỗi thao tác.
4. Thử Crease để tạo một rãnh sâu, Scrape để cạo phẳng một vùng, Snake Hook để kéo dài một "gai" nhỏ ra khỏi bề mặt.
5. So sánh trực tiếp hiệu ứng của Pinch so với Crease trên cùng một vị trí.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Chuyển nhanh giữa brush | Phím số `1`-`9` hoặc thanh công cụ bên trái |
| Làm mượt tạm thời khi đang dùng brush khác | Giữ `Shift` |
| Đảo chiều hiệu ứng brush (ví dụ Inflate→Deflate) | Giữ `Ctrl` |
| Đổi bán kính brush | `F` rồi di chuột |
| Đổi cường độ brush | `Shift + F` rồi di chuột |

## 5. Lưu ý & lỗi thường gặp

- Dùng Clay Strips liên tục mà không xen kẽ Smooth khiến bề mặt trở nên gồ ghề, mất kiểm soát.
- Nhầm lẫn Scrape (cạo phẳng theo mặt phẳng tham chiếu, có thể "ăn" vào bề mặt) với Smooth (chỉ làm mượt, không cắt bớt khối lượng).
- Snake Hook dùng với Strength quá cao dễ kéo vertex ra quá xa, tạo hình dạng gai nhọn không mong muốn khó sửa lại.

## 6. Checklist thực hành

- [ ] Đã thử qua ít nhất 7 loại brush chính và ghi nhớ công dụng của từng loại.
- [ ] Đã biết dùng phím Shift để Smooth tạm thời khi đang cầm brush khác.
- [ ] Đã phân biệt được sự khác nhau giữa Crease, Pinch và Scrape.

## 7. Tóm tắt

Nắm rõ công dụng riêng của từng brush là nền tảng để sculpt có kiểm soát — mỗi brush phục vụ một mục đích khác nhau trong quy trình từ khối lớn đến chi tiết, và việc xen kẽ Smooth thường xuyên là chìa khóa giữ bề mặt sạch sẽ.
