---
title: "Bài 08 — Sculpt thân và thử Smart Mesh low-poly"
course: "Tripo AI → Blender: Nhân vật 3D từ ảnh đến rig"
lesson_number: 8
source_type: "Biên tập từ transcript do người dùng cung cấp"
source_timestamp: "35:05–41:30"
status: "Tài liệu tự biên soạn, có phần chú giải và bài tập"
---

# Bài 08 — Sculpt thân và thử Smart Mesh low-poly

> **Phân đoạn tham chiếu:** 35:05–41:30 trong bản ghi gốc.  
> **Đầu ra bài học:** sản phẩm/tài liệu theo mục tiêu và mục thực hành bên dưới.

## Mục tiêu
Chuẩn bị thân sạch, so sánh **tự động low-poly trong Tripo** với phương án sửa/remesh Blender.

## Các bước
1. Hiện thân, đặt vào tâm và **Apply Transform** phù hợp; phân biệt **Apply Transform** với **Set Origin to Geometry** (là hai thao tác khác nhau, dù bản nói đôi khi diễn đạt gộp).
2. Nếu muốn thử hướng đi khác, gửi **body multiview** vào Tripo Smart Mesh. Trong bản ghi, tác giả thử từ **50.000 xuống 4.000 rồi khoảng 3.000**, thấy thân khá sạch; đây chỉ là kết quả cho mẫu thỏ.
3. Import bản Smart Mesh thử nghiệm `Body02`, kiểm tra lưới tam giác và các vùng gập khớp.
4. Chọn **bản dùng để làm việc** dựa trên độ sạch và khả năng biến dạng chứ không chỉ ít polygon.
5. Trong Sculpt, làm mịn móng/rãnh ở ngón tay/ngón chân nếu những chi tiết đó nên thể hiện bằng texture.
6. Với vùng hỏng khó Smooth, thử **Mirror + Voxel Remesh** (trong ví dụ khoảng `0.002`), kiểm tra đối xứng và dọn lại.
7. Nhân bản sang collection BACKUP rồi mới low-poly chính thức.

## Bảng đánh giá
| Đặc tính | Body high-poly đã sculpt | Body Smart Mesh |
|---|---|---|
| Hình khối ban đầu | Sát bản AI nhưng rất dày | Có thể đã tối ưu |
| Tính dễ chỉnh | Cần retopo/decimate | Có thể chứa nhiều triangles |
| Độ đáng tin | Chủ động sửa được lỗi | Phụ thuộc lần tạo AI |
| Nên chọn khi | Smart Mesh méo form | Smart Mesh giữ form và khớp tốt |

## Thực hành
Chụp cùng 3 góc của 2 phiên bản thân, so sánh đùi, đầu gối, cổ tay, ngón và bụng. Chọn bản tối ưu để chuyển vào bài tiếp theo.

---

**Tiếp theo:** Bài 09.
