# 026 — Practical Exercise 2 – Wizard Hat

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 03 — Organic Modeling |
| **Bài học** | Practical Exercise 2 – Wizard Hat |
| **Thời lượng** | 12:40 |
| **Chủ đề chính** | Dựng mũ phù thủy với đỉnh cong rủ |

## 1. Mục tiêu bài học

- Dựng một chiếc mũ phù thủy từ khối Cone làm điểm khởi đầu.
- Sử dụng Simple Deform Modifier (Bend) để tạo độ cong rủ tự nhiên ở đỉnh mũ.
- Dựng phần vành mũ (brim) rộng bo cong bằng Extrude và Proportional Editing.
- Thêm các nếp gấp giống vải bằng sculpting nhẹ hoặc mô phỏng Cloth.

## 2. Nội dung chính

Chiếc **mũ phù thủy (wizard hat)** bắt đầu từ một khối **Cone** (`Shift + A > Mesh > Cone`) với số Vertices vừa phải (khoảng 16–32) để giữ dáng tròn khi làm mịn nhưng không quá nặng lưới. Phần thân chóp của Cone được kéo dài (Scale theo trục Z hoặc Extrude thêm đoạn ở đỉnh) để tạo độ cao đặc trưng cao vút của mũ phù thủy.

Điểm nhấn kỹ thuật của bài học là tạo **độ cong rủ (droop)** ở phần đỉnh nhọn — đặc trưng thường thấy ở mũ phù thủy trong tranh minh họa cổ tích. Cách tiếp cận chính là dùng **Simple Deform Modifier** với chế độ **Bend**: modifier này uốn cong toàn bộ hoặc một phần mesh dọc theo một trục dựa trên góc Angle chỉ định, và có thể giới hạn vùng ảnh hưởng bằng thông số **Limits** (Lower/Upper) để chỉ phần đỉnh mũ bị uốn cong trong khi phần gốc giữ nguyên thẳng đứng. Cách tiếp cận thay thế (hoặc bổ sung) là chỉnh tay từng loop cạnh dọc theo trục cao của mũ bằng Proportional Editing (`O`) để kéo uốn cong hữu cơ hơn, tránh độ cong quá đều/máy móc mà Simple Deform đôi khi tạo ra.

Phần **vành mũ (brim)** — vòng vải rộng ở đáy mũ — được dựng bằng cách chọn vòng cạnh đáy Cone, Extrude ra ngoài theo phương ngang (`E` rồi `Shift + Z` để khóa không di chuyển theo Z), sau đó dùng Proportional Editing hoặc thêm Loop Cut để tạo độ gợn sóng nhẹ ở mép vành, tránh vành mũ phẳng lì thiếu tự nhiên.

Để tăng cảm giác chất liệu vải, bài học đề cập hai hướng xử lý **nếp gấp**: (1) sculpting nhẹ bằng brush Crease/Draw trong Sculpt Mode để tạo vài nếp nhăn dọc thân mũ và vành, phù hợp khi chỉ cần kết quả tĩnh nhanh; hoặc (2) chạy một lượt **Cloth Simulation** (Physics Properties > Cloth) trên mesh mũ với Pin một phần gốc cố định, để trọng lực tự nhiên kéo rủ đỉnh mũ và tạo nếp gấp vật lý chân thực hơn, sau đó Apply kết quả simulation tại frame ưng ý thành mesh tĩnh (`Convert To > Mesh` sau khi Apply Modifier as Shape Key hoặc Apply trực tiếp).

## 3. Quy trình thực hành gợi ý

1. Thêm Cone, chỉnh Vertices khoảng 24, kéo dài đỉnh bằng Scale Z hoặc Extrude thêm đoạn.
2. Thêm Subdivision Surface Modifier để bề mặt mịn dần trong lúc dựng.
3. Thêm Simple Deform Modifier, chọn Bend, chỉnh Angle và Limits để chỉ phần đỉnh bị cong rủ.
4. Apply Simple Deform khi hài lòng với dáng cong, tinh chỉnh thêm bằng Proportional Editing nếu cần.
5. Chọn vòng cạnh đáy, Extrude ngang tạo vành mũ, thêm Loop Cut và nhấp nhẹ vài điểm để tạo gợn sóng ở mép.
6. Sculpt nhẹ vài nếp nhăn dọc thân mũ bằng brush Draw/Crease, hoặc thiết lập Cloth Simulation với Pin Group ở vùng gốc mũ và chạy vài chục frame rồi Apply.
7. Shade Smooth toàn bộ, kiểm tra silhouette từ nhiều góc.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Thêm Simple Deform Modifier | `Add Modifier > Deform > Simple Deform` |
| Khóa trục khi Extrude/Move | `Shift + Z` (khóa không di chuyển theo Z) |
| Proportional Editing | `O` (bật/tắt), cuộn chuột để đổi bán kính |
| Loop Cut | `Ctrl + R` |
| Bật Cloth Simulation | Physics Properties > `Cloth` |
| Apply Modifier | Ctrl trên biểu tượng dropdown modifier > `Apply` |

## 5. Lưu ý & lỗi thường gặp

- Simple Deform Bend áp lên toàn bộ mesh (không giới hạn Limits) sẽ uốn cong luôn cả phần vành mũ, gây méo hình không mong muốn.
- Số Vertices của Cone quá thấp khiến độ cong rủ hiện rõ các mặt phẳng góc cạnh thay vì đường cong mượt.
- Cloth Simulation không Pin đúng vùng gốc mũ khiến toàn bộ mesh rơi tự do, mất hình dạng mũ ban đầu.
- Quên Apply Simple Deform trước khi tiếp tục chỉnh sửa mesh thủ công có thể gây nhầm lẫn giữa hình dạng gốc và hình dạng đã biến dạng.
- Vành mũ phẳng tuyệt đối trông cứng và giả tạo — nên có ít nhất vài điểm nhấp nhô nhẹ.

## 6. Checklist thực hành

- [ ] Đã dựng thân mũ từ Cone với chiều cao hợp lý.
- [ ] Đã tạo độ cong rủ ở đỉnh mũ bằng Simple Deform Bend (hoặc chỉnh tay).
- [ ] Đã dựng vành mũ rộng với mép hơi gợn sóng.
- [ ] Đã thêm ít nhất vài nếp gấp giống vải (sculpt hoặc Cloth).
- [ ] Mô hình hoàn chỉnh giữ được silhouette đặc trưng của mũ phù thủy.

## 7. Tóm tắt

Mũ phù thủy minh họa cách kết hợp một primitive đơn giản (Cone), một modifier biến dạng (Simple Deform Bend) và các kỹ thuật tăng độ chân thực chất liệu (sculpt nếp nhăn hoặc Cloth Simulation) để tạo ra một vật thể organic có tính cách điệu cao nhưng vẫn giữ cảm giác vải mềm tự nhiên.
