# 090 — Base Shape

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 06 — Sculpting a Cartoon Head |
| **Bài học** | Base Shape |
| **Thời lượng** | 13:15 |
| **Chủ đề chính** | Tạo hình khối cơ bản của đầu |

## 1. Mục tiêu bài học

- Xuất phát từ một mesh cơ bản (UV Sphere hoặc Icosphere) và biến nó thành hình khối tổng thể (silhouette) của một cái đầu hoạt hình.
- Làm quen với các brush chính dùng để tạo khối lớn: Clay Strips, Crease, Grab, Move, Smooth.
- Hiểu quy tắc "làm việc từ lớn đến nhỏ" (big shapes first) trong sculpting.
- Thiết lập Multiresolution Modifier ở mức subdivision phù hợp cho giai đoạn base shape.

## 2. Nội dung chính

Bước đầu tiên của mọi dự án sculpting là xây dựng **base mesh** — một mesh có mật độ thấp, đủ để định hình silhouette tổng thể mà chưa cần chi tiết. Với đầu cartoon, người ta thường bắt đầu từ một Icosphere (topology tam giác đều, chia đối xứng tốt hơn UV Sphere khi sculpt) rồi thêm Multiresolution Modifier, subdivide lên 1-2 cấp đầu tiên để có đủ mật độ chỉnh khối lớn mà vẫn nhẹ máy.

Các brush quan trọng ở giai đoạn này:

- **Grab** (`G` trong Sculpt Mode hoặc phím tắt riêng): kéo/di chuyển cả một vùng lớn của mesh, dùng để kéo dài mõm, kéo cằm, tạo dáng tổng thể.
- **Clay Strips**: đắp thêm khối theo dải phẳng, rất hiệu quả để tạo má, trán, các mảng khối lớn có cạnh rõ.
- **Crease**: tạo các nếp gấp/rãnh sâu, dùng để định hình các đường phân khối như viền hàm, sống mũi.
- **Smooth** (giữ `Shift` khi dùng brush bất kỳ): làm mượt bề mặt, cân bằng lại các vùng gồ ghề.
- **Move**: tương tự Grab nhưng falloff khác, phù hợp điều chỉnh nhẹ vị trí từng vùng.

Nguyên tắc "silhouette trước, chi tiết sau": nhìn đầu từ nhiều góc (front, side, 3/4) và đảm bảo đường viền tổng thể trông đúng tỷ lệ hoạt hình mong muốn (đầu to, cằm nhỏ, trán bo tròn...) trước khi đi vào chi tiết như mắt, tai.

## 3. Quy trình thực hành gợi ý

1. Thêm một Icosphere, vào Sculpt Mode.
2. Thêm Multiresolution Modifier, nhấn Subdivide 1-2 lần.
3. Dùng Grab để kéo dài phần sau đầu, kéo ra vùng mõm/cằm phía trước.
4. Dùng Clay Strips để đắp thêm khối má, trán.
5. Dùng Crease nhẹ để phác các đường phân khối chính (viền hàm, hốc mắt).
6. Bật Symmetry X liên tục để cả hai bên đầu đối xứng.
7. Xoay camera quan sát từ nhiều góc, dùng Smooth để cân bằng bề mặt sau mỗi bước lớn.
8. Subdivide thêm 1 cấp Multiresolution nếu cần thêm độ chi tiết nhẹ cho khối.

## 4. Phím tắt & công cụ liên quan

| Phím tắt / Brush | Chức năng |
|---|---|
| Brush **Grab** | Kéo di chuyển vùng lớn của mesh |
| Brush **Clay Strips** | Đắp khối theo dải phẳng |
| Brush **Crease** | Tạo nếp gấp/rãnh sâu |
| Brush **Move** | Di chuyển vùng mesh, falloff khác Grab |
| `Shift` (giữ khi dùng brush) | Chuyển tạm sang brush Smooth |
| `Ctrl` (giữ khi dùng brush) | Đảo chiều brush (Invert — ví dụ Draw thành Deflate) |
| `X` | Bật/tắt Symmetry |
| `F` | Kéo chuột chỉnh Radius brush |
| `Shift+F` | Kéo chuột chỉnh Strength brush |

## 5. Lưu ý & lỗi thường gặp

- Sculpt chi tiết quá sớm khi silhouette tổng thể còn sai tỷ lệ — nên xóa hoặc Smooth lại và làm lại khối lớn trước.
- Quên Smooth định kỳ khiến bề mặt gồ ghề, khó đánh giá khối thật sự.
- Dùng Strength quá cao khiến brush "ăn" quá sâu, mất kiểm soát khối.
- Không xoay góc nhìn thường xuyên, chỉ sculpt từ một góc dẫn đến hình bị lệch khi nhìn từ góc khác.

## 6. Checklist thực hành

- [ ] Đã tạo base mesh (Icosphere) và thêm Multiresolution Modifier.
- [ ] Đã dùng Grab để tạo dáng tổng thể của đầu.
- [ ] Đã dùng Clay Strips và Crease để đắp khối má, trán, hàm.
- [ ] Đã kiểm tra silhouette từ góc Front, Side, 3/4.
- [ ] Bề mặt đã được Smooth cân bằng sau mỗi bước lớn.

## 7. Tóm tắt

Bài học hướng dẫn xây dựng hình khối cơ bản (base shape) của đầu nhân vật bằng các brush lớn như Grab, Clay Strips, Crease và Move, tuân theo nguyên tắc làm việc từ khối lớn đến chi tiết nhỏ, làm nền tảng cho các bước sculpt chi tiết ở các bài tiếp theo.
