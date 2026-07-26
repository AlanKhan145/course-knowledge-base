# 087 — Tổng kết: Animation & Rigging

| Thuộc tính        | Nội dung                                                            |
| ----------------- | ------------------------------------------------------------------- |
| **Module**        | Module 05 — Rigging & Animation                                     |
| **Bài học**       | Wrap Up – Animation & Rigging                                       |
| **Thời lượng**    | 0:46                                                                |
| **Chủ đề chính**  | Tổng kết module                                                     |
| **Sản phẩm cuối** | Nhân vật Blob Man có rig, walk cycle và màn hình TV phát video động |

---

## 1. Mục tiêu bài học

Sau bài học này, người học có thể:

* Nhìn lại toàn bộ kiến thức đã học trong Module 05.
* Đánh giá kết quả của hoạt ảnh đi bộ đã thực hiện.
* Hiểu rằng animation là một lĩnh vực rộng và cần nhiều thời gian luyện tập.
* Xác định những hướng thực hành tiếp theo như:

  * Tạo chu kỳ chạy.
  * Cải thiện chu kỳ đi bộ.
  * Làm chuyển động cường điệu hoặc hài hước hơn.
* Chuẩn bị chuyển sang nội dung **Sculpting** trong module tiếp theo.

---

## 2. Nội dung chính

Bài học khép lại Module 05 sau khi người học hoàn thành một **walk cycle** cho nhân vật Blob Man.

Giảng viên nhấn mạnh rằng animation là một lĩnh vực lớn và tương đối phức tạp. Vì vậy, người học không nên lo lắng nếu hoạt ảnh của mình chưa hoàn toàn giống mẫu hoặc vẫn còn một số chuyển động chưa tự nhiên.

Điều quan trọng nhất là:

* Đã hoàn thành toàn bộ quy trình.
* Đã hiểu cách tạo và điều chỉnh keyframe.
* Đã biết cách rig một nhân vật cơ bản.
* Đã thực hành tạo chuyển động đi bộ.
* Đã có nền tảng để tiếp tục cải thiện trong những lần thực hành sau.

Mỗi lần tạo animation mới, người học sẽ dần hiểu rõ hơn về:

* Tư thế của nhân vật.
* Nhịp độ chuyển động.
* Trọng lượng cơ thể.
* Sự phối hợp giữa tay, chân và thân người.
* Cách chỉnh sửa chuyển động bằng Graph Editor và Dope Sheet.

---

## 3. Hành trình trong Module 05

Module này đưa người học đi từ animation cơ bản đến một nhân vật được rig và animate hoàn chỉnh.

```text
Animation cơ bản
       │
       ▼
Keyframe và Timeline
       │
       ▼
Record Button và Graph Editor
       │
       ▼
Bone và Armature
       │
       ▼
Dựng nhân vật Blob Man
       │
       ▼
Chuẩn bị topology cho rigging
       │
       ▼
IK, Parenting và Weight Painting
       │
       ▼
Tạo Walk Cycle
       │
       ▼
Thêm video động lên màn hình TV
       │
       ▼
Hoàn thiện sản phẩm
```

---

## 4. Kiến thức đã học trong module

### 4.1. Animation cơ bản

Người học đã làm quen với:

* Timeline.
* Dope Sheet.
* Playhead.
* Keyframe.
* Auto Keying.
* Các thuộc tính chuyển động:

  * Location.
  * Rotation.
  * Scale.

Thông qua các bài tập đơn giản, người học hiểu cách Blender nội suy chuyển động giữa các keyframe.

---

### 4.2. Graph Editor

Graph Editor được sử dụng để kiểm soát chính xác tốc độ và nhịp chuyển động.

Các nội dung quan trọng gồm:

* F-Curve.
* Interpolation.
* Ease In.
* Ease Out.
* Điều chỉnh đường cong chuyển động.
* Tạo hiệu ứng nảy cho vật thể.
* Loại bỏ chuyển động quá đều hoặc thiếu tự nhiên.

Graph Editor giúp chuyển động trở nên mềm mại và có sức nặng hơn.

---

### 4.3. Bone và Armature

Người học đã tìm hiểu cấu trúc cơ bản của một hệ xương trong Blender:

* Bone.
* Armature.
* Edit Mode.
* Pose Mode.
* Bone hierarchy.
* Parent–child relationship.

Một Armature đóng vai trò như bộ xương điều khiển phần mesh bên ngoài của nhân vật.

---

### 4.4. Chuẩn bị mesh cho rigging

Trước khi rig nhân vật, mesh cần có topology phù hợp để biến dạng tốt.

Các vùng khớp như:

