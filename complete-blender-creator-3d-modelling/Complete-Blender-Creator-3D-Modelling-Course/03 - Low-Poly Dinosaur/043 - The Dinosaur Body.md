# 043 — The Dinosaur Body

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 03 — Low-Poly Dinosaur |
| **Bài học** | The Dinosaur Body |
| **Thời lượng** | 10:15 |
| **Chủ đề chính** | Tạo phần thân khủng long |

## 1. Mục tiêu bài học

- Dựng khối hình học cơ bản cho phần thân, cổ và đuôi khủng long theo ảnh tham chiếu.
- Áp dụng kỹ thuật box modelling và extrude để phát triển hình dạng từ một mesh đơn giản.
- Sử dụng Mirror Modifier để chỉ cần dựng một nửa mesh, tự động đối xứng qua trục X.
- Bắt đầu thiết lập phong cách low-poly: số lượng polygon tối giản, các mặt phẳng rõ nét.

## 2. Nội dung chính

Phần thân là khối hình học trung tâm của nhân vật, thường bắt đầu từ một **Cube** hoặc **Cylinder** đơn giản rồi biến đổi dần bằng Edit Mode. Quy trình low-poly modelling thường đi theo hướng "subtractive/additive" đơn giản: thêm cạnh (loop cut), kéo (extrude), và di chuyển đỉnh (vertex) để bám theo đường viền ảnh tham chiếu, thay vì điêu khắc chi tiết như Sculpt Mode.

**Mirror Modifier** là công cụ quan trọng nhất trong bài này: khi thân khủng long đối xứng qua trục X (trái/phải), ta chỉ cần dựng một nửa mesh, cắt bỏ nửa còn lại (X > Delete một nửa vertex sau khi cắt bằng dao Knife hoặc dùng Bisect), sau đó thêm Mirror Modifier với trục X và bật **Clipping** để các vertex nằm trên mặt phẳng đối xứng không bị tách rời khi di chuyển.

Quy trình dựng thân điển hình:

- Bắt đầu từ Cube, dùng **Loop Cut (Ctrl+R)** để chia mesh thành nhiều đoạn dọc theo chiều dài thân (cổ → bụng → đuôi).
- Ở mỗi vòng cạnh (edge loop), di chuyển vertex theo view Side để bám đường cong lưng/bụng, và theo view Front để tạo độ phình của thân.
- Dùng **Extrude (E)** để kéo dài phần cổ lên trên và phần đuôi ra sau.
- Giữ số lượng mặt (face) ở mức tối thiểu cần thiết để đạt phong cách low-poly — tránh loop cut quá dày làm mesh trông tròn trịa như high-poly.

## 3. Quy trình thực hành gợi ý

1. Add > Mesh > Cube tại gốc tọa độ, vào Edit Mode (Tab).
2. Dùng Ctrl+R thêm loop cut chia thân thành các đoạn theo chiều dài (dọc trục Y).
3. Ở view Side (Numpad 3), di chuyển từng edge loop theo đường viền lưng và bụng trong ảnh tham chiếu.
4. Ở view Front (Numpad 1), điều chỉnh độ rộng thân sao cho đối xứng quanh trục X.
5. Extrude phần cổ hướng lên và phần đuôi hướng ra sau, thon dần về hai đầu.
6. Cắt mesh làm đôi qua mặt phẳng X=0 (Knife hoặc Bisect), xóa nửa không cần, thêm Mirror Modifier (trục X, bật Clipping).
7. Kiểm tra Normals bằng Face Orientation overlay (tất cả mặt phải hướng ra ngoài, màu xanh).
8. Đặt Shading là Flat Shade (Object > Shade Flat) để giữ đúng phong cách low-poly góc cạnh.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| Tab | Chuyển Object Mode / Edit Mode |
| Ctrl+R | Loop Cut |
| E | Extrude |
| G / R / S | Move / Rotate / Scale |
| X, Y, Z (sau G/R/S) | Khóa trục transform |
| K | Knife Tool (cắt mesh) |
| Ctrl+B | Bevel |
| N | Mở N-panel xem toạ độ vertex |
| Alt+N > Recalculate Outside | Sửa hướng Normals |

## 5. Lưu ý & lỗi thường gặp

- Loop cut quá nhiều khiến mesh mất phong cách low-poly, khó kiểm soát hình khối tổng thể.
- Quên bật Clipping trên Mirror Modifier khiến các vertex ở giữa trục X bị tách hở khi chỉnh sửa.
- Không kiểm tra Normals sớm sẽ gây lỗi shading (mặt tối/đen) ở các bài sau khi thêm vật liệu.
- Dựng chi tiết quá sớm (trước khi có hình khối tổng thể đúng tỉ lệ) khiến phải sửa lại nhiều lần.
- Quên lưu file thường xuyên (Ctrl+S) khi thao tác nhiều bước chỉnh sửa mesh.

## 6. Checklist thực hành

- [ ] Đã tạo khối thân cơ bản bám theo ảnh tham chiếu ở cả hai view.
- [ ] Đã cắt và xóa nửa mesh, áp Mirror Modifier với Clipping.
- [ ] Cổ và đuôi đã được extrude đúng hướng và tỉ lệ.
- [ ] Normals của mesh đều hướng ra ngoài (kiểm tra bằng Face Orientation).
- [ ] Mesh đã ở Flat Shade, giữ đúng phong cách low-poly.

## 7. Tóm tắt

Bài học xây dựng nền tảng hình khối cho toàn bộ nhân vật khủng long, kết hợp box modelling, loop cut và Mirror Modifier để làm việc hiệu quả trên mesh đối xứng. Đây là bước quan trọng nhất vì các bài tiếp theo (chân, móng, mặt) đều được extrude/gắn thêm từ khối thân này.
