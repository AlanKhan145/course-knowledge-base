# 020 — Lighting the Scene

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 01 — Introduction & Setup |
| **Bài học** | Lighting the Scene |
| **Thời lượng** | 11:51 |
| **Chủ đề chính** | Thiết lập ánh sáng và render scene |

## 1. Mục tiêu bài học

- Áp dụng kiến thức về Light object và World Properties (bài Lighting) vào toàn bộ scene ngọn hải đăng.
- Biết thiết lập một sơ đồ ánh sáng cơ bản: Key Light, Fill Light, và ánh sáng môi trường (World).
- Biết đặt và căn chỉnh Camera để có bố cục đẹp cho scene.
- Kiểm tra và tinh chỉnh Color Management/Exposure để có kết quả render cân bằng.

## 2. Nội dung chính

Sau khi hoàn thiện hình khối và vật liệu, bước lên ánh sáng quyết định phần lớn "cảm xúc" cuối cùng của scene. Một sơ đồ ánh sáng cơ bản (three-point lighting đơn giản hóa) thường gồm:

- **Key Light** (ánh sáng chính): thường dùng **Sun Light** để mô phỏng ánh nắng/hoàng hôn chiếu vào ngọn hải đăng, góc xoay quyết định hướng và độ dài bóng đổ. Với chủ đề hải đăng, ánh sáng hoàng hôn (góc thấp, màu cam ấm) thường tạo hiệu ứng ấn tượng.
- **Fill Light** (ánh sáng phụ): một **Area Light** cường độ thấp đặt ở phía đối diện Key Light để làm dịu vùng bóng tối quá gắt, tránh phần khuất sáng bị đen hoàn toàn.
- **World/Ánh sáng môi trường**: tăng nhẹ Strength của World Color hoặc dùng một **Environment Texture** (HDRI bầu trời) để có phản chiếu môi trường tự nhiên trên các bề mặt bóng (kính, kim loại) và ánh sáng khuếch tán đều toàn scene.

Camera (`Shift + A > Camera`) cần được đặt và xoay để có góc nhìn đẹp — có thể nhìn qua camera bằng `Numpad 0`, và dùng `N-panel > View > Camera to View` kết hợp `Ctrl + Alt + Numpad 0` để "lái" camera bằng cách di chuyển viewport tự do rồi chốt vị trí camera theo góc nhìn hiện tại — cách này trực quan hơn xoay/di chuyển camera thủ công.

Sau khi có ánh sáng và camera, nên render thử (`F12`) thường xuyên để đánh giá kết quả thực tế thay vì chỉ tin vào Rendered Viewport (có thể khác biệt nếu Render Properties dùng Sample cao hơn preset viewport). Tinh chỉnh thêm qua **Color Management** (View Transform AgX cho tông màu điện ảnh tự nhiên, hoặc Standard nếu muốn màu thô sát Base Color hơn) và **Exposure** để cân bằng độ sáng tổng thể.

## 3. Quy trình thực hành gợi ý

1. Thêm một Sun Light làm Key Light, xoay để mô phỏng ánh sáng hoàng hôn chiếu xiên vào ngọn hải đăng.
2. Thêm một Area Light làm Fill Light phía đối diện, Strength thấp hơn nhiều so với Sun.
3. Vào World Properties, tăng nhẹ Strength hoặc thêm Environment Texture đơn giản (gradient bầu trời) để có ánh sáng môi trường.
4. Thêm Camera, dùng kỹ thuật `View > Camera to View` (`Ctrl + Alt + Numpad 0`) để đặt góc nhìn đẹp qua thao tác điều hướng viewport quen thuộc.
5. Render thử bằng `F12`, quan sát vùng sáng/tối, điều chỉnh lại Power các đèn nếu cần.
6. Thử đổi View Transform giữa AgX và Standard trong Color Management để so sánh tông màu.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Thêm Light/Camera | `Shift + A > Light` / `Shift + A > Camera` |
| Xem qua Camera | `Numpad 0` |
| Đặt Camera theo góc nhìn hiện tại | `Ctrl + Alt + Numpad 0` (cần bật `N-panel > View > Camera to View` hoặc dùng trực tiếp shortcut này) |
| Render Image | `F12` |
| Chỉnh Color Management | Render Properties > Color Management |

## 5. Lưu ý & lỗi thường gặp

- Chỉ dùng một nguồn sáng duy nhất (Key Light) thường khiến vùng bóng tối quá gắt, mất chi tiết — nên luôn có ít nhất Fill Light hoặc World Strength hợp lý để cân bằng.
- Đặt Power ánh sáng quá cao gây cháy sáng (clipping) vùng highlight, mất chi tiết vật liệu kim loại/kính đã tốn công thiết lập ở bài trước.
- Chỉ đánh giá qua Rendered Viewport (thường dùng Sample thấp để mượt) mà không render thử `F12` với Sample thật có thể dẫn đến sai lệch bất ngờ ở bản render cuối.
- Quên rằng Sun Light không phụ thuộc vị trí, chỉ phụ thuộc góc xoay — di chuyển Sun đi đâu cũng không thay đổi ánh sáng, chỉ xoay mới có tác dụng.

## 6. Checklist thực hành

- [ ] Đã thiết lập Key Light và Fill Light cho scene.
- [ ] Đã điều chỉnh World Strength/Environment cho ánh sáng môi trường.
- [ ] Đã đặt Camera ở góc nhìn đẹp bằng kỹ thuật Camera to View.
- [ ] Đã render thử bằng F12 và tinh chỉnh Power/Color Management.

## 7. Tóm tắt

Thiết lập ánh sáng scene kết hợp Key Light, Fill Light và ánh sáng môi trường World, cùng với việc đặt Camera hợp lý, quyết định phần lớn chất lượng thị giác cuối cùng của ngọn hải đăng. Bài tiếp theo sẽ hoàn thiện hiệu ứng bằng Compositing và Glow.
