# 010 — Project Lesson: 3D Model

| Thuộc tính        | Nội dung                                                                       |
| ----------------- | ------------------------------------------------------------------------------ |
| **Section**       | Section 02 — Your First Modeling Tools                                         |
| **Bài học**       | Project Lesson: 3D Model                                                       |
| **Loại nội dung** | Project / Practice Lesson                                                      |
| **Thời lượng**    | 0:28                                                                           |
| **Ngôn ngữ gốc**  | English                                                                        |
| **Chủ đề chính**  | Tự thiết kế 3D Object, Modeling Practice, Topology, Modifiers, Surface & Light |

---

## 1. Tổng quan bài học

Đây là **bài project thực hành** kết thúc phần kiến thức modeling cơ bản của Section 02.

Thay vì tiếp tục học thêm công cụ mới, người học được yêu cầu:

> **Tự tạo một vật thể 3D của riêng mình bằng những kỹ thuật đã học.**

Có thể:

* làm lại hoặc biến tấu chiếc **Lantern** từ bài trước;
* tạo một **picket fence — hàng rào gỗ**;
* tạo một **well — giếng nước**;
* hoặc chọn một vật thể khác phù hợp với scene ngoại cảnh.

Điểm quan trọng là:

> **Chỉ tập trung vào Modeling ở giai đoạn này.**

Chưa cần quá quan tâm đến:

* material hoàn chỉnh;
* texture chi tiết;
* lighting phức tạp;
* rendering cuối cùng.

---

# 2. Vai trò của bài Project

Bài này đóng vai trò chuyển đổi từ:

```text id="gg6lel"
Học công cụ riêng lẻ
        ↓
Làm theo giảng viên
        ↓
Hiểu workflow
        ↓
TỰ XÂY DỰNG ASSET
```

Đây là bước rất quan trọng.

Nếu chỉ xem và làm theo tutorial, người học có thể nhớ:

```text id="vp6y2m"
"Nhấn phím nào?"
```

Nhưng khi tự làm project, câu hỏi trở thành:

```text id="2hsnfw"
"Mình cần dùng công cụ nào
để tạo được hình dạng này?"
```

Đó mới là tư duy modeling thực tế.

---

# 3. Mục tiêu bài học

Sau project này, người học nên có thể:

* Tự chọn một vật thể phù hợp để model.
* Phân tích vật thể thành các hình khối cơ bản.
* Tạo blockout trước khi thêm chi tiết.
* Kiểm soát:

  * silhouette;
  * proportion;
  * topology;
  * shading.
* Sử dụng các công cụ modeling đã học.
* Áp dụng Modifier theo hướng non-destructive.
* Quan sát cách ánh sáng phản xạ trên bề mặt.
* Nhận ra topology nào đang tạo ra hình dạng mong muốn.
* Hiểu Modifier có thể thay đổi object như thế nào.
* Hoàn thành một asset không phụ thuộc hoàn toàn vào hướng dẫn từng bước.

---

# 4. Yêu cầu chính của Project

Transcript đưa ra ba trọng tâm rõ ràng:

```text id="p1wdtm"
MODELING
   │
   ├── Surface
   │     ↓
   │   Light Reflection
   │
   ├── Topology
   │
   └── Modifiers
```

Trong quá trình làm asset, hãy liên tục quan sát ba yếu tố này.

---

# 5. Trọng tâm 1 — Chỉ tập trung vào Modeling

Giảng viên nhấn mạnh:

> **Try to focus only on modeling for now.**

Điều này có nghĩa project hiện tại chưa yêu cầu phải tạo một sản phẩm render hoàn chỉnh.

Thứ tự ưu tiên:

```text id="0l713f"
Shape
  ↓
Proportion
  ↓
Topology
  ↓
Modifiers
  ↓
Surface Quality
```

Chưa cần ưu tiên:

```text id="5vbpyr"
Texture chi tiết
Material phức tạp
Lighting setup
Compositing
Final Render
```

