# 089 — Không gian Sculpting mới trong Blender 4.3

| Thuộc tính            | Nội dung                                                           |
| --------------------- | ------------------------------------------------------------------ |
| **Module**            | Module 06 — Sculpting a Cartoon Head                               |
| **Bài học**           | The New Sculpting Workspace – Blender 4.3                          |
| **Thời lượng**        | 4 phút 54 giây                                                     |
| **Phiên bản Blender** | Blender 4.3 trở lên                                                |
| **Chủ đề chính**      | Giao diện Sculpting mới, Voxel Remesh và lưu brush dưới dạng Asset |

---

## 1. Mục tiêu bài học

Sau bài học này, anh có thể:

* Nhận biết những thay đổi của **Sculpting Workspace** trong Blender 4.3.
* Hiểu lý do các brush được chuyển xuống khu vực phía dưới màn hình.
* Biết cách bổ sung mật độ lưới bằng **Voxel Remesh** trước khi sculpt.
* Sử dụng các phím tắt cơ bản để điều chỉnh brush.
* Tạo một brush mới từ brush có sẵn.
* Gắn ảnh alpha hoặc texture cho brush.
* Lưu brush dưới dạng **Asset** để tái sử dụng trong các file Blender khác.

> Đây chỉ là phần giới thiệu nhanh. Các công cụ sculpt sẽ được giải thích chi tiết hơn trong những bài học tiếp theo.

---

## 2. Thay đổi lớn trong Blender 4.3

Trong Blender 4.2 trở xuống, danh sách brush sculpt thường được hiển thị theo dạng thanh công cụ ở cạnh bên.

Từ Blender 4.3, các brush được đặt trong một khu vực mới ở phía dưới viewport gọi là:

> **Asset Shelf — Kệ tài nguyên**

Các brush hiện được quản lý như những **Asset**.

Điều này mang lại một số lợi ích:

* Dễ xem và lựa chọn brush.
* Dễ nhập brush từ bên ngoài.
* Có thể tự tạo brush riêng.
* Có thể lưu brush để sử dụng lại.
* Brush đã lưu có thể xuất hiện trong những file Blender mới.

### Sơ đồ giao diện tổng quát

```text
┌──────────────────────────────────────────────────────┐
│ Header: Radius, Strength, Remesh và thiết lập brush  │
├──────────────────────────────────────────────────────┤
│                                                      │
│                  3D Viewport                         │
│                                                      │
│             Khu vực sculpt mô hình                   │
│                                                      │
├──────────────────────────────────────────────────────┤
│ Asset Shelf: Draw | Clay | Grab | Smooth | Brush... │
└──────────────────────────────────────────────────────┘
```

---

## 3. Asset Shelf — Kệ chứa brush

Danh sách brush sculpt được hiển thị ở phía dưới màn hình.

Anh có thể:

* Cuộn con lăn chuột để xem thêm brush.
* Thay đổi kích thước biểu tượng brush.
* Thay đổi số hàng hiển thị.
* Bật hiển thị tên của brush.
* Lọc brush theo từng nhóm.
* Kéo mép Asset Shelf để thay đổi chiều cao của khu vực này.

Khi mới học sculpt, nên để chế độ hiển thị **tất cả brush** để dễ tìm và làm quen với công cụ.

Mặc dù Blender 4.3 có thêm một số brush mới, các brush cũ được sử dụng trong khóa học vẫn còn, vì vậy anh vẫn có thể tiếp tục học bình thường.

---

## 4. Vì sao không thể sculpt tốt trên khối lập phương mặc định?

Sculpting tác động trực tiếp lên các **đỉnh — vertices** của mesh.

Khối lập phương mặc định chỉ có:

* 8 đỉnh.
* 12 cạnh.
* 6 mặt.

Vì số lượng đỉnh quá ít, brush gần như không có đủ hình học để tạo ra chi tiết.

```text
Mesh ít đỉnh
    ↓
Brush chỉ có thể di chuyển vài điểm
    ↓
Bề mặt biến dạng thô và thiếu chi tiết
```

Để sculpt hiệu quả, cần bổ sung thêm đỉnh cho mesh bằng **Voxel Remesh**.

---

## 5. Voxel Remesh

