# Bài 06 — Dựng hình bàn chân robot bằng Extrude và Loop Cut

## 1. Tóm tắt

Bàn chân mech là một khối hard-surface cần đủ vững về hình dáng để nâng đỡ toàn bộ chân robot. Bài học xây dựng bàn chân từ `Cube`, phát triển hình khối theo đường bao tham chiếu bằng các lần `Extrude` liên tiếp, rồi bổ sung gờ cạnh, mặt nghiêng và các chi tiết lõm ở đầu/sau bàn chân.

Thay vì dùng một khối hình hộp đơn giản, ta tổ chức bàn chân thành các phần có tỷ lệ rõ ràng, giữ các mép vát phù hợp ngôn ngữ tạo hình khoa học viễn tưởng.

## 2. Mục tiêu học tập

- Dựng một bàn chân từ cube với origin phục vụ đối xứng.
- Kế thừa `Mirror` và `Bevel` từ object mẫu.
- Tạo đường bao bàn chân theo hai góc Side/Front bằng di chuyển đỉnh và nhiều lần `Extrude`.
- Thêm gờ cạnh, mặt nghiêng và hốc chi tiết từ `Loop Cut`, `Inset Faces`.
- Đánh giá khả năng lắp bàn chân với vùng mắt cá đã chuẩn bị.

## 3. Tạo khối bàn chân

1. Tại `Object Mode`, nhấn `Shift + C` đưa 3D Cursor về tâm, sau đó `Shift + A` → `Mesh` → `Cube`.
2. Vào `Edit Mode`; dùng `G`, `X` để chuyển **hình học cube** đến vùng một bàn chân, giữ origin tại vị trí phù hợp cho Mirror.
3. Trở lại `Object Mode`, chọn cube mới, `Shift`-chọn object nguồn đã có `Mirror` và `Bevel`, rồi `Ctrl + L` → `Copy Modifiers`.
4. Vào lại Edit Mode, chuyển đến `Side View` và `Wireframe`. Dùng `G`, `S`, `S`, `Y` để căn chiều dài và chiều cao khối ban đầu theo phần trung tâm bàn chân.
5. Chuyển `Front View`, điều chỉnh bề ngang bằng `G`, `X` và `S`, `X` sao cho phần bàn chân nằm đúng vị trí tương ứng với mắt cá.

**Checkpoint:** Bàn chân ban đầu nằm dưới cụm mắt cá, kích thước hợp lý từ cả Side và Front View. Bản Mirror (nếu dùng) cũng nằm đúng bên đối diện.

## 4. Mở rộng mũi chân và gót chân

Cách dựng hình chủ yếu là **chọn một mặt biên, đùn một đoạn, chỉnh cao độ và tiếp tục đùn**. Thao tác nhiều bước tạo đường bao góc cạnh đẹp hơn một lần kéo dài toàn bộ cube.

1. Ở `Side View`, chọn các đỉnh hoặc mặt biên đầu bàn chân, nhấn `E` để tạo đoạn mới theo hướng mũi chân.
2. Chỉnh các đỉnh trên/dưới bằng `G`, `Z` để tạo độ dốc; tiếp tục `E` thêm đoạn nữa nếu cần phân chia đường gãy.
3. Nhóm đỉnh vừa tạo có thể được kéo xuống theo Z để đầu bàn chân thấp hơn phần gần mắt cá.
4. Thực hiện tương tự ở phía gót: chọn mặt biên sau, `E` tạo đoạn ngắn, chỉnh vị trí và đùn tiếp cho đến khi khớp tham chiếu.
5. Quay lại `Solid View`, kiểm tra sự khác biệt giữa gót và mũi chân. Không nên kéo hai đầu thành những khối dài giống hệt nhau nếu tham chiếu có hình dáng khác nhau.

Khi tạo các đoạn đùn trong không gian 3D, nên khóa trục rõ ràng bằng `E` rồi `X`, `Y` hoặc `Z` khi cần. Đừng phụ thuộc vào góc nhìn hiện tại để suy luận rằng một đoạn đã đi đúng hướng.

## 5. Tạo gờ cạnh và mặt nghiêng

### 5.1. Gờ bên ngoài bàn chân

Dùng `Ctrl + R` thêm một vòng cắt theo chiều thân bàn chân ở gần mép gờ. Chọn hai mặt thích hợp, nhấn `E` để đùn nhẹ ra ngoài, sau đó `S`, `X` khi cần mở rộng chi tiết theo chiều ngang.

### 5.2. Điều chỉnh đường mép vát

Từ `Front View` và `Wireframe`, chọn các đỉnh ở góc cần hạ thấp; dùng `G`, `Z` để tạo đường nghiêng. Mục tiêu là chuyển tiếp góc cạnh có chủ ý, không làm toàn bộ mặt giáp bị cong hoặc móp.

### 5.3. Các chi tiết ở mũi và gót

