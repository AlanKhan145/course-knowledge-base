---
title: "The VR software landscape"
pathway: "VR Development"
module: "VR Basics"
lesson_number: 8
lesson_type: tutorial
unity_version: "6.3"
source_mission: "https://learn.unity.com/pathway/vr-development/unit/vr-basics?version=6.3"
content_type: "Bài học tiếng Việt tự biên soạn từ đề mục công khai"
coverage: "outline_based_not_official_transcript"
checked_at: "2026-10-21"
---

# Bài 08 — The VR software landscape

> **Pathway:** VR Development · **Mission:** VR Basics · **Loại:** tutorial · **Phiên bản mục lục:** Unity 6.3

> **Nguồn đối chiếu:** [VR Basics trên Unity Learn](https://learn.unity.com/pathway/vr-development/unit/vr-basics?version=6.3). Nội dung dưới đây là hướng dẫn **tự biên soạn**, không phải toàn văn, bản dịch chính thức hay bản ghi video của Unity. Liên kết dẫn tới Mission chứa bài gốc.

## 1. Tổng quan

**Chủ đề:** Tương tác và hiệu năng ứng dụng VR. Trong ngữ cảnh *VR Basics*, bài **The VR software landscape** cần được học bằng cách xác định một kết quả quan sát được, thử trong Unity Editor và ghi lại cách kiểm chứng. Khi dự án thực hành của Unity khác dự án hiện tại, có thể dùng một scene nhỏ để luyện đúng kỹ năng cốt lõi.

## 2. Mục tiêu học tập

- Trình bày được mục đích của **tương tác và hiệu năng ứng dụng vr** trong dự án Unity.
- Tự thực hiện một thử nghiệm nhỏ liên quan đến **The VR software landscape** và mô tả kết quả.
- Phát hiện ít nhất một lỗi thường gặp và nêu cách kiểm chứng hoặc sửa lỗi.

## 3. Kiến thức trọng tâm

- XR Interaction Toolkit tách Interactor (bộ tương tác), Interactable (đối tượng tương tác) và bộ điều phối tương tác.
- Teleportation và continuous movement gây cảm giác khác nhau; cần thiết kế hướng tới sự thoải mái.
- Frame rate cao và ổn định đặc biệt quan trọng với HMD; giảm overdraw, draw call và hiệu ứng đắt.

### Thuật ngữ và mối quan hệ

| Khái niệm | Vai trò trong bài |
|---|---|
| Scene | Không gian chứa các GameObject để thiết kế và chạy thử |
| GameObject | Đối tượng trong scene, được mở rộng bằng Component |
| Component | Đơn vị chứa dữ liệu/hành vi, điều chỉnh được trong Inspector |
| Play mode | Chạy thử hành vi và xác minh kết quả tương tác |

## 4. Thực hành từng bước

1. **Bước 1:** Tạo scene có XR Origin và hệ input phù hợp phiên bản XR Interaction Toolkit.
2. **Bước 2:** Thêm một interactable, kiểm tra tương tác bằng direct/ray interactor.
3. **Bước 3:** Thử một cơ chế di chuyển, kiểm tra comfort setting và phạm vi chạm.
4. **Bước 4:** Profile trên thiết bị đích, không chỉ dựa vào FPS trong Editor.

**Ghi chép bắt buộc:** kết quả mong đợi → kết quả thực tế → ảnh màn hình/Console → nhận xét ngắn về nguyên nhân.

## 5. Bài tập củng cố

- **Cơ bản:** Lặp lại ví dụ và giải thích kết quả bằng lời của mình.
- **Vận dụng:** Tăng độ khó hoặc thay đổi một tham số quan trọng, sau đó dự đoán hệ quả trước khi chạy.
- **Mở rộng:** Tích hợp kỹ năng này với nội dung đã học ở Mission **VR Basics** để tạo một tương tác nhỏ.

**Câu hỏi tự kiểm tra:** Khi thay đổi một giá trị trong Inspector, vì sao Game view có thể khác dự đoán? Cần quan sát những đối tượng và Component nào?

## 6. Lỗi thường gặp và cách kiểm tra

**Hiện tượng nên đề phòng:** Lỗi phổ biến: input actions chưa map, không tương thích OpenXR runtime hoặc đối tượng thiếu Interactable.

**Quy trình debug nhanh:** (1) tái hiện lỗi; (2) đọc Console; (3) kiểm tra tham chiếu Component, trạng thái GameObject, asset/package và thiết lập scene; (4) chỉ sửa một nguyên nhân giả định; (5) chạy lại và ghi kết quả.

## 7. Checklist hoàn thành

- [ ] Hiểu vai trò của khái niệm trong bài.
- [ ] Chạy được một ví dụ tự tạo trong Unity.
- [ ] Ghi được tối thiểu một ảnh hoặc đoạn video minh chứng.
- [ ] Giải thích được một lỗi và cách phát hiện lỗi.
- [ ] Đọc bài gốc tại [Unity Learn — VR Basics](https://learn.unity.com/pathway/vr-development/unit/vr-basics?version=6.3) để đối chiếu bước chính thức và tài nguyên đính kèm.

---

*Ghi chú phiên bản:* Unity thường cập nhật giao diện, menu và package. Các bước ở trên là nội dung học độc lập, cần kiểm tra lại khi áp dụng vào Unity 6.3 hoặc phiên bản mới hơn.
