# Khóa học: HybridSparse - Hybrid Retrieval ở quy mô lớn

Khóa học này được biên soạn trực tiếp từ paper **“HybridSparse: An End-to-End Hybrid Framework for Efficient Large-Scale Retrieval”** (SIGIR 2026). Mục tiêu là biến paper ngắn 5 trang thành một lộ trình học có thể đọc độc lập, theo thứ tự từ bài toán retrieval, kiến trúc mô hình, hàm loss, serving, đánh giá, đến triển khai production.

> Phạm vi: nội dung kỹ thuật, số liệu, phương trình và kết luận đều bám theo paper gốc. Các phần “Diễn giải” dùng lời giải thích để giúp học, nhưng không bổ sung kết quả thực nghiệm ngoài paper.

## Cấu trúc thư mục

```text
hybridsparse_course/
├── README.md
├── lessons/
│   ├── 01_boi_canh_va_bai_toan.md
│   ├── 02_kien_truc_encoder_thong_nhat.md
│   ├── 03_co_training_va_hybrid_optimization.md
│   ├── 04_online_retrieval_va_unified_index.md
│   ├── 05_public_benchmark_evaluation.md
│   ├── 06_production_experiments_va_ab_test.md
│   └── 07_tong_ket_thiet_ke.md
├── exercises/
│   ├── 01_bai_tap_on_tap.md
│   └── 02_dap_an_goi_y.md
├── assets/
│   └── 8 ảnh trích từ paper, theo từng nội dung
├── GLOSSARY.md
├── REFERENCES.md
└── source/
    └── HybridSparse_SIGIR_2026.pdf
```

## Lộ trình học đề xuất

1. **Bài 1 - Bối cảnh và bài toán:** hiểu vì sao sparse và dense đều có điểm mạnh/yếu, và vì sao hybrid retrieval khó ở bước candidate generation.
2. **Bài 2 - Unified neural encoder:** học shared backbone, semantic branch, lexical branch và SPLADE-style sparse embedding.
3. **Bài 3 - Co-training & hybrid optimization:** đi qua toàn bộ Eq. 5-13, hybrid score regularization và consistency distillation.
4. **Bài 4 - Online retrieval:** hiểu OneSparse unified index, virtual terms, SPTAG/SPANN và multi-way merge.
5. **Bài 5 - Public benchmark:** đọc bảng MSMARCO / MS Web Search và hiểu ý nghĩa MRR, Recall.
6. **Bài 6 - Production:** đọc offline production metrics, ablation và A/B test RPM.
7. **Bài 7 - Tổng kết thiết kế:** chốt các quyết định kiến trúc và giới hạn paper.
8. **Bài tập:** kiểm tra khái niệm, đọc phương trình, phân tích hệ thống và số liệu.

## Kết quả đầu ra sau khóa học

Sau khi hoàn thành, người học có thể:

- phân biệt sparse lexical retrieval, dense semantic retrieval và hybrid retrieval;
- mô tả kiến trúc HybridSparse từ document/query encoder đến serving;
- giải thích tác dụng của `L_sem`, `L_lex`, `L_flops`, `L_reg`, `L_dis` và `L_hy`;
- mô tả cách dense embedding được chuyển thành virtual terms để dùng chung inverted index;
- đọc và diễn giải kết quả benchmark, ablation và online A/B test;
- nhận diện rõ phần nào là đóng góp của paper và phần nào paper chưa cung cấp đủ chi tiết để tái lập hoàn toàn.

## Cách dùng ảnh

Mỗi lesson liên kết đến ảnh trong `../assets/`. Đây là ảnh trích trực tiếp từ bản PDF render, giữ nguyên sơ đồ, phương trình và bảng số liệu để tiện đối chiếu với phần giảng giải.
