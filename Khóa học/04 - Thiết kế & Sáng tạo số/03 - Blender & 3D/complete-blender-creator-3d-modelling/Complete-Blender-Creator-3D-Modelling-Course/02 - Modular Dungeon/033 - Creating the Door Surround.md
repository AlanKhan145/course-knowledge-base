# 033 — Creating the Door Surround

| Thuộc tính         | Nội dung                                                          |
| ------------------ | ----------------------------------------------------------------- |
| **Module**         | Module 02 — Modular Dungeon                                       |
| **Bài học**        | Creating the Door Surround                                        |
| **Thời lượng**     | 11:48                                                             |
| **Chủ đề chính**   | Tạo khung đá bao quanh cửa                                        |
| **Kỹ thuật chính** | Plane modelling, Mirror, Extrude, Bevel, Knife, Bisect, Randomize |

---

## 1. Mục tiêu bài học

Sau bài học này, người học sẽ:

* Tạo khung đá bao quanh lối cửa của module hầm ngục.
* Tái sử dụng module tường và cột đã tạo ở các bài trước.
* Dựng hình khung cửa từ một `Plane` thay vì bắt đầu bằng `Cube`.
* Sử dụng `Mirror Modifier` theo cả trục `X` và `Y`.
* Di chuyển Object Origin để kiểm soát vị trí đối xứng.
* Dùng `Extrude` để vẽ đường bao và tạo chiều sâu cho khung cửa.
* Chia khung thành các viên đá bằng `Bevel`.
* Sử dụng `Individual Origins` để thu nhỏ từng viên đá riêng biệt.
* Thêm vết khuyết, độ lệch và sự không hoàn hảo cho kiến trúc low-poly.
* Làm quen với `Knife`, `Bisect`, `Merge by Distance` và `Randomize`.

---

## 2. Chuẩn bị module cửa

Trước khi dựng khung cửa, cần đưa một số asset cũ trở lại scene:

* Một module tường.
* Hai module cột đá.

Trong `Outliner`, module tường đang nằm trong collection chứa các asset dự phòng. Bật lại khả năng hiển thị, sau đó nhân bản nó:

```text
Chọn Wall
→ Shift + D
→ X
→ Di chuyển bản sao sang bên cạnh
```

Sau khi nhân bản:

* Ẩn module tường gốc.
* Di chuyển bản sao ra khỏi collection dự phòng.
* Đưa nó vào collection chính.

Tiếp theo, sử dụng module cột đã tạo trước đó để làm hai cột hai bên cửa.

Có thể nhân bản theo khoảng cách chính xác:

```text
Shift + D → X → 2
Shift + D → X → 4
```

Trong quá trình dựng, nên giữ cả hai cột để kiểm tra:

* Khoảng cách.
* Tỷ lệ.
* Khả năng căn chỉnh.
* Chiều rộng của lối cửa.

Ở phiên bản cuối cùng, một trong các cột có thể được loại bỏ tùy theo cách ghép module.

---

## 3. Tổ chức scene trước khi modelling

Sau khi đã có:

* Một module tường.
* Hai cột hai bên.

Có thể tạm thời ẩn các module tường và cột khác để chỉ tập trung vào khu vực cửa.

```text
Wall + Pillar trái + Pillar phải
                 ↓
          Khu vực cửa cần dựng
```

Đây là một thói quen hữu ích khi scene bắt đầu có nhiều object:

* Giảm sự rối mắt.
* Dễ chọn đúng object.
* Dễ đánh giá hình dáng.
* Hạn chế chỉnh sửa nhầm asset khác.

---

## 4. Tạo khung cửa từ Plane

Khung cửa sẽ được dựng bằng cách:

1. Tạo một mặt phẳng.
2. Vẽ đường bao của một nửa khung cửa.
3. Mirror sang bên còn lại.
4. Mirror ra mặt sau.
5. Extrude để nối mặt trước và mặt sau.

Quy trình tổng quát:

```text
Plane
  ↓
Vẽ một phần tư khung cửa
  ↓
Mirror theo X
  ↓
Mirror theo Y
  ↓
Extrude nối các mặt
  ↓
Khung cửa hoàn chỉnh
```

---

