# Bài 09 — Cloth Simulation cơ bản và nhóm đỉnh ghim vải

## 1. Tổng quan

Cloth không giống hiệu ứng Noise tự thêm vào mesh: Blender cần tính lực tác động lên cấu trúc đỉnh–cạnh. Một tấm vải không được giữ ở đâu sẽ rơi xuống do trọng lực; một áo choàng không có vùng ghim sẽ tuột khỏi vai. Ta bắt đầu với plane trước khi áp dụng lên váy.

## 2. Mục tiêu học tập

- Tạo topology phù hợp với solver Cloth và kiểm thử bằng plane.
- Gắn Cloth, tạo nhóm đỉnh Pin và kiểm soát vùng neo.
- Hiểu quan hệ giữa Armature và Cloth trong một modifier stack.

## 3. Nội dung bài học

### 3.1. Plane thử nghiệm và điều kiện hình học

Thêm `Mesh > Plane`, vào `Edit Mode`, chia nhỏ lưới bằng `Subdivide`. Ưu tiên các quad tương đối đều, không có mặt chồng, đỉnh trùng hoặc tam giác dài và hẹp. Hiển thị `Overlays > Wireframe` khi cần xem mật độ mesh.

Trong `Physics Properties`, thêm `Cloth` rồi phát timeline từ frame bắt đầu. Nếu plane rơi xuống hoàn toàn, đó là hành vi dự kiến vì chưa có vật giữ. Vải cần mật độ đủ tạo nếp gấp nhưng quá nhiều polygon khiến solver chậm; hãy tối ưu trên bản low-poly trước, chỉ bổ sung `Subdivision Surface` để render đẹp sau khi mô phỏng ổn.

### 3.2. Vertex Group Pin và ý nghĩa trọng số

Vào `Object Data Properties > Vertex Groups`, tạo nhóm `VG_Pin`. Trong `Edit Mode`, chọn một góc plane, gán trọng số `1.0` bằng `Assign`. Ở `Cloth > Shape`, chọn nhóm này tại mục **Pin Group**. Khi phát, đỉnh neo giữ vị trí theo vị trí mesh trước Cloth trong stack; phần còn lại rơi tự nhiên.

Gán thêm góc khác hoặc vùng gần cổ áo sẽ thay hành vi. Không phải chỉ có hai trạng thái 0 và 1: phân bố trọng số từ mạnh ở vùng giữ (cạp/cổ/vai) xuống yếu ở vùng dưới cho phép chuyển tiếp mềm. Với `Weight Paint`, dùng Blur để tránh ranh giới quá gắt gây nếp gãy.

### 3.3. Áp dụng Pin cho áo choàng và váy

Áo choàng: ghim dải trên cùng gần hai vai/cổ để thân áo không tuột. Váy: ghim phần cạp và giảm ảnh hưởng theo hướng xuống dưới. Tay áo: ghim mép gần vai/cánh tay nhưng để phần vạt ống tự do hơn. Hình dạng ban đầu không được xuyên vào collider.

Với phần cần theo chuyển động nhân vật, trước hết đặt cloth mesh đúng tư thế, parent/skin vùng neo theo rig. `Armature Modifier` thường được đặt trước `Cloth` để tạo hình theo nhân vật rồi solver bổ sung secondary motion; thứ tự cuối cùng phải được kiểm tra theo scene cụ thể. Nếu Cloth tính trước mà không có Pin thích hợp, hình dạng có thể rơi hoặc mất ảnh hưởng của armature.

### 3.4. Thử thay đổi có kiểm soát

Lưu ba biến thể: (A) chỉ một điểm pin; (B) hai điểm pin; (C) một dải pin có gradient. Giữ nguyên các thông số khác rồi so sánh. Nếu thay mesh, vertex group hoặc thông số Physics, cần làm mới cache trước khi kết luận kết quả. Không đánh giá mô phỏng chỉ từ một frame tĩnh.

## 4. Thực hành

**Nhiệm vụ:** Tạo một tấm vải treo hai góc và một áo choàng đơn giản có vùng neo trên vai. Chạy thử A/B/C với số lượng và weight của pin khác nhau.

**Checkpoint:** Cloth không rơi khỏi người; vùng neo theo pose; vùng dưới dao động; topology quad đều; không có chi tiết bị co dãn bất thường ở mép pin.

## 5. Câu hỏi ôn tập

**Câu 1.** Vì sao plane Cloth ban đầu rơi xuống?

A. Vì không có vùng neo/va chạm đỡ nó
B. Vì thiếu chất liệu
C. Vì camera lỗi
D. Vì không có UV

**Đáp án:** A. **Giải thích:** Với trọng lực, vật không được giữ sẽ rơi.

**Câu 2.** Vertex Group nào được dùng để cố định vùng vai áo trong Cloth?

A. Camera_Target
B. Material_A
C. Texture_Noise
D. Pin Group

**Đáp án:** D. **Giải thích:** Pin Group xác định mức vùng neo chịu ảnh hưởng của mô phỏng.

**Câu 3.** Mesh Cloth nên có dạng topology nào để solver ổn định hơn?

A. Chỉ một n-gon lớn
B. Quad đều, tránh giao nhau
C. Nhiều face chồng
D. Dùng nhiều vertex trùng

**Đáp án:** B. **Giải thích:** Lưới đều giúp các cạnh được tính nhất quán.

**Câu 4.** Khi giảm dần trọng số Pin từ vai xuống vạt áo, mục đích là gì?

A. Tăng độ sáng
B. Xóa armature
C. Tạo vùng chuyển tiếp từ cố định sang tự do
D. Thêm âm thanh

**Đáp án:** C. **Giải thích:** Gradient tạo biến dạng mềm thay vì đường gãy.

**Câu 5.** Modifier nào thường đặt trước Cloth để đưa tư thế xương vào mô phỏng?

A. Armature
B. Solidify tạo độ dày lớn
C. Noise texture
D. Bevel camera

**Đáp án:** A. **Giải thích:** Armature trước Cloth truyền biến dạng pose làm đầu vào cho solver.

## 6. Tổng kết

Chất lượng Cloth bắt đầu từ topology sạch và pin hợp lý. Giữ nguyên các biến khác khi thử nghiệm để thấy rõ ảnh hưởng của từng yếu tố.
