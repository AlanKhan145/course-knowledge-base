# Lộ trình, checklist và rubric đánh giá

## 1. Tiến độ module

| Module | Kết quả kiểm chứng |
| --- | --- |
| M01 — Tổng quan hệ thống GenAI Full Stack | Giải thích sơ đồ offline/online và kiểm soát coding agent. |
| M02 — Yêu cầu khách hàng và dữ liệu SEC | Có brief + manifest + bảng QA một hồ sơ SEC. |
| M03 — Stack công nghệ và kiến trúc | Có sơ đồ kiến trúc và quy tắc monorepo. |
| M04 — Kế hoạch và cấu hình môi trường | Có Supabase project test + env mẫu không rò secret. |
| M05 — FastAPI, SQLAlchemy và schema | Có endpoint health, ERD và Alembic migration test. |
| M06 — React frontend, Auth và Chat | Có login, chat history và account isolation test. |
| M07 — Document ingestion, chunking và embeddings | Có Markdown đã kiểm tra bảng + chunks + embeddings lặp lại an toàn. |
| M08 — Hybrid retrieval, agent và grounding | Có hybrid retrieval đánh giá 10 câu hỏi và mode thiếu bằng chứng. |
| M09 — Tích hợp chat UI và citations | Có chat API với status thật và citation viewer mở đúng nguồn. |
| M10 — Hoàn thiện UI và readiness cho pilot | Có test matrix pilot và request id trong log. |
| M11 — Docker và Railway deployment | Có Docker build và smoke test trên domain Railway. |
| M12 — Kiểm thử toàn hệ thống và walkthrough | Có trace của một câu hỏi end-to-end và regression tests. |
| M13 — Cải tiến chất lượng và vận hành production | Có báo cáo evaluation/hardening backlog có ưu tiên và baseline. |

## 2. Rubric chấm đồ án cuối khóa

| Nhóm tiêu chí | Trọng số | Quan sát cụ thể |
| --- | ---: | --- |
| Kiến trúc và bảo mật | 20% | Tách client/server secret, owner authorization, cấu trúc module rõ |
| Ingestion và dữ liệu | 20% | Manifest, kiểm định bảng, metadata, idempotency |
| Retrieval và grounding | 25% | Bộ câu hỏi chuẩn, hybrid ranking, nguồn đúng cho claim, từ chối khi thiếu evidence |
| Frontend + UX | 15% | Session, history, loading/error states, citation viewer |
| Deployment và vận hành | 10% | Logs, config, smoke tests, rollback note |
| Tài liệu và kiểm thử | 10% | Cách chạy, test matrix, giới hạn và báo cáo kết quả |

## 3. Những sai lầm cần tránh

- Không dùng cùng một dữ kiện chưa kiểm chứng để vừa xây prompt vừa làm evaluation ground truth.
- Không đưa bất kỳ API key/service-role key hay password thật lên Git và Google Drive.
- Không để mô hình tự tuyên bố “đã xác minh” mà không có citation tới tài liệu/chunk hợp lệ.
- Không coi 10/10 câu ví dụ đúng là bằng chứng ứng dụng an toàn cho mọi nhà phân tích.
- Không tự động chạy migration nguy hiểm hoặc deploy production bằng agent không có review.
