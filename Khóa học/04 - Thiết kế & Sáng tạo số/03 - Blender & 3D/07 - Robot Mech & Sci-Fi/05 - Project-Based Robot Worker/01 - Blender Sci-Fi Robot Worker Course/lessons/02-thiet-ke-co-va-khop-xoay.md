# Bài 02 — Thiết kế cổ robot và các khớp xoay cơ khí

## 1. Tóm tắt

Cổ robot là cầu nối giữa vỏ đầu và thân, đồng thời quyết định hai hướng chuyển động quan trọng: **gật đầu** và **quay nhìn trái/phải**. Bài học xây dựng bộ khớp cơ khí từ các khối hộp, trụ và vòng đỡ. Hình học được tổ chức thành những phần có tâm xoay có chủ đích, để việc gắn `Origin` và điều khiển trong giai đoạn rig đơn giản hơn.

## 2. Mục tiêu học tập

- Dựng khung cổ từ những phần đầu đã hoàn thành hoặc từ các primitive.
- Kết hợp `Duplicate`, `Extrude`, `Inset`, `Separate` và `Mirror` để tạo giá đỡ và cụm trục.
- Dùng `Cylinder` và những vòng đỉnh để dựng khớp dạng ống, vành hoặc chốt xoay.
- Kiểm tra và sửa normal cho các phần có nhiều mặt mới được tạo.
- Phân chia bộ phận theo chức năng quay thay vì gộp thành một mesh bất động.

## 3. Khớp cổ cần hoạt động như thế nào?

Một khớp kiểu máy khác với cổ mềm của nhân vật hữu cơ. Thay vì uốn cong một dải bề mặt liên tục, robot có các bộ phận cứng liên kết bằng trục. Cụm nối gần đầu cho phép đầu nghiêng lên/xuống; cụm đế ở dưới tạo trục quay ngang cho toàn bộ phần đầu. Vì vậy, từ lúc modeling phải hình dung điểm đặt trục xuyên qua mỗi khớp.

Nếu mô hình được dựng đẹp nhưng trục quay lại nằm lệch, khi xoay phần đầu sẽ trượt thành một vòng cung không mong muốn. Hãy coi tâm của mỗi `Cylinder` hoặc lỗ khớp là một mốc quan trọng cho việc rig.

## 4. Dựng các giá đỡ nối với đầu

### 4.1. Tạo miếng đỡ dạng hộp

1. Chọn một mặt phù hợp ở vùng dưới/sau của đầu robot.
2. Có thể `Shift+D` nhân bản phần mặt rồi kéo xuống; dùng `S` để tạo thanh kim loại mỏng.
3. Dùng `E` đùn phần mặt nhằm tạo độ dày cho miếng đỡ.
4. Xóa những mặt nằm hoàn toàn bên trong đầu khi chúng không cần thiết (`X → Faces`).
5. Di chuột lên phần geometry liên thông, nhấn `L`, sau đó `Shift+N` nếu shading có hướng mặt bất nhất.

Lặp lại để có thêm một giá đỡ hoặc một hộp nhỏ bên cạnh. Khi cần dựng đối xứng, dùng `Mirror Modifier` cho cụm giá đỡ; khi cần hai phần hoạt động riêng, tách chúng thành hai object.

### 4.2. Thêm bậc và gân cơ khí

Chọn mặt cần có gờ, `I` để thu viền, sau đó `E` đùn ra tạo đường bậc. Các mặt ở phía giáp đường tâm phải được kiểm tra khi Mirror hoạt động: nếu vướng đường phản chiếu, xử lý viền Inset và giới hạn phần được đùn cho phù hợp. Với các thanh/hộp chồng nhau, xóa những mặt bên trong không mang giá trị tạo hình.

Mặt cắt của khung cổ nên gọn và đủ khoảng hở cho đầu nghiêng. Đừng lấp kín toàn bộ không gian, vì cổ là cơ cấu cơ khí cần trông có thể chuyển động.

