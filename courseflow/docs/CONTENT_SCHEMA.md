# Schema nội dung & quy tắc nhận diện

## Phân cấp

`Domain (NN - Lĩnh vực) → Category (NN - Chuyên ngành) → [Sub-category NN - …] → Course → Module → [nhóm] → Lesson → Assessment`

- **Domain**: thư mục cấp 1 có dạng `NN - Tên`. Thư mục không đánh số bị bỏ qua và ghi vào báo cáo.
- **Category**: thư mục cấp 2 dạng `NN - Tên`. Thư mục không đánh số ở cấp 2 được coi là khóa học, xếp vào chuyên ngành "Khác".
- **Sub-category**: thư mục `NN - Tên` trong chuyên ngành mà không có bài học trực tiếp, chỉ chứa thư mục con (ví dụ `01 - Sơ cấp (A1-A2)`). Trình độ suy ra từ tên: Sơ cấp, Trung cấp, Cao cấp.
- **Course**: mỗi thư mục dưới chuyên ngành/sub-category có ít nhất một file `.md`. Thư mục không có Markdown nào bị bỏ qua và báo `course-empty`.

## Trong một khóa

1. Bỏ qua `node_modules`, `.git`, `dist`, `__pycache__`, `.venv`, thư mục bắt đầu bằng `.` và các thư mục build khác.
2. Các loại **tài nguyên**:
   - thư mục tên `assets`, `images`, `resources`, `code`, `src`, `data`, `slides`, `*_TXT_GOC`, `transcripts`…;
   - thư mục có `package.json`, `pyproject.toml`, `requirements.txt`, `.git`, `ProjectSettings`…
   File Markdown trong các thư mục này là "tài liệu bổ sung", không tính tiến độ.
3. **Tổng quan**: `README.md`, `index.md`, `00-MUC-LUC-*.md`, `COURSE_INDEX.md`, `00_LO_TRINH*.md`, `overview.md`… Chúng không phải bài học. File ở gốc khóa cho tiêu đề, mô tả, mục tiêu và điều kiện; file ở gốc module cho tiêu đề module.
4. **Tài nguyên dạng file**: `COVERAGE_REPORT`, `IMAGE_SOURCES`, `REFERENCES`, `*TRANSCRIPT*`, `CHANGELOG`… Đọc được nhưng không tính tiến độ.
5. **Thư mục bọc**: gốc khóa không có bài và chỉ có một thư mục nội dung, hoặc thư mục tên `modules`, `lessons`, `bai-hoc`, `content`… thì bộ quét đi xuống một cấp. Ví dụ `Ai-engineer/Khóa-1/AI-Agent-365-Ngay-Course/01 - Tuan 1`.
6. **Module**: mỗi thư mục con có bài. Thư mục sâu hơn thành **nhóm bài**, hiện dưới dạng tiêu đề nhỏ.
7. **Bài ở gốc khóa**:
   - khóa không có module thì đưa vào module "Nội dung khóa học";
   - khóa có module thì đưa vào "Mở đầu";
   - tên kiểu `CHEATSHEET`, `GLOSSARY`, `CAPSTONE`, `phụ lục` thì đưa vào "Tài liệu bổ sung" ở cuối.
8. **Thứ tự**: so sánh tự nhiên theo từng đoạn đường dẫn (2 đứng trước 10), sau đó `order` trong frontmatter hoặc manifest ghi đè.
9. Khóa không có bài nhưng có tổng quan ≥ 120 từ thì tổng quan được đọc như bài, trạng thái `overview-only`. Khóa có < 3 bài, trung bình < 150 từ, hoặc > 40% bài < 80 từ thì trạng thái `partial`.
10. Frontmatter `draft: true` hoặc manifest `hidden: true` thì bị ẩn.

Manifest (`courseflow.yaml` trong khóa hoặc `manifests/<id>.yaml`): xem `templates/course.yaml`. File `course.json` có sẵn của công cụ khác chỉ lấy những trường hiểu được.

## Frontmatter bài học

`id, title, description, order, duration (phút), difficulty, language, tags, objectives, prerequisites, kind (lesson|overview|resource), draft, slug`. Mọi trường đều tuỳ chọn.

## Câu hỏi

Nguồn câu hỏi:
1. Mục có tiêu đề kiểu "Câu hỏi ôn tập / tự kiểm tra / trắc nghiệm", "Quiz", "Knowledge Check", "Review Questions"…
2. Khối ```` ```quiz ```` (YAML hoặc JSON).
3. File `<bài>.quiz.json|yaml` đặt cạnh bài.

Mục câu hỏi được thay bằng bài trắc nghiệm tương tác; file gốc giữ nguyên.

| Dạng | Cách viết trong Markdown |
|---|---|
| Chọn một | `### Câu N` + các dòng `A. …` + `**Đáp án:** B` |
| Chọn nhiều | `**Đáp án:** A, C`, hoặc phương án `- [x]` / `- [ ]` |
| Đúng/Sai | Hai phương án `A. Đúng` / `B. Sai` |
| Tự luận (tự chấm) | Không có phương án, chỉ `**Đáp án:** <đáp án mẫu>` hoặc `**Answer:**` |
| Điền chỗ trống, sắp xếp, ghép cặp, đọc code | Khối `quiz` / `quiz.json`, xem `templates/quiz.json` |

Các biến thể nhận được: `**Câu 1.** câu hỏi`, phương án trên cùng một dòng (`A. x. B. y. C. z.`), `**Đáp án: A.** giải thích`, `<details><summary>Đáp án</summary>…</details>`, và mục "Đáp án" riêng ở cuối dạng `1. B`.

## Chấm điểm

- Chọn một, Đúng/Sai: đúng thì 1, sai thì 0.
- Chọn nhiều, mặc định `partial`: `max(0, (số lựa chọn đúng − số lựa chọn sai) / số đáp án đúng)`. Với `all-or-nothing` chỉ khớp hoàn toàn mới được 1.
- Điền chỗ trống: từng ô so khớp đã chuẩn hóa (bỏ khoảng trắng thừa, dấu câu cuối; không phân biệt hoa thường; chấp nhận cả khi gõ không dấu). Điểm là tỉ lệ ô đúng.
- Tự luận có `accept`: so khớp chuẩn hóa. Không có `accept` nhưng có đáp án mẫu: người học tự đánh giá "Đã đúng ý / Chưa đúng", và câu chỉ được tính điểm sau khi tự đánh giá. Không có đáp án mẫu: câu suy ngẫm, không tính điểm. **Không dùng AI để chấm.**
- Sắp xếp: khớp toàn bộ thì 1, ngược lại là tỉ lệ vị trí đúng. Ghép cặp: tỉ lệ cặp đúng.
- Chỉ hiện đáp án sau khi nộp. Có thể làm lại toàn bài hoặc chỉ các câu sai. Mọi lần làm được lưu lại.

## Ôn tập giãn cách (FSRS-6)

Xem `docs/LEARNING_DESIGN.md` §4. Mỗi câu chấm tự động được thành thẻ sau lần nộp đầu tiên. Grade suy từ điểm và mức tự tin (Đoán / Khá chắc / Chắc chắn). Mức nhớ mong muốn 0,90, khoảng ôn tối đa 180 ngày. Câu "mẫu lặp" (chỉ khác tên bài trong ngoặc kép) bị bỏ qua mặc định ở trang Ôn tập.
