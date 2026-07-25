# 036 — Array Modifier and Radial Screw

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Creative Modeling with Modifiers |
| **Bài học** | Array Modifier and Radial Screw |
| **Thời lượng** | 7:26 |
| **Chủ đề chính** | Dùng Array dạng xoắn ốc để dựng cầu thang |

## 1. Mục tiêu bài học

- Hiểu cách Object Offset trong Array Modifier có thể kết hợp cả xoay lẫn dịch chuyển để tạo hiệu ứng xoắn ốc (radial + rise).
- Dựng một cầu thang xoắn (spiral staircase) từ một bậc thang duy nhất.
- Biết cách dùng Empty làm "bộ điều khiển" cho Array, thay vì chỉnh trực tiếp offset số.
- Phân biệt Array xoắn ốc (radial screw) với Array vòng tròn phẳng đã học ở bài trước.

## 2. Nội dung chính

Bài học mở rộng kỹ thuật Object Offset của Array Modifier: thay vì Empty chỉ xoay quanh trục Z (tạo vòng tròn phẳng như bài thùng gỗ), lần này Empty vừa **xoay quanh Z** vừa **dịch chuyển theo Z**. Khi Array lặp lại transform này qua từng bản sao, kết quả là một chuỗi đối tượng vừa xoay dần quanh tâm vừa đi lên — chính là cấu trúc của **cầu thang xoắn ốc**.

Quy trình bắt đầu bằng việc modeling một **bậc thang (step)** đơn — một khối hộp dẹt đặt lệch khỏi tâm trục Z một khoảng bằng bán kính cầu thang mong muốn. Origin của bậc thang cần được đặt tại vị trí tâm xoay (trục cầu thang), không phải tại tâm hình học của bản thân bậc thang — thường thực hiện bằng cách Snap 3D Cursor về gốc tọa độ rồi `Object > Set Origin > Origin to 3D Cursor`.

Một **Empty** được đặt tại đúng vị trí trục xoay (0,0,0), sau đó chỉnh hai thông số:

- **Rotation Z**: góc xoay giữa hai bậc thang liên tiếp (ví dụ 25-30° cho cảm giác xoắn vừa phải).
- **Location Z**: độ cao (rise) giữa hai bậc — tương đương chiều cao một bậc thang thực tế (khoảng 0.15-0.2m theo tỷ lệ thật).

Trong Array Modifier của bậc thang, tick **Object Offset**, gán Empty này. Mỗi bản sao tiếp theo sẽ tự động được xoay thêm và nâng cao thêm đúng bằng transform của Empty, cộng dồn qua từng bậc — tạo hiệu ứng xoắn ốc đi lên hoàn toàn tự động chỉ bằng cách chỉnh Count trong Array.

Vì cơ chế này dựa trên phép nhân ma trận biến đổi (transform) lặp lại, nó được gọi không chính thức là "radial screw array" — tương tự nguyên lý của Screw Modifier (sẽ học ở bài sau) nhưng thực hiện thủ công bằng Object Offset thay vì thông số Screw riêng, cho phép kiểm soát hình dạng bậc thang tự do hơn (không bị giới hạn là mặt cắt xoay quanh trục).

## 3. Quy trình thực hành gợi ý

1. Tạo một Cube, chỉnh kích thước thành hình bậc thang (dẹt, dài theo hướng ngang).
2. Đặt 3D Cursor về gốc tọa độ (`Shift + C`), sau đó `Object > Set Origin > Origin to 3D Cursor` cho bậc thang.
3. Di chuyển bậc thang ra xa tâm theo trục X một khoảng bằng bán kính cầu thang.
4. Thêm một Empty (Plain Axes) tại gốc tọa độ.
5. Chỉnh Empty: Rotation Z = 27°, Location Z = 0.18m (giá trị minh họa, tùy tỷ lệ dự án).
6. Trên bậc thang, thêm Array Modifier, tick Object Offset và gán Empty.
7. Tăng dần Count để quan sát cầu thang xoắn ốc hình thành; điều chỉnh lại góc và độ cao Empty nếu bậc thang chồng lấn hoặc quá thưa.
8. (Tùy chọn) thêm một trụ đứng ở tâm làm cột trung tâm cầu thang.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Đặt 3D Cursor về gốc | `Shift + C` |
| Set Origin to 3D Cursor | Menu `Object > Set Origin` |
| Xoay Empty theo Z | `R` `Z` rồi nhập góc |
| Di chuyển Empty theo Z | `G` `Z` rồi nhập khoảng cách |
| Tăng/giảm Count trong Array | Kéo giá trị Count trong panel Modifier |

## 5. Lưu ý & lỗi thường gặp

- Origin của bậc thang không đặt đúng tâm xoay khiến cầu thang xoắn lệch tâm hoặc "bay" ra xa dần.
- Góc xoay Empty quá lớn hoặc quá nhỏ làm các bậc thang chồng lên nhau hoặc cách nhau quá xa.
- Quên đặt Location Z cho Empty khiến Array chỉ tạo vòng tròn phẳng, không có hiệu ứng đi lên.
- Nhầm lẫn giữa Rotation của Empty (transform gốc) và transform bị Array cộng dồn — chỉnh sai Empty sau khi Array đã áp dụng có thể gây kết quả khó đoán nếu không kiểm tra lại từng bậc.

## 6. Checklist thực hành

- [ ] Bậc thang có Origin đặt đúng tại trục xoay trung tâm.
- [ ] Empty điều khiển có cả Rotation Z và Location Z hợp lý.
- [ ] Array Modifier với Object Offset tạo được chuỗi bậc thang xoắn ốc liên tục.
- [ ] Khoảng cách và góc giữa các bậc đều và hợp lý về tỷ lệ thực tế.

## 7. Tóm tắt

Bằng cách gán cho Empty điều khiển Array Modifier vừa một góc xoay Z vừa một độ dịch chuyển Z, người học biến kỹ thuật Object Offset thành công cụ dựng cầu thang xoắn ốc chỉ từ một bậc thang duy nhất, mở rộng khả năng sáng tạo của Array so với các array tuyến tính hay vòng tròn phẳng thông thường.
