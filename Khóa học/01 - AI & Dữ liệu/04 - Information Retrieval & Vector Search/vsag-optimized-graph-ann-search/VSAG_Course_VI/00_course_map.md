# Bản đồ khóa học

| Bài | Chủ đề | Câu hỏi trung tâm | Hình nên xem |
|---|---|---|---|
| 01 | Bài toán và bottleneck | Vì sao graph ANN nhanh về thuật toán nhưng vẫn chậm ở production? | `didactic_ann_bottlenecks.png` |
| 02 | Kiến trúc VSAG | Ba nhóm tối ưu kết nối thành một search pipeline như thế nào? | `paper_fig01_vsag_framework.png` |
| 03 | Prefetch & deterministic access | Làm sao che giấu latency của random memory access? | `paper_fig02_*`, `paper_fig03_*` |
| 04 | PRS | Vì sao chấp nhận redundancy lại có thể làm hệ thống nhanh hơn? | `paper_fig04_redundancy_ratio.png` |
| 05 | Auto tuning | Tuning tham số nào dễ, tham số nào đắt? | `didactic_parameter_taxonomy.png` |
| 06 | ILP labeling | Làm sao “một index” mô phỏng nhiều cấu hình index? | `paper_fig05_runtime_ilp.png` |
| 07 | Distance | Làm sao giảm chi phí distance mà giữ recall? | `didactic_dual_precision.png` |
| 08 | Thực nghiệm | Tối ưu nào thực sự đóng góp nhiều nhất? | `paper_table05_ablation.png` |
| 09 | Production | VSAG đi vào vector DB phân tán như thế nào? | `didactic_production_case.png` |
| 10 | Thuật toán nâng cao | Pseudocode, construction, proof và Pareto tuning kết nối ra sao? | hình tương ứng trong bài |
| 11 | Tổng hợp | Khi nào nên dùng tư duy VSAG cho hệ thống vector search? | `didactic_vsag_map.png` |

## Chuỗi khái niệm

`Graph traversal → random access → cache miss → prefetch → deterministic access → PRS → parameter classes → edge labels → quantized distance → selective rerank → Recall/QPS → production scaling`
