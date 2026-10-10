# Bài 02 — Tạo cụm cổ xoay độc lập từ hình học có sẵn

## 1. Tóm tắt

Cổ robot không chỉ là một khối nối đầu với thân: một phần của nó cần có cấu trúc như **bán khớp xoay**, với vòng cung bao quanh trục. Có thể dựng nhanh phần này bằng cách nhân bản gối đỡ đã có, tách thành `Object` riêng, lật hướng và căn khít các vòng tròn trong hình nhìn bên.

## 2. Mục tiêu học tập

- Nhân bản một phần mesh đang có mà không làm thay đổi chi tiết gốc.
- Dùng `P > Selection` để biến phần được chọn thành đối tượng độc lập.
- Xoay phần mới chính xác `180°` quanh trục X và căn theo hình nhìn trước/bên.
- Phân biệt **cùng Object** với **cùng mesh liên thông**.
- Dùng `Hide/Unhide` để xử lý các mặt khó chọn ở vị trí khuất.

## 3. Lý do cần tách cụm cổ

Khi robot cúi/ngẩng hoặc xoay đầu trong animation, các lớp ốp và chi tiết khớp có thể cần dịch chuyển khác nhau. Nếu ngay từ giai đoạn modeling đã giữ phần cổ chính thành đối tượng riêng, việc bố trí pivot và rigging về sau sẽ rõ ràng hơn. Trong bài này chúng ta mới chuẩn bị cấu trúc hình học; **chưa tạo chuyển động thật**.

`Shift + D` trong `Edit Mode` tạo một bản sao hình học **bên trong cùng object**. Lệnh `P > Selection` mới tách phần đã chọn thành object khác. Ngược lại, `Ctrl + J` gộp nhiều object thành một object, không tự hàn các đỉnh của chúng.

## 4. Nhân bản và tách gối đỡ

1. Chọn đối tượng đang chứa phần gối đỡ, `Tab` vào `Edit Mode`.
2. `Alt + A` bỏ chọn, đặt con trỏ chuột lên phần gối đỡ cần tái sử dụng rồi nhấn `L`.
3. Nhấn `Shift + D`, sau đó `Z` để dời bản sao xuống dưới gối đỡ cũ.
4. Khi bản sao vẫn đang được chọn, nhấn `P > Selection`.
5. `Tab` về `Object Mode`, chọn riêng bản sao mới rồi `Tab` vào `Edit Mode`.

**Checkpoint:** Click vào bản sao ở `Object Mode` không còn chọn đồng thời phần gối đỡ gốc. Nếu chọn cả hai, rất có thể thao tác `Separate` chưa được thực hiện trên đúng lựa chọn.

## 5. Lật và căn bán khớp

1. Ở `Edit Mode` của đối tượng mới, nhấn `A` chọn toàn bộ hình học.
2. Dùng `R X 180` để lật một nửa vòng khớp qua trục X.
3. Dùng `G Z` đặt vòng mới xuống vùng cổ.
4. Nhấn `Numpad 3` để xem từ bên và chuyển `Z > Wireframe`.
5. Điều chỉnh vị trí sao cho **hai cung tròn của gối đỡ và khớp mới tương ứng nhau** trong mặt bên.
6. Nhấn `Numpad 1` để kiểm tra hình trước; dùng `G X` điều chỉnh chiều ngang nếu khớp bị dính vào tâm đối xứng.

Việc hai cung tròn trông khớp nhau ở góc nhìn bên đặc biệt quan trọng: nếu các bán kính lệch hoặc tâm bị chênh, chuyển động xoay giả định sẽ lộ ra khe sai hình học. Không cần chọn kích thước tuyệt đối khi chưa có bản vẽ; cần ưu tiên quan hệ đúng giữa các bộ phận.

## 6. Xử lý Mirror Clipping và phần bị ẩn

Nếu `Mirror Modifier` đang bật và thao tác kéo khớp sang trục X khiến một số đỉnh bị kẹt:

- Tạm tắt `Clipping`.
- Chọn đúng hàng đỉnh bằng `B` trong `Wireframe`, rồi dùng `G X` đưa chúng ra vị trí mong muốn.
- Bật lại `Clipping` khi khớp đã tách khỏi vùng bị giữ.

Để đóng các mặt ở nơi vỏ đầu che khuất:

1. `Tab` về `Object Mode`.
2. Chọn **đối tượng đầu** và nhấn `H` để tạm ẩn.
3. Chọn đối tượng cổ, `Tab` vào `Edit Mode`.
4. Chọn các đỉnh tạo thành đường biên mặt hở rồi nhấn `F`.
5. Có thể dùng `Alt + Click` lên cạnh để chọn vòng nếu topology cho phép, sau đó `F` đóng mặt tương ứng.
6. `Tab` về `Object Mode` và `Alt + H` để hiện các đối tượng vừa ẩn.

