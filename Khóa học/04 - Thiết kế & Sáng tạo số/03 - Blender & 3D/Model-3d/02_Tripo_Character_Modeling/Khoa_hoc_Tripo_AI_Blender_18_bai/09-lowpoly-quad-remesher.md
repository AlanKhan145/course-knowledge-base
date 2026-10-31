---
title: "Bài 09 — Low-poly và Quad Remesher: giảm mặt nhưng giữ form"
course: "Tripo AI → Blender: Nhân vật 3D từ ảnh đến rig"
lesson_number: 9
source_type: "Biên tập từ transcript do người dùng cung cấp"
source_timestamp: "41:31–48:43"
status: "Tài liệu tự biên soạn, có phần chú giải và bài tập"
---

# Bài 09 — Low-poly và Quad Remesher: giảm mặt nhưng giữ form

> **Phân đoạn tham chiếu:** 41:31–48:43 trong bản ghi gốc.  
> **Đầu ra bài học:** sản phẩm/tài liệu theo mục tiêu và mục thực hành bên dưới.

## Mục tiêu
Giảm polygon xuống mức hợp lý cho nhân vật cách điệu, đồng thời giữ vùng cần chuyển động đủ lưới.

## Khái niệm
- **High-poly**: mô hình dày mặt, hữu ích để lấy form và sửa chi tiết.
- **Low-poly**: mô hình ít mặt hơn, mục tiêu để chỉnh, rig và thử engine.
- **Quad topology**: lưới tứ giác thuận tiện khi tạo edge loops; không có nghĩa mọi triangles đều sai.
- **Remeshing tự động**: tổ chức lại bề mặt nhưng không đảm bảo luồng cạnh chuẩn biểu cảm.

## Quy trình trong video
1. Bật **Statistics** để nắm số đỉnh/mặt/tris; lưu lại thông số ban đầu.
2. Chọn bản đã sculpt sạch, sao lưu, chạy **Quad Remesher**; bật **Symmetry X** khi thích hợp.
3. Tác giả nhắm **khoảng 5.000 faces cho đầu**, có lần ra khoảng **5.200**. Ví dụ thông số thử: target `20,000` với `Adaptive Size ~50%` tùy cấu hình công cụ; số nhập không nhất thiết bằng mặt thực tế.
4. Với thân, thử các target khác nhau (có lần chọn cỡ **2.800**) và chú ý **đầu gối, khuỷu, vùng gập** được phân bố mặt hợp lý.
5. Nhấp **Shade Smooth** khi muốn hiển thị bề mặt mịn; nhớ rằng thao tác này **không thêm polygon hoặc sửa topology**.
6. Kiểm tra bản gốc với bản remesh để xác định vùng mất silhouette.
7. Chỉnh dáng thân bằng `S` (scale), **Proportional Editing** và X-Ray khi cần. Thu hẹp chân/vai nếu lệch concept.
8. Đặt tên `HeadLow`, `BodyLow` và lưu.

## Ví dụ tiêu chí đánh giá
- Vùng mắt/miệng: có thể dựng lại vòng cạnh.
- Khuỷu/gối: không bị thiếu lưới nghiêm trọng khi gập.
- Tai/ngón: không xuất hiện khe hở, lỗ hoặc dính bộ phận mới.
- Tổng số mặt: **phụ thuộc dự án và thiết bị**, không có ngưỡng phổ quát.

## Bài tập
Chạy 2 phương án remesh cho đầu và thân, thống kê polycount, kiểm tra silhouette và chọn một phương án có giải thích.

---

**Tiếp theo:** Bài 10.
