# 009 — Material Reflections

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 01 — Introduction & Setup |
| **Bài học** | Material Reflections |
| **Thời lượng** | 13:38 |
| **Chủ đề chính** | Độ phản chiếu của vật liệu |

## 1. Mục tiêu bài học

- Hiểu vai trò của tham số **Roughness** và **Metallic** trong Principled BSDF.
- Biết cách tạo vật liệu kim loại bóng, kim loại xước, nhựa mờ, và các mức phản chiếu trung gian.
- Làm quen với **IOR** (Index of Refraction) và tham số Specular liên quan phản xạ phi kim loại.
- Biết đánh giá phản chiếu chính xác nhất bằng Rendered View với ánh sáng thực trong scene.

## 2. Nội dung chính

Sau Base Color, hai tham số quan trọng nhất quyết định "cảm giác chất liệu" của một vật thể là:

- **Roughness** (0 → 1): độ nhám bề mặt. Giá trị 0 cho bề mặt phản chiếu như gương (mirror-like), giá trị 1 cho bề mặt mờ hoàn toàn khuếch tán ánh sáng (matte/diffuse). Giá trị trung gian tạo phản chiếu mờ (glossy blur) — ví dụ nhựa bóng thường ở khoảng 0.2-0.4, gỗ mờ khoảng 0.6-0.8.
- **Metallic** (0 → 1): xác định vật liệu là phi kim (0) hay kim loại (1). Kim loại không có phản xạ khuếch tán (diffuse) như phi kim — toàn bộ màu sắc kim loại đến từ Base Color kết hợp phản chiếu môi trường xung quanh. Kim loại thực tế (vàng, đồng, sắt) luôn có Metallic = 1, còn hầu hết vật liệu đời thường (nhựa, gỗ, vải, da, đá) có Metallic = 0.

Với vật liệu phi kim (Metallic = 0), độ phản chiếu ánh sáng còn được kiểm soát qua **IOR (Index of Refraction)** — mặc định 1.5 (phù hợp phần lớn vật liệu thông thường như nhựa, kính). IOR càng cao, phản chiếu Fresnel ở góc nhìn xiên càng mạnh (kính = 1.45, kim cương ≈ 2.4, nước ≈ 1.33).

Ngoài ra Principled BSDF (từ Blender 4.x) còn có nhóm tham số nâng cao: **Transmission** (độ trong suốt, dùng cho kính/nước), **Clearcoat** (lớp phủ bóng thứ hai, dùng cho sơn xe/gỗ đánh vecni), **Sheen** (dùng cho vải). Trong module 1, người học chỉ cần nắm chắc Roughness và Metallic — các tham số nâng cao sẽ hữu ích khi làm vật liệu cho ngọn hải đăng ở các bài sau.

Để đánh giá đúng độ phản chiếu, nên chuyển sang **Rendered Viewport** với ít nhất một nguồn sáng hoặc World HDRI — Material Preview dùng ánh sáng studio giả lập nên có thể không phản ánh chính xác 100% kết quả cuối.

## 3. Quy trình thực hành gợi ý

1. Tạo một vật liệu mới trên một Sphere, đặt Metallic = 1, Roughness = 0.05 để tạo kim loại bóng như gương.
2. Tăng dần Roughness lên 0.5 rồi 1.0, quan sát phản chiếu mờ dần.
3. Đặt Metallic = 0, thử các mức Roughness khác nhau để tạo nhựa bóng và nhựa mờ.
4. Thử chỉnh IOR ở một vật liệu phi kim (giữ Metallic = 0, Roughness thấp) để thấy ảnh hưởng đến phản chiếu Fresnel ở rìa vật thể.
5. Thêm một Sun Light hoặc World HDRI đơn giản, chuyển Rendered View để đánh giá kết quả gần với thực tế.

## 4. Phím tắt & công cụ liên quan

| Tham số | Vị trí | Ảnh hưởng |
|---|---|---|
| Roughness | Principled BSDF | Độ nhám/độ bóng bề mặt |
| Metallic | Principled BSDF | Kim loại (1) hay phi kim (0) |
| IOR | Principled BSDF | Cường độ phản xạ Fresnel (phi kim) |
| Transmission | Principled BSDF | Độ trong suốt (kính, nước) |
| Xem kết quả thực tế | `Z` > Rendered | Đánh giá phản chiếu chính xác |

## 5. Lưu ý & lỗi thường gặp

- Đặt Metallic = 1 nhưng không có môi trường phản chiếu (World trống, không HDRI) sẽ khiến vật liệu kim loại trông đen thui — kim loại luôn cần "cái gì đó" để phản chiếu.
- Nhầm lẫn Roughness thấp = "sáng hơn" — thực ra Roughness chỉ ảnh hưởng độ sắc nét của phản chiếu, không phải độ sáng tổng thể.
- Đánh giá vật liệu chỉ ở Material Preview có thể sai lệch so với kết quả render cuối cùng bằng ánh sáng thật trong scene.
- Giữ IOR mặc định 1.5 là đủ cho phần lớn trường hợp; chỉ cần chỉnh khi mô phỏng vật liệu đặc biệt như kính hoặc kim cương.

## 6. Checklist thực hành

- [ ] Đã tạo được vật liệu kim loại bóng (Metallic=1, Roughness thấp).
- [ ] Đã tạo được vật liệu nhựa mờ (Metallic=0, Roughness cao).
- [ ] Đã thử chỉnh IOR trên vật liệu phi kim.
- [ ] Đã đánh giá kết quả bằng Rendered View có ánh sáng thật.

## 7. Tóm tắt

Roughness và Metallic là hai tham số then chốt quyết định cảm giác chất liệu trong Principled BSDF, kết hợp với IOR cho các hiệu ứng phản xạ tinh tế hơn ở vật liệu phi kim. Luôn đánh giá kết quả cuối cùng bằng Rendered View với ánh sáng thật.
