# Bài 02 — Tạo bản lề hông và xác định tâm xoay

**Loại:** Bài học kết hợp thực hành hard-surface.  
**Thành phẩm:** Cụm khớp hông gồm những nửa khớp có thể quan sát rõ hướng xoay ngang.

## 1. Mục tiêu học tập

Kết thúc bài, bạn có thể:

- Tận dụng hình học khớp có sẵn để tạo một cụm bản lề mới mà không dựng lại từ đầu.
- Tách một số mặt thành object riêng bằng `Duplicate` và `Separate Selection`.
- Dùng `3D Cursor` làm `Transform Pivot Point` để xoay chính xác quanh vị trí khớp.
- Nối hai vòng biên bằng `Bridge Edge Loops`, đùn đầu nối và sửa lỗi hình học chồng mặt.

## 2. Vai trò của bản lề trong robot mech

Khớp trụ nối thân–hông chưa thể hiện đầy đủ chuyển động của chân. Muốn chân có khả năng mở sang bên khi rigging sau này, bề mặt mô hình cần mô tả rõ **vị trí bản lề** và **phần xoay tương đối với phần cố định**. Không nhất thiết mọi chi tiết phải là bộ phận cơ khí chính xác, nhưng hình khối nên gợi ra được trục quay hợp lý.

Cần chuẩn bị một khớp tròn ở hông, một bộ phận thân hoặc tấm đùi giả để quan sát vị trí lắp đặt. Nếu chưa có, có thể tạo trụ và khối tạm để luyện.

## 3. Ba nguyên tắc quan trọng

### 3.1. Nhân bản có chọn lọc

Khi một khớp mới tương tự khớp đã dựng, hãy dùng `Shift + D` rồi làm sạch geometry không cần thiết. Trong `Edit Mode`, đặt chuột trên một đảo mesh và dùng `L` để chọn phần geometry liên thông. `Ctrl + I` đảo vùng chọn; từ đó có thể xóa các đỉnh thừa với `X` → `Vertices`.

### 3.2. Tâm xoay mô hình khác với Object Origin

`3D Cursor` có thể đóng vai trò **pivot tạm** khi thực hiện `Rotate`. Đây chưa phải thao tác tạo pivot rig hoàn chỉnh. Trong bước rigging thực tế sẽ cần thiết lập origin hoặc xương khớp phù hợp. Bài này chỉ đảm bảo **vị trí hình học của tâm xoay có chủ đích**.

### 3.3. Khớp có thể gồm hai nửa

Bản lề có thể được tạo từ hai bản sao của một thành phần. Một nửa giữ nguyên, nửa kia được nhân đôi rồi xoay quanh tâm khớp, từ đó có cụm nối rõ nét hơn.

## 4. Quy trình thực hành

### 4.1. Tái sử dụng phần khớp đã có

1. Ở `Object Mode`, chọn khớp dạng trụ/vành đang nằm gần hông.
2. Nhấn `Shift + D`, rồi `Z` để đưa bản sao xuống vùng bản lề mới.
3. Dùng `Tab` vào `Edit Mode`; bật `Z` → `Wireframe` để nhìn toàn bộ đỉnh.
4. Chọn tất cả (`A`), dùng `G`, `S` và `R` điều chỉnh hình dạng theo vùng nối mong muốn. Xoay góc `90°` nếu cần để bộ phận nằm theo phương của bản lề.
5. Dùng góc trước (`Numpad 1`) và góc bên (`Numpad 3`) để kiểm tra tâm hình trụ và độ khớp với khớp nền.
6. Nếu object sao chép có nhiều chi tiết không cần thiết, bỏ chọn bằng `Alt + A`, di chuột lên đảo mesh cần giữ, nhấn `L` rồi `Ctrl + I` → `X` → `Vertices` để loại phần còn lại.

**Checkpoint:** Chỉ còn lại chi tiết cần cho bản lề, không mang theo các bộ phận trang trí thừa.

