# 05 — Dựng Armature bằng Bendy Bone

| Thuộc tính | Nội dung |
|---|---|
| **Video** | (không rõ tên/kênh — chỉ có transcript) |
| **Đoạn** | Rigging Part 1 |
| **Thời điểm** | 11:45–15:48 |
| **Chủ đề chính** | Bone display B-Bone, B-Bone Segments, Parent Connected, hiển thị Armature xuyên mesh |

## 1. Mục tiêu bài học

- Dựng một Armature tối giản gồm hai xương (thân + đuôi) cho cá.
- Chuyển kiểu hiển thị bone sang **B-Bone** và tăng **Segments** để tạo hiệu ứng uốn cong mượt liên tục dọc một xương duy nhất.
- Parent xương đuôi vào xương thân với tùy chọn **Connected**, và thiết lập hiển thị Armature xuyên qua mesh để dễ căn chỉnh.

## 2. Nội dung chính

**Tạo Armature ban đầu.** Đặt vị trí gần con cá, thêm **Armature** (mặc định chỉ có một xương duy nhất), di chuyển nó lên đúng vị trí thân cá. Xương mặc định hiển thị dạng **Octahedral** (bát diện) — kiểu hiển thị rõ ràng, trực quan, tốt cho việc chỉnh sửa, nhưng tác giả nói rõ **đây không phải kiểu hiển thị cuối cùng** sẽ dùng.

**Thêm xương đuôi.** Vào Edit Mode của Armature với xương đã chọn, chọn đầu **tail** (đầu mút) của xương, nhấn `E` (extrude) rồi `G`+`Z` để kéo dài thêm một đoạn — tạo ra xương thứ hai nối tiếp ở cuối, đóng vai trò xương đuôi. Kết quả: Armature có **hai xương nối tiếp nhau** — một cho thân, một cho đuôi.

**Chuyển sang Bendy Bone (B-Bone).** Thoát Edit Mode, vào **Armature Data Properties** (không phải Bone Properties), mục **Viewport Display**, đổi kiểu hiển thị xương từ **Octahedral** sang **B-Bone**. Quay lại Edit Mode, đặt tên hai xương: **"tail"** và **"body"**. Trong mục **Bendy Bones** (Bone Properties, khi đang chọn từng xương), điều chỉnh thông số **Display Size** để phóng to hình dạng hiển thị của B-Bone — giúp dễ phân biệt trực quan đâu là đuôi, đâu là thân khi nhìn vào Armature.

**Định vị và co giãn Armature khớp với cá.** Không cần thoát Edit Mode để làm việc này: xoay Armature (`R`, trục X 90°, sau đó `R`, trục Z 90°) để khớp hướng với thân cá, scale phóng to, và định vị Armature **nằm bên trong** mesh cá thực sự (không chỉ đặt cạnh nó). Do lưới cá có thể che khuất Armature khi nhìn từ một số góc, tác giả bật tùy chọn **"In Front"** trong **Object Data Properties của Armature > Viewport Display** — giúp Armature **luôn hiển thị xuyên qua mesh**, bất kể góc nhìn, rất hữu ích khi cần căn chỉnh chính xác vị trí xương bên trong thân cá. Sau khi đặt đúng vị trí tổng thể, có thể cần scale giảm độ dày (bán kính) của xương trong Edit Mode để nó vừa khít với kích thước thân cá thực tế hơn.

**B-Bone Segments cho xương thân.** Trong Edit Mode, chọn xương **body**, vào mục **Bendy Bones**, tăng thông số **Segments** (mặc định là 1, nghĩa là xương chỉ uốn cứng như bình thường) lên một giá trị cao — tác giả thử tăng lên **10** trước, quan sát thấy nhiều đoạn chia hơn, sau đó tăng tiếp lên **25**. Thông số Segments quyết định xương B-Bone được **chia nhỏ thành bao nhiêu đoạn nội suy mượt** khi uốn cong — càng nhiều Segments, đường cong uốn của xương càng mượt và liên tục (gần giống một đường cong Bezier thực thụ) thay vì gấp khúc. Số lượng phù hợp phụ thuộc vào độ dài/kích thước con cá cụ thể.

**Parent xương đuôi vào xương thân.** Vẫn trong Edit Mode, chọn xương **tail**, vào **Bone Properties > Relations**, đặt trường **Parent = body**, và đảm bảo tick chọn **Connected** — tùy chọn này khóa đầu gốc (head) của xương con vào đúng đầu cuối (tail) của xương cha, đảm bảo hai xương luôn nối liền mạch khi biến dạng (không thể tách rời hay để lộ khoảng hở). Sau khi thiết lập, nhấn `Ctrl + A` để áp dụng các thay đổi về scale/vị trí đã thực hiện trên Armature.

