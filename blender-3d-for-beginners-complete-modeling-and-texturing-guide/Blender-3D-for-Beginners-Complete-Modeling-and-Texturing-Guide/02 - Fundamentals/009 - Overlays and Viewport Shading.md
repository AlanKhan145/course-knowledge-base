# 009 — Overlays and Viewport Shading

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Fundamentals |
| **Bài học** | Overlays and Viewport Shading |
| **Thời lượng** | 6:37 |
| **Chủ đề chính** | Tùy chỉnh thông tin hiển thị và chế độ shading trong Viewport |

## 1. Mục tiêu bài học

- Hiểu sự khác nhau giữa Overlays (lớp thông tin phủ lên) và Viewport Shading (cách render object).
- Biết bật/tắt các Overlay hữu ích: Wireframe, Grid, Statistics, Face Orientation.
- Nắm rõ 4 chế độ Viewport Shading: Wireframe, Solid, Material Preview, Rendered.
- Sử dụng thành thạo Pie Menu shading bằng phím `Z`.

## 2. Nội dung chính

**Overlays** là các lớp thông tin phụ được vẽ đè lên Viewport để hỗ trợ làm việc, không ảnh hưởng đến dữ liệu thực của scene. Nút bật/tắt Overlays nằm ở góc trên phải Viewport (icon hai vòng tròn chồng nhau), bấm vào mũi tên bên cạnh sẽ mở dropdown chi tiết. Các tùy chọn phổ biến gồm: **Wireframe** (hiện khung lưới cạnh của mọi object kể cả khi đang ở Solid Shading), **Grid** (bật/tắt lưới nền và chỉnh độ chia), **Statistics** (hiện số liệu Vertices/Edges/Faces/Triangles/Objects đang có trong scene hoặc đang chọn — rất hữu ích để theo dõi độ phức tạp mesh), và **Face Orientation** (tô màu xanh cho mặt hướng ra ngoài đúng chuẩn, đỏ cho mặt bị lật ngược normal — công cụ chẩn đoán lỗi normal quan trọng khi modeling).

**Viewport Shading** là 4 chế độ hiển thị vật liệu/bóng đổ của object, chọn qua 4 icon hình cầu ở góc trên phải Viewport (hoặc phím `Z`):
- **Wireframe**: chỉ hiện khung dây, nhìn xuyên qua mọi khối, hữu ích khi cần chọn vertex bị che khuất.
- **Solid**: hiển thị mặt đặc với ánh sáng giả lập đơn giản (matcap hoặc studio light), không cần material thật — chế độ làm việc mặc định khi modeling.
- **Material Preview**: hiển thị gần đúng vật liệu thực (Base Color, độ bóng, độ trong suốt cơ bản) dưới ánh sáng HDRI giả lập, không cần render engine đầy đủ.
- **Rendered**: hiển thị kết quả gần với ảnh render cuối cùng, bao gồm ánh sáng thật trong scene, bóng đổ, hiệu ứng theo Render Engine đang chọn (Eevee hoặc Cycles) — chi phí xử lý cao nhất.

Nhấn phím `Z` sẽ mở một **Pie Menu** cho phép chọn nhanh 1 trong 4 chế độ trên (hoặc thêm X-Ray) mà không cần rời tay khỏi khu vực làm việc; giữ `Z` và di chuột hướng tương ứng rồi thả ra để chọn nhanh hơn.

## 3. Quy trình thực hành gợi ý

1. Bật panel Overlays, thử tắt/bật Grid và Wireframe để quan sát khác biệt.
2. Bật Statistics, thêm vài object và quan sát số liệu Vertices/Faces thay đổi.
3. Bật Face Orientation trên một mesh, thử đảo normal của một mặt (Edit Mode > `Alt + N` > Flip) để thấy màu đỏ xuất hiện.
4. Nhấn `Z`, dùng Pie Menu chuyển qua lần lượt 4 chế độ Shading.
5. So sánh hình ảnh object giữa Solid và Material Preview khi đã gán một Material màu.
6. Chuyển sang Rendered Shading, quan sát cách ánh sáng trong scene ảnh hưởng thực tế lên object.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Mở Pie Menu chọn Shading | `Z` |
| Wireframe Shading | `Z` rồi chọn, hoặc `Shift + Z` chuyển nhanh |
| Bật/tắt X-Ray | `Alt + Z` |
| Toggle Overlays | Click icon Overlays trên header |
| Toggle Local View (cô lập object) | `/` (Numpad Slash) |

## 5. Lưu ý & lỗi thường gặp

- Nhầm giữa Wireframe Overlay (hiện thêm khung dây trên nền Solid) và Wireframe Shading (chỉ hiện khung dây, không có mặt) — đây là hai cơ chế độc lập.
- Rendered Shading dùng Cycles có thể chạy chậm trên máy yếu — nên dùng Eevee hoặc Material Preview khi cần xem nhanh trong lúc modeling.
- Quên bật Face Orientation dẫn đến việc không phát hiện normal bị lật, gây lỗi bóng đổ hoặc texture sai khi render sau này.
- X-Ray (`Alt + Z`) rất hữu ích để chọn xuyên qua mesh nhưng dễ quên đang bật, gây chọn nhầm vertex ở mặt sau.

## 6. Checklist thực hành

- [ ] Đã bật/tắt được ít nhất 3 loại Overlay khác nhau.
- [ ] Đã dùng Face Orientation để phát hiện một normal bị lật.
- [ ] Thành thạo chuyển 4 chế độ Shading qua phím `Z`.
- [ ] Hiểu sự khác nhau về hiệu năng giữa Solid, Material Preview và Rendered.

## 7. Tóm tắt

Overlays cung cấp thông tin chẩn đoán (thống kê, normal, lưới) mà không ảnh hưởng dữ liệu, còn Viewport Shading quyết định cách Blender hiển thị vật liệu và ánh sáng — kết hợp thành thạo cả hai giúp làm việc hiệu quả và phát hiện lỗi sớm trong quá trình modeling.
