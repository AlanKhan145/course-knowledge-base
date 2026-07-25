# 048 — Practical Approach – Chess Horse

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 06 — Digital Sculpting |
| **Bài học** | Practical Approach – Chess Horse |
| **Thời lượng** | 20:11 |
| **Chủ đề chính** | Sculpt quân mã cách điệu từ blocking đến chi tiết |

## 1. Mục tiêu bài học

- Áp dụng quy trình big forms → secondary forms → fine details vào một dự án hoàn chỉnh.
- Luyện tập kết hợp brush, mask và symmetry trong cùng một sculpt.
- Hoàn thiện một quân cờ vua (quân mã) cách điệu từ đầu đến cuối.

## 2. Nội dung chính

Đây là dự án sculpting thực hành đầu tiên, tổng hợp toàn bộ kiến thức từ các bài 043-047. Quy trình bắt đầu bằng **base mesh**: một Cylinder hoặc khối hộp làm đế quân cờ, và một khối thuôn dài (có thể dùng Skin Modifier từ Module 05 hoặc đơn giản là kéo dài một Cube/Sphere) làm phần thân-cổ-đầu ngựa, sau đó Voxel Remesh để có mật độ đồng nhất sẵn sàng sculpt.

**Blocking hình khối lớn**: dùng Grab và Clay Strips để xác định tỷ lệ tổng thể — độ cong của cổ ngựa (đặc trưng chữ S của quân mã trong cờ vua), vị trí đầu cúi xuống, khối đế hình trụ. Ở giai đoạn này liên tục Voxel Remesh lại (`R`) sau mỗi vài bước lớn để giữ mật độ mesh đồng đều, tránh kéo giãn vertex quá mỏng ở các vùng bị Grab nhiều.

**Secondary forms**: thêm bờm ngựa (mane) bằng Clay Strips dọc theo sống cổ, tai bằng Snake Hook kéo ra hai khối nhỏ, và các khối cơ hàm/mũi bằng Clay Strips kết hợp Smooth. **Fine details**: dùng Crease để tạo đường phân chia bờm thành từng lọn, Scrape để làm phẳng các mặt bên đầu ngựa tạo phong cách cách điệu (stylized) thay vì tả thực, và Pinch cho các cạnh viền tai/mũi sắc nét.

Vì quân cờ có tính đối xứng trái-phải, nên bật **Symmetry trục X** ngay từ bước blocking để tiết kiệm một nửa thời gian thao tác.

## 3. Quy trình thực hành gợi ý

1. Dựng base mesh gồm đế trụ và thân ngựa thuôn dài, Voxel Remesh về mật độ vừa phải.
2. Bật Symmetry trục X, dùng Grab/Clay Strips blocking dáng cong cổ ngựa và vị trí đầu.
3. Remesh lại, thêm khối tai bằng Snake Hook, khối hàm/mũi bằng Clay Strips.
4. Thêm bờm bằng Clay Strips dọc sống cổ, dùng Crease chia thành từng lọn bờm.
5. Dùng Scrape làm phẳng các mặt bên đầu để tạo phong cách cách điệu, Pinch các cạnh viền.
6. Smooth tổng thể lần cuối, kiểm tra silhouette từ nhiều góc nhìn trước khi hoàn thiện.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Voxel Remesh | `R` |
| Bật Symmetry trục X | Panel Symmetry, tick `X` |
| Grab | Chọn brush Grab trong thanh công cụ |
| Smooth tạm thời | Giữ `Shift` |

## 5. Lưu ý & lỗi thường gặp

- Sculpt chi tiết bờm/tai trước khi tỷ lệ tổng thể cổ-đầu-đế đã ổn định thường phải làm lại từ đầu khi chỉnh tỷ lệ lớn.
- Quên Remesh định kỳ trong lúc Grab kéo dài hình khối khiến một số vùng mesh bị kéo giãn mỏng, thiếu mật độ để sculpt chi tiết sau này.
- Không kiểm tra silhouette (đổi Viewport Shading sang Solid màu đen hoặc nhìn từ xa) khiến hình dáng tổng thể trông không giống quân mã khi nhìn thoáng qua.

## 6. Checklist thực hành

- [ ] Đã hoàn thành blocking tỷ lệ tổng thể quân mã với Symmetry X.
- [ ] Đã thêm bờm, tai và các khối cơ mặt.
- [ ] Đã hoàn thiện chi tiết nhỏ (Crease cho lọn bờm, Scrape cho mặt phẳng cách điệu).
- [ ] Đã kiểm tra silhouette tổng thể từ nhiều góc trước khi coi là hoàn thành.

## 7. Tóm tắt

Quân mã là bài thực hành sculpting đầu tiên áp dụng đầy đủ quy trình blocking-refine-detail cùng Symmetry và Remesh định kỳ — nền tảng kỹ thuật sẽ được lặp lại và nâng cao dần qua ba bài tập tiếp theo (mèo con, đe, hộp sọ).
