# Bài 07 — Render Walk Cycle thành chuỗi khung hình

## 1. Tóm tắt

Để đưa animation vào trình dựng video, một workflow linh hoạt là **render từng frame thành ảnh riêng** rồi nhập chuỗi ảnh vào `Video Sequencer`. Bài học sử dụng Eevee, tốc độ 24 FPS, dải frame **1–59**, định dạng **JPEG Quality 100** và tổ chức ảnh trong một thư mục riêng.

## 2. Mục tiêu học tập

- Giải thích lợi ích của việc render image sequence thay vì chỉ xuất thẳng video.
- Cấu hình thư mục, định dạng và chất lượng ảnh đầu ra.
- Dùng `Ctrl + F12` để render animation.
- Kiểm tra ảnh liên tiếp, tên file và frame count trước khi dựng video.

## 3. Tại sao render image sequence?

Khi xuất video trực tiếp, thay đổi về âm thanh hoặc dựng nối thường khiến người học phải thực hiện lại hoặc chỉnh trong một tệp video hoàn chỉnh. Với **image sequence**, hình ảnh được lưu từng frame, thuận lợi cho kiểm tra lỗi, thay thế frame hỏng và tái sử dụng trong bước biên tập.

Một image sequence là dãy ảnh có tên tăng dần, ví dụ `0001.jpg`, `0002.jpg`, ... Khi nhập theo đúng thứ tự ở **24 FPS**, trình dựng video phát các ảnh này như chuyển động liên tục. Việc đọc đúng thứ tự và giữ đúng frame rate là điều kiện quan trọng.

## 4. Chọn định dạng ảnh

Ảnh tĩnh để giới thiệu robot đã dùng PNG. Với chuỗi animation, thiết lập minh họa sử dụng **JPEG, Quality 100**, nhằm giảm dung lượng so với nhiều trường hợp lưu ảnh không nén/mất dữ liệu ít hơn. JPEG vẫn là định dạng **nén mất dữ liệu** ngay cả khi đặt Quality 100, vì vậy nó không tương đương ảnh lossless. Nếu pipeline đòi alpha hoặc cần tối đa hóa chất lượng hậu kỳ, PNG có thể phù hợp hơn, nhưng video mẫu ở đây sử dụng JPEG.

| Đầu ra | Định dạng ví dụ | Mục đích |
| --- | --- | --- |
| Ảnh tĩnh hero pose | PNG | Giữ ảnh trình bày chất lượng cao |
| Animation frame sequence | JPEG, Quality 100 | Giảm dung lượng ảnh cho bước dựng |
| Video cuối | MP4/H.264 | Dễ chia sẻ và phát lại |

## 5. Thiết lập render animation

1. Mở `mech_walk.blend`, kiểm tra robot và camera từ frame 1 đến 59.
2. Trong `Output Properties`, đặt `Frame Start = 1`, `Frame End = 59` và `Frame Rate = 24 FPS`.
3. Chọn `File Format = JPEG`; đặt `Quality = 100` nếu dùng cấu hình minh họa.
4. Nhấp biểu tượng thư mục tại phần `Output` và tạo folder riêng, ví dụ `rendered_frames/`.
5. Chọn thư mục đầu ra và xác nhận để Blender ghi file vào đúng chỗ. Kiểm tra lại đường dẫn hiển thị.
6. Nhấn **`Ctrl + S`** để lưu các thiết lập vào file `.blend`.
7. Nhấn **`Ctrl + F12`** hoặc `Render` → `Render Animation` để render toàn bộ dải.

Tốc độ render không có mức cố định. Độ phân giải, vật liệu, số lượng đèn, mẫu xử lý và sức mạnh thiết bị đều ảnh hưởng thời gian thực hiện.

## 6. Kiểm tra chuỗi ảnh đầu ra

Sau khi kết thúc, mở thư mục `rendered_frames/` và thực hiện kiểm tra:

- Có đủ **59 ảnh** tương ứng dải frame 1–59.
- Tên ảnh thể hiện thứ tự liên tục, không thiếu hoặc lặp số không chủ đích.
- Ảnh đầu và cuối không được hiểu nhầm là hai bản giống hệt nhau: frame 60 chỉ là mốc đóng vòng, không được xuất.
- Camera giữ cùng góc nhìn ở toàn bộ ảnh (trừ khi cố ý làm camera animation).
- Ở các ảnh xung quanh frame 25 và 35, bàn chân không xuyên sàn đáng kể.