## 5. Thêm Plane và định hướng đúng

Đặt `3D Cursor` gần khu vực cửa:

```text
Shift + chuột phải
```

Thêm một mặt phẳng:

```text
Shift + A
→ Mesh
→ Plane
```

Trong bảng thao tác vừa thêm object, đặt:

```text
Rotation X = 90°
```

Mục đích là xoay Plane đứng thẳng và hướng về phía trước, giúp chỉnh hình dễ hơn trong Front View.

Sau đó giảm kích thước Plane xuống khoảng:

```text
Size ≈ 1 m
```

Kích thước này gần tương ứng với một viên đá trên module tường.

---

## 6. Thêm Mirror Modifier theo trục X

Di chuyển Plane sang một bên của lối cửa.

Thêm `Mirror Modifier`:

```text
Modifier Properties
→ Add Modifier
→ Mirror
```

Ban đầu có thể không thấy thay đổi rõ ràng vì Mirror đang sử dụng Object Origin hiện tại làm tâm đối xứng.

Object Origin vẫn nằm ở giữa Plane, vì vậy bản sao đối xứng đang chồng lên chính object gốc.

---

## 7. Di chuyển Object Origin

Để đặt tâm đối xứng vào giữa lối cửa:

```text
Options
→ Affect Only Origins
```

Sau đó di chuyển Origin:

```text
G → X
```

Đưa Origin vào chính giữa cửa.

Khi Origin được đặt đúng vị trí, Mirror Modifier sẽ tạo phần đối xứng ở phía bên kia.

Sau khi hoàn thành, cần tắt:

```text
Affect Only Origins
```

Nếu quên tắt, các thao tác Move tiếp theo sẽ chỉ di chuyển Origin thay vì di chuyển hình học.

---

## 8. Vẽ đường bao một nửa khung cửa

Chuyển vào `Edit Mode`:

```text
Tab
```

Điều chỉnh Plane sao cho nó nằm gần chân cửa.

Có thể dùng:

```text
S
```

để scale và:

```text
G → G
```

để trượt vertex hoặc edge theo hướng phù hợp.

Nên đặt phần đá dưới cùng thấp hơn mặt sàn một chút để tránh xuất hiện khe hở khi lắp ghép.

---

### 8.1. Extrude cạnh lên trên

Chuyển sang `Edge Select`:

```text
2
```

Chọn cạnh trên và bắt đầu Extrude:

```text
E
```

Quy trình tạo hình cơ bản:

```text
Extrude thẳng lên
        ↓
Extrude thêm một đoạn
        ↓
Xoay cạnh vào phía trong
        ↓
Extrude đến tâm cửa
```

Minh họa:

```text
      ┌──────── Tâm cửa
      │
      ╱
     │
     │
     │
─────┘
```

Do đang sử dụng Mirror theo trục `X`, chỉ cần dựng một bên. Phần còn lại sẽ tự động xuất hiện.

---

## 9. Sử dụng Clipping trong Mirror

Khi đoạn trên cùng của khung cửa tiến tới đường tâm, hai phía đối xứng có thể xuyên qua nhau.

Bật tùy chọn:

```text
Mirror Modifier
→ Clipping
```

`Clipping` giúp các vertex khi chạm vào mặt phẳng Mirror sẽ:

* Dính vào trục giữa.
* Không xuyên sang phía đối diện.
* Tạo đường nối liền mạch ở chính giữa.

Sau đó dùng:

```text
G → X
```

để đưa các vertex vào đúng đường tâm.

---

## 10. Chỉnh hình dáng khung cửa

Chuyển sang `Vertex Select`:

```text
1
```

Điều chỉnh các vertex để tạo hình khung đá.

Một số thao tác chính:

* Di chuyển vertex lên hoặc xuống.
* Tạo phần cong hoặc nghiêng nhẹ phía trên.
* Điều chỉnh độ rộng hai bên.
* Tạo viên đá lớn ở đỉnh cửa.
* Tránh để khung quá mỏng.

Giảng viên chọn Plane thay vì Cube vì Plane chỉ có một lớp vertex.

Nếu bắt đầu từ Cube, người dùng sẽ phải thường xuyên chọn cả:

* Vertex mặt trước.
* Vertex mặt sau.
* Các vertex bị khuất.

Plane giúp quá trình tạo đường bao nhanh và dễ kiểm soát hơn.

---

## 11. Tạo viên đá lớn ở đỉnh cửa

Chọn vertex gần phần đỉnh, sau đó dùng:

```text
Ctrl + B
```

để Bevel và tạo thêm hình học.

Nếu muốn bevel vertex thay vì bevel edge, sử dụng:

```text
Ctrl + Shift + B
```

Điều chỉnh vị trí các vertex để tạo một viên đá lớn nằm ở chính giữa đỉnh cửa.

Cần chú ý rằng phần đỉnh này có thể là một viên đá duy nhất, không nhất thiết phải chia đôi tại đường tâm theo cách nhìn trực quan.

---

## 12. Mirror khung cửa theo trục Y

Sau khi hoàn thiện mặt trước, cần tạo cùng hình dạng ở mặt sau của tường.

Trong `Mirror Modifier`, bật thêm:

```text
Y Axis
```

Tuy nhiên, nếu object vẫn đang có Rotation chưa được Apply, kết quả Mirror theo Y có thể xuất hiện ở vị trí không mong muốn.

---

## 13. Apply Rotation

Chuyển về `Object Mode`:

```text
Tab
```

Áp dụng phép xoay:

```text
Ctrl + A
→ Rotation
```

Sau khi Apply Rotation:

* Hình dạng object không thay đổi.
* Giá trị Rotation trở về `0`.
* Các trục local của object được cập nhật.
* Mirror Modifier hoạt động đúng theo hướng mong muốn.

Đây là bước quan trọng trước khi sử dụng modifier phụ thuộc vào trục tọa độ.

---

## 14. Di chuyển Origin theo trục Y

Sau khi bật Mirror theo Y, bản sao có thể vẫn chồng lên mặt trước vì Origin đang nằm ngay tại mặt phẳng đó.

Trong `Object Mode`:

```text
Options
→ Affect Only Origins
```

Sau đó:

```text
G → Y
```

Di chuyển Origin vào giữa độ dày của module tường.

Khi Origin nằm ở giữa tường, Mirror theo Y sẽ tạo:

* Một khung ở mặt trước.
* Một khung tương ứng ở mặt sau.

```text
Mặt trước
    │
    │ ← Origin ở giữa tường
    │
Mặt sau
```

Lúc này, người dùng chỉ cần modelling một góc của khung cửa nhưng kết quả được nhân ra theo cả hai trục.

---

## 15. Nối mặt trước và mặt sau

Hiện tại, khung cửa mới chỉ có:

* Một mặt phía trước.
* Một mặt phía sau.

Cần nối chúng lại để tạo object có chiều sâu.

Chuyển sang `Edge Select`:

```text
2
```

Chọn các edge loop cần Extrude:

```text
Alt + chuột trái
Shift + Alt + chuột trái
```

Sau đó Extrude theo trục Y:

```text
E → Y
```

Nếu khó quan sát bên trong scene, bật `Local View`:

```text
Numpad /
```

Với `Clipping` đang bật, có thể dùng:

```text
G → Y
```

để đưa các cạnh Extrude vào tâm, nơi chúng sẽ dính lại với nhau.

Sau khi hoàn thành, nhấn:

```text
Numpad /
```

để thoát khỏi Local View.

---

## 16. Xử lý Z-fighting

Sau khi nối khung, có thể xuất hiện hiện tượng nhấp nháy ở phần đáy.

Đây là hiện tượng **Z-fighting**, xảy ra khi hai bề mặt nằm gần như chính xác trên cùng một vị trí.

Biểu hiện:

* Mặt bị nhấp nháy.
* Màu sắc thay đổi khi xoay góc nhìn.
* Blender không xác định được mặt nào nằm phía trước.

Cách xử lý:

```text
Chọn hình học
→ G → Y
→ Di chuyển rất nhẹ
```

Chỉ cần tách hai bề mặt ra một khoảng nhỏ để loại bỏ sự chồng mặt.

---

## 17. Chia khung cửa thành các viên đá

