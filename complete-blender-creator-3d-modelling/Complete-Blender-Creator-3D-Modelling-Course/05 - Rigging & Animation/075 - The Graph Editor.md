# 075 — The Graph Editor

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Rigging & Animation |
| **Bài học** | The Graph Editor |
| **Thời lượng** | 12:56 |
| **Chủ đề chính** | Làm việc với Graph Editor |

## 1. Mục tiêu bài học

- Hiểu vai trò của Graph Editor trong việc kiểm soát chi tiết đường cong animation (F-Curve).
- Biết cách đọc trục X (thời gian) và trục Y (giá trị thuộc tính) trên đồ thị.
- Nắm được cách chỉnh handle của keyframe để thay đổi kiểu nội suy (Bezier, Linear, Constant).
- Biết cách dùng Graph Editor để tạo easing, làm mượt hoặc tạo hiệu ứng bật/nảy (bounce, overshoot) cho animation.

## 2. Nội dung chính

Graph Editor là công cụ chuyên sâu để chỉnh sửa animation ở mức đường cong (F-Curve), khác với Timeline hay Dope Sheet chỉ hiển thị keyframe như các điểm rời rạc. Trong Graph Editor, trục hoành (X) biểu diễn thời gian (frame), còn trục tung (Y) biểu diễn giá trị của thuộc tính đang animate (ví dụ vị trí Z, góc xoay X...). Mỗi keyframe xuất hiện dưới dạng một điểm trên đường cong, có hai handle (tay cầm) ở hai bên để kiểm soát độ cong của đường trước và sau điểm đó.

Kiểu nội suy (Interpolation) quyết định hình dạng đường cong giữa hai keyframe: Bezier (mặc định) tạo chuyển động mượt có ease-in/ease-out, Linear tạo chuyển động đều tốc độ, Constant giữ nguyên giá trị đột ngột nhảy sang keyframe kế tiếp (thường dùng cho hiệu ứng animation dạng stop-motion hoặc thay đổi trạng thái tức thời). Loại handle của từng keyframe (Vector, Auto, Auto Clamped, Free, Aligned) cũng ảnh hưởng đến cách đường cong uốn quanh điểm đó.

Graph Editor đặc biệt hữu ích khi cần tinh chỉnh timing và spacing của animation theo 12 nguyên tắc animation cổ điển — ví dụ tạo overshoot (đường cong vọt qua giá trị đích rồi quay lại) cho cảm giác đàn hồi, hoặc ease-in/ease-out để chuyển động tự nhiên hơn thay vì đều đều máy móc.

## 3. Quy trình thực hành gợi ý

1. Tạo một animation đơn giản với 2-3 keyframe Location trên Timeline.
2. Mở Graph Editor (đổi một vùng làm việc sang Animation workspace hoặc chuyển Editor Type).
3. Chọn một keyframe, quan sát handle của nó và thử kéo handle để thay đổi độ cong.
4. Thử đổi Interpolation của một đoạn từ Bezier sang Linear rồi sang Constant, quan sát khác biệt khi play animation.
5. Thử kéo handle tạo hiệu ứng overshoot (đường cong vượt qua giá trị đích).
6. Dùng phím N để mở sidebar và nhập giá trị Frame/Value chính xác cho một keyframe.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| `T` | Mở menu chọn kiểu Interpolation (trong Graph Editor) |
| `V` | Đổi kiểu Handle Type của keyframe đang chọn |
| `N` | Mở/đóng sidebar thông tin keyframe (Frame, Value) |
| `Home` | Đưa toàn bộ đường cong vào khung nhìn (View All) |
| `G` / `S` | Di chuyển / co giãn keyframe hoặc handle trong đồ thị |
| `A` | Chọn tất cả keyframe trong Graph Editor |

## 5. Lưu ý & lỗi thường gặp

- Chỉnh Graph Editor khi chưa chọn đúng kênh (channel) F-Curve cần sửa, dẫn đến chỉnh nhầm thuộc tính khác.
- Kéo handle quá tay tạo overshoot không mong muốn, khiến animation trông "giật" thay vì mượt.
- Quên phím Home để căn khung nhìn, khiến đường cong bị thu nhỏ hoặc phóng to khó thao tác.
- Nhầm lẫn giữa chỉnh keyframe (điểm chính) và chỉnh handle (tay cầm điều khiển độ cong).

## 6. Checklist thực hành

- [ ] Đã mở được Graph Editor và nhận diện trục X/Y.
- [ ] Đã thử đổi Interpolation giữa Bezier, Linear, Constant.
- [ ] Đã thử kéo handle để tạo easing hoặc overshoot.
- [ ] Đã dùng sidebar (N) để nhập giá trị keyframe chính xác.

## 7. Tóm tắt

Graph Editor cho phép kiểm soát animation ở mức đường cong chi tiết, từ kiểu nội suy đến hình dạng handle, giúp tạo ra chuyển động tự nhiên và có chủ đích thay vì animation cứng nhắc mặc định.
