# 086 — Animated Textures: Texture động trong Blender

| Thuộc tính       | Nội dung                                                  |
| ---------------- | --------------------------------------------------------- |
| **Module**       | Module 05 — Rigging & Animation                           |
| **Bài học**      | Animated Textures                                         |
| **Thời lượng**   | 6:13                                                      |
| **Chủ đề chính** | Đưa video lên màn hình TV và hoàn thiện vật liệu nhân vật |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Sử dụng một file video làm texture động trong Blender.
* Tạo vật liệu riêng cho màn hình TV.
* Thiết lập node **Image Texture** với nguồn là **Movie**.
* UV unwrap màn hình để video hiển thị đúng.
* Khắc phục vấn đề UV khi object còn **Mirror Modifier**.
* Bật **Auto Refresh** để video cập nhật theo Timeline.
* Tạo và liên kết vật liệu cho các bộ phận khác nhau.
* Gán nhiều vật liệu lên các vùng mặt khác nhau của cùng một object.
* Hoàn thiện màu sắc cho TV và nhân vật trước khi render.

---

## 2. Tổng quan về Animated Texture

**Animated Texture** là kỹ thuật sử dụng video hoặc chuỗi hình ảnh làm texture cho một bề mặt.

Blender đọc video như một tập hợp các frame liên tiếp:

```text
Timeline của scene
        │
        ▼
Frame hiện tại
        │
        ▼
Frame tương ứng trong video
        │
        ▼
Hiển thị trên bề mặt object
```

Kỹ thuật này thường được sử dụng cho:

* Màn hình TV.
* Màn hình máy tính.
* Điện thoại.
* Biển quảng cáo điện tử.
* Bảng điều khiển.
* Hiệu ứng glitch.
* Màn hình camera giám sát.
* Các bề mặt phát hình ảnh động.

Trong bài học, một video hiệu ứng **glitch** được sử dụng làm nội dung hiển thị trên màn hình TV.

---

## 3. Chuẩn bị video texture

Có thể tải video miễn phí từ các thư viện video như Pexels.

Khi lựa chọn video, nên ưu tiên video:

* Có nhiều chuyển động.
* Thay đổi rõ rệt trong thời gian ngắn.
* Có tỉ lệ khung hình phù hợp với màn hình.
* Không có chi tiết quá nhỏ.
* Có độ phân giải vừa phải để tránh làm Viewport bị giật.

Animation của bài chỉ kéo dài khoảng một giây, vì vậy video nên có đủ chuyển động đáng chú ý trong khoảng thời gian này.

> Nên lựa chọn một video khác với video mẫu để tạo ra sản phẩm mang phong cách riêng.

---

## 4. Tạo vật liệu cho màn hình TV

### Bước 1: Chọn màn hình

Chuyển sang workspace:

```text
Shading
```

Sau đó chọn object đóng vai trò là màn hình TV.

### Bước 2: Tạo vật liệu mới

Trong **Material Properties** hoặc **Shader Editor**:

1. Nhấn **New**.
2. Đổi tên vật liệu thành:

```text
Screen
```

Có thể tạm thời đổi màu **Base Color** để kiểm tra xem vật liệu đã được gán đúng object hay chưa.

---

## 5. Thêm video vào Shader Editor

Có hai cách để đưa video vào Shader Editor.

### Cách 1: Kéo thả trực tiếp

1. Mở thư mục chứa video.
2. Kéo file video vào cửa sổ **Shader Editor**.
3. Blender sẽ tạo một node **Image Texture**.

### Cách 2: Thêm node thủ công

Trong Shader Editor, sử dụng:

```text
Shift + A
→ Texture
→ Image Texture
```

Sau đó:

1. Nhấn **Open**.
2. Chọn file video.
3. Kiểm tra nguồn texture được đặt thành **Movie**.

---

## 6. Sơ đồ node cơ bản

Có thể nối video trực tiếp vào màu bề mặt:

```text
┌─────────────────────┐
│ Image Texture       │
│ Source: Movie       │
│                     │
│ Color ──────────────┼──────────┐
└─────────────────────┘          │
                                 ▼
                       ┌──────────────────┐
                       │ Principled BSDF  │
                       │ Base Color       │
                       └────────┬─────────┘
                                │
                                ▼
                       ┌──────────────────┐
                       │ Material Output  │
                       │ Surface          │
                       └──────────────────┘
```

