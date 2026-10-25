---
title: "Bài 12 — Nhập vào Unity và kiểm tra nhân vật sẵn sàng dùng trong game"
order: 12
stage: "Game integration"
source_timestamps: "56:59–57:40"
---

# Bài 12 — Nhập vào Unity và kiểm tra nhân vật sẵn sàng dùng trong game

## Mục tiêu

Xác minh model có thể dùng với animation trong game, đồng thời phân biệt lỗi **mesh/rig** với lỗi **animation clip hoặc retarget**.

## 1. Điều video gốc đã thể hiện

Tác giả đưa nhân vật sang Unity, dùng một clip chuyển động có sẵn từ nhân vật **chibi** và thêm động tác nhảy. Kết quả: ngón tay chuyển động và nhân vật có chớp mắt; một số chuyển động hơi giật được tác giả quy cho **animation chưa khớp tỷ lệ**, không phải chắc chắn do model.

> Nguồn không trình bày chi tiết toàn bộ menu export/import Unity, nên các bước kỹ thuật bên dưới là **gợi ý kiểm thử bổ sung**, không phải trích dẫn thao tác trong video.

## 2. Checklist export từ Blender (phần hướng dẫn bổ sung)

1. Tạo bản sao scene để export; giữ `.blend` làm file gốc chỉnh sửa.
2. Kiểm tra scale, forward/up axes, object names, textures và armature.
3. Chọn định dạng phù hợp pipeline Unity, thông dụng là **FBX**; bảo đảm shape keys/blendshapes được xuất nếu cần.
4. Không áp dụng hoặc xóa modifier/xương theo cách làm mất animation/bind.
5. Giữ các tệp texture đi kèm, kiểm tra đường dẫn material.

## 3. Kiểm tra trong Unity (phần hướng dẫn bổ sung)

- Import FBX và textures vào dự án.
- Kiểm tra tab Model/Materials/Rig/Animation theo loại asset.
- Nếu dùng **Humanoid rig**, thử map avatar và theo dõi warning.
- Phát một clip đứng yên, đi, nhảy; kiểm tra root motion theo mục đích.
- Thử blendshape chớp mắt và miệng (nếu pipeline xuất hỗ trợ).
- Quan sát ngón, gối, khuỷu, cổ tay và tóc ở nhiều góc nhìn.

## 4. Bảng phân biệt lỗi

| Hiện tượng | Khả năng liên quan | Bước xử lý |
|---|---|---|
| Chỉ 1 clip nhảy bị giật | Retarget / tỷ lệ animation | Thử clip khác, kiểm tra avatar |
| Mọi clip đều gập gối sai | IK markers, rig, weights | Quay lại Bài 11 |
| Tóc không theo khi quay đầu | Hair weights/parent | Sửa skinning trước export |
| Mắt không chớp | Shape Keys không export/không được điều khiển | Kiểm tra blendshape import và animation |
| Nhân vật sai màu | Material/texture links | Kiểm tra texture asset và shader |
| Ngón tay méo khi nắm | Topology / skin weights | Quay lại Bài 06 và 11 |

## 5. Bài cuối khóa

Tạo một demo scene Unity gồm mặt đất, camera và nhân vật với 3 bài test: `Idle + Blink`, `Walk/Move`, `Jump`; ghi lại video ngắn hoặc ảnh các pose kiểm thử.

**Tiêu chí đạt:** nhân vật hiển thị đúng vật liệu, có chuyển động thân/tay/chân hợp lý, blink không lỗi và không xuất hiện nứt mesh lớn ở các khớp.

## 6. Những phần nằm ngoài video

Tác giả **chưa thực hiện quần áo hoàn chỉnh** trong video, cũng không hướng dẫn một pipeline tối ưu hóa LOD, profiling GPU, animation controller sản xuất hay lip-sync nhiều âm vị. Những chủ đề này nên được coi là **bước nâng cao tiếp theo**, không phải đã hoàn tất.

**Kết thúc khóa học:** đối chiếu [Checklist hoàn thiện](../tai-lieu/checklist-chat-luong.md) và [Bảng xử lý lỗi](../tai-lieu/loi-thuong-gap.md).
