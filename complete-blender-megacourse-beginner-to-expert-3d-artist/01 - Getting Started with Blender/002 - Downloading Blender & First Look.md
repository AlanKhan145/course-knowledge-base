# 002 — Downloading Blender & First Look

## Tải Blender & Làm quen giao diện lần đầu

| Thuộc tính               | Nội dung                                                           |
| ------------------------ | ------------------------------------------------------------------ |
| **Section**              | Section 01 — Getting Started with Blender                          |
| **Bài học**              | Downloading Blender & First Look                                   |
| **Loại nội dung**        | Video lecture                                                      |
| **Thời lượng**           | 6:28                                                               |
| **Ngôn ngữ**             | English                                                            |
| **Cấp độ**               | Beginner                                                           |
| **Chủ đề chính**         | Cài đặt Blender, giao diện cơ bản và quản lý file/project          |
| **Kiến thức quan trọng** | `.blend`, Import/Export, Link/Append, External Data, Asset Library |

---

# 1. Tổng quan bài học

Bài **Downloading Blender & First Look** là bài thực hành đầu tiên của khóa học. Nội dung tập trung vào ba nhóm kiến thức chính:

1. **Tải và cài đặt Blender**.
2. **Làm quen với giao diện Blender**.
3. **Hiểu cách Blender quản lý project, file, texture và asset**.

Đây là bước chuẩn bị trước khi đi sâu vào:

* Navigation;
* Viewport;
* Modeling;
* Materials;
* Lighting;
* Rendering.

Pipeline của bài:

```text
Blender Website
      ↓
Download Blender
      ↓
Install Blender
      ↓
Open Blender
      ↓
Understand Interface
      ↓
Save .blend Project
      ↓
Import / Export Assets
      ↓
Manage External Textures
      ↓
Create Asset Library
      ↓
Reuse Assets in Other Projects
```

---

# 2. Tải Blender

Blender là phần mềm **mã nguồn mở — Open Source** và có thể tải xuống miễn phí.

Quy trình cơ bản:

```text
Blender Website
      ↓
Download
      ↓
Choose Operating System
      ↓
Download Installer
      ↓
Install
      ↓
Launch Blender
```

Blender được sử dụng cho nhiều công việc như:

* 3D Modeling;
* Animation;
* Rendering;
* Sculpting;
* VFX;
* Game Assets;
* Architectural Visualization;
* Video Editing;
* Motion Graphics.

---

# 3. Kiểm tra yêu cầu hệ thống

Trước khi cài Blender, nên kiểm tra **System Requirements**.

Các yếu tố quan trọng gồm:

* CPU;
* GPU;
* RAM;
* hệ điều hành;
* dung lượng lưu trữ;
* thiết bị nhập liệu.

Đối với việc học Blender cơ bản, nên có:

* bàn phím;
* chuột;
* chuột có **scroll wheel / middle mouse button** nếu có thể.

Chuột rất quan trọng vì nhiều thao tác điều hướng Blender sử dụng nút giữa.

Ví dụ:

| Thiết bị            | Vai trò                  |
| ------------------- | ------------------------ |
| Keyboard            | Shortcut và nhập giá trị |
| Mouse               | Chọn object              |
| Middle Mouse Button | Orbit viewport           |
| Scroll Wheel        | Zoom                     |
| Numpad              | Chuyển nhanh góc nhìn    |

---

# 4. Blender Documentation

Blender có hệ thống tài liệu chính thức để tra cứu khi gặp vấn đề.

Có thể sử dụng Documentation để tìm:

* cách dùng một tool;
* ý nghĩa một modifier;
* cách hoạt động của shader;
* shortcut;
* animation;
* rendering;
* Python API;
* troubleshooting.

Một workflow học hiệu quả:

```text
Không hiểu công cụ
       ↓
Xác định tên công cụ
       ↓
Tra Blender Documentation
       ↓
Đọc chức năng
       ↓
Thử trong project nhỏ
```

---

# 5. Cài đặt Blender

Sau khi tải installer, quy trình cài đặt tương đối đơn giản:

```text
Open Installer
      ↓
Next
      ↓
Choose Installation Directory
      ↓
Install
      ↓
Finish
      ↓
Open Blender
```

