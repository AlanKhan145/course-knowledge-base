# 024 — Creating a Barrel

| Thuộc tính       | Nội dung                                     |
| ---------------- | -------------------------------------------- |
| **Module**       | Module 02 — Modular Dungeon                  |
| **Bài học**      | Creating a Barrel                            |
| **Thời lượng**   | 9:49                                         |
| **Chủ đề chính** | Tạo thùng gỗ low-poly cho môi trường modular |

## 1. Mục tiêu bài học

Sau bài học này, người học có thể:

* Tạo một chiếc thùng gỗ low-poly từ đối tượng **Cylinder**.
* Điều chỉnh số lượng đỉnh để kiểm soát mật độ polygon.
* Sử dụng **Loop Cut** và **Scale** để tạo phần thân thùng phình ra.
* Tạo các vòng đai nổi bằng **Bevel** và **Extrude**.
* Tạo phần nắp trên và đáy thùng bằng **Inset** và **Extrude**.
* Thêm độ méo nhẹ để mô hình có cảm giác thủ công, tự nhiên hơn.
* Tạo các vết khuyết bằng **Bevel**, **Edge Slide** và **Merge by Distance**.
* Sử dụng **Auto Merge Vertices** để tự động gộp các đỉnh trùng nhau.

---

## 2. Tổng quan quy trình

```text
Cylinder 12 cạnh
      │
      ▼
Điều chỉnh kích thước
      │
      ▼
Thêm 2 Loop Cut
      │
      ▼
Scale ngang để làm phình thân
      │
      ▼
Bevel và Extrude các vòng đai
      │
      ▼
Inset và Extrude nắp, đáy
      │
      ▼
Di chuyển đỉnh tạo độ gồ ghề
      │
      ▼
Bevel cạnh tạo vết khuyết
      │
      ▼
Edge Slide và Merge Vertices
      │
      ▼
Thùng gỗ low-poly hoàn chỉnh
```

---

## 3. Tạo hình trụ cơ bản

### 3.1. Xóa Cube mặc định

Chọn Cube mặc định và nhấn:

```text
Delete
```

### 3.2. Thêm Cylinder

Sử dụng:

```text
Shift + A → Mesh → Cylinder
```

Ngay sau khi thêm Cylinder, mở bảng **Add Cylinder** ở góc dưới bên trái và thiết lập:

| Thông số     | Giá trị |
| ------------ | ------: |
| **Vertices** |      12 |
| **Radius**   |   0.5 m |
| **Depth**    |   1.2 m |

Việc giảm số lượng đỉnh xuống `12` giúp mô hình có hình dáng góc cạnh, phù hợp với phong cách low-poly.

### 3.3. Đặt thùng lên mặt sàn

Chuyển sang góc nhìn chính diện:

```text
Numpad 1
```

Di chuyển Cylinder lên theo trục Z:

```text
G → Z
```

Đặt đáy của Cylinder gần với vị trí mặt sàn tưởng tượng. Việc căn vật thể lên mặt sàn ngay từ đầu giúp sắp xếp các asset trong môi trường modular dễ dàng hơn về sau.

---

## 4. Tạo phần thân thùng phình ra

Chuyển vào **Edit Mode**:

```text
Tab
```

### 4.1. Thêm Loop Cut

Sử dụng:

```text
Ctrl + R
```

Cuộn con lăn chuột để tạo `2` đường cắt ngang quanh thân Cylinder.

Ngoài con lăn chuột, có thể sử dụng:

```text
Ctrl + Numpad +
Ctrl + Numpad -
```

Nhấn chuột trái để xác nhận, sau đó nhấn chuột phải hoặc click lần nữa để đặt các đường cắt cân đối quanh phần giữa.

### 4.2. Chọn hai vòng cạnh

Chuyển sang **Edge Select**:

```text
2
```

Chọn vòng cạnh thứ nhất:

```text
Alt + Left Click
```

Giữ `Shift` và chọn vòng cạnh thứ hai:

```text
Shift + Alt + Left Click
```

### 4.3. Scale theo chiều ngang

Sử dụng:

```text
S → Shift + Z
```

`Shift + Z` loại trừ trục Z, vì vậy các vòng cạnh chỉ được mở rộng theo mặt phẳng ngang XY.

Scale hai vòng cạnh ra ngoài để tạo phần thân thùng phình ở giữa.

```text
Nhìn từ bên cạnh:

       ______
     /        \
    /          \
    |          |
    \          /
     \________/
```

Không nên scale quá mạnh vì thân thùng sẽ trở nên quá tròn hoặc mất cân đối.

---

## 5. Tạo các vòng đai quanh thân thùng

Hai vòng cạnh vừa tạo sẽ được sử dụng làm nền cho các vòng đai.

### 5.1. Bevel các vòng cạnh

Khi hai vòng cạnh vẫn đang được chọn, nhấn:

```text
Ctrl + B
```

Di chuyển chuột để mở rộng mỗi vòng cạnh thành một dải gồm hai cạnh song song.

Các dải này sẽ trở thành vòng đai nổi quanh thân thùng.

### 5.2. Extrude vòng đai ra ngoài

Với các mặt của vòng đai đang được chọn, nhấn:

```text
E
```

Sau đó scale ra ngoài nhưng không thay đổi chiều cao:

```text
S → Shift + Z
```

Quy trình thao tác:

```text
E → S → Shift + Z
```

Kéo nhẹ ra ngoài để vòng đai nhô cao hơn phần thân gỗ.

```text
Mặt cắt đơn giản:

      Đai nổi
        ▼
     ┌──────┐
   __│      │__
  /            \
 |    Thân gỗ   |
  \____________/
```

Chỉ cần extrude một khoảng nhỏ để tránh vòng đai quá dày.

---

## 6. Tạo nắp trên và đáy thùng

### 6.1. Chọn hai mặt đầu

Chuyển sang **Face Select**:

```text
3
```

Chọn mặt trên, giữ `Shift` và chọn thêm mặt dưới.

### 6.2. Inset mặt đầu

Nhấn:

```text
I
```

Kéo chuột vào trong để tạo một đường viền quanh phần nắp và đáy.

Inset giúp tạo phần khung bao quanh nắp thùng.

### 6.3. Extrude vào bên trong

Khi hai mặt inset vẫn đang được chọn, nhấn:

```text
E
```

Sau đó scale theo trục Z:

```text
S → Z
```

Hai mặt sẽ di chuyển về phía trung tâm của thùng, tạo phần nắp và đáy lõm vào.

Việc thao tác đồng thời cả mặt trên và mặt dưới giúp hai phần có cùng độ sâu.

---

## 7. Tạo độ gồ ghề và bất đối xứng

Một mô hình quá hoàn hảo thường tạo cảm giác nhân tạo. Để chiếc thùng có thêm cá tính, có thể di chuyển nhẹ một số đỉnh.

### 7.1. Chuyển sang Vertex Select

```text
1
```

### 7.2. Di chuyển các đỉnh riêng lẻ

Chọn ngẫu nhiên một số đỉnh rồi nhấn:

```text
G
```

Di chuyển chúng một khoảng rất nhỏ.

Có thể áp dụng cho:

* Các đỉnh trên vòng đai.
* Các đỉnh quanh nắp trên.
* Các đỉnh quanh đáy thùng.
* Một số đỉnh trên phần thân.

Nguyên tắc:

* Di chuyển rất nhẹ.
* Không tạo sự biến dạng quá lớn.
* Không làm mất silhouette chung của chiếc thùng.
* Phân bố thay đổi ngẫu nhiên, tránh tạo quy luật rõ ràng.

```text
Trước:

────────────

Sau:

───╲──╱─────
```

Mục tiêu là tạo một chút độ lượn và không hoàn hảo, giống vật thể được làm thủ công.

---

