# 050 — Intro to Nodes

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 03 — Low-Poly Dinosaur |
| **Bài học** | Intro to Nodes |
| **Thời lượng** | 11:48 |
| **Chủ đề chính** | Giới thiệu Shader Nodes |

## 1. Mục tiêu bài học

- Hiểu cấu trúc cơ bản của Shader Editor và hệ thống node trong Blender.
- Làm quen với node Principled BSDF — node vật liệu mặc định và quan trọng nhất.
- Biết cách thêm, kết nối và xóa node bằng các thao tác cơ bản.
- Hiểu khái niệm Input/Output và cách dữ liệu chảy qua các node.

## 2. Nội dung chính

**Shader Editor** là không gian làm việc riêng để xây dựng vật liệu (Material) dưới dạng đồ thị node (node graph), thay vì chỉ chỉnh thông số trong Properties Panel. Có thể mở qua tab **Shading** ở đầu màn hình, hoặc đổi bất kỳ editor nào sang Shader Editor.

Khi tạo Material mới, Blender tự động thêm hai node cơ bản:

- **Principled BSDF**: node vật liệu tổng hợp (uber-shader) mô phỏng hầu hết loại bề mặt vật lý — kim loại, nhựa, da, vải... — thông qua các input chính:
  - **Base Color**: màu sắc nền của vật liệu.
  - **Metallic**: mức độ kim loại (0 = phi kim, 1 = kim loại hoàn toàn).
  - **Roughness**: độ nhám bề mặt (0 = bóng gương, 1 = nhám hoàn toàn, tán xạ ánh sáng nhiều).
  - **Specular/IOR**, **Normal**, **Emission**: các input khác cho phản xạ, bump mapping, tự phát sáng.
- **Material Output**: node đích cuối cùng, nhận tín hiệu **Surface** từ Principled BSDF để hiển thị/render ra bề mặt vật liệu.

Các thao tác cơ bản trong Shader Editor:

- **Shift+A**: mở menu Add để thêm node mới (Color, Converter, Input, Output...).
- Kéo từ một **socket output** (chấm tròn bên phải node) sang **socket input** (chấm tròn bên trái node khác) để kết nối (nối dây - "wire").
- **Ctrl+X** hoặc **Delete với Ctrl** (Ctrl+X): xóa node và tự động nối lại dây giữa các node liền kề (khác với Delete/X thông thường sẽ cắt đứt kết nối).
- **F**: nối nhanh (Make Link) giữa hai node đang chọn theo thứ tự output hợp lý nhất.
- **M**: Mute node (tạm tắt node khỏi đồ thị mà không xóa).

Một khái niệm quan trọng khác là **node group** — có thể chọn nhiều node rồi nhấn **Ctrl+G** để gộp thành một nhóm tái sử dụng được, hữu ích khi xây dựng các thiết lập vật liệu phức tạp lặp lại nhiều lần (ví dụ vật liệu núi gradient ở bài sau).

Ngoài Shader Editor, N-panel trong Shader Editor (phím N) hiển thị thêm thông tin về Item và Node đang chọn, tương tự N-panel trong viewport 3D.

## 3. Quy trình thực hành gợi ý

1. Chuyển sang tab Shading ở đầu màn hình Blender.
2. Chọn một object (ví dụ khủng long), quan sát Material đã gán ở bài trước hiện trong Shader Editor với node Principled BSDF và Material Output.
3. Thử chỉnh trực tiếp Base Color và Roughness trên node Principled BSDF, quan sát thay đổi trong viewport (chế độ Material Preview hoặc Rendered).
4. Thêm một node mới bất kỳ bằng Shift+A (ví dụ Color > RGB) để làm quen thao tác thêm node.
5. Kéo dây nối từ output của node RGB vào input Base Color của Principled BSDF, thay cho giá trị màu mặc định.
6. Thử xóa node RGB bằng Ctrl+X để thấy Blender tự nối lại dây, so sánh với phím X/Delete thông thường.
7. Dùng N-panel trong Shader Editor để xem thêm thông tin node đang chọn.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| Shift+A | Add Node |
| F | Make Link (nối nhanh giữa 2 node) |
| Ctrl+X | Xóa node và tự nối lại dây |
| X / Delete | Xóa node (cắt luôn kết nối) |
| M | Mute/Unmute node |
| Ctrl+G | Group node đã chọn thành Node Group |
| N | Mở/đóng N-panel trong Shader Editor |
| Tab | Đổi giữa Object Mode và chỉnh node group con (khi vào trong group) |

## 5. Lưu ý & lỗi thường gặp

- Nhầm giữa chế độ xem Solid và Material Preview/Rendered khiến không thấy thay đổi của node trong viewport — cần chuyển shading mode (phím Z) sang Material Preview hoặc Rendered.
- Kéo dây nối sai chiều (từ input sang input) sẽ không thực hiện được — luôn nối từ output (bên phải) sang input (bên trái).
- Xóa node bằng X/Delete thông thường sẽ làm đứt toàn bộ kết nối liên quan, nên dùng Ctrl+X nếu muốn giữ mạch nối.
- Quên rằng mỗi object có thể có Material riêng — chỉnh node trên một object không ảnh hưởng object khác trừ khi Material được dùng chung (linked).
- Thiết lập Roughness = 0 khiến vật liệu quá bóng gương, không phù hợp phong cách low-poly matte thường thấy trong các dự án dạng này.

## 6. Checklist thực hành

- [ ] Đã mở được Shader Editor qua tab Shading.
- [ ] Hiểu vai trò của node Principled BSDF và Material Output.
- [ ] Đã thử thêm, nối và xóa node cơ bản.
- [ ] Đã phân biệt được Ctrl+X và X/Delete khi xóa node.
- [ ] Đã quan sát thay đổi vật liệu trong chế độ Material Preview/Rendered.

## 7. Tóm tắt

Bài học đặt nền tảng cho việc sử dụng Shader Editor — công cụ mạnh mẽ để xây dựng vật liệu bằng node thay vì chỉ chỉnh thông số đơn giản. Hiểu rõ Principled BSDF, cách thêm/nối/xóa node là điều kiện cần để xây dựng vật liệu gradient phức tạp hơn cho núi ở bài tiếp theo.
