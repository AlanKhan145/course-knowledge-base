# 082 — Building the Armature

## Xây dựng bộ xương Armature

| Thuộc tính       | Nội dung                                  |
| ---------------- | ----------------------------------------- |
| **Module**       | Module 05 — Rigging & Animation           |
| **Bài học**      | Building the Armature                     |
| **Thời lượng**   | 9 phút 44 giây                            |
| **Chủ đề chính** | Tạo bộ xương Armature cơ bản cho nhân vật |

---

## 1. Mục tiêu bài học

Sau bài học này, chúng ta có thể:

* Thêm và đặt Armature vào chính giữa nhân vật.
* Tạo chuỗi bone cho thân, cổ và đầu.
* Tạo bone cho tay và chân.
* Thiết lập quan hệ cha–con giữa các bone.
* Hiểu cơ bản về thuộc tính **Bone Roll**.
* Đặt tên bone theo quy ước trái/phải.
* Sử dụng **Symmetrize** để tạo bộ xương đối xứng.
* Kiểm tra bộ xương trước khi chuyển sang bước rigging tiếp theo.

---

## 2. Cấu trúc bộ xương tổng quát

Armature của nhân vật trong bài được chia thành ba nhóm chính:

```text
                         head
                           │
                         neck
                           │
                        spine_3
                       /       \
            upper_arm.L         upper_arm.R
                 │                   │
            forearm.L           forearm.R
                 │                   │
              hand.L              hand.R
                       \         /
                        spine_2
                           │
                        spine_1
                       /       \
                  thigh.L      thigh.R
                     │            │
                   shin.L       shin.R
                     │            │
                   foot.L       foot.R
```

Quan hệ cha–con quyết định cách chuyển động được truyền từ bone này sang bone khác.

Ví dụ:

```text
upper_arm.L
    └── forearm.L
            └── hand.L
```

Khi xoay `upper_arm.L`, cả `forearm.L` và `hand.L` sẽ chuyển động theo.

---

## 3. Thêm Armature vào nhân vật

### 3.1. Đưa 3D Cursor về tâm thế giới

Trước khi thêm Armature, cần bảo đảm **3D Cursor** nằm tại tâm thế giới:

```text
Shift + S → Cursor to World Origin
```

Sau đó thêm Armature:

```text
Shift + A → Armature
```

Nếu Armature được thêm ở vị trí không chính xác, có thể xóa giá trị dịch chuyển bằng:

```text
Alt + G
```

Lệnh này đưa đối tượng trở lại vị trí gốc theo tọa độ của nó.

---

### 3.2. Đặt bone đầu tiên

Bone đầu tiên nên được đặt ở khu vực trung tâm phần thân dưới của nhân vật, gần vị trí hông.

Có thể di chuyển bone theo trục `Z`, nhưng cần giữ bone nằm chính xác trên trục giữa:

```text
X = 0
```

Điều này rất quan trọng vì:

* Bộ xương cần đối xứng quanh trục `X`.
* Công cụ **Symmetrize** sử dụng tâm của Armature để tạo bone phía đối diện.
* Bone bị lệch khỏi trục giữa có thể khiến hai bên cơ thể không đối xứng.

---

## 4. Hiển thị bone xuyên qua mesh

Khi bone nằm bên trong nhân vật, chúng ta có thể không nhìn thấy nó.

Có hai cách giải quyết.

### Cách 1: Bật X-Ray

Bật chế độ **X-Ray** trong 3D Viewport để nhìn xuyên qua mesh.

### Cách 2: Bật In Front

Chọn Armature, tìm phần:

```text
Viewport Display → In Front
```

Khi bật tùy chọn này, Armature luôn được hiển thị phía trước mesh.

Đây là cách thuận tiện hơn khi rigging vì không cần giữ toàn bộ cảnh ở chế độ X-Ray.

---

## 5. Tạo chuỗi bone trung tâm

Chọn Armature và vào **Edit Mode**:

```text
Tab
```

Bone đầu tiên sẽ được sử dụng làm điểm bắt đầu của phần thân.

### 5.1. Điều chỉnh bone gốc

Chọn đầu bone và di chuyển xuống vị trí nơi hai chân sẽ kết nối:

