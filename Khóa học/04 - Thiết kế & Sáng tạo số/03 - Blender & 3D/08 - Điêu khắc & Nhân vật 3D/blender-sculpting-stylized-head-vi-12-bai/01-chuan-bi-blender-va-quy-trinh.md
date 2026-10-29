# Bài 01 — Chuẩn bị Blender và quy trình điêu khắc đầu nhân vật

**Mốc video:** 00:00–00:40 · **Thời lượng học gợi ý:** 20–30 phút

## Mục tiêu

- Chuẩn bị môi trường để chỉ tập trung điêu khắc.
- Hiểu sự khác nhau giữa **Object Mode**, **Edit Mode** và **Sculpt Mode**.
- Biết khi nào cần lưu bản dự phòng trước khi đổi topology.

## Kiến thức trọng tâm

Trong Blender, một **mesh** là lưới gồm đỉnh (vertices), cạnh (edges), mặt (faces). Điêu khắc (sculpting) tác động lên hình dạng của lưới bằng các cọ; để cọ hoạt động mượt, mesh cần có đủ mật độ hình học.

- **Object Mode:** chọn, di chuyển, đặt tên, quản lý vật thể và modifier.
- **Edit Mode:** thao tác trên thành phần mesh; hữu ích khi tạo tai, cổ và lọn tóc từ khối đơn giản.
- **Sculpt Mode:** đẩy, kéo, làm lõm hoặc làm mịn bề mặt bằng brush.

## Thực hành từng bước

1. Mở Blender, chọn cảnh mới với mesh mặc định.
2. Chọn `Camera` và `Light` trong Outliner, xóa nếu chưa cần. **Giữ lại một mesh cơ bản**, hoặc tạo `Mesh > UV Sphere` theo bài 02.
3. Vào chế độ hiển thị **Solid** và thử **MatCap** trong menu Viewport Shading nếu muốn quan sát khối dễ hơn. MatCap chỉ phục vụ xem trước, **không phải vật liệu render**.
4. Trong Sculpt Mode, mở rộng thanh công cụ bên trái để nhìn thấy tên các brush thay vì chỉ thấy biểu tượng.
5. `File > Save As` → lưu `stylized_head_v01.blend` tại thư mục dự án riêng.

## Điều khiển khung nhìn

| Thao tác | Phím mặc định (keymap Blender) |
|---|---|
| Chính diện | `Numpad 1` |
| Nhìn ngang | `Numpad 3` |
| Nhìn từ trên | `Numpad 7` |
| Xoay khung nhìn | Giữ chuột giữa và kéo |
| Phóng to/thu nhỏ | Lăn con lăn chuột |
| Chuyển Object/Edit Mode | `Tab` (tùy chế độ và vùng đang chọn) |
| Lưu | `Ctrl + S` |

> Nếu laptop không có Numpad, dùng View > Viewpoint hoặc bật **Emulate Numpad** trong Preferences > Input.

## Quy tắc làm việc

- **Khối lớn trước chi tiết nhỏ**: độ rộng trán, cằm và vị trí cổ quan trọng hơn vết rãnh ở tai.
- **Xem nhiều góc**: đầu nhìn đẹp ở mặt trước nhưng quá mỏng ở góc nghiêng vẫn chưa đạt.
- **Sao lưu trước thao tác phá hủy dữ liệu**: Apply modifier, Join, Remesh.
- **Không tăng đa giác tối đa từ đầu**: làm máy chậm và khó chỉnh tỷ lệ tổng thể.

## Tự kiểm tra

- [ ] Đã mở được Object, Edit và Sculpt Mode.
- [ ] Đã kiểm tra góc trước, ngang, 3/4.
- [ ] Đã lưu tệp `.blend` đầu tiên.

**Bài tập:** tạo một thư mục `work/` và lưu ba ảnh chụp màn hình ứng với ba góc nhìn của cùng một khối.
