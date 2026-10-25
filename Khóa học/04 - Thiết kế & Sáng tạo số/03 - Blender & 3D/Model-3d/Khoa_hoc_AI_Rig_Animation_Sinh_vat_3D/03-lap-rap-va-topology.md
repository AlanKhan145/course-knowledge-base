---
lesson: 3
title: "Lắp ráp Blender, chuẩn hóa tỷ lệ và tổ chức mesh"
duration: "75–120 phút"
source_time: "03:40–05:15; 05:57–06:22"
---

# Bài 03 — Lắp ráp sinh vật và chuẩn bị mesh cho rig

## Mục tiêu

- Import từng part vào Blender, lắp thành sinh vật có silhouette nhất quán.
- Tổ chức tên object, origin, hierarchy và transform.
- Kiểm tra vùng khớp trước khi tạo Armature.

## 1. Các bước trong Blender

1. **File → Import** định dạng phù hợp với tệp AI đã xuất (`glTF 2.0` cho `.glb/.gltf`, hoặc FBX tương ứng).
2. Kiểm tra trục, đơn vị và tỷ lệ; chọn **một** hệ quy chiếu nhất quán.
3. Chỉnh vị trí, đối xứng chân/càng, cao độ thân so với mặt đất.
4. Tại các object chuyển động bản lề, đặt **origin/pivot** hợp lý; lưu ý khi dùng Armature Deform thì khớp xương vẫn là yếu tố quyết định.
5. Chuyển sang Edit Mode để sửa mesh, xóa phần thừa, điều chỉnh vùng nối.
6. Khi đã chốt hình dáng, lưu file phiên bản riêng trước khi rig.

## 2. Quy tắc đặt tên

```text
SCORPION_ROOT
├── GEO_Body
├── GEO_Leg_L_01 ... GEO_Leg_L_04
├── GEO_Leg_R_01 ... GEO_Leg_R_04
├── GEO_Claw_L / GEO_Claw_R
├── GEO_Tail_01 ... GEO_Tail_05
├── GEO_Stinger
├── GEO_Badge
└── RIG_Scorpion   (thêm ở bài 05)
```

Tách `GEO_` (mesh), `RIG_` (armature) và các Empty hỗ trợ quản lý. Nếu mesh do AI có tên như `Object.017`, hãy đổi trước lúc gán vật liệu hay xương để tránh lỗi khi tự động hóa.

## 3. Mật độ hình học và vùng biến dạng

```mermaid
flowchart LR
 A[Đỉnh chi] --> B[Vùng khớp 1]
 B --> C[Đoạn chi cứng]
 C --> D[Vùng khớp 2]
 D --> E[Gốc chi]
```

Cần đủ cạnh quanh chỗ gập để chuyển động không bị vỡ hình. Càng/chân có giáp cứng có thể dùng **mesh đoạn cứng** gắn với từng xương; vùng mềm nên có edge loop để uốn. Không nên dàn đều polygon một cách máy móc; ưu tiên silhouette và vùng hoạt ảnh.

## 4. Checklist nhanh trong Blender

- Dùng **Viewport Overlays → Statistics** kiểm object/triangle.
- Vào Edit Mode và **Mesh → Clean Up → Merge by Distance** có chọn lọc để xử lý đỉnh trùng; không gộp nhầm các mép cần tách.
- Kiểm tra normals bằng Face Orientation; mặt xanh/đỏ giúp tìm bề mặt quay ngược.
- Dùng **Select Non-Manifold** để phát hiện lỗ hoặc cạnh lạ; một số mesh mở là có chủ đích nên cần đánh giá theo cấu tạo.
- Kiểm modifier, UV, vật liệu, object scale. Khi thích hợp, **Ctrl+A → Apply Scale** trước rig, nhưng hãy lưu một bản sao trước khi áp dụng transform nếu đã có dữ liệu khác phụ thuộc transform.

## 5. Hoạt động thực hành

Dựng bọ cạp, đặt camera ở góc isometric RTS; giảm kích thước hiển thị của nhân vật và kiểm thử xem silhouette còn phân biệt được càng, ngòi, chân hay không. Tối ưu theo **kích thước trên màn hình**, không chỉ theo cận cảnh.

**Câu hỏi:** Vì sao tạo toàn bộ thân/chân/đuôi thành một mesh dày đặc không đồng nghĩa với "tốt cho rig"?

**Sản phẩm:** `scorpion_assembly_v01.blend`.
