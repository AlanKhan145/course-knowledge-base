# 022 — Materials

| Thuộc tính     | Nội dung                                                                                                         |
| -------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Phần**       | 03 — Materials                                                                                                   |
| **Thời lượng** | 8:50                                                                                                             |
| **Chủ đề**     | Principled BSDF và các thuộc tính bề mặt                                                                         |
| **Trọng tâm**  | Base Color, Metallic, Roughness, Alpha, Subsurface, Specular/IOR, Transmission, Coat, Sheen, Emission, Thin Film |

---

## 1. Mục tiêu bài học

Sau bài này, có thể:

* Hiểu vai trò của **Principled BSDF** trong việc tạo material.
* Điều khiển màu sắc và độ phản xạ của bề mặt.
* Phân biệt vật liệu **kim loại** và **phi kim loại**.
* Tạo vật liệu bóng, nhám, gương, kính, da/sáp, vải và vật liệu phát sáng.
* Hiểu cơ bản về:

  * `Base Color`
  * `Metallic`
  * `Roughness`
  * `Alpha`
  * `Subsurface`
  * `IOR`
  * `Transmission`
  * `Coat`
  * `Sheen`
  * `Emission`
  * `Thin Film`

---

# 2. Principled BSDF là gì?

**Principled BSDF** là shader tổng hợp dùng để xây dựng phần lớn các vật liệu thông dụng.

Nó dựa trên mô hình shading theo hướng **physically based rendering — PBR** và được thiết kế để có thể tạo rất nhiều loại bề mặt chỉ bằng một node.

```text
Material
   │
   ▼
Principled BSDF
   │
   ├── Màu sắc
   │    └── Base Color
   │
   ├── Tính chất bề mặt
   │    ├── Metallic
   │    └── Roughness
   │
   ├── Ánh sáng xuyên qua
   │    ├── Transmission
   │    └── Subsurface
   │
   ├── Lớp bề mặt
   │    ├── Coat
   │    └── Sheen
   │
   ├── Phát sáng
   │    └── Emission
   │
   └── Hiệu ứng đặc biệt
        └── Thin Film
```

Có thể xem Principled BSDF như một **bảng điều khiển tổng hợp của vật liệu**.

---

# 3. Base Color — màu cơ bản

`Base Color` xác định màu chính của vật liệu.

Có thể chọn màu bằng:

* RGB — Red, Green, Blue.
* HSV — Hue, Saturation, Value.
* Hex Color.
* Color Picker.

Ví dụ:

```text
Base Color
     │
     ├── Đỏ
     ├── Xanh
     ├── Trắng
     ├── Xám
     └── Màu tùy chỉnh
```

## Nguyên tắc quan trọng

Trong vật liệu realistic, nên hạn chế:

* trắng tuyệt đối;
* đen tuyệt đối;
* màu bão hòa 100%.

Thay vì:

```text
White = #FFFFFF
Black = #000000
```

nên sử dụng các giá trị hơi lệch khỏi giới hạn tuyệt đối.

Ví dụ:

```text
Trắng thực tế
≈ trắng hơi xám / vàng / xanh

Đen thực tế
≈ xám rất tối
```

Điều này giúp ánh sáng và phản xạ trên vật liệu tự nhiên hơn.

---

# 4. Tại sao màu trong Material lại khác màu đã chọn?

Màu hiển thị cuối cùng không chỉ phụ thuộc vào `Base Color`.

```text
Base Color
     +
Lighting
     +
World / HDRI
     +
Color Management
     +
Roughness
     +
Reflection
     ↓
Màu nhìn thấy cuối cùng
```

Vì vậy một màu xanh rất mạnh trong Color Picker có thể trông nhạt hơn khi đặt trên shader ball.

---

# 5. Metallic — kim loại

`Metallic` xác định vật liệu có được xem là kim loại hay không.

### Phi kim loại

```text
Metallic = 0
```

Ví dụ:

* nhựa;
* gỗ;
* cao su;
* da;
* giấy;
* đá;
* kính.

### Kim loại

```text
Metallic = 1
```

Ví dụ:

* sắt;
* thép;
* nhôm;
* vàng;
* đồng.

---

## Quy tắc PBR đơn giản

