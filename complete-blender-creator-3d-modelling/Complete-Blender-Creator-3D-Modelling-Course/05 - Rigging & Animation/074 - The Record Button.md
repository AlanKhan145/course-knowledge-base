# 074 — The Record Button

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Rigging & Animation |
| **Bài học** | The Record Button |
| **Thời lượng** | 11:32 |
| **Chủ đề chính** | Sử dụng nút Record để tạo keyframe |

## 1. Mục tiêu bài học

- Hiểu chức năng của nút Auto Keying (Record) trên Timeline.
- Biết cách bật/tắt Auto Keying và ảnh hưởng của nó đến quy trình animate.
- So sánh ưu/nhược điểm giữa chèn keyframe thủ công (phím I) và Auto Keying.
- Nắm được các rủi ro khi quên tắt Auto Keying trong lúc chỉnh sửa scene.

## 2. Nội dung chính

Nút Record (biểu tượng hình tròn đỏ, còn gọi là Auto Keying) nằm trên thanh Timeline, bên cạnh các nút điều khiển playback. Khi được bật, Blender sẽ tự động chèn keyframe mỗi khi một thuộc tính đã có ít nhất một keyframe trước đó bị thay đổi (di chuyển, xoay, scale, hoặc chỉnh giá trị trong Properties panel) tại frame hiện tại — người dùng không cần nhấn I thủ công nữa.

Auto Keying rất hữu ích khi tinh chỉnh animation đã có sẵn: chỉ cần di chuyển đến frame cần sửa, thay đổi giá trị, và keyframe mới sẽ tự động được tạo. Tuy nhiên, thuộc tính phải đã được keyframe ít nhất một lần trước đó thì Auto Keying mới hoạt động — nếu object chưa có keyframe nào, cần chèn keyframe đầu tiên bằng tay (phím I) trước khi Auto Keying có tác dụng cho thuộc tính đó.

Một điểm cần lưu ý là Auto Keying là con dao hai lưỡi: nếu quên tắt sau khi animate xong, mọi thay đổi tiếp theo (kể cả những điều chỉnh không cố ý) sẽ vô tình bị ghi thành keyframe, làm hỏng animation đã hoàn thiện. Vì vậy nên tập thói quen chỉ bật Record khi đang chủ động animate, và tắt ngay khi chuyển sang chỉnh sửa mesh hoặc thiết lập scene khác.

## 3. Quy trình thực hành gợi ý

1. Chèn keyframe Location đầu tiên cho object bằng phím I tại frame 1.
2. Bật nút Record (Auto Keying) trên Timeline.
3. Di chuyển playhead sang một frame khác, sau đó di chuyển/xoay object — quan sát keyframe mới tự động xuất hiện.
4. Lặp lại ở vài frame khác nhau để tạo một chuỗi chuyển động.
5. Tắt Record ngay sau khi hoàn tất để tránh ghi đè keyframe ngoài ý muốn.
6. Thử quay lại một frame đã có keyframe và chỉnh giá trị để thấy Auto Keying cập nhật keyframe hiện có thay vì tạo mới.

## 4. Phím tắt & công cụ liên quan

| Phím tắt / nút | Chức năng |
|---|---|
| Nút Record (chấm đỏ) trên Timeline | Bật/tắt Auto Keying |
| `I` | Chèn keyframe thủ công (cần dùng để tạo keyframe đầu tiên) |
| `Left/Right Arrow` | Di chuyển giữa các frame khi Auto Keying đang bật |
| `Alt+I` | Xóa keyframe nếu Auto Keying tạo nhầm |

## 5. Lưu ý & lỗi thường gặp

- Quên tắt Record sau khi animate xong, dẫn đến các chỉnh sửa mesh hoặc vị trí sau đó vô tình bị ghi keyframe.
- Nhầm tưởng Auto Keying tự tạo keyframe cho thuộc tính chưa từng được keyframe — thực tế cần khởi tạo bằng tay trước.
- Không kiểm tra lại Dope Sheet sau khi dùng Record để xác nhận số lượng keyframe được tạo có đúng như mong đợi.
- Bật Record trong lúc dựng scene tĩnh (không animate) có thể vô tình tạo animation không mong muốn cho object.

## 6. Checklist thực hành

- [ ] Đã chèn keyframe đầu tiên bằng phím I trước khi bật Record.
- [ ] Đã bật Record và tạo ít nhất 2-3 keyframe tự động.
- [ ] Đã kiểm tra lại các keyframe được tạo trong Dope Sheet.
- [ ] Đã tắt Record sau khi hoàn thành animate.

## 7. Tóm tắt

Nút Record (Auto Keying) giúp tăng tốc quy trình animate bằng cách tự động chèn keyframe khi thay đổi giá trị đã được keyframe trước đó, nhưng cần bật/tắt có ý thức để tránh ghi đè animation ngoài ý muốn.