---

# 6. Chọn vật thể để Model

Giảng viên gợi ý ba hướng.

## Lựa chọn 1 — Lantern

Có thể tiếp tục từ bài:

**008 — Hard Surface Modeling: Lantern**

và:

**009 — Using Modifiers**

Có thể tạo một phiên bản khác:

```text id="6yy4v4"
Original Lantern
       ↓
Thay đổi Top
       ↓
Thay Handle
       ↓
Thay tỷ lệ
       ↓
Your Own Lantern
```

---

## Lựa chọn 2 — Picket Fence

**Picket fence** là hàng rào gồm nhiều thanh gỗ lặp lại.

Đây là asset rất phù hợp để thực hành:

* modeling từ Cube;
* Bevel;
* Array;
* Duplicate;
* Apply Scale.

Sơ đồ:

```text id="pk821s"
1 Fence Board
      ↓
Bevel
      ↓
Array
      ↓
Multiple Boards
      ↓
Add Horizontal Supports
      ↓
Fence
```

Ví dụ hình dạng:

```text id="1hn0zy"
   /\      /\      /\      /\      /\
  /  \    /  \    /  \    /  \    /  \
  |  |    |  |    |  |    |  |    |  |
  |  |    |  |    |  |    |  |    |  |
========================================
========================================
```

---

# 7. Lựa chọn 3 — Well

Một **giếng nước** là project khó hơn một chút vì kết hợp nhiều dạng hình học.

Có thể tách thành:

```text id="aj17g6"
Well
│
├── Stone Base
├── Circular Wall
├── Wooden Posts
├── Roof
├── Beam
└── Bucket / Rope
```

Các kỹ thuật có thể áp dụng:

```text id="8w5vbv"
Cylinder
Array
Duplicate
Bevel
Subdivision
Extrude
Scale
```

---

# 8. Có thể chọn bất kỳ Object nào

Giảng viên không giới hạn project.

Có thể chọn:

* crate;
* barrel;
* bench;
* mailbox;
* street lamp;
* cart;
* table;
* signpost;
* stone arch;
* wooden bridge;
* flower box;
* garden gate.

Điều kiện quan trọng:

> Object nên đủ đơn giản để hoàn thành bằng những công cụ hiện có.

---

# 9. Chọn Project có độ khó phù hợp

Một cách đánh giá:

| Mức            | Ví dụ                    |
| -------------- | ------------------------ |
| **Dễ**         | Crate, Signpost, Fence   |
| **Trung bình** | Lantern, Bench, Barrel   |
| **Khá**        | Well, Cart, Small Bridge |

Nếu đây là project 3D đầu tiên, không nên chọn:

* xe hơi hoàn chỉnh;
* robot phức tạp;
* nhân vật;
* building có hàng trăm chi tiết.

Mục tiêu của bài là củng cố **fundamentals**, không phải chứng minh có thể tạo asset cực kỳ phức tạp.

---

# 10. Bước 1 — Thu thập Reference

Trước khi model:

```text id="00ve98"
Reference
   ↓
Analyze
   ↓
Model
```

Nên có ít nhất:

* Front View;
* Side View;
* Perspective View.

Không nhất thiết phải dùng blueprint chính xác.

Reference chủ yếu giúp:

* hiểu silhouette;
* hiểu tỷ lệ;
* quan sát construction;
* tránh tự đoán quá nhiều.

---

# 11. Bước 2 — Phân tích Object

Đừng nghĩ object là một khối phức tạp.

Hãy tách nó thành primitive.

Ví dụ Fence:

```text id="5o45tc"
Fence
├── Vertical Board
├── Horizontal Beam
└── Post
```

Ví dụ Well:

```text id="ribwfr"
Well
├── Cylinder
├── Stone Blocks
├── Wooden Posts
└── Roof
```

Ví dụ Lantern:

```text id="zs6fdl"
Lantern
├── Base
├── Frame
├── Glass
├── Top
└── Handle
```

---

# 12. Bước 3 — Blockout

Tạo các khối cơ bản trước.

Ví dụ:

```text id="2bwwpk"
Reference
    ↓
Cube
Cylinder
Plane
    ↓
Blockout
```

Ở giai đoạn này chỉ cần kiểm tra:

* chiều cao;
* chiều rộng;
* độ dày;
* silhouette.

Không cần bevel đẹp ngay.

---

# 13. Bước 4 — Kiểm tra Proportion

Một model có chi tiết đẹp nhưng tỷ lệ sai vẫn trông không đúng.

Ưu tiên:

```text id="lv65i9"
Overall Size
    ↓
Major Proportions
    ↓
Secondary Forms
    ↓
Details
```

Có thể kiểm tra object từ:

```text id="9vm4g2"
Front
Side
Top
Perspective
```

---

# 14. Bước 5 — Bắt đầu Mesh Editing

Sau khi blockout ổn, dùng các công cụ đã học.

Ví dụ:

```text id="3alkni"
G
R
S
E
I
Ctrl + R
Ctrl + B
Shift + D
```

Tùy object mà không nhất thiết phải sử dụng tất cả.

---

# 15. Những công cụ nên vận dụng

| Công cụ         | Shortcut    | Ứng dụng            |
| --------------- | ----------- | ------------------- |
| Move            | `G`         | Điều chỉnh vị trí   |
| Rotate          | `R`         | Xoay bộ phận        |
| Scale           | `S`         | Điều chỉnh tỷ lệ    |
| Extrude         | `E`         | Tạo geometry        |
| Inset           | `I`         | Tạo vùng bên trong  |
| Loop Cut        | `Ctrl + R`  | Thêm topology       |
| Bevel           | `Ctrl + B`  | Bo cạnh trực tiếp   |
| Duplicate       | `Shift + D` | Tạo chi tiết lặp    |
| Separate        | `P`         | Tách geometry       |
| Join            | `Ctrl + J`  | Gộp object          |
| Apply Transform | `Ctrl + A`  | Chuẩn hóa transform |

---

# 16. Bước 6 — Quan sát Topology

Transcript đặc biệt nhấn mạnh:

> **Observe the topology of it.**

Topology là cách các:

* Vertex;
* Edge;
* Face;

được tổ chức.

Ví dụ topology đơn giản:

```text id="6p8xu3"
┌────┬────┬────┐
│    │    │    │
├────┼────┼────┤
│    │    │    │
└────┴────┴────┘
```

Topology hỗn loạn:

```text id="6g2exe"
┌───┬────┐
│ ╲ │ ╱  │
├──╲●────┤
│ ╱│ ╲   │
└──┴───╲─┘
```

Không phải mọi asset đều cần topology hoàn hảo, nhưng mesh phải:

* dễ hiểu;
* dễ chỉnh sửa;
* không có geometry thừa vô ích;
* không gây shading lỗi.

---

# 17. Những câu hỏi về Topology nên tự hỏi

Trong quá trình modeling:

```text id="04zq9d"
Edge này có cần thiết không?

Loop này đang kiểm soát hình dạng nào?

Có quá nhiều polygon không?

Có thể tạo cùng hình dạng bằng ít geometry hơn không?

Subdivision có làm topology này bị méo không?

Có N-gon gây shading artifact không?
```

Đây là cách phát triển tư duy modeling thay vì chỉ ghi nhớ shortcut.

---

# 18. Bước 7 — Quan sát ánh sáng trên bề mặt

Giảng viên yêu cầu:

> **Observe how the light reflects on the surface of our model.**

Điều này cực kỳ quan trọng trong hard surface modeling.

Ánh sáng cho biết:

* cạnh có quá sắc không;
* bevel có đủ không;
* surface có bị méo không;
* normal có vấn đề không;
* shading có artifact không.

---

