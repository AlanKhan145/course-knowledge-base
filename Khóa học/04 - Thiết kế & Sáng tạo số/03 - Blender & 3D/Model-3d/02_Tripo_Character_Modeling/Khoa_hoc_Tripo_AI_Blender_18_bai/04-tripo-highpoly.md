---
title: "Bài 04 — Tripo AI: Sinh high-poly từ ảnh đa góc"
course: "Tripo AI → Blender: Nhân vật 3D từ ảnh đến rig"
lesson_number: 4
source_type: "Biên tập từ transcript do người dùng cung cấp"
source_timestamp: "07:22–11:20"
status: "Tài liệu tự biên soạn, có phần chú giải và bài tập"
---

# Bài 04 — Tripo AI: Sinh high-poly từ ảnh đa góc

> **Phân đoạn tham chiếu:** 07:22–11:20 trong bản ghi gốc.  
> **Đầu ra bài học:** sản phẩm/tài liệu theo mục tiêu và mục thực hành bên dưới.

## Mục tiêu
Sinh **high-poly đầu và thân**, ưu tiên silhouette, ít lỗ và khối hình rõ trước khi bàn đến texture.

## Quy trình trong ví dụ
1. Mở Tripo, chọn chế độ **multiview** cho một bộ phận.
2. Gán đúng ảnh **front, left, right, back** vào các ô tương ứng.
3. Ưu tiên chế độ chất lượng cao (ví dụ **HD / Ultra Mesh**), tăng độ chi tiết mesh khi đang tập trung vào hình khối.
4. **Tắt tạo texture** ở vòng đầu: tài liệu muốn tiết kiệm credit, vì sẽ unwrap UV và tạo texture sau.
5. Chạy phần đầu; mở phiên làm việc thứ hai cho thân để không phải nhập lại góc nhìn.
6. Kiểm tra lỗ trên đầu, tai dính đầu, vùng lõm bất thường, bàn tay/ngón; nếu lỗi cấu trúc nặng, **tạo lại** từ ảnh đã chỉnh thay vì vá quá lâu.
7. Lưu các phương án tốt vào collection/favorites để có thể so sánh.

> **Các nút và chi phí** nêu trong transcript phản ánh phiên bản giao diện của người làm video. Không xem số credit hay tên chế độ là cố định.

## Cách chấm một lần sinh model
| Tiêu chí | Đạt | Cần tạo lại |
|---|---|---|
| Silhouette | Tương ứng ảnh chuẩn | Đầu/thân biến dạng lớn |
| Tai | Khoảng hở đúng mục đích | Tai hàn dính không kiểm soát |
| Bề mặt | Vết lồi/lõm có thể Smooth | Lỗ sâu hoặc bề mặt vỡ lớn |
| Tỉ lệ | Có thể sửa nhỏ trong Blender | Khuôn khối lệch hoàn toàn |

## Thực hành
Sinh ít nhất 2 bản đầu và 1 bản thân. Chụp ảnh 4 góc từng bản, chọn theo tiêu chí trên. Ghi rõ lựa chọn chứ không chỉ chọn model có nhiều polygon nhất.

## Kiểm tra đầu ra
Có `head_high.fbx` và `body_high.fbx` được chọn, chưa cần texture, có ảnh chụp lỗi đã phát hiện.

---

**Tiếp theo:** Bài 05.