## 8. Tạo vết khuyết trên nắp thùng

Các vết khuyết được tạo bằng cách bevel một cạnh, sau đó kéo cạnh giữa xuống.

### 8.1. Bevel một cạnh

Chuyển sang **Edge Select**:

```text
2
```

Chọn một cạnh ở khu vực nắp thùng và nhấn:

```text
Ctrl + B
```

Kéo để tạo một bevel nhỏ.

Cuộn con lăn chuột để thêm một cạnh ở giữa bevel.

Thiết lập cơ bản:

| Thông số     | Gợi ý                         |
| ------------ | ----------------------------- |
| **Segments** | 2                             |
| **Width**    | Nhỏ                           |
| **Vị trí**   | Ngẫu nhiên quanh nắp hoặc đáy |

Không kéo bevel vượt quá các cạnh lân cận. Khi bevel đạt giới hạn hình học, nó sẽ dừng tại các đỉnh xung quanh.

### 8.2. Tạo hình vết khuyết

Sau bevel, chọn cạnh ở giữa và di chuyển xuống.

Có thể dùng `G`, nhưng thao tác này đôi khi làm cạnh lệch khỏi bề mặt. Phương pháp chính xác hơn là sử dụng **Edge Slide**.

---

## 9. Sử dụng Edge Slide

### 9.1. Chuyển sang Vertex Select

```text
1
```

Chọn một trong hai đỉnh của cạnh giữa vừa tạo.

### 9.2. Trượt đỉnh theo cạnh

Nhấn nhanh hai lần:

```text
G → G
```

Đây là lệnh **Vertex Slide/Edge Slide**.

Trượt đỉnh xuống vị trí của đỉnh nằm bên dưới.

Lặp lại với đỉnh ở phía còn lại.

```text
Trước:

A────B
│    │
C────D

Sau khi slide:

A    B
╲    ╱
 C──D
```

Kết quả tạo thành một vết lõm hoặc vết khuyết hình chữ V trên mép thùng.

---

## 10. Gộp các đỉnh trùng nhau

Sau khi slide đỉnh lên đúng vị trí của một đỉnh khác, Blender vẫn có thể giữ lại hai đỉnh nằm chồng lên nhau. Đây được gọi là **double vertices**.

Nếu di chuyển một trong các đỉnh, có thể thấy một đỉnh khác vẫn còn ở vị trí cũ.

### 10.1. Merge by Distance

Chọn toàn bộ mesh:

```text
A
```

Mở menu Merge:

```text
M
```

Chọn:

```text
Merge by Distance
```

Blender sẽ gộp những đỉnh nằm rất gần hoặc trùng hoàn toàn với nhau.

Sau thao tác, Blender hiển thị số lượng đỉnh đã được loại bỏ.

### 10.2. Điều chỉnh Merge Distance

Trong bảng thao tác vừa thực hiện, có thể thay đổi **Merge Distance**.

* Giá trị thấp: chỉ gộp các đỉnh gần như trùng hoàn toàn.
* Giá trị cao: có thể vô tình gộp các đỉnh khác trên mô hình.
* Nên giữ khoảng cách rất thấp cho trường hợp này.

> Không tăng Merge Distance quá lớn vì nó có thể phá hỏng topology của chiếc thùng.

---

## 11. Sử dụng Auto Merge Vertices

Thay vì thực hiện `Merge by Distance` sau mỗi vết khuyết, có thể bật **Auto Merge Vertices**.

Nút này nằm ở góc trên bên phải của 3D Viewport.

Khi Auto Merge được bật:

1. Chọn một đỉnh.
2. Nhấn `G` hai lần để Edge Slide.
3. Trượt đỉnh đến vị trí của một đỉnh khác.
4. Xác nhận thao tác.
5. Hai đỉnh sẽ tự động được gộp thành một.

Quy trình:

```text
Bật Auto Merge
      │
      ▼
Chọn đỉnh
      │
      ▼
G → G
      │
      ▼
Trượt đến đỉnh khác
      │
      ▼
Tự động hợp nhất
```

