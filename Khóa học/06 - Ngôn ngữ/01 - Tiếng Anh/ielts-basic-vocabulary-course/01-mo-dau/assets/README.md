# Image assets — Module 01

Mỗi mục từ vựng và mỗi câu hỏi hình ảnh có một file PNG riêng.

## Quy ước

- `vocab/countries/<slug>.png`: một mục country → nationality.
- `vocab/numbers/<slug>.png`: một số hoặc một ngữ cảnh dùng số.
- `vocab/adjectives/<slug>.png`: một tính từ.
- `vocab/adjectives/kitchen.png`: ảnh context noun giữ lại để đối chiếu; không dùng trong bộ thẻ tính từ.
- `exam/toeic-part1/q01-...png`: một câu TOEIC Listening Part 1.
- `exam/toeic-speaking/q03-...png`: một câu TOEIC Speaking Describe a Picture.
- `exam/toeic-writing/q01-...png`: một câu TOEIC Writing Sentence Based on a Picture.
- `exam/ielts-speaking/q01-...png`: một prompt hình ảnh IELTS Speaking.
- `atlas/`: atlas gốc được tạo bằng imagegen; các file trong `vocab/` và `exam/` là các ô đã tách thành ảnh độc lập.

## Phạm vi hiện tại

- 33 ảnh country/nationality.
- 48 ảnh number và number contexts.
- 47 ảnh adjectives/adjective contexts; `kitchen.png` được giữ lại như ảnh context noun nhưng không còn đưa vào bộ tính từ.
- 6 ảnh TOEIC Listening Part 1.
- 2 ảnh TOEIC Speaking câu 3–4.
- 5 ảnh TOEIC Writing câu 1–5.
- 4 ảnh IELTS Speaking visual prompts.

Các câu TOEIC/IELTS mới nên đặt một `question-id` riêng và thêm một PNG riêng theo cùng quy ước, thay vì dùng lại ảnh của câu khác.
