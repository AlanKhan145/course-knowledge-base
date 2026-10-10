# Bài 02 — Tạo khung cẳng chân và gờ hard-surface

## 1. Tóm tắt

Phần cẳng chân của mech thường gồm **lõi chịu lực bên trong** và **giáp bọc bên ngoài**. Nếu dựng lõi đúng bằng toàn bộ đường bao của chân, các tấm giáp thêm sau sẽ thiếu chỗ hoặc bị lồng sâu vào nhau. Bài học này tạo lõi cẳng chân từ một `Cube`, căn hình theo tham chiếu và thêm các gờ/đầu nối bằng `Inset`, `Loop Cut` và `Extrude`.

## 2. Mục tiêu học tập

- Tạo khối lõi mới mà vẫn kiểm soát được `Object Origin`.
- Chép hệ modifier phù hợp từ một bộ phận khác của robot.
- Biết khi nào nên xoay tạm **ảnh tham chiếu** để thao tác dễ hơn.
- Tạo tiết diện thay đổi dọc cẳng chân bằng di chuyển đỉnh và `Extrude`.
- Tạo chi tiết lồi lõm có chủ đích thay vì thêm hình học ngẫu nhiên.

## 3. Chuẩn bị

Cần cảnh Blender có khớp gối, hình tham chiếu và một đối tượng đã mang modifier cần thiết (trong quy trình này là `Mirror` và `Bevel`). Cẳng chân được dựng trước khi tạo giáp. Hãy phân biệt **cẳng chân lõi** với **lớp giáp** khi so đường bao của hình tham chiếu.

`Object Origin` là điểm gốc dùng cho nhiều phép biến đổi ở Object Mode, còn các đỉnh có thể được di chuyển tương đối so với gốc trong Edit Mode. Đặt gốc hợp lý là điều quan trọng khi dùng Mirror để nhân đôi hai bên robot.

## 4. Tạo mesh và kế thừa modifier

1. Ở `Object Mode`, nhấn `Shift + C` để đưa 3D Cursor về tâm cảnh, sau đó `Shift + A` → `Mesh` → `Cube`.
2. Chọn cube và nhấn `G`, `Y` để đặt nó gần khu vực cần dựng. Vào `Edit Mode`; dùng `G` di chuyển **hình học bên trong object** đến đúng vị trí cẳng chân.
3. Dùng `S` để thu tỷ lệ cube. Giữ origin ở vị trí cần thiết cho `Mirror`, thay vì dịch toàn bộ object một cách thiếu kiểm soát.
4. Trở về `Object Mode`, chọn cube trước, `Shift`-chọn object đã có modifier **sau cùng** để object này trở thành active, rồi dùng `Ctrl + L` → `Copy Modifiers`.
5. Kiểm tra modifier `Mirror` và `Bevel` trên cube; bật làm mượt phù hợp qua menu ngữ cảnh nếu cần. Trở lại Edit Mode để tiếp tục dựng hình.

**Cảnh báo:** Copy Modifiers chỉ sao chép cấu hình modifier. Nếu trục và origin của cube chưa phù hợp, kết quả Mirror có thể khác object nguồn; cần kiểm tra bản đối xứng ngay sau khi copy.

## 5. Sử dụng hình tham chiếu hiệu quả

Nếu hình chân trong Side View đang nghiêng nhiều, việc đùn khối theo phương dọc sẽ khó căn chỉnh. Có thể **xoay tạm đối tượng ảnh tham chiếu** để cạnh trước cẳng chân gần thẳng đứng trên màn hình:

1. Chọn ảnh tham chiếu ở Object Mode.
2. Dùng `R` trong hướng xem phù hợp và canh ảnh theo đường lưới. Chỉ xoay, không cố tình thay đổi vị trí ảnh.
3. Chọn lại cube và trở về Edit Mode để dựng lõi theo đường bao đã xoay.
4. **Ghi nhớ rằng ảnh phải được trả về góc xoay ban đầu** khi lắp cụm chân vào cơ thể. Phần hoàn nguyên được xử lý ở bài lắp ráp.

Thao tác này chỉ thuận tiện hóa quy trình căn hình; đừng hiểu nó là thay đổi thiết kế hoặc hệ tọa độ thật của robot.

## 6. Dựng khối lõi theo đường bao

1. Nhấn `Numpad 3` → `Z` → `Wireframe` và đặt cube sát vị trí lõi cẳng chân, **không mở rộng đến mép ngoài của giáp**.
2. Chuyển `Vertex Select`. Dùng `B` chọn nhóm đỉnh ở đáy, `G`, `Z` để kéo xuống đúng chiều dài; dùng `G`, `Y` để căn lại độ lệch theo hướng trước–sau.
3. Nếu những object khác che hình tham chiếu, chọn chúng ở Object Mode và nhấn `H` để ẩn tạm. Dùng `Alt + H` để hiện lại khi cần.
4. Box-select nhóm đỉnh phía trên, `G`, `Z` để chỉnh cao độ gần khớp gối. Chọn vòng/mặt đầu và `E` để tạo đoạn hình mới, sau đó `S`, `Y` để thu gọn độ dày theo trục Y.
5. Nhấn `Numpad 7` để kiểm tra bề rộng theo X. Chọn đỉnh hoặc cạnh ở mặt bên và dùng `G`, `X` để đưa về đúng kích thước mặt trên.
6. Trở lại `Solid View` và kiểm tra tiết diện: lõi phải nằm bên trong không gian dành cho giáp, vẫn kết nối hợp lý với khớp gối.