## 5. Tạo chốt hình trụ và gối khớp

### 5.1. Dựng cụm chốt ngang

Dùng `Shift+A → Mesh → Cylinder` để tạo một trục nối. Trong `Edit Mode`, dùng `R Y 90` hoặc phép xoay đúng theo hướng lắp để trục trụ nằm ngang. Dùng `S` thay đổi tiết diện, `G X/Y/Z` đặt trục vào đúng hai bên khung. Trục đi qua tâm hai giá đỡ giúp giải thích trực quan tại sao đầu có thể gật.

Có thể thêm hai vòng ở hai đầu chốt bằng `Inset`–`Extrude` hoặc bằng cách nhân bản phần mặt tròn. Khi chọn vòng đỉnh, `Alt + click` lên cạnh giúp chọn một vòng, sau đó `S` thay đổi bán kính. Nhớ kiểm tra vị trí chốt từ góc trước và góc bên.

### 5.2. Tạo ống nối dọc và cụm đế

Phần cổ đi xuống thân có thể là một ống hoặc trụ vuông lắp giữa các giá đỡ. Dựng bằng `Cylinder` hay `Cube`; dùng `E` để thêm những đoạn trục ngắn, tạo bậc gối và mặt bích. Khi cần một vòng tròn phẳng, chọn vòng đỉnh rồi dùng `S Z 0` (nếu cần ép phẳng theo Z). Điều chỉnh chiều cao sao cho đầu có khoảng không xoay, không xuyên vào phần cổ.

Tạo thêm một vòng/chốt ở đáy làm phần có khả năng xoay quanh trục thẳng đứng (`Z`). Dùng một đối tượng riêng cho khớp dưới thay vì nhập cứng cùng khớp trên.

## 6. Tách và hoàn thiện từng cấu kiện

Dùng `P → Selection` nếu một chi tiết mới được dựng từ các mặt của object cũ nhưng cần quay độc lập. Sau khi tách, đặt tên có nghĩa như:

| Tên gợi ý | Chức năng |
| --- | --- |
| `Neck_Base` | Đế nối thân, cơ sở của cụm cổ |
| `Neck_Yaw` | Khớp quay đầu theo trục đứng |
| `Neck_Pitch` | Chốt gật đầu |
| `Neck_Bracket_L/R` | Giá đỡ hai phía |
| `Neck_Cover` | Vỏ trang trí, thường theo chuyển động của khớp phù hợp |

Các tên này chỉ là gợi ý tổ chức tệp, không phải tên object mặc định của Blender. Nếu object có hình trụ hoặc phần vỏ phức tạp, dùng `Shade Smooth` và một `Bevel Modifier` nhỏ. Kiểm tra các vùng bị sắc gắt ở ánh sáng và loại bỏ mặt chồng.

## 7. Chuẩn bị cho cơ cấu chuyển động

Chưa cần thêm xương. Hãy xác định trước hai điểm pivot: tâm chốt ngang cho cử động gật và tâm trục dọc cho cử động quay. Khi xử lý rig, mỗi pivot được biến thành `Origin` của object điều khiển tương ứng. Hệ phân cấp dự kiến là:

```text
Neck_Base
└── Neck_Yaw
    └── Neck_Pitch
        └── Head_Assembly
```

Sơ đồ trên diễn tả **mối quan hệ chuyển động**: khi `Neck_Yaw` quay, toàn bộ đầu xoay ngang; khi `Neck_Pitch` quay, đầu gật lên/xuống. Hình học thực tế có thể gồm nhiều miếng ốp riêng được parent theo đúng khớp mà chúng phải đi cùng.

## 8. Lab thực hành

**Đề bài:** hoàn thành cổ robot hai bậc chuyển động, đủ giá đỡ, ống/chốt nối và đế quay.

