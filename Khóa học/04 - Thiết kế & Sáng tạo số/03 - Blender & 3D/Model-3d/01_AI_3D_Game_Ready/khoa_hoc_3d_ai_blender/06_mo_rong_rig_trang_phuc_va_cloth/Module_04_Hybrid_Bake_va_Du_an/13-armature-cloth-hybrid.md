# Bài 13 — Kết hợp Armature và Cloth trên áo choàng

## 1. Tổng quan

Một áo choàng cần bám vai khi nhân vật bước và xoay, nhưng phần vạt phải bay mềm. Kết hợp `Armature Modifier` với `Cloth` và `Pin Group` đáp ứng được cả hai mục tiêu: xương định hình phần neo còn solver tính chuyển động thứ cấp ở phần tự do.

## 2. Mục tiêu học tập

- Dựng áo choàng có xương và vùng ghim đúng.
- Đặt thứ tự modifier để neo áo choàng theo nhân vật.
- Chuẩn bị đoạn rest pose rồi bake cloth ổn định.

## 3. Nội dung bài học

### 3.1. Dựng cape từ rest pose

Chuyển rig nhân vật sang tư thế nghỉ. Tạo `Plane`, đưa gần vai, kéo tạo tấm cape dài xuống sau lưng rồi `Subdivide` thành quad tương đối đều. Tránh để tấm cape xuyên cổ, vai hoặc lưng ở frame đầu. Nếu cần độ dày, giữ geometry Cloth mỏng và thêm Solidify sau khi kết quả vật lý đã ổn.

Tạo `Body_Collision` hoặc collider cho vai và lưng; kiểm tra chúng đi theo rig. Với cape dài, cần thêm vùng đùi/mông nếu có thể chạm khi nhân vật xoay hoặc ngồi.

### 3.2. Bind vùng trên vào armature

Chọn cape rồi armature, `Ctrl + P > With Empty Groups`. Blender tạo các vertex groups nhưng chưa gán weight. Chỉ giữ hoặc sử dụng các nhóm ảnh hưởng cần thiết cho cape như cổ, ngực trên và hai vai. Chọn dải vertex sát vai và gán trọng số cho bone tương ứng; đừng gán mạnh các hàng thấp nếu dự định để chúng chịu Cloth.

Tạo `VG_Pin_Cape`: đỉnh trên có trọng số mạnh, hàng dưới giảm mượt. Trong `Cloth > Shape > Pin Group` chọn nhóm này. Quan sát riêng phần cape theo bone trong Pose Mode trước khi bật simulation: phần dải vai phải bám đúng cơ thể.

### 3.3. Stack và va chạm

Kiểm tra thứ tự có chủ đích: `Armature` tạo mesh đã theo xương; `Cloth` xử lý biến dạng phần tự do; `Solidify` sau Cloth cho độ dày; `Subdivision Surface` có thể đặt sau để render mượt. Trong một số cảnh cần tăng topology trước solver, dùng subdivision trước Cloth mức vừa phải, nhưng phải cân đối hiệu năng.

Bật `Collision` trên thân, có thể bật `Self Collision` trên cape. Điều chỉnh distance và quality thử dần từ thấp đến cao. Khi cape bám vai nhưng bị kéo mạnh ở lưng, xem lại nhóm pin/rig và collider thay vì chỉ thêm độ cứng.

### 3.4. Đoạn nghỉ và bake

Tạo đoạn `rest pose` 15–30 frame đầu hoặc thời lượng phù hợp, sau đó blend tới motion chính. Trong `Cloth > Cache`, đặt Start tại frame rest pose đầu tiên và End cuối animation. Phát mô phỏng từ đầu rồi `Bake`/`Bake All Dynamics` khi cấu hình đủ ổn. Nếu chỉnh vertex group, Physics hoặc tốc độ animation, `Free Bake` và bake lại.

Chỉ đánh giá thành phẩm khi cache đã chạy đầy đủ. Một đoạn cape mượt trong preview một phần có thể tạo khác biệt sau bake nếu bạn đã đổi tham số hay chạy từ frame giữa.

## 4. Thực hành

**Nhiệm vụ:** Dựng cape quad treo vai và gắn vào nhân vật bằng Empty Groups. Weight Paint vùng cổ/vai, tạo Pin gradient; bật Collision; làm animation đi bộ + xoay người; bake đoạn hoàn chỉnh.

**Checkpoint:** Cape không rơi, vai đi theo rig, vạt bay theo hướng chuyển động, không xuyên lưng nghiêm trọng và cache phát lại ổn định.

## 5. Câu hỏi ôn tập

**Câu 1.** Vì sao nên chỉ skin mạnh vùng vai của cape trong thiết lập lai?

A. Để phần dưới tự do cho Cloth
B. Để áo biến mất
C. Để khóa camera
D. Để xóa mesh

**Đáp án:** A. **Giải thích:** Vạt tự do cần solver, trong khi mép vai bám rig.

**Câu 2.** With Empty Groups khác With Automatic Weights ở điểm nào?

A. Nó tạo shader
B. Nó tạo nhóm bone nhưng không tự ước lượng weight
C. Nó xóa skeleton
D. Nó tự bake

**Đáp án:** B. **Giải thích:** Người dùng chủ động tô ảnh hưởng xương cần thiết.

**Câu 3.** Stack thông thường để vừa theo bone vừa mô phỏng?

A. Cloth, Camera, Audio
B. Solidify, Camera
C. Armature trước Cloth rồi modifier làm đẹp
D. Render trước Armature

**Đáp án:** C. **Giải thích:** Bone deform làm cơ sở chuyển động cho vải và solver tính chuyển động phụ.

**Câu 4.** Sửa nhóm Pin sau khi bake thì nên làm gì?

A. Không cần vì bake tự đổi
B. Xóa rig
C. Đổi vật liệu
D. Free Bake và tính lại mô phỏng

**Đáp án:** D. **Giải thích:** Thay pin đổi điều kiện solver, cache cũ không còn hợp lệ.

**Câu 5.** Để áo choàng không xuyên lưng, nên kiểm tra điều nào?

A. Collider lưng, rest pose, khoảng cách va chạm
B. Tên camera
C. Resolution
D. Âm nhạc

**Đáp án:** A. **Giải thích:** Hình học tiếp xúc đúng quyết định va chạm.

## 6. Tổng kết

Rig lai giữ phần neo theo cơ thể và phần vạt tự do theo vật lý. Quan trọng nhất là vertex group pin, modifier order, rest pose và bake từ đầu timeline.
