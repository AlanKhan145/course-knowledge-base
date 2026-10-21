---
title: "Quiz: Manage scene flow and data"
pathway: "Junior Programmer"
module: "Manage Scene Flow and Data"
lesson_number: 8
lesson_type: quiz
unity_version: "6.3"
source_mission: "https://learn.unity.com/pathway/junior-programmer/unit/manage-scene-flow-and-data?version=6.3"
content_type: "Bài học tiếng Việt tự biên soạn từ đề mục công khai"
coverage: "outline_based_not_official_transcript"
checked_at: "2026-10-21"
---

# Bài 08 — Quiz: Manage scene flow and data

> **Pathway:** Junior Programmer · **Mission:** Manage Scene Flow and Data · **Loại:** quiz · **Phiên bản mục lục:** Unity 6.3

> **Nguồn đối chiếu:** [Manage Scene Flow and Data trên Unity Learn](https://learn.unity.com/pathway/junior-programmer/unit/manage-scene-flow-and-data?version=6.3). Nội dung dưới đây là hướng dẫn **tự biên soạn**, không phải toàn văn, bản dịch chính thức hay bản ghi video của Unity. Liên kết dẫn tới Mission chứa bài gốc.

## 1. Tổng quan

**Chủ đề:** Luồng scene, lưu dữ liệu và phiên bản dự án. Trong ngữ cảnh *Manage Scene Flow and Data*, bài **Quiz: Manage scene flow and data** cần được học bằng cách xác định một kết quả quan sát được, thử trong Unity Editor và ghi lại cách kiểm chứng. Khi dự án thực hành của Unity khác dự án hiện tại, có thể dùng một scene nhỏ để luyện đúng kỹ năng cốt lõi.

## 2. Mục tiêu học tập

- Trình bày được mục đích của **luồng scene, lưu dữ liệu và phiên bản dự án** trong dự án Unity.
- Tự trả lời câu hỏi và giải thích bằng ví dụ kiểm chứng trong Editor.
- Phát hiện ít nhất một lỗi thường gặp và nêu cách kiểm chứng hoặc sửa lỗi.

## 3. Kiến thức trọng tâm

- SceneManager giúp chuyển scene; cần đảm bảo scene đã được đưa vào danh sách build theo giao diện Unity tương ứng.
- Dữ liệu trong RAM mất khi đóng ứng dụng trừ khi được lưu vào một định dạng bền vững.
- PlayerPrefs phù hợp tùy chọn đơn giản, không thích hợp để lưu bí mật; dữ liệu phức tạp thường cần tệp hoặc storage khác.

### Thuật ngữ và mối quan hệ

| Khái niệm | Vai trò trong bài |
|---|---|
| Scene | Không gian chứa các GameObject để thiết kế và chạy thử |
| GameObject | Đối tượng trong scene, được mở rộng bằng Component |
| Component | Đơn vị chứa dữ liệu/hành vi, điều chỉnh được trong Inspector |
| Play mode | Chạy thử hành vi và xác minh kết quả tương tác |

## 4. Thực hành từng bước

1. **Bước 1:** Xác định ba dữ liệu: dữ liệu chỉ tồn tại trong scene, giữa các scene và qua lần mở app.
2. **Bước 2:** Tạo một scene menu và scene gameplay, thử luồng chuyển cảnh.
3. **Bước 3:** Chọn cơ chế duy trì trạng thái thích hợp, rồi kiểm tra bằng cách tắt mở app.
4. **Bước 4:** Nếu quản lý mã nguồn, thêm .gitignore đúng cho Unity và thử lịch sử commit.

**Ghi chép bắt buộc:** kết quả mong đợi → kết quả thực tế → ảnh màn hình/Console → nhận xét ngắn về nguyên nhân.

## 5. Câu hỏi ôn tập tự biên soạn (không phải quiz chính thức)

1. Kỹ năng cốt lõi trong bài này giải quyết vấn đề gì cho người chơi hoặc người làm dự án?
2. Trong nhóm kiến thức **luồng scene, lưu dữ liệu và phiên bản dự án**, đâu là thông số hoặc đối tượng cần kiểm tra đầu tiên?
3. Nếu kết quả ở Play mode không đúng, em sẽ xem xét Console, Inspector hay cấu hình dự án trước? Vì sao?
4. Nêu một trường hợp sử dụng thực tế và điều kiện để xác nhận đã hoàn thành.

### Gợi ý tự chấm

Một câu đạt khi có: **khái niệm đúng + lý do + ví dụ kiểm chứng**. Không cần lặp lại câu chữ lý thuyết; ưu tiên chứng minh bằng scene hoặc mã của chính em.

## 6. Lỗi thường gặp và cách kiểm tra

**Hiện tượng nên đề phòng:** Lỗi phổ biến: đối tượng quản lý trạng thái bị tạo trùng, dữ liệu bị ghi đè hoặc quên thiết lập scene build.

**Quy trình debug nhanh:** (1) tái hiện lỗi; (2) đọc Console; (3) kiểm tra tham chiếu Component, trạng thái GameObject, asset/package và thiết lập scene; (4) chỉ sửa một nguyên nhân giả định; (5) chạy lại và ghi kết quả.

## 7. Checklist hoàn thành

- [ ] Hiểu vai trò của khái niệm trong bài.
- [ ] Chạy được một ví dụ tự tạo trong Unity.
- [ ] Ghi được tối thiểu một ảnh hoặc đoạn video minh chứng.
- [ ] Giải thích được một lỗi và cách phát hiện lỗi.
- [ ] Đọc bài gốc tại [Unity Learn — Manage Scene Flow and Data](https://learn.unity.com/pathway/junior-programmer/unit/manage-scene-flow-and-data?version=6.3) để đối chiếu bước chính thức và tài nguyên đính kèm.

---

*Ghi chú phiên bản:* Unity thường cập nhật giao diện, menu và package. Các bước ở trên là nội dung học độc lập, cần kiểm tra lại khi áp dụng vào Unity 6.3 hoặc phiên bản mới hơn.
