# Bài 06 — Xương mắt cá, bàn chân và Inverse Kinematics

## 1. Tóm tắt bài học

Xoay từng xương đùi và cẳng chân thủ công phù hợp khi kiểm tra cấu trúc nhưng bất tiện khi dựng tư thế bước đi. `Inverse Kinematics` (IK) cho phép di chuyển một **bone đích** để chuỗi xương chân tự điều chỉnh. Bài này bổ sung mắt cá, bàn chân và bộ điều khiển `Foot IK.R`, sau đó đặt ràng buộc IK với chiều dài chuỗi là hai bone.

## 2. Mục tiêu học tập

- Extrude và đặt tên `Ankle.R`, `Foot.R`.
- Tạo `Foot IK.R` bằng cách nhân đôi một bone và gỡ parent không cần thiết.
- Thêm `Inverse Kinematics` trong `Bone Constraints`.
- Cấu hình `Target`, `Bone`, `Use Tail` và `Chain Length`.
- Kiểm tra IK chỉ tác động lên đoạn đùi và cẳng chân mong muốn.

## 3. Phân biệt FK và IK

Khi dùng **Forward Kinematics (FK)**, ta xoay lần lượt từng bone: đùi, cẳng chân rồi bàn chân. Với **Inverse Kinematics (IK)**, ta chỉ định nơi chân phải tới; hệ thống tính toán cách gập chuỗi xương để đáp ứng mục tiêu đó.

Ví dụ, khi kéo `Foot IK.R` lên, robot cần tự gập gối thay vì phải quay riêng `Upper Leg.R` và `Lower Leg.R`. Để đạt điều này cần chỉ rõ bone nhận IK, bone mục tiêu và số mắt xích chịu ảnh hưởng.

## 4. Tạo xương mắt cá và bàn chân

1. Chọn armature trong `Edit Mode`.
2. Chọn `Tail` của `Lower Leg.R`.
3. Nhấn `E` và đưa bone mới xuống vị trí mắt cá, chủ yếu theo trục Z.
4. Chọn mesh quanh khớp mắt cá trong `Object Mode → Edit Mode`, lấy tâm vòng đỉnh bằng `Shift + S → Cursor to Selected`.
5. Trở lại armature và căn điểm cần thiết theo con trỏ; nếu muốn giữ tọa độ X nhưng căn Y/Z, đặt pivot tại `3D Cursor` rồi dùng `S → Shift + X → 0` trên đúng đầu/đuôi xương.
6. Từ `Tail` bone mắt cá, nhấn `E` tạo thêm bone cho bàn chân.
7. Đổi tên hai bone: `Ankle.R`, `Foot.R`.

Kết quả là chuỗi xương chính:

```text
Upper Leg.R
└── Lower Leg.R
    └── Ankle.R
        └── Foot.R
```

## 5. Tạo bộ điều khiển Foot IK.R

1. Trong armature `Edit Mode`, chọn `Ankle.R`.
2. Nhấn `Shift + D` để nhân đôi bone, sau đó nhấp chuột phải hoặc `Esc` để bản sao giữ nguyên vị trí.
3. Đổi tên bản sao thành `Foot IK.R`.
4. Khi vẫn chọn bone mới, nhấn `Alt + P → Clear Parent` để xóa quan hệ cha–con được sao chép cùng bone.
5. Chọn thử bone `Foot IK.R` và dùng `G` để xác nhận nó có thể độc lập di chuyển; nhấn `Esc` để hoàn tác di chuyển thử.

Việc có hai bone chồng vị trí là có chủ đích. `Ankle.R` thuộc chuỗi chân; `Foot IK.R` sẽ làm **bộ điều khiển đích**. Chúng cần các vai trò riêng.

## 6. Cài đặt ràng buộc IK

Trong `Pose Mode`:

1. Chọn **`Ankle.R`** — bone nhận constraint, không phải `Foot IK.R`.
2. Mở `Bone Constraints Properties`.
3. Chọn `Add Bone Constraint → Inverse Kinematics`.
4. Ở trường `Target`, chọn đối tượng `Armature` đang chứa rig.
5. Ở trường `Bone`, chọn `Foot IK.R`.
6. Nếu chuỗi bị kéo lệch lên vì IK bám vào đầu cuối của target, bỏ chọn `Use Tail`.
7. Đặt **`Chain Length = 2`**.
8. Chọn `Foot IK.R`, nhấn `G` để di chuyển thử và kiểm tra chân gập.

