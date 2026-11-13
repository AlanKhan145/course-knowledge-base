# Tình trạng tính năng

## Đã hoàn thành

**Dữ liệu**
- Course Discovery Engine trên kho thật: 11 lĩnh vực, 135 chuyên ngành/cấp con, 1.224 khóa, 13.566 module, ~108.800 bài, ~500.000 câu hỏi.
- Nhận diện được: thư mục bọc, lồng sâu, assets/resources/dự án code, file tổng quan, bài ở gốc khóa, phụ lục, khóa thiếu bài.
- Manifest sidecar (`courseflow.yaml` trong khóa hoặc `manifests/`) và ID ổn định.
- Quét tăng dần theo mtime/size, chỉ mục toàn văn FTS5 không dấu.
- Báo cáo khảo sát (`reports/SURVEY.md`) và báo cáo chất lượng (`reports/QUALITY.md`, trang `/quality`). Báo cáo tách rõ phần máy kiểm tra được và phần cần người duyệt.

**Đọc bài**
- Markdown đầy đủ: GFM, bảng, footnote, task list bấm được, KaTeX, Mermaid (phóng to, kéo, zoom), Shiki (nhãn ngôn ngữ, số dòng, nút chép), callout 7 loại.
- Ảnh có lightbox/zoom, alt, chú thích và **đường dẫn ảnh** (như viết trong Markdown → file thật, có nút chép); ảnh thiếu được báo rõ.
- Video/audio, YouTube chỉ nạp khi bấm; HTML đã sanitize; link tương đối mở đúng bài; link hỏng có gạch chân lượn sóng.
- Sidebar module (tìm bài, trạng thái, chấm biên tập), mục lục bám vị trí đọc, thanh tiến độ đọc.
- Chế độ tập trung, toàn màn hình; cỡ chữ, độ rộng, font có chân/không chân; nhớ vị trí cuộn; tính thời gian đọc thật (chỉ khi tab hiện và người dùng có thao tác).
- Bookmark, ghi chú, chép link heading, phím tắt `[` `]` `F` `/`, nút "Đánh dấu đã học" (không tự hoàn thành khi cuộn hết bài).
- Dark/Light/hệ thống; giao diện mobile có drawer và bottom sheet.

**Câu hỏi**
- Parse mục "Câu hỏi ôn tập" có sẵn thành quiz tương tác, không sửa file; khối ```` ```quiz ````; file `*.quiz.json`.
- 8 dạng câu hỏi; chấm điểm như mô tả trong CONTENT_SCHEMA; tự chấm câu tự luận, không giả vờ chấm bằng AI.
- Chế độ luyện tập và kiểm tra (giới hạn giờ, xáo câu); làm lại toàn bài hoặc chỉ câu sai; lịch sử từng lần làm.
- Ôn tập tổng kết module và kiểm tra cuối khóa, lấy ngẫu nhiên từ câu hỏi của chính khóa.
- **Ôn tập ngẫu nhiên** từ bài đã học / đã đọc qua / đã lưu / cần sửa; lọc theo khóa; chọn số câu; xáo câu và đáp án tùy chọn; xáo đề mới; có bỏ câu "mẫu lặp".
- **Lịch ôn giãn cách FSRS-6** ("Đến hạn hôm nay") kết hợp mức tự tin; cảnh báo "sai mà chắc chắn".

**Biên tập & soạn thảo**
- Đánh dấu Chưa xem / Đã đọc qua / Cần sửa / Đã sửa xong, kèm ghi chú cần sửa gì.
- Trang `/review` và bảng biên tập theo khóa: lọc, đánh dấu hàng loạt, điểm khớp template, lỗi tự phát hiện, báo "file đổi sau khi đánh dấu".
- **Soạn và lưu Markdown trên web**: CodeMirror, xem trước trực tiếp (cùng renderer, quiz tương tác), chèn nhanh khối mẫu, panel khớp template, xem diff trước khi lưu, sao lưu mỗi lần lưu, lịch sử và khôi phục, chặn ghi đè khi file đổi ở nơi khác, giữ nguyên kiểu xuống dòng, cập nhật chỉ mục ngay.
- Template: `templates/lesson.md` (thứ tự mục dựa trên bằng chứng), `quiz.json` (8 dạng), `course.yaml`, `module.yaml`, `README.md`; trang `/templates` xem trước + chép/tải.

**Khác**
- Trang chủ dùng số liệu thật: tiếp tục học, ôn hôm nay, chuỗi ngày, biểu đồ 7 ngày, yêu thích, gợi ý theo lĩnh vực.
- Trang Khám phá (lọc, tìm mờ, sắp xếp), tìm kiếm toàn văn có đoạn trích tô sáng và tô sáng ngay trong bài.
- Xuất/nhập JSON tiến độ, quét lại từ trang Cài đặt.
- Bảo mật: chặn path traversal, sanitize HTML, CSP cho asset, Public Mode tắt chức năng ghi.
- Test: 223 unit test (Vitest), E2E Playwright (desktop + mobile) chạy trên Edge.

## Chưa hoàn thành / giới hạn

- Lần quét đầu mất ~40 phút, các lần sau vẫn 5–15 phút vì phải duyệt cây thư mục trên ổ D chậm. Hướng cải thiện: theo dõi thay đổi bằng watcher.
- Số câu hỏi trong catalog lấy theo lần quét đầy đủ gần nhất. Vài cải tiến parser sau đó (heading cùng cấp, `**Câu 1.** **x**`) chỉ áp dụng cho file được đọc lại; chạy `npm run scan:force` để cập nhật toàn bộ.
- Bộ lọc câu "mẫu lặp" là heuristic (tên bài trong ngoặc kép), chưa thống kê trùng lặp trên toàn khóa như đề xuất F3 đầy đủ.
- Chưa có: câu hỏi trước bài (F6), khung "giải thích bằng lời của bạn" có cấu trúc (F7), biểu đồ hiệu chỉnh (F8), tóm tắt tuần (F9), tối ưu tham số FSRS (F13). Xem `docs/LEARNING_DESIGN.md`.
- Nhiều tài khoản và đồng bộ giữa các máy: chưa có, hiện dùng Xuất/Nhập JSON. Kiến trúc store đã tách theo profile.
- Sinh câu hỏi nháp bằng AI: chưa làm (cần cấu hình AI và quy trình duyệt).
- Thư mục `courseflow/` chưa được thêm vào Git (`.gitignore` gốc chỉ cho `Khóa học/`).
