# 069 — Lighting and HDRI's

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Lighting and HDRI's |
| **Thời lượng** | 6:14 |
| **Chủ đề chính** | Ánh sáng HDRI trong Eevee và Cycles |

## 1. Mục tiêu bài học
- Hiểu khái niệm HDRI (High Dynamic Range Image) và vai trò của nó trong World Lighting.
- Biết cách thiết lập Environment Texture trong World Properties bằng Shader Node.
- Nắm được sự khác biệt khi sử dụng HDRI giữa Eevee và Cycles.
- Điều chỉnh cường độ (Strength) và góc xoay (Rotation) của HDRI cho phù hợp với scene máy bay.

## 2. Nội dung chính
**HDRI** là ảnh môi trường có dải sáng động (dynamic range) rất rộng, thường chụp panorama 360° của một không gian thực (bầu trời, studio, ngoại cảnh), dùng để chiếu sáng và phản chiếu môi trường lên toàn bộ scene một cách chân thực mà không cần dựng nhiều nguồn sáng thủ công.

Trong Blender, HDRI được thiết lập ở **World Properties**, thông qua Shader Node của World: thêm node **Environment Texture**, nạp file ảnh HDRI (định dạng .hdr hoặc .exr), nối vào input Color của node **Background**, sau đó nối Background vào **World Output**. Có thể điều chỉnh:
- **Strength:** cường độ sáng tổng thể mà HDRI cung cấp cho scene.
- **Mapping + Texture Coordinate (Generated):** thêm node Mapping trước Environment Texture để xoay góc HDRI (Rotation Z), thay đổi hướng nguồn sáng chính mà không cần xoay toàn bộ scene.

Về khác biệt giữa hai render engine:
- **Eevee** (Eevee Next trong Blender 4.2+): là engine rasterization thời gian thực, HDRI ảnh hưởng ánh sáng và phản chiếu (reflection) dựa trên xấp xỉ (probe phản chiếu, Screen Space Reflections...). Cần đảm bảo **Light Probes** (Reflection Cubemap/Irradiance Volume) được đặt hợp lý nếu muốn phản chiếu HDRI chính xác trên các bề mặt bóng (kim loại thân/cánh máy bay), mặc dù với World HDRI cơ bản, ánh sáng nền và phản chiếu môi trường mặc định đã hoạt động khá tốt trực tiếp.
- **Cycles:** là engine raytracing, HDRI được lấy mẫu (sample) trực tiếp như một nguồn sáng thực sự, cho phản chiếu và ánh sáng gián tiếp (global illumination) chính xác hơn nhưng thời gian render lâu hơn, đặc biệt với hình ảnh có nhiều bề mặt phản chiếu như thân kim loại máy bay.

Với dự án máy bay, HDRI bầu trời (sky HDRI) là lựa chọn tự nhiên, vừa cung cấp ánh sáng mặt trời hợp lý, vừa tạo phản chiếu bầu trời/mây trên bề mặt kim loại/sơn bóng của máy bay.

## 3. Quy trình thực hành gợi ý
1. Chuyển sang tab Shading, chọn World (thay vì Object) ở phía trên Shader Editor.
2. Thêm node Environment Texture (`Shift+A → Texture → Environment Texture`), nạp file HDRI bầu trời.
3. Nối Environment Texture vào Background, Background vào World Output (thường đã có sẵn, chỉ cần thay Color input).
4. Thêm Texture Coordinate (Generated) + Mapping node trước Environment Texture để có thể xoay HDRI sau này.
5. Chuyển Viewport Shading sang Rendered để xem trực tiếp hiệu ứng ánh sáng HDRI trên máy bay.
6. Thử chuyển đổi giữa Eevee và Cycles trong Render Properties, quan sát khác biệt về phản chiếu và chất lượng ánh sáng.
7. Điều chỉnh Strength và Rotation Z của Mapping node để có góc chiếu sáng đẹp nhất cho máy bay.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `Shift+A` (Shader Editor, World) | Thêm node Environment Texture, Mapping... |
| `Z` | Chuyển Viewport Shading sang Rendered để xem trước HDRI |
| World Properties → Surface | Truy cập nhanh thiết lập World Shader không cần Shader Editor |
| Render Properties → Render Engine | Chuyển đổi giữa Eevee và Cycles |

## 5. Lưu ý & lỗi thường gặp
- Chọn nhầm ngữ cảnh node (đang chỉnh Object Material thay vì World) khiến không thấy Environment Texture ảnh hưởng gì tới scene.
- HDRI có Strength quá cao/quá thấp khiến scene bị cháy sáng (overexposed) hoặc quá tối.
- Không thêm Mapping node khiến không thể xoay hướng chiếu sáng của HDRI khi cần đổi góc mặt trời.
- Chỉ xem trước ở Eevee mà không kiểm tra Cycles (hoặc ngược lại) có thể dẫn đến bất ngờ về sự khác biệt phản chiếu khi render engine cuối cùng khác với lúc preview.

## 6. Checklist thực hành
- [ ] Đã thiết lập Environment Texture với ảnh HDRI trong World Shader.
- [ ] Đã thêm Mapping node để có thể xoay hướng HDRI.
- [ ] Đã so sánh kết quả ánh sáng/phản chiếu giữa Eevee và Cycles.
- [ ] Đã điều chỉnh Strength/Rotation cho ánh sáng phù hợp với scene máy bay.

## 7. Tóm tắt
Bài học giới thiệu HDRI như một phương pháp chiếu sáng môi trường nhanh và chân thực, thiết lập qua World Shader Node, đồng thời làm rõ khác biệt xử lý HDRI giữa Eevee và Cycles — chuẩn bị ánh sáng hoàn chỉnh cho bài render animation cuối cùng.