### 4.2. Tạo hai phần lắp dọc bản lề

1. Ở `Edit Mode`, chọn thành phần vừa làm sạch.
2. Dùng `Shift + D`, sau đó `Z`, để tạo một thành phần tương tự ở vị trí thứ hai dọc trục của cụm bản lề.
3. Giữ khoảng cách vừa đủ để hai thành phần vẫn có cảm giác là bộ phận của cùng một cụm nối.
4. Kiểm tra góc bên để hai thành phần cùng trục, tránh hiện tượng chúng lệch tâm dù góc trước trông hợp lý.

Bước này mô tả bố trí hình học, chưa làm cho hai phần tự chuyển động.

### 4.3. Tách mặt và xoay nửa khớp quanh 3D Cursor

1. Chuyển sang `Face Select` và chọn hai mặt sẽ làm nền cho phần bản lề bổ sung.
2. Dùng `Shift + D` rồi nhấp chuột phải để giữ các mặt sao chép ở đúng vị trí cũ.
3. Nhấn `P` → `Selection` để tách hình học vừa nhân thành object riêng.
4. Quay về `Object Mode`, chọn object mới. Nếu khó nhìn vì trùng khít, chuyển tạm sang `Wireframe`.
5. Vào `Edit Mode` trên object mới, chuyển sang `Edge Select`. Chọn các cạnh hoặc các đỉnh đại diện hai bên tâm của nửa vòng khớp.
6. Nhấn `Shift + S` → `Cursor to Selected` để đặt `3D Cursor` tại tâm vùng đã chọn.
7. Chọn toàn bộ hình học (`A`). Trong menu `Transform Pivot Point`, chọn `3D Cursor`.
8. Nhấn `R`, `Z`, `180`, `Enter` để quay phần khớp nửa vòng về phía đối diện quanh tâm đã chọn.
9. Nếu hai bề mặt trùng nhau gây nhấp nháy (`z-fighting`), điều chỉnh vị trí hoặc giảm nhẹ chiều dày của một trong hai phần, ưu tiên giữ khoảng hở hình học hợp lý.
10. Sau khi xong, đưa `Transform Pivot Point` về `Median Point` để tránh các lần biến đổi kế tiếp quay quanh con trỏ ngoài ý muốn.

**Checkpoint:** Phần bản lề thứ hai xoay quanh điểm nằm trong cụm khớp, không văng theo quỹ đạo quanh gốc toàn cảnh.

### 4.4. Nối hai vòng biên và tạo đầu nối

1. Trong `Edit Mode`, chọn hai vòng biên mở có số lượng cạnh tương ứng.
2. Dùng `F3` tìm `Bridge Edge Loops` (hoặc gọi qua menu cạnh nếu tiện).
3. Kiểm tra các mặt mới nối có khép kín phần thành mong muốn, không bắt chéo.
4. Chọn mặt ngoài cần tạo đầu nối, nhấn `E` để đùn dọc phương trục tương ứng và đưa phần đó cắm vào chi tiết tròn kế cận.
5. Nếu mặt bị che hoàn toàn bên trong khối lắp ghép và không cần thiết, chọn mặt đó rồi `X` → `Faces` để dọn geometry.
6. Chọn các mặt (`A`) rồi nhấn `Shift + N`, trở về `Object Mode` để đánh giá lại shading.
7. Dùng `Ctrl + S` lưu dự án.

**Lưu ý:** `Bridge Edge Loops` không tự bù được hai vòng biên có topology tương thích kém. Nếu xuất hiện mặt xoắn, cần kiểm tra vùng chọn và cách nối.

## 5. Kiểm tra kết quả