* Vai.
* Khuỷu tay.
* Hông.
* Đầu gối.
* Cổ chân.

cần có đủ edge loop để mesh có thể uốn cong mà không bị méo nghiêm trọng.

```text
Ít topology
    ↓
Biến dạng cứng, gãy hoặc méo

Topology phù hợp
    ↓
Khớp uốn cong mềm mại hơn
```

---

### 4.5. Forward Kinematics và Inverse Kinematics

Module giới thiệu hai phương pháp điều khiển xương chính.

| Phương pháp                 | Đặc điểm                                                                          |
| --------------------------- | --------------------------------------------------------------------------------- |
| **FK — Forward Kinematics** | Xoay từng bone theo chuỗi từ bone cha đến bone con                                |
| **IK — Inverse Kinematics** | Di chuyển bone điều khiển cuối chuỗi để các bone còn lại tự động tính toán tư thế |

IK đặc biệt hữu ích cho chân vì bàn chân có thể được giữ cố định trên mặt đất trong khi phần thân và chân chuyển động.

---

### 4.6. Parenting

Mesh được liên kết với Armature thông qua quá trình Parenting.

Quy trình tổng quát:

```text
Chọn Mesh
    +
Chọn Armature
    ↓
Parent
    ↓
With Automatic Weights
    ↓
Mesh chịu ảnh hưởng từ hệ xương
```

Automatic Weights giúp Blender tự động phân bổ mức độ ảnh hưởng của từng bone lên mesh.

Tuy nhiên, kết quả tự động thường vẫn cần được kiểm tra và chỉnh sửa lại.

---

### 4.7. Weight Painting

Weight Painting dùng màu sắc để biểu thị mức độ ảnh hưởng của bone lên từng vùng mesh.

| Màu sắc             | Mức độ ảnh hưởng        |
| ------------------- | ----------------------- |
| **Đỏ**              | Ảnh hưởng mạnh nhất     |
| **Vàng**            | Ảnh hưởng cao           |
| **Xanh lá**         | Ảnh hưởng trung bình    |
| **Xanh dương nhạt** | Ảnh hưởng thấp          |
| **Xanh dương đậm**  | Gần như không ảnh hưởng |

Việc chỉnh Weight Paint giúp hạn chế các lỗi như:

* Một bone kéo nhầm vùng mesh khác.
* Chân kéo theo phần thân.
* Tay làm biến dạng ngực hoặc đầu.
* Khớp bị lõm, phồng hoặc gãy bất thường.

---

### 4.8. Walk Cycle

Phần trọng tâm của module là tạo chu kỳ đi bộ cho Blob Man.

Một walk cycle cơ bản thường gồm các tư thế:

1. **Contact Pose** — chân trước chạm đất.
2. **Down Pose** — cơ thể hạ xuống.
3. **Passing Pose** — chân sau đi qua chân trụ.
4. **Up Pose** — cơ thể nâng lên.
5. **Opposite Contact Pose** — hai chân đổi vai trò.

```text
Contact
   ↓
Down
   ↓
Passing
   ↓
Up
   ↓
Opposite Contact
   ↓
Lặp lại
```

Để chuyển động tự nhiên, cần chú ý:

* Hai tay đánh ngược với hai chân.
* Hông và vai có chuyển động đối lập nhẹ.
* Cơ thể lên xuống theo từng bước.
* Bàn chân không bị trượt trên mặt đất.
* Frame đầu và frame cuối phải tạo được vòng lặp liền mạch.

---

### 4.9. Animated Texture

Ở cuối module, một video được sử dụng làm texture động cho màn hình TV.

Quy trình chính gồm:

* Tạo material cho màn hình.
* Thêm node Image Texture.
* Mở tệp video.
* Đặt Source thành Movie.
* Điều chỉnh số frame.
* Bật Auto Refresh.
* Bật Cyclic nếu muốn video lặp lại.
* Kết nối texture với shader của màn hình.

Điều này giúp màn hình TV trở thành một phần chuyển động trực tiếp trong scene.

---

## 5. Kết quả cuối module

Sau khi hoàn thành Module 05, người học đã tạo được:

* Một mô hình TV bằng Subdivision Surface.
* Một nhân vật Blob Man có topology phù hợp.
* Một hệ thống Armature cơ bản.
* Bộ điều khiển IK cho chân.
* Mesh được parent với Armature.
* Weight Paint được chỉnh sửa.
* Một chu kỳ đi bộ có thể lặp lại.
* Một màn hình TV sử dụng video texture động.

Đây là sản phẩm kết hợp giữa:

```text
Modelling
   +
Modifiers
   +
Rigging
   +
Animation
   +
Materials
   +
Animated Texture
```

---

## 6. Hướng phát triển tiếp theo

Sau khi hoàn thành walk cycle, người học nên thử tạo thêm các chuyển động mới.

### 6.1. Run Cycle

Tạo chu kỳ chạy với các đặc điểm:

* Nhịp chuyển động nhanh hơn.
* Bước chân dài hơn.
* Cơ thể nghiêng về phía trước.
* Có thời điểm cả hai chân đều rời khỏi mặt đất.
* Tay đánh mạnh hơn so với khi đi bộ.

---

### 6.2. Walk Cycle cường điệu

Có thể làm chuyển động rõ nét và thú vị hơn bằng cách:

* Nâng đầu gối cao hơn.
* Đánh tay rộng hơn.
* Tăng độ lên xuống của cơ thể.
* Xoay vai và hông rõ hơn.
* Tạo bước chân dài hoặc ngắn bất thường.

---

### 6.3. Walk Cycle hài hước

Một số ý tưởng:

* Nhân vật đi rón rén.
* Nhân vật đi như đang rất mệt.
* Nhân vật đi trong trạng thái tức giận.
* Nhân vật bước đi quá tự tin.
* Nhân vật mang một vật rất nặng.
* Nhân vật đi trên bề mặt trơn trượt.
* Nhân vật cố giữ thăng bằng.

Mỗi kiểu chuyển động sẽ yêu cầu thay đổi:

* Timing.
* Spacing.
* Pose.
* Trọng tâm cơ thể.
* Biên độ chuyển động.

---

## 7. Quy trình thực hành gợi ý

### Bước 1: Kiểm tra rig

Chuyển sang Pose Mode và thử đặt nhân vật ở nhiều tư thế khác nhau.

Kiểm tra:

* Tay có uốn đúng không.
* Chân có hoạt động ổn định không.
* IK target có điều khiển đúng chân không.
* Đầu và thân có bị kéo sai không.
* Mesh có bị biến dạng bất thường không.

---

### Bước 2: Kiểm tra walk cycle

Phát animation nhiều lần và quan sát:

* Bàn chân có bị trượt không.
* Tay và chân có chuyển động ngược nhau không.
* Cơ thể có lên xuống phù hợp không.
* Frame đầu và cuối có nối liền nhau không.
* Chuyển động có bị giật ở một vị trí nào không.

---

### Bước 3: Kiểm tra Graph Editor

Quan sát các F-Curve để phát hiện:

* Đường cong bị gãy.
* Chuyển động tăng tốc quá đột ngột.
* Bone xoay sai hướng.
* Keyframe dư thừa.
* Chuyển động không lặp lại chính xác.

---

### Bước 4: Lưu phiên bản hoàn chỉnh

Nên lưu nhiều phiên bản khác nhau:

```text
blob_man_rig.blend
blob_man_walk_cycle.blend
blob_man_walk_cycle_fixed.blend
blob_man_final.blend
```

Việc lưu phiên bản giúp quay lại trạng thái trước đó khi rig hoặc animation gặp lỗi.

---

## 8. Phím tắt và công cụ liên quan

Bài tổng kết không giới thiệu phím tắt mới. Một số phím tắt quan trọng cần ghi nhớ từ các bài trước:

| Phím tắt       | Chức năng                               |
| -------------- | --------------------------------------- |
| `I`            | Chèn keyframe                           |
| `G`            | Di chuyển                               |
| `R`            | Xoay                                    |
| `S`            | Thay đổi kích thước                     |
| `Ctrl + Tab`   | Mở menu chuyển chế độ                   |
| `Tab`          | Chuyển Object Mode và Edit Mode         |
| `Shift + A`    | Thêm đối tượng                          |
| `Ctrl + A`     | Apply Transform                         |
| `Alt + G`      | Xóa Location                            |
| `Alt + R`      | Xóa Rotation                            |
| `Alt + S`      | Xóa Scale trong một số chế độ chỉnh sửa |
| `Shift + D`    | Nhân đôi                                |
| `Ctrl + P`     | Parent đối tượng                        |
| `Alt + P`      | Xóa quan hệ Parent                      |
| `Ctrl + 1/2/3` | Thêm Subdivision Surface theo cấp độ    |
| `Spacebar`     | Phát hoặc dừng animation                |
| `← / →`        | Di chuyển giữa các frame                |
| `↑ / ↓`        | Chuyển đến keyframe trước hoặc sau      |
| `Home`         | Hiển thị toàn bộ keyframe trong editor  |

---

## 9. Lưu ý quan trọng

