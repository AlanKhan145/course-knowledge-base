---
title: "Lab 3 - Personal Project Ergonomics & Optimization"
pathway: "VR Development"
module: "Ergonomics and Optimization"
lesson_number: 7
lesson_type: exercise
unity_version: "6.3"
source_mission: "https://learn.unity.com/pathway/vr-development/unit/ergonomics-and-optimization?version=6.3"
content_type: "Bài học tiếng Việt tự biên soạn từ đề mục công khai"
coverage: "outline_based_not_official_transcript"
checked_at: "2026-10-21"
---

# Bài 07 — Lab 3 - Personal Project Ergonomics & Optimization

> **Pathway:** VR Development · **Mission:** Ergonomics and Optimization · **Loại:** exercise · **Phiên bản mục lục:** Unity 6.3

> **Nguồn đối chiếu:** [Ergonomics and Optimization trên Unity Learn](https://learn.unity.com/pathway/vr-development/unit/ergonomics-and-optimization?version=6.3). Nội dung dưới đây là hướng dẫn **tự biên soạn**, không phải toàn văn, bản dịch chính thức hay bản ghi video của Unity. Liên kết dẫn tới Mission chứa bài gốc.

## 1. Tổng quan

**Chủ đề:** Tương tác và hiệu năng ứng dụng VR. Trong ngữ cảnh *Ergonomics and Optimization*, bài **Lab 3 - Personal Project Ergonomics & Optimization** cần được học bằng cách xác định một kết quả quan sát được, thử trong Unity Editor và ghi lại cách kiểm chứng. Khi dự án thực hành của Unity khác dự án hiện tại, có thể dùng một scene nhỏ để luyện đúng kỹ năng cốt lõi.

## 2. Mục tiêu học tập

- Trình bày được mục đích của **tương tác và hiệu năng ứng dụng vr** trong dự án Unity.
- Hoàn thành sản phẩm nhỏ có tiêu chí đánh giá và lưu minh chứng chạy thử.
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

## 5. Bài tập / sản phẩm cần nộp (tự biên soạn)

**Nhiệm vụ:** Tạo một bản thực hành thể hiện rõ nội dung **Lab 3 - Personal Project Ergonomics & Optimization** trong scene hoặc dự án mới. Chỉ cần đủ nhỏ để chạy thử độc lập nhưng phải có ít nhất một thao tác tương tác và một phản hồi quan sát được.

**Tiêu chí nghiệm thu:**

- [ ] Có file project/scene hoặc bản build chạy được.
- [ ] Có ảnh hoặc video minh chứng trường hợp thành công.
- [ ] Có mô tả cách tái hiện tình huống kiểm thử và trường hợp lỗi.
- [ ] Có ít nhất một cải tiến sau lần thử đầu tiên.

**Mức nâng cao:** Thử thay đổi một tham số chính; giải thích vì sao hành vi thay đổi theo tham số ấy.

## 6. Lỗi thường gặp và cách kiểm tra

**Hiện tượng nên đề phòng:** Lỗi phổ biến: input actions chưa map, không tương thích OpenXR runtime hoặc đối tượng thiếu Interactable.

**Quy trình debug nhanh:** (1) tái hiện lỗi; (2) đọc Console; (3) kiểm tra tham chiếu Component, trạng thái GameObject, asset/package và thiết lập scene; (4) chỉ sửa một nguyên nhân giả định; (5) chạy lại và ghi kết quả.

## 7. Checklist hoàn thành

- [ ] Hiểu vai trò của khái niệm trong bài.
- [ ] Chạy được một ví dụ tự tạo trong Unity.
- [ ] Ghi được tối thiểu một ảnh hoặc đoạn video minh chứng.
- [ ] Giải thích được một lỗi và cách phát hiện lỗi.
- [ ] Đọc bài gốc tại [Unity Learn — Ergonomics and Optimization](https://learn.unity.com/pathway/vr-development/unit/ergonomics-and-optimization?version=6.3) để đối chiếu bước chính thức và tài nguyên đính kèm.

---

*Ghi chú phiên bản:* Unity thường cập nhật giao diện, menu và package. Các bước ở trên là nội dung học độc lập, cần kiểm tra lại khi áp dụng vào Unity 6.3 hoặc phiên bản mới hơn.
