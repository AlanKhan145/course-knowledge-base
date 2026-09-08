# 024 — Library Editing

| Thuộc tính     | Nội dung                               |
| -------------- | -------------------------------------- |
| **Phần**       | 03 — Materials                         |
| **Thời lượng** | 0:56                                   |
| **Chủ đề**     | Chỉnh sửa và cập nhật Material Library |

---

## 1. Mục tiêu bài học

Sau bài này, bạn có thể:

* Xem toàn bộ **material** đang tồn tại trong file Blender.
* Phân biệt material thông thường và material đã được đưa vào **library/asset library**.
* Quản lý material tập trung thay vì phải chọn từng object.
* Thêm, xóa hoặc cập nhật material trong thư viện.
* Lưu đúng file `.blend` nguồn để những thay đổi của thư viện không bị mất.

---

## 2. Vấn đề cần giải quyết

Trong một project lớn, material có thể nằm trên rất nhiều object.

Nếu chỉ kiểm tra trong **Material Properties**, bạn thường phải:

```text
Chọn Object
    ↓
Mở Material Properties
    ↓
Xem material
    ↓
Chọn Object khác
    ↓
Lặp lại...
```

Cách này không thuận tiện khi muốn quản lý toàn bộ thư viện.

Giải pháp là sử dụng **Outliner** và chuyển chế độ hiển thị sang **Blender File**.

---

# 3. Xem toàn bộ Material trong file Blender

## Bước 1 — Mở Outliner

Trong giao diện Blender, tìm cửa sổ **Outliner**.

Thông thường Outliner nằm ở góc trên bên phải.

---

## Bước 2 — Đổi chế độ hiển thị

Trong Outliner, mở menu chế độ hiển thị.

Thay vì:

```text
View Layer
```

hãy chọn:

```text
Blender File
```

### Ý nghĩa

* **View Layer** → chủ yếu hiển thị Collection và Object của scene.
* **Blender File** → hiển thị các datablock bên trong toàn bộ file `.blend`.

Ví dụ:

```text
Blender File
│
├── Actions
├── Cameras
├── Collections
├── Images
├── Materials
├── Meshes
├── Objects
├── Textures
└── Worlds
```

Đây là cách thuận tiện để kiểm tra dữ liệu thực sự đang tồn tại trong project.

---

# 4. Mở danh sách Materials

Trong cấu trúc **Blender File**, mở:

```text
Blender File
└── Materials
```

Bạn sẽ nhìn thấy toàn bộ material đang được lưu trong project.

Ví dụ:

```text
Materials
├── MAT_Glass_Clear
├── MAT_Metal_Gold
├── MAT_Metal_Steel
├── MAT_Plastic_Black
├── MAT_Plastic_Gray
└── MAT_Wood_Oak
```

Điều này đặc biệt hữu ích khi file library chứa hàng chục hoặc hàng trăm material.

---

# 5. Nhận biết Material thuộc Library

Các material đã được đánh dấu hoặc quản lý như asset/library có thể xuất hiện với **biểu tượng tương ứng** bên cạnh datablock.

Nhờ đó bạn có thể nhanh chóng phân biệt:

```text
Material trong project
        │
        ├── Material thông thường
        │
        └── Material dùng cho Library
```

Thay vì phải mở từng material riêng lẻ để kiểm tra.

---

# 6. Quản lý nhiều Material

Khi đã nhìn thấy toàn bộ material trong file, việc quản lý trở nên thuận tiện hơn.

Bạn có thể thực hiện các công việc như:

* Chọn material cần chỉnh sửa.
* Kiểm tra material nào đang tồn tại.
* Đưa material phù hợp vào thư viện.
* Loại bỏ material không còn cần thiết.
* Đổi tên material.
* Cập nhật shader.
* Kiểm tra các material trùng lặp.
* Chuẩn hóa naming.

Ví dụ, một library ban đầu có thể bị lộn xộn:

```text
Material
Material.001
Material.002
Gold
plastic
Glass2
```

Nên chuẩn hóa thành:

```text
MAT_Metal_Gold
MAT_Plastic_Gray
MAT_Glass_Clear
```

---

# 7. Quy trình chỉnh sửa Material Library

Một workflow an toàn có thể là:

```text
Mở file master của Material Library
                ↓
Outliner → Blender File
                ↓
Materials
                ↓
Tìm material cần chỉnh
                ↓
Kiểm tra object đang sử dụng
                ↓
Chỉnh Shader / thông số
                ↓
Kiểm tra preview
                ↓
Cập nhật Library
                ↓
Save file .blend
```

---

# 8. Ví dụ chỉnh sửa một Material

Giả sử thư viện có:

```text
MAT_Plastic_Gray
```

Bạn nhận thấy material hiện quá bóng.

### Trước

```text
Roughness = 0.15
```

Bạn sửa thành:

```text
Roughness = 0.35
```

Sau đó:

1. Kiểm tra material trên **shader ball**.
2. Kiểm tra object nào đang dùng material này.
3. Đảm bảo thay đổi không làm hỏng các preview.
4. Lưu lại file library.

---

# 9. Cẩn thận với Material dùng chung

Đây là điểm rất quan trọng.

Một material có thể được nhiều object sử dụng đồng thời:

```text
             MAT_Plastic_Gray
              /      |      \
             /       |       \
        Object A  Object B  Object C
```

Nếu bạn sửa:

```text
MAT_Plastic_Gray
```

thì tất cả object đang tham chiếu đến material đó có thể thay đổi theo.

Vì vậy trước khi chỉnh sửa material gốc, nên xác định:

> **Material này đang được sử dụng ở đâu?**

---

## Khi nào nên tạo biến thể?

Ví dụ bạn có:

```text
MAT_Plastic_Gray
```

nhưng chỉ muốn một object tối hơn.

Không nên nhất thiết sửa material gốc thành màu tối.

Có thể tạo:

```text
MAT_Plastic_Gray
MAT_Plastic_DarkGray
```

Sơ đồ:

```text
Material gốc
MAT_Plastic_Gray
      │
      ├── Object A
      ├── Object B
      └── Object C

Material mới
MAT_Plastic_DarkGray
      │
      └── Object D
```

Nhờ vậy bạn không phá material đang được sử dụng ở những nơi khác.

---

# 10. Lưu file Library sau khi chỉnh sửa

Sau các thao tác như:

* thêm material,
* xóa material,
* đổi tên,
* thay đổi shader,
* cập nhật preview,

hãy **Save** lại file `.blend` chứa thư viện.

Ví dụ cấu trúc:

```text
Material_Library/
│
├── Material_Library.blend
│
└── Preview/
```

File:

```text
Material_Library.blend
```

đóng vai trò **master source** của thư viện.

---

## Tại sao phải lưu đúng file?

Material Library được liên kết với file nguồn.

Workflow:

```text
Material_Library.blend
        ↓
Asset / Material Library
        ↓
Project A
Project B
Project C
```

Nếu bạn chỉnh sửa library nhưng không lưu file nguồn:

```text
Chỉnh Material
      ↓
Không Save
      ↓
Đóng Blender
      ↓
Thay đổi bị mất
```

---

# 11. Quy trình Library hoàn chỉnh

```text
┌───────────────────────────┐
│ Material_Library.blend    │
└─────────────┬─────────────┘
              ↓
      Outliner → Blender File
              ↓
          Materials
              ↓
      Kiểm tra / chỉnh sửa
              ↓
      Shader Ball Preview
              ↓
       Mark / Update Asset
              ↓
         Save .blend
              ↓
┌─────────────┴─────────────┐
│                           │
↓                           ↓
Project A                 Project B
```

---

# 12. Nguyên tắc quản lý tốt

### 1. Không sửa material mà chưa biết nơi sử dụng

Một material có thể được chia sẻ bởi nhiều object.

### 2. Đặt tên rõ ràng

Nên dùng:

```text
MAT_[Loại]_[Biến thể]
```

Ví dụ:

```text
MAT_Metal_Steel
MAT_Metal_Gold
MAT_Plastic_Black
MAT_Plastic_Gray
MAT_Glass_Clear
```

### 3. Giữ file master riêng

Không nên biến một scene sản xuất phức tạp thành file library chính.

Nên tách:

```text
Library
└── Material_Library.blend

Projects
├── Product_A.blend
├── Product_B.blend
└── Product_C.blend
```

### 4. Kiểm tra preview sau mỗi chỉnh sửa lớn

Đặc biệt khi thay đổi:

* Base Color
* Metallic
* Roughness
* Transmission
* IOR
* Normal
* Displacement

---

# 13. Checklist

* [ ] Biết chuyển **Outliner → Blender File**.
* [ ] Biết mở nhóm **Materials** để xem toàn bộ material.
* [ ] Xác định material đang được sử dụng ở object nào trước khi sửa.
* [ ] Không chỉnh material dùng chung một cách tùy tiện.
* [ ] Tạo material variant khi cần thay đổi riêng cho một object.
* [ ] Kiểm tra material trên shader ball sau khi chỉnh.
* [ ] Cập nhật material/library khi cần.
* [ ] Lưu lại file master của Material Library.
* [ ] Kiểm tra việc chỉnh sửa không làm hỏng các scene đang tham chiếu.

---

## 14. Ghi nhớ nhanh

> **Outliner → Blender File → Materials** là nơi thuận tiện để xem và quản lý toàn bộ material trong file `.blend`.

Và workflow quan trọng nhất của bài này là:

```text
Tìm Material
→ Kiểm tra nơi sử dụng
→ Chỉnh sửa
→ Kiểm tra Preview
→ Cập nhật Library
→ Save file Master
```

**Nguyên tắc cốt lõi:** Material Library là tài nguyên dùng lại cho nhiều project, vì vậy mọi chỉnh sửa material gốc cần được thực hiện có kiểm soát.
