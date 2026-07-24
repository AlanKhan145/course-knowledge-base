# 081 — Rig Ready Meshes

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Rigging & Animation |
| **Bài học** | Rig Ready Meshes |
| **Thời lượng** | 5:53 |
| **Chủ đề chính** | Chuẩn bị mesh cho rigging |

## 1. Mục tiêu bài học

- Hiểu các tiêu chí để một mesh được coi là "sẵn sàng cho rigging" (rig-ready).
- Biết cách Apply Transform (Location, Rotation, Scale) trước khi rig.
- Biết cách Apply các modifier không cần giữ lại dưới dạng non-destructive.
- Kiểm tra và dọn dẹp mesh: normal, vertex trùng, n-gon bất thường.

## 2. Nội dung chính

Trước khi gắn Armature vào một mesh, có một số bước dọn dẹp kỹ thuật quan trọng để đảm bảo rigging và animate sau này hoạt động chính xác. Đầu tiên và quan trọng nhất là Apply Transform: object nên có Location tại gốc tọa độ hợp lý, Rotation bằng 0 và Scale bằng 1 (Object > Apply > All Transforms, hoặc Ctrl+A). Nếu scale của object khác 1 (ví dụ object bị scale 0.5 trong Object Mode mà chưa Apply), Armature và các bone parent vào sẽ tính toán sai tỉ lệ, gây ra hiện tượng mesh biến dạng bất thường khi animate.

Thứ hai, cần quyết định modifier nào giữ lại dưới dạng non-destructive (ví dụ Subdivision Surface thường giữ lại vì không ảnh hưởng đến rigging) và modifier nào cần Apply thành mesh thật trước khi rig (ví dụ Mirror, Solidify — vì Weight Paint và Armature deform cần tác động trực tiếp lên geometry cuối cùng). Giữ Mirror modifier chưa Apply đôi khi vẫn hoạt động được với rigging đối xứng, nhưng thường phức tạp hơn cho người mới, nên khóa học khuyến khích Apply trước khi rig để đơn giản hóa quy trình.

Cuối cùng, nên kiểm tra tổng thể mesh: xóa vertex trùng lặp (Merge by Distance), đảm bảo normal hướng ra ngoài đồng nhất (Recalculate Normals, Shift+N), và tránh n-gon hoặc geometry lỗi có thể gây méo khi Weight Paint. Một mesh sạch giúp quá trình gán Vertex Group và Weight Paint ở các bài sau diễn ra suôn sẻ hơn rất nhiều.

## 3. Quy trình thực hành gợi ý

1. Chọn mesh Blob Man, vào Object > Apply > All Transforms (hoặc Ctrl+A > All Transforms).
2. Kiểm tra Properties panel (N) xác nhận Location/Rotation = 0, Scale = 1.
3. Quyết định Apply các modifier cần thiết (ví dụ Mirror) trong Modifier Properties.
4. Vào Edit Mode, chọn tất cả (A), dùng Mesh > Clean Up > Merge by Distance để loại bỏ vertex trùng.
5. Recalculate Normals (Shift+N) để đảm bảo normal đồng nhất hướng ra ngoài.
6. Kiểm tra lại mesh bằng chế độ hiển thị Face Orientation (tùy chọn) để phát hiện normal bị lật.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| `Ctrl+A` | Apply Transform (Location/Rotation/Scale/All Transforms) |
| `M` (Edit Mode) | Merge menu, chọn "By Distance" để gộp vertex trùng |
| `Shift+N` | Recalculate Normals (Outside) |
| `Alt+N` | Menu xử lý Normal nâng cao (Flip, Recalculate Inside...) |
| `A` | Chọn tất cả geometry trong Edit Mode |

## 5. Lưu ý & lỗi thường gặp

- Quên Apply Scale khiến Armature biến dạng mesh không đúng tỉ lệ khi Parent hoặc animate.
- Giữ lại modifier Mirror chưa Apply trong khi Weight Paint theo cách không đối xứng, gây kết quả khó kiểm soát.
- Bỏ qua bước Merge by Distance khiến vertex trùng lặp gây lỗi shading hoặc rách mesh khi biến dạng.
- Không kiểm tra Normal trước khi rig, dẫn đến các mặt bị lật tối màu bất thường sau khi animate.

## 6. Checklist thực hành

- [ ] Đã Apply toàn bộ Transform của mesh Blob Man.
- [ ] Đã quyết định và Apply các modifier cần thiết trước khi rig.
- [ ] Đã chạy Merge by Distance để dọn vertex trùng.
- [ ] Đã Recalculate Normals cho toàn bộ mesh.

## 7. Tóm tắt

Một mesh "rig-ready" cần có Transform sạch (Scale = 1, Rotation = 0), modifier đã được xử lý phù hợp, và geometry không lỗi (không vertex trùng, normal đồng nhất). Bước chuẩn bị này tuy nhỏ nhưng quyết định rất nhiều đến độ ổn định của rig ở các bước tiếp theo.
