# Bài 02 — Tạo Flash sáng nhanh bằng Single Burst

## 1. Tóm tắt

Flash là lớp xuất hiện gần như tức thì tại vị trí va chạm. Để tạo cảm giác bùng sáng, dùng **một hạt sống rất ngắn**, blending dạng **Additive**, kích thước giảm dần và màu có độ sáng phù hợp.

## 2. Mục tiêu học tập

- Cấu hình Flash có lifetime ngắn và không di chuyển.
- Phân biệt phép **Override** và **Multiply** khi nhiều block điều khiển cùng thuộc tính.
- Tạo một thuộc tính màu có thể chỉnh từ Inspector.
- Điều khiển độ sáng và độ mờ bằng đường cong theo lifetime.

## 3. Cấu hình Flash

| Thuộc tính | Giá trị khởi đầu | Vai trò |
| --- | --- | --- |
| Spawn | `Single Burst`, Count = `1` | Sinh một chớp sáng |
| Velocity | Không đặt | Hạt đứng yên |
| Lifetime | `0.102` giây | Cực ngắn |
| Blend mode | `Additive` | Tăng cảm giác phát sáng |
| Set Size | `4` | Kích thước gốc thử nghiệm |
| Size Over Life | Từ `1` về `0`, composition = `Multiply` | Co dần về 0 |
| Color | Vàng/cam, có thể chỉnh | Sắc độ của tác động |

Những giá trị này là **điểm xuất phát của ví dụ**. Kích thước phù hợp thực tế còn phụ thuộc đơn vị thế giới, camera và độ lớn đối tượng.

## 4. Điều khiển kích thước theo thời gian

Đặt `Set Size` trước block `Set Size over Life`. Nếu block sau đang dùng chế độ ghi đè, giá trị `4` ban đầu sẽ không còn tác dụng. Chuyển **Composition** của block theo lifetime sang **Multiply**. Khi đó có thể hình dung:

$$
S(t) = S_0 \cdot f(t), \quad f(0)=1,\ f(1)=0
$$

Trong đó $t$ là tỷ lệ vòng đời hạt từ 0 đến 1; $S_0$ là kích thước gốc. Với $S_0=4$, hạt sẽ thu từ kích thước 4 về 0 theo đường cong chọn.

## 5. Điều khiển màu và alpha

Tạo **Color Property** trên Blackboard, đặt tên như `FlashColor` và nối tới block `Set Color`. Chọn màu vàng cam thay vì màu trắng nếu muốn cảm giác đạn/năng lượng nóng. Khi có thêm block `Set Color over Life`, đổi composition sang **Multiply** để cả màu gốc và đường cong cùng có tác dụng.

Điều chỉnh gradient theo hướng **sáng ở đầu → mờ dần về cuối**. Nếu Flash bất ngờ biến mất, kiểm tra màu gốc có bị đặt thành đen hoặc alpha bằng 0 hay không. Với chế độ additive, màu và cường độ ảnh hưởng đáng kể đến độ sáng nhìn thấy.

## 6. Kiểm tra và sửa lỗi

- Flash trông như hình đứng yên lâu: giảm lifetime hoặc kiểm tra playback.
- Flash không nhỏ dần: block `Size over Life` có thể đang override.
- Đổi màu ở Inspector mà không thấy tác dụng: kiểm tra liên kết Property và composition của color blocks.
- Flash quá sáng: hạ color intensity, alpha hoặc kích thước, không chỉ thay texture.

## 7. Thực hành

Tạo hai biến thể Flash: **vàng/cam** và **xanh lam** với cùng lifecycle. So sánh độ rõ khi đặt trước nền tối và nền sáng; chỉ thay color/intensity, giữ các block còn lại ổn định.

## 8. Câu hỏi ôn tập

### Câu 1

Lý do chính dùng blend mode `Additive` cho Flash là gì?

A. Làm hạt di chuyển nhanh  
B. Tạo cảm giác sáng mạnh  
C. Tự sinh decal  
D. Khóa hạt vào mesh

**Đáp án:** B. **Giải thích:** Additive cộng đóng góp màu lên hình nền, phù hợp điểm sáng lóe.

### Câu 2

`Set Size = 4` nhưng Flash không đổi kích thước. Vì sao?

A. Output luôn chỉ render 1 px  
B. Lifetime quá dài  
C. Do không có decal  
D. Block Size Over Life ghi đè kích thước trước đó

**Đáp án:** D. **Giải thích:** Chế độ override của block sau có thể phủ giá trị đặt trước.

### Câu 3

Khi muốn kích thước gốc 4 co theo hệ số từ 1 đến 0, chọn composition nào?

A. Multiply  
B. Override  
C. Replace Texture  
D. Disable Spawn

**Đáp án:** A. **Giải thích:** Multiply giữ kích thước gốc làm nền và nhân với hệ số thay đổi theo lifetime.

### Câu 4

Flash không còn hiển thị khi gắn thuộc tính màu. Điều gì cần kiểm tra?

A. Radius của Sparks  
B. X rotation của Decal  
C. Màu và alpha gốc có đang bằng 0 không  
D. Số hạt của Cross

**Đáp án:** C. **Giải thích:** Màu đen hoặc alpha bằng 0 có thể triệt tiêu kết quả màu.

### Câu 5

Đâu là lựa chọn hợp lý nhất để Flash mang tính chất va chạm tức thì?

A. Hàng trăm hạt tồn tại vô hạn  
B. Một hạt với lifetime rất ngắn  
C. Constant Spawn Rate phát liên tục  
D. Một decal sống 3 giây thay cho Flash

**Đáp án:** B. **Giải thích:** Flash là điểm lóe sáng tại thời điểm va chạm, không phải vệt kéo dài.

## 9. Tổng kết

Flash được định hình bởi ba yếu tố: **thời gian tồn tại cực ngắn, độ sáng rõ và đường cong thu nhỏ/mờ dần**. Tạo nhóm và đặt tên `Flash` để dễ quản lý khi thêm lớp hiệu ứng tiếp theo.