### 5.1. Khái niệm

**Voxel Remesh** tạo lại toàn bộ mesh với mật độ lưới tương đối đồng đều.

Hai thiết lập quan trọng nhất là:

| Thiết lập      | Ý nghĩa                                                   |
| -------------- | --------------------------------------------------------- |
| **Voxel Size** | Xác định kích thước của các voxel và độ chi tiết của mesh |
| **Remesh**     | Tạo lại mesh dựa trên giá trị Voxel Size                  |

### 5.2. Ý nghĩa của Voxel Size

* **Voxel Size lớn** → ít polygon, bề mặt thô, xử lý nhanh.
* **Voxel Size nhỏ** → nhiều polygon, chi tiết cao, xử lý nặng hơn.

```text
Voxel Size lớn
      ↓
Ít mặt lưới
      ↓
Sculpt khối lớn, ít chi tiết

Voxel Size nhỏ
      ↓
Nhiều mặt lưới
      ↓
Sculpt được chi tiết nhỏ hơn
```

Ví dụ:

|      Voxel Size | Đặc điểm                                        |
| --------------: | ----------------------------------------------- |
|           `0.1` | Mật độ lưới tương đối thấp                      |
|          `0.03` | Mật độ lưới cao hơn, có thể tạo chi tiết rõ hơn |
| Giá trị rất nhỏ | Mesh rất nặng, có thể làm Blender chậm          |

> Giá trị phù hợp phụ thuộc vào kích thước của object. Không nên giảm Voxel Size quá thấp ngay từ đầu.

---

## 6. Quy trình Remesh nhanh

### Cách sử dụng giao diện

1. Mở menu **Remesh**.
2. Nhập giá trị **Voxel Size**.
3. Nhấn nút **Remesh**.
4. Dùng brush để kiểm tra mật độ lưới mới.

### Cách sử dụng phím tắt

1. Nhấn `R`.
2. Di chuyển chuột sang trái hoặc phải để điều chỉnh Voxel Size.
3. Nhấn chuột trái để xác nhận.
4. Nhấn `Ctrl + R` để Remesh.

```text
Nhấn R
   ↓
Điều chỉnh Voxel Size
   ↓
Nhấn chuột trái
   ↓
Nhấn Ctrl + R
   ↓
Mesh được tạo lại
   ↓
Bắt đầu sculpt
```

---

## 7. Các phím tắt Sculpting cơ bản

| Phím tắt               | Chức năng                               |
| ---------------------- | --------------------------------------- |
| `R`                    | Điều chỉnh Voxel Size                   |
| `Ctrl + R`             | Thực hiện Voxel Remesh                  |
| `F`                    | Điều chỉnh bán kính brush — Radius      |
| `Shift + F`            | Điều chỉnh độ mạnh của brush — Strength |
| Giữ `Shift` khi sculpt | Tạm thời sử dụng chức năng Smooth       |
| Chuột phải             | Hủy thao tác điều chỉnh hiện tại        |

### Radius

**Radius** xác định kích thước vùng mà brush tác động.

* Radius lớn phù hợp để chỉnh hình khối tổng thể.
* Radius nhỏ phù hợp để tạo các chi tiết nhỏ.

### Strength

**Strength** xác định mức độ tác động của brush lên mesh.

* Strength thấp tạo thay đổi nhẹ.
* Strength cao tạo thay đổi mạnh và nhanh.

### Smooth

Giữ `Shift` trong khi kéo chuột để làm mượt bề mặt.

Smooth thường được sử dụng để:

* Làm mềm các vết brush quá gắt.
* Giảm bề mặt gồ ghề.
* Kết nối các vùng sculpt với nhau.
* Làm sạch hình khối trước khi tạo thêm chi tiết.

---

## 8. Kiểm tra lưới sau khi Remesh

Sau khi Remesh, có thể chuyển sang **Edit Mode** để quan sát số lượng đỉnh được tạo ra.

```text
Object ban đầu
   ↓
Voxel Remesh
   ↓
Mesh có thêm nhiều vertices
   ↓
Brush có đủ hình học để biến dạng bề mặt
```

Sau khi kiểm tra, quay lại **Sculpt Mode** để tiếp tục sculpt.