Khung cửa hiện vẫn là một khối liên tục. Bước tiếp theo là chia nó thành nhiều viên đá riêng biệt về mặt hình ảnh.

Chọn các edge loop ngang:

```text
Alt + chuột trái
Shift + Alt + chuột trái
```

Điều chỉnh vị trí nếu một viên đá đang quá cao:

```text
G → Z
```

Sau đó dùng:

```text
Ctrl + B
```

để Bevel các edge loop.

Có thể cuộn con lăn chuột để thêm một đường cắt ở giữa phần Bevel.

Mục tiêu là tạo ra các khoảng tách nhỏ giữa những viên đá.

---

## 18. Scale theo Individual Origins

Sau khi tạo các dải Bevel, cần thu nhỏ từng phần để tạo khe giữa các viên đá.

Nếu Scale bình thường, tất cả vùng được chọn sẽ scale quanh một điểm chung:

```text
Median Point
```

Điều này khiến các viên đá bị kéo về phía nhau.

Cần đổi `Transform Pivot Point` thành:

```text
Individual Origins
```

Sau đó:

```text
S
```

Mỗi viên đá sẽ được scale theo tâm riêng của nó.

```text
Median Point:
[ A ][ B ][ C ] → cùng co về một tâm

Individual Origins:
[ A ] [ B ] [ C ] → từng phần co quanh tâm riêng
```

---

## 19. Bù sai lệch theo trục Y

Một số edge có thể không thu vào đều theo chiều sâu vì Blender tính tâm của nhóm edge dựa trên toàn bộ hình dạng được chọn.

Do đó, khe phía trước và phía sau có thể không đều nhau.

Có thể bù thủ công bằng:

```text
G → Y
```

Các cạnh nằm trên mặt phẳng Mirror có thể bị giữ cố định bởi `Clipping`, trong khi những cạnh còn lại sẽ di chuyển.

Đây là một bước tinh chỉnh để các khe đá có độ sâu đồng đều hơn.

---

## 20. Apply Mirror Modifier

Trước khi thêm các chi tiết bất đối xứng như:

* Vết khuyết.
* Góc vỡ.
* Biến dạng ngẫu nhiên.
* Những viên đá lệch nhau.

Cần Apply Mirror Modifier.

Nếu không Apply, mọi chỉnh sửa trên một phía vẫn tiếp tục bị phản chiếu sang các phía còn lại.

Có thể Apply bằng menu trong Modifier:

```text
Modifier Properties
→ Menu
→ Apply
```

Sau khi Apply:

* Các bản sao Mirror trở thành geometry thật.
* Có thể chỉnh từng phía độc lập.
* Có thể tạo độ bất đối xứng tự nhiên hơn.

---

## 21. Tạo vết khuyết bằng Vertex Bevel

Chuyển sang `Edit Mode` và `Vertex Select`.

Chọn một số vertex ở các vị trí khác nhau, sau đó:

```text
Ctrl + Shift + B
```

Cuộn con lăn chuột để giảm số segment xuống mức thấp, thường chỉ cần một đường cắt.

Kỹ thuật này cắt bớt góc nhọn và tạo cảm giác:

* Viên đá bị sứt.
* Cạnh bị vỡ.
* Bề mặt đã cũ.
* Kiến trúc không hoàn hảo.

---

## 22. Merge by Distance

Sau khi Bevel hoặc Edge Slide, một số vertex có thể nằm rất gần nhau.

Để gộp chúng:

```text
A
→ M
→ By Distance
```

Blender sẽ hiển thị số lượng vertex đã được gộp.

Nếu chưa gộp được vì khoảng cách quá nhỏ, có thể tăng giá trị `Distance` một chút.

Không nên tăng quá lớn vì có thể làm các vertex không liên quan bị gộp nhầm.

Nguyên tắc:

```text
Khoảng cách vừa đủ
→ Gộp vertex trùng hoặc gần nhau

Khoảng cách quá lớn
→ Phá hỏng hình học
```

---

## 23. Tạo đường cắt bằng Loop Cut và Knife

Để tạo thêm vết khuyết, có thể dùng:

```text
Ctrl + R
```

để thêm `Loop Cut`.

