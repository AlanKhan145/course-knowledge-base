# 238 — Basics Pt. 3
# 238 — Basics Pt. 3

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 36 — Bonus: Fast Learning |
| **Bài học** | Basics Pt. 3 |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 1:10:31 |
| **Ngôn ngữ** | English |

## Phạm vi ôn tập

Phần này nối tiếp từ mesh và sculpt sang materials, UV, texture painting, normal maps, lighting, rendering và bài project cuối của Basics. Nội dung được tổng hợp từ:

- [Section 16 — Textures and Materials](../16%20-%20Basics-%20Introduction%20to%20Textures%20and%20Materials/README.md)
- [Section 17 — UVs](../17%20-%20Basics-%20UVs/README.md)
- [Section 18 — 3D Texture Painting](../18%20-%20Basics-%203D%20Texture%20Painting/README.md)
- [Section 19 — Normal Maps](../19%20-%20Basics-%20Normal%20Maps/README.md)
- [Section 20 — Rendering](../20%20-%20Basics-%20Rendering/README.md)
- [Section 21 — Final Project](../21%20-%20Basics-%20Final%20Project/README.md)

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xây dựng material trong Shading workspace bằng shader nodes và texture inputs.
- Tạo UV map, kiểm tra sự tương ứng giữa mặt 3D và vùng 2D, rồi chuẩn bị texture painting.
- Phân biệt color map, non-color data và normal map trong material workflow.
- Thiết lập light, camera, render engine và các thông số cần kiểm tra trước khi render.
- Ghép các bước thành một asset hoặc scene stylized hoàn chỉnh.

## Nội dung trọng tâm

### 1. Materials và shading

Material quyết định cách bề mặt phản ứng với ánh sáng. Shading workspace cung cấp node editor, viewport, image viewer và HDRI preview để kiểm tra màu, roughness, reflection và texture inputs trước khi đưa vào scene.

### 2. UV và texture painting

UV mapping trải các mặt của mesh lên không gian 2D giống như mở lớp giấy bọc quanh object. Trong UV Editor, có thể chọn mặt tương ứng giữa model và UV map, rồi di chuyển, xoay, scale hoặc unwrap để texture không bị méo. Texture Paint cần một texture image và UV đã được chuẩn bị.

### 3. Normal map và tối ưu chi tiết

Normal map là texture 2D dùng để mô phỏng phản ứng ánh sáng của bề mặt chi tiết. Trong workflow high-res/low-res, thông tin từ sculpt dày có thể được bake và áp dụng lên mesh nhẹ hơn để giữ cảm giác chi tiết mà không phải giữ toàn bộ geometry.

### 4. Lighting, camera và final render

Camera quyết định góc nhìn cuối, light quyết định cách scene được chiếu sáng, còn render engine và setting quyết định cách ảnh được tính toán. Render preview nên được dùng thường xuyên để kiểm tra silhouette, vật liệu, bóng và bố cục trước khi xuất final.

## Quy trình rút gọn

1. Hoàn thiện hình dạng và áp dụng scale cần thiết trước khi UV.
2. Tạo material, kiểm tra shader và HDRI preview trong Shading workspace.
3. Unwrap UV, kiểm tra tỷ lệ và tạo texture image nếu cần texture painting.
4. Tạo color map hoặc texture, sau đó tách đúng loại dữ liệu màu và non-color.
5. Bake/apply normal map khi cần chuyển detail từ high-res sang low-res.
6. Đặt camera, light, render settings và thực hiện test render trước final.

## Thực hành đề xuất

Chọn một prop đã modeling ở Basics Pt. 1. Tạo material có màu và roughness khác nhau, unwrap UV, texture paint một color map đơn giản, rồi thêm một normal map cho detail bề mặt. Đặt một key light và camera, thực hiện hai test render với bố cục khác nhau và lưu cả file Blender lẫn ảnh kết quả.

## Checklist

- [ ] Đã tạo material bằng shader nodes và kiểm tra trong Material Preview.
- [ ] Đã unwrap UV và xác nhận mặt 3D khớp với UV map.
- [ ] Đã tạo hoặc chỉnh một color map bằng Texture Paint.
- [ ] Đã phân biệt dữ liệu màu với normal/non-color data.
- [ ] Đã thiết lập camera, light và thực hiện test render.
- [ ] Đã lưu một scene hoàn chỉnh có thể dùng làm portfolio study.

## Ghi chú về nguồn

> Đây là bài recap được biên soạn từ nội dung và transcript trong Sections 16–21 của thư mục khóa học. Thư mục Section 36 hiện không có transcript riêng cho bài Bonus này; các bước trên là bản ôn tập nối liền từ material đến final render.

---

# Bài luyện tập

## Mục tiêu


## Đề bài


## Yêu cầu hoàn thành

- [ ] 
- [ ] 
- [ ] 

## Kết quả / lời giải


## Ghi chú
