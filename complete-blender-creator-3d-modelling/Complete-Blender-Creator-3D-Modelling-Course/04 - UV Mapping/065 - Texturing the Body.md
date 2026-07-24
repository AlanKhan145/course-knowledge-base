# 065 — Texturing the Body

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Texturing the Body |
| **Thời lượng** | 8:53 |
| **Chủ đề chính** | Tạo texture cho thân máy bay |

## 1. Mục tiêu bài học
- Hoàn thiện texturing cho phần thân (fuselage) máy bay, tiếp nối kỹ thuật đã dùng cho cánh.
- Xử lý các chi tiết đặc trưng của thân: số hiệu, logo, cửa sổ buồng lái, đường ghép panel.
- Biết cách dùng nhiều Material Slot hoặc một texture atlas duy nhất cho toàn bộ thân.
- Đối chiếu và đồng bộ phong cách vật liệu giữa thân và cánh để mô hình nhất quán.

## 2. Nội dung chính
Texturing phần thân máy bay áp dụng quy trình tương tự bài trước (Image Texture → Base Color, Roughness, Normal Map qua Principled BSDF), nhưng thân thường có nhiều chi tiết đồ họa cần chú ý hơn: số hiệu máy bay, logo hãng, viền cửa sổ buồng lái, đường phân chia panel kim loại.

Hai cách tổ chức texture phổ biến:
- **Một texture atlas duy nhất:** toàn bộ UV của thân (và có thể cả cánh, đuôi) được pack chung vào một ảnh texture lớn, tiện cho việc tạo một Material duy nhất áp dụng toàn mô hình, giảm số lượng Draw Call khi render.
- **Nhiều Material Slot:** gán các Material khác nhau cho từng nhóm face (ví dụ thân sơn màu chính, viền kim loại, kính buồng lái trong suốt) — thuận tiện khi cần thuộc tính vật liệu khác biệt rõ rệt (ví dụ kính cần Transmission/độ trong suốt mà sơn thân không cần).

Với chi tiết kính buồng lái, nên tạo Material riêng có Transmission cao (kính trong Principled BSDF) hoặc dùng Alpha Blend nếu chỉ cần độ trong suốt đơn giản, thay vì cố vẽ kính bằng texture phẳng.

Về mặt màu sắc và độ tương phản, nên đối chiếu trực tiếp Material của thân với Material của cánh (đã làm ở bài trước) trong cùng một khung nhìn Rendered để đảm bảo tông màu, độ bóng đồng nhất, tránh cảm giác hai bộ phận thuộc hai vật liệu hoàn toàn khác nhau.

## 3. Quy trình thực hành gợi ý
1. Tạo Material mới cho thân (hoặc dùng lại Material atlas chung nếu đã pack UV thân + cánh cùng texture).
2. Thêm Image Texture chứa texture sơn/số hiệu của thân, nối vào Base Color.
3. Với các chi tiết đặc thù (kính buồng lái), tạo Material Slot riêng với thiết lập Transmission/Alpha phù hợp.
4. Gán Material Slot cho đúng nhóm face tương ứng ở Edit Mode (chọn face → Assign trong Material Properties).
5. Thêm Roughness/Normal Map nếu có để tăng chi tiết bề mặt kim loại/sơn.
6. Chuyển sang Rendered Shading, đối chiếu màu sắc và độ bóng giữa thân và cánh, chỉnh lại nếu lệch tông.
7. Xoay mô hình toàn diện để kiểm tra không còn vùng UV bị lệch hoặc texture bị thiếu (hiển thị màu hồng/tím báo lỗi).

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `Shift+A` (Shader Editor) | Thêm node (Image Texture, Mix Shader...) |
| `Ctrl+L → Materials` | Copy Material từ object này sang object khác đang chọn |
| Material Properties → `Assign` | Gán Material Slot cho các face đã chọn ở Edit Mode |
| `Z` | Chuyển nhanh giữa các chế độ Shading để kiểm tra |

## 5. Lưu ý & lỗi thường gặp
- Không gán đúng face vào Material Slot khiến một phần thân hiển thị sai vật liệu (ví dụ kính buồng lái vẫn mang texture sơn).
- Kính buồng lái dùng texture phẳng thay vì Transmission/Alpha thật khiến thiếu chiều sâu và độ trong suốt tự nhiên khi render.
- Màu sắc/độ bóng giữa thân và cánh chênh lệch rõ do thiết lập Roughness/Metallic không đồng bộ.
- Quá nhiều Material Slot rời rạc mà không cần thiết làm tăng độ phức tạp quản lý mà không cải thiện chất lượng hình ảnh tương ứng.

## 6. Checklist thực hành
- [ ] Đã áp texture Base Color cho toàn bộ thân máy bay.
- [ ] Đã tạo Material riêng phù hợp cho kính buồng lái (Transmission/Alpha).
- [ ] Đã gán đúng Material Slot cho từng nhóm chi tiết.
- [ ] Đã đối chiếu và đồng bộ tông màu/độ bóng giữa thân và cánh.

## 7. Tóm tắt
Bài học hoàn tất phần texturing cho mô hình máy bay bằng cách xử lý thân với các chi tiết đặc thù như số hiệu, panel và kính buồng lái, đảm bảo tính nhất quán vật liệu với cánh đã texturing trước đó, khép lại giai đoạn UV/texturing để chuyển sang thiết lập animation.
