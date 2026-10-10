# Bài 04 — Tạo khoang cơ khí lõm, giá đỡ và khe thông gió

## 1. Tóm tắt

Một bộ giáp máy có tính thuyết phục cần cho thấy lớp cấu trúc bên dưới chứ không chỉ có các khối nổi. Bài này tạo hốc ở ngực/bụng, bổ sung các giá đỡ hình hộp, trụ cơ khí và các khe thông gió lặp lại. Các thao tác tập trung vào `Inset`, `Extrude`, `Duplicate`, `Cylinder`, `Scale`, `Rotate` và `Recalculate Normals`.

## 2. Mục tiêu học tập

- Tạo một vùng lõm có biên bao rõ ràng bằng Inset rồi Extrude.
- Tạo các khối đỡ bằng cách nhân bản mặt hiện có thay vì dựng lại từ đầu.
- Dùng Cylinder xoay theo trục để tạo chi tiết hình ống.
- Tạo nhiều khe thông gió với khoảng cách tương đối đều.
- Giải thích khi nào cần tắt tạm `Clipping` trong quá trình dịch chuyển mesh nhỏ.

## 3. Tạo một hốc kỹ thuật ở mặt thân

Chọn vùng mặt ở phần dưới ngực hoặc bụng robot. Nhấn `I` tạo một đường viền bao quanh hốc; điều chỉnh chiều rộng viền theo tỉ lệ thân. Nhấn `E` đùn mặt vào phía trong để nhìn từ trước sẽ thấy lòng hốc lùi sau lớp giáp. Chuyển sang Side View để quan sát độ sâu thực tế.

Với vùng hốc nằm gần mặt phẳng Mirror, kiểm tra `Clipping`: nó có thể giữ vertex bị dính tại tâm trong khi đang cố tạo chi tiết lệch ra ngoài. Nếu cần tạm tách một chi tiết riêng khỏi mặt gương, tắt `Clipping` trong thao tác dịch chuyển, sau đó bật lại. Không để các hàng vertex chính của vỏ thân vượt qua mặt phẳng giữa.

Ở vùng quanh hốc, có thể tạo thêm mặt nghiêng bằng cắt loop (`Ctrl + R`), xóa những mặt không cần thiết rồi chọn đường biên phù hợp và `F` để tạo lại một mặt. Cần kiểm tra không để lại lỗ hở ngoài vùng đã chủ định.

## 4. Tạo phần khung và các chi tiết bên trong

1. Chọn một mặt đáy hốc, `Shift + D` để nhân bản phần mặt và dịch xuống/sang bên.
2. Dùng `S`, `Y` hoặc `S`, `Z` điều chỉnh chiều dài, chiều cao thành một dải đỡ mảnh.
3. Dùng `E` extrude dải mặt thành một khối có độ dày.
4. Nhân bản chi tiết vừa dựng để tạo dải đỡ thứ hai ở vị trí khác; có thể trượt theo `Z` hoặc `Y`.
5. Tạo các khối phụ ở mặt sau/ngay bên hốc bằng `Shift + D`, thay đổi tỉ lệ cho từng khối thay vì lặp tất cả như nhau.
6. Sau các lần extrude/duplicate phức tạp, chọn mesh phù hợp và `Shift + N` để tính lại normals.

Dùng một mặt hiện hữu làm cơ sở giúp các chi tiết ăn theo tỉ lệ của thân. Tuy nhiên, nếu nhiều mặt được nhân bản rồi không liên kết với nhau, chúng có thể là các đảo geometry nằm trong cùng một object; kiểm tra chọn liên thông bằng `L` để không thao tác nhầm cụm.

## 5. Thêm các trụ nối cơ khí

Trong Edit Mode của đối tượng thân, `Shift + A > Mesh > Cylinder`. Thu nhỏ trụ bằng `S`, xoay `R`, `X`, `90` nếu cần trục của Cylinder nằm theo chiều ngang trước/sau tương ứng với thiết kế. Dùng `S`, `Y` điều chỉnh chiều dài, sau đó `G` dịch trụ đến vị trí kết nối giữa hai khối trong hốc. Nhân bản bằng `Shift + D` để có cặp trụ song song.

Trường hợp Cylinder mới xuất hiện ở giữa và dính vào Mirror, có thể tạm tắt `Clipping`, kéo trụ khỏi mặt đối xứng rồi bật lại. Điều quan trọng là trụ chạm hoặc đi sâu hợp lý vào hai đầu đỡ, không bị treo lơ lửng.

## 6. Tạo các khe thông gió phía trước

