# Bài 04 - Xây dựng dataset hai giai đoạn

**Loại:** Lesson  
**Nguồn chính:** PDF trang 4

## 1. Mục tiêu thiết kế

Dataset cần đồng thời có:

- **ecological validity**: bám vào chiến lược thật;
- **diagnostic precision**: đủ cấu trúc để biết mô hình yếu ở loại năng lực nào.

Vì vậy bài báo dùng hai stage bổ sung cho nhau.

## 2. Stage 1 - Real-world Strategy Collection

Pipeline thu thập các alpha factor và factor-based trading strategy từ năm nhóm nguồn. Một extraction agent chuyển tài liệu thành record có cấu trúc gồm:

- tên factor;
- định nghĩa toán học;
- trading logic;
- financial rationale.

Sau deduplication và quality filtering, Stage 1 thu được **3.176 factor-strategy entries**:

| Loại | Số lượng |
|---|---:|
| Single-asset trading | 633 |
| Portfolio management | 2.172 |
| Multi-asset trading | 371 |
| **Tổng** | **3.176** |

Bài báo chỉ dùng **633 single-asset** cho đánh giá hiện tại nhằm cô lập năng lực sinh tín hiệu và xây logic khỏi các yếu tố gây nhiễu của portfolio construction.

## 3. Stage 2 - LLM-augmented Structured Query Generation

Stage 1 có phân bố độ khó tự nhiên, không đồng đều. Stage 2 tạo thêm **270 query** theo taxonomy 3 × 3.

### 3.1 Ba level năng lực

- **Level 1 - Logic Translation:** quy tắc if-then đã được chỉ rõ; nhiệm vụ chính là chuyển thành code đúng.
- **Level 2 - Logic Completion / Parameter Inference:** chiến lược mới là skeleton; mô hình phải suy ra tham số còn thiếu.
- **Level 3 - Goal-Oriented Generation:** chỉ có mục tiêu đầu tư cấp cao; mô hình phải tự thiết kế chiến lược end-to-end.

### 3.2 Ba grade độ khó

- Easy
- Medium
- Hard

Độ khó tăng qua số điều kiện, mức thiếu thông tin và độ sâu của control flow phụ thuộc trạng thái.

## 4. Ý nghĩa của taxonomy 3 × 3

Taxonomy không chỉ tạo "query dễ/khó". Nó tách **loại năng lực nhận thức** khỏi **độ phức tạp trong cùng loại năng lực**, nhờ đó benchmark có thể phát hiện ranking reversal giữa mô hình giỏi dịch logic và mô hình giỏi tổng hợp chiến lược mở.

## 5. Giới hạn nguồn

Bài báo dẫn Appendix D để xem chi tiết prompt và taxonomy. Appendix này không có trong PDF được cung cấp, vì vậy khóa học chỉ trình bày taxonomy ở mức xuất hiện trong phần chính.
