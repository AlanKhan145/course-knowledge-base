# 068 — Điều chỉnh Scene và Animation

## Scene and Animation Adjustments

| Thuộc tính        | Nội dung                                                                       |
| ----------------- | ------------------------------------------------------------------------------ |
| **Module**        | Module 04 — UV Mapping                                                         |
| **Bài học**       | Scene and Animation Adjustments                                                |
| **Thời lượng**    | 6:06                                                                           |
| **Chủ đề chính**  | Hoàn thiện bối cảnh và kéo dài animation máy bay                               |
| **Phần mềm**      | Blender                                                                        |
| **Kỹ năng chính** | Duplicate object, đặt Origin, thay texture, chỉnh UV, HDRI, camera và keyframe |

---

## 1. Mục tiêu bài học

Sau bài học này, anh có thể:

* Xây dựng một bối cảnh thành phố đơn giản từ các mô hình có sẵn.
* Thay đổi chiều cao công trình bằng cách đặt **Origin** ở đáy object.
* Tạo nhiều biến thể công trình bằng cách:

  * Nhân bản object.
  * Thay đổi kích thước.
  * Thay material và texture.
  * Điều chỉnh UV của mặt trước.
* Tạo đường phố bằng texture có khả năng lặp lại.
* Sử dụng **HDRI** để tạo ánh sáng và môi trường cho scene.
* Bố trí camera, nhà cửa, thùng gỗ và máy bay thành một cảnh hoàn chỉnh.
* Kéo dài animation từ khoảng **2 giây lên 4 giây**.
* Đồng bộ thời lượng chuyển động của máy bay và cánh quạt.

---

## 2. Thử thách đầu bài

Giảng viên đưa ra thử thách:

> Tạo một scene tương tự cảnh mẫu, trong đó máy bay bay qua một khu phố có nhiều công trình và vật thể trang trí.

Anh có thể tự thực hiện trước khi xem phần hướng dẫn.

Các tài nguyên cần chuẩn bị:

* Mô hình máy bay đã hoàn thiện.
* Một hoặc nhiều mô hình tòa nhà.
* Các thùng gỗ hoặc vật thể trang trí.
* Texture mặt tiền công trình.
* Texture mặt đường.
* Một ảnh môi trường HDRI.

---

## 3. Tổng quan quy trình

```text
Mô hình tòa nhà gốc
        │
        ▼
Đặt Origin tại đáy
        │
        ▼
Nhân bản và thay đổi chiều cao
        │
        ▼
Tạo các material khác nhau
        │
        ▼
Điều chỉnh UV mặt trước
        │
        ▼
Nhân bản thành nhiều dãy nhà
        │
        ▼
Thêm mặt đường và HDRI
        │
        ▼
Bố trí camera và toàn bộ scene
        │
        ▼
Kéo dài animation đến frame 100
        │
        ▼
Đồng bộ máy bay và cánh quạt
```

---

# 4. Xây dựng các tòa nhà

## 4.1. Đưa Origin xuống đáy tòa nhà

Khi Origin nằm ở giữa object, việc scale theo trục `Z` sẽ làm tòa nhà cao lên và thấp xuống theo cả hai hướng.

Để tòa nhà luôn đứng trên mặt đất khi thay đổi chiều cao, cần đưa Origin xuống mặt đáy.

### Các bước thực hiện

1. Chọn tòa nhà.
2. Nhấn `Tab` để vào **Edit Mode**.
3. Chọn mặt đáy của tòa nhà.
4. Nhấn:

```text
Shift + S
```

5. Chọn:

```text
Cursor to Selected
```

3D Cursor sẽ được đặt vào tâm mặt đáy.

6. Quay lại **Object Mode**.
7. Nhấp chuột phải vào object.
8. Chọn:

```text
Set Origin → Origin to 3D Cursor
```

Bây giờ Origin đã nằm ở đáy tòa nhà.

---

## 4.2. Thay đổi chiều cao tòa nhà

Sau khi Origin được đặt ở đáy, có thể thay đổi chiều cao bằng:

```text
S → Z
```

Ví dụ:

```text
S → Z → kéo chuột
```

Tòa nhà sẽ cao lên hoặc thấp xuống nhưng phần đáy vẫn giữ nguyên vị trí trên mặt đường.

