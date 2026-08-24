# 001 — Course Guide: Định hướng lộ trình học Blender

| Thuộc tính     | Nội dung                                                          |
| -------------- | ----------------------------------------------------------------- |
| **Phần**       | 01 — Introduction to Blender                                      |
| **Thời lượng** | 1:43                                                              |
| **Chủ đề**     | Định hướng lộ trình, lựa chọn chuyên môn và cách học khóa Blender |
| **Mức độ**     | Nhập môn                                                          |
| **Trọng tâm**  | Hiểu cấu trúc khóa học và xác định hướng phát triển cá nhân       |

---

## 1. Tổng quan bài học

Bài mở đầu giới thiệu cách toàn bộ khóa học được tổ chức và quan trọng hơn là giải quyết một vấn đề mà rất nhiều người mới học 3D gặp phải:

> **Không biết mình nên tập trung vào lĩnh vực nào trong thế giới 3D.**

Blender có thể được sử dụng cho rất nhiều công việc khác nhau như:

* Modeling.
* High-poly modeling.
* Sculpting.
* Material / Shader.
* Lighting.
* Animation.
* Rendering.
* Scene Assembly.

Việc cố gắng trở nên giỏi toàn bộ các lĩnh vực cùng lúc cần một khoảng thời gian rất lớn. Vì vậy, mục tiêu của khóa học không phải biến người mới thành chuyên gia ở mọi thứ ngay lập tức, mà giúp người học **trải nghiệm các lĩnh vực chính trước khi chọn hướng chuyên sâu**.

---

# 2. Mục tiêu bài học

Sau bài này, người học nên:

* [ ] Hiểu cấu trúc tổng thể của khóa Blender.
* [ ] Biết các lĩnh vực chính trong quy trình sản xuất 3D.
* [ ] Hiểu sự khác biệt giữa học tổng quan và học chuyên sâu.
* [ ] Không cố gắng học tất cả mọi lĩnh vực cùng một lúc.
* [ ] Xác định được một hoặc vài lĩnh vực mình quan tâm nhất.
* [ ] Hiểu vai trò của việc thực hành sau mỗi module.
* [ ] Chuẩn bị quy trình quản lý và lưu phiên bản file `.blend`.

---

# 3. Cấu trúc tổng thể của khóa học

Khóa học được chia thành nhiều module tương đối độc lập. Có thể xem mỗi module như một **mini-course** về một lĩnh vực cụ thể của Blender.

```text
BLENDER
│
├── 01. Introduction to Blender
│
├── 02. Modeling
│
├── 03. High-Poly Modeling
│
├── 04. Material Creation
│
├── 05. Advanced Material Creation
│
├── 06. Lighting
│
├── 07. Sculpting & Animation
│
└── 08. Rendering & Scene Assembly
```

> Tên hoặc cách nhóm module có thể được điều chỉnh khi khóa học được bổ sung thêm nội dung.

Khóa học cũng sẽ tiếp tục có **tài liệu và bài học bổ sung trong tương lai**.

---

# 4. Tư duy quan trọng: Không cần giỏi tất cả mọi thứ

3D không phải là một kỹ năng duy nhất.

Đây là tập hợp của rất nhiều chuyên môn:

```text
                         3D ART
                           │
          ┌────────────────┼────────────────┐
          │                │                │
       MODELING        MATERIAL         ANIMATION
          │                │                │
      ┌───┴───┐        SHADER           RIGGING
      │       │
 Low Poly  High Poly
          │
       SCULPTING

          + Lighting
          + Rendering
          + Compositing
          + Environment
          + VFX
          + Technical Art
```

Một người mới rất dễ rơi vào tình trạng:

```text
Modeling
   ↓
Sculpting
   ↓
Animation
   ↓
Shader
   ↓
Lighting
   ↓
Geometry Nodes
   ↓
VFX
   ↓
Rigging
   ↓
Python
   ↓
"Thứ gì cũng biết một chút nhưng chưa giỏi thứ nào"
```

Đây chính là điều bài học muốn tránh.

---

# 5. Học rộng trước — chuyên sâu sau

