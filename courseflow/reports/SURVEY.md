# Báo cáo khảo sát kho học liệu

Sinh tự động bởi `npm run scan` lúc 2026-11-12 14:54. Không chỉnh tay — chạy lại scan để cập nhật.

## Content root `khoa-hoc`

| Chỉ số | Giá trị |
|---|---:|
| File Markdown | 126.629 |
| Lĩnh vực (domain) | 11 |
| Chuyên ngành + cấp con | 135 |
| Khóa học có nội dung | 1.224 |
| Module | 13.566 |
| Bài học (tính tiến độ) | 108.779 |
| Tài liệu tổng quan / bổ sung | 4.814 |
| Câu hỏi nhận diện được | 500.316 |
| Câu hỏi chấm tự động được | 494.181 |
| Thư mục bị bỏ qua | 2 |
| Thời gian quét (s) | 2582.0 |

### Tình trạng khóa học

| Trạng thái | Số khóa |
|---|---:|
| Đầy đủ | 1211 |
| Chưa hoàn thiện (ít bài / bài quá ngắn) | 12 |
| Chỉ có tổng quan | 1 |

### Lỗi kiểm tra tự động

| Mã | Số lượng |
|---|---:|
| `course-no-objectives` | 1.170 |
| `course-no-description` | 1.050 |
| `duplicate-title` | 791 |
| `lesson-too-short` | 190 |
| `no-quiz` | 152 |
| `lesson-no-title` | 40 |
| `order-unclear` | 24 |
| `course-no-overview` | 24 |
| `broken-link` | 21 |
| `duplicate-content` | 18 |
| `empty-module-folder` | 13 |
| `course-empty` | 2 |
| `course-overview-only` | 1 |

## Theo lĩnh vực

| Lĩnh vực | Chuyên ngành | Khóa | Bài học | Câu hỏi |
|---|---:|---:|---:|---:|
| AI & Dữ liệu | 13 | 227 | 20.900 | 94.942 |
| Lập trình & Phát triển phần mềm | 12 | 134 | 22.998 | 99.356 |
| Hạ tầng, Mạng & An ninh | 3 | 5 | 633 | 0 |
| Thiết kế & Sáng tạo số | 34 | 396 | 24.657 | 116.150 |
| Phát triển game | 12 | 80 | 7.840 | 36.307 |
| Ngôn ngữ | 37 | 175 | 20.011 | 98.444 |
| Kinh doanh & Quản lý | 2 | 4 | 357 | 0 |
| Sức khỏe & Đời sống | 5 | 63 | 4.006 | 19.362 |
| Viết & Sáng tác | 8 | 60 | 2.533 | 11.749 |
| Tài chính & Đầu tư | 5 | 17 | 2.765 | 13.611 |
| Ngoại hình & Phong cách | 4 | 63 | 2.079 | 10.395 |

## Kiểu cấu trúc khóa học

| Cấu trúc | Số khóa | Ví dụ |
|---|---:|---|
| phẳng (module = thư mục con) | 1151 | (Jetpack, Architecture & More)Advanced Android Bootcamp |
| có thư mục bọc: collapse:modules | 9 | Cơ sinh học thao tác rẽ thường quy của cá Koi |
| có thư mục bọc: collapse:iOS-Developer-Roadmap-Course,collapse:00 - Roadmap.sh iOS Developer Official | 1 | ios-roadmap |
| có thư mục bọc: collapse:hybridsparse_course | 1 | Khóa học: HybridSparse - Hybrid Retrieval ở quy mô lớn |
| có thư mục bọc: collapse:diverse_similarity_search_course | 1 | Khóa học: Graph-Based Algorithms for Diverse Similarity Search |
| có thư mục bọc: collapse:bai-hoc | 1 | Khóa học tiếng Anh theo chủ đề với Oxford Picture Dictionary (Anh–Việt) |
| có thư mục bọc: collapse:Zebrafish-Caudal-Fin-Symmetry-Course | 1 | Zebrafish Caudal Fin Symmetry |
| có thư mục bọc: collapse:Vibe-Coding-UX-UI-Designers-Course | 1 | The Complete Vibe coding for UX/UI Designers |
| có thư mục bọc: collapse:Vertebral-Column-Stiffness-Course | 1 | Vertebral Column Stiffness — Mechanics and Kinematics |
| có thư mục bọc: collapse:VSAG_Course_VI | 1 | Khóa học: VSAG - Tối ưu Graph-based Approximate Nearest Neighbor Search |
| có thư mục bọc: collapse:UX-Design-Roadmap-Course | 1 | ux-design-roadmap |
| có thư mục bọc: collapse:Teleost-Vertebral-Bodies-MicroCT-Course | 1 | Teleost Vertebral Bodies — Micro-CT |
| có thư mục bọc: collapse:Technical-Writer-Roadmap-Course | 1 | technical-writer-roadmap |
| có thư mục bọc: collapse:Software-Architect-Roadmap-Course,collapse:00 - Roadmap.sh Software Architect Official | 1 | software-architect-roadmap |
| có thư mục bọc: collapse:Server-Side-Game-Developer-Roadmap-Course | 1 | server-side-game-developer-roadmap |

## Media trong bài học

| Loại | Số bài |
|---|---:|
| Sơ đồ Mermaid | 2234 |
| Công thức toán | 1913 |
| Hình ảnh | 796 |
| Code block | 3519 |

## Khóa học sâu nhất / lớn nhất

| Khóa | Module | Bài |
|---|---:|---:|
| Algorithmic Trading A-Z with Python, Machine Learning & AWS | 37 | 574 |
| NodeJS - The Complete Guide | 36 | 551 |
| qa-roadmap | 5 | 498 |
| Complete 3D Godot 4 Game Development Course | 18 | 473 |
| Unreal Engine 5 - Gameplay Ability System - Top Down RPG | 33 | 459 |
| ios-roadmap | 9 | 457 |
| The Complete Ruby on Rails Developer Course | 16 | 448 |
| Jumpstart to 2D Game Development: Godot 4 for Beginners | 23 | 439 |
| Data Structures and Algorithms: In-Depth DSA using Python | 52 | 435 |
| The Complete After Effects CC Course: Beginner to Advanced | 49 | 431 |
