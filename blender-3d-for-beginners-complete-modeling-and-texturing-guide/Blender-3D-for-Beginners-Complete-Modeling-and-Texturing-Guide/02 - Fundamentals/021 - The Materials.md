# 021 — The Materials

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Fundamentals |
| **Bài học** | The Materials |
| **Thời lượng** | 4:29 |
| **Chủ đề chính** | Kiến thức vật liệu cơ bản |

## 1. Mục tiêu bài học

- Biết tạo material slot mới trong Material Properties.
- Hiểu vai trò cơ bản của Base Color và một vài thông số chính của Principled BSDF.
- Biết gán một material cho object/face cụ thể.
- Hình dung được vì sao cần Viewport Shading ở chế độ Material Preview/Rendered để thấy kết quả.

## 2. Nội dung chính

**Material Properties** (icon quả cầu checker đỏ-trắng trong Properties Editor) là nơi quản lý vật liệu của object đang chọn. Nhấn "New" để tạo một material slot mới, đặt tên dễ nhận biết (tên material xuất hiện trong Outliner và Shader Editor sau này). Mỗi object có thể có nhiều material slot, và trong Edit Mode có thể gán từng slot cho các face khác nhau (chọn face > chọn slot > "Assign") — cho phép một mesh có nhiều vật liệu khác nhau trên các phần khác nhau.

Material mặc định sử dụng shader **Principled BSDF** — thông số quan trọng nhất ở mức cơ bản là **Base Color** (màu sắc chủ đạo) và **Roughness** (độ nhám, quyết định phản chiếu sắc nét hay mờ khuếch tán). Đây chỉ là bước làm quen ban đầu; Module 07 sẽ đi sâu toàn bộ các thông số còn lại (Metallic, IOR, Alpha, Subsurface, Transmission...) và cách kết hợp với Shader Editor node-based.

Để thấy kết quả vật liệu trong viewport, cần chuyển **Viewport Shading** (đã học ở bài 009) sang **Material Preview** (dùng ánh sáng studio dựng sẵn, không cần thiết lập light trong scene) hoặc **Rendered** (dùng ánh sáng/world thật của scene) — ở chế độ Solid, màu material sẽ không hiển thị đúng.

## 3. Quy trình thực hành gợi ý

1. Thêm một object bất kỳ, vào Material Properties, nhấn "New" để tạo material, đổi tên thành "Test_Material".
2. Đổi Base Color sang một màu khác, quan sát trong Material Preview shading.
3. Kéo thanh Roughness từ 0 đến 1, quan sát độ phản chiếu thay đổi từ bóng gương sang mờ hoàn toàn.
4. Vào Edit Mode, chọn một nửa số face, thêm một material slot thứ hai với màu khác, nhấn "Assign" để gán riêng cho các face đang chọn.
5. Chuyển qua lại giữa Solid, Material Preview và Rendered để so sánh cách hiển thị vật liệu.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Mở Material Properties | Click icon quả cầu checker |
| Tạo material mới | Nút "New" |
| Gán material cho face đang chọn (Edit Mode) | Nút "Assign" |
| Chuyển Viewport Shading | Phím `Z` (pie menu) hoặc icon góc trên phải viewport |

## 5. Lưu ý & lỗi thường gặp

- Đổi màu material nhưng không thấy thay đổi trong viewport thường là do đang ở chế độ Solid Shading thay vì Material Preview/Rendered.
- Xóa một material slot đang được gán cho face sẽ khiến các face đó về lại slot đầu tiên hoặc mất gán — cần kiểm tra lại sau khi xóa slot.
- Đặt tên material mặc định "Material.001", "Material.002"... rất khó quản lý khi scene có nhiều vật liệu — nên đổi tên rõ ràng ngay khi tạo.

## 6. Checklist thực hành

- [ ] Đã tạo được một material mới và đổi Base Color.
- [ ] Đã hiểu ảnh hưởng cơ bản của Roughness lên độ phản chiếu.
- [ ] Đã gán được hai material khác nhau lên hai vùng face của cùng một object.
- [ ] Đã biết chuyển Viewport Shading để xem đúng kết quả vật liệu.

## 7. Tóm tắt

Đây là bước làm quen tối thiểu với hệ thống vật liệu để có thể hoàn thành scene render cuối module — kiến thức vật liệu chuyên sâu với Shader Editor, node và Principled BSDF đầy đủ sẽ được trình bày kỹ ở Module 07.
