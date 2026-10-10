# Bài 01 — Khởi tạo khớp hông đối xứng bằng Mirror Modifier

**Loại:** Bài học kỹ thuật và thực hành Blender.  
**Thành phẩm:** Một cặp khớp hông tròn nằm hai bên thân robot, có các lớp hình học được đùn từ mesh vòng tròn.

## 1. Mục tiêu học tập

Kết thúc bài học, bạn có thể:

- Giải thích sự khác biệt giữa di chuyển mesh trong `Edit Mode` và di chuyển object trong `Object Mode` khi làm đối xứng.
- Khởi tạo khớp tròn, xoay và đùn hình theo các trục của robot.
- Sao chép `Mirror Modifier` và `Bevel Modifier` từ object đã được thiết lập.
- Kiểm tra khớp hông bằng ba góc nhìn trực giao và xử lý lỗi hiển thị `Normals`.

## 2. Bối cảnh mô hình hóa

Robot mech cần bộ phận trung gian giữa thân và chân. Với kiểu hard-surface, khớp hông thường được gợi hình bằng các trụ, vòng đệm và các lớp kim loại xếp nối tiếp. Dựng được một bên chưa đủ: hai bên cần đối xứng để cấu trúc nhìn cân bằng. Vì vậy, trước khi thêm chi tiết, ta cần kiểm soát **tọa độ của mesh**, **origin của object** và **mặt phẳng Mirror**.

Hãy chuẩn bị phần thân robot hoặc một khối đại diện cho thân; nếu có ảnh tham chiếu trước/bên, sử dụng nó để căn tỷ lệ. Bài này không giả định kích thước thực tế của mẫu.

## 3. Kiến thức cốt lõi

### 3.1. Object Origin và Mirror

`Object Origin` là mốc biến đổi của object. `Mirror Modifier` phản chiếu hình học qua mặt phẳng đi qua origin của object (nếu không chỉ định một `Mirror Object` khác). Để hông trái và hông phải xuất hiện ở hai phía của robot, hãy để origin ở tâm đối xứng, còn mesh của một khớp được đặt lệch sang bên.

Vì vậy, khi vừa thêm vòng tròn, chuyển vào `Edit Mode` **trước khi** dùng `G` để dịch vòng tròn theo trục X. Di chuyển mesh không kéo origin đi cùng.

### 3.2. Mirror và Bevel đảm nhận việc khác nhau

- `Mirror`: sao đối xứng hình học sang phía đối diện.
- `Bevel`: vát hoặc làm mềm cạnh để vật thể không giống các khối sắc cạnh hoàn toàn.

Khi có object khác đã thiết lập hai modifier, có thể dùng `Ctrl + L` → `Copy Modifiers` để tái sử dụng. Object nguồn phải là object **active** (thường là object được chọn cuối).

## 4. Thực hành: dựng trụ khớp hông

### 4.1. Đặt con trỏ và tạo vòng tròn

1. Chọn viewport 3D và nhấn `Shift + C` để đặt `3D Cursor` về gốc thế giới.
2. Dùng `Shift + A` → `Mesh` → `Circle` để thêm vòng tròn.
3. Tắt `Snapping` nếu đang bật, nhằm tránh điểm bị hút vào vị trí không mong muốn.
4. Nhấn `Tab` để vào `Edit Mode`. Dùng `G`, sau đó `X`, để dịch vòng tròn tới bên hông của robot. **Không dịch bằng Object Mode ở bước này.**
5. Nhấn `S` để thu kích thước vòng tròn theo độ lớn của bộ phận hông.
6. Nhấn `R`, `Y`, nhập `90`, `Enter` để đổi hướng mặt phẳng vòng tròn theo trục của khớp đang dựng.

**Checkpoint:** Vòng tròn nằm tại vị trí khớp bên hông, nhưng origin của object vẫn ở tâm robot.

### 4.2. Tạo cặp khớp đối xứng

1. Về `Object Mode` bằng `Tab`.
2. Chọn object vòng tròn mới, sau đó giữ `Shift` và chọn cuối cùng một object đã có `Mirror` và `Bevel` chuẩn.
3. Nhấn `Ctrl + L` → `Copy Modifiers`.
4. Kiểm tra stack modifier trên vòng tròn mới. Nếu đang dùng `Mirror` trục X và origin ở tâm, vòng tròn bên đối diện sẽ hiện ra.
5. Nếu không có object nguồn thích hợp, thêm trực tiếp `Mirror Modifier` và `Bevel Modifier` bằng bảng `Modifiers` và kiểm tra các thiết lập theo mẫu.

**Checkpoint:** Hai vòng tròn phân bố đối xứng trái/phải. Phần mới được dựng ở một bên đồng thời xuất hiện ở bên kia.

### 4.3. Đùn các tầng của khớp tròn

1. Trong `Edit Mode`, dùng góc trước `Numpad 1` để chỉnh lại kích thước/vị trí khớp bằng `G` và `S`.
2. Dùng `Z` → `Wireframe` để nhìn xuyên qua thân robot, đặt hình tròn vào khoảng thân–hông.
3. Chọn vòng đỉnh ở đầu khớp, nhấn `E`, ràng buộc theo `X` rồi kéo ra để tạo một đoạn trụ.
4. Tiếp tục `E` theo trục X, sau đó `S` để tạo lớp trụ có đường kính nhỏ hơn.
5. Nhìn từ bên (`Numpad 3`) và trên (`Numpad 7`) để kiểm tra độ dày, hướng trục và độ khớp với thân.
6. Thêm một số đoạn `E` và `S` ngắn nếu cần để có hình dáng nhiều tầng, với đầu ngoài nổi và đầu trong cắm vào thân.