### Minh họa

```text
Origin ở giữa                  Origin ở đáy

      ▲                             ▲
   ┌─────┐                       ┌─────┐
   │  •  │                       │     │
   │     │        →              │     │
   └─────┘                       └──•──┘
      ▼
Scale hai hướng                Scale lên phía trên
```

---

## 4.3. Nhân bản các công trình

Chọn tòa nhà và nhấn:

```text
Shift + D
```

Sau đó di chuyển bản sao sang vị trí mới.

Tiếp tục:

* Scale theo trục `Z` để tạo các chiều cao khác nhau.
* Scale theo trục `X` hoặc `Y` nếu muốn thay đổi chiều rộng và chiều sâu.
* Xoay hoặc di chuyển nhẹ để tránh cảm giác lặp lại máy móc.

Không cần tạo quá nhiều mô hình hoàn toàn mới. Chỉ cần khoảng ba biến thể tòa nhà rồi tái sử dụng chúng trong toàn bộ scene.

---

# 5. Tạo material và texture khác nhau

## 5.1. Tạo material riêng cho bản sao

Nếu một tòa nhà đang dùng chung material với tòa nhà gốc, việc chỉnh sửa texture có thể làm thay đổi tất cả object cùng sử dụng material đó.

Để tạo material độc lập:

1. Chọn tòa nhà cần chỉnh sửa.
2. Mở **Material Properties**.
3. Nhấn nút tạo bản sao material hoặc **New Material**.
4. Đặt tên rõ ràng, ví dụ:

```text
Building_01
Building_02
Building_03
```

Việc đặt tên giúp quản lý scene dễ dàng hơn khi số lượng object và material tăng lên.

---

## 5.2. Thay texture mặt tiền

Mỗi biến thể công trình có thể sử dụng một texture mặt tiền khác nhau.

Quy trình cơ bản:

```text
Image Texture
      │
      ▼
Principled BSDF — Base Color
      │
      ▼
Material Output
```

Sau khi thay texture, cần kiểm tra UV để cửa ra vào và cửa sổ nằm đúng vị trí trên mặt trước của công trình.

---

## 5.3. Điều chỉnh UV mặt trước

Chuyển sang workspace **UV Editing**.

1. Chọn tòa nhà.
2. Vào **Edit Mode**.
3. Chọn mặt trước.
4. Trong UV Editor, di chuyển và scale UV sao cho:

   * Cửa chính nằm gần mặt đất.
   * Cửa sổ nằm đúng chiều cao.
   * Texture không bị méo hoặc cắt ở vị trí không hợp lý.

Trong scene này, camera chủ yếu nhìn vào mặt trước của các tòa nhà. Vì vậy, giảng viên không dành nhiều thời gian chỉnh UV cho các mặt bên ít xuất hiện trong khung hình.

> Đây là một phương pháp tối ưu thời gian: tập trung chất lượng vào những phần camera thực sự nhìn thấy.

---

## 5.4. Liên kết dữ liệu giữa các object

Có thể áp dụng material hoặc dữ liệu từ một object sang object khác bằng:

```text
Ctrl + L
```

Ví dụ:

1. Chọn object cần nhận material.
2. Chọn object nguồn sau cùng để nó trở thành **Active Object**.
3. Nhấn `Ctrl + L`.
4. Chọn loại dữ liệu cần liên kết, chẳng hạn:

```text
Link Materials
```

Cách này giúp nhanh chóng tạo nhiều tòa nhà cùng kiểu.

---

# 6. Tạo sự đa dạng cho khu phố

Không nhất thiết mỗi công trình phải có một texture riêng biệt.

Có thể tạo cảm giác đa dạng bằng cách:

* Dùng những vùng khác nhau của cùng một texture.
* Thay đổi chiều cao tòa nhà.
* Thay đổi chiều rộng hoặc chiều sâu.
* Đảo vị trí các công trình.
* Nhân bản một vài mẫu nhà đã hoàn thiện.
* Sắp xếp nhà thành hai bên đường.
* Tạo đường phố hơi cong hoặc lệch thay vì hoàn toàn thẳng.

Một texture có thể tạo ra nhiều biến thể khi phần UV của mặt trước được đặt ở những vùng khác nhau.