### Không cần hoạt ảnh giống hoàn toàn với mẫu

Animation của mỗi người có thể khác nhau tùy theo:

* Tỉ lệ nhân vật.
* Độ dài tay và chân.
* Vị trí bone.
* Timing.
* Phong cách chuyển động.

Mục tiêu của bài tập không phải là sao chép hoàn toàn chuyển động của giảng viên mà là hiểu được quy trình tạo animation.

---

### Animation cần được luyện tập nhiều lần

Lần đầu tạo walk cycle thường xuất hiện nhiều vấn đề như:

* Chân bị trượt.
* Tay chuyển động cứng.
* Nhân vật thiếu trọng lượng.
* Tư thế chưa rõ ràng.
* Chuyển động bị giật.
* Vòng lặp không liền mạch.

Những lỗi này là bình thường. Qua mỗi lần thực hành, quá trình đặt pose và điều chỉnh timing sẽ trở nên dễ dàng hơn.

---

### Tập trung vào tư thế trước

Một walk cycle có key pose rõ ràng thường hiệu quả hơn một animation có nhiều keyframe nhưng tư thế yếu.

Quy trình tốt:

```text
Tạo Key Pose
    ↓
Kiểm tra silhouette
    ↓
Điều chỉnh timing
    ↓
Thêm breakdown pose
    ↓
Tinh chỉnh Graph Editor
    ↓
Sửa chuyển động phụ
```

---

## 10. Lỗi thường gặp

### 10.1. Bàn chân bị trượt

**Nguyên nhân:**

* IK target di chuyển trong thời gian bàn chân phải đứng yên.
* Location keyframe không trùng nhau.
* Tốc độ cơ thể không phù hợp với bước chân.

**Cách khắc phục:**

* Giữ nguyên vị trí IK target trong các frame bàn chân tiếp xúc mặt đất.
* Kiểm tra Location trong Dope Sheet hoặc Graph Editor.
* So sánh chuyển động của hông với khoảng cách bước chân.

---

### 10.2. Walk cycle bị giật khi lặp

**Nguyên nhân:**

* Frame đầu và frame cuối không giống nhau.
* Frame cuối bị đặt trùng trong phạm vi phát.
* Đường cong animation không lặp đều.

**Cách khắc phục:**

* Sao chép pose đầu sang frame cuối.
* Đặt phạm vi phát kết thúc trước keyframe trùng lặp cuối cùng.
* Kiểm tra chuyển động bằng chế độ phát lặp.

---

### 10.3. Tay và chân cùng phía di chuyển cùng nhau

Trong dáng đi thông thường:

```text
Chân trái tiến lên
        ↕
Tay phải tiến lên
```

Tay và chân đối diện cần chuyển động ngược nhau để giữ cân bằng.

---

### 10.4. Nhân vật thiếu trọng lượng

**Biểu hiện:**

* Cơ thể trôi đều.
* Không có chuyển động lên xuống.
* Bàn chân không tạo cảm giác tiếp xúc mặt đất.

**Cách khắc phục:**

* Hạ hông ở Down Pose.
* Nâng hông ở Up Pose.
* Điều chỉnh timing ở thời điểm chân chạm đất.
* Tăng độ rõ ràng của Contact Pose.

---

### 10.5. Mesh biến dạng sai

**Nguyên nhân:**

* Weight Paint chưa chính xác.
* Bone ảnh hưởng nhầm vùng mesh.
* Topology quanh khớp chưa đủ.

**Cách khắc phục:**

* Kiểm tra từng Vertex Group.
* Chỉnh Weight Paint.
* Thêm hoặc điều chỉnh edge loop.
* Kiểm tra lại vị trí bone trong Armature.

---

### 10.6. Video texture không chuyển động

**Nguyên nhân:**

* Chưa bật Auto Refresh.
* Số frame của video chưa đúng.
* Timeline không nằm trong phạm vi video.
* Texture chưa được kết nối đúng với shader.

**Cách khắc phục:**

* Bật **Auto Refresh**.
* Thiết lập đúng **Frames**.
* Bật **Cyclic** nếu muốn phát lặp.
* Kiểm tra kết nối node trong Shader Editor.

---

## 11. Checklist hoàn thành module

### Animation cơ bản

* [ ] Hiểu cách sử dụng Timeline.
* [ ] Biết chèn keyframe.
* [ ] Biết sử dụng Auto Keying.
* [ ] Phân biệt Timeline và Dope Sheet.
* [ ] Biết chỉnh chuyển động trong Graph Editor.

### Rigging

