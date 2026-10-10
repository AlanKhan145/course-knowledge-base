# Bài 01 — Thiết lập Eevee, HDRI và Color Management

## 1. Tóm tắt

Một vật liệu tốt khó đánh giá trong môi trường thiếu sáng. Trước khi tạo shader cho robot, cần thiết lập môi trường chiếu sáng đủ phản xạ và một cấu hình màu ổn định. Bài này dùng `Eevee` để xem trước nhanh, thêm HDRI vào `World` và ẩn ảnh nền khỏi khung hình nhưng vẫn giữ tác động chiếu sáng.

## 2. Mục tiêu học tập

- Chọn được `Eevee` hoặc `Cycles` phù hợp để kiểm tra shader.
- Thiết lập chế độ xem `Rendered` và `Color Management`.
- Kết nối ảnh `.hdr` vào `Environment Texture` của `World`.
- Phân biệt nền trong suốt với việc tắt ánh sáng môi trường.
- Xử lý tình trạng cảnh xám, vật liệu khó thấy và HDRI bị thiếu file.

## 3. Vì sao phải thiết lập ánh sáng trước?

Kim loại phản xạ môi trường xung quanh. Nếu robot chỉ nhận một nền xám phẳng, bề mặt kim loại ít tương phản và khó quan sát các thay đổi của `Metallic`, `Roughness` hay `Bump`. HDRI (High Dynamic Range Image) mang lại thông tin ánh sáng ở nhiều hướng, giúp các gờ, rãnh và mặt cong thể hiện tốt hơn.

`Eevee` là lựa chọn xem trước theo thời gian thực trong thực hành này; `Cycles` cũng có thể dựng vật liệu, nhưng thời gian xử lý và cách điều khiển một số hiệu ứng khác nhau.

## 4. Chuẩn bị cảnh

1. Mở file Blender có robot đã dựng hình.
2. Tắt `Snapping` nếu công cụ này đang bật để tránh kéo đèn, chọn chi tiết không như ý.
3. Mở `Render Properties` → `Render Engine` → chọn `Eevee`.
4. Trên 3D Viewport, nhấn `Z` và chọn `Rendered`.
5. Quan sát: khi chưa có ánh sáng/HDRI thích hợp, robot sẽ trông phẳng và xám.

### 4.1. Các hiệu ứng được dùng trong cấu hình minh họa

Hướng dẫn dùng các hiệu ứng tương ứng với:

- `Ambient Occlusion`: nhấn mạnh độ che khuất ở vùng sát nhau và các khe.
- `Bloom`: tạo quầng sáng quanh vùng rất sáng hoặc vật liệu phát sáng.
- `Screen Space Reflections`: hỗ trợ phản xạ ở điều kiện Eevee tương ứng.
- `Motion Blur`: hữu ích nếu cảnh tiếp tục được dùng cho animation.

**Lưu ý tương thích:** Đây là tên tính năng trong giao diện Eevee cũ; các phiên bản Blender mới có thể triển khai chúng theo cách khác. Không cố tìm một hộp kiểm có tên giống hệt trong mọi phiên bản.

## 5. Thiết lập Color Management

Vào `Render Properties` hoặc mục `Color Management` của phiên bản đang dùng rồi cấu hình theo giao diện minh họa:

| Thuộc tính | Giá trị thực hành | Tác dụng |
| --- | --- | --- |
| View Transform | `Filmic` | Giúp quản lý dải sáng/tối trong bản render |
| Look | `High Contrast` | Tăng tương phản vùng sáng và tối |
| Preview | `Rendered` | Xem vật liệu trong điều kiện render |

Cảm nhận màu có thể thay đổi theo nguồn sáng, vật liệu và phiên bản Blender. `High Contrast` không thay thế cho việc chỉnh ánh sáng hợp lý.

## 6. Thêm HDRI vào World

1. Mở `World Properties` và tạo `World` nếu cảnh chưa có.
2. Tại ô `Color`, chọn nút kết nối texture, sau đó chọn `Environment Texture`.
3. Nhấn `Open` và chọn file HDRI. Ví dụ thực hành: `Suburban Field 02`, độ phân giải `1K`, định dạng `.hdr` trên Poly Haven.
4. Chờ Blender tải texture và quay lại góc nhìn `Rendered`.
5. Xoay góc nhìn để kiểm tra các vùng phản xạ và vùng bị che khuất trên robot.

```text
World
└── Environment Texture (ảnh .hdr)
      └── Background
            └── World Output
```

Khi ảnh môi trường hiển thị màu hồng, nguyên nhân thường là image texture chưa được tải, đường dẫn lỗi hoặc file nguồn bị thất lạc. Kiểm tra lại ảnh đã chọn trước khi chỉnh shader robot.

