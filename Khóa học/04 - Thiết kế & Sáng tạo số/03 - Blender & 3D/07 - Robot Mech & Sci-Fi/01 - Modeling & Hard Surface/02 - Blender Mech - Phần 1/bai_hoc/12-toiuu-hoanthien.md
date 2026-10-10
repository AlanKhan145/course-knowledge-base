# Bài 12. Dọn topology và hoàn thiện model đầu Mech

## 1. Tóm tắt và mục tiêu

Giai đoạn hoàn thiện không phải là thêm càng nhiều ốc càng tốt. Một model sạch cần có các cạnh hỗ trợ hình dáng, không có đỉnh thừa gây shading lỗi, không bị trùng mặt và không có chi tiết nằm lệch khỏi cấu trúc.

Mục tiêu: loại bỏ geometry không cần thiết, đặt các phụ kiện cuối, kiểm tra Mirror/Bevel, Shade Smooth đúng chỗ và lưu model đầu hoàn chỉnh.

## 2. Kiểm tra hình học ẩn và thành phần trùng

1. Xoay viewport quanh đầu, kiểm tra trước, sau, hông, trên và dưới.
2. Chuyển `Wireframe` để nhìn vào phía trong những vùng có nhiều lớp mesh.
3. Dùng `B` chọn phần đỉnh dư; giữ chuột giữa khi Box Select nếu muốn trừ một số đỉnh khỏi vùng chọn.
4. Với thành phần rời không còn dùng, di chuột lên thành phần rồi `L`, sau đó `X → Vertices` nếu thật sự muốn xóa toàn bộ phần đó.
5. Với một vòng cạnh chỉ làm lưới nặng hơn mà không tạo thay đổi hình dạng, ưu tiên `X → Dissolve Edges`.

**Phân biệt:** Xóa `Vertices` có thể làm mất mặt liên quan; `Dissolve Edges` thường giữ hình học xung quanh. Chọn công cụ theo mục đích, tránh làm thủng lớp giáp vốn cần kín.

## 3. Thêm chi tiết cuối mà không làm rối hình

Một tấm giáp nhỏ có thể tạo từ `Cube`, scale mỏng theo chiều sâu, đặt sát đầu ở Side View, rồi xoay nhìn mặt trước để căn chiều rộng. Chỉ thêm nếu nó củng cố thiết kế hoặc che phần chuyển tiếp cần thiết. Bổ sung Shade Smooth cho chi tiết cần shading mềm.

Nếu một đĩa/cảm biến bị thụt sâu vào mesh sau Join, chọn toàn thành phần bằng `L`, dùng `G` dọc trục thích hợp và kiểm tra trong Side View. Không khắc phục bằng cách tăng Bevel tùy ý.

## 4. Quy trình rà soát chất lượng

| Hạng mục | Câu hỏi cần trả lời |
| --- | --- |
| Silhouette | Từ ba góc nhìn, hình đầu có khớp ảnh tham chiếu? |
| Mirror | Đường giữa có hở/đè mặt hoặc có chi tiết bị nhân đôi sai? |
| Topology | Có đỉnh thừa, mặt trong bị bỏ quên, cạnh lặp vô ích? |
| Normals | Có mặt đỏ hướng ngoài hoặc shading bất thường? |
| Bevel | Mép giáp có bo nhỏ hợp lý hay bị phình? |
| Mắt | Viền, lõi và mặt kính có đúng thứ tự chiều sâu? |
| Phụ kiện | Ốc, ống, antenna có bám đúng bề mặt? |
| Tổ chức | Các object và modifier có dễ nhận biết, chỉnh sửa? |

Trong Edit Mode, chọn mesh phù hợp rồi `Shift + N` nếu cần tính lại normals. Trong Object Mode, `Shade Smooth` cho những thành phần tròn và kiểm tra `Bevel Modifier` của các object giáp.

## 5. Lưu phiên bản bàn giao

1. Dùng `Ctrl + S` lưu file đang làm.
2. Có thể chọn `File → Save As` lưu bản bàn giao riêng `mech_head_part01_final.blend`.
3. Giữ bộ ba ảnh tham chiếu trong thư mục dự án để mở lại và chỉnh sửa tiếp.
4. Kiểm tra file mở được, các object không bị ẩn sai và không có dependency tài nguyên bất ngờ.

Phần này chỉ hoàn thành **modeling đầu robot**. Vật liệu, chiếu sáng, rigging và animation thuộc các giai đoạn tiếp theo của chuỗi công việc.

## 6. Thực hành, tiêu chí hoàn thành và tổng kết

**Thực hành:** Rà soát toàn bộ mesh, xóa một số vòng/đỉnh không cần thiết nếu có, hiệu chỉnh ống và mắt bị lệch, hoàn thiện lớp giáp cuối, lưu bản `.blend` hoàn chỉnh.

**Đạt yêu cầu khi:** Mô hình đầu nhất quán từ ít nhất ba góc nhìn, không có hốc vô ý, mặt giáp sạch, các bộ phận đủ tách biệt để tiếp tục dựng cổ/thân.

**Ghi nhớ:** Một asset tốt là asset đúng hình, sạch topology và có thể tiếp tục sử dụng ở các bước sau.

## 7. Câu hỏi ôn tập

### Câu 1

Muốn bỏ vòng cạnh không cần thiết nhưng giữ bề mặt, nên chọn gì?

A. Delete All  
B. Dissolve Edges  
C. Convert to Curve  
D. Add HDRI  

**Đáp án:** B

**Giải thích:** Dissolve loại cạnh với mục tiêu duy trì bề mặt xung quanh.

### Câu 2

Vì sao không nên chỉ kiểm tra model ở Front View?

A. Vì Front không thể phát hiện sai lệch độ sâu và chi tiết bị chìm  
B. Vì Front làm thay đổi vật liệu  
C. Vì Front xóa hình học  
D. Vì Front làm rig lệch  

**Đáp án:** A

**Giải thích:** Model 3D phải được đối chiếu chiều sâu và các mặt khác để phát hiện lỗi.

### Câu 3

Nếu mặt giáp có vệt shading bất thường sau nhiều lần Extrude, bước nào phù hợp?

A. Tăng âm thanh  
B. Xóa timeline  
C. Kiểm tra Face Orientation và dùng Shift + N khi cần  
D. Chỉ thêm camera  

**Đáp án:** C

**Giải thích:** Normals sai có thể gây bóng bất thường ngay cả khi hình học nhìn có vẻ đúng.

### Câu 4

Vấn đề gì có thể xảy ra nếu Bevel Amount quá lớn?

A. Blender mất menu  
B. Ảnh tham chiếu bị xóa  
C. Tự bật Snapping  
D. Mép giáp phình/chồng lấn làm sai hình  

**Đáp án:** D

**Giải thích:** Bevel quá lớn phá tỷ lệ chi tiết, đặc biệt vùng có các rãnh hẹp.

### Câu 5

Sản phẩm chính cần bàn giao sau phần này là gì?

A. Video hoàn chỉnh đi bộ  
B. File .blend phần đầu robot đã model sạch  
C. Bản rig toàn thân  
D. Material library hoàn chỉnh  

**Đáp án:** B

**Giải thích:** Phạm vi thực hành hiện tại kết thúc tại modeling phần đầu.
