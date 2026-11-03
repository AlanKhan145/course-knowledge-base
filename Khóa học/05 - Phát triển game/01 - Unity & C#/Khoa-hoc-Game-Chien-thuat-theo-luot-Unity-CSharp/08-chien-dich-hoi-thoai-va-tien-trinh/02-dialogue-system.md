# Hội thoại và sự kiện cốt truyện

> **Module 08** · Tham chiếu bản ghi video: **11:50–11:57; 10:37–10:55** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

Video xem hội thoại là hệ thống khá đơn giản: hiển thị các đoạn văn/text và portrait nếu cần. Tuy nhiên, để mở rộng, không nên nhét hội thoại vào LevelController dưới dạng chuỗi hard-code.

Một đoạn hội thoại có danh sách `speaker`, `text`, `portrait`, `next`, và có thể có lựa chọn rẽ nhánh. Cần quy định rõ khi đang hội thoại game có tạm dừng input chiến thuật hay không.

Lưu văn bản thành dữ liệu để có thể bản địa hóa về sau; UI chỉ render và báo khi người chơi nhấn tiếp.

## 2. Quy trình thực hành với Unity/C#

1. Tạo `DialogueSequence` chứa các dòng và id.
2. Tạo `DialoguePanel` có tên nhân vật, text và nút Next.
3. Level trigger gọi `DialogueRunner.Play(sequence)`.
4. Khóa input gameplay trong lúc phát hội thoại; mở lại sau khi kết thúc.
5. Thêm phát sự kiện hoàn tất để nhiệm vụ có thể tiếp tục.
6. Kiểm tra hội thoại có văn bản dài, thiếu portrait, nút Skip.

## 3. Bài tập vận dụng

Soạn hội thoại 6 dòng trước và sau một tình huống bị phục kích, mỗi câu phục vụ một thông tin chiến thuật.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