### Vì sao Chain Length phải là 2?

Khi `Chain Length = 0`, bộ giải có thể đi qua nhiều bone tổ tiên hơn mong muốn và khiến phần khác của rig cũng chuyển động. Trong hệ thực hành này, ta chỉ muốn IK tính trên hai đoạn xương của chân: **đùi và cẳng chân**. Giới hạn `2` giúp loại bỏ chuyển động lan rộng lên thân robot.

### Vì sao cần kiểm tra Use Tail?

Khi bật `Use Tail`, bộ giải sử dụng đuôi bone mục tiêu, tạo ra độ lệch nếu vị trí mong muốn là đầu bone. Tắt lựa chọn này trong cấu hình đang thực hành để giữ mắt cá ở vị trí dự định.

## 7. Checkpoint, debug và thực hành

**Checkpoint:** khi kéo `Foot IK.R`, đùi và cẳng chân gập; thân robot không bị kéo theo; mắt cá không bị dịch sai ngay lúc chọn target.

| Hiện tượng | Nguyên nhân cần kiểm tra | Cách xử lý |
| --- | --- | --- |
| Chọn target xong chân nhảy khỏi chỗ | `Use Tail` đang không phù hợp | Bỏ `Use Tail` |
| Kéo Foot IK làm cả thân robot chuyển động | Chuỗi IK bao trùm quá nhiều bone | Đặt `Chain Length = 2` |
| Kéo controller nhưng chân không gập | Sai bone nhận constraint, sai Target hoặc Bone | Kiểm tra constraint nằm trên `Ankle.R` và trỏ tới `Foot IK.R` |
| Foot IK tự đi theo chân dù chưa parent chủ ý | Bản sao còn quan hệ cha–con | `Alt + P → Clear Parent` trong Edit Mode |

**Thực hành:** đặt chân ở ba độ cao khác nhau chỉ bằng `G` trên `Foot IK.R`; quan sát hướng gập chân và dùng `Alt + G` để trở về vị trí ban đầu.

## 8. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Trong bài này, IK Constraint được thêm lên bone nào?

A. Foot IK.R  
B. Lower Leg.R  
C. Ankle.R  
D. Body  

**Đáp án: C.** Constraint được đặt trên Ankle.R, còn Foot IK.R là target điều khiển.

**Câu 2.** Giá trị Chain Length nào được sử dụng để giới hạn chuỗi chân?

A. 0  
B. 2  
C. 5  
D. 10  

**Đáp án: B.** Chain Length 2 giữ bộ giải trên hai đoạn đùi và cẳng chân được yêu cầu.

**Câu 3.** Tại sao phải Clear Parent sau khi nhân đôi bone Foot IK.R?

A. Để bone mục tiêu tách khỏi quan hệ cha–con không mong muốn  
B. Để xóa vật liệu  
C. Để kích hoạt camera  
D. Để gộp mesh  

**Đáp án: A.** Bản sao có thể kế thừa parent của Ankle.R; target cần độc lập ở giai đoạn cấu hình IK.

**Câu 4.** Chọn target IK khiến xương nhảy cao khỏi vị trí dự kiến. Nên kiểm tra gì?

A. Tên collection  
B. Giá trị Metallic  
C. Tùy chọn In Front  
D. Tùy chọn Use Tail  

**Đáp án: D.** Use Tail có thể làm solver bám vào đuôi target thay vì vị trí muốn dùng.

**Câu 5.** Khi điều khiển chân bằng IK, thao tác chính để đặt vị trí chân là gì?

A. Xoay camera  
B. Di chuyển Foot IK.R bằng G  
C. Đổi shading sang Material Preview  
D. Tạo thêm mesh mới  

**Đáp án: B.** IK lấy vị trí target làm đầu vào để điều chỉnh các khớp trong chuỗi.

## 9. Tổng kết

Bài học đã hoàn thành các nội dung: Tạo Ankle.R/Foot.R, bộ điều khiển Foot IK.R và ràng buộc IK với Chain Length = 2. Hãy bảo đảm các checkpoint đều đạt trước khi tiếp tục thao tác trên rig, và lưu dự án Blender ở trạng thái mong muốn.