Không cần thiết lập quá nhiều thứ ở lần đầu tiên.

---

# 6. Splash Screen

Khi Blender khởi động, màn hình đầu tiên thường là **Splash Screen**.

Splash Screen hiển thị:

* artwork của phiên bản Blender;
* phiên bản Blender đang sử dụng;
* tùy chọn tạo project mới;
* Recent Files;
* các tùy chọn khởi đầu khác.

Có thể đóng Splash Screen bằng cách click ra ngoài.

Sơ đồ:

```text
Start Blender
     ↓
Splash Screen
     ├── New File
     ├── Recent Files
     └── Blender Version
           ↓
      Main Interface
```

---

# 7. Giao diện Blender cơ bản

Theo bài giảng, có thể bắt đầu hình dung giao diện Blender qua các khu vực lớn:

```text
┌──────────────────────────────────────────────┐
│ File / Menu / Workspace Tabs                 │
├──────────────────────────────────────────────┤
│                                              │
│                  Workspace                   │
│                                              │
│                  Viewport                    │
│                                              │
├──────────────────────────────────────────────┤
│ Status Bar                                   │
└──────────────────────────────────────────────┘
```

Các thành phần quan trọng cần nhận biết ngay từ đầu:

* **Top Bar / Menu Bar**
* **Workspace Tabs**
* **3D Viewport**
* **Outliner**
* **Properties Editor**
* **Timeline**
* **Status Bar**

---

# 8. File Management

Phần trên cùng của Blender chứa các menu liên quan đến quản lý project.

Đặc biệt là:

```text
File
├── New
├── Open
├── Save
├── Save As
├── Link
├── Append
├── Import
├── Export
└── External Data
```

Trong bài này, giảng viên tập trung nhiều vào khả năng quản lý các file `.blend` và asset bên ngoài.

---

# 9. Lưu project Blender đầu tiên

Một project Blender chưa được lưu thường hiển thị trạng thái dạng:

```text
Unsaved
```

Để lưu:

```text
File
   ↓
Save As
   ↓
Choose Folder
   ↓
Enter Filename
   ↓
Save
```

Ví dụ:

```text
Blender_First_Project.blend
```

Định dạng project chính của Blender:

```text
.blend
```

File `.blend` có thể chứa:

* object;
* mesh;
* material;
* camera;
* light;
* animation;
* node;
* scene;
* collection;
* một phần dữ liệu asset.

Tuy nhiên, **không phải mọi file bên ngoài đều mặc định được nhúng vào `.blend`**.

Đây là điểm cực kỳ quan trọng khi làm việc với texture.

---

# 10. Nguyên tắc quản lý project

Nên tổ chức project theo thư mục rõ ràng.

Ví dụ:

```text
Fantasy_Cabin/
│
├── fantasy_cabin.blend
│
├── textures/
│   ├── wood.jpg
│   ├── roof.png
│   └── stone.jpg
│
├── models/
│   ├── flower.fbx
│   └── props.fbx
│
├── reference/
│   └── cabin_reference.jpg
│
└── renders/
    ├── test_001.png
    └── final.png
```

Lợi ích:

* tránh mất texture;
* dễ backup;
* dễ chuyển sang máy khác;
* dễ chia sẻ project;
* dễ tìm asset.

---

# 11. Import và Export

Blender có thể làm việc với nhiều định dạng 3D khác nhau.

Trong bài, giảng viên sử dụng ví dụ:

```text
FBX
```

Workflow:

```text
External 3D File
       ↓
File → Import
       ↓
Choose Format
       ↓
Select File
       ↓
Import
       ↓
Object appears in Blender
```

Ví dụ:

```text
flower.fbx
      ↓
Import FBX
      ↓
Flower Object
```

---

# 12. Drag & Drop

Ngoài menu **File → Import**, một số loại dữ liệu có thể được đưa vào Blender bằng thao tác:

```text
File Browser
     ↓
Drag File
     ↓
Drop into Blender
     ↓
Import
```

Đây là một cách nhanh để nhập asset.

Trong bài học, giảng viên minh họa bằng một model hoa.

---

# 13. Import và Export khác nhau như thế nào?

### Import

Đưa dữ liệu từ bên ngoài **vào Blender**.

```text
FBX
OBJ
GLTF
...
 ↓
Blender
```

