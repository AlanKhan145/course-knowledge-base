# 245 — Character Creation Pt. 1
# 245 — Character Creation Pt. 1

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 36 — Bonus: Fast Learning |
| **Bài học** | Character Creation Pt. 1 |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 1:08:54 |
| **Ngôn ngữ** | English |

## Phạm vi ôn tập

Phần này ôn lại các công cụ Blender cần cho character workflow: preferences, UI, Object/Edit Menu, material and shading, vertex painting và texture painting. Nội dung được tổng hợp từ [Section 22 — Fundamentals of Blender](../22%20-%20Character%20Creation-%20Fundamentals%20of%20Blender/README.md).

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Chuẩn bị Blender và workspace phù hợp cho modeling nhân vật.
- Dùng các thao tác trong Object Menu và Edit Menu mà không làm mất kiểm soát scene.
- Phân biệt material, vertex data và texture paint trong workflow tạo màu.
- Hiểu vai trò của UV trước khi texture paint.
- Tổ chức object, material và texture để chuyển sang modeling nhân vật.

## Nội dung trọng tâm

### 1. UI, preferences và menu

Character workflow cần thao tác lặp lại nhiều, vì vậy interface, navigation, shortcuts và preferences phải được thiết lập trước. Object Menu xử lý object ở cấp scene; Edit Menu xử lý geometry bên trong object. Phân biệt hai cấp này giúp tránh chỉnh nhầm dữ liệu.

### 2. Material và shading

Material dùng shader để quyết định màu, roughness, phản xạ và cách object phản ứng với light. Shading workspace là nơi kiểm tra node, texture input, viewport và HDRI preview trước khi đưa material vào scene nhân vật.

### 3. Vertex và texture painting

Vertex data có thể phục vụ vertex groups, rigging hoặc particle workflow; texture painting tạo hình ảnh màu trực tiếp trên model và cần UV phù hợp. Không nên xem hai thao tác này là cùng một loại dữ liệu chỉ vì đều có chữ paint.

## Quy trình rút gọn

1. Kiểm tra preferences, workspace và cách hiển thị phím tắt.
2. Tạo một object thử nghiệm, luyện Object Menu rồi chuyển sang Edit Menu.
3. Tạo material, chỉnh shader và quan sát trong Material Preview.
4. Chuẩn bị UV, tạo image texture và thử Texture Paint trên một vùng nhỏ.
5. Lưu file mẫu làm starting point cho character project.

## Thực hành đề xuất

Tạo một đầu nhân vật đơn giản từ primitive. Đặt tên object và material, tạo một material cơ bản, thử vertex data trên một nhóm nhỏ rồi unwrap UV và texture paint một màu phụ. Ghi chú rõ dữ liệu nào đang điều khiển màu và dữ liệu nào chỉ phục vụ nhóm/rig.

## Checklist

- [ ] Đã chuẩn bị preferences và workspace.
- [ ] Đã luyện Object Menu và Edit Menu trên object thử nghiệm.
- [ ] Đã tạo material và kiểm tra shader trong viewport.
- [ ] Đã unwrap UV trước khi texture paint.
- [ ] Đã phân biệt material, vertex data và texture image.
- [ ] Đã lưu file nền có naming và collection rõ ràng.

## Ghi chú về nguồn

> Đây là bài recap được biên soạn từ nội dung và transcript trong Section 22 của thư mục khóa học. Phần này chuẩn bị nền tảng thao tác trước khi bước vào modeling và rigging nhân vật.