```text
G → Z
```

Bone này đóng vai trò gần giống bone hông hoặc phần gốc của cột sống.

---

### 5.2. Extrude chuỗi spine

Từ đầu trên của bone, dùng `E` để tạo các bone tiếp theo.

```text
E → Z
```

Tạo lần lượt:

1. Bone phần thân dưới.
2. Bone phần thân giữa.
3. Bone lên tới vai.
4. Bone cổ.
5. Bone đầu.

Cấu trúc cơ bản:

```text
spine_1
   │
spine_2
   │
spine_3
   │
 neck
   │
 head
```

Trong bài học, phần thân có khoảng bốn bone, sau đó là một bone cổ và một bone đầu.

---

### 5.3. Kiểm tra ở góc nhìn bên

Chuyển sang góc nhìn bên để kiểm tra vị trí bone:

```text
Numpad 3
```

Với rig nhân vật cơ bản, bone nên nằm ở giữa thể tích cơ thể thay vì đặt sát về phía lưng như cột sống thật.

```text
Nhìn từ bên:

Mặt trước
    │
    │     ● Bone nằm giữa cơ thể
    │    /|\
    │   / │ \
    │
Mặt sau
```

Đây là phương pháp dễ kiểm soát hơn đối với người mới học rigging.

---

## 6. Tạo chuỗi bone cho tay

### 6.1. Tạo bone vai

Có thể chọn một bone gần vai và nhân bản:

```text
Shift + D
```

Sau khi nhân bản, di chuyển bone tới vị trí vai.

Bone nhân bản có thể vẫn giữ quan hệ cha với bone cũ, được thể hiện bằng một đường chấm giữa hai bone.

---

### 6.2. Xóa và thiết lập lại Parent

Nếu bone đang kết nối sai bone cha, chọn bone đó và sử dụng:

```text
Alt + P → Clear Parent
```

Sau đó:

1. Chọn bone con.
2. Giữ `Shift` và chọn bone cha sau cùng.
3. Nhấn:

```text
Ctrl + P → Keep Offset
```

`Keep Offset` tạo quan hệ cha–con nhưng không nối trực tiếp đầu bone con vào đuôi bone cha.

```text
spine_shoulder
      └···· upper_arm.L
```

Đường chấm biểu thị quan hệ cha–con có khoảng cách.

---

### 6.3. Kiểm tra quan hệ trong Pose Mode

Chuyển sang Pose Mode:

```text
Ctrl + Tab
```

Xoay bone vai hoặc bone thân trên.

Nếu bone tay chuyển động theo, quan hệ cha–con đã được thiết lập đúng.

Sau khi kiểm tra, quay lại Edit Mode để tiếp tục dựng bone.

---

### 6.4. Đặt chuỗi tay vào đúng vị trí

Chuỗi tay gồm ba phần:

```text
upper_arm.L → forearm.L → hand.L
```

Quy trình:

1. Di chuyển đầu bone vai tới khớp vai.
2. Đặt đầu cuối của bone thứ nhất tại khuỷu tay.
3. Extrude bone thứ hai tới cổ tay.
4. Extrude bone thứ ba tới cuối bàn tay.

Sử dụng:

```text
G
E
G → Y
```

Cần kiểm tra ở cả góc nhìn trước và góc nhìn bên để bone thực sự nằm bên trong cánh tay.

```text
Vai ───── Khuỷu tay ───── Cổ tay ─── Bàn tay
     upper_arm       forearm       hand
```

---

## 7. Bone Roll và trục xoay cục bộ

### 7.1. Bone Roll là gì?

Mỗi bone có một hệ trục cục bộ riêng. Thuộc tính **Roll** xác định cách trục cục bộ xoay quanh chiều dài của bone.

Có thể xem giá trị Roll bằng cách:

1. Vào Edit Mode.
2. Chọn bone.
3. Nhấn `N`.
4. Mở mục **Item**.
5. Tìm thuộc tính **Roll**.

```text
N → Item → Roll
```

---

### 7.2. Ảnh hưởng của Bone Roll

Trong Pose Mode, để xoay bone theo trục `X` cục bộ:

```text
R → X → X
```

Nhấn `X` hai lần chuyển từ trục toàn cục sang trục cục bộ của bone.