* [ ] Hiểu Bone và Armature.
* [ ] Biết tạo hệ thống bone cơ bản.
* [ ] Hiểu quan hệ cha–con giữa các bone.
* [ ] Biết sử dụng Pose Mode.
* [ ] Biết áp dụng IK cho chân.
* [ ] Biết parent mesh với Armature.
* [ ] Biết kiểm tra và chỉnh Weight Paint.

### Walk Cycle

* [ ] Có Contact Pose.
* [ ] Có Down Pose.
* [ ] Có Passing Pose.
* [ ] Có Up Pose.
* [ ] Hai tay chuyển động ngược với hai chân.
* [ ] Cơ thể có chuyển động lên xuống.
* [ ] Bàn chân không bị trượt.
* [ ] Animation có thể lặp liền mạch.

### Sản phẩm cuối

* [ ] Đã hoàn thành toàn bộ 16 bài học của Module 05.
* [ ] Đã có mô hình Blob Man hoàn chỉnh.
* [ ] Rig hoạt động ổn định.
* [ ] Walk cycle phát đúng.
* [ ] Màn hình TV phát video texture.
* [ ] Đã lưu một phiên bản Blender hoàn chỉnh.
* [ ] Đã ghi chú quy trình rigging để tái sử dụng.

---

## 12. Bài tập mở rộng

### Bài tập 1: Tạo Run Cycle

Sử dụng rig hiện tại để tạo một chu kỳ chạy ngắn.

Yêu cầu:

* Có thời điểm cả hai chân rời mặt đất.
* Cơ thể nghiêng về phía trước.
* Tay đánh mạnh hơn.
* Chuyển động có thể lặp lại.

---

### Bài tập 2: Tạo ba phong cách đi bộ

Tạo ba animation từ cùng một rig:

1. Đi bộ bình thường.
2. Đi bộ mệt mỏi.
3. Đi bộ vui vẻ hoặc hài hước.

So sánh sự khác nhau về:

* Pose.
* Timing.
* Biên độ đánh tay.
* Độ cao của hông.
* Độ dài bước chân.

---

### Bài tập 3: Thay video trên màn hình TV

Tìm một video khác và sử dụng làm animated texture.

Có thể thử:

* Nhiễu màn hình.
* Hoạt ảnh không gian.
* Động vật.
* Mưa.
* Lửa.
* Hiệu ứng kỹ thuật số.
* Đồ họa trừu tượng.

Nên sử dụng tài nguyên có giấy phép phù hợp và được phép dùng trong dự án.

---

### Bài tập 4: Render một đoạn animation ngắn

Tạo một cảnh từ 3–5 giây gồm:

* Blob Man bước vào khung hình.
* Nhân vật dừng trước TV.
* Màn hình TV phát video.
* Camera và ánh sáng được thiết lập cơ bản.

---

## 13. Chuẩn bị cho module tiếp theo

Module tiếp theo sẽ giới thiệu các kỹ thuật **Sculpting** trong Blender.

Người học sẽ chuyển từ việc tạo nhân vật đơn giản bằng modelling và modifiers sang phương pháp điêu khắc hình khối tự do hơn.

Mục tiêu tiếp theo là tạo một phần đầu nhân vật có phong cách độc ác hoặc kỳ quái.

```text
Module 05
Rigging & Animation
        │
        ▼
Hoàn thành Blob Man
        │
        ▼
Module tiếp theo
Sculpting
        │
        ▼
Tạo đầu nhân vật độc ác
```

---

## 14. Tóm tắt

Module 05 đã giới thiệu toàn bộ quy trình cơ bản để đưa một mô hình tĩnh trở thành một nhân vật có thể chuyển động.

Người học đã đi qua các bước:

1. Tạo animation bằng keyframe.
2. Điều chỉnh chuyển động bằng Graph Editor.
3. Tìm hiểu Bone và Armature.
4. Dựng mô hình TV và Blob Man.
5. Chuẩn bị topology cho biến dạng.
6. Tạo hệ thống xương cho nhân vật.
7. Thiết lập IK và Parenting.
8. Chỉnh sửa Weight Painting.
9. Tạo walk cycle.
10. Thêm video texture động cho màn hình TV.

Kết quả cuối cùng là một nhân vật Blob Man được rig đầy đủ, có thể thực hiện chu kỳ đi bộ trước một màn hình TV đang phát video động.

Animation có thể phức tạp và cần nhiều thời gian để thành thạo. Tuy nhiên, việc hoàn thành được quy trình đầu tiên là nền tảng quan trọng. Những lần tạo animation tiếp theo sẽ trở nên dễ dàng hơn khi người học đã quen với cách đặt pose, điều chỉnh timing và kiểm soát hệ thống rig.
