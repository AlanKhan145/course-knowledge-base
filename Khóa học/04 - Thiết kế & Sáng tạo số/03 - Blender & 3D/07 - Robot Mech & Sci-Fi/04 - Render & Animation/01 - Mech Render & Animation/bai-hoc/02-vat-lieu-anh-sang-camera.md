# Bài 02 — Thiết lập vật liệu studio, ánh sáng và camera

## 1. Tóm tắt

Mục tiêu của studio robot mech là để **hình khối và các bề mặt kim loại của robot nổi bật trên nền tối**. Bài học điều chỉnh vật liệu backdrop, vị trí đèn, chế độ xem và bố cục camera với ví dụ khung vuông 2560 × 2560 px và tiêu cự 90 mm.

## 2. Mục tiêu học tập

- Tạo vật liệu màu đen với `Roughness` cao cho backdrop.
- Phân biệt vật liệu nền với ánh sáng chiếu lên robot.
- Thiết lập độ phân giải đầu ra, tiêu cự và khoảng cách camera.
- Sử dụng `Rendered View` và ẩn viewport overlays để đánh giá bố cục.

## 3. Vật liệu tối, ít phản chiếu

Trong workspace `Shading`, chọn đối tượng phông studio rồi tạo material mới. Đặt tên dễ nhận biết, chẳng hạn `Studio_Dark`.

Trên shader `Principled BSDF`, giảm `Base Color` về đen hoặc gần đen. Đặt `Roughness` khoảng **1.0** để nền ít xuất hiện phản xạ bóng rõ. Khi phiên bản Blender có điều khiển cường độ phản xạ/phản xạ gương tương ứng, có thể điều chỉnh về vùng **0.1–0.2** như thiết lập minh họa; cần quan sát kết quả thực tế bởi tên và cách tính tham số phụ thuộc phiên bản shader.

Không nhầm giữa hai mục đích:

- **Robot:** cần ánh sáng nhấn hình khối, vật liệu có thể bóng hoặc phản chiếu.
- **Backdrop:** cần giữ tối và bớt phân tán chú ý, không cần phản xạ rõ của đèn.

Nếu ánh sáng tạo những vùng lóa trên nền, điều chỉnh vật liệu trước rồi kiểm tra lại góc chiếu. Với đèn giao cắt sàn hoặc bị nhìn thấy trong khung, chọn đèn, dịch lên hoặc xoay để bố cục gọn hơn mà vẫn giữ ánh sáng đẹp trên robot.

## 4. Kiểm tra qua Rendered View

Nhấn `Z` để mở menu shading và chọn `Rendered` (có thể dùng menu shading góc trên của viewport). Trong `Numpad 0`, quan sát vùng sáng–tối thực tế của scene. Nếu các đường trục và lưới làm phân tâm, mở `Viewport Overlays` rồi tắt hiển thị `Floor`, trục `X`, trục `Y`, hoặc tắt tất cả overlays khi cần xem sạch bố cục.

Tắt overlays **chỉ ảnh hưởng cách hiển thị trong viewport**, không phải thao tác xóa mặt nền render. Cài đặt có thể khác giữa các workspace; khi chuyển từ `Shading` sang `Layout`, nên kiểm tra overlays lại.

## 5. Độ phân giải khung hình

Trong `Output Properties`, đặt:

| Thuộc tính | Giá trị thực hành | Ý nghĩa |
| --- | --- | --- |
| Resolution X | `2560` | Chiều rộng ảnh |
| Resolution Y | `2560` | Chiều cao ảnh |
| Resolution Percentage | `100%` | Dùng đầy đủ kích thước đã nhập |
| Render Engine | `Eevee` | Engine được sử dụng trong ví dụ |

Đầu ra là một hình vuông. Có thể thay bằng **1920 × 1920** hoặc **1080 × 1080** nếu cần giảm thời gian và dung lượng. Khi tăng độ phân giải, số điểm ảnh xử lý tăng và thời gian render thường tăng theo độ phức tạp scene.

## 6. Camera và chiều sâu phối cảnh

Chọn camera rồi vào `Camera Data Properties`, đặt **Focal Length = 90 mm**. Với loại camera phối cảnh, tiêu cự nhỏ cho góc nhìn rộng và phối cảnh mạnh hơn; tiêu cự lớn cho góc nhìn hẹp và hình khối có vẻ ít bị kéo giãn hơn khi đặt camera xa tương ứng.

Thao tác:

