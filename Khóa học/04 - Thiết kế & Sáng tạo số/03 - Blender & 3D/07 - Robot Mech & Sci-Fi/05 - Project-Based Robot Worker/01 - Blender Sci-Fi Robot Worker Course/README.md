# Khóa học Blender: Dựng và hoạt hình Robot Worker khoa học viễn tưởng

**Cấp độ:** Cơ bản đến trung cấp  
**Hình thức:** Học theo dự án, thực hành trực tiếp trong Blender  
**Sản phẩm cuối:** Robot cơ khí có vật liệu, hệ thống khớp điều khiển, cảnh khoa học viễn tưởng, ảnh render và đoạn hoạt hình.

## Giới thiệu

Trong khóa học, bạn chế tạo một robot lao động phong cách sci-fi bằng các công cụ dựng hình cơ bản của Blender. Robot gồm đầu có mắt/cảm biến, cổ xoay, thân máy, cụm chân/bánh xe và hai tay gắn móng vuốt. Các bộ phận được tổ chức thành một hệ thống cơ khí; chuyển động chủ yếu dựa trên vị trí **Origin**, quan hệ **Parent–Child** và ràng buộc xoay, thay vì bắt buộc tạo bộ xương `Armature`.

Khóa học đi theo một quy trình thực tế: **Modeling → Materials & Lighting → Mechanical Rigging → Environment & Rendering → Animation & Video Editing**. Từng tệp bài học được viết để có thể đọc và thực hành độc lập.

## Danh sách bài học

| Bài | Tệp Markdown | Kết quả chính |
| --- | --- | --- |
| 01 | [Dựng đầu robot](lessons/01-dung-dau-robot.md) | Đầu, mắt, vỏ, chi tiết sci-fi |
| 02 | [Thiết kế cổ và khớp xoay](lessons/02-thiet-ke-co-va-khop-xoay.md) | Cổ có các khớp cơ khí |
| 03 | [Dựng thân, chân và bánh xe](lessons/03-dung-than-chan-va-banh-xe.md) | Thân và hệ di chuyển |
| 04 | [Dựng vai, cánh tay và móng vuốt](lessons/04-dung-vai-tay-va-mong-vuot.md) | Hai tay máy hoàn chỉnh |
| 05 | [Vật liệu, ánh sáng và camera](lessons/05-vat-lieu-anh-sang-camera.md) | Robot có bề mặt và ánh sáng |
| 06 | [Rig cơ khí không dùng xương](lessons/06-rig-co-khi-khong-dung-xuong.md) | Hệ thống khớp điều khiển |
| 07 | [Dựng hành lang và render ảnh](lessons/07-dung-canh-va-render.md) | Ảnh hoàn thiện có compositing |
| 08 | [Animation, render chuỗi khung hình và dựng video](lessons/08-animation-va-dung-video.md) | Video robot di chuyển, quan sát, rời cảnh |

## Chuẩn bị

- Cài Blender và nắm thao tác chọn vật thể, xoay góc nhìn, di chuyển/thu phóng trong `3D Viewport`.
- Có chuột có nút cuộn và, nếu thuận tiện, bàn phím số (`Numpad`) để đổi góc nhìn.
- Tạo thư mục riêng cho file `.blend`, tài nguyên hình ảnh và đầu ra render.
- Chuẩn bị HDRI **Auto Shop 01** (Poly Haven), các bộ texture kim loại từ **3D Textures**, cùng biểu tượng cảnh báo/hoạt động từ **Pixabay** nếu muốn làm đúng bộ chi tiết của dự án. Việc tải tài nguyên tùy theo giấy phép và khả năng còn truy cập tại thời điểm học.
- Render engine sử dụng trong lộ trình là **Eevee**, song có thể render với **Cycles**. Tên một số tùy chọn Eevee/Compositor có thể thay đổi theo phiên bản Blender; ưu tiên tìm chức năng tương đương trong phiên bản đang dùng.

## Cách học

1. Đọc mục tiêu và khái niệm; thực hiện từng bước trên một bản sao file dự án.
2. Kết thúc một giai đoạn, so sánh mô hình với mục **Checkpoint**.
3. Lưu bản mới sau từng bài: `robot_01_head.blend`, `robot_02_neck.blend` ...
4. Hoàn thành bài thực hành, sau đó tự làm trắc nghiệm trước khi xem đáp án.
5. Ở bài 06, kiểm tra từng khớp khi xoay; ở bài 08, xem trước animation trong Timeline trước khi render toàn bộ.

## Phím tắt được sử dụng

| Phím | Tác dụng thông dụng |
| --- | --- |
| `Tab` | Chuyển Object Mode / Edit Mode |
| `G`, `R`, `S` | Move, Rotate, Scale |
| `X`, `Y`, `Z` sau lệnh | Giới hạn thao tác theo trục |
| `E`, `I` | Extrude, Inset Faces |
| `Shift+D` | Duplicate |
| `Ctrl+R`, `Ctrl+B` | Loop Cut, Bevel |
| `Shift+N` | Recalculate Normals |
| `P` | Separate phần được chọn |
| `Ctrl+P` | Tạo quan hệ Parent |
| `Alt+R` | Xóa giá trị Rotation đang áp dụng |
| `Shift+S` | Menu Snap (đưa 3D Cursor tới Selection...) |
| `Numpad 1`, `3`, `7`, `0` | Trước, bên, trên, Camera |
| `Ctrl+S` | Lưu dự án |

**Lưu ý:** Các phím trên là mặc định phổ biến; phím phụ thuộc vào chế độ thao tác và keymap. Việc xoay vật thể sau `Ctrl+P` phải được kiểm tra với vị trí `Origin` đúng.

## Điều kiện hoàn thành khóa học

- Mô hình có đầy đủ đầu, cổ, thân, hai tay, móng vuốt và cụm bánh xe/chân.
- Bề mặt có chất liệu riêng và phản xạ ánh sáng hợp lý; không bị lỗi normals/shading rõ rệt.
- Các khớp xoay quanh đúng tâm; chuyển động một cụm không làm rơi các bộ phận con.
- Có một cảnh hành lang sci-fi, ảnh render tĩnh và một animation cuối.
- Xuất được chuỗi khung hình PNG và dựng thành video bằng Video Sequencer.