Đừng cố thêm toàn bộ chi tiết trong một lượt. Một khớp hông dễ đọc hình khối thường có **trục chính**, **vai trục** và **đầu nối vào thân**. Từng lần extrude nên giúp phân biệt một vùng trong ba vùng đó.

### 4.4. Căn trục và sửa shading

1. Chuyển sang góc bên, dùng `Wireframe` để nhìn vòng tròn tham chiếu của khớp.
2. Trong `Object Mode`, dịch object vừa đủ theo trục Y để tâm trụ trùng với vị trí khớp dự kiến trong hình nhìn bên. Ở bước này, việc dịch object phục vụ căn chỉnh toàn cụm; sau khi dịch, kiểm tra lại **mặt phẳng Mirror** vì origin cũng có thể thay đổi.
3. Vào `Edit Mode`, chọn toàn bộ mesh bằng `A` và nhấn `Shift + N` để tính lại hướng pháp tuyến (`Normals`).
4. Quay về `Object Mode` rồi dùng `Shade Smooth` khi muốn bề mặt trụ trông mượt.
5. Quan sát khớp ở cả trước, bên, trên. Lưu file bằng `Ctrl + S`.

## 5. Kiểm tra kết quả

- [ ] Có cặp khớp bên trái và bên phải với hình dạng đối xứng.
- [ ] Trục khớp nhìn từ bên không bị lệch khỏi vùng nối dự kiến.
- [ ] Các tầng trụ có độ dày khác nhau, nhận diện được phần đi vào thân.
- [ ] `Mirror Modifier` và `Bevel Modifier` đang áp dụng như dự định.
- [ ] Bề mặt trụ không xuất hiện mảng tối bất thường vì normals.

## 6. Lỗi thường gặp

| Hiện tượng | Nguyên nhân thường gặp | Cách xử lý |
| --- | --- | --- |
| Khớp chỉ xuất hiện một bên | Chưa có `Mirror`, trục gương chưa đúng hoặc origin lệch | Kiểm tra modifier và origin |
| Hai khớp không đều vị trí | Dời cả object thay vì mesh khi cần giữ trục gương | Căn lại transform và vị trí mesh trong `Edit Mode` |
| Extrude lệch khỏi hướng khớp | Chưa ràng buộc theo trục X | Dùng `E` rồi `X` để kiểm soát hướng |
| Bề mặt loang tối | Pháp tuyến không thống nhất | Chọn mesh → `Shift + N`; xem lại mặt chồng |
| Khó quan sát vị trí cắm vào thân | Thân che mất hình học | Đổi sang `Wireframe` và kiểm tra nhiều góc |

## 7. Thực hành ngắn

Không thay đổi số lượng object, hãy tạo thêm một vòng vai trục lớn hơn ở gần thân và một đoạn cổ trục nhỏ hơn ở phía ngoài. Kiểm tra rằng cả hai bên đều thay đổi đồng thời nhờ `Mirror`.

## 8. Câu hỏi ôn tập

### Câu 1
Tại sao nên dịch vòng tròn trong `Edit Mode` khi chuẩn bị dùng `Mirror` qua tâm robot?

A. Để mesh có ít đỉnh hơn.  
B. Để `Bevel` tự bật.  
C. Để origin vẫn ở vị trí phục vụ đối xứng.  
D. Để đổi đơn vị đo.

**Đáp án:** C.  
**Giải thích:** Biến đổi geometry trong `Edit Mode` không kéo origin sang một bên.

### Câu 2
Muốn sao chép modifier từ một object đã cấu hình, object nào cần là object active khi dùng `Ctrl + L` → `Copy Modifiers`?

A. Object nguồn có modifier đúng.  
B. Object mới chưa có modifier.  
C. `3D Cursor`.  
D. Camera.

**Đáp án:** A.  
**Giải thích:** Blender lấy modifier từ đối tượng active và truyền sang các đối tượng được chọn khác.

### Câu 3
Muốn đùn khớp theo trục ngang X một cách nhất quán, chuỗi thao tác phù hợp là gì?

A. `S` rồi `Z`.  
B. `G` rồi `Y`.  
C. `R` rồi `X`.  
D. `E` rồi `X`.

**Đáp án:** D.  
**Giải thích:** `E` tạo hình học mới, `X` giới hạn chuyển động của lần extrude theo trục X.

### Câu 4
Lệnh nào được dùng để tính lại pháp tuyến mesh?

A. `Ctrl + J`.  
B. `Shift + N`.  
C. `Ctrl + R`.  
D. `Shift + D`.

**Đáp án:** B.  
**Giải thích:** `Shift + N` chạy `Recalculate Outside` cho các mặt đã chọn trong `Edit Mode`.

### Câu 5
Vì sao cần quan sát trụ khớp ở góc bên bên cạnh góc trước?

A. Để thay đổi màu vật liệu.  
B. Để tự tạo xương.  
C. Để phát hiện độ lệch tâm theo chiều sâu.  
D. Để tăng mật độ lưới.

**Đáp án:** C.  
**Giải thích:** Hình nhìn trước có thể che khuất sai lệch theo trục chiều sâu.

## 9. Tổng kết

Điểm cốt lõi của bài là **tạo hình một bên nhưng kiểm soát được đối xứng cả hai bên**. Việc đặt origin có chủ đích, đùn các lớp trục và kiểm tra normals sẽ tạo nền cho những chi tiết cơ khí tiếp theo.
