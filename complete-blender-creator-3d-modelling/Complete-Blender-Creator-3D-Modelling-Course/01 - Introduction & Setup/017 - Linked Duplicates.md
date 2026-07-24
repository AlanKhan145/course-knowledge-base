# 017 — Linked Duplicates

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 01 — Introduction & Setup |
| **Bài học** | Linked Duplicates |
| **Thời lượng** | 8:11 |
| **Chủ đề chính** | Nhân bản đối tượng có liên kết |

## 1. Mục tiêu bài học

- Phân biệt rõ giữa Duplicate thường (`Shift + D`) và Linked Duplicate (`Alt + D`).
- Hiểu khái niệm Object Data (mesh data-block) được chia sẻ giữa nhiều object.
- Biết cách kiểm tra số lượng "user" của một mesh data trong Object Data Properties.
- Biết cách ngắt liên kết (Make Single User) khi cần một bản sao độc lập không còn ăn theo bản gốc.

## 2. Nội dung chính

Khi bấm `Shift + D` (Duplicate), Blender tạo một object hoàn toàn mới với **mesh data riêng biệt** — chỉnh sửa bản sao này trong Edit Mode không ảnh hưởng đến object gốc.

Ngược lại, `Alt + D` (**Linked Duplicate**) tạo một object mới nhưng **dùng chung mesh data-block** với object gốc. Về mặt Object Mode (vị trí, xoay, scale, vật liệu riêng nếu gán khác) hai object này độc lập, nhưng nếu vào Edit Mode chỉnh sửa hình học (thêm/xóa vertex, extrude...) trên bất kỳ bản nào, **tất cả các bản linked duplicate khác sẽ tự động cập nhật theo** vì chúng cùng trỏ đến một mesh data.

Đây là kỹ thuật cực kỳ hữu ích khi cần nhiều bản sao giống hệt nhau về hình dạng nhưng có thể đặt ở vị trí/góc xoay khác nhau — ví dụ nhiều tảng đá giống nhau quanh nền hải đăng, hoặc các chi tiết lặp lại trong kiến trúc (cột, cửa sổ). Khi cần sửa hình dạng chung cho tất cả cùng lúc, chỉ cần sửa một bản.

Có thể kiểm tra số lượng object đang dùng chung một mesh data qua **Object Data Properties** (icon tam giác xanh lá) — bên cạnh tên mesh data sẽ hiển thị con số (ví dụ "3") cho biết có 3 object đang share data này. Khi muốn "cắt đứt" liên kết để một bản trở thành độc lập, dùng `Object > Relations > Make Single User > Object & Data` (hoặc phím tắt `U` trong Object Mode mở menu Make Single User), hoặc đơn giản là click vào con số user count trong Object Data Properties để tự động tách bản đang chọn ra độc lập.

## 3. Quy trình thực hành gợi ý

1. Chọn một object (ví dụ một tảng đá nhỏ), bấm `Alt + D` để tạo linked duplicate, di chuyển sang vị trí khác.
2. Vào Edit Mode trên bất kỳ bản nào, thêm một Loop Cut hoặc Extrude một phần — quan sát bản kia cũng thay đổi theo.
3. Kiểm tra Object Data Properties để thấy số user count = 2 (hoặc nhiều hơn nếu tạo thêm linked duplicate).
4. Thử `Object > Relations > Make Single User > Object & Data` trên một bản để ngắt liên kết, sau đó chỉnh sửa Edit Mode và xác nhận bản kia không còn bị ảnh hưởng.
5. So sánh trải nghiệm với `Shift + D` (Duplicate thường) để thấy rõ khác biệt ngay từ đầu không có liên kết chia sẻ data.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Duplicate (độc lập hoàn toàn) | `Shift + D` |
| Linked Duplicate (chia sẻ mesh data) | `Alt + D` |
| Mở menu Make Single User | `U` (Object Mode) |
| Ngắt liên kết Object & Data | `Object > Relations > Make Single User > Object & Data` |
| Xem số user của mesh data | Object Data Properties (icon tam giác xanh) |

## 5. Lưu ý & lỗi thường gặp

- Chỉnh sửa hình học trên một linked duplicate mà quên rằng các bản khác cũng sẽ thay đổi theo — có thể gây "hỏng" các bản đã đặt vị trí khác mà không chủ đích.
- Nhầm lẫn linked duplicate với instance qua modifier (ví dụ Array Modifier) — đây là hai cơ chế khác nhau, linked duplicate là các object riêng biệt dùng chung data, còn Array tạo bản sao ảo qua modifier trên cùng một object.
- Vật liệu (Material) gán ở cấp Object có thể khác nhau giữa các linked duplicate dù mesh data giống nhau — cần lưu ý phân biệt vật liệu gán theo Object hay theo Mesh Data khi làm việc với linked duplicate.
- Khi Apply modifier hoặc thao tác biến mesh (ví dụ Decimate Apply) trên một linked duplicate, tất cả các bản chia sẻ data cũng bị Apply theo — cần cân nhắc kỹ trước khi Apply nếu vẫn muốn giữ liên kết cho các thay đổi tương lai.

## 6. Checklist thực hành

- [ ] Đã tạo được Linked Duplicate bằng Alt+D.
- [ ] Đã xác nhận chỉnh sửa Edit Mode lan truyền giữa các linked duplicate.
- [ ] Đã kiểm tra user count trong Object Data Properties.
- [ ] Đã thực hành Make Single User để ngắt liên kết khi cần.

## 7. Tóm tắt

Linked Duplicate (`Alt + D`) tạo các object chia sẻ chung mesh data, giúp đồng bộ chỉnh sửa hình học giữa nhiều bản sao cùng lúc — rất hữu ích cho các chi tiết lặp lại trong scene. Khi cần một bản độc lập, dùng Make Single User để ngắt liên kết.
