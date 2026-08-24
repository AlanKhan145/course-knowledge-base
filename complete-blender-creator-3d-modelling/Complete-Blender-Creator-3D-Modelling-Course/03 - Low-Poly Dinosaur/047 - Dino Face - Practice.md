# 047 — Dino Face

| Thuộc tính            | Nội dung                                                         |
| --------------------- | ---------------------------------------------------------------- |
| **Module**            | Module 03 — Low-Poly Dinosaur                                    |
| **Bài học**           | Dino Face                                                        |
| **Thời lượng**        | 10:39                                                            |
| **Chủ đề chính**      | Dựng cánh tay, hốc mắt, khoang miệng và lưỡi                     |
| **Phong cách**        | Low-poly                                                         |
| **Công cụ trọng tâm** | Extrude, Inset, Edge Slide, Scale Along Normals, Mirror Clipping |

---

## 1. Mục tiêu bài học

Sau bài này, bạn có thể:

* Extrude cánh tay từ thân khủng long.
* Điều chỉnh topology vùng cổ và đầu.
* Tạo hốc mắt bằng công cụ **Inset Faces**.
* Điều chỉnh hình mắt để tạo biểu cảm dữ tợn.
* Tạo phần lõm bên trong miệng.
* Hiểu cách sử dụng **Inset Boundary** khi làm việc với Mirror Modifier.
* Sử dụng **Alt + S** để di chuyển các mặt theo hướng normal.
* Tạo chiếc lưỡi dài từ một mặt bên trong miệng.
* Hoàn thiện hình khối cơ bản của toàn bộ con khủng long.

---

# 2. Tạo cánh tay khủng long

## 2.1. Chọn vị trí extrude phù hợp

Bật lại ảnh tham chiếu, sau đó chuyển mô hình sang **Edit Mode** và **Face Select Mode**.

Không nên chọn một mặt đang nằm sát đường đối xứng hoặc có liên kết không phù hợp với phía bên kia của mô hình. Nếu extrude từ một mặt như vậy, cánh tay có thể:

* Dính vào phần mesh phía đối diện.
* Bị biến dạng ở đường giữa.
* Tạo topology khó kiểm soát.
* Trông không tự nhiên.

Nên chọn một mặt nằm ở vùng vai hoặc ngực, có khoảng trống và hướng mặt phù hợp với hướng mọc của cánh tay.

> Đảm bảo tùy chọn **Clipping** của Mirror Modifier đang được bật để các đỉnh ở đường giữa tiếp tục dính với nhau.

---

## 2.2. Điều chỉnh vùng bắt đầu của cánh tay

Chuyển sang:

* **Side View** để kiểm tra chiều dài và hướng tay.
* **X-Ray Mode** để nhìn xuyên qua mô hình.
* **Vertex Select Mode** để điều chỉnh các đỉnh quanh vùng vai.

Di chuyển các vertex sao cho mặt được chọn nằm gần vị trí bắt đầu cánh tay trong ảnh tham chiếu.

---

## 2.3. Extrude cánh tay

Chọn mặt ở vùng vai và thực hiện nhiều lần:

```text
E → Extrude
S → Thu nhỏ
G → Điều chỉnh vị trí
```

Quy trình hình khối:

```text
Vai
 │
 ├── Extrude một đoạn ngắn
 │
 ├── Thu nhỏ tiết diện
 │
 ├── Extrude tiếp
 │
 ├── Di chuyển xuống hoặc ra trước
 │
 └── Thu nhỏ phần cuối tay
```

Cánh tay của khủng long trong bài được giữ khá đơn giản:

* Ngắn.
* Mảnh hơn chân sau.
* Có tiết diện nhỏ dần.
* Không cần quá nhiều loop cut.

---

## 2.4. Làm phần vai bớt vuông

Sau khi extrude, phần trên của cánh tay có thể trông quá vuông.

Chuyển sang **Edge Select Mode**, chọn cạnh phù hợp rồi sử dụng:

```text
G, G
```

