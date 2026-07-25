# 012 — Basic Transformation

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Fundamentals |
| **Bài học** | Basic Transformation |
| **Thời lượng** | 4:44 |
| **Chủ đề chính** | Di chuyển, xoay, phóng to/thu nhỏ object bằng G/R/S |

## 1. Mục tiêu bài học

- Thành thạo Grab (G), Rotate (R), Scale (S) — ba phép biến đổi cơ bản nhất.
- Biết giới hạn phép biến đổi theo trục X/Y/Z.
- Nhập số liệu chính xác thay vì kéo chuột tự do.
- Sử dụng N-panel Transform và Apply Transform (Ctrl+A) đúng cách.

## 2. Nội dung chính

Ba phép biến đổi nền tảng trong Blender là **Grab/Move** (`G`), **Rotate** (`R`), và **Scale** (`S`). Sau khi nhấn phím tương ứng, di chuyển chuột sẽ áp dụng phép biến đổi theo thời gian thực; click trái hoặc `Enter` để xác nhận, click phải hoặc `Esc` để hủy.

Để giới hạn phép biến đổi theo một trục duy nhất, nhấn thêm phím trục ngay sau lệnh: ví dụ `G` rồi `X` chỉ di chuyển theo trục X (màu đỏ), `R` rồi `Z` chỉ xoay quanh trục Z (màu xanh dương), `S` rồi `Y` chỉ scale theo trục Y (màu xanh lá). Nhấn trục hai lần liên tiếp (ví dụ `G` `X` `X`) sẽ chuyển sang **hệ tọa độ cục bộ (Local)** của object thay vì hệ tọa độ Global mặc định. Có thể loại trừ một trục bằng `Shift`, ví dụ `S` `Shift + Z` sẽ scale đều theo X và Y nhưng giữ nguyên Z.

Thay vì kéo chuột tự do, có thể **nhập số liệu chính xác** ngay sau khi gọi lệnh: ví dụ `G` `X` `2` `Enter` di chuyển chính xác 2 đơn vị theo trục X; `R` `Z` `45` `Enter` xoay đúng 45 độ quanh Z; `S` `1.5` `Enter` scale đều 1.5 lần.

**N-panel** (mở/đóng bằng phím `N` trong Viewport) hiển thị tab **Item** với các trường Location, Rotation, Scale, Dimensions — có thể click trực tiếp vào từng ô để gõ số hoặc kéo để chỉnh nhanh, đây là cách xem và chỉnh transform một cách tường minh, đặc biệt hữu ích để kiểm tra hoặc reset giá trị.

**Apply Transform** (`Ctrl + A`) là lệnh quan trọng thường bị bỏ qua bởi người mới: nó "đóng băng" giá trị Location/Rotation/Scale hiện tại thành giá trị mặc định (Location vẫn giữ nguyên vị trí thế giới nhưng Rotation về 0 và Scale về 1), trong khi hình dạng thực tế của object không đổi. Việc này rất quan trọng trước khi thêm Modifier (như Array, Mirror) hoặc export sang engine khác, vì Scale chưa Apply (ví dụ 2.5 thay vì 1.0) có thể gây sai lệch trong tính toán normal, độ dày Bevel, hay vật lý mô phỏng.

## 3. Quy trình thực hành gợi ý

1. Thêm một Cube, dùng `G` để di chuyển tự do, sau đó `Esc` để hủy và thử lại với `G X` để giới hạn theo trục X.
2. Nhập chính xác `G X 3 Enter` để di chuyển đúng 3 đơn vị.
3. Dùng `R Z 45 Enter` để xoay Cube đúng 45 độ quanh trục Z.
4. Dùng `S 2 Enter` để scale gấp đôi toàn bộ object, sau đó thử `S Shift Z 1 Enter` để chỉ scale X/Y giữ nguyên Z.
5. Mở N-panel (`N`), quan sát các giá trị Location/Rotation/Scale vừa thay đổi.
6. Nhấn `Ctrl + A > All Transforms` để apply, quan sát Rotation về 0 và Scale về 1 trong khi hình dạng object không đổi.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Move/Grab | `G` |
| Rotate | `R` |
| Scale | `S` |
| Giới hạn theo trục X/Y/Z | `G/R/S` rồi `X`/`Y`/`Z` |
| Chuyển sang trục Local | Nhấn trục hai lần (ví dụ `X X`) |
| Loại trừ một trục | `Shift` + trục |
| Nhập số liệu chính xác | Gõ số ngay sau lệnh, `Enter` xác nhận |
| Mở/đóng N-panel | `N` |
| Apply Transform | `Ctrl + A` |
| Hủy thao tác đang thực hiện | `Esc` hoặc click phải |

## 5. Lưu ý & lỗi thường gặp

- Quên Apply Scale trước khi thêm Modifier (đặc biệt Bevel, Solidify, Array) khiến kết quả bị méo hoặc không đều.
- Nhầm giữa Global và Local axis khi giới hạn trục — cần chú ý object đã bị xoay trước đó hay chưa.
- Xoay/scale quanh sai Pivot Point (mặc định là Median Point) — có thể đổi Pivot Point ở dropdown trên header Viewport (3D Cursor, Individual Origins...) khi cần hành vi khác.
- Gõ số sau khi giới hạn trục nhưng quên nhấn `Enter` khiến thao tác chưa được xác nhận và dễ bị hủy nhầm khi click chỗ khác.

## 6. Checklist thực hành

- [ ] Thành thạo G/R/S không giới hạn trục.
- [ ] Thành thạo giới hạn theo trục X/Y/Z và loại trừ trục bằng Shift.
- [ ] Đã nhập số liệu chính xác cho ít nhất một phép move/rotate/scale.
- [ ] Đã dùng N-panel để kiểm tra giá trị transform.
- [ ] Hiểu và đã thực hiện Apply Transform (Ctrl+A).

## 7. Tóm tắt

G/R/S kết hợp giới hạn trục và nhập số chính xác là bộ ba thao tác được dùng nhiều nhất trong toàn bộ quy trình làm việc Blender; việc Apply Transform đúng lúc giúp tránh những lỗi khó phát hiện ở các bước sau như thêm Modifier hay export model.