Có thể kiểm tra bằng cách chọn đỉnh và nhấn `G`. Nếu chỉ có một đỉnh di chuyển thì quá trình merge đã thành công.

---

## 12. Tạo nhiều vết khuyết ngẫu nhiên

Lặp lại quy trình trên ở nhiều vị trí khác nhau:

1. Chọn một cạnh ngẫu nhiên.
2. Nhấn `Ctrl + B`.
3. Tạo bevel nhỏ với một cạnh giữa.
4. Chuyển sang Vertex Select.
5. Dùng `G → G` để trượt hai đỉnh.
6. Merge bằng Auto Merge hoặc Merge by Distance.
7. Di chuyển nhẹ một số cạnh để tạo sự bất đối xứng.

Có thể tạo vết khuyết tại:

* Mép nắp trên.
* Mép đáy.
* Các vị trí có kích thước khác nhau.
* Các cạnh không đối xứng với nhau.

Không nên tạo quá nhiều vết khuyết. Một vài chi tiết được đặt hợp lý thường hiệu quả hơn việc phủ kín toàn bộ mô hình.

---

## 13. Topology của mô hình

Topology cơ bản của chiếc thùng gồm:

```text
Mặt trên inset
      │
Vòng cạnh nắp
      │
Vòng đai trên
      │
Thân phình
      │
Vòng đai dưới
      │
Vòng cạnh đáy
      │
Mặt dưới inset
```

Các kỹ thuật được sử dụng đều giữ mô hình ở dạng low-poly:

* Cylinder chỉ có `12` cạnh.
* Chỉ thêm hai Loop Cut chính.
* Vòng đai được tạo trực tiếp từ topology hiện có.
* Chi tiết vết khuyết chỉ được thêm ở một số vị trí cần thiết.

---

## 14. Phím tắt và công cụ liên quan

| Phím tắt              | Chức năng                            |
| --------------------- | ------------------------------------ |
| `Shift + A`           | Mở menu Add                          |
| `Delete`              | Xóa object hoặc thành phần được chọn |
| `Tab`                 | Chuyển đổi Object Mode và Edit Mode  |
| `1`                   | Vertex Select                        |
| `2`                   | Edge Select                          |
| `3`                   | Face Select                          |
| `Ctrl + R`            | Thêm Loop Cut                        |
| `Alt + Click`         | Chọn một edge loop                   |
| `Shift + Alt + Click` | Chọn thêm edge loop                  |
| `S`                   | Scale                                |
| `Shift + Z`           | Loại trừ trục Z khi transform        |
| `G`                   | Di chuyển                            |
| `G`, `G`              | Vertex Slide hoặc Edge Slide         |
| `E`                   | Extrude                              |
| `I`                   | Inset Faces                          |
| `Ctrl + B`            | Bevel cạnh                           |
| `A`                   | Chọn toàn bộ                         |
| `Alt + A`             | Bỏ chọn toàn bộ                      |
| `M`                   | Mở menu Merge                        |
| `Numpad 1`            | Front View                           |

---

## 15. Lưu ý và lỗi thường gặp

### 15.1. Cylinder có quá nhiều polygon

Nếu giữ số đỉnh mặc định, chiếc thùng sẽ quá mịn và không phù hợp với phong cách low-poly.

**Cách khắc phục:** đặt `Vertices = 12` ngay sau khi thêm Cylinder.

### 15.2. Scale làm thay đổi chiều cao vòng cạnh

Nếu chỉ nhấn `S`, vòng cạnh có thể scale trên cả ba trục.

**Cách khắc phục:**

```text
S → Shift + Z
```

### 15.3. Bevel quá rộng

Bevel quá rộng có thể chạm hoặc vượt qua các cạnh lân cận, gây topology méo.

**Cách khắc phục:** sử dụng Width nhỏ và quan sát giới hạn bevel.

