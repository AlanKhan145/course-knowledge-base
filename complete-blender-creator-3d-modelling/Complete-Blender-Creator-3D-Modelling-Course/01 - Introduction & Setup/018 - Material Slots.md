# 018 — Material Slots

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 01 — Introduction & Setup |
| **Bài học** | Material Slots |
| **Thời lượng** | 9:43 |
| **Chủ đề chính** | Gán nhiều vật liệu cho một đối tượng |

## 1. Mục tiêu bài học

- Hiểu khái niệm Material Slot và lý do một object có thể cần nhiều hơn một vật liệu.
- Biết cách thêm/xóa Material Slot trong Material Properties.
- Biết cách gán vật liệu cho từng Face cụ thể trong Edit Mode bằng nút Assign/Select/Deselect.
- Áp dụng kỹ thuật này để phân vùng vật liệu khác nhau trên cùng một object (ví dụ thân và mái ngọn hải đăng).

## 2. Nội dung chính

Một object có thể có nhiều **Material Slot** — danh sách hiển thị trong Material Properties (icon quả cầu). Mỗi slot chứa một vật liệu (có thể trùng hoặc khác nhau), và mỗi **Face** trong mesh được gán vào đúng một slot. Điều này cho phép một object duy nhất hiển thị nhiều vật liệu khác nhau trên các vùng bề mặt khác nhau — ví dụ thân đá xám, cửa gỗ nâu, kính trong suốt trên cùng một mesh ngôi nhà.

Thao tác cơ bản:

1. Thêm Slot mới bằng nút **"+"** cạnh danh sách slot.
2. Với slot đang chọn, tạo vật liệu mới ("+ New") hoặc gán vật liệu có sẵn từ dropdown.
3. Vào **Edit Mode**, chọn mức Face (`3`), chọn các face muốn gán vật liệu này.
4. Bấm nút **Assign** (nằm dưới danh sách slot, chỉ hiện trong Edit Mode) để gán các face đang chọn vào slot hiện tại.

Hai nút bổ trợ quan trọng:

- **Select**: chọn lại tất cả face đang thuộc slot hiện tại (hữu ích kiểm tra hoặc chỉnh sửa lại vùng đã gán).
- **Deselect**: bỏ chọn các face thuộc slot hiện tại khỏi vùng đang chọn.

Mặc định, khi mesh chưa gán face nào vào slot cụ thể, toàn bộ face thuộc slot đầu tiên (index 0). Cần chủ động chọn và Assign để phân chia các vùng khác sang slot khác.

Material Slot có thể được gán ở cấp **Object** (Link: Object) hoặc cấp **Mesh Data** (Link: Data) — kiểm soát qua dropdown "Link" cạnh tên slot: Object-linked material chỉ áp dụng cho object hiện tại (hữu ích với Linked Duplicate muốn có màu khác nhau), còn Data-linked material chia sẻ giữa mọi object dùng chung mesh data.

## 3. Quy trình thực hành gợi ý

1. Chọn object thân ngọn hải đăng, mở Material Properties.
2. Thêm Slot 1: tạo vật liệu "Body_White" (thân trắng), gán mặc định cho toàn bộ mesh trước.
3. Thêm Slot 2: tạo vật liệu "Roof_Red" (mái đỏ).
4. Vào Edit Mode, mức chọn Face (`3`), chọn các face thuộc phần mái.
5. Chọn Slot 2 trong danh sách, bấm **Assign** để gán các face mái vào vật liệu đỏ.
6. Quay lại Object Mode, chuyển Material Preview để kiểm tra kết quả — thân trắng, mái đỏ trên cùng một object.
7. Dùng nút **Select** trên từng slot để kiểm tra lại đúng các face đã được gán.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Vị trí |
|---|---|
| Thêm/xóa Material Slot | Nút "+"/"-" trong Material Properties |
| Gán face vào slot | Nút **Assign** (Edit Mode, mức Face) |
| Chọn lại face theo slot | Nút **Select** |
| Bỏ chọn face theo slot | Nút **Deselect** |
| Chuyển mức chọn Face | `3` |
| Xem kết quả nhiều vật liệu | `Z` > Material Preview/Rendered |

## 5. Lưu ý & lỗi thường gặp

- Quên bấm **Assign** sau khi chọn face và chọn slot — chỉ chọn slot không tự động gán vật liệu cho face đang chọn.
- Xóa một Material Slot đang có face gán vào nó sẽ khiến các face đó rơi về slot trước đó (hoặc mất vật liệu nếu là slot duy nhất) — cần kiểm tra kỹ trước khi xóa slot.
- Nhầm giữa Link "Object" và "Data" gây khó hiểu khi vật liệu không đổi như mong đợi trên các linked duplicate — kiểm tra dropdown Link nếu gặp trường hợp này.
- Không kiểm tra lại bằng nút Select sau khi Assign hàng loạt slot có thể dẫn đến sót face chưa được gán đúng vật liệu, gây "lỗ hổng" màu sắc không mong muốn.

## 6. Checklist thực hành

- [ ] Đã thêm được nhiều Material Slot trên cùng một object.
- [ ] Đã dùng Assign để gán face cụ thể vào từng slot.
- [ ] Đã dùng Select/Deselect để kiểm tra lại vùng đã gán.
- [ ] Đã xem kết quả nhiều vật liệu trên cùng object qua Material Preview.

## 7. Tóm tắt

Material Slots cho phép một object có nhiều vật liệu khác nhau trên các vùng face riêng biệt, thao tác qua chu trình chọn face → chọn slot → Assign. Đây là kỹ năng cần thiết để chuẩn bị cho việc tạo vật liệu chi tiết cho ngọn hải đăng ở bài tiếp theo.
