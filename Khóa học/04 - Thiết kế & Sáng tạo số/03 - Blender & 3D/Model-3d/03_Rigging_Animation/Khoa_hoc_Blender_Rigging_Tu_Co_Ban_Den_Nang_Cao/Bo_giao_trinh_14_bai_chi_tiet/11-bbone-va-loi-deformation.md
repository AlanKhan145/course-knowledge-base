---
title: "Bài 11 — B-Bones và xử lý biến dạng ở áo khoác, chân, giày"
course: "Blender Rigging — Từ cơ bản đến bộ rig tùy chỉnh"
lesson_number: 11
lesson_type: "bài học và thực hành"
language: "vi"
source: "Markdown đã dán (1)(20261025-100633).md"
source_timestamp: "44:16–52:00"
source_type: "transcript được biên tập lại"
blender_version_in_source: "4.1"
---

# Bài 11 — B-Bones và xử lý biến dạng ở áo khoác, chân, giày

> **Nguồn đối chiếu:** bản ghi video đính kèm, đoạn **44:16–52:00**. Đây là bài giảng tự biên soạn từ transcript, có hệ thống hóa quy trình và thêm ví dụ để tự học; không phải lời thoại nguyên văn.

## Mục tiêu học tập

- Hiểu B-Bones có thể làm cong một chuỗi mà không tăng nhiều bone.
- Tìm nguyên nhân mesh xuyên hoặc bị giật tại khớp.
- Áp dụng phương pháp có ưu tiên: topology → stack → weight → bone phụ.

## 1. B-Bones dùng vào việc gì?

Video chọn các bone cánh tay, chuyển display sang **B-Bone** và tăng thông số **Segments** (ví dụ 10) để đoạn bone uốn cong mượt hơn. B-Bones hữu ích khi một đoạn dài cần biến dạng liên tục, nhưng phải đặt đúng các tham số và parent/constraint liên quan.

> **Lưu ý:** Thay đổi **B-Bone Segments** liên quan hình dạng biến dạng của bone; còn **Display Size** chỉ thay đổi kích cỡ bone nhìn trong viewport. Hai thao tác này khác nhau.

## 2. Quy trình ưu tiên khi cánh tay xuyên áo

1. **Test Pose:** gập mạnh để xác định lỗi xuất hiện trong trường hợp nào.
2. **Topology:** tay áo đủ loop và có khoảng hở không?
3. **Modifier stack:** thử Armature trước Subdivision, giữ Mirror phù hợp.
4. **Weight:** kiểm tra áo có bị bone tay bên kia/miệng/đầu kéo nhầm không?
5. **B-Bones:** dùng nếu muốn chuyển tiếp uốn dài và tự nhiên hơn.
6. **Bone phụ:** thêm bone riêng cho vạt/lưỡi giày nếu paint không thể giải quyết gọn.

## 3. Vạt áo/lông đi cùng chân

Nguồn mô tả chỉnh parent một số bone vạt quần áo về `thigh` và số bone trung tâm về `hips`. Sau khi test, từng vạt có thể được xoay hoặc sơn thêm weight để không đâm vào chân.

## 4. Bàn chân và lưỡi giày

- Nếu muốn mũi chân gập, bảo đảm có bone toe và vertex group được phân đúng.
- Với lưỡi giày, có thể chọn vùng mặt trong Edit Mode, mask nó trong Weight Paint rồi tăng ảnh hưởng bone thích hợp bằng cọ Strength thấp.
- Nếu lưỡi vẫn biến dạng tệ, thêm một bone phụ thay vì cố ép cùng bone chân.

## 5. Các lỗi và đường giải quyết

| Hiện tượng | Câu hỏi chẩn đoán | Xử lý thử trước |
|---|---|---|
| Tay xuyên áo | Sleeve thiếu topology, weight bị lệch? | Thêm loop có mục tiêu và sửa nhóm weight |
| Vai/khuỷu biến dạng gãy | Bone roll, topology, B-Bone Segments? | Thử pose ngắn, đánh giá topology và B-Bone |
| Áo khoác văng khi nhấc chân | Parent các bone vạt đang theo bone nào? | Parent lại vạt tương ứng vào thigh/hips |
| Mũi giày không gập | Toe group trống? | Bổ sung/điều chỉnh weight của toe |
| Lưỡi giày xuyên qua thân giày | Weight phủ quá rộng? | Mask lưỡi giày, tô từng bước với Strength nhỏ |

## Bài thực hành

- Tạo 3 pose stress-test: khuỷu gập, đầu gối nâng cao, mũi chân cong.
- Chọn 1 lỗi và ghi kế hoạch sửa theo thứ tự ưu tiên, không nhảy ngay sang thêm bone.
- Nếu dùng B-Bone, thử 3 giá trị segment khác nhau trên bản duplicate và ghi khác biệt.

## Câu hỏi tự kiểm tra

1. **Có nên cứ tăng B-Bone Segments là hết mọi lỗi weight?**

   <details><summary>Xem đáp án</summary>

   Không; weight sai và topology kém vẫn cần sửa.

   </details>

2. **Khi nào nên thêm bone riêng cho lưỡi giày?**

   <details><summary>Xem đáp án</summary>

   Khi cần kiểm soát độc lập hoặc weight vào bone sẵn có vẫn gây méo/xuyên khó sửa.

   </details>

## Lỗi cần tránh

- Tăng số B-Bone segments mà không hiểu ảnh hưởng lên các constraint.
- Chỉ sửa model ở một góc nhìn mà không kiểm tra góc khác.

---

[Nội dung khóa học](README.md) · [Bài trước](10-weight-paint.md) · [Bài tiếp theo](12-shrinkwrap-facial.md)