Đây là thao tác **Edge Slide**, cho phép trượt cạnh dọc theo topology hiện có.

Trượt cạnh về vị trí hợp lý để phần vai chuyển tiếp mềm hơn từ thân sang tay.

Không nhất thiết phải thêm một loop cut chạy quanh toàn bộ cánh tay. Với phong cách low-poly, hình dáng hơi góc cạnh vẫn phù hợp.

---

## 2.5. Kiểm tra cánh tay

Quan sát cánh tay ở các góc:

* Front View.
* Side View.
* Perspective View.

Cần đảm bảo:

* Tay không quá dài.
* Tay không quá dày.
* Phần vai không bị gãy khúc.
* Tay đi vào thân một cách tự nhiên.
* Hai bên đối xứng đúng nhờ Mirror Modifier.

---

# 3. Điều chỉnh cổ và topology vùng đầu

## 3.1. Phân bố lại các edge loop

Trước khi tạo khuôn mặt, phân bố lại các edge loop quanh cổ và đầu bằng **Edge Slide**.

Thao tác:

```text
Alt + Left Click → Chọn edge loop
G, G → Edge Slide
```

Mục đích:

* Làm khoảng cách giữa các loop đều hơn.
* Tạo topology dễ chỉnh sửa.
* Chuẩn bị đủ không gian cho vùng mắt và miệng.

---

## 3.2. Làm cổ nhỏ hơn

Phần cổ ban đầu có thể quá dày so với ảnh tham chiếu.

Chuyển sang **Face Select Mode**, chọn vòng mặt quanh cổ rồi thu nhỏ vùng này.

Do mô hình đang sử dụng Mirror Modifier, việc scale toàn bộ vùng cổ đôi khi không cho kết quả như mong muốn vì Blender sử dụng median point của các mặt được chọn.

Thay vào đó, có thể sử dụng:

```text
G, X
```

Di chuyển các mặt vào trong theo trục X.

Khi **Clipping** đang bật, các vertex ở đường giữa vẫn giữ kết nối, tạo cảm giác tương tự như thu nhỏ phần cổ.

---

# 4. Tạo hốc mắt

## 4.1. Tạo thêm topology bằng Inset

Để tạo mắt, thay vì sử dụng Knife Tool, chọn bốn mặt bao quanh vị trí mắt rồi nhấn:

```text
I
```

Thao tác **Inset Faces** tạo một vùng mặt nhỏ hơn bên trong vùng được chọn, đồng thời bổ sung nhiều vertex mới để chỉnh hình hốc mắt.

### Lưu ý về Individual Faces

Nếu mỗi mặt được inset riêng biệt, nhấn lại:

```text
I
```

để chuyển chế độ inset và bảo đảm các mặt được inset như một vùng liên tục.

Kết quả mong muốn:

```text
┌───────────────┐
│   ┌───────┐   │
│   │  Mắt  │   │
│   └───────┘   │
└───────────────┘
```

Không nên tạo bốn inset riêng lẻ nếu mục tiêu là một hốc mắt liền mạch.

---

## 4.2. Điều chỉnh hình dạng mắt

Chuyển sang **Vertex Select Mode** và di chuyển các vertex mới tạo quanh hốc mắt.

Tập trung điều chỉnh:

* Mép trên của mắt.
* Mép dưới của mắt.
* Góc trước của mắt.
* Góc sau của mắt.
* Độ rộng của hốc mắt.
* Độ lõm vào bên trong đầu.

Sử dụng:

```text
G, X
G, Y
G, Z
```

để di chuyển vertex theo từng trục.

---

## 4.3. Tạo biểu cảm dữ tợn

Một mắt nằm ngang hoặc mở rộng thường làm nhân vật trông ngạc nhiên.

Để tạo vẻ dữ tợn:

* Hạ thấp góc trước của mắt.
* Làm khe mắt hẹp hơn.
* Nghiêng đường mí trên xuống phía mõm.
* Giữ phần sau mắt cao hơn một chút.
* Đẩy vùng mắt lõm nhẹ vào đầu.