Kết nối:

```text
Image Texture: Color
        ↓
Principled BSDF: Base Color
        ↓
Material Output: Surface
```

---

## 7. Tạo cảm giác màn hình phát sáng

Nếu chỉ nối video vào **Base Color**, màn hình vẫn chịu ảnh hưởng của ánh sáng trong scene. Trong một số trường hợp, màn hình có thể trông tối và không giống một thiết bị đang phát sáng.

Có thể sử dụng thêm phần **Emission** của Principled BSDF:

```text
Image Texture: Color
        ├──→ Base Color
        └──→ Emission Color
```

Sau đó điều chỉnh:

```text
Emission Strength
```

Ví dụ:

```text
Emission Strength: 1.0–3.0
```

Giá trị phù hợp phụ thuộc vào:

* Công cụ render.
* Ánh sáng trong scene.
* Độ sáng của video.
* Hiệu ứng mong muốn.

### Sơ đồ vật liệu màn hình nâng cao

```text
                 ┌─────────────────────┐
                 │ Image Texture       │
                 │ Source: Movie       │
                 └─────────┬───────────┘
                           │ Color
                  ┌────────┴────────┐
                  ▼                 ▼
          ┌──────────────┐  ┌────────────────┐
          │ Base Color   │  │ Emission Color │
          └──────┬───────┘  └───────┬────────┘
                 │                  │
                 └────────┬─────────┘
                          ▼
                 ┌──────────────────┐
                 │ Principled BSDF  │
                 └────────┬─────────┘
                          ▼
                 ┌──────────────────┐
                 │ Material Output  │
                 └──────────────────┘
```

---

## 8. Kiểm tra UV của màn hình

Sau khi kết nối video, màn hình có thể vẫn chưa hiển thị đúng. Nguyên nhân thường là UV chưa được unwrap phù hợp.

Chuyển sang workspace:

```text
UV Editing
```

Sau đó:

1. Chọn object màn hình.
2. Nhấn `Tab` để vào **Edit Mode**.
3. Nhấn `A` để chọn toàn bộ.
4. Nhấn:

```text
U
→ Unwrap
```

Vì màn hình là một bề mặt tương đối phẳng, thường không cần tạo nhiều đường seam phức tạp.

---

## 9. Vấn đề khi màn hình còn Mirror Modifier

Nếu màn hình được tạo bằng **Mirror Modifier**, UV có thể chỉ đại diện cho một nửa màn hình.

Biểu hiện thường gặp:

* Chỉ một nửa video xuất hiện.
* Hai nửa màn hình hiển thị cùng một phần của video.
* Hai phần UV chồng lên nhau.
* Hình ảnh bị đối xứng hoặc lặp lại.

### Nguyên nhân

Mirror Modifier tạo ra phần hình học còn lại sau bước UV Mapping. Hai phía có thể sử dụng cùng tọa độ UV.

```text
Mesh gốc: một nửa màn hình
            │
            ▼
Mirror Modifier
            │
            ▼
Hai nửa màn hình dùng UV trùng nhau
```

### Cách xử lý

Cần áp dụng Mirror Modifier trước khi unwrap toàn bộ màn hình.

#### Quy trình

1. Chuyển sang **Object Mode**.
2. Mở tab **Modifiers**.
3. Tìm **Mirror Modifier**.
4. Mở menu của modifier.
5. Chọn:

```text
Apply
```

6. Quay lại **Edit Mode**.
7. Nhấn `A` để chọn toàn bộ.
8. Unwrap lại:

```text
U
→ Unwrap
```

Sau khi áp dụng modifier, màn hình trở thành một mesh hoàn chỉnh và có thể được unwrap như một bề mặt đầy đủ.

> Không thể sử dụng lệnh **Apply Modifier** khi đang ở Edit Mode.

---

## 10. Căn chỉnh UV theo video

Sau khi unwrap, UV có thể chưa nằm đúng vị trí trong khung video.

Trong UV Editor:

