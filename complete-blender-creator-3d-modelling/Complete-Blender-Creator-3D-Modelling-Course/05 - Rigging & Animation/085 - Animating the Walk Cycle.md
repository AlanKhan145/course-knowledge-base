# 085 — Animating the Walk Cycle

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Rigging & Animation |
| **Bài học** | Animating the Walk Cycle |
| **Thời lượng** | 13:11 |
| **Chủ đề chính** | Tạo hoạt ảnh đi bộ |

## 1. Mục tiêu bài học

- Hiểu các pha chính (key pose) của một chu kỳ đi bộ: Contact, Down, Passing, Up.
- Biết cách dùng IK Target của chân để giữ bàn chân bám đất tự nhiên trong lúc đi.
- Tạo một animation walk cycle lặp (loop) mượt mà cho Blob Man.
- Làm quen với việc dùng Graph Editor để tinh chỉnh timing giữa các pha đi bộ.

## 2. Nội dung chính

Walk cycle là một trong những bài tập animation kinh điển nhất, dựa trên 4 pha chuyển động lặp lại của mỗi bước chân: Contact (chân chạm đất, cả hai chân đang mở rộng nhất, một trước một sau), Down (trọng tâm cơ thể hạ thấp nhất khi chân chịu lực), Passing (chân chịu lực đứng thẳng, chân kia đang lướt qua ở giữa), và Up (trọng tâm cơ thể nâng cao nhất khi chuẩn bị bước tiếp theo). Bốn pha này lặp lại xen kẽ giữa hai chân để tạo thành một chu kỳ hoàn chỉnh, thường kéo dài khoảng 12-24 frame cho một bước tùy tốc độ đi mong muốn (chậm hơn dùng nhiều frame hơn).

Nhờ đã thiết lập IK ở bài trước, việc animate chân trở nên trực quan hơn nhiều: chỉ cần di chuyển IK Target của bàn chân đến các vị trí Contact tương ứng và chèn keyframe, không cần xoay từng khớp đùi/cẳng chân theo FK. Điều quan trọng là giữ bàn chân đứng yên tại chỗ (không trượt) trong suốt pha chân đang chịu lực trên mặt đất — đây là lỗi phổ biến nhất khi mới tập animate walk cycle (hiện tượng "foot sliding").

Ngoài chuyển động chân, một walk cycle thuyết phục cần thêm các yếu tố phụ: lên xuống của hông/cột sống (hip sway theo phương thẳng đứng, khớp với nhịp Down/Up), xoay nhẹ hông theo phương ngang khi đổi trọng tâm, và chuyển động đối trọng của tay (tay trái vung ra trước khi chân phải bước tới, và ngược lại) để giữ thăng bằng tự nhiên. Sau khi tạo xong một chu kỳ, có thể nhân bản (duplicate) hoặc dùng modifier NLA/Cyclic Extrapolation trong Graph Editor để lặp animation liên tục mà không cần tạo lại từ đầu mỗi bước.

## 3. Quy trình thực hành gợi ý

1. Xác định độ dài một chu kỳ walk (ví dụ 24 frame) và đặt keyframe cho 4 pha chính: Contact, Down, Passing, Up cho từng chân.
2. Dùng IK Target của chân, di chuyển đến vị trí Contact (chân trước/sau) tại các frame tương ứng và chèn keyframe.
3. Animate hông (root/spine bone) lên xuống theo nhịp Down/Up, và xoay nhẹ theo phương ngang.
4. Animate tay vung đối trọng với chân (FK đơn giản là đủ cho tay).
5. Play lại toàn bộ chu kỳ, kiểm tra hiện tượng foot sliding — nếu có, chỉnh lại keyframe IK Target để bàn chân đứng yên đúng lúc chịu lực.
6. Mở Graph Editor để tinh chỉnh timing/easing giữa các pha, đảm bảo chuyển động không đều đều máy móc.
7. Thiết lập lặp animation (duplicate chu kỳ hoặc Cyclic Extrapolation) để xem thử nhân vật đi liên tục nhiều bước.

## 4. Phím tắt & công cụ liên quan

| Phím tắt / thao tác | Chức năng |
|---|---|
| `I` | Insert Keyframe cho IK Target hoặc bone hông/tay tại mỗi pha |
| `G` | Di chuyển IK Target đến vị trí Contact/Passing |
| Graph Editor > Channel > Extrapolation Mode > Make Cyclic (F-Modifier) | Lặp animation tự động theo chu kỳ |
| `Shift+D` | Duplicate keyframe/action để nối tiếp chu kỳ đi bộ |
| `Ctrl+Tab` | Vào Pose Mode để animate bone |
| `Spacebar` | Play để kiểm tra toàn bộ walk cycle |

## 5. Lưu ý & lỗi thường gặp

- Foot sliding: bàn chân bị trượt trên mặt đất trong pha chịu lực do keyframe IK Target không giữ đúng vị trí cố định.
- Thiếu chuyển động đối trọng của tay khiến dáng đi trông cứng và thiếu tự nhiên.
- Bỏ qua chuyển động lên xuống của hông (hip sway) làm walk cycle trông như "trượt" thay vì "bước đi".
- Timing đều tuyệt đối giữa các pha (không dùng easing trong Graph Editor) khiến chuyển động trông máy móc, thiếu trọng lượng.
- Chu kỳ nối tiếp không khớp (frame cuối khác frame đầu) gây giật khi animation lặp lại.

## 6. Checklist thực hành

- [ ] Đã xác định và keyframe 4 pha chính (Contact, Down, Passing, Up) cho cả hai chân.
- [ ] Đã kiểm tra và khắc phục hiện tượng foot sliding.
- [ ] Đã animate chuyển động hông lên xuống và tay vung đối trọng.
- [ ] Đã tinh chỉnh timing bằng Graph Editor.
- [ ] Đã thiết lập animation lặp liên tục nhiều bước.

## 7. Tóm tắt

Walk cycle được xây dựng từ 4 pha chuyển động lặp lại (Contact, Down, Passing, Up), kết hợp IK cho chân, chuyển động hông và tay đối trọng để tạo dáng đi tự nhiên. Đây là bài tập tổng hợp toàn bộ kỹ năng rigging và animation đã học trong module.
