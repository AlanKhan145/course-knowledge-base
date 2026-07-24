# 023 — Section Intro – Modular Dungeon

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Modular Dungeon |
| **Bài học** | Section Intro – Modular Dungeon |
| **Thời lượng** | 1:29 |
| **Chủ đề chính** | Giới thiệu mô hình modular |

## 1. Mục tiêu bài học

- Hiểu khái niệm "modular environment art" (thiết kế môi trường theo module lặp lại).
- Nắm được danh sách các đối tượng sẽ tạo trong module: thùng gỗ, thùng hàng, cột đá, tường, cửa, sàn, đuốc, ánh sáng.
- Hiểu vì sao dùng lưới đơn vị cố định (grid) giúp các module ghép khít với nhau.

## 2. Nội dung chính

Modular modelling là kỹ thuật tạo các mảnh 3D (module) có kích thước bội số của một đơn vị lưới cố định (ví dụ 2m x 2m), để có thể xoay, nhân bản (duplicate) và ghép nối tự do mà không để lộ khe hở hay chồng lấn. Đây là kỹ thuật tiêu chuẩn trong sản xuất game và scene environment vì tiết kiệm thời gian dựng cảnh và dễ tái sử dụng asset.

Trong module này, người học sẽ đi qua toàn bộ quy trình: box modelling các prop nhỏ (thùng, cột), dùng modifier (Mirror, Bevel) để tăng tốc, cắt mở cửa bằng Boolean/Knife, tạo shading/material cơ bản, dựng ánh sáng không khí hầm ngục, và cuối cùng lắp ráp toàn bộ thành một scene hoàn chỉnh.

## 3. Quy trình thực hành gợi ý

- Tạo một Collection riêng tên "Modular_Dungeon" để quản lý các object của module.
- Thiết lập Grid Scale và Snapping (Shift+Tab) ngay từ đầu để đảm bảo mọi module thẳng hàng với lưới.
- Xem trước danh sách bài học để hình dung thứ tự dựng: prop → cấu trúc tường/sàn → chi tiết → ánh sáng → lắp ráp.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| `Shift+A` | Add object mới |
| `Shift+Tab` | Bật/tắt Snapping |
| `N` | Mở/đóng Side Panel (thông tin transform) |

## 5. Lưu ý & lỗi thường gặp

- Không thiết lập đơn vị lưới rõ ràng ngay từ đầu sẽ khiến các module sau khó ghép khít.
- Nên đặt Unit System (Metric) trong Scene Properties trước khi bắt đầu modelling.

## 6. Checklist thực hành

- [ ] Đã tạo Collection quản lý module.
- [ ] Đã kiểm tra Unit System và Grid Scale trong Scene Properties.
- [ ] Đã xem qua toàn bộ danh sách bài học của module.

## 7. Tóm tắt

Bài học ngắn này giới thiệu mục tiêu và phạm vi của Module 02: xây dựng một bộ asset modular cho môi trường hầm ngục, từ prop nhỏ đến lắp ráp scene hoàn chỉnh, dựa trên nguyên tắc lưới đơn vị cố định.
