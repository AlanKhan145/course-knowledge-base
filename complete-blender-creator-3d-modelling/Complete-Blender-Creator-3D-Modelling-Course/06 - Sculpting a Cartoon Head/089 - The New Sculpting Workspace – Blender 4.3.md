# 089 — The New Sculpting Workspace – Blender 4.3

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 06 — Sculpting a Cartoon Head |
| **Bài học** | The New Sculpting Workspace – Blender 4.3 |
| **Thời lượng** | 4:54 |
| **Chủ đề chính** | Không gian Sculpting mới |

## 1. Mục tiêu bài học

- Làm quen với tab Sculpting trong workspace của Blender 4.3.
- Hiểu vai trò của các thành phần chính: thanh công cụ brush bên trái, panel Tool Settings, header với các tùy chọn Symmetry, Remesh, Dyntopo.
- Biết cách tùy chỉnh không gian làm việc để sculpt hiệu quả (chia viewport, bật Wireframe/Matcap...).
- Hiểu sự khác biệt giữa chế độ Sculpt Mode và Object Mode/Edit Mode.

## 2. Nội dung chính

Blender 4.3 tổ chức không gian Sculpting Workspace gồm:

- **Toolbar bên trái**: chứa các brush sculpt (Draw, Clay Strips, Crease, Grab, Smooth, Inflate, Mask...), có thể mở rộng bằng phím `T`.
- **Header trên cùng**: chọn chế độ hiển thị (Solid, Matcap, Rendered), tùy chọn Symmetry (X/Y/Z), nút bật Dyntopo, và Remesh.
- **Tool Settings (đầu viewport)**: điều chỉnh Radius, Strength, Falloff của brush đang chọn.
- **Properties Editor bên phải**: tab Modifier (Multiresolution), tab Object Data (thông tin mesh), tab Texture (dùng cho các brush có texture/alpha).
- **Panel N (Sidebar)**: có tab Tool chứa thiết lập chi tiết của brush hiện tại, và tab Item chứa transform của object.

Sculpt Mode trong Blender hoạt động trên mesh dựa trên hai cơ chế chính để tăng độ phân giải khi cần chi tiết: **Multiresolution Modifier** (tạo các cấp độ subdivision có thể chuyển đổi qua lại, phù hợp bake normal map) và **Dyntopo — Dynamic Topology** (tự động tạo lưới tam giác mới ngay dưới đầu brush khi sculpt, phù hợp cho giai đoạn phác thảo tự do không cần quan tâm topology).

## 3. Quy trình thực hành gợi ý

- Chuyển sang tab **Sculpting** trên thanh workspace phía trên cùng Blender.
- Thử bật/tắt Wireframe (`Shift+Z`) để quan sát mật độ lưới khi sculpt.
- Mở panel N (`N`) để xem tab Tool và Item.
- Thử chuyển đổi giữa các chế độ shading (Solid/Matcap) bằng phím `Z` (pie menu) để chọn kiểu hiển thị dễ quan sát khối khi sculpt.
- Kiểm tra Symmetry ở header, bật trục X để sculpt đối xứng hai bên đầu.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| `T` | Ẩn/hiện Toolbar brush bên trái |
| `N` | Ẩn/hiện Sidebar (Tool/Item) |
| `Shift+Z` | Chuyển đổi Wireframe/Solid |
| `Z` | Pie menu chuyển shading (Solid, Matcap, Rendered...) |
| `X` | Bật/tắt Symmetry theo trục X |
| `F` | Thay đổi nhanh Radius của brush (kéo chuột) |
| `Shift+F` | Thay đổi nhanh Strength của brush |

## 5. Lưu ý & lỗi thường gặp

- Nhầm lẫn giữa Multiresolution và Dyntopo: hai cơ chế không dùng đồng thời tốt, nên chọn một trong hai tùy giai đoạn dự án.
- Quên bật Symmetry khiến việc sculpt khuôn mặt bị lệch hai bên.
- Không chú ý đến Matcap phù hợp khiến khó nhìn rõ khối khi sculpt (nên chọn matcap có bóng đổ rõ, ví dụ dạng đất sét/clay).

## 6. Checklist thực hành

- [ ] Đã mở được tab Sculpting và nhận diện đầy đủ các vùng giao diện.
- [ ] Đã thử chuyển đổi Solid/Matcap bằng phím Z.
- [ ] Đã bật thử Symmetry trục X.
- [ ] Đã mở panel N và xem tab Tool.

## 7. Tóm tắt

Bài học giới thiệu bố cục workspace Sculpting trong Blender 4.3, các vùng giao diện quan trọng và hai cơ chế tăng chi tiết mesh (Multiresolution, Dyntopo) sẽ được dùng xuyên suốt module.
