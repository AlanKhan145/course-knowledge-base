# Bài tập tổng hợp - M3-Embedding

Không mở file đáp án trước khi hoàn thành phần A-C.

## Phần A - Concept check

1. Ba chữ M trong M3 đại diện cho ba chiều nào?
2. Dense branch lấy representation từ vị trí nào của hidden states?
3. Sparse branch tính term weight bằng phép biến đổi gì trước khi tạo score?
4. Multi-vector branch dùng dạng interaction nào?
5. Vì sao sparse branch yếu hơn rõ trên MKQA?
6. Ba nguồn dữ liệu lớn của M3 là gì?
7. MultiLongDoc được tạo để bù khoảng trống nào?
8. Vì sao authors shuffle các segment trong long text?
9. Self-knowledge distillation lấy teacher từ đâu?
10. Branch nào hưởng lợi nhiều nhất từ SKD theo ablation?
11. Group-by-length giảm chi phí nào?
12. Split-batch giải quyết vấn đề memory thế nào?
13. Cross-GPU broadcasting giúp tăng yếu tố gì trong contrastive training?
14. MCLS chèn `[CLS]` với khoảng cách bao nhiêu tokens trong thí nghiệm?
15. MCLS tạo final embedding như thế nào?

## Phần B - Bài tập tính toán

### Bài 1 - Hybrid score

Cho:

- `s_dense = 0.74`
- `s_lex = 0.62`
- `s_mul = 0.80`

Tính `s_rank` với cấu hình MIRACL `w1=1, w2=0.3, w3=1`.

### Bài 2 - So sánh ablation

Từ bảng SKD:

- Sparse có SKD: 53.9
- Sparse không SKD: 36.7

Tính mức tăng tuyệt đối. Sau đó giải thích vì sao con số này quan trọng hơn việc chỉ nhìn M3 All = 71.5.

### Bài 3 - Split-batch

Ở max length 8192, batch per device tăng từ 6 lên 130. Tính hệ số tăng xấp xỉ và đối chiếu với claim “hơn 20 lần”.

### Bài 4 - Long-doc data

Dense MLDR đầy đủ = 52.5; bỏ long-doc fine-tune = 41.2; thêm MCLS = 45.0. Tính:

1. mất bao nhiêu điểm khi bỏ long-doc fine-tuning;
2. MCLS phục hồi bao nhiêu điểm;
3. còn cách model đầy đủ bao nhiêu điểm.

## Phần C - Phân tích tình huống

### Tình huống 1 - Cross-lingual QA

Query tiếng Việt, corpus tiếng Anh. Chọn thứ tự ưu tiên giữa dense, sparse, multi-vector và giải thích bằng kết quả MKQA.

### Tình huống 2 - Search tài liệu 7000-8000 tokens

Nêu bốn thành phần của paper mà bạn cho là bắt buộc phải quan tâm khi training.

### Tình huống 3 - Compute hạn chế

Không có tài nguyên fine-tune long documents. M3 paper đề xuất giải pháp gì? Nêu cơ chế và giới hạn của nó dựa trên ablation.

### Tình huống 4 - Muốn chứng minh SKD hữu ích

Bạn sẽ thiết kế ablation như thế nào để tách ảnh hưởng của SKD khỏi ảnh hưởng của model size và data?

## Phần D - Bài tập đọc bảng

Dựa vào các ảnh trong `assets/`:

1. Tìm mode tốt nhất của M3 trên MIRACL, MKQA, MLDR, NarrativeQA.
2. Tìm benchmark nơi sparse kém nhất tương đối so với dense và giải thích.
3. Tìm benchmark nơi sparse vượt dense mạnh nhất.
4. So sánh `Fine-tune`, `RetroMAE + Fine-tune`, `RetroMAE + Unsup + Fine-tune`.
5. Từ Figure 5, mô tả xu hướng nDCG@10 khi maximum sequence length tăng.

## Phần E - Capstone

Thiết kế retrieval system cho một thư viện nội dung có:

- tài liệu tiếng Việt, Anh, Trung, Nhật;
- document từ 100 đến 8000 tokens;
- query có thể khác ngôn ngữ document;
- cần latency hợp lý.

Yêu cầu: mô tả candidate stage, reranking stage, representation nào được lưu, long-doc strategy, cách validation hybrid weights và metric đánh giá. Mọi lựa chọn phải gắn với bằng chứng/quan sát trong paper.
