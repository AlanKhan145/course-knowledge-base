# Bài 03 — Tạo giáp cẳng chân bằng Solidify và Mirror

## 1. Tóm tắt

Các tấm giáp hard-surface cần hai yếu tố: **hình bao chính xác** và **chiều dày nhất quán**. Thay vì tạo giáp bằng một khối đặc rồi chỉnh từng mặt, ta tách bề mặt từ lõi cẳng chân, dùng `Solidify` để sinh độ dày, `Mirror` để đối xứng và `Bevel` để làm mềm cạnh. Sau đó các tấm được cắt thành dáng cơ khí và nhân bản để bọc quanh lõi.

## 2. Mục tiêu học tập

- Tách mặt từ lõi thành một object giáp độc lập bằng `Shift + D` và `P`.
- Hiểu công dụng và thứ tự `Solidify`, `Mirror`, `Bevel` trong quy trình này.
- Điều chỉnh độ dày của giáp, kiểm tra tùy chọn `Even Thickness`.
- Cắt, gọt hình dạng giáp theo hình tham chiếu bằng vòng cạnh và chỉnh đỉnh.
- Dùng `Vertex Bevel` để tạo góc xén đặc trưng của thiết kế khoa học viễn tưởng.

## 3. Tách bề mặt giáp khỏi lõi

1. Chọn lõi cẳng chân trong `Object Mode` và vào `Edit Mode`.
2. Chuyển sang `Face Select`, chọn một mặt ở vị trí có thể làm nền cho tấm giáp.
3. Nhấn `Shift + D` để nhân bản mặt; dùng `G` và trục phù hợp (trong hướng bố trí này là Y) kéo phần mặt ra khỏi bề mặt lõi một chút.
4. Nhấn `P` → `Selection` để biến hình học sao chép thành object riêng.
5. Trở lại `Object Mode`, chọn object giáp mới rồi vào `Edit Mode`; từ Side View và Wireframe, dùng `G`, `S`, `S`, `Z` để chỉnh chiều dài mặt sao cho bám theo vùng cần bọc.
6. Dùng `E` đùn các cạnh/mặt theo đúng hướng để mở rộng biên tấm giáp. Kiểm tra bề rộng ở `Top View` và điều chỉnh `S`, `X`.

Điểm quan trọng: giáp được **sao chép từ hình học có sẵn**, nên có điểm xuất phát cùng bề mặt với lõi. Tuy vậy phải tách riêng, vì độ dày, mép cắt và vị trí của giáp cần được điều chỉnh độc lập.

## 4. Đặt hệ modifier cho giáp

### 4.1. Solidify — sinh độ dày

Với object giáp đã chọn, mở `Modifier Properties` → `Add Modifier` → `Solidify`. Điều chỉnh `Thickness` đến khi tấm giáp đủ dày mà không chiếm quá nhiều không gian. Bật `Even Thickness` nếu chiều dày không đều tại các phần nghiêng.

`Solidify` thích hợp với một bề mặt mở: nó sinh lớp vỏ có bề dày, trong khi bản gốc vẫn có thể chỉnh bằng các thao tác mesh. Vì vậy các mặt nắp tự tạo không cần thiết được loại bỏ trước khi dùng modifier.

### 4.2. Mirror — tạo phần đối xứng

Giáp cần giữ đối xứng theo bố cục chân của robot. Sau `Solidify`, đặt `Mirror` tiếp theo khi muốn kiểm tra lớp vỏ dày trước lúc đối xứng. Kiểm tra trục mirror và vị trí origin để bảo đảm bản giáp nằm đúng phía.

### 4.3. Bevel — xử lý các cạnh sắc

Đặt `Bevel` cuối trong chuỗi **`Solidify → Mirror → Bevel`** của bài này. Bevel làm mềm các cạnh lộ sáng trên tấm kim loại. Độ rộng vát chỉ cần phù hợp tỷ lệ vật thể; không có giá trị cố định được áp dụng cho mọi robot.

**Checkpoint:** Trong `Solid View`, tấm giáp thể hiện rõ cạnh dày, phần đối xứng nằm đúng chỗ và cạnh vát không làm biến dạng quá mạnh các góc nhỏ.

## 5. Gọt dáng tấm giáp theo tham chiếu

1. Nếu các object khác chắn tầm nhìn, chọn và `H` để ẩn tạm.
2. Trong Edit Mode của giáp, dùng `Ctrl + R` thêm vòng cắt ở vùng trên và vùng dưới; `G` hai lần để trượt cạnh vào vị trí.
3. Thêm các vòng cắt khác gần vùng muốn khoét góc, quan sát ở Side View (`Numpad 3`) và `Wireframe`.
4. Box-select nhóm đỉnh thích hợp, `S`, `Z` hoặc `G`, `Z` để tạo độ lệch; xóa đỉnh thừa bằng `X` → `Vertices`.
5. Trở lại Solid View để chắc chắn đường biên giáp có khoảng hở và không xé rách vùng mesh còn lại.

Ở bước này, **điều chỉnh hình học nguồn** sẽ ảnh hưởng đến lớp bề dày do Solidify tạo ra. Đây là lợi ích của việc dựng giáp từ một tấm mặt đơn giản.

