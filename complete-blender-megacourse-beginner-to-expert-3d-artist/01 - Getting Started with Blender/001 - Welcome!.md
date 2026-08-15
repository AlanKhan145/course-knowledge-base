# 001 — Welcome! | Chào mừng đến với Blender Mega Course

| Thuộc tính        | Nội dung                                   |
| ----------------- | ------------------------------------------ |
| **Section**       | Section 01 — Getting Started with Blender  |
| **Bài học**       | Welcome!                                   |
| **Loại nội dung** | Video lecture                              |
| **Thời lượng**    | 1:57                                       |
| **Giảng viên**    | Caroline Conte                             |
| **Ngôn ngữ**      | English                                    |
| **Cấp độ**        | Beginner                                   |
| **Chủ đề chính**  | Tổng quan khóa học và lộ trình học Blender |

---

## 1. Tổng quan bài học

Bài **Welcome!** là phần giới thiệu mở đầu của **Blender Mega Course**. Giảng viên trình bày mục tiêu của khóa học, dự án chính mà người học sẽ thực hiện và các nhóm kỹ năng Blender sẽ được học theo từng giai đoạn.

Khóa học được xây dựng theo hướng **project-based learning** — học Blender bằng cách trực tiếp tạo một scene 3D hoàn chỉnh thay vì chỉ học riêng lẻ từng công cụ.

Dự án xuyên suốt khóa học là:

> **Xây dựng một Fantasy Cabin Scene hoàn chỉnh từ đầu đến cuối bằng Blender.**

Người học sẽ đi qua toàn bộ pipeline cơ bản:

```text
Blender Interface
      ↓
Navigation
      ↓
Object Transformation
      ↓
3D Modeling Fundamentals
      ↓
Modifiers
      ↓
Hard-Surface Techniques
      ↓
Fantasy Cabin Modeling
      ↓
Scene Organization
      ↓
Materials
      ↓
Lighting
      ↓
Camera
      ↓
Rendering
      ↓
Final Polished Image
```

---

# 2. Giới thiệu giảng viên

Giảng viên của khóa học là **Caroline Conte**, một **3D Artist** có khoảng **7 năm kinh nghiệm sử dụng Blender**.

Các lĩnh vực cô đã làm việc bao gồm:

* **Stylized Environments** — môi trường 3D phong cách.
* **Architectural Visualization** — trực quan hóa kiến trúc.
* **3D Game Art** — đồ họa 3D cho game.
* Các dự án Blender từ cơ bản đến nâng cao.

Ngoài dựng hình 3D, Blender còn được cô sử dụng cho nhiều loại công việc khác như:

* tạo bản đồ;
* animation logo;
* video editing;
* xây dựng scene;
* thiết kế environment 3D.

Điều này cho thấy Blender không chỉ là phần mềm modeling mà là một bộ công cụ sáng tạo 3D khá toàn diện.

---

# 3. Mục tiêu của khóa học

Khóa học hướng đến những người:

* mới bắt đầu học Blender;
* cảm thấy giao diện Blender quá phức tạp;
* muốn học dựng hình 3D;
* muốn tạo environment;
* muốn hiểu một workflow Blender hoàn chỉnh;
* muốn có một project thực hành thay vì chỉ học lý thuyết.

Mục tiêu cuối cùng là giúp người học:

> Hiểu được **core Blender workflow** và đủ tự tin để tự tạo các mô hình 3D của riêng mình.

---

# 4. Dự án chính — Fantasy Cabin

Trong khóa học, người học sẽ xây dựng một scene **Fantasy Cabin** hoàn chỉnh.

Pipeline tổng quát:

```text
Ý tưởng Fantasy Cabin
        │
        ▼
Model các object cơ bản
        │
        ▼
Xây dựng cấu trúc cabin
        │
        ▼
Thêm cửa / cửa sổ / chi tiết
        │
        ▼
Tổ chức scene
        │
        ▼
Tạo Materials
        │
        ▼
Thiết lập Lighting
        │
        ▼
Thiết lập Camera
        │
        ▼
Render
        │
        ▼
Final Fantasy Cabin Image
```

Điểm quan trọng là người học sẽ thực hiện **toàn bộ quy trình từ đầu đến cuối**.

---

# 5. Lộ trình kiến thức trong khóa học

## 5.1. Blender Interface

Phần đầu khóa học sẽ giúp người học làm quen với giao diện Blender.

Các nội dung nền tảng gồm:

* các vùng chính của Blender;
* viewport;
* workspace;
* scene;
* object;
* cách di chuyển trong không gian 3D.

Đây là bước cần thiết trước khi bắt đầu modeling.

---

## 5.2. Navigation

Người học sẽ làm quen với cách điều khiển góc nhìn trong **3D Viewport**.

