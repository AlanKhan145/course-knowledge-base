# Lab 02 — Hybrid Retrieval Scoring

## Mục tiêu

Tạo ranking function đơn giản trên 20 document mẫu.

## Thành phần điểm

- semantic cosine similarity;
- authority score;
- novelty score;
- behavior alignment.

## Thực hiện

1. Chuẩn hóa mỗi component về cùng khoảng [0,1].
2. Thử ba bộ $\lambda$ khác nhau: fact search, exploratory search, personalized search.
3. So sánh top-5 giữa ba cấu hình.
4. Ghi lại trường hợp ranking thay đổi mạnh nhất và giải thích vì sao.

## Câu hỏi bắt buộc

Nếu behavior score tăng nhưng semantic relevance thấp, hệ thống có nên đưa document lên top không? Đề xuất guardrail.
