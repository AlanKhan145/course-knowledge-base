# 022 — Creating a Scene to Render Our Models

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Fundamentals |
| **Bài học** | Creating a Scene to Render Our Models |
| **Thời lượng** | 14:37 |
| **Chủ đề chính** | Dự án tổng hợp: dựng scene studio và render bằng Cycles |

## 1. Mục tiêu bài học

- Tổng hợp toàn bộ kỹ năng của Module 02 vào một bài thực hành hoàn chỉnh.
- Dựng được một backdrop dạng "infinity curve" đơn giản để đặt model lên.
- Thiết lập camera đúng góc nhìn và ánh sáng cơ bản.
- Render được một tấm ảnh tĩnh bằng Cycles.

## 2. Nội dung chính

Đây là bài thực hành khép lại Module 02, tổng hợp toàn bộ kỹ năng: điều hướng, Object/Edit Mode, modifier, vật liệu — để dựng một **scene trưng bày (studio scene)** dùng chung cho việc render mọi model nhỏ làm ra trong các module tiếp theo.

Backdrop thường được dựng từ một **Plane** được Extrude lên và Bevel một góc để tạo hiệu ứng "infinity curve" (nền sàn uốn cong liền mạch lên tường, không có đường chân trời gãy khúc) — kỹ thuật studio ảnh thường dùng. **Camera** (`Shift + A > Camera`) được đặt và xoay để nhìn xuống khu vực trưng bày, có thể dùng `Ctrl + Numpad 0` để khớp góc nhìn viewport hiện tại vào camera cho dễ căn chỉnh, hoặc `N > View > Camera to View` để tự do bay camera trong khi xem qua ống kính.

Ánh sáng cơ bản có thể dùng một **Area Light** chính (key light) phía trên/xéo một bên, kết hợp một **World** màu xám nhạt hoặc HDRI đơn giản để có ánh sáng môi trường lấp bóng tối (fill light) tự nhiên, tránh vùng tối hoàn toàn thiếu chi tiết. Cuối cùng, chuyển **Render Engine** sang **Cycles** (Render Properties > Render Engine) để có chất lượng ánh sáng/bóng đổ/phản chiếu chân thực, chỉnh **Samples** đủ cao để giảm nhiễu (noise), rồi render bằng `F12`.

## 3. Quy trình thực hành gợi ý

1. Thêm một Plane lớn, vào Edit Mode, extrude một cạnh lên thành tường, bevel góc nối sàn-tường với Segments cao để tạo đường cong mượt (infinity curve).
2. Thêm Camera, dùng `Ctrl + Numpad 0` để đặt góc nhìn hiện tại làm camera, tinh chỉnh Focal Length trong Object Data Properties nếu cần.
3. Thêm một Area Light làm key light, xoay/di chuyển để ánh sáng chiếu xéo lên model.
4. Vào World Properties, đặt màu Background xám nhạt hoặc tải một HDRI đơn giản làm ánh sáng môi trường.
5. Đặt một model đã dựng trước đó (ví dụ khối hình từ các bài tập) vào giữa scene, gán vật liệu cơ bản.
6. Chuyển Render Engine sang Cycles, tăng Samples, nhấn `F12` để render và lưu ảnh kết quả (Image > Save As trong cửa sổ Render).

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Thêm Camera | `Shift + A > Camera` |
| Đặt camera theo góc nhìn hiện tại | `Ctrl + Numpad 0` |
| Xem qua camera | `Numpad 0` |
| Render ảnh tĩnh | `F12` |
| Lưu ảnh render | Image > Save As (trong cửa sổ Render Result) |

## 5. Lưu ý & lỗi thường gặp

- Quên chuyển Viewport Shading/Render Engine sang Cycles hoặc Eevee phù hợp khiến ảnh render trông khác hẳn so với preview trong viewport.
- Ánh sáng chỉ có một Area Light duy nhất, không có World/fill light, dễ tạo vùng đổ bóng đen thui thiếu chi tiết.
- Samples quá thấp trong Cycles gây nhiễu hạt (fireflies/noise) rõ rệt, đặc biệt ở vùng bóng tối — cần tăng Samples hoặc bật Denoise.
- Backdrop không đủ lớn hoặc góc bevel quá gắt sẽ lộ rõ đường chân trời gãy khúc, phá vỡ hiệu ứng infinity curve.

## 6. Checklist thực hành

- [ ] Đã dựng được backdrop dạng infinity curve.
- [ ] Đã đặt và căn chỉnh Camera đúng góc nhìn mong muốn.
- [ ] Đã thiết lập ánh sáng key light và world light cơ bản.
- [ ] Đã render thành công một ảnh tĩnh bằng Cycles và lưu lại kết quả.

## 7. Tóm tắt

Bài thực hành này biến tất cả kiến thức rời rạc của Module 02 thành một quy trình hoàn chỉnh từ dựng hình đến render — đây cũng chính là scene studio có thể tái sử dụng để trưng bày mọi model được tạo ra trong các module thực hành tiếp theo.
