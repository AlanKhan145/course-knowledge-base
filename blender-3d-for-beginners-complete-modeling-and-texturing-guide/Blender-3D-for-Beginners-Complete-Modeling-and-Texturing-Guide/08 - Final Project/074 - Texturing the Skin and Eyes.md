# 074 — Texturing the Skin and Eyes

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 08 — Final Project |
| **Bài học** | Texturing the Skin and Eyes |
| **Thời lượng** | 8:16 |
| **Chủ đề chính** | Vật liệu da ếch với Subsurface Scattering và mắt ướt phản chiếu |

## 1. Mục tiêu bài học

- Áp dụng công thức vật liệu organic từ bài 058 lên da nhân vật ếch thật.
- Tạo họa tiết đốm da đặc trưng loài ếch bằng Voronoi.
- Dựng vật liệu mắt ướt với độ tương phản Roughness cao giữa giác mạc và tròng đen.

## 2. Nội dung chính

Vật liệu da ếch áp dụng trực tiếp công thức từ bài 058 (Subsurface Scattering + chồng lớp Noise/Voronoi) nhưng với đặc trưng riêng của loài ếch: **họa tiết đốm da** (thường thấy ở lưng và đùi ếch) dùng một lớp **Voronoi Texture** riêng, qua ColorRamp điều chỉnh để chỉ hiện các đốm rời rạc kích thước không đều thay vì pattern lưới đều đặn — trộn với màu da nền (xanh lá/nâu tùy thiết kế nhân vật đã lên kế hoạch ở bài 061) qua Mix Color.

**Vùng bụng** thường có màu và độ nhám khác biệt rõ rệt so với lưng (sáng hơn, mịn hơn) ở hầu hết loài ếch thật — nên tách riêng bằng một mask dựa trên Texture Coordinate (Generated, trục Z) hoặc vẽ trực tiếp bằng Vertex Paint để kiểm soát chính xác ranh giới lưng-bụng thay vì chỉ dựa vào noise ngẫu nhiên.

**Vật liệu mắt** là một trong những chi tiết quan trọng nhất để nhân vật "có hồn": tách thành hai phần — **tròng đen/con ngươi** dùng Roughness thấp gần 0 (phản chiếu sắc nét như thật) và Base Color đen hoặc màu tối đặc trưng, còn **giác mạc/lớp ướt bên ngoài** (một lớp cầu trong suốt nhỏ phủ lên trên tròng mắt) dùng Transmission cao hoặc đơn giản là một lớp Clear Coat/thêm Roughness = 0 riêng biệt để tạo điểm phản chiếu highlight ướt láng đặc trưng của mắt sống động vật thật, tương phản với phần màng mắt xung quanh có Roughness cao hơn nhiều.

## 3. Quy trình thực hành gợi ý

1. Trên material da đã có Subsurface Scattering (nền tảng từ bài 058), thêm một lớp Voronoi riêng cho đốm da.
2. Dùng ColorRamp điều chỉnh Voronoi để chỉ hiện các đốm rời rạc, Mix Color với màu da nền.
3. Tạo mask ranh giới lưng-bụng bằng Texture Coordinate (Generated) hoặc Vertex Paint, Mix hai vùng màu khác nhau.
4. Trên mesh mắt, tạo vật liệu tròng đen: Roughness gần 0, Base Color tối.
5. Thêm một lớp cầu nhỏ phủ ngoài tròng mắt làm giác mạc, vật liệu Roughness = 0 hoặc Transmission cao để tạo highlight ướt.
6. Render thử cận cảnh khuôn mặt để kiểm tra độ sống động của ánh mắt.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Texture Coordinate (Generated) | Add > Input > Texture Coordinate |
| Vertex Paint (vẽ mask thủ công) | Chuyển Mode sang Vertex Paint |
| ColorRamp | Add > Converter > Color Ramp |
| Mix Color | Add > Color > Mix Color |

## 5. Lưu ý & lỗi thường gặp

- Đốm da phân bố đều đặn theo lưới thay vì ngẫu nhiên tự nhiên khiến da trông giống họa tiết in vải hơn là da động vật thật.
- Quên tách vật liệu riêng cho giác mạc khiến mắt trông "khô", thiếu điểm highlight ướt láng — chi tiết nhỏ nhưng ảnh hưởng lớn đến cảm giác nhân vật có hồn hay không.
- Ranh giới lưng-bụng chuyển tiếp quá đột ngột (cứng, không có gradient) trông thiếu tự nhiên so với sự chuyển màu mượt của da thật.

## 6. Checklist thực hành

- [ ] Đã thiết lập vật liệu da ếch với Subsurface Scattering và đốm da tự nhiên.
- [ ] Đã tách vùng bụng với màu/độ nhám khác biệt so với lưng.
- [ ] Đã tạo vật liệu tròng đen và giác mạc ướt tương phản độ nhám rõ rệt.
- [ ] Đã render cận cảnh khuôn mặt để kiểm tra tính sống động của ánh mắt.

## 7. Tóm tắt

Da và mắt là hai chi tiết quyết định phần lớn cảm giác "có sự sống" của nhân vật — việc chồng lớp texture da tự nhiên kết hợp độ tương phản Roughness mạnh giữa các thành phần của mắt là yếu tố kỹ thuật nhỏ nhưng có tác động thị giác lớn nhất trong toàn bộ dự án.
