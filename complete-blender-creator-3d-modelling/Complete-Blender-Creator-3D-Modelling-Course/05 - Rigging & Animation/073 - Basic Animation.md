# 073 — Basic Animation

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Rigging & Animation |
| **Bài học** | Basic Animation |
| **Thời lượng** | 10:45 |
| **Chủ đề chính** | Ôn tập animation cơ bản |

## 1. Mục tiêu bài học

- Ôn lại các khái niệm nền tảng của animation trong Blender: keyframe, frame, Timeline, frame rate.
- Hiểu cách chèn keyframe cho vị trí (Location), xoay (Rotation) và tỉ lệ (Scale) của một object.
- Biết cách di chuyển giữa các keyframe và xem lại chuyển động qua Timeline.
- Làm quen với khái niệm interpolation (nội suy) giữa hai keyframe.

## 2. Nội dung chính

Animation trong Blender hoạt động dựa trên nguyên lý keyframe: người dùng thiết lập giá trị của một thuộc tính (vị trí, xoay, tỉ lệ, v.v.) tại các thời điểm (frame) cụ thể, và Blender tự động nội suy (interpolate) giá trị giữa các keyframe đó để tạo chuyển động mượt mà. Timeline ở phía dưới màn hình hiển thị playhead (con trỏ frame hiện tại) và các keyframe đã tạo dưới dạng các điểm kim cương màu vàng/xanh.

Ba thuộc tính animation cơ bản nhất là Location (G), Rotation (R) và Scale (S) — tương ứng với các phím transform quen thuộc. Khi nhấn I (Insert Keyframe) trên object đang chọn, Blender sẽ mở menu cho phép chọn loại keyframe cần chèn: Location, Rotation, Scale, hoặc LocRotScale (cả ba cùng lúc). Mỗi keyframe được gắn vào một frame cụ thể trên Timeline, và có thể di chuyển playhead bằng cách kéo chuột hoặc dùng phím mũi tên trái/phải, hoặc nhảy trực tiếp giữa các keyframe bằng Up/Down Arrow (hoặc Ctrl+Page Up/Down tùy layout).

Kiểu nội suy mặc định là Bezier (chuyển động có ease-in/ease-out tự nhiên), nhưng cũng có thể chuyển sang Linear (tốc độ đều) hoặc Constant (không nội suy, giữ nguyên giá trị đến keyframe tiếp theo) tùy vào hiệu ứng mong muốn.

## 3. Quy trình thực hành gợi ý

1. Chọn một object đơn giản (ví dụ hình cube) trong scene.
2. Di chuyển playhead về frame 1, nhấn I và chọn Location để chèn keyframe vị trí ban đầu.
3. Di chuyển playhead sang frame khác (ví dụ frame 30), di chuyển object bằng G, sau đó nhấn I lại để chèn keyframe thứ hai.
4. Nhấn Spacebar hoặc phím Play trong Timeline để xem lại chuyển động.
5. Thử lặp lại với Rotation và Scale để quan sát cách các thuộc tính khác nhau nội suy.
6. Mở Timeline mở rộng hoặc Dope Sheet để xem toàn bộ keyframe đã tạo trên một hàng thời gian.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| `I` | Insert Keyframe (mở menu chọn loại keyframe) |
| `Alt+I` | Xóa keyframe của thuộc tính tại frame hiện tại |
| `G` / `R` / `S` | Transform: Move / Rotate / Scale |
| `Left/Right Arrow` | Lùi/tiến một frame |
| `Up/Down Arrow` | Nhảy tới keyframe kế trước/sau |
| `Spacebar` | Play/Pause animation (tùy cấu hình) |

## 5. Lưu ý & lỗi thường gặp

- Quên chèn keyframe ở frame đầu tiên khiến object "nhảy" đột ngột thay vì di chuyển mượt.
- Chèn nhầm loại keyframe (ví dụ chỉ Location trong khi object có cả xoay) dẫn đến animation không đầy đủ.
- Nhầm lẫn giữa Timeline và Dope Sheet/Graph Editor — Timeline chỉ cho cái nhìn tổng quan, không chỉnh được đường cong chi tiết.
- Không đặt lại frame range (Start/End) của scene khiến animation bị cắt cụt khi render hoặc playback.

## 6. Checklist thực hành

- [ ] Đã chèn keyframe Location cho một object tại ít nhất 2 frame khác nhau.
- [ ] Đã xem lại animation bằng Play trong Timeline.
- [ ] Đã thử chèn keyframe Rotation và Scale.
- [ ] Đã thử xóa một keyframe bằng Alt+I.
- [ ] Đã quan sát các điểm keyframe hiển thị trên Timeline.

## 7. Tóm tắt

Bài học ôn lại nền tảng animation trong Blender dựa trên hệ thống keyframe: chèn giá trị tại các frame cụ thể và để Blender nội suy chuyển động giữa chúng. Đây là kiến thức nền cho toàn bộ phần rigging và animation nhân vật sau này.