Sơ đồ đơn giản:

```text
Mắt trung tính:   ───────

Mắt dữ tợn:      \______
                  ↑
             Góc trước thấp hơn
```

Không cần quá nhiều chi tiết. Với phong cách low-poly, mục tiêu chỉ là tạo đủ hình khối để người xem nhận ra:

* Hốc mắt.
* Hướng nhìn.
* Biểu cảm của nhân vật.

---

# 5. Điều chỉnh hình dáng đầu và hàm

Trước khi dựng phần bên trong miệng, nên kiểm tra lại toàn bộ hình đầu.

Có thể điều chỉnh:

* Độ lớn của hộp sọ.
* Chiều dài mõm.
* Độ hẹp ở đầu mõm.
* Độ dày hàm dưới.
* Độ cong giữa đầu và cổ.
* Hình dáng vùng má.

Trong bài, hàm dưới được làm mỏng hơn bằng cách:

* Di chuyển vertex.
* Trượt cạnh bằng **Edge Slide**.
* Thu hẹp phần trước của đầu.

T-Rex thường có phần mõm trước tương đối hẹp khi quan sát từ chính diện, vì vậy cần kiểm tra cả:

* Side View.
* Front View.
* Perspective View.

> Nên hoàn thiện hình đầu trước khi tạo chi tiết bên trong miệng. Khi topology miệng đã phức tạp hơn, việc thay đổi hình dáng tổng thể sẽ khó khăn hơn.

---

# 6. Tạo khoang miệng

## 6.1. Chọn các mặt bên trong miệng

Chuyển sang **Face Select Mode**, sau đó chọn các mặt nằm trong vùng miệng.

Kiểm tra kỹ để không chọn nhầm:

* Mặt ở phía sau đầu.
* Mặt ngoài má.
* Mặt không thuộc khoang miệng.

Nếu có mặt bị chọn nhầm, bỏ chọn trước khi tiếp tục.

---

## 6.2. Inset vùng miệng

Nhấn:

```text
I
```

để inset các mặt đã chọn.

Tuy nhiên, khi dùng Mirror Modifier, thao tác inset thông thường có thể tạo thêm mặt dọc theo đường giữa của mô hình.

Để tránh điều đó, trong lúc inset nhấn:

```text
B
```

để bật hoặc tắt tùy chọn **Boundary**.

Với Boundary được thiết lập phù hợp, đường giữa của Mirror Modifier sẽ không bị inset thành một dải mặt không mong muốn.

Sơ đồ:

```text
Không loại trừ boundary:

[ Miệng trái ][ Mặt giữa ][ Miệng phải ]


Loại trừ boundary:

[        Vùng miệng liền qua đường giữa        ]
```

---

## 6.3. Extrude trước khi dùng Alt + S

Mục tiêu tiếp theo là đẩy vùng inset vào trong để tạo khoang miệng.

Phím:

```text
Alt + S
```

thực hiện **Shrink/Fatten**, tức di chuyển các vertex hoặc mặt dọc theo hướng normal.

Tuy nhiên, cần extrude trước:

```text
E
Left Click hoặc Enter
Alt + S
```

Việc extrude tạo một lớp geometry mới. Sau đó Alt + S mới có thể đẩy lớp mặt này vào trong miệng mà vẫn giữ lại viền ngoài.

---

## 6.4. Tắt Auto Merge Vertices

Nếu **Auto Merge Vertices** đang bật, thao tác:

```text
E → Left Click
```

có thể tạo một extrusion nhưng các vertex mới lập tức bị nhập lại với vertex cũ vì chúng đang chồng lên cùng vị trí.

Khi đó, Alt + S sẽ không tạo được chiều sâu như mong muốn.

Cách xử lý:

1. Hoàn tác thao tác.
2. Tắt **Auto Merge Vertices**.
3. Nhấn `E` để extrude.
4. Xác nhận extrusion tại chỗ.
5. Nhấn `Alt + S` để đẩy các mặt vào trong.

---

## 6.5. Điều chỉnh độ sâu khoang miệng

