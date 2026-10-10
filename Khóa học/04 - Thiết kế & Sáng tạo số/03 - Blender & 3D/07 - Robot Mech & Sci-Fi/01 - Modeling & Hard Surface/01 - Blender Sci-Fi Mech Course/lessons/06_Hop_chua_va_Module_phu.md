# Bài 06 — Tạo hộp lưu trữ và mô-đun cơ khí phía sau ba lô

## 1. Tóm tắt

Một ba lô robot chỉ gồm một khối vỏ sẽ khá đơn giản. Hệ thống phía sau có thể được tổ chức thành **hộp lưu trữ**, **khóa giữ**, **gờ bắt vít** và **các mô-đun phụ**. Các chi tiết này được xây từ mặt sẵn có bằng cách nhân bản, thu phóng, extrude và bevel; một số vùng đòi hỏi tạo loop bổ sung để tách phần chân đế.

## 2. Mục tiêu học tập

- Dựng hộp lưu trữ sau ba lô từ một mặt được nhân bản.
- Tạo hình dáng hộp có các góc nghiêng và cạnh vát hợp lý.
- Thêm ngàm khóa nhỏ và phần hộp phụ nhô ra phía sau.
- Kiểm soát các đảo geometry khi `Clipping` và Mirror đang bật.
- Dùng `Alt + H` khôi phục các thành phần đã ẩn và rà soát giao cắt.

## 3. Tạo hộp lưu trữ ở mặt sau

Chọn một mặt trên backpack, chuyển sang Top View (`Numpad 7`), `Shift + D` để tạo bản sao. Dịch mặt về khu vực phía sau và thu kích thước bằng `S`. Dùng Side View (`Numpad 3`) để điều chỉnh chiều cao (`S`, `Z`) và vị trí của khối.

Dùng `E` extrude mặt thành hộp có độ sâu. Không nên chỉ dịch mặt ra sau mà không tạo thành: một mặt phẳng mỏng sẽ không đọc rõ là hộp khi nhìn nghiêng. Nếu muốn nắp hộp được bo ở một góc, chọn cạnh/đỉnh phù hợp và áp dụng bevel với kích thước vừa đủ. Đưa hộp về khoảng gần ba lô, nhưng để lộ ranh giới giữa hộp và vỏ.

Một biến thể có thể chia mặt hộp thành các dải bằng `Ctrl + R`. Ví dụ, đặt hai loop ở một vùng rồi tăng khoảng cách giữa chúng bằng scale theo trục tương ứng để có dải trung tâm. Chọn mặt trong dải đó, `E` để tạo một gờ xuống dưới hoặc nhô ra ngoài, sau đó kiểm tra Side View.

## 4. Thiết kế khóa giữ và các ngàm nhỏ

Ngàm khóa nên là một chi tiết đơn giản nhưng có chiều sâu và có vị trí hợp lý trên hộp. Chọn mặt phù hợp, `Shift + D`, thu nhỏ, kéo đến vị trí khóa; dùng `S` theo một trục để chuyển từ mặt vuông thành hình chữ nhật. `E` tạo chiều dày, sau đó chọn cạnh ngoài và `Ctrl + B` để làm mềm gờ.

Nếu cần một khóa ở phía đối diện, nhân bản cả phần geometry liên thông bằng `L` và `Shift + D` thay vì tự dựng lại. Trước khi kéo qua đường tâm, kiểm tra `Clipping`. Không biến khóa thành một tấm rời không có điểm tựa: nó nên đặt áp hoặc ăn nhẹ vào vỏ hộp.

## 5. Thêm mô-đun phụ ở mặt lưng

1. Chọn một mặt sau của backpack, `Shift + D` tạo tấm nền cho mô-đun mới.
2. Thu chiều rộng và chiều cao để tấm mới nhỏ hơn khối chính.
3. Dùng `G` theo các trục đặt mô-đun ở vị trí dễ nhìn từ Back View (`Ctrl + Numpad 1`).
4. Nhấn `E` kéo mô-đun ra khỏi mặt vỏ.
5. Chọn một hoặc một số mặt ngoài, dịch chuyển ít để tạo mặt nghiêng hoặc hạ thấp một phía.
6. Dùng `Ctrl + B` cho cạnh có chủ đích; lăn bánh xe khi cần nhiều segment cho đường cong mềm hơn.
7. Tạo thêm một mô-đun nhỏ khác bằng `Shift + D`, thay đổi chiều dài và vị trí để bố cục bớt đơn điệu.