1. Tạo hai giá đỡ đối xứng dưới đầu; kiểm tra độ hở ở các mặt trong.
2. Lắp một chốt ngang qua cụm giá đỡ; bảo đảm tâm chốt rõ ràng.
3. Xây thêm ống/trụ nối xuống phía dưới và một đế quay thẳng đứng.
4. Chia các phần chuyển động thành object phù hợp bằng `P`.
5. Đặt tên và kiểm tra `Normals`, `Bevel` và tỷ lệ các chốt.

**Checkpoint:** mô hình phải cho thấy rõ vị trí đầu sẽ gật và vị trí cụm đầu sẽ quay ngang. Những chi tiết quá sát gây va chạm cơ học cần được điều chỉnh trước khi rig.

## 9. Lỗi thường gặp

- **Trục xiên ngoài dự kiến:** kiểm tra góc nhìn chính diện và phép xoay `R X/Y/Z` của `Cylinder`.
- **Đùn xong bị mặt sẫm lạ:** chọn geometry liên thông (`L`) và `Shift+N`.
- **Phần cổ bị dính với đầu:** `P → Selection` cho phần cần pivot khác.
- **Khớp không có khoảng hở:** điều chỉnh độ dày giá đỡ hoặc vị trí chốt; đừng cố khắc phục bằng vật liệu.
- **Mirror làm phần mép giao nhau:** kiểm tra `Clipping`, vùng tiếp giáp đường tâm và những mặt thừa.

## 10. Câu hỏi ôn tập

### Câu 1

Cách tổ chức nào phù hợp nhất với đầu robot cần vừa quay trái/phải vừa gật lên/xuống?

A. Dồn tất cả vào một mặt phẳng.  
B. Dùng `Shade Smooth` thay cho khớp.  
C. Dùng hai tầng khớp với trục xoay khác nhau.  
D. Chỉ dùng một modifier `Bevel`.

**Đáp án:** C. **Giải thích:** Hai bậc tự do đòi hỏi các pivot được đặt cho hai hướng xoay khác nhau.

### Câu 2

Tạo mặt bích nhỏ nhô ra từ mặt của khối kim loại nên dùng cặp thao tác nào?

A. `Inset` rồi `Extrude`.  
B. `Render` rồi `Save As`.  
C. `Auto Key` rồi `Play`.  
D. `Camera` rồi `World`.

**Đáp án:** A. **Giải thích:** `Inset` xác định viền và `Extrude` tạo độ nổi.

### Câu 3

Lệnh nào giúp tách geometry được chọn thành object độc lập?

A. `Shift+N`.  
B. `Ctrl+B`.  
C. `Alt+R`.  
D. `P → Selection`.

**Đáp án:** D. **Giải thích:** `Separate` tạo object riêng cho phần hình học đang chọn.

### Câu 4

Vì sao tâm trụ quan trọng khi dựng khớp cổ?

A. Vì làm texture nét hơn.  
B. Vì đây là vị trí tham chiếu để đặt pivot quay chính xác.  
C. Vì nó tăng FPS render.  
D. Vì nó tự thêm constraint.

**Đáp án:** B. **Giải thích:** Một khớp cơ khí phải quay quanh tâm trục đã thiết kế.

### Câu 5

Trước khi rig cơ khí, kiểm tra nào có ý nghĩa nhất?

A. Mọi object phải dùng một vật liệu duy nhất.  
B. Camera đã bật DOF.  
C. Các chi tiết có khoảng hở và đã tách theo chức năng chuyển động.  
D. Video đã có âm thanh.

**Đáp án:** C. **Giải thích:** Hình học và cấu trúc object quyết định khớp có thể chuyển động đúng hay không.

## 11. Tổng kết

Cụm cổ là sự kết hợp giữa hình khối, vị trí trục và cấu trúc điều khiển. Các khối giá đỡ, chốt trụ và phần đế được xây bằng công cụ hard-surface thông dụng. Điều quan trọng không chỉ là hình dáng: mỗi phần cần nằm đúng vị trí cơ học và được tách riêng nếu phải quay độc lập.
