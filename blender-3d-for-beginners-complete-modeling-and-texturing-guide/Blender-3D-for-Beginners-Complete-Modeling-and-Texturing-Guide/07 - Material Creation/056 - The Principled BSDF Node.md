# 056 — The Principled BSDF Node

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 07 — Material Creation |
| **Bài học** | The Principled BSDF Node |
| **Thời lượng** | 7:55 |
| **Chủ đề chính** | Phân tích chi tiết shader vật lý mặc định của Blender |

## 1. Mục tiêu bài học

- Hiểu Principled BSDF là gì và vì sao nó là shader "tất cả trong một" dựa trên nguyên lý PBR (Physically Based Rendering).
- Nắm rõ vai trò của từng tham số chính: Base Color, Metallic, Roughness, IOR, Alpha.
- Hiểu cách input **Normal/Bump** ảnh hưởng chi tiết bề mặt mà không cần thêm hình học.
- Làm quen với **Subsurface Scattering** và **Transmission** cho vật liệu bán trong suốt và trong suốt.
- Biết ánh xạ các tham số này vào vật liệu thực tế: kim loại, nhựa, da, kính.

## 2. Nội dung chính

**Principled BSDF** là shader mặc định và trung tâm của hầu hết vật liệu trong Blender, xây dựng theo chuẩn **PBR (Physically Based Rendering)** — nghĩa là các tham số của nó được thiết kế để mô phỏng cách ánh sáng tương tác với vật liệu thực theo quy luật vật lý, thay vì các thông số "giả lập" tùy ý. Điều này giúp vật liệu trông đúng dưới mọi điều kiện ánh sáng khác nhau (yếu tố "physically based" tương thích ánh sáng).

Các tham số cốt lõi:

- **Base Color**: màu sắc gốc/albedo của vật liệu. Với kim loại, đây gần như là màu phản chiếu duy nhất (kim loại không có phản xạ khuếch tán); với phi kim, đây là màu khuếch tán dưới ánh sáng trắng.
- **Metallic** (0-1): chuyển đổi giữa mô hình phi kim (dielectric, có phản xạ khuếch tán + phản xạ specular yếu) và kim loại (conductor, chỉ có phản xạ specular mạnh nhuộm màu Base Color). Giá trị trung gian hiếm gặp trong tự nhiên, thường chỉ dùng cho hiệu ứng đặc biệt hoặc mask chuyển tiếp (rỉ sét ăn vào kim loại).
- **Roughness** (0-1): độ nhám vi mô của bề mặt, quyết định phản chiếu sắc nét (mirror, gần 0) hay khuếch tán mờ (gần 1).
- **IOR** (Index of Refraction, mặc định 1.5): chỉ số khúc xạ, ảnh hưởng cường độ phản xạ Fresnel ở vật liệu phi kim và độ bẻ cong tia sáng khi có Transmission. Giá trị tham khảo: nước ≈ 1.33, kính ≈ 1.45-1.52, kim cương ≈ 2.42.
- **Alpha** (0-1): độ trong suốt tổng thể theo kiểu "cắt" (cần Blend Mode phù hợp trong Material Properties > Settings để hiển thị đúng trong Eevee, ví dụ Alpha Blend hoặc Alpha Hashed); khác với Transmission ở chỗ Alpha không bẻ cong ánh sáng, chỉ làm vật thể mờ/biến mất từng phần.

Input **Normal** (thường nhận từ node **Normal Map**, đọc từ texture normal map dạng ảnh) hoặc **Bump** (thường nhận từ node **Bump**, đọc từ một texture grayscale/height) cho phép mô phỏng chi tiết nhấp nhô nhỏ (vết xước, lỗ chân lông, vân bề mặt) mà không cần thêm polygon thật — ánh sáng được tính toán như thể bề mặt có gồ ghề đó, dù hình học vẫn phẳng.

**Subsurface** (Subsurface Scattering — SSS) mô phỏng ánh sáng xuyên vào bên trong vật liệu, tán xạ và ló ra ở điểm khác gần đó — hiệu ứng đặc trưng của da người, sáp, sữa, lá cây mỏng. Tham số Subsurface Weight kiểm soát cường độ, Subsurface Radius/Color kiểm soát màu sắc ánh sáng tán xạ (thường ngả đỏ/hồng ở da vì máu dưới da hấp thụ ánh sáng xanh/lam mạnh hơn).

