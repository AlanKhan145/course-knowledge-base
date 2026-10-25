---
title: "Bài 04 — Đặt tên xương, Bone Roll và đối xứng trái–phải"
course: "Blender Rigging — Từ cơ bản đến bộ rig tùy chỉnh"
lesson_number: 4
lesson_type: "bài học và thực hành"
language: "vi"
source: "Markdown đã dán (1)(20261025-100633).md"
source_timestamp: "13:40–18:57"
source_type: "transcript được biên tập lại"
blender_version_in_source: "4.1"
---

# Bài 04 — Đặt tên xương, Bone Roll và đối xứng trái–phải

> **Nguồn đối chiếu:** bản ghi video đính kèm, đoạn **13:40–18:57**. Đây là bài giảng tự biên soạn từ transcript, có hệ thống hóa quy trình và thêm ví dụ để tự học; không phải lời thoại nguyên văn.

## Mục tiêu học tập

- Đặt tên bone rõ nghĩa và quy ước `.L`, `.R`.
- Kiểm tra trục local bằng Bone Roll.
- Dùng Symmetrize và thử tư thế đối xứng.

## 1. Quy tắc đặt tên có thể mở rộng

Đặt tên nhất quán giúp chọn bone, sửa vertex group, tạo IK và mirror pose. Có thể đổi tên bằng `F2`, nhiều xương cùng lúc qua Batch Rename (`Ctrl+F2`). Gợi ý:

| Bộ phận | Tên ví dụ |
|---|---|
| Bắp tay trái | `upper_arm.L` |
| Cẳng tay trái | `forearm.L` |
| Đùi trái | `thigh.L` |
| Mục tiêu chân trái | `pole_leg.L` |
| Ngón tay | `finger_01.L` |
| Đầu (ở giữa) | `head` |

Tên `.L` và `.R` có ý nghĩa trong thao tác mirror và đối xứng. Đây là hậu tố theo **bên nhân vật**, không phải phía màn hình người xem.

## 2. Xử lý Bone Roll

**Bone Roll** là phép xoay hệ tọa độ địa phương của xương quanh trục dài. Hai xương nhìn thẳng hàng có thể quay khác nhau nếu roll khác.

1. Bật **Axes** trên armature.
2. Sang Edit Mode, chọn bone muốn chỉnh roll trong thông số xương (`N` → Item, tùy phiên bản).
3. Xoay/chỉnh Bone Roll sao cho hướng trục local hỗ trợ chuyển động sẽ thực hiện.
4. Sang Pose Mode, dùng `R`, rồi `X`, `X` để kiểm tra xoay theo **local X**, nếu đang ở Global orientation.
5. Giữ quy tắc trục nhất quán cho các bone tương tự (đùi, cẳng chân, ngón tay).

Nguồn dùng ví dụ cuộn nắm tay: nếu các ngón có trục local giống nhau, chọn nhiều bone và xoay **theo individual origins** sẽ dễ điều khiển.

## 3. Symmetrize

1. Chỉ dựng xương một bên nhân vật, đặt hậu tố `.L` đúng.
2. Trong Edit Mode chọn các bone bên đó.
3. Chuột phải → **Symmetrize**.
4. Xác minh bone đối ứng mang hậu tố `.R`, đặt tương ứng.
5. Nếu sửa một bên riêng biệt, kiểm tra có đang bật tùy chọn X-Axis Mirror hay không.

## 4. Thao tác Pivot

- **Median Point:** toàn bộ selection xoay quanh điểm trung vị.
- **Individual Origins:** mỗi bone xoay quanh gốc của chính nó — phù hợp cuộn nhiều ngón thành nắm đấm.
- **Active Element:** dùng bone chọn cuối làm tâm khi scale/chỉnh một nhóm.

## Bài thực hành

- Đặt tên tất cả xương bên trái `.L` rồi Symmetrize sang `.R`.
- Xoay ngón thành nắm tay bằng local axis + Individual Origins.
- Ghi hai ví dụ Bone Roll sai dẫn đến xoay khó kiểm soát.

## Câu hỏi tự kiểm tra

1. **Điều kiện quan trọng để Symmetrize nhận biết hai bên?**

   <details><summary>Xem đáp án</summary>

   Hệ tên `.L`/`.R` đúng theo quy ước và hình học đối xứng phù hợp.

   </details>

2. **Bone Roll là vị trí xương trong không gian thế giới?**

   <details><summary>Xem đáp án</summary>

   Không; là hướng của các trục cục bộ quanh trục dọc xương.

   </details>

## Lỗi cần tránh

- Đặt `.L` theo trái màn hình khiến mirror sai.
- Xương xoay ngược bất thường vì các trục local không thống nhất.

---

[Nội dung khóa học](README.md) · [Bài trước](03-armature-tu-dung.md) · [Bài tiếp theo](05-fk-ik-va-bone-collections.md)
