# Bài 09. Khắc panel trên đầu và dựng cụm mắt nhiều lớp

## 1. Tóm tắt và mục tiêu

Mặt robot quyết định biểu cảm. Cụm mắt không chỉ là một quả cầu đặt trên bề mặt: nó gồm **hốc**, **viền**, **lõi mắt** và đôi khi **tấm che/mặt kính**. Những lớp này phải có quan hệ chiều sâu rõ ràng.

Mục tiêu: khắc các panel trên đầu, dựng hốc mắt, đặt UV Sphere làm lõi và hoàn thiện lớp viền trước mặt.

## 2. Khắc các panel trên nóc

1. Chọn mesh đầu, vào Edit Mode.
2. `Ctrl + R` tạo loop ở vị trí cần bổ sung rãnh trên nóc.
3. Chọn một mặt nóc, dùng `I` để Inset khớp khung tham chiếu.
4. Lặp lại với những mặt nóc còn lại; chú ý chế độ `Individual` khi chọn nhiều mặt.
5. Chọn toàn bộ các mặt đã Inset và `E` âm vào trong để tạo rãnh panel.
6. Kiểm tra trên Top View, tránh để các rãnh nhô vào nhau hoặc xuyên ống đặt phía trên.

## 3. Dựng khung hốc mắt từ Circle

1. Đưa `3D Cursor` về vị trí thuận tiện, thêm `Mesh → Circle`.
2. Nếu dùng Mirror và vòng mới trùng mặt phẳng giữa, tạm tắt `Clipping` trong khi di chuyển Circle đến vị trí mắt; bật lại khi cần.
3. Dùng `S` để chỉnh bán kính, `R → [trục] → 90` nếu cần xoay mặt phẳng Circle, `G` để căn theo Front và Side.
4. Chọn các đỉnh vòng và dùng `E` rồi `S` để tạo các lớp vòng lớn/nhỏ theo profile hốc mắt.
5. Dùng `F` để bịt mặt ở nơi cần có nắp; giữ mở những vòng biên sẽ tạo thành khoang hoặc cần kết nối khác.
6. Xoay viewport kiểm tra normals và độ sâu từng lớp vòng.

Đây là cách tạo hình hốc từ nhiều vòng đỉnh, giúp viền mắt có độ dày và bậc cơ khí thay vì một lỗ tròn phẳng.

## 4. Thêm lõi mắt UV Sphere

- Dùng `Shift + A → Mesh → UV Sphere`.
- Dùng `S`, `R` và `G` để đưa quả cầu vào hốc, đối chiếu Front, Side và Top.
- Đảm bảo quả cầu nằm đúng bên trong viền, không bị chìm hoàn toàn và không xuyên các mặt ngoài.
- Khi Mirror còn hoạt động, quan sát mắt đối diện để biết có chi tiết bị nhân đôi không chủ ý.

Nếu tạo nhiều vòng viền, có thể chọn những mặt thích hợp rồi dùng `Extrude Faces Along Normals` qua menu mặt (`Ctrl + F` trong ngữ cảnh tương ứng hoặc `F3` tìm tên lệnh). Cách này đùn theo normal riêng của mặt; kết quả khác `E` theo một hướng chung.

## 5. Mặt kính và tấm che

Thêm một mặt phẳng `Plane`, đưa vào trong vùng mặt trước và dịch `G → Y` tạo khoảng cách rất nhỏ với vỏ đầu. Chọn mặt phẳng, `E` tạo độ dày; kiểm tra `Shift + N` nếu shading đảo. Có thể thêm viền hoặc đĩa phụ bằng Circle rồi dùng `Ctrl + B` cho mép.

Giai đoạn này chỉ dựng **hình học** của mặt kính. Độ trong suốt, phát sáng và vật liệu mắt sẽ được làm ở giai đoạn vật liệu, không cần giả lập bằng màu viewport.

## 6. Thực hành và kiểm tra

**Nhiệm vụ:** Tạo ít nhất ba rãnh trên nóc, một cụm mắt có viền nhiều cấp và lõi UV Sphere, thêm tấm che có độ dày nhẹ.

**Checkpoint:** Mắt nhìn rõ từ mặt trước, không nổi quá xa khỏi hốc từ góc cạnh, không bị mặt trùng và giữ được tính đối xứng của thiết kế.

**Ghi nhớ:** Phân lớp hốc–viền–lõi tạo chiều sâu thị giác mà không cần vật liệu phức tạp ở bước modeling.

## 7. Câu hỏi ôn tập

### Câu 1

Để tạo rãnh panel trên nóc, nên dùng quy trình nào?

A. Chỉ Shade Smooth  
B. Tạo Camera  
C. Inset mặt rồi Extrude âm vào trong  
D. Dùng Render Animation  

**Đáp án:** C

**Giải thích:** Inset xác định viền; Extrude vào trong tạo rãnh có bóng đổ.

### Câu 2

Mesh nào thích hợp làm lõi mắt có dạng cầu?

A. UV Sphere  
B. Plane  
C. Text  
D. Empty  

**Đáp án:** A

**Giải thích:** UV Sphere cung cấp bề mặt cầu phù hợp cho lõi mắt.

### Câu 3

Vì sao cụm mắt cần kiểm tra Side View?

A. Để hiển thị keyframe  
B. Để biết viền và lõi mắt có đúng độ sâu không  
C. Để chọn render engine  
D. Để tính thời lượng phim  

**Đáp án:** B

**Giải thích:** Front View không thể hiện đầy đủ khoảng cách trước–sau của các lớp mắt.

### Câu 4

Muốn tạo chiều sâu hình học cho Plane làm mặt kính, thao tác nào dùng được?

A. Xóa object  
B. Đổi Viewport Color  
C. Chỉ dùng F3  
D. Extrude mặt để tạo bề dày  

**Đáp án:** D

**Giải thích:** Extrude thêm mặt bên cho Plane, khiến tấm che có độ dày.

### Câu 5

Extrude Faces Along Normals có đặc điểm nào?

A. Đùn các mặt theo hướng normal của chúng  
B. Luôn di chuyển toàn bộ theo trục X  
C. Tự tạo âm thanh  
D. Chỉ hoạt động cho Curve  

**Đáp án:** A

**Giải thích:** Các mặt có hướng normal khác nhau có thể được đùn theo hướng riêng để tạo viền bề mặt.
