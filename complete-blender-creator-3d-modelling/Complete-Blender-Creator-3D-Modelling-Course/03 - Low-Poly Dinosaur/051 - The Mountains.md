# 051 — The Mountains

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 03 — Low-Poly Dinosaur |
| **Bài học** | The Mountains |
| **Thời lượng** | 10:34 |
| **Chủ đề chính** | Tạo vật liệu gradient cho núi |

## 1. Mục tiêu bài học

- Xây dựng vật liệu gradient cho núi bằng node Color Ramp kết hợp Texture Coordinate.
- Hiểu cách dùng trục Z (độ cao) làm dữ liệu điều khiển gradient màu.
- Sử dụng node Mapping để điều chỉnh vị trí/tỉ lệ gradient theo ý muốn.
- Tạo hiệu ứng chuyển màu tự nhiên: chân núi tối/xanh, đỉnh núi sáng/trắng (tuyết) hoặc nâu đất.

## 2. Nội dung chính

Hiệu ứng gradient theo độ cao là kỹ thuật kinh điển cho vật liệu núi low-poly: màu sắc thay đổi dần từ chân núi lên đỉnh (ví dụ xanh lá → nâu đá → trắng tuyết), tạo cảm giác chân thực mà không cần texture ảnh phức tạp.

**Chuỗi node cơ bản** để tạo gradient theo độ cao (Object-space Z):

1. **Texture Coordinate** node: cung cấp nhiều loại tọa độ khác nhau (Generated, Object, UV, Normal...). Với gradient theo độ cao của núi, output **Object** hoặc **Generated** thường được dùng vì phản ánh đúng tọa độ cục bộ của mesh núi.
2. **Separate XYZ** (hoặc Separate Color tùy phiên bản): tách vector tọa độ 3 trục ra thành 3 giá trị số riêng X, Y, Z — chỉ cần lấy kênh **Z** làm giá trị điều khiển gradient (độ cao).
3. **Color Ramp**: node quan trọng nhất — nhận giá trị số (Fac, từ kênh Z) làm đầu vào, xuất ra màu tương ứng theo dải màu đã thiết lập. Có thể thêm nhiều **Color Stop** trên dải (double-click hoặc nhấn nút +) để tạo nhiều vùng chuyển màu (ví dụ 3 stop: xanh lá ở 0, nâu ở giữa, trắng ở 1).
4. Output của Color Ramp nối vào **Base Color** của Principled BSDF.
5. **Mapping node** (kết hợp với Texture Coordinate) có thể chèn vào giữa để điều chỉnh Scale/Location của gradient, giúp kiểm soát chính xác gradient bắt đầu/kết thúc ở độ cao nào của núi.

Các thuộc tính quan trọng của Color Ramp:

- **Interpolation**: Linear (chuyển màu mượt tuyến tính), Constant (chuyển màu đột ngột — hợp phong cách low-poly cứng cạnh), Ease/B-Spline/Cardinal (chuyển màu mượt hơn).
- **Color Stop**: mỗi điểm dừng có vị trí (Position, 0-1) và màu (Color) riêng, kéo để di chuyển vị trí chuyển màu.

Với phong cách low-poly, chế độ **Constant** cho Color Ramp thường được ưa dùng vì tạo ra các dải màu phân tầng rõ rệt (giống bản đồ địa hình) thay vì chuyển màu mượt như ảnh thực, rất hợp với thẩm mỹ góc cạnh của toàn bộ scene.

## 3. Quy trình thực hành gợi ý

1. Chọn object núi, mở Shader Editor (tab Shading).
2. Shift+A > Input > Texture Coordinate, đặt cạnh Principled BSDF.
3. Shift+A > Converter > Separate XYZ, nối Object (hoặc Generated) output vào input của Separate XYZ.
4. Shift+A > Converter > Color Ramp, nối kênh Z từ Separate XYZ vào input Fac của Color Ramp.
5. Thêm Color Stop trên Color Ramp (nút +), gán màu xanh lá ở vị trí thấp, nâu/xám ở giữa, trắng ở vị trí cao.
6. Thử đổi Interpolation giữa Linear và Constant, so sánh hiệu ứng nào hợp phong cách low-poly hơn.
7. Nối output Color của Color Ramp vào Base Color của Principled BSDF.
8. Nếu gradient chưa khớp đúng chiều cao núi thực tế, chèn thêm Mapping node để chỉnh Scale trên trục Z hoặc dịch chỉnh Location.
9. Quan sát kết quả trong Material Preview/Rendered, tinh chỉnh vị trí các Color Stop cho tự nhiên.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| Shift+A | Add Node (Texture Coordinate, Separate XYZ, Color Ramp, Mapping) |
| Ctrl+T | Thêm nhanh Texture Coordinate + Mapping đã nối sẵn vào một node texture đang chọn |
| F | Make Link nhanh giữa các node đã chọn |
| Double Click (trên Color Ramp) | Thêm Color Stop tại vị trí click |
| Ctrl+G | Group các node gradient thành Node Group tái sử dụng |
| N | Mở N-panel xem chi tiết node |

## 5. Lưu ý & lỗi thường gặp

- Dùng **Generated** coordinate thay vì **Object** (hoặc ngược lại) có thể cho kết quả gradient khác nhau tùy hình dạng mesh — nên thử cả hai để chọn kết quả phù hợp.
- Quên tách riêng kênh Z bằng Separate XYZ mà nối thẳng cả vector 3 chiều vào Fac của Color Ramp sẽ báo lỗi hoặc cho kết quả không đúng ý.
- Color Stop đặt sai thứ tự vị trí (Position) khiến gradient bị đảo ngược hoặc lộn xộn.
- Interpolation Linear có thể làm mất phong cách low-poly nếu núi vốn đã có các mặt phẳng góc cạnh rõ — cân nhắc dùng Constant.
- Gradient chỉ áp dụng đúng nếu mesh núi có toạ độ Z hợp lý (origin đặt đúng chỗ) — origin lệch có thể khiến gradient không bắt đầu từ chân núi.

## 6. Checklist thực hành

- [ ] Đã dựng chuỗi node Texture Coordinate → Separate XYZ → Color Ramp → Base Color.
- [ ] Color Ramp có ít nhất 3 Color Stop tạo hiệu ứng chuyển màu theo độ cao.
- [ ] Đã thử và chọn kiểu Interpolation phù hợp phong cách low-poly.
- [ ] Gradient hiển thị đúng hướng (thấp → cao) khớp với hình dạng núi thực tế.
- [ ] Đã kiểm tra kết quả trong Material Preview/Rendered.

## 7. Tóm tắt

Bài học giới thiệu kỹ thuật vật liệu gradient theo độ cao — một trong những kỹ thuật shader phổ biến và hiệu quả nhất cho cảnh low-poly. Kết hợp Texture Coordinate, Separate XYZ và Color Ramp giúp tạo hiệu ứng núi nhiều tầng màu chân thực mà không cần texture ảnh, sẵn sàng cho bước hoàn thiện scene ở bài tiếp theo.
