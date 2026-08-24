# 021 — Rendering & Material Display

| Thuộc tính     | Nội dung                                                     |
| -------------- | ------------------------------------------------------------ |
| **Phần**       | 03 — Materials                                               |
| **Thời lượng** | 3:23                                                         |
| **Chủ đề**     | Solid, Material Preview, Rendered View                       |
| **Trọng tâm**  | Phân biệt chế độ hiển thị material và lựa chọn Render Engine |

---

## 1. Mục tiêu bài học

Sau bài này, bạn cần:

* [ ] Phân biệt được **Solid**, **Material Preview** và **Rendered View**.
* [ ] Hiểu sự khác nhau giữa **Eevee**, **Cycles** và **Workbench**.
* [ ] Biết Material Preview thường được dùng để kiểm tra material nhanh.
* [ ] Biết khi nào cần chuyển sang **Rendered View** để đánh giá kết quả thực tế.
* [ ] Biết sử dụng **Scene Lights** và **Scene World** khi preview material.
* [ ] Hiểu vai trò cơ bản của `Material Output` và `Principled BSDF`.

---

# 2. Shader Ball — vật thể kiểm tra material

Trong scene của bài học có một vật thể đặc biệt gọi là:

> **Shader Ball**

Shader Ball được thiết kế để kiểm tra material trong nhiều điều kiện bề mặt khác nhau.

Ví dụ:

* vùng phẳng;
* vùng cong;
* cạnh bo;
* khe lõm;
* bề mặt phản chiếu;
* vùng nhận highlight.

Điều này giúp bạn nhận ra material có hoạt động tốt hay không trước khi áp dụng lên model thật.

### Quy trình cơ bản

```text
Tạo Material
     ↓
Gán lên Shader Ball
     ↓
Material Preview
     ↓
Kiểm tra nhanh
     ↓
Rendered View
     ↓
Kiểm tra với ánh sáng thật
     ↓
Tinh chỉnh Material
```

---

# 3. Các chế độ Viewport Shading

Trong Blender, các chế độ shading không phục vụ cùng một mục đích.

Có thể hiểu đơn giản:

```text
Solid
  ↓
Kiểm tra hình học

Material Preview
  ↓
Kiểm tra material nhanh

Rendered
  ↓
Kiểm tra kết quả gần với render cuối
```

---

## 4. Solid View

**Solid View** chủ yếu dùng để làm việc với hình dạng và topology.

Nó phù hợp khi:

* modeling;
* chỉnh vertex/edge/face;
* kiểm tra silhouette;
* kiểm tra topology;
* kiểm tra normals;
* kiểm tra lỗi mesh.

Solid View không phải nơi lý tưởng để đánh giá material thực tế.

### Câu hỏi Solid View trả lời

> **“Model của mình có đúng hình dạng không?”**

---

# 5. Material Preview

**Material Preview** được thiết kế để xem material nhanh mà không cần render hoàn chỉnh.

Trong bài học, giảng viên mô tả Material Preview chủ yếu sử dụng hệ thống realtime để cho kết quả nhanh.

Ưu điểm:

* phản hồi gần như tức thời;
* thuận tiện khi chỉnh shader;
* không cần chờ render lâu;
* có sẵn môi trường HDRI để soi material;
* rất phù hợp trong quá trình look development.

Ví dụ bạn có thể nhanh chóng kiểm tra:

* màu;
* metallic;
* roughness;
* normal;
* bump;
* texture;
* khả năng phản chiếu.

### Câu hỏi Material Preview trả lời

> **“Material này về cơ bản đang trông như thế nào?”**

---

# 6. Rendered View

**Rendered View** sử dụng Render Engine đang được chọn cho scene.

Ví dụ nếu:

```text
Render Engine = Cycles
```

thì Rendered View sẽ hiển thị kết quả dựa trên Cycles.

Rendered View phù hợp để kiểm tra:

* ánh sáng thực tế của scene;
* shadow;
* reflection;
* global illumination;
* môi trường;
* camera;
* tương tác giữa material và light.

### Câu hỏi Rendered View trả lời

> **“Material này sẽ trông như thế nào trong shot thật?”**

---

# 7. So sánh ba chế độ

| Chế độ               | Dùng để                            |    Tốc độ | Độ chính xác ánh sáng |
| -------------------- | ---------------------------------- | --------: | --------------------: |
| **Solid**            | Modeling / topology                | Rất nhanh |                  Thấp |
| **Material Preview** | Kiểm tra material nhanh            |     Nhanh |            Trung bình |
| **Rendered**         | Kiểm tra scene và material thực tế |  Chậm hơn |               Cao hơn |