```text
                 ┌── Metallic = 1 → kim loại
Vật liệu ────────┤
                 └── Metallic = 0 → phi kim loại
```

Trong vật liệu thuần túy, thường không cần đặt:

```text
Metallic = 0.3
Metallic = 0.5
Metallic = 0.7
```

Các giá trị trung gian thường xuất hiện khi:

* bề mặt bị bụi;
* sơn bong;
* gỉ;
* texture chứa nhiều loại bề mặt;
* cần material stylized.

> **Quan trọng:** `Metallic` không phải nút “tăng độ bóng”.

Muốn vật liệu bóng hơn, thường cần điều chỉnh **Roughness**.

---

# 6. Roughness — độ nhám

`Roughness` kiểm soát độ sắc hoặc độ tán của phản xạ.

```text
Roughness thấp
      │
      ▼
Phản xạ sắc
Highlight nhỏ
Bề mặt bóng
```

```text
Roughness cao
      │
      ▼
Phản xạ bị tán
Highlight rộng
Bề mặt mờ / nhám
```

|  Roughness | Kết quả  |
| ---------: | -------- |
|      `0.0` | Rất bóng |
| `0.1–0.25` | Bóng     |
|  `0.3–0.5` | Bán bóng |
|  `0.6–0.8` | Nhám     |
|      `1.0` | Rất nhám |

---

# 7. Highlight và Roughness

Một trong những cách tốt nhất để đọc vật liệu là quan sát **highlight**.

```text
Roughness thấp
      ↓
   ╱████╲
 highlight
 nhỏ + sắc
```

```text
Roughness cao
      ↓
 ╱██████████╲
   highlight
   rộng + mềm
```

Do đó khi làm material, đừng chỉ nhìn màu.

Hãy quan sát:

> **hình dạng → cường độ → độ rộng của highlight**

---

# 8. Tạo vật liệu gương

Một material gần giống gương có thể bắt đầu với:

```text
Base Color ≈ trắng/xám sáng
Metallic   = 1
Roughness  = 0
```

Sơ đồ:

```text
Metallic = 1
     +
Roughness = 0
     ↓
Phản xạ gần như gương
```

Sau khi tạo nên đặt tên material rõ ràng:

```text
MAT_Mirror
```

---

# 9. Alpha — độ trong suốt

`Alpha` kiểm soát mức độ nhìn xuyên qua bề mặt.

| Alpha | Kết quả              |
| ----: | -------------------- |
| `1.0` | Hoàn toàn nhìn thấy  |
| `0.5` | Bán trong suốt       |
| `0.0` | Hoàn toàn trong suốt |

```text
Alpha

1.0 ██████████
0.5 █████░░░░░
0.0 ░░░░░░░░░░
```

Có thể sử dụng cho:

* decal;
* lá cây;
* vải mỏng;
* giấy mỏng;
* lưới;
* hiệu ứng;
* texture có background trong suốt.

> **Lưu ý:** tùy phiên bản Blender và render engine, chỉ giảm `Alpha` có thể chưa đủ. Cần kiểm tra các thiết lập transparency/material tương ứng.

---

# 10. Diffuse

Nhóm `Diffuse` chủ yếu ảnh hưởng cách ánh sáng khuếch tán trên các vật liệu **dielectric — phi kim loại**.

Trong giai đoạn mới học, không cần chỉnh quá sâu.

Có thể ưu tiên:

```text
Base Color
Metallic
Roughness
Transmission
Subsurface
```

trước.

---

# 11. Subsurface Scattering — SSS

`Subsurface Scattering` mô phỏng ánh sáng:

1. đi vào bề mặt;
2. tán xạ bên trong vật thể;
3. thoát ra ở một vị trí khác.

```text
Ánh sáng
   ↓
██████████████
    ↘ ↘ ↘
      ↘ ↘
       ↘
██████████████
        ↓
Ánh sáng tán xạ
```

Hiệu ứng này đặc biệt quan trọng đối với vật liệu hữu cơ.

---

## Ví dụ vật liệu dùng SSS

* da người;
* sáp;
* nến;
* trái cây;
* thịt;
* lá;
* một số vật liệu hữu cơ.

Ví dụ điển hình là khi chiếu ánh sáng mạnh qua:

* tai;
* ngón tay;
* vỏ/quả quýt;
* nến.

Ta có thể thấy ánh sáng xuyên và tán bên trong.

---

# 12. Độ dày ảnh hưởng SSS

SSS phụ thuộc rất lớn vào độ dày geometry.

```text
Mỏng
│
│  ánh sáng xuyên nhiều
▼
████
```

```text
Dày
│
│  ánh sáng xuyên ít
▼
████████████████
```

Do đó:

> **Geometry càng mỏng → SSS càng dễ nhìn thấy.**

---

# 13. Scale của Subsurface

`Scale` kiểm soát khoảng cách ánh sáng có thể tán xạ trong vật liệu.

```text
Scale thấp
→ ánh sáng chỉ đi một khoảng ngắn
```

```text
Scale cao
→ ánh sáng tán sâu hơn
```

Không nên tăng quá mạnh vì vật liệu có thể nhanh chóng trông như:

* sáp;
* thạch;
* nhựa trong;
* vật liệu phát sáng giả.

---

# 14. Radius của Subsurface

Subsurface có thể tán xạ khác nhau theo các kênh:

```text
R
G
B
```

Điều này giúp mô phỏng việc các bước sóng ánh sáng truyền qua vật chất khác nhau.

Khi mới học, có thể giữ giá trị mặc định và chủ yếu điều chỉnh:

```text
Subsurface Weight
Scale
Base Color
```

---

# 15. Specular / IOR

Các bề mặt phi kim loại cũng phản xạ ánh sáng.

Ví dụ:

* nhựa;
* gỗ;
* da;
* nước;
* kính.

Phản xạ này phụ thuộc vào **IOR — Index of Refraction** và các thiết lập specular tương ứng của Principled BSDF.

```text
Light
   ↓
    ↘ Reflection
────────────── Surface
    ↘
      ↘ Refraction
```

Không nhất thiết phải chỉnh các tham số nâng cao ngay từ đầu.

Đối với người mới:

> giữ gần mặc định thường là lựa chọn tốt.

---

# 16. Transmission — vật liệu truyền sáng

`Transmission` được sử dụng khi ánh sáng cần đi xuyên qua vật thể.

Điển hình:

* kính;
* nước;
* chất lỏng;
* acrylic trong suốt.

```text
Transmission = 0
→ vật thể đục
```

```text
Transmission = 1
→ vật liệu có khả năng truyền ánh sáng
```

---

# 17. Tạo kính cơ bản

Thiết lập nhanh:

```text
Base Color  ≈ trắng
Transmission = 1
Roughness    = 0
```

Ta sẽ có vật liệu kính trong.

Nếu tăng Roughness:

```text
Roughness ↑
     ↓
Frosted Glass
```

Ví dụ:

| Vật liệu   |  Roughness |
| ---------- | ---------: |
| Kính trong |       thấp |
| Kính mờ    | trung bình |
| Kính nhám  |        cao |

---

# 18. IOR — Index of Refraction

`IOR` mô tả mức độ ánh sáng bị **khúc xạ** khi đi từ môi trường này sang môi trường khác.

```text
Không khí
        \
         \
----------\----------
           \
            \
             Kính
```

IOR khác nhau sẽ làm hình ảnh phía sau vật thể bị biến dạng khác nhau.

Một số giá trị tham khảo:

| Vật liệu  | IOR xấp xỉ |
| --------- | ---------: |
| Không khí |       1.00 |
| Nước      |       1.33 |
| Kính      | ~1.45–1.52 |
| Kim cương |      ~2.42 |

Ví dụ dễ nhận thấy:

```text
Ly rỗng
      ↓
mức khúc xạ A

Ly chứa nước
      ↓
kính + nước
      ↓
hình ảnh bị khúc xạ khác
```

---

# 19. Coat — lớp phủ ngoài

Trong transcript, từ được đọc gần giống **“code”**, nhưng tên đúng là:

> **Coat**

`Coat` tạo thêm một lớp phản xạ bóng phía trên vật liệu chính.

Hình dung:

```text
┌────────────────────┐
│    Clear Coat      │ ← lớp vecni
├────────────────────┤
│      Wood          │
└────────────────────┘
```