Nếu Bone Roll của các bone không đồng nhất, mỗi bone có thể xoay theo một hướng khác nhau.

```text
Bone Roll đồng nhất:

[ Bone 1 ]  trục X hướng ra trước
[ Bone 2 ]  trục X hướng ra trước
[ Bone 3 ]  trục X hướng ra trước
```

```text
Bone Roll không đồng nhất:

[ Bone 1 ]  trục X hướng ra trước
[ Bone 2 ]  trục X bị xoay ngang
[ Bone 3 ]  trục X bị lật ngược
```

Điều này có thể gây khó khăn khi tạo animation hoặc constraint.

---

### 7.3. Điều chỉnh Bone Roll

Trong Edit Mode:

1. Chọn từng bone của cánh tay.
2. Điều chỉnh giá trị **Roll**.
3. Làm cho các bone có bề mặt và trục cục bộ hướng tương đối giống nhau.

Giá trị cụ thể có thể khác nhau tùy cách dựng bone. Không bắt buộc phải giống hoàn toàn giá trị trong bài giảng.

Mục tiêu chính là:

* Các bone không bị xoắn bất thường.
* Trục cục bộ của chúng có hướng nhất quán.
* Các bone tay có mặt phẳng tương đối hướng về phía trước.

Để xóa góc xoay đã thử trong Pose Mode:

```text
Alt + R
```

---

## 8. Tạo chuỗi bone cho chân

Có thể chọn toàn bộ chuỗi bone tay vừa tạo và nhân bản:

```text
Shift + D
```

Sau đó:

1. Di chuyển chuỗi bone xuống vị trí chân.
2. Xoay chuỗi bone theo hướng chân.
3. Thu nhỏ nếu cần.
4. Đặt các khớp tại hông, đầu gối, mắt cá và bàn chân.

Chuỗi chân cơ bản:

```text
thigh.L → shin.L → foot.L
```

Cần kiểm tra ở góc nhìn bên để bảo đảm các bone nằm bên trong chân.

```text
Hông
  │
  │ thigh.L
  ▼
Đầu gối
  │
  │ shin.L
  ▼
Mắt cá
  │
  └── foot.L
```

---

### 8.1. Parent chân vào phần thân

Bone chân cần được parent vào bone gốc của phần thân.

Nếu chuỗi chân đang có Parent sai:

```text
Alt + P → Clear Parent
```

Sau đó:

1. Chọn bone đùi.
2. Chọn bone gốc của spine sau cùng.
3. Nhấn:

```text
Ctrl + P → Keep Offset
```

Cấu trúc sau khi parent:

```text
spine_1
 ├···· thigh.L
 │       └── shin.L
 │              └── foot.L
 │
 └···· thigh.R
         └── shin.R
                └── foot.R
```

---

## 9. Đặt tên bone

Để đổi tên nhanh một bone:

```text
F2
```

Ngoài ra, có thể đổi tên trong **Bone Properties**.

### 9.1. Bone trung tâm

Các bone trung tâm có thể được đặt tên:

```text
spine_1
spine_2
spine_3
neck
head
```

Bone trung tâm không cần hậu tố trái hoặc phải.

---

### 9.2. Bone tay và chân

Các bone nằm ở hai bên cần có hậu tố xác định bên trái và bên phải.

Ví dụ phía trái:

```text
upper_arm.L
forearm.L
hand.L

thigh.L
shin.L
foot.L
```

Trong bài giảng, giảng viên sử dụng dạng `_L`, chẳng hạn:

```text
thigh_L
```

Blender hỗ trợ một số kiểu đánh dấu trái/phải như:

```text
.L / .R
_L / _R
-L / -R
```

Trong thực tế, quy ước phổ biến nhất là:

```text
.L
.R
```

> Trái và phải được xác định theo góc nhìn của nhân vật, không phải theo góc nhìn của người đang quan sát.

---

## 10. Tạo bone đối xứng bằng Symmetrize

Sau khi hoàn thành tay trái và chân trái:

1. Vào Edit Mode.
2. Chọn toàn bộ bone tay và chân bên trái.
3. Nhấp chuột phải.
4. Chọn:

```text
Symmetrize
```

Blender sẽ:

