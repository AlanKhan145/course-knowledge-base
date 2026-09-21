# Bài 11 - Tổng hợp: các nguyên tắc thiết kế rút ra từ VSAG

## 1. Tối ưu hệ thống phải đi xuyên các tầng

VSAG cho thấy bottleneck của vector retrieval không nằm ở một tầng duy nhất:

- algorithmic graph traversal;
- CPU cache hierarchy;
- memory layout;
- numeric precision;
- parameter search;
- production resource shape.

Một cải tiến đơn lẻ thường bị giới hạn bởi bottleneck còn lại.

## 2. Data movement có thể quan trọng hơn arithmetic

Khi cache miss rate rất cao, giảm một vài instruction số học không đủ. Prefetch và layout có thể tạo speedup bằng cách khiến CPU có dữ liệu đúng lúc.

Đây là lý do performance engineering phải đo hardware counters chứ không chỉ wall-clock time.

## 3. Precision là một ngân sách

Không cần mọi candidate có cùng precision. Low precision phù hợp cho screening số lượng lớn; high precision dành cho decision boundary gần top-k.

Mẫu này xuất hiện ở nhiều hệ thống: coarse stage → candidate stage → precise rerank.

## 4. Tuning cost phải là một phần của design

Một parameter cho kết quả tốt nhưng cần rebuild hàng chục giờ có thể không thực dụng khi workload thay đổi. VSAG thiết kế index representation để làm tuning rẻ hơn, thay vì chỉ viết tuner thông minh hơn bên ngoài.

## 5. Redundancy có thể là tối ưu

Trong hệ thống, “duplicate data” không mặc định là xấu. Nếu redundancy đổi random access thành sequential access, tổng chi phí có thể giảm.

PRS là một ví dụ điển hình của space-time trade-off.

## 6. Query difficulty không đồng đều

Một fixed search budget được chọn cho worst-case query sẽ lãng phí tài nguyên trên phần lớn query dễ. Query-adaptive control cho phép phân phối compute theo difficulty.

## 7. Đọc benchmark bằng cơ chế

Khi thấy speedup, luôn hỏi:

- recall có được giữ ở cùng mức không?
- dataset có dimension/scale nào?
- CPU và memory configuration là gì?
- speedup đến từ quantization, cache, tuning hay kết hợp?
- ablation có xác nhận bottleneck intermediate không?

## 8. Checklist khi áp dụng tư duy VSAG

- Đo cache miss và memory bandwidth.
- Tách cost thành số lần operation × cost mỗi operation.
- Phân loại parameters theo lifecycle cost.
- Xác định parameter nào có thể runtime-adaptive.
- Kiểm tra có thể lưu compressed/redundant representation để đổi access pattern hay không.
- Dùng re-ranking để tập trung expensive precision ở candidate quan trọng.
- Benchmark trên recall target cố định.
- Kiểm tra cả million-scale và production-scale nếu mục tiêu là triển khai lớn.

![Bản đồ tổng hợp](../images/didactic_vsag_map.png)

## Kết thúc khóa học

VSAG là một ví dụ điển hình về **co-design giữa algorithm và systems**. Giá trị lớn nhất để mang sang dự án khác không chỉ là các kỹ thuật riêng lẻ, mà là phương pháp: xác định bottleneck đo được → thiết kế representation phù hợp → tune theo đúng tầng → xác minh bằng ablation và scale test.

**Đối chiếu nguồn:** §1-§9 và các appendix liên quan.
