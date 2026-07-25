# 015 — Tools in the Edit Mode

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Fundamentals |
| **Bài học** | Tools in the Edit Mode |
| **Thời lượng** | 6:30 |
| **Chủ đề chính** | Bốn công cụ chỉnh sửa mesh cốt lõi: Extrude, Inset, Bevel, Loop Cut |

## 1. Mục tiêu bài học

- Thành thạo Extrude (E) để kéo dài hình học theo mặt/cạnh/đỉnh đang chọn.
- Sử dụng Inset Faces (I) để tạo mặt con bên trong một face.
- Sử dụng Bevel (Ctrl+B) để vát cạnh/góc.
- Sử dụng Loop Cut and Slide (Ctrl+R) để thêm vòng cạnh mới.

## 2. Nội dung chính

**Extrude** (`E`) là công cụ modeling quan trọng nhất trong Blender: nó nhân đôi phần tử đang chọn (vertex/edge/face) và tự động nối chúng bằng face mới với phần gốc, sau đó cho phép kéo theo pháp tuyến (normal) mặc định. `E` rồi di chuột kéo theo hướng normal; có thể giới hạn trục như Move (`E` `X`/`Y`/`Z`), hoặc nhấn `Enter`/click để xác nhận. Biến thể `Alt + E` mở menu các loại Extrude đặc biệt (Extrude Along Normals, Extrude Individual Faces...).

**Inset Faces** (`I`) tạo một face mới nhỏ hơn nằm bên trong face đang chọn, đồng thời sinh ra một vòng cạnh nối giữa face cũ và face mới — thường dùng làm bước chuẩn bị trước khi Extrude để tạo chi tiết như nút bấm, rãnh, hoa văn bề mặt. Giữ `I` rồi kéo chuột để chỉnh độ inset, gõ số để nhập chính xác; nhấn thêm `I` lần nữa trong lúc thao tác để chuyển sang chế độ Individual (inset riêng từng face nếu chọn nhiều face cùng lúc).

**Bevel** (`Ctrl + B`, hoặc phím tắt công cụ `B` trên vertex tùy phiên bản) vát tròn hoặc vát phẳng một cạnh/góc thành nhiều cạnh nhỏ hơn, làm mềm góc cứng — kỹ thuật gần như bắt buộc trong hard-surface modeling vì các góc bo nhẹ bắt sáng thực tế hơn góc 90 độ tuyệt đối. Trong lúc kéo Bevel, lăn chuột (Scroll Wheel) để tăng/giảm số Segments (số cạnh chia nhỏ), gõ số để nhập Width chính xác, và có thể chỉnh Profile/Shape trong bảng F9 sau khi xác nhận.

**Loop Cut and Slide** (`Ctrl + R`) thêm một hoặc nhiều vòng cạnh mới (Edge Loop) cắt ngang qua mesh, chạy song song với các cạnh hiện có. Sau khi di chuột để định vị trí loop (đường màu vàng preview xuất hiện), click trái để xác nhận số lượng, sau đó có thể trượt (slide) loop đó dọc theo bề mặt bằng cách di chuột tiếp hoặc nhấn `Esc`/click phải để giữ loop ở vị trí giữa mặc định. Lăn chuột trong lúc preview để tăng số lượng loop cắt cùng lúc.

## 3. Quy trình thực hành gợi ý

1. Thêm một Cube, vào Edit Mode, Face Select (`3`), chọn mặt trên.
2. Nhấn `I`, kéo vào trong một khoảng nhỏ, xác nhận bằng click.
3. Nhấn `E`, kéo lên tạo một khối nhô lên từ mặt vừa inset (giống hình dạng nút bấm).
4. Chuyển Edge Select (`2`), chọn các cạnh dọc của khối, nhấn `Ctrl + B`, kéo chuột để tạo bevel, lăn chuột để tăng Segments lên 3-4.
5. Quay lại toàn bộ Cube, nhấn `Ctrl + R`, di chuột giữa hai cạnh để preview Loop Cut, click để xác nhận, click phải để giữ ở giữa.
6. Thử lăn chuột trước khi click xác nhận Loop Cut để thêm 3 vòng cắt cùng lúc.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Extrude | `E` |
| Extrude menu mở rộng | `Alt + E` |
| Inset Faces | `I` |
| Inset từng face riêng (trong lúc inset) | Nhấn `I` lần nữa |
| Bevel | `Ctrl + B` |
| Tăng/giảm Segments Bevel | Lăn chuột (trong lúc kéo) |
| Loop Cut and Slide | `Ctrl + R` |
| Tăng số Loop Cut | Lăn chuột (trước khi click) |
| Mở lại Adjust Last Operation | `F9` |

## 5. Lưu ý & lỗi thường gặp

- Extrude nhiều lần liên tiếp mà không xác nhận rõ ràng có thể tạo ra các face/vertex trùng nhau (double geometry) — nên kiểm tra bằng Merge by Distance sau khi hoàn tất.
- Bevel với Segments = 1 chỉ tạo vát phẳng (chamfer), cần tăng Segments để có độ vát tròn mượt hơn khi cần bắt sáng tự nhiên.
- Loop Cut trên mesh có n-gon (mặt nhiều hơn 4 cạnh) có thể cho kết quả không như mong muốn hoặc bị chặn — Loop Cut hoạt động tốt nhất trên topology toàn quad.
- Quên rằng Inset mặc định áp dụng đều cho tất cả face đang chọn (không phải Individual) — dễ nhầm khi chọn nhiều face rời rạc.

## 6. Checklist thực hành

- [ ] Đã dùng Extrude để tạo hình khối nhô/lõm từ một mặt phẳng.
- [ ] Đã dùng Inset Faces trước khi Extrude để tạo chi tiết bề mặt.
- [ ] Đã dùng Bevel với ít nhất 3 Segments trên một cạnh.
- [ ] Đã thêm nhiều Loop Cut cùng lúc bằng cách lăn chuột.

## 7. Tóm tắt

Extrude, Inset, Bevel và Loop Cut tạo thành bộ công cụ lõi để biến một primitive đơn giản thành mô hình chi tiết — gần như mọi kỹ thuật hard-surface modeling nâng cao sau này đều là sự kết hợp lặp lại của bốn thao tác này.