## 6. Tạo tấm giáp thứ hai và cắt góc

1. Trong Edit Mode, chọn toàn bộ phần hình học tạo tấm giáp ban đầu rồi `Shift + D`.
2. Đưa bản sao đến vùng giáp còn lại. Ở `Top View`, dùng `R`, nhập `180`, `Enter` nếu cần xoay ngược hướng của tấm giáp.
3. Căn lại ở Side View theo chiều Y và Z; xóa các đỉnh thừa để hai tấm không xuyên nhau.
4. Ở chế độ Wireframe và `Vertex Select`, chọn các đỉnh ở vị trí cần xén góc. Nhấn `Ctrl + Shift + B` để **Vertex Bevel**, rồi điều chỉnh độ vát theo tham chiếu.
5. Kiểm tra hình dáng từ trên xuống. Nếu giáp vẫn trông như đang lơ lửng, ghi nhận các vị trí cần tạo thanh liên kết ở bước lắp ráp giáp.

**Lưu ý phân biệt:** `Ctrl + B` thường vát cạnh khi chọn edge; trong thao tác này chỉ chọn các đỉnh góc, nên dùng `Ctrl + Shift + B` để vát đỉnh.

## 7. Lỗi thường gặp

| Vấn đề | Nguyên nhân | Cách xử lý |
| --- | --- | --- |
| Giáp quá dày | `Thickness` cao so với khoảng trống | Giảm Thickness; so cả bên và trên |
| Một đầu giáp dày hơn đầu còn lại | Hướng và góc giữa các mặt | Kiểm tra `Even Thickness` |
| Giáp bị đóng mặt kỳ lạ | Vẫn còn mặt không cần thiết trong mesh nguồn | Xóa các mặt nắp trước khi Solidify |
| Xén góc không ra hình | Dùng edge bevel khi chỉ có vertex | Sử dụng `Ctrl + Shift + B` |
| Giáp đè lên nhau | Nhân bản/định vị chưa đúng | Chỉnh Y/Z và bỏ đỉnh thừa ở từng tấm |

## 8. Bài thực hành

Dựng **hai tấm giáp cẳng chân** từ các mặt sao chép của lõi, thiết lập `Solidify → Mirror → Bevel`, điều chỉnh độ dày và tạo ít nhất một góc xén bằng `Vertex Bevel`. Kiểm tra cả mặt trước, mặt bên và mặt trên để xác nhận các tấm bọc lõi, không cắt xuyên nhau.

## 9. Câu hỏi ôn tập

### Câu 1

Vì sao nên tách mặt giáp ra object riêng?

A. Vì Blender không thể chọn nhiều mặt.  
B. Vì chỉ object riêng mới được lưu.  
C. Vì cần chỉnh độ dày, viền giáp và modifier độc lập với lõi.  
D. Vì chỉ object riêng mới có thể hiển thị Wireframe.

**Đáp án:** C. **Giải thích:** Lõi và giáp có hình học, chiều dày và yêu cầu chỉnh sửa khác nhau.

### Câu 2

Modifier nào tạo độ dày từ một bề mặt giáp mỏng?

A. `Solidify`.  
B. `Mirror`.  
C. `Array`.  
D. `Subdivision Surface`.

**Đáp án:** A. **Giải thích:** Solidify tạo một lớp vỏ có chiều dày từ mesh mặt ban đầu.

### Câu 3

Thứ tự modifier được dùng trong quy trình của bài là gì?

A. `Bevel → Solidify → Mirror`.  
B. `Mirror → Bevel → Solidify`.  
C. `Mirror → Solidify → Bevel` bắt buộc cho mọi dự án.  
D. `Solidify → Mirror → Bevel`.

**Đáp án:** D. **Giải thích:** Trong quy trình này giáp được làm dày trước, đối xứng sau, rồi xử lý cạnh bằng Bevel.

### Câu 4

Nếu chiều dày giáp thay đổi giữa các vùng nghiêng, tùy chọn nào đáng kiểm tra?

A. Viewport Shading.  
B. `Even Thickness`.  
C. `Auto Keying`.  
D. Camera clipping.

**Đáp án:** B. **Giải thích:** Tùy chọn này của Solidify giúp chiều dày giữa các vùng được đồng đều hơn.

### Câu 5

Khi cần xén một góc tại nhóm đỉnh được chọn, lệnh nào thích hợp nhất?

A. `Ctrl + Shift + B`.  
B. `Alt + H`.  
C. `Ctrl + J`.  
D. `Shift + C`.

**Đáp án:** A. **Giải thích:** `Vertex Bevel` vát góc tại đỉnh, phù hợp với đường bao hard-surface.

## 10. Tổng kết

Quy trình chế tạo giáp là **lấy mặt từ lõi → tách object → dựng biên giáp → Solidify → Mirror → Bevel → cắt hình → nhân bản và xén góc**. Tấm giáp sau cùng có ngoại hình rõ ràng, nhưng cần thêm các thanh chống và bu lông để trông như được gắn vào thân máy.