# 19. Vì sao ánh sáng giúp kiểm tra Geometry?

Ví dụ cạnh hoàn toàn sắc:

```text id="ks0sav"
Light →

────────┐
        │
```

Highlight gần như không có vùng chuyển tiếp.

Sau Bevel:

```text id="g8ozck"
Light →

──────╮
      │
```

cạnh bắt ánh sáng tốt hơn.

Do đó:

```text id="p87prd"
Geometry
   ↓
Surface Normal
   ↓
Light Reflection
   ↓
Bạn nhìn thấy Shape
```

---

# 20. Quan sát Reflection khi xoay Viewport

Trong Solid View, hãy liên tục xoay quanh object.

Không nên chỉ model từ một góc:

```text id="ybbtyz"
Front View
```

rồi cho rằng model đã đúng.

Nên kiểm tra:

```text id="8kqvmy"
Front
↓
Side
↓
Top
↓
3/4
↓
Bottom
↓
Close-up
```

Đặc biệt là **3/4 View**, vì góc này giúp nhìn cả:

* chiều rộng;
* chiều cao;
* chiều sâu.

---

# 21. Bước 8 — Áp dụng Modifiers

Bài trước đã học:

* Bevel;
* Subdivision Surface;
* Displace;
* Array;
* Solidify.

Project này là lúc áp dụng chúng theo nhu cầu thực tế.

Không phải:

```text id="kjy7e4"
"Mình đã học Array
→ phải dùng Array"
```

Mà nên hỏi:

```text id="5xd88n"
"Object có chi tiết lặp lại không?"
        │
       Yes
        ↓
      Array
```

---

# 22. Sơ đồ lựa chọn Modifier

```text id="vyx88c"
Có chi tiết lặp?
      │
      ├── Yes → Array
      │
      └── No
            ↓

Cần bo cạnh?
      │
      ├── Yes → Bevel
      │
      └── No
            ↓

Cần bề mặt mượt hơn?
      │
      ├── Yes → Subdivision Surface
      │
      └── No
            ↓

Surface quá mỏng?
      │
      ├── Yes → Solidify
      │
      └── No
            ↓

Cần biến dạng ngẫu nhiên?
      │
      └── Yes → Displace
```

---

# 23. Modifier không phải mục tiêu

Một project tốt không phải project dùng nhiều Modifier nhất.

Ví dụ:

```text id="pr0jgq"
5 Modifiers
```

không tự động tốt hơn:

```text id="uf2cr7"
2 Modifiers
```

Mục tiêu là:

> Sử dụng đúng công cụ để giải quyết đúng vấn đề.

---

# 24. Non-destructive Workflow

Nên tiếp tục tư duy từ bài 009:

```text id="7oryo7"
Simple Base Mesh
       ↓
Modifiers
       ↓
Complex Result
```

Ví dụ Fence:

```text id="d8spzk"
1 Board
   ↓
Bevel
   ↓
Array
   ↓
Full Fence
```

Nếu thay đổi Board gốc:

```text id="oqbe6l"
Toàn bộ Fence cập nhật
```

Đây là lợi thế của non-destructive modeling.

---

# 25. Không Apply Modifier quá sớm

Trong project:

```text id="4fhqx8"
Add Modifier
→ Test
→ Adjust
→ Compare
→ Continue Modeling
```

Chỉ Apply khi thật sự cần.

Nếu chưa chắc:

```text id="mnqk2z"
Don't Apply Yet
```

---

# 26. Tạo Backup

Trước những thay đổi lớn:

```text id="ebic5a"
Shift + D
```

sau đó đưa bản copy vào Collection:

```text id="h4cgge"
PROJECT_BACKUP
```

và Hide.

Ví dụ:

```text id="hlw46i"
My_Well
│
├── Working
└── Backup
```

Đây là thói quen tốt ngay cả với project nhỏ.

---

# 27. Project Workflow hoàn chỉnh