> Không nên chỉnh sửa ngẫu nhiên các đỉnh trong Edit Mode sau khi đã bắt đầu sculpt, trừ khi anh hiểu rõ ảnh hưởng của việc đó đến bề mặt.

---

## 9. Tạo brush mới từ brush có sẵn

Phần lớn brush tùy chỉnh có thể được tạo dựa trên brush **Draw**.

### Quy trình tạo brush mới

1. Tìm brush **Draw** trong Asset Shelf.
2. Nhấn chuột phải lên brush.
3. Chọn **Duplicate Asset**.
4. Đặt tên cho brush mới.
5. Chỉnh sửa thiết lập của brush.
6. Nhấn chuột phải và chọn **Save Changes to Asset**.

Ví dụ trong bài học:

* `ROC 1`
* `ROC 2`

### Sơ đồ quy trình

```text
Draw Brush
    ↓
Duplicate Asset
    ↓
Đổi tên brush
    ↓
Chỉnh Radius, Strength, Texture, Stroke...
    ↓
Save Changes to Asset
    ↓
Brush được lưu để sử dụng lại
```

---

## 10. Đổi tên brush đúng cách

Sau khi đổi tên brush trong phần thiết lập, tên hiển thị trong Asset Shelf có thể chưa được cập nhật ngay.

Để lưu tên mới:

1. Chọn brush.
2. Thay đổi tên.
3. Nhấn chuột phải lên brush trong Asset Shelf.
4. Chọn **Save Changes to Asset**.

Nếu không thực hiện bước lưu, brush có thể vẫn sử dụng tên hoặc thiết lập cũ.

---

## 11. Gắn texture hoặc alpha cho brush

Brush có thể sử dụng một ảnh texture để tạo ra các chi tiết phức tạp như:

* Đá.
* Da.
* Vết nứt.
* Vảy.
* Nếp nhăn.
* Bề mặt kim loại.
* Bề mặt hữu cơ.

### Quy trình cơ bản

1. Chọn brush tùy chỉnh.
2. Mở phần **Texture Slot**.
3. Tạo một texture mới.
4. Chuyển sang **Texture Properties**.
5. Mở ảnh alpha từ máy tính.
6. Quay lại phần thiết lập brush.
7. Kiểm tra ảnh đã xuất hiện trong Texture Slot.

```text
Brush mới
   ↓
Tạo Texture Slot
   ↓
Mở Texture Properties
   ↓
Nạp ảnh Alpha
   ↓
Thiết lập kiểu Stroke
   ↓
Sculpt chi tiết lên bề mặt
```

### Alpha texture là gì?

Alpha texture thường là ảnh đen trắng:

* Vùng sáng tạo tác động mạnh.
* Vùng tối tạo ít hoặc không có tác động.
* Các mức xám tạo cường độ trung gian.

Nhờ đó, một ảnh 2D có thể được dùng để tạo chi tiết nổi hoặc lõm trên bề mặt 3D.

---

## 12. Stroke Method: Anchored

Trong bài học, **Stroke Method** được chuyển sang chế độ **Anchored**.

Với Anchored:

1. Nhấn chuột tại vị trí muốn đặt chi tiết.
2. Giữ và kéo chuột.
3. Kích thước alpha tăng hoặc giảm theo khoảng kéo.
4. Thả chuột để áp dụng brush.

Chế độ này phù hợp với các chi tiết cần được đóng dấu tại một vị trí cụ thể, chẳng hạn:

* Khối đá.
* Vết lõm.
* Vết nứt.
* Lỗ chân lông lớn.
* Chi tiết trang trí.

```text
Nhấn chuột
    ↓
Giữ và kéo
    ↓
Điều chỉnh kích thước alpha
    ↓
Thả chuột
    ↓
Chi tiết được đặt lên mesh
```

---

## 13. Lưu brush vào Asset Library

Sau khi hoàn thiện brush:

1. Nhấn chuột phải lên brush.
2. Chọn **Save Changes to Asset**.
3. Các thiết lập hiện tại được lưu vào Asset Library.

Những thông tin có thể được lưu cùng brush gồm:

* Tên brush.
* Radius.
* Strength.
* Texture hoặc alpha.
* Stroke Method.
* Các thiết lập sculpt liên quan.

