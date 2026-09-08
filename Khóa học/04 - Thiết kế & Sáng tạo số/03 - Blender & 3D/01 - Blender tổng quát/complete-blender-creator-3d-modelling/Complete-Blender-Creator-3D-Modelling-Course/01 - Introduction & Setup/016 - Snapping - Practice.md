# 016 — Snapping

| Thuộc tính       | Nội dung                                                        |
| ---------------- | --------------------------------------------------------------- |
| **Module**       | Module 01 — Introduction & Setup                                |
| **Bài học**      | Snapping                                                        |
| **Thời lượng**   | 11:19                                                           |
| **Chủ đề chính** | Sử dụng Snapping để đặt các đối tượng chính xác lên bề mặt khác |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Bật và tắt tính năng **Snapping** trong Blender.
* Phân biệt **Increment**, **Grid** và **Face Snapping**.
* Sử dụng điểm **Object Origin** làm điểm tiếp xúc khi snap.
* Điều chỉnh vị trí Object Origin bằng hai phương pháp khác nhau.
* Đặt các ngôi nhà chính xác lên bề mặt nền đá.
* Hiểu tác dụng của **Align Rotation to Target**.
* Sử dụng **Face Project** khi snap nhiều đối tượng cùng lúc.
* Làm việc với nhiều object trong Edit Mode.
* Bật và tắt nhanh Snapping bằng phím tắt.

---

## 2. Chuẩn bị scene

Trước khi thực hành Snapping, bài học thực hiện một số thao tác sắp xếp scene.

### 2.1. Chuyển về Object Mode

Nếu đang ở Edit Mode, nhấn:

```text
Tab
```

để trở về **Object Mode**.

Snapping các object lên bề mặt khác thường được thực hiện trong Object Mode.

---

### 2.2. Thu gọn giao diện

Có thể điều chỉnh kích thước của **Outliner** để dành thêm không gian cho 3D Viewport.

Timeline ở phía dưới chưa cần thiết trong giai đoạn modeling này nên có thể xóa bằng một trong hai cách:

#### Cách 1: Join Areas

1. Nhấp chuột phải vào đường phân cách giữa hai khu vực.
2. Chọn **Join Areas**.
3. Chọn khu vực muốn giữ lại.

#### Cách 2: Kéo từ góc Editor

1. Đưa chuột vào góc của một Editor.
2. Khi con trỏ chuyển thành dấu chữ thập, nhấn và kéo sang Editor cần đóng.
3. Xác nhận hướng gộp khu vực.

---

### 2.3. Đổi tên các object

Đặt tên rõ ràng giúp quản lý scene dễ dàng hơn.

Ví dụ:

| Tên cũ      | Tên mới |
| ----------- | ------- |
| `Plane`     | `Water` |
| `Icosphere` | `Rock`  |

Để đổi tên:

1. Tìm object trong Outliner.
2. Nhấp đúp vào tên object.
3. Nhập tên mới.
4. Nhấn `Enter`.

---

## 3. Đưa các object về vị trí gần đúng

Trước khi sử dụng Snapping, nên đưa các object về kích thước và vị trí tương đối phù hợp.

### 3.1. Đặt ngọn hải đăng

1. Chọn object ngọn hải đăng.
2. Nhấn `S` để thu nhỏ.
3. Chuyển sang Top View bằng `Numpad 7`.
4. Nhấn `G` để di chuyển ngọn hải đăng đến gần đầu đảo.
5. Chuyển sang Front View bằng `Numpad 1`.
6. Di chuyển theo trục Z để nâng ngọn hải đăng lên.

Có thể để ngọn hải đăng hơi chìm vào nền đá.

Trong modeling, các object chồng lấn nhẹ với nhau là điều bình thường, miễn là kết quả cuối cùng trông tự nhiên và không xuất hiện khe hở.

---

### 3.2. Thu nhỏ toàn bộ nhóm nhà

Nếu các ngôi nhà nằm trong cùng một Collection:

1. Nhấp chuột phải vào Collection trong Outliner.
2. Chọn **Select Objects**.
3. Nhấn `S` để thu nhỏ tất cả các ngôi nhà cùng lúc.
4. Dùng `G` để đưa chúng đến gần khu vực nền đá.

```text
Collection
   ├── House 01
   ├── House 02
   ├── House 03
   └── House 04
```

Nếu có các bản sao chưa cần dùng, có thể xóa chúng và chỉ giữ lại bốn kiểu nhà chính.

---

## 4. Tổng quan về Snapping

**Snapping** là tính năng giúp một object hoặc thành phần mesh tự động bám vào một vị trí tham chiếu.

Thay vì căn chỉnh hoàn toàn bằng mắt, Snapping có thể giúp object bám vào:

* Lưới tọa độ.
* Điểm lưới.
* Vertex.
* Edge.
* Face.
* Bề mặt của object khác.

### Bật hoặc tắt Snapping

Có hai cách:

* Nhấn biểu tượng **nam châm** trên thanh Header của 3D Viewport.
* Sử dụng phím tắt:

```text
Shift + Tab
```

> Snapping rất hữu ích nhưng cũng có thể gây khó chịu nếu quên tắt, vì object sẽ tiếp tục bị hút vào các vị trí khác trong những lần di chuyển sau.

---

## 5. Increment Snapping và Grid Snapping

Mặc định, Blender thường sử dụng **Increment** làm kiểu Snapping.

### 5.1. Increment

Khi chọn **Increment**, object di chuyển theo từng bước dựa trên lưới nhưng vẫn giữ độ lệch ban đầu của nó.

Ví dụ, nếu object ban đầu không nằm chính xác trên giao điểm lưới, nó sẽ tiếp tục giữ khoảng lệch đó trong quá trình di chuyển.

```text
Vị trí ban đầu lệch lưới
        ↓
Di chuyển theo các bước đều
        ↓
Vẫn giữ độ lệch ban đầu
```

---

### 5.2. Grid

Khi chọn **Grid**, object được đưa trực tiếp đến các điểm hoặc đường lưới.

```text
Object
   ↓
Snap trực tiếp
   ↓
Giao điểm của lưới
```

### So sánh

| Chế độ        | Cách hoạt động                                     |
| ------------- | -------------------------------------------------- |
| **Increment** | Di chuyển theo bước lưới nhưng giữ độ lệch ban đầu |
| **Grid**      | Đưa object trực tiếp đến các vị trí trên lưới      |

---

## 6. Local View

Khi muốn tập trung vào một object mà không bị các object khác che khuất, có thể sử dụng **Local View**.

### Bật Local View

```text
Numpad /
```

Hoặc vào:

```text
View → Local View → Toggle Local View
```

Local View sẽ tạm thời ẩn tất cả các object không được chọn.

Nhấn `Numpad /` lần nữa để trở lại toàn bộ scene.

> Local View chỉ tạm thời cô lập object, không xóa hoặc tắt vĩnh viễn các object khác.

---

## 7. Face Snapping

Để đặt ngôi nhà lên nền đá, kiểu Snapping phù hợp nhất là **Face**.

### Thiết lập

1. Bật Snapping.
2. Mở menu cạnh biểu tượng nam châm.
3. Chọn **Face**.
4. Chọn kiểu Snap Base phù hợp, chẳng hạn **Center**.

Sau đó:

1. Chọn một ngôi nhà.
2. Nhấn `G`.
3. Di chuyển chuột lên nền đá.

Object sẽ tự động bám lên các mặt của object nền đá.

---

## 8. Vấn đề khi snap bằng tâm object

Khi sử dụng Face Snapping, ngôi nhà có thể bị chìm quá sâu hoặc nổi quá cao so với nền đá.

Nguyên nhân là điểm được dùng để snap không nằm ở vị trí tiếp xúc mong muốn.

Trong Object Mode, lựa chọn **Center** thường sử dụng vị trí **Object Origin** làm điểm tham chiếu.

