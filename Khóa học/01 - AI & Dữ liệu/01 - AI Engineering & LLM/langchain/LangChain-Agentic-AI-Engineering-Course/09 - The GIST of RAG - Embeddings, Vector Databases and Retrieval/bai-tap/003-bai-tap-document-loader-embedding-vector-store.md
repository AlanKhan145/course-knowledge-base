# 003 - Bài tập: Document Loader, Embedding và Vector Store

## 1. Mục tiêu

- Giải thích abstraction `Document`.
- Phân tích ảnh hưởng của chunking.
- Mô tả semantic retrieval bằng vector.

## 2. Đề bài

Bạn cần xây dựng một hệ thống hỏi đáp cho dữ liệu đến từ ba nguồn: tệp văn bản, PDF và ghi chú từ một dịch vụ bên ngoài.

## 3. Nhiệm vụ

1. Thiết kế một abstraction để ba nguồn có thể đi qua cùng pipeline.
2. Mô tả dữ liệu cần giữ trong mỗi `Document`.
3. Đề xuất hai chiến lược chunking khác nhau và so sánh ưu/nhược điểm.
4. Giải thích bằng lời cách một query tìm được chunk gần nhất trong vector space.
5. Vẽ luồng từ loader đến vector database.

## 4. Yêu cầu hoàn thành

- [ ] Không viết ba pipeline hoàn toàn riêng biệt cho ba nguồn.
- [ ] Có giải thích semantic similarity.
- [ ] Có phân tích chunk quá nhỏ và chunk quá lớn.
- [ ] Phân biệt embedding model với vector database.
- [ ] Có sơ đồ kiến trúc.

## 5. Gợi ý

Tập trung vào interface chung của dữ liệu sau khi load, thay vì chi tiết parser của từng nguồn.