Ví dụ các thao tác thường gặp:

| Thao tác           | Mục đích                             |
| ------------------ | ------------------------------------ |
| **Orbit**          | Xoay góc nhìn quanh scene            |
| **Pan**            | Di chuyển góc nhìn                   |
| **Zoom**           | Phóng to / thu nhỏ                   |
| **Frame Selected** | Tập trung camera viewport vào object |

Khả năng navigation tốt giúp quá trình modeling nhanh và chính xác hơn.

---

# 6. Object Transformation

Một trong những nhóm kỹ năng đầu tiên là **transform object**.

Ba transformation quan trọng nhất trong Blender:

```text
Transform
├── Move / Translate
├── Rotate
└── Scale
```

Tương ứng với các shortcut rất quan trọng:

| Transformation | Shortcut | Chức năng           |
| -------------- | -------: | ------------------- |
| **Move**       |      `G` | Di chuyển object    |
| **Rotate**     |      `R` | Xoay object         |
| **Scale**      |      `S` | Thay đổi kích thước |

Có thể giới hạn transformation theo từng trục:

```text
X → trục X
Y → trục Y
Z → trục Z
```

Ví dụ:

```text
G → X
```

Di chuyển object chỉ theo trục X.

---

# 7. Fundamentals of 3D Modeling

Sau khi làm quen với giao diện, khóa học chuyển sang các thành phần cơ bản của mesh.

Một **Mesh** trong Blender được cấu thành chủ yếu từ:

```text
Mesh
├── Vertex
├── Edge
└── Face
```

### Vertex

**Vertex** là một điểm trong không gian 3D.

```text
•
```

### Edge

**Edge** là đường nối giữa hai vertex.

```text
•────────•
```

### Face

**Face** là bề mặt được tạo bởi nhiều vertex và edge.

```text
•────────•
│        │
│  Face  │
│        │
•────────•
```

Hiểu được ba thành phần này là nền tảng của hầu hết kỹ thuật **mesh modeling**.

---

# 8. Modifiers

Khóa học cũng giới thiệu các **Modifier** trong Blender.

Modifier cho phép thay đổi hình học của object theo cách **non-destructive**, tức là có thể chỉnh sửa hoặc tắt mà không nhất thiết phá hủy mesh ban đầu.

Pipeline thường gặp:

```text
Base Mesh
    ↓
Modifier
    ↓
Modified Geometry
    ↓
Final Object
```

Ví dụ các modifier phổ biến mà người học Blender thường gặp:

* Mirror;
* Bevel;
* Subdivision Surface;
* Solidify;
* Array.

> Bài Welcome chưa đi sâu vào modifier cụ thể mà chỉ giới thiệu chúng như một phần của lộ trình khóa học.

---

# 9. Simple Hard-Surface Techniques

Khóa học cũng sẽ giới thiệu các kỹ thuật **Hard-Surface Modeling** cơ bản.

Hard-surface modeling thường được sử dụng cho các vật thể có bề mặt hoặc cấu trúc rõ ràng như:

* kiến trúc;
* cửa;
* cửa sổ;
* nội thất;
* máy móc;
* props;
* các cấu trúc nhân tạo.

Đây là nhóm kỹ thuật quan trọng để xây dựng Fantasy Cabin.

---

# 10. Xây dựng Fantasy Cabin

Sau khi nắm được các công cụ nền tảng, người học sẽ bắt đầu xây dựng cabin.

Quá trình sẽ đi theo hướng:

```text
Basic Shapes
     ↓
Cabin Structure
     ↓
Architectural Components
     ↓
Secondary Details
     ↓
Final Model
```

Người học không chỉ dựng hình mà còn học cách:

* chia cấu trúc thành nhiều object;
* quản lý object;
* thêm detail;
* duy trì scene dễ chỉnh sửa;
* xây dựng scene theo workflow có tổ chức.

---

# 11. Scene Organization

Một scene Blender càng lớn thì việc tổ chức càng quan trọng.

Một cấu trúc đơn giản có thể hình dung như:

```text
Fantasy_Cabin
│
├── Cabin
│   ├── Walls
│   ├── Roof
│   ├── Door
│   └── Windows
│
├── Environment
│   ├── Ground
│   ├── Rocks
│   └── Props
│
├── Lights
│
└── Camera
```

Scene organization giúp:

* dễ tìm object;
* dễ sửa model;
* dễ hide/show;
* dễ quản lý project;
* giảm nhầm lẫn khi scene trở nên phức tạp.

---

# 12. Materials

Sau giai đoạn modeling, scene sẽ được bổ sung **Materials**.

Material quyết định cách bề mặt object tương tác với ánh sáng và được hiển thị khi render.

Ví dụ:

```text
3D Object
   ↓
Material
   ↓
Shader
   ↓
Texture / Parameters
   ↓
Rendered Surface
```

Material có thể kiểm soát các thuộc tính như:

* màu sắc;
* roughness;
* metallic;
* normal;
* transparency;
* emission.

---

# 13. Procedural Textures

Một điểm đáng chú ý của khóa học:

> **Không cần tải external assets để hoàn thành project.**

Các texture sẽ được xây dựng bằng những **procedural textures có sẵn trong Blender**.

Có thể hình dung:

```text
Blender Procedural Nodes
          ↓
Noise / Pattern / Color
          ↓
Shader
          ↓
Material
          ↓
Cabin Surface
```

Ưu điểm của procedural texture:

* không phụ thuộc file ảnh bên ngoài;
* dễ thay đổi;
* có thể scale tốt;
* phù hợp để học Shader Editor;
* project dễ đóng gói và chia sẻ.

---

# 14. Lighting

Sau materials, khóa học chuyển sang **Lighting**.

Lighting quyết định rất lớn đến cảm giác của scene.

Một pipeline đơn giản:

```text
3D Models
   +
Materials
   +
Lighting
   ↓
Visual Mood
```

Lighting có thể ảnh hưởng đến:

* độ sáng;
* bóng đổ;
* chiều sâu;
* màu sắc;
* atmosphere;
* focal point;
* mood của environment.

---

# 15. Camera

Người học cũng sẽ thiết lập camera cho scene cuối.

Camera quyết định:

* composition;
* framing;
* perspective;
* góc quan sát;
* đối tượng chính của scene.

Pipeline:

```text
Scene
  ↓
Camera Position
  ↓
Camera Rotation
  ↓
Composition
  ↓
Final Shot
```

Một model đẹp nhưng camera composition không tốt vẫn có thể tạo ra render kém hấp dẫn.

---

# 16. Rendering

Giai đoạn cuối cùng là render scene thành hình ảnh hoàn chỉnh.

Workflow tổng quát:

```text
Modeling
   ↓
Materials
   ↓
Lighting
   ↓
Camera
   ↓
Render Settings
   ↓
Rendering
   ↓
Final Image
```

Mục tiêu là tạo ra một **polished image** — hình ảnh 3D hoàn chỉnh và có tính trình bày.

---

# 17. Blender Workflow tổng thể

Toàn bộ tinh thần của khóa học có thể tóm tắt bằng pipeline sau:

```text
┌─────────────────────────┐
│  Learn Blender Interface│
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│ Navigation & Transform  │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│ Vertex / Edge / Face    │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│ 3D Modeling             │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│ Modifiers & Hard Surface│
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│ Build Fantasy Cabin     │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│ Organize Scene          │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│ Materials & Textures    │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│ Lighting                │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│ Camera                  │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│ Rendering               │
└────────────┬────────────┘
             ↓
      Final Fantasy
       Cabin Image
```

---

# 18. Mục tiêu bài học

Sau bài **Welcome!**, người học nên:

* [ ] Hiểu mục tiêu tổng thể của Blender Mega Course.
* [ ] Biết project chính của khóa học là **Fantasy Cabin Scene**.
* [ ] Hiểu rằng khóa học được xây dựng theo workflow **từ modeling → rendering**.
* [ ] Nhận biết các nhóm kiến thức chính sẽ được học.
* [ ] Hiểu vai trò của modeling, materials, lighting, camera và rendering.
* [ ] Biết rằng project không yêu cầu external assets.
* [ ] Biết procedural textures trong Blender sẽ được sử dụng để tạo texture.
* [ ] Có hình dung tổng thể về pipeline sản xuất một scene 3D.

---

# 19. Các thuật ngữ tiếng Anh cần nhớ

| Thuật ngữ              | Nghĩa tiếng Việt   | Vai trò                                      |
| ---------------------- | ------------------ | -------------------------------------------- |
| **3D Model**           | Mô hình 3D         | Đối tượng được dựng trong không gian 3 chiều |
| **Environment**        | Môi trường 3D      | Không gian hoặc cảnh xung quanh              |
| **Interface**          | Giao diện          | Nơi tương tác với Blender                    |
| **Navigation**         | Điều hướng         | Điều khiển góc nhìn trong viewport           |
| **Transform**          | Biến đổi           | Move, Rotate, Scale                          |
| **Vertex**             | Đỉnh               | Điểm cơ bản của mesh                         |
| **Edge**               | Cạnh               | Đường nối các vertex                         |
| **Face**               | Mặt                | Bề mặt của mesh                              |
| **Mesh**               | Lưới hình học      | Cấu trúc hình học của model                  |
| **Modifier**           | Bộ biến đổi        | Thay đổi hình học non-destructive            |
| **Hard Surface**       | Dựng bề mặt cứng   | Modeling kiến trúc, máy móc, props...        |
| **Scene**              | Cảnh               | Toàn bộ không gian 3D của project            |
| **Material**           | Vật liệu           | Xác định cách bề mặt hiển thị                |
| **Texture**            | Họa tiết / kết cấu | Tạo chi tiết bề mặt                          |
| **Procedural Texture** | Texture thủ tục    | Texture được sinh bằng node/toán học         |
| **Lighting**           | Chiếu sáng         | Tạo ánh sáng và bóng                         |
| **Camera**             | Máy quay           | Xác định góc nhìn render                     |
| **Render**             | Kết xuất           | Chuyển scene thành hình ảnh                  |
| **Workflow**           | Quy trình làm việc | Chuỗi bước thực hiện project                 |

