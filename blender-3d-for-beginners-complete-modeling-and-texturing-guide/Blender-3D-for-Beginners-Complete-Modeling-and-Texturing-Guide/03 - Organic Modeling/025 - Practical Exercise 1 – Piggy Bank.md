# 025 — Practical Exercise 1 – Piggy Bank

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 03 — Organic Modeling |
| **Bài học** | Practical Exercise 1 – Piggy Bank |
| **Thời lượng** | 11:13 |
| **Chủ đề chính** | Dựng hình lợn đất từ khối cầu |

## 1. Mục tiêu bài học

- Áp dụng quy trình dựng hình organic từ một primitive đơn giản (UV Sphere) thành một vật thể hoàn chỉnh.
- Luyện tập kéo/nặn hình dạng bằng Extrude, Scale, Proportional Editing để tạo chân, mõm, tai.
- Dùng Subdivision Surface xuyên suốt để giữ bề mặt lợn đất mềm mại.
- Thực hành Boolean Difference để cắt khe bỏ tiền (coin slot) chính xác trên bề mặt cong.

## 2. Nội dung chính

Bài thực hành đầu tiên của module áp dụng lý thuyết đã học vào một dự án hoàn chỉnh: **con lợn đất (piggy bank)**. Điểm khởi đầu là một **UV Sphere** làm thân — hình cầu vốn đã mang dáng vẻ tròn trịa đặc trưng của lợn đất truyền thống. Từ thân cầu, các bộ phận phụ được dựng thêm bằng cách chọn một vùng face nhỏ rồi Extrude (`E`) và Scale (`S`) ra ngoài: bốn **chân** ngắn ở phía dưới, một **mõm (snout)** hình trụ dẹt nhô ra phía trước, hai **tai** hình tam giác dẹt nhô lên trên, và một đuôi xoắn nhỏ phía sau (có thể dựng bằng Curve xoắn ốc rồi Convert to Mesh).

Trong suốt quá trình dựng, **Subdivision Surface Modifier** được bật ở chế độ hiển thị (Edit Mode Display) để người dựng luôn thấy trước kết quả làm mịn cuối cùng ngay khi đang chỉnh sửa mesh thô — giúp căn chỉnh tỷ lệ chân, tai, mõm chính xác hơn so với chỉ nhìn mesh góc cạnh.

Chi tiết đặc trưng nhất của lợn đất là **khe bỏ tiền** trên lưng — một rãnh hẹp, dài, hơi cong theo bề mặt thân. Rãnh này khó cắt thủ công chính xác bằng Knife trên bề mặt cong, nên bài học dùng **Boolean Modifier** với **Operation = Difference**: tạo một object "cutter" hình hộp mỏng dài (Cube được Scale dẹt), đặt đúng vị trí và góc xoay trên lưng lợn, sau đó thêm Boolean Modifier vào object thân lợn, chọn cutter làm Object mục tiêu. Kết quả là một khe hở chính xác theo hình dạng cutter, cắt xuyên qua bề mặt cong mà không cần chỉnh tay từng vertex. Sau khi xác nhận kết quả đúng, có thể Apply modifier và xóa (hoặc ẩn) object cutter.

## 3. Quy trình thực hành gợi ý

1. Thêm UV Sphere, Scale nhẹ theo trục Z để hơi bầu dục giống thân lợn.
2. Thêm Subdivision Surface Modifier, bật hiển thị "On Cage"/Edit Mode để xem trước kết quả mịn khi chỉnh sửa.
3. Chọn vùng face nhỏ ở bốn góc dưới, Extrude + Scale tạo bốn chân ngắn.
4. Chọn vùng face phía trước, Extrude tạo mõm hình trụ dẹt.
5. Chọn hai vùng face nhỏ phía trên, Extrude + Scale tạo tai hình tam giác dẹt.
6. Tạo một Cube mỏng dài làm cutter, đặt trên lưng lợn theo đúng hướng khe hở mong muốn.
7. Thêm Boolean Modifier (Operation = Difference) trên thân lợn, chọn Cube làm Object; Apply sau khi kiểm tra kết quả.
8. Ẩn/xóa cutter, Shade Smooth toàn bộ, kiểm tra lại tỷ lệ tổng thể.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Extrude | `E` |
| Scale | `S` |
| Proportional Editing (bật/tắt) | `O` |
| Thêm Subdivision Surface | `Ctrl + 2` |
| Thêm Boolean Modifier | `Add Modifier > Generate > Boolean` |
| Ẩn object trong viewport | `H` (Alt+H để hiện lại) |
| Shade Smooth | Chuột phải > Shade Smooth |

## 5. Lưu ý & lỗi thường gặp

- Extrude chân/tai/mõm từ diện tích face quá lớn khiến gốc nối bị dày cộm, mất tự nhiên; nên chọn vùng nhỏ và dùng Inset (`I`) trước khi Extrude nếu cần thu hẹp.
- Quên Apply Boolean Modifier trước khi xóa cutter khiến khe hở biến mất.
- Cutter đặt không xuyên hết bề mặt thân lợn khiến Boolean Difference chỉ cắt được một phần, để lại rìa dính.
- Không kiểm tra normal của cutter/thân trước khi Boolean, dễ gây lỗi shading (mặt tối đen) tại vùng giao cắt.
- Bỏ qua Subdivision Surface khi dựng khiến tỷ lệ các bộ phận (chân, tai) trông khác hẳn so với kết quả mịn cuối cùng.

## 6. Checklist thực hành

- [ ] Đã dựng thân lợn từ UV Sphere với tỷ lệ hợp lý.
- [ ] Đã tạo đủ bốn chân, mõm, hai tai bằng Extrude/Scale.
- [ ] Đã cắt thành công khe bỏ tiền bằng Boolean Difference.
- [ ] Đã Apply Boolean Modifier và dọn dẹp object cutter.
- [ ] Kết quả cuối cùng mịn màng, không lỗi shading tại vùng Boolean.

## 7. Tóm tắt

Bài thực hành lợn đất kết hợp kỹ thuật Extrude/Scale organic quen thuộc với một ứng dụng thực tế của Boolean Difference để cắt khe bỏ tiền chính xác trên bề mặt cong — minh họa cách hai hướng tiếp cận (nặn hình tự do và cắt hình học chính xác) có thể phối hợp trong cùng một mô hình.
