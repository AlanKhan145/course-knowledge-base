---
title: "Bài 13 — Tạo dáng đối xứng, kiểm tra và đóng gói rig"
course: "Blender Rigging — Từ cơ bản đến bộ rig tùy chỉnh"
lesson_number: 13
lesson_type: "bài học và thực hành"
language: "vi"
source: "Markdown đã dán (1)(20261025-100633).md"
source_timestamp: "56:00–59:20"
source_type: "transcript được biên tập lại"
blender_version_in_source: "4.1"
---

# Bài 13 — Tạo dáng đối xứng, kiểm tra và đóng gói rig

> **Nguồn đối chiếu:** bản ghi video đính kèm, đoạn **56:00–59:20**. Đây là bài giảng tự biên soạn từ transcript, có hệ thống hóa quy trình và thêm ví dụ để tự học; không phải lời thoại nguyên văn.

## Mục tiêu học tập

- Mirror pose và dùng trục local để tạo dáng nhanh.
- Đánh giá sự an toàn trước khi Apply modifier và Join.
- Hoàn thành checklist cho model có thể tiếp tục sang animation.

## 1. Copy và Paste X-Flipped Pose

Sau khi đặt tên bone `.L`/`.R` đúng, có thể tạo dáng một bên và chuyển sang bên đối diện:

1. Trong Pose Mode chọn bone cần sao chép.
2. `Ctrl+C` để copy pose.
3. Chọn bộ bone đối ứng hoặc chọn toàn bộ theo workflow hiện hành.
4. `Ctrl+V` để Paste Pose hoặc `Ctrl+Shift+V` để **Paste X-Flipped** (mặc định thường dùng; kiểm tra keymap).
5. Bật/tắt tùy chọn **X-Axis Mirror** nếu muốn chỉnh đối xứng ngay trong lúc pose.

## 2. Xoay ngón theo local axis

Với các bone ngón có Bone Roll thống nhất, chuyển Pivot Point thành **Individual Origins**, chọn các ngón, sau đó xoay theo trục local. Có thể chọn **Transform Orientation → Local** để việc nhập trục ngắn gọn hơn.

## 3. Hoàn thiện modifier theo hướng không phá rig

Nguồn áp dụng một số modifier sau khi hoàn tất paint và trước khi join các object. Hãy kiểm tra:

- Rig đang ở **rest pose** khi quyết định Apply.
- Có bản backup **trước Apply Modifier**.
- Modifier nằm **trước Armature** có thể được áp dụng trong vài trường hợp, nhưng không phải mọi modifier đều an toàn tuyệt đối.
- Modifier **sau Armature** có thể phụ thuộc mesh đã biến dạng; thử trên bản duplicate và xem kết quả ở nhiều pose.
- `Ctrl+J` có thể gộp object nhưng không tự gộp vertex hay làm tất cả modifier đồng nhất.
- Giữ proxy shrinkwrap tách biệt để bone constraint vẫn có mục tiêu.

## 4. Chất lượng đầu ra

| Bài kiểm tra | Điều kiện đạt |
|---|---|
| FK / IK tay chân | Có thể tạo 3 pose không lật bất ngờ |
| Root / Body Ctrl | Chuyển động tổng thể đúng theo hierarchy định trước |
| Áo và tóc | Không kéo theo bone sai; xuyên mesh ở mức chấp nhận được với phong cách |
| Mắt và miệng | Control theo đầu, expression không rời bề mặt ngoài ý muốn |
| Symmetry | Paste X-Flipped cho kết quả đúng phía |
| Modifier stack | Thử lại sau các thay đổi Apply/Join trên bản sao |
| Sao lưu | Có file `.blend` trước và sau khi cleanup |

> Bài nguồn kết thúc ở **rig và posing**, chưa triển khai một quy trình hoàn chỉnh để retarget sang Mixamo, xuất GLB/FBX, hoặc làm animation nhiều clip. Các nội dung đó cần bài riêng nếu muốn mở rộng khóa học.

## Bài thực hành

- Tạo 5 pose: T-pose, giơ tay, ngồi khuỵu, bước đi, biểu cảm cười.
- Test Paste X-Flipped Pose ở tay.
- Lưu `rig_final.blend`; tạo thêm `rig_before_cleanup.blend` và chỉ thử Apply/Join trên một bản sao.

## Câu hỏi tự kiểm tra

1. **Ctrl+Shift+V trong Pose Mode làm gì theo keymap mặc định được nguồn sử dụng?**

   <details><summary>Xem đáp án</summary>

   Dán pose theo hướng X-Flipped.

   </details>

2. **Có cần Join tất cả mesh để rig được coi là xong?**

   <details><summary>Xem đáp án</summary>

   Không. Mesh có thể để thành nhiều đối tượng nếu hoạt động ổn và workflow phù hợp.

   </details>

## Lỗi cần tránh

- Áp dụng modifier trên bản duy nhất của project.
- Gộp nhầm proxy Shrinkwrap rồi làm hỏng target constraints.

---

[Nội dung khóa học](README.md) · [Bài trước](12-shrinkwrap-facial.md)
