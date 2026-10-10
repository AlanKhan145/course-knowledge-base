# Bài 05 — Dựng khối chính của đùi trên bằng Cube, Loop Cut và Bevel

**Loại:** Bài học kỹ thuật và thực hành Blender.  
**Thành phẩm:** Phần đùi trên có tỉ lệ hợp với khớp hông, mặt giáp chính, gờ vát lớn và mép bo tròn.

## 1. Mục tiêu học tập

Bạn sẽ có thể:

- Tạo phần đùi trên từ `Cube` và giữ khả năng đối xứng bằng `Mirror Modifier`.
- Định hình khối bằng `Scale`, `Move`, `Box Select` kết hợp nhiều góc nhìn trực giao.
- Tạo hai loại vát: một cạnh vát lớn định hình dáng và một mép bo tròn nhiều phân đoạn.
- Giải thích vì sao nên hoàn thành silhouette trước khi thêm chi tiết nhỏ.

## 2. Phân tích hình dáng của đùi mech

Phần đùi trên là tấm giáp lớn nằm dưới hông. Vì giữ vai trò thị giác quan trọng, hình dáng tổng thể phải cân đối với thân và phần khớp tròn. Nếu vội làm các vết cắt nhỏ, ta dễ phải chỉnh lại hàng loạt vertex sau này. Một trình tự an toàn hơn là: **khối bao → biên dạng → vát cạnh lớn → bo góc → kiểm tra góc nhìn**.

Cần chuẩn bị vùng thân và khớp hông để xác định điểm bắt đầu và điểm kết thúc của tấm đùi. Nếu không có mẫu gốc, hãy dùng các khối/trụ đơn giản làm mốc. Không có số đo cố định trong bài; mọi bước căn chỉnh dựa theo tỷ lệ robot đang dựng.

## 3. Kiến thức trọng tâm

### 3.1. Khác biệt giữa vát cấu trúc và vát làm mềm

`Ctrl + B` tạo `Bevel` trên cạnh đang chọn. Nếu dùng **một segment**, cạnh vát mới thường tạo một mặt phẳng lớn, phù hợp cho dáng giáp máy. Khi tăng số segment bằng con lăn, mặt vát trở nên tròn mượt hơn, thích hợp cho góc cong.

### 3.2. Định hình qua nhiều góc nhìn

Góc trước giúp xem chiều rộng và đối xứng; góc bên thể hiện biên dạng trước–sau; góc trên giúp kiểm soát độ rộng theo chiều sâu. Với hard-surface, không nên đánh giá chỉ bằng một góc nhìn phối cảnh.

## 4. Quy trình thực hành

### 4.1. Thêm cube và thiết lập đối xứng

1. Trong viewport, dùng `Shift + C` để đưa `3D Cursor` về tâm thế giới.
2. Nhấn `Shift + A` → `Mesh` → `Cube`.
3. Nhấn `Tab` vào `Edit Mode`, dùng `S` để thu khối, rồi `G` dịch các đỉnh đến một bên đùi; đặt vị trí dưới khớp hông.
4. Về `Object Mode`. Chọn cube mới, giữ `Shift` chọn cuối một object đang có stack `Mirror` và `Bevel` đúng chuẩn.
5. Dùng `Ctrl + L` → `Copy Modifiers`; kiểm tra cặp đùi đối xứng đã xuất hiện.
6. Trở vào `Edit Mode` để tiếp tục chỉnh **geometry** của một bên; không làm mất gốc đối xứng của modifier.

**Checkpoint:** Có hai khối đùi thô, cân xứng qua tâm thân.

### 4.2. Dựng biên dạng thô theo tham chiếu

1. Chọn góc bên (`Numpad 3`) và bật `Wireframe`.
2. Dùng `S` và `G` chỉnh khối sao cho phía trên áp sát vùng khớp hông, phía dưới kết thúc tại nơi dự kiến gắn phần tiếp theo của chân.
3. Bỏ chọn bằng `Alt + A`. Dùng `B` chọn một nhóm đỉnh ở một đầu khối, rồi `G` để dịch riêng nhóm đó, tạo dáng vát/thuôn theo silhouette.
4. Dùng `Ctrl + R` đặt một vòng cắt ở giữa khối; nhấp trái xác nhận và nhấp phải để giữ ở giữa khi cần.
5. Dùng `B` chọn những đỉnh tại góc cần thay đổi và dịch chuyển chúng theo trục phù hợp để tạo mặt giáp có hướng.
6. Xem lại từ trên (`Numpad 7`): chỉnh bề rộng/vị trí theo trục X sao cho tấm đùi không va chạm thị giác với cụm hông.

Thao tác chọn nhóm đỉnh trên `Wireframe` có lợi vì có thể chọn được các đỉnh xuyên qua chiều dày khối, giúp chỉnh cả mặt trước và mặt sau nhất quán.

### 4.3. Tạo cạnh vát lớn định hình tấm giáp

1. Ở `Edit Mode`, chọn cạnh hoặc tập cạnh cần vát.
2. Nhấn `Ctrl + B` và di chuột để tạo bề rộng vát.
3. Điều chỉnh số segment về **một** để tạo dải mặt vát rõ, thay vì bo tròn ngay.
4. Kiểm tra một khoảng trống nhỏ được giữ lại ở vùng tiếp xúc giữa các lớp giáp hoặc cạnh lắp ghép.
5. Nếu đường vát có hướng không như mong muốn, chọn lại cạnh theo góc nhìn phù hợp và giảm chiều rộng bevel.