Có thể ghi nhớ:

```text
SOLID
Geometry

    ↓

MATERIAL PREVIEW
Shader / Material

    ↓

RENDERED
Material + Light + World + Camera
```

---

# 8. Các Render Engine

Trong bài học giới thiệu ba lựa chọn chính:

1. **Eevee**
2. **Cycles**
3. **Workbench**

---

## 9. Eevee

**Eevee** là render engine hướng tới tốc độ và realtime.

Đặc điểm:

* rất nhanh;
* phù hợp preview;
* tương tác realtime;
* phù hợp animation cần tốc độ render cao;
* không mô phỏng ánh sáng giống Cycles trong mọi trường hợp.

### Khi nào dùng?

Ví dụ:

* preview nhanh;
* animation realtime;
* stylized rendering;
* kiểm tra material;
* project cần tốc độ.

---

# 10. Cycles

**Cycles** là path-tracing render engine của Blender.

Trong khóa học này, Cycles được ưu tiên vì mục tiêu là tạo material có cảm giác chân thực hơn.

Cycles phù hợp để kiểm tra:

* ánh sáng gián tiếp;
* reflection;
* refraction;
* glass;
* metallic surfaces;
* realistic shadows;
* vật liệu vật lý.

Nhược điểm chính:

> Render thường chậm hơn Eevee.

### So sánh nhanh

```text
Eevee
↓
Nhanh
Realtime
Preview tốt

Cycles
↓
Chậm hơn
Tính toán ánh sáng sâu hơn
Phù hợp realistic rendering
```

---

# 11. Workbench

**Workbench** chủ yếu phục vụ việc hiển thị model trong viewport.

Nó thường được dùng để:

* kiểm tra hình dạng;
* debugging;
* xem silhouette;
* kiểm tra modeling;
* tạo preview đơn giản.

Workbench không phải lựa chọn chính để tạo final realistic render.

Có thể coi nó gần với:

> **Playblast / viewport preview**

---

# 12. So sánh Render Engine

| Engine        | Thế mạnh  | Hạn chế                                           | Phù hợp           |
| ------------- | --------- | ------------------------------------------------- | ----------------- |
| **Workbench** | Rất nhanh | Không tập trung vào material thực tế              | Modeling/debug    |
| **Eevee**     | Realtime  | Ít chính xác hơn trong một số tình huống ánh sáng | Preview/animation |
| **Cycles**    | Realistic | Render chậm hơn                                   | Final render      |

Sơ đồ:

```text
Nhanh                                               Chính xác vật lý hơn
  │                                                        │
  ▼                                                        ▼

Workbench  ─────────────►  Eevee  ─────────────►  Cycles
Modeling                 Realtime                 Final Render
```

---

# 13. Material hoạt động được trong cả Eevee và Cycles

Material được tạo bằng shader node có thể sử dụng trong cả:

* Eevee;
* Cycles.

Tuy nhiên kết quả có thể không hoàn toàn giống nhau.

Ví dụ:

```text
Cùng một Material
       │
       ├── Eevee
       │      └─ Render nhanh
       │
       └── Cycles
              └─ Ánh sáng/reflection chân thực hơn
```

Vì vậy không nên chỉ kiểm tra material trong Material Preview rồi cho rằng final render chắc chắn sẽ giống như vậy.

---

# 14. Chuyển sang Camera View

Để đánh giá shot cuối, cần kiểm tra scene qua camera.

### Phím tắt

```text
Ctrl + Numpad 0
```

Dùng để đưa camera đang chọn trở thành camera active và chuyển sang góc nhìn camera.

Ngoài ra có thể sử dụng biểu tượng Camera trong giao diện.

---

## Camera Frame

Khi ở Camera View, Blender hiển thị một vùng khung hình.

```text
┌──────────────────────────┐
│                          │
│      CAMERA FRAME        │
│                          │
│       Shader Ball        │
│                          │
└──────────────────────────┘

Ngoài khung → không xuất hiện trong render cuối
```

Điều này rất quan trọng:

> Những gì nằm ngoài khung camera sẽ không xuất hiện trong hình render cuối.

---

# 15. HDRI trong Material Preview

Material Preview thường cung cấp các môi trường HDRI dựng sẵn.

HDRI cho phép nhanh chóng kiểm tra material dưới nhiều kiểu ánh sáng.

Ví dụ:

* studio;
* ngoài trời;
* rừng;
* ánh sáng lạnh;
* ánh sáng ấm;
* môi trường tối.

Điều này đặc biệt hữu ích cho các vật liệu phản chiếu.