* Sao chép bone sang phía đối diện.
* Đối xứng vị trí qua trục `X`.
* Chuyển hậu tố `.L` thành `.R`.
* Giữ lại quan hệ cha–con tương ứng.

Ví dụ:

```text
upper_arm.L  →  upper_arm.R
forearm.L    →  forearm.R
hand.L       →  hand.R

thigh.L      →  thigh.R
shin.L       →  shin.R
foot.L       →  foot.R
```

---

### Điều kiện để Symmetrize hoạt động đúng

#### 1. Armature phải nằm đúng tâm

Object Origin của Armature cần nằm trên trục giữa:

```text
X = 0
```

#### 2. Bone phải có tên hợp lệ

Bone bên trái cần có hậu tố được Blender nhận diện:

```text
.L
```

hoặc một quy ước trái/phải hợp lệ khác.

#### 3. Chỉ chọn bone cần đối xứng

Không nên chọn các bone trung tâm như `spine`, `neck` hoặc `head` nếu không cần tạo bản sao.

---

## 11. Quy trình thực hành hoàn chỉnh

```text
Đưa 3D Cursor về World Origin
                │
                ▼
         Thêm Armature
                │
                ▼
      Bật In Front hoặc X-Ray
                │
                ▼
       Tạo chuỗi spine trung tâm
                │
                ▼
          Tạo neck và head
                │
                ▼
       Tạo tay bên trái (.L)
                │
                ▼
      Điều chỉnh Bone Roll tay
                │
                ▼
       Tạo chân bên trái (.L)
                │
                ▼
   Thiết lập Parent bằng Keep Offset
                │
                ▼
       Đặt tên toàn bộ các bone
                │
                ▼
   Chọn tay và chân trái → Symmetrize
                │
                ▼
 Kiểm tra bone phải đã có hậu tố .R
                │
                ▼
             Lưu file
```

---

## 12. Phím tắt và công cụ quan trọng

| Phím tắt / thao tác      | Chức năng                              |
| ------------------------ | -------------------------------------- |
| `Shift + S`              | Mở menu Snap                           |
| `Shift + A`              | Thêm đối tượng hoặc Armature           |
| `Alt + G`                | Xóa giá trị Location                   |
| `Tab`                    | Chuyển giữa Object Mode và Edit Mode   |
| `Ctrl + Tab`             | Mở menu hoặc chuyển sang Pose Mode     |
| `E`                      | Extrude bone mới                       |
| `Shift + D`              | Nhân bản bone                          |
| `G`                      | Di chuyển                              |
| `G`, `X/Y/Z`             | Di chuyển theo một trục                |
| `R`                      | Xoay bone                              |
| `R`, `X`, `X`            | Xoay theo trục X cục bộ của bone       |
| `Alt + R`                | Xóa rotation trong Pose Mode           |
| `Alt + P`                | Xóa quan hệ Parent                     |
| `Ctrl + P`               | Tạo quan hệ Parent                     |
| `Ctrl + P → Keep Offset` | Parent nhưng không nối trực tiếp bone  |
| `N`                      | Mở Sidebar                             |
| `N → Item → Roll`        | Xem hoặc điều chỉnh Bone Roll          |
| `F2`                     | Đổi tên bone                           |
| **In Front**             | Luôn hiển thị Armature phía trước mesh |
| **Symmetrize**           | Tạo bone đối xứng qua trục X           |

---

## 13. Lỗi thường gặp

### 13.1. Không nhìn thấy Armature

**Nguyên nhân:** Bone nằm bên trong mesh.

**Cách xử lý:**

* Bật X-Ray.
* Hoặc bật `In Front` cho Armature.

---

### 13.2. Bone trung tâm bị lệch

**Nguyên nhân:** Bone spine không nằm tại `X = 0`.

**Hậu quả:**

* Symmetrize tạo bone không cân đối.
* Hai bên tay hoặc chân có khoảng cách khác nhau.

**Cách xử lý:** Kiểm tra tọa độ `X` của các điểm Head và Tail trong Sidebar.

---

### 13.3. Tay không chuyển động theo thân

**Nguyên nhân:** Bone tay chưa được parent vào bone vai hoặc spine phù hợp.

**Cách xử lý:**

