# Bài 02 — Chuẩn bị high-poly cho retopology
**Tham chiếu video:** 00:19–03:35.


## Mục tiêu
Chuẩn bị bản tham chiếu mà không làm mất mô hình gốc.


## Nguồn mesh
Video tạo mặt bằng Tripo, tắt texture, chọn nhiều tam giác rồi tải FBX. Đó chỉ là phương pháp tạo base mesh; có thể thay bằng sculpt, scan, GLB/OBJ/FBX khác. Kể cả model AI chi tiết, retopo vẫn cần cấu trúc mới cho biến dạng.


## Quy trình trong Blender
1. **File > Import**, chọn đúng định dạng.
2. Đổi tên object thành `HEAD_REFERENCE_HIGHPOLY`, đặt trong collection `01_REFERENCE`.
3. Nhìn Front (Numpad 1) và Side. Chỉ dùng `R Z 90` nếu hướng của model thực sự cần xoay như ví dụ video.
4. Ở Object Mode, sau khi kiểm tra tỷ lệ, `Ctrl + A > Rotation & Scale`.
5. Nếu hốc mắt quá phẳng, sử dụng Sculpt Mode, công cụ Blob với hướng tác động phù hợp và X Symmetry; giảm lồi để tạo socket. Smooth nhẹ những vùng nhám.
6. Trước khi tiếp tục, lưu `01_source.blend`. Giữ high-poly để Shrinkwrap và bake chi tiết về sau.


## Những điều cần tránh
- Không chỉnh mất bản high-poly gốc.
- Không giảm toàn bộ tam giác rồi cho rằng đã có topology cho animation.
- Không mặc định mặt trước luôn nằm theo trục Y: kiểm tra hướng qua các góc view.
- Không làm mịn quá mạnh khiến môi/mí bị biến mất.
- Kiểm tra bất đối xứng trước khi bật Mirror.


## Bài tập
Chụp front, side và 3/4; đánh dấu sống mũi, viền mí, rãnh môi, cằm, dái tai. Lưu file với tên rõ ràng.


## Checklist
- [ ] Mesh tham chiếu còn nguyên.
- [ ] Có hướng nhìn thống nhất và rotation/scale đã xử lý.
- [ ] Hốc mắt, môi và tai đủ hình khối.
- [ ] File đã sao lưu.


**Đầu ra:** high-poly sẵn cho dự án retopology.