```text
A
```

để chọn toàn bộ UV.

Sử dụng:

| Phím tắt | Chức năng                   |
| -------- | --------------------------- |
| `G`      | Di chuyển UV                |
| `G`, `X` | Di chuyển theo chiều ngang  |
| `G`, `Y` | Di chuyển theo chiều dọc    |
| `S`      | Thay đổi kích thước UV      |
| `S`, `X` | Co giãn UV theo chiều ngang |
| `S`, `Y` | Co giãn UV theo chiều dọc   |
| `R`      | Xoay UV                     |

Mục tiêu là đặt UV màn hình vào vùng phù hợp của video:

```text
┌────────────────────────────┐
│                            │
│      ┌──────────────┐      │
│      │  UV màn hình │      │
│      │              │      │
│      └──────────────┘      │
│                            │
└────────────────────────────┘
           Video
```

Nếu video và màn hình có tỉ lệ khác nhau, có thể cần:

* Thu nhỏ UV để giữ toàn bộ nội dung.
* Phóng lớn UV để lấp đầy màn hình.
* Cắt bớt phần trên và dưới.
* Cắt bớt hai cạnh trái và phải.

---

## 11. Kiểm tra bằng Material Preview

Sau khi unwrap:

1. Chuyển Viewport sang **Material Preview**.
2. Quan sát màn hình TV.
3. Kiểm tra:

   * Video có đúng chiều không?
   * Có bị méo không?
   * Có bị lặp giữa hai nửa không?
   * Nội dung quan trọng có nằm trong màn hình không?

Nếu chưa đúng, quay lại UV Editor để tiếp tục điều chỉnh UV.

---

## 12. Thêm Timeline vào Shading Workspace

Để kiểm tra texture động, nên mở thêm một cửa sổ **Timeline**.

Cách thực hiện:

1. Chia một vùng giao diện thành cửa sổ mới.
2. Mở menu **Editor Type**.
3. Chọn:

```text
Timeline
```

Sau đó kéo playhead qua các frame để kiểm tra video có cập nhật hay không.

---

## 13. Bật Auto Refresh

Ban đầu, video có thể hiển thị một hình nhưng không thay đổi khi tua Timeline.

Trong node **Image Texture**, tìm tùy chọn:

```text
Auto Refresh
```

Bật tùy chọn này để Blender cập nhật video theo frame hiện tại.

```text
Timeline thay đổi
       │
       ▼
Auto Refresh
       │
       ▼
Image Texture cập nhật
       │
       ▼
Màn hình TV thay đổi
```

Nếu không bật **Auto Refresh**, video có thể chỉ hiển thị một frame cố định trong Viewport.

---

## 14. Các thông số của Movie Texture

Trong node Image Texture, video thường có các thiết lập sau:

| Thuộc tính       | Chức năng                            |
| ---------------- | ------------------------------------ |
| **Frames**       | Số frame video được sử dụng          |
| **Start Frame**  | Frame của scene bắt đầu phát video   |
| **Offset**       | Dịch vị trí bắt đầu trong video      |
| **Cyclic**       | Lặp lại video khi chạy hết           |
| **Auto Refresh** | Cập nhật video khi Timeline thay đổi |

### Ví dụ

Giả sử:

* Animation bắt đầu ở frame `1`.
* Animation kết thúc ở frame `24`.
* Video bắt đầu phát từ frame `1`.

Thiết lập có thể là:

```text
Start Frame: 1
Frames: 24 hoặc lớn hơn
Auto Refresh: Bật
```

Nếu animation dài hơn video và muốn video lặp lại:

```text
Cyclic: Bật
```

---

## 15. Đồng bộ video với animation

### Trường hợp 1: Video dài hơn animation

Ví dụ:

```text
Video: 100 frame
Animation: 24 frame
```

Blender chỉ sử dụng phần đầu của video tương ứng với 24 frame animation.

```text
Video:     [1────────────────────────────100]
Scene:     [1──────24]
Phần dùng: [1──────24]
```

### Trường hợp 2: Video ngắn hơn animation

Ví dụ:

```text
Video: 24 frame
Animation: 100 frame
```

Có thể bật **Cyclic** để video lặp lại:

```text
[1──24][1──24][1──24][1──24]...
```

### Trường hợp 3: Muốn video bắt đầu muộn

Ví dụ video chỉ bắt đầu phát từ frame `20`:

```text
Start Frame: 20
```

```text
Scene:  1────────────20────────────100
Video:                1─────────────81
```

---

## 16. Hoàn thiện vật liệu cho vỏ TV

Sau khi màn hình hoạt động, tiếp tục tạo vật liệu cho phần vỏ TV.

### Quy trình

1. Chọn object vỏ TV.
2. Tạo vật liệu mới.
3. Đặt tên:

```text
TV Shell
```

4. Chọn màu phù hợp, chẳng hạn:

   * Tím.
   * Xanh dương.
   * Đỏ.
   * Cam.
   * Màu pastel.

Có thể điều chỉnh:

| Thuộc tính             | Ảnh hưởng              |
| ---------------------- | ---------------------- |
| **Base Color**         | Màu chính              |
| **Roughness**          | Độ nhám                |
| **Metallic**           | Tính kim loại          |
| **Specular/IOR Level** | Cường độ phản xạ       |
| **Coat**               | Lớp phủ bóng bên ngoài |

Đối với vỏ TV bằng nhựa, thường nên:

```text
Metallic: 0
Roughness: trung bình
```

---

## 17. Tạo vật liệu cho nút điều khiển

Chọn một nút điều khiển và tạo vật liệu mới, ví dụ:

```text
TV Dials
```

Có thể sử dụng màu:

```text
Đen hoặc xám đậm
```

Thay vì tạo lại vật liệu cho từng nút, có thể liên kết vật liệu giữa các object.

### Liên kết vật liệu

1. Chọn object cần nhận vật liệu.
2. Giữ `Shift` và chọn object đang có vật liệu làm object cuối cùng.
3. Nhấn:

```text
Ctrl + L
→ Link Materials
```

Object được chọn cuối cùng là object chủ động, vật liệu của nó sẽ được liên kết sang các object còn lại.

```text
Nút A chưa có vật liệu ──┐
                         ├── Ctrl + L → Link Materials
Nút B có vật liệu ───────┘
              │
              ▼
Cả hai dùng cùng vật liệu
```

---

## 18. Tạo vật liệu cho cơ thể nhân vật

Chọn object cơ thể và tạo một vật liệu mới.

Ví dụ:

```text
Character Body
```

Có thể chọn màu xanh dương và tăng **Roughness** để bề mặt có cảm giác mềm, ít bóng.

```text
Base Color: xanh dương
Roughness: cao
Metallic: 0
```

Nếu màu quá mạnh, giảm độ bão hòa bằng cách kéo điểm chọn màu vào gần tâm của vòng tròn màu.

---

## 19. Gán nhiều vật liệu cho một object

Một object có thể sử dụng nhiều **Material Slot**.

Ví dụ:

* Cơ thể dùng màu xanh.
* Cổ tay dùng màu trắng.
* Khuỷu tay dùng màu trắng.
* Đầu gối dùng màu trắng.

### Quy trình

1. Chọn object cơ thể.
2. Nhấn `Tab` vào **Edit Mode**.
3. Chuyển sang chế độ chọn mặt:

```text
3
```

4. Chọn các face cần dùng màu khác.
5. Trong Material Properties, nhấn dấu `+` để tạo **Material Slot** mới.
6. Chọn hoặc tạo vật liệu mới.
7. Nhấn:

```text
Assign
```

### Sơ đồ

```text
Object cơ thể
│
├── Material Slot 1: Body Blue
│   └── Phần lớn các mặt
│
└── Material Slot 2: White Details
    └── Cổ tay, khuỷu tay, đầu gối
```

---

## 20. Lưu ý khi object còn Mirror Modifier

Khi object còn Mirror Modifier:

* Chỉ có thể trực tiếp chọn các face của nửa mesh gốc.
* Phần đối xứng được tạo ra bởi modifier.
* Vật liệu được gán cho nửa gốc thường được phản chiếu sang nửa còn lại.
* Không thể chỉnh hai bên hoàn toàn độc lập nếu chưa áp dụng modifier.