```text id="n0mwmo"
Choose Object
      ↓
Collect Reference
      ↓
Analyze Shapes
      ↓
Create Blockout
      ↓
Check Proportions
      ↓
Model Primary Forms
      ↓
Add Secondary Forms
      ↓
Check Topology
      ↓
Apply Modifiers
      ↓
Observe Light Reflection
      ↓
Fix Shading / Geometry
      ↓
Add Necessary Details
      ↓
Final Geometry Review
      ↓
Save Project
```

---

# 28. Ví dụ Project — Picket Fence

## Bước 1 — Tạo thanh gỗ

```text id="x93z5q"
Cube
 ↓
Scale Z
 ↓
Scale X
```

Tạo hình:

```text id="8bf6cj"
   /\
  /  \
  |  |
  |  |
  |  |
  |  |
```

---

## Bước 2 — Bevel

```text id="f8qihd"
Bevel Modifier
```

để cạnh không quá sắc.

---

## Bước 3 — Array

```text id="44mz46"
Array
Count = 6–10
```

Kết quả:

```text id="h9p47u"
 /\   /\   /\   /\   /\
|  | |  | |  | |  | |  |
|  | |  | |  | |  | |  |
```

---

## Bước 4 — Thanh ngang

Thêm hai Cube:

```text id="v100r8"
================================
================================
```

---

## Bước 5 — Kiểm tra

Quan sát:

* khoảng cách giữa các thanh;
* bevel;
* reflection;
* topology;
* Array Modifier.

Đây là project rất tốt để củng cố Lesson 009.

---

# 29. Ví dụ Project — Well

## Blockout

```text id="8gneny"
        Roof
      /──────\
     /        \
     │        │
     │        │
   ┌────────────┐
   │ Stone Well │
   │            │
   └────────────┘
```

---

## Phân tách

```text id="zdvlou"
Well
├── Circular Base
├── Stone Wall
├── Post L
├── Post R
├── Roof
├── Beam
└── Optional Bucket
```

---

## Modifier phù hợp

Có thể dùng:

```text id="987r68"
Stone
→ Bevel
→ Displace

Repeating Stones
→ Array

Roof
→ Solidify

Wood
→ Bevel
```

---

# 30. Ví dụ Project — Lantern Variation

Nếu chọn Lantern, không nên chỉ copy 100% bài trước.

Hãy thay đổi:

* chiều cao;
* hình dạng top;
* handle;
* frame;
* base.

Ví dụ:

```text id="eapby8"
Lesson Lantern

     ↓

Your Lantern

Tall body
+
Large handle
+
Rounded top
+
Thicker frame
```

Mục tiêu:

> Chứng minh bạn hiểu construction chứ không chỉ nhớ thao tác.

---

# 31. Primary Forms trước

Dù chọn asset nào:

```text id="xpajij"
PRIMARY
  ↓
SECONDARY
  ↓
DETAIL
```

Ví dụ với Well:

### Primary

```text id="4grz9d"
Cylinder
Posts
Roof
```

### Secondary

```text id="ytzriz"
Stone blocks
Wood support
Beam
```

### Detail

```text id="5vqjjs"
Small bevels
Rope
Metal pieces
```

---

# 32. Checklist Silhouette

Trước khi thêm detail:

* [ ] Nhìn từ xa có nhận ra object không?
* [ ] Chiều cao hợp lý chưa?
* [ ] Chiều rộng hợp lý chưa?
* [ ] Các phần lớn có đúng tỷ lệ không?
* [ ] Object có bị quá dày hoặc quá mỏng không?

Nếu chưa:

> Quay lại blockout.

---

# 33. Checklist Topology

Khi geometry cơ bản hoàn thành:

* [ ] Edge Loop có mục đích rõ ràng.
* [ ] Không có Vertex dư quá nhiều.
* [ ] Không có Face chồng lên nhau.
* [ ] Không có geometry nằm bên trong vô ích.
* [ ] Normal hướng đúng.
* [ ] Subdivision hoạt động hợp lý.
* [ ] Bevel không tạo artifact rõ ràng.

