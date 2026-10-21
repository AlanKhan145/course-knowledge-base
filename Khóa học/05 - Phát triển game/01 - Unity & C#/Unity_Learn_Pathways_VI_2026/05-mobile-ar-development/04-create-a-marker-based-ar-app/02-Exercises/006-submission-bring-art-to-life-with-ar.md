---
title: "Submission: Bring art to life with AR"
pathway: "Mobile AR Development"
module: "Create a marker-based AR app"
lesson_number: 6
lesson_type: exercise
unity_version: "2022.3"
source_mission: "https://learn.unity.com/pathway/mobile-ar-development/unit/create-a-marker-based-ar-app?version=2022.3"
content_type: "Bài học tiếng Việt tự biên soạn từ đề mục công khai"
coverage: "outline_based_not_official_transcript"
checked_at: "2026-10-21"
---

# Bài 06 — Submission: Bring art to life with AR

> **Pathway:** Mobile AR Development · **Mission:** Create a marker-based AR app · **Loại:** exercise · **Phiên bản mục lục:** Unity 2022.3

> **Nguồn đối chiếu:** [Create a marker-based AR app trên Unity Learn](https://learn.unity.com/pathway/mobile-ar-development/unit/create-a-marker-based-ar-app?version=2022.3). Nội dung dưới đây là hướng dẫn **tự biên soạn**, không phải toàn văn, bản dịch chính thức hay bản ghi video của Unity. Liên kết dẫn tới Mission chứa bài gốc.

## 1. Tổng quan

**Chủ đề:** Ứng dụng thực tế tăng cường trên thiết bị di động. Trong ngữ cảnh *Create a marker-based AR app*, bài **Submission: Bring art to life with AR** cần được học bằng cách xác định một kết quả quan sát được, thử trong Unity Editor và ghi lại cách kiểm chứng. Khi dự án thực hành của Unity khác dự án hiện tại, có thể dùng một scene nhỏ để luyện đúng kỹ năng cốt lõi.

## 2. Mục tiêu học tập

- Trình bày được mục đích của **ứng dụng thực tế tăng cường trên thiết bị di động** trong dự án Unity.
- Hoàn thành sản phẩm nhỏ có tiêu chí đánh giá và lưu minh chứng chạy thử.
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

## 5. Bài tập / sản phẩm cần nộp (tự biên soạn)

**Nhiệm vụ:** Tạo một bản thực hành thể hiện rõ nội dung **Submission: Bring art to life with AR** trong scene hoặc dự án mới. Chỉ cần đủ nhỏ để chạy thử độc lập nhưng phải có ít nhất một thao tác tương tác và một phản hồi quan sát được.

**Tiêu chí nghiệm thu:**

- [ ] Có file project/scene hoặc bản build chạy được.
- [ ] Có ảnh hoặc video minh chứng trường hợp thành công.
- [ ] Có mô tả cách tái hiện tình huống kiểm thử và trường hợp lỗi.
- [ ] Có ít nhất một cải tiến sau lần thử đầu tiên.

**Mức nâng cao:** Thử thay đổi một tham số chính; giải thích vì sao hành vi thay đổi theo tham số ấy.

## 6. Lỗi thường gặp và cách kiểm tra

**Hiện tượng nên đề phòng:** Lỗi phổ biến: kiểm thử bằng Game view như trên thiết bị thật, thiếu quyền camera hoặc thiết bị không hỗ trợ tính năng.

**Quy trình debug nhanh:** (1) tái hiện lỗi; (2) đọc Console; (3) kiểm tra tham chiếu Component, trạng thái GameObject, asset/package và thiết lập scene; (4) chỉ sửa một nguyên nhân giả định; (5) chạy lại và ghi kết quả.

## 7. Checklist hoàn thành

- [ ] Hiểu vai trò của khái niệm trong bài.
- [ ] Chạy được một ví dụ tự tạo trong Unity.
- [ ] Ghi được tối thiểu một ảnh hoặc đoạn video minh chứng.
- [ ] Giải thích được một lỗi và cách phát hiện lỗi.
- [ ] Đọc bài gốc tại [Unity Learn — Create a marker-based AR app](https://learn.unity.com/pathway/mobile-ar-development/unit/create-a-marker-based-ar-app?version=2022.3) để đối chiếu bước chính thức và tài nguyên đính kèm.

---

*Ghi chú phiên bản:* Unity thường cập nhật giao diện, menu và package. Các bước ở trên là nội dung học độc lập, cần kiểm tra lại khi áp dụng vào Unity 2022.3 hoặc phiên bản mới hơn.
