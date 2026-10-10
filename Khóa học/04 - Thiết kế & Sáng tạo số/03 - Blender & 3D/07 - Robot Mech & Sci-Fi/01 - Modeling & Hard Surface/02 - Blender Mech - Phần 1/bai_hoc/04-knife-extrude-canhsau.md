# Bài 04. Dùng Knife và Extrude để dựng vây giáp phía sau

## 1. Tóm tắt và mục tiêu

Không phải chi tiết nào cũng bắt đầu bằng một object mới. Một phần vây giáp nhô ở gáy có thể hình thành bằng cách cắt thêm mặt trên khối đầu, sau đó `Extrude` trực tiếp từ mặt vừa tạo.

Bài này rèn ba thao tác: cắt mesh xuyên qua bằng `Knife`, đùn nhiều cấp và vát vùng đầu mút.

## 2. Xác định vị trí vùng cần cắt

Chuyển về Back View bằng `Ctrl + Numpad 1`, bật Wireframe và đối chiếu đường viền vây giáp. Đường cắt nên tạo một vùng mặt khép kín và đủ rộng để chọn bằng Face Select. Kiểm tra hình chiếu Top trước khi đùn để tránh nhô sai hướng.

## 3. Sử dụng Knife xuyên mesh

1. `Tab` để vào Edit Mode và nhấn `K` để gọi Knife.
2. Chuyển sang Back View để xác định điểm bắt đầu/kết thúc đường cắt.
3. Khi đang sử dụng Knife, dùng tùy chọn **Cut Through** (`C` trong thao tác của bài) để vết cắt đi qua các mặt phía sau; xem trạng thái ở thanh hướng dẫn của Blender.
4. Nếu cần khóa hướng cắt, dùng tùy chọn giới hạn góc/hướng tương ứng (bài thực hành sử dụng `Z` để khóa phương thẳng đứng trong phiên bản giao diện được minh họa).
5. Click các điểm tạo đường cắt và nhấn `Enter` xác nhận.
6. Quay viewport để bảo đảm các mặt cần thiết thực sự đã bị chia.

Phím Knife có thể khác cách hiển thị thông tin giữa các phiên bản Blender. Cần quan sát hướng dẫn hiện ở thanh trạng thái của công cụ, thay vì chỉ ghi nhớ một chữ cái.

## 4. Đùn khối giáp theo nhiều tầng

1. Bật Face Select bằng `3` ở hàng số trên.
2. Chọn mặt mới cắt tại phần gáy.
3. Nhấn `E` để đùn lớp đầu tiên, đặt theo chiều sâu của ảnh Top/Side.
4. Nhấn `E` lần nữa để tạo tầng nhô thứ hai.
5. Quay lại Vertex Select, khoanh hàng đỉnh đầu mút và di chuyển `G → Z` để tạo độ nghiêng.
6. Chọn các cạnh cần làm mềm và dùng `Ctrl + B` để vát; điều chỉnh số segments bằng bánh xe chuột.

Hai lần Extrude tạo được một đường gấp rõ ràng, giúp giáp sau trông có cấu tạo cơ khí. Không nên đùn quá xa nếu ảnh tham chiếu không thể hiện độ nhô lớn.

## 5. Tạo rãnh và chi tiết chìm

Với một hoặc vài mặt của phần gáy, dùng `I` để tạo một mặt nằm trong (Inset), sau đó chọn mặt trong và đùn `E` vào phía trong mesh để tạo hốc. Độ sâu hốc chỉ cần đủ để tạo bóng đổ; hốc sâu quá làm phần giáp mỏng hoặc xuyên cấu trúc.

## 6. Kiểm tra, thực hành và tổng kết

**Thực hành:** Dựng phần vây/khung gáy từ chính mesh đầu; tạo tối thiểu hai bậc đùn và một rãnh chìm có viền.

**Checkpoint:** Các mặt mới có biên rõ ràng; khu vực giữa vẫn đối xứng; chi tiết không xuyên sang nửa gương sai cách.

**Lỗi điển hình:** Knife chỉ cắt mặt trước khi cần cắt xuyên, hoặc đã `Extrude` nhưng chưa xác nhận khiến thao tác sau di chuyển nhầm vùng chọn.

**Ghi nhớ:** Knife tạo topology cho vùng chi tiết; Extrude tạo khối; Inset tạo viền/rãnh.

## 7. Câu hỏi ôn tập

### Câu 1

Công cụ nào phù hợp để tạo đường cắt tùy ý trên vùng gáy?

A. Knife (K)  
B. Scale (S)  
C. Join (Ctrl + J)  
D. Shade Smooth  

**Đáp án:** A

**Giải thích:** Knife cho phép xác định đường cắt theo các điểm trên mesh.

### Câu 2

Vì sao cần bật Cut Through khi đường cắt phải chạy qua nhiều lớp mặt?

A. Để tăng kim loại  
B. Để tạo animation  
C. Để cả mặt phía sau cũng được cắt  
D. Để giảm cỡ ảnh  

**Đáp án:** C

**Giải thích:** Không bật Cut Through có thể chỉ chia các mặt gần người quan sát.

### Câu 3

Sau khi cắt ra mặt riêng biệt, lệnh nào tạo phần vây nhô khỏi đầu?

A. I  
B. E  
C. F  
D. Shift + N  

**Đáp án:** B

**Giải thích:** Extrude (E) kéo mặt thành phần thể tích mới.

### Câu 4

Cặp thao tác nào tạo một rãnh lõm có viền rõ ràng?

A. R rồi G  
B. Ctrl + J rồi S  
C. G rồi Shift + A  
D. I rồi E đùn vào trong  

**Đáp án:** D

**Giải thích:** Inset tạo vành trong, Extrude âm tạo chiều sâu cho rãnh.

### Câu 5

Vì sao cần kiểm tra vùng giáp trong Top và Side View?

A. Để kiểm tra độ nhô và hướng đùn  
B. Để thay thế việc lưu file  
C. Để tự động gán bone  
D. Để làm sáng vật liệu  

**Đáp án:** A

**Giải thích:** Một góc nhìn riêng lẻ không đủ xác nhận chi tiết 3D được đặt đúng chiều sâu.
