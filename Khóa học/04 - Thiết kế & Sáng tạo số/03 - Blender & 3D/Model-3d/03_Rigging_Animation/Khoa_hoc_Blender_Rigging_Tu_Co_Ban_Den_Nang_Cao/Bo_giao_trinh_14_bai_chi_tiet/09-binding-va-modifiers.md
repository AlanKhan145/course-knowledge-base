---
title: "Bài 09 — Bind mesh, tổ chức đối tượng và Modifier Stack"
course: "Blender Rigging — Từ cơ bản đến bộ rig tùy chỉnh"
lesson_number: 9
lesson_type: "bài học và thực hành"
language: "vi"
source: "Markdown đã dán (1)(20261025-100633).md"
source_timestamp: "36:33–39:14, 42:57–46:30"
source_type: "transcript được biên tập lại"
blender_version_in_source: "4.1"
---

# Bài 09 — Bind mesh, tổ chức đối tượng và Modifier Stack

> **Nguồn đối chiếu:** bản ghi video đính kèm, đoạn **36:33–39:14, 42:57–46:30**. Đây là bài giảng tự biên soạn từ transcript, có hệ thống hóa quy trình và thêm ví dụ để tự học; không phải lời thoại nguyên văn.

## Mục tiêu học tập

- Re-parent mesh đúng quy trình sau khi bổ sung xương.
- Kiểm tra thứ tự Mirror, Armature, Subdivision.
- Giải thích vì sao thứ tự modifier thay đổi deformation.

## 1. Binding và Auto Weights

Mesh có thể chứa nhiều phần độc lập: áo khoác, thân, mắt, tóc, miệng. Với từng mesh cần biến dạng:

1. Chọn mesh → Shift chọn armature để armature là **active**.
2. `Ctrl+P → With Automatic Weights`.
3. Xem **Object Properties → Modifiers**: cần có Armature modifier tham chiếu đúng rig.
4. Kiểm tra Vertex Groups tên bone có được tạo/chỉ định đúng.
5. Sang Pose Mode xoay từng nhóm nhỏ, ghi điểm sai.

Sau khi bổ sung **deform bone mới**, đôi khi cần đánh giá lại hoặc chạy lại binding. **Cẩn thận**: thao tác auto weights lại có thể thay đổi/ghi đè weight đã sửa thủ công. Luôn sao lưu trước.

## 2. Modifier stack là chuỗi tính toán có thứ tự

Một cấu hình thường dùng trong ví dụ:

```text
Mirror (nếu cần đối xứng khi modeling)
  ↓
Armature (biến dạng theo rig)
  ↓
Subdivision Surface (làm mượt sau biến dạng)
  ↓
Solidify (tùy yêu cầu vật liệu/chiều dày)
```

Đây là **gợi ý để thử** chứ không phải quy tắc cho mọi mesh. Trong nguồn, tác giả di chuyển Armature lên trên Subdivision để làm biến dạng tay/tóc ổn hơn và thử các vị trí khác nhau với Solidify. Khi thấy xuyên mesh hoặc rách bề mặt, kiểm tra stack trước khi tiếp tục sửa xương.

## 3. Vật thể đặc biệt: mắt và Shrinkwrap

Trong transcript, lòng trắng mắt dùng Shrinkwrap modifier gặp biến dạng lạ do vừa co bề mặt vừa rig. Người hướng dẫn áp dụng modifier sau khi sao lưu để giảm xung đột. Trước khi áp dụng bất kỳ modifier nào: kiểm tra rig đang ở rest pose và thử một **bản duplicate**.

## 4. Tách hay nối mesh?

- Giữ mesh tách riêng khi cần modifier và weight riêng (mắt, giày, lớp áo).
- `Ctrl+J` để nối các đối tượng có hệ dữ liệu/modifier tương thích khi điều đó làm workflow dễ hơn.
- Nối không làm các bề mặt tự **hàn vertex**. Nếu mục tiêu là liền topology, cần thao tác mesh riêng.

## Bài thực hành

- Bind ít nhất 4 mesh vào cùng armature.
- Thử đổi thứ tự Armature và Subdivision trên bản duplicate; chụp và so sánh deformation.
- Ghi rõ đối tượng nào nên giữ tách, vì sao.

## Câu hỏi tự kiểm tra

1. **Ctrl+J có tự hàn hai mesh vào một bề mặt liên tục không?**

   <details><summary>Xem đáp án</summary>

   Không, nó chỉ join chúng thành một object.

   </details>

2. **Vì sao phải cẩn thận khi chạy Automatic Weights lần thứ hai?**

   <details><summary>Xem đáp án</summary>

   Có thể thay đổi những weight đã tinh chỉnh trước đó.

   </details>

## Lỗi cần tránh

- Thêm deform bones sau khi đã sơn weight nhưng không cập nhật vertex groups.
- Áp dụng Subdivision sau Armature trong tư thế đã biến dạng làm thay đổi mesh không mong muốn.

---

[Nội dung khóa học](README.md) · [Bài trước](08-ik-tay-root.md) · [Bài tiếp theo](10-weight-paint.md)
