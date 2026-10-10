# Phụ lục. Thuật ngữ hard-surface modeling

## 1. Khái niệm hình học

| Thuật ngữ | Giải thích |
| --- | --- |
| `Vertex` | Đỉnh của mesh |
| `Edge` | Cạnh nối các đỉnh |
| `Face` | Mặt tạo từ cạnh/đỉnh |
| `Topology` | Cách các đỉnh, cạnh và mặt liên kết với nhau |
| `Silhouette` | Đường bao bên ngoài hình khối từ một góc nhìn |
| `Loop Cut` | Cắt thêm vòng cạnh xuyên qua topo phù hợp |
| `Inset` | Tạo mặt nhỏ hơn nằm trong mặt/vùng đang chọn |
| `Extrude` | Tạo hình học mới bằng đùn vùng chọn |
| `Bevel` | Vát/bo mép hay đỉnh |
| `Dissolve` | Loại phần topo không cần thiết mà cố giữ bề mặt xung quanh |
| `Normal` | Vector biểu thị hướng bề mặt |
| `Face Orientation` | Chế độ hiển thị hướng mặt để phát hiện normal đảo |

## 2. Đối tượng và Modifier

| Thuật ngữ | Giải thích |
| --- | --- |
| `Object Origin` | Gốc tọa độ của object, quan trọng với Mirror |
| `3D Cursor` | Điểm tham chiếu để thêm đối tượng, đặt pivot hoặc snap |
| `Mirror Modifier` | Dựng phần phản chiếu theo trục local của object |
| `Merge` | Hợp nhất các đỉnh gần mặt phẳng đối xứng khi phù hợp |
| `Clipping` | Giữ đỉnh gần giữa không vượt qua mặt gương khi chỉnh sửa |
| `Bevel Modifier` | Tạo vát với tham số có thể chỉnh sửa |
| `Curve Geometry/Bevel` | Tạo tiết diện có độ dày cho đường cong |
| `Bridge Edge Loops` | Sinh hình học nối hai vòng biên phù hợp |
| `Join` | Gộp object quản lý chung, không tự hàn hình học giao nhau |
| `Separate` | Tách một vùng mesh thành object mới |
| `Shade Smooth` | Làm mượt nội suy ánh sáng trên bề mặt; không tự tăng polygon |
| `Snapping` | Hút vị trí khi biến đổi đối tượng/vùng chọn |
| `Align Rotation to Target` | Xoay selection theo hướng bề mặt đích khi snap |

## 3. Góc nhìn và trình tự dựng

`Orthographic View` là góc nhìn trực giao phù hợp đối chiếu hình chiếu thiết kế. `Perspective View` mô phỏng phối cảnh để xem hình khối như ngoài thực tế. Trong hard-surface modeling, nên kiểm tra cả hai loại góc nhìn.

**Trình tự thực hành cốt lõi:** silhouette → khối giáp lớn → rãnh/hốc → cấu trúc phụ → mắt/ống/ốc → chỉnh normals → dọn topology → lưu bàn giao.
