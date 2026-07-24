# 012 — Simple Houses

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 01 — Introduction & Setup |
| **Bài học** | Simple Houses |
| **Thời lượng** | 6:07 |
| **Chủ đề chính** | Tạo các ngôi nhà low-poly đơn giản |

## 1. Mục tiêu bài học

- Áp dụng các kỹ năng đã học (Add Object, G/R/S, Extrude) để lắp ráp một hình khối phức tạp hơn từ nhiều primitive.
- Biết cách kết hợp Cube (thân nhà) và Cone hoặc Cube xoay 45° (mái nhà) để tạo hình ngôi nhà low-poly.
- Thực hành Duplicate (`Shift + D`) để nhân bản nhanh nhiều ngôi nhà tạo thành một khu vực nhỏ.
- Làm quen tư duy modeling low-poly: dùng ít polygon, hình khối đơn giản, dựa vào bố cục và tỷ lệ thay vì chi tiết nhỏ.

## 2. Nội dung chính

Modeling low-poly là phong cách xây dựng hình khối bằng số lượng polygon tối thiểu, tập trung vào silhouette (đường viền tổng thể) và tỷ lệ thay vì chi tiết bề mặt. Một ngôi nhà low-poly cơ bản thường gồm 2 phần:

- **Thân nhà**: một Cube được kéo dài (Scale theo trục Z, hoặc Extrude từ Plane) để tạo hình hộp chữ nhật.
- **Mái nhà**: có thể tạo bằng Cone 4 cạnh (Vertices = 4 trong Adjust Last Operation) xoay 45° để tạo hình mái chóp, hoặc bằng cách Extrude + Scale to 0 mặt trên của một Cube để tạo mái chóp nhọn, hoặc dùng một Cube khác được xoay và scale để tạo mái dốc hai bên (dạng nhà A-frame).

Việc lắp ráp các khối này lại yêu cầu kỹ năng đặt đúng vị trí (dùng Snapping đơn giản qua giá trị tọa độ Z chính xác trong N-panel, hoặc căn theo mắt kết hợp Numpad view) và tỷ lệ hợp lý giữa thân và mái.

Sau khi hoàn thiện một ngôi nhà, dùng `Shift + D` (Duplicate) để nhân bản nhanh nhiều bản sao, di chuyển và xoay ngẫu nhiên nhẹ để tạo cảm giác một cụm nhà tự nhiên hơn là các bản sao y hệt xếp thẳng hàng.

## 3. Quy trình thực hành gợi ý

1. Thêm một Cube, Scale theo Z (`S Z 1.5`) để làm thân nhà cao hơn.
2. Thêm một Cone, trong Adjust Last Operation đặt Vertices = 4, Scale và Rotate để nó vừa khít lên trên thân nhà làm mái chóp.
3. Dùng N-panel (`N`) để kiểm tra và tinh chỉnh chính xác Location Z sao cho mái nằm khít lên thân (không hở, không lún).
4. Chọn cả hai object (thân + mái), gộp tạm bằng Ctrl+J (Join) nếu muốn coi là một object duy nhất, hoặc giữ riêng nếu định gán vật liệu khác nhau cho mái/thân.
5. Dùng `Shift + D` để nhân bản ngôi nhà, di chuyển sang vị trí khác, xoay nhẹ bằng `R Z <góc>` để tạo bố cục tự nhiên.
6. Lặp lại 3-5 lần để tạo một cụm nhà nhỏ, quan sát tổng thể bằng Numpad 7 (Top View) để kiểm tra bố cục.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Thêm object | `Shift + A` |
| Move / Rotate / Scale | `G` / `R` / `S` |
| Duplicate (bản sao độc lập) | `Shift + D` |
| Join nhiều object thành một | `Ctrl + J` |
| Mở N-panel (Transform chính xác) | `N` |
| Xem Top View để kiểm tra bố cục | `Numpad 7` |
| Apply Transform (chuẩn hóa Scale/Rotation) | `Ctrl + A` |

## 5. Lưu ý & lỗi thường gặp

- Ghép mái và thân không khít (hở khe hoặc lún vào nhau) do không kiểm tra tọa độ Z chính xác trong N-panel — nên zoom cận và xem từ Front/Side View để căn chỉnh.
- Nhân bản (`Shift + D`) nhiều lần nhưng quên object gốc và bản sao có Scale/Rotation chưa Apply — dễ gây lệch tỷ lệ khi thêm modifier sau này.
- Xếp các ngôi nhà quá đều và thẳng hàng khiến bố cục trông thiếu tự nhiên — nên thêm biến thiên nhẹ về vị trí, góc xoay, và kích thước.
- Dùng quá nhiều Vertices cho Cone mái nhà (mặc định 32) sẽ phá vỡ tinh thần low-poly — nhớ giảm xuống 4 hoặc số cạnh phù hợp phong cách.

## 6. Checklist thực hành

- [ ] Đã tạo được thân nhà và mái nhà từ Cube/Cone.
- [ ] Đã căn chỉnh mái khớp với thân bằng N-panel.
- [ ] Đã dùng Shift+D để nhân bản thành một cụm nhà.
- [ ] Đã kiểm tra bố cục tổng thể từ Top View.

## 7. Tóm tắt

Bài thực hành Simple Houses là bước đầu áp dụng tổng hợp các kỹ năng Add Object, Transform và Duplicate để lắp ráp hình khối phức tạp hơn theo phong cách low-poly, chuẩn bị nền tảng trực tiếp cho dự án ngọn hải đăng ở các bài tiếp theo.