Nếu muốn tô vật liệu khác nhau cho hai bên cơ thể, cần cân nhắc:

```text
Apply Mirror Modifier
```

Tuy nhiên, chỉ nên áp dụng Mirror khi không còn cần chỉnh sửa đối xứng.

---

## 21. Vì sao mesh trở về vị trí gốc trong Edit Mode?

Nhân vật đang được điều khiển bởi Armature Modifier.

Trong **Object Mode** hoặc **Pose Mode**, bạn thấy mesh đã được biến dạng theo tư thế của xương.

Khi chuyển sang **Edit Mode**, Blender thường hiển thị hình dạng cơ sở của mesh để chỉnh sửa topology.

```text
Edit Mode
└── Hình dạng cơ sở của mesh

Object/Pose Mode
└── Hình dạng sau khi Armature Modifier biến dạng
```

Đây không phải lỗi. Nó giúp tránh việc chỉnh sửa topology trên một mesh đang bị biến dạng tạm thời bởi armature.

---

## 22. Thử nghiệm Procedural Texture

Ngoài màu đơn sắc, có thể thêm texture thủ tục.

Trong Shader Editor:

```text
Shift + A
→ Texture
→ Noise Texture
```

Hoặc trong một số phiên bản Blender cũ:

```text
Shift + A
→ Texture
→ Musgrave Texture
```

Sau đó nối texture vào **Base Color** hoặc thông qua một node **Color Ramp**.

### Sơ đồ

```text
Noise/Musgrave Texture
          │
          ▼
      Color Ramp
          │
          ▼
Principled BSDF: Base Color
```

Procedural Texture có thể tạo:

* Hoa văn nhiễu.
* Bề mặt đá.
* Da sinh vật.
* Vết bẩn.
* Màu loang.
* Họa tiết ngẫu nhiên.

Tuy nhiên, nếu texture làm nhân vật trở nên quá rối, màu đơn giản có thể phù hợp hơn với phong cách hoạt hình.

---

## 23. Quy trình hoàn chỉnh của bài học

```text
Chọn màn hình TV
        │
        ▼
Tạo vật liệu Screen
        │
        ▼
Thêm Image Texture
        │
        ▼
Mở file video
        │
        ▼
Đặt Source thành Movie
        │
        ▼
Kết nối vào Principled BSDF
        │
        ▼
Kiểm tra UV
        │
        ▼
Apply Mirror Modifier nếu cần
        │
        ▼
Unwrap lại toàn bộ màn hình
        │
        ▼
Căn chỉnh UV trong video
        │
        ▼
Bật Auto Refresh
        │
        ▼
Tua Timeline để kiểm tra
        │
        ▼
Tạo vật liệu cho vỏ TV
        │
        ▼
Liên kết vật liệu cho các nút
        │
        ▼
Tạo vật liệu cho nhân vật
        │
        ▼
Gán vật liệu phụ cho một số face
        │
        ▼
Đặt camera và render
```

---

## 24. Phím tắt và công cụ quan trọng

| Phím/Công cụ         | Chức năng                               |
| -------------------- | --------------------------------------- |
| `Shift + A`          | Thêm node hoặc object mới               |
| `Tab`                | Chuyển giữa Object Mode và Edit Mode    |
| `A`                  | Chọn toàn bộ                            |
| `U`                  | Mở menu UV Mapping                      |
| `G`                  | Di chuyển                               |
| `S`                  | Thay đổi kích thước                     |
| `R`                  | Xoay                                    |
| `3` trong Edit Mode  | Chuyển sang Face Select                 |
| `Ctrl + L`           | Liên kết dữ liệu giữa các object        |
| **Link Materials**   | Dùng chung vật liệu                     |
| **Apply Modifier**   | Chuyển kết quả modifier thành mesh thật |
| **Auto Refresh**     | Cập nhật video theo Timeline            |
| **Material Preview** | Xem vật liệu trong Viewport             |
| **Rendered View**    | Xem gần với kết quả render cuối         |

---

## 25. Lỗi thường gặp và cách xử lý

### 25.1. Video không xuất hiện

**Nguyên nhân có thể:**

