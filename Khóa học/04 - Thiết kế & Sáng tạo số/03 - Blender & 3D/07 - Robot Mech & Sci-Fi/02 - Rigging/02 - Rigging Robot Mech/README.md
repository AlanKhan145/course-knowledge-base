# Khóa học Blender — Rigging Robot Mech từ cơ bản đến IK

**Chủ đề:** Xây dựng hệ thống xương (`Armature`) và bộ điều khiển cho robot mech hard-surface trong Blender.  
**Phương pháp:** Mỗi bài là một tài liệu Markdown độc lập, gồm giải thích, hướng dẫn thao tác, checkpoint, thực hành và 5 câu hỏi trắc nghiệm có đáp án.  
**Phạm vi:** Chuẩn bị model → tạo xương thân → điều khiển chính → khớp hông → chân → IK → đối xứng chân → cổ và đầu → kiểm thử.

## 1. Giới thiệu

Khóa học tập trung vào phương pháp **rigid bone parenting**: những bộ phận cơ khí tách rời được gắn trực tiếp vào bone tương ứng, thay vì dùng biến dạng mềm của nhân vật hữu cơ. Người học thực hành dựng một rig có điều khiển toàn thân, chân IK hai bên và các khớp xoay được giới hạn.

### Yêu cầu đầu vào

- Đã sử dụng cơ bản `Object Mode`, `Edit Mode`, chọn các bộ phận và lưu file Blender.
- Có một model robot mech đã tách các cụm có chuyển động riêng: thân, khớp hông, đùi, cẳng chân, mắt cá, bàn chân, cổ và đầu.
- Model nên được đặt trong tư thế nghỉ và tổ chức thành các đối tượng dễ chọn.

### Kết quả đầu ra

Một file `.blend` chứa hệ xương đủ để điều khiển thân, đầu, hai chân bằng `Foot IK.R`/`Foot IK.L`, đi kèm quan hệ cha–con đúng. Các bài dạy rigging, **không** triển khai chu kỳ đi bộ, render hoặc video editing.

## 2. Lộ trình học

| Bài | Tên bài | Trọng tâm thực hành | Khoảng nội dung |
| --- | --- | --- | --- |
| 01 | [Chuẩn bị model và chuẩn hóa Transform](bai_hoc/01-chuan-bi-model-va-transforms.md) | Chuẩn bị tư thế nghỉ và kiểm soát ảnh hưởng của Apply Transforms tới vật liệu, bevel. | 00:53–03:47 |
| 02 | [Tạo Armature và khớp xoay thân](bai_hoc/02-armature-va-xuong-than.md) | Tạo xương thân đúng tâm, sử dụng Edit/Pose Mode và gắn thân robot vào bone. | 03:47–11:10 |
| 03 | [Bộ điều khiển chính và hệ phân cấp xương](bai_hoc/03-bo-dieu-khien-chinh-va-parent.md) | Tạo Master Control, đặt tên, parenting Keep Offset, đưa robot về tư thế nghỉ. | 11:10–14:36 |
| 04 | [Rig khớp hông và chuẩn đặt tên đối xứng](bai_hoc/04-rig-khop-hong.md) | Tạo xương Hip Rotation.R, khóa trục Z, parent mesh khớp và gắn vào Body. | 14:37–19:32 |
| 05 | [Rig đùi và cẳng chân bằng tâm khớp chính xác](bai_hoc/05-dui-va-cang-chan.md) | Tạo Upper Leg.R và Lower Leg.R, snap bằng Cursor và S Shift X 0, parent các chi tiết và kiểm tra. | 19:39–27:33 |
| 06 | [Xương mắt cá, bàn chân và Inverse Kinematics](bai_hoc/06-xuong-mat-ca-va-ik.md) | Tạo Ankle.R/Foot.R, bộ điều khiển Foot IK.R và ràng buộc IK với Chain Length = 2. | 27:35–33:35 |
| 07 | [Giới hạn Foot IK, Copy Rotation và sửa liên kết hông](bai_hoc/07-dieu-khien-ban-chan-va-fix-ik.md) | Khóa kênh Foot IK, đồng bộ xoay mắt cá, parenting đúng và ẩn các bone không dùng làm controller. | 33:35–40:20 |
| 08 | [Đối xứng chân trái và hoàn thiện parenting](bai_hoc/08-doi-xung-chan-va-parent-mesh.md) | Symmetrize bone .R sang .L, gắn mesh bên trái, ẩn bone phụ và nối các chi tiết khớp còn sót. | 40:25–45:41 |
| 09 | [Rig cổ, đầu và kiểm thử hoàn chỉnh](bai_hoc/09-co-dau-va-kiem-thu-rig.md) | Tạo bone Neck/Head, phân cấp, kiểm thử toàn rig và đưa về rest pose. | 45:41–51:14 |