### 15.4. Di chuyển cạnh bằng G làm méo bề mặt

Dùng `G` thông thường có thể kéo đỉnh ra khỏi hướng của cạnh.

**Cách khắc phục:** dùng:

```text
G → G
```

để slide đỉnh dọc theo topology hiện có.

### 15.5. Xuất hiện double vertices

Hai đỉnh trông như đã nhập thành một nhưng thực tế vẫn nằm chồng lên nhau.

**Cách khắc phục:**

```text
A → M → Merge by Distance
```

hoặc bật **Auto Merge Vertices**.

### 15.6. Merge Distance quá lớn

Giá trị quá lớn có thể gộp nhiều đỉnh không mong muốn.

**Cách khắc phục:** giữ Merge Distance ở mức rất thấp.

### 15.7. Biến dạng quá mạnh

Di chuyển các đỉnh quá xa làm chiếc thùng trông bị hỏng thay vì cũ hoặc thủ công.

**Cách khắc phục:** chỉ thêm các thay đổi nhỏ và ngẫu nhiên.

---

## 16. Bài tập thực hành

Tạo một chiếc thùng gỗ với các yêu cầu:

* Cylinder có `12` cạnh.
* Radius khoảng `0.5 m`.
* Depth khoảng `1.2 m`.
* Có hai vòng đai nổi quanh thân.
* Phần giữa thùng phình ra.
* Nắp và đáy được inset, extrude vào trong.
* Có một số đỉnh được dịch chuyển nhẹ.
* Có ít nhất hai vết khuyết ở nắp.
* Có ít nhất một vết khuyết ở đáy.
* Không còn double vertices.

### Thử thách mở rộng

Tạo ba phiên bản từ cùng một mô hình:

| Phiên bản       | Đặc điểm                                           |
| --------------- | -------------------------------------------------- |
| **Barrel mới**  | Ít biến dạng, không có vết khuyết                  |
| **Barrel cũ**   | Có một vài cạnh méo và vết khuyết nhỏ              |
| **Barrel hỏng** | Nhiều vết khuyết, nắp không đều và thân méo rõ hơn |

---

## 17. Checklist thực hành

* [ ] Đã xóa Cube mặc định.
* [ ] Đã tạo Cylinder với 12 vertices.
* [ ] Đã đặt Radius khoảng 0.5 m và Depth khoảng 1.2 m.
* [ ] Đã đặt thùng lên vị trí mặt sàn.
* [ ] Đã thêm hai Loop Cut.
* [ ] Đã scale ngang để tạo phần thân phình.
* [ ] Đã bevel và extrude hai vòng đai.
* [ ] Đã inset nắp trên và đáy.
* [ ] Đã extrude nắp và đáy vào bên trong.
* [ ] Đã thêm biến dạng nhẹ cho các đỉnh.
* [ ] Đã tạo một số vết khuyết bằng Bevel.
* [ ] Đã sử dụng Edge Slide.
* [ ] Đã gộp các double vertices.
* [ ] Đã thử Auto Merge Vertices.
* [ ] Đã lưu file Blender.

---

## 18. Tóm tắt

Bài học hướng dẫn tạo một chiếc thùng gỗ low-poly từ Cylinder có `12` cạnh. Phần thân được tạo độ phình bằng hai **Loop Cut** kết hợp với Scale theo mặt phẳng ngang. Các vòng đai được hình thành bằng **Bevel** và **Extrude**, trong khi nắp và đáy được tạo bằng **Inset Faces** và Extrude vào phía trong.

Điểm quan trọng của bài học là thêm tính thủ công cho mô hình bằng cách dịch chuyển nhẹ các đỉnh và tạo các vết khuyết không đều. Các kỹ thuật **Edge Slide**, **Merge by Distance** và **Auto Merge Vertices** giúp tạo chi tiết mà vẫn duy trì topology sạch, phù hợp để sử dụng chiếc thùng như một asset trong môi trường modular.
