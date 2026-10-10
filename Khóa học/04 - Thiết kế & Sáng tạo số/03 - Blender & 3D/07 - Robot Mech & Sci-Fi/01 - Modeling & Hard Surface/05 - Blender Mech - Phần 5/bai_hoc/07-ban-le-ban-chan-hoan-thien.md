# Bài 07 — Tạo bản lề bàn chân, lắp bu lông và hoàn thiện modeling

## 1. Tóm tắt

Hình dáng bàn chân đã hoàn chỉnh chưa đủ để kết thúc phần modeling robot. Cần bổ sung **cụm khớp nối bàn chân–mắt cá**, các trụ và vòng đệm tạo cảm giác xoay cơ khí, bu lông hoàn thiện bề mặt và một số chi tiết lõm/nổi cuối cùng.

Bài này khép lại giai đoạn modeling của robot mech. Mục tiêu là hoàn thiện cấu trúc hình học, không bao gồm rigging, vật liệu, ánh sáng hoặc animation.

## 2. Mục tiêu học tập

- Chừa vùng lắp bản lề ở giữa thân bàn chân bằng `Loop Cut` và chỉnh mặt.
- Tạo chi tiết hình trụ từ vòng mặt/khớp có sẵn thay vì xây từ đầu.
- Dựng các vòng tròn đối xứng và trục trung tâm, giữ khe hở cơ khí rõ ràng.
- Nhân bản và sắp xếp bu lông bằng `Snap to Face`.
- Tự kiểm tra và lưu cảnh Blender sau khi modeling robot.

## 3. Chuẩn bị vùng tiếp nhận bản lề

1. Chọn thân bàn chân và chuyển sang `Edit Mode`.
2. Dùng `Ctrl + R` thêm **hai vòng cắt** tại vùng trung tâm bàn chân, tại vị trí khớp nối từ mắt cá đi xuống.
3. Chọn các mặt nằm giữa hai vòng cắt trong `Face Select`, dùng `G`, `Z` hạ mặt xuống tạo một khoảng trũng tương đối phẳng.
4. Kiểm tra từ `Side View` và `Top View`: vị trí trũng phải nằm nơi trụ khớp sẽ được bố trí, không cắt quá sâu đến đáy bàn chân.

Mục đích của vùng trũng là tạo chỗ lắp cơ cấu chuyển động thay vì đặt một trụ trực tiếp lên bề mặt giáp ngoài.

## 4. Tạo hai gối đỡ hình tròn

1. Chọn một object khớp hình tròn đã có từ trước (ví dụ cụm mắt cá) và vào `Edit Mode`.
2. Ở chế độ `Face Select`, chọn các vòng mặt phù hợp bằng `Alt`-click hoặc cộng thêm vòng bằng `Shift + Alt`-click tùy trường hợp.
3. Nhấn `Shift + D` sao chép vùng hình học đó, di chuyển theo trục X đến vùng bàn chân và `P` → `Selection` để tách ra object mới nếu cần chỉnh riêng.
4. Trở về `Object Mode`, chọn object vừa tách, rồi `Shift`-chọn object đích và dùng `Ctrl + J` nếu muốn quản lý chung. Trong `Edit Mode`, di chuột lên phần gối đỡ và nhấn `L` để chọn nó độc lập.
5. Dùng `G`, `Z`, `S` chỉnh vị trí và tỷ lệ gối đỡ cho khớp hình tham chiếu. Chuyển `Front View` và `Wireframe` để bảo đảm trục nằm ngang, đúng tâm.
6. Chọn vòng biên ngoài, nhấn `E` đùn theo X; chọn vùng đầu và `F` nếu cần đóng nắp.
7. Nhân bản gối đỡ bằng `Shift + D`, đưa sang phía đối diện và dùng `R`, `Z`, `180` khi cần đổi hướng nhìn đối xứng.