- [ ] Khớp được tạo từ geometry tái sử dụng, đã loại phần dư.
- [ ] Hai phần bản lề có khoảng cách và hướng trục có chủ đích.
- [ ] Nửa khớp được quay quanh tâm mong muốn bằng `3D Cursor`.
- [ ] Các vòng biên nối bằng `Bridge Edge Loops` tạo bề mặt hợp lý.
- [ ] Không có bề mặt nhấp nháy nghiêm trọng do trùng nhau.
- [ ] Bạn phân biệt rõ pivot khi chỉnh mesh với origin/bone cho rigging sau này.

## 6. Lỗi dễ gặp

| Vấn đề | Nguyên nhân | Cách sửa |
| --- | --- | --- |
| Bản lề quay thành vòng rất lớn | Pivot đang là `Median Point` hoặc đặt cursor sai | Đặt cursor tại tâm khớp; chọn `3D Cursor` trong Pivot Point |
| Không chọn được mặt mới tách | Hai object ở cùng vị trí | Dùng `Wireframe`, tạm ẩn phần khác nếu cần |
| Bridge tạo mặt xoắn | Hai edge loop không phù hợp | Kiểm tra vùng chọn/số cạnh và hướng tương ứng |
| Khớp bị tối sau extrude | Normals sai hoặc geometry chồng | `Shift + N`; kiểm tra mặt thừa |
| Lần xoay tiếp theo bất thường | Quên đưa pivot về `Median Point` | Khôi phục Pivot Point |

## 7. Thực hành ngắn

Lấy một nửa khớp, nhân đôi và tạo cặp bản lề có đầu nối dày hơn phần trục. Dùng phép xoay `180°` quanh cursor và giải thích bằng một câu tại sao chỉ dịch object sang bên không thay thế cho thao tác xoay quanh tâm này.

## 8. Câu hỏi ôn tập

### Câu 1
Lệnh nào tách các mặt đang chọn thành object mới?

A. `Ctrl + J`.  
B. `P` → `Selection`.  
C. `Shift + N`.  
D. `Ctrl + R`.

**Đáp án:** B.  
**Giải thích:** `Separate Selection` tạo một object khác từ geometry đang chọn.

### Câu 2
Tác dụng chính của `Shift + S` → `Cursor to Selected` ở bài này là gì?

A. Thêm modifier.  
B. Gắn bone.  
C. Thay màu vật thể.  
D. Xác lập vị trí tham chiếu cho tâm xoay.

**Đáp án:** D.  
**Giải thích:** Con trỏ được đặt tại tâm vùng chọn để dùng làm pivot trong thao tác `Rotate`.

### Câu 3
Muốn chọn riêng một đảo mesh liên thông dưới con trỏ, phím nào phù hợp?

A. `L`.  
B. `I`.  
C. `F`.  
D. `K`.

**Đáp án:** A.  
**Giải thích:** Trong `Edit Mode`, `L` chọn geometry liên thông dưới con trỏ chuột.

### Câu 4
Sau khi chọn hai vòng biên tương ứng, công cụ nào thường dùng để nối chúng bằng các mặt?

A. `Inset`.  
B. `Shade Smooth`.  
C. `Bridge Edge Loops`.  
D. `Mirror`.

**Đáp án:** C.  
**Giải thích:** Công cụ này xây các mặt kết nối giữa hai vòng biên.

### Câu 5
Điều nào đúng khi nói về việc chỉnh `Transform Pivot Point`?

A. Thao tác này tự tạo rig hoàn chỉnh.  
B. Nó thay đổi tâm của phép biến đổi đang thực hiện.  
C. Nó tự hợp nhất mesh chồng nhau.  
D. Nó làm tăng độ phân giải hình học.

**Đáp án:** B.  
**Giải thích:** Pivot quy định tâm quay/scale trong thao tác, không thay thế bước rigging.

## 9. Tổng kết

Bản lề rõ ràng cần **hình học phân lớp**, **tâm quay hợp lý** và **kết nối mesh sạch**. Sau bài này, bạn có thể tạo nửa khớp lặp lại bằng nhân bản, tách, xoay quanh cursor và nối bề mặt mà không phải dựng hoàn toàn từ primitive mới.
