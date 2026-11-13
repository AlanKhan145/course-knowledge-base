# Kiểm thử

| Bộ | Lệnh | Phạm vi |
|---|---|---|
| Unit (Vitest) | `npm test` | Parse câu hỏi (mọi biến thể trong kho), chấm điểm, FSRS, phân loại tên, discovery trên cây thư mục mẫu tạm (lồng sâu, thư mục bọc, assets, khóa thiếu bài, liên kết hỏng, ID ổn định), `resolveInside`, editor (backup, CRLF, xung đột, chặn đường dẫn ngoài, Public Mode) |
| E2E (Playwright + Edge) | `npm run test:e2e` | Dashboard, tìm kiếm không dấu (trang + Ctrl+K), lọc lĩnh vực, đọc bài (code, quiz, nộp bài, đánh dấu đã học còn sau reload, phím `[` `]`), ôn ngẫu nhiên, đánh dấu biên tập, 4 cấu trúc khóa khác nhau, trang template (ảnh/KaTeX/Mermaid/quiz), trình soạn thảo (không lưu), chặn path traversal, mobile (không tràn ngang, drawer, mục lục) |
| Ảnh chụp thủ công | `bash tools/shots.sh` | Chụp các trang chính vào `.shots/` (Edge) |

Ghi chú:

- E2E chạy trên catalog thật (`.data/catalog.db`), nên cần chạy `npm run scan` trước.
- Test E2E không bấm Lưu trong trình soạn thảo, nên không file học liệu nào bị đổi. Luồng lưu được kiểm bằng unit test trên thư mục tạm.
- Ổ D chậm nên lần biên dịch đầu của mỗi trang có thể mất vài phút, vì vậy timeout được đặt rộng.