Tuy nhiên, Loop Cut chỉ chạy xuyên qua các mặt có topology phù hợp, thường là chuỗi mặt `Quad`.

Nếu gặp `N-gon`, đường cắt có thể dừng lại.

Khi đó, sử dụng `Knife Tool`:

```text
K
```

Thao tác:

1. Nhấn `K`.
2. Nhấp vào điểm bắt đầu.
3. Nhấp vào điểm kết thúc.
4. Nhấn `Enter`.

Knife giúp hoàn thiện đường cắt qua các vùng mà Loop Cut không đi qua được.

---

## 24. Tạo vết lõm từ edge

Sau khi có đường cắt:

1. Chọn các edge hoặc vertex cần thiết.
2. Bevel bằng `Ctrl + B`.
3. Nhấn `V` nếu cần chuyển sang kiểu Vertex Bevel.
4. Điều chỉnh độ rộng của phần cắt.
5. Chọn hai vertex đối diện.
6. Nhấn `J` để nối chúng.

Lệnh:

```text
J — Connect Vertex Path
```

giúp tạo edge nối giữa hai vertex trên cùng một mặt.

Sau đó có thể dùng:

```text
G → G
```

để Edge Slide, kéo đường cắt sang vị trí mong muốn và tạo vết khuyết mỏng hoặc rộng.

---

## 25. Sử dụng Bisect Tool

Nếu Loop Cut không hoạt động tốt, có thể dùng `Bisect`.

Chuyển sang Front View, chọn vùng cần cắt và chọn:

```text
Toolbar
→ Bisect
```

Kéo một đường cắt xuyên qua object.

Trong tùy chọn Bisect, cần đảm bảo không bật các chế độ xóa hình học nếu chỉ muốn tạo đường cắt:

* `Clear Inner`: tắt.
* `Clear Outer`: tắt.
* `Fill`: tắt nếu không cần lấp mặt.

Mục tiêu là chỉ thêm một đường cắt mới.

Nếu Bisect tạo thêm edge ở những khu vực không mong muốn, có thể chọn edge đó và dùng:

```text
Ctrl + X
```

để `Dissolve Edges`.

Dissolve xóa edge nhưng cố gắng giữ nguyên bề mặt của object.

---

## 26. Tạo độ méo bằng Randomize

Một khung cửa hoàn toàn thẳng và đều sẽ trông quá nhân tạo.

Để tạo độ lệch nhẹ:

```text
Mesh
→ Transform
→ Randomize
```

Đặt giá trị rất nhỏ, ví dụ:

```text
Amount ≈ 0.01
```

Không nên Randomize các vertex ở đáy vì điều đó có thể khiến khung cửa:

* Không còn nằm phẳng trên sàn.
* Xuất hiện khe hở.
* Khó ghép vào module khác.

Quy trình phù hợp:

```text
Chọn toàn bộ
→ Bỏ chọn hàng vertex dưới cùng
→ Mesh
→ Transform
→ Randomize
→ Amount = 0.01
```

Kết quả là các viên đá hơi lệch nhau nhưng phần đáy vẫn thẳng hàng.

---

## 27. Tại sao cần thêm sự không hoàn hảo?

Trong phong cách low-poly, chi tiết không nhất thiết phải phức tạp. Chỉ cần một số thay đổi nhỏ đã đủ tạo cảm giác thủ công và tự nhiên.

Các chi tiết hữu ích gồm:

* Góc đá bị sứt.
* Khe giữa các viên đá không hoàn toàn đều.
* Viên đá hơi lệch vị trí.
* Đường viền không quá thẳng.
* Một vài vết lõm nhỏ.
* Độ sâu giữa các viên đá khác nhau nhẹ.

```text
Khung hoàn hảo
→ Cảm giác máy móc, nhân tạo

Khung có sai lệch nhẹ
→ Cảm giác đá cũ, thủ công, tự nhiên
```

Sự biến dạng cần rất nhẹ. Nếu Randomize hoặc Bevel quá mạnh, khung cửa sẽ trông hỏng hoặc mất khả năng ghép module.

---

## 28. Quy trình hoàn chỉnh

