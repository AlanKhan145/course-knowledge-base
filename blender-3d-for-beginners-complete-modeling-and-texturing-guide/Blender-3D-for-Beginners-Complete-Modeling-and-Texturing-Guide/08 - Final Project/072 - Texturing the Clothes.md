# 072 — Texturing the Clothes

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 08 — Final Project |
| **Bài học** | Texturing the Clothes |
| **Thời lượng** | 15:39 |
| **Chủ đề chính** | Áp dụng vật liệu vải chuyên nghiệp lên trang phục nhân vật |

## 1. Mục tiêu bài học

- Áp dụng công thức vật liệu vải/da từ Module 07 lên trang phục thật của nhân vật.
- Thêm biến thiên màu và độ mòn theo Curvature/Ambient Occlusion.
- Phân biệt vật liệu cho từng loại trang phục khác nhau (vải áo, da thắt lưng...).

## 2. Nội dung chính

Bài học áp dụng trực tiếp kỹ thuật từ bài 057 (Professional Hard-Surface Material) và 058 (Professional Organic Material) lên trang phục thật của nhân vật ếch đã hoàn thiện ở bài 064. Mỗi loại vật liệu trang phục cần công thức riêng: **vải áo/vest** dùng Roughness cao, Metallic = 0, kết hợp Noise Texture tần số trung bình cho biến thiên màu sợi vải và Bump nhẹ cho kết cấu dệt; **thắt lưng/dây da** dùng công thức da (Roughness trung bình, Bump từ Noise tần số thấp hơn tạo vân da lớn).

**Hiệu ứng mài mòn theo Curvature** (kỹ thuật từ bài 057) được áp dụng đặc biệt hiệu quả ở trang phục: các nếp gấp lồi (gờ vai, viền cổ áo, mép gấu áo) — nơi vải cọ xát nhiều nhất khi mặc — nhận thêm lớp màu bạc màu/sáng hơn qua node Geometry (Pointiness) kết hợp ColorRamp, trong khi các nếp gấp lõm giữ màu đậm nguyên bản, mô phỏng chân thực trang phục đã qua sử dụng của một nhân vật phiêu lưu.

**Biến thiên màu tổng thể** giữa các mảnh trang phục khác nhau (áo, quần, thắt lưng) nên được lên kế hoạch theo bảng màu hài hòa đã xác định từ bước Analysis and Planning (bài 061) — tránh mỗi mảnh một màu ngẫu nhiên thiếu tính thống nhất thẩm mỹ.

## 3. Quy trình thực hành gợi ý

1. Chọn từng phần trang phục, tạo material riêng theo đúng chất liệu (vải, da).
2. Áp dụng công thức Roughness/Metallic phù hợp cho từng loại chất liệu.
3. Thêm Noise Texture cho biến thiên màu và Bump cho kết cấu dệt/vân da.
4. Thêm node Geometry (Pointiness) kết hợp ColorRamp để tạo hiệu ứng mài mòn ở các gờ nổi.
5. Đối chiếu bảng màu tổng thể giữa các mảnh trang phục để đảm bảo hài hòa.
6. Kiểm tra kết quả trong Rendered Viewport Shading dưới ánh sáng HDRI đã thiết lập ở bài 059.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Node Geometry (Pointiness) | Add > Input > Geometry |
| ColorRamp | Add > Converter > Color Ramp |
| Node Bump | Add > Vector > Bump |
| Xem preview node (Node Wrangler) | `Ctrl + Shift + Click` |

## 5. Lưu ý & lỗi thường gặp

- Dùng cùng một công thức vật liệu cho mọi loại trang phục (vải và da giống hệt nhau) khiến các chất liệu khác nhau trông đồng nhất, thiếu tính thuyết phục.
- Hiệu ứng mài mòn quá mạnh khiến trang phục trông rách nát thay vì chỉ "đã qua sử dụng".
- Bảng màu trang phục không nhất quán với kế hoạch màu sắc đã định ở bài 061 làm nhân vật mất đi tính thẩm mỹ tổng thể.

## 6. Checklist thực hành

- [ ] Đã tạo vật liệu vải riêng biệt với vật liệu da cho các phần trang phục khác nhau.
- [ ] Đã thêm biến thiên màu và kết cấu bề mặt cho từng vật liệu.
- [ ] Đã áp dụng hiệu ứng mài mòn theo Curvature/Pointiness ở các gờ nổi.
- [ ] Đã kiểm tra sự hài hòa màu sắc tổng thể của trang phục dưới ánh sáng HDRI.

## 7. Tóm tắt

Texturing trang phục là bước áp dụng thực tế đầu tiên của toàn bộ kỹ thuật vật liệu học ở Module 07 vào dự án cuối khóa, đòi hỏi phân biệt đúng chất liệu cho từng phần và duy trì sự nhất quán thẩm mỹ tổng thể của nhân vật.