### Export

Đưa dữ liệu từ Blender **ra định dạng khác**.

```text
Blender
   ↓
FBX / OBJ / GLB / ...
```

Ví dụ:

```text
Model in Blender
      ↓
Export GLB
      ↓
Game / Web / Other Software
```

---

# 14. Shading Workspace

Sau khi import flower model, bài học chuyển sang **Shading Workspace**.

Shading Workspace được sử dụng để làm việc với:

* Material;
* Shader;
* Texture;
* Image Texture;
* Node.

Pipeline đơn giản:

```text
Object
  ↓
Material
  ↓
Shader Nodes
  ↓
Texture
  ↓
Rendered Appearance
```

Ví dụ object hoa có thể sử dụng một texture ảnh nằm bên ngoài file `.blend`.

---

# 15. External Texture

Đây là một trong những khái niệm quan trọng nhất của bài.

Giả sử project có:

```text
flower.blend
```

và material sử dụng:

```text
flower_texture.png
```

Blender có thể chỉ lưu **đường dẫn đến texture**, chứ texture không nhất thiết được lưu trực tiếp bên trong file `.blend`.

Quan hệ:

```text
flower.blend
      │
      └── references
             ↓
      flower_texture.png
```

Nếu texture bị:

* di chuyển;
* đổi tên;
* xóa;
* không được copy sang máy khác;

Blender sẽ không tìm thấy file đó.

---

# 16. Missing Texture

Khi Blender không tìm thấy texture, object thường xuất hiện với màu:

> **Bright Pink / Magenta**

Có thể hình dung:

```text
Material
   ↓
Image Texture
   ↓
File path invalid
   ↓
Texture Missing
   ↓
████████
 MAGENTA
████████
```

Màu hồng tím rực trong Blender là tín hiệu quan trọng:

> **Blender không tìm thấy một texture/image được material tham chiếu.**

---

# 17. Vì sao texture bị mất?

Ví dụ ban đầu:

```text
Project/
├── flower.blend
└── textures/
    └── flower.png
```

Sau đó người dùng chuyển texture:

```text
Another_Folder/
└── flower.png
```

Nhưng `.blend` vẫn tìm:

```text
Project/textures/flower.png
```

Kết quả:

```text
Expected Path
      ↓
File Not Found
      ↓
Missing Texture
      ↓
Pink Material
```

---

# 18. Find Missing Files

Blender cung cấp công cụ để tìm lại texture bị mất:

```text
File
  ↓
External Data
  ↓
Find Missing Files
```

Sau đó chọn thư mục chứa các texture.

Workflow:

```text
Pink Object
     ↓
File
     ↓
External Data
     ↓
Find Missing Files
     ↓
Choose Texture Folder
     ↓
Blender searches files
     ↓
Textures reassigned
```

Đây là kỹ năng rất hữu ích khi:

* tải project Blender từ internet;
* chuyển project sang máy khác;
* đổi ổ cứng;
* đổi cấu trúc folder;
* nhận project từ đồng đội.

---

# 19. External Data

Menu **External Data** liên quan đến cách Blender quản lý các file bên ngoài.

Có thể hiểu đơn giản:

```text
.blend
  │
  ├── Mesh
  ├── Material
  ├── Scene
  │
  └── External References
          ├── Textures
          ├── Images
          └── Other files
```

Khi làm project nghiêm túc, quản lý External Data đúng cách giúp tránh lỗi khi chuyển project.

---

# 20. Pack Resources

Một khái niệm quan trọng liên quan đến bài này là **packing**.

Thay vì:

```text
.blend
  ↓
references external texture
```

có thể đóng gói resource vào project:

```text
.blend
├── scene
├── mesh
├── materials
└── packed textures
```

Điều này hữu ích khi muốn:

* chuyển project;
* backup;
* gửi project cho người khác;
* tránh mất texture.

Tuy nhiên file `.blend` có thể lớn hơn.

---

# 21. Link và Append

Trong menu **File**, Blender có hai cơ chế rất quan trọng để lấy dữ liệu từ file Blender khác:

```text
Link
Append
```

Cả hai đều cho phép lấy dữ liệu từ:

```text
another_file.blend
```

vào:

```text
current_project.blend
```

