---
title: "Play around with a Particle System"
pathway: "Creative Core"
module: "VFX"
lesson_number: 2
lesson_type: tutorial
unity_version: "6.3"
source_mission: "https://learn.unity.com/pathway/creative-core/unit/creative-core-vfx?version=6.3"
content_type: "Bài học tiếng Việt tự biên soạn từ đề mục công khai"
coverage: "outline_based_not_official_transcript"
checked_at: "2026-10-21"
---

# Bài 02 — Play around with a Particle System

> **Pathway:** Creative Core · **Mission:** VFX · **Loại:** tutorial · **Phiên bản mục lục:** Unity 6.3

> **Nguồn đối chiếu:** [VFX trên Unity Learn](https://learn.unity.com/pathway/creative-core/unit/creative-core-vfx?version=6.3). Nội dung dưới đây là hướng dẫn **tự biên soạn**, không phải toàn văn, bản dịch chính thức hay bản ghi video của Unity. Liên kết dẫn tới Mission chứa bài gốc.

## 1. Tổng quan

**Chủ đề:** Hiệu ứng hạt và VFX. Trong ngữ cảnh *VFX*, bài **Play around with a Particle System** cần được học bằng cách xác định một kết quả quan sát được, thử trong Unity Editor và ghi lại cách kiểm chứng. Khi dự án thực hành của Unity khác dự án hiện tại, có thể dùng một scene nhỏ để luyện đúng kỹ năng cốt lõi.

## 2. Mục tiêu học tập

- Trình bày được mục đích của **hiệu ứng hạt và vfx** trong dự án Unity.
- Tự thực hiện một thử nghiệm nhỏ liên quan đến **Play around with a Particle System** và mô tả kết quả.
- Phát hiện ít nhất một lỗi thường gặp và nêu cách kiểm chứng hoặc sửa lỗi.

## 3. Kiến thức trọng tâm

- Particle System mô phỏng các phần tử như khói, lửa, bụi với emission, shape, velocity và lifetime.
- Burst phù hợp vụ nổ ngắn; emission liên tục phù hợp mưa, sương hay lửa cháy.
- VFX Graph thường phù hợp hiệu ứng có mật độ hạt cao nhưng phụ thuộc tương thích pipeline/nền tảng.

### Thuật ngữ và mối quan hệ

| Khái niệm | Vai trò trong bài |
|---|---|
| Scene | Không gian chứa các GameObject để thiết kế và chạy thử |
| GameObject | Đối tượng trong scene, được mở rộng bằng Component |
| Component | Đơn vị chứa dữ liệu/hành vi, điều chỉnh được trong Inspector |
| Play mode | Chạy thử hành vi và xác minh kết quả tương tác |

## 4. Thực hành từng bước

1. **Bước 1:** Tạo Particle System ở vị trí sự kiện và thử Start Lifetime, Start Speed, Emission.
2. **Bước 2:** Chuyển từ emission liên tục sang burst rồi so sánh hiệu ứng.
3. **Bước 3:** Thêm biến thiên Size over Lifetime và Color over Lifetime để hiệu ứng có nhịp rõ.
4. **Bước 4:** Thử bật/tắt hệ thống theo hành động và theo dõi số hạt lẫn frame time.

**Ghi chép bắt buộc:** kết quả mong đợi → kết quả thực tế → ảnh màn hình/Console → nhận xét ngắn về nguyên nhân.

## 5. Bài tập củng cố

- **Cơ bản:** Lặp lại ví dụ và giải thích kết quả bằng lời của mình.
- **Vận dụng:** Tăng độ khó hoặc thay đổi một tham số quan trọng, sau đó dự đoán hệ quả trước khi chạy.
- **Mở rộng:** Tích hợp kỹ năng này với nội dung đã học ở Mission **VFX** để tạo một tương tác nhỏ.

**Câu hỏi tự kiểm tra:** Khi thay đổi một giá trị trong Inspector, vì sao Game view có thể khác dự đoán? Cần quan sát những đối tượng và Component nào?

## 6. Lỗi thường gặp và cách kiểm tra

**Hiện tượng nên đề phòng:** Lỗi phổ biến: hiệu ứng phát quá nhiều hạt gây tụt FPS hoặc renderer/material không tương thích pipeline.

**Quy trình debug nhanh:** (1) tái hiện lỗi; (2) đọc Console; (3) kiểm tra tham chiếu Component, trạng thái GameObject, asset/package và thiết lập scene; (4) chỉ sửa một nguyên nhân giả định; (5) chạy lại và ghi kết quả.

## 7. Checklist hoàn thành

- [ ] Hiểu vai trò của khái niệm trong bài.
- [ ] Chạy được một ví dụ tự tạo trong Unity.
- [ ] Ghi được tối thiểu một ảnh hoặc đoạn video minh chứng.
- [ ] Giải thích được một lỗi và cách phát hiện lỗi.
- [ ] Đọc bài gốc tại [Unity Learn — VFX](https://learn.unity.com/pathway/creative-core/unit/creative-core-vfx?version=6.3) để đối chiếu bước chính thức và tài nguyên đính kèm.

---

*Ghi chú phiên bản:* Unity thường cập nhật giao diện, menu và package. Các bước ở trên là nội dung học độc lập, cần kiểm tra lại khi áp dụng vào Unity 6.3 hoặc phiên bản mới hơn.