---

# 20. Thực hành đề xuất

Vì đây là bài giới thiệu ngắn, chưa cần dựng model phức tạp. Người học nên chuẩn bị môi trường học tập.

### Bước 1 — Khởi động Blender

Mở Blender và tạo một project mới.

### Bước 2 — Quan sát giao diện

Thử xác định:

* 3D Viewport;
* Outliner;
* Properties;
* Timeline;
* Toolbar.

### Bước 3 — Thử thao tác với Cube

Với Cube mặc định:

```text
G → Move
R → Rotate
S → Scale
```

Thử:

```text
G + X
R + Z
S
```

để bắt đầu làm quen với transformation.

### Bước 4 — Lưu project

Ví dụ:

```text
Blender_Mega_Course/
│
├── 001_Welcome/
│   └── welcome_practice.blend
│
├── 002_...
├── 003_...
└── Final_Project/
```

Cách tổ chức này giúp theo dõi tiến độ toàn bộ khóa học.

---

# 21. Gợi ý cách học khóa học

Với mỗi video, nên theo quy trình:

```text
Xem toàn bộ video
        ↓
Hiểu mục tiêu bài
        ↓
Xem lại + thao tác theo
        ↓
Tự làm lại không nhìn video
        ↓
Thử thay đổi một chi tiết
        ↓
Ghi shortcut / tool mới
        ↓
Lưu file .blend
```

Không nên chỉ xem video liên tục mà không thực hành, vì các thao tác Blender phụ thuộc nhiều vào **muscle memory** và khả năng điều hướng trong không gian 3D.

---

# 22. Checklist hoàn thành bài 001

## Kiến thức

* [ ] Tôi hiểu mục tiêu của Blender Mega Course.
* [ ] Tôi biết project chính là **Fantasy Cabin**.
* [ ] Tôi hiểu sơ bộ pipeline tạo một scene 3D.
* [ ] Tôi biết các khái niệm Vertex, Edge và Face sẽ được học.
* [ ] Tôi biết khóa học sẽ đề cập đến Modifier và Hard-Surface Modeling.
* [ ] Tôi biết Materials, Lighting và Camera nằm ở giai đoạn hoàn thiện scene.
* [ ] Tôi hiểu Rendering là bước tạo hình ảnh cuối cùng.
* [ ] Tôi biết project sử dụng procedural textures có sẵn trong Blender.

## Thực hành

* [ ] Đã mở Blender.
* [ ] Đã quan sát giao diện cơ bản.
* [ ] Đã thử Move bằng `G`.
* [ ] Đã thử Rotate bằng `R`.
* [ ] Đã thử Scale bằng `S`.
* [ ] Đã tạo thư mục dành cho khóa học.
* [ ] Đã lưu file `.blend` đầu tiên.

---

# 23. Tóm tắt nhanh

> **Welcome!** không phải là một bài modeling thực hành mà là bài định hướng cho toàn bộ Blender Mega Course.

Khóa học sẽ đưa người học từ:

**Blender beginner**

đến khả năng thực hiện một workflow:

**Interface → Modeling → Scene Building → Materials → Lighting → Camera → Rendering**

thông qua việc xây dựng một **Fantasy Cabin Scene hoàn chỉnh**.

Điểm quan trọng nhất của bài:

> **Learn Blender by creating a complete 3D project from start to finish.**

Hay có thể hiểu:

> **Học Blender thông qua việc tự xây dựng một dự án 3D hoàn chỉnh từ đầu đến cuối.**

---

## Ghi chú về nguồn

Nội dung trên được biên soạn từ **metadata và transcript của bài 001 — Welcome!** do người dùng cung cấp. Các nội dung về công cụ cụ thể như shortcut, modifier hoặc node được trình bày ở mức nhập môn để hỗ trợ việc học; các bài tiếp theo sẽ đi sâu hơn vào từng công cụ và workflow.