**Checkpoint:** Hai gối đỡ nằm ở hai phía cụm mắt cá, cùng trục quay. Khoảng cách giữa chúng đủ cho phần trụ bên trong, không dính vào thành bàn chân.

## 5. Tạo trục bản lề nằm giữa

1. Từ một vòng đỉnh ở gần gối đỡ, `Shift + D` tạo vòng mới, di chuyển một đoạn rất ngắn để chừa một khe hở nhỏ.
2. Chọn vòng và nhấn `E` đùn dọc theo trục X về phía gối đỡ còn lại. Dừng ở vị trí vẫn giữ được khe hở hợp lý phía đối diện.
3. Quan sát trong `Solid View`: trục trung tâm nằm đúng giữa hai gối và thể hiện hướng quay qua mắt cá.
4. Nếu hình học đầu trục còn bị hở ở vị trí không chủ đích, chọn vòng biên rồi dùng `F` đóng mặt khi phù hợp. Tránh tạo các mặt chồng lên nhau ở bên trong khớp.

Trục bản lề được thiết kế bằng mắt để thể hiện khả năng xoay; nó **chưa thể chuyển động** cho đến khi bước thiết lập rig/animation được thực hiện riêng.

## 6. Bổ sung bu lông hoàn thiện

1. Tái sử dụng bu lông đã có: trong `Edit Mode` chọn bu lông bằng `L` rồi `Shift + D` nhân bản.
2. Nếu cần chuyển bu lông sang object bàn chân, dùng `P` → `Selection`, rồi `Ctrl + J` để gộp vào object mục tiêu theo đúng thứ tự active object.
3. Bật snapping theo mặt khi bố trí vít nhỏ; dùng `G` đặt vít ở vị trí thích hợp trên bàn chân.
4. Dùng `Shift + D` nhân bản các vít theo vùng thiết kế hai bên. Kiểm tra những mặt nghiêng để sửa hướng xoay nếu cần.
5. Đối chiếu `Front`, `Side`, `Top View` để giữ vị trí tương xứng và tránh đặt vít sát phần bản lề gây vướng về mặt thị giác.

Cuối cùng, có thể chọn thêm nhóm mặt ở vị trí cần tạo bậc trang trí, dùng `I` tạo khung, `E` đùn lên hoặc vào trong theo thiết kế. Đây là bước hoàn thiện chứ không phải thêm chi tiết vô hạn.

## 7. Kiểm tra tổng thể trước khi kết thúc

Đánh giá toàn bộ robot trong `Object Mode`. Dùng `Alt + H` để hiện lại các đối tượng đã ẩn, kiểm tra và lưu bằng `Ctrl + S`.

| Hạng mục | Tiêu chí đạt |
| --- | --- |
| Khớp gối | Trục nối rõ, có khoảng hở và không xuyên giáp bất hợp lý |
| Cẳng chân | Lõi bên trong, hình dáng bám tham chiếu từ nhiều góc |
| Tấm giáp | Có chiều dày hợp lý, góc vát đẹp, thanh đỡ rõ |
| Bu lông | Đặt đúng bề mặt; vít nhỏ/vít lớn có tỷ lệ phân biệt |
| Mắt cá | Trục và các phần liên kết đồng tâm, có khoảng trống cần thiết |
| Bàn chân | Mũi/gót rõ, hốc và gờ có chủ đích, gối đỡ không xuyên nhau |
| Hình học | Không có mặt hở vô ý; normals đã kiểm tra khi cần |
| Tệp Blender | Đã lưu trạng thái hoàn thành modeling |

**Phạm vi hoàn thành:** Các bộ phận của robot được tạo hình xong. Đây không phải sản phẩm đã texturing, setup light, rig hay export cho game.

## 8. Lỗi thường gặp