---

# 34. Checklist Modifier

* [ ] Modifier Stack có thứ tự hợp lý.
* [ ] Bevel không quá lớn.
* [ ] Subdivision Level không quá cao.
* [ ] Array không tạo geometry thừa ngoài ý muốn.
* [ ] Displace không phá silhouette.
* [ ] Solidify có thickness phù hợp.
* [ ] Chưa Apply Modifier nếu chưa cần.
* [ ] Có backup trước các bước destructive.

---

# 35. Checklist Surface & Lighting

Quan sát object dưới ánh sáng viewport:

* [ ] Cạnh có bắt highlight không?
* [ ] Có cạnh sắc bất thường không?
* [ ] Có vùng shading bị lõm sai không?
* [ ] Có gradient kỳ lạ trên mặt phẳng không?
* [ ] Bevel có đều không?
* [ ] Shade Smooth có gây artifact không?
* [ ] Silhouette vẫn đúng khi bật Modifier không?

---

# 36. Những lỗi thường gặp

## Lỗi 1 — Chọn Object quá phức tạp

Ví dụ:

```text id="hgo0o7"
Project đầu tiên
→ Model entire castle
```

sẽ khiến người học bị mắc ở chi tiết.

Giải pháp:

```text id="skqrx7"
1 prop đơn giản
```

---

## Lỗi 2 — Không dùng Reference

Tự tưởng tượng tất cả có thể khiến:

* tỷ lệ sai;
* construction phi logic;
* detail không thống nhất.

Reference không phải "copy".

Reference là:

> Công cụ quan sát.

---

## Lỗi 3 — Thêm detail quá sớm

Sai:

```text id="ohpo4i"
Bolt
→ Scratch
→ Decorative trim
→ Overall shape sai
```

Đúng:

```text id="8kgoax"
Blockout
→ Shape
→ Proportion
→ Detail
```

---

## Lỗi 4 — Chỉ nhìn một góc

Model đẹp ở Front nhưng:

```text id="mxbrnd"
Side View
→ quá mỏng
```

hoặc:

```text id="0p2peu"
Top View
→ sai tỷ lệ
```

Nên xoay viewport thường xuyên.

---

## Lỗi 5 — Thêm nhiều Subdivision

Không phải càng mượt càng tốt.

```text id="tcs35b"
Subdivision Level 4
```

có thể không khác nhiều về hình ảnh nhưng nặng hơn rất nhiều.

---

## Lỗi 6 — Apply mọi Modifier

Điều này đi ngược tinh thần bài trước.

Nên giữ Modifier editable càng lâu càng tốt.

---

# 37. Thử thách cơ bản

Tạo một asset sử dụng ít nhất:

* 2 Primitive;
* 1 Bevel;
* 1 Modifier khác;
* 1 thao tác Duplicate hoặc Array.

Ví dụ:

```text id="51wmwb"
Wooden Fence
```

Thời gian có thể tập trung hoàn toàn vào geometry.

---

# 38. Thử thách nâng cao

Tạo một asset gồm ít nhất:

```text id="0mbbgq"
3–5 Objects
```

và sử dụng:

```text id="kpygo8"
Bevel
+
Subdivision hoặc Array
+
Support Loops
```

Ví dụ:

```text id="upp59z"
Well
Bench
Street Lamp
Garden Gate
```

---

# 39. Thử thách Non-destructive

Yêu cầu:

> Khi tắt toàn bộ Modifier, Base Mesh vẫn phải dễ hiểu và chỉnh sửa.

Ví dụ:

```text id="3u88v3"
Modifiers ON

Detailed Asset

        ↓ OFF

Simple Editable Base Mesh
```

Đây là cách kiểm tra bạn có thực sự áp dụng tư duy bài 009 hay không.

---

# 40. Deliverables đề xuất