## 7. Giữ ánh sáng HDRI nhưng ẩn nền

HDRI cung cấp phản xạ tốt nhưng ảnh chụp môi trường có thể làm mất tập trung. Trong `Render Properties` → `Film`, bật `Transparent`.

Kết quả mong đợi là nền không xuất hiện như một bức ảnh phía sau robot trong đầu ra render có alpha, trong khi ánh sáng môi trường vẫn tác động lên bề mặt. Nếu trình xem của bạn hiển thị nền caro, đó là cách biểu diễn độ trong suốt; không có nghĩa HDRI bị tắt.

**Phân biệt:** `Film > Transparent` không xóa ảnh HDRI khỏi `World`. Nếu xóa `Environment Texture`, độ chiếu sáng và phản xạ của robot có thể thay đổi rõ rệt.

## 8. Thực hành và kiểm tra

1. Chọn `Eevee`, mở `Rendered`.
2. Thêm HDRI vào `World`.
3. Bật/tắt `Film > Transparent` để quan sát sự khác biệt giữa hình nền và phản xạ vật liệu.
4. So sánh `High Contrast` với thiết lập Look trung tính khi có sẵn.
5. Lưu cảnh thành `mech_01_hdri.blend`.

**Checkpoint:** Khi xoay camera, robot có độ sáng phân bố đa hướng; không còn chỉ là một khối xám đồng nhất. Nền có thể trong suốt mà phản xạ trên robot vẫn tồn tại.

### 8.1. Các lỗi thường gặp

| Triệu chứng | Kiểm tra |
| --- | --- |
| Cảnh vẫn xám | Đã chuyển sang `Rendered`? `World` có kết nối Environment Texture? |
| Màu hồng bất thường | HDRI có đường dẫn file hợp lệ không? |
| Nền HDRI vẫn xuất hiện | Kiểm tra `Film > Transparent` và chế độ xem/đầu ra |
| Phản xạ trông phẳng | Kiểm tra nguồn HDRI, hướng sáng và thuộc tính vật liệu khi đã tạo |
| Không thấy nút Bloom/AO | Kiểm tra khác biệt giao diện giữa các phiên bản Eevee |

## 9. Câu hỏi ôn tập

**Câu 1.** Vai trò quan trọng nhất của HDRI trong bài này là gì?

A. Tự tạo hình học cho robot.  
B. Tự tạo vật liệu kim loại.  
C. Cung cấp ánh sáng và môi trường phản xạ đa hướng.  
D. Tự gán vật liệu lên mesh.

**Đáp án: C.** HDRI chứa dữ liệu ánh sáng môi trường, giúp quan sát độ phản xạ và hình khối.

**Câu 2.** Khi cần xem vật liệu trong điều kiện ánh sáng render, chọn chế độ nào?

A. `Rendered`.  
B. `Wireframe`.  
C. `Edit Mode`.  
D. `Sculpt Mode`.

**Đáp án: A.** `Rendered` hiển thị cảnh trong điều kiện xử lý render của engine hiện tại.

**Câu 3.** Bật `Film > Transparent` có ý nghĩa gì?

A. Xóa HDRI khỏi file.  
B. Chuyển mọi vật liệu thành kính.  
C. Tắt tất cả phản xạ.  
D. Ẩn nền render nhưng vẫn có thể giữ ánh sáng HDRI.

**Đáp án: D.** Cài đặt này chi phối hình nền nhìn thấy, không đồng nghĩa với loại bỏ nguồn sáng môi trường.

**Câu 4.** Ảnh môi trường xuất hiện màu hồng thường báo hiệu điều gì?

A. Có quá nhiều đèn điểm.  
B. Texture bị thiếu hoặc chưa được nạp đúng.  
C. Roughness bằng 0.  
D. Metallic bằng 1.

**Đáp án: B.** Blender dùng màu hồng để biểu thị texture ảnh không truy cập được trong nhiều trường hợp.

**Câu 5.** Vì sao giao diện bài học có thể khác Blender đang sử dụng?

A. Mọi máy đều có keymap riêng bắt buộc.  
B. File HDRI là nguyên nhân duy nhất.  
C. Tùy chọn Eevee thay đổi theo phiên bản.  
D. Đèn Area và Point không còn tồn tại.

**Đáp án: C.** Một số hiệu ứng Eevee được đổi cách thiết lập qua các thế hệ Blender.

## 10. Tổng kết

Bạn đã có một môi trường kiểm tra vật liệu với Eevee, HDRI, cấu hình màu và nền có thể trong suốt. Hãy giữ thiết lập này khi tạo và kiểm tra các shader còn lại để tránh nhầm lỗi ánh sáng với lỗi vật liệu.
