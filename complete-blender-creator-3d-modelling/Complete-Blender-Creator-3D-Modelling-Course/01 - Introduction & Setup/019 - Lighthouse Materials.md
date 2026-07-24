# 019 — Lighthouse Materials

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 01 — Introduction & Setup |
| **Bài học** | Lighthouse Materials |
| **Thời lượng** | 8:10 |
| **Chủ đề chính** | Tạo vật liệu cho ngọn hải đăng |

## 1. Mục tiêu bài học

- Áp dụng tổng hợp kiến thức Material Colours, Material Reflections và Material Slots vào dự án ngọn hải đăng.
- Lên kế hoạch bảng vật liệu cho từng bộ phận: thân sơn, dải sọc, phần đá nền, kính đèn, mái kim loại.
- Biết cách phối hợp Roughness/Metallic khác nhau để phân biệt chất liệu đá, sơn, kính, kim loại trên cùng một scene.
- Kiểm tra tính nhất quán màu sắc/chất liệu tổng thể của mô hình dưới Rendered View.

## 2. Nội dung chính

Ở bài này, các kỹ năng vật liệu đã học trước đó được áp dụng trực tiếp vào ngọn hải đăng đã modeling. Một bảng vật liệu điển hình cho ngọn hải đăng low-poly gồm:

- **Thân sơn (Body Paint)**: thường là trắng hoặc màu sáng, Metallic = 0, Roughness trung bình (khoảng 0.4-0.6) để có độ bóng nhẹ như sơn ngoài trời.
- **Dải sọc trang trí (Stripe)**: thường đỏ hoặc đen, cùng thông số Roughness/Metallic với thân nhưng khác Base Color — dùng Material Slots (bài trước) để phân vùng theo Face.
- **Nền đá (Rock Base)**: màu xám/nâu tự nhiên, Roughness cao (0.8-0.9) vì đá thường không bóng, Metallic = 0.
- **Kính đèn (Lantern Glass)**: có thể dùng Roughness rất thấp kết hợp Transmission cao (gần 1) để mô phỏng kính trong suốt; nếu muốn đơn giản hóa cho phong cách low-poly, có thể dùng vật liệu Emission (phát sáng) thay vì kính thật để tạo cảm giác đèn đang sáng.
- **Mái/khung kim loại**: Metallic = 1, Roughness thấp đến trung bình tùy muốn kim loại mới bóng hay đã cũ xỉn màu.

Với phần đèn phát sáng, node **Emission** (thêm qua Shader Editor, hoặc dùng trực tiếp tham số **Emission Color/Strength** có sẵn ngay trong Principled BSDF) tạo hiệu ứng vật liệu tự phát sáng — không cần Light object riêng, hữu ích để làm điểm nhấn "đèn hải đăng đang sáng" và sẽ được khai thác thêm ở bài Compositing & Glow cuối module.

## 3. Quy trình thực hành gợi ý

1. Liệt kê các bộ phận cần vật liệu riêng: thân, sọc, nền đá, kính đèn, mái.
2. Với object thân ngọn hải đăng, dùng Material Slots đã học để tạo 2 slot: thân trắng và sọc đỏ, Assign face tương ứng.
3. Với nền đá, tạo vật liệu xám nâu, Roughness cao, kiểm tra dưới Rendered View để đảm bảo không bóng loáng phi thực tế.
4. Với phần đèn, thử nghiệm cả hai cách: (a) Roughness thấp + Transmission cao để giả kính, hoặc (b) tăng Emission Strength để đèn tự phát sáng — chọn cách phù hợp phong cách mong muốn.
5. Với mái/khung kim loại nếu có, đặt Metallic = 1 và thử vài mức Roughness khác nhau.
6. Bật Rendered View, xoay quanh toàn bộ mô hình để kiểm tra tính nhất quán ánh sáng/chất liệu từ mọi góc.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Vị trí |
|---|---|
| Thêm vật liệu mới | Material Properties > "+ New" |
| Gán vật liệu theo vùng | Material Slots + Assign (Edit Mode) |
| Tăng Emission Strength | Principled BSDF > Emission Color/Strength |
| Kiểm tra kết quả thực tế | `Z` > Rendered |

## 5. Lưu ý & lỗi thường gặp

- Dùng Roughness quá thấp cho vật liệu đá khiến nền trông như nhựa bóng phi thực tế — đá tự nhiên gần như luôn có Roughness cao.
- Emission Strength quá cao có thể gây "cháy sáng" (overexposed) trong render, làm mất chi tiết vùng đèn — nên thử nhiều mức và quan sát qua Rendered View kết hợp Color Management đã học ở bài Viewport & Rendering.
- Quên rằng vật liệu kính thật (Transmission) cần ánh sáng xuyên qua để hiển thị đúng, và trong Eevee cần bật thêm tùy chọn Raytracing/Screen Space Refraction trong Render Properties để có hiệu ứng khúc xạ chính xác.
- Không nhất quán mức Roughness giữa các bộ phận cùng chất liệu (ví dụ thân và sọc cùng là sơn nhưng khác độ bóng) khiến scene trông thiếu logic vật lý.

## 6. Checklist thực hành

- [ ] Đã lên bảng vật liệu cho các bộ phận chính của ngọn hải đăng.
- [ ] Đã áp dụng Material Slots để phân vùng thân/sọc.
- [ ] Đã tạo vật liệu đá với Roughness cao phù hợp.
- [ ] Đã thử nghiệm vật liệu đèn (kính hoặc emission).
- [ ] Đã kiểm tra tổng thể dưới Rendered View.

## 7. Tóm tắt

Bài học áp dụng tổng hợp Material Colours, Material Reflections và Material Slots để xây dựng bảng vật liệu hoàn chỉnh cho ngọn hải đăng — từ sơn thân, đá nền, đến kính/đèn phát sáng — chuẩn bị nền tảng cho bước lên ánh sáng scene ở bài tiếp theo.
