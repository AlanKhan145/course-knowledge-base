# Điều khiển vòng đời, độ dày và màu sắc của Trails

> **Loại:** Bài học lý thuyết kết hợp thực hành

## 1. Tóm tắt

Vệt sáng thuyết phục cần có độ dày đủ mảnh, giảm dần khi già đi và màu sắc thống nhất. Bài này chuyển các thiết lập rời rạc thành thuộc tính Inspector và hoàn thiện phần Output của trails.

## 2. Mục tiêu học tập

- Dùng property để điều chỉnh Lifetime của hạt/vệt.
- Thiết lập khoảng kích thước ngẫu nhiên theo OrbSize.
- Định cấu hình Size over Life và màu nhất quán.

## 3. Điều khiển Lifetime bằng thuộc tính

Tạo `TrailLifetime` kiểu `Float`, bật `Exposed`, giá trị mặc định **1**. Dùng property này để điều khiển khoảng Lifetime trong Initialize bằng các node `Multiply` cho giới hạn thấp và cao theo cách trình bày trong buổi thực hành.

Nếu dùng giới hạn ngẫu nhiên, cách diễn đạt tổng quát là:

$$
L \in [L_{\min},L_{\max}], \quad
L_{\min}=a\,\text{TrailLifetime},\quad
L_{\max}=b\,\text{TrailLifetime}
$$

Các hệ số `a`, `b` được điều chỉnh tùy hình ảnh mong muốn; tài liệu minh họa lấy `1` làm mốc property. Vòng đời ngắn làm vệt tắt nhanh; dài khiến đường kéo dài và dễ chồng nhau.

## 4. Lấy Lifetime của hạt nguồn cho trail

Trong hệ thống có hạt nguồn tạo trail hoặc strip, tránh đặt một tuổi thọ độc lập không ăn khớp với hạt nguồn nếu đồ thị cho phép liên kết. Dùng dữ liệu **Lifetime** của hạt để điều khiển tuổi thọ của vệt liên quan.

Điểm cần quan sát là tính liên tục: vệt cần xuất hiện cùng hạt nguồn, chuyển động theo quỹ đạo của hạt và biến mất hợp lý thay vì còn tồn tại vô hạn hoặc bị ngắt đột ngột.

## 5. Độ dày và Size over Life

Trong `Output Particle Strip` (hoặc output tương ứng với trail ở phiên bản đang dùng), tạo khoảng kích thước ngẫu nhiên:

$$
w_{\min}=0.01\,\text{OrbSize},\qquad
w_{\max}=0.02\,\text{OrbSize}
$$

Dùng `Random Number` với hai đầu vào trên và nối đến kích thước của vệt. Đây là bề dày khá mảnh so với bán kính cầu.

Bật điều khiển **Size over Life** để vệt **thuôn từ lớn đến nhỏ theo vòng đời**, thay vì giữ độ dày như nhau. Khi có nhiều block cùng điều khiển size, quan sát chế độ **Composition**: ở ví dụ, chuyển sang kiểu kết hợp thay vì ghi đè toàn bộ giá trị trước đó (giao diện có thể hiển thị chế độ cộng khác nhau theo phiên bản). Nếu ghi đè sai, kích thước ngẫu nhiên hoặc thuộc tính `OrbSize` sẽ mất tác dụng.

## 6. Màu trail và cách tổ chức graph

Tạo `OrbColor` kiểu `Color`, bật Exposed. Bài thực hành dùng **màu xanh dương** ban đầu với cường độ sáng tăng nhẹ. Thay các cấu hình gradient không cần thiết bằng **Set Color** để toàn bộ lớp trail dùng cùng property.

Chọn nhóm node phục vụ trail, nhấp chuột phải tạo **Group**, đặt tên `Trails`. Việc nhóm node không thay đổi logic nhưng giảm khó khăn khi graph có thêm hai hệ hạt khác.

**Không nên nhầm:** giảm kích thước theo tuổi là thay đổi *hình học hiển thị*; thay đổi alpha theo tuổi là *độ trong suốt*. Hai hiệu ứng này có thể phối hợp nhưng không thay thế nhau.

## 7. Thực hành ngắn

Tạo `TrailLifetime = 1`, `OrbColor = xanh dương`, dải độ dày `0.01–0.02 × OrbSize`. Kiểm tra vệt thuôn nhỏ theo tuổi. Thay đổi `OrbSize`, `TrailLifetime` và `OrbColor` trong Inspector rồi lưu một cấu hình có đường vệt rõ nhưng không quá dày.

## 8. Lỗi thường gặp và cách xử lý

- **Vệt biến mất quá nhanh:** tăng Lifetime hoặc kiểm tra đầu vào giới hạn tuổi thọ.
- **Độ dày bị cố định:** xem lại Composition của các block Size.
- **Màu không cập nhật:** xem Set Color có đang nhận property và block màu khác có ghi đè không.
- **Vệt quá rối:** giảm Spawn Rate/Lifetime trước khi thêm nhiều hạt hơn.

## 9. Câu hỏi ôn tập

### Câu 1
Size over Life trong bài giúp làm gì?

A. Cho vệt thuôn dần theo tuổi  
B. Tạo collider  
C. Thay Camera  
D. Sinh thêm package  

**Đáp án:** A
**Giải thích:** Độ dày giảm dần khi hạt già đi khiến vệt mềm mại.

### Câu 2
Độ dày ngẫu nhiên minh họa nằm trong khoảng nào?

A. 100–200 lần size  
B. 0.01–0.02 lần OrbSize  
C. 1–2 lần OrbSize  
D. 10–20 lần OrbSize  

**Đáp án:** B
**Giải thích:** Buổi thực hành dùng khoảng rất nhỏ so với OrbSize.

### Câu 3
Vì sao phải chú ý Composition của các block Size?

A. Vì thay đổi tên Scene  
B. Vì một block có thể ghi đè kích thước đã thiết lập  
C. Vì quyết định FPS màn hình  
D. Vì liên quan âm thanh  

**Đáp án:** B
**Giải thích:** Cách kết hợp block quyết định giá trị size trước đó còn tác dụng hay không.

### Câu 4
Muốn đổi màu trail ngay trong Inspector nên dùng gì?

A. Đổi texture hệ điều hành  
B. Thay vật liệu nhân vật  
C. Color property Exposed nối vào Set Color  
D. Chỉ tăng Lifetime  

**Đáp án:** C
**Giải thích:** Color Exposed là giao diện điều chỉnh màu tập trung.

## 10. Tổng kết

Lớp trail đã có tốc độ sinh, bán kính, chuyển động, vòng đời, kích thước và màu được tham số hóa. Tiếp theo, bổ sung xung sáng định kỳ để năng lượng có nhịp chuyển động rõ ràng.