**Transmission** mô phỏng ánh sáng xuyên hoàn toàn qua vật liệu (khúc xạ theo IOR) — dùng cho kính, nước, pha lê. Transmission Weight cao kết hợp Roughness thấp cho kính trong suốt sắc nét; Roughness cao hơn cho kính mờ/sương (frosted glass).

## 3. Quy trình thực hành gợi ý

1. Tạo một Sphere mới với Principled BSDF mặc định, quan sát giá trị mặc định (Metallic=0, Roughness=0.5, IOR=1.5).
2. Chỉnh Base Color và Metallic=1, Roughness thấp để tạo kim loại; so sánh khi Metallic=0 cùng Roughness.
3. Thêm node **Normal Map** nối vào input Normal, thử với một texture normal map mẫu (hoặc tạm dùng Noise Texture qua node Bump) để thấy chi tiết bề mặt giả.
4. Tăng Subsurface Weight lên khoảng 0.3-0.5 trên Base Color màu da, quan sát ánh sáng "ngấm" vào rìa vật thể ở vùng ngược sáng.
5. Đặt Transmission Weight=1, Roughness gần 0, IOR=1.45 để tạo vật liệu kính; thử tăng Roughness lên 0.3 để thấy kính mờ.
6. Thử giảm Alpha xuống 0.5 với Blend Mode Alpha Blend để thấy khác biệt so với Transmission.

## 4. Phím tắt & công cụ liên quan

| Tham số | Vị trí trên Principled BSDF | Ảnh hưởng |
|---|---|---|
| Base Color | Đầu node | Màu/albedo gốc |
| Metallic | Giữa node | Kim loại (1) hay phi kim (0) |
| Roughness | Giữa node | Độ sắc nét phản chiếu |
| IOR | Nhóm Transmission | Cường độ Fresnel, khúc xạ |
| Alpha | Cuối node | Độ trong suốt kiểu cắt |
| Normal | Input Normal | Chi tiết bề mặt giả (cần Normal Map node) |
| Subsurface Weight/Radius | Nhóm Subsurface | Tán xạ dưới bề mặt |
| Transmission Weight | Nhóm Transmission | Độ trong suốt khúc xạ thật |
| Thêm Normal Map node | `Shift + A > Vector > Normal Map` |
| Thêm Bump node | `Shift + A > Vector > Bump` |

## 5. Lưu ý & lỗi thường gặp

- Đặt Metallic=1 mà không nối Normal/HDRI phù hợp khiến kim loại trông "chết", không phản chiếu gì — kim loại luôn cần môi trường phản chiếu.
- Nối trực tiếp texture ảnh (Image Texture) vào input Normal thay vì qua node **Normal Map** — kết quả sẽ sai vì thiếu bước chuyển đổi không gian tangent.
- Nhầm lẫn Alpha và Transmission: Alpha chỉ "làm biến mất" một phần, không bẻ cong tia sáng như kính thật; dùng Alpha cho kính sẽ trông phẳng, giả.
- Bật Subsurface Weight quá cao trên vật liệu không cần thiết khiến vật thể trông như "phát sáng từ trong" bất thường, mất chi tiết bề mặt.
- Trong Eevee, quên đổi **Blend Mode** (Material Properties > Settings > Blend Mode) khi dùng Alpha hoặc Transmission — mặc định Opaque sẽ khiến vật liệu trông đặc dù đã chỉnh Alpha.

## 6. Checklist thực hành

- [ ] Đã hiểu và thử nghiệm Base Color, Metallic, Roughness trên cùng một vật thể.
- [ ] Đã kết nối một Normal Map hoặc Bump node và thấy chi tiết bề mặt giả.
- [ ] Đã thử Subsurface Weight trên vật liệu da/sáp mẫu.
- [ ] Đã tạo được vật liệu kính bằng Transmission + IOR + Roughness thấp.
- [ ] Phân biệt được rõ Alpha và Transmission.

## 7. Tóm tắt

Principled BSDF gom mọi khía cạnh của một vật liệu vật lý — màu sắc, độ kim loại, độ nhám, khúc xạ, tán xạ dưới da, trong suốt — vào một node duy nhất; hiểu rõ từng tham số là nền tảng bắt buộc trước khi xây dựng các vật liệu hard-surface và organic chuyên nghiệp ở các bài tiếp theo.
