# 068 — Scene and Animation Adjustments

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Scene and Animation Adjustments |
| **Thời lượng** | 6:06 |
| **Chủ đề chính** | Điều chỉnh scene và tốc độ animation |

## 1. Mục tiêu bài học
- Tinh chỉnh Frame Range và Frame Rate của Scene cho phù hợp với độ dài animation mong muốn.
- Điều chỉnh timing (khoảng cách giữa các keyframe) để chuyển động bay tự nhiên hơn.
- Sử dụng Graph Editor để làm mượt (ease) chuyển động thay vì tốc độ đều máy móc.
- Rà soát và dọn dẹp scene tổng thể (ánh sáng tạm, object thừa) trước khi sang bước lighting.

## 2. Nội dung chính
Sau khi đã có animation cơ bản, bước điều chỉnh giúp chuyển động trông tự nhiên và scene sẵn sàng cho việc render. Các thông số Scene quan trọng nằm trong **Output Properties**:
- **Frame Start / Frame End:** xác định đoạn animation sẽ được render, cần khớp với thời điểm bắt đầu và kết thúc chuyển động đã keyframe.
- **Frame Rate (FPS):** thường đặt 24, 25 hoặc 30 fps tùy chuẩn mong muốn; thay đổi FPS sau khi đã keyframe có thể làm animation nhanh/chậm hơn dự kiến vì số frame giữa các keyframe không đổi nhưng thời gian thực tế mỗi frame chiếm sẽ khác.

Về timing animation, khoảng cách (số frame) giữa các keyframe quyết định tốc độ cảm nhận: khoảng cách gần tạo chuyển động nhanh/gấp, khoảng cách xa tạo chuyển động chậm/êm. Việc dời (move) keyframe trên Timeline hoặc Dope Sheet là cách nhanh để chỉnh timing tổng thể mà không cần đổi giá trị transform.

Trong Graph Editor, dùng **Easing** (thông qua handle của Bezier interpolation, hoặc Easing Type: Ease In, Ease Out, Ease In-Out) để mô phỏng quán tính vật lý — ví dụ máy bay tăng tốc từ từ khi bắt đầu bay thay vì đạt vận tốc tối đa ngay lập tức. Đây là điểm khác biệt so với animation propeller ở bài trước vốn cần Linear để quay đều.

Trước khi chuyển sang lighting, cũng nên rà soát lại toàn bộ scene: xóa các object/light tạm dùng để test, kiểm tra Collection nào cần ẩn khi render (Reference Images không nên xuất hiện trong render), và xác nhận Camera đã được đặt/keyframe theo góc nhìn mong muốn nếu animation có di chuyển camera.

## 3. Quy trình thực hành gợi ý
1. Vào Output Properties, đặt Frame Start/End khớp với đoạn animation đã tạo, chọn Frame Rate phù hợp.
2. Mở Dope Sheet hoặc Graph Editor, rà soát toàn bộ keyframe, dời lại vị trí một số keyframe để điều chỉnh nhịp độ chuyển động.
3. Chọn các keyframe chuyển động bay (không phải propeller), thử đổi Easing (Ease In/Out) để tạo cảm giác tăng/giảm tốc tự nhiên.
4. Play lại animation nhiều lần, quan sát và tinh chỉnh cho tới khi chuyển động cảm thấy hợp lý.
5. Rà soát Outliner, ẩn khỏi render (icon camera) các Reference Image hoặc object phụ trợ không cần xuất hiện.
6. Kiểm tra và điều chỉnh vị trí/animation Camera nếu scene có camera chuyển động theo máy bay.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `G` (trong Dope Sheet/Graph Editor) | Di chuyển keyframe đã chọn theo thời gian |
| `T` | Đổi Interpolation Mode cho keyframe đã chọn |
| `Shift+E` (trong Graph Editor) | Đổi Easing Type (Ease In/Out/In-Out) |
| `Home` | Frame All trong Timeline/Dope Sheet/Graph Editor |
| Camera icon (Outliner) | Bật/tắt hiển thị object khi render (Disable in Renders) |

## 5. Lưu ý & lỗi thường gặp
- Đổi Frame Rate sau khi đã keyframe mà không kiểm tra lại có thể làm animation trông nhanh hoặc chậm hơn dự tính ban đầu.
- Áp Easing cho cả animation propeller khiến tốc độ quay không đều, gây cảm giác giật thay vì quay liên tục mượt mà.
- Quên ẩn Reference Image khỏi render khiến ảnh tham chiếu xuất hiện trong kết quả render cuối cùng.
- Không kiểm tra lại toàn bộ animation sau khi dời keyframe, dễ bỏ sót đoạn chuyển động bị lệch thời điểm so với các phần khác.

## 6. Checklist thực hành
- [ ] Đã đặt Frame Start/End và Frame Rate phù hợp với animation.
- [ ] Đã tinh chỉnh timing giữa các keyframe cho chuyển động bay tự nhiên hơn.
- [ ] Đã áp Easing hợp lý cho chuyển động bay (khác với Linear của propeller).
- [ ] Đã ẩn các object phụ trợ (Reference Image...) khỏi render.

## 7. Tóm tắt
Bài học tinh chỉnh timing, frame rate và easing để animation máy bay trông tự nhiên hơn, đồng thời dọn dẹp scene tổng thể — bước chuyển tiếp cần thiết trước khi thiết lập ánh sáng HDRI và render animation ở các bài cuối module.
