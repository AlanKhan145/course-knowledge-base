# 047 — Sculpting Methods in Blender

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 06 — Digital Sculpting |
| **Bài học** | Sculpting Methods in Blender |
| **Thời lượng** | 5:29 |
| **Chủ đề chính** | Multiresolution, Dynamic Topology, Voxel Remesh |

## 1. Mục tiêu bài học

- So sánh ba phương pháp quản lý mật độ mesh khi sculpt: Multiresolution, Dynamic Topology, Voxel Remesh.
- Biết khi nào nên dùng phương pháp nào.
- Biết thao tác cơ bản của mỗi phương pháp (tăng subdivision, bật Dyntopo, Remesh bằng phím R).

## 2. Nội dung chính

**Multiresolution Modifier** thêm các cấp độ subdivision có thể "leo" lên/xuống (View/Sculpt/Render levels riêng biệt), cho phép sculpt chi tiết ở cấp cao trong khi vẫn giữ được cấp thấp để chỉnh sửa hình khối tổng thể mà không mất chi tiết đã sculpt — đây là phương pháp duy nhất trong ba phương pháp hỗ trợ tốt việc bake normal map/displacement map sau này vì giữ được tương ứng topology giữa các cấp.

**Dynamic Topology** (Dyntopo, bật qua nút "Dyntopo" trong panel Sculpt hoặc `Ctrl + D`) tự động thêm hoặc gộp bớt geometry ngay dưới con trỏ brush trong lúc sculpt, theo mật độ tam giác chỉnh được (Detail Size) — không cần chuẩn bị trước mật độ mesh, cực kỳ linh hoạt để phác thảo tự do (giống nặn đất sét thật), nhưng tạo ra topology tam giác không đều, không phù hợp để chỉnh sửa Edit Mode truyền thống sau đó.

**Voxel Remesh** (phím `R` hoặc nút "Remesh" trong panel Remesh) tính toán lại toàn bộ mesh thành một lưới đều dựa trên thể tích (voxel), theo độ phân giải chỉnh bằng **Voxel Size** — dùng để "dọn dẹp" mesh về một mật độ đồng nhất sau một giai đoạn sculpt tự do (thường sau khi dùng Dyntopo), sẵn sàng cho vòng sculpt chi tiết tiếp theo. Không giữ UV hay vertex groups qua các lần Remesh.

Quy trình phổ biến kết hợp cả ba: bắt đầu blocking bằng Dyntopo cho sự tự do, Voxel Remesh để làm sạch mật độ sau mỗi giai đoạn lớn, và cuối cùng chuyển sang Multiresolution khi cần chi tiết cao ổn định và có thể bake ra texture map.

## 3. Quy trình thực hành gợi ý

1. Trên một Icosphere, thêm Multiresolution Modifier, nhấn "Subdivide" vài lần và sculpt chi tiết ở cấp cao nhất.
2. Kéo View/Sculpt level xuống thấp, quan sát hình khối tổng thể vẫn mượt trong khi chi tiết được ẩn tạm.
3. Trên một mesh khác, bật Dyntopo, sculpt tự do và quan sát mesh tự sinh thêm tam giác dưới brush.
4. Nhấn `R` để Voxel Remesh mesh vừa Dyntopo, điều chỉnh Voxel Size trước khi remesh để kiểm soát độ chi tiết.
5. So sánh chất lượng topology (Wireframe overlay) giữa kết quả Multiresolution và kết quả Dyntopo/Remesh.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Thêm Multiresolution Modifier | Modifier Properties > Add Modifier > Generate > Multiresolution |
| Bật/tắt Dyntopo | Nút "Dyntopo" trong panel Sculpt (Sculpt Mode) |
| Voxel Remesh | `R` (trong Sculpt Mode) hoặc nút Remesh trong panel |
| Chỉnh Voxel Size | Thanh trượt "Voxel Size" trong panel Remesh |

## 5. Lưu ý & lỗi thường gặp

- Dùng Dyntopo trên mesh có UV/vertex groups quan trọng sẽ phá hỏng dữ liệu đó do topology thay đổi liên tục.
- Multiresolution yêu cầu mesh gốc có topology quad sạch trước khi thêm modifier — mesh gốc xấu sẽ khiến các cấp subdivision cao cũng xấu theo.
- Voxel Size quá nhỏ tạo ra lượng polygon khổng lồ, dễ làm máy chậm hoặc treo — nên tăng dần từ giá trị lớn xuống nhỏ.
- Chuyển đổi qua lại giữa các phương pháp trên cùng một mesh mà không hiểu rõ đặc điểm từng loại dễ làm mất dữ liệu (UV, vertex groups, cấp Multiresolution).

## 6. Checklist thực hành

- [ ] Đã sculpt thử với Multiresolution và quan sát việc leo cấp độ.
- [ ] Đã sculpt thử với Dynamic Topology và quan sát mesh tự sinh geometry.
- [ ] Đã dùng Voxel Remesh để làm sạch mật độ sau Dyntopo.
- [ ] Hiểu rõ khi nào nên chọn phương pháp nào cho từng giai đoạn dự án.

## 7. Tóm tắt

Ba phương pháp Multiresolution, Dynamic Topology và Voxel Remesh phục vụ các giai đoạn khác nhau của quy trình sculpting — kết hợp đúng thứ tự (Dyntopo để phác thảo tự do, Remesh để dọn dẹp, Multiresolution để hoàn thiện chi tiết ổn định) là kỹ năng nền tảng cho toàn bộ các bài tập sculpting tiếp theo trong module.
