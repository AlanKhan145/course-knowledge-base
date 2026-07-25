# 018 — Important Add-ons

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Fundamentals |
| **Bài học** | Important Add-ons |
| **Thời lượng** | 3:31 |
| **Chủ đề chính** | F2, LoopTools, Node Wrangler |

## 1. Mục tiêu bài học

- Biết bật add-on qua Edit > Preferences > Add-ons.
- Hiểu công dụng của F2 để lấp mặt nhanh.
- Hiểu công dụng của bộ công cụ LoopTools (Bridge, Circle, Relax, Space...).
- Hiểu công dụng của Node Wrangler trong Shader Editor.

## 2. Nội dung chính

Add-on được quản lý tại **Edit > Preferences > Add-ons**, tìm theo tên và tick vào checkbox để bật. Ba add-on đi kèm sẵn trong Blender (bundled) nhưng cần bật thủ công được giới thiệu ở đây:

**F2** cho phép lấp mặt (fill face) cực nhanh: chỉ cần chọn 2-3 vertex hoặc một vertex/edge cạnh một lỗ hổng rồi nhấn `F`, add-on sẽ tự suy luận và tạo face hợp lý hơn lệnh Fill mặc định của Blender — tiết kiệm nhiều thao tác khi vá lỗ hổng trong lúc modeling.

**LoopTools** bổ sung một bộ lệnh xử lý vòng cạnh (edge loop) nâng cao, truy cập qua `Edge > LoopTools` hoặc menu chuột phải trong Edit Mode: **Bridge** (tương tự Bridge Edge Loops có sẵn nhưng nhiều tùy chọn hơn), **Circle** (ép một vòng cạnh về hình tròn hoàn hảo), **Relax** (làm đều khoảng cách giữa các vertex trên loop, giảm méo mó), **Space** (phân bố lại vertex cách đều nhau dọc theo loop), cùng các lệnh Flatten, Curve, Gstretch.

**Node Wrangler** là add-on quan trọng cho Shader Editor (sẽ dùng nhiều ở Module 07): cung cấp các phím tắt như `Ctrl + Shift + Click` vào một node để xem preview kết quả ngay lập tức, `Ctrl + T` để tự động thêm bộ node Texture Coordinate + Mapping vào một Image Texture, và nhiều lệnh sắp xếp/kết nối node nhanh khác — giúp việc xây dựng shader nhanh hơn đáng kể so với nối node hoàn toàn thủ công.

## 3. Quy trình thực hành gợi ý

1. Mở Edit > Preferences > Add-ons, tìm và bật lần lượt "F2", "LoopTools", "Node Wrangler".
2. Trên một mesh có lỗ hổng nhỏ, chọn các vertex quanh lỗ, nhấn `F` để thử F2.
3. Dựng một mặt phẳng nhiều cạnh dạng đa giác lởm chởm, chọn vòng cạnh biên, chạy `LoopTools > Circle` để ép về hình tròn.
4. Vào Shading workspace, thêm một Image Texture node, nhấn `Ctrl + T` để Node Wrangler tự động sinh bộ node Mapping/Coordinate.
5. Giữ `Ctrl + Shift` và click vào một node bất kỳ để xem preview trực tiếp trong Shader Editor.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Bật/tắt add-on | Edit > Preferences > Add-ons |
| F2 — lấp mặt nhanh | `F` (sau khi bật add-on) |
| LoopTools menu | Chuột phải trong Edit Mode > LoopTools, hoặc `Edge > LoopTools` |
| Node Wrangler — preview node | `Ctrl + Shift + Click` vào node |
| Node Wrangler — thêm Mapping/Coordinate tự động | `Ctrl + T` (khi chọn Image Texture node) |

## 5. Lưu ý & lỗi thường gặp

- F2 chỉ thay thế lệnh Fill mặc định trong một số trường hợp — với hình học phức tạp vẫn nên kiểm tra lại face vừa tạo có đúng hướng normal hay không.
- LoopTools Circle có thể làm méo mesh nếu áp dụng trên một loop không thực sự nằm gần hình tròn ban đầu.
- Quên bật Node Wrangler là lý do phổ biến khiến người mới không thấy các phím tắt `Ctrl+T`/`Ctrl+Shift+Click` hoạt động khi làm theo hướng dẫn.

## 6. Checklist thực hành

- [ ] Đã bật thành công cả ba add-on F2, LoopTools, Node Wrangler.
- [ ] Đã dùng F2 để lấp một lỗ hổng mesh.
- [ ] Đã dùng LoopTools Circle hoặc Relax trên một vòng cạnh.
- [ ] Đã thử phím tắt Ctrl+T của Node Wrangler trong Shader Editor.

## 7. Tóm tắt

Ba add-on F2, LoopTools và Node Wrangler đều miễn phí và có sẵn trong Blender nhưng bị tắt mặc định — bật chúng ngay từ đầu giúp tiết kiệm rất nhiều thao tác lặp lại trong suốt các module modeling và shading về sau.