```text
Đưa Wall và Pillar trở lại scene
                ↓
Nhân bản một Wall và hai Pillar
                ↓
Thêm Plane, xoay X = 90°
                ↓
Mirror theo X
                ↓
Di chuyển Origin vào tâm cửa
                ↓
Extrude tạo đường bao khung
                ↓
Apply Rotation
                ↓
Mirror theo Y
                ↓
Di chuyển Origin vào giữa độ dày tường
                ↓
Extrude nối mặt trước và mặt sau
                ↓
Bevel chia thành các viên đá
                ↓
Scale theo Individual Origins
                ↓
Apply Mirror
                ↓
Tạo vết khuyết bằng Bevel, Knife và Bisect
                ↓
Merge by Distance
                ↓
Randomize nhẹ
                ↓
Hoàn thiện khung cửa
```

---

## 29. Phím tắt và công cụ

| Phím tắt/Công cụ           | Chức năng                        |
| -------------------------- | -------------------------------- |
| `Shift + D`                | Nhân bản object                  |
| `Shift + A`                | Thêm object mới                  |
| `Shift + chuột phải`       | Di chuyển 3D Cursor              |
| `Tab`                      | Chuyển Object Mode/Edit Mode     |
| `1`                        | Vertex Select trong Edit Mode    |
| `2`                        | Edge Select trong Edit Mode      |
| `E`                        | Extrude                          |
| `G`                        | Di chuyển                        |
| `G`, `G`                   | Edge Slide hoặc Vertex Slide     |
| `S`                        | Scale                            |
| `Ctrl + B`                 | Bevel Edge                       |
| `Ctrl + Shift + B`         | Bevel Vertex                     |
| `Ctrl + R`                 | Loop Cut                         |
| `Ctrl + A`                 | Apply Transform                  |
| `Alt + chuột trái`         | Chọn Edge Loop                   |
| `Shift + Alt + chuột trái` | Thêm Edge Loop vào vùng chọn     |
| `K`                        | Knife Tool                       |
| `J`                        | Nối hai vertex                   |
| `M`                        | Mở menu Merge                    |
| `M → By Distance`          | Gộp các vertex gần nhau          |
| `Ctrl + X`                 | Dissolve Edge                    |
| `Numpad /`                 | Bật/tắt Local View               |
| `Mirror Modifier`          | Tạo đối xứng theo trục           |
| `Clipping`                 | Giữ vertex trên mặt phẳng Mirror |
| `Individual Origins`       | Scale từng phần theo tâm riêng   |
| `Bisect`                   | Cắt object bằng một mặt phẳng    |
| `Randomize`                | Tạo độ lệch ngẫu nhiên nhẹ       |

---

## 30. Lỗi thường gặp

### 30.1. Mirror không tạo bản sao

**Nguyên nhân:** Object Origin đang nằm giữa object, khiến bản sao Mirror chồng lên hình gốc.

**Khắc phục:** Bật `Affect Only Origins` và di chuyển Origin đến vị trí tâm đối xứng.

---

### 30.2. Mirror theo Y xuất hiện sai hướng

**Nguyên nhân:** Rotation của Plane chưa được Apply.

**Khắc phục:**

```text
Ctrl + A
→ Rotation
```

---

### 30.3. Hai nửa khung xuyên qua nhau

**Nguyên nhân:** Chưa bật `Clipping`.

**Khắc phục:** Bật `Clipping` trong Mirror Modifier và đưa vertex về mặt phẳng tâm.

---

### 30.4. Mặt khung bị nhấp nháy

**Nguyên nhân:** Hai bề mặt nằm trùng nhau, gây Z-fighting.

**Khắc phục:** Di chuyển một lớp geometry rất nhẹ theo trục Y.

---

### 30.5. Scale các viên đá kéo tất cả vào giữa

**Nguyên nhân:** Pivot Point đang là `Median Point`.

**Khắc phục:** Chuyển sang `Individual Origins`.

---

### 30.6. Loop Cut không chạy xuyên object

**Nguyên nhân:** Topology có N-gon hoặc không tạo thành chuỗi Quad liên tục.

**Khắc phục:** Hoàn thiện đường cắt bằng `Knife Tool` hoặc dùng `Bisect`.

---

### 30.7. Merge by Distance làm mất quá nhiều vertex