Ví dụ thực tế:

* gỗ phủ vecni;
* sơn xe;
* carbon phủ resin;
* nhựa có lớp bóng;
* sơn bóng.

---

# 20. Coat Roughness

Coat cũng có Roughness riêng.

```text
Material Roughness
→ độ nhám lớp vật liệu bên dưới

Coat Roughness
→ độ nhám lớp phủ bên ngoài
```

Ví dụ:

```text
Base material = khá nhám
Coat          = bóng

        ↓

gỗ phủ vecni
```

Đây là cách tạo bề mặt phức tạp hơn mà không cần xây dựng nhiều shader riêng.

---

# 21. Sheen — ánh sáng trên sợi vải

`Sheen` mô phỏng phản xạ mềm xuất hiện trên các vật liệu có nhiều sợi nhỏ.

Ví dụ:

* len;
* cotton;
* nhung;
* vải;
* áo sweater.

Khi ánh sáng chiếu vào các sợi:

```text
           ánh sáng
             ↓
      ✦ ✦ ✦ ✦ ✦
   ╱─────────────╲
  │     fabric    │
   ╲─────────────╱
```

Ta thường thấy một lớp sáng nhẹ quanh rìa.

---

## Material phù hợp với Sheen

```text
Sheen
  │
  ├── Cotton
  ├── Wool
  ├── Velvet
  ├── Sweater
  └── Fabric
```

Không nên tăng quá mạnh nếu đang tạo vật liệu realistic.

---

# 22. Emission — vật liệu phát sáng

`Emission` biến bề mặt thành vật liệu có khả năng tự phát sáng về mặt hình ảnh.

Thông số quan trọng:

```text
Emission Color
Emission Strength
```

Ví dụ:

* biển neon;
* màn hình;
* LED;
* nút bấm phát sáng;
* light strip;
* hiệu ứng sci-fi.

---

## Thiết lập cơ bản

```text
Emission Color
      +
Emission Strength ↑
      ↓
Bề mặt sáng hơn
```

Ví dụ:

```text
MAT_Neon_Blue
MAT_LED_Red
MAT_Screen
```

---

## Lưu ý về Emission

Không nên hiểu đơn giản:

> Emission = Light Object.

Material emission và nguồn sáng `Point`, `Area`, `Spot` là hai khái niệm khác nhau.

Khả năng emission thực sự chiếu sáng scene còn phụ thuộc:

* render engine;
* global illumination;
* sampling;
* scene setup.

Nếu cần kiểm soát ánh sáng chính xác, nên sử dụng **Light Object** riêng.

---

# 23. Thin Film — màng mỏng óng ánh

Trong transcript phần này được gọi nhầm gần giống **“film”**.

Tên đầy đủ là:

> **Thin Film**

Nó mô phỏng hiện tượng giao thoa ánh sáng trong một lớp vật liệu cực mỏng.

Ví dụ:

* bong bóng xà phòng;
* váng dầu;
* bề mặt iridescent;
* màng mỏng đổi màu.

---

# 24. Tạo hiệu ứng bong bóng xà phòng

Có thể bắt đầu với:

```text
Transmission = 1
Roughness    = 0
Thin Film Weight = 1
Thin Film Thickness ≈ vài trăm nm
```

Ví dụ trong bài:

```text
Thickness ≈ 500 nm
```

Sau đó điều chỉnh:

```text
Thin Film Thickness
IOR
Transmission
```

để thay đổi dải màu giao thoa.

```text
       ánh sáng
          ↓
    ┌───────────┐
    │ Thin Film │
    └───────────┘
       ↙  ↓  ↘

   xanh  tím  vàng
```

---

# 25. Tổng hợp các thông số quan trọng

| Thông số         | Điều khiển                   | Ví dụ          |
| ---------------- | ---------------------------- | -------------- |
| **Base Color**   | Màu chính                    | nhựa màu xanh  |
| **Metallic**     | Kim loại / phi kim loại      | thép           |
| **Roughness**    | Độ nhám                      | gương ↔ cao su |
| **Alpha**        | Độ trong suốt bề mặt         | decal          |
| **Subsurface**   | Ánh sáng tán bên trong       | da, sáp        |
| **IOR**          | Khúc xạ / phản xạ dielectric | kính, nước     |
| **Transmission** | Ánh sáng xuyên vật liệu      | kính           |
| **Coat**         | Lớp phủ bóng                 | sơn xe         |
| **Sheen**        | Highlight trên sợi           | vải            |
| **Emission**     | Tự phát sáng                 | neon           |
| **Thin Film**    | Giao thoa màng mỏng          | bong bóng      |