1. Dùng `Numpad 0` xem camera hiện tại.
2. Chọn camera; dùng `G` dịch chuyển, có thể dùng `G`, `Z`, `Z` để di chuyển theo trục Z cục bộ tùy ngữ cảnh thao tác.
3. Nếu muốn lấy một góc nhìn mới, điều hướng viewport trước rồi nhấn `Ctrl + Alt + Numpad 0`.
4. Kiểm tra robot không bị cắt đầu, cắt chân hoặc chạm sát mép khung một cách vô ý.
5. Tắt overlays để đánh giá bố cục cuối và nhấn `Ctrl + S` lưu scene.

**Lưu ý kỹ thuật:** Khi thử tiêu cự khác 90 mm, phải bố trí lại khoảng cách camera. Đổi lens và giữ nguyên vị trí không tạo ra một phép so sánh bố cục tương đương.

## 7. Checkpoint và xử lý lỗi

| Hiện tượng | Hướng kiểm tra |
| --- | --- |
| Nền quá sáng | `Base Color`, `Roughness`, các vùng hứng ánh sáng |
| Đèn chạm/xuyên sàn | Vị trí và hướng chiếu của đối tượng đèn |
| Robot bị méo phối cảnh | Tiêu cự và khoảng cách camera |
| Khung bị cắt chân/đầu | Tịnh tiến camera, điều chỉnh framing |
| Vẫn thấy lưới ô trong viewport | Kiểm tra `Viewport Overlays` của workspace hiện tại |

## 8. Thực hành ngắn

Tạo hai phương án camera trên cùng scene: một khung **2560 × 2560, 90 mm**, một khung **1080 × 1080** với cùng lens. Dùng `Rendered View` so sánh bố cục, không cần render cả hai ngay.

**Tiêu chí hoàn thành:** Robot nổi bật rõ trên nền tối; camera không cắt chi tiết quan trọng; scene đã lưu.

## 9. Câu hỏi ôn tập

### Câu 1

Để giảm cảm giác nền bóng như gương, thao tác nào phù hợp nhất?

A. Tăng `Roughness`.  
B. Tăng FPS.  
C. Đổi video codec.  
D. Xóa rig.

**Đáp án:** A. **Giải thích:** Roughness cao giúp làm tản, giảm độ sắc của phản xạ trên bề mặt.

### Câu 2

Ưu điểm của lens 90 mm khi bố cục robot trong studio là gì?

A. Làm file `.blend` nhỏ ngay lập tức.  
B. Tạo vòng lặp animation tự động.  
C. Cho góc nhìn tương đối hẹp, giúp kiểm soát phối cảnh khi đặt camera phù hợp.  
D. Thay thế hoàn toàn thiết lập ánh sáng.

**Đáp án:** C. **Giải thích:** Tiêu cự dài hơn thu hẹp trường nhìn và thường giảm cảm giác méo góc rộng.

### Câu 3

Tắt `Viewport Overlays` có tác động gì?

A. Xóa plane vĩnh viễn.  
B. Ngừng render robot.  
C. Xuất tệp video.  
D. Ẩn các yếu tố hỗ trợ hiển thị trong viewport để dễ quan sát.

**Đáp án:** D. **Giải thích:** Overlays là lớp hiển thị trợ giúp; không phải hình học scene cần xóa.

### Câu 4

Cài đặt nào điều chỉnh kích thước ảnh render cuối?

A. `Bone Constraints`.  
B. `Output Properties` → `Resolution`.  
C. `Audio Channels`.  
D. `Graph Editor`.

**Đáp án:** B. **Giải thích:** Resolution X/Y và percentage quyết định số điểm ảnh của đầu ra.

### Câu 5

Khi đổi tiêu cự camera, tại sao cần kiểm tra lại khoảng cách camera?

A. Bởi tiêu cự thay đổi trường nhìn và do đó thay đổi bố cục.  
B. Bởi tiêu cự xóa toàn bộ vật liệu.  
C. Bởi camera sẽ tự xuất JPEG.  
D. Bởi Blender sẽ luôn chuyển sang Pose Mode.

**Đáp án:** A. **Giải thích:** Lens quyết định góc nhìn; vị trí camera cần phù hợp để giữ robot nằm đúng khung.

## 10. Tổng kết

Một studio đẹp bắt đầu từ sự tách bạch: nền tối ít bóng, robot đủ sáng và camera có bố cục nhất quán. Độ phân giải 2560 × 2560 và lens 90 mm tạo một cấu hình render mẫu rõ ràng để thực hành.
