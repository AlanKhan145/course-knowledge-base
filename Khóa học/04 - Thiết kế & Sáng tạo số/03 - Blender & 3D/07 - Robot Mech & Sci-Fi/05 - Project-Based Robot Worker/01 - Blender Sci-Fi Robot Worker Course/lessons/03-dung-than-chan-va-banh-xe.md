# Bài 03 — Dựng thân máy, chân và bánh xe Robot Worker

## 1. Tóm tắt

Thân robot là khối trung tâm liên kết đầu, cổ, hai cánh tay và hệ thống di chuyển. Bài học dựng một thân cơ khí có tấm vỏ, cụm gắn phía sau và phần chân/bánh xe. Mục tiêu không phải tạo thật nhiều polygon mà là tạo được **silhouette cân đối**, có độ dày hợp lý, dễ lắp ráp với các bộ phận khác và có bề mặt đủ sạch để áp dụng vật liệu.

## 2. Mục tiêu học tập

- Phát triển khối `Cube` thành thân máy bằng chỉnh vertex/face và `Extrude`.
- Thiết lập đối xứng với `Mirror Modifier` và `Clipping`.
- Tạo các tấm vỏ, khe, giá gắn và mô-đun máy phía sau từ các phần hình học tách riêng.
- Dựng chân/giá đỡ và bánh xe bằng kỹ thuật lặp khối hình cơ bản.
- Sửa biên cứng bằng `Bevel`, áp dụng làm mượt và kiểm tra những mặt không cần thiết.

## 3. Thiết kế bố cục thân robot

Phân chia robot thành ba tầng nhìn từ trên xuống: **đầu và cổ**, **thân trung tâm**, **cụm chân/bánh xe**. Thân phải đủ lớn để kết nối các khớp mà không tạo cảm giác robot chỉ là những khối ghép rời không liên quan. Khi dựng cần dành chỗ cho hai vai, các panel trước và một cụm thiết bị phía sau.

Dùng `Numpad 1` và `Numpad 3` để so sánh: chính diện kiểm tra đối xứng; góc bên kiểm tra độ dày và phần nhô trước/sau. `Wireframe` đặc biệt hữu ích khi chọn toàn bộ đỉnh phía đáy để chỉnh chiều cao.

## 4. Tạo hình khối thân chính

### 4.1. Bắt đầu bằng Cube

1. Dùng `Shift+C` để đưa con trỏ 3D về tâm scene; `Shift+A → Mesh → Cube`.
2. Di chuyển khối xuống dưới cổ (`G Z`), sau đó chuyển `Edit Mode`.
3. Dùng `S` phóng lớn toàn khối, kết hợp `S X`, `S Y`, `S Z` để được tỷ lệ mong muốn.
4. Nhìn chính diện, chọn các đỉnh thấp bằng `B` trong `Wireframe` và dùng `G Z` chỉnh chiều cao chân đế của thân.
5. Đến `Face Select` (phím `3` trên hàng số trong Edit Mode), chọn mặt trước/sau và dịch chuyển theo `Y` để thân có dáng thuôn thay vì một hộp đơn giản.

Khi làm việc trên thân, cần phân biệt **di chuyển cả object** và **di chuyển geometry trong Edit Mode**. Phương pháp thứ hai thường thuận tiện nếu muốn `Origin` vẫn ở trục giữa robot trong quá trình dựng hình.

### 4.2. Tạo phần nhô và cụm gá phía sau

Chọn mặt thích hợp ở lưng, `E` đùn ra, `S X` để thu chiều rộng nếu cần rồi `G Y` đặt sâu về phía sau. Đây là vị trí hợp lý cho các cụm bình, ống hoặc mô-đun trên lưng. Mỗi cấp đùn tạo một mặt phẳng chuyển tiếp; độ thay đổi tiết diện giúp thân trông được chế tạo từ nhiều lớp kim loại.

Ở mặt trước, tiếp tục sử dụng `Inset` và `Extrude` để tạo hộp trung tâm hoặc vùng gắn bảng điều khiển. Không nên kéo một mặt ra quá xa làm mất cân bằng với chiều sâu của cụm cổ.

### 4.3. Tạo đối xứng và hoàn thiện mép

Để tiết kiệm thời gian dựng hai bên:

1. Thêm một `Loop Cut` qua giữa thân bằng `Ctrl+R` nếu geometry cho phép.
2. Trong `Wireframe`, chọn và xóa một nửa đỉnh (`X → Vertices`).
3. Thêm `Mirror Modifier` trên trục đối xứng thích hợp, bật `Clipping` để giữ đường tâm.
4. Thêm `Bevel Modifier`, chỉnh lượng vát nhỏ và có thể dùng **4 segments** cho góc bo mượt như thiết kế đang thực hiện.
5. Dùng `Shade Smooth`; kiểm tra vùng trung tâm đã ghép và các góc không bị shading lạ.

Khi thêm chi tiết mới trong `Edit Mode`, nhớ rằng các mặt mới cũng chịu tác động của Mirror. Nếu không muốn phản chiếu, tạo object riêng.

## 5. Dựng lớp vỏ và các bộ phận phụ

Tạo panel bên bằng cách chọn mặt hông, `Shift+D` nhân bản, `P → Selection` tách khỏi thân chính nếu cần, sau đó thêm `E` tạo độ dày. Một tấm giáp đẹp cần nằm sát thân, không quá chìm và không tự giao với panel cạnh bên.

Dùng các primitive như `Cube` và `Cylinder` để thêm chi tiết máy:

- Các hộp tròn/cạnh vát ở hai bên vùng nối vai.
- Thanh kim loại ngắn gắn phần cổ xuống thân.
- Bình chứa hoặc mô-đun trụ ở phía sau.
- Những vòng đai, nắp và mặt bích để làm rõ cơ chế lắp ghép.

Có thể sử dụng `Shift+D` để nhân bộ phận nhiều lần với cùng tỷ lệ, rồi chỉnh vị trí trên trục tương ứng. Chọn `L` khi muốn thao tác trọn một phần geometry tách rời nhưng nằm chung trong Edit Mode.

## 6. Thiết kế hệ chân và bánh xe

### 6.1. Giá đỡ chân hai bên

Cụm chân bắt đầu từ các khối hộp hoặc giá đỡ phía dưới thân. Dùng một `Cube`, thu tỷ lệ để tạo chân cơ khí, rồi dùng `Mirror` để tạo chân đối xứng. Trong `Wireframe`, chọn một nửa hình học để điều chỉnh dáng chân và phần gá bánh xe. Nên giữ hai chân có vị trí đều theo chiều ngang, đủ khoảng cách để robot đứng vững về mặt thị giác.

Có thể dùng `E` nhiều lần để biến một khối đơn giản thành chân có dạng gập; phần nối với thân nên có chốt rõ ràng nếu dự định cho chân nghiêng khi chuyển động.

### 6.2. Tạo bánh xe và các vòng đỡ

Thêm `Cylinder` và xoay để trục hình trụ hướng đúng trục bánh xe. Dùng `S` chỉnh bán kính và chiều dày, sau đó đặt trụ vào giữa chân. Dùng `Inset`/`Extrude` trên các mặt tròn để có vành bánh, tâm bánh và mặt bích. Nếu muốn nhiều vòng đồng tâm, nhân bản mặt hoặc đối tượng nhỏ hơn; tránh tạo quá nhiều vòng nhìn không rõ từ camera.

Dùng `Shift+D` và `Mirror` cho những phần lặp hai bên. Kiểm tra bánh xe không chạm vào tấm vỏ ngoài một cách bất hợp lý. Đừng gộp cứng bánh và thân nếu dự định cho bánh di chuyển hoặc quay độc lập.

### 6.3. Đường nét hard-surface

Giữ các cạnh chủ lực sắc nét, nhưng cần có một lượng bevel nhỏ để ánh sáng tạo highlight. `Bevel Modifier` dùng chung được cho nhiều object có tỷ lệ tương đồng; các chi tiết rất mỏng cần lượng bevel ít hơn. Những mặt sau/đáy hoàn toàn bị che và không phục vụ hình học có thể được dọn để giảm rối.

## 7. Cấu trúc đối tượng phục vụ rig và vật liệu

Phân chia theo các cụm chức năng:

```text
Robot_Body
├── Torso_Main
├── Torso_Panels
├── Back_Modules
├── Left_Leg
│   └── Left_Wheel
└── Right_Leg
    └── Right_Wheel
```

Đây là cách đặt tên gợi ý, không phải yêu cầu cấu trúc bắt buộc của Blender. Nên để tên trực quan để khi tạo `Parent` sau này có thể chọn đúng vật thể cần chuyển động cùng thân.

## 8. Thực hành và tiêu chí hoàn thành