Phương pháp được đề xuất là:

```text
GIAI ĐOẠN 1
Khám phá các lĩnh vực
        ↓
GIAI ĐOẠN 2
Hiểu workflow cơ bản
        ↓
GIAI ĐOẠN 3
Xác định thứ mình thích
        ↓
GIAI ĐOẠN 4
Chọn một chuyên môn
        ↓
GIAI ĐOẠN 5
Luyện tập chuyên sâu
        ↓
GIAI ĐOẠN 6
Xây dựng portfolio
```

Ví dụ, sau khi học qua khóa:

```text
Animation     ★★★★★
Modeling      ★★★☆☆
Sculpting     ★★☆☆☆
Materials     ★★★☆☆
Lighting      ★★☆☆☆
Rendering     ★★★☆☆
```

Nếu nhận thấy mình đặc biệt thích **Animation**, hướng đi tiếp theo nên là:

```text
Blender cơ bản
      ↓
Animation
      ↓
12 Principles of Animation
      ↓
Rigging cơ bản
      ↓
Graph Editor
      ↓
Body Mechanics
      ↓
Creature / Character Animation
      ↓
Animation Portfolio
```

Thay vì tiếp tục chia đều thời gian cho tất cả các lĩnh vực.

---

# 6. Vì sao nên chuyên môn hóa?

Thị trường 3D ngày càng cần những người có **chuyên môn rõ ràng**.

Trong một pipeline chuyên nghiệp, một sản phẩm có thể đi qua nhiều bộ phận:

```text
Concept
   ↓
Modeling
   ↓
Sculpting
   ↓
Retopology
   ↓
UV
   ↓
Texturing / Materials
   ↓
Rigging
   ↓
Animation
   ↓
Lighting
   ↓
Rendering
   ↓
Compositing
```

Mỗi bước có thể do một chuyên gia khác nhau đảm nhiệm.

Vì vậy, bạn không nhất thiết phải trở thành chuyên gia toàn bộ pipeline.

Điều quan trọng hơn là:

> **Hiểu toàn bộ pipeline nhưng chuyên sâu vào một vài công đoạn.**

---

# 7. Vai trò của khóa học

Khóa học đóng vai trò giống một **bản đồ tổng quan về thế giới Blender**.

```text
                COURSE
                  │
      ┌───────────┼───────────┐
      ↓           ↓           ↓
   Modeling   Materials   Animation
      │           │           │
      ↓           ↓           ↓
   Hiểu cơ bản  Hiểu cơ bản  Hiểu cơ bản
      └───────────┼───────────┘
                  ↓
          Chọn lĩnh vực thích
                  ↓
            Học chuyên sâu
```

Mục tiêu không phải:

> "Sau khóa học tôi phải thành chuyên gia tất cả mọi thứ."

Mà là:

> "Sau khóa học tôi hiểu các mảng của 3D và biết mình nên đi theo hướng nào."

---

# 8. Có thể bỏ qua module mình không thích không?

Có.

Ví dụ, nếu không muốn trở thành **3D Sculptor**, bạn không nhất thiết phải dành nhiều thời gian luyện sculpting.

Tuy nhiên, giảng viên khuyến nghị:

> **Ít nhất hãy xem phần lý thuyết.**

Lý do là các bộ phận trong pipeline 3D liên quan chặt chẽ với nhau.

Ví dụ một Animator vẫn nên hiểu:

```text
Mesh
 ↓
Topology
 ↓
Rig
 ↓
Weight Paint
 ↓
Animation
```

Nếu topology hoặc weight không tốt, animation cũng có thể gặp vấn đề.

Tương tự, một Modeler nên hiểu rằng model cuối cùng có thể cần:

```text
Model
 ↓
UV
 ↓
Material
 ↓
Rig
 ↓
Animation
 ↓
Render
```

Điều này giúp bạn tạo asset phù hợp với các công đoạn phía sau.

---

# 9. Mỗi module là một mini-course

Một điểm quan trọng trong cách thiết kế khóa học là:

```text
Module
│
├── Lý thuyết
│
├── Công cụ
│
├── Workflow
│
├── Demo
│
└── Bài thực hành
```