```text
Object Origin quá cao
        ↓
Origin bám lên mặt đá
        ↓
Phần dưới ngôi nhà chìm vào đá
```

Để khắc phục, cần điều chỉnh Object Origin xuống gần đáy ngôi nhà.

---

## 9. Object Origin là gì?

**Object Origin** là điểm gốc của một object, thường được hiển thị bằng một chấm nhỏ màu cam hoặc vàng.

Object Origin được sử dụng cho nhiều thao tác:

* Xác định vị trí object.
* Làm tâm xoay.
* Làm tâm scale.
* Làm điểm tham chiếu khi snap.
* Làm điểm đặt modifier hoặc constraint trong một số trường hợp.

```text
             Mái nhà
               ▲
          ┌─────────┐
          │         │
          │    •    │ ← Object Origin
          │         │
          └─────────┘
              Đáy nhà
```

Trong bài học, Object Origin cần được đưa xuống gần đáy nhà, nhưng không nhất thiết nằm chính xác tại điểm thấp nhất.

Có thể đặt Origin hơi cao hơn đáy một chút để ngôi nhà chìm nhẹ vào nền đá, tránh tạo khe hở.

---

## 10. Cách 1: Di chuyển Origin bằng Affect Only Origins

Đây là cách trực tiếp để di chuyển Object Origin mà không làm thay đổi hình học của object.

### Các bước thực hiện

1. Chọn ngôi nhà.
2. Tắt Snapping bằng `Shift + Tab`.
3. Mở menu **Options** trên Header của 3D Viewport.
4. Bật:

```text
Affect Only → Origins
```

5. Chuyển sang Front View bằng `Numpad 1`.
6. Nhấn:

```text
G → Z
```

7. Kéo Object Origin xuống gần đáy ngôi nhà.
8. Nhấp chuột trái để xác nhận.
9. Tắt lại **Affect Only Origins**.

### Sơ đồ

```text
Bật Affect Only Origins
          ↓
Nhấn G → Z
          ↓
Chỉ Object Origin di chuyển
          ↓
Hình học ngôi nhà giữ nguyên
```

### Lưu ý quan trọng

Nếu quên tắt **Affect Only Origins**, khi nhấn `G`, Blender sẽ tiếp tục di chuyển Origin thay vì di chuyển toàn bộ object.

Sau khi hoàn thành, luôn kiểm tra và tắt tùy chọn này.

---

## 11. Kiểm tra Face Snapping sau khi chỉnh Origin

Sau khi đã đặt Origin gần đáy ngôi nhà:

1. Tắt **Affect Only Origins**.
2. Bật Snapping.
3. Chọn **Face**.
4. Chọn Snap Base là **Center**.
5. Chọn ngôi nhà.
6. Nhấn `G` và di chuyển lên nền đá.

Kết quả:

```text
Object Origin
      ↓
Bám vào mặt nền đá
      ↓
Đáy ngôi nhà nằm đúng vị trí
```

Nhờ Origin nằm gần đáy, ngôi nhà sẽ không còn bị chìm quá sâu vào nền đá.

---

## 12. Cách 2: Di chuyển hình học trong Edit Mode

Một cách khác để thay đổi tương quan giữa hình học và Object Origin là di chuyển toàn bộ mesh trong Edit Mode.

### Nguyên lý

Khi di chuyển vertex, edge hoặc face trong Edit Mode:

* Hình học của object thay đổi vị trí.
* Object Origin vẫn giữ nguyên.
* Khoảng cách giữa Origin và hình học thay đổi.

```text
Object Mode:
Di chuyển object → Origin và mesh cùng di chuyển

Edit Mode:
Di chuyển mesh → Origin đứng yên
```

### Các bước thực hiện

1. Chọn ngôi nhà.
2. Nhấn `Tab` để vào Edit Mode.
3. Chuyển sang Wireframe nếu cần:

```text
Z → Wireframe
```

