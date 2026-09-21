# Khóa học: Graph-Based Algorithms for Diverse Similarity Search

Khóa học này chuyển nội dung của paper **“Graph-Based Algorithms for Diverse Similarity Search”** (ICML 2025) thành một lộ trình học độc lập bằng tiếng Việt. Trọng tâm không phải là đọc lại paper theo thứ tự trang, mà là hiểu vấn đề, mô hình hóa toán học, thuật toán, chứng minh, heuristic triển khai và cách đọc kết quả thực nghiệm.

## Mục tiêu học tập

Sau khi hoàn thành khóa học, người học có thể:

1. Phân biệt **nearest neighbor**, **approximate nearest neighbor (ANN)** và **diverse similarity search**.
2. Giải thích vì sao pipeline `retrieve nhiều -> rerank để đa dạng` có thể tốn latency.
3. Hiểu khái niệm **colorful**, **k'-colorful**, **C-diverse** và **(k', C)-diverse**.
4. Hiểu vai trò của **doubling dimension** và **aspect ratio Δ** trong phân tích độ phức tạp.
5. Đọc và giải thích thuật toán indexing/search cho **Colorful NN**.
6. Hiểu ý tưởng tổng quát hóa sang metric đa dạng `ρ`, cùng hai bài toán **primal** và **dual**.
7. Hiểu cách paper biến thuật toán có chứng minh thành heuristic gần với DiskANN thực tế.
8. Đọc đúng các biểu đồ **recall–latency**, phân tích ablation của tham số đa dạng `m`.
9. Thiết kế một prototype diverse retrieval cho RAG, search, recommendation hoặc ads.

## Cấu trúc thư mục

```text
diverse_similarity_search_course/
├── README.md
├── COURSE_MAP.md
├── GLOSSARY.md
├── lessons/
│   ├── 01_problem_and_motivation.md
│   ├── 02_mathematical_foundations.md
│   ├── 03_colorful_index_construction.md
│   ├── 04_colorful_search_and_guarantee.md
│   ├── 05_general_diversity_primal_dual.md
│   ├── 06_practical_diverse_diskann.md
│   ├── 07_experiments_and_ablation.md
│   └── 08_diskann_recap_and_system_design.md
├── exercises/
│   ├── 01_concept_checks.md
│   ├── 02_algorithm_reasoning.md
│   └── 03_implementation_lab.md
├── solutions/
│   ├── 01_concept_checks_solutions.md
│   └── 02_algorithm_reasoning_solutions.md
├── assets/images/
│   └── 21 ảnh/figure/algorithm được trích từ paper
└── source/
    ├── anand25a.pdf
    └── paper-extracted.txt
```

## Lộ trình đề xuất

- **Buổi 1:** Lesson 1–2 — hiểu bài toán và ký hiệu.
- **Buổi 2:** Lesson 3 — index construction cho Colorful NN.
- **Buổi 3:** Lesson 4 — greedy search và chứng minh hội tụ.
- **Buổi 4:** Lesson 5 — tổng quát hóa với metric `ρ`, primal/dual.
- **Buổi 5:** Lesson 6 — heuristic thực tế trên DiskANN.
- **Buổi 6:** Lesson 7 — thí nghiệm, recall–latency, ablation.
- **Buổi 7:** Lesson 8 + lab — ghép thành hệ thống retrieval hoàn chỉnh.

## Cách học hiệu quả

Mỗi lesson nên học theo vòng lặp:

1. Đọc **Mục tiêu**.
2. Tự giải thích lại các khái niệm mà không nhìn tài liệu.
3. Đọc pseudocode trong ảnh đi kèm.
4. Tự viết lại pseudocode bằng lời hoặc code.
5. Làm phần **Câu hỏi tự kiểm tra** cuối bài.
6. Sau Lesson 6, bắt đầu `exercises/03_implementation_lab.md`.

## Phạm vi nguồn

Nội dung cốt lõi, định nghĩa, thuật toán, các theorem và số liệu thí nghiệm trong khóa học bám theo paper gốc. Các phần “trực giác”, “cách học”, “bài tập” và “gợi ý triển khai” là phần sư phạm hóa để giúp người học hiểu và thực hành, không phải kết quả mới của paper.