Ví dụ:

```text
Metal
  ↓
Cần môi trường để phản chiếu
  ↓
HDRI
  ↓
Dễ đánh giá Roughness + Metallic
```

---

# 16. Scene Lights

Trong Material Preview có tùy chọn liên quan đến **Scene Lights**.

Khi bật:

```text
Scene Lights = ON
```

Blender sử dụng các light đang tồn tại trong scene.

Ví dụ:

* Area Light;
* Point Light;
* Sun;
* Spot Light.

Khi tắt:

```text
Scene Lights = OFF
```

Material Preview có thể sử dụng hệ thống ánh sáng preview thay vì các light thật trong scene.

---

# 17. Scene World

**Scene World** quyết định Material Preview có sử dụng World của scene hay môi trường preview riêng.

### Scene World ON

```text
Material Preview
      ↓
World của Scene
```

Ví dụ scene có:

* HDRI riêng;
* Background Color;
* Environment Texture.

Material Preview sẽ sử dụng môi trường đó.

---

### Scene World OFF

```text
Material Preview
      ↓
HDRI Preview của Blender
```

Bạn có thể lựa chọn các môi trường dựng sẵn để kiểm tra material nhanh.

---

# 18. Scene Light và Scene World khác nhau thế nào?

| Tùy chọn         | Điều khiển                    |
| ---------------- | ----------------------------- |
| **Scene Lights** | Các Light Object trong scene  |
| **Scene World**  | World / Environment của scene |

Ví dụ:

```text
Scene
│
├── World
│     └── HDRI / Background
│
└── Lights
      ├── Key Light
      ├── Fill Light
      └── Rim Light
```

Trong Material Preview:

```text
Scene World
     ↓
Bật/tắt World thật

Scene Lights
     ↓
Bật/tắt Light thật
```

---

# 19. Workflow kiểm tra material hợp lý

Một workflow tốt là không render Cycles liên tục ngay từ đầu.

Thay vào đó:

```text
Tạo Material
      ↓
Material Preview
      ↓
Chỉnh nhanh
      ↓
Kiểm tra HDRI khác nhau
      ↓
Rendered View
      ↓
Scene Lights + Scene World
      ↓
Camera View
      ↓
Render Test
      ↓
Final Render
```

---

# 20. Tạo material đầu tiên

Trong ví dụ của bài học, Shader Ball được chọn làm vật thể chính.

Sau đó:

1. Chọn **Sphere / Shader Ball**.
2. Mở phần Material.
3. Nhấn **New**.
4. Blender tạo material mới.
5. Shader Editor xuất hiện hai node quan trọng.

```text
Principled BSDF
      │
      ▼
Material Output
```

---

# 21. Material Output

`Material Output` là node đầu ra cuối cùng của material.

Có thể hình dung:

```text
Texture
   ↓
Shader
   ↓
Principled BSDF
   ↓
Material Output
   ↓
Object Surface
```

Nếu shader không được nối vào Material Output thì material sẽ không được xuất đúng lên bề mặt.

---

# 22. Principled BSDF

`Principled BSDF` là shader đa dụng chính của Blender.

Nó có thể dùng để tạo phần lớn những material cơ bản thường gặp.

Ví dụ:

```text
Principled BSDF
│
├── Base Color
├── Metallic
├── Roughness
├── IOR
├── Alpha
├── Normal
├── Coat
└── Transmission
```

Từ một shader này có thể xây dựng nhiều loại vật liệu:

* nhựa;
* kim loại;
* gỗ;
* sơn;
* cao su;
* da;
* kính;
* bề mặt bóng;
* bề mặt nhám.

---

# 23. Sơ đồ tổng quan hệ thống hiển thị

```text
                       BLENDER MATERIAL
                              │
              ┌───────────────┼───────────────┐
              │               │               │
              ▼               ▼               ▼
           SOLID       MATERIAL PREVIEW     RENDERED
              │               │               │
         Geometry         Shader nhanh     Shot thực tế
              │               │               │
              ▼               ▼               ▼
         Workbench      HDRI Preview     Eevee / Cycles
                              │               │
                     Scene Lights?       Scene Lights
                     Scene World?        Scene World
                                              │
                                              ▼
                                           Camera
                                              │
                                              ▼
                                        Final Render
```

---

# 24. So sánh Preview và Final Render

Một lỗi phổ biến là:

> Material đẹp trong Material Preview nhưng xấu khi render.

Điều này không nhất thiết có nghĩa material bị lỗi.

Nguyên nhân có thể là:

* HDRI Preview khác World của scene;
* ánh sáng scene quá yếu;
* hướng Key Light khác;
* Render Engine khác;
* reflection environment khác;
* exposure khác;
* camera đang nhìn material ở góc khác.

Do đó:

```text
Material Preview đẹp
        ≠
Final Render chắc chắn đẹp
```

---

# 25. Quy trình đánh giá material đúng

Không nên chỉ hỏi:

> “Màu này có đẹp không?”

Mà nên kiểm tra tuần tự:

### Bước 1 — Hình học

```text
Solid View
```

Kiểm tra:

* mesh;
* normals;
* bevel;
* silhouette.

### Bước 2 — Material

```text
Material Preview
```

Kiểm tra:

* Base Color;
* Roughness;
* Metallic;
* Normal/Bump.

### Bước 3 — Ánh sáng thật

```text
Rendered View
```

Kiểm tra:

* phản xạ;
* bóng;
* highlight;
* môi trường.

### Bước 4 — Shot cuối

```text
Camera View
```

Kiểm tra material đúng ở góc camera sẽ xuất hiện trong sản phẩm cuối.

---

# 26. Bài thực hành

## Bài tập 1 — So sánh Viewport Shading

Sử dụng cùng một Shader Ball và quan sát lần lượt:

```text
Solid
→ Material Preview
→ Rendered
```

Ghi lại sự khác nhau về:

* màu;
* shadow;
* reflection;
* highlight.

---

## Bài tập 2 — Thử HDRI

Trong Material Preview:

1. Tắt `Scene World`.
2. Chọn một HDRI sáng.
3. Quan sát material.
4. Chọn một HDRI tối.
5. Quan sát lại material.

Đặc biệt chú ý đến:

* Metallic;
* Roughness;
* reflection.

---

## Bài tập 3 — Scene Lights

So sánh:

```text
Scene Lights ON
```

với:

```text
Scene Lights OFF
```

Quan sát sự thay đổi của highlight trên Shader Ball.

---

## Bài tập 4 — Render Engine

Nếu scene cho phép, thử:

```text
Eevee
   ↓
Rendered View

Cycles
   ↓
Rendered View
```

So sánh:

* tốc độ;
* shadow;
* reflection;
* chất lượng ánh sáng.

---

# 27. Lỗi người mới thường gặp

### ❌ Chỉ xem material trong Solid View

Solid View không phản ánh đầy đủ shader.

### ❌ Material Preview đẹp nên bỏ qua Rendered View

HDRI Preview có thể hoàn toàn khác ánh sáng của scene.

### ❌ Không kiểm tra material bằng camera

Material có thể đẹp ở góc gần nhưng không đọc được ở góc camera cuối.

### ❌ Thay đổi material để sửa lỗi ánh sáng

Đôi khi material không sai — setup lighting mới là nguyên nhân.

### ❌ Dùng Cycles ngay cho mọi chỉnh sửa nhỏ

Điều này có thể làm workflow chậm.

Nên ưu tiên:

```text
Material Preview
      ↓
Tinh chỉnh nhanh

Rendered View
      ↓
Xác nhận
```

---

# 28. Ghi nhớ nhanh

> **Solid = kiểm tra hình học.**

> **Material Preview = kiểm tra shader nhanh.**

> **Rendered View = kiểm tra shader trong ánh sáng thực tế của scene.**

> **Eevee = tốc độ.**

> **Cycles = ưu tiên chất lượng và ánh sáng chân thực.**

> **Workbench = modeling/debug.**

> **Scene Lights = Light Object của scene.**

> **Scene World = World Environment của scene.**

---

# 29. Checklist hoàn thành bài

* [ ] Phân biệt được **Solid**, **Material Preview** và **Rendered View**.
* [ ] Hiểu Material Preview chủ yếu phục vụ việc preview shader nhanh.
* [ ] Biết sự khác nhau cơ bản giữa **Eevee**, **Cycles** và **Workbench**.
* [ ] Biết bật/tắt **Scene Lights**.
* [ ] Biết bật/tắt **Scene World**.
* [ ] Biết sử dụng HDRI Preview để kiểm tra material.
* [ ] Biết chuyển sang Camera View.
* [ ] Phân biệt được **preview** và **final render**.
* [ ] Kiểm tra material dưới ánh sáng thực tế của shot.
* [ ] Hiểu vai trò của `Principled BSDF`.
* [ ] Hiểu vai trò của `Material Output`.

---

## Tóm tắt một dòng

```text
Model bằng Solid → tạo material trong Material Preview → xác nhận bằng Rendered View → kiểm tra qua Camera → Render Final.
```

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