```text
Alt + P → Clear Parent
Ctrl + P → Keep Offset
```

---

### 13.4. Bone bị xoắn khi xoay theo trục cục bộ

**Nguyên nhân:** Bone Roll giữa các bone không đồng nhất.

**Cách xử lý:** Điều chỉnh Roll trong Edit Mode để các trục cục bộ có hướng tương đối giống nhau.

---

### 13.5. Symmetrize không đổi `.L` thành `.R`

**Nguyên nhân có thể gồm:**

* Tên bone không có hậu tố trái hợp lệ.
* Hậu tố được đặt sai vị trí.
* Bone đang nằm sai phía của trục `X`.
* Object Origin của Armature không nằm giữa nhân vật.

Ví dụ tên đúng:

```text
upper_arm.L
```

Ví dụ tên không phù hợp:

```text
left_upper_arm_bone
upper_arm_leftside
```

Các tên trên vẫn có thể dùng để quản lý, nhưng Blender không tự động nhận diện chúng tốt bằng quy ước `.L/.R`.

---

### 13.6. Nhầm bên trái và bên phải

Bên trái được tính theo phía của nhân vật.

```text
Góc nhìn trực diện:

Phía bên phải màn hình  = bên trái nhân vật  = .L
Phía bên trái màn hình  = bên phải nhân vật = .R
```

---

## 14. Checklist thực hành

### Vị trí Armature

* [ ] 3D Cursor đã được đưa về World Origin.
* [ ] Armature nằm trên trục giữa của nhân vật.
* [ ] Các bone trung tâm có tọa độ `X = 0`.
* [ ] Đã bật `In Front` hoặc X-Ray.

### Chuỗi bone trung tâm

* [ ] Đã tạo các bone spine.
* [ ] Đã tạo bone cổ.
* [ ] Đã tạo bone đầu.
* [ ] Bone nằm giữa thể tích cơ thể khi nhìn từ bên.

### Tay và chân

* [ ] Đã tạo chuỗi tay bên trái.
* [ ] Đã tạo chuỗi chân bên trái.
* [ ] Các khớp bone khớp với vai, khuỷu tay, cổ tay, đầu gối và mắt cá.
* [ ] Tay được parent vào phần thân trên.
* [ ] Chân được parent vào bone gốc của spine.

### Bone Roll

* [ ] Đã kiểm tra Bone Roll của chuỗi tay.
* [ ] Các bone không bị xoắn 90° bất thường.
* [ ] Trục cục bộ giữa các bone tương đối đồng nhất.

### Đặt tên và đối xứng

* [ ] Bone trung tâm đã được đặt tên rõ ràng.
* [ ] Bone tay và chân trái có hậu tố `.L`.
* [ ] Đã dùng Symmetrize để tạo phía phải.
* [ ] Bone mới có hậu tố `.R`.
* [ ] Đã kiểm tra lại vị trí toàn bộ bộ xương.

### Hoàn tất

* [ ] Đã kiểm tra quan hệ cha–con trong Pose Mode.
* [ ] Xoay bone cha làm các bone con chuyển động theo.
* [ ] Đã lưu file trước khi sang bài tiếp theo.

---

## 15. Tóm tắt bài học

Trong bài học này, chúng ta đã xây dựng bộ xương Armature cơ bản cho nhân vật, bao gồm:

* Chuỗi bone trung tâm cho thân, cổ và đầu.
* Chuỗi bone tay và chân ở một bên cơ thể.
* Quan hệ cha–con giữa các bone.
* Điều chỉnh Bone Roll để trục xoay cục bộ nhất quán.
* Đặt tên bone theo quy ước trái/phải.
* Sử dụng Symmetrize để tạo nửa bộ xương còn lại.

Các yếu tố quan trọng nhất cần ghi nhớ là:

```text
Bone nằm đúng giữa mesh
        +
Hierarchy cha–con hợp lý
        +
Bone Roll tương đối đồng nhất
        +
Tên bone đúng quy ước .L/.R
        =
Armature sẵn sàng cho rigging
```

Armature này sẽ là nền tảng cho các bước tiếp theo như parenting mesh, automatic weights, weight painting và tạo hoạt ảnh đi bộ.

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