Nếu xuất ra số ảnh không khớp, kiểm tra `Frame Start`, `Frame End`, đường dẫn đầu ra và việc render có bị gián đoạn hay không. Không nên đưa chuỗi thiếu frame vào Sequencer rồi bỏ qua lỗi.

## 7. Lưu ý về chất lượng và tổ chức file

Một folder ảnh độc lập giúp tránh trộn các frame cũ với frame mới. Nếu render lại sau khi sửa animation, nên xác định có ghi đè lên chuỗi cũ hay sử dụng thư mục đầu ra mới. Khi dùng JPEG, hiệu ứng trong suốt của model không được giữ như alpha độc lập; nếu cần ghép phông sau này, hãy chọn định dạng/pipeline hỗ trợ alpha thích hợp.

Cần lưu thêm tệp `.blend` sau render để giữ các tham số cuối. Nếu đang chuẩn bị dựng video trong file Blender khác, có thể tạo dự án mới để tránh thay đổi scene render gốc.

## 8. Bài thực hành và checkpoint

**Nhiệm vụ:** Render bộ image sequence 59 khung với 24 FPS, JPEG Quality 100 và lưu trong thư mục riêng. Chọn ngẫu nhiên một ảnh đầu, một ảnh giữa và một ảnh gần cuối để kiểm tra bằng mắt.

**Tiêu chí hoàn thành:** Thư mục chứa dãy ảnh liên tục; không có ảnh bị lỗi hoặc camera lệch; dự án `.blend` đã lưu được cấu hình cuối.

## 9. Câu hỏi ôn tập

### Câu 1

Trong ví dụ này, muốn render toàn bộ animation nên dùng phím tắt nào?

A. `F12`.  
B. `Alt + G`.  
C. `Ctrl + F12`.  
D. `Numpad 3`.

**Đáp án:** C. **Giải thích:** `Ctrl + F12` gọi Render Animation, còn `F12` render một ảnh của frame hiện hành.

### Câu 2

Với Frame Start = 1 và End = 59, số ảnh kỳ vọng nếu render thành công mọi frame là bao nhiêu?

A. 59.  
B. 60.  
C. 58.  
D. 295.

**Đáp án:** A. **Giải thích:** Dải 1–59 tính cả hai đầu chứa 59 khung hình.

### Câu 3

Phát biểu nào đúng về JPEG Quality 100?

A. Luôn giữ alpha channel.  
B. Có kích thước bằng PNG.  
C. Là định dạng video.  
D. Vẫn là JPEG nén mất dữ liệu, dù chất lượng được đặt ở mức cao.

**Đáp án:** D. **Giải thích:** Đặt 100 không biến JPEG thành định dạng lossless.

### Câu 4

Tại sao nên dùng thư mục `rendered_frames/` riêng?

A. Để kích hoạt IK tự động.  
B. Để tránh lẫn ảnh giữa các lần render và dễ nhập chuỗi vào trình dựng.  
C. Để robot có thêm xương.  
D. Để đổi vật liệu thành kim loại.

**Đáp án:** B. **Giải thích:** Tổ chức ảnh theo lượt render giúp kiểm tra đầy đủ và đảm bảo đúng thứ tự.

### Câu 5

Kiểm tra nào đặc biệt quan trọng trước khi nhập chuỗi ảnh vào Video Sequencer?

A. Tên collection phải bằng tiếng Anh.  
B. Xương đầu phải bị ẩn.  
C. Chuỗi file liên tục, đúng thứ tự và đủ số khung.  
D. Audio phải dài đúng 1 giờ.

**Đáp án:** C. **Giải thích:** Thiếu hoặc sai thứ tự frame sẽ gây giật hay phát sai chuyển động.

## 10. Tổng kết

Từ một vòng đi bộ 59 frame, Blender tạo một chuỗi JPEG có thể dựng lại thành video ở 24 FPS. Cần giữ nguyên frame count, thứ tự tên ảnh và đường dẫn rõ ràng để phần biên tập không phát sinh lỗi.
