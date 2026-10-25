---
title: "Bài 01 — Rig nhanh nhân vật hình người với Rigify"
course: "Blender Rigging — Từ cơ bản đến bộ rig tùy chỉnh"
lesson_number: 1
lesson_type: "bài học và thực hành"
language: "vi"
source: "Markdown đã dán (1)(20261025-100633).md"
source_timestamp: "00:50–07:26"
source_type: "transcript được biên tập lại"
blender_version_in_source: "4.1"
---

# Bài 01 — Rig nhanh nhân vật hình người với Rigify

> **Nguồn đối chiếu:** bản ghi video đính kèm, đoạn **00:50–07:26**. Đây là bài giảng tự biên soạn từ transcript, có hệ thống hóa quy trình và thêm ví dụ để tự học; không phải lời thoại nguyên văn.

## Mục tiêu học tập

- Bật Rigify, đặt metarig và căn chỉnh xương.
- Tạo control rig và gán Automatic Weights.
- Biết vị trí xương deform để sửa weight sau này.

## 1. Khi nào dùng Rigify?

Rigify giúp sinh hệ điều khiển từ một mẫu **metarig**, nhưng metarig vẫn cần được căn đúng theo mesh. Add-on **không tự sửa topology hoặc lỗi weight**. Trong video nguồn, Rigify được áp dụng cho nhân vật low-poly hình người.

## 2. Kích hoạt và tạo metarig

1. Tìm **Rigify** trong phần Add-ons/Extensions của phiên bản Blender đang dùng và kích hoạt.
2. `Shift+A → Armature → Human (Basic Human / Human Meta-Rig, tùy phiên bản)`.
3. Chọn Armature → **Object Data Properties → Viewport Display → In Front** để nhìn xương xuyên mesh.
4. Ở **Object Mode**, chỉnh kích thước và vị trí toàn bộ armature cho khớp nhân vật; sau khi hoàn thành, dùng `Ctrl+A → Apply Scale` nếu cần.
5. Vào **Edit Mode** để di chuyển các đầu/cuối xương theo các khớp giải phẫu.

## 3. Căn metarig theo ba trục

| Góc nhìn | Đặt vị trí nào? | Lưu ý |
|---|---|---|
| Front (`Numpad 1`) | Hông, gối, cổ, vai, khuỷu, cổ tay | Xương nằm trên trục cử động, không bám sát mặt ngoài mesh |
| Top (`Numpad 7`) | Vị trí vai–khuỷu–cổ tay, bàn tay | Đảm bảo xương ở chính giữa tiết diện chi |
| Side (`Numpad 3`) | Cột sống, đầu, gối, bàn chân, gót | Kiểm tra hướng gập và phần foot roll |

- Bật **X-Axis Mirror / Symmetry** khi chỉnh hai bên; chỉ làm một bên rồi để Blender phản chiếu.
- Khuỷu tay và đầu gối có thể có độ gập **nhẹ** theo hướng sinh học mong muốn; tránh chuỗi xương phẳng lì nếu dùng IK.
- Dùng `H` để ẩn xương cản tầm nhìn và `Alt+H` để hiện lại.
- Với các chỉnh sửa tỉ lệ quanh hông, có thể chuyển Pivot Point sang **Active Element** trước khi scale.

## 4. Generate Rig và bind mesh

1. Chọn metarig ở **Object Mode**.
2. Mở **Object Data Properties → Rigify → Generate Rig**.
3. Rigify sinh rig mới; **ẩn metarig**, chọn rig điều khiển mới khi parent.
4. Chọn mesh trước, chọn **generated rig cuối cùng (active object)**, `Ctrl+P → With Automatic Weights`.
5. Chọn generated rig → **Pose Mode**, thử tay, chân, đầu.

```mermaid
flowchart LR
 M[Metarig được căn xương] --> G[Generate Rig]
 G --> R[Generated control rig]
 R --> P[Mesh parent + Automatic Weights]
 P --> T[Test Pose]
 T --> W[Sửa weight nếu lỗi]
```

## 5. Khi cần Weight Paint trên Rigify

Một số bone là control, số khác là bone làm deform. Trong Bone Collections của rig sinh ra, tìm nhóm xương biến dạng, thường được đặt dưới bộ sưu tập có nhãn `DEF`/`ORG` tùy cấu trúc rig. **Không giả định `ORG` chính là xương deform**: hãy xem Deform được bật ở xương nào, và vertex group nào đang điều khiển mesh.

## Bài thực hành

- Rig một nhân vật humanoid đơn giản.
- Nâng một tay, gập gối, xoay đầu và chụp ba góc kiểm tra.
- Ghi lại nơi mesh bị kéo méo nhất để xử lý ở bài Weight Paint.

## Câu hỏi tự kiểm tra

1. **Sau Generate Rig, nên parent mesh vào metarig hay generated rig?**

   <details><summary>Xem đáp án</summary>

   Generated rig.

   </details>

2. **Căn xương chỉ bằng mặt trước đã đủ chưa?**

   <details><summary>Xem đáp án</summary>

   Chưa; cần kiểm tra hình chiếu từ trên và bên.

   </details>

## Lỗi cần tránh

- Mesh không đi theo: kiểm tra chọn đúng armature và Armature modifier.
- Generate thất bại: kiểm tra metarig còn đủ xương, tên và kết nối theo yêu cầu Rigify.

---

[Nội dung khóa học](README.md) · [Bài trước](00-nhap-mon-rigging.md) · [Bài tiếp theo](02-topology-deform.md)
