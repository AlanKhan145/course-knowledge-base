# Bảng thuật ngữ Anh–Việt

| Thuật ngữ | Giải thích trong khóa học |
|---|---|
| Neural network | Mạng nơ-ron, mô hình gồm nhiều tầng biến đổi học được |
| Gradient descent | Phương pháp cập nhật tham số theo hướng giảm loss |
| Backpropagation | Thuật toán tính gradient qua các lớp bằng quy tắc dây chuyền |
| Data parallelism | Chia minibatch giữa các thiết bị giữ bản sao mô hình |
| Model parallelism | Chia các phần mô hình/tính toán giữa nhiều thiết bị |
| Parameter server | Máy/chức năng lưu và nhận cập nhật tham số phân tán |
| Stale gradient | Gradient được tính từ tham số cũ trong hệ không đồng bộ |
| Representation learning | Học biểu diễn đặc trưng từ dữ liệu |
| Embedding | Vector biểu diễn một token, đoạn văn hoặc đối tượng |
| Seq2Seq | Kiến trúc học ánh xạ một chuỗi sang chuỗi khác |
| LSTM | Mạng tuần tự có cổng quản trị thông tin nhớ |
| Transformer | Kiến trúc sử dụng attention làm cơ chế kết hợp ngữ cảnh chính |
| Q/K/V | Query, Key, Value trong attention |
| Masked-token | Nhiệm vụ đoán token đã che |
| Autoregressive | Sinh token dựa trên tiền tố đã biết |
| ViT | Vision Transformer, Transformer xử lý patch ảnh |
| Dense model | Mô hình kích hoạt các lớp tham số chính cho phần lớn token |
| Sparse / MoE | Mô hình kích hoạt một số expert theo router |
| TPU | Accelerator chuyên dụng cho tensor/machine learning |
| Pathways | Trừu tượng hệ thống cho tính toán phân tán quy mô lớn |
| SDC | Silent Data Corruption, sai lệch kết quả tính toán không báo lỗi |
| Deterministic replay | Chạy lại với trạng thái kiểm soát để kiểm tra tính nhất quán |
| Test-time compute | Tài nguyên tính toán dành cho lúc suy luận |
| Knowledge distillation | Chuyển năng lực teacher lớn sang student nhỏ hơn |
| Soft targets | Phân phối dự đoán giàu thông tin dùng để dạy student |
| SFT | Supervised Fine-Tuning, tinh chỉnh có giám sát |
| RLHF / RLAIF | RL từ phản hồi con người / phản hồi mô hình |
| Verifiable reward | Phần thưởng dựa trên kết quả kiểm tra khách quan |
| Speculative decoding | Dùng draft model đề xuất token và target model xác minh |
| Multimodal | Hệ thống dùng nhiều loại dữ liệu như text, audio, image, video |
| Context window | Phạm vi token đầu vào mô hình có thể xét trong một lượt |
| Reranking | Xếp hạng lại tài liệu đã truy xuất theo độ phù hợp |
| Agent | Hệ thống dùng mô hình và công cụ thực hiện các bước công việc |
| Benchmark leakage | Thông tin test rò rỉ vào quá trình phát triển hoặc train |
| World model | Mô hình mô phỏng quan hệ, biến đổi và trạng thái của môi trường |
| RFC | Request for Comments, tài liệu đề xuất để trao đổi và kiểm chứng |
| Ablation | Thử loại/thay một thành phần để đo đóng góp |