**Kiểm tra nhanh trong Edit Mode.** Tác giả thử di chuyển xương đuôi trong Edit Mode để xem hiệu ứng uốn cong bắt đầu hoạt động trực quan — nếu thấy có độ xoay dư thừa không mong muốn xuất hiện, dùng `Alt + R` để xóa Rotation dư đó. Cuối cùng, định vị lại toàn bộ Armature (thoát Edit Mode, di chuyển Object) về đúng vị trí mong muốn so với cá, sẵn sàng cho bước Parent mesh vào Armature (chương 06).

## 3. Quy trình thực hành gợi ý

1. Thêm Armature gần cá, di chuyển lên đúng vị trí thân.
2. Edit Mode: chọn tail của xương, `E` rồi `G`+`Z` để thêm xương đuôi nối tiếp.
3. Armature Data Properties > Viewport Display, đổi kiểu hiển thị xương từ Octahedral sang B-Bone.
4. Edit Mode: đặt tên hai xương là "body" và "tail"; chỉnh Display Size trong mục Bendy Bones để dễ phân biệt.
5. Xoay Armature (X 90°, Z 90°), scale và định vị nó vào bên trong mesh cá; bật "In Front" trong Viewport Display để thấy Armature xuyên mesh.
6. Chọn xương body, tăng B-Bone Segments (ví dụ 10 rồi 25) để có đường uốn mượt.
7. Chọn xương tail, Bone Properties > Relations > Parent = body, tick Connected; `Ctrl + A` để apply transform.
8. Thử di chuyển xương tail trong Edit Mode để kiểm tra hiệu ứng uốn cong; dùng `Alt + R` nếu có rotation dư thừa không mong muốn.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt/Vị trí |
|---|---|
| Thêm Armature | `Shift + A > Armature` |
| Extrude thêm xương (Edit Mode) | `E` |
| Đổi kiểu hiển thị xương (Octahedral/B-Bone) | Armature Data Properties > Viewport Display > Display As |
| Hiển thị Armature xuyên mesh | Armature Data Properties > Viewport Display > In Front |
| Tăng số đoạn uốn của B-Bone | Bone Properties > Bendy Bones > Segments |
| Đặt Parent cho bone (Connected) | Bone Properties > Relations > Parent + tick Connected |
| Xóa Rotation dư thừa | `Alt + R` |
| Apply transform | `Ctrl + A` |

## 5. Lưu ý & lỗi thường gặp

- Quên đổi kiểu hiển thị sang B-Bone khiến việc chỉnh Segments không có tác dụng hiển thị trực quan (Segments chỉ ảnh hưởng rõ ràng khi Display As = B-Bone), dễ gây nhầm lẫn "sao thông số này không có tác dụng gì".
- Không tick Connected khi Parent xương đuôi vào xương thân có thể khiến hai xương tách rời/hở ra khi Armature bị biến dạng mạnh trong Pose Mode.
- Segments quá thấp (gần 1) làm đường uốn của B-Bone trông gấp khúc, mất đi lợi ích chính của kỹ thuật Bendy Bone; quá cao có thể ảnh hưởng nhẹ hiệu năng nhưng thường không đáng kể với một Armature đơn giản hai xương.
- Nếu quên bật "In Front", việc căn chỉnh chính xác vị trí Armature bên trong mesh cá sẽ khó khăn hơn nhiều vì bị mesh che khuất.

## 6. Checklist thực hành

- [ ] Đã tạo Armature với hai xương nối tiếp: "body" và "tail".
- [ ] Đã chuyển kiểu hiển thị xương sang B-Bone và tăng Segments cho xương body.
- [ ] Đã định vị Armature khớp bên trong mesh cá, bật "In Front" để dễ căn chỉnh.
- [ ] Đã Parent xương tail vào xương body với tùy chọn Connected.
- [ ] Đã kiểm tra hiệu ứng uốn cong hoạt động đúng khi thử di chuyển xương tail trong Edit Mode.

## 7. Tóm tắt

Bendy Bone với Segments cao là kỹ thuật cốt lõi cho phép một Armature chỉ hai xương đơn giản (thân + đuôi) tạo ra đường uốn mượt liên tục dọc thân cá — thay vì cần một chuỗi nhiều xương cứng nối tiếp như rig truyền thống — đặt nền tảng cho bước gắn mesh vào Armature ở chương tiếp theo.
