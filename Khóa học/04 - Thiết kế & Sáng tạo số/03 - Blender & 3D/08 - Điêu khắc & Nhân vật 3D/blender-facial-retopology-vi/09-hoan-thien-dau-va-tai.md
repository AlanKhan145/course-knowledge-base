# Bài 09 — Hoàn thiện đỉnh, sau đầu và tai
**Tham chiếu video:** 31:16–42:31.


## Mục tiêu
Kết nối phần đầu bên, đóng đỉnh/sau đầu và dựng topology tai không bị tự cắt.


## Giai đoạn 1: Kết nối chân tai
Dùng các cạnh đang có tại vùng thái dương, má, hàm để dựng dải dẫn về **chân tai**. Hướng cạnh phải bám các đường cong lớn quanh viền tai, dái tai và hố tai. Đừng dùng quá nhiều quads chỉ để mô tả một rãnh nhỏ không quan trọng ở khoảng cách camera game.


## Giai đoạn 2: Đỉnh và sau đầu
1. Extrude các dải từ trán qua đỉnh đầu, giữ nhịp quad tương đối đều.
2. Xác định các vòng biên của phần còn trống; nối những dải có số đỉnh tương thích.
3. Sử dụng **Face > Grid Fill** khi biên thích hợp. Thay Span/Offset để lựa chọn cấu hình quad ít méo.
4. Nhìn từ sau đầu tìm vùng bị lộn normal, mặt đè lên nhau hoặc nút thắt của đường cạnh.
5. Nếu cần làm mượt hình học, dùng Sculpt Smooth nhẹ, không phá đường loop quan trọng.


## Giai đoạn 3: Tai là vùng phức tạp
Tai có nhiều mặt gần nhau, khiến Shrinkwrap dễ hút đỉnh về sai bề mặt. Theo video:
- Tắt tạm **In Front** khi cần quan sát vị trí thật.
- Chuyển Shrinkwrap từ **On Surface** sang **Above Surface**, tăng Offset nhỏ để thấy mesh và tránh kẹt mặt.
- Dựng từng đoạn quanh vành tai, kiểm tra góc nhìn nghiêng.
- Khi đã hoàn tất, có thể thử trở về On Surface và Offset = 0, rồi bật lại In Front.
- Nếu các điểm nhảy vào rãnh sai, giới hạn ảnh hưởng Shrinkwrap hoặc di chuyển thủ công.


## Checklist
- [ ] Đỉnh và phía sau đầu không thủng ngoài chủ đích.
- [ ] Tai nối sạch vào đầu, không giao cắt.
- [ ] Các vùng có thể bỏ trống (khoang tai, mũi, miệng) được xử lý có chủ đích.
- [ ] Đường đối xứng không để hở.


**Sản phẩm:** mặt, tai, đầu sau thành một lưới có chủ đích về topo.