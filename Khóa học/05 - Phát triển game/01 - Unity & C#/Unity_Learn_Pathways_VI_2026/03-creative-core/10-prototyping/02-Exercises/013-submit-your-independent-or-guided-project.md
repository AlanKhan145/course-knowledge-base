# Bài 13 — Bài nộp dự án độc lập hoặc dự án có hướng dẫn

> **Creative Core · Prototyping · Bài tập**

Chuẩn bị hồ sơ bàn giao một prototype Unity có thể kiểm chứng, bao gồm bản build, minh chứng chạy và mô tả quyết định thiết kế.

## 1. Mục tiêu và kiến thức cần dùng

Hoàn tất một hồ sơ mà người khác có thể xem, chạy thử và đánh giá. Vận dụng kiến thức về scene, interaction, build, playtest, ghi lại asset license và hướng dẫn sử dụng. Đây là **bài thực hành bàn giao**, không đòi hỏi phát triển thêm cơ chế mới.

## 2. Đề bài

Chọn dự án độc lập hoặc dự án theo hướng dẫn mà bạn đã xây dựng trong Creative Core. Chuẩn bị bản thể hiện đầy đủ một core loop, sau đó tạo gói nộp giúp người đánh giá trả lời ba câu hỏi: **sản phẩm làm gì? chạy thế nào? có bằng chứng gì cho thấy đã được thử?**

Nếu nộp lên nền tảng Unity Learn, thực hiện đúng hướng dẫn nộp đang hiển thị trên bài học tương ứng; checklist trong tài liệu này là bộ tiêu chí học tập đề xuất, không thay cho quy định của nền tảng.

## 3. Nhiệm vụ và quy trình bàn giao

1. **Kiểm tra project:** lưu scene, xóa các bản tạm không cần thiết, xác nhận các tham chiếu script và asset không lỗi.
2. **Build:** dùng `File > Build Profiles`, chọn nền tảng phù hợp, đảm bảo scene cần chạy có trong danh sách scene build. Nếu chưa có module nền tảng, cài qua Unity Hub.
3. **Chạy thử độc lập:** đóng Editor hoặc dùng môi trường người nhận dự kiến, xác nhận input, âm thanh và trạng thái hoàn thành.
4. **Ghi minh chứng:** video ngắn thể hiện điểm xuất phát → tương tác → kết quả; ảnh có giá trị chứng minh, không chỉ ảnh Editor.
5. **Viết README:** mục tiêu, cách chạy, bản Unity nếu gửi source, các phím điều khiển, phụ thuộc và lỗi còn biết.
6. **Ghi nguồn asset:** tài nguyên của bên thứ ba, giấy phép/attribution khi cần.
7. **Rà soát quyền chia sẻ:** không công khai mã, hình ảnh hoặc nội dung bị ràng buộc bảo mật/giấy phép.
8. **Nộp đúng kênh:** link build, file source, bản video hoặc dạng khác theo yêu cầu thực tế.

## 4. Cấu trúc gói bàn giao minh họa

```text
Prototype_Submission/
├── README.md
├── Build/                 # Bản chạy nếu được phép phân phối
├── Evidence/
│   ├── demo.mp4
│   └── screenshots/
├── Asset-Licenses.md
├── Playtest-Notes.md
└── Project/               # Chỉ khi cần bàn giao source Unity
```

Một project Unity đưa lên Git thường cần `Assets/`, `Packages/` và `ProjectSettings/` cùng các `.meta`; không cần chia sẻ `Library/` vì thường được Unity tái tạo tại máy nhận. Không xóa `.meta` để “giảm kích thước” vì có thể phá tham chiếu asset.

## 5. Tiêu chí hoàn thành và tự kiểm

- [ ] Có hướng dẫn chạy mà người ngoài dự án có thể làm theo.
- [ ] Có đầu–giữa–cuối của trải nghiệm và tín hiệu phản hồi.
- [ ] Có build kiểm tra được hoặc giải thích rõ cách mở source theo yêu cầu nộp.
- [ ] Có ít nhất một ghi nhận kiểm thử và một thay đổi sau thử.
- [ ] Không còn lỗi Console nghiêm trọng làm hỏng core loop.
- [ ] Có thông tin giấy phép và quyền chia sẻ asset.
- [ ] Tất cả link/file cần nộp đều mở được.

**Câu hỏi tự đánh giá:** nếu một người nhận chưa biết dự án, họ có thể khởi chạy trong lần đầu? Họ có nhìn thấy kết quả của tương tác chính? Bằng chứng có phản ánh đúng bản build cuối?

## 6. Nguồn kỹ thuật

- [Unity Docs – Create build profile](https://docs.unity.com/en-us/engine/6000.0/manual/building-and-publishing/build-settings/create-build-profile)
- [Unity Docs – Build Profiles reference](https://docs.unity.com/en-us/engine/6000.6/manual/building-and-publishing/build-settings/build-profiles-reference)
- [Unity Learn – Creative Core Prototyping](https://learn.unity.com/project/creative-core-prototyping)
