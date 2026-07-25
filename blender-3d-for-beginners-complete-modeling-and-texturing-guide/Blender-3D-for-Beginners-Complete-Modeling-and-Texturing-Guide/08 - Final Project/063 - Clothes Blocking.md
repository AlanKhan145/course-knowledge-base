# 063 — Clothes Blocking

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 08 — Final Project |
| **Bài học** | Clothes Blocking |
| **Thời lượng** | 5:22 |
| **Chủ đề chính** | Blocking trang phục bằng Shrinkwrap |

## 1. Mục tiêu bài học

- Roughing in silhouette trang phục (áo gile/robe, quần short, thắt lưng) ngay trên cơ thể đã blocking ở bài trước.
- Sử dụng **Shrinkwrap Modifier** để cho mesh trang phục bám theo đúng bề mặt cơ thể.
- Hiểu vai trò tạm thời của bước blocking trang phục trước khi đi vào refine nếp gấp ở bài sau.
- Xác định vị trí các mảng vải sẽ nằm trên cơ thể (vai, ngực, hông, đùi) trước khi thêm chi tiết.

## 2. Nội dung chính

Sau khi cơ thể ếch đã có silhouette rõ ràng, bước tiếp theo là **blocking trang phục** — dựng nhanh các mảng vải lớn (áo gile hoặc robe che thân trên, quần short che hông/đùi, dải thắt lưng) mà chưa cần quan tâm đến nếp gấp hay độ dày vải. Cách làm phổ biến là **duplicate một phần bề mặt cơ thể** (chọn các face tương ứng vùng ngực/hông ở Edit Mode, `Shift + D` rồi `P > Selection` để tách thành object riêng), sau đó dùng mesh vừa tách làm điểm khởi đầu cho mảng vải vì nó đã ôm sát đúng hình dáng cơ thể.

Để đảm bảo mảng vải luôn bám khít bề mặt cơ thể ngay cả khi được chỉnh sửa thêm, thêm **Shrinkwrap Modifier** (`Add Modifier > Deform > Shrinkwrap`) với Target là object cơ thể. Chế độ **Project** phù hợp khi cần đẩy mesh theo pháp tuyến bề mặt với khoảng offset dương (Offset > 0) để tạo khoảng cách vải – da tương tự lớp vải phủ ngoài; chế độ **Nearest Surface Point** phù hợp khi mesh trang phục có mật độ vertex khác biệt lớn so với cơ thể. Tham số Offset chính là "độ dày không khí" giữa vải và da — tăng nhẹ giá trị này ở các vùng như vai áo, gấu quần để chuẩn bị không gian cho nếp gấp sẽ thêm ở bài sau.

Ở giai đoạn blocking này, KHÔNG áp dụng Solidify hay chi tiết nếp gấp — mục tiêu chỉ là xác định đúng **vùng phủ (coverage)** và đường viền lớn (neckline, gấu áo, lưng quần) để dễ dàng chỉnh sửa toàn cục. Việc thêm độ dày và nếp nhăn sẽ được xử lý ở bài "Clothes Refinement" tiếp theo, khi silhouette tổng thể đã được chốt.

## 3. Quy trình thực hành gợi ý

1. Ở Edit Mode của Body, chọn các face vùng ngực/vai, `Shift + D` rồi `P > Selection` để tách thành object "Vest_Block".
2. Lặp lại cho vùng hông/đùi để tạo "Shorts_Block", và một dải quanh eo cho "Belt_Block".
3. Với mỗi object trang phục, thêm Shrinkwrap Modifier, Target = Body, chọn Wrap Method Project hoặc Nearest Surface Point.
4. Chỉnh Offset dương nhỏ (khoảng 0.01–0.03m tùy tỷ lệ scene) để tạo khoảng cách vải – da.
5. Ở Edit Mode của từng mảng vải, dùng Extrude/Inset để mở rộng vùng phủ đến đúng đường viền mong muốn (cổ áo, gấu quần).
6. Đặt tên và gộp các object trang phục vào Collection "Clothes".

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Duplicate | `Shift + D` |
| Tách selection thành object riêng | `P > Selection` |
| Thêm Shrinkwrap Modifier | `Add Modifier > Deform > Shrinkwrap` |
| Inset Face | `I` |
| Extrude | `E` |
| Snap tạm thời khi kéo vertex | `Ctrl` (giữ trong lúc Grab) |

## 5. Lưu ý & lỗi thường gặp

- Offset của Shrinkwrap quá lớn khiến vải "nổi" hẳn khỏi cơ thể, mất cảm giác vải bám sát.
- Quên chọn đúng Wrap Method phù hợp khiến mesh trang phục bị co rúm hoặc xuyên thủng (clipping) qua cơ thể ở các vùng cong gấp (nách, khuỷu).
- Thêm chi tiết nếp gấp quá sớm trong bài blocking khiến việc chỉnh sửa silhouette tổng thể sau này tốn công gấp đôi.
- Không tách riêng object cho từng mảng trang phục khiến khó áp material và refine độc lập ở các bài sau.

## 6. Checklist thực hành

- [ ] Đã tách và tạo object riêng cho áo gile/robe, quần short, thắt lưng.
- [ ] Mỗi object trang phục đã có Shrinkwrap Modifier bám theo cơ thể.
- [ ] Vùng phủ của từng mảng vải đã khớp với concept (cổ áo, gấu quần, vị trí thắt lưng).
- [ ] Chưa có chi tiết nếp gấp — silhouette vẫn ở dạng khối lớn, sạch sẽ.

## 7. Tóm tắt

Blocking trang phục bằng cách tách mesh từ cơ thể rồi ràng buộc qua Shrinkwrap Modifier giúp nhanh chóng xác định đúng vùng phủ và đường viền lớn của từng mảng vải, tạo nền tảng để bài học tiếp theo tập trung tinh chỉnh nếp gấp và độ dày.
