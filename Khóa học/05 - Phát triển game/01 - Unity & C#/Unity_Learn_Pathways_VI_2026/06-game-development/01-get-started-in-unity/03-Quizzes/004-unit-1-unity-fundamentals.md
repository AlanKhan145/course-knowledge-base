---
title: "Unit 1 - Unity fundamentals"
pathway: "Game Development"
module: "Get started in Unity"
lesson_number: 4
lesson_type: quiz
unity_version: "6.3"
source_mission: "https://learn.unity.com/pathway/game-development/unit/get-started-in-unity?version=6.3"
content_type: "Bài học tiếng Việt tự biên soạn từ đề mục công khai"
coverage: "outline_based_not_official_transcript"
checked_at: "2026-10-21"
---

# Bài 04 — Unit 1 - Unity fundamentals

> **Pathway:** Game Development · **Mission:** Get started in Unity · **Loại:** quiz · **Phiên bản mục lục:** Unity 6.3

> **Nguồn đối chiếu:** [Get started in Unity trên Unity Learn](https://learn.unity.com/pathway/game-development/unit/get-started-in-unity?version=6.3). Nội dung dưới đây là hướng dẫn **tự biên soạn**, không phải toàn văn, bản dịch chính thức hay bản ghi video của Unity. Liên kết dẫn tới Mission chứa bài gốc.

## 1. Tổng quan

**Chủ đề:** Làm việc với Unity Editor. Trong ngữ cảnh *Get started in Unity*, bài **Unit 1 - Unity fundamentals** cần được học bằng cách xác định một kết quả quan sát được, thử trong Unity Editor và ghi lại cách kiểm chứng. Khi dự án thực hành của Unity khác dự án hiện tại, có thể dùng một scene nhỏ để luyện đúng kỹ năng cốt lõi.

## 2. Mục tiêu học tập

- Trình bày được mục đích của **làm việc với unity editor** trong dự án Unity.
- Tự trả lời câu hỏi và giải thích bằng ví dụ kiểm chứng trong Editor.
- Phát hiện ít nhất một lỗi thường gặp và nêu cách kiểm chứng hoặc sửa lỗi.

## 3. Kiến thức trọng tâm

- Hierarchy liệt kê GameObject trong scene; Inspector hiển thị Component và thuộc tính của đối tượng được chọn.
- Scene view dùng để xây dựng thế giới; Game view hiển thị kết quả qua Camera khi chạy.
- Transform quản lý vị trí, xoay và tỉ lệ trong hệ trục không gian; thao tác local và global có thể khác nhau.

### Thuật ngữ và mối quan hệ

| Khái niệm | Vai trò trong bài |
|---|---|
| Scene | Không gian chứa các GameObject để thiết kế và chạy thử |
| GameObject | Đối tượng trong scene, được mở rộng bằng Component |
| Component | Đơn vị chứa dữ liệu/hành vi, điều chỉnh được trong Inspector |
| Play mode | Chạy thử hành vi và xác minh kết quả tương tác |

## 4. Thực hành từng bước

1. **Bước 1:** Mở scene, tìm Main Camera, Directional Light và một GameObject trong Hierarchy.
2. **Bước 2:** Dùng Move (W), Rotate (E), Scale (R); thực hành chuyển giữa Local/Global.
3. **Bước 3:** Nhìn đối tượng trong cả Scene view và Game view; ghi chú điểm khác biệt.
4. **Bước 4:** Lưu scene, vào Play mode và thoát Play mode; kiểm tra thay đổi nào không được giữ lại.

**Ghi chép bắt buộc:** kết quả mong đợi → kết quả thực tế → ảnh màn hình/Console → nhận xét ngắn về nguyên nhân.

## 5. Câu hỏi ôn tập tự biên soạn (không phải quiz chính thức)

1. Kỹ năng cốt lõi trong bài này giải quyết vấn đề gì cho người chơi hoặc người làm dự án?
2. Trong nhóm kiến thức **làm việc với unity editor**, đâu là thông số hoặc đối tượng cần kiểm tra đầu tiên?
3. Nếu kết quả ở Play mode không đúng, em sẽ xem xét Console, Inspector hay cấu hình dự án trước? Vì sao?
4. Nêu một trường hợp sử dụng thực tế và điều kiện để xác nhận đã hoàn thành.

### Gợi ý tự chấm

Một câu đạt khi có: **khái niệm đúng + lý do + ví dụ kiểm chứng**. Không cần lặp lại câu chữ lý thuyết; ưu tiên chứng minh bằng scene hoặc mã của chính em.

## 6. Lỗi thường gặp và cách kiểm tra

**Hiện tượng nên đề phòng:** Lỗi phổ biến: sửa thuộc tính khi đang Play mode rồi mất thay đổi sau khi dừng.

**Quy trình debug nhanh:** (1) tái hiện lỗi; (2) đọc Console; (3) kiểm tra tham chiếu Component, trạng thái GameObject, asset/package và thiết lập scene; (4) chỉ sửa một nguyên nhân giả định; (5) chạy lại và ghi kết quả.

## 7. Checklist hoàn thành

- [ ] Hiểu vai trò của khái niệm trong bài.
- [ ] Chạy được một ví dụ tự tạo trong Unity.
- [ ] Ghi được tối thiểu một ảnh hoặc đoạn video minh chứng.
- [ ] Giải thích được một lỗi và cách phát hiện lỗi.
- [ ] Đọc bài gốc tại [Unity Learn — Get started in Unity](https://learn.unity.com/pathway/game-development/unit/get-started-in-unity?version=6.3) để đối chiếu bước chính thức và tài nguyên đính kèm.

---

*Ghi chú phiên bản:* Unity thường cập nhật giao diện, menu và package. Các bước ở trên là nội dung học độc lập, cần kiểm tra lại khi áp dụng vào Unity 6.3 hoặc phiên bản mới hơn.
