# 027 — Pillar Details – Bevel

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Modular Dungeon |
| **Bài học** | Pillar Details – Bevel |
| **Thời lượng** | 9:54 |
| **Chủ đề chính** | Tạo chi tiết cột bằng Bevel |

## 1. Mục tiêu bài học

- Hiểu công cụ Bevel (cả Bevel Tool và Bevel modifier) và các tham số quan trọng: Width, Segments, Profile.
- Áp dụng Bevel để bo tròn cạnh sắc, tăng chất lượng bắt sáng cho cột đá.
- Dùng Bevel với nhiều Segments để tạo các đường gờ trang trí (moulding) ở đế và đỉnh cột.
- Phân biệt khi nào nên Bevel trực tiếp trong Edit Mode và khi nào nên dùng Bevel modifier.

## 2. Nội dung chính

Bevel là công cụ vát/bo cạnh, biến một cạnh sắc (edge) thành nhiều mặt nhỏ chuyển tiếp mượt. Trong Edit Mode, chọn edge hoặc vertex cần bevel rồi nhấn `Ctrl+B`, kéo chuột để chỉnh Width, cuộn chuột giữa để tăng/giảm Segments (số lượng mặt phân đoạn), có thể gõ số trực tiếp để nhập giá trị chính xác.

Tham số **Profile** điều chỉnh độ cong của bevel: giá trị 0.5 (mặc định) cho bevel đều, giá trị nhỏ hơn cho cạnh vát phẳng hơn, giá trị lớn hơn cho cạnh phồng — hữu ích khi tạo các đường gờ tròn kiểu kiến trúc cổ điển (ovolo/cavetto moulding) ở đế và đỉnh cột.

Với các cạnh cần bo đều toàn bộ object (ví dụ toàn bộ cạnh ngoài của cột để bắt sáng tốt khi render), nên dùng **Bevel modifier** (Add Modifier > Generate > Bevel) thay vì bevel thủ công từng cạnh — modifier này không phá hỏng mesh gốc, dễ chỉnh Width/Segments/Limit Method (Angle) để chỉ bevel các cạnh có góc lớn hơn ngưỡng, tránh bevel nhầm các cạnh phẳng.

Để tạo đường gờ trang trí nổi bật ở đế/đỉnh cột, có thể chọn riêng vài loop tại các vị trí bậc thang đã tạo ở bài trước, bevel với Segments cao (4–8) và Width vừa phải để tạo hiệu ứng đường chỉ (fillet) chạy quanh cột.

## 3. Quy trình thực hành gợi ý

1. Chọn các cạnh ngoài chính của cột (đế, đỉnh, các bậc thang).
2. Dùng `Ctrl+B`, kéo để chỉnh Width, cuộn chuột giữa để tăng Segments.
3. Thử điều chỉnh Profile để tạo dạng gờ tròn (moulding) thay vì vát phẳng.
4. Với các cạnh cần bo đồng nhất toàn object, thêm Bevel modifier, dùng Limit Method = Angle.
5. Kiểm tra kết quả dưới chế độ Shade Smooth + Auto Smooth để đảm bảo bevel bắt sáng đúng.
6. Áp dụng modifier (Apply) khi đã hài lòng với kết quả, nếu cần export mesh cố định.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| `Ctrl+B` | Bevel Tool (edge/vertex) |
| `Scroll chuột giữa` (khi đang Bevel) | Tăng/giảm Segments |
| `S` (khi đang Bevel) | Chuyển sang chỉnh Profile |
| `Ctrl+Shift+B` | Vertex Bevel (chamfer quanh 1 điểm) |
| Bevel modifier | Bo cạnh không phá mesh gốc, có Limit Method = Angle/Weight |
| `Ctrl+A > Apply` | Áp dụng modifier vào mesh |

## 5. Lưu ý & lỗi thường gặp

- Width bevel quá lớn so với kích thước mặt lân cận gây chồng lấn hình học (self-intersection).
- Không Apply Scale trước khi Bevel khiến Width bevel không đều theo các trục.
- Bevel modifier với Limit Method = None sẽ bo luôn cả các cạnh không cần thiết, làm tăng poly vô ích.
- Segments quá thấp (1–2) cho các đường gờ tròn khiến bề mặt trông góc cạnh thay vì mượt.

## 6. Checklist thực hành

- [ ] Đã bevel các cạnh ngoài chính của cột.
- [ ] Đã thử điều chỉnh Profile để tạo hiệu ứng gờ tròn.
- [ ] Đã thêm Bevel modifier với Limit Method phù hợp cho các cạnh còn lại.
- [ ] Đã kiểm tra kết quả dưới Shade Smooth + Auto Smooth.

## 7. Tóm tắt

Bevel là công cụ then chốt để biến khối blockout góc cạnh thành chi tiết kiến trúc mượt mà, có chiều sâu. Bài học luyện cách dùng cả Bevel Tool và Bevel modifier với các tham số Width, Segments, Profile để tạo đường gờ trang trí cho cột đá.
