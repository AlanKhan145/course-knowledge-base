# 059 — Plane Reference Images

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Plane Reference Images |
| **Thời lượng** | 6:19 |
| **Chủ đề chính** | Nhập ảnh tham chiếu máy bay |

## 1. Mục tiêu bài học
- Biết cách nhập ảnh tham chiếu (reference image) vào scene Blender bằng `Add → Image → Reference`.
- Sắp xếp đúng ảnh Front View và Side View của máy bay tại vị trí, góc quay và tỷ lệ chính xác.
- Hiểu sự khác biệt giữa Reference Image và Background Image, và vì sao Reference phù hợp hơn cho modelling 3D.
- Khóa (lock) ảnh tham chiếu để tránh chọn nhầm trong quá trình modelling.

## 2. Nội dung chính
Trước khi dựng mô hình máy bay, cần thiết lập ảnh tham chiếu làm nền để đảm bảo tỷ lệ và hình dáng chính xác. Blender hỗ trợ hai loại ảnh tham chiếu:
- **Reference Image** (`Add → Image → Reference`): một object Empty đặc biệt hiển thị ảnh trong không gian 3D, có thể xoay, di chuyển, scale tự do như một object bình thường, hiển thị từ mọi góc nhìn (không chỉ ortho).
- **Background Image** (trong View properties của viewport, tab Background Images khi ở chế độ Orthographic): ảnh chỉ hiển thị khi nhìn thẳng theo trục ortho, không phải một object thực sự trong scene, không xuất hiện khi render.

Đối với dự án modelling từ nhiều góc (front, side), Reference Image thường tiện hơn vì có thể sắp xếp cả hai ảnh cùng lúc trong scene, xoay đúng 90° để mỗi ảnh chỉ hiển thị rõ khi nhìn từ góc tương ứng (Numpad 1 cho Front, Numpad 3 cho Side).

Các bước quan trọng khi thiết lập:
- Đặt ảnh Front tại gốc tọa độ, xoay để mặt phẳng ảnh vuông góc với trục Y (nhìn từ Front — Numpad 1).
- Đặt ảnh Side xoay 90° quanh trục Z để mặt phẳng ảnh vuông góc với trục X (nhìn từ Side — Numpad 3).
- Canh chỉnh vị trí (Location) sao cho hai ảnh khớp về chiều cao và chiều dài thân máy bay (dùng một điểm chuẩn chung, ví dụ mũi máy bay hoặc trục cánh).
- Điều chỉnh Opacity/Depth trong Object Data Properties của Reference để ảnh không che khuất mesh khi modelling.

Sau khi sắp xếp xong, nên khóa Reference Images (đặt vào Collection riêng và bật Disable Selection, hoặc dùng Lock Object Transform) để tránh vô tình di chuyển ảnh trong lúc thao tác mesh.

## 3. Quy trình thực hành gợi ý
1. Chuẩn bị hai ảnh máy bay: một ảnh nhìn từ Front, một ảnh nhìn từ Side, cùng tỷ lệ.
2. Vào `Add → Image → Reference`, chọn ảnh Front, đặt tại gốc tọa độ.
3. Thêm ảnh Side tương tự, xoay 90° quanh trục Z (`R Z 90 Enter`).
4. Chuyển góc nhìn Front (Numpad 1) và Side (Numpad 3) để kiểm tra từng ảnh hiển thị đúng và không lệch tỷ lệ.
5. Canh chỉnh Location/Scale của hai ảnh để khớp với nhau theo một điểm chuẩn chung.
6. Đưa hai Reference Image vào một Collection riêng, đặt tên rõ ràng, và khóa lại (Disable Selection trong Outliner) để tránh chọn nhầm khi modelling.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `Add → Image → Reference` | Thêm ảnh tham chiếu vào scene |
| `Numpad 1` / `Ctrl+Numpad 1` | Góc nhìn Front / Back |
| `Numpad 3` / `Ctrl+Numpad 3` | Góc nhìn Right / Left |
| `Numpad 7` | Góc nhìn Top |
| `R` sau đó `X`/`Y`/`Z` | Xoay object theo trục tương ứng |
| `Numpad .` | Đưa object đã chọn vào giữa khung nhìn (Frame Selected) |

## 5. Lưu ý & lỗi thường gặp
- Hai ảnh không cùng tỷ lệ khung hình hoặc không được scale khớp nhau khiến mô hình bị sai tỷ lệ giữa chiều dài và chiều cao.
- Quên xoay ảnh Side 90° khiến cả hai ảnh cùng nằm trên một mặt phẳng, không thể dùng làm tham chiếu hai góc nhìn riêng biệt.
- Không khóa Reference Image dễ dẫn đến việc vô tình kéo/xoay ảnh trong lúc chọn vertex gần đó.
- Đặt Opacity ảnh quá cao che khuất mesh đang chỉnh sửa, gây khó quan sát wireframe.

## 6. Checklist thực hành
- [ ] Đã thêm được ảnh Reference cho cả góc Front và Side.
- [ ] Đã xoay và canh chỉnh hai ảnh khớp tỷ lệ với nhau.
- [ ] Đã kiểm tra hiển thị đúng khi chuyển Numpad 1 / Numpad 3.
- [ ] Đã khóa các Reference Image để tránh chọn nhầm.

## 7. Tóm tắt
Bài học thiết lập nền tảng cho toàn bộ quá trình modelling máy bay: nhập và canh chỉnh chính xác hai ảnh tham chiếu Front và Side bằng Reference Image, tạo cơ sở tỷ lệ đúng cho các bước dựng hình ở những bài tiếp theo.