Sau khi hoàn thành, lưu:

```text id="malz62"
Project_3D_Model.blend
```

và nếu muốn ghi lại tiến độ:

```text id="ekjrhd"
01_Blockout.png
02_Modeling.png
03_Wireframe.png
04_Final_Model.png
```

---

# 41. Wireframe Screenshot

Một screenshot Wireframe rất hữu ích để tự đánh giá.

Ví dụ:

```text id="m09a2r"
Final Model
+
Wireframe Overlay
```

Nó cho thấy:

* topology;
* support loops;
* mật độ mesh;
* những vùng subdivision.

---

# 42. Before / After Modifier

Có thể lưu hai screenshot:

### Base

```text id="uwicp2"
Modifiers OFF
```

### Final

```text id="27k85d"
Modifiers ON
```

Đây là cách rất tốt để thể hiện:

> **Non-destructive workflow.**

---

# 43. Mini Portfolio Artifact

Bài project này có thể được biến thành asset portfolio đầu tiên.

Ví dụ bố cục:

```text id="qk3suo"
┌──────────────┬──────────────┐
│ Final Model  │ Wireframe    │
├──────────────┼──────────────┤
│ Base Mesh    │ Modifier ON  │
└──────────────┴──────────────┘
```

Không cần render chuyên nghiệp ở giai đoạn này.

Mục tiêu là thể hiện:

* construction;
* topology;
* modifier workflow.

---

# 44. Tiêu chí tự đánh giá

Có thể chấm project trên thang 10:

| Tiêu chí           |   Điểm |
| ------------------ | -----: |
| Silhouette         |      2 |
| Proportion         |      2 |
| Topology           |      2 |
| Modifier usage     |      2 |
| Surface / shading  |      1 |
| Hoàn thiện project |      1 |
| **Tổng**           | **10** |

---

# 45. Câu hỏi tự đánh giá

Sau khi hoàn thành, hãy tự trả lời:

1. Object nào được sử dụng làm reference?
2. Tôi đã tách vật thể thành những primitive nào?
3. Phần nào khó model nhất?
4. Tôi đã sử dụng Modifier nào?
5. Modifier nào mang lại thay đổi lớn nhất?
6. Modifier Stack có thứ tự như thế nào?
7. Có vùng nào sử dụng quá nhiều geometry không?
8. Ánh sáng có cho thấy shading artifact không?
9. Tôi có thể giảm polygon mà vẫn giữ silhouette không?
10. Nếu làm lại, tôi sẽ thay đổi workflow nào?

---

# 46. Kiến thức được tổng hợp từ các bài trước

Project này kết hợp kiến thức của toàn Section 02.

```text id="58n4g3"
006
Objects / Vertices / Edges / Faces
         ↓
007
Texture Mapping + Basic Modeling
         ↓
008
Hard Surface Modeling
         ↓
009
Modifiers + Non-destructive Modeling
         ↓
010
YOUR OWN 3D MODEL
```

---

# 47. Các kỹ năng cần sử dụng lại

### Mesh fundamentals

```text id="6ojdcy"
Vertex
Edge
Face
```

### Transform

```text id="mr3hba"
G
R
S
```

### Modeling

```text id="wdeke6"
Extrude
Inset
Loop Cut
Bevel
Duplicate
```

### Topology

```text id="2ctlom"
Quads
Edge Loops
Support Loops
Normals
```

### Modifiers

```text id="cwlk0l"
Bevel
Subdivision Surface
Array
Displace
Solidify
```

---

# 48. Sơ đồ toàn bộ Project