---

# 26. Công thức tư duy khi tạo material

Thay vì kéo slider ngẫu nhiên, hãy đặt câu hỏi theo thứ tự:

```text
Vật liệu này có màu gì?
        ↓
Base Color
        ↓
Là kim loại?
   ├── Có  → Metallic = 1
   └── Không → Metallic = 0
        ↓
Bề mặt nhám hay bóng?
        ↓
Roughness
        ↓
Ánh sáng có xuyên qua?
   ├── Kính → Transmission
   └── Hữu cơ → Subsurface
        ↓
Có lớp phủ ngoài?
        ↓
Coat
        ↓
Có sợi vải?
        ↓
Sheen
        ↓
Có tự phát sáng?
        ↓
Emission
        ↓
Có giao thoa màng mỏng?
        ↓
Thin Film
```

---

# 27. Quick Look-Dev — Kim loại

Ví dụ thép đánh bóng:

```text
Base Color = xám
Metallic   = 1
Roughness  = 0.15–0.3
```

### Thép nhám

```text
Metallic   = 1
Roughness  = 0.5–0.7
```

Điểm quan trọng:

> Kim loại vẫn có thể rất nhám.

`Metallic = 1` không đồng nghĩa với `Roughness = 0`.

---

# 28. Quick Look-Dev — Nhựa

Ví dụ nhựa bóng:

```text
Base Color = màu tùy chọn
Metallic   = 0
Roughness  = 0.2–0.35
```

Nhựa mờ:

```text
Metallic   = 0
Roughness  = 0.5–0.7
```

Nếu là nhựa phủ bóng, có thể thêm một chút `Coat`.

---

# 29. Quick Look-Dev — Kính

```text
Base Color   ≈ trắng
Metallic     = 0
Transmission = 1
Roughness    = 0–0.1
IOR          ≈ 1.45
```

Cho kính mờ:

```text
Roughness ↑
```

---

# 30. Quick Look-Dev — Da

Một material da đơn giản có thể bắt đầu:

```text
Base Color = nâu / beige
Metallic   = 0
Roughness  = 0.45–0.7
```

Sau đó bổ sung texture cho:

```text
Roughness
Normal
Bump
Base Color
```

Nếu muốn mô phỏng da sinh học, có thể thêm **Subsurface** rất nhẹ.

---

# 31. Vì sao không nên đánh giá material chỉ bằng màu?

Material realistic phụ thuộc vào nhiều lớp thông tin:

```text
Material
   │
   ├── Color
   ├── Roughness
   ├── Reflection
   ├── Normal
   ├── Micro-detail
   ├── Transmission
   └── Lighting
```

Hai vật liệu có cùng Base Color nhưng Roughness khác nhau có thể trông hoàn toàn khác nhau.

Ví dụ:

```text
Xám + Metallic 1 + Roughness .1
→ thép bóng

Xám + Metallic 1 + Roughness .7
→ thép nhám

Xám + Metallic 0 + Roughness .7
→ nhựa / đá / cao su
```

---

# 32. Quy trình thực hành

## Bài tập 1 — Kim loại

1. Tạo material mới.
2. Đặt `Metallic = 1`.
3. Chọn Base Color xám.
4. Thử lần lượt:

```text
Roughness
0.0
0.2
0.5
0.8
1.0
```

5. Quan sát highlight.

---

## Bài tập 2 — Nhựa

1. `Metallic = 0`.
2. Chọn Base Color.
3. Thử Roughness từ thấp đến cao.
4. Quan sát thay đổi highlight.

---

## Bài tập 3 — Kính

1. `Transmission = 1`.
2. `Roughness = 0`.
3. Điều chỉnh `IOR`.
4. Tăng Roughness để chuyển sang kính mờ.

---

## Bài tập 4 — Vật liệu hữu cơ

