# 029 — Adding Materials

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Modular Dungeon |
| **Bài học** | Adding Materials |
| **Thời lượng** | 6:28 |
| **Chủ đề chính** | Thêm vật liệu |

## 1. Mục tiêu bài học

- Hiểu Material Slot và cách gán nhiều vật liệu khác nhau lên cùng một mesh.
- Sử dụng Principled BSDF để thiết lập màu sắc, độ nhám (Roughness) cơ bản cho gỗ, kim loại, đá.
- Gán vật liệu theo từng phần mesh bằng chọn Face trong Edit Mode.
- Làm quen với Material Preview shading mode để kiểm tra kết quả nhanh.

## 2. Nội dung chính

Trong Properties Editor, tab **Material Properties** (biểu tượng quả cầu sọc đỏ/trắng) cho phép tạo Material Slot mới bằng nút `+` rồi `New`. Mỗi object có thể chứa nhiều Material Slot, mỗi slot gắn với một vật liệu riêng (ví dụ: gỗ cho thân thùng, kim loại cho đai thùng, đá cho cột).

Vật liệu mặc định trong Blender dùng node **Principled BSDF** — một shader vật lý (PBR) tổng hợp nhiều thuộc tính: Base Color (màu nền), Roughness (độ nhám, 0 = bóng gương, 1 = hoàn toàn nhám mờ), Metallic (0 = phi kim, 1 = kim loại), Normal (map độ nhấp nhô bề mặt, dùng ở bài shading sau). Với các prop trong module này, chỉ cần chỉnh Base Color và Roughness là đủ để phân biệt gỗ (roughness cao, màu nâu), kim loại (roughness thấp–trung bình, Metallic gần 1, màu xám/đồng), và đá (roughness cao, màu xám be).

Để gán vật liệu khác nhau lên từng phần của cùng một mesh: vào Edit Mode, chọn các Face cần gán (ví dụ đai kim loại của thùng), trong tab Material chọn đúng slot rồi nhấn **Assign**. Nút **Select** giúp kiểm tra lại các face đang thuộc slot nào, **Deselect** bỏ chọn.

Nên chuyển Viewport Shading sang **Material Preview** (`Z` rồi chọn, hoặc phím số góc phải trên viewport) để xem trực quan kết quả vật liệu dưới ánh sáng HDRI mặc định, thay vì phải render đầy đủ.

## 3. Quy trình thực hành gợi ý

1. Chọn object (barrel/crate/pillar), mở tab Material Properties.
2. Tạo Material Slot đầu tiên, đặt tên rõ ràng (ví dụ "Wood_Barrel"), chỉnh Base Color và Roughness.
3. Thêm Material Slot thứ hai cho phần kim loại/đá, tạo vật liệu mới tương ứng.
4. Vào Edit Mode, chọn các Face cần vật liệu thứ hai, bấm Assign sau khi chọn đúng slot.
5. Chuyển Viewport Shading sang Material Preview để kiểm tra trực quan.
6. Lặp lại cho các prop còn lại (crate, pillar) với bộ vật liệu tương tự.

## 4. Phím tắt & công cụ liên quan

| Phím tắt / Thao tác | Chức năng |
|---|---|
| `Z` | Mở Pie Menu chuyển Viewport Shading |
| Material Properties tab | Quản lý Material Slot và node Principled BSDF |
| `+` / `-` (Material Slot) | Thêm/xoá slot vật liệu |
| **Assign** | Gán vật liệu cho face đang chọn (Edit Mode) |
| **Select / Deselect** | Chọn/bỏ chọn face theo slot vật liệu |
| `Shift+Click` (trên face) | Chọn thêm nhiều face |

## 5. Lưu ý & lỗi thường gặp

- Quên nhấn Assign sau khi tạo slot mới khiến toàn bộ mesh vẫn dùng vật liệu cũ.
- Đặt tên vật liệu mặc định "Material.001..." gây khó quản lý khi số lượng object tăng lên.
- Roughness = 0 cho vật liệu gỗ/đá khiến bề mặt trông như nhựa bóng phi thực tế.
- Không chuyển sang Material Preview để kiểm tra, chỉ nhìn Solid Shading, dẫn đến không phát hiện lỗi gán sai vật liệu.

## 6. Checklist thực hành

- [ ] Đã tạo ít nhất 2 Material Slot khác nhau trên một object.
- [ ] Đã chỉnh Base Color và Roughness phù hợp cho từng chất liệu (gỗ, kim loại, đá).
- [ ] Đã gán đúng vật liệu cho từng vùng Face trong Edit Mode.
- [ ] Đã đặt tên vật liệu rõ ràng, dễ nhận biết.
- [ ] Đã kiểm tra kết quả bằng Material Preview.

## 7. Tóm tắt

Bài học giới thiệu quy trình cơ bản thêm và gán vật liệu bằng Material Slot và Principled BSDF, cho phép một mesh mang nhiều chất liệu khác nhau (gỗ, kim loại, đá) — nền tảng trước khi đi sâu vào shading nâng cao ở bài "Shading the Walls".
