# 067 — Animating The Plane

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Animating The Plane |
| **Thời lượng** | 10:05 |
| **Chủ đề chính** | Tạo hoạt ảnh máy bay |

## 1. Mục tiêu bài học
- Tạo keyframe cho chuyển động bay của máy bay (Location, Rotation) trên controller đã chuẩn bị ở bài trước.
- Tạo animation quay liên tục cho propeller.
- Làm quen với Timeline và Graph Editor để xem, chỉnh sửa các keyframe/F-Curve.
- Hiểu vai trò của Interpolation Mode trong việc tạo chuyển động mượt hay dứt khoát.

## 2. Nội dung chính
Animation cơ bản trong Blender dựa trên **keyframe**: tại một frame cụ thể trên Timeline, giá trị thuộc tính (Location, Rotation, Scale...) của object được "chốt" lại; Blender tự nội suy (interpolate) giá trị giữa các keyframe để tạo chuyển động mượt.

Với máy bay, animation thường gồm hai lớp:
- **Chuyển động bay của Empty controller chính:** keyframe Location (và có thể Rotation để mô phỏng nghiêng cánh khi rẽ) tại một vài frame mốc dọc theo quỹ đạo bay mong muốn, ví dụ bay thẳng, nghiêng cua, lên cao.
- **Chuyển động quay propeller:** thường là animation lặp liên tục, có thể keyframe Rotation tại frame đầu và một frame sau đó với giá trị góc lớn (nhiều vòng quay), đặt Interpolation là Linear để tốc độ quay đều, thay vì Ease In/Out vốn phù hợp cho chuyển động tự nhiên có gia tốc.

Quy trình tạo keyframe cơ bản: đặt playhead tại frame mong muốn trên Timeline, thay đổi giá trị thuộc tính (di chuyển/xoay object), sau đó nhấn `I` để chèn keyframe (Insert Keyframe), chọn loại thuộc tính cần keyframe (Location, Rotation, LocRotScale...).

**Graph Editor** cho phép xem các F-Curve (đường cong biểu diễn giá trị thuộc tính theo thời gian) của từng kênh animation, chỉnh sửa tay cầm (handle) của từng keyframe để kiểm soát độ mượt/nhanh chậm. **Interpolation Mode** (phím `T` trong Graph Editor hoặc trong Timeline) gồm các kiểu chính: Constant (nhảy đột ngột), Linear (đều), Bezier (mượt, có easing) — lựa chọn phù hợp tùy loại chuyển động.

## 3. Quy trình thực hành gợi ý
1. Chọn Empty controller chính, đặt playhead ở frame đầu (thường frame 1), định vị máy bay ở điểm xuất phát, nhấn `I → Location` (hoặc `LocRotScale` nếu cần cả xoay).
2. Di chuyển playhead tới các frame tiếp theo, thay đổi Location/Rotation để mô phỏng quỹ đạo bay, chèn keyframe tương ứng tại mỗi mốc.
3. Mở Graph Editor để kiểm tra F-Curve của Location/Rotation, chỉnh handle nếu chuyển động chưa mượt.
4. Chọn propeller, tại frame đầu keyframe Rotation Z (hoặc trục quay tương ứng) bằng 0, tại một frame sau đó (ví dụ 20–30 frame sau) keyframe giá trị góc lớn (vài vòng quay, ví dụ 1440° cho 4 vòng).
5. Chọn các keyframe của propeller, đặt Interpolation Mode là Linear để tốc độ quay đều.
6. Nhấn Spacebar hoặc phím Play để xem trước animation trong Viewport, tinh chỉnh vị trí/thời điểm keyframe nếu cần.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `I` | Insert Keyframe (chèn keyframe cho thuộc tính đã chọn) |
| `Alt+A` | Xóa/hủy hoạt động; trong ngữ cảnh keyframe cũng dùng để bỏ chọn |
| `Ctrl+Click` (trên Timeline) | Di chuyển playhead nhanh tới frame được click |
| `T` (trong Graph Editor/Timeline khi chọn keyframe) | Đổi Interpolation Mode (Constant/Linear/Bezier...) |
| `Spacebar` | Play/Pause animation preview |
| `Home` (trong Graph Editor) | Frame All — hiển thị toàn bộ F-Curve trong khung nhìn |

## 5. Lưu ý & lỗi thường gặp
- Keyframe trực tiếp lên mesh máy bay thay vì controller Empty khiến khó chỉnh sửa tổng thể sau này (đã được tránh nhờ bước chuẩn bị ở bài trước).
- Quên chọn đúng loại keyframe (chỉ Location mà quên Rotation) khiến chuyển động thiếu một phần mong muốn.
- Dùng Bezier interpolation mặc định cho propeller khiến tốc độ quay không đều (chậm dần ở đầu/cuối) — nên đổi sang Linear cho chuyển động quay liên tục.
- Đặt các keyframe quá gần nhau khiến chuyển động bị giật, hoặc quá xa nhau khiến chuyển động chậm chạp không như ý muốn.

## 6. Checklist thực hành
- [ ] Đã keyframe được quỹ đạo bay cơ bản cho controller chính.
- [ ] Đã keyframe chuyển động quay liên tục cho propeller với Interpolation Linear.
- [ ] Đã kiểm tra và chỉnh sửa F-Curve trong Graph Editor.
- [ ] Đã xem trước animation bằng Play và xác nhận chuyển động hợp lý.

## 7. Tóm tắt
Bài học tạo animation thực tế cho máy bay: keyframe chuyển động bay trên controller và chuyển động quay liên tục cho propeller, đồng thời làm quen với Graph Editor và Interpolation Mode để kiểm soát chất lượng chuyển động — nền tảng để tinh chỉnh timing ở bài tiếp theo.