Ưu điểm lớn nhất là brush vẫn có thể xuất hiện khi anh:

* Tạo file Blender mới.
* Không lưu file sculpt hiện tại.
* Mở lại Sculpting Workspace trong một dự án khác.

---

## 14. Quy trình tạo một Rock Brush hoàn chỉnh

```text
Chọn Draw Brush
       ↓
Duplicate Asset
       ↓
Đặt tên Rock Brush
       ↓
Tạo Texture Slot
       ↓
Mở ảnh Rock Alpha
       ↓
Chọn Stroke Method = Anchored
       ↓
Remesh object với mật độ phù hợp
       ↓
Thử brush trên bề mặt
       ↓
Điều chỉnh Radius và Strength
       ↓
Save Changes to Asset
       ↓
Tái sử dụng trong file Blender khác
```

---

## 15. Quy trình thực hành gợi ý

### Bước 1: Mở Sculpting Workspace

* Mở Blender 4.3 trở lên.
* Chọn workspace **Sculpting** trên thanh workspace.

### Bước 2: Kiểm tra Asset Shelf

* Quan sát các brush ở phía dưới màn hình.
* Cuộn con lăn để xem toàn bộ danh sách.
* Thử thay đổi kích thước biểu tượng.
* Bật tên brush nếu cần.

### Bước 3: Remesh khối lập phương

* Chọn khối lập phương.
* Chuyển sang Sculpt Mode.
* Nhấn `R` để điều chỉnh Voxel Size.
* Nhấn `Ctrl + R` để Remesh.

### Bước 4: Thử sculpt

* Chọn Draw Brush.
* Nhấn `F` để thay đổi Radius.
* Nhấn `Shift + F` để thay đổi Strength.
* Kéo chuột trên bề mặt.
* Giữ `Shift` để làm mượt.

### Bước 5: Tạo brush tùy chỉnh

* Duplicate Draw Brush.
* Đặt tên mới.
* Thêm ảnh alpha.
* Chuyển Stroke Method sang Anchored.
* Lưu thay đổi vào Asset Library.

---

## 16. Lỗi thường gặp

### 16.1. Brush không tạo được chi tiết

**Nguyên nhân:** Mesh có quá ít vertices.

**Cách khắc phục:**

* Giảm Voxel Size.
* Nhấn `Ctrl + R` để Remesh.
* Sculpt lại sau khi mesh đã có đủ mật độ.

---

### 16.2. Đã thay đổi Voxel Size nhưng mesh không thay đổi

**Nguyên nhân:** Thay đổi Voxel Size không tự động tạo lại mesh.

**Cách khắc phục:**

* Sau khi thay đổi giá trị, phải nhấn **Remesh**.
* Hoặc sử dụng `Ctrl + R`.

```text
Thay đổi Voxel Size ≠ Đã Remesh

Thay đổi Voxel Size
        +
Nhấn Ctrl + R
        =
Mesh mới
```

---

### 16.3. Voxel Size quá nhỏ làm Blender chậm

**Nguyên nhân:** Remesh tạo ra quá nhiều polygon.

**Cách khắc phục:**

* Hoàn tác thao tác nếu có thể.
* Tăng Voxel Size.
* Chỉ dùng mật độ cao khi thực sự cần chi tiết nhỏ.
* Sculpt hình khối lớn trước, chi tiết nhỏ sau.

---

### 16.4. Brush mới không xuất hiện trong file khác

**Nguyên nhân có thể:**

* Chưa chọn **Save Changes to Asset**.
* Brush chỉ được chỉnh sửa tạm thời.
* Asset chưa được lưu đúng thư viện.

**Cách khắc phục:**

* Nhấn chuột phải lên brush.
* Chọn **Save Changes to Asset**.
* Mở một file mới để kiểm tra lại.

---

### 16.5. Đổi tên nhưng Asset Shelf vẫn hiện tên cũ

**Nguyên nhân:** Thay đổi chưa được lưu vào Asset.

**Cách khắc phục:**

* Nhấn chuột phải lên brush.
* Chọn **Save Changes to Asset**.

---

### 16.6. Texture không xuất hiện trên brush

**Nguyên nhân có thể:**