Nhưng cách hoạt động khác nhau.

---

# 22. Append

**Append** sao chép dữ liệu từ một `.blend` khác vào project hiện tại.

```text
Library.blend
     │
     │ Append
     ↓
Current.blend
     ↓
Independent Copy
```

Sau khi Append:

* asset thuộc project hiện tại;
* có thể chỉnh sửa;
* thay đổi file nguồn thường không tự cập nhật bản copy.

Có thể hiểu:

> **Append = Copy asset vào project hiện tại.**

---

# 23. Link

**Link** tạo liên kết đến dữ liệu nằm trong file `.blend` khác.

```text
Library.blend
     ↑
     │ Link
     │
Current.blend
```

Asset vẫn có mối quan hệ với nguồn.

Cách hiểu cơ bản của bài:

> **Link = tham chiếu asset từ Blender file khác.**

So sánh nhanh:

| Thuộc tính                  | Append                        | Link                      |
| --------------------------- | ----------------------------- | ------------------------- |
| Đưa asset vào project       | Có                            | Có                        |
| Tạo bản copy độc lập        | Có                            | Không hoàn toàn           |
| Chỉnh sửa trực tiếp dễ dàng | Có                            | Hạn chế hơn               |
| Liên hệ với file nguồn      | Không còn phụ thuộc trực tiếp | Có                        |
| Phù hợp                     | Asset riêng của project       | Shared library / pipeline |

---

# 24. Link vs Append

Sơ đồ dễ nhớ:

```text
                    Another .blend
                          │
                ┌─────────┴─────────┐
                │                   │
             APPEND                LINK
                │                   │
                ▼                   ▼
           Copy Asset         Reference Asset
                │                   │
                ▼                   ▼
          Editable Copy      Connected to Source
```

Quy tắc nhớ:

```text
Append ≈ Copy
Link   ≈ Reference
```

---

# 25. Blender Asset Library

Blender có hệ thống **Asset Library** giúp lưu trữ những asset có thể tái sử dụng.

Ví dụ:

```text
Asset Library
│
├── Models
│   ├── Flower
│   ├── Chair
│   └── Rock
│
├── Materials
│   ├── Wood
│   ├── Metal
│   └── Glass
│
└── Other Assets
```

Thay vì import thủ công nhiều lần, có thể đưa asset vào thư viện rồi kéo asset vào các project khác.

---

# 26. Thiết lập Asset Library

Theo bài học, Asset Library được thiết lập trong Preferences.

Workflow:

```text
Edit
  ↓
Preferences
  ↓
File Paths
  ↓
Asset Libraries
  ↓
Add Library Folder
```

Có thể hình dung:

```text
C:\BlenderAssets\
│
├── Nature\
├── Materials\
├── Props\
└── Characters\
```

Blender sẽ sử dụng thư mục đã cấu hình làm nguồn asset.

---

# 27. Mark as Asset

Không phải object nào trong `.blend` cũng tự động trở thành asset.

Cần sử dụng:

```text
Mark as Asset
```

Ví dụ:

```text
Flower Object
     ↓
Mark as Asset
     ↓
Reusable Asset
```

Trong bài học, giảng viên đánh dấu:

* Flower Object;
* Flower Material.

Sơ đồ:

```text
.blend File
│
├── Flower Object ──→ Mark as Asset
│
└── Flower Material ─→ Mark as Asset
```

---

# 28. Asset Library cần file `.blend`

Sau khi đánh dấu asset, file `.blend` cần được lưu vào thư mục thuộc Asset Library.

Ví dụ:

```text
MyAssetLibrary/
└── my_flower.blend
```

Trong:

```text
my_flower.blend
```

có:

```text
Flower Object   [Asset]
Flower Material [Asset]
```

Blender có thể đọc chúng thông qua Asset Browser.

---

# 29. Asset Browser

**Asset Browser** là editor dành cho việc tìm và sử dụng asset.

Workflow:

```text
Asset Library Folder
       ↓
.blend containing Assets
       ↓
Asset Browser
       ↓
Select Library
       ↓
Browse Assets
       ↓
Drag Asset into Scene
```

Ví dụ:

```text
My Asset Library
       │
       └── Flower
              ↓
       Drag into Viewport
              ↓
       Flower in Scene
```

---

