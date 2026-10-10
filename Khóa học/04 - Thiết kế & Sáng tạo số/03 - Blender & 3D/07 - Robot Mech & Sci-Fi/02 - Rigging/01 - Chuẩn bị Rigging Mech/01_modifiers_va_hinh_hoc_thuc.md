# Bài 01 — Quản lý Modifier và chuẩn hóa hình học robot Mech

**Loại bài:** Lesson  
**Chủ đề:** `Mirror Modifier`, `Solidify Modifier`, `Bevel Modifier`, Apply Modifier

## 1. Tóm tắt

Robot Mech thường được dựng đối xứng để tiết kiệm công sức: một bên chân, khớp hoặc mảng giáp được mô hình hóa, bên còn lại được tạo từ `Mirror Modifier`. Cách dựng này hiệu quả trong giai đoạn modeling, nhưng trước khi chia object cho rigging, hình học ở cả hai phía cần tồn tại độc lập. Bài này giúp quyết định modifier nào phải áp dụng và modifier nào nên giữ lại.

## 2. Mục tiêu học tập

Hoàn thành bài học, người học có thể:

- Giải thích sự khác nhau giữa **modifier đang hoạt động** và **hình học đã được Apply**.
- Áp dụng `Mirror Modifier` để hiện thực hóa bộ phận đối xứng.
- Nhận biết trường hợp cần Apply `Solidify Modifier` trên các mảng giáp.
- Lý giải vì sao nên giữ `Bevel Modifier` chưa Apply khi muốn hạn chế gia tăng số đa giác.
- Kiểm tra thứ tự modifier trước khi thực hiện thay đổi không dễ hoàn tác.

## 3. Vì sao phải chuẩn hóa modifier trước rigging?

Khi một chân chỉ tồn tại dưới dạng hình học gốc bên trái, còn chân phải do `Mirror Modifier` hiển thị, hai phía chưa thực sự là hai phần hình học độc lập theo ý nghĩa cần thiết để tách object. Rigging lại cần các cụm như khớp hông, đùi và bàn chân được điều khiển riêng. Vì vậy, phải xử lý `Mirror` **trước** khi tiến hành tách hình học trái/phải.

Áp dụng modifier (Apply) là chuyển tác động của modifier vào dữ liệu mesh hiện có. Sau đó, mở `Edit Mode` sẽ thấy các đỉnh, cạnh và mặt được tạo ra bởi modifier thay vì chỉ thấy kết quả hiển thị ở bên ngoài.

Cần phân biệt rõ:

| Modifier | Vai trò trên robot | Quyết định trong quy trình này |
| --- | --- | --- |
| `Mirror` | Tạo hình đối xứng hai bên | **Apply** trước khi tách các bộ phận cần chuyển động độc lập |
| `Solidify` | Tạo độ dày cho giáp hoặc bề mặt mỏng | **Apply** trên mảng giáp cần độ dày là hình học thực |
| `Bevel` | Bo cạnh để bắt sáng, giảm cảm giác sắc nhọn | **Giữ lại** dưới dạng modifier nếu chưa cần đưa cạnh bo vào mesh |

Đây là lựa chọn phù hợp với mô hình đang chuẩn bị trong khóa học, không phải quy tắc bắt buộc cho mọi dự án Blender.

## 4. Áp dụng Mirror Modifier

### 4.1. Xác định object cần xử lý

1. Chọn object có hình học đối xứng, chẳng hạn một phần đầu hoặc phần chân robot.
2. Trong `Properties Editor`, mở tab `Modifiers` (biểu tượng cờ lê).
3. Tìm `Mirror Modifier` trong modifier stack.
4. Kiểm tra mô hình đang hiển thị đủ hai phía và không có khoảng hở bất thường ở đường đối xứng.

### 4.2. Apply và kiểm tra kết quả

1. Chuyển sang `Object Mode` nếu đang ở `Edit Mode`.
2. Mở menu của `Mirror Modifier` và chọn **Apply**.
3. Nhấn `Tab` để vào `Edit Mode`.
4. Quan sát phần hình học trước đây do Mirror tạo ra. Phía đối xứng giờ phải có đỉnh/cạnh/mặt có thể chọn được.
5. Trở về `Object Mode` và lặp lại cho các cụm chân, giáp, khớp còn sử dụng Mirror.

Trong một số cấu hình Blender, có thể trỏ chuột vào modifier rồi dùng `Ctrl + A` để Apply; thao tác qua **menu của modifier** dễ xác định hơn khi keymap khác nhau.

## 5. Xử lý Solidify và Bevel đúng thứ tự

Mảng giáp của robot có thể sử dụng cả `Solidify`, `Mirror` và `Bevel`. Khi muốn giữ độ dày giáp trong mesh nhưng tiếp tục điều chỉnh cạnh bo, có thể Apply những modifier tạo hình học cần thiết và giữ `Bevel`.

Thứ tự modifier ảnh hưởng trực tiếp đến kết quả. Nếu `Mirror` nằm dưới modifier khác, việc Apply riêng Mirror có thể làm thay đổi hình dáng hoặc kết quả của stack. Vì thế, trước và sau khi Apply, cần đối chiếu cả góc nhìn `Solid` lẫn `Rendered`.

Quy trình kiểm tra:

1. Mở stack của mảng giáp.
2. Quan sát thứ tự `Mirror`, `Solidify`, `Bevel` thực tế.
3. Apply `Mirror` và `Solidify` theo trạng thái phù hợp của mô hình, **kiểm tra kết quả sau từng bước**.
4. Để `Bevel` tiếp tục tồn tại nếu mục tiêu là giữ khả năng chỉnh cạnh bo và tránh gia tăng mesh không cần thiết.
5. Xác nhận không có bề mặt đảo chiều, độ dày sai hoặc cạnh bo thay đổi ngoài ý muốn.

**Lưu ý:** Không áp dụng máy móc modifier nằm dưới một modifier khác nếu chưa kiểm tra, vì các modifier không luôn giao hoán với nhau.

## 6. Lỗi thường gặp và cách sửa

| Hiện tượng | Nguyên nhân có thể | Cách xử lý |
| --- | --- | --- |
| Chưa tách được hai bên chân | Mirror chưa Apply, phía còn lại chưa thành mesh thực | Apply Mirror rồi kiểm tra Edit Mode |
| Model tăng mật độ polygon mạnh | Apply Bevel sớm khiến cạnh bo thành hình học thực | Giữ Bevel chưa Apply nếu không có yêu cầu cụ thể |
| Giáp đổi dáng sau Apply | Thứ tự stack hoặc tác động tương hỗ của modifier | Quay lại bản sao, thử xử lý từng modifier và so sánh |
| Phần đối xứng có khe | Vị trí trục Mirror/thiết lập nối đỉnh không phù hợp | Kiểm tra hình học gần đường đối xứng trước khi Apply |

## 7. Thực hành ngắn

Trên bản sao file robot Mech, chọn một object ở đầu và một object ở chân có `Mirror Modifier`. Apply Mirror, vào `Edit Mode` để xác nhận cả hai bên trở thành mesh thực, rồi ghi lại modifier còn lại. Nếu mảng giáp có `Solidify`, áp dụng sau khi đối chiếu hình dáng; giữ `Bevel` để điều chỉnh cạnh bo về sau. Lưu tệp bằng tên riêng để dễ so sánh với bản gốc.

## 8. Câu hỏi ôn tập

### Câu 1

Vì sao cần Apply `Mirror Modifier` trước khi tách hai chân đối xứng thành object riêng?

A. Để tạo thêm vật liệu.  
B. Để cả hai phía tồn tại dưới dạng hình học thực có thể tách.  
C. Để tự tạo xương điều khiển.  
D. Để chuyển tất cả object thành Curve.

**Đáp án:** B  
**Giải thích:** Mirror tạo phía đối xứng bằng modifier; Apply giúp biến kết quả đó thành mesh có thể lựa chọn và tách riêng.

### Câu 2

Modifier nào được ưu tiên giữ lại chưa Apply để tránh tăng hình học bo cạnh không cần thiết?

A. `Bevel`  
B. `Mirror`  
C. `Solidify`  
D. Tất cả modifier đều phải Apply.

**Đáp án:** A  
**Giải thích:** Bevel có thể tiếp tục bo cạnh theo cách không phá hủy mesh gốc, còn Mirror phải được áp dụng khi cần tách hình học đối xứng.

### Câu 3

Dấu hiệu nào xác nhận Mirror đã trở thành hình học thực?

A. Màu vật liệu chuyển về trắng.  
B. Blender tự thêm một Armature.  
C. Trong Edit Mode có thể chọn các đỉnh/cạnh/mặt ở phía đối xứng.  
D. Đèn trong scene tự biến mất.

**Đáp án:** C  
**Giải thích:** Các đỉnh và mặt ở phía được phản chiếu xuất hiện trong dữ liệu mesh sau khi Apply.

### Câu 4

Vì sao cần kiểm tra thứ tự modifier trước khi Apply?

A. Vì tên object có thể quá dài.  
B. Vì Outliner sẽ bị xóa.  
C. Vì Blender không lưu file nếu có modifier.  
D. Vì kết quả của một modifier có thể phụ thuộc vào modifier chạy trước nó.

**Đáp án:** D  
**Giải thích:** Thứ tự trong stack có thể ảnh hưởng hình học cuối, nên không nên Apply tùy tiện các modifier ở vị trí khác nhau.

### Câu 5

Một mảng giáp cần giữ độ dày thực, nhưng vẫn muốn chỉnh độ bo cạnh về sau. Phương án nào phù hợp nhất với quy trình của bài?

A. Apply phần tạo độ dày phù hợp, giữ Bevel.  
B. Xóa toàn bộ modifier.  
C. Chuyển mảng giáp thành Light.  
D. Gộp tất cả khớp và chân lại ngay.

**Đáp án:** A  
**Giải thích:** Solidify tạo độ dày; Bevel có thể giữ để tiếp tục kiểm soát cạnh bo mà không cần tăng mesh trước thời điểm cần thiết.

## 9. Tổng kết

Trước rigging, không cần Apply tất cả modifier. Hãy **Apply Mirror để có hình học hai phía**, **Apply Solidify khi giáp cần độ dày thực**, nhưng **giữ Bevel nếu chưa cần cố định cạnh bo**. Kiểm tra modifier stack và hình dáng sau mỗi thao tác là bước bảo vệ chất lượng model.
