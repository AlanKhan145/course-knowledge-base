# Checklist chất lượng mô hình Blender Mech Sci-Fi

## 1. Trước khi tạo chi tiết

- [ ] Đã thống nhất hệ trục X/Y/Z và hướng phía trước robot.
- [ ] Có hình tham chiếu trước/bên/sau hoặc mốc tỉ lệ hợp lý.
- [ ] Origin của torso nằm đúng mặt đối xứng.
- [ ] Mirror có `Merge` và `Clipping` phù hợp.
- [ ] Không có mặt không cần thiết bị kẹt ở đường giữa.

## 2. Sau khi dựng thân và ngực

- [ ] Silhouette đọc rõ khi nhìn trước, bên và ba phần tư.
- [ ] Lớp ngực nhô có độ sâu, không là mặt phẳng treo.
- [ ] Loop và bevel không chồng hoặc tạo mép gãy ngoài ý muốn.
- [ ] Panel inset/extrude đúng vùng, không lệch khỏi viền.
- [ ] Shade Smooth không tạo vệt tối bất thường trên panel phẳng.

## 3. Sau khi dựng khoang và ba lô

- [ ] Các hốc có thành và đáy lùi vào rõ.
- [ ] Chi tiết cơ khí bên trong không xuyên lộn xộn.
- [ ] Sau Knife Cut Through, mặt khuất không có đường cắt dư nổi bật.
- [ ] Hộp chứa, khóa giữ và gờ phía sau có điểm tựa hợp lý.
- [ ] Các vùng ẩn khi chỉnh đã được hiện lại đúng lúc.

## 4. Sau khi thêm bình và ống

- [ ] Bình chứa có đầu nắp phân biệt với thân.
- [ ] Vòng đai có bề rộng/độ dày; không chỉ là một edge loop trơ.
- [ ] Pivot Point được đặt đúng khi scale/rotate cụm đai.
- [ ] Curve có Bevel Depth đủ để hiện tiết diện ống.
- [ ] Đường ống cong mềm và gắn vào đầu nối.
- [ ] Không có Curve bị Mirror lệch origin.

## 5. Trước khi bàn giao

- [ ] Đã kiểm tra normals (`Shift + N` ở mesh cần thiết).
- [ ] Đã rà mặt dư, mặt trùng, cạnh hở và geometry chồng.
- [ ] Các bu lông và đèn nằm đúng bề mặt, không lơ lửng.
- [ ] Object được đặt tên rõ; modifier không bị áp dụng vô cớ.
- [ ] Đã lưu file `.blend`, đóng và mở lại thử.
- [ ] Có ảnh kiểm tra trước, bên, sau và ba phần tư.
