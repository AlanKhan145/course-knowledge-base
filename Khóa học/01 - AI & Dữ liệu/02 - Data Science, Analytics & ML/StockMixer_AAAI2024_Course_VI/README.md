# Khóa học: StockMixer - MLP cho dự báo giá cổ phiếu

Khóa học này được biên soạn trực tiếp từ paper **“StockMixer: A Simple Yet Strong MLP-Based Architecture for Stock Price Forecasting”** của Jinyong Fan và Yanyan Shen, AAAI 2024.

## Mục tiêu

Sau khi học xong, người học có thể:

- phát biểu đúng bài toán dự báo mà StockMixer giải quyết dưới dạng tensor `N × T × F`;
- giải thích ba loại tương quan: **indicator**, **temporal** và **stock**;
- hiểu vì sao MLP-Mixer chuẩn chưa phù hợp trực tiếp với dữ liệu chứng khoán;
- suy luận tensor shape qua Indicator Mixing, Multi-scale Time Mixing và Stock Mixing;
- đọc được loss kết hợp regression + ranking;
- giải thích các metric IC, RIC, Precision@N và Sharpe Ratio;
- phân tích bảng benchmark, ablation và sensitivity của paper;
- viết được blueprint PyTorch bám sát công thức paper mà không tự bịa các chi tiết chưa được tác giả công bố.

## Cấu trúc thư mục

- `theory/`: 11 bài lý thuyết từ nền tảng đến tái hiện mô hình.
- `practice/`: bài tập shape, công thức, phân tích kết quả và thiết kế implementation.
- `images/`: hình/bảng gốc quan trọng và sơ đồ học tập.
- `data/`: các bảng số liệu chính ở dạng CSV.
- `cheatsheets/`: tờ tóm tắt nhanh.
- `source/`: paper gốc và ghi chú nguồn.

## Lộ trình đề xuất

1. Học bài 01-03 để hiểu bài toán và tổng quan kiến trúc.
2. Học bài 04-06 để nắm ba mixing blocks.
3. Học bài 07-10 để hiểu huấn luyện, benchmark và kết luận thực nghiệm.
4. Làm `practice/01` đến `practice/04`.
5. Dùng bài 11 làm checklist khi tự code lại.

> Phạm vi: nội dung khoa học trong course bám theo paper. Những chỗ paper không cung cấp chi tiết implementation cụ thể được đánh dấu rõ, không tự suy đoán thành “sự thật của paper”.
