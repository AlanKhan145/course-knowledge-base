---
title: "Bài 08 — Normal, metallic, roughness và VFX chống cảm giác nhựa"
course: "Từ model AI đến Game-Ready Asset"
module: "Vật liệu và hiệu ứng"
duration_minutes: 45
source: "Video A 05:09–05:55"
language: "vi"
format: "self-study"
---

# Bài 08 — Normal, metallic, roughness và VFX chống cảm giác nhựa

> **Thời lượng gợi ý:** 45 phút · **Nguồn:** Video A 05:09–05:55  
> **Hình thức:** Tự học có hướng dẫn, thực hành và tự kiểm tra.

## Mục tiêu
- Biết vì sao một model AI nhìn giống nhựa và cách kiểm tra PBR.
- Phân biệt **normal map suy đoán từ ảnh** và **normal map bake từ hình học high-poly**.
- Thêm smoke/aura phù hợp với asset mà không che thiết kế.

## Quy trình theo video A
1. Dùng Base Color làm đầu vào cho một công cụ tạo maps (normal, metallic, roughness) như video hướng dẫn.
2. Kiểm tra output: normal có đúng chiều ánh sáng không, metallic có phản ánh vùng kim loại không, roughness có chỗ mờ/chỗ bóng hợp lý không.
3. Trong Unity, gán normal map với **Texture Type: Normal Map** khi phù hợp và chọn cấu hình import nhất quán.
4. Kiểm tra metallic/smoothness hoặc roughness theo **quy ước shader**: Unity Standard/URP Lit thường đọc smoothness thay vì roughness trực tiếp, nên có thể phải **đảo kênh** (`smoothness = 1 - roughness`).
5. Dùng Particle System/VFX Graph cho khói, tia lửa, aura; tối ưu số hạt, overdraw và tần suất xuất hiện.

## Không nhầm bản đồ normal
**Suy đoán từ ảnh màu** tạo độ nổi ước lượng, có thể nhầm một dải màu đậm với hốc sâu. **Bake high→low** lấy khác biệt pháp tuyến từ mesh độ chi tiết cao và thường sát hình học hơn nếu thiết lập chính xác. Không phải normal nào cũng cải thiện chất lượng.

## Kiểm thử PBR
| Vấn đề | Khả năng | Cách sửa |
|---|---|---|
| Toàn bộ prop bóng nhựa | Roughness thấp/smoothness cao | Chỉnh theo chất liệu từng vùng |
| Ánh sáng lồi lõm bị đảo | Normal DirectX/OpenGL hoặc hướng kênh Y | Kiểm tra quy ước engine/nhập ảnh |
| Kim loại tối quá mức | Thiếu môi trường phản chiếu | Thêm environment/reflection phù hợp |
| Khói che model | Overdraw, kích thước hạt lớn | Giảm size, opacity, tốc độ phát |

## Thực hành
Tạo 3 biến thể material: nhựa, kim loại cũ, kim loại năng lượng. Giữ ánh sáng không đổi, so sánh dưới cùng camera.

**Đầu ra:** Ảnh before/after và material PBR được kiểm tra.