Do đó, người học có thể dùng khóa theo hai cách.

### Cách 1 — Học từ đầu đến cuối

Phù hợp với người chưa biết mình thích lĩnh vực nào.

```text
Module 01
   ↓
Module 02
   ↓
Module 03
   ↓
...
   ↓
Module 08
```

### Cách 2 — Chọn chuyên môn

Phù hợp khi đã xác định mục tiêu.

Ví dụ:

```text
Mục tiêu: 3D Animator

Introduction
     ↓
Modeling cơ bản
     ↓
Animation
     ↓
Rigging liên quan
     ↓
Animation nâng cao
     ↓
Project
```

---

# 10. Nguyên tắc học hiệu quả

Không nên chỉ xem video.

Workflow nên là:

```text
Xem
 ↓
Hiểu
 ↓
Tạm dừng video
 ↓
Tự làm lại
 ↓
Sai
 ↓
Sửa
 ↓
Làm lại không nhìn video
 ↓
Áp dụng vào project riêng
```

Một tỷ lệ tham khảo:

| Hoạt động        | Tỷ lệ |
| ---------------- | ----: |
| Xem bài giảng    |   20% |
| Làm lại theo bài |   30% |
| Tự thực hành     |   30% |
| Project cá nhân  |   20% |

Không cần tuân thủ tuyệt đối tỷ lệ này, nhưng phần **thực hành nên chiếm nhiều thời gian hơn xem video**.

---

# 11. Học bằng project cá nhân

Nên chọn một project để sử dụng xuyên suốt quá trình học.

Ví dụ:

```text
Project cá nhân
      │
      ├── Modeling → tạo model
      │
      ├── Sculpting → bổ sung chi tiết
      │
      ├── Material → tạo vật liệu
      │
      ├── Lighting → thiết lập ánh sáng
      │
      ├── Animation → tạo chuyển động
      │
      └── Rendering → tạo sản phẩm cuối
```

Cách này giúp kết nối kiến thức giữa các module thay vì học từng kỹ thuật rời rạc.

---

# 12. Thực hành gợi ý

## Bài tập 1 — Tạo workspace cho khóa học

Tạo cấu trúc thư mục:

```text
Blender_Course/
│
├── 01_Introduction/
├── 02_Modeling/
├── 03_High_Poly/
├── 04_Materials/
├── 05_Advanced_Materials/
├── 06_Lighting/
├── 07_Animation/
├── 08_Rendering/
│
├── Projects/
│   └── Personal_Project/
│
├── References/
│
└── Backup/
```

---

## Bài tập 2 — Thiết lập quy tắc đặt tên file

Không nên liên tục ghi đè lên cùng một file:

```text
project.blend
```

Nên dùng version:

```text
project_v001.blend
project_v002.blend
project_v003.blend
```

Hoặc:

```text
fish_model_v001.blend
fish_model_v002.blend
fish_rig_v001.blend
fish_animation_v001.blend
fish_final_v001.blend
```

Điều này giúp dễ quay lại trạng thái cũ nếu file mới gặp lỗi.

---

# 13. Quy trình lưu phiên bản đề xuất

```text
Bắt đầu session
      ↓
Mở version mới nhất
      ↓
Save As version tiếp theo
      ↓
Làm việc
      ↓
Ctrl + S thường xuyên
      ↓
Hoàn thành milestone
      ↓
Tạo version mới
      ↓
Backup
```

Ví dụ:

```text
fish_v001.blend   ← import/model ban đầu
fish_v002.blend   ← hoàn thiện mesh
fish_v003.blend   ← material
fish_v004.blend   ← rig
fish_v005.blend   ← animation
fish_v006.blend   ← lighting
fish_v007.blend   ← final
```

---

# 14. Backup project

Nên có ít nhất hai nơi lưu:

```text
Working Files
     │
     ├── Máy tính
     │
     └── Backup
            │
            ├── Google Drive
            ├── OneDrive
            ├── NAS
            └── External Drive
```

Có thể chọn một ngày cố định mỗi tuần để sao lưu toàn bộ project.

Ví dụ:

> **Chủ nhật → Backup thư mục Blender_Course.**

---

# 15. Chiến lược chọn chuyên môn

Sau khi hoàn thành từng module, tự chấm ba yếu tố:

| Lĩnh vực  | Hứng thú | Khả năng | Muốn học sâu |
| --------- | -------: | -------: | -----------: |
| Modeling  |       /5 |       /5 |           /5 |
| Sculpting |       /5 |       /5 |           /5 |
| Materials |       /5 |       /5 |           /5 |
| Lighting  |       /5 |       /5 |           /5 |
| Animation |       /5 |       /5 |           /5 |
| Rendering |       /5 |       /5 |           /5 |

Sau toàn khóa, tìm lĩnh vực có tổng điểm cao nhất.

```text
Khóa tổng quan
      ↓
Thử nhiều lĩnh vực
      ↓
Đánh giá bản thân
      ↓
┌───────────────┐
│ Tôi thích gì? │
├───────────────┤
│ Tôi giỏi gì?  │
├───────────────┤
│ Thị trường?   │
└───────────────┘
      ↓
Chọn chuyên môn
      ↓
Học sâu
```

---

# 16. Ghi nhớ

### Không cần trở thành "Jack of All Trades"

Việc biết nhiều lĩnh vực là hữu ích, nhưng không nên khiến quá trình học trở nên quá dàn trải.

Tư duy tốt hơn là:

> **Biết rộng để hiểu pipeline — học sâu để xây dựng chuyên môn.**

### Không thích một module vẫn nên xem lý thuyết

Bạn có thể không thực hành sâu, nhưng việc hiểu module đó giúp giao tiếp và phối hợp tốt hơn với các chuyên môn khác.

### Thực hành là phần bắt buộc

Mỗi module đều có bài thực hành để biến kiến thức từ:

```text
"Biết Blender có chức năng này"
```

thành:

```text
"Tôi có thể tự dùng chức năng này để giải quyết vấn đề."
```

---

# 17. Checklist hoàn thành bài

## Hiểu khóa học

* [ ] Biết mục tiêu tổng thể của khóa học.
* [ ] Hiểu khóa học bao gồm nhiều lĩnh vực khác nhau của Blender.
* [ ] Hiểu mỗi module có thể được xem như một mini-course.
* [ ] Biết rằng khóa học có thể được bổ sung thêm tài liệu trong tương lai.

## Định hướng

* [ ] Hiểu không cần trở thành chuyên gia mọi lĩnh vực 3D.
* [ ] Biết sự khác nhau giữa học tổng quan và học chuyên sâu.
* [ ] Chọn ít nhất một lĩnh vực muốn quan sát kỹ hơn trong quá trình học.
* [ ] Chọn một project cá nhân để áp dụng kiến thức.

## Workflow

* [ ] Tạo thư mục khóa học.
* [ ] Tạo thư mục project.
* [ ] Thống nhất quy tắc đặt tên file.
* [ ] Sử dụng version như `v001`, `v002`, `v003`.
* [ ] Chuẩn bị thư mục backup.
* [ ] Chọn lịch backup định kỳ.

---

# 18. Tóm tắt bài học

```text
KHÓA BLENDER
     ↓
Học tổng quan nhiều lĩnh vực
     ↓
Hiểu cách pipeline 3D hoạt động
     ↓
Thực hành từng module
     ↓
Nhận ra lĩnh vực mình yêu thích
     ↓
Chọn chuyên môn
     ↓
Học chuyên sâu
     ↓
Xây dựng project + portfolio
```

**Ý tưởng cốt lõi của bài 001:**

> Khóa học không nhằm bắt bạn thành thạo mọi thứ trong Blender. Nó giúp bạn hiểu bản đồ tổng thể của 3D, trải nghiệm các lĩnh vực quan trọng và từ đó lựa chọn con đường chuyên môn phù hợp nhất với mình.

---

# Bài luyện tập

## Mục tiêu


## Đề bài


## Yêu cầu hoàn thành

- [ ] 
- [ ] 
- [ ] 

## Kết quả / lời giải


## Ghi chú