Sau khi extrude:

```text
Alt + S
```

để đẩy vùng mặt vào bên trong.

Có thể kết hợp:

```text
G, X
Alt + S
```

để:

* Di chuyển khoang miệng sâu hơn vào đầu.
* Tạo thêm khoảng trống.
* Tránh mặt trong xuyên qua mặt ngoài.
* Tránh hai phía của mesh chồng lên nhau.

Không nên đẩy quá sâu vì có thể gây:

* Geometry giao nhau.
* Face chồng chéo.
* Lỗi shading.
* Mesh bên trong lộ ra ngoài đầu.

---

# 7. Phần da nối hai hàm — kỹ thuật nâng cao

Video có minh họa một cách tạo phần da mỏng nối hàm trên và hàm dưới, nhưng đây không phải bước bắt buộc cho người mới.

Quy trình minh họa gồm:

1. Xóa một số mặt ở khóe miệng.
2. Chọn các cạnh thích hợp.
3. Nhấn `F` để tạo lại mặt.
4. Extrude phần da vào đường giữa.
5. Dùng `F` để nối các khoảng trống.
6. Inset nhóm mặt vừa tạo.
7. Extrude chúng về phía sau.
8. Điều chỉnh edge loop để làm phần da cong vào trong.

Tuy nhiên, chi tiết này:

* Khá khó kiểm soát.
* Tăng độ phức tạp topology.
* Cần dọn mesh thủ công.
* Không đóng góp nhiều cho hình dáng tổng thể.

Vì vậy, phần này được hoàn tác trong bài và không được giữ lại trong mô hình cuối cùng.

---

# 8. Tạo lưỡi khủng long

## 8.1. Inset mặt bắt đầu

Chọn một mặt bên trong khoang miệng, ở vị trí phù hợp để tạo lưỡi.

Nhấn:

```text
I
```

để inset mặt này.

Kiểm tra tùy chọn **Boundary**. Trong trường hợp này, cần giữ phần inset tiếp xúc đúng với đường giữa để lưỡi có thể đối xứng qua Mirror Modifier.

---

## 8.2. Extrude lưỡi ra ngoài

Sau khi inset:

```text
E → Extrude
G → Di chuyển
S → Thu nhỏ
R → Xoay
```

Điều chỉnh phần đầu lưỡi:

* Kéo ra ngoài miệng.
* Xoay nhẹ theo hướng mong muốn.
* Làm lưỡi mỏng.
* Thu nhỏ dần về phía đầu.
* Điều chỉnh độ cong bằng cách thay đổi vị trí từng đoạn extrude.

Quy trình:

```text
Mặt trong miệng
      │
      ├── Inset
      │
      ├── Extrude ra trước
      │
      ├── Thu nhỏ và xoay
      │
      └── Extrude tiếp để tạo đầu lưỡi
```

---

## 8.3. Tránh lưỡi bị dính ở đường giữa

Khi extrude gần mặt phẳng Mirror, các vertex có thể dính vào nhau do **Clipping**.

Nếu lưỡi dính sai cách, việc tách các vertex sau đó sẽ khá bất tiện.

Cách xử lý tốt nhất:

1. Hoàn tác extrusion bị lỗi.
2. Làm phẳng vùng gốc lưỡi:

```text
S, Y, 0
```

3. Điều chỉnh chiều rộng:

```text
G, X
```

4. Extrude lại.
5. Thu nhỏ chiều cao của đoạn cuối:

```text
S, Z
```

Làm phẳng theo một trục trước khi extrude giúp topology ổn định hơn và giảm nguy cơ vertex dính sai vào đường giữa.

---

# 9. Sơ đồ tổng quát quy trình dựng khuôn mặt

