# 038 — Lighting the Dungeon

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Modular Dungeon |
| **Bài học** | Lighting the Dungeon |
| **Thời lượng** | 9:37 |
| **Chủ đề chính** | Thiết lập ánh sáng cho hầm ngục |

## 1. Mục tiêu bài học

- Hiểu các loại Light trong Blender (Point, Sun, Spot, Area) và tình huống sử dụng phù hợp cho từng loại.
- Thiết lập ánh sáng không khí (mood lighting) đặc trưng cho hầm ngục: tối, tương phản cao, ánh sáng ấm từ đuốc.
- Điều chỉnh Power, Color, Radius của đèn để mô phỏng ánh lửa tự nhiên.
- Sử dụng World Properties để kiểm soát ánh sáng môi trường nền (ambient).

## 2. Nội dung chính

Blender cung cấp 4 loại Light cơ bản: **Point** (phát sáng đều mọi hướng từ một điểm — phù hợp mô phỏng ánh lửa đuốc), **Sun** (ánh sáng song song, cường độ tính theo W/m² không phụ thuộc khoảng cách — dùng cho ánh sáng ngoài trời xuyên qua khe hở nếu có), **Spot** (hình nón, có Blend/Spot Size — dùng cho các luồng sáng định hướng, ví dụ ánh sáng rọi qua cửa), **Area** (phát sáng từ một mặt phẳng — cho ánh sáng mềm, khuếch tán rộng).

Với không khí hầm ngục, chiến lược lighting điển hình: dùng nhiều **Point Light** công suất thấp-vừa đặt tại vị trí các cây đuốc (đã tạo ở bài trước), màu ấm (cam/vàng), Radius lớn hơn 0 một chút để tạo bóng đổ mềm hơn (Soft Shadows) thay vì bóng cứng như điểm sáng lý tưởng. Giữ tổng thể scene tối, chỉ để các vùng quanh đuốc sáng rõ, tạo tương phản cao — đặc trưng thị giác của không gian hầm ngục bí ẩn.

**World Properties** (tab hình quả địa cầu) kiểm soát ánh sáng môi trường nền thông qua Color và Strength của World Background — nên hạ Strength xuống rất thấp (gần 0) hoặc dùng màu tối lạnh (xanh xám) để tránh làm sáng đều toàn bộ scene, phá vỡ hiệu ứng tối tương phản mong muốn.

Có thể thêm một **Spot Light** hoặc **Sun Light** yếu để mô phỏng ánh sáng hắt qua cửa/khe hở, tạo điểm nhấn chiều sâu không gian, tương phản với vùng tối xung quanh. Khi render bằng Eevee, nên bật **Shadow** cho từng đèn quan trọng, và cân nhắc bật Ambient Occlusion (Render Properties) để tăng độ sâu bóng tại các góc khuất (nơi tường gặp sàn, chân cột).

## 3. Quy trình thực hành gợi ý

1. Hạ Strength của World Background xuống thấp để nền tối, tránh sáng đều toàn cảnh.
2. Đặt một Point Light tại mỗi vị trí đuốc trong scene, màu cam-vàng ấm, Power vừa phải.
3. Tăng Radius của Point Light một chút để có bóng đổ mềm tự nhiên hơn.
4. Thêm một nguồn sáng phụ (Spot/Sun yếu) mô phỏng ánh sáng hắt qua cửa nếu bố cục có cửa mở.
5. Bật Ambient Occlusion trong Render Properties để tăng chiều sâu bóng tại các góc khuất.
6. Render thử (F12) và so sánh vùng sáng/tối, điều chỉnh Power/Color cho đến khi đạt không khí mong muốn.
7. Lưu lại các thiết lập đèn thành một "lighting rig" có thể tái sử dụng cho các cảnh dungeon khác.

## 4. Phím tắt & công cụ liên quan

| Phím tắt / Thao tác | Chức năng |
|---|---|
| `Shift+A > Light` | Thêm nguồn sáng mới (Point/Sun/Spot/Area) |
| `F12` | Render ảnh tĩnh để kiểm tra ánh sáng |
| Light Properties (Power, Color, Radius) | Điều chỉnh cường độ, màu sắc, độ mềm bóng đổ |
| World Properties (Color, Strength) | Ánh sáng môi trường nền |
| Render Properties > Ambient Occlusion | Tăng chiều sâu bóng tại góc khuất |
| `Numpad 0` | Xem qua Camera để kiểm tra bố cục ánh sáng |

## 5. Lưu ý & lỗi thường gặp

- World Background Strength mặc định quá cao khiến toàn scene sáng đều, mất hiệu ứng tương phản dungeon.
- Radius = 0 ở Point Light tạo bóng đổ cứng, thiếu tự nhiên so với ánh lửa thật.
- Đặt quá nhiều đèn công suất cao khiến scene mất cảm giác tối bí ẩn đặc trưng.
- Quên bật Shadow cho một số đèn khiến object không đổ bóng, phá vỡ cảm giác chiều sâu không gian.

## 6. Checklist thực hành

- [ ] Đã hạ World Background Strength để giữ nền tối.
- [ ] Đã đặt Point Light màu ấm tại từng vị trí đuốc.
- [ ] Đã điều chỉnh Radius để có bóng đổ mềm tự nhiên.
- [ ] Đã bật Ambient Occlusion để tăng chiều sâu bóng.
- [ ] Đã render thử và tinh chỉnh cho đến khi đạt không khí mong muốn.

## 7. Tóm tắt

Bài học thiết lập hệ thống ánh sáng tạo không khí đặc trưng cho hầm ngục: tối, tương phản cao, ánh sáng ấm tập trung quanh các cây đuốc, kết hợp World Background tối và Ambient Occlusion để tăng chiều sâu — chuẩn bị cho bài lắp ráp và render toàn bộ scene cuối module.