4. Nhấn `A` để chọn toàn bộ mesh.
5. Tắt Proportional Editing nếu đang bật bằng phím `O`.
6. Tắt Snapping để tránh mesh bị hút ngoài ý muốn.
7. Nhấn:

```text
G → Z
```

8. Di chuyển toàn bộ hình học lên trên.
9. Giữ Object Origin ở gần đáy ngôi nhà.
10. Nhấn `Tab` để trở lại Object Mode.

### Sơ đồ

```text
Trước khi chỉnh:

        • Origin
    ┌────────────┐
    │    Nhà     │
    └────────────┘


Trong Edit Mode, di chuyển mesh lên:

    ┌────────────┐
    │    Nhà     │
    └────────────┘
        • Origin
```

Sau thao tác này, Origin nằm thấp hơn so với hình học và có thể dùng làm điểm snap xuống nền đá.

---

## 13. Chỉnh nhiều object trong Edit Mode

Blender cho phép chỉnh sửa nhiều object cùng loại trong Edit Mode.

Ví dụ, có thể chọn hai hoặc ba ngôi nhà rồi thay đổi vị trí hình học của chúng cùng lúc.

### Các bước thực hiện

1. Trong Object Mode, giữ `Shift`.
2. Chọn nhiều object.
3. Nhấn `Tab` để vào Edit Mode.
4. Nhấn `A` để chọn toàn bộ hình học.
5. Nhấn:

```text
G → Z
```

6. Di chuyển toàn bộ mesh lên trên.
7. Nhấn `Tab` để thoát Edit Mode.

Điều này giúp điều chỉnh Object Origin tương đối của nhiều object cùng lúc.

### Active Object

Khi chọn nhiều object, object được chọn cuối cùng là **Active Object**.

Active Object thường có viền màu sáng hơn các object còn lại.

```text
Object được chọn trước  → Selected Object
Object được chọn cuối   → Active Object
```

Việc xác định Active Object có thể ảnh hưởng đến một số thao tác trong Blender.

---

## 14. Chuẩn bị bề mặt nền đá

Nếu mặt trên của nền đá quá dốc, các ngôi nhà có thể khó đứng đúng vị trí.

Có thể chỉnh sửa nền đá để tạo một vài khu vực tương đối bằng phẳng.

### Quy trình

1. Chọn object `Rock`.
2. Tắt Snapping.
3. Nhấn `Tab` để vào Edit Mode.
4. Chọn các vertex hoặc face ở khu vực đặt nhà.
5. Dùng `G` để nâng, hạ hoặc làm phẳng bề mặt.
6. Nhấn `Tab` để trở lại Object Mode.
7. Bật lại Snapping.

```text
Mặt đá quá dốc
      ↓
Chỉnh vertex trong Edit Mode
      ↓
Tạo khu vực bằng hơn
      ↓
Đặt nhà ổn định hơn
```

---

## 15. Align Rotation to Target

Trong thiết lập Face Snapping có tùy chọn:

```text
Align Rotation to Target
```

Khi bật tùy chọn này, object không chỉ bám vào bề mặt mà còn tự động xoay theo hướng của mặt đích.

Hướng của mặt được xác định bằng **Normal**.

### Khi bật

```text
Mặt đá nghiêng
      ↓
Object bám lên mặt
      ↓
Object tự xoay theo hướng Normal
```

Tính năng này hữu ích khi:

* Đặt cây lên địa hình.
* Đặt đá lên sườn dốc.
* Gắn đinh hoặc vật thể lên một bề mặt.
* Phân bố object trên địa hình không bằng phẳng.

Tuy nhiên, với các ngôi nhà, việc tự động nghiêng theo mặt đá thường không mong muốn.

Vì vậy, trong bài thực hành này nên tắt **Align Rotation to Target** để các ngôi nhà vẫn đứng thẳng.

---

## 16. Face Project và Project Individual Elements

Khi chọn nhiều object và sử dụng Face Snapping, Blender có thể xử lý chúng theo hai cách.

### Cách thông thường

