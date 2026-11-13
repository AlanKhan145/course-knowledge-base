# Template học liệu CourseFlow

| File | Dùng để |
|---|---|
| `lesson.md` | Mẫu bài học đầy đủ. Copy rồi sửa nội dung; xoá mục không cần. |
| `quiz.json` | Đủ 8 dạng câu hỏi (chọn một, chọn nhiều, đúng/sai, điền trống, tự luận, sắp xếp, ghép cặp, đọc code). Đặt cạnh bài: `<tên-bài>.quiz.json`. |
| `course.yaml` | Metadata khóa học (tiêu đề, mô tả, mục tiêu, trình độ, ghi đè module/bài). |
| `module.yaml` | Quy ước đặt tên thư mục/file để thứ tự đúng. |
| `assets/` | Ảnh minh họa dùng trong `lesson.md`. |

## Thêm một khóa học mới

1. Tạo thư mục khóa trong đúng chuyên ngành: `Khóa học/<NN - Lĩnh vực>/<NN - Chuyên ngành>/<ten-khoa>/`.
2. Viết `README.md` (dòng `# Tên khóa`, một đoạn mô tả, mục `## Mục tiêu` dạng danh sách).
3. Mỗi module một thư mục có số thứ tự; mỗi bài một file `.md` theo `lesson.md`.
4. Chạy `npm run scan` trong thư mục `courseflow` (hoặc bấm “Quét lại” ở trang Cài đặt).
5. Mở web → Khám phá → khóa mới. Trang “Biên tập” của khóa cho biết bài nào chưa khớp template.

## Câu hỏi trắc nghiệm trong bài (cách đơn giản nhất)

```markdown
## Câu hỏi ôn tập

### Câu 1

Câu hỏi?

A. …
B. …
C. …
D. …

**Đáp án:** B. **Giải thích:** …
```

- Nhiều đáp án đúng: `**Đáp án:** A, C`.
- Đúng/Sai: hai phương án `A. Đúng` / `B. Sai`.
- Tự luận: không có phương án, chỉ `**Đáp án:** <đáp án mẫu>` — người học tự đối chiếu, không bị chấm tự động.
- Dạng nâng cao: khối ```` ```quiz ```` (YAML) như trong `lesson.md`, hoặc file `quiz.json`.

## Ảnh, sơ đồ, công thức

- Ảnh: `![mô tả](./assets/ten-anh.webp "chú thích")` — đường dẫn tương đối từ file bài; web hiện cả đường dẫn ảnh dưới mỗi ảnh.
- Sơ đồ: khối ```` ```mermaid ````.
- Công thức: `$...$` hoặc `$$ ... $$` (KaTeX).
- Lưu ý: `> [!TIP]`, `> [!WARNING]`, `> [!NOTE]`, `> [!SUMMARY]`, hoặc `> **Lưu ý:** …`.

Web **không bao giờ tự sửa** file Markdown. Khi bạn sửa trên web (nút “Sửa trên web”), bản cũ được sao lưu trong `courseflow/.data/backups` và khôi phục được bằng nút “Lịch sử”.