Với chi tiết nhỏ đặt trong cùng object có Mirror, cần lưu ý rằng Mirror có thể sinh ra một bản tương ứng. Điều này hữu ích nếu cấu trúc đối xứng, nhưng không phù hợp với một chi tiết chỉ xuất hiện một phía. Nếu chủ động làm bất đối xứng, có thể tách đối tượng riêng hoặc xử lý modifier cho phù hợp.

## 6. Kiểm tra bằng góc nhìn sau và góc nhìn ba phần tư

Back View cho phép quan sát khoảng cách giữa hai khối, hình dạng nắp, ngàm và tính đối xứng. Side View cho thấy chiều sâu của ngàm, vỏ và hộp có hợp lý hay không. Perspective View giúp đánh giá chi tiết có bị nhô quá mức, tạo cảm giác như nhiều hộp dán lên nhau mà thiếu cấu trúc kết nối.

Sau khi hoàn tất, `A` chọn mesh thích hợp rồi `Shift + N` kiểm tra normals. Nếu trước đó đã ẩn torso để tiện dựng backpack, dùng `Alt + H` để hiện lại và rà soát vùng giao giữa các khối.

## 7. Lỗi thường gặp

| Lỗi | Cách giải quyết |
| --- | --- |
| Hộp lưu trữ trông như mặt phẳng | Extrude tạo thành và quan sát từ bên |
| Khóa giữ biến mất vào vỏ | Dịch mặt ngoài ra một ít; tránh để hai bề mặt đồng vị trí |
| Bevel ngàm quá lớn | Giảm width và segment, giữ hình dáng cơ khí |
| Chi tiết xuất hiện hai phía không mong muốn | Kiểm tra việc kế thừa Mirror hoặc tách object riêng |
| Hộp không còn thấy khi hiện torso | `Alt + H`, kiểm tra vị trí trước/sau và giao cắt |

## 8. Thực hành

Tạo một hộp lưu trữ ở sau backpack, tối thiểu một ngàm khóa và hai mô-đun phụ có kích thước khác nhau. Nhìn từ sau phải phân biệt rõ từng khối; nhìn bên phải thấy chiều dày của hộp. Lưu `06_backpack_storage.blend`.

## 9. Câu hỏi ôn tập

### Câu 1

Muốn tạo hộp lưu trữ có độ dày từ một mặt phẳng đã nhân bản, thao tác nào quan trọng nhất?

A. `E` để Extrude.  
B. `H` để ẩn.  
C. `P` để tách.  
D. `Ctrl + S` để lưu.

**Đáp án:** A. **Giải thích:** Extrude bổ sung các mặt thành bên và tạo thể tích rõ ràng.

### Câu 2

Góc nhìn nào thuận tiện nhất để đánh giá bố trí các khóa ở mặt sau?

A. Bottom View.  
B. Front View.  
C. Back View (`Ctrl + Numpad 1`).  
D. Camera View bất kỳ.

**Đáp án:** C. **Giải thích:** Back View cho bố cục trực diện các thành phần gắn sau lưng.

### Câu 3

Khi đã ẩn torso để dựng backpack, làm thế nào hiện lại tất cả phần đã ẩn trong Edit Mode?

A. `Shift + N`.  
B. `Alt + H`.  
C. `Ctrl + B`.  
D. `R`.

**Đáp án:** B. **Giải thích:** Alt+H là Unhide.

### Câu 4

Khi chi tiết chỉ nên có một bên nhưng bị phản chiếu sang cả hai bên, điều nào cần xem xét?

A. Độ mạnh của đèn.  
B. Aspect ratio của ảnh.  
C. Số camera.  
D. Mirror Modifier trên object chứa chi tiết.

**Đáp án:** D. **Giải thích:** Mirror nhân bản hình học theo trục được bật, kể cả với mô-đun nhỏ.

### Câu 5

Vì sao các ngàm nên đặt ăn nhẹ vào vỏ hộp thay vì treo lơ lửng?

A. Để biểu đạt mối liên kết cơ khí thuyết phục.  
B. Để làm camera tự căn giữa.  
C. Để làm Blender chạy shader nhanh hơn.  
D. Để buộc mọi mặt thành hình tròn.

**Đáp án:** A. **Giải thích:** Mối tiếp xúc hợp lý khiến phụ kiện trông như một bộ phận lắp trên vật thể.

## 10. Tổng kết

Khối vỏ lớn tạo silhouette, còn hộp lưu trữ và các ngàm cho ba lô chức năng thị giác. Hãy kiểm soát độ dày, ranh giới từng phần và sự đối xứng của các mô-đun.