Nếu di chuyển nhiều object cùng lúc mà không bật Project Individual Elements:

* Cả nhóm giữ nguyên khoảng cách tương đối.
* Nhóm được di chuyển như một khối.
* Không phải object nào cũng tiếp xúc trực tiếp với bề mặt.

```text
Nhà A ─── Nhà B ─── Nhà C
          ↓
Di chuyển như một nhóm
          ↓
Khoảng cách tương đối được giữ nguyên
```

---

### Face Project hoặc Project Individual Elements

Khi bật tùy chọn chiếu từng phần tử:

* Mỗi object được tính toán riêng.
* Mỗi object bám vào mặt gần nhất.
* Các object có thể nằm ở độ cao khác nhau theo địa hình.

```text
Nhà A      Nhà B      Nhà C
  ↓          ↓          ↓
Mặt đá A   Mặt đá B   Mặt đá C
```

Tùy chọn này hữu ích khi đặt nhiều object cùng lúc trên bề mặt không bằng phẳng.

Ví dụ:

* Nhiều ngôi nhà trên nền đá.
* Nhiều cây trên địa hình.
* Nhiều viên đá trên mặt đất.
* Nhiều vật trang trí trên một bề mặt cong.

> Tên và vị trí chính xác của tùy chọn có thể khác nhau giữa các phiên bản Blender, nhưng nguyên tắc là chiếu từng object hoặc từng phần tử riêng biệt lên bề mặt đích.

---

## 17. Quy trình hoàn chỉnh để đặt nhà lên nền đá

```text
Chuẩn bị các ngôi nhà
        ↓
Xóa các bản sao chưa cần thiết
        ↓
Thu nhỏ và đặt gần nền đá
        ↓
Chỉnh Object Origin xuống gần đáy nhà
        ↓
Bật Snapping
        ↓
Chọn Face
        ↓
Chọn Snap Base: Center
        ↓
Tắt Align Rotation to Target
        ↓
Nhấn G và đặt nhà lên nền đá
        ↓
Bật Face Project nếu di chuyển nhiều nhà
```

### Các bước cụ thể

1. Giữ lại bốn kiểu nhà chính.
2. Thu nhỏ chúng về kích thước phù hợp.
3. Đặt các nhà gần nền đá.
4. Điều chỉnh Object Origin của từng nhà.
5. Bật Snapping bằng `Shift + Tab`.
6. Chọn **Face**.
7. Chọn **Center** làm điểm snap.
8. Tắt **Align Rotation to Target**.
9. Chọn từng ngôi nhà và nhấn `G`.
10. Di chuyển nhà lên bề mặt nền đá.
11. Để phần chân nhà chìm nhẹ vào đá.
12. Nếu đặt nhiều nhà cùng lúc, bật **Face Project** hoặc **Project Individual Elements**.
13. Chỉnh lại nền đá nếu khu vực đặt nhà quá dốc.
14. Lưu file Blender.

---

## 18. Hai phương pháp điều chỉnh Object Origin

| Phương pháp                        | Cách hoạt động                       | Ưu điểm                                                 | Lưu ý                                                    |
| ---------------------------------- | ------------------------------------ | ------------------------------------------------------- | -------------------------------------------------------- |
| **Affect Only Origins**            | Di chuyển trực tiếp Object Origin    | Nhanh, trực quan                                        | Phải nhớ tắt sau khi dùng                                |
| **Di chuyển mesh trong Edit Mode** | Mesh di chuyển nhưng Origin đứng yên | Giúp hiểu rõ sự khác nhau giữa Object Mode và Edit Mode | Có thể làm thay đổi vị trí hình học so với tọa độ object |

### Nên dùng phương pháp nào?

* Dùng **Affect Only Origins** khi chỉ muốn thay đổi Origin nhanh chóng.
* Dùng **Edit Mode** khi muốn điều chỉnh hình học tương đối với Origin hoặc chỉnh nhiều object cùng lúc.

---

## 19. Phím tắt và công cụ liên quan