```text
Hoàn thiện cánh tay
        │
        ▼
Điều chỉnh edge loop vùng cổ
        │
        ▼
Làm cổ nhỏ và cân đối hơn
        │
        ▼
Chọn bốn mặt quanh mắt
        │
        ▼
Inset Faces
        │
        ▼
Di chuyển vertex tạo hốc mắt
        │
        ▼
Nghiêng mắt tạo vẻ dữ tợn
        │
        ▼
Tinh chỉnh mõm và hàm dưới
        │
        ▼
Chọn mặt trong miệng
        │
        ▼
Inset + Boundary
        │
        ▼
Tắt Auto Merge
        │
        ▼
Extrude tại chỗ
        │
        ▼
Alt + S tạo khoang miệng
        │
        ▼
Inset một mặt để tạo lưỡi
        │
        ▼
Extrude, Scale và Rotate lưỡi
        │
        ▼
Kiểm tra toàn bộ silhouette
```

---

# 10. Phím tắt và công cụ quan trọng

| Phím tắt            | Chức năng                                  |
| ------------------- | ------------------------------------------ |
| `Tab`               | Chuyển Object Mode và Edit Mode            |
| `1`                 | Vertex Select Mode khi đang ở Edit Mode    |
| `2`                 | Edge Select Mode                           |
| `3`                 | Face Select Mode                           |
| `Numpad 1`          | Front View                                 |
| `Numpad 3`          | Side View                                  |
| `Alt + Z`           | Bật hoặc tắt X-Ray                         |
| `E`                 | Extrude                                    |
| `G`                 | Di chuyển                                  |
| `S`                 | Scale                                      |
| `R`                 | Rotate                                     |
| `G, G`              | Edge Slide                                 |
| `I`                 | Inset Faces                                |
| `I` lần nữa         | Chuyển tùy chọn Individual Faces khi inset |
| `B` trong khi Inset | Bật hoặc tắt Boundary                      |
| `Alt + S`           | Shrink/Fatten, di chuyển theo normal       |
| `Alt + Left Click`  | Chọn edge loop                             |
| `S, Y, 0`           | Làm phẳng vertex theo trục Y               |
| `S, Z`              | Scale theo trục Z                          |
| `G, X`              | Di chuyển theo trục X                      |
| `F`                 | Tạo mặt từ các vertex hoặc cạnh được chọn  |
| `Ctrl + Z`          | Hoàn tác                                   |

> Các phím `1`, `2`, `3` phía trên hàng chữ dùng để đổi chế độ chọn trong Edit Mode. Các phím Numpad dùng để đổi góc nhìn.

---

# 11. Khái niệm quan trọng

## 11.1. Face Normals

Normal là hướng mà một mặt đang quay ra.

Khi sử dụng:

```text
Alt + S
```

Blender di chuyển mỗi mặt hoặc vertex theo hướng normal tương ứng, thay vì theo một trục toàn cục như X, Y hoặc Z.

Điều này đặc biệt hữu ích để:

* Làm mặt phồng ra.
* Đẩy một vùng lõm vào.
* Tạo độ dày.
* Tạo khoang miệng.
* Điều chỉnh bề mặt cong từ nhiều hướng.

---

## 11.2. Mirror Clipping

Khi **Clipping** được bật:

* Vertex không thể đi xuyên qua mặt phẳng đối xứng.
* Vertex gần đường giữa sẽ dính vào đường giữa.
* Hai nửa mô hình giữ kết nối liên tục.

Clipping rất hữu ích cho thân và đầu, nhưng có thể gây khó khăn khi extrude các chi tiết nằm sát đường giữa như lưỡi.

---

## 11.3. Auto Merge Vertices

Auto Merge tự động nhập các vertex nằm đủ gần nhau.

Tính năng này hữu ích khi:

* Nối các phần mesh.
* Dọn vertex trùng.
* Hàn các cạnh thủ công.

Tuy nhiên, nó gây vấn đề khi extrude tại chỗ vì vertex mới có thể lập tức bị nhập lại vào vertex cũ.

---

# 12. Lỗi thường gặp

## 12.1. Extrude tay từ mặt không phù hợp

**Biểu hiện:**

* Tay dính vào phía bên kia.
* Vai bị kéo lệch.
* Mesh trông kỳ lạ.

**Cách khắc phục:**