```text
Một texture lớn
 ├── Vùng A → Building 01
 ├── Vùng B → Building 02
 └── Vùng C → Building 03
```

---

# 7. Bố trí thùng gỗ và vật thể trang trí

Các thùng gỗ được đưa ra phía trước hoặc đặt gần các tòa nhà để:

* Tạo cảm giác khu phố có người sử dụng.
* Phá vỡ các khoảng trống lớn.
* Tạo thêm chiều sâu cho cảnh.
* Làm cho bố cục bớt đơn điệu.

Có thể nhân bản thùng bằng:

```text
Shift + D
```

Sau đó thay đổi:

* Vị trí.
* Góc xoay.
* Kích thước.
* Số lượng trong từng nhóm.

Nếu có thêm mô hình thùng hàng hoặc crate, anh cũng có thể đưa chúng vào scene.

---

# 8. Tạo mặt đường

## 8.1. Thay màu nền tạm thời

Ban đầu, mặt sàn quá trắng và không phù hợp với cảnh.

Có thể đổi **Base Color** sang màu xám để kiểm tra nhanh bố cục.

Tuy nhiên, một màu phẳng vẫn chưa tạo được cảm giác của mặt đường thật, vì vậy giảng viên tiếp tục sử dụng image texture.

---

## 8.2. Gán texture mặt đường

Quy trình:

1. Chọn mặt sàn.
2. Vào **Edit Mode**.
3. Nhấn `U`.
4. Chọn phương pháp unwrap phù hợp.
5. Tạo material mới.
6. Thêm node **Image Texture**.
7. Kết nối `Color` vào `Base Color` của Principled BSDF.
8. Mở texture mặt đường.

```text
Image Texture
      │ Color
      ▼
Principled BSDF
      │
      ▼
Material Output
```

---

## 8.3. Lặp lại texture bằng UV

Nếu texture bị kéo giãn, cần scale UV lớn hơn.

Khi UV vượt ra ngoài vùng ảnh từ `0–1`, texture sẽ được lặp lại nếu Image Texture đang sử dụng chế độ **Repeat**.

```text
UV nhỏ
┌──────────────┐
│  Texture bị  │
│   kéo giãn   │
└──────────────┘

UV được phóng lớn
┌───┬───┬───┬───┐
│ A │ A │ A │ A │
├───┼───┼───┼───┤
│ A │ A │ A │ A │
└───┴───┴───┴───┘
```

Một texture **seamless** sẽ lặp lại mà không xuất hiện đường nối rõ ràng giữa các ô.

---

# 9. Thiết lập môi trường bằng HDRI

## 9.1. Chuyển sang World Shader

Mở workspace **Shading**, sau đó chuyển Shader Editor từ:

```text
Object
```

sang:

```text
World
```

---

## 9.2. Tạo node HDRI

Khi đang ở World Shader, nhấn:

```text
Ctrl + T
```

Nếu **Node Wrangler** đang được bật, Blender sẽ tự động tạo các node cần thiết cho HDRI.

Cấu trúc node thường là:

```text
Texture Coordinate
        │
        ▼
Mapping
        │
        ▼
Environment Texture
        │
        ▼
Background
        │
        ▼
World Output
```

Sau đó mở một file HDRI, chẳng hạn môi trường ngoài trời từ Poly Haven.

---

## 9.3. Điều chỉnh độ sáng môi trường

HDRI đầu tiên có thể quá sáng so với scene.

Có hai cách xử lý:

* Chọn một HDRI có ánh sáng dịu hơn.
* Giảm giá trị **Strength** của node Background.

Sau khi HDRI cung cấp đủ ánh sáng, giảng viên xóa nguồn sáng mặc định trong scene.

> Không bắt buộc phải xóa toàn bộ đèn khi sử dụng HDRI. Trong các scene khác, anh vẫn có thể kết hợp HDRI với Area Light, Sun Light hoặc các đèn bổ sung.

---

## 9.4. Screen Space Reflections

Giảng viên thử bật **Screen Space Reflections** để kiểm tra xem hiệu ứng phản chiếu có cải thiện scene hay không.

Tính năng này chủ yếu có ý nghĩa khi sử dụng Eevee và trong scene có:

* Bề mặt phản chiếu.
* Kim loại.
* Mặt đường ướt.
* Cửa kính.
* Vũng nước hoặc các vật liệu bóng.

Nếu scene không có các bề mặt trên, sự khác biệt có thể không rõ ràng.

---

# 10. Bố trí khu phố

Giảng viên nhân bản các tòa nhà sang phía đối diện để tạo hai dãy nhà.

Thay vì một con đường hoàn toàn thẳng, các công trình được bố trí thành một khu phố hơi uốn lượn, giống đường phố trong một thị trấn cổ.

### Bố cục gợi ý

```text
Dãy nhà bên trái                Dãy nhà bên phải

┌──────┐                              ┌───────┐
│ Nhà A│                              │ Nhà D │
└──────┘       ╲              ╱       └───────┘
                ╲            ╱
┌────────┐       ╲  Đường   ╱       ┌─────┐
│ Nhà B  │        ╲ phố    ╱        │Nhà E│
└────────┘         ╲      ╱         └─────┘
                    ╲    ╱
┌─────┐              ╲  ╱          ┌────────┐
│Nhà C│               ╲╱           │ Nhà F  │
└─────┘                              └────────┘
```

Sau đó, toàn bộ khu phố được di chuyển sang vị trí phù hợp với đường bay của máy bay.

---

## 10.1. Vì sao di chuyển khu phố thay vì máy bay?

Máy bay đã có animation.

Nếu di chuyển trực tiếp máy bay, anh có thể:

* Làm thay đổi vị trí tại keyframe hiện tại.
* Vô tình tạo hoặc sửa keyframe.
* Làm lệch đường bay đã thiết lập.
* Phải chỉnh lại toàn bộ animation.

Do đó, trong trường hợp này, di chuyển các object tĩnh của khu phố thường đơn giản và an toàn hơn.

```text
Máy bay có keyframe
        │
        ├── Không nên thay đổi tùy tiện
        │
        ▼
Di chuyển khu phố tĩnh để khớp đường bay
```

---

# 11. Điều chỉnh camera

Chuyển sang workspace **Animation** để dễ dàng quan sát:

* Camera View.
* Góc nhìn phối cảnh.
* Timeline.
* Chuyển động của máy bay.

Các bước:

1. Đưa camera đến vị trí có thể nhìn thấy toàn bộ khu phố.
2. Kiểm tra máy bay có đi qua vùng trung tâm khung hình hay không.
3. Điều chỉnh độ cao và góc nghiêng của camera.
4. Play animation để kiểm tra bố cục chuyển động.
5. Di chuyển các tòa nhà hoặc vật thể nếu chúng che mất máy bay.

Một góc camera tốt cần đảm bảo:

* Nhìn thấy đường phố và các tòa nhà.
* Máy bay có đủ khoảng trống để xuất hiện từ xa.
* Máy bay không rời khỏi khung hình quá sớm.
* Các vật thể tiền cảnh không che hoàn toàn chủ thể chính.

---

# 12. Kéo dài animation

## 12.1. Đưa máy bay ra xa hơn ở frame đầu

Tại frame đầu tiên:

1. Chọn **Plane Controller**.
2. Di chuyển máy bay lùi xa theo trục `Y`:

```text
G → Y
```

Máy bay được đưa ra ngoài khung hình để có thể bay vào từ khoảng cách xa.

3. Nhấn:

```text
I
```

4. Chèn keyframe cho:

```text
Location & Rotation
```

Điều này cập nhật keyframe đầu tiên với vị trí mới.

---

## 12.2. Tăng thời lượng lên 100 frame

Animation ban đầu kết thúc ở khoảng frame `50`.

Để kéo dài animation lên khoảng 4 giây:

```text
End Frame: 100
```

Điều này tương ứng với:

```text
100 frame ÷ 25 FPS = 4 giây
```

> Thời lượng 4 giây chỉ đúng khi scene đang sử dụng 25 FPS.

---

## 12.3. Di chuyển keyframe cuối của máy bay

Vẫn chọn Plane Controller.

1. Tìm keyframe kết thúc cũ tại frame `50`.
2. Chọn keyframe đó trên Timeline hoặc Dope Sheet.
3. Nhấn:

```text
G
```

4. Di chuyển keyframe đến frame:

```text
100
```

Kết quả:

```text
Trước:
Frame 1 ───────── Frame 50

Sau:
Frame 1 ───────────────────────── Frame 100
```

Khoảng cách giữa hai keyframe tăng lên, vì vậy máy bay cần nhiều thời gian hơn để hoàn thành đường bay.

---

# 13. Đồng bộ animation cánh quạt

Sau khi kéo dài chuyển động máy bay, cánh quạt vẫn dừng ở frame `50`.

Nguyên nhân là animation của cánh quạt có bộ keyframe riêng.

### Cách sửa

1. Chọn **Propeller Controller**.
2. Xác định keyframe quay cuối cùng.
3. Chọn keyframe ở frame `50`.
4. Nhấn:

```text
G
```

5. Di chuyển keyframe đến frame `100`.

Bây giờ animation của máy bay và cánh quạt có cùng thời lượng.

```text
Plane Controller:
Frame 1 ───────────────── Frame 100

Propeller Controller:
Frame 1 ───────────────── Frame 100
```

Nếu chỉ kéo dài máy bay mà không kéo dài cánh quạt:

```text
Frame 1–50    : Máy bay bay, cánh quạt quay
Frame 51–100  : Máy bay vẫn bay, cánh quạt đã dừng
```

Điều này khiến animation trông thiếu tự nhiên.

---

# 14. Phím tắt và công cụ quan trọng

| Phím tắt hoặc công cụ      | Chức năng                                   |
| -------------------------- | ------------------------------------------- |
| `Tab`                      | Chuyển đổi Object Mode và Edit Mode         |
| `Shift + S`                | Mở Snap Menu                                |
| `Cursor to Selected`       | Đưa 3D Cursor đến vùng đang chọn            |
| `Right Click → Set Origin` | Thay đổi Origin của object                  |
| `Shift + D`                | Nhân bản object                             |
| `S`, sau đó `Z`            | Scale theo chiều cao                        |
| `G`, sau đó `Y`            | Di chuyển theo trục Y                       |
| `Ctrl + L`                 | Liên kết dữ liệu giữa các object            |
| `U`                        | Mở UV Mapping Menu                          |
| `Ctrl + T`                 | Tạo node texture tự động bằng Node Wrangler |
| `I`                        | Chèn keyframe                               |
| `G` trên Timeline          | Di chuyển keyframe theo thời gian           |
| `Numpad 0`                 | Chuyển sang Camera View                     |
| `Spacebar`                 | Phát hoặc tạm dừng animation                |

---

# 15. Lỗi thường gặp

## 15.1. Scale tòa nhà làm object chìm xuống đất

**Nguyên nhân:** Origin vẫn nằm ở giữa object.

**Cách khắc phục:** Đưa 3D Cursor xuống mặt đáy rồi dùng:

```text
Set Origin → Origin to 3D Cursor
```

---

## 15.2. Thay texture của một nhà nhưng các nhà khác cũng thay đổi

**Nguyên nhân:** Các object đang dùng chung một material.

**Cách khắc phục:** Tạo bản sao material trước khi chỉnh sửa texture.

---

## 15.3. Cửa và cửa sổ nằm sai vị trí

**Nguyên nhân:** UV của mặt trước chưa được căn đúng với texture.

**Cách khắc phục:** Chọn riêng mặt trước và điều chỉnh UV trong UV Editor.

---

## 15.4. Texture mặt đường bị kéo giãn

**Nguyên nhân:** UV chỉ bao phủ một vùng nhỏ trong không gian UV.

**Cách khắc phục:** Scale UV lớn hơn để texture lặp lại nhiều lần.

---

## 15.5. Xuất hiện đường nối trên mặt đường

**Nguyên nhân:** Texture không phải texture seamless.

**Cách khắc phục:** Sử dụng texture có khả năng lặp liên tục hoặc chỉnh sửa texture để các cạnh khớp nhau.

---

## 15.6. HDRI làm scene quá sáng

**Cách khắc phục:**

* Giảm `Background Strength`.
* Chọn HDRI tối hơn.
* Điều chỉnh Color Management hoặc Exposure nếu cần.

---