## 3. Cách học và thực hành

1. Học theo thứ tự 01 → 09 vì mỗi bài tạo thêm một phần của rig, nhưng từng bài vẫn có giải thích đủ để đọc riêng.
2. Thực hiện bước thao tác trong Blender, dừng ở từng checkpoint để kiểm tra.
3. Hoàn thành phần thực hành và làm 5 câu hỏi trắc nghiệm cuối mỗi bài.
4. Lưu bản `.blend` theo các mốc hoàn thành để có thể quay lại nếu parenting hoặc constraint bị sai.
5. Trong `Pose Mode`, xóa pose thử bằng `Alt + R`, `Alt + G`, `Alt + S` khi cần và kiểm tra rest pose.

## 4. Bảng tra cứu nhanh

| Phím/Thao tác | Chức năng |
| --- | --- |
| `Shift + A` | Thêm bone trong armature Edit Mode |
| `Shift + S` | Snap menu: Cursor to Selected / Selection to Cursor |
| `Ctrl + P → Bone` | Gắn mesh vào bone được chọn ở Pose Mode |
| `Ctrl + P → Keep Offset` | Tạo quan hệ cha–con giữa các bone mà không kéo xương đến nhau |
| `Alt + P → Clear Parent` | Bỏ parent bone khi cần một controller độc lập |
| `H`, `Alt + H` | Ẩn và hiện lại đối tượng/bone tùy chế độ |
| `B` | Box Select |
| `Numpad 3`, `Numpad 7` | Góc bên / góc trên |
| `Z` | Chọn Solid / Wireframe / Rendered |
| `N` | Mở bảng Item/Transform |
| `G`, `R`, `S` | Di chuyển / xoay / thay đổi tỷ lệ |
| `Alt + G`, `Alt + R`, `Alt + S` | Reset Location / Rotation / Scale trong Pose Mode |

## 5. Sơ đồ kiến trúc rig sau khóa học

```text
Master Control
└── Body
    ├── Neck
    │   └── Head
    ├── Hip Rotation.R
    │   ├── Upper Leg.R → Lower Leg.R → Ankle.R → Foot.R
    │   └── Foot IK.R
    └── Hip Rotation.L
        ├── Upper Leg.L → Lower Leg.L → Ankle.L → Foot.L
        └── Foot IK.L
```

`Foot IK.R` và `Foot IK.L` là các target cho Inverse Kinematics. `Ankle` nhận IK Constraint và Copy Rotation từ bộ điều khiển tương ứng. Sơ đồ thể hiện ý tưởng parent, không có nghĩa mọi xương đều phải nối hình học trực tiếp bằng tùy chọn `Connected`.

## 6. Tự đánh giá kết quả khóa học

- [ ] Tư thế nghỉ không bị lệch sau khi thiết lập armature.
- [ ] Tất cả các mesh chuyển động đi theo bone tương ứng.
- [ ] `Master Control` di chuyển cả robot.
- [ ] `Hip Rotation.R/.L` xoay đúng bên.
- [ ] Chân phải và trái có thể kéo lên/xuống bằng các bone IK riêng.
- [ ] Mắt cá xoay theo bộ điều khiển bàn chân.
- [ ] Cổ kéo theo đầu; thân kéo theo cổ và đầu.
- [ ] Bộ điều khiển được tổ chức rõ ràng để chuẩn bị animate.

**Lưu ý phạm vi:** Đây là phần rigging robot mech. Một bài riêng về walk cycle, kết xuất và biên tập animation có thể xây dựng sau khi rig đã hoàn chỉnh.