| Thao tác                     | Phím tắt hoặc vị trí              |
| ---------------------------- | --------------------------------- |
| Chuyển Object Mode/Edit Mode | `Tab`                             |
| Bật hoặc tắt Snapping        | `Shift + Tab`                     |
| Di chuyển                    | `G`                               |
| Di chuyển theo trục Z        | `G`, sau đó `Z`                   |
| Scale                        | `S`                               |
| Chọn toàn bộ mesh            | `A`                               |
| Front View                   | `Numpad 1`                        |
| Top View                     | `Numpad 7`                        |
| Local View                   | `Numpad /`                        |
| Mở Shading Pie               | `Z`                               |
| Bật/tắt Proportional Editing | `O`                               |
| Bật Affect Only Origins      | `Options → Affect Only → Origins` |
| Chọn Face Snapping           | Menu cạnh biểu tượng nam châm     |
| Hủy thao tác đang thực hiện  | Chuột phải hoặc `Esc`             |
| Hoàn tác                     | `Ctrl + Z`                        |

---

## 20. Lưu ý quan trọng

### 20.1. Tắt Snapping khi chỉnh Origin

Nếu Snapping vẫn bật trong lúc di chuyển Object Origin hoặc hình học, điểm đang di chuyển có thể bị hút vào các bề mặt khác.

Nên tắt Snapping trước bằng:

```text
Shift + Tab
```

---

### 20.2. Tắt Affect Only Origins sau khi sử dụng

Nếu tùy chọn này vẫn bật, thao tác `G`, `R` hoặc `S` có thể chỉ ảnh hưởng đến Origin thay vì object.

---

### 20.3. Kiểm tra Proportional Editing

Nếu khi di chuyển xuất hiện một vòng tròn lớn, Proportional Editing đang được bật.

Nhấn:

```text
O
```

để tắt.

---

### 20.4. Object có thể chìm nhẹ vào nền đá

Không cần đặt đáy nhà chính xác tuyệt đối lên bề mặt.

Cho phần chân nhà chìm nhẹ vào đá giúp:

* Tránh khe hở.
* Tạo cảm giác vững chắc.
* Che các sai lệch nhỏ của địa hình.
* Làm scene tự nhiên hơn.

---

### 20.5. Mặt đá quá dốc

Nếu ngôi nhà không đứng hợp lý:

* Chỉnh lại nền đá trong Edit Mode.
* Di chuyển nhà sang khu vực bằng hơn.
* Tắt Align Rotation to Target.
* Điều chỉnh Origin cao hoặc thấp hơn một chút.

---

### 20.6. Kiểm tra Active Object khi chọn nhiều object

Khi vào Multi-Object Edit Mode, cần kiểm tra object nào đang là Active Object để tránh chọn hoặc chỉnh sửa nhầm.

---

## 21. Lỗi thường gặp

| Lỗi                                   | Nguyên nhân                       | Cách khắc phục                                    |
| ------------------------------------- | --------------------------------- | ------------------------------------------------- |
| Nhà bị chìm quá sâu vào đá            | Origin nằm ở giữa object          | Di chuyển Origin xuống gần đáy                    |
| Nhà nằm lơ lửng trên đá               | Origin nằm thấp hơn đáy quá nhiều | Đưa Origin lên cao hơn một chút                   |
| Nhà bị nghiêng theo mặt đá            | Align Rotation to Target đang bật | Tắt tùy chọn này                                  |
| Chỉ Origin di chuyển khi nhấn `G`     | Affect Only Origins chưa tắt      | Tắt trong menu Options                            |
| Xuất hiện vòng tròn lớn khi di chuyển | Proportional Editing đang bật     | Nhấn `O`                                          |
| Object bị hút ngoài ý muốn            | Snapping vẫn đang bật             | Nhấn `Shift + Tab`                                |
| Nhiều nhà không cùng chạm mặt đá      | Đang di chuyển chúng như một nhóm | Bật Face Project hoặc Project Individual Elements |
| Không nhìn thấy các object khác       | Đang ở Local View                 | Nhấn `Numpad /`                                   |
| Nhà khó đặt trên nền                  | Bề mặt đá quá dốc                 | Chỉnh địa hình trong Edit Mode                    |