* Hoàn tác.
* Chọn một mặt xa đường giữa hơn.
* Kiểm tra hướng mặt trước khi extrude.

---

## 12.2. Cánh tay quá vuông

**Nguyên nhân:**

Các cạnh vùng vai chưa được điều chỉnh.

**Cách khắc phục:**

* Chọn cạnh trên vai.
* Dùng `G, G` để Edge Slide.
* Thu nhỏ nhẹ phần đầu cánh tay.

---

## 12.3. Cổ quá dày

**Cách khắc phục:**

* Chọn vòng mặt quanh cổ.
* Dùng `G, X` để đẩy hai bên vào trong.
* Bật Clipping để đường giữa vẫn được nối.

---

## 12.4. Mỗi mặt quanh mắt inset riêng

**Nguyên nhân:**

Tùy chọn **Individual Faces** đang bật.

**Cách khắc phục:**

Nhấn `I` lần nữa trong lúc thực hiện inset để chuyển chế độ.

---

## 12.5. Mắt trông ngạc nhiên

**Nguyên nhân:**

* Mắt quá tròn.
* Khe mắt quá rộng.
* Mép trên gần như nằm ngang.

**Cách khắc phục:**

* Hạ góc trước của mắt.
* Thu hẹp khe mắt.
* Nghiêng mí mắt về phía mõm.
* Đẩy hốc mắt vào trong một chút.

---

## 12.6. Inset miệng tạo mặt ở đường giữa

**Nguyên nhân:**

Tùy chọn Boundary chưa phù hợp khi làm việc với Mirror Modifier.

**Cách khắc phục:**

Nhấn `B` trong lúc inset để loại đường biên Mirror khỏi phép inset.

---

## 12.7. Extrude miệng nhưng Alt + S không hoạt động

**Nguyên nhân:**

Auto Merge Vertices đã nhập các vertex mới trở lại vertex cũ.

**Cách khắc phục:**

* Hoàn tác.
* Tắt Auto Merge.
* Extrude lại tại chỗ.
* Sau đó mới dùng `Alt + S`.

---

## 12.8. Khoang miệng xuyên qua đầu

**Nguyên nhân:**

Alt + S hoặc G được sử dụng với khoảng cách quá lớn.

**Cách khắc phục:**

* Giảm độ sâu extrusion.
* Kiểm tra mô hình ở góc Perspective.
* Quan sát cả bên trong và bên ngoài miệng.
* Di chuyển các mặt từng bước nhỏ.

---

## 12.9. Lưỡi bị dính vào đường giữa

**Nguyên nhân:**

Vertex đi quá gần mặt phẳng Mirror khi Clipping đang bật.

**Cách khắc phục:**

* Hoàn tác ngay khi phát hiện.
* Làm phẳng gốc lưỡi bằng `S, Y, 0`.
* Điều chỉnh chiều rộng trước khi extrude lại.

---

# 13. Quy trình kiểm tra mô hình

Sau khi hoàn thành khuôn mặt, kiểm tra theo từng góc nhìn.

## Side View

* Mõm có đúng chiều dài không?
* Hàm dưới có quá dày không?
* Lưỡi có đi đúng hướng không?
* Cánh tay có đúng vị trí không?

## Front View

* Đầu có quá rộng không?
* Mõm trước có đủ hẹp không?
* Cổ có cân đối với thân không?
* Hốc mắt có nằm đúng vị trí không?

## Perspective View

* Biểu cảm có đủ dữ tợn không?
* Chuyển tiếp giữa cổ và đầu có tự nhiên không?
* Khoang miệng có bị xuyên mặt không?
* Tay có trông quá vuông hoặc quá lớn không?
* Lưỡi có độ dày hợp lý không?

---

# 14. Thử thách thực hành

## Thử thách 1 — Tạo cánh tay

* Chọn mặt phù hợp ở vùng vai.
* Extrude nhiều đoạn.
* Thu nhỏ dần về phía bàn tay.
* Dùng Edge Slide để làm vai bớt vuông.

