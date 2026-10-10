# Bài 03 — Tách các chi tiết đối xứng thành object độc lập

**Loại bài:** Lesson  
**Chủ đề:** `Edit Mode`, `Wireframe`, `Box Select`, `P > Selection`, chỉnh sửa nhiều object

## 1. Tóm tắt

Khi chuẩn bị rigging robot Mech, không thể để các khớp và bộ phận chân hai bên luôn thuộc chung một object nếu chúng cần chuyển động độc lập. Sau khi `Mirror Modifier` được Apply, hai phía tồn tại dưới dạng mesh thực nhưng vẫn có thể chung một object. Bài học này hướng dẫn chọn chính xác phần hình học và dùng `Separate` để tách hai phía.

## 2. Mục tiêu học tập

Sau bài học, người học có thể:

- Phân biệt **Apply Mirror** với **Separate**: hai bước có mục đích khác nhau.
- Sử dụng `Wireframe` và `Box Select` để chọn hình học xuyên qua mô hình.
- Tách một phần mesh bằng `P > Selection`.
- Tách nhiều object đối xứng trong một lượt bằng **Multi-Object Edit Mode**.
- Kiểm tra mỗi bên chân trở thành object riêng sau khi tách.

## 3. Xác định những chi tiết cần tách

Khớp hông, phần đùi, phần cẳng chân và các mảng giáp chuyển động thường cần phân biệt bên trái và bên phải. Ví dụ, robot đi bộ phải có khả năng nhấc chân trái trong khi chân phải vẫn làm trụ. Nếu hai cụm chân dùng chung một object không được phân tách phù hợp, bước tạo bộ điều khiển sẽ khó quản lý.

Trước khi tách, cần đảm bảo:

1. Các object đối xứng đã được **Apply `Mirror Modifier`**.
2. Phần hình học trái và phải tồn tại thực trong `Edit Mode`.
3. Đã xác định rõ cụm nào phải xoay độc lập và cụm nào sẽ được gộp lại ở bước tiếp theo.
4. File đang được làm việc trên một bản sao đã lưu.

**Quan trọng:** Apply Mirror không tự tạo hai object. Nó chỉ chuyển kết quả phản chiếu thành hình học thực. Để tách object, vẫn cần `Separate`.

## 4. Tách một object đối xứng

### 4.1. Chọn toàn bộ phần hình học một phía

1. Chọn một object có hai bộ phận đối xứng, ví dụ cặp khớp hông.
2. Nhấn `Tab` vào `Edit Mode`.
3. Dùng menu `Z` để chuyển sang `Wireframe`.
4. Nhấn `Alt + A` để bỏ chọn tất cả thành phần mesh (hoặc dùng lệnh `Select > None`).
5. Nhấn `B` để bật `Box Select`.
6. Kéo khung chọn bao toàn bộ đỉnh của **một bên khớp**, tránh quét vào phía còn lại.

`Wireframe` cho phép thấy và chọn hình học cả ở phía sau. Nếu chỉ chọn trong chế độ `Solid` mà không bật chế độ xuyên thấu, rất dễ bỏ sót các đỉnh khuất.

### 4.2. Separate thành object mới

1. Khi hình học một phía còn được chọn, nhấn `P`.
2. Chọn **Selection** trong menu `Separate`.
3. Chuyển về `Solid` thông qua menu `Z`.
4. Nhấn `Tab` về `Object Mode`.
5. Chọn lần lượt hai phía và kiểm tra: mỗi phía phải là một object riêng.
6. Lưu file bằng `Ctrl + S`.

Việc Separate không tự tạo khớp quay hoặc đặt pivot chính xác. Nó chỉ chuẩn bị cấu trúc object để có thể thiết lập trục quay trong công đoạn rigging.

## 5. Tách đồng thời nhiều bộ phận bằng Multi-Object Edit Mode

Khi robot có hàng loạt object đối xứng như đùi, cẳng chân, giáp và khớp, lặp lại thao tác cho từng object có thể mất thời gian. Có thể chọn nhiều Mesh object và vào `Edit Mode` đồng thời.

Quy trình:

1. Ở `Object Mode`, chọn tất cả những Mesh object còn gồm cả hai phía, sau khi đã Apply Mirror.
2. Nhấn `Tab` để mở **Multi-Object Edit Mode**.
3. Chuyển sang `Wireframe` với `Z`.
4. Dùng `Alt + A` bỏ chọn, rồi `B` khoanh toàn bộ hình học thuộc cùng **một phía robot** trên các object đang chỉnh sửa.
5. Nhấn `P > Selection` để tách phần đã chọn từ các object tương ứng.
6. Trở về `Solid` rồi `Object Mode`.
7. Kiểm tra từng cặp; đảm bảo không object nào còn giữ hình học của cả hai bên nếu dự kiến điều khiển riêng.

Điều kiện quan trọng là các object đang chọn phải là Mesh phù hợp để vào chế độ chỉnh sửa chung. Các object dạng đèn hoặc ảnh tham khảo không thuộc nhóm này.

