# 023 — Introduction to Organic Modeling

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 03 — Organic Modeling |
| **Bài học** | Introduction to Organic Modeling |
| **Thời lượng** | 13:36 |
| **Chủ đề chính** | Tổng quan về dựng hình organic |

## 1. Mục tiêu bài học

- Hiểu khái niệm "organic modeling" và phân biệt với "hard-surface modeling".
- Nắm được vai trò trung tâm của Subdivision Surface Modifier trong việc tạo hình mềm mại, bo tròn.
- Biết sculpting là một hướng tiếp cận bổ sung cho modeling truyền thống khi cần các chi tiết bất quy tắc.
- Hiểu tầm quan trọng của ảnh tham chiếu (reference image) khi dựng hình sinh vật/vật thể tự nhiên.
- Dựng thử một cây nấm low-poly đơn giản để làm quen với quy trình.

## 2. Nội dung chính

**Organic modeling** là hướng dựng hình tập trung vào các hình dạng mềm, bo tròn, bất đối xứng nhẹ và có độ biến thiên bề mặt tự nhiên — thường gặp ở sinh vật sống (người, động vật, cây cối) hoặc các vật thể chịu ảnh hưởng của tự nhiên (đá, mây, thực phẩm). Đây là điểm đối lập với **hard-surface modeling** (Module 04) — nơi các vật thể cơ khí, nhân tạo có cạnh sắc, góc vuông và độ chính xác hình học cao.

Công cụ cốt lõi cho organic modeling trong Blender là **Subdivision Surface Modifier** (`Ctrl + 2` để thêm nhanh với Levels Viewport = 2). Modifier này làm mịn mesh bằng cách nội suy (subdivide) và bo góc theo thuật toán Catmull-Clark, biến một mesh low-poly thô thành bề mặt cong mượt. Kết quả phụ thuộc rất nhiều vào **topology** gốc: mesh chủ yếu gồm quad (tứ giác), có mật độ cạnh (edge loop) được kiểm soát tốt sẽ cho ra hình dạng mịn và dễ đoán; ngược lại n-gon hoặc topology lộn xộn sẽ tạo ra các vết lõm/phồng không mong muốn.

Bên cạnh modeling bằng mesh + Subdivision Surface, **sculpting** (Sculpt Mode, `Ctrl + Tab` hoặc chuyển workspace "Sculpting") là hướng tiếp cận bổ sung, cho phép "nặn" bề mặt mesh mật độ cao bằng các brush (Draw, Clay Strips, Smooth, Grab, Crease...) tương tự làm việc với đất sét thật. Sculpting phù hợp với các chi tiết bất quy tắc, hữu cơ cao (da, nếp nhăn, đá gồ ghề) mà việc chỉnh từng vertex thủ công sẽ rất tốn công.

**Ảnh tham chiếu (reference image)** đóng vai trò quan trọng để giữ tỷ lệ và hình dáng chính xác — có thể đưa vào scene qua `Add > Image > Reference` (tạo Empty dạng ảnh) hoặc `View > Background Images` (chỉ hiển thị trong Orthographic view). Với organic modeling, reference thường chỉ mang tính tham khảo hình khối tổng quát hơn là khớp cạnh chính xác như hard-surface.

Bài học minh họa bằng một **cây nấm low-poly** đơn giản: thân nấm từ một Cylinder được co nhỏ dần ở đáy, mũ nấm từ một UV Sphere hoặc Ico Sphere được cắt bớt nửa dưới, sau đó áp Subdivision Surface để bo tròn toàn bộ. Đây là bài khởi động (warm-up) giúp làm quen thao tác cơ bản trước khi vào các bài dựng hình phức tạp hơn của module.

## 3. Quy trình thực hành gợi ý

1. Tạo scene mới, thêm ảnh tham chiếu cây nấm (nếu có) qua `Add > Image > Reference`.
2. Thêm một Cylinder làm thân nấm, vào Edit Mode, dùng `Ctrl + R` thêm Loop Cut và Scale để tạo độ thon ở gốc.
3. Thêm một UV Sphere làm mũ nấm, xóa nửa dưới bằng chọn face rồi `X > Faces`, dùng Extrude nhẹ để tạo viền mũ.
4. Join hai mesh (`Ctrl + J`), căn chỉnh vị trí sao cho thân nằm khít vào mũ.
5. Thêm Subdivision Surface Modifier (`Ctrl + 2`), quan sát mức độ bo tròn ở Levels Viewport 1–2.
6. Bật Shade Auto Smooth hoặc Shade Smooth (`Object > Shade Smooth`) để loại bỏ facet cứng còn sót.
7. So sánh kết quả với ảnh tham khảo, chỉnh tỷ lệ tổng thể nếu cần.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Thêm Subdivision Surface Modifier | `Ctrl + 2` (đến `Ctrl + 5` cho các level khác) |
| Chuyển sang Sculpt Mode | Đổi workspace "Sculpting" hoặc `Ctrl + Tab` trong menu Mode |
| Loop Cut | `Ctrl + R` |
| Shade Smooth | `Object > Shade Smooth` (chuột phải > Shade Smooth) |
| Join object | `Ctrl + J` |
| Thêm ảnh tham chiếu | `Shift + A > Image > Reference` |

## 5. Lưu ý & lỗi thường gặp

- Áp Subdivision Surface lên mesh có nhiều n-gon hoặc tam giác dễ gây méo hình, lồi lõm bất thường tại các điểm đó.
- Quên Shade Smooth khiến bề mặt sau Subdivision Surface vẫn hiện facet góc cạnh trong Edit Mode/Viewport dù modifier đã hoạt động đúng.
- Tăng Levels Viewport quá cao (>3) trên mesh phức tạp gây giật lag khi thao tác thời gian thực.
- Nhầm lẫn giữa sculpting và modeling: sculpting không tối ưu cho hình khối có tỷ lệ/kích thước chính xác cần thiết.

## 6. Checklist thực hành

- [ ] Giải thích được sự khác biệt giữa organic modeling và hard-surface modeling.
- [ ] Đã thêm và tùy chỉnh Subdivision Surface Modifier trên một mesh thử nghiệm.
- [ ] Đã thử ít nhất một brush cơ bản trong Sculpt Mode.
- [ ] Đã đưa ảnh tham chiếu vào scene thành công.
- [ ] Hoàn thành mô hình nấm low-poly khởi động.

## 7. Tóm tắt

Organic modeling xoay quanh việc tạo ra các hình dạng mềm mại, tự nhiên chủ yếu thông qua Subdivision Surface Modifier trên nền topology quad sạch, có thể kết hợp sculpting cho chi tiết bất quy tắc — bài nấm low-poly là bước khởi động nhẹ nhàng cho các dự án thực hành phức tạp hơn trong module.