* Chưa tạo Texture Slot.
* Chưa mở ảnh trong Texture Properties.
* Đang chỉnh nhầm texture.
* Ảnh alpha không có độ tương phản phù hợp.

**Cách khắc phục:**

* Kiểm tra lại Texture Slot.
* Mở đúng ảnh alpha.
* Quay lại Active Tool Settings.
* Kiểm tra Stroke Method và Mapping.

---

## 17. Phím tắt cần ghi nhớ

| Phím tắt     | Chức năng                                                   |
| ------------ | ----------------------------------------------------------- |
| `R`          | Điều chỉnh Voxel Size                                       |
| `Ctrl + R`   | Voxel Remesh                                                |
| `F`          | Điều chỉnh kích thước brush                                 |
| `Shift + F`  | Điều chỉnh Strength                                         |
| Giữ `Shift`  | Smooth tạm thời                                             |
| Chuột phải   | Hủy thao tác đang thực hiện                                 |
| `Tab`        | Chuyển giữa Object Mode và Edit Mode trong ngữ cảnh phù hợp |
| `Ctrl + Tab` | Mở pie menu lựa chọn chế độ làm việc                        |

---

## 18. Checklist thực hành

* [ ] Đã mở Sculpting Workspace trong Blender 4.3.
* [ ] Đã nhận biết Asset Shelf ở phía dưới viewport.
* [ ] Đã cuộn và xem danh sách brush.
* [ ] Đã thay đổi kích thước hiển thị của brush.
* [ ] Đã hiểu sculpt tác động trực tiếp lên vertices.
* [ ] Đã điều chỉnh Voxel Size bằng phím `R`.
* [ ] Đã thực hiện Remesh bằng `Ctrl + R`.
* [ ] Đã thử thay đổi Radius bằng `F`.
* [ ] Đã thử thay đổi Strength bằng `Shift + F`.
* [ ] Đã dùng `Shift` để làm mượt bề mặt.
* [ ] Đã Duplicate một brush có sẵn.
* [ ] Đã đổi tên brush mới.
* [ ] Đã thêm ảnh alpha cho brush.
* [ ] Đã thử Stroke Method dạng Anchored.
* [ ] Đã chọn Save Changes to Asset.
* [ ] Đã kiểm tra brush trong một file Blender mới.

---

## 19. Ghi nhớ nhanh

```text
Brush nằm ở đâu?
→ Asset Shelf phía dưới viewport.

Không sculpt được chi tiết?
→ Mesh chưa có đủ vertices.

Tăng vertices bằng cách nào?
→ Voxel Remesh.

Chỉnh Voxel Size?
→ R.

Thực hiện Remesh?
→ Ctrl + R.

Chỉnh kích thước brush?
→ F.

Chỉnh độ mạnh?
→ Shift + F.

Làm mượt nhanh?
→ Giữ Shift.

Lưu brush tùy chỉnh?
→ Chuột phải → Save Changes to Asset.
```

---

## 20. Tóm tắt bài học

Blender 4.3 thay đổi đáng kể giao diện Sculpting bằng cách chuyển các brush xuống **Asset Shelf** ở phía dưới viewport. Các brush hiện được quản lý như Asset, giúp người dùng dễ dàng nhân bản, chỉnh sửa, lưu trữ và tái sử dụng trong nhiều dự án.

Để sculpt hiệu quả, mesh phải có đủ số lượng đỉnh. Công cụ **Voxel Remesh** được sử dụng để tạo lại mesh với mật độ đồng đều. Có thể dùng `R` để điều chỉnh Voxel Size và `Ctrl + R` để thực hiện Remesh.

Các thao tác sculpt cơ bản gồm:

* `F` để điều chỉnh Radius.
* `Shift + F` để điều chỉnh Strength.
* Giữ `Shift` để làm mượt.
* Duplicate Asset để tạo brush mới.
* Gắn alpha texture để tạo chi tiết đặc biệt.
* Sử dụng Anchored Stroke để đóng dấu texture.
* Chọn Save Changes to Asset để lưu brush lâu dài.

Đây là nền tảng quan trọng trước khi bắt đầu sculpt đầu nhân vật hoạt hình trong các bài học tiếp theo.

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
