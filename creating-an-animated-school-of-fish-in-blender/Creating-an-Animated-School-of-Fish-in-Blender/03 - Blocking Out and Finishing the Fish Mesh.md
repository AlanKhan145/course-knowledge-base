# 03 — Block-out và hoàn thiện mesh cá

| Thuộc tính | Nội dung |
|---|---|
| **Video** | (không rõ tên/kênh — chỉ có transcript) |
| **Đoạn** | Modeling cá |
| **Thời điểm** | 02:25–08:17 |
| **Chủ đề chính** | Ảnh tham chiếu, block-out từ Cube, Mirror modifier, dọn mesh, kiểm tra Normals |

## 1. Mục tiêu bài học

- Dựng nhanh một hình dạng cá cơ bản bằng kỹ thuật block-out dựa trên ảnh tham chiếu, không cần chi tiết cao (không vây, không miệng).
- Dùng **Mirror modifier** để chỉ cần model một nửa thân cá.
- Dọn mesh (merge, bevel, proportional editing để làm đầy thân), Shade Smooth, Subdivision Surface, và kiểm tra hướng Normals trước khi sang bước UV/material.

## 2. Nội dung chính

**Chuẩn bị ảnh tham chiếu.** Tác giả đặt con trỏ 3D, chuyển sang **Orthographic side view (`Numpad 5` chuyển Perspective/Orthographic — kết hợp với một góc nhìn trục như Front/Side)**, rồi **kéo-thả trực tiếp một file ảnh cá vào viewport** — Blender tự động tạo một **Empty dạng Image** hiển thị ảnh đó trong không gian 3D, dùng làm tham chiếu để model theo đúng tỉ lệ và hình dáng.

**Block-out bằng Cube.** Thêm một **Cube**, di chuyển ra phía trước ảnh tham chiếu một chút, xoay/chỉnh để bắt đầu tạo hình. Kỹ thuật: **Subdivide** một cạnh của Cube, sau đó **xóa các đỉnh phía sau** để chỉ còn lại mặt trước của Cube (hiệu quả tương đương việc chỉ giữ một "lát cắt" mỏng), chuyển sang chế độ xem **Wireframe** để dễ căn chỉnh xuyên qua ảnh tham chiếu. Đặt khối gần đúng vị trí thân cá trên ảnh, thu nhỏ để khớp hình dạng gần đúng của thân cá — tác giả nhấn mạnh chỉ **scale trên trục X và Z, không scale trên Y** (trục dọc theo bề dày cơ thể) — vì mesh sẽ được **Mirror qua trục Y** ở bước sau, nên nửa mesh cần được model phẳng dọc theo mặt phẳng đối xứng.

**Nguyên tắc tối giản.** Tác giả chủ động giữ mesh tối giản: không thêm nhiều đỉnh hơn mức cần thiết, không model miệng, không đầu tư nhiều vào vây — lý do được nêu rõ là các chi tiết này **tốn nhiều thời gian không tương xứng với một video hướng dẫn**. Mục tiêu của bước block-out không phải "modeling đẹp" mà là tạo ra một **lưới đủ để biến dạng (deform) tốt** khi rig ở các chương sau — vẫn cần một vài đỉnh gần vị trí mắt để giữ hình dạng đầu hợp lý.

**Thao tác tinh chỉnh.** Tác giả lưu ý mẹo giữ `Shift` khi di chuyển/scale (`G`/`S` + giữ `Shift`) để **giảm độ nhạy của chuột**, cho phép điều chỉnh vị trí đỉnh chi tiết và chính xác hơn nhiều so với thao tác thông thường. Đuôi cá được model ở cuối, gộp (merge) khoảng ba đỉnh giữa lại thành một, sau đó chọn các đỉnh liên quan và dùng **`Ctrl + B` (Bevel cạnh)** để bo tròn góc — tạo hình dạng cá thô đầu tiên. Sau đó scale nhẹ trên Y để làm thân mỏng hơn, có thể bevel thêm ở vài chỗ (lưu ý bevel quá tay có thể làm hỏng hình học), thuôn nhọn phần đầu và đuôi. Các mặt phía sau (mặt phẳng đối xứng) được **xóa hẳn** vì Mirror modifier sẽ tự lấp đầy — nếu phát hiện các mặt bị chọn nhầm/lỗi hình học do bevel quá tay, cần dọn lại thủ công trước khi tiếp tục.

**Mirror modifier và ghép nửa mesh.** Thêm **Mirror modifier**, chọn phản chiếu qua trục **Y**, bật **Clipping** — tùy chọn này giữ các đỉnh nằm trên mặt phẳng đối xứng luôn dính chặt vào mặt phẳng đó khi di chuyển, tránh tạo khe hở giữa hai nửa. Vào Edit Mode, chọn tất cả đỉnh, `G` + `Y` để kiểm tra và ghép khớp hai nửa — vì các đỉnh biên chưa hoàn toàn thẳng hàng trên trục Y, cần chọn riêng vòng đỉnh biên đó, scale Y về 0 (`S`, `Y`, `0`) để làm phẳng đúng vào mặt phẳng đối xứng, sau đó chọn lại toàn bộ mesh, `G`+`Y` để khớp hai nửa lại với nhau hoàn chỉnh (nhờ Clipping, việc này an toàn không tạo khoảng hở).

**Làm đầy thân bằng Proportional Editing.** Ở giai đoạn này thân cá còn khá dẹt. Tác giả chọn một cụm đỉnh dọc sống lưng/bụng (không chọn đến tận đầu mút), bật **Proportional Editing (`O`)**, `G`+`Y` kéo nhẹ để "phồng" thân cá dày hơn một cách mượt mà, tạo cảm giác thân cá có khối 3D thay vì phẳng lì.

