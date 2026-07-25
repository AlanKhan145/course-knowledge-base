# 059 — Advanced Material Examples

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 07 — Material Creation |
| **Bài học** | Advanced Material Examples |
| **Thời lượng** | 11:38 |
| **Chủ đề chính** | Công thức nhanh cho kim loại, vàng, da, kính, ngọc, vải, HDRI |

## 1. Mục tiêu bài học

- Nắm được công thức thông số Principled BSDF cho từng loại vật liệu phổ biến.
- Biết dùng HDRI từ Poly Haven làm ánh sáng môi trường và nguồn phản chiếu chân thực.
- Nhận biết sự khác biệt về IOR giữa các loại vật liệu trong suốt.

## 2. Nội dung chính

Bài học tổng hợp nhanh các "công thức" thông số cho những vật liệu thường gặp nhất, dựa trên nền tảng Principled BSDF đã học ở bài 056:

- **Kim loại đánh bóng (polished metal)**: Metallic = 1, Roughness thấp (0.05-0.15) để có phản chiếu gần như gương, Base Color là màu kim loại thật (xám bạc cho thép/nhôm) vì kim loại không có Base Color trắng thuần.
- **Vàng (gold)**: Metallic = 1, Base Color vàng ánh cam đặc trưng (khoảng RGB 1.0, 0.766, 0.336), Roughness thấp đến trung bình tùy độ đánh bóng.
- **Da (leather)**: Metallic = 0, Roughness trung bình-cao với biến thiên qua texture, Base Color nâu trầm, thêm Bump từ Noise Texture tần số trung bình để tạo vân da nhăn đặc trưng.
- **Kính (glass)**: dùng Glass BSDF hoặc Principled BSDF với Transmission = 1, IOR = 1.45 (thủy tinh thường), Roughness gần 0 cho kính trong hoàn toàn.
- **Ngọc/đá quý (gemstone)**: Transmission cao, IOR cao hơn kính (kim cương ~2.42, các loại đá quý khác 1.5-1.9), thường kết hợp thêm chút Base Color để có sắc màu đá quý.
- **Vải (fabric)**: Metallic = 0, Roughness cao, có thể dùng thêm Sheen (nếu phiên bản Blender hỗ trợ) để mô phỏng ánh sáng tán xạ ở sợi vải viền vật thể (fresnel-like edge highlight đặc trưng của vải).

**HDRI từ Poly Haven** (trang web cung cấp HDRI/texture miễn phí, không giới hạn bản quyền) được tải và gán vào World Properties > Color > Environment Texture, cung cấp ánh sáng môi trường 360° chân thực cùng nguồn phản chiếu tự nhiên cho các vật liệu kim loại/kính — hiệu quả hơn nhiều so với chỉ dùng vài Area Light dựng tay khi cần đánh giá vật liệu phản chiếu cao.

## 3. Quy trình thực hành gợi ý

1. Tạo lần lượt 4-5 material slot trên các quả cầu test, áp dụng công thức thông số cho kim loại, vàng, da, kính theo hướng dẫn ở trên.
2. Tải một HDRI từ Poly Haven, gán vào World Properties > Environment Texture.
3. Chuyển Viewport Shading sang Rendered, quan sát các quả cầu vật liệu phản chiếu HDRI khác nhau tùy Roughness/Metallic.
4. So sánh IOR giữa vật liệu kính (1.45) và một vật liệu ngọc tưởng tượng (1.7-1.9), quan sát độ khúc xạ khác biệt.
5. Thử thêm Sheen cho vật liệu vải và quan sát viền sáng đặc trưng khi nhìn ngược sáng.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Gán Environment Texture cho World | World Properties > Color > Environment Texture |
| Chuyển Viewport Shading sang Rendered | `Z` (pie menu) |
| Chỉnh IOR | Trường "IOR" trong Principled BSDF |

## 5. Lưu ý & lỗi thường gặp

- Đặt Base Color trắng thuần cho kim loại là lỗi phổ biến — kim loại thực tế luôn có màu ánh kim đặc trưng riêng (vàng, đồng, bạc) chứ không phản chiếu trắng tinh.
- Roughness = 0 tuyệt đối cho kính/kim loại tạo phản chiếu quá hoàn hảo, thiếu chân thực — hầu hết vật liệu thật có Roughness nhỏ nhưng khác 0.
- Dùng sai IOR (ví dụ IOR của kim cương cho một viên đá thường) khiến độ khúc xạ trông sai lệch với cảm nhận trực giác của người xem.
- HDRI độ phân giải thấp khi zoom cận cảnh vật liệu phản chiếu cao sẽ lộ rõ răng cưa/mờ nhòe trong phản chiếu.

## 6. Checklist thực hành

- [ ] Đã tạo được vật liệu kim loại và vàng theo đúng công thức thông số.
- [ ] Đã tạo được vật liệu da, kính và ngọc cơ bản.
- [ ] Đã tải và gán thành công một HDRI từ Poly Haven.
- [ ] Đã quan sát và hiểu ảnh hưởng của IOR khác nhau giữa các vật liệu trong suốt.

## 7. Tóm tắt

Bài học này là một bảng tra cứu nhanh các thông số khởi điểm hợp lý cho những vật liệu phổ biến nhất, kết hợp HDRI Poly Haven để đánh giá chúng trong điều kiện ánh sáng môi trường chân thực — nền tảng trực tiếp cho việc texturing trang phục, phụ kiện, gậy và đèn ở dự án cuối khóa.
