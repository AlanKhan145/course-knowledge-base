# 007 — Interface and Workspaces

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Fundamentals |
| **Bài học** | Interface and Workspaces |
| **Thời lượng** | 4:27 |
| **Chủ đề chính** | Làm quen giao diện chính và hệ thống Workspaces của Blender |

## 1. Mục tiêu bài học

- Nhận diện được các vùng chính của giao diện Blender: Topbar, Properties Editor, Outliner, 3D Viewport, Timeline, Status Bar.
- Hiểu vai trò của từng Workspace mặc định (Layout, Modeling, Sculpting, UV Editing, Texture Paint, Shading, Animation, Rendering, Compositing, Scripting).
- Biết cách chuyển đổi qua lại giữa các Workspace và tùy chỉnh bố cục theo nhu cầu.

## 2. Nội dung chính

Giao diện Blender được chia thành nhiều **Editor** khác nhau, mỗi editor phụ trách một chức năng riêng. Ở trên cùng là **Topbar**, chứa menu File/Edit/Render/Window/Help và dãy tab **Workspaces**. Vùng trung tâm rộng nhất là **3D Viewport** — nơi xem và thao tác trực tiếp với các đối tượng 3D. Bên phải là **Outliner** (danh sách phân cấp toàn bộ object/collection trong scene) phía trên và **Properties Editor** (các tab biểu tượng dọc, chứa thông số Render, Output, Object, Modifier, Material...) phía dưới. Dưới cùng là **Timeline** dùng cho animation, và cuối cùng là **Status Bar** hiển thị gợi ý phím tắt theo ngữ cảnh.

Các tab **Workspace** ở Topbar là các bố cục màn hình được thiết lập sẵn cho từng giai đoạn làm việc: **Layout** (bố cục tổng quát, dựng scene), **Modeling** (chỉnh sửa mesh, có sẵn thanh công cụ Edit Mode), **Sculpting** (điêu khắc mesh với brush), **UV Editing** (mở kèm UV Editor để trải UV), **Texture Paint** (vẽ texture trực tiếp lên mesh), **Shading** (Shader Editor để dựng node vật liệu), **Animation** (Dope Sheet, Timeline mở rộng), **Rendering** (xem kết quả render), **Compositing** (Compositor node để hậu kỳ), **Scripting** (Python console và Text Editor cho lập trình). Mỗi tab thực chất chỉ là một cấu hình khác nhau của cùng hệ thống editor — người dùng hoàn toàn có thể tự tạo Workspace riêng bằng dấu `+` cạnh các tab, hoặc kéo viền để thay đổi kích thước từng vùng, click chuột phải vào viền để split/join editor.

## 3. Quy trình thực hành gợi ý

1. Mở Blender, quan sát lần lượt các vùng: Topbar, 3D Viewport, Outliner, Properties Editor, Timeline.
2. Click qua từng tab Workspace (Layout → Scripting) để quan sát bố cục thay đổi.
3. Dừng ở tab Modeling, nhận diện thanh công cụ bên trái (Toolbar) khác gì so với Layout.
4. Thử kéo viền giữa 3D Viewport và Outliner để thay đổi kích thước vùng.
5. Click chuột phải vào một viền editor, chọn Split Area để tự tạo thêm một vùng nhìn mới, sau đó Join lại.
6. Nhấn dấu `+` cạnh tab Workspace cuối cùng để thử tạo một Workspace tùy chỉnh.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Phóng to toàn màn hình vùng đang trỏ chuột | `Ctrl + Space` |
| Ẩn/hiện Toolbar bên trái | `T` |
| Ẩn/hiện Properties/N-panel bên phải | `N` |
| Chuyển Workspace kế tiếp/trước | `Ctrl + Page Down` / `Ctrl + Page Up` |
| Đổi loại Editor tại một vùng | Click icon góc trái dưới của editor đó |

## 5. Lưu ý & lỗi thường gặp

- Người mới dễ nhầm giữa Properties Editor (thông số object/scene) và N-panel trong Viewport (thông số Transform nhanh) — hai vùng khác nhau dù cùng hiển thị dữ liệu liên quan.
- Vô tình đóng nhầm một editor khi kéo viền quá sát mép có thể làm mất bố cục — dùng `Ctrl + Z` không hoàn tác thay đổi layout, cần Join Area thủ công hoặc mở lại file mặc định.
- Mỗi Workspace có bố cục riêng nhưng **cùng chia sẻ dữ liệu scene** — chỉnh sửa object ở tab này sẽ phản ánh ngay ở tab khác.

## 6. Checklist thực hành

- [ ] Đã xác định đúng vị trí 5 vùng giao diện chính.
- [ ] Đã duyệt qua toàn bộ 10 tab Workspace mặc định.
- [ ] Đã thử split và join một editor.
- [ ] Đã biết cách ẩn/hiện Toolbar và N-panel.

## 7. Tóm tắt

Giao diện Blender là tập hợp các Editor linh hoạt được đóng gói sẵn thành các Workspace phù hợp cho từng công đoạn (mô hình hóa, UV, vật liệu, animation...), và người dùng có thể tùy biến hoàn toàn bố cục này theo phong cách làm việc riêng.
