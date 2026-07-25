# 024 — Modeling Ceramic Crockery

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 03 — Organic Modeling |
| **Bài học** | Modeling Ceramic Crockery |
| **Thời lượng** | 19:52 |
| **Chủ đề chính** | Dựng bộ đồ gốm bằng kỹ thuật Spin (lathe) |

## 1. Mục tiêu bài học

- Hiểu và áp dụng kỹ thuật dựng hình đối xứng quay (lathe) bằng công cụ Spin trong Blender.
- Dựng được ba món đồ gốm: đĩa, cốc và ấm trà từ một profile (biên dạng cắt ngang) duy nhất mỗi món.
- Sử dụng Subdivision Surface để làm mịn bề mặt gốm.
- Dùng Solidify Modifier để tạo độ dày thành cho vật thể rỗng (cốc, ấm trà).
- Dùng Edge Crease để giữ lại các cạnh viền sắc nét (mép đĩa, miệng cốc) sau khi làm mịn.

## 2. Nội dung chính

Kỹ thuật **Spin** (lathe) là cách tiêu chuẩn để dựng các vật thể tròn xoay như bát, đĩa, cốc, bình — những hình dạng có mặt cắt ngang giống nhau khi xoay quanh một trục. Quy trình: dựng **profile** — một đường biên dạng nửa mặt cắt của vật thể (ví dụ nửa bên của thành cốc nhìn từ mặt trước) bằng một chuỗi vertex nối tiếp trong Edit Mode (thường bắt đầu từ một Plane xóa hết trừ 1 vertex, rồi Extrude dần theo hình dáng mong muốn), sau đó dùng công cụ **Spin** (menu `Mesh > Extrude > Spin` hoặc phím tắt `Alt + E > Spin`, hoặc trong Mesh Edit menu) để quay profile đó 360° quanh một trục (thường là trục Z, đi qua 3D Cursor), sinh ra toàn bộ hình khối tròn xoay.

Với **đĩa (plate)**: profile chỉ cần vài vertex mô tả độ lõm nhẹ ở giữa và gờ nâng nhẹ ở viền. Với **cốc (cup)**: profile mô tả thành cốc, đáy và một đường cong nhỏ ở miệng cốc; sau khi Spin sẽ cần thêm tay cầm bằng cách Extrude một vòng cạnh riêng và uốn cong thủ công hoặc dùng Curve. Với **ấm trà (teapot)**: đây là vật thể phức tạp nhất — thân ấm dựng bằng Spin, sau đó vòi ấm (spout), nắp ấm (lid) và tay cầm được dựng riêng rồi Join lại, có thể dùng Boolean Difference để cắt lỗ rót nếu vòi ấm rỗng thông với thân.

Vì profile Spin ra thường chỉ là bề mặt mỏng (không có độ dày), **Solidify Modifier** (`Add Modifier > Generate > Solidify`) được dùng để tạo thành dày thực tế cho cốc và ấm trà — tham số Thickness kiểm soát độ dày, Offset kiểm soát việc thành dày mọc ra phía trong hay phía ngoài bề mặt gốc.

Sau khi thêm **Subdivision Surface** để làm mịn tổng thể, các cạnh cần giữ sắc nét (mép ngoài đĩa, viền miệng cốc) có thể được đánh dấu bằng **Edge Crease** (`Shift + E`, kéo chuột hoặc gõ giá trị 0–1) — giá trị crease càng cao, Subdivision Surface càng ít bo tròn cạnh đó, giữ được nét "gốm nung" đặc trưng thay vì bị làm mềm hoàn toàn thành hình tròn trịa như bóng bay.

## 3. Quy trình thực hành gợi ý

1. Thêm Plane, vào Edit Mode, xóa hết vertex trừ 1, đặt 3D Cursor tại gốc tọa độ.
2. Extrude dần vertex đó theo hình dáng mặt cắt của đĩa (nhìn từ Front Orthographic, `Numpad 1`).
3. Chọn toàn bộ profile, vào `Mesh > Extrude > Spin`, chỉnh Steps và Angle = 360° trong bảng Adjust Last Operation.
4. Thêm Subdivision Surface Modifier, quan sát độ mịn; đánh dấu Edge Crease cho viền đĩa bằng `Shift + E`.
5. Lặp lại quy trình profile + Spin cho thân cốc; thêm tay cầm bằng Extrude một vòng cạnh phụ và uốn cong.
6. Thêm Solidify Modifier cho cốc để tạo độ dày thành.
7. Dựng ấm trà theo từng bộ phận (thân, vòi, nắp, tay cầm) riêng biệt bằng Spin, Join lại và căn chỉnh vị trí.
8. Kiểm tra toàn bộ bộ đồ gốm dưới Material Preview shading, xuất ảnh preview để so sánh với đồ gốm thật.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Spin (quay profile thành khối tròn xoay) | `Alt + E > Spin` (Extrude menu) |
| Extrude vertex/edge | `E` |
| Đặt Edge Crease | `Shift + E` |
| Thêm Subdivision Surface | `Ctrl + 2` |
| Thêm Solidify Modifier | `Add Modifier > Generate > Solidify` |
| Join object | `Ctrl + J` |
| Xem Front Orthographic | `Numpad 1` |

## 5. Lưu ý & lỗi thường gặp

- Profile không nằm đúng trên mặt phẳng chứa trục quay khiến kết quả Spin bị lệch tâm hoặc méo.
- Quên đặt 3D Cursor tại đúng trục quay trước khi Spin — công cụ Spin luôn quay quanh vị trí 3D Cursor theo trục hiện tại của View.
- Solidify với Thickness quá lớn trên vật thể nhỏ (cốc, tách) làm mất tỷ lệ thực tế.
- Không dùng Edge Crease ở viền đĩa/miệng cốc khiến Subdivision Surface bo tròn quá mức, mất cảm giác "gốm cứng".
- Số Steps của Spin quá thấp tạo ra bề mặt tròn xoay có góc cạnh rõ (facet) thay vì mịn.

## 6. Checklist thực hành

- [ ] Đã dựng được đĩa bằng kỹ thuật Spin.
- [ ] Đã dựng được cốc có tay cầm và độ dày thành hợp lý (Solidify).
- [ ] Đã dựng được ấm trà gồm thân, vòi, nắp, tay cầm.
- [ ] Đã áp dụng Subdivision Surface cho cả ba món.
- [ ] Đã dùng Edge Crease để giữ các cạnh viền sắc nét khi cần.

## 7. Tóm tắt

Kỹ thuật Spin cho phép dựng nhanh các vật thể tròn xoay như đĩa, cốc, ấm trà chỉ từ một profile mặt cắt duy nhất, kết hợp Subdivision Surface để làm mịn, Solidify để tạo độ dày và Edge Crease để giữ lại các cạnh sắc đặc trưng của đồ gốm.
