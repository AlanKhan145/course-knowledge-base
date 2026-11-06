# Pydantic Crash Course — Giáo trình tiếng Việt

> **Tài liệu học Pydantic v2 từ cơ bản đến thực hành LLM Structured Output.** Bộ giáo trình biên soạn và tổ chức lại thành các module độc lập; chủ yếu tập trung vào runtime validation, Pydantic Settings và thiết kế dữ liệu có cấu trúc cho AI.

## 1. Khóa học dành cho ai?

Lập trình viên Python xây API/backend, kỹ sư AI/LLM, người muốn chuẩn hóa dữ liệu từ service khác hoặc người đang học Pydantic lần đầu. Cần biết Python cơ bản (`class`, `dict`, `list`, `try/except`).

## 2. Kết quả đầu ra

- Xây dựng và validate `BaseModel` có nested data, fields, validators.
- Chọn strict/coercion hợp lý và xử lý `ValidationError` có cấu trúc.
- Đọc cấu hình môi trường an toàn bằng `pydantic-settings`.
- Xuất JSON Schema, nhận Structured Output từ SDK LLM và thiết kế hợp đồng dữ liệu cho UI động.
- Hoàn thành lab kiểm tra API payload và mini project AI response.

## 3. Các module

- [Module 01 — Nền tảng Pydantic và môi trường](./01-Nen-tang-va-moi-truong/README.md) — 2 bài
- [Module 02 — Type hints trong Python](./02-Python-Type-Hints/README.md) — 2 bài
- [Module 03 — BaseModel và chuyển đổi dữ liệu](./03-BaseModel-va-du-lieu/README.md) — 3 bài
- [Module 04 — Validation, Field và validators](./04-Validation-va-Fields/README.md) — 4 bài
- [Module 05 — Nested models](./05-Nested-Models/README.md) — 3 bài
- [Module 06 — Pydantic Settings](./06-Pydantic-Settings/README.md) — 2 bài
- [Module 07 — Structured output với LLM](./07-Structured-Output-LLMs/README.md) — 3 bài
- [Module 08 — Thực hành tích hợp và tổng kết](./08-Thuc-hanh-va-tong-ket/README.md) — 3 bài

## 4. Lộ trình xem video và thực hành

| Thời điểm trong video | Phần học | Mô-đun |
| --- | --- | --- |
| [00:00](https://www.youtube.com/watch?v=PkQIREapb9o) | Giới thiệu và bài toán | 01 |
| [10:38](https://www.youtube.com/watch?v=PkQIREapb9o&t=638s) | Type Hints | 02 |
| [20:02](https://www.youtube.com/watch?v=PkQIREapb9o&t=1202s) | Your First Model | 03 |
| [29:15](https://www.youtube.com/watch?v=PkQIREapb9o&t=1755s) | Validation and Fields | 04 |
| [1:02:45](https://www.youtube.com/watch?v=PkQIREapb9o&t=3765s) | Nested Models | 05 |
| [1:03:57](https://www.youtube.com/watch?v=PkQIREapb9o&t=3837s) | Pydantic Settings | 06 |
| [1:10:17](https://www.youtube.com/watch?v=PkQIREapb9o&t=4217s) | Structured Output with LLMs | 07 |
| [1:20:18](https://www.youtube.com/watch?v=PkQIREapb9o&t=4818s) | Tổng kết + bài tập mở rộng | 08 |

Các timestamp là mốc tham khảo của video; phần nội dung giáo trình được chia nhỏ, giải thích rõ và bổ sung bài tập, không phải bản sao nguyên văn phụ đề.

## 5. Thiết lập thực hành

Nếu sử dụng `uv`:

```bash
uv init pydantic-course-lab
cd pydantic-course-lab
uv add pydantic pydantic-settings email-validator openai
uv run python -c "import pydantic; print(pydantic.__version__)"
```

Nếu sử dụng pip:

```bash
python -m venv .venv
# Kích hoạt .venv theo hệ điều hành
python -m pip install "pydantic>=2,<3" pydantic-settings email-validator openai
```

Các bài LLM cần `OPENAI_API_KEY` và `OPENAI_MODEL` trong environment để gọi API thật. **Không commit khóa API**.

## 6. Nguồn tham khảo và tài liệu chính thức

- [Video khóa học Pydantic — Dave Ebbelaar](https://www.youtube.com/watch?v=PkQIREapb9o)
- [Repository chính thức của khóa học](https://github.com/daveebbelaar/pydantic-crash-course)
- [Pydantic Documentation](https://docs.pydantic.dev/latest/)
- [Pydantic Settings](https://docs.pydantic.dev/latest/concepts/pydantic_settings/)
- [OpenAI Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs)

## 7. Cách tự đánh giá

Mỗi bài có câu hỏi trắc nghiệm A–D, đáp án và lý do, cộng bài tập thực hành. Đừng chỉ đọc đáp án: hãy tự chạy các ví dụ với dữ liệu cố ý sai, kiểm tra `ValidationError.errors()` và ghi lại điều quan sát được. Ưu tiên hoàn thành hai bài project trong Module 08.
