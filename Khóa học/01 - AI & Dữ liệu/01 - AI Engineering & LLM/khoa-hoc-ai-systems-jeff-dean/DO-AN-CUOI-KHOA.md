# Đồ án cuối khóa: Thiết kế một hệ thống AI có thể đánh giá được

## 1. Yêu cầu chung

Chọn **một** trong ba phương án. Mục tiêu không phải đạt SOTA mà là đề xuất pipeline hợp lý, có baseline, thử nghiệm và kết luận dựa chứng cứ. Có thể làm với Python, mô hình nhỏ, dữ liệu công khai có quyền sử dụng hoặc bản thiết kế trên giấy nếu không có phần cứng.

## 2. Đề tài A — Tìm kiếm tài liệu và agent kiểm chứng

Thiết kế hệ hỏi đáp từ 20–100 tài liệu đã được cho phép sử dụng. Pipeline: nhập liệu → tạo biểu diễn/truy xuất → rerank → context → sinh câu trả lời → kiểm tra bằng chứng. So sánh ít nhất một baseline retrieval đơn giản với phương án có reranking. Ghi false citations và câu trả lời không có căn cứ.

## 3. Đề tài B — Distillation cho tác vụ nhỏ

Chọn phân loại văn bản hoặc hình ảnh. Xây teacher/student hoặc sử dụng logits teacher đã được cho phép và công bố. So sánh học hard labels, soft targets và kết hợp. Ghi accuracy, kích thước, inference latency và mức sai lệch ở các lớp khó.

## 4. Đề tài C — Đánh giá multi-agent và chi phí suy luận

Thiết kế hệ gồm agent tạo nội dung và agent kiểm chứng. So sánh một lượt sinh với hai vòng sinh–kiểm tra trên 20 tác vụ có tiêu chí đánh giá rõ ràng. Ghi token, latency, tỉ lệ đáp ứng ràng buộc, số vòng lặp và trường hợp thất bại. Mọi thao tác ra bên ngoài phải được người dùng cho phép.

## 5. Deliverables

- `README.md`: bài toán, phạm vi và hướng dẫn tái lập.
- `architecture.md`: sơ đồ các thành phần và luồng dữ liệu.
- `experiments.md`: baseline, cấu hình, chỉ số, giới hạn tài nguyên.
- `results.md`: bảng kết quả, phân tích lỗi, hạn chế và kết luận.
- Code hoặc pseudocode đủ rõ để kiểm tra, nếu bài chọn yêu cầu triển khai.

## 6. Rubric 100 điểm

| Tiêu chí | Điểm |
|---|---:|
| Giải thích đúng bài toán và kiến trúc | 20 |
| Baseline, quy trình thí nghiệm và tái lập | 25 |
| Đánh giá chất lượng, độ trễ và chi phí | 25 |
| Phân tích lỗi, rủi ro, an toàn và giới hạn | 20 |
| Trình bày tài liệu Markdown và sơ đồ rõ ràng | 10 |

## 7. Definition of Done

Đồ án hoàn thành khi có thể giải thích vì sao chọn từng thành phần, chạy hoặc mô tả đủ chi tiết các bước thử, chỉ ra ít nhất ba trường hợp lỗi và phân biệt được kết quả quan sát với giả thuyết chưa kiểm chứng.