```text id="70i6km"
                    PROJECT: 3D MODEL
                           │
                     Choose Object
                           │
                       Reference
                           │
                  Analyze Construction
                           │
                Break Into Primitives
                           │
                        Blockout
                           │
                  Check Proportions
                           │
                    Primary Forms
                           │
                   Secondary Forms
                           │
                     Mesh Editing
                           │
                    Check Topology
                           │
                      Modifiers
                           │
              ┌────────────┼────────────┐
              │            │            │
            Bevel        Array      Subdivision
              │            │            │
              └────────────┼────────────┘
                           │
                   Observe Surface
                           │
                  Observe Reflection
                           │
                    Fix Geometry
                           │
                      Final Check
                           ↓
                     SAVE PROJECT
```

---

# 49. Checklist thực hành

## Chuẩn bị

* [ ] Đã chọn object muốn model.
* [ ] Có reference phù hợp.
* [ ] Đã phân tích object thành primitive.

## Blockout

* [ ] Đã tạo hình dạng chính.
* [ ] Silhouette hợp lý.
* [ ] Proportion hợp lý.
* [ ] Đã kiểm tra nhiều góc nhìn.

## Modeling

* [ ] Đã sử dụng Edit Mode.
* [ ] Đã chỉnh Vertex / Edge / Face khi cần.
* [ ] Chỉ thêm topology khi cần thiết.
* [ ] Đã kiểm tra Normal.
* [ ] Không có geometry thừa rõ ràng.

## Modifiers

* [ ] Đã thử ít nhất một Modifier.
* [ ] Đã kiểm tra thứ tự Modifier Stack.
* [ ] Chưa Apply quá sớm.
* [ ] Đã tạo backup trước thao tác destructive.

## Surface

* [ ] Đã quan sát ánh sáng phản xạ.
* [ ] Không có cạnh sắc bất hợp lý.
* [ ] Không có shading artifact nghiêm trọng.
* [ ] Bevel phù hợp với kích thước asset.

## Hoàn thành

* [ ] Đã hoàn thành một object 3D riêng.
* [ ] Đã lưu file `.blend`.
* [ ] Đã chụp Wireframe nếu cần.
* [ ] Đã thử bật/tắt Modifier để so sánh.
* [ ] Có thể giải thích workflow của mình mà không cần tutorial.

---

# 50. Mục tiêu quan trọng nhất của Project

Project không yêu cầu object phải hoàn hảo.

Điều giảng viên muốn người học làm là:

```text id="lhru5x"
Quan sát
   ↓
Thử nghiệm
   ↓
Model
   ↓
Nhìn Topology
   ↓
Thử Modifier
   ↓
Quan sát Lighting
   ↓
Điều chỉnh
```

Đây chính là vòng lặp modeling thực tế:

```text id="k9wrqk"
CREATE
  ↓
OBSERVE
  ↓
ADJUST
  ↓
REPEAT
```

---

# 51. Tóm tắt

**Project Lesson: 3D Model** là bài thực hành tự do đầu tiên yêu cầu người học dùng các kiến thức của Section 02 để xây dựng một asset riêng.

Có thể chọn:

```text id="6h8k9z"
Lantern
Fence
Well
hoặc
Any suitable object
```

Nhưng trọng tâm không phải object nào được chọn.

Trọng tâm là quy trình:

```text id="00h2lo"
Reference
   ↓
Blockout
   ↓
Proportion
   ↓
Modeling
   ↓
Topology
   ↓
Modifiers
   ↓
Surface Inspection
   ↓
Final Model
```

Ba điều được giảng viên đặc biệt yêu cầu quan sát:

```text id="94rp1h"
1. Cách ánh sáng phản xạ trên bề mặt

2. Topology của model

3. Cách Modifier thay đổi object
```

Điểm quan trọng nhất:

> **Đừng chỉ cố tạo ra một object đẹp. Hãy quan sát vì sao mesh tạo ra hình dạng đó, vì sao ánh sáng phản xạ như vậy và Modifier đang làm gì với geometry.**

Đây là bước chuyển từ:

```text id="rz7oz8"
"làm theo tutorial"
```

sang:

```text id="6m7hpc"
"tự giải quyết bài toán modeling"
```

và cũng là mục tiêu chính của project này.
