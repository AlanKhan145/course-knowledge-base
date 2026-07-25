# 030 — Modeling with Booleans

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — Hard-Surface Modeling |
| **Bài học** | Modeling with Booleans |
| **Thời lượng** | 24:40 |
| **Chủ đề chính** | Dựng robot bằng phương pháp Boolean-first |

## 1. Mục tiêu bài học

- Áp dụng Boolean làm phương pháp dựng hình chính (không chỉ là công cụ cắt phụ trợ) cho một đối tượng mechanical phức tạp — robot.
- Tổ chức một stack modifier Boolean sạch, dễ kiểm soát khi có nhiều phép toán chồng lên nhau.
- Quản lý các object cutter một cách có hệ thống bằng Collection, đặt tên và ẩn/hiện hợp lý.
- Nhận diện và né tránh các lỗi hình học thường gặp khi Boolean nhiều lớp.

## 2. Nội dung chính

Đây là bài học dài nhất module, minh họa **phương pháp "Boolean-first"**: thay vì box-modeling từng chi tiết bằng Extrude/Loop Cut như bài ghế, phần lớn hình khối của một **robot** (hoặc đối tượng cơ khí tương tự) được tạo ra bằng cách **chồng và cắt các primitive** (Cube, Cylinder, Sphere) lên nhau qua Boolean Union/Difference/Intersect. Cách tiếp cận này rất mạnh cho các chi tiết cơ khí có hình học rõ ràng: thân robot có thể là một Cube được Union với các Cylinder làm khớp vai, sau đó Difference với hàng loạt Cube nhỏ để tạo các khe tản nhiệt, lỗ ốc vít, rãnh trang trí.

Vì số lượng phép Boolean trong một dự án như vậy có thể lên tới hàng chục, việc giữ **modifier stack sạch và có tổ chức** trở nên quan trọng: mỗi object chính chỉ nên có một chuỗi Boolean Modifier được đặt tên rõ ràng (ví dụ "Bool_VentSlots", "Bool_ScrewHoles" thay vì "Boolean", "Boolean.001"...), thứ tự các modifier trong stack cần hợp lý (Union trước để gộp khối, Difference sau để khoét chi tiết, Bevel luôn ở cuối cùng), tránh áp Boolean chồng chéo không cần thiết làm tăng thời gian tính toán và độ phức tạp mesh.

Việc **quản lý object cutter** cũng cần hệ thống hóa: tất cả các cutter (Cube khoét lỗ, Cylinder cắt khớp...) nên được gom vào một **Collection riêng** (ví dụ "Cutters"), đặt tên khớp với modifier tương ứng, và ẩn khỏi Render đồng loạt. Với số lượng cutter lớn, có thể ẩn toàn bộ Collection "Cutters" khỏi Viewport (click icon mắt ở Outliner cấp Collection) sau khi đã chốt tất cả các phép Boolean, giúp viewport gọn gàng để làm việc tiếp ở bước shading/texturing.

Trong quá trình dựng, các lỗi hình học phổ biến khi Boolean nhiều lớp bao gồm: n-gon rác sinh ra tại giao tuyến phức tạp giữa nhiều cutter chồng nhau, mesh không kín (non-manifold) gây kết quả Boolean rỗng hoặc lỗi, và các mặt trùng lặp (double geometry) khi hai cutter cắt cùng một vị trí. Bài học nhấn mạnh việc kiểm tra bằng chế độ hiển thị **Wireframe** hoặc **Statistics Overlay** (đếm số Face/Vertex bất thường tăng đột biến) để phát hiện sớm các vùng lỗi trước khi tiếp tục chồng thêm Boolean lên trên.

## 3. Quy trình thực hành gợi ý

1. Phác thảo silhouette robot tổng thể bằng các primitive lớn: đầu (Cube/Sphere), thân (Cube), tay chân (Cylinder), Union tất cả lại thành một khối cơ sở.
2. Tạo Collection "Cutters", bắt đầu thêm các Cube/Cylinder nhỏ đóng vai trò khe tản nhiệt, lỗ vít, rãnh chi tiết.
3. Với mỗi cutter, thêm Boolean Modifier (Difference) trên khối robot, đặt tên modifier khớp với mục đích cắt.
4. Kiểm tra kết quả bằng Wireframe/Statistics Overlay sau mỗi vài phép Boolean để phát hiện n-gon rác sớm.
5. Sắp xếp lại thứ tự modifier stack nếu cần (Union trước, Difference sau, Bevel cuối).
6. Ẩn toàn bộ Collection "Cutters" khỏi Render (và Viewport khi đã chốt) để dọn dẹp scene.
7. Apply toàn bộ Boolean Modifier khi thiết kế đã hoàn thiện, kiểm tra lại mesh bằng `Mesh > Clean Up > Merge by Distance` để loại bỏ vertex trùng.
8. Shade Smooth kết hợp Bevel nhẹ để chuẩn bị cho bài shading tiếp theo.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Chuyển Wireframe Shading | `Z > Wireframe` hoặc `Shift + Z` |
| Bật Statistics Overlay | Viewport Overlay dropdown > `Statistics` |
| Đặt tên lại Modifier | Double-click vào tên modifier trong Properties |
| Tạo Collection mới | `M` (Move to Collection) > `New Collection` |
| Ẩn Collection khỏi Render | Icon camera cạnh Collection trong Outliner |
| Merge by Distance | `Mesh > Clean Up > Merge by Distance` (Edit Mode) |

## 5. Lưu ý & lỗi thường gặp

- Chồng quá nhiều Boolean Difference tại cùng một vùng nhỏ dễ sinh n-gon rác và mesh không manifold.
- Không đặt tên modifier khiến việc quản lý stack với 10-20 Boolean trở nên hỗn loạn, khó debug khi có lỗi.
- Quên gom cutter vào Collection riêng khiến Outliner lộn xộn, khó phân biệt object thật với object phụ trợ.
- Apply Boolean quá sớm trong quá trình thiết kế khiến mất khả năng chỉnh sửa vị trí cutter về sau.
- Hai cutter chồng đúng cùng vị trí (duplicate) gây lỗi z-fighting hoặc Boolean tính toán sai kết quả.

## 6. Checklist thực hành

- [ ] Đã dựng khối robot cơ sở từ Union nhiều primitive.
- [ ] Đã thêm ít nhất 5-10 chi tiết bằng Boolean Difference (khe, lỗ, rãnh).
- [ ] Modifier stack được đặt tên rõ ràng, có tổ chức hợp lý.
- [ ] Toàn bộ cutter được gom vào Collection riêng, ẩn khỏi Render.
- [ ] Đã kiểm tra và xử lý các lỗi n-gon/non-manifold phát sinh từ Boolean.

## 7. Tóm tắt

Dựng robot bằng phương pháp Boolean-first cho thấy sức mạnh của việc kết hợp nhiều phép Union/Difference để tạo hình học cơ khí phức tạp nhanh chóng, nhưng đòi hỏi kỷ luật tổ chức modifier stack và quản lý cutter chặt chẽ để tránh lỗi hình học tích lũy qua nhiều lớp Boolean.