**Bài thực hành:** dựng thân và cụm di chuyển phù hợp với đầu/cổ đã có.

- [ ] Thân chính có thể đọc rõ từ trước, bên và góc ba phần tư.
- [ ] Vỏ thân đối xứng hợp lý; `Mirror` không tạo đường nứt ở tâm.
- [ ] Có panel hoặc mô-đun nằm phía sau thân.
- [ ] Chân và bánh xe nằm đúng vị trí và không xuyên qua nhau bất hợp lý.
- [ ] Mỗi bộ phận cần xoay riêng đã có object độc lập.
- [ ] Các bevel đủ bắt sáng, không làm biến dạng mép lớn.
- [ ] Đã lưu file với tên có ý nghĩa.

**Tự kiểm tra:** tạm ẩn các tấm vỏ trang trí. Nếu silhouette thân và chân vẫn cân đối, phần cơ khí cốt lõi đã đạt yêu cầu.

## 9. Lỗi thường gặp

| Lỗi | Nguyên nhân | Khắc phục |
| --- | --- | --- |
| Tâm thân có khe hở | `Mirror` chưa ghép tâm | Kiểm tra geometry tại trục giữa, `Merge`/`Clipping` |
| Chi tiết phụ bị nhân hai bên | Nằm chung mesh với modifier đối xứng | Dùng object riêng hoặc tách vùng bằng `P` |
| Bánh xe đặt lệch | Xoay trục không đúng hoặc vị trí chưa căn | Kiểm tra bằng góc `Front/Side` |
| Bo cạnh làm méo bề mặt | Bevel quá lớn | Giảm Width/Amount và xem các cạnh giao nhau |
| Nhiều mặt có sắc độ lạ | Normals hoặc mặt chồng | Xóa phần thừa, tính lại normals bằng `Shift+N` |

## 10. Câu hỏi ôn tập

### Câu 1

Để dựng thân đối xứng trong khi chỉ phải chỉnh một bên geometry, nên dùng cách nào?

A. `Render Animation`.  
B. `Video Sequencer`.  
C. `Environment Texture`.  
D. `Mirror Modifier`.

**Đáp án:** D. **Giải thích:** Modifier này phản chiếu hình học qua trục thiết lập.

### Câu 2

Khi hình học ở tâm robot tách thành khe giữa hai nửa, nên kiểm tra gì trước?

A. `Clipping/Merge` cùng vị trí các đỉnh trên trục giữa.  
B. Tăng Camera Focal Length.  
C. Tắt mọi vật liệu.  
D. Thêm keyframe.

**Đáp án:** A. **Giải thích:** Khe tâm liên quan đến đỉnh đối xứng chưa ghép, không phải camera.

### Câu 3

Tại sao nên tách bánh xe thành đối tượng riêng?

A. Để tăng số đối tượng mà không cần lý do.  
B. Để điều khiển và gán vật liệu độc lập.  
C. Vì `Mirror` không hoạt động với bánh xe.  
D. Vì thân robot không được phép dùng Cylinder.

**Đáp án:** B. **Giải thích:** Bánh là bộ phận có chức năng chuyển động riêng.

### Câu 4

Muốn phần gá phía sau thân nhô ra từ một mặt đang chọn, thao tác nào trực tiếp tạo hình học mới?

A. `Alt+R`.  
B. `Ctrl+S`.  
C. `E` (`Extrude`).  
D. `Numpad 0`.

**Đáp án:** C. **Giải thích:** Extrude mở rộng hình học từ vùng đang chọn.

### Câu 5

Một đường bevel quá rộng làm các cạnh của tấm kim loại mất dáng. Nên xử lý thế nào?

A. Render ở độ phân giải lớn hơn.  
B. Thêm HDRI mạnh hơn.  
C. Thêm nhiều camera.  
D. Giảm lượng bevel và kiểm tra kích thước chi tiết.

**Đáp án:** D. **Giải thích:** Bevel cần tương xứng với tỷ lệ vật thể để tránh bóp méo hình khối.

## 11. Tổng kết

Dựng thân theo thứ tự **khối chính → panel/mô-đun → chân và bánh xe → hoàn thiện cạnh** giúp cân bằng giữa thẩm mỹ và khả năng sửa đổi. `Mirror` bảo đảm đối xứng; `Extrude`, `Inset` và `Duplicate` tạo chiều sâu; cấu trúc object rõ ràng giúp robot sẵn sàng cho hệ khớp cơ khí.
