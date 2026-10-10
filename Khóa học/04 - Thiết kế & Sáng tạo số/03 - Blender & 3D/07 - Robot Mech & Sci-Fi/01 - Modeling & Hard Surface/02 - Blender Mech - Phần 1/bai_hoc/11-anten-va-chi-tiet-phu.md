# Bài 11. Tạo antenna, khối phụ và tổ chức đối tượng

## 1. Tóm tắt và mục tiêu

Một chiếc antenna nhỏ, khung phụ và cảm biến bên hông làm đầu robot hoàn thiện hơn. Đây cũng là cơ hội luyện lại việc dựng hình bằng `Extrude` theo trục, lựa chọn thành phần liên kết và chuyển mesh từ object này sang object khác.

Mục tiêu: dựng antenna từ hình học đơn giản, tạo các vòng thu phóng tiết diện, tách/ghép object mà không làm mất kiểm soát modifier.

## 2. Tạo vành và khối gắn antenna

1. Thêm một Cube nhỏ hoặc sao chép mặt từ panel phù hợp.
2. Dùng `S`, `G` điều chỉnh thân đế theo ảnh tham chiếu.
3. Dùng `I` và `E` tạo lỗ hoặc bậc đế nếu thiết kế cần.
4. Có thể `Shift + D` để sao chép phần cảm biến/khung đầu từ hình học sẵn có.
5. Chọn object đích cuối cùng khi muốn `Ctrl + J` ghép phụ kiện vào nhóm chi tiết.

Đặt antenna ở vị trí ít va vào phần vây sau và không cắt ngang cụm mắt ở mặt trước.

## 3. Dựng thân antenna bằng Loop Cut và Extrude

Một quy trình hard-surface phổ biến:

1. Chọn khối làm thân antenna và vào Edit Mode.
2. Dùng `Ctrl + R` tạo vòng cắt để phân định vùng thân cần kéo dài.
3. Chọn các đỉnh/mặt đầu mút; xóa phần không cần giữ nếu đang tách khối.
4. Nhấn `E` để đùn theo trục chính của antenna; dùng `X`, `Y`, `Z` để khóa hướng.
5. Dùng `S` để thay đổi tiết diện, có thể `S → [trục] → 0` để làm phẳng đầu mút.
6. Tiếp tục `E`, `S` thêm một vài bậc để tạo thân–cổ–đầu antenna.
7. Dùng `F` bịt phần đầu mở nếu cấu trúc cần mặt nắp.

Không phải tất cả antenna đều thẳng tuyệt đối. Có thể dời một vài vòng cạnh để tạo dáng cong gấp theo bản thiết kế nhưng giữ đủ độ rõ ràng cho silhouette.

## 4. Separate và Join để tái sử dụng chi tiết

Khi muốn chuyển một phần mắt hoặc cảm biến sang nhóm phụ kiện:

1. Trong Edit Mode, di chuột lên thành phần và nhấn `L` để chọn toàn bộ mesh liên kết.
2. Nhấn `Shift + D` nhân bản.
3. Nhấn `P → Selection` để tách bản sao thành một object riêng.
4. Về Object Mode, chọn object được tách, rồi giữ `Shift` chọn object đích cuối cùng.
5. Nhấn `Ctrl + J` để ghép vào nhóm đích.
6. Kiểm tra modifier trên object sau Join và chỉnh vị trí hình học mới.

`Separate` tách object mới; `Join` gộp object hiện có. Hai lệnh này không tạo vật liệu hay rig tự động.

## 5. Hoàn thiện bề mặt phụ kiện

Chọn các cạnh kim loại quá sắc và tạo vát nhẹ. Khi chi tiết bị tối bất thường sau tách/đùn, kiểm tra Face Orientation và `Shift + N`. Có thể dùng `Shade Smooth` cho đoạn tròn của antenna hoặc đầu cảm biến, giữ các mảng giáp chính trông rõ cạnh.

## 6. Thực hành và tổng kết

**Nhiệm vụ:** Dựng một antenna nhiều bậc bằng Extrude; tạo ít nhất một đế gắn; dùng `P → Selection` và `Ctrl + J` để tái sử dụng một chi tiết phụ.

**Kiểm tra:** Antenna không xuyên head mesh sai cách; modifier của đối tượng sau Join đúng mục đích; các mặt đầu mút không bị rỗng nếu thiết kế cần bịt kín.

**Ghi nhớ:** Phối hợp Extrude, Separate, Join là kỹ năng cốt lõi để làm robot có nhiều chi tiết liên kết mà vẫn chỉnh sửa được.

## 7. Câu hỏi ôn tập

### Câu 1

Lệnh nào tách phần mesh đang chọn thành object riêng trong Edit Mode?

A. Ctrl + J  
B. Shift + N  
C. P → Selection  
D. Ctrl + R  

**Đáp án:** C

**Giải thích:** Separate → Selection tạo object độc lập từ phần mesh đã chọn.

### Câu 2

Muốn Join bản sao vào nhóm phụ kiện, nên chọn object nào sau cùng?

A. Object mục tiêu nhận modifier và dữ liệu active  
B. Object sẽ xóa  
C. Ảnh Background  
D. Camera bất kỳ  

**Đáp án:** A

**Giải thích:** Object active là đích khi Join và quyết định một số thuộc tính còn lại.

### Câu 3

Chuỗi nào phù hợp dựng thân antenna nhiều bậc?

A. Chỉ đổi màu  
B. Lặp Extrude và Scale theo các tiết diện  
C. Chỉ xóa mặt  
D. Chỉ bật Face Orientation  

**Đáp án:** B

**Giải thích:** Extrude kéo dài và Scale làm thay đổi tiết diện để tạo bậc.

### Câu 4

Vì sao cần dùng Fill (F) với đầu antenna nếu thiết kế yêu cầu?

A. Để thêm đèn  
B. Để tăng âm thanh  
C. Để tự quay camera  
D. Để bịt một biên mở thành mặt  

**Đáp án:** D

**Giải thích:** Fill tạo mặt trên những đỉnh/cạnh biên phù hợp.

### Câu 5

Nếu sau Join, phụ kiện chịu Mirror không mong muốn, nên kiểm tra gì?

A. Số keyframe  
B. HDRI 1K  
C. Modifier của object active sau Join  
D. Thời lượng video  

**Đáp án:** C

**Giải thích:** Join có thể khiến hình học mới chịu bộ modifier của object được giữ làm active.
