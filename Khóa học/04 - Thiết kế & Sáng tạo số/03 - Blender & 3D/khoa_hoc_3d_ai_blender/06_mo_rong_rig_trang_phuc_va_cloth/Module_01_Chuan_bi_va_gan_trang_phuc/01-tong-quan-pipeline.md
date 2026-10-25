# Bài 01 — Tổng quan pipeline trang phục nhân vật 3D

## 1. Tổng quan

Một trang phục chuyển động đẹp không chỉ cần mesh đẹp. Nó còn phải bám đúng nhân vật, phản ứng với tư thế, không xuyên cơ thể và phù hợp với nơi sử dụng: cảnh dựng sẵn hay game thời gian thực. Khóa học triển khai ba hướng: **skin trang phục theo xương**, **mô phỏng Cloth**, và **kết hợp cả hai**.

## 2. Mục tiêu học tập

- Phân biệt mục tiêu của Armature Deform, Cloth và rig lai.
- Lựa chọn workflow phù hợp với váy, tay áo, áo choàng và phụ kiện.
- Tổ chức scene để sửa lỗi, bake và xuất kết quả an toàn.

## 3. Nội dung bài học

### 3.1. Ba cơ chế làm trang phục chuyển động

**Skinning** là cơ chế mesh biến dạng theo các xương thông qua `Armature Modifier` và các `Vertex Group`. Nó dễ kiểm soát, ổn định giữa các lần phát và là lựa chọn quan trọng khi xuất nhân vật cùng animation. Nhược điểm là chân váy/áo choàng có thể quá cứng hoặc xuyên cơ thể khi nhân vật bước, xoay người.

**Cloth Simulation** tính chuyển động vải nhờ các ràng buộc cơ học, trọng lực và va chạm. Nếp gấp tự nhiên hơn, nhưng cần topology phù hợp, vùng ghim, đối tượng va chạm và cache. Các giá trị phải tinh chỉnh bằng cách chạy thử rồi bake lại.

**Rig lai** dùng xương điều khiển những khu vực cần bám cố định (cổ áo, vai, cạp váy) và cho phần vải còn lại mô phỏng. Ngoài ra, có thể chuyển kết quả mô phỏng sang keyframe của bone để sử dụng ở môi trường không chạy cùng hệ thống Cloth của Blender.

### 3.2. Lựa chọn theo mục đích sử dụng

| Bài toán | Giải pháp nên thử trước | Lưu ý |
| --- | --- | --- |
| Áo ôm sát, giày, găng | Bind vào Armature, sửa Weight Paint | Quan tâm khớp khuỷu, gối, vai |
| Váy ngắn cho game | Bone skirt rig thủ công | Dễ kiểm soát silhouette khi nhảy/múa |
| Áo choàng tung bay trong video | Cloth + Pin + Collider | Bake để kết quả nhất quán |
| Áo khoác nhiều lớp | Cloth từng lớp, thêm va chạm lần lượt | Quản lý thứ tự modifier và cache |
| Cảnh game cần motion đã định sẵn | Rig + keyframe bone hoặc dữ liệu animation tương thích engine | Không giả định engine hiểu cache Cloth của Blender |
| Túi, dây đeo, tay áo rộng | Bone control riêng, thêm giới hạn và chỉnh tay | Giữ chuyển động chủ động ở vùng khó |

### 3.3. Cấu trúc file và cách kiểm tra

Một cách tổ chức gợi ý trong `Outliner`:

```text
CHARACTER
  Body_Render
  Body_Collision
  Rig_Main
CLOTHING
  Skirt_Render
  Cape_Render
  Shirt_Render
ANIMATION
  Actions_Imported
LIGHTING_CAMERA
```

`Body_Render` giữ hình học trình bày, còn `Body_Collision` là bản sao đã lược chi tiết để va chạm có kiểm soát. Đặt tên rõ các `Vertex Group` như `VG_Pin_Waist`, `VG_Pin_Shoulder`; đặt tên xương `DEF_`, `MCH_`, `CTRL_` nếu rig dùng các nhóm vai trò này. Sao lưu phiên bản trước khi chuyển parent, thay đổi cấu trúc xương, áp dụng modifier hoặc bake.

### 3.4. Phân biệt preview và thành phẩm

Một preview có thể đẹp trong tư thế đứng nhưng lỗi nặng khi chuyển động. Luôn chuẩn bị ít nhất bốn tư thế kiểm thử: đứng thẳng, bước chân rộng, giơ tay, xoay hông. Với áo choàng hoặc váy dài, thử thêm tư thế xoay gấp. Kiểm tra đồng thời từ trước, sau và cạnh, vì clipping ở nách, đùi và lưng thường bị che khuất ở góc chính.

## 4. Thực hành

**Nhiệm vụ:** Tạo scene đơn giản với một nhân vật đã rig, một mesh váy hoặc áo choàng và một bản sao cơ thể. Tổ chức theo ba collection `CHARACTER`, `CLOTHING`, `ANIMATION`. Ghi ra lựa chọn skinning/Cloth/rig lai cho từng món.

**Checkpoint:** Mọi mesh có tên riêng; có ít nhất ba tư thế test; rig chính không bị sửa nhầm; đã lưu file `.blend` đầu tiên.

## 5. Câu hỏi ôn tập

**Câu 1.** Trang phục ôm sát chuyển động theo tay chân chủ yếu nên dùng gì?

A. Cache Cloth
B. Vertex Group + Armature
C. Render texture
D. Noise camera

**Đáp án:** B. **Giải thích:** Armature Deform theo bone phù hợp khi muốn trang phục bám ổn định.

**Câu 2.** Vì sao chạy mô phỏng vải trực tiếp trong game không thể mặc định giống Blender?

A. Vì game không hỗ trợ mesh
B. Vì tất cả bone bị khóa
C. Vì hệ thống mô phỏng và định dạng xuất có thể khác
D. Vì vải không có vật liệu

**Đáp án:** C. **Giải thích:** Cache Cloth Blender không tự động trở thành animation xương cho engine.

**Câu 3.** Đối tượng Body_Collision dùng để làm gì?

A. Làm vật thể va chạm riêng cho mô phỏng
B. Luôn để render thay cơ thể chính
C. Chứa ánh sáng
D. Chứa nhạc

**Đáp án:** A. **Giải thích:** Proxy collider giúp chủ động vùng nào được phép tương tác với vải.

**Câu 4.** Cần kiểm thử tư thế nào để dễ phát hiện váy xuyên đùi?

A. Chỉ đứng thẳng
B. Chỉ cúi đầu
C. Chỉ nhìn trước
D. Bước chân rộng và chuyển động chân

**Đáp án:** D. **Giải thích:** Tư thế cực hạn khiến hai lớp hình học dễ giao nhau.

**Câu 5.** Điểm khác biệt rõ nhất giữa skinning và Cloth là gì?

A. Skinning dùng trọng số xương, Cloth tính động lực học
B. Cloth không cần mesh
C. Skinning không thể animate
D. Skinning chỉ dành cho giày

**Đáp án:** A. **Giải thích:** Hai cơ chế dựa trên loại điều khiển biến dạng khác nhau.

## 6. Tổng kết

Chọn đúng kỹ thuật theo yêu cầu hình ảnh và môi trường xuất. Workflow đáng tin cậy bắt đầu từ scene sạch, kiểm tra tư thế cực hạn và lưu nhiều phiên bản.
