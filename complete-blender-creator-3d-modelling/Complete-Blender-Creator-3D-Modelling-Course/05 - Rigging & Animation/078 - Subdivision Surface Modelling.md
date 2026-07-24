# 078 — Subdivision Surface Modelling

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Rigging & Animation |
| **Bài học** | Subdivision Surface Modelling |
| **Thời lượng** | 10:48 |
| **Chủ đề chính** | Dựng TV bằng Subdivision Surface |

## 1. Mục tiêu bài học

- Ôn lại nguyên lý hoạt động của Subdivision Surface modifier.
- Biết cách dùng Edge Loop và Crease để kiểm soát độ bo tròn của mặt phẳng khi Subdivide.
- Áp dụng kỹ thuật box modelling kết hợp Subdivision Surface để dựng một chiếc TV có góc bo mềm mại.
- Hiểu cách bật Wireframe/hiển thị Cage để kiểm tra mesh gốc trong khi xem preview Subdivision.

## 2. Nội dung chính

Subdivision Surface (thường gọi tắt là Subdiv hoặc SubD) là modifier chia nhỏ các mặt (face) của mesh thành nhiều mặt nhỏ hơn và làm mượt bề mặt theo thuật toán Catmull-Clark, biến một mesh low-poly góc cạnh thành một hình khối bo tròn mềm mại. Đây là kỹ thuật modelling rất phổ biến để tạo các vật thể có bề mặt cong tự nhiên (như TV, đồ nội thất, nhân vật) mà không cần điêu khắc chi tiết từng vertex.

Điểm mấu chốt khi làm việc với Subdivision Surface là kiểm soát được phần nào của mesh sẽ được bo tròn và phần nào giữ nguyên góc cạnh sắc. Có hai kỹ thuật chính: thêm Edge Loop hỗ trợ (support loop) đặt gần cạnh cần giữ sắc để "ép" bề mặt subdivide bo cong sát vào cạnh đó hơn, hoặc dùng Edge Crease (Shift+E) để chỉ định một cạnh cụ thể giữ độ sắc theo tỉ lệ (từ 0 = mượt hoàn toàn đến 1 = sắc hoàn toàn như mesh gốc).

Khi dựng một chiếc TV, quy trình thường bắt đầu từ một khối hộp cơ bản (cube), sau đó bevel các cạnh, thêm loop cut ở các vị trí cần giữ hình dạng (viền màn hình, chân đế), rồi áp Subdivision Surface modifier để làm mượt toàn bộ. Cần bật chế độ hiển thị "On Cage" hoặc Wireframe overlay để nhìn thấy đồng thời mesh gốc (control cage) và kết quả sau khi subdivide, giúp điều chỉnh chính xác hơn.

## 3. Quy trình thực hành gợi ý

1. Bắt đầu từ một Cube, chỉnh tỉ lệ thô để có hình dạng gần giống thân TV.
2. Thêm Loop Cut (Ctrl+R) ở các vị trí cần giữ chi tiết (viền màn hình, góc chân đế).
3. Áp modifier Subdivision Surface, quan sát bề mặt bị bo tròn quá mức ở những nơi không mong muốn.
4. Thêm support loop hoặc dùng Edge Crease (Shift+E) tại các cạnh cần giữ sắc.
5. Bật chế độ hiển thị Wireframe overlay hoặc Edit Mode Display > On Cage để kiểm tra đồng thời mesh gốc và kết quả subdivide.
6. Tăng Viewport/Render Levels của modifier khi cần độ mượt cao hơn cho khung nhìn cuối.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| `Ctrl+R` | Loop Cut and Slide |
| `Ctrl+B` | Bevel |
| `Shift+E` | Edge Crease (giữ độ sắc cạnh khi Subdivide) |
| `Ctrl+2` / `Ctrl+3` | Thêm nhanh Subdivision Surface modifier (Viewport level 2/3) |
| `Ctrl+1` | Thêm Subdivision Surface modifier với Viewport level 1 |
| `Z` | Mở pie menu chuyển kiểu hiển thị (Wireframe, Solid...) |

## 5. Lưu ý & lỗi thường gặp

- Áp Subdivision Surface trực tiếp mà không thêm support loop khiến toàn bộ mesh bị bo tròn quá mức, mất chi tiết hình khối gốc.
- Lạm dụng Edge Crease thay vì support loop có thể tạo ra bề mặt gợn sóng không tự nhiên ở vùng chuyển tiếp.
- Quên tăng Render Levels khiến kết quả render cuối cùng không đủ mượt dù viewport trông đã ổn.
- Để mesh có n-gon (mặt nhiều hơn 4 cạnh) ở vùng quan trọng, dễ gây lỗi shading hoặc biến dạng bất thường sau khi subdivide.

## 6. Checklist thực hành

- [ ] Đã dựng khối hộp cơ bản làm thân TV.
- [ ] Đã áp modifier Subdivision Surface và quan sát hiệu ứng bo tròn.
- [ ] Đã thêm support loop hoặc Edge Crease để giữ hình dạng mong muốn.
- [ ] Đã bật hiển thị On Cage/Wireframe để kiểm tra mesh gốc.
- [ ] Đã hoàn thiện hình dáng thân TV bo tròn mềm mại.

## 7. Tóm tắt

Subdivision Surface giúp biến mesh low-poly thành bề mặt bo tròn mượt mà, nhưng cần kiểm soát bằng support loop hoặc Edge Crease để giữ đúng hình dạng mong muốn. Kỹ thuật này được áp dụng trực tiếp để dựng thân chiếc TV trong dự án của module.