**Nguyên nhân:** Khoảng cách Merge được đặt quá lớn.

**Khắc phục:** Giảm Distance xuống mức nhỏ nhất đủ để gộp vertex bị trùng.

---

### 30.8. Khung cửa không còn nằm phẳng trên sàn

**Nguyên nhân:** Các vertex đáy cũng bị Randomize.

**Khắc phục:** Bỏ chọn hàng vertex dưới cùng trước khi dùng Randomize.

---

### 30.9. Vết khuyết vẫn bị đối xứng hoàn toàn

**Nguyên nhân:** Mirror Modifier chưa được Apply.

**Khắc phục:** Apply Mirror trước khi tạo chi tiết bất đối xứng.

---

## 31. Checklist thực hành

### Chuẩn bị

* [ ] Đã bật lại module tường từ collection dự phòng.
* [ ] Đã nhân bản một module tường.
* [ ] Đã nhân bản hai cột đá.
* [ ] Đã đưa các bản sao vào collection chính.
* [ ] Đã ẩn các object không cần thiết.

### Dựng hình cơ bản

* [ ] Đã thêm một Plane.
* [ ] Đã xoay Plane `90°` theo trục X.
* [ ] Đã đặt kích thước Plane khoảng `1 m`.
* [ ] Đã thêm Mirror Modifier theo trục X.
* [ ] Đã di chuyển Origin vào tâm lối cửa.
* [ ] Đã bật Clipping.
* [ ] Đã Extrude tạo đường bao khung cửa.

### Tạo chiều sâu

* [ ] Đã Apply Rotation.
* [ ] Đã bật Mirror theo trục Y.
* [ ] Đã di chuyển Origin vào giữa độ dày tường.
* [ ] Đã Extrude nối mặt trước và mặt sau.
* [ ] Đã xử lý Z-fighting nếu xuất hiện.

### Tạo các viên đá

* [ ] Đã thêm các edge loop cần thiết.
* [ ] Đã Bevel để chia khung thành các viên đá.
* [ ] Đã chuyển Pivot Point sang Individual Origins.
* [ ] Đã Scale từng viên đá để tạo khe.
* [ ] Đã điều chỉnh các cạnh theo trục Y nếu cần.

### Thêm chi tiết

* [ ] Đã Apply Mirror Modifier.
* [ ] Đã tạo một số góc đá bị sứt.
* [ ] Đã dùng Knife hoặc Bisect để thêm đường cắt.
* [ ] Đã nối vertex bằng `J` khi cần.
* [ ] Đã Merge by Distance.
* [ ] Đã Dissolve các edge không cần thiết.
* [ ] Đã Randomize nhẹ với giá trị khoảng `0.01`.
* [ ] Đã giữ hàng vertex đáy nằm thẳng.

### Hoàn tất

* [ ] Đã kiểm tra khung cửa từ mặt trước.
* [ ] Đã kiểm tra khung cửa từ mặt sau.
* [ ] Đã kiểm tra chiều sâu của khung.
* [ ] Đã kiểm tra các khe đá.
* [ ] Đã lưu file Blender.

---

## 32. Tóm tắt

Trong bài học này, khung đá bao quanh cửa được tạo từ một `Plane` thay vì Cube. Người học chỉ cần dựng một phần nhỏ của hình dạng, sau đó sử dụng `Mirror Modifier` theo trục X và Y để tạo toàn bộ khung cửa.

Object Origin đóng vai trò quan trọng vì nó xác định mặt phẳng đối xứng của Mirror. Sau khi tạo mặt trước và mặt sau, các cạnh được Extrude để nối lại thành một object có chiều sâu.

Khung tiếp tục được chia thành các viên đá bằng Bevel. `Individual Origins` giúp thu nhỏ từng viên đá riêng biệt để tạo khe. Cuối cùng, Mirror được Apply để có thể thêm các chi tiết bất đối xứng như góc vỡ, vết lõm và độ méo nhẹ.

Ý tưởng cốt lõi của bài học là:

> **Dựng một phần nhỏ, dùng đối xứng để hoàn thiện hình khối, sau đó phá vỡ sự đối xứng bằng những sai lệch nhỏ để tạo cảm giác tự nhiên.**
