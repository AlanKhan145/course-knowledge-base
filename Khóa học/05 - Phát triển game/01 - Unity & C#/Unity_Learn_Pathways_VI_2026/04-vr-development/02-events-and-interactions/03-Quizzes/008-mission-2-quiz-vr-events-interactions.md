---
title: "Mission 2 Quiz - VR Events & Interactions"
pathway: "VR Development"
module: "Events and Interactions"
lesson_number: 8
lesson_type: quiz
unity_version: "6.3"
source_mission: "https://learn.unity.com/pathway/vr-development/unit/events-and-interactions?version=6.3"
content_type: "Bài học tiếng Việt tự biên soạn từ đề mục công khai"
coverage: "outline_based_not_official_transcript"
checked_at: "2026-10-21"
---

# Bài 08 — Mission 2 Quiz - VR Events & Interactions

> **Pathway:** VR Development · **Mission:** Events and Interactions · **Loại:** quiz · **Phiên bản mục lục:** Unity 6.3

> **Nguồn đối chiếu:** [Events and Interactions trên Unity Learn](https://learn.unity.com/pathway/vr-development/unit/events-and-interactions?version=6.3). Nội dung dưới đây là hướng dẫn **tự biên soạn**, không phải toàn văn, bản dịch chính thức hay bản ghi video của Unity. Liên kết dẫn tới Mission chứa bài gốc.

## 1. Tổng quan

**Chủ đề:** Tương tác và hiệu năng ứng dụng VR. Trong ngữ cảnh *Events and Interactions*, bài **Mission 2 Quiz - VR Events & Interactions** cần được học bằng cách xác định một kết quả quan sát được, thử trong Unity Editor và ghi lại cách kiểm chứng. Khi dự án thực hành của Unity khác dự án hiện tại, có thể dùng một scene nhỏ để luyện đúng kỹ năng cốt lõi.

## 2. Mục tiêu học tập

- Trình bày được mục đích của **tương tác và hiệu năng ứng dụng vr** trong dự án Unity.
- Tự trả lời câu hỏi và giải thích bằng ví dụ kiểm chứng trong Editor.
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

## 5. Câu hỏi ôn tập tự biên soạn (không phải quiz chính thức)

1. Kỹ năng cốt lõi trong bài này giải quyết vấn đề gì cho người chơi hoặc người làm dự án?
2. Trong nhóm kiến thức **tương tác và hiệu năng ứng dụng vr**, đâu là thông số hoặc đối tượng cần kiểm tra đầu tiên?
3. Nếu kết quả ở Play mode không đúng, em sẽ xem xét Console, Inspector hay cấu hình dự án trước? Vì sao?
4. Nêu một trường hợp sử dụng thực tế và điều kiện để xác nhận đã hoàn thành.

### Gợi ý tự chấm

Một câu đạt khi có: **khái niệm đúng + lý do + ví dụ kiểm chứng**. Không cần lặp lại câu chữ lý thuyết; ưu tiên chứng minh bằng scene hoặc mã của chính em.

## 6. Lỗi thường gặp và cách kiểm tra

**Hiện tượng nên đề phòng:** Lỗi phổ biến: input actions chưa map, không tương thích OpenXR runtime hoặc đối tượng thiếu Interactable.

**Quy trình debug nhanh:** (1) tái hiện lỗi; (2) đọc Console; (3) kiểm tra tham chiếu Component, trạng thái GameObject, asset/package và thiết lập scene; (4) chỉ sửa một nguyên nhân giả định; (5) chạy lại và ghi kết quả.

## 7. Checklist hoàn thành

- [ ] Hiểu vai trò của khái niệm trong bài.
- [ ] Chạy được một ví dụ tự tạo trong Unity.
- [ ] Ghi được tối thiểu một ảnh hoặc đoạn video minh chứng.
- [ ] Giải thích được một lỗi và cách phát hiện lỗi.
- [ ] Đọc bài gốc tại [Unity Learn — Events and Interactions](https://learn.unity.com/pathway/vr-development/unit/events-and-interactions?version=6.3) để đối chiếu bước chính thức và tài nguyên đính kèm.

---

*Ghi chú phiên bản:* Unity thường cập nhật giao diện, menu và package. Các bước ở trên là nội dung học độc lập, cần kiểm tra lại khi áp dụng vào Unity 6.3 hoặc phiên bản mới hơn.