# 30. Reuse Asset giữa nhiều project

Đây là lợi ích chính của Asset Library.

Không dùng Asset Library:

```text
Project A ── import flower.fbx
Project B ── import flower.fbx
Project C ── import flower.fbx
```

Dùng Asset Library:

```text
             Asset Library
                   │
             Flower Asset
             /     |      \
            ↓      ↓       ↓
       Project A Project B Project C
```

Điều này giúp workflow nhanh và có tổ chức hơn.

---

# 31. Import Method trong Asset Library

Asset Library có thể sử dụng nhiều phương thức đưa asset vào project.

Hai khái niệm bài học nhấn mạnh là:

```text
Append
Link
```

Có thể hiểu:

### Append

```text
Asset Library
     ↓
Copy
     ↓
Project
     ↓
Modify freely
```

### Link

```text
Asset Library
     ↓
Reference
     ↓
Project
     ↓
Source relationship retained
```

---

# 32. Asset Management Workflow

Một workflow quản lý asset tốt:

```text
Create Asset
     ↓
Clean Mesh
     ↓
Create Material
     ↓
Rename Properly
     ↓
Mark as Asset
     ↓
Save .blend in Asset Library
     ↓
Open Asset Browser
     ↓
Reuse in Future Projects
```

Ví dụ:

```text
Assets/
│
├── Nature/
│   ├── flower.blend
│   ├── tree.blend
│   └── rock.blend
│
├── Architecture/
│   ├── door.blend
│   └── window.blend
│
└── Materials/
    ├── wood.blend
    └── stone.blend
```

---

# 33. Pipeline quản lý project Blender

Toàn bộ nội dung quan trọng của bài có thể tóm tắt:

```text
                     BLENDER PROJECT
                           │
          ┌────────────────┼────────────────┐
          │                │                │
        .blend          Assets          Textures
          │                │                │
          │                │                │
          ▼                ▼                ▼
     Save / Open      Import / Append   External Data
                         / Link               │
                           │                  ▼
                           │          Find Missing Files
                           ▼
                     Asset Library
                           │
                           ▼
                     Asset Browser
                           │
                           ▼
                    Reuse in Projects
```

---

# 34. Các khái niệm quan trọng cần nhớ

| Thuật ngữ              | Nghĩa                    | Ghi nhớ                             |
| ---------------------- | ------------------------ | ----------------------------------- |
| **Open Source**        | Mã nguồn mở              | Blender có thể sử dụng miễn phí     |
| **`.blend`**           | File project Blender     | Định dạng chính của Blender         |
| **Import**             | Nhập dữ liệu             | File ngoài → Blender                |
| **Export**             | Xuất dữ liệu             | Blender → định dạng khác            |
| **FBX**                | Định dạng 3D             | Thường dùng trao đổi model          |
| **Link**               | Liên kết dữ liệu         | Reference tới `.blend` khác         |
| **Append**             | Sao chép dữ liệu         | Copy dữ liệu từ `.blend` khác       |
| **External Data**      | Dữ liệu ngoài            | Texture/image mà project tham chiếu |
| **Missing Texture**    | Texture bị mất đường dẫn | Thường hiển thị màu hồng tím        |
| **Find Missing Files** | Tìm file bị thiếu        | Relink texture tự động              |
| **Asset**              | Tài nguyên tái sử dụng   | Model, material...                  |
| **Asset Library**      | Thư viện asset           | Chứa asset dùng cho nhiều project   |
| **Asset Browser**      | Trình duyệt asset        | Duyệt và kéo asset vào scene        |
| **Mark as Asset**      | Đánh dấu làm asset       | Đưa datablock vào hệ thống asset    |
| **Shading Workspace**  | Workspace tạo vật liệu   | Material, Shader và Texture         |

---

# 35. Các lỗi beginner thường gặp

## Lỗi 1 — Không lưu project thường xuyên

Kết quả:

```text
Work
 ↓
Crash / Close
 ↓
Lost Progress
```

Nên hình thành thói quen:

```text
Ctrl + S
```

thường xuyên.

---

## Lỗi 2 — Di chuyển texture sau khi tạo material

Ví dụ:

```text
Before:
textures/wood.jpg

After:
desktop/wood.jpg
```

