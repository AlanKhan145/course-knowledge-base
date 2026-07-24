# 044 — Dino Curves

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 03 — Low-Poly Dinosaur |
| **Bài học** | Dino Curves |
| **Thời lượng** | 7:48 |
| **Chủ đề chính** | Điều chỉnh đường cong hình dáng |

## 1. Mục tiêu bài học

- Tinh chỉnh lại đường cong tổng thể của thân, lưng và đuôi khủng long cho tự nhiên hơn.
- Sử dụng Proportional Editing để làm mượt các thay đổi trên nhiều vertex cùng lúc.
- Kiểm soát silhouette (đường viền bao quanh) của mesh khi nhìn từ nhiều góc.
- Cân bằng giữa độ cong mượt và phong cách low-poly góc cạnh.

## 2. Nội dung chính

Sau khi có khối thân cơ bản, bước tiếp theo là tinh chỉnh **đường cong (curves)** của silhouette — đường viền lưng, bụng, cổ và đuôi — để nhân vật trông sống động và đúng tỉ lệ hơn thay vì chỉ là một khối hộp kéo dài. Đây không phải là Curve Object trong Blender mà là việc chỉnh sửa đường cong hình dáng của mesh thông qua vị trí các vertex.

Công cụ chính cho bước này là **Proportional Editing** (phím O để bật/tắt): khi di chuyển một vertex, các vertex lân cận trong bán kính ảnh hưởng cũng di chuyển theo với mức độ giảm dần, tạo ra hiệu ứng kéo/uốn mượt mà thay vì gãy khúc đột ngột. Bán kính ảnh hưởng điều chỉnh bằng cuộn chuột (Scroll Wheel) trong lúc transform, và hiển thị bằng vòng tròn đứt nét quanh điểm pivot.

Các kiểu Falloff của Proportional Editing (chọn trong dropdown cạnh nút O trên thanh header):

- **Smooth**: chuyển tiếp mượt, thường dùng nhất cho các đường cong hữu cơ.
- **Sphere**: ảnh hưởng giảm theo hình cầu, dùng khi cần độ phồng đều.
- **Root/Linear/Sharp**: các kiểu chuyển tiếp khác nhau tùy nhu cầu tạo hình.

Khi chỉnh đường cong lưng và đuôi, nên làm việc song song ở cả view Side (để chỉnh độ cong lên xuống) và view Front (để giữ đối xứng qua Mirror Modifier), thường xuyên xoay góc nhìn Perspective để kiểm tra hình khối tổng thể không chỉ đúng theo 2D reference mà còn hợp lý ở 3D.

## 3. Quy trình thực hành gợi ý

1. Vào Edit Mode, bật Proportional Editing (O) và chọn Falloff là Smooth.
2. Chọn vertex trên sống lưng, dùng G kèm cuộn chuột để mở rộng vùng ảnh hưởng, kéo tạo độ cong tự nhiên.
3. Lặp lại cho đường bụng, gốc đuôi và điểm nối cổ-thân.
4. Tắt Proportional Editing khi cần chỉnh chính xác từng vertex riêng lẻ (các điểm gãy góc cố ý cho phong cách low-poly).
5. Xoay view Perspective liên tục để kiểm tra silhouette từ nhiều góc, không chỉ theo ảnh reference 2D.
6. So sánh với ảnh nền ở cả Front và Side để đảm bảo tỉ lệ không bị lệch sau khi chỉnh cong.
7. Lưu file và tạo bản duplicate/backup trước khi sang bước tạo chân ở bài tiếp theo.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| O | Bật/tắt Proportional Editing |
| Scroll Wheel (khi transform) | Tăng/giảm bán kính ảnh hưởng Proportional |
| G, R, S | Move / Rotate / Scale |
| Alt+Scroll (trên icon Proportional) | Đổi kiểu Falloff |
| Numpad . | Zoom vào vertex/object đang chọn (View Selected) |
| Numpad 5 | Chuyển Perspective/Orthographic để kiểm tra hình khối 3D |

## 5. Lưu ý & lỗi thường gặp

- Bán kính Proportional Editing quá lớn làm ảnh hưởng lan sang cả những phần không muốn chỉnh (ví dụ chân vừa mới dựng).
- Quên tắt Proportional Editing khi cần di chuyển chính xác một vertex đơn lẻ, gây lệch hình không mong muốn.
- Chỉ chỉnh theo view Orthographic mà không kiểm tra Perspective dễ khiến silhouette bị "dẹt" hoặc thiếu chiều sâu.
- Làm cong quá mượt có thể phá vỡ phong cách low-poly góc cạnh đặc trưng của dự án.
- Mirror Modifier không hiển thị đúng nếu Clipping chưa bật khi chỉnh vertex gần trục đối xứng.

## 6. Checklist thực hành

- [ ] Đường cong lưng và bụng đã tự nhiên hơn, bám sát ảnh tham chiếu.
- [ ] Đã sử dụng Proportional Editing với Falloff phù hợp cho từng vùng.
- [ ] Đã kiểm tra silhouette ở nhiều góc nhìn Perspective.
- [ ] Đối xứng qua Mirror Modifier vẫn chính xác sau khi chỉnh cong.
- [ ] Tỉ lệ tổng thể vẫn khớp với ảnh reference Front/Side.

## 7. Tóm tắt

Bài học tập trung tinh chỉnh silhouette của khủng long bằng Proportional Editing, giúp thân hình trông tự nhiên và cân đối hơn trong khi vẫn giữ được phong cách low-poly. Đây là bước hoàn thiện hình khối tổng thể trước khi bắt đầu thêm các chi tiết như chân và móng vuốt.
