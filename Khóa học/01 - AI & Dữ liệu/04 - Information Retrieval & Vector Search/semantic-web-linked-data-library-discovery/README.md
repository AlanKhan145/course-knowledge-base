# Khóa học: Semantic Web & Linked Data cho khám phá tài nguyên thư viện

Khóa học này được biên soạn trực tiếp từ paper **“Connecting the Dots: A Semantic Web Solution for Enhanced Library Resource Discovery”** của Min Hoon Ee, Ashwin Nair và Robin Dresel, *Information Technology and Libraries*, March 2026.

Mục tiêu của khóa học là biến case study Singapore Infopedia Widget thành một lộ trình học có cấu trúc: từ bài toán khám phá tài nguyên, chuẩn hóa metadata, Knowledge Graph, Named Entity Recognition, kiến trúc widget, đến ranking và các hướng cải tiến.

## Cấu trúc thư mục

```text
semantic_web_library_course/
├── README.md
├── COURSE_MAP.md
├── theory/
│   ├── 01_linked_data_foundations.md
│   ├── 02_problem_and_objectives.md
│   ├── 03_data_consolidation_and_standardization.md
│   ├── 04_knowledge_graph_and_authorities.md
│   ├── 05_ner_and_genai_enrichment.md
│   ├── 06_widget_architecture_and_ux.md
│   ├── 07_ranking_algorithm.md
│   └── 08_challenges_and_future_directions.md
├── practice/
│   ├── 01_concept_checks.md
│   ├── 02_system_design_lab.md
│   └── 03_answer_key.md
├── assets/
│   ├── figures/      # Hình trích trực tiếp từ paper
│   └── diagrams/     # Sơ đồ học tập được dựng lại từ nội dung paper
└── source/
    └── paper.pdf
```

## Cách học đề xuất

1. Học lần lượt 8 bài trong `theory/`.
2. Ở mỗi bài, xem hình minh họa trước rồi đọc phần giải thích để nối khái niệm với hệ thống thật.
3. Sau bài 4, làm phần A của `practice/01_concept_checks.md`.
4. Sau bài 7, làm phần B và bài lab thiết kế hệ thống.
5. Chỉ mở `03_answer_key.md` sau khi đã tự trả lời.

## Phạm vi kiến thức

Khóa học giữ đúng phạm vi bài báo: **Linked Data, RDF, Schema.org, BIBFRAME, Dublin Core, authority data, Knowledge Graph, NER, GPT-4 cho entity extraction, widget API, UX khám phá tài nguyên, ranking dựa trên `schema:about` / `schema:mentions`, local entity score, và hướng cải tiến**. Những nội dung không được paper mô tả chi tiết sẽ được ghi rõ là ngoài phạm vi thay vì tự bổ sung như một sự thật của hệ thống NLB.