**Hoàn thiện bề mặt.** Áp dụng **Shade Smooth**, thêm **Subdivision Surface modifier (`Ctrl + 2`)**. Sau bước này xuất hiện một lỗi mesh nhỏ (nghi do các đỉnh nằm quá gần nhau) — tác giả tạm tắt Subdivision Surface và Clipping của Mirror để kéo tách các đỉnh có vấn đề ra, đảm bảo phần đuôi có **độ dày nhẹ** (không được mỏng bằng 0, dù không cần dày nhiều) để tránh lỗi hình học khi subdivide.

**Kiểm tra Normals.** Trước khi sang bước UV/material, bật overlay để xem **hướng mặt (Face Orientation)** — tất cả các mặt hiển thị màu xanh dương là đúng hướng (Normals hướng ra ngoài); nếu thấy màu đỏ nghĩa là Normals bị lật (hướng sai) và cần **Recalculate Normals** hoặc **Flip Normals** thủ công tại vùng đó. Tác giả cũng minh họa: nếu nhìn từ **bên dưới mặt "Fish Source"** (Plane phụ ở chương 02) sẽ thấy toàn bộ mặt đó màu đỏ — điều này **không quan trọng** vì object đó chỉ dùng làm dữ liệu ẩn cho Geometry Nodes, không bao giờ hiển thị trực tiếp trong render, nên hướng Normals của nó không cần sửa.

## 3. Quy trình thực hành gợi ý

1. Đặt 3D cursor, chuyển Orthographic, kéo-thả ảnh tham chiếu cá vào viewport.
2. Thêm Cube, subdivide và xóa một nửa để làm mặt block-out, chuyển Wireframe, căn chỉnh theo ảnh tham chiếu (chỉ scale X/Z, không scale Y).
3. Model thô hình dạng thân/đuôi cá bằng move/scale/merge/bevel (`Ctrl + B`), giữ `Shift` khi cần độ chính xác cao.
4. Xóa các mặt phía mặt phẳng đối xứng, thêm Mirror modifier (trục Y, bật Clipping).
5. Vào Edit Mode, chỉnh vòng đỉnh biên về đúng mặt phẳng đối xứng (Scale Y = 0), ghép hai nửa lại (`G`, `Y`).
6. Bật Proportional Editing (`O`), chọn cụm đỉnh thân, kéo nhẹ để làm thân cá đầy hơn.
7. Shade Smooth, thêm Subdivision Surface (`Ctrl + 2`), sửa lỗi mesh nếu có (đảm bảo đuôi có độ dày nhẹ, không bằng 0).
8. Bật overlay Face Orientation, kiểm tra và sửa các mặt bị lật Normals (bỏ qua object "Fish Source" vì không hiển thị trong render).

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Chuyển góc nhìn Orthographic theo trục | `Numpad 1/3/7` (kèm `Numpad 5` để bật/tắt Perspective) |
| Chuyển chế độ xem Wireframe | `Shift + Z` (hoặc menu Viewport Shading) |
| Merge đỉnh đã chọn | `M` |
| Bevel cạnh/góc | `Ctrl + B` |
| Giảm độ nhạy chuột khi transform | Giữ `Shift` trong lúc `G`/`R`/`S` |
| Bật/tắt Proportional Editing | `O` |
| Áp Shade Smooth | Chuột phải trong Object Mode > Shade Smooth |
| Thêm Subdivision Surface modifier | `Ctrl + 2` |
| Bật overlay Face Orientation | Viewport Overlays > Face Orientation |
| Recalculate Normals hướng ra ngoài | `Shift + N` (Edit Mode) |

## 5. Lưu ý & lỗi thường gặp

- Scale nhầm trên trục Y trong lúc block-out sẽ phá vỡ tính đối xứng cần thiết cho Mirror modifier ở bước sau.
- Bevel quá tay (`Ctrl + B` với giá trị lớn hoặc trên hình học phức tạp) có thể sinh ra mặt lỗi/hình học rác — luôn kiểm tra lại bằng mắt sau khi bevel.
- Quên bật Clipping trên Mirror modifier khi ghép hai nửa mesh dễ tạo khe hở nhỏ không khớp hoàn hảo tại đường giữa.
- Đỉnh nằm quá gần nhau (đặc biệt ở đuôi mỏng) là nguyên nhân phổ biến gây lỗi hiển thị khi bật Subdivision Surface — cần đảm bảo có độ dày tối thiểu tại các vùng mỏng.
- Đừng cố sửa hướng Normals của object "Fish Source" — nó không hiển thị trong render nên hướng mặt đỏ/xanh không ảnh hưởng đến kết quả cuối.

## 6. Checklist thực hành

- [ ] Đã đưa được ảnh tham chiếu cá vào scene và dùng nó để block-out hình dạng.
- [ ] Đã model được nửa thân cá cơ bản (không vây, không miệng) và gắn Mirror modifier hoàn chỉnh.
- [ ] Đã làm đầy thân bằng Proportional Editing và áp Shade Smooth + Subdivision Surface.
- [ ] Đã kiểm tra Face Orientation trên object cá và xác nhận không còn mặt bị lật Normals.

## 7. Tóm tắt

Block-out cá ưu tiên tốc độ và tính đủ dùng cho việc rig hơn là chi tiết thẩm mỹ — kết hợp ảnh tham chiếu, Mirror modifier và Proportional Editing để nhanh chóng có một mesh cá cơ bản, sạch về mặt hình học (đã kiểm tra Normals) và sẵn sàng cho bước UV/material tiếp theo.
