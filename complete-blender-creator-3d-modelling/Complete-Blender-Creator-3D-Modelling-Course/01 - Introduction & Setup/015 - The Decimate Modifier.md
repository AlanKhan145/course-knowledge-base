# 015 — The Decimate Modifier

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 01 — Introduction & Setup |
| **Bài học** | The Decimate Modifier |
| **Thời lượng** | 6:06 |
| **Chủ đề chính** | Sử dụng Decimate Modifier để giảm polygon |

## 1. Mục tiêu bài học

- Hiểu vấn đề mesh quá nặng polygon sau khi sculpt và lý do cần giảm tải trước khi tiếp tục làm việc.
- Biết cách thêm và cấu hình Decimate Modifier trong Modifier Properties.
- Phân biệt 3 chế độ của Decimate: Collapse, Un-Subdivide, Planar.
- Biết cách Apply modifier để chốt kết quả giảm poly vào mesh.

## 2. Nội dung chính

Sau khi sculpt (bài trước), mesh nền đá thường có số lượng polygon rất lớn — gây nặng máy khi hiển thị viewport, chậm khi render, và không cần thiết cho phong cách low-poly của dự án. **Decimate Modifier** (`Modifier Properties > Add Modifier > Generate > Decimate`) giải quyết vấn đề này bằng cách giảm số lượng polygon trong khi cố gắng giữ lại hình dạng tổng thể.

Decimate có 3 chế độ (Mode):

- **Collapse**: gộp các cạnh/đỉnh gần nhau lại dựa trên thuật toán edge collapse, kiểm soát bằng thanh trượt **Ratio** (0-1, ví dụ 0.1 nghĩa là giữ lại khoảng 10% số polygon gốc). Đây là chế độ phổ biến nhất, phù hợp giảm mesh hữu cơ như kết quả sculpt.
- **Un-Subdivide**: đảo ngược một phần thao tác Subdivide, phù hợp khi mesh gốc từng được subdivide đều đặn (dạng lưới quad đều), kiểm soát bằng **Iterations**.
- **Planar**: gộp các mặt gần như đồng phẳng (coplanar) thành một mặt lớn duy nhất, kiểm soát bằng góc **Angle Limit** — phù hợp với mesh có nhiều mặt phẳng lớn (kiến trúc, hardsurface) hơn là mesh hữu cơ.

Với nền đá đã sculpt, chế độ **Collapse** thường cho kết quả tốt nhất — giảm mạnh số polygon mà vẫn giữ được silhouette gồ ghề đặc trưng. Sau khi hài lòng với Ratio, cần **Apply** modifier (dropdown mũi tên bên cạnh tên modifier > Apply, hoặc `Ctrl + A` khi hover chuột trên modifier) để chốt kết quả vĩnh viễn vào mesh — modifier chỉ là hiệu ứng xem trước cho đến khi được Apply.

## 3. Quy trình thực hành gợi ý

1. Chọn object nền đá đã sculpt ở bài trước, kiểm tra số polygon hiện tại (Overlays > Statistics, hoặc thanh trạng thái dưới cùng viewport).
2. Vào Modifier Properties, `Add Modifier > Generate > Decimate`.
3. Chọn Mode "Collapse", kéo Ratio giảm dần (ví dụ từ 1.0 xuống 0.1-0.3) và quan sát viewport để tìm điểm cân bằng giữa chi tiết và số lượng polygon.
4. So sánh số polygon trước/sau qua Statistics overlay.
5. Khi hài lòng, Apply modifier để chốt kết quả.
6. Kiểm tra lại hình dạng ở Edit Mode để đảm bảo không có lỗi mesh nghiêm trọng (non-manifold, mặt bị lật) sau khi decimate.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Vị trí/Phím tắt |
|---|---|
| Thêm Modifier | `Modifier Properties (icon cờ lê) > Add Modifier` |
| Decimate Modifier | `Add Modifier > Generate > Decimate` |
| Apply Modifier | Dropdown modifier > Apply (hoặc `Ctrl + A` khi hover) |
| Hiện thống kê polygon | `Overlays > Statistics` (Viewport Overlay) |

## 5. Lưu ý & lỗi thường gặp

- Đặt Ratio quá thấp có thể phá vỡ hoàn toàn hình dạng, tạo mesh méo mó hoặc thủng lỗ — nên giảm từ từ và quan sát trực tiếp.
- Quên Apply modifier khiến các bước chỉnh sửa Edit Mode tiếp theo hoạt động trên mesh gốc (chưa giảm poly) chứ không phải kết quả đã thấy trong viewport — dễ gây nhầm lẫn.
- Decimate không phải lúc nào cũng giữ được UV tốt nếu mesh đã có UV map từ trước — với nền đá đơn giản trong module 1 thường chưa cần lo vấn đề này.
- Chế độ Planar không phù hợp cho mesh hữu cơ như đá — dễ tạo kết quả không như ý; nên ưu tiên Collapse cho trường hợp này.

## 6. Checklist thực hành

- [ ] Đã thêm Decimate Modifier vào nền đá đã sculpt.
- [ ] Đã thử chế độ Collapse và điều chỉnh Ratio phù hợp.
- [ ] Đã so sánh số polygon trước/sau qua Statistics overlay.
- [ ] Đã Apply modifier để chốt kết quả.

## 7. Tóm tắt

Decimate Modifier là công cụ thiết yếu để giảm số polygon nặng nề sau khi sculpt, với chế độ Collapse phù hợp nhất cho mesh hữu cơ như nền đá. Luôn Apply modifier sau khi tìm được Ratio ưng ý để chốt kết quả vào mesh.
