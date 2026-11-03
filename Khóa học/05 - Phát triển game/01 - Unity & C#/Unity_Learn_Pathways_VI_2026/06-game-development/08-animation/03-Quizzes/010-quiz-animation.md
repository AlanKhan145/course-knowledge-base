---
title: "Ôn tập — Animation"
pathway: "Game Development"
module: "Animation"
lesson_number: 10
unity_version: "6.3"
content_type: "Hướng dẫn thực hành tiếng Việt tự biên soạn"
source_mission: "https://learn.unity.com/pathway/game-development/unit/animation?version=6.3"
---

# Bài 10 — Ôn tập — Animation

> **Nguồn tham khảo:** [Unity Learn — Animation](https://learn.unity.com/pathway/game-development/unit/animation?version=6.3). Đây là tài liệu **tự biên soạn bằng tiếng Việt dựa trên chủ đề và file được cung cấp**, không phải bản dịch nguyên văn của Unity Learn.

## 1. Mục tiêu

Tự đánh giá các kiến thức chính của Unit 8.

**Kết quả cần đạt:** Bảng tự chấm và ví dụ chạy thử minh chứng.

## 2. Kiến thức cốt lõi

Nắm clip, keyframe, curve, state machine, parameter, import rig và sprite animation.

| Thuật ngữ | Ý nghĩa |
|---|---|
| Animation Clip | Tập hợp chuyển đổi thuộc tính theo thời gian |
| Keyframe | Mốc thời gian lưu giá trị của thuộc tính |
| Animator Controller | Điều phối trạng thái và chuyển tiếp animation |
| Animator Component | Thành phần phát animation trên GameObject |

## 3. Thực hành trong Unity Editor

Trả lời 8 câu hỏi ôn tập và tự minh họa bằng một scene Unity nhỏ.

**Quy trình kiểm tra:** mở Scene và Game view → xem Inspector/Animator → nhấn Play → quan sát khác biệt giữa kết quả mong đợi và kết quả thực tế.

## 4. Minh họa / ví dụ

1. Animation Clip lưu gì?
2. Keyframe khác Animation Curve ở điểm nào?
3. Animator Controller có vai trò gì?
4. Bool khác Trigger như thế nào?
5. Vì sao transition không chạy dù parameter đúng?
6. Khi nào chọn Humanoid thay vì Generic?
7. Sprite Sheet cần cắt trước khi tạo animation vì sao?
8. Khi nào animate Transform có thể xung đột với Rigidbody?

**Gợi ý tự chấm:** mỗi câu 1 điểm, mỗi câu trả lời cần có ví dụ hoặc cách kiểm chứng.

## 5. Sự cố thường gặp

| Hiện tượng | Nguyên nhân cần kiểm tra |
|---|---|
| Animation không chạy | Animator chưa được gán Controller hoặc clip không có keyframe đúng thuộc tính |
| Chuyển state không thành công | Sai tên parameter, Conditions hoặc Has Exit Time |
| Model biến dạng bất thường | Rig/Avatar không tương thích hoặc import scale sai |
| Chuyển động bị giật | Keyframe, curve, timing hoặc script khác cùng điều khiển thuộc tính |

## 6. Checklist hoàn thành

- [ ] Hiểu khái niệm chính của bài học.
- [ ] Tạo hoặc chạy thử được ví dụ trong Unity.
- [ ] Ghi lại ảnh/video chứng minh kết quả.
- [ ] Nêu ít nhất một lỗi và cách kiểm tra.
- [ ] Đối chiếu tài nguyên và hướng dẫn chính thức tại Unity Learn.

> **Lưu ý:** Giao diện Editor và một số lựa chọn Import/Animation có thể khác nhau giữa các phiên bản Unity. Ví dụ dùng Unity 6.3 làm mốc tham khảo.
