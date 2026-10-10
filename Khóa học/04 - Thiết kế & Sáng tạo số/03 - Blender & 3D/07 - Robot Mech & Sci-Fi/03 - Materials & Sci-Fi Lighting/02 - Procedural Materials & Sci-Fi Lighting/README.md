# Khóa học Blender: Procedural Materials & Sci-Fi Lighting cho Robot Mech

## 1. Giới thiệu

Khóa học hướng dẫn hoàn thiện **bề mặt và ánh sáng** của một robot mech khoa học viễn tưởng đã được dựng hình trong Blender. Bạn sẽ tạo các vật liệu có thể điều chỉnh hoàn toàn bằng shader nodes: kim loại sáng và tối, mắt bóng, nhựa kỹ thuật, ống kim loại, đèn phát sáng. Cuối cùng, bạn bố trí HDRI cùng hệ thống đèn đỏ–xanh–trắng để làm nổi bật hình khối.

**Phạm vi:** vật liệu, gán vật liệu theo vùng mesh và bố trí ánh sáng. Khóa học **không hướng dẫn dựng mesh, rigging hay animation**. Hãy chuẩn bị sẵn một robot mech có đầu, mắt, ống, bu lông và các chi tiết trang trí; có thể thay bằng model cơ khí tương đương.

## 2. Kết quả học tập

Hoàn thành khóa học, bạn có thể:

- Cấu hình Eevee, HDRI, Color Management và nền trong suốt để xem vật liệu.
- Sử dụng `Ambient Occlusion`, `Noise Texture`, `Color Ramp`, `Mix` và `Bump` để tạo độ cũ, độ nhám và phản xạ cho kim loại.
- Gán nhiều vật liệu lên các phần khác nhau của một mesh bằng `Material Slots`.
- Tạo các biến thể mắt, nhựa, ống, kim loại tối và Emission.
- Dàn ánh sáng viền đỏ–xanh, đèn chính và đèn bù cho robot.
- Kiểm tra và hoàn thiện một cảnh Blender có vật liệu nhất quán.

## 3. Lộ trình bài học

| Bài | Tên | Sản phẩm sau bài |
| --- | --- | --- |
| [01](lighting/01-eevee-hdri-color-management.md) | Eevee, HDRI và quản lý màu | Cảnh xem trước có ánh sáng môi trường |
| [02](materials/02-kim-loai-sang-procedural.md) | Procedural Light Metal | Vật liệu kim loại sáng, có hao mòn tinh tế |
| [03](materials/03-mat-robot-va-nhua-ky-thuat.md) | Mắt robot và nhựa | Mắt đen bóng, nhựa tối với vi chi tiết |
| [04](materials/04-ong-dan-kim-loai.md) | Vật liệu ống dẫn | `Pipes` có phản xạ, roughness và bump |
| [05](materials/05-dark-metal-va-gan-vat-lieu.md) | Dark Metal và Material Slots | Viền, bu lông và chi tiết tối đúng vùng |
| [06](lighting/06-emission-va-anh-sang-sci-fi.md) | Emission và lighting | Đèn robot phát sáng, bố cục đèn đỏ–xanh |
| [07](practice/07-lab-hoan-thien-robot-mech.md) | Lab tổng hợp | Cảnh hoàn chỉnh và checklist kiểm tra |

## 4. Yêu cầu trước khi học

- Biết di chuyển trong 3D Viewport, chọn đối tượng và chuyển giữa `Object Mode` / `Edit Mode`.
- Biết mở `Shading`, `Shader Editor`, `Material Properties` và `Render Properties`.
- Có file `.blend` chứa mô hình cơ khí với các mảng bề mặt phân biệt được; lưu một bản sao trước khi bắt đầu.
- Có file HDRI (bài 01 minh họa bằng `Suburban Field 02`, bản 1K `.hdr` từ Poly Haven).

## 5. Lưu ý về phiên bản Blender

Bài học giữ **cách làm và thông số của hướng dẫn Eevee sử dụng giao diện cũ**. Các tùy chọn riêng như `Bloom`, `Screen Space Reflections` hoặc `Ambient Occlusion` dưới dạng ô đánh dấu có thể đã thay đổi tên, vị trí hoặc cơ chế ở phiên bản Blender mới. Khi không thấy đúng nút, tìm chức năng tương đương trong hệ thống render/compositor của phiên bản đang dùng; không giả định giao diện giống hệt.

Một số thao tác phụ thuộc cấu hình `Node Wrangler` và keymap. Khi phím tắt không hoạt động, thêm node bằng `Shift + A` → `Search` và kết nối thủ công. Trong Blender, **`A` chọn tất cả, `Alt + A` bỏ chọn** khi ở vùng chỉnh sửa thích hợp. Chú ý socket `Height` của `Bump` phải nhận bản đồ độ cao; tuyệt đối không nối màu trực tiếp vào `Normal` của BSDF để thay cho bước này.

Các mã màu, scale, strength và công suất đèn trong giáo trình là **giá trị tham khảo để tái hiện bài thực hành**, không phải thông số bắt buộc cho mọi cảnh; quan sát kết quả để tinh chỉnh.

## 6. Cách học

1. Mở bài học tương ứng và thao tác từng bước trên file `.blend`.
2. Làm **checkpoint** trước khi chuyển sang vật liệu hoặc vùng mesh mới.
3. Tự thực hiện phần thực hành và trả lời trắc nghiệm cuối bài.
4. Lưu file theo các mốc như `mech_01_hdri.blend`, `mech_02_metal.blend` để dễ quay lại.
5. Hoàn thành Lab 07 và tự đánh giá bằng checklist.

## 7. Phím tắt được sử dụng

| Phím | Thao tác |
| --- | --- |
| `Shift + A` | Thêm đối tượng/node (tùy vùng đang mở) |
| `Tab` | Đổi Object / Edit Mode |
| `L` | Chọn phần hình học liên thông ở dưới con trỏ (Edit Mode) |
| `A` / `Alt + A` | Chọn tất cả / bỏ chọn |
| `B` | Box Select |
| `G` / `R` | Di chuyển / xoay |
| `Shift + D` | Nhân bản |
| `H` / `Alt + H` | Ẩn lựa chọn / hiện lại |
| `Ctrl + L` | Menu liên kết dữ liệu trong Object Mode |
| `Ctrl + S` | Lưu file |
| `Numpad 7` | Nhìn từ trên xuống |
| `Z` | Mở menu shading trong 3D Viewport |

Các bài học sau độc lập về mặt giải thích; sản phẩm thực hành được xây dựng dần trên cùng một robot mech.
