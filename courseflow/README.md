# CourseFlow — Personal Learning Hub

Web học tập cá nhân đọc trực tiếp kho học liệu Markdown (`../Khóa học`). Bạn có thể:

- tìm khóa và bài (có dấu hoặc không dấu);
- học theo module, xem ảnh, sơ đồ Mermaid, công thức và code;
- làm câu hỏi ôn tập ngay dưới mỗi bài;
- ôn ngẫu nhiên hoặc theo lịch giãn cách (FSRS);
- đánh dấu biên tập (đã đọc / cần sửa / đã sửa);
- sửa và lưu Markdown ngay trên web, có sao lưu và khôi phục.

> Web **không bao giờ tự sửa** học liệu. File chỉ thay đổi khi bạn bấm **Lưu** trong trình soạn thảo, và bản cũ luôn được sao lưu trước.

## Chạy trên Windows

Yêu cầu: **Node.js 24+** (dùng `node:sqlite` có sẵn, không cần cài SQLite) và Microsoft Edge (chỉ cần cho test E2E).

```powershell
cd "D:\Sao lưu\Udemy\courseflow"
npm install
npm run scan        # dựng catalog: lần đầu ~40 phút trên ổ chậm, các lần sau chỉ đọc file thay đổi (~5–9 phút do duyệt cây thư mục)
npm run dev         # http://localhost:3210
```

Bản chạy nhanh hơn (build production):

```powershell
npm run build
npm start           # http://localhost:3210
```

| Lệnh | Việc |
|---|---|
| `npm run scan` | Quét học liệu (tăng dần theo mtime/size), cập nhật `.data/catalog.db` và `reports/SURVEY.md` |
| `npm run scan:force` | Đọc lại toàn bộ file |
| `npm run quality` | Báo cáo chất lượng → `reports/QUALITY.md`, `reports/quality.json`, trang `/quality` |
| `npm test` | Unit test (Vitest) |
| `npm run test:e2e` | E2E (Playwright, dùng Edge đã cài) |

### Biến môi trường (tuỳ chọn, đặt trong `.env.local`)

| Biến | Mặc định | Ý nghĩa |
|---|---|---|
| `COURSEFLOW_CONTENT_ROOTS` | `../Khóa học` | Một hoặc nhiều thư mục học liệu, ngăn cách bằng `;` |
| `COURSEFLOW_DATA_DIR` | `.data` | Nơi chứa `catalog.db` và `backups/` |
| `COURSEFLOW_MANIFESTS_DIR` | `manifests` | Manifest ghi đè metadata khóa mà không đụng thư mục học liệu |
| `COURSEFLOW_MODE` | (local) | Đặt `public` để tắt trình soạn thảo, nút VS Code và quét từ web |

## Các trang

| Trang | Đường dẫn |
|---|---|
| Trang chủ: tiếp tục học, thống kê thật, gợi ý | `/` |
| Khám phá: lọc lĩnh vực / chuyên ngành / ngôn ngữ / trình độ / trạng thái | `/explore` |
| Tìm kiếm toàn văn có đoạn trích tô sáng | `/search` (hoặc `Ctrl + K` ở mọi trang) |
| Chi tiết khóa, nội dung module, kiểm tra cuối khóa | `/courses/<khóa>` |
| Đọc bài: sidebar, mục lục, quiz, ghi chú, đánh dấu | `/learn/<khóa>/<bài>` |
| Soạn và lưu Markdown, xem trước trực tiếp, diff, lịch sử | `/edit/<khóa>/<bài>` |
| Ôn tập: đến hạn hôm nay (FSRS) và ngẫu nhiên tùy chọn | `/practice` |
| Biên tập: bài cần sửa / đã đọc / đã sửa; bảng theo khóa | `/review`, `/courses/<khóa>/review` |
| Template bài học (xem trước + mã để chép) | `/templates` |
| Báo cáo chất lượng | `/quality` |
| Xuất / nhập tiến độ, quét lại | `/settings` |

Phím tắt khi đọc bài: `[` `]` chuyển bài, `F` chế độ tập trung, `/` tìm kiếm. Trong trình soạn thảo: `Ctrl + S` để lưu.

## Viết bài theo template

Xem `templates/README.md` hoặc trang `/templates`. Câu hỏi đơn giản nhất:

```markdown
## Câu hỏi ôn tập

### Câu 1

Câu hỏi?

A. …
B. …

**Đáp án:** B. **Giải thích:** …
```

## Tài liệu

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md): kiến trúc, luồng dữ liệu, an toàn.
- [docs/CONTENT_SCHEMA.md](docs/CONTENT_SCHEMA.md): quy tắc nhận diện khóa/module/bài, câu hỏi, chấm điểm.
- [docs/LEARNING_DESIGN.md](docs/LEARNING_DESIGN.md): cơ sở khoa học (FSRS, truy hồi, mức tự tin).
- [docs/TESTING.md](docs/TESTING.md): kiểm thử.
- [docs/STATUS.md](docs/STATUS.md): tính năng đã xong / chưa xong.
- `reports/SURVEY.md`: báo cáo khảo sát kho; `reports/QUALITY.md`: báo cáo chất lượng.
