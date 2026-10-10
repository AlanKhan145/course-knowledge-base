# Bài 03. Dựng khối đầu đối xứng với Mirror Modifier

## 1. Tóm tắt và mục tiêu

Đầu robot thường có kết cấu gần đối xứng. Thay vì dựng độc lập hai bên, có thể chỉnh một nửa mesh và để `Mirror Modifier` dựng nửa còn lại. Kỹ thuật này giảm thao tác, giữ tỷ lệ nhất quán và giúp sửa silhouette nhanh.

Mục tiêu: tạo nửa mesh đầu, thêm Mirror theo đúng trục, kiểm soát `Merge`/`Clipping`, và tạo các mặt vát chính.

## 2. Tạo khối cơ sở

1. Đưa `3D Cursor` về gốc thế giới.
2. Dùng `Shift + A → Mesh → Cube` để thêm khối đầu.
3. Dùng `G`, `S` và chế độ Edit (`Tab`) để đặt Cube phù hợp ảnh mặt trước và mặt bên.
4. Chuyển sang `Wireframe` bằng menu `Z` để nhìn xuyên và chọn các đỉnh ở cả chiều sâu.
5. Sử dụng `1` trên hàng phím số để vào Vertex Select và `B` để khoanh các đỉnh cần chỉnh.

Trong Edit Mode, `A` dùng để **chọn tất cả**; `Alt + A` thường dùng để **bỏ chọn tất cả**. Không nhầm với `Numpad 1` để chuyển góc nhìn.

## 3. Chia đôi và tạo Mirror

1. Vào Edit Mode, nhấn `Ctrl + R` để tạo một Loop Cut đi qua tâm khối.
2. Click trái để xác nhận rồi click phải để đặt đường cắt về vị trí giữa mặc định.
3. Chuyển Wireframe, chọn toàn bộ đỉnh ở một bên đường cắt.
4. Nhấn `X → Vertices` để xóa nửa đó.
5. Mở `Modifier Properties → Add Modifier → Generate → Mirror` và kiểm tra trục phản chiếu tương ứng.
6. Bật `Merge` và `Clipping` khi muốn hai nửa liên tục tại đường giữa.

**Nguyên lý:** Mirror lấy mặt phẳng phản chiếu từ **origin của object và trục local của object**, không đơn thuần lấy tâm màn hình. Nếu gốc đối tượng lệch hoặc transform khiến trục không như mong muốn, hai nửa có thể cách nhau.

## 4. Tạo dáng đầu bằng biến đổi đỉnh

Sử dụng ảnh Side (`Numpad 3`) và Front (`Numpad 1`). Khoanh các hàng đỉnh trên, dưới và phía gáy để điều chỉnh lần lượt:

- `G → Z`: tăng/giảm chiều cao mép trên hoặc dưới.
- `G → Y`: dời phần gáy và mũi đầu theo chiều sâu.
- `Ctrl + B`: tạo vát trên cạnh được chọn để làm mềm góc gấp của silhouette.

Không bo tròn tất cả. Giữ một số cạnh sắc rõ ràng để robot vẫn có cảm giác giáp kim loại thay vì khối hữu cơ.

## 5. Xử lý Mirror bị hở

| Triệu chứng | Nguyên nhân nên kiểm tra | Cách sửa |
| --- | --- | --- |
| Hai nửa có khe ở giữa | Điểm biên không nằm đúng mặt phẳng đối xứng | Kiểm tra origin; đặt đỉnh biên lên trục giữa và bật Merge |
| Đỉnh giữa bị kéo tách ra khi chỉnh | Chưa dùng `Clipping` đúng cách | Bật Clipping; đưa đỉnh về giữa nếu đang nằm ngoài |
| Hai nửa bị phản chiếu lệch hướng | Trục Mirror hoặc origin không đúng | Kiểm tra trục local, origin và ảnh tham chiếu |
| Hình nhìn đúng Front nhưng sai Side | Chiều sâu bị đặt sai | Kiểm tra Numpad 3 và ảnh bên |

`Clipping` hạn chế đỉnh vượt qua mặt phẳng gương khi chúng đã ở đúng vùng giữa; nó không tự sửa mọi đỉnh nằm xa trục.

## 6. Thực hành và tổng kết

**Thực hành:** Tạo một khối đầu có nóc, đáy và gáy tương đối đúng, bo ít nhất hai cạnh của silhouette; lưu trạng thái `mech_head_base.blend` hoặc checkpoint tương đương.

**Kiểm tra:** Khi điều chỉnh một nửa mesh, bên còn lại thay đổi đối xứng; đường giữa không có khe hở nhìn thấy.

**Ghi nhớ:** Đúng origin và thiết lập Mirror quan trọng hơn việc thêm thật nhiều polygon.

## 7. Câu hỏi ôn tập

### Câu 1

Mirror Modifier phản chiếu hình học dựa trên thành phần nào?

A. Vị trí camera  
B. Origin và trục local của object  
C. Ánh sáng môi trường  
D. Độ phân giải render  

**Đáp án:** B

**Giải thích:** Gốc và trục của object xác định mặt phẳng đối xứng.

### Câu 2

Lệnh nào tạo Loop Cut ở vị trí giữa Cube?

A. Shift + D  
B. I  
C. Ctrl + R  
D. Ctrl + J  

**Đáp án:** C

**Giải thích:** Ctrl + R thêm vòng cắt; click phải sau click trái thường đặt đường cắt vào tâm mặc định.

### Câu 3

Vì sao nên bật Merge cho đường nối giữa hai nửa?

A. Để các đỉnh sát mặt phẳng gương có thể được hợp nhất  
B. Để tạo UV Map  
C. Để xuất MP4  
D. Để tô sáng bằng HDRI  

**Đáp án:** A

**Giải thích:** Merge giúp đường biên phản chiếu không bị tách rời khi đỉnh nằm đúng vùng hợp nhất.

### Câu 4

Muốn sửa hình đầu theo chiều sâu, nên quan sát góc nào?

A. Front  
B. Top  
C. Back  
D. Side  

**Đáp án:** D

**Giải thích:** Ảnh Side và Numpad 3 cho thấy độ sâu trước–sau.

### Câu 5

Khi chọn các đỉnh bị che khuất, bước nào hữu ích nhất?

A. Render ngay  
B. Bật Wireframe/X-Ray rồi khoanh chọn  
C. Tăng số frame  
D. Bật Motion Blur  

**Đáp án:** B

**Giải thích:** Chế độ nhìn xuyên cho phép chọn cả các đỉnh phía sau mesh.