Blender có thể không tìm được đường dẫn cũ.

Kết quả:

```text
Pink Material
```

Cách xử lý:

```text
File
→ External Data
→ Find Missing Files
```

---

## Lỗi 3 — Chỉ copy `.blend`

Ví dụ gửi:

```text
cabin.blend
```

nhưng quên:

```text
textures/
```

Máy khác mở project:

```text
.blend found
texture missing
       ↓
Pink surfaces
```

---

## Lỗi 4 — Không tổ chức asset

Nếu mọi thứ nằm trong:

```text
Downloads/
Desktop/
New Folder/
New Folder (2)/
final_final/
```

project rất dễ bị lỗi đường dẫn.

Nên có cấu trúc project rõ ràng.

---

## Lỗi 5 — Nhầm Link và Append

Nhớ quy tắc:

```text
APPEND = COPY
LINK   = REFERENCE
```

Nếu muốn mang asset vào và sửa độc lập:

> thường nghĩ đến **Append**.

Nếu muốn sử dụng asset từ một thư viện chung:

> có thể cân nhắc **Link**.

---

# 36. Workflow quản lý file đề xuất cho khóa học

Anh có thể tổ chức toàn bộ khóa Blender theo dạng:

```text
Complete_Blender_Megacourse/
│
├── Section_01_Getting_Started/
│   ├── 001_Welcome/
│   │   └── 001_welcome.blend
│   │
│   └── 002_Downloading_First_Look/
│       └── 002_first_look.blend
│
├── Section_02_Modeling/
│
├── Section_03_Fantasy_Cabin/
│
├── Section_04_Materials_Rendering/
│
├── Assets/
│   ├── Models/
│   ├── Materials/
│   └── Textures/
│
└── Final/
    ├── fantasy_cabin.blend
    └── Renders/
```

Cách này đặc biệt hữu ích khi khóa học có nhiều bài thực hành.

---

# 37. Thực hành đề xuất

## Bài thực hành 1 — Cài Blender

* Mở trang Blender.
* Kiểm tra system requirements.
* Cài Blender.
* Khởi động phần mềm.

---

## Bài thực hành 2 — Tạo project đầu tiên

Tạo project mới và lưu:

```text
002_first_look.blend
```

Thử:

```text
File → Save As
```

Sau đó đóng Blender và mở lại file để kiểm tra.

---

## Bài thực hành 3 — Import object

Chuẩn bị một file:

```text
.fbx
```

Thử:

```text
File
→ Import
→ FBX
```

Quan sát object xuất hiện trong:

* 3D Viewport;
* Outliner.

---

## Bài thực hành 4 — Kiểm tra texture

Import một object có texture.

Chuyển sang:

```text
Shading Workspace
```

Xác định:

```text
Object
  ↓
Material
  ↓
Image Texture
  ↓
Texture File
```

---

## Bài thực hành 5 — Tạo lỗi Missing Texture

Chỉ nên làm với bản sao project thực hành.

```text
Texture
   ↓
Move to another folder
   ↓
Open .blend
   ↓
Observe Pink Material
```

Sau đó sửa bằng:

```text
File
→ External Data
→ Find Missing Files
```

Chọn folder mới chứa texture.

---

## Bài thực hành 6 — Tạo Asset Library

Tạo folder:

```text
Blender_Asset_Library/
```

Sau đó:

```text
Edit
→ Preferences
→ File Paths
→ Asset Libraries
```

Thêm folder vừa tạo.

---

## Bài thực hành 7 — Mark as Asset

Tạo một object đơn giản:

```text
Cube
```

đổi tên:

```text
Practice_Cube
```

sau đó:

```text
Mark as Asset
```

Lưu `.blend` vào thư mục Asset Library.

---

## Bài thực hành 8 — Reuse Asset

Mở một file Blender mới:

```text
File → New
```

Sau đó:

```text
Asset Browser
     ↓
My Asset Library
     ↓
Practice_Cube
     ↓
Drag into Scene
```

Nếu object xuất hiện thành công, anh đã hiểu workflow Asset Library cơ bản.

---

# 38. Bài tập mở rộng

Tạo một thư viện asset nhỏ:

```text
My_First_Asset_Library
│
├── Cube
├── Sphere
├── Cylinder
└── Material
```

