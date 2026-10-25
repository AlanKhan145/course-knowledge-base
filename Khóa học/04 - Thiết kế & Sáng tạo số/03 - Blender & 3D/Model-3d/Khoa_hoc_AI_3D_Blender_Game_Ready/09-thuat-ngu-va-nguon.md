---
title: "Bài 09 — Thuật ngữ Việt–Anh và đối chiếu bản chép lời"
course: "Hoàn thiện model 3D do AI tạo bằng Blender — Game Ready"
lesson: 9
type: "glossary"
language: "vi"
---

# Bài 09 — Thuật ngữ Blender và đối chiếu nguồn

## 1. Thuật ngữ thiết yếu

| Thuật ngữ | Tên tiếng Anh | Ý nghĩa thực hành |
| --- | --- | --- |
| Lưới 3D | Mesh | Tập vertices/edges/faces biểu diễn bề mặt |
| Đỉnh / Cạnh / Mặt | Vertex / Edge / Face | Các phần tử cơ bản của mesh |
| Điêu khắc | Sculpting | Chỉnh trực tiếp hình khối bằng cọ |
| Tạo lưới voxel mới | Voxel Remesh | Thay topology thành ô voxel phục vụ sculpt |
| Topology | Topology | Cấu trúc kết nối các đỉnh, cạnh và mặt |
| Dựng lại topology | Retopology | Tạo lưới mới hợp lý hơn từ mẫu hiện tại |
| Đa giác cao/thấp | High Poly / Low Poly | Bản giữ nhiều chi tiết / bản tối ưu sử dụng |
| Vòng cạnh | Edge Loop | Chuỗi cạnh chạy quanh vùng hình học |
| Đối xứng | Mirror / Symmetry | Chỉnh một nửa hoặc phản chiếu cọ |
| Đường cắt UV | UV Seam | Vị trí cắt ảo để trải lưới ra 2D |
| Đảo UV | UV Island | Mảng bề mặt liên tục sau unwrap |
| Trải UV | UV Unwrap | Ánh xạ bề mặt 3D lên tọa độ 2D |
| Nướng texture | Texture Baking | Ghi thông tin bề mặt từ đối tượng/bộ vật liệu vào ảnh |
| Bản đồ pháp tuyến | Normal Map | Giả lập chi tiết hướng bề mặt ở mức shading |
| Bản đồ màu | Base Color / Albedo | Màu vật liệu, không chứa thông tin phản xạ ánh sáng trực tiếp |
| Độ nhám | Roughness | Điều khiển độ sắc của phản chiếu |
| Vật liệu PBR | Physically Based Rendering | Mô hình shading dựa trên thuộc tính vật lý gần đúng |
| Cọ sao chép | Clone Brush | Lấy màu từ vùng texture khác để đè lên lỗi |
| Cọ kéo màu | Smear Brush | Kéo/miết màu làm mượt chuyển tiếp |
| Chiếu ảnh | Stencil Projection | Dùng ảnh 2D làm khuôn chiếu lên vật thể |
| Gắn xương | Rigging | Tạo bộ khung điều khiển mesh |
| Bộ xương | Armature | Hệ xương nhân vật trong Blender |
| Sơn trọng số | Weight Paint | Điều chỉnh ảnh hưởng từng xương lên điểm mesh |
| Hoạt ảnh | Animation / Action | Chuỗi thay đổi tư thế được lưu thành keyframe/action |
| Đóng gói | Packaging | Sắp xếp models, textures, preview và metadata |

## 2. Chuẩn hóa lỗi lời thoại

Các bản nguồn là chép lời/dịch tự động nên một số từ tiếng Việt có thể sai nghĩa. Trong giáo trình, các từ được chuẩn hóa theo ngữ cảnh Blender:

- **“máy xay sinh tố” → Blender**, phần mềm 3D.
- **“chuột” trong các đoạn sửa mặt khủng long → miệng** (*mouth*), không phải thiết bị trỏ chuột.
- **“bánh / nướng kết cấu” → Bake / Texture Baking**.
- **“Wadromesh / quadramesher” → Quad Remesher** (công cụ tự động tái tạo topology được nhắc ở tập 2).
- **“redouble flow / redopoflow” → RetopoFlow** (add-on hỗ trợ làm topology thủ công).
- **“AcroRig / AcroRig 2.0” → AccuRig**, công cụ auto-rig được nhắc ở tập 5; tên sản phẩm ghi trong nguồn đã bị nhận dạng sai.
- **“OBG” → OBJ**; đây là tên định dạng mesh được nhắc ở phần xuất file.
- **“gian lận / được dàn dựng” trong mô tả asset → rigged / đã gắn xương**.

## 3. Sáu nguồn tương ứng với bài học

| Bài | Bản chép lời đính kèm | Nội dung / mốc tham khảo |
| --- | --- | --- |
| 01 | `Markdown đã dán (1)(20261025-100336).md` | `00:00–20:55`: GLB, sculpt, remesh, mirror, mắt, răng, vân và móng |
| 02 | `Markdown đã dán (2)(1).md` | `00:00–26:54`: Quad Remesher, RetopoFlow, edge loop, symmetry |
| 03 | `Markdown đã dán (3)(1).md` | `00:00–22:47`: Mark Seam, unwrap, normal/base-color bake |
| 04 | `Markdown đã dán (4)(1).md` | `00:00–16:23`: Texture Paint, Clone, Smear, PBR, Stencil |
| 05 | `Markdown đã dán (5)(1).md` | `00:00–15:18`: Mixamo, AccuRig, Weight Paint, Actions |
| 06 | `Markdown đã dán (6)(1).md` | `00:00–13:02`: QA, render, xuất định dạng và giới thiệu CGTrader/Fab |

## 4. Phân biệt nội dung nguồn và phần bổ sung

**Các Bài 01–06:** nội dung tái cấu trúc từ bản chép lời người học cung cấp, viết lại thành quy trình dạy học, bổ sung mục tiêu, checkpoint, bài tập và câu hỏi trắc nghiệm. Ví dụ khủng long và thứ tự các công đoạn bám sát nguồn. **Các Bài 07–08:** rubric, cây xử lý lỗi và gợi ý bàn giao là nội dung biên soạn thêm để phục vụ thực hành. Mức phí, yêu cầu nền tảng và giao diện phần mềm trong video có thể đã thay đổi; khóa học không coi chúng là thông tin thời gian thực.

## 5. Nguyên tắc đánh giá game-ready

Một asset được xem là sử dụng được trong pipeline cụ thể khi đáp ứng ngân sách polygon/texture của dự án, topology tại vùng chuyển động phù hợp, không lỗi map đáng kể, import đúng định dạng, rig hoạt động đúng (nếu cần), và có quyền sử dụng hợp lệ. Không có một con số polygon hoặc một cấu hình rig duy nhất phù hợp mọi game.
