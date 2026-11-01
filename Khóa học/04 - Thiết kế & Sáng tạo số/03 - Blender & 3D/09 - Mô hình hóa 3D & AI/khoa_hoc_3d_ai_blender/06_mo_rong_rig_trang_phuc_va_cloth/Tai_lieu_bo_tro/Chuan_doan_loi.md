# Chẩn đoán và xử lý lỗi trang phục trong Blender

| Triệu chứng | Nguyên nhân cần thử kiểm tra | Hành động |
| --- | --- | --- |
| Váy không theo rig sau gộp armature | Modifier trỏ armature cũ | Chọn lại target rig; xác nhận tên vertex groups |
| Trang phục rơi hết khỏi vai | Chưa thiết lập Pin Group hoặc weight thấp | Gán và làm mượt vùng pin tại vai/cạp |
| Vải xuyên toàn bộ cơ thể | Chưa thêm Collision, rest pose giao nhau | Thêm collider, sửa offset và mesh ban đầu |
| Vải bị kéo tung lúc vung tay | Bộ phận tay/ngón va chạm không cần thiết | Sửa pose, thử proxy collider không gồm tay |
| Váy rung hoặc nổ khi bắt đầu | Giao mesh, tốc độ pose đột ngột, solver thiếu ổn định | Chèn đoạn rest pose, sửa topology, test quality |
| Vải quá xa body | Distance collider hoặc mesh offset cao | Kiểm tra khoảng cách cả hai bên, giảm có kiểm soát |
| Vạt áo bị xoắn khi đưa tay lên | Weight cho upper arm quá mạnh hoặc copy twist | Sửa weight, thêm bone điều khiển/bù xoắn |
| Áo ở nách bị móp | Bone vai/cánh tay phân bố weight sai | Kiểm tra chọn đúng bone, blur và test nhiều pose |
| Cạp váy trượt | Pin/weight hip không đủ | Tăng neo cạp, tạo gradient xuống dưới |
| Mặt áo nhăn như giấy | Không có độ dày render | Dùng Solidify sau Cloth |
| Vải nếp nhăn quá ít | Mesh thưa hoặc độ cứng cao | Chỉnh topology phù hợp, bending và damping |
| Một lớp Cloth làm lớp khác méo | Collider/collision order sai, khoảng hở nhỏ | Test từng lớp; xem modifier order và reset cache |
| B-Bone đẹp trong Blender nhưng lệch khi xuất | Engine không hỗ trợ cùng deformation | Bake thành bone/action tương thích, import thử |
| Animation mất sau khi bỏ Empty | Bone chưa được Bake Action | Bake visual keying, tắt constraint và kiểm tra lại |
| Chỉnh physics nhưng không đổi kết quả | Cache cũ đang được giữ | Free Bake rồi tính/bake lại |
| Clip loop bị giật ở điểm nối | Pose hoặc tiếp tuyến đầu–cuối không khớp | Sửa keyframe và Graph Editor |

**Quy tắc sửa lỗi:** Kiểm tra `mesh → pose → parent/weight → modifier stack → collision → pin → solver → cache`, không thay đồng thời quá nhiều biến. Lưu số frame và ảnh góc nhìn nơi lỗi xuất hiện.
