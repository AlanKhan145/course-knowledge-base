# 047 — Dino Face

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 03 — Low-Poly Dinosaur |
| **Bài học** | Dino Face |
| **Thời lượng** | 10:39 |
| **Chủ đề chính** | Tạo khuôn mặt và cánh tay |

## 1. Mục tiêu bài học

- Tạo hình đầu và khuôn mặt khủng long: hàm, mắt, các mặt phẳng góc cạnh vùng đầu.
- Extrude cánh tay ngắn phía trước, áp dụng lại kỹ thuật móng vuốt cho bàn tay.
- Sử dụng Inset Face để tạo hốc mắt và các chi tiết lõm/lồi trên đầu.
- Hoàn thiện toàn bộ hình khối cơ bản của nhân vật trước khi chuyển sang dựng cảnh.

## 2. Nội dung chính

Đầu khủng long thường được dựng tiếp từ phần cổ đã extrude ở bài Dino Body, kéo dài và mở rộng dần thành hộp sọ và hàm. Với phong cách low-poly, đầu thường được đơn giản hóa thành các mặt phẳng lớn tạo góc cạnh rõ ràng (gò má, sống mũi, hàm trên/hàm dưới) thay vì bo tròn mượt.

Các kỹ thuật chính trong bài:

- **Extrude & Scale** liên tiếp để tạo hình hộp sọ thon dần về phía mõm/hàm.
- **Inset Face (I)**: tạo một face nhỏ hơn bên trong một face đã chọn, dùng để tạo hốc mắt (sau đó extrude lõm vào trong một chút) hoặc các chi tiết vảy/mảng trên đầu.
- **Loop Cut** để chia hàm trên và hàm dưới, tạo khe miệng nếu thiết kế có miệng hé mở.
- **Extrude cánh tay**: tương tự chân nhưng ngắn và mảnh hơn nhiều, thường extrude từ vùng vai/ngực về phía trước, kết thúc bằng bàn tay nhỏ. Áp dụng lại kỹ thuật chia ngón + móng vuốt đã học ở bài 046, chỉ khác về tỉ lệ (bàn tay khủng long theropod thường có 2-3 ngón, nhỏ hơn nhiều so với chân).

Vì đầu là bộ phận thu hút ánh nhìn nhiều nhất, nên dành thời gian kiểm tra silhouette khuôn mặt từ nhiều góc (Front, Side, Perspective 3/4) để đảm bảo biểu cảm và tỷ lệ hợp lý trước khi khóa hình khối tổng thể.

## 3. Quy trình thực hành gợi ý

1. Từ điểm cuối cổ, tiếp tục Extrude và Scale tạo hộp sọ, thon dần về phía mõm.
2. Loop Cut chia hàm trên/hàm dưới nếu cần tạo khe miệng.
3. Chọn face vị trí mắt, dùng Inset Face (I) tạo viền hốc mắt, Extrude lõm nhẹ vào trong.
4. Từ vùng vai, Extrude tạo cánh tay ngắn, thon dần, kết thúc bằng bàn tay.
5. Chia ngón tay bằng Loop Cut/Knife tương tự bàn chân, extrude móng nhỏ ở đầu ngón.
6. Kiểm tra toàn bộ đầu và tay ở view Perspective, đối chiếu với ảnh tham chiếu Side/Front.
7. Merge vertex trùng (M > By Distance) và kiểm tra lại Normals toàn mesh (Alt+N > Recalculate Outside).
8. Áp dụng (Apply) Mirror Modifier khi đã hài lòng với toàn bộ hình khối, nếu chuẩn bị sang bước sculpt/chi tiết hóa sâu hơn (tùy quy trình khóa học).

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| I | Inset Face (tạo hốc mắt, chi tiết bề mặt) |
| E | Extrude |
| S | Scale (thon dần hộp sọ, mõm) |
| Ctrl+R | Loop Cut (chia hàm, ngón tay) |
| K | Knife Tool |
| M | Merge Vertices |
| Alt+N | Menu Normals (Recalculate Outside) |
| Ctrl+A > Apply | Áp dụng Modifier (Mirror) khi hoàn tất |

## 5. Lưu ý & lỗi thường gặp

- Đầu quá to hoặc quá nhỏ so với thân làm mất cân đối tổng thể của nhân vật.
- Inset Face với Thickness quá lớn có thể tạo n-gon hoặc face chồng chéo quanh mắt.
- Cánh tay quá dài/to so với tỉ lệ thực tế của loài (tay thường nhỏ hơn nhiều so với chân ở nhóm theropod).
- Quên kiểm tra đối xứng qua Mirror trước khi Apply — sau khi Apply sẽ khó chỉnh lại đồng bộ hai bên.
- Bỏ sót việc kiểm tra Normals ở các chi tiết nhỏ (mắt, ngón tay) gây lỗi shading khi thêm vật liệu sau này.

## 6. Checklist thực hành

- [ ] Đầu và hàm đã được tạo hình với tỉ lệ hợp lý so với thân.
- [ ] Hốc mắt đã được tạo bằng Inset Face và lõm nhẹ tự nhiên.
- [ ] Cánh tay và bàn tay đã hoàn thiện với ngón và móng nhỏ.
- [ ] Toàn bộ mesh đã kiểm tra Normals và không còn vertex trùng.
- [ ] Silhouette tổng thể của nhân vật đã cân đối khi nhìn từ nhiều góc.

## 7. Tóm tắt

Bài học hoàn tất phần hình khối cuối cùng của nhân vật — đầu và tay — sử dụng lại các kỹ thuật extrude, inset và chia ngón đã học. Sau bài này, mô hình khủng long low-poly coi như hoàn chỉnh về mặt hình khối, sẵn sàng để chuyển sang xây dựng cảnh quan xung quanh ở các bài tiếp theo.