1. Dùng `Ctrl + R`; có thể cuộn bánh xe để tạo **hai vòng cắt** khi muốn chia một vùng mặt rộng thành ba dải.
2. Chuyển `Face Select`, chọn các mặt vùng sau, `E` đùn tạo một bậc.
3. Với các mặt ở đầu trước, nhấn `I` tạo đường viền, `E` đùn vào trong để hình thành hốc/lõm.
4. Ở vùng gót cũng có thể dùng `I` + `E` để tạo bậc kỹ thuật tương tự nhưng với kích thước theo tham chiếu.

Sự khác nhau giữa phần lõm và phần nổi rất quan trọng: đùn mặt vào trong tạo hốc, đùn ra ngoài tạo gờ. Quan sát dưới Solid View để phân biệt rõ hai dạng này.

## 6. Kiểm tra hình học bàn chân

Sau khi hoàn thành tạo hình, xem lần lượt `Numpad 3` (bên), `Numpad 1` (trước), `Numpad 7` (trên). Kiểm tra ba câu hỏi:

- Phần bàn chân có cân dưới mắt cá và phần chân trên không?
- Mũi và gót có cùng chiều cao hợp lý, không vô tình lộ khe hoặc mặt hở ngoài dự kiến không?
- Các phần gờ và hốc có đặt đúng mặt, không bị `Mirror` hoặc `Bevel` làm biến dạng khó nhận ra?

Nhấn `Ctrl + S` để lưu phiên bản trước khi lắp khớp bàn chân.

## 7. Lỗi thường gặp

| Triệu chứng | Hướng xử lý |
| --- | --- |
| Bàn chân quá hẹp hoặc quá rộng | Chỉnh bề ngang ở Front View, không chỉ Side View |
| Phần gót/mũi bị kéo lệch trục | Dùng `E` theo đúng hướng và kiểm tra Wireframe |
| Hốc không tạo chiều sâu | Sử dụng `I` để có viền rồi `E` vào trong |
| Viền ngoài bị méo | Chọn đúng nhóm mặt/đỉnh trước khi scale theo trục X |
| Mirror làm bàn chân hiện ở vị trí sai | Kiểm tra origin và trục Mirror đã chép |

## 8. Bài thực hành

Dựng một bàn chân mech từ cube, gồm thân chính, mũi chân, gót chân, một gờ bên ngoài và ít nhất hai vùng hốc có viền. Đối chiếu ở ba góc nhìn, bảo đảm bàn chân nằm dưới mắt cá, rồi lưu tệp Blender.

## 9. Câu hỏi ôn tập

### Câu 1

Tại sao nên tạo mũi chân bằng nhiều lần `Extrude` thay vì kéo dài một mặt duy nhất?

A. Để dựng được nhiều bậc và đường gãy khống chế hình dáng.  
B. Vì `Extrude` chỉ chạy được một lần.  
C. Để Blender tự thêm rig.  
D. Vì không thể chỉnh đỉnh sau khi Extrude.

**Đáp án:** A. **Giải thích:** Nhiều đoạn đùn cho phép chỉnh đường bao và các mức cao thấp độc lập.

### Câu 2

Nếu bàn chân nhìn chuẩn ở mặt bên nhưng bị quá hẹp, góc nhìn nào giúp kiểm tra trực tiếp bề ngang?

A. Camera View.  
B. Side View lần nữa.  
C. Perspective View duy nhất.  
D. Front View.

**Đáp án:** D. **Giải thích:** Góc nhìn trước thể hiện trực tiếp chiều ngang so với mắt cá và hai bên cơ thể.

### Câu 3

Cặp thao tác nào phù hợp để tạo hốc chữ nhật có đường viền trên mặt bàn chân?

A. `H` rồi `Alt + H`.  
B. `I` rồi `E` theo hướng vào trong.  
C. `Shift + C` rồi `R`.  
D. `Ctrl + J` rồi `L`.

**Đáp án:** B. **Giải thích:** Inset tạo khung biên, Extrude đưa phần mặt vào trong để tạo hốc.

### Câu 4

Việc chọn đúng `Vertex`, `Edge` hoặc `Face` trước thao tác mang lại lợi ích gì?

A. Thay thế hoàn toàn việc lưu file.  
B. Chuyển object thành ảnh 2D.  
C. Tác động đúng thành phần hình học cần sửa.  
D. Tự động sửa tất cả normals.

**Đáp án:** C. **Giải thích:** Blender sẽ áp dụng thao tác lên kiểu thành phần đang chọn; sai chế độ dễ chọn sai vùng.

### Câu 5

Khi bản Mirror của bàn chân nằm không đúng bên robot, nên kiểm tra gì?

A. Thời gian render.  
B. Tên material.  
C. Số lượng frame.  
D. Origin và trục đối xứng của object.

**Đáp án:** D. **Giải thích:** Đối xứng phụ thuộc trục và gốc của đối tượng, không chỉ nội dung mesh.

## 10. Tổng kết

Bàn chân được dựng theo chuỗi **Cube → cân tỷ lệ theo Side/Front → Extrude nhiều bậc ở mũi/gót → thêm Loop Cut → tạo gờ và hốc bằng Inset/Extrude → kiểm tra ba góc**. Bài tiếp theo tạo các thành phần giúp bàn chân trông được nối thật với mắt cá.
