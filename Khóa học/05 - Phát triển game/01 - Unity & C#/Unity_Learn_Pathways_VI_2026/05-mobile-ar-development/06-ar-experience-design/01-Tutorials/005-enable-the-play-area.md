---
title: "Enable the play area"
pathway: "Mobile AR Development"
module: "AR experience design"
lesson_number: 5
lesson_type: tutorial
unity_version: "2022.3"
source_mission: "https://learn.unity.com/pathway/mobile-ar-development/unit/ar-experience-design?version=2022.3"
content_type: "Bài học tiếng Việt tự biên soạn từ đề mục công khai"
coverage: "outline_based_not_official_transcript"
checked_at: "2026-10-21"
---

# Bài 05 — Enable the play area

> **Pathway:** Mobile AR Development · **Mission:** AR experience design · **Loại:** tutorial · **Phiên bản mục lục:** Unity 2022.3

> **Nguồn đối chiếu:** [AR experience design trên Unity Learn](https://learn.unity.com/pathway/mobile-ar-development/unit/ar-experience-design?version=2022.3). Nội dung dưới đây là hướng dẫn **tự biên soạn**, không phải toàn văn, bản dịch chính thức hay bản ghi video của Unity. Liên kết dẫn tới Mission chứa bài gốc.

## 1. Tổng quan

**Chủ đề:** Ứng dụng thực tế tăng cường trên thiết bị di động. Trong ngữ cảnh *AR experience design*, bài **Enable the play area** cần được học bằng cách xác định một kết quả quan sát được, thử trong Unity Editor và ghi lại cách kiểm chứng. Khi dự án thực hành của Unity khác dự án hiện tại, có thể dùng một scene nhỏ để luyện đúng kỹ năng cốt lõi.

## 2. Mục tiêu học tập

- Trình bày được mục đích của **ứng dụng thực tế tăng cường trên thiết bị di động** trong dự án Unity.
- Tự thực hiện một thử nghiệm nhỏ liên quan đến **Enable the play area** và mô tả kết quả.
- Phát hiện ít nhất một lỗi thường gặp và nêu cách kiểm chứng hoặc sửa lỗi.

## 3. Kiến thức trọng tâm

- AR Session quản lý phiên theo dõi; XR Origin và các manager phụ trách hiển thị thiết bị cùng đối tượng theo dõi.
- Face tracking, tracked image và plane detection phụ thuộc khả năng AR của thiết bị và hệ điều hành.
- Tọa độ trong AR cần gắn đúng điểm neo/trackable; trải nghiệm phải xử lý trạng thái mất tracking và hiệu năng di động.

### Thuật ngữ và mối quan hệ

| Khái niệm | Vai trò trong bài |
|---|---|
| Scene | Không gian chứa các GameObject để thiết kế và chạy thử |
| GameObject | Đối tượng trong scene, được mở rộng bằng Component |
| Component | Đơn vị chứa dữ liệu/hành vi, điều chỉnh được trong Inspector |
| Play mode | Chạy thử hành vi và xác minh kết quả tương tác |

## 4. Thực hành từng bước

1. **Bước 1:** Chọn thiết bị thật tương thích AR Foundation, ARCore/ARKit và phiên bản package.
2. **Bước 2:** Thiết lập XR/AR session tương ứng; kiểm tra camera permission và trạng thái tracking.
3. **Bước 3:** Tạo một đối tượng ảo gắn với loại trackable phù hợp (mặt, ảnh, mặt phẳng).
4. **Bước 4:** Build lên thiết bị, thử trong các điều kiện sáng/nền khác nhau; ghi lại lỗi và FPS.

**Ghi chép bắt buộc:** kết quả mong đợi → kết quả thực tế → ảnh màn hình/Console → nhận xét ngắn về nguyên nhân.

## 5. Bài tập củng cố

- **Cơ bản:** Lặp lại ví dụ và giải thích kết quả bằng lời của mình.
- **Vận dụng:** Tăng độ khó hoặc thay đổi một tham số quan trọng, sau đó dự đoán hệ quả trước khi chạy.
- **Mở rộng:** Tích hợp kỹ năng này với nội dung đã học ở Mission **AR experience design** để tạo một tương tác nhỏ.

**Câu hỏi tự kiểm tra:** Khi thay đổi một giá trị trong Inspector, vì sao Game view có thể khác dự đoán? Cần quan sát những đối tượng và Component nào?

## 6. Lỗi thường gặp và cách kiểm tra

**Hiện tượng nên đề phòng:** Lỗi phổ biến: kiểm thử bằng Game view như trên thiết bị thật, thiếu quyền camera hoặc thiết bị không hỗ trợ tính năng.

**Quy trình debug nhanh:** (1) tái hiện lỗi; (2) đọc Console; (3) kiểm tra tham chiếu Component, trạng thái GameObject, asset/package và thiết lập scene; (4) chỉ sửa một nguyên nhân giả định; (5) chạy lại và ghi kết quả.

## 7. Checklist hoàn thành

- [ ] Hiểu vai trò của khái niệm trong bài.
- [ ] Chạy được một ví dụ tự tạo trong Unity.
- [ ] Ghi được tối thiểu một ảnh hoặc đoạn video minh chứng.
- [ ] Giải thích được một lỗi và cách phát hiện lỗi.
- [ ] Đọc bài gốc tại [Unity Learn — AR experience design](https://learn.unity.com/pathway/mobile-ar-development/unit/ar-experience-design?version=2022.3) để đối chiếu bước chính thức và tài nguyên đính kèm.

---

*Ghi chú phiên bản:* Unity thường cập nhật giao diện, menu và package. Các bước ở trên là nội dung học độc lập, cần kiểm tra lại khi áp dụng vào Unity 2022.3 hoặc phiên bản mới hơn.