* Chưa nối Image Texture vào shader.
* Chưa gán vật liệu cho object.
* UV chưa được unwrap.
* UV nằm ngoài vùng hình ảnh.
* Đang xem ở chế độ Solid.

**Cách xử lý:**

* Kiểm tra kết nối node.
* Chuyển sang Material Preview hoặc Rendered View.
* Unwrap lại màn hình.
* Căn chỉnh UV.

---

### 25.2. Video chỉ hiển thị một nửa

**Nguyên nhân:**

Mirror Modifier chưa được áp dụng và hai nửa đang dùng chung UV.

**Cách xử lý:**

```text
Object Mode
→ Apply Mirror Modifier
→ Edit Mode
→ A
→ U
→ Unwrap
```

---

### 25.3. Video không chuyển động

**Nguyên nhân:**

Chưa bật **Auto Refresh**.

**Cách xử lý:**

```text
Image Texture
→ Auto Refresh: Bật
```

---

### 25.4. Video bắt đầu sai thời điểm

**Nguyên nhân:**

Giá trị **Start Frame** chưa đúng.

**Cách xử lý:**

Đặt Start Frame trùng với frame muốn video bắt đầu phát.

---

### 25.5. Video ngừng phát giữa animation

**Nguyên nhân:**

* Giá trị **Frames** quá thấp.
* Video ngắn hơn scene.
* Chưa bật **Cyclic**.

**Cách xử lý:**

* Tăng số Frames.
* Bật Cyclic nếu muốn video lặp lại.
* Sử dụng video dài hơn.

---

### 25.6. Màn hình quá tối

**Nguyên nhân:**

Video chỉ được nối vào Base Color và phụ thuộc hoàn toàn vào ánh sáng scene.

**Cách xử lý:**

* Nối video vào Emission Color.
* Tăng Emission Strength.
* Kiểm tra Color Management và ánh sáng.

---

### 25.7. Video bị méo

**Nguyên nhân:**

Tỉ lệ UV không tương ứng với tỉ lệ màn hình hoặc video.

**Cách xử lý:**

Dùng:

```text
S, X
S, Y
```

để điều chỉnh tỉ lệ UV.

---

### 25.8. Mất video khi chuyển project sang máy khác

File video là tài nguyên ngoài file `.blend`. Nếu đường dẫn thay đổi, Blender có thể không tìm thấy video.

Nên:

* Đặt video trong thư mục project.
* Sử dụng đường dẫn tương đối.
* Giữ nguyên cấu trúc thư mục khi sao chép project.
* Kiểm tra lại đường dẫn trước khi render.

Ví dụ cấu trúc project:

```text
TV_Character_Project/
├── tv_character.blend
├── textures/
│   ├── screen_glitch.mp4
│   └── other_textures/
└── renders/
```

---

## 26. Gợi ý tổ chức vật liệu

Nên đặt tên rõ ràng cho vật liệu:

```text
MAT_Screen
MAT_TV_Shell
MAT_TV_Dials
MAT_Character_Body
MAT_Character_Details
```

Cách đặt tên này giúp dễ quản lý khi scene có nhiều object và vật liệu.

Ví dụ:

| Object            | Vật liệu                |
| ----------------- | ----------------------- |
| Màn hình          | `MAT_Screen`            |
| Vỏ TV             | `MAT_TV_Shell`          |
| Nút TV            | `MAT_TV_Dials`          |
| Cơ thể            | `MAT_Character_Body`    |
| Cổ tay, khuỷu tay | `MAT_Character_Details` |

---

## 27. Thử thách thực hành

Hãy tự thiết kế phong cách cho nhân vật bằng một hoặc nhiều phương pháp sau:

* Dùng màu đơn sắc.
* Dùng nhiều Material Slot.
* Thêm họa tiết ở cổ tay và đầu gối.
* Dùng Noise Texture.
* Dùng hình ảnh làm texture.
* Tạo màn hình TV phát video khác.
* Thêm hiệu ứng phát sáng.
* Điều chỉnh màu sắc theo phong cách retro.
* Tạo nhân vật mang phong cách robot hoặc hoạt hình.

Một số ý tưởng video cho màn hình:

