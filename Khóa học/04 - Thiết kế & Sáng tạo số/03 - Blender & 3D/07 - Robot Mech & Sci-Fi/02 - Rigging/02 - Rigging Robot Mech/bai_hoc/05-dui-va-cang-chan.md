# Bài 05 — Rig đùi và cẳng chân bằng tâm khớp chính xác

## 1. Tóm tắt bài học

Chân robot có nhiều khối cứng và các khớp nối. Để đùi và cẳng chân gập đúng, xương phải được đặt tại tâm khớp, theo hướng ổn định và có hệ phân cấp hợp lý. Bài này dựng hai bone `Upper Leg.R`, `Lower Leg.R`, gắn mesh tương ứng và liên kết với khớp hông.

## 2. Mục tiêu học tập

- Căn tâm xương đùi và cẳng chân theo mesh thay vì ước lượng bằng mắt.
- Sử dụng `Cursor to Selected`, `Selection to Cursor` và phép scale có loại trừ trục.
- Extrude bone bằng `E` để tạo chuỗi chân.
- Gắn mesh đùi/cẳng chân đúng bone.
- Parent nhánh chân dưới xương hông và kiểm tra chuyển động dây chuyền.

## 3. Cấu trúc bộ xương chân

```text
Hip Rotation.R
└── Upper Leg.R
    └── Lower Leg.R
```

Trong hệ này, `Upper Leg.R` điều khiển phần đùi, còn `Lower Leg.R` điều khiển cẳng chân. Khi xoay bone đùi, các bone con cần đi theo. Ngược lại, gập cẳng chân không nên làm di chuyển bộ điều khiển cấp trên.

Cả hai khớp trong cấu hình thực hành đều gập chủ yếu quanh **trục X**.

## 4. Căn vị trí xương đùi

### 4.1. Lấy tâm khớp trên

1. Chọn mesh phần đùi trên, vào `Edit Mode`.
2. Chọn những vòng đỉnh ở vị trí trục khớp bằng `Alt` và `Shift + Alt`.
3. Nhấn `Shift + S → Cursor to Selected` để đặt con trỏ tại tâm vùng chọn.
4. Quay về `Object Mode`, chọn armature và vào `Edit Mode`.
5. Nhấn `Shift + A` để tạo bone tại vùng con trỏ.
6. Chỉnh hướng bằng `R` trong góc nhìn phù hợp và đặt `Tail` dọc theo đùi. Nếu cần, dùng `Pivot Point = 3D Cursor` khi xoay để bone bám vào tâm đã chọn.

### 4.2. Giữ xương thẳng khi căn sang khớp tiếp theo

Ở khớp đùi–cẳng chân, chỉ di chuyển đầu hoặc đuôi xương bằng phép snap có thể làm bone bị nghiêng ngoài ý muốn. Khi đó có thể dùng phép scale có loại trừ một trục để **căn các tọa độ còn lại theo 3D Cursor**.

Quy trình theo trường hợp minh họa:

1. Đặt `3D Cursor` vào tâm khớp mong muốn trên mesh.
2. Chọn đúng `Head` hoặc `Tail` cần căn trong armature `Edit Mode`.
3. Chuyển `Pivot Point` sang `3D Cursor`.
4. Dùng `S`, `Y`, `0` để triệt tiêu độ lệch trên Y khi đó là trục cần căn, hoặc dùng `S`, `Shift + X`, `0` khi cần đưa tọa độ Y và Z về tâm con trỏ nhưng giữ nguyên tọa độ X.
5. So sánh ở `Numpad 7` (góc trên) và `Numpad 3` (góc bên).

**Chú ý:** đây là kỹ thuật chọn lọc trên một đầu/đuôi bone. Không áp dụng bừa lên toàn bộ xương hoặc nhiều mesh, vì giá trị `0` có thể làm dẹt các tọa độ được chọn.

## 5. Tạo cẳng chân bằng Extrude

1. Trong `Edit Mode` của armature, chọn `Tail` xương đùi tại khớp gối.
2. Nhấn `E` để extrude bone con.
3. Hạ đầu cuối của bone mới về phía khớp dưới.
4. Chọn mesh cẳng chân, vào `Edit Mode`, lấy tâm khớp bằng vòng đỉnh và `Shift + S → Cursor to Selected`.
5. Quay lại armature để căn điểm cuối của bone mới; dùng kỹ thuật giữ thẳng trục vừa học nếu cần.
6. Đặt tên `Upper Leg.R` và `Lower Leg.R` bằng `F2`.