## Thử thách 2 — Điều chỉnh cổ

* Phân bố lại các edge loop.
* Làm cổ nhỏ hơn.
* Giữ các vertex ở đường giữa kết nối bằng Clipping.

## Thử thách 3 — Tạo hốc mắt

* Chọn bốn mặt quanh mắt.
* Inset thành một vùng liên tục.
* Điều chỉnh vertex tạo hốc mắt.
* Làm mắt hẹp và nghiêng để tạo biểu cảm dữ tợn.

## Thử thách 4 — Tạo khoang miệng

* Chọn các mặt bên trong miệng.
* Inset với Boundary phù hợp.
* Tắt Auto Merge.
* Extrude tại chỗ.
* Dùng Alt + S để đẩy mặt vào trong.

## Thử thách 5 — Tạo lưỡi

* Inset một mặt trong miệng.
* Extrude lưỡi ra ngoài.
* Xoay và thu nhỏ từng đoạn.
* Tránh để vertex dính sai vào mặt phẳng Mirror.

---

# 15. Checklist hoàn thành

## Cánh tay

* [ ] Cánh tay được extrude từ đúng vị trí.
* [ ] Tay ngắn và nhỏ hơn chân sau.
* [ ] Phần vai không quá vuông.
* [ ] Hai bên đối xứng đúng.

## Cổ và đầu

* [ ] Edge loop quanh cổ được phân bố hợp lý.
* [ ] Cổ không quá dày.
* [ ] Mõm có hình dáng hẹp phù hợp.
* [ ] Hàm dưới không quá lớn.

## Mắt

* [ ] Hốc mắt được tạo bằng Inset Faces.
* [ ] Các mặt được inset thành một vùng liên tục.
* [ ] Mắt có độ lõm nhẹ.
* [ ] Góc mắt tạo được biểu cảm dữ tợn.

## Miệng

* [ ] Vùng miệng không xuất hiện mặt thừa ở đường giữa.
* [ ] Auto Merge đã được tắt khi extrude tại chỗ.
* [ ] Khoang miệng có đủ chiều sâu.
* [ ] Geometry bên trong không xuyên qua đầu.

## Lưỡi

* [ ] Lưỡi được extrude từ bên trong miệng.
* [ ] Lưỡi có chiều dài và độ dày phù hợp.
* [ ] Phần đầu lưỡi nhỏ dần.
* [ ] Lưỡi không bị dính sai tại đường giữa.

## Hoàn thiện

* [ ] Mô hình được kiểm tra ở Front View.
* [ ] Mô hình được kiểm tra ở Side View.
* [ ] Mô hình được kiểm tra ở Perspective View.
* [ ] Tỉ lệ đầu, chân, tay và đuôi đã được điều chỉnh theo ý muốn.
* [ ] File Blender đã được lưu.

---

# 16. Tóm tắt bài học

Trong bài **Dino Face**, mô hình khủng long được hoàn thiện bằng việc tạo cánh tay, điều chỉnh cổ, dựng hốc mắt, khoang miệng và chiếc lưỡi.

Các kỹ thuật quan trọng nhất gồm:

* Extrude và Scale để tạo cánh tay.
* Edge Slide để điều chỉnh topology mà không cần thêm quá nhiều polygon.
* Inset Faces để bổ sung topology quanh mắt và miệng.
* Điều chỉnh vertex để tạo biểu cảm dữ tợn.
* Sử dụng Inset Boundary khi làm việc tại đường giữa của Mirror Modifier.
* Tắt Auto Merge trước khi extrude tại chỗ.
* Sử dụng Alt + S để tạo độ sâu theo hướng normal.
* Làm phẳng vertex theo một trục để kiểm soát lưỡi gần mặt phẳng đối xứng.

Sau bài này, toàn bộ hình khối cơ bản của khủng long low-poly đã hoàn thành. Người học có thể tiếp tục tinh chỉnh tỉ lệ đầu, chân, đuôi hoặc các chi tiết khác trước khi chuyển sang phần dựng môi trường và cảnh quan.

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