Yêu cầu:

* tạo ít nhất 3 object;
* đặt tên rõ ràng;
* tạo ít nhất 1 material;
* Mark as Asset;
* lưu trong Asset Library;
* tạo file Blender mới;
* kéo các asset từ Asset Browser vào scene.

Kết quả cuối:

```text
Asset Creation
      ↓
Asset Library
      ↓
New Project
      ↓
Asset Browser
      ↓
Reusable Scene
```

---

# 39. Checklist hoàn thành bài 002

## Cài đặt

* [ ] Đã biết Blender là phần mềm mã nguồn mở.
* [ ] Đã biết nơi kiểm tra system requirements.
* [ ] Đã cài và mở Blender.
* [ ] Đã nhận biết Splash Screen.

## Giao diện

* [ ] Đã nhận biết Top Bar.
* [ ] Đã nhận biết Workspace.
* [ ] Đã nhận biết 3D Viewport.
* [ ] Đã nhận biết Outliner.
* [ ] Đã nhận biết Status Bar.

## File Management

* [ ] Đã tạo project Blender mới.
* [ ] Đã sử dụng **Save As**.
* [ ] Đã biết định dạng `.blend`.
* [ ] Đã hiểu Import và Export.
* [ ] Đã hiểu sơ bộ Link và Append.

## Texture

* [ ] Đã hiểu texture có thể nằm ngoài `.blend`.
* [ ] Đã hiểu nguyên nhân Missing Texture.
* [ ] Đã biết màu hồng/magenta thường báo texture bị thiếu.
* [ ] Đã biết **Find Missing Files**.
* [ ] Đã hiểu lý do cần tổ chức thư mục project.

## Asset Library

* [ ] Đã hiểu Asset Library là gì.
* [ ] Đã biết vị trí cấu hình Asset Library.
* [ ] Đã biết **Mark as Asset**.
* [ ] Đã biết Asset Browser.
* [ ] Đã thử tái sử dụng asset trong một project mới.

---

# 40. Những điều quan trọng nhất cần nhớ

### 1. Project Blender sử dụng `.blend`

```text
Project → .blend
```

### 2. File `.blend` có thể phụ thuộc vào texture bên ngoài

```text
.blend
   ↓
External Texture
```

### 3. Màu hồng tím thường có nghĩa là mất texture

```text
Pink / Magenta
      =
Missing Texture
```

### 4. Có thể sửa bằng

```text
File
→ External Data
→ Find Missing Files
```

### 5. Append và Link không giống nhau

```text
Append → Copy
Link   → Reference
```

### 6. Asset Library giúp tái sử dụng dữ liệu

```text
Create Once
     ↓
Asset Library
     ↓
Reuse Many Times
```

---

# 41. Tóm tắt bài học

Bài **Downloading Blender & First Look** đặt nền móng cho việc làm việc với Blender trước khi bắt đầu modeling.

Workflow chính:

```text
Download Blender
      ↓
Install
      ↓
Open Blender
      ↓
Understand Basic Interface
      ↓
Save .blend
      ↓
Import Assets
      ↓
Manage Textures
      ↓
Fix Missing Files
      ↓
Understand Link / Append
      ↓
Create Asset Library
      ↓
Reuse Assets
```

Ba kiến thức đáng nhớ nhất của bài là:

> **`.blend` là file project chính của Blender.**

> **Nếu Blender mất đường dẫn đến texture, material thường xuất hiện màu hồng/magenta.**

> **Asset Library cho phép xây dựng một thư viện model và material để tái sử dụng giữa nhiều project.**

Bài học tiếp theo sẽ đi sâu hơn vào **Workspaces** và cách **navigate trong 3D Viewport**, là kỹ năng nền tảng để bắt đầu làm việc thực sự trong không gian 3D.

---

## Ghi chú về nguồn

Nội dung trên được biên soạn từ **metadata và transcript đầy đủ của bài 002 — Downloading Blender & First Look** do người dùng cung cấp.

Một số thuật ngữ và sơ đồ đã được chuẩn hóa để dễ học và ghi chú. Các khái niệm như **Link, Append, External Data và Asset Library** được giải thích ở mức nhập môn phù hợp với nội dung bài; các workflow nâng cao hơn có thể được học ở các bài sau.
