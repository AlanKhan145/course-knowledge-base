---
title: "Bài 03 — Nhập model AI vào Blender và dọn dẹp mesh"
order: 3
stage: "Blender cleanup"
source_timestamps: "07:56–11:08, 34:22–35:08"
---

# Bài 03 — Nhập model AI vào Blender và dọn dẹp mesh

## Mục tiêu

Nhập các ứng viên đã chọn, cô lập bộ phận, xóa chi tiết thừa và sửa các đỉnh/cạnh chưa nối — những lỗi rất thường thấy ở model AI.

## 1. Tổ chức scene trước khi sửa

1. Import các file do Tripo xuất vào Blender (định dạng tùy khả năng export).
2. Đổi tên ứng viên, ví dụ `Head_A`, `Body_B`, `Hair_A`, `Eyelash_Source`.
3. Đưa reference vào một Collection riêng.
4. Tạo Collection `Final` để chứa các bộ phận đã quyết định dùng.
5. Ẩn những biến thể phụ, **chưa xóa ngay nếu còn cần lấy linh kiện**.

Trong video, Claude thông qua Blender MCP được dùng để import, bố trí reference, đổi tên và làm một số việc lặp lại. Cần tự kiểm tra scene sau mỗi lần trợ lý thao tác.

## 2. Phím tắt cốt lõi

| Thao tác | Phím / menu Blender | Tác dụng |
|---|---|---|
| Chọn vùng liên thông | `L` hoặc `Ctrl+L` tùy ngữ cảnh / vị trí chuột | Chọn một island liền kề |
| Xóa | `X` | Xóa vertices/edges/faces được chọn |
| Ẩn / hiện lại | `H` / `Alt+H` | Tránh lựa nhầm mesh khác |
| Cô lập | `/` (Local View) | Chỉ hiển thị đối tượng đang xử lý |
| Tách object | `P` → Selection | Tạo object riêng từ selection |
| Gộp object | `Ctrl+J` trong Object Mode | Gộp nhiều object thành một object, **không tự hàn vertices** |
| Gộp vertices | `M` → At Center / At Last / By Distance | Kết nối hoặc làm sạch đỉnh |
| Tạo mặt/cạnh | `F` | Tạo cạnh/mặt từ selection, tùy ngữ cảnh |
| Dời Origin | Object → Set Origin → Origin to Geometry | Đặt origin theo hình học của đối tượng |

> **Phân biệt cực quan trọng:** `Ctrl+J` chỉ *join objects*. Muốn nối mặt hình học phải merge/bridge/weld vertices theo trường hợp.

## 3. Quy trình dọn dẹp lông mi / lông mày

1. Chọn model có lông mi đẹp, vào Edit Mode.
2. Chọn từng island cần giữ, xóa mặt, răng, miệng hoặc chi tiết AI không liên quan.
3. Nếu đỉnh bị rời, chọn cặp vertex và `M → At Center`; tạo faces còn thiếu bằng `F` nếu hợp lý.
4. Đặt `Origin to Geometry` cho object mới để căn chỉnh thuận tiện.
5. Soi kỹ từ trước, bên và trên; không chỉ tin góc perspective mặc định.

## 4. Kiểm tra lỗi mesh

| Triệu chứng | Nguyên nhân thường gặp | Cách xử lý sơ bộ |
|---|---|---|
| Mảnh vụn nổi trong không khí | AI tạo island không cần thiết | Chọn island và xóa |
| Vết nứt | Vertex chưa hàn | Kiểm tra, `Merge by Distance` có ngưỡng phù hợp |
| Khuôn mặt bị nát khi nối | Vội gộp vertices khác vị trí | Undo, chọn cặp đỉnh chính xác |
| Gương lệch | Origin/trục đối xứng không đúng | Sửa origin và mặt phẳng mirror |
| Bề mặt đảo hướng | Normals bất thường | Face Orientation, kiểm tra normals |

## 5. Thực hành

Dọn sạch `Eyelash_Source` thành `Eyelash_L` và tạo `Eyebrow_L`; lưu `03_mesh_cleanup.blend`. Chụp ảnh Before/After để tự so sánh.

**Bài tiếp:** [Bài 04 — Topology mặt và edge loops](04-sua-topology-khuon-mat.md).
