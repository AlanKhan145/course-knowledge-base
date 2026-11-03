---
title: "Unit 6 - VFX"
pathway: "Game Development"
module: "Visual effects"
lesson_number: 10
lesson_type: "quiz"
unity_version: "6.3"
source_mission: "https://learn.unity.com/pathway/game-development/unit/visual-effects?version=6.3"
content_type: "Bài học tiếng Việt tự biên soạn từ đề mục công khai"
coverage: "outline_based_not_official_transcript"
---

# Bài 10 — Unit 6 - VFX

> **Nguồn:** [Unity Learn — Visual Effects](https://learn.unity.com/pathway/game-development/unit/visual-effects?version=6.3). Tài liệu học tập tự biên soạn, không phải bản dịch hay nội dung chính thức của Unity.

## 1. Mục tiêu học tập

- Hiểu vai trò của chủ đề **Unit 6 - VFX** trong phát triển trò chơi.
- Thực hành một scene nhỏ có kết quả quan sát được.
- Kiểm tra lỗi bằng Inspector, Console và Play mode.

## 2. Kiến thức cơ sở

- **Scene** là không gian chứa GameObject.
- **Component** cung cấp dữ liệu và hành vi cho GameObject.
- **Particle System** cho phép tạo hiệu ứng như bụi, lửa, khói và phép thuật.
- **Emission**, **Shape**, **Lifetime** và **Renderer** ảnh hưởng đến cách hạt được phát, chuyển động và hiển thị.

## 3. Chuyên đề thực hành — Bộ câu hỏi tự luyện Unit 6

1. Particle System có những thành phần nào quyết định mật độ và thời gian sống của hạt?
2. Phân biệt hiệu ứng **Burst** và phát hạt liên tục bằng một ví dụ gameplay.
3. `Color over Lifetime` giúp tạo chuyển biến thị giác nào?
4. VFX Graph được tổ chức theo các khối Spawn, Initialize, Update, Output như thế nào?
5. Khi hạt trong game 2D xuất hiện sau nền, cần kiểm tra những tùy chọn hiển thị nào?
6. Nêu ba chỉ số hoặc dấu hiệu giúp đánh giá chi phí của VFX.
7. Mô tả cách kiểm chứng hiệu ứng chỉ phát một lần khi nhận sự kiện.

**Gợi ý đáp án:** 1) Emission, Lifetime và giới hạn số hạt; 2) Burst tạo đợt hạt, liên tục duy trì dòng hạt; 3) thay đổi màu/alpha theo tuổi; 4) phát → khởi tạo → cập nhật → xuất hình; 5) sorting layer/order, material và camera; 6) FPS, frame time, số lượng hạt/hiệu ứng; 7) tái hiện sự kiện và quan sát mỗi lần kích hoạt.

> Đây là **bộ câu hỏi tự luyện bổ sung**, không phải đáp án hoặc đề thi chính thức của Unity Learn.

## 4. Quy trình kiểm chứng

1. Xác định kết quả mong đợi trong Game view.
2. Tạo scene thử nghiệm, thay đổi từng tham số một.
3. Chạy Play mode, theo dõi Console và hiệu năng.
4. Chụp ảnh/video kết quả, giải thích một trường hợp lỗi và cách khắc phục.

## 5. Checklist hoàn thành

- [ ] Có scene hoặc project minh họa hoạt động.
- [ ] Giải thích được ít nhất ba khái niệm áp dụng.
- [ ] Có ảnh/video minh chứng.
- [ ] Có ghi chú lỗi và hướng kiểm tra.

*Lưu ý: Các thao tác và giao diện có thể khác giữa phiên bản Unity hoặc render pipeline.*
