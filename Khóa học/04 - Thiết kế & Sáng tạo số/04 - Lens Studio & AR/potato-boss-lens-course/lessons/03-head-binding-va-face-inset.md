# Bài 03 — Head Binding và Face Inset

## Mục tiêu

Gắn model lên đầu người dùng và đưa mắt, miệng thật lên bề mặt model.

## 1. Gắn model vào đầu

Trong Lens Studio:

1. Import model 3D và ảnh nền.
2. Thêm **Head Binding**.
3. Xóa **Face Occluder** nếu không cần.
4. Kéo model 3D vào dưới Head Binding.
5. Chỉnh scale và position để model khớp vùng đầu.

![Model được thêm vào scene](../images/003-adding-model.jpg)

## 2. Thêm miệng

1. Thêm **Face Inset**.
2. Đặt `Face Region = Mouth`.
3. Dùng 2D view để chỉnh vị trí X/Y.
4. Chuyển sang 3D view để chỉnh trục Z.
5. Đưa inset sát bề mặt model để khi quay đầu không bị “nổi” khỏi mesh.

## 3. Tổ chức hierarchy

Face Inset mặc định tạo thêm một Face Inset Binding. Với cách làm trong tutorial, miệng và mắt được gắn trực tiếp vào **root bone** của model.

Ví dụ:

```text
Head Binding
└── Model
    └── Armature
        └── Root Bone
            ├── Mouth
            ├── Left Eye
            └── Right Eye
```

## 4. Thêm mắt

- Duplicate Mouth.
- Đổi region thành **Left Eye**.
- Chỉnh vị trí.
- Duplicate lần nữa và đổi thành **Right Eye**.

Tutorial lưu ý cách gọi trái/phải trong Lens Studio có thể gây nhầm vì tên được nhìn theo phía của creator.

![Face Insets trên model](../images/004-face-insets.jpg)

## 5. Cách kiểm tra

Dùng preview có chuyển động quay đầu sang trái/phải. Mục tiêu là:

- Mắt và miệng không trượt khỏi mặt model.
- Không lộ khoảng cách lớn theo trục Z.
- Model vẫn theo đầu ổn định.