Dùng `Wireframe` khi xương hoặc mesh che nhau. Tránh nhầm một đầu xương bên ngoài với tâm khớp thực sự bên trong.

## 6. Khóa chuyển động và gắn mesh

Trong `Pose Mode`, lần lượt chọn `Upper Leg.R`, `Lower Leg.R`:

- Khóa `Location` và `Scale`.
- Khóa các kênh rotation không sử dụng; giữ tự do `Rotation X`.
- Xoay thử bằng `R`, sau đó `Alt + R` để reset.

Gắn mesh như sau:

1. Trong `Object Mode`, chọn mesh đùi, sau đó chọn armature.
2. Vào `Pose Mode`, chọn `Upper Leg.R`, nhấn `Ctrl + P → Bone`.
3. Lặp lại với mesh cẳng chân và `Lower Leg.R`.
4. Nếu xoay hông nhưng toàn bộ chân chưa đi theo, vào armature `Edit Mode`, chọn `Upper Leg.R` rồi `Shift` chọn `Hip Rotation.R`, `Ctrl + P → Keep Offset`.
5. Kiểm tra lại bằng cách xoay xương hông, xương đùi và cẳng chân.

## 7. Kết quả và thực hành

**Checkpoint:** đùi và cẳng chân gập quanh các tâm trục đã căn; bone đùi điều khiển nhánh cẳng chân; hông điều khiển toàn chân; các mesh rigid theo đúng xương.

**Lỗi thường gặp:** bone lệch khỏi tâm gối; toàn chân không đi theo hông vì thiếu parenting; gắn mesh cẳng chân vào bone đùi; quên chuyển pivot về `Median Point` khiến thao tác pose khó kiểm soát.

**Thực hành:** tạo tư thế co chân bằng cách xoay đùi và cẳng chân, kiểm tra từ ba góc nhìn, rồi dùng `Alt + R`, `Alt + G`, `Alt + S` để khôi phục.

## 8. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Tại sao chọn vòng đỉnh khi đặt tâm khớp gối?

A. Để tạo chất liệu kim loại  
B. Để giảm số bone  
C. Để tự động parent mesh  
D. Để định vị tâm khớp chính xác hơn ước lượng bằng mắt  

**Đáp án: D.** Các vòng đỉnh giúp lấy vị trí tâm có cơ sở từ hình học của chính khớp.

**Câu 2.** Trong chuỗi chân, bone nào là cha trực tiếp của Lower Leg.R?

A. Upper Leg.R  
B. Master Control  
C. Head  
D. Foot IK.R  

**Đáp án: A.** Lower Leg.R được tạo tiếp từ Upper Leg.R nên nhận chuyển động của xương đùi.

**Câu 3.** Trong ngữ cảnh đã đặt Pivot tại 3D Cursor, S → Shift + X → 0 có tác dụng gì?

A. Khóa rotation X  
B. Xóa tất cả bone  
C. Thu tọa độ Y và Z về tọa độ con trỏ, giữ thành phần X  
D. Di chuyển toàn bộ robot theo X  

**Đáp án: C.** Shift+X loại trừ trục X; scale 0 trên các thành phần còn lại đưa chúng về tâm pivot.

**Câu 4.** Khi xoay Hip Rotation.R mà chân không đi theo, cần kiểm tra điều gì?

A. Noise Texture  
B. Quan hệ cha–con giữa Upper Leg.R và Hip Rotation.R  
C. Màu nền viewport  
D. Số lượng camera  

**Đáp án: B.** Nếu nhánh chân chưa được parent vào hông, xoay hông không truyền chuyển động tới đùi và cẳng chân.

**Câu 5.** Trục chuyển động được giữ mở cho đùi và cẳng chân trong bài là gì?

A. Z  
B. Y  
C. Tất cả  
D. X  

**Đáp án: D.** Các khớp gập của chân trong cấu hình thực hành chủ yếu xoay quanh X.

## 9. Tổng kết

Bài học đã hoàn thành các nội dung: Tạo Upper Leg.R và Lower Leg.R, snap bằng Cursor và S Shift X 0, parent các chi tiết và kiểm tra. Hãy bảo đảm các checkpoint đều đạt trước khi tiếp tục thao tác trên rig, và lưu dự án Blender ở trạng thái mong muốn.
