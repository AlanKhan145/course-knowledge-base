# Bài 03 — Render ảnh tĩnh và tạo dáng robot

## 1. Tóm tắt

Trước khi animation, hãy xuất một ảnh ở tư thế ban đầu rồi thử một ảnh hero pose để kiểm tra chất lượng model, ánh sáng và khung hình. Bài này kết hợp `F12`, lưu render ra PNG, `Pose Mode` và thao tác xương để tạo dáng có trọng lượng.

## 2. Mục tiêu học tập

- Render và lưu ảnh tĩnh riêng với tệp dự án `.blend`.
- Chỉnh tư thế của rig bằng `G` và `R` trong `Pose Mode`.
- Điều chỉnh camera theo bố cục hero pose.
- Trả rig về tư thế cơ sở một cách an toàn trước khi bắt đầu walk cycle.

## 3. Render một ảnh kiểm tra

Trong scene có camera và ánh sáng đã chuẩn bị, nhấn **`F12`** để render một ảnh tĩnh. Khi cửa sổ `Render Result` hiện ra, dùng `Image` → `Save As` lưu ảnh dưới dạng **PNG**, ví dụ `mech_final_01.png`.

Cần phân biệt hai thao tác:

| Thao tác | Kết quả |
| --- | --- |
| `F12` | Tính một frame thành ảnh `Render Result` |
| `Image` → `Save As` | Lưu ảnh render ra ổ đĩa |
| `Ctrl + S` | Lưu trạng thái dự án `.blend` |

Nhấn `Ctrl + S` không thay thế cho việc lưu ảnh trong `Render Result`. Quay lại viewport qua `Esc` hoặc chuyển vùng giao diện phù hợp.

## 4. Dựng hero pose

Chọn armature của robot và vào `Pose Mode` (`Ctrl + Tab` trong ngữ cảnh thích hợp hoặc chọn qua menu Mode). Các bộ điều khiển thường có tên do người dựng rig đặt; không phải robot nào cũng có bố cục xương giống nhau.

Bố trí tư thế minh họa:

1. Chọn bộ điều khiển chính, thử xoay nhẹ quanh trục thích hợp bằng `R`, giới hạn trục nếu cần.
2. Dịch chuyển toàn thân có kiểm soát bằng `G`. Có thể khóa một trục di chuyển bằng tổ hợp như `Shift + Z` **sau khi gọi `G`** khi muốn không thay đổi cao độ Z.
3. Xoay nhẹ xương thân để tăng sức nặng, hướng robot vào góc nhìn hấp dẫn.
4. Điều chỉnh đầu nhìn lên hoặc hướng về phía camera.
5. Chỉnh hông và vị trí hai chân để tạo sự bất đối xứng tự nhiên, nhưng giữ điểm tựa trên sàn.
6. Sang góc camera, kiểm tra chân, đầu, vai và khoảng trống xung quanh robot.

Một hero pose tốt có đường hành động rõ và cảm giác robot đang tự giữ thăng bằng. Nếu chân xuyên đất hoặc trọng tâm trông không ổn, chỉnh lại bộ điều khiển gốc và hai chân trước khi render.

## 5. Bố cục và render lần hai

Di chuyển viewport tới góc mong muốn, dùng `Ctrl + Alt + Numpad 0` để đặt camera theo góc đó. Chọn camera, dùng `G` và các ràng buộc trục để căn khung lần cuối. Nhấn `F12` để render ảnh hero pose, rồi lưu thành PNG riêng, ví dụ `mech_final_02.png`. Tiếp tục `Ctrl + S` lưu dự án.

Ảnh thứ hai không nên ghi đè ảnh đầu tiên: việc giữ hai ảnh giúp so sánh pose, ánh sáng và bố cục.

## 6. Khôi phục tư thế trước khi animation

Tư thế tạo để render ảnh tĩnh thường **không phải** tư thế gốc thích hợp để bắt đầu chu trình đi bộ. Trước khi tạo action animation:

1. Lưu bản scene hero pose.
2. Chọn armature, vào `Pose Mode`.
3. Chọn các xương điều khiển thích hợp bằng `A`.
4. Dùng `Alt + R` (xóa rotation), `Alt + G` (xóa location), `Alt + S` (xóa scale) để trả các transform về giá trị cơ sở nếu rig hỗ trợ cách này.
5. Kiểm tra lại tư thế chuẩn, các ràng buộc, vị trí chân và xương điều khiển toàn thân.

**Cảnh báo:** Với rig tùy biến, xóa transform không phải lúc nào cũng đưa model về đúng tư thế mong muốn. Có rig sử dụng custom properties, constraint hoặc controller đặc biệt. Nếu kết quả sai, quay lại file đã lưu hoặc áp dụng thao tác reset pose do chính rig cung cấp.

## 7. Thực hành và checkpoint

**Nhiệm vụ:** Lưu hai ảnh PNG: một ảnh tư thế cơ sở và một ảnh hero pose. Kiểm tra chất lượng ở kích thước thật, đặc biệt tại bàn chân, các khớp và bóng đổ.

**Đạt yêu cầu khi:** Hai PNG mở được độc lập; đối tượng không bị cắt khung ngoài ý muốn; scene được lưu; tư thế rig cơ sở có thể khôi phục để tiếp tục animation.

## 8. Câu hỏi ôn tập

### Câu 1

Sau khi nhấn `F12`, thao tác nào lưu ảnh ra tệp PNG?

A. Chỉ nhấn `Ctrl + S`.  
B. `Image` → `Save As`.  
C. Chọn `Pose Mode`.  
D. Nhấn `Alt + R`.

**Đáp án:** B. **Giải thích:** Ảnh `Render Result` cần được lưu riêng qua menu Image.

### Câu 2

Muốn chỉnh xương đã rig để tạo tư thế, nên chuyển sang chế độ nào?

A. Sculpt Mode.  
B. Edit Mode của nền.  
C. Video Sequencer.  
D. Pose Mode.

**Đáp án:** D. **Giải thích:** Pose Mode cho phép điều khiển pose và keyframe của armature.

### Câu 3

Trong lúc kéo `G`, tổ hợp `Shift + Z` có tác dụng gì trong ngữ cảnh thông thường?

A. Loại trừ trục Z khỏi dịch chuyển.  
B. Tạo camera mới.  
C. Xuất JPEG 100%.  
D. Nhân đôi mọi keyframe.

**Đáp án:** A. **Giải thích:** Shift + trục ràng buộc chuyển động lên các trục còn lại, tránh thay đổi Z.

### Câu 4

Lý do quan trọng để tách file ảnh hero pose khỏi ảnh ban đầu là gì?

A. Để bắt buộc sử dụng hai camera.  
B. Để đổi số lượng xương của rig.  
C. Để so sánh kết quả và không ghi đè ảnh trước đó.  
D. Để animation tự động dài 60 khung.

**Đáp án:** C. **Giải thích:** Hai ảnh lưu riêng là hai mốc kiểm tra độc lập.

### Câu 5

Khi thao tác `Alt + R/G/S` không khôi phục đúng pose, cách xử lý hợp lý nhất là gì?

A. Xóa model và dựng lại.  
B. Kiểm tra cơ chế reset của rig hoặc quay về trạng thái dự án đã lưu.  
C. Tắt camera.  
D. Tăng độ phân giải ảnh.

**Đáp án:** B. **Giải thích:** Rig tùy chỉnh có thể không dùng transform mặc định làm tư thế gốc.

## 9. Tổng kết

Render ảnh tĩnh là bước kiểm tra chất lượng trước animation. Hai kết quả cần tách biệt: ảnh PNG để trình bày và file `.blend` để tiếp tục chỉnh sửa. Khi bắt đầu walk cycle, phải bảo đảm robot quay về một tư thế có thể kiểm soát.