## 6. Kiểm tra kết quả tách

Đừng đánh giá thành công chỉ bằng việc mô hình vẫn trông như cũ. Cần xác nhận **cấu trúc object** thay đổi đúng:

| Hạng mục | Điều cần thấy |
| --- | --- |
| Hai khớp hông | Chọn được trái và phải độc lập |
| Hai đùi | Mỗi đùi thuộc object hoặc cụm bên tương ứng |
| Hai cẳng chân | Không còn bị ràng buộc chung object trái/phải |
| Mảng giáp | Đã tách về phía phù hợp để gộp với cụm chuyển động |
| Ngoại hình | Vẫn giữ vị trí, vật liệu và hình dáng như trước |

Sau khi tách, có thể tạm ẩn các object đã kiểm tra bằng `H`, và dùng `Alt + H` để hiện lại. Đây chỉ là cách quản lý viewport, không phải xóa dữ liệu.

## 7. Lỗi thường gặp và thực hành

| Lỗi | Vì sao xảy ra | Cách khắc phục |
| --- | --- | --- |
| Tách xong một bên bị thiếu mặt | Box Select không chọn đủ hình học khuất | Chọn lại trong Wireframe, kiểm tra từ nhiều góc nhìn |
| Hai bên vẫn chọn cùng nhau | Mirror chưa Apply hoặc chưa Separate | Xem modifier stack và làm lại `P > Selection` |
| Tách lẫn chi tiết bên kia | Khung chọn vượt trục giữa hoặc chọn nhầm đảo mesh | Thu nhỏ vùng chọn, kiểm tra các đỉnh gần tâm |
| Một object mới rỗng | Thao tác Separate tạo ra đối tượng không chứa hình học hữu ích | Kiểm tra Edit Mode rồi xóa object rỗng nếu chắc chắn không cần |

**Thực hành:** Dùng một cặp khớp hông để luyện tách đơn; sau đó tách đồng thời các object đối xứng ở đùi, cẳng chân và giáp. Chụp hoặc ghi lại danh sách object trước và sau, xác nhận tất cả cặp trái/phải có thể chọn độc lập.

## 8. Câu hỏi ôn tập

### Câu 1

Apply `Mirror Modifier` đã tự tách chân trái và chân phải thành hai object chưa?

A. Chưa, còn phải dùng Separate nếu muốn hai object.  
B. Rồi, Blender tự tạo Armature cho mỗi chân.  
C. Rồi, mỗi chân lập tức có animation.  
D. Chưa, vì Mirror chỉ dùng cho vật liệu.

**Đáp án:** A  
**Giải thích:** Apply tạo hình học thực cho phía đối xứng, còn `Separate` mới chuyển vùng mesh được chọn thành object riêng.

### Câu 2

Để tách vùng mesh đã chọn trong Edit Mode, cần dùng thao tác nào?

A. `Ctrl + J`  
B. `H`  
C. `P > Selection`  
D. `F2`

**Đáp án:** C  
**Giải thích:** `P` gọi lệnh Separate; `Selection` tách các thành phần mesh đang chọn.

### Câu 3

Vì sao `Wireframe` hữu ích khi dùng `Box Select` để chọn nửa chân?

A. Tự sửa trọng tâm của mesh.  
B. Giúp lựa chọn cả hình học ở phía sau, giảm bỏ sót đỉnh khuất.  
C. Tự hàn các đỉnh trong khu vực chọn.  
D. Tự Apply tất cả modifier.

**Đáp án:** B  
**Giải thích:** Wireframe hiển thị hình học xuyên qua bề mặt, thuận lợi cho thao tác chọn một phía đầy đủ.

### Câu 4

Khi nhiều Mesh object đối xứng cần tách, lựa chọn nào tiết kiệm thao tác mà vẫn phù hợp?

A. Chuyển tất cả thành Light.  
B. Đổi màu material rồi render.  
C. Xóa những object bên phải.  
D. Vào Multi-Object Edit Mode, chọn nửa cần tách và dùng Separate.

**Đáp án:** D  
**Giải thích:** Blender cho phép chỉnh sửa đồng thời nhiều Mesh object và tách phần đang chọn trong cùng phiên chỉnh sửa.

### Câu 5

Sau Separate, thao tác kiểm chứng quan trọng nhất là gì?

A. Kiểm tra có thể chọn từng phía độc lập, đồng thời ngoại hình vẫn đúng.  
B. Xóa toàn bộ mảng giáp.  
C. Đổi tất cả object thành cùng tên.  
D. Apply Bevel cho mọi chi tiết.

**Đáp án:** A  
**Giải thích:** Mục tiêu là có cấu trúc trái/phải riêng để rigging mà không phá ngoại hình robot.

## 9. Tổng kết

Quy trình tách đối xứng là **Apply Mirror → chọn hình học một bên → `P > Selection` → kiểm tra hai object**. Khi có nhiều bộ phận, Multi-Object Edit Mode giúp thao tác đồng thời. Đúng cấu trúc object quan trọng không kém việc mô hình vẫn trông đẹp.
