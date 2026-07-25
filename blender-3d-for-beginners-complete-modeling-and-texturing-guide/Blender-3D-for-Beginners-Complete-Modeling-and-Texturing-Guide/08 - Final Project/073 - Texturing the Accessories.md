# 073 — Texturing the Accessories

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 08 — Final Project |
| **Bài học** | Texturing the Accessories |
| **Thời lượng** | 14:57 |
| **Chủ đề chính** | Vật liệu cho ba lô, dây thừng, gậy gỗ và đèn |

## 1. Mục tiêu bài học

- Tạo vật liệu sợi đan cho ba lô, vân xoắn cho dây thừng, vân gỗ cho gậy, kim loại + kính phát sáng cho đèn.
- Kết hợp nhiều lớp texture khác nhau phù hợp với từng loại chất liệu phụ kiện.

## 2. Nội dung chính

Mỗi phụ kiện đòi hỏi công thức vật liệu riêng biệt phản ánh đúng chất liệu vật lý: **ba lô đan lát** dùng Roughness cao, kết hợp Noise/Voronoi tần số cao chạy qua Bump để nhấn mạnh kết cấu sợi đan đã dựng bằng hình học ở bài 067 — vật liệu ở đây chủ yếu bổ trợ thêm chi tiết vi mô (độ nhám sợi) mà hình học không thể hiện hết, không cần gánh vác toàn bộ việc tạo hoa văn.

**Dây thừng** dùng một Wave Texture hoặc Noise Texture kéo dài theo phương dọc dây (dùng Mapping node để xoay đúng hướng) tạo vân xoắn sợi rõ nét kết hợp Bump, màu nâu vàng đặc trưng của sợi gai/đay. **Cây gậy gỗ** dùng kỹ thuật vân gỗ kinh điển: một Wave Texture với Distortion cao tạo vân gỗ uốn lượn tự nhiên, nối qua ColorRamp để tạo dải màu nâu đậm-nhạt xen kẽ, kết hợp thêm Noise tần số cao cho độ nhám bề mặt gỗ.

**Đèn lồng** cần hai vật liệu tách biệt: khung kim loại dùng công thức kim loại đã học ở bài 059 (Metallic = 1, Roughness thấp-trung bình, có thể thêm gỉ sét nhẹ bằng Curvature/AO tương tự vật liệu hard-surface mài mòn ở bài 057), và bầu đèn dùng vật liệu kính (Transmission cao, IOR ~1.45) kết hợp thêm node **Emission** trộn vào qua Add Shader để mô phỏng ánh sáng phát ra từ bên trong, tạo điểm nhấn ánh sáng ấm cho toàn bộ bố cục render.

## 3. Quy trình thực hành gợi ý

1. Tạo vật liệu ba lô: Roughness cao, Bump từ Voronoi tần số cao theo hình dạng sợi đan.
2. Tạo vật liệu dây thừng: Wave Texture dọc theo dây, Bump, màu nâu vàng gai/đay.
3. Tạo vật liệu gậy gỗ: Wave Texture Distortion cao, ColorRamp tạo dải vân gỗ, Noise cho độ nhám.
4. Tạo vật liệu khung đèn: công thức kim loại có gỉ sét nhẹ theo Curvature/AO.
5. Tạo vật liệu bầu đèn: Glass/Transmission kết hợp Emission qua Add Shader.
6. Kiểm tra tổng thể tất cả phụ kiện dưới cùng điều kiện ánh sáng HDRI.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Wave Texture | Add > Texture > Wave Texture |
| Add Shader (trộn Glass + Emission) | Add > Shader > Add Shader |
| Mapping node (xoay hướng texture) | Add > Vector > Mapping |
| Node Geometry (Pointiness cho gỉ sét) | Add > Input > Geometry |

## 5. Lưu ý & lỗi thường gặp

- Dùng cùng một Wave Texture với thông số giống hệt cho cả dây thừng và gậy gỗ khiến hai chất liệu hoàn toàn khác nhau trông giống nhau.
- Emission quá mạnh trên bầu đèn có thể gây cháy sáng (overexposure) mất chi tiết khi kết hợp Glare ở bước Compositor sau này — nên test cường độ vừa phải trước.
- Gỉ sét trên khung đèn phân bố đều thay vì tập trung ở các gờ/góc theo Curvature khiến hiệu ứng mài mòn trông giả tạo.

## 6. Checklist thực hành

- [ ] Đã tạo vật liệu riêng biệt cho ba lô, dây thừng, gậy gỗ và đèn.
- [ ] Đã thêm chi tiết mài mòn/gỉ sét hợp lý cho khung kim loại đèn.
- [ ] Đã thiết lập vật liệu kính + Emission cho bầu đèn.
- [ ] Đã kiểm tra tổng thể các phụ kiện dưới cùng điều kiện ánh sáng.

## 7. Tóm tắt

Texturing phụ kiện đòi hỏi tư duy phân loại chất liệu chính xác — mỗi prop (ba lô, dây, gậy, đèn) cần một công thức node riêng phản ánh đúng vật liệu vật lý của nó, đồng thời bầu đèn phát sáng sẽ trở thành điểm nhấn ánh sáng quan trọng cho bước render và compositing cuối cùng.