| Vấn đề | Cách xử lý |
| --- | --- |
| Trục bàn chân lệch khỏi gối đỡ | Kiểm tra Front View và Top View, chỉnh vị trí theo X/Y/Z phù hợp |
| Gối đỡ chồng kín vào nhau | Giảm bề rộng và giữ khe hở lắp ghép |
| Bu lông bị chìm/lơ lửng | Chỉnh snapping hoặc đặt thủ công theo bề mặt |
| Mesh bàn chân có mặt hở không mong muốn | Kiểm tra vòng biên, đóng mặt bằng `F` khi phù hợp |
| Model có chi tiết bị ẩn sau khi kết thúc | `Alt + H`, kiểm tra tổng thể rồi lưu lại |

## 9. Bài thực hành cuối phần

Hoàn thiện trục bàn chân và ít nhất một cặp gối đỡ ở hai bên; đặt các bu lông nhỏ; rà soát toàn bộ chân từ gối xuống bàn chân. Lưu tệp `.blend` cuối.

**Điều kiện hoàn thành:** Người khác nhìn vào mô hình có thể phân biệt được lõi chân, giáp, thanh đỡ, khớp gối, mắt cá, thân bàn chân và trục bản lề. Không có những bề mặt chồng lấn hoặc lỗ hở rõ ràng ngoài chủ đích.

## 10. Câu hỏi ôn tập

### Câu 1

Vùng trũng ở giữa bàn chân được tạo trước khi lắp trục nhằm mục đích gì?

A. Thêm chỗ đặt đèn.  
B. Tạo không gian cho cơ cấu bản lề nằm trong thân bàn chân.  
C. Xóa toàn bộ hình khối bàn chân.  
D. Tự tạo keyframe.

**Đáp án:** B. **Giải thích:** Vùng trũng giúp lắp khớp vào bàn chân thay vì đặt trụ nổi hoàn toàn bên ngoài.

### Câu 2

Sau khi sao chép hình học gối đỡ ở Edit Mode, thao tác nào giúp tách vùng chọn thành object mới?

A. `Ctrl + S`.  
B. `G` rồi `Z`.  
C. `P` → `Selection`.  
D. `Numpad 7`.

**Đáp án:** C. **Giải thích:** `Separate by Selection` tạo object độc lập từ mesh đã chọn.

### Câu 3

Vì sao cần chừa khe hở nhỏ hai phía trục bản lề?

A. Để trông giống các chi tiết lắp được và không bị xuyên khối.  
B. Để tự sinh vật liệu.  
C. Để tăng tốc render chắc chắn.  
D. Để loại bỏ modifier.

**Đáp án:** A. **Giải thích:** Khe lắp rõ ràng giúp cấu trúc cơ khí dễ đọc về mặt hình ảnh.

### Câu 4

Phát biểu nào mô tả đúng trạng thái hoàn thành của phần học này?

A. Robot đã được rig đầy đủ.  
B. Robot đã có VFX.  
C. Robot đã hoàn thiện hệ thống vật liệu và ánh sáng.  
D. Robot đã hoàn thành phần modeling hình học.

**Đáp án:** D. **Giải thích:** Giai đoạn này kết thúc dựng hình, còn vật liệu và ánh sáng thuộc bước tiếp theo.

### Câu 5

Sau khi hoàn thành nhưng thấy một số thanh đỡ biến mất, hành động nào nên thử đầu tiên?

A. Xóa toàn bộ mesh.  
B. Nhấn `Alt + H` để hiện những object/hình học đã ẩn.  
C. Thêm Camera mới.  
D. Đổi Render Engine.

**Đáp án:** B. **Giải thích:** Những đối tượng từng ẩn bằng `H` có thể chưa được hiện lại trong cảnh.

## 11. Tổng kết

Các bước cuối là **tạo vùng lắp khớp → dựng cặp gối đỡ → extrude trục nối → đặt bu lông → kiểm tra toàn robot → lưu tệp**. Giai đoạn modeling robot khoa học viễn tưởng kết thúc tại đây; bước triển khai tiếp theo là xử lý ánh sáng và vật liệu.
