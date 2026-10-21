---
title: "Introduction to Unit 8"
pathway: "Game Development"
module: "Animation"
lesson_number: 1
lesson_type: tutorial
unity_version: "6.3"
source_mission: "https://learn.unity.com/pathway/game-development/unit/animation?version=6.3"
content_type: "Bài học tiếng Việt tự biên soạn từ đề mục công khai"
coverage: "outline_based_not_official_transcript"
checked_at: "2026-10-21"
---

# Bài 01 — Introduction to Unit 8

> **Pathway:** Game Development · **Mission:** Animation · **Loại:** tutorial · **Phiên bản mục lục:** Unity 6.3

> **Nguồn đối chiếu:** [Animation trên Unity Learn](https://learn.unity.com/pathway/game-development/unit/animation?version=6.3). Nội dung dưới đây là hướng dẫn **tự biên soạn**, không phải toàn văn, bản dịch chính thức hay bản ghi video của Unity. Liên kết dẫn tới Mission chứa bài gốc.

## 1. Tổng quan

**Chủ đề:** Hệ thống hoạt ảnh trong Unity. Trong ngữ cảnh *Animation*, bài **Introduction to Unit 8** cần được học bằng cách xác định một kết quả quan sát được, thử trong Unity Editor và ghi lại cách kiểm chứng. Khi dự án thực hành của Unity khác dự án hiện tại, có thể dùng một scene nhỏ để luyện đúng kỹ năng cốt lõi.

## 2. Mục tiêu học tập

- Trình bày được mục đích của **hệ thống hoạt ảnh trong unity** trong dự án Unity.
- Xác định đầu ra, công cụ và thứ tự học phù hợp trước khi thực hành.
- Phát hiện ít nhất một lỗi thường gặp và nêu cách kiểm chứng hoặc sửa lỗi.

## 3. Kiến thức trọng tâm

- Animation Clip lưu chuyển động theo thời gian; Animator Controller quản lý các trạng thái và điều kiện chuyển.
- Animation window cho phép đặt keyframe cho thuộc tính được animate.
- Với nhân vật rigged, cần cấu hình Avatar, loại rig và mapping xương phù hợp.

### Thuật ngữ và mối quan hệ

| Khái niệm | Vai trò trong bài |
|---|---|
| Scene | Không gian chứa các GameObject để thiết kế và chạy thử |
| GameObject | Đối tượng trong scene, được mở rộng bằng Component |
| Component | Đơn vị chứa dữ liệu/hành vi, điều chỉnh được trong Inspector |
| Play mode | Chạy thử hành vi và xác minh kết quả tương tác |

## 4. Thực hành từng bước

1. **Bước 1:** Chọn GameObject và tạo một Animation Clip tối giản bằng hai keyframe vị trí.
2. **Bước 2:** Mở Animator Controller, tạo Idle và một trạng thái chuyển động.
3. **Bước 3:** Thử parameter và transition; xác nhận animation có thể phát hoặc dừng theo điều kiện.
4. **Bước 4:** Nếu dùng model ngoài, kiểm tra Import Settings > Rig và Animation trước khi sử dụng.

**Ghi chép bắt buộc:** kết quả mong đợi → kết quả thực tế → ảnh màn hình/Console → nhận xét ngắn về nguyên nhân.

## 5. Bài tập củng cố

- **Cơ bản:** Lặp lại ví dụ và giải thích kết quả bằng lời của mình.
- **Vận dụng:** Tăng độ khó hoặc thay đổi một tham số quan trọng, sau đó dự đoán hệ quả trước khi chạy.
- **Mở rộng:** Tích hợp kỹ năng này với nội dung đã học ở Mission **Animation** để tạo một tương tác nhỏ.

**Câu hỏi tự kiểm tra:** Khi thay đổi một giá trị trong Inspector, vì sao Game view có thể khác dự đoán? Cần quan sát những đối tượng và Component nào?

## 6. Lỗi thường gặp và cách kiểm tra

**Hiện tượng nên đề phòng:** Lỗi phổ biến: thiếu Animator/Avatar, transition có điều kiện sai hoặc clip đè lên thuộc tính ngoài dự kiến.

**Quy trình debug nhanh:** (1) tái hiện lỗi; (2) đọc Console; (3) kiểm tra tham chiếu Component, trạng thái GameObject, asset/package và thiết lập scene; (4) chỉ sửa một nguyên nhân giả định; (5) chạy lại và ghi kết quả.

## 7. Checklist hoàn thành

- [ ] Hiểu vai trò của khái niệm trong bài.
- [ ] Chạy được một ví dụ tự tạo trong Unity.
- [ ] Ghi được tối thiểu một ảnh hoặc đoạn video minh chứng.
- [ ] Giải thích được một lỗi và cách phát hiện lỗi.
- [ ] Đọc bài gốc tại [Unity Learn — Animation](https://learn.unity.com/pathway/game-development/unit/animation?version=6.3) để đối chiếu bước chính thức và tài nguyên đính kèm.

---

*Ghi chú phiên bản:* Unity thường cập nhật giao diện, menu và package. Các bước ở trên là nội dung học độc lập, cần kiểm tra lại khi áp dụng vào Unity 6.3 hoặc phiên bản mới hơn.