Từ một mặt nhỏ trước thân, `Shift + D` để nhân bản và di chuyển đến khu vực thông gió. Chuyển Front View để định chiều rộng; Side View để bảo đảm khe có độ sâu. `E` để tạo chiều dày; nếu muốn gờ lùi vào, điều chỉnh vùng phía sau theo trục `Y` bằng `G`.

Đưa con trỏ lên chi tiết và dùng `L` để chọn toàn bộ phần geometry liên thông, sau đó `Shift + D`, `Z` sao chép lên theo chiều dọc. Lặp lại cho một khe thứ ba hoặc nhiều hơn tùy bố cục, nhưng giữ các khoảng hở rõ ràng. Tránh đặt quá sát khiến bevel sau này chồng nhau.

## 7. Điểm kiểm tra và lỗi thường gặp

**Checkpoint A:** Hốc cơ khí có thành bên và đáy lùi vào. **Checkpoint B:** Có ít nhất hai thành phần cơ khí khác nhau trong hốc. **Checkpoint C:** Các khe gió giữ khoảng cách tương đối đều, không dính vào nhau. **Checkpoint D:** Normals và Mirror vẫn hoạt động hợp lý.

| Lỗi | Cách xử lý |
| --- | --- |
| Nhân bản mặt nhưng chi tiết bị kéo dính tâm | Kiểm tra Mirror Clipping và tách khỏi tâm trước khi bật lại |
| Khối mới nhìn như mặt phẳng | Extrude thêm chiều dày và kiểm tra Side View |
| Trụ xoay sai hướng | Kiểm tra `R`, trục và góc quay trong hình chiếu vuông góc |
| Nhiều chi tiết bị chọn cùng lúc | Deselect trước, dùng `L` trên đúng đảo geometry |
| Mặt hiển thị tối bất thường | Kiểm tra mặt chồng, mặt quay ngược; tính lại normals |

## 8. Thực hành

Tạo một khoang dưới ngực, đặt hai khối đỡ, hai trụ nằm song song và ba khe thông gió ở khu vực trước thân. Kiểm tra chi tiết từ Front, Side và Perspective View. Lưu `04_mechanical_cavity.blend`.

## 9. Câu hỏi ôn tập

### Câu 1

Trình tự nào phù hợp để tạo một hốc lõm có viền bao?

A. Smooth rồi Join.  
B. Rotate rồi Hide.  
C. Separate rồi Link.  
D. Inset rồi Extrude vào trong.

**Đáp án:** D. **Giải thích:** Inset tạo biên, Extrude tạo chiều sâu cho lòng hốc.

### Câu 2

Muốn tạo chi tiết đỡ thứ hai dựa trên mặt hiện có, lệnh nào hữu ích?

A. `Shift + D`.  
B. `Alt + H`.  
C. `Ctrl + J`.  
D. `Ctrl + S`.

**Đáp án:** A. **Giải thích:** Duplicate tái sử dụng hình học làm cơ sở cho chi tiết mới.

### Câu 3

Vì sao phải kiểm tra Side View khi dựng khe gió?

A. Để đổi tên object.  
B. Vì chỉ góc nhìn bên mới có Mirror.  
C. Để xem khe có độ dày và vị trí trước/sau phù hợp.  
D. Vì Side View tự tạo UV.

**Đáp án:** C. **Giải thích:** Front View không thể hiện đầy đủ chiều sâu theo trục Y.

### Câu 4

Một Cylinder cần xoay 90° quanh trục X. Chuỗi lệnh thông dụng nào đúng?

A. `G`, `X`, `90`.  
B. `R`, `X`, `90`.  
C. `S`, `X`, `90`.  
D. `E`, `X`, `90`.

**Đáp án:** B. **Giải thích:** `R` là Rotate, theo sau là trục và góc.

### Câu 5

Khi một cụm geometry nhỏ vô tình dính vào mặt phẳng Mirror, lựa chọn nào hợp lý nhất?

A. Xóa luôn Mirror.  
B. Xóa các mesh chính.  
C. Tăng đèn.  
D. Tạm tắt Clipping để dịch cụm cần thiết, sau đó bật lại và kiểm tra đường tâm.

**Đáp án:** D. **Giải thích:** Clipping có thể giữ các đỉnh sát tâm; điều chỉnh tạm thời nhưng phải khôi phục sự nhất quán của mô hình.

## 10. Tổng kết

Hốc lõm tạo cảm giác có lớp giáp bảo vệ, còn các hộp cơ khí và trụ nối làm rõ cấu trúc bên trong. Hãy ưu tiên **độ sâu hợp lý, đường biên sạch và sự liên kết thị giác** giữa các chi tiết.
