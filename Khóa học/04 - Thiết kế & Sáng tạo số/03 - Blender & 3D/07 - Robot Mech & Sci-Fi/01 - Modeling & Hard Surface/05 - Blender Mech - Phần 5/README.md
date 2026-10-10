# Khóa học Blender: Modeling Robot Mech — Phần 05: Chân dưới và bàn chân

**Chủ đề:** Hard-surface modeling một robot khoa học viễn tưởng trong Blender.

**Phạm vi:** Hoàn thiện khớp gối, khung chân dưới, các tấm giáp và bộ phận nâng đỡ, khớp nối chân, mắt cá chân và bàn chân. Kết thúc phần này, phần **modeling** của robot được hoàn thành; phần ánh sáng và vật liệu thuộc giai đoạn tiếp theo, không nằm trong phạm vi học liệu này.

**Điều kiện đầu vào:** Có cảnh Blender chứa robot đã dựng phần thân/chân trên, các chi tiết khớp có thể tái sử dụng và hình tham chiếu. Các bài học dùng chính cảnh đó để nối tiếp công việc. Nếu thiếu tệp dự án hoặc ảnh tham chiếu, có thể luyện kỹ thuật trên mesh minh họa, nhưng không thể đối chiếu tỷ lệ chính xác với thiết kế của robot.

## Lộ trình học tập

| Bài | Nội dung | Kết quả thực hành |
| --- | --- | --- |
| [01](bai_hoc/01-khop-goi.md) | Tạo khớp gối và các rãnh cơ khí | Khớp nối giữa đùi và cẳng chân |
| [02](bai_hoc/02-khung-chan-duoi.md) | Dựng lõi cẳng chân theo hình tham chiếu | Mesh khung cẳng chân và gờ chi tiết |
| [03](bai_hoc/03-giap-chan-solidify.md) | Tạo giáp cẳng chân bằng `Solidify` | Các tấm giáp có chiều dày và mép vát |
| [04](bai_hoc/04-thanh-do-va-bu-long.md) | Tạo thanh đỡ, bu lông và các tấm kim loại | Cụm giáp được lắp các chi tiết liên kết |
| [05](bai_hoc/05-lap-khop-va-mat-ca.md) | Lắp chân, hoàn thiện bản lề và mắt cá | Các cụm chân lắp đúng vị trí, kiểm tra normals |
| [06](bai_hoc/06-tao-hinh-ban-chan.md) | Dựng bàn chân từ cube | Phần thân bàn chân và chi tiết trước/sau |
| [07](bai_hoc/07-ban-le-ban-chan-hoan-thien.md) | Làm bản lề bàn chân và hoàn thiện | Robot hoàn thành giai đoạn modeling |

## Phương pháp học

Mỗi bài gồm mục tiêu có thể kiểm tra, giải thích kỹ thuật, các bước làm trong Blender, checkpoint, lỗi thường gặp, bài thực hành và **5 câu trắc nghiệm có đáp án, giải thích**. Học theo thứ tự từ bài 01 đến bài 07 nếu đang dựng một robot hoàn chỉnh; mỗi file vẫn có phần chuẩn bị đủ để tra cứu độc lập.

**Chú ý:** Những kích thước, độ dày giáp và vị trí bu lông được căn theo hình tham chiếu; nội dung không đặt ra những con số không có trong bài. Việc đánh giá dựa trên tỷ lệ, sự liên kết hợp lý và hình dạng khi nhìn từ nhiều góc.

## Các phím thường dùng

| Phím / lệnh | Chức năng |
| --- | --- |
| `Tab` | Chuyển qua lại `Object Mode` và `Edit Mode` |
| `Shift + A` | Thêm một đối tượng / mesh |
| `Shift + C` | Đưa 3D Cursor về gốc tọa độ (và điều chỉnh khung nhìn) |
| `G`, `R`, `S` | Di chuyển, xoay, tỷ lệ; thêm `X`, `Y`, `Z` để khóa trục |
| `Shift + X` sau `S` | Loại trừ trục X khi scale; chỉ scale trên hai trục còn lại |
| `Shift + D` | Nhân bản lựa chọn |
| `E`, `I` | `Extrude`, `Inset Faces` |
| `Ctrl + R` | `Loop Cut` |
| `G` rồi `G` | `Edge Slide` khi đang chọn cạnh hợp lệ |
| `Ctrl + Shift + B` | Vát đỉnh (`Vertex Bevel`) trong Edit Mode |
| `P` → `Selection` | Tách hình học được chọn thành object |
| `Ctrl + J` | Gộp các object đã chọn |
| `Ctrl + L` → `Copy Modifiers` | Chép modifier từ object đang active sang các object được chọn |
| `L` (rê chuột trên mesh) | Chọn hình học liên thông dưới con trỏ |
| `H` / `Alt + H` | Ẩn / hiện lại đối tượng hoặc mesh |
| `Shift + N` | Tính lại normals của các mặt đã chọn |
| `Numpad 1` / `3` / `7` | Nhìn trước / cạnh / trên |
| `Ctrl + Numpad 1` | Nhìn sau |
| `Z` | Mở menu shading (chọn `Wireframe` hoặc `Solid`) |
| `Ctrl + S` | Lưu dự án |

*Lưu ý thao tác:* Trong Blender hiện đại, `A` là chọn tất cả, còn `Alt + A` là bỏ chọn tất cả. Chọn đúng chế độ `Vertex`, `Edge` hoặc `Face` trước khi thao tác. Một vài phím có hành vi phụ thuộc chế độ hiện tại.

## Checklist hoàn thành

- [ ] Khớp gối có khoảng hở phù hợp để kết nối hai phần chân.
- [ ] Khung cẳng chân, các gờ nổi và phần giáp được cân theo các góc nhìn.
- [ ] Các tấm giáp có bề dày hợp lý, không xuyên nhau và được gia cố bằng thanh đỡ.
- [ ] Các bu lông ở đúng bề mặt, có kích thước tương xứng.
- [ ] Bản lề nối chân trên–chân dưới và cụm mắt cá có cấu trúc rõ ràng.
- [ ] Mesh bàn chân có hình khối trước/sau, chi tiết lõm và trụ bản lề.
- [ ] Normals đã kiểm tra và tệp `.blend` cuối đã lưu.

## Đầu ra của phần học

Một **cảnh Blender đã hoàn thiện modeling robot mech**, sẵn sàng chuyển sang bước đặt ánh sáng và tạo vật liệu ở phần học tiếp theo. Không yêu cầu hoàn thiện animation, rigging hay VFX trong phần này.
