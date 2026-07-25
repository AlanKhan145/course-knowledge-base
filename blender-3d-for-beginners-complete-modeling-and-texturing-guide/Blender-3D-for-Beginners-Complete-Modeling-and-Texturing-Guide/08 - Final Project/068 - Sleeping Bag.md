# 068 — Sleeping Bag

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 08 — Final Project |
| **Bài học** | Sleeping Bag |
| **Thời lượng** | 13:52 |
| **Chủ đề chính** | Dựng túi ngủ cuộn tròn gắn trên ba lô |

## 1. Mục tiêu bài học

- Dựng một cuộn hình trụ dùng kỹ thuật Spin/Screw tương tự lathe modeling ở Module 03.
- Tạo nếp gấp vải cuộn tự nhiên bằng sculpt hoặc Cloth simulation nhẹ.
- Gắn dây buộc cố định túi ngủ vào ba lô.

## 2. Nội dung chính

Túi ngủ được cuộn tròn buộc phía trên hoặc bên hông ba lô — hình dạng cơ bản là một **hình trụ** dài được be cong hai đầu bo tròn (giống một chiếc gối dài), dựng nhanh bằng công cụ **Spin** (xoay một profile nửa hình oval quanh trục) tương tự kỹ thuật lathe đã dùng ở bài 024 (Modeling Ceramic Crockery).

Vì vải cuộn không bao giờ hoàn toàn trơn tru, bề mặt trụ cần thêm **nếp gấp tự nhiên**: cách nhanh là sculpt tay bằng Clay Strips/Crease dọc theo chiều dài để tạo các nếp lượn sóng nhẹ mô phỏng vải bị nén khi cuộn chặt, hoặc cách chân thực hơn là chạy một **Cloth Simulation** ngắn — quấn một tấm vải phẳng quanh một trụ lõi cứng, để simulation tự nhiên tạo nếp nhăn khi vải bị siết chặt bởi các dây buộc, sau đó bake và Apply kết quả simulation thành mesh tĩnh.

**Dây buộc** cố định túi ngủ (2-3 dây quấn ngang quanh cuộn, thắt nút ở giữa hoặc bên hông) tái sử dụng kỹ thuật dây thừng từ bài 066 nhưng với profile mảnh và ngắn hơn — mỗi dây cần lõm nhẹ vào bề mặt túi ngủ tại điểm siết để tăng cảm giác vật lý chân thực (có thể làm bằng cách dùng chính dây buộc làm mask/cutter để ấn lõm nhẹ bề mặt túi ngủ bên dưới bằng sculpt Scrape hoặc Shrinkwrap ngược).

## 3. Quy trình thực hành gợi ý

1. Dựng profile nửa hình oval, dùng công cụ Spin quanh trục để tạo hình trụ dài bo hai đầu.
2. Chọn cách tạo nếp gấp: sculpt tay bằng Clay Strips/Crease, hoặc Cloth Simulation quấn quanh lõi trụ.
3. Nếu dùng Cloth, bake simulation đến khung hình có nếp nhăn ưng ý rồi Apply as Shape Key hoặc Convert to Mesh.
4. Dựng 2-3 dây buộc bằng kỹ thuật dây thừng (bài 066), quấn ngang quanh cuộn túi ngủ.
5. Sculpt lõm nhẹ bề mặt túi ngủ tại các điểm dây siết vào để tăng tính vật lý.
6. Gắn toàn bộ cụm túi ngủ + dây buộc vào đúng vị trí trên ba lô.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Công cụ Spin | Menu Mesh > Extrude > Spin, hoặc thanh công cụ Spin |
| Cloth Simulation | Physics Properties > Cloth |
| Bake simulation | Physics Properties > Cloth > Cache > Bake |
| Scrape (sculpt lõm) | Chọn brush Scrape trong Sculpt Mode |

## 5. Lưu ý & lỗi thường gặp

- Spin với số Steps/Angle không đủ khiến hình trụ bị góc cạnh thay vì tròn mượt — cần tăng Steps trong bảng Adjust Last Operation.
- Cloth Simulation không bake trước khi tiếp tục chỉnh sửa mesh khác dễ gây lỗi hoặc kết quả không nhất quán khi mở lại file.
- Dây buộc không lõm vào bề mặt túi ngủ khiến chúng trông như "nổi" lơ lửng phía trên thay vì siết chặt thật sự.
- Kích thước túi ngủ không tương xứng với kích thước ba lô/nhân vật làm mất cân đối tổng thể trang bị.

## 6. Checklist thực hành

- [ ] Đã dựng được hình trụ cuộn bo hai đầu bằng Spin.
- [ ] Đã tạo nếp gấp vải tự nhiên (sculpt tay hoặc Cloth Simulation).
- [ ] Đã dựng dây buộc và tạo hiệu ứng lõm siết chặt.
- [ ] Đã gắn cụm túi ngủ vào đúng vị trí trên ba lô, tỷ lệ hợp lý.

## 7. Tóm tắt

Túi ngủ kết hợp kỹ thuật Spin/lathe modeling từ Module 03 với các lựa chọn tạo nếp gấp (sculpt tay hoặc Cloth Simulation), thể hiện cách một chi tiết trang bị tưởng chừng đơn giản vẫn cần nhiều lớp kỹ thuật để đạt độ chân thực khi kết hợp cùng dây buộc.
