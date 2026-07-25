# 058 — Creating a Professional Organic Material

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 07 — Material Creation |
| **Bài học** | Creating a Professional Organic Material |
| **Thời lượng** | 19:26 |
| **Chủ đề chính** | Vật liệu organic chuyên nghiệp: da, Subsurface Scattering, chi tiết lỗ chân lông |

## 1. Mục tiêu bài học

- Xây dựng một vật liệu da/hữu cơ chân thực bằng Subsurface Scattering.
- Dùng Noise/Voronoi lớp chồng để tạo chi tiết lỗ chân lông và biến thiên màu da.
- Dùng Bump/Normal để thêm độ nhám vi mô mà không cần hình học thật.

## 2. Nội dung chính

Vật liệu organic (da, thịt, sáp, lá cây) khác biệt cơ bản với hard-surface ở khả năng ánh sáng **xuyên qua và tán xạ bên trong bề mặt** thay vì chỉ phản xạ ở lớp ngoài — hiện tượng này mô phỏng qua tham số **Subsurface** (và **Subsurface Radius**/**Subsurface Scale** tùy phiên bản) trong node Principled BSDF, quyết định ánh sáng "ngấm" bao sâu và tán xạ theo màu gì trước khi thoát ra (da người thường tán xạ mạnh sắc đỏ/cam, tạo cảm giác ấm khi có ánh sáng ngược chiều xuyên qua tai, mũi).

**Biến thiên màu da** được tạo bằng cách chồng nhiều lớp texture: một lớp **Noise Texture** tần số thấp cho các mảng màu lớn (ửng đỏ ở má, tĩnh mạch mờ), kết hợp một lớp **Voronoi Texture** tần số cao hơn cho các đốm/tàn nhang nhỏ, trộn qua **ColorRamp** và **Mix Color** để kiểm soát chính xác vị trí và cường độ mỗi lớp trước khi đưa vào Base Color.

**Chi tiết lỗ chân lông và nếp nhăn vi mô** không cần model bằng hình học thật (tốn cực nhiều polygon) mà mô phỏng qua **Bump node** hoặc **Normal Map**: một Voronoi Texture tần số rất cao chuyển qua node Bump để tạo cảm giác lồi lõm nhỏ li ti trên bề mặt khi ánh sáng chiếu xéo, dù mesh thực tế hoàn toàn mượt. Roughness cũng nên có biến thiên nhẹ theo cùng pattern để vùng "ẩm" (như môi, đầu mũi) bóng hơn vùng da khô xung quanh.

## 3. Quy trình thực hành gợi ý

1. Trên một mesh organic (ví dụ mèo con hoặc hộp sọ đã sculpt ở Module 06), thêm Principled BSDF, tăng dần Subsurface và quan sát hiệu ứng ánh sáng xuyên qua ở vùng mỏng (tai, mũi).
2. Thêm một Noise Texture tần số thấp nối vào Base Color qua ColorRamp để tạo mảng màu ửng đỏ lớn.
3. Thêm một Voronoi Texture tần số cao, Mix Color chồng lên lớp Noise để tạo đốm nhỏ.
4. Thêm một Voronoi Texture tần số rất cao khác, nối qua node Bump vào input Normal của Principled BSDF để tạo lỗ chân lông.
5. Thêm biến thiên nhẹ cho Roughness dựa theo cùng mask màu đã tạo, làm vùng ẩm bóng hơn.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Thêm node | `Shift + A` trong Shader Editor |
| Node Bump | Add > Vector > Bump |
| Preview kết quả node (Node Wrangler) | `Ctrl + Shift + Click` vào node |
| Tự động thêm Mapping/Coordinate (Node Wrangler) | `Ctrl + T` |

## 5. Lưu ý & lỗi thường gặp

- Subsurface quá cao khiến vật liệu trông như sáp/nhựa trong suốt thay vì da — cần cân bằng với Subsurface Radius/Scale hợp lý theo tỉ lệ thật của mesh.
- Chỉ dùng một lớp texture duy nhất cho Base Color khiến da trông "nhựa", phẳng lì thiếu sức sống — luôn cần ít nhất 2-3 lớp tần số khác nhau chồng lên nhau.
- Bump quá mạnh ở tần số cao có thể gây nhiễu (aliasing) khi render ở khoảng cách xa — nên kiểm tra ở cả cận cảnh lẫn toàn cảnh.
- Quên biến thiên Roughness khiến toàn bộ bề mặt da bóng/mờ đều nhau một cách giả tạo.

## 6. Checklist thực hành

- [ ] Đã thiết lập Subsurface Scattering hợp lý cho vật liệu da.
- [ ] Đã chồng ít nhất hai lớp texture tần số khác nhau cho biến thiên màu da.
- [ ] Đã thêm chi tiết lỗ chân lông bằng Bump từ Voronoi tần số cao.
- [ ] Đã thêm biến thiên Roughness theo vùng da ẩm/khô.

## 7. Tóm tắt

Vật liệu organic chuyên nghiệp dựa trên nguyên lý chồng lớp nhiều tần số texture khác nhau kết hợp Subsurface Scattering để mô phỏng cách ánh sáng thực sự tương tác với mô sống — kỹ thuật này sẽ được áp dụng trực tiếp cho da và mắt nhân vật ếch ở Module 08.