**Checkpoint:** Tấm đùi không còn là hộp vuông thuần túy; có một góc vát lớn thể hiện ngôn ngữ hard-surface.

### 4.4. Bo tròn mép cần mềm

1. Chuyển sang góc bên, chọn phần mép cần bo mượt.
2. Dùng `Ctrl + B` với bề rộng vát nhỏ hơn lần trước.
3. Lăn con lăn chuột để tăng số segment; trong phần thực hành mẫu dùng mức khoảng **sáu phân đoạn** cho góc tròn (có thể điều chỉnh tùy mật độ mesh).
4. Kiểm tra bề mặt sau khi bevel: cạnh phải mượt nhưng không làm tấm giáp mất tỷ lệ.
5. Quay về `Solid` để xem ánh sáng và khối, sau đó lưu bằng `Ctrl + S`.

## 5. Tiêu chí hoàn thành

- [ ] Khối đùi được tạo từ cube và đối xứng đúng hai bên.
- [ ] Biên dạng từ góc trước và bên có chủ đích, không giống khối hộp nguyên trạng.
- [ ] Có một cạnh vát lớn, thể hiện tấm giáp.
- [ ] Có mép bo tròn nhiều segment ở vị trí thích hợp.
- [ ] Hình khối không bị cắt lấn quá mức vào khớp hông.
- [ ] Silhouette vẫn đọc rõ khi tắt bớt chi tiết nhỏ.

## 6. Lỗi thường gặp

| Lỗi | Hậu quả | Cách xử lý |
| --- | --- | --- |
| Đặt cube lệch origin ở Object Mode trước khi mirror | Đối xứng sai | Giữ origin đúng; dịch mesh trong `Edit Mode` |
| `Bevel` quá lớn | Góc bị hỏng hoặc giao nhau | Giảm độ rộng vát, kiểm tra hình học lân cận |
| Bo tròn mọi cạnh | Mất phong cách giáp cứng | Dùng vát một segment tại vùng định hình, nhiều segment chỉ ở mép cần cong |
| Chỉ chỉnh từ góc trước | Dáng đùi phình hoặc lệch theo chiều sâu | Kiểm tra bên và trên |
| Chọn nhầm các đỉnh phía sau | Dáng bị xoắn | Dùng `Wireframe` và `Box Select` thận trọng |

## 7. Bài tập thực hành

Tạo hai silhouette cho cùng phần đùi trên: một dáng thẳng, một dáng thuôn về phía dưới. Mỗi phương án giữ `Mirror Modifier`, có một cạnh vát phẳng lớn và một mép bo cong. Chọn phương án phù hợp nhất với thân robot của bạn.

## 8. Câu hỏi ôn tập

### Câu 1
Tại sao nên định hình silhouette trước khi thêm nhiều chi tiết nhỏ?

A. Vì silhouette quyết định tỷ lệ tổng thể và khó sửa khi mesh đã quá phức tạp.  
B. Vì Blender không thể tạo chi tiết trước.  
C. Vì `Mirror` chỉ chạy trên cube chưa chỉnh.  
D. Vì mọi mặt đều cần vát tròn.

**Đáp án:** A.  
**Giải thích:** Kiểm soát khối lớn trước giúp tránh làm lại các chi tiết khi tỷ lệ thay đổi.

### Câu 2
Muốn tạo một cạnh vát kiểu tấm giáp có mặt phẳng lớn, nên ưu tiên cách nào?

A. `Shade Smooth` toàn bộ.  
B. Chuyển sang `Wireframe`.  
C. `Bevel` với một segment.  
D. Thêm camera.

**Đáp án:** C.  
**Giải thích:** Một segment cho mặt vát phẳng; nhiều segment làm vùng vát tròn dần.

### Câu 3
Góc nhìn nào hữu ích nhất để xem độ sâu trước–sau của đùi?

A. Chỉ góc camera.  
B. Chỉ góc trước.  
C. Chỉ render.  
D. Góc bên `Numpad 3`.

**Đáp án:** D.  
**Giải thích:** Góc bên biểu lộ biên dạng theo chiều sâu và vị trí so với hông.

### Câu 4
Tổ hợp thao tác nào hỗ trợ định hình riêng một nhóm đỉnh của cube?

A. `P` rồi `Ctrl + J`.  
B. `B` để chọn hộp rồi `G` dịch nhóm đỉnh.  
C. `I` rồi `F`.  
D. `Shift + N` rồi `H`.

**Đáp án:** B.  
**Giải thích:** Box Select giúp chọn vùng đỉnh mong muốn và Move chỉ tác động lên nhóm đó.

### Câu 5
Ở bài học này, vai trò của các phân đoạn bevel tăng lên khi nào?

A. Khi muốn tự động làm animation.  
B. Khi muốn giảm số object.  
C. Khi cần mép cong mượt hơn.  
D. Khi cần dịch 3D Cursor.

**Đáp án:** C.  
**Giải thích:** Nhiều phân đoạn tạo ra bề mặt chuyển tiếp cong thay vì một mặt phẳng vát.

## 9. Tổng kết

Tấm đùi trên được thiết kế từ **khối bao, biên dạng, vát phẳng và mép cong**. Đây là nền hình học để thêm gờ nối và hốc lõm mà vẫn giữ phong cách hard-surface rõ ràng.