## 7. Tạo các đầu nối và chi tiết nổi

### 7.1. Chi tiết trên đầu cẳng chân

Chọn một mặt đầu của lõi ở `Face Select`, nhấn `I` để tạo viền. Tùy hình tham chiếu, dùng `S`, `Y` thu chiều sâu, `E` đùn tạo bậc và `G`, `Z` chỉnh độ cao. Có thể điều chỉnh từng mặt bên để đầu nối không có hình hộp thô.

### 7.2. Gờ dọc thân cẳng chân

Dùng `Ctrl + R` đặt hai `Loop Cut` ở khoảng vị trí gờ nổi. Nếu cần chỉnh vị trí chính xác, chọn cạnh và nhấn `G` hai lần để `Edge Slide`. Chọn mặt nằm giữa hai đường cắt, nhấn `E` tạo phần nhô rồi scale theo trục Z để thay đổi chiều dài gờ.

### 7.3. Đầu nối ở đoạn dưới

Ở vùng đáy lõi, chọn các đỉnh thích hợp và dùng `E` tạo một đoạn nối ngắn. Chỉnh bằng `G`, `Z` và `S`, `Y` để thu tiết diện. Tiếp tục dùng `I` trên mặt đầu rồi `E` tạo gờ nhỏ. Quan sát kết quả từ bên, trước và trên để tránh tạo một khối chỉ đẹp ở một góc nhìn.

Các chi tiết này có mục đích làm rõ các điểm lắp nối, đồng thời tạo bề mặt để đỡ lớp giáp.

## 8. Lỗi thường gặp

| Vấn đề | Xử lý |
| --- | --- |
| Lõi quá dày, giáp không còn khoảng trống | Giảm bề rộng lõi; đặt lõi nằm trong biên dự kiến của giáp |
| Copy Mirror nhưng nhân bản sai vị trí | Kiểm tra origin, trục đối xứng và cấu hình Mirror |
| Các cạnh ở mặt trên bị lệch | Kiểm tra `Numpad 7`, di chuyển các đỉnh theo X |
| Đường gờ không bắt đầu đúng vị trí | Dùng `Ctrl + R` và `Edge Slide` để căn vị trí hai đường cắt |
| Khó thấy tham chiếu | Dùng Wireframe và `H` để tạm ẩn phần chắn |

## 9. Thực hành

Từ một cube, dựng lõi cẳng chân với chiều dày nhỏ hơn đường bao giáp, một đầu nối phía trên, ít nhất một gờ nổi bên hông và một đầu nối phía dưới. Lưu dự án sau khi kiểm tra từ ba góc chiếu. Không cần tự đặt các kích thước số học nếu ảnh tham chiếu không có thước đo.

## 10. Câu hỏi ôn tập

### Câu 1

Lý do chính để giữ lõi cẳng chân nhỏ hơn đường bao giáp là gì?

A. Để không cần lưu file.  
B. Để giáp có không gian bọc bên ngoài mà không chồng lấn vô lý.  
C. Để `Inset` bị vô hiệu hóa.  
D. Để chỉ cần một góc nhìn.

**Đáp án:** B. **Giải thích:** Lõi và giáp là hai lớp cơ khí khác nhau; cần dành chỗ cho phần giáp bên ngoài.

### Câu 2

Khi chép modifier qua `Ctrl + L` → `Copy Modifiers`, object nào cần là object active cuối cùng?

A. Object đích mới.  
B. Ảnh tham chiếu.  
C. 3D Cursor.  
D. Object nguồn có modifier muốn sao chép.

**Đáp án:** D. **Giải thích:** Object được chọn sau cùng và đang active đóng vai trò nguồn cho lệnh copy modifier.

### Câu 3

Mục đích của việc xoay tạm ảnh tham chiếu là gì?

A. Giúp đường bao dễ căn với hướng thao tác khi dựng mesh.  
B. Làm đổi góc thật của bộ phận robot trong mô hình cuối.  
C. Tự thêm rig cho chân.  
D. Làm mesh dày hơn.

**Đáp án:** A. **Giải thích:** Xoay ảnh chỉ hỗ trợ căn hình trong lúc modeling; cần trả lại hướng ban đầu khi lắp ráp.

### Câu 4

Lệnh nào phù hợp để chèn thêm hai đường cắt dọc thân trước khi chọn mặt tạo gờ?

A. `P`.  
B. `H`.  
C. `Ctrl + R`.  
D. `Ctrl + J`.

**Đáp án:** C. **Giải thích:** `Loop Cut` bổ sung các vòng cạnh phân vùng mặt để extrude có kiểm soát.

### Câu 5

Nếu bản sao Mirror của cube nằm sai phía dù modifier đã được chép đúng, nên kiểm tra gì trước?

A. Số lượng vật liệu.  
B. `Object Origin`, trục đối xứng và cấu hình Mirror.  
C. Thời lượng animation.  
D. Đèn chiếu sáng.

**Đáp án:** B. **Giải thích:** Mirror phụ thuộc hệ tọa độ và cấu hình của đối tượng, không chỉ sự tồn tại của modifier.

## 11. Tổng kết

Quy trình dựng cẳng chân gồm **Cube → đặt origin hợp lý → copy modifier → căn tham chiếu → chỉnh đỉnh theo ba góc → thêm Loop Cut, Inset và Extrude**. Khi lõi hoàn chỉnh, phần giáp có thể phát triển độc lập từ các mặt bề mặt mà vẫn giữ bố cục cơ khí rõ ràng.
