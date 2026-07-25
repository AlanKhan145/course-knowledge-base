# 014 — Selection Shortcuts in Edit Mode

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Fundamentals |
| **Bài học** | Selection Shortcuts in Edit Mode |
| **Thời lượng** | 3:05 |
| **Chủ đề chính** | Các phím tắt chọn nhanh nâng cao trong Edit Mode |

## 1. Mục tiêu bài học

- Biết chọn Edge Loop bằng Alt+Click và Edge Ring bằng Ctrl+Alt+Click.
- Sử dụng Select Linked (L) để chọn toàn bộ phần liên kết.
- Sử dụng Select Similar (Shift+G) để chọn theo thuộc tính chung.
- Làm quen Select All by Trait cho các trường hợp chọn đặc biệt.

## 2. Nội dung chính

Bên cạnh việc chọn từng vertex/edge/face đơn lẻ, Blender cung cấp các phím tắt chọn nhanh theo "mẫu hình học" giúp tiết kiệm rất nhiều thời gian khi modeling.

**Alt + Click** trên một cạnh sẽ chọn **Edge Loop** — chuỗi cạnh nối tiếp nhau chạy dọc theo một "vòng" tự nhiên của mesh (ví dụ vòng quanh thân trụ). Đây là công cụ cực kỳ quan trọng khi làm việc với Loop Cut, Bevel theo vòng, hay chỉnh sửa địa hình mesh có tổ chức tốt (topology dạng quad).

**Ctrl + Alt + Click** trên một cạnh sẽ chọn **Edge Ring** — chuỗi các cạnh song song nhau cắt ngang qua các face liên tiếp (khác với Edge Loop chạy dọc theo vòng). Edge Ring hữu ích khi cần chọn tất cả các cạnh "cùng hướng" để scale hoặc dịch chuyển đồng loạt.

Phím `L` (khi di chuột tới gần một phần mesh) sẽ kích hoạt **Select Linked** — chọn toàn bộ vertex/edge/face liên kết vật lý với vị trí con trỏ, hữu ích khi một object có nhiều "đảo" mesh rời rạc (không liên kết) và cần tách riêng từng phần. `Ctrl + L` chọn Linked dựa trên phần tử đang được chọn sẵn (không cần rê chuột).

`Shift + G` mở menu **Select Similar**, cho phép chọn thêm các thành phần có cùng thuộc tính với phần đang chọn: cùng số cạnh (Amount of Vertices/Faces), cùng Material, cùng diện tích (Area), cùng độ dài cạnh (Length), đồng phẳng (Coplanar)... rất hữu ích để chọn hàng loạt face cùng loại trong mesh phức tạp.

Menu **Select > All by Trait** (trong Edit Mode) chứa các lựa chọn chọn theo đặc điểm hình học đặc biệt: **Non Manifold** (cạnh/mặt không kín, lỗi cấu trúc mesh), **Interior Faces**, **Loose Geometry** (vertex/edge rời rạc không thuộc face nào), **Faces by Sides** (chọn theo số cạnh của face, ví dụ chỉ n-gon)... đây là bộ công cụ chẩn đoán lỗi mesh rất hữu dụng trước khi export hoặc áp Modifier.

## 3. Quy trình thực hành gợi ý

1. Thêm một Cylinder có nhiều Segments, vào Edit Mode, Edge Select (`2`).
2. Dùng `Alt + Click` trên một cạnh dọc thân trụ để chọn Edge Loop chạy vòng quanh.
3. Dùng `Ctrl + Alt + Click` trên một cạnh khác để chọn Edge Ring chạy dọc thân trụ.
4. Tách rời một phần mesh (ví dụ dùng `P > Selection` để Separate), sau đó join lại và thử `L` để Select Linked từng đảo riêng.
5. Chọn một face, dùng `Shift + G > Area` để chọn thêm các face có diện tích tương tự.
6. Mở `Select > All by Trait > Non Manifold` trên một mesh có lỗi để xem cách công cụ này khoanh vùng lỗi.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Chọn Edge Loop | `Alt + Click` |
| Chọn Edge Ring | `Ctrl + Alt + Click` |
| Select Linked (theo vị trí chuột) | `L` |
| Select Linked (từ vùng chọn hiện tại) | `Ctrl + L` |
| Select Similar | `Shift + G` |
| Menu Select All by Trait | Select > All by Trait |
| Bỏ chọn Linked | `Alt + L` (từ vị trí chuột) |

## 5. Lưu ý & lỗi thường gặp

- Alt+Click trên mesh có topology không đều (nhiều n-gon hoặc tam giác) có thể khiến Edge Loop "dừng" giữa chừng thay vì chạy trọn vòng — dấu hiệu topology cần cải thiện.
- Nhầm lẫn giữa Edge Loop và Edge Ring là lỗi rất phổ biến ở người mới — cần luyện tập phân biệt trực quan (Loop chạy dọc theo hướng cạnh, Ring cắt ngang qua face).
- Quên rằng Select Similar chỉ hoạt động dựa trên phần tử đang chọn làm chuẩn — chọn nhầm phần tử ban đầu sẽ cho kết quả không mong muốn.
- Non-manifold geometry nếu không được xử lý có thể gây lỗi khi in 3D hoặc khi áp một số Modifier như Solidify.

## 6. Checklist thực hành

- [ ] Thành thạo chọn Edge Loop bằng Alt+Click.
- [ ] Thành thạo chọn Edge Ring bằng Ctrl+Alt+Click.
- [ ] Đã dùng Select Linked (L) để chọn một cụm mesh liên kết.
- [ ] Đã dùng Select Similar (Shift+G) với ít nhất một tiêu chí.
- [ ] Đã thử Select All by Trait để tìm lỗi Non Manifold.

## 7. Tóm tắt

Các phím tắt chọn nâng cao — Edge Loop, Edge Ring, Select Linked, Select Similar — biến việc chọn hàng chục thành phần mesh thành thao tác một cú click, và là nền tảng bắt buộc để làm việc hiệu quả với các công cụ chỉnh sửa mesh ở bài học tiếp theo.