---

## 22. Bài tập thực hành

### Bài tập chính

Đặt bốn ngôi nhà lên bề mặt nền đá bằng Face Snapping.

Yêu cầu:

* Mỗi nhà tiếp xúc hợp lý với nền đá.
* Nhà không bị chìm quá sâu.
* Nhà không nằm lơ lửng.
* Nhà giữ phương thẳng đứng.
* Các nhà có thể chồng lấn nhẹ với nền đá.
* Vị trí các nhà tạo thành một khu dân cư hợp lý.

### Bài tập mở rộng

1. Chọn tất cả các ngôi nhà.
2. Bật Face Project hoặc Project Individual Elements.
3. Di chuyển cả nhóm qua nhiều vị trí khác nhau trên nền đá.
4. Quan sát cách từng ngôi nhà bám vào các mặt khác nhau.
5. Bật thử Align Rotation to Target.
6. So sánh kết quả trước và sau khi bật.
7. Tắt tùy chọn này và đưa nhà trở lại phương thẳng đứng.

---

## 23. Checklist thực hành

* [ ] Đã chuyển về Object Mode trước khi sắp xếp scene.
* [ ] Đã đổi tên `Plane` thành `Water`.
* [ ] Đã đổi tên `Icosphere` thành `Rock`.
* [ ] Đã thu nhỏ ngọn hải đăng và các ngôi nhà.
* [ ] Đã xóa các bản sao nhà chưa cần thiết.
* [ ] Đã thử Increment Snapping.
* [ ] Đã thử Grid Snapping.
* [ ] Đã sử dụng Local View.
* [ ] Đã chọn Face Snapping.
* [ ] Đã chọn Center làm điểm snap.
* [ ] Đã điều chỉnh Object Origin bằng Affect Only Origins.
* [ ] Đã điều chỉnh tương quan Origin bằng Edit Mode.
* [ ] Đã thử chỉnh nhiều object trong Edit Mode.
* [ ] Đã tắt Proportional Editing khi không cần.
* [ ] Đã tạo bề mặt đủ phẳng trên nền đá.
* [ ] Đã thử Align Rotation to Target.
* [ ] Đã thử Face Project với nhiều object.
* [ ] Đã đặt các ngôi nhà lên nền đá.
* [ ] Đã tắt Snapping sau khi hoàn thành.
* [ ] Đã lưu file Blender.

---

## 24. Tóm tắt

Snapping là công cụ quan trọng giúp căn chỉnh object chính xác trong Blender. Trong bài học này, Face Snapping được sử dụng để đặt các ngôi nhà lên bề mặt nền đá.

Điểm quan trọng nhất là vị trí của **Object Origin**. Khi Snap Base được đặt thành Center, Origin trở thành điểm tiếp xúc với bề mặt đích. Vì vậy, Origin cần được đặt gần đáy ngôi nhà để object nằm đúng trên nền đá.

Có hai cách chính để thay đổi vị trí tương đối của Origin:

1. Bật **Affect Only Origins** và di chuyển trực tiếp Origin.
2. Vào Edit Mode và di chuyển hình học trong khi Origin giữ nguyên.

Ngoài ra:

* **Align Rotation to Target** giúp object xoay theo hướng bề mặt.
* **Face Project** giúp từng object trong một nhóm bám riêng vào bề mặt.
* `Shift + Tab` giúp bật hoặc tắt Snapping nhanh chóng.
* Việc cho object chìm nhẹ vào nhau là kỹ thuật phổ biến để tránh khe hở trong model.

Nắm vững Snapping và Object Origin sẽ giúp quá trình bố trí, lắp ráp và modeling scene nhanh hơn, chính xác hơn và ít phụ thuộc vào việc căn chỉnh bằng mắt.

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