* Hiệu ứng glitch.
* Mắt nhân vật.
* Khuôn mặt hoạt hình.
* Sóng âm thanh.
* Nhiễu TV.
* Hoạt ảnh hình học.
* Video vũ trụ.
* Camera giám sát giả lập.

---

## 28. Chuẩn bị trước khi render

Trước khi render animation, cần kiểm tra:

* Camera đã được đặt đúng vị trí.
* Màn hình TV hiển thị đúng.
* Video chuyển động theo Timeline.
* Không còn texture bị mất.
* Frame Start và End đã chính xác.
* Output Resolution đã được thiết lập.
* Thư mục Output đã được chọn.
* File Blender đã được lưu.
* Render Engine đã được chọn.
* Định dạng đầu ra đã được thiết lập.

Có thể render dưới dạng:

### Chuỗi ảnh tĩnh

Ví dụ:

```text
PNG
```

Ưu điểm:

* An toàn hơn khi render bị gián đoạn.
* Có thể render tiếp từ frame bị thiếu.
* Chất lượng cao.
* Dễ chỉnh sửa hậu kỳ.

### Video trực tiếp

Ví dụ:

```text
FFmpeg Video
```

Ưu điểm:

* Có ngay file video hoàn chỉnh.
* Không cần ghép chuỗi ảnh sau khi render.

Tuy nhiên, nếu quá trình render bị lỗi giữa chừng, việc khôi phục thường khó hơn so với chuỗi ảnh.

---

## 29. Checklist thực hành

### Video texture

* [ ] Đã tải hoặc chuẩn bị một video phù hợp.
* [ ] Đã tạo vật liệu riêng cho màn hình.
* [ ] Đã thêm node Image Texture.
* [ ] Đã mở video trong Image Texture.
* [ ] Source đã được đặt thành Movie.
* [ ] Đã nối Color vào Principled BSDF.
* [ ] Đã bật Auto Refresh.
* [ ] Đã kiểm tra Start Frame và Frames.
* [ ] Đã bật Cyclic nếu cần lặp video.

### UV Mapping

* [ ] Màn hình đã được unwrap.
* [ ] Mirror Modifier đã được áp dụng nếu cần.
* [ ] Hai nửa UV không còn chồng lên nhau.
* [ ] UV đã được căn giữa trong video.
* [ ] Video không bị méo hoặc ngược chiều.

### Vật liệu

* [ ] Đã tạo vật liệu cho vỏ TV.
* [ ] Đã tạo vật liệu cho nút điều khiển.
* [ ] Đã liên kết vật liệu giữa các nút.
* [ ] Đã tạo vật liệu cho cơ thể nhân vật.
* [ ] Đã gán vật liệu phụ cho các vùng cần thiết.
* [ ] Màu sắc giữa các bộ phận hài hòa.

### Render

* [ ] Camera đã được đặt đúng vị trí.
* [ ] Frame Range đã chính xác.
* [ ] Đường dẫn Output đã được chọn.
* [ ] File `.blend` đã được lưu.
* [ ] Video texture vẫn được Blender tìm thấy.
* [ ] Đã render thử một vài frame.

---

## 30. Tóm tắt bài học

Trong bài học này, chúng ta đã sử dụng một file video làm texture động cho màn hình TV.

Quy trình quan trọng nhất gồm:

1. Tạo vật liệu cho màn hình.
2. Thêm node Image Texture.
3. Mở video và sử dụng nguồn Movie.
4. Áp dụng Mirror Modifier nếu UV chỉ có một nửa.
5. Unwrap lại toàn bộ màn hình.
6. Căn chỉnh UV theo khung video.
7. Bật Auto Refresh.
8. Kiểm tra video bằng Timeline.
9. Hoàn thiện vật liệu cho TV và nhân vật.
10. Chuẩn bị camera và các thiết lập render.

Điểm cần ghi nhớ:

> Video texture chỉ hoạt động đúng khi vật liệu, UV Mapping, thông số frame và Auto Refresh đều được thiết lập phù hợp.

Animated Texture giúp các mô hình trở nên sinh động hơn, đặc biệt phù hợp với màn hình, bảng điện tử và các bề mặt cần hiển thị nội dung chuyển động.