Ẩn đối tượng giúp thao tác chính xác, không xóa chúng và không thay đổi dữ liệu hình học.

## 7. Chỉnh chiều cao và gắn điểm tiếp xúc

Khi đã hiện lại phần đầu, vào `Edit Mode` của cổ, dùng `B` chọn hàng đỉnh ở đầu khớp và `G Z` nâng hoặc hạ cho ăn khớp với vị trí dự kiến. Chọn các hàng đỉnh khác nếu cần rút chiều dài của bán khớp xuống gần trục nối. Luôn đổi giữa `Front View` và `Side View` trước khi chốt.

Lưu file bằng `Ctrl + S`. Nên đặt tên object rõ ràng, ví dụ `NECK_ROTATING_HOUSING`.

## 8. Checkpoint và sửa lỗi

- Phần cổ mới là một `Object` độc lập.
- Hai bán khớp có cung tròn và vị trí trục tương thích ở góc nhìn bên.
- Các mặt cần đóng không để lỗ không chủ ý; vùng sẽ dùng làm khe xoay không bị `F` che nhầm.
- `Clipping` đã được bật lại nếu còn cần đối xứng hóa.

| Vấn đề | Cách kiểm tra và sửa |
| --- | --- |
| Bản sao vẫn chọn cùng phần đầu | Kiểm tra `P > Selection` được gọi trong `Edit Mode` |
| Xoay lệch hướng mong muốn | Dùng `R X 180` thay vì xoay tự do, kiểm tra trục local/world |
| Mặt trong khó chọn | Ẩn vỏ đầu với `H` rồi chọn đường biên cổ |
| Cụm cổ xoay giả định bị hở lớn | Căn lại tâm và chiều cao ở `Side View` |
| Mesh bị kéo dính đường giữa | Kiểm tra `Clipping` của `Mirror Modifier` |

## 9. Thực hành ngắn

Tạo một bản sao dự phòng của bán khớp trong file thực hành rồi dùng phép di chuyển/đổi góc nhìn để so sánh sự trùng khớp của hai vòng cung. Không cần tạo rig; chỉ cần chứng minh được trục xoay dự kiến có hình học phù hợp.

## 10. Câu hỏi ôn tập

**Câu 1.** Vì sao dùng `P > Selection` sau khi nhân bản phần khớp?

A. Để phần sao trở thành đối tượng riêng.  
B. Để tự tạo vật liệu.  
C. Để chuyển sang Sculpt Mode.  
D. Để gắn Armature tự động.

**Đáp án: A.** `Shift + D` trong `Edit Mode` chỉ nhân hình học; `Separate` mới tạo object mới.

**Câu 2.** Trong bài này, góc nhìn nào hữu ích nhất khi kiểm tra hai nửa vòng khớp có cùng tâm?

A. Camera View.  
B. Top View duy nhất.  
C. Chế độ Material Preview.  
D. Side View kết hợp Wireframe.

**Đáp án: D.** Hình nhìn bên bộc lộ bán kính và tâm các cung ở mặt cắt khớp.

**Câu 3.** Phím nào cho phép tạm ẩn đối tượng đầu trong `Object Mode`?

A. `F`.  
B. `H`.  
C. `I`.  
D. `L`.

**Đáp án: B.** `H` ẩn đối tượng được chọn, `Alt + H` hiện lại.

**Câu 4.** Điều nào đúng về `Ctrl + J`?

A. Tự hàn mọi đỉnh trùng nhau.  
B. Tự tạo vòng xoay có rig.  
C. Gộp các Object, không nhất thiết nối topology.  
D. Tự xóa modifier của mọi đối tượng.

**Đáp án: C.** `Join` gộp đối tượng, nhưng các phần mesh trong đó có thể vẫn là những đảo hình học rời nhau.

**Câu 5.** Khi một số đỉnh bị kẹt vào trục đối xứng, nên làm gì?

A. Tạm tắt `Clipping` và điều chỉnh lại đúng nhóm đỉnh.  
B. Xóa toàn bộ đầu.  
C. Chỉ thêm nhiều polygon.  
D. Tăng `Shade Smooth`.

**Đáp án: A.** Đây là vấn đề ràng buộc chỉnh sửa, không phải vấn đề mật độ polygon hoặc shading.

## 11. Tổng kết

Điểm quan trọng nhất của bài này là **dựng khớp từ hình học có sẵn nhưng vẫn giữ quyền kiểm soát từng cụm**. Bán khớp được nhân bản, tách riêng, lật `180°`, căn trục và đóng đúng các mặt cần thiết; đó là nền tảng để lắp chi tiết cơ khí vào cổ.
