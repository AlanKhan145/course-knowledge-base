# 010 — Lighting

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 01 — Introduction & Setup |
| **Bài học** | Lighting |
| **Thời lượng** | 10:14 |
| **Chủ đề chính** | Các loại ánh sáng trong Blender |

## 1. Mục tiêu bài học

- Biết 4 loại Light object trong Blender: Point, Sun, Spot, Area.
- Hiểu tham số Power, Color, và Radius/Size ảnh hưởng thế nào đến ánh sáng và bóng đổ.
- Biết dùng World Properties để thiết lập ánh sáng nền/môi trường (Background/HDRI cơ bản).
- Biết chọn loại đèn phù hợp cho từng tình huống trong scene.

## 2. Nội dung chính

Blender cung cấp 4 loại **Light object**, thêm qua `Shift + A > Light`:

- **Point**: phát sáng đều theo mọi hướng từ một điểm, giống bóng đèn tròn. Tham số chính: Power (đơn vị Watt), Radius (kích thước nguồn sáng — Radius lớn tạo bóng đổ mềm hơn).
- **Sun**: mô phỏng ánh sáng mặt trời — song song, cường độ đồng đều không suy giảm theo khoảng cách, vị trí đặt Sun không quan trọng, chỉ **góc xoay (rotation)** quyết định hướng chiếu sáng. Tham số Angle kiểm soát độ mềm của bóng đổ (góc nhỏ = bóng sắc nét như nắng gắt, góc lớn = bóng mềm như trời nhiều mây).
- **Spot**: ánh sáng hình nón từ một điểm, có Spot Size (góc mở của nón) và Blend (độ mềm viền nón) — dùng cho đèn pin, đèn sân khấu, đèn rọi.
- **Area**: phát sáng từ một mặt phẳng (hình chữ nhật, vuông, đĩa tròn, ellipse), tạo ánh sáng mềm mại tự nhiên và phản chiếu đẹp trên vật liệu bóng — thường dùng làm ánh sáng chính (key light) trong studio setup.

Ngoài Light object, **World Properties** (tab hình quả địa cầu) kiểm soát ánh sáng môi trường bao quanh toàn bộ scene — mặc định là một màu nền xám đơn giản phát sáng nhẹ (Strength). Có thể thay Color bằng một **Environment Texture** (ảnh HDRI 360°) để có ánh sáng môi trường chân thực và phản chiếu nền phong phú hơn — kỹ thuật này sẽ hữu ích khi lên ánh sáng cho scene ngọn hải đăng ở cuối module.

Nguyên tắc chọn đèn: Sun cho ánh sáng ngoài trời/mặt trời; Area cho ánh sáng chính mềm mại trong studio hoặc nội thất; Point cho bóng đèn/nguồn sáng nhỏ cụ thể; Spot cho ánh sáng định hướng có kiểm soát (đèn pha, đèn hải đăng).

## 3. Quy trình thực hành gợi ý

1. Xóa hoặc giữ nguyên object mặc định, thêm lần lượt 4 loại Light qua `Shift + A > Light`.
2. Với Point Light, thử tăng Radius từ 0 lên vài đơn vị, quan sát bóng đổ mềm dần trong Rendered View.
3. Với Sun Light, xoay object (`R` rồi kéo chuột hoặc nhập góc) để thay đổi hướng chiếu sáng, thử chỉnh Angle để thấy bóng đổ sắc nét/mềm.
4. Với Spot Light, chỉnh Spot Size và Blend để tạo vùng sáng hình nón rõ ràng.
5. Với Area Light, đổi Shape (Square/Rectangle/Disk) và Size, đặt gần một object có Roughness thấp để thấy phản chiếu vùng sáng rõ nét.
6. Vào World Properties, thử tăng Strength của Color nền và quan sát ánh sáng môi trường ảnh hưởng toàn scene.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt/Vị trí |
|---|---|
| Thêm Light | `Shift + A > Light` |
| Xoay Light (chỉnh hướng Sun) | `R` |
| Di chuyển Light | `G` |
| World Properties (ánh sáng nền) | Tab icon quả địa cầu |
| Xem kết quả ánh sáng | `Z` > Rendered |

## 5. Lưu ý & lỗi thường gặp

- Sun Light không bị ảnh hưởng bởi vị trí đặt — chỉ cần quan tâm góc xoay; đặt Sun ở đâu trong scene cũng cho kết quả như nhau.
- Radius/Size = 0 tạo bóng đổ cực kỳ sắc nét (point light lý tưởng về mặt toán học), không giống ánh sáng thực tế — nên luôn đặt giá trị nhỏ khác 0 để có bóng đổ tự nhiên hơn.
- Quên rằng World Strength mặc định vẫn phát sáng nhẹ toàn scene — đôi khi gây khó hiểu khi so sánh kết quả có/không có Light object.
- Power (Watt) của các loại đèn không cùng thang đo trực quan như trong đời thực — cần thử nghiệm và quan sát trực tiếp trong Rendered View thay vì suy đoán theo số Watt thực tế.

## 6. Checklist thực hành

- [ ] Đã thêm và thử nghiệm cả 4 loại Light (Point, Sun, Spot, Area).
- [ ] Đã hiểu ảnh hưởng của Radius/Angle/Size đến độ mềm bóng đổ.
- [ ] Đã chỉnh World Strength/Color để thấy ánh sáng môi trường.
- [ ] Đã biết chọn loại đèn phù hợp cho từng tình huống ánh sáng khác nhau.

## 7. Tóm tắt

Bốn loại Light (Point, Sun, Spot, Area) phục vụ các mục đích chiếu sáng khác nhau, kết hợp với World Properties cho ánh sáng môi trường tổng thể. Việc chọn đúng loại đèn và điều chỉnh Radius/Angle/Size là chìa khóa để tạo bóng đổ tự nhiên và không gian có chiều sâu.