## 15.7. Cánh quạt dừng trước khi máy bay kết thúc chuyển động

**Nguyên nhân:** Chỉ keyframe của Plane Controller được kéo dài.

**Cách khắc phục:** Di chuyển keyframe cuối của Propeller Controller đến cùng frame kết thúc.

---

## 15.8. Thay đổi vị trí máy bay làm hỏng đường bay

**Nguyên nhân:** Di chuyển máy bay ở một frame không phù hợp hoặc quên cập nhật keyframe.

**Cách khắc phục:**

* Kiểm tra frame hiện tại trước khi di chuyển.
* Chọn đúng controller.
* Cập nhật keyframe bằng `I`.
* Khi có thể, di chuyển các object tĩnh thay vì di chuyển máy bay đã được animate.

---

# 16. Bài tập thực hành

Hãy hoàn thiện scene của anh với các yêu cầu sau:

1. Tạo ít nhất hai dãy nhà.
2. Sử dụng khoảng ba mẫu công trình rồi nhân bản chúng.
3. Tạo sự đa dạng bằng cách thay đổi:

   * Chiều cao.
   * Chiều rộng.
   * Texture.
   * Vị trí UV.
4. Thêm thùng gỗ hoặc vật thể trang trí.
5. Tạo mặt đường bằng seamless texture.
6. Thêm HDRI cho môi trường.
7. Thử ít nhất hai góc camera khác nhau.
8. Đưa máy bay ra xa hơn ở frame đầu.
9. Kéo dài animation từ frame `50` đến frame `100`.
10. Kéo dài animation cánh quạt đến cùng frame kết thúc.
11. Phát lại toàn bộ animation để kiểm tra.
12. Lưu file trước khi chuyển sang bài tiếp theo.

---

# 17. Checklist hoàn thành

## Scene

* [ ] Origin của các tòa nhà đã được đặt ở mặt đáy.
* [ ] Các tòa nhà có chiều cao và kích thước khác nhau.
* [ ] Material được đặt tên rõ ràng.
* [ ] Mặt trước của mỗi tòa nhà có UV phù hợp.
* [ ] Hai bên đường đều có công trình.
* [ ] Thùng gỗ và vật thể trang trí đã được bố trí.
* [ ] Mặt đường sử dụng texture phù hợp.
* [ ] Texture mặt đường không bị kéo giãn rõ ràng.
* [ ] HDRI đã được thêm vào World Shader.
* [ ] Độ sáng môi trường phù hợp.

## Animation

* [ ] Máy bay bắt đầu từ vị trí xa hoặc ngoài khung hình.
* [ ] Keyframe đầu đã được cập nhật.
* [ ] End Frame đã được đặt thành `100`.
* [ ] Keyframe cuối của Plane Controller nằm tại frame `100`.
* [ ] Keyframe cuối của Propeller Controller nằm tại frame `100`.
* [ ] Cánh quạt quay trong toàn bộ chuyến bay.
* [ ] Máy bay không va xuyên qua công trình.
* [ ] Máy bay xuất hiện rõ trong khung hình camera.
* [ ] Toàn bộ animation đã được phát lại để kiểm tra.

---

# 18. Tóm tắt bài học

Trong bài này, anh hoàn thiện một scene thành phố đơn giản bằng cách tái sử dụng các mô hình tòa nhà và thùng gỗ đã tạo từ những bài trước.

Quy trình tập trung vào:

* Đặt Origin của tòa nhà ở mặt đáy để thay đổi chiều cao thuận tiện.
* Nhân bản object để nhanh chóng tạo khu phố.
* Tạo nhiều material và texture mặt tiền khác nhau.
* Điều chỉnh UV ở những khu vực camera nhìn thấy.
* Sử dụng seamless texture cho mặt đường.
* Thêm HDRI để tạo ánh sáng và môi trường.
* Bố trí camera và công trình quanh đường bay của máy bay.
* Kéo dài animation từ frame `50` đến frame `100`.
* Đồng bộ keyframe của máy bay và cánh quạt.

Điểm quan trọng nhất là khi một object có nhiều thành phần animation độc lập, anh phải kiểm tra và kéo dài keyframe của **tất cả controller liên quan**, không chỉ controller chuyển động chính.
