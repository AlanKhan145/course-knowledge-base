---
title: "Challenge: Create your still life composition"
pathway: "Game Development"
module: "Shaders and Materials"
lesson_number: 10
lesson_type: exercise
unity_version: "6.3"
source_mission: "https://learn.unity.com/pathway/game-development/unit/shaders-and-materials?version=6.3"
content_type: "Bài học tiếng Việt tự biên soạn từ đề mục công khai"
coverage: "outline_based_not_official_transcript"
checked_at: "2026-10-21"
---

# Bài 10 — Challenge: Create your still life composition

> **Pathway:** Game Development · **Mission:** Shaders and Materials · **Loại:** exercise · **Phiên bản mục lục:** Unity 6.3

> **Nguồn đối chiếu:** [Shaders and Materials trên Unity Learn](https://learn.unity.com/pathway/game-development/unit/shaders-and-materials?version=6.3). Nội dung dưới đây là hướng dẫn **tự biên soạn**, không phải toàn văn, bản dịch chính thức hay bản ghi video của Unity. Liên kết dẫn tới Mission chứa bài gốc.

## 1. Tổng quan

**Chủ đề:** Shader và cách bề mặt được hiển thị. Trong ngữ cảnh *Shaders and Materials*, bài **Challenge: Create your still life composition** cần được học bằng cách xác định một kết quả quan sát được, thử trong Unity Editor và ghi lại cách kiểm chứng. Khi dự án thực hành của Unity khác dự án hiện tại, có thể dùng một scene nhỏ để luyện đúng kỹ năng cốt lõi.

## 2. Mục tiêu học tập

- Trình bày được mục đích của **shader và cách bề mặt được hiển thị** trong dự án Unity.
- Hoàn thành sản phẩm nhỏ có tiêu chí đánh giá và lưu minh chứng chạy thử.
- Phát hiện ít nhất một lỗi thường gặp và nêu cách kiểm chứng hoặc sửa lỗi.

## 3. Kiến thức trọng tâm

- Shader quy định công thức vẽ bề mặt; Material lưu các giá trị đầu vào và tham chiếu Shader.
- URP/Lit phù hợp nhiều bề mặt nhận ánh sáng, còn Shader Graph hỗ trợ xây dựng hiệu ứng bằng node.
- Độ đục, cắt alpha và transparency có cách xử lý thứ tự render khác nhau.

### Thuật ngữ và mối quan hệ

| Khái niệm | Vai trò trong bài |
|---|---|
| Scene | Không gian chứa các GameObject để thiết kế và chạy thử |
| GameObject | Đối tượng trong scene, được mở rộng bằng Component |
| Component | Đơn vị chứa dữ liệu/hành vi, điều chỉnh được trong Inspector |
| Play mode | Chạy thử hành vi và xác minh kết quả tương tác |

## 4. Thực hành từng bước

1. **Bước 1:** Chọn render pipeline của dự án và tạo Material có shader tương thích.
2. **Bước 2:** Quan sát ảnh hưởng của Base Color, Metallic và Smoothness lên ánh sáng phản chiếu.
3. **Bước 3:** Tạo một Shader Graph đơn giản (nếu pipeline hỗ trợ), nối màu đầu vào đến bề mặt.
4. **Bước 4:** Kiểm tra hiệu ứng ở nhiều góc Camera và nguồn sáng khác nhau.

**Ghi chép bắt buộc:** kết quả mong đợi → kết quả thực tế → ảnh màn hình/Console → nhận xét ngắn về nguyên nhân.

## 5. Bài tập / sản phẩm cần nộp (tự biên soạn)

**Nhiệm vụ:** Tạo một bản thực hành thể hiện rõ nội dung **Challenge: Create your still life composition** trong scene hoặc dự án mới. Chỉ cần đủ nhỏ để chạy thử độc lập nhưng phải có ít nhất một thao tác tương tác và một phản hồi quan sát được.

**Tiêu chí nghiệm thu:**

- [ ] Có file project/scene hoặc bản build chạy được.
- [ ] Có ảnh hoặc video minh chứng trường hợp thành công.
- [ ] Có mô tả cách tái hiện tình huống kiểm thử và trường hợp lỗi.
- [ ] Có ít nhất một cải tiến sau lần thử đầu tiên.

**Mức nâng cao:** Thử thay đổi một tham số chính; giải thích vì sao hành vi thay đổi theo tham số ấy.

## 6. Lỗi thường gặp và cách kiểm tra

**Hiện tượng nên đề phòng:** Lỗi phổ biến: vật thể màu hồng vì shader không tương thích hoặc graph chưa được lưu/biên dịch.

**Quy trình debug nhanh:** (1) tái hiện lỗi; (2) đọc Console; (3) kiểm tra tham chiếu Component, trạng thái GameObject, asset/package và thiết lập scene; (4) chỉ sửa một nguyên nhân giả định; (5) chạy lại và ghi kết quả.

## 7. Checklist hoàn thành

- [ ] Hiểu vai trò của khái niệm trong bài.
- [ ] Chạy được một ví dụ tự tạo trong Unity.
- [ ] Ghi được tối thiểu một ảnh hoặc đoạn video minh chứng.
- [ ] Giải thích được một lỗi và cách phát hiện lỗi.
- [ ] Đọc bài gốc tại [Unity Learn — Shaders and Materials](https://learn.unity.com/pathway/game-development/unit/shaders-and-materials?version=6.3) để đối chiếu bước chính thức và tài nguyên đính kèm.

---

*Ghi chú phiên bản:* Unity thường cập nhật giao diện, menu và package. Các bước ở trên là nội dung học độc lập, cần kiểm tra lại khi áp dụng vào Unity 6.3 hoặc phiên bản mới hơn.
