# Khóa học: Học ngoại ngữ theo bằng chứng nghiên cứu

> Tiếng Anh · Tiếng Pháp · Tiếng Nhật · Tiếng Trung

Bộ tài liệu này chuyển các nghiên cứu được kiểm chứng thành một khóa học thực hành. Mỗi paper có một file Markdown riêng, nêu rõ: **câu hỏi nghiên cứu → thiết kế → kết quả → cách áp dụng → giới hạn → nguồn**.

## Cấu trúc

```text
language_learning_research_course/
├── 00_overview/
│   ├── 00_course_map.md
│   ├── 01_evidence_matrix.md
│   └── 02_8_week_study_protocol.md
├── 01_english/
├── 02_french/
├── 03_japanese/
├── 04_chinese/
├── papers/
│   ├── papers_manifest.csv
│   ├── download_open_access_papers.ps1
│   ├── download_open_access_papers.sh
│   └── PAYWALLED_SOURCES.md
├── scripts/
│   └── extract_pdf_images.py
└── assets/pdf_extracts/
```

## Cách dùng

1. Đọc `00_overview/00_course_map.md` để biết lộ trình.
2. Mở thư mục ngôn ngữ đang học.
3. Mỗi bài đọc paper tương ứng, sau đó làm phần **Áp dụng ngay**.
4. Với paper open-access, chạy script tải PDF và xuất ảnh trang/figure.

### Windows PowerShell

```powershell
cd language_learning_research_course
powershell -ExecutionPolicy Bypass -File .\papers\download_open_access_papers.ps1
python .\scripts\extract_pdf_images.py
```

### macOS / Linux

```bash
cd language_learning_research_course
bash papers/download_open_access_papers.sh
python3 scripts/extract_pdf_images.py
```

Ảnh được tạo trong `assets/pdf_extracts/<paper-id>/` gồm `cover.png` và trang chứa figure/kết quả mục tiêu nếu script tìm thấy caption trong PDF.

## Nguyên tắc bản quyền

- PDF **open-access**: script tải từ publisher/repository hợp pháp.
- Paper **paywall**: bộ khóa học chỉ chứa tóm tắt, DOI và link publisher; không chứa bản sao lậu.
- Ảnh trích PDF chỉ phục vụ học tập/nghiên cứu; giữ citation nguồn khi tái sử dụng.

## PDF đã có sẵn trong gói

Bản đóng gói hiện chứa 4 PDF nguồn đầy đủ đã có trong Library của anh:

- `s10648-025-10068-6.pdf` — extensive reading meta-analysis (2025).
- `Effects_of_captioning_on_video_comprehension_and_i.pdf` — captioning primary study (2014).
- `how-effective-is-second-language-incidental-vocabulary-learning-a-meta-analysis.pdf` — incidental vocabulary meta-analysis (2023).
- `the-effects-of-audiovisual-input-on-second-language-learning-a-meta-analysis.pdf` — audiovisual input meta-analysis (2026).

Các PDF này đã được render và trích trang minh họa vào `assets/pdf_extracts/`. Các nguồn open-access còn lại có manifest + downloader để bổ sung khi chạy ngoài sandbox.