1. Chọn màu da hoặc sáp.
2. Tăng `Subsurface Weight`.
3. Đặt một Area Light phía sau.
4. Thay đổi `Scale`.
5. Quan sát ánh sáng xuyên vùng geometry mỏng.

---

# 33. Sơ đồ phân loại vật liệu

```text
                         MATERIAL
                            │
             ┌──────────────┴──────────────┐
             │                             │
          Opaque                       Transparent
             │                             │
      ┌──────┴──────┐                Transmission
      │             │                     │
  Metallic      Dielectric            Glass / Water
      │             │
 Metal/Gold     Plastic/Wood
                    │
            ┌───────┴────────┐
            │                │
         Organic           Fabric
            │                │
      Subsurface           Sheen
            │
     Skin / Wax
```

---

# 34. Những lỗi người mới thường gặp

### ❌ Dùng Metallic để làm vật liệu bóng hơn

Sai:

```text
Nhựa không đủ bóng
→ tăng Metallic
```

Đúng:

```text
Nhựa không đủ bóng
→ giảm Roughness
```

---

### ❌ Mọi vật liệu đều Roughness = 0

Ngoài đời, hầu hết bề mặt đều có một mức **micro-roughness** nhất định.

---

### ❌ Dùng màu trắng hoặc đen tuyệt đối

Điều này thường làm vật liệu khó phản ứng tự nhiên với ánh sáng.

---

### ❌ Tăng SSS quá mạnh

Da có thể biến thành:

* sáp;
* jelly;
* cao su trong.

---

### ❌ Emission cực mạnh để thay Light

Emission phù hợp cho:

* LED;
* neon;
* screen;
* hiệu ứng.

Nếu cần chiếu sáng scene có kiểm soát, nên bổ sung **Light Object**.

---

### ❌ Đánh giá material trong một điều kiện ánh sáng duy nhất

Material phải được kiểm tra dưới:

* highlight;
* vùng bóng tối;
* ánh sáng trực tiếp;
* ánh sáng gián tiếp;
* environment của shot.

---

# 35. Nguyên tắc quan trọng nhất

> **Material không chỉ là màu. Material là cách bề mặt phản ứng với ánh sáng.**

Một workflow tốt thường là:

```text
Base Color
    ↓
Metallic
    ↓
Roughness
    ↓
IOR / Transmission
    ↓
Subsurface
    ↓
Coat / Sheen
    ↓
Normal / Bump
    ↓
Lighting Test
```

---

# 36. Checklist

* [ ] Hiểu `Base Color` chỉ là một phần của material.
* [ ] Hiểu `Roughness` ảnh hưởng đến độ rộng và độ sắc của highlight.
* [ ] Phân biệt `Metallic = 0` và `Metallic = 1`.
* [ ] Không sử dụng Metallic như một nút “tăng bóng”.
* [ ] Biết sử dụng `Transmission` để tạo kính.
* [ ] Hiểu `IOR` ảnh hưởng đến khúc xạ.
* [ ] Biết `Subsurface` dùng cho da, sáp và vật liệu hữu cơ.
* [ ] Hiểu `Coat` là lớp phủ bóng phía trên material.
* [ ] Biết `Sheen` phù hợp với vải và bề mặt có sợi.
* [ ] Biết dùng `Emission` cho neon, LED và bề mặt phát sáng.
* [ ] Hiểu `Thin Film` có thể tạo hiệu ứng bong bóng xà phòng.
* [ ] Kiểm tra thiết lập transparency khi sử dụng Alpha.
* [ ] Luôn kiểm tra material dưới ánh sáng phù hợp với shot.

---

## Ghi nhớ nhanh

```text
COLOR        → Base Color
METAL        → Metallic
GLOSS/MATTE  → Roughness
TRANSPARENT  → Alpha
SKIN/WAX     → Subsurface
GLASS        → Transmission + IOR
VARNISH      → Coat
FABRIC       → Sheen
NEON         → Emission
SOAP BUBBLE  → Thin Film
```

> **Công thức quan trọng nhất của bài:**
> **Loại vật liệu → Metallic → Roughness → cách ánh sáng đi qua/phản xạ → hiệu ứng bề mặt bổ sung.**

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